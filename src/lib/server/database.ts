import "server-only";

import { mkdirSync } from "node:fs";
import { dirname, isAbsolute, resolve, sep } from "node:path";
import Database from "better-sqlite3";

export type SQLiteDatabase = Database.Database;
type DatabaseRow = Record<string, unknown>;

const DEFAULT_DATABASE_PATH = resolve(process.cwd(), ".data", "quiz-platform.sqlite");

declare global {
  var __knowYourselfDatabase: SQLiteDatabase | undefined;
}

function databasePath() {
  const configured = process.env.DATABASE_PATH?.trim();
  if (!configured) return DEFAULT_DATABASE_PATH;
  // Avoid resolving an operator-controlled value through node:path during the
  // build; Turbopack otherwise traces the entire project into standalone.
  return isAbsolute(configured) ? configured : `${process.cwd()}${sep}${configured}`;
}

/** Create only application-owned tables. Better Auth creates its own schema. */
function migrate(database: SQLiteDatabase) {
  database.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA busy_timeout = 5000;

    CREATE TABLE IF NOT EXISTS quiz_attempts (
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      id TEXT NOT NULL,
      test_id TEXT NOT NULL,
      result_json TEXT NOT NULL,
      answers_json TEXT NOT NULL,
      test_name TEXT,
      test_name_en TEXT,
      completed_at INTEGER NOT NULL,
      created_at INTEGER NOT NULL,
      PRIMARY KEY (user_id, id)
    );

    CREATE INDEX IF NOT EXISTS quiz_attempts_user_time_idx
      ON quiz_attempts(user_id, completed_at DESC);

    CREATE TABLE IF NOT EXISTS bookmarks (
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      test_id TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      PRIMARY KEY (user_id, test_id)
    );

    CREATE TABLE IF NOT EXISTS preferences (
      user_id TEXT PRIMARY KEY NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      lang TEXT NOT NULL DEFAULT 'zh',
      theme TEXT NOT NULL DEFAULT 'system',
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS profiles (
      user_id TEXT PRIMARY KEY NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      avatar TEXT NOT NULL DEFAULT '',
      bio TEXT NOT NULL DEFAULT '',
      tags_json TEXT NOT NULL DEFAULT '[]',
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS quiz_sessions (
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      test_id TEXT NOT NULL,
      answers_json TEXT NOT NULL,
      current_question INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      expires_at INTEGER NOT NULL,
      PRIMARY KEY (user_id, test_id)
    );

    CREATE INDEX IF NOT EXISTS quiz_sessions_expiry_idx
      ON quiz_sessions(user_id, expires_at);

    CREATE TABLE IF NOT EXISTS sync_revisions (
      user_id TEXT PRIMARY KEY NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      revision INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS community_posts (
      id TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      attempt_id TEXT NOT NULL,
      test_id TEXT NOT NULL,
      test_name TEXT NOT NULL,
      test_name_en TEXT NOT NULL,
      result_title TEXT,
      result_title_en TEXT,
      dimensions_json TEXT NOT NULL DEFAULT '[]',
      reflection TEXT NOT NULL,
      show_result_type INTEGER NOT NULL DEFAULT 1,
      show_dimensions INTEGER NOT NULL DEFAULT 0,
      show_avatar INTEGER NOT NULL DEFAULT 1,
      allow_comments INTEGER NOT NULL DEFAULT 1,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      deleted_at INTEGER,
      UNIQUE (user_id, attempt_id)
    );

    CREATE INDEX IF NOT EXISTS community_posts_feed_idx
      ON community_posts(deleted_at, created_at DESC);

    CREATE TABLE IF NOT EXISTS community_reactions (
      post_id TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      created_at INTEGER NOT NULL,
      PRIMARY KEY (post_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS community_comments (
      id TEXT PRIMARY KEY NOT NULL,
      post_id TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      parent_id TEXT REFERENCES community_comments(id) ON DELETE CASCADE,
      body TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      deleted_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS community_comments_post_idx
      ON community_comments(post_id, created_at ASC);

    CREATE TABLE IF NOT EXISTS community_reports (
      id TEXT PRIMARY KEY NOT NULL,
      reporter_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      post_id TEXT REFERENCES community_posts(id) ON DELETE CASCADE,
      comment_id TEXT REFERENCES community_comments(id) ON DELETE CASCADE,
      reason TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      CHECK ((post_id IS NOT NULL AND comment_id IS NULL) OR (post_id IS NULL AND comment_id IS NOT NULL))
    );

    CREATE UNIQUE INDEX IF NOT EXISTS community_reports_post_unique_idx
      ON community_reports(reporter_id, post_id) WHERE post_id IS NOT NULL;

    CREATE UNIQUE INDEX IF NOT EXISTS community_reports_comment_unique_idx
      ON community_reports(reporter_id, comment_id) WHERE comment_id IS NOT NULL;

    CREATE TABLE IF NOT EXISTS journal_entries (
      id TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      title TEXT NOT NULL DEFAULT '',
      body TEXT NOT NULL DEFAULT '',
      content_language TEXT NOT NULL DEFAULT 'zh',
      allow_comments INTEGER NOT NULL DEFAULT 1,
      draft_revision INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'processing', 'published', 'hidden', 'unpublished', 'deleted')),
      published_revision_id TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      published_at INTEGER,
      hidden_at INTEGER,
      unpublished_at INTEGER,
      deleted_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS journal_entries_owner_idx
      ON journal_entries(user_id, deleted_at, updated_at DESC);

    CREATE INDEX IF NOT EXISTS journal_entries_public_idx
      ON journal_entries(status, published_at DESC);

    CREATE TABLE IF NOT EXISTS journal_revisions (
      id TEXT PRIMARY KEY NOT NULL,
      entry_id TEXT NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
      revision_number INTEGER NOT NULL,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      content_language TEXT NOT NULL,
      allow_comments INTEGER NOT NULL,
      draft_revision INTEGER NOT NULL DEFAULT 0,
      author_display_name TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      UNIQUE (entry_id, revision_number)
    );

    CREATE TABLE IF NOT EXISTS journal_assets (
      id TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      source_mime TEXT NOT NULL,
      source_bytes INTEGER NOT NULL,
      width INTEGER,
      height INTEGER,
      sha256 TEXT,
      status TEXT NOT NULL DEFAULT 'processing'
        CHECK (status IN ('processing', 'ready', 'failed', 'deleted')),
      created_at INTEGER NOT NULL,
      ready_at INTEGER,
      deleted_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS journal_assets_owner_idx
      ON journal_assets(user_id, status, created_at DESC);

    CREATE TABLE IF NOT EXISTS journal_entry_assets (
      entry_id TEXT NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
      asset_id TEXT NOT NULL REFERENCES journal_assets(id) ON DELETE CASCADE,
      position INTEGER NOT NULL,
      caption TEXT NOT NULL DEFAULT '',
      alt_text TEXT NOT NULL DEFAULT '',
      decorative INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (entry_id, asset_id),
      UNIQUE (entry_id, position)
    );

    CREATE TABLE IF NOT EXISTS journal_revision_assets (
      revision_id TEXT NOT NULL REFERENCES journal_revisions(id) ON DELETE CASCADE,
      asset_id TEXT NOT NULL REFERENCES journal_assets(id),
      position INTEGER NOT NULL,
      caption TEXT NOT NULL DEFAULT '',
      alt_text TEXT NOT NULL DEFAULT '',
      decorative INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (revision_id, asset_id),
      UNIQUE (revision_id, position)
    );

    CREATE TABLE IF NOT EXISTS journal_asset_variants (
      asset_id TEXT NOT NULL REFERENCES journal_assets(id) ON DELETE CASCADE,
      revision_id TEXT NOT NULL DEFAULT '',
      scope TEXT NOT NULL CHECK (scope IN ('private', 'public')),
      requested_width INTEGER NOT NULL CHECK (requested_width IN (320, 960, 1600)),
      width INTEGER NOT NULL,
      height INTEGER NOT NULL,
      byte_size INTEGER NOT NULL,
      storage_key TEXT NOT NULL UNIQUE,
      created_at INTEGER NOT NULL,
      PRIMARY KEY (asset_id, revision_id, scope, requested_width)
    );

    CREATE TABLE IF NOT EXISTS journal_jobs (
      id TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      entry_id TEXT REFERENCES journal_entries(id) ON DELETE CASCADE,
      asset_id TEXT REFERENCES journal_assets(id) ON DELETE SET NULL,
      kind TEXT NOT NULL CHECK (kind IN ('process_upload', 'publish_copy', 'delete_media', 'cleanup')),
      status TEXT NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'running', 'succeeded', 'failed')),
      error TEXT,
      tmp_storage_key TEXT NOT NULL DEFAULT '',
      attempt_count INTEGER NOT NULL DEFAULT 0,
      available_at INTEGER NOT NULL DEFAULT 0,
      lease_expires_at INTEGER,
      worker_id TEXT NOT NULL DEFAULT '',
      created_at INTEGER NOT NULL,
      started_at INTEGER,
      finished_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS journal_jobs_status_idx
      ON journal_jobs(status, created_at ASC);

    CREATE TABLE IF NOT EXISTS journal_upload_batches (
      id TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      entry_id TEXT NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
      remaining_assets INTEGER NOT NULL CHECK (remaining_assets BETWEEN 0 AND 6),
      created_at INTEGER NOT NULL,
      expires_at INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS journal_upload_batches_expiry_idx
      ON journal_upload_batches(user_id, expires_at);

    CREATE TABLE IF NOT EXISTS journal_reactions (
      entry_id TEXT NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      created_at INTEGER NOT NULL,
      PRIMARY KEY (entry_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS journal_comments (
      id TEXT PRIMARY KEY NOT NULL,
      entry_id TEXT NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      parent_id TEXT REFERENCES journal_comments(id) ON DELETE CASCADE,
      body TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'visible'
        CHECK (status IN ('visible', 'hidden', 'deleted')),
      created_at INTEGER NOT NULL,
      deleted_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS journal_comments_entry_idx
      ON journal_comments(entry_id, status, created_at ASC);

    CREATE TABLE IF NOT EXISTS journal_reports (
      id TEXT PRIMARY KEY NOT NULL,
      reporter_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      entry_id TEXT REFERENCES journal_entries(id) ON DELETE CASCADE,
      comment_id TEXT REFERENCES journal_comments(id) ON DELETE CASCADE,
      reason TEXT NOT NULL,
      details TEXT NOT NULL DEFAULT '',
      created_at INTEGER NOT NULL,
      CHECK ((entry_id IS NOT NULL AND comment_id IS NULL) OR (entry_id IS NULL AND comment_id IS NOT NULL))
    );

    CREATE UNIQUE INDEX IF NOT EXISTS journal_reports_entry_unique_idx
      ON journal_reports(reporter_id, entry_id) WHERE entry_id IS NOT NULL;

    CREATE UNIQUE INDEX IF NOT EXISTS journal_reports_comment_unique_idx
      ON journal_reports(reporter_id, comment_id) WHERE comment_id IS NOT NULL;

    CREATE TABLE IF NOT EXISTS user_governance (
      user_id TEXT PRIMARY KEY NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      status TEXT NOT NULL DEFAULT 'normal'
        CHECK (status IN ('normal', 'no_upload', 'read_only', 'suspended', 'banned')),
      reason TEXT NOT NULL DEFAULT '',
      updated_by TEXT,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS moderation_audit_log (
      id TEXT PRIMARY KEY NOT NULL,
      actor_type TEXT NOT NULL CHECK (actor_type IN ('admin', 'system')),
      actor_id TEXT,
      action TEXT NOT NULL,
      target_type TEXT NOT NULL,
      target_id TEXT NOT NULL,
      reason TEXT NOT NULL DEFAULT '',
      metadata_json TEXT NOT NULL DEFAULT '{}',
      created_at INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS moderation_audit_target_idx
      ON moderation_audit_log(target_type, target_id, created_at DESC);

    CREATE TABLE IF NOT EXISTS aggregate_events (
      event_name TEXT NOT NULL,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL DEFAULT '',
      value TEXT NOT NULL DEFAULT '',
      event_day TEXT NOT NULL,
      event_count INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (event_name, entity_type, entity_id, value, event_day)
    );

    CREATE TABLE IF NOT EXISTS content_complaints (
      id TEXT PRIMARY KEY NOT NULL,
      kind TEXT NOT NULL CHECK (kind IN ('privacy', 'copyright')),
      target_url TEXT NOT NULL,
      entry_id TEXT REFERENCES journal_entries(id) ON DELETE SET NULL,
      contact TEXT NOT NULL DEFAULT '',
      details TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'reviewing', 'resolved', 'rejected')),
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS deletion_tombstones (
      id TEXT PRIMARY KEY NOT NULL,
      entity_type TEXT NOT NULL,
      entity_id TEXT NOT NULL,
      storage_scope TEXT NOT NULL DEFAULT '' CHECK (storage_scope IN ('', 'private', 'public')),
      storage_key TEXT NOT NULL DEFAULT '',
      deleted_at INTEGER NOT NULL,
      replayed_at INTEGER
    );

    CREATE INDEX IF NOT EXISTS deletion_tombstones_pending_idx
      ON deletion_tombstones(replayed_at, deleted_at ASC);

    CREATE TABLE IF NOT EXISTS journal_daily_usage (
      user_id TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      usage_day TEXT NOT NULL,
      upload_count INTEGER NOT NULL DEFAULT 0,
      publish_count INTEGER NOT NULL DEFAULT 0,
      uploaded_bytes INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY (user_id, usage_day)
    );

    CREATE TABLE IF NOT EXISTS request_rate_limits (
      rate_key TEXT NOT NULL,
      window_started_at INTEGER NOT NULL,
      attempt_count INTEGER NOT NULL DEFAULT 0,
      updated_at INTEGER NOT NULL,
      PRIMARY KEY (rate_key, window_started_at)
    );

    CREATE INDEX IF NOT EXISTS request_rate_limits_updated_idx
      ON request_rate_limits(updated_at);
  `);

  const communityPostColumns = database.prepare("PRAGMA table_info(community_posts)").all() as Array<{ name: string }>;
  if (!communityPostColumns.some((column) => column.name === "moderation_status")) {
    database.exec("ALTER TABLE community_posts ADD COLUMN moderation_status TEXT NOT NULL DEFAULT 'visible' CHECK (moderation_status IN ('visible', 'hidden', 'removed'))");
  }
  if (!communityPostColumns.some((column) => column.name === "hidden_at")) {
    database.exec("ALTER TABLE community_posts ADD COLUMN hidden_at INTEGER");
  }
  const communityCommentColumns = database.prepare("PRAGMA table_info(community_comments)").all() as Array<{ name: string }>;
  if (!communityCommentColumns.some((column) => column.name === "moderation_status")) {
    database.exec("ALTER TABLE community_comments ADD COLUMN moderation_status TEXT NOT NULL DEFAULT 'visible' CHECK (moderation_status IN ('visible', 'hidden', 'removed'))");
  }
  if (!communityCommentColumns.some((column) => column.name === "hidden_at")) {
    database.exec("ALTER TABLE community_comments ADD COLUMN hidden_at INTEGER");
  }
  const journalEntryColumns = database.prepare("PRAGMA table_info(journal_entries)").all() as Array<{ name: string }>;
  if (!journalEntryColumns.some((column) => column.name === "draft_revision")) {
    database.exec("ALTER TABLE journal_entries ADD COLUMN draft_revision INTEGER NOT NULL DEFAULT 0");
  }
  const journalRevisionColumns = database.prepare("PRAGMA table_info(journal_revisions)").all() as Array<{ name: string }>;
  if (!journalRevisionColumns.some((column) => column.name === "draft_revision")) {
    database.exec("ALTER TABLE journal_revisions ADD COLUMN draft_revision INTEGER NOT NULL DEFAULT 0");
  }
  const journalJobColumns = database.prepare("PRAGMA table_info(journal_jobs)").all() as Array<{ name: string }>;
  const journalJobMigrations = [
    ["tmp_storage_key", "ALTER TABLE journal_jobs ADD COLUMN tmp_storage_key TEXT NOT NULL DEFAULT ''"],
    ["attempt_count", "ALTER TABLE journal_jobs ADD COLUMN attempt_count INTEGER NOT NULL DEFAULT 0"],
    ["available_at", "ALTER TABLE journal_jobs ADD COLUMN available_at INTEGER NOT NULL DEFAULT 0"],
    ["lease_expires_at", "ALTER TABLE journal_jobs ADD COLUMN lease_expires_at INTEGER"],
    ["worker_id", "ALTER TABLE journal_jobs ADD COLUMN worker_id TEXT NOT NULL DEFAULT ''"],
  ] as const;
  for (const [column, statement] of journalJobMigrations) {
    if (!journalJobColumns.some((item) => item.name === column)) database.exec(statement);
  }
  const tombstoneColumns = database.prepare("PRAGMA table_info(deletion_tombstones)").all() as Array<{ name: string }>;
  if (!tombstoneColumns.some((column) => column.name === "storage_scope")) {
    database.exec("ALTER TABLE deletion_tombstones ADD COLUMN storage_scope TEXT NOT NULL DEFAULT '' CHECK (storage_scope IN ('', 'private', 'public'))");
  }
  database.exec(`
    CREATE UNIQUE INDEX IF NOT EXISTS deletion_tombstones_pending_unique_idx
      ON deletion_tombstones(entity_type, entity_id, storage_scope, storage_key) WHERE replayed_at IS NULL
  `);

  // Better Auth creates its `user` table on first start, after this module is
  // initialized. Leave foreign-key enforcement off only while defining the
  // application tables, then enable it for every actual read/write.
  database.pragma("foreign_keys = ON");
}

export function getDatabase(): SQLiteDatabase {
  if (globalThis.__knowYourselfDatabase?.open) return globalThis.__knowYourselfDatabase;

  const path = databasePath();
  mkdirSync(dirname(path), { recursive: true, mode: 0o750 });
  const database = new Database(path);
  database.pragma("journal_mode = WAL");
  database.pragma("busy_timeout = 5000");
  migrate(database);
  globalThis.__knowYourselfDatabase = database;
  return database;
}

export function asRow(value: unknown) {
  return (value ?? null) as DatabaseRow | null;
}

export function withTransaction<T>(callback: () => T) {
  const database = getDatabase();
  if (database.inTransaction) {
    database.exec("SAVEPOINT quiz_platform_tx");
    try {
      const result = callback();
      database.exec("RELEASE SAVEPOINT quiz_platform_tx");
      return result;
    } catch (error) {
      try {
        database.exec("ROLLBACK TO SAVEPOINT quiz_platform_tx");
        database.exec("RELEASE SAVEPOINT quiz_platform_tx");
      } catch {
        // Preserve the original database error.
      }
      throw error;
    }
  }
  database.exec("BEGIN IMMEDIATE");
  try {
    const result = callback();
    database.exec("COMMIT");
    return result;
  } catch (error) {
    try {
      database.exec("ROLLBACK");
    } catch {
      // Preserve the original database error.
    }
    throw error;
  }
}

export function getSyncRevision(userId: string) {
  const row = asRow(getDatabase().prepare("SELECT revision FROM sync_revisions WHERE user_id = ?").get(userId));
  const revision = Number(row?.revision ?? 0);
  return Number.isSafeInteger(revision) && revision >= 0 ? revision : 0;
}

export function bumpSyncRevision(userId: string) {
  const database = getDatabase();
  database.prepare(`
    INSERT INTO sync_revisions (user_id, revision)
    VALUES (?, 1)
    ON CONFLICT(user_id) DO UPDATE SET revision = sync_revisions.revision + 1
  `).run(userId);
  return getSyncRevision(userId);
}

export function pruneExpiredSessions(now = Date.now()) {
  return withTransaction(() => {
    const database = getDatabase();
    const rows = database.prepare("SELECT DISTINCT user_id FROM quiz_sessions WHERE expires_at <= ?").all(now) as Array<Record<string, unknown>>;
    database.prepare("DELETE FROM quiz_sessions WHERE expires_at <= ?").run(now);
    for (const row of rows) {
      if (typeof row.user_id === "string") bumpSyncRevision(row.user_id);
    }
    return rows.length;
  });
}
