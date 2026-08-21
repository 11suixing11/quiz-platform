import type { Lang, QuizResult } from "./types";

export const STORAGE_VERSION = 3;
export const STORAGE_KEY = "know-yourself:v3";
export const STORAGE_EVENT = "know-yourself:storage-changed";

export interface QuizAttempt {
  id: string;
  testId: string;
  result: QuizResult;
  answers: number[];
  testName?: string;
  testNameEn?: string;
  timestamp: number;
}

export interface StoragePreferences {
  lang: Lang;
  theme: "system" | "light" | "dark";
}

export interface QuizSession {
  answers: (number | null)[];
  currentQuestion: number;
  timestamp: number;
}

export interface StorageSnapshot {
  version: typeof STORAGE_VERSION;
  preferences: StoragePreferences;
  attempts: QuizAttempt[];
  bookmarks: string[];
  sessions: Record<string, QuizSession>;
}

const DEFAULT_SNAPSHOT: StorageSnapshot = {
  version: STORAGE_VERSION,
  preferences: { lang: "zh", theme: "system" },
  attempts: [],
  bookmarks: [],
  sessions: {},
};

const SESSION_MAX_AGE = 24 * 60 * 60 * 1000;

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function emptySnapshot(): StorageSnapshot {
  return {
    version: STORAGE_VERSION,
    preferences: { ...DEFAULT_SNAPSHOT.preferences },
    attempts: [],
    bookmarks: [],
    sessions: {},
  };
}

function makeAttemptId(testId: string, timestamp: number) {
  return `${testId}:${timestamp}:${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeAttempt(value: unknown): QuizAttempt | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const item = value as Partial<QuizAttempt>;
  if (!item.testId || typeof item.testId !== "string") return null;
  if (!item.result || typeof item.result !== "object" || Array.isArray(item.result)) return null;
  if (typeof item.timestamp !== "number" || !Number.isFinite(item.timestamp)) return null;
  return {
    id: typeof item.id === "string" && item.id ? item.id : makeAttemptId(item.testId, item.timestamp),
    testId: item.testId,
    result: item.result as QuizResult,
    answers: Array.isArray(item.answers) ? item.answers.filter((answer): answer is number => Number.isInteger(answer)) : [],
    testName: typeof item.testName === "string" ? item.testName : undefined,
    testNameEn: typeof item.testNameEn === "string" ? item.testNameEn : undefined,
    timestamp: item.timestamp,
  };
}

function normalizeSession(value: unknown): QuizSession | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const session = value as Partial<QuizSession>;
  if (!Array.isArray(session.answers) || !session.answers.every((answer) => answer === null || Number.isInteger(answer))) return null;
  if (!Number.isInteger(session.currentQuestion) || typeof session.timestamp !== "number" || !Number.isFinite(session.timestamp)) return null;
  const lastQuestion = Math.max(0, session.answers.length - 1);
  return {
    answers: session.answers,
    currentQuestion: Math.max(0, Math.min(session.currentQuestion as number, lastQuestion)),
    timestamp: session.timestamp,
  };
}

export function parseStorageSnapshot(value: unknown): StorageSnapshot | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Partial<StorageSnapshot>;
  if (input.version !== STORAGE_VERSION) return null;

  const language = input.preferences?.lang === "en" ? "en" : "zh";
  const rawTheme = input.preferences?.theme;
  const theme = rawTheme === "light" || rawTheme === "dark" ? rawTheme : "system";
  const attempts = Array.isArray(input.attempts)
    ? input.attempts.map(normalizeAttempt).filter((item): item is QuizAttempt => Boolean(item))
    : [];
  const bookmarks = Array.isArray(input.bookmarks)
    ? Array.from(new Set(input.bookmarks.filter((item): item is string => typeof item === "string" && Boolean(item))))
    : [];
  const sessions: Record<string, QuizSession> = {};
  if (input.sessions && typeof input.sessions === "object" && !Array.isArray(input.sessions)) {
    for (const [testId, rawSession] of Object.entries(input.sessions)) {
      const session = normalizeSession(rawSession);
      if (session) sessions[testId] = session;
    }
  }

  return {
    version: STORAGE_VERSION,
    preferences: { lang: language, theme },
    attempts: attempts.sort((a, b) => a.timestamp - b.timestamp),
    bookmarks,
    sessions,
  };
}

export function readSnapshot(): StorageSnapshot {
  if (!canUseStorage()) return emptySnapshot();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptySnapshot();
    return parseStorageSnapshot(JSON.parse(raw)) ?? emptySnapshot();
  } catch {
    return emptySnapshot();
  }
}

function emitChange() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(STORAGE_EVENT));
}

export function writeSnapshot(snapshot: StorageSnapshot) {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    emitChange();
  } catch {
    // A private window or exhausted quota must not interrupt the quiz flow.
  }
}

function updateSnapshot(updater: (current: StorageSnapshot) => StorageSnapshot) {
  const next = updater(readSnapshot());
  writeSnapshot(next);
  return next;
}

export function getAttempts() {
  return [...readSnapshot().attempts].sort((a, b) => b.timestamp - a.timestamp);
}

export function getAttemptsForTest(testId: string) {
  return getAttempts().filter((attempt) => attempt.testId === testId);
}

export function getLatestAttempt(testId: string) {
  return getAttemptsForTest(testId)[0] ?? null;
}

export function getAttemptById(id: string) {
  return getAttempts().find((attempt) => attempt.id === id) ?? null;
}

export function saveAttempt(input: Omit<QuizAttempt, "id"> & { id?: string }) {
  const attempt: QuizAttempt = { ...input, id: input.id ?? makeAttemptId(input.testId, input.timestamp) };
  updateSnapshot((current) => ({ ...current, attempts: [...current.attempts, attempt] }));
  return attempt;
}

export function setAttempts(attempts: QuizAttempt[]) {
  const valid = attempts.map(normalizeAttempt).filter((item): item is QuizAttempt => Boolean(item));
  updateSnapshot((current) => ({ ...current, attempts: valid }));
}

export function deleteAttempt(id: string) {
  updateSnapshot((current) => ({ ...current, attempts: current.attempts.filter((attempt) => attempt.id !== id) }));
}

export function clearAttempts() {
  updateSnapshot((current) => ({ ...current, attempts: [] }));
}

export function getBookmarks() {
  return [...readSnapshot().bookmarks];
}

export function setBookmarks(ids: string[]) {
  const bookmarks = Array.from(new Set(ids));
  updateSnapshot((current) => ({ ...current, bookmarks }));
  return bookmarks;
}

export function toggleBookmark(id: string) {
  const current = getBookmarks();
  return setBookmarks(current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
}

export function isBookmarked(id: string) {
  return getBookmarks().includes(id);
}

export function getPreferences() {
  return { ...readSnapshot().preferences };
}

export function setPreference<K extends keyof StoragePreferences>(key: K, value: StoragePreferences[K]) {
  updateSnapshot((current) => ({
    ...current,
    preferences: { ...current.preferences, [key]: value },
  }));
}

export function getLanguage(): Lang {
  return readSnapshot().preferences.lang;
}

export function getQuizSession(testId: string): QuizSession | null {
  const session = readSnapshot().sessions[testId];
  if (!session) return null;
  if (Date.now() - session.timestamp > SESSION_MAX_AGE) {
    clearQuizSession(testId);
    return null;
  }
  return session;
}

export function saveQuizSession(testId: string, answers: (number | null)[], currentQuestion: number) {
  updateSnapshot((current) => ({
    ...current,
    sessions: {
      ...current.sessions,
      [testId]: { answers, currentQuestion, timestamp: Date.now() },
    },
  }));
}

export function clearQuizSession(testId: string) {
  updateSnapshot((current) => {
    const sessions = { ...current.sessions };
    delete sessions[testId];
    return { ...current, sessions };
  });
}

export function clearAllData() {
  writeSnapshot(emptySnapshot());
}

export function getStorageSummary() {
  const snapshot = readSnapshot();
  const bytes = new Blob([JSON.stringify(snapshot)]).size;
  const storageUsed = bytes > 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : bytes > 1024
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${bytes} B`;
  return { attempts: snapshot.attempts.length, bookmarks: snapshot.bookmarks.length, storageUsed };
}

/** Old v2 data is intentionally not imported into the new product core. */
export function migrateLegacyStorage() {}
