import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";

const DAY_MS = 24 * 60 * 60 * 1000;
const RETENTION_MS = 30 * DAY_MS;
const LOCK_STALE_MS = 2 * 60 * 60 * 1000;

export function resolveDatabasePath() {
  const configured = process.env.DATABASE_PATH?.trim();
  return configured ? path.resolve(configured) : path.resolve(process.cwd(), ".data", "quiz-platform.sqlite");
}

export function resolveMediaRoot() {
  const configured = process.env.MEDIA_ROOT?.trim();
  if (configured) return path.resolve(configured);
  return process.env.NODE_ENV === "production"
    ? "/var/lib/quiz-platform/media"
    : path.resolve(process.cwd(), ".data", "media");
}

export function resolveBackupRoot() {
  const configured = process.env.BACKUP_ROOT?.trim();
  if (configured) return path.resolve(configured);
  return process.env.NODE_ENV === "production"
    ? "/var/lib/quiz-platform/backups"
    : path.resolve(process.cwd(), ".data", "backups");
}

export function resolveRestoreMarkerPath() {
  const mediaRoot = resolveMediaRoot();
  return path.join(path.dirname(mediaRoot), `.${path.basename(mediaRoot)}.restore-in-progress`);
}

function contained(root, relative) {
  const base = path.resolve(root);
  const target = path.resolve(base, relative);
  if (target !== base && !target.startsWith(`${base}${path.sep}`)) throw new Error(`Unsafe media path: ${relative}`);
  return target;
}

async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function acquireMediaOperationLock({ waitMs = 60_000 } = {}) {
  const mediaRoot = resolveMediaRoot();
  const tmpRoot = path.join(mediaRoot, "tmp");
  const lockPath = path.join(tmpRoot, ".media-operation-lock");
  await mkdir(tmpRoot, { recursive: true, mode: 0o750 });
  const deadline = Date.now() + waitMs;
  while (true) {
    try {
      await mkdir(lockPath);
      await writeFile(path.join(lockPath, "owner.json"), JSON.stringify({ pid: process.pid, createdAt: Date.now() }), { mode: 0o600 });
      return async () => { await rm(lockPath, { recursive: true, force: true }); };
    } catch (cause) {
      if (!(cause && cause.code === "EEXIST")) throw cause;
      try {
        const info = await stat(lockPath);
        if (Date.now() - info.mtimeMs > LOCK_STALE_MS) {
          await rm(lockPath, { recursive: true, force: true });
          continue;
        }
      } catch (lockCause) {
        if (!(lockCause && lockCause.code === "ENOENT")) throw lockCause;
        continue;
      }
      if (Date.now() >= deadline) throw new Error("Timed out waiting for the media operation lock");
      await sleep(250);
    }
  }
}

async function copyVerified(source, destination, expectedBytes) {
  const sourceInfo = await stat(source);
  if (expectedBytes >= 0 && sourceInfo.size !== expectedBytes) throw new Error(`Media size mismatch: ${source}`);
  await mkdir(path.dirname(destination), { recursive: true, mode: 0o750 });
  await copyFile(source, destination);
  const destinationInfo = await stat(destination);
  if (destinationInfo.size !== sourceInfo.size) throw new Error(`Incomplete media snapshot: ${destination}`);
}

async function pruneBackups(backupRoot, now) {
  let entries = [];
  try { entries = await readdir(backupRoot, { withFileTypes: true }); }
  catch (cause) {
    if (cause && cause.code === "ENOENT") return;
    throw cause;
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    const directory = path.join(backupRoot, entry.name);
    try {
      const manifest = JSON.parse(await readFile(path.join(directory, "manifest.json"), "utf8"));
      if (Number(manifest.createdAt) < now - RETENTION_MS) await rm(directory, { recursive: true, force: true });
    } catch {
      // Unknown directories are operator-owned and are not removed.
    }
  }
}

export async function runMediaBackup({ force = false } = {}) {
  const databasePath = resolveDatabasePath();
  const mediaRoot = resolveMediaRoot();
  const backupRoot = resolveBackupRoot();
  const now = Date.now();
  const day = new Date(now).toISOString().slice(0, 10);
  await mkdir(backupRoot, { recursive: true, mode: 0o750 });
  if (!force) {
    const existing = await readdir(backupRoot, { withFileTypes: true });
    if (existing.some((entry) => entry.isDirectory() && entry.name.startsWith(`${day}T`))) {
      await pruneBackups(backupRoot, now);
      return { created: false, reason: "already-created-today" };
    }
  }

  const release = await acquireMediaOperationLock({ waitMs: 5 * 60_000 });
  const stamp = new Date(now).toISOString().replaceAll(":", "-").replace(".", "-");
  const staging = path.join(backupRoot, `.snapshot-${stamp}-${process.pid}`);
  const destination = path.join(backupRoot, stamp);
  let database;
  let snapshot;
  try {
    await mkdir(staging, { recursive: true, mode: 0o750 });
    await mkdir(path.join(staging, "media"), { recursive: true, mode: 0o750 });
    database = new Database(databasePath, { readonly: true, fileMustExist: true });
    await database.backup(path.join(staging, "app.sqlite3"));
    snapshot = new Database(path.join(staging, "app.sqlite3"), { fileMustExist: true });

    const pendingJobs = snapshot.prepare(`
      SELECT id, asset_id, entry_id FROM journal_jobs
      WHERE kind = 'process_upload' AND status IN ('queued', 'running')
    `).all();
    if (pendingJobs.length) {
      snapshot.exec("BEGIN IMMEDIATE");
      try {
        snapshot.prepare(`
          UPDATE journal_assets SET status = 'failed', ready_at = NULL
          WHERE id IN (
            SELECT asset_id FROM journal_jobs
            WHERE kind = 'process_upload' AND status IN ('queued', 'running')
          )
        `).run();
        snapshot.prepare(`
          UPDATE journal_jobs SET status = 'failed',
            error = 'Upload source is not retained in backups; re-upload after restore',
            tmp_storage_key = '', worker_id = '', started_at = NULL,
            lease_expires_at = NULL, finished_at = ?
          WHERE kind = 'process_upload' AND status IN ('queued', 'running')
        `).run(now);
        snapshot.prepare(`
          UPDATE journal_entries SET status = 'draft', updated_at = ?
          WHERE status = 'processing' AND NOT EXISTS (
            SELECT 1 FROM journal_jobs
            WHERE journal_jobs.entry_id = journal_entries.id
              AND kind = 'process_upload' AND status IN ('queued', 'running')
          )
        `).run(now);
        snapshot.exec("COMMIT");
      } catch (cause) {
        snapshot.exec("ROLLBACK");
        throw cause;
      }
    }

    const variants = snapshot.prepare(`
      SELECT v.scope, v.storage_key, v.byte_size, e.status AS entry_status
      FROM journal_asset_variants v
      LEFT JOIN journal_revisions r ON r.id = v.revision_id AND v.revision_id <> ''
      LEFT JOIN journal_entries e ON e.id = r.entry_id
      ORDER BY v.scope, v.storage_key
    `).all();
    let mediaFiles = 0;
    for (const row of variants) {
      const storageKey = String(row.storage_key);
      const hidden = row.scope === "public" && row.entry_status === "hidden";
      const sourceScope = hidden ? path.join("private", "quarantine") : String(row.scope);
      const source = contained(mediaRoot, path.join(sourceScope, storageKey));
      const target = contained(path.join(staging, "media"), path.join(sourceScope, storageKey));
      await copyVerified(source, target, Number(row.byte_size));
      mediaFiles += 1;
    }

    const manifest = {
      version: 1,
      createdAt: now,
      databaseFile: "app.sqlite3",
      mediaRoot: "media",
      mediaFiles,
      pendingUploadJobs: 0,
      discardedPendingUploadJobs: pendingJobs.length,
    };
    await writeFile(path.join(staging, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, { mode: 0o640 });
    snapshot.close();
    snapshot = undefined;
    database.close();
    database = undefined;
    await rename(staging, destination);
    await pruneBackups(backupRoot, now);
    return { created: true, path: destination, mediaFiles };
  } catch (cause) {
    await rm(staging, { recursive: true, force: true });
    throw cause;
  } finally {
    snapshot?.close();
    database?.close();
    await release();
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  runMediaBackup({ force: process.argv.includes("--force") })
    .then((result) => console.log(JSON.stringify(result)))
    .catch((cause) => { console.error(cause); process.exitCode = 1; });
}
