import { randomBytes } from "node:crypto";
import { chmod, lstat, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import sharp from "sharp";
import { acquireMediaOperationLock, resolveDatabasePath, resolveMediaRoot, resolveRestoreMarkerPath, runMediaBackup } from "./media-backup.mjs";

const LIMIT_BYTES = 8 * 1024 * 1024;
const LIMIT_PIXELS = 25_000_000;
const TOTAL_MEDIA_BYTES = 250 * 1024 * 1024;
const VARIANT_WIDTHS = [320, 960, 1600];
const LEASE_MS = 10 * 60_000;
const PENDING_USER_DELETION_GRACE_MS = 5 * 60_000;
const POLL_MS = Math.max(100, Number(process.env.MEDIA_WORKER_POLL_MS) || 1_000);
const workerId = `${os.hostname()}:${process.pid}:${randomBytes(6).toString("hex")}`;
let stopping = false;

function contained(root, relative) {
  const base = path.resolve(root);
  const target = path.resolve(base, relative);
  if (target !== base && !target.startsWith(`${base}${path.sep}`)) throw new Error(`Unsafe media path: ${relative}`);
  return target;
}

function sniffMime(buffer) {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "image/jpeg";
  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return "image/webp";
  return null;
}

function openDatabase() {
  const database = new Database(resolveDatabasePath());
  database.pragma("journal_mode = WAL");
  database.pragma("busy_timeout = 5000");
  return database;
}

function journalSchemaReady(database) {
  return Boolean(database.prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'journal_jobs'").get());
}

function recoverStaleJobs(database) {
  const now = Date.now();
  return database.prepare(`
    UPDATE journal_jobs SET status = 'queued', worker_id = '', started_at = NULL,
      lease_expires_at = NULL, available_at = ?, error = 'worker lease expired; retrying'
    WHERE kind = 'process_upload' AND status = 'running' AND COALESCE(lease_expires_at, 0) <= ?
  `).run(now, now).changes;
}

function claimJob(database) {
  database.exec("BEGIN IMMEDIATE");
  try {
    recoverStaleJobs(database);
    const now = Date.now();
    const job = database.prepare(`
      SELECT j.*, a.source_mime, a.source_bytes
      FROM journal_jobs j
      LEFT JOIN journal_assets a ON a.id = j.asset_id
      WHERE j.kind = 'process_upload' AND j.status = 'queued' AND j.available_at <= ?
      ORDER BY j.created_at ASC LIMIT 1
    `).get(now);
    if (!job) {
      database.exec("COMMIT");
      return null;
    }
    const updated = database.prepare(`
      UPDATE journal_jobs SET status = 'running', worker_id = ?, attempt_count = attempt_count + 1,
        started_at = ?, lease_expires_at = ?, error = NULL
      WHERE id = ? AND status = 'queued'
    `).run(workerId, now, now + LEASE_MS, job.id);
    database.exec("COMMIT");
    return updated.changes ? { ...job, attempt_count: Number(job.attempt_count) + 1 } : null;
  } catch (cause) {
    database.exec("ROLLBACK");
    throw cause;
  }
}

function finishEntryProcessing(database, entryId) {
  database.prepare(`
    UPDATE journal_entries SET
      status = CASE WHEN status = 'processing' AND NOT EXISTS (
        SELECT 1 FROM journal_jobs WHERE entry_id = ? AND kind = 'process_upload' AND status IN ('queued', 'running')
      ) THEN 'draft' ELSE status END,
      updated_at = ?
    WHERE id = ?
  `).run(entryId, Date.now(), entryId);
}

async function failJob(database, job, cause) {
  const message = cause instanceof Error ? cause.message.slice(0, 1_000) : "image processing failed";
  database.exec("BEGIN IMMEDIATE");
  try {
    database.prepare("UPDATE journal_assets SET status = 'failed', ready_at = NULL WHERE id = ? AND status = 'processing'").run(job.asset_id);
    database.prepare(`
      UPDATE journal_jobs SET status = 'failed', error = ?, finished_at = ?, lease_expires_at = NULL, worker_id = ''
      WHERE id = ? AND worker_id = ?
    `).run(message, Date.now(), job.id, workerId);
    finishEntryProcessing(database, job.entry_id);
    database.exec("COMMIT");
  } catch (transactionCause) {
    database.exec("ROLLBACK");
    throw transactionCause;
  } finally {
    if (job.tmp_storage_key) await rm(contained(path.join(resolveMediaRoot(), "tmp"), String(job.tmp_storage_key)), { force: true });
  }
}

async function processJob(database, job) {
  if (!job.asset_id || !job.entry_id || !job.tmp_storage_key || !job.source_mime) {
    await failJob(database, job, new Error("Upload job no longer has an attached asset"));
    return;
  }
  const mediaRoot = resolveMediaRoot();
  const inputPath = contained(path.join(mediaRoot, "tmp"), String(job.tmp_storage_key));
  const inputInfo = await stat(inputPath);
  if (inputInfo.size <= 0 || inputInfo.size > LIMIT_BYTES || inputInfo.size !== Number(job.source_bytes)) {
    await failJob(database, job, new Error("Uploaded file size is invalid"));
    return;
  }
  const source = await readFile(inputPath);
  const detectedMime = sniffMime(source);
  if (!detectedMime || detectedMime !== job.source_mime) {
    await failJob(database, job, new Error("Uploaded file signature does not match its MIME type"));
    return;
  }

  let metadata;
  try {
    metadata = await sharp(source, { animated: true, limitInputPixels: LIMIT_PIXELS }).metadata();
  } catch {
    await failJob(database, job, new Error("Image is corrupt or exceeds the pixel limit"));
    return;
  }
  if (!metadata.width || !metadata.height || metadata.width * metadata.height > LIMIT_PIXELS) {
    await failJob(database, job, new Error("Image exceeds the 25 megapixel limit"));
    return;
  }
  if ((metadata.pages ?? 1) !== 1) {
    await failJob(database, job, new Error("Animated images are not supported"));
    return;
  }

  const workRoot = contained(path.join(mediaRoot, "tmp"), `work/${job.id}`);
  await rm(workRoot, { recursive: true, force: true });
  await mkdir(workRoot, { recursive: true, mode: 0o750 });
  const variants = [];
  try {
    for (const requestedWidth of VARIANT_WIDTHS) {
      const output = await sharp(source, { limitInputPixels: LIMIT_PIXELS })
        .rotate()
        .toColourspace("srgb")
        .resize({ width: requestedWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toBuffer({ resolveWithObject: true });
      const temporaryPath = path.join(workRoot, `${requestedWidth}.webp`);
      await writeFile(temporaryPath, output.data, { mode: 0o600 });
      variants.push({ requestedWidth, temporaryPath, width: output.info.width, height: output.info.height, bytes: output.info.size, key: `${job.asset_id}/${requestedWidth}.webp` });
    }

    const release = await acquireMediaOperationLock({ waitMs: 5 * 60_000 });
    try {
      const current = database.prepare("SELECT status FROM journal_assets WHERE id = ?").get(job.asset_id);
      if (!current || current.status !== "processing") throw new Error("Upload asset was deleted while processing");
      const used = database.prepare(`
        SELECT
          COALESCE((SELECT SUM(source_bytes) FROM journal_assets WHERE user_id = ? AND status = 'processing' AND id <> ?), 0) +
          COALESCE((SELECT SUM(v.byte_size) FROM journal_asset_variants v JOIN journal_assets a ON a.id = v.asset_id WHERE a.user_id = ? AND a.id <> ?), 0)
          AS bytes
      `).get(job.user_id, job.asset_id, job.user_id, job.asset_id);
      const generatedBytes = variants.reduce((total, variant) => total + variant.bytes, 0);
      if (Number(used.bytes) + generatedBytes > TOTAL_MEDIA_BYTES) throw new Error("Account media quota exceeded after image processing");
      const privateDirectory = contained(path.join(mediaRoot, "private"), String(job.asset_id));
      await mkdir(privateDirectory, { recursive: true, mode: 0o750 });
      for (const variant of variants) {
        const destination = contained(path.join(mediaRoot, "private"), variant.key);
        await rm(destination, { force: true });
        await rename(variant.temporaryPath, destination);
        await chmod(destination, 0o640);
      }

      database.exec("BEGIN IMMEDIATE");
      try {
        database.prepare(`
          UPDATE journal_assets SET source_mime = ?, width = ?, height = ?, sha256 = NULL, status = 'ready', ready_at = ?
          WHERE id = ? AND status = 'processing'
        `).run(detectedMime, metadata.width, metadata.height, Date.now(), job.asset_id);
        const insert = database.prepare(`
          INSERT INTO journal_asset_variants (asset_id, revision_id, scope, requested_width, width, height, byte_size, storage_key, created_at)
          VALUES (?, '', 'private', ?, ?, ?, ?, ?, ?)
          ON CONFLICT(asset_id, revision_id, scope, requested_width) DO UPDATE SET
            width = excluded.width, height = excluded.height, byte_size = excluded.byte_size,
            storage_key = excluded.storage_key, created_at = excluded.created_at
        `);
        for (const variant of variants) insert.run(job.asset_id, variant.requestedWidth, variant.width, variant.height, variant.bytes, variant.key, Date.now());
        database.prepare(`
          UPDATE journal_jobs SET status = 'succeeded', finished_at = ?, lease_expires_at = NULL, worker_id = ''
          WHERE id = ? AND worker_id = ?
        `).run(Date.now(), job.id, workerId);
        finishEntryProcessing(database, job.entry_id);
        database.exec("COMMIT");
      } catch (cause) {
        database.exec("ROLLBACK");
        throw cause;
      }
    } finally {
      await release();
    }
    await rm(inputPath, { force: true });
  } catch (cause) {
    await failJob(database, job, cause);
  } finally {
    await rm(workRoot, { recursive: true, force: true });
  }
}

async function cleanupFinishedUploads(database) {
  const rows = database.prepare(`
    SELECT tmp_storage_key FROM journal_jobs
    WHERE kind = 'process_upload' AND status IN ('succeeded', 'failed') AND tmp_storage_key <> ''
  `).all();
  for (const row of rows) await rm(contained(path.join(resolveMediaRoot(), "tmp"), String(row.tmp_storage_key)), { force: true });
}

async function optionalInfo(target) {
  try { return await lstat(target); }
  catch (cause) {
    if (cause && cause.code === "ENOENT") return null;
    throw cause;
  }
}

async function normalizePublicTree(directory) {
  await chmod(directory, 0o755);
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await normalizePublicTree(target);
    else if (entry.isFile()) await chmod(target, 0o644);
    else await rm(target, { recursive: true, force: true });
  }
}

export async function reconcilePublicMedia(database, { blockPublicRoot = false, chmodPublicRoot = chmod } = {}) {
  const release = await acquireMediaOperationLock({ waitMs: 60_000 });
  const mediaRoot = resolveMediaRoot();
  const publicRoot = path.join(mediaRoot, "public");
  const quarantineRoot = path.join(mediaRoot, "private", "quarantine");
  let reconciled = false;
  try {
    await mkdir(publicRoot, { recursive: true, mode: 0o755 });
    await mkdir(quarantineRoot, { recursive: true, mode: 0o750 });
    if (blockPublicRoot) await chmodPublicRoot(publicRoot, 0o700);

    const cutoff = Date.now() - PENDING_USER_DELETION_GRACE_MS;
    database.prepare(`
      DELETE FROM deletion_tombstones
      WHERE entity_type = 'pending_user_media' AND entity_id IN (
        SELECT entity_id FROM deletion_tombstones pending
        JOIN "user" ON "user".id = pending.entity_id
        WHERE pending.entity_type = 'pending_user_media'
        GROUP BY entity_id HAVING MIN(pending.deleted_at) <= ?
      )
    `).run(cutoff);
    const pendingUsers = new Set(database.prepare(`
      SELECT DISTINCT entity_id FROM deletion_tombstones
      WHERE entity_type = 'pending_user_media'
    `).all().map((row) => String(row.entity_id)));
    const entries = database.prepare(`
      SELECT user_id, status, published_revision_id FROM journal_entries
      WHERE published_revision_id IS NOT NULL AND published_revision_id <> ''
    `).all();
    const published = new Set();
    const quarantined = new Set();
    for (const row of entries) {
      const revisionId = String(row.published_revision_id);
      if (row.status === "published" && !pendingUsers.has(String(row.user_id))) published.add(revisionId);
      else if (row.status === "hidden" || pendingUsers.has(String(row.user_id))) quarantined.add(revisionId);
    }

    for (const entry of await readdir(publicRoot, { withFileTypes: true })) {
      const revisionId = entry.name;
      const source = contained(publicRoot, revisionId);
      if (!entry.isDirectory() || entry.isSymbolicLink()) {
        await rm(source, { recursive: true, force: true });
        continue;
      }
      if (published.has(revisionId)) continue;
      await chmod(source, 0o700);
      if (quarantined.has(revisionId)) {
        const destination = contained(quarantineRoot, revisionId);
        if (await optionalInfo(destination)) await rm(source, { recursive: true, force: true });
        else await rename(source, destination);
      } else {
        await rm(source, { recursive: true, force: true });
      }
    }

    for (const revisionId of published) {
      const destination = contained(publicRoot, revisionId);
      if (!(await optionalInfo(destination))) {
        const source = contained(quarantineRoot, revisionId);
        const sourceInfo = await optionalInfo(source);
        if (sourceInfo?.isDirectory() && !sourceInfo.isSymbolicLink()) {
          await chmod(source, 0o700);
          await rename(source, destination);
        }
      }
      const destinationInfo = await optionalInfo(destination);
      if (destinationInfo?.isDirectory() && !destinationInfo.isSymbolicLink()) await normalizePublicTree(destination);
    }

    for (const entry of await readdir(quarantineRoot, { withFileTypes: true })) {
      const revisionId = entry.name;
      if (quarantined.has(revisionId)) continue;
      const target = contained(quarantineRoot, revisionId);
      if (!published.has(revisionId) || await optionalInfo(contained(publicRoot, revisionId))) {
        await rm(target, { recursive: true, force: true });
      }
    }
    reconciled = true;
  } finally {
    if (blockPublicRoot && reconciled) await chmodPublicRoot(publicRoot, 0o755);
    await release();
  }
}

async function replayDeletionTombstones(database) {
  database.prepare(`
    UPDATE deletion_tombstones SET entity_type = 'user_media'
    WHERE entity_type = 'pending_user_media' AND NOT EXISTS (
      SELECT 1 FROM "user" WHERE "user".id = deletion_tombstones.entity_id
    )
  `).run();
  const rows = database.prepare(`
    SELECT id, storage_scope, storage_key FROM deletion_tombstones
    WHERE replayed_at IS NULL AND entity_type <> 'pending_user_media'
    ORDER BY deleted_at LIMIT 1000
  `).all();
  if (!rows.length) return 0;
  const release = await acquireMediaOperationLock({ waitMs: 60_000 });
  let replayed = 0;
  try {
    const update = database.prepare("UPDATE deletion_tombstones SET replayed_at = ? WHERE id = ? AND replayed_at IS NULL");
    for (const row of rows) {
      const key = String(row.storage_key ?? "");
      const isTmp = key.startsWith("tmp/");
      const actualKey = isTmp ? key.slice(4) : key;
      const inferred = key.split("/").length >= 3 ? "public" : "private";
      const scope = row.storage_scope === "public" || row.storage_scope === "private" ? row.storage_scope : inferred;
      const targets = isTmp
        ? [contained(path.join(resolveMediaRoot(), "tmp"), actualKey)]
        : scope === "public"
          ? [contained(path.join(resolveMediaRoot(), "public"), actualKey), contained(path.join(resolveMediaRoot(), "private", "quarantine"), actualKey)]
          : [contained(path.join(resolveMediaRoot(), "private"), actualKey)];
      let removed = true;
      for (const target of targets) {
        try { await rm(target, { force: true }); }
        catch { removed = false; }
      }
      if (removed) {
        update.run(Date.now(), row.id);
        replayed += 1;
      }
    }
  } finally {
    await release();
  }
  return replayed;
}

async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main() {
  const mediaRoot = resolveMediaRoot();
  if (await optionalInfo(resolveRestoreMarkerPath())) {
    throw new Error(`Media restore is incomplete; resolve ${resolveRestoreMarkerPath()} before starting the worker`);
  }
  for (const scope of ["private", "public", "tmp"]) await mkdir(path.join(mediaRoot, scope), { recursive: true, mode: scope === "public" ? 0o755 : 0o750 });
  await chmod(mediaRoot, 0o711);
  if (mediaRoot === "/var/lib/quiz-platform/media") await chmod(path.dirname(mediaRoot), 0o711);
  await chmod(path.join(mediaRoot, "private"), 0o750);
  await chmod(path.join(mediaRoot, "tmp"), 0o750);
  await chmod(path.join(mediaRoot, "public"), 0o700);
  const database = openDatabase();
  try {
    let waitingLogged = false;
    while (!stopping && !journalSchemaReady(database)) {
      if (!waitingLogged) {
        console.log("media worker waiting for application database migrations");
        waitingLogged = true;
      }
      await sleep(POLL_MS);
    }
    if (stopping) return;
    recoverStaleJobs(database);
    await cleanupFinishedUploads(database);
    await reconcilePublicMedia(database, { blockPublicRoot: true });
    await replayDeletionTombstones(database);
    let nextBackupCheck = 0;
    let nextTombstoneReplay = Date.now() + 60_000;
    let nextMediaReconcile = Date.now() + 60_000;
    while (!stopping) {
      if (Date.now() >= nextBackupCheck) {
        nextBackupCheck = Date.now() + 60 * 60_000;
        try { await runMediaBackup(); }
        catch (cause) { console.error("media backup failed", cause); }
      }
      if (Date.now() >= nextTombstoneReplay) {
        nextTombstoneReplay = Date.now() + 60_000;
        try { await replayDeletionTombstones(database); }
        catch (cause) { console.error("deletion tombstone replay failed", cause); }
      }
      if (Date.now() >= nextMediaReconcile) {
        nextMediaReconcile = Date.now() + 60_000;
        try { await reconcilePublicMedia(database); }
        catch (cause) { console.error("public media reconciliation failed", cause); }
      }
      const job = claimJob(database);
      if (job) await processJob(database, job);
      else await sleep(POLL_MS);
    }
  } finally {
    database.close();
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => { stopping = true; });
  main().catch((cause) => {
    console.error("media worker failed", cause);
    process.exitCode = 1;
  });
}
