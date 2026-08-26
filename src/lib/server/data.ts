import "server-only";

import { randomBytes } from "node:crypto";
import type { QuizResult } from "@/core/quiz";
import type { QuizAttempt, QuizSession, StoragePreferences, StorageSnapshot } from "@/lib/storage";
import { STORAGE_VERSION } from "@/lib/storage";
import {
  CLOUD_DATA_LIMITS,
  parseCloudImportPut,
  parseCloudPut,
  parseCloudSnapshot,
  type CloudMutableSnapshot,
} from "./cloud-data-schema";
import { asRow, getDatabase, withTransaction } from "./database";

/**
 * Storage access is deliberately kept separate from authentication. Every
 * public function receives the user id returned by Better Auth, so a caller
 * cannot accidentally query another account's rows.
 */

export class DataValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataValidationError";
  }
}

const DEFAULT_PREFERENCES: StoragePreferences = { lang: "zh", theme: "system" };

export interface UserDataSummary {
  attempts: number;
  bookmarks: number;
  sessions: number;
}

function parseJson<T>(value: unknown, fallback: T): T {
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function rowString(row: Record<string, unknown>, key: string) {
  return typeof row[key] === "string" ? row[key] as string : "";
}

function normalizeStoredPreferences(row: Record<string, unknown> | null): StoragePreferences {
  return {
    lang: row?.lang === "en" ? "en" : DEFAULT_PREFERENCES.lang,
    theme: row?.theme === "light" || row?.theme === "dark" ? row.theme : DEFAULT_PREFERENCES.theme,
  };
}

function normalizeStoredSession(row: Record<string, unknown>): [string, QuizSession] | null {
  const testId = rowString(row, "test_id");
  if (!/^[a-z0-9-]{1,100}$/.test(testId)) return null;
  const answers = parseJson<(number | null)[]>(row.answers_json, []);
  if (!Array.isArray(answers) || answers.length === 0 || answers.length > CLOUD_DATA_LIMITS.maxQuestions) return null;
  if (!answers.every((answer) => answer === null || (Number.isInteger(answer) && answer >= 0 && answer <= CLOUD_DATA_LIMITS.maxAnswer))) return null;
  const maxQuestion = answers.length - 1;
  const currentQuestion = Number(row.current_question);
  return [testId, {
    answers,
    currentQuestion: Number.isInteger(currentQuestion) ? Math.max(0, Math.min(currentQuestion, maxQuestion)) : 0,
    timestamp: Number(row.updated_at) || Date.now(),
  }];
}

/** Return the account's cloud snapshot. Completed raw answers are never read back. */
export function getUserSnapshot(userId: string): StorageSnapshot {
  const database = getDatabase();
  const now = Date.now();
  database.prepare("DELETE FROM quiz_sessions WHERE user_id = ? AND expires_at <= ?").run(userId, now);

  const attemptRows = database.prepare(`
    SELECT id, test_id, result_json, test_name, test_name_en, completed_at
    FROM quiz_attempts
    WHERE user_id = ?
    ORDER BY completed_at ASC, id ASC
  `).all(userId) as Array<Record<string, unknown>>;
  const bookmarkRows = database.prepare(`
    SELECT test_id
    FROM bookmarks
    WHERE user_id = ?
    ORDER BY created_at ASC, test_id ASC
  `).all(userId) as Array<Record<string, unknown>>;
  const preferenceRow = asRow(database.prepare("SELECT lang, theme FROM preferences WHERE user_id = ?").get(userId));
  const sessionRows = database.prepare(`
    SELECT test_id, answers_json, current_question, updated_at
    FROM quiz_sessions
    WHERE user_id = ? AND expires_at > ?
    ORDER BY updated_at DESC
  `).all(userId, now) as Array<Record<string, unknown>>;

  const attempts: QuizAttempt[] = [];
  for (const row of attemptRows) {
    const id = rowString(row, "id");
    const testId = rowString(row, "test_id");
    const result = parseJson<QuizResult>(row.result_json, {});
    const timestamp = Number(row.completed_at);
    if (!id || !/^[a-zA-Z0-9:_-]{1,180}$/.test(id) || !/^[a-z0-9-]{1,100}$/.test(testId)) continue;
    if (!result || typeof result !== "object" || Array.isArray(result) || !Number.isFinite(timestamp)) continue;
    const attempt: QuizAttempt = {
      id,
      testId,
      result,
      // Do not expose or retain the original completed answers in the cloud
      // snapshot. They are not needed by the result/history UI.
      answers: [],
      timestamp,
    };
    if (typeof row.test_name === "string") attempt.testName = row.test_name;
    if (typeof row.test_name_en === "string") attempt.testNameEn = row.test_name_en;
    attempts.push(attempt);
  }

  const sessions: Record<string, QuizSession> = {};
  for (const row of sessionRows) {
    const normalized = normalizeStoredSession(row);
    if (normalized) sessions[normalized[0]] = normalized[1];
  }

  return {
    version: STORAGE_VERSION,
    preferences: normalizeStoredPreferences(preferenceRow),
    attempts,
    bookmarks: Array.from(new Set(bookmarkRows.map((row) => rowString(row, "test_id")).filter((id) => /^[a-z0-9-]{1,100}$/.test(id)))),
    sessions,
  };
}

/** Return counts only, so the account page can explain sync choices without
 * reading the user's result payload before they choose a sync mode. */
export function getUserDataSummary(userId: string): UserDataSummary {
  const database = getDatabase();
  const now = Date.now();
  database.prepare("DELETE FROM quiz_sessions WHERE user_id = ? AND expires_at <= ?").run(userId, now);
  const attempts = asRow(database.prepare("SELECT COUNT(*) AS count FROM quiz_attempts WHERE user_id = ?").get(userId));
  const bookmarks = asRow(database.prepare("SELECT COUNT(*) AS count FROM bookmarks WHERE user_id = ?").get(userId));
  const sessions = asRow(database.prepare("SELECT COUNT(*) AS count FROM quiz_sessions WHERE user_id = ? AND expires_at > ?").get(userId, now));
  return {
    attempts: Number(attempts?.count ?? 0),
    bookmarks: Number(bookmarks?.count ?? 0),
    sessions: Number(sessions?.count ?? 0),
  };
}

function clearMutableRows(userId: string) {
  const database = getDatabase();
  database.prepare("DELETE FROM bookmarks WHERE user_id = ?").run(userId);
  database.prepare("DELETE FROM quiz_sessions WHERE user_id = ?").run(userId);
}

function writePreferences(userId: string, preferences: StoragePreferences, now: number) {
  getDatabase().prepare(`
    INSERT INTO preferences (user_id, lang, theme, updated_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      lang = excluded.lang,
      theme = excluded.theme,
      updated_at = excluded.updated_at
  `).run(userId, preferences.lang, preferences.theme, now);
}

function writeMutableRows(userId: string, snapshot: CloudMutableSnapshot, mode: "merge" | "replace", now: number) {
  const database = getDatabase();
  if (mode === "replace") clearMutableRows(userId);

  const insertBookmark = database.prepare(`
    INSERT OR IGNORE INTO bookmarks (user_id, test_id, created_at)
    VALUES (?, ?, ?)
  `);
  for (const testId of snapshot.bookmarks) insertBookmark.run(userId, testId, now);

  const insertSession = database.prepare(`
    INSERT INTO quiz_sessions
      (user_id, test_id, answers_json, current_question, updated_at, expires_at)
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, test_id) DO UPDATE SET
      answers_json = excluded.answers_json,
      current_question = excluded.current_question,
      updated_at = excluded.updated_at,
      expires_at = excluded.expires_at
  `);
  const expiresAt = now + CLOUD_DATA_LIMITS.sessionTtlMs;
  for (const [testId, session] of Object.entries(snapshot.sessions)) {
    insertSession.run(userId, testId, JSON.stringify(session.answers), session.currentQuestion, now, expiresAt);
  }

  writePreferences(userId, snapshot.preferences, now);
}

function insertImportedAttempts(userId: string, snapshot: StorageSnapshot, mode: "merge" | "replace", now: number) {
  const database = getDatabase();
  if (mode === "merge" && snapshot.attempts.length > 0) {
    const existingRows = database.prepare("SELECT id FROM quiz_attempts WHERE user_id = ?").all(userId) as Array<Record<string, unknown>>;
    const existingIds = new Set(existingRows.map((row) => rowString(row, "id")));
    const newCount = snapshot.attempts.reduce((count, attempt) => count + (existingIds.has(attempt.id) ? 0 : 1), 0);
    if (existingIds.size + newCount > CLOUD_DATA_LIMITS.maxAttempts) {
      throw new DataValidationError("Too many quiz attempts");
    }
  }

  const insertAttempt = database.prepare(`
    INSERT OR IGNORE INTO quiz_attempts
      (user_id, id, test_id, result_json, answers_json, test_name, test_name_en, completed_at, created_at)
    VALUES (?, ?, ?, ?, '[]', ?, ?, ?, ?)
  `);
  for (const attempt of snapshot.attempts) {
    // `parseCloudSnapshot` has already removed completed answers. Keep the
    // literal empty array in SQL as a second, defense-in-depth guarantee.
    insertAttempt.run(
      userId,
      attempt.id,
      attempt.testId,
      JSON.stringify(attempt.result),
      attempt.testName ?? null,
      attempt.testNameEn ?? null,
      attempt.timestamp,
      now,
    );
  }
}

/**
 * Save preferences/bookmarks/sessions only; history is intentionally
 * untouched. The mutable snapshot is a complete client state, so replacing
 * these rows is necessary for unbookmark/clear-session operations to propagate
 * across devices. The `mode` argument is retained for wire compatibility with
 * older clients; merge semantics belong to the explicit history-import path.
 */
export function saveMutableSnapshot(userId: string, value: unknown, mode: "merge" | "replace" = "merge") {
  const parsed = parseCloudPut({ mode, snapshot: value }, Date.now());
  withTransaction(() => writeMutableRows(userId, parsed.snapshot, "replace", Date.now()));
  return getUserSnapshot(userId);
}

/** Explicitly import a v3 browser backup, stripping completed raw answers. */
export function saveImportedSnapshot(userId: string, value: unknown, mode: "merge" | "replace" = "merge") {
  const parsed = parseCloudImportPut({ mode, snapshot: value }, Date.now());
  withTransaction(() => {
    const database = getDatabase();
    if (parsed.mode === "replace") {
      database.prepare("DELETE FROM quiz_attempts WHERE user_id = ?").run(userId);
      clearMutableRows(userId);
    }
    const now = Date.now();
    insertImportedAttempts(userId, parsed.snapshot, parsed.mode, now);
    writeMutableRows(userId, parsed.snapshot, "merge", now);
  });
  return getUserSnapshot(userId);
}

/**
 * Backward-compatible name for callers that still explicitly import a full
 * snapshot. New routes should call saveMutableSnapshot/saveImportedSnapshot.
 */
export function saveUserSnapshot(userId: string, value: unknown, mode: "merge" | "replace" = "merge") {
  return saveImportedSnapshot(userId, value, mode);
}

export function createAttemptId() {
  return `server:${Date.now()}:${randomBytes(8).toString("hex")}`;
}

export interface NewAttemptRecord {
  testId: string;
  result: QuizResult;
  testName?: string;
  testNameEn?: string;
  timestamp?: number;
}

/** Persist a server-scored completion. The answers column is always `[]`. */
export function saveAttemptRecord(userId: string, input: NewAttemptRecord) {
  const timestamp = input.timestamp ?? Date.now();
  const id = createAttemptId();
  const parsed = parseCloudSnapshot({
    version: STORAGE_VERSION,
    preferences: DEFAULT_PREFERENCES,
    attempts: [{
      id,
      testId: input.testId,
      result: input.result,
      answers: [],
      testName: input.testName,
      testNameEn: input.testNameEn,
      timestamp,
    }],
    bookmarks: [],
    sessions: {},
  }, timestamp);
  const attempt = parsed.attempts[0];
  if (!attempt) throw new DataValidationError("Invalid quiz result");

  withTransaction(() => {
    const database = getDatabase();
    const row = asRow(database.prepare("SELECT COUNT(*) AS count FROM quiz_attempts WHERE user_id = ?").get(userId));
    if (Number(row?.count ?? 0) >= CLOUD_DATA_LIMITS.maxAttempts) throw new DataValidationError("Too many quiz attempts");
    database.prepare(`
      INSERT INTO quiz_attempts
        (user_id, id, test_id, result_json, answers_json, test_name, test_name_en, completed_at, created_at)
      VALUES (?, ?, ?, ?, '[]', ?, ?, ?, ?)
    `).run(userId, attempt.id, attempt.testId, JSON.stringify(attempt.result), attempt.testName ?? null, attempt.testNameEn ?? null, attempt.timestamp, Date.now());
    database.prepare("DELETE FROM quiz_sessions WHERE user_id = ? AND test_id = ?").run(userId, attempt.testId);
  });
  return attempt;
}

export function deleteAttemptRecord(userId: string, id: string) {
  getDatabase().prepare("DELETE FROM quiz_attempts WHERE user_id = ? AND id = ?").run(userId, id);
}

export function clearAttemptRecords(userId: string) {
  getDatabase().prepare("DELETE FROM quiz_attempts WHERE user_id = ?").run(userId);
}

export function clearQuizSessionRecord(userId: string, testId: string) {
  getDatabase().prepare("DELETE FROM quiz_sessions WHERE user_id = ? AND test_id = ?").run(userId, testId);
}

export function setBookmarkRecord(userId: string, testId: string, saved: boolean) {
  if (saved) {
    getDatabase().prepare("INSERT OR IGNORE INTO bookmarks (user_id, test_id, created_at) VALUES (?, ?, ?)").run(userId, testId, Date.now());
  } else {
    getDatabase().prepare("DELETE FROM bookmarks WHERE user_id = ? AND test_id = ?").run(userId, testId);
  }
}

export function setUserPreferences(userId: string, preferences: StoragePreferences) {
  writePreferences(userId, {
    lang: preferences.lang === "en" ? "en" : "zh",
    theme: preferences.theme === "light" || preferences.theme === "dark" ? preferences.theme : "system",
  }, Date.now());
}

export function deleteUserData(userId: string) {
  withTransaction(() => {
    const database = getDatabase();
    database.prepare("DELETE FROM quiz_attempts WHERE user_id = ?").run(userId);
    clearMutableRows(userId);
    database.prepare("DELETE FROM preferences WHERE user_id = ?").run(userId);
  });
}
