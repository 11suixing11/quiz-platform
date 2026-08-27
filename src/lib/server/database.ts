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
