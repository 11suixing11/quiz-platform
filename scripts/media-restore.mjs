import { chmod, cp, lstat, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import Database from "better-sqlite3";
import { resolveDatabasePath, resolveMediaRoot, resolveRestoreMarkerPath } from "./media-backup.mjs";

function argument(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : "";
}

function contained(root, relative) {
  const base = path.resolve(root);
  const target = path.resolve(base, relative);
  if (target !== base && !target.startsWith(`${base}${path.sep}`)) throw new Error(`Unsafe restore path: ${relative}`);
  return target;
}

async function replayTombstones(database, mediaRoot) {
  database.prepare(`
    UPDATE deletion_tombstones SET entity_type = 'user_media'
    WHERE entity_type = 'pending_user_media' AND NOT EXISTS (
      SELECT 1 FROM "user" WHERE "user".id = deletion_tombstones.entity_id
    )
  `).run();
  const rows = database.prepare(`
    SELECT id, storage_scope, storage_key FROM deletion_tombstones
    WHERE replayed_at IS NULL AND entity_type <> 'pending_user_media' ORDER BY deleted_at
  `).all();
  const update = database.prepare("UPDATE deletion_tombstones SET replayed_at = ? WHERE id = ? AND replayed_at IS NULL");
  let replayed = 0;
  for (const row of rows) {
    const key = String(row.storage_key ?? "");
    const isTmp = key.startsWith("tmp/");
    const actualKey = isTmp ? key.slice(4) : key;
    const inferred = key.split("/").length >= 3 ? "public" : "private";
    const scope = row.storage_scope === "public" || row.storage_scope === "private" ? row.storage_scope : inferred;
    await rm(contained(path.join(mediaRoot, isTmp ? "tmp" : scope), actualKey), { force: true });
    if (!isTmp && scope === "public") await rm(contained(path.join(mediaRoot, "private", "quarantine"), actualKey), { force: true });
    update.run(Date.now(), row.id);
    replayed += 1;
  }
  return replayed;
}

async function normalizePublicPermissions(directory) {
  await chmod(directory, 0o755);
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await normalizePublicPermissions(target);
    else if (entry.isFile()) await chmod(target, 0o644);
  }
}

async function optionalInfo(target) {
  try { return await lstat(target); }
  catch (cause) {
    if (cause && cause.code === "ENOENT") return null;
    throw cause;
  }
}

async function validateSnapshotTree(directory) {
  const info = await lstat(directory);
  if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Snapshot media path is not a directory: ${directory}`);
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Snapshot media must not contain symbolic links: ${target}`);
    if (entry.isDirectory()) await validateSnapshotTree(target);
    else if (!entry.isFile()) throw new Error(`Snapshot media contains an unsupported file type: ${target}`);
  }
}

async function stageMedia(snapshotMediaRoot, stagingMediaRoot) {
  await rm(stagingMediaRoot, { recursive: true, force: true });
  await mkdir(stagingMediaRoot, { recursive: true, mode: 0o711 });
  for (const scope of ["private", "public", "tmp"]) {
    const source = path.join(snapshotMediaRoot, scope);
    const destination = path.join(stagingMediaRoot, scope);
    const sourceInfo = await optionalInfo(source);
    if (!sourceInfo) {
      await mkdir(destination, { recursive: true, mode: scope === "public" ? 0o755 : 0o750 });
      continue;
    }
    if (!sourceInfo.isDirectory() || sourceInfo.isSymbolicLink()) {
      throw new Error(`Snapshot media scope is not a directory: ${source}`);
    }
    await validateSnapshotTree(source);
    await cp(source, destination, { recursive: true, force: false, errorOnExist: true });
  }
  await chmod(stagingMediaRoot, 0o711);
  await chmod(path.join(stagingMediaRoot, "private"), 0o750);
  await chmod(path.join(stagingMediaRoot, "tmp"), 0o750);
  // Keep the staged public tree inaccessible to Caddy until the matching
  // database has been activated. A crash between the two renames then fails
  // closed instead of exposing files from a partially restored snapshot.
  await chmod(path.join(stagingMediaRoot, "public"), 0o700);
}

async function validateStagedMedia(database, mediaRoot) {
  const variants = database.prepare(`
    SELECT v.scope, v.storage_key, v.byte_size, e.status AS entry_status
    FROM journal_asset_variants v
    LEFT JOIN journal_revisions r ON r.id = v.revision_id AND v.revision_id <> ''
    LEFT JOIN journal_entries e ON e.id = r.entry_id
  `).all();
  for (const row of variants) {
    const hidden = row.scope === "public" && row.entry_status === "hidden";
    const sourceScope = hidden ? path.join("private", "quarantine") : String(row.scope);
    const target = contained(mediaRoot, path.join(sourceScope, String(row.storage_key)));
    const info = await lstat(target);
    if (!info.isFile() || info.isSymbolicLink() || info.size !== Number(row.byte_size)) {
      throw new Error(`Snapshot media does not match its database record: ${target}`);
    }
  }
}

async function moveAside(target, backup) {
  const info = await optionalInfo(target);
  if (!info) return false;
  await rm(backup, { recursive: true, force: true });
  await rename(target, backup);
  return true;
}

async function main() {
  if (process.env.RESTORE_CONFIRM !== "1") throw new Error("Set RESTORE_CONFIRM=1 after stopping the application service");
  const snapshotRoot = path.resolve(argument("--snapshot"));
  if (!argument("--snapshot")) throw new Error("Usage: node scripts/media-restore.mjs --snapshot <snapshot-directory>");
  const manifest = JSON.parse(await readFile(path.join(snapshotRoot, "manifest.json"), "utf8"));
  if (manifest.version !== 1 || manifest.databaseFile !== "app.sqlite3" || manifest.mediaRoot !== "media") {
    throw new Error("Unsupported or incomplete snapshot manifest");
  }
  const snapshotDatabaseInfo = await lstat(path.join(snapshotRoot, "app.sqlite3"));
  const snapshotMediaInfo = await lstat(path.join(snapshotRoot, "media"));
  if (!snapshotDatabaseInfo.isFile() || snapshotDatabaseInfo.isSymbolicLink()) throw new Error("Snapshot database is not a regular file");
  if (!snapshotMediaInfo.isDirectory() || snapshotMediaInfo.isSymbolicLink()) throw new Error("Snapshot media root is not a directory");

  const databasePath = resolveDatabasePath();
  const mediaRoot = resolveMediaRoot();
  const lockPath = path.join(mediaRoot, "tmp", ".media-operation-lock");
  try {
    await lstat(lockPath);
    throw new Error("Media operation lock exists; stop the application and remove only a verified stale lock before restoring");
  } catch (cause) {
    if (!(cause && cause.code === "ENOENT")) throw cause;
  }

  const token = `${process.pid}-${Date.now()}`;
  const temporaryDatabase = `${databasePath}.restore-${token}`;
  const databaseBackup = `${databasePath}.pre-restore-${token}`;
  const walBackup = `${databasePath}-wal.pre-restore-${token}`;
  const shmBackup = `${databasePath}-shm.pre-restore-${token}`;
  const mediaParent = path.dirname(mediaRoot);
  const mediaName = path.basename(mediaRoot);
  const stagingMediaRoot = path.join(mediaParent, `.${mediaName}.restore-${token}`);
  const mediaBackupRoot = path.join(mediaParent, `.${mediaName}.pre-restore-${token}`);
  const restoreMarker = resolveRestoreMarkerPath();
  await mkdir(path.dirname(databasePath), { recursive: true, mode: 0o750 });
  await mkdir(mediaParent, { recursive: true, mode: 0o711 });
  await rm(temporaryDatabase, { force: true });
  await cp(path.join(snapshotRoot, "app.sqlite3"), temporaryDatabase, { force: false, errorOnExist: true });
  await stageMedia(path.join(snapshotRoot, "media"), stagingMediaRoot);

  const database = new Database(temporaryDatabase);
  let replayed = 0;
  try {
    const integrity = database.pragma("integrity_check", { simple: true });
    if (integrity !== "ok") throw new Error(`Snapshot database integrity check failed: ${integrity}`);
    database.prepare(`
      UPDATE journal_jobs SET status = 'queued', worker_id = '', started_at = NULL,
        lease_expires_at = NULL, available_at = ?
      WHERE kind = 'process_upload' AND status = 'running'
    `).run(Date.now());
    replayed = await replayTombstones(database, stagingMediaRoot);
    await validateStagedMedia(database, stagingMediaRoot);
    database.pragma("journal_mode = DELETE");
  } finally {
    database.close();
  }

  let mediaBackedUp = false;
  let mediaActivated = false;
  let databaseBackedUp = false;
  let walBackedUp = false;
  let shmBackedUp = false;
  let databaseActivated = false;
  await writeFile(restoreMarker, `${JSON.stringify({ snapshot: snapshotRoot, token, startedAt: Date.now() })}\n`, { mode: 0o600 });
  try {
    mediaBackedUp = await moveAside(mediaRoot, mediaBackupRoot);
    await rename(stagingMediaRoot, mediaRoot);
    mediaActivated = true;
    if (mediaRoot === "/var/lib/quiz-platform/media") await chmod(path.dirname(mediaRoot), 0o711);

    walBackedUp = await moveAside(`${databasePath}-wal`, walBackup);
    shmBackedUp = await moveAside(`${databasePath}-shm`, shmBackup);
    databaseBackedUp = await moveAside(databasePath, databaseBackup);
    await rename(temporaryDatabase, databasePath);
    databaseActivated = true;
    await chmod(databasePath, 0o640);
    await normalizePublicPermissions(path.join(mediaRoot, "public"));
  } catch (cause) {
    let rollbackCause;
    try {
      if (databaseActivated) await rm(databasePath, { force: true });
      if (databaseBackedUp) await rename(databaseBackup, databasePath);
      if (walBackedUp) await rename(walBackup, `${databasePath}-wal`);
      if (shmBackedUp) await rename(shmBackup, `${databasePath}-shm`);
      if (mediaActivated) await rm(mediaRoot, { recursive: true, force: true });
      if (mediaBackedUp) await rename(mediaBackupRoot, mediaRoot);
      await rm(restoreMarker, { force: true });
    } catch (rollbackError) {
      rollbackCause = rollbackError;
    }
    if (rollbackCause) throw new AggregateError([cause, rollbackCause], "Restore failed and automatic rollback was incomplete");
    throw cause;
  }

  await rm(restoreMarker, { force: true });
  for (const obsolete of [mediaBackupRoot, databaseBackup, walBackup, shmBackup]) {
    try { await rm(obsolete, { recursive: true, force: true }); }
    catch (cause) { console.error(`Restored successfully but could not remove ${obsolete}`, cause); }
  }
  console.log(JSON.stringify({ restored: true, snapshot: snapshotRoot, tombstonesReplayed: replayed }));
}

main().catch((cause) => { console.error(cause); process.exitCode = 1; });
