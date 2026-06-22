"use client";

import { TEST_REGISTRY } from "./test-registry";
import { TEST_CATEGORIES } from "./constants";

export interface QuizHistoryEntry {
  testId: string;
  result: Record<string, unknown>;
  answers: number[];
  testName: string;
  testNameEn: string;
  timestamp: number;
}

export interface DataStats {
  totalTests: number;
  uniqueTests: number;
  categories: Record<string, number>;
  averageScore: number;
  streakDays: number;
  favoriteCategory: string;
  oldestEntry: number | null;
  newestEntry: number | null;
  totalDataSize: number;
}

const QUIZ_KEY_PREFIX = "quiz-result-";
const BOOKMARK_KEY = "quiz-bookmarks";
const LANG_KEY = "quiz-platform-lang";

function getAllQuizKeys(): string[] {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(QUIZ_KEY_PREFIX)) {
      keys.push(key);
    }
  }
  return keys;
}

function getAllQuizEntries(): QuizHistoryEntry[] {
  const entries: QuizHistoryEntry[] = [];
  for (const key of getAllQuizKeys()) {
    try {
      const data = JSON.parse(localStorage.getItem(key) ?? "");
      if (data && data.result && data.timestamp) {
        entries.push({
          testId: key.replace(QUIZ_KEY_PREFIX, ""),
          result: data.result,
          answers: data.answers ?? [],
          testName: data.testName ?? "",
          testNameEn: data.testNameEn ?? "",
          timestamp: data.timestamp,
        });
      }
    } catch {}
  }
  return entries;
}

export function getDataStats(): DataStats {
  const entries = getAllQuizEntries();
  const categoryCounts: Record<string, number> = {};
  let totalScore = 0;
  let scoreCount = 0;
  const daySet = new Set<string>();

  for (const entry of entries) {
    const test = TEST_REGISTRY.find((t) => t.id === entry.testId);
    if (test) {
      categoryCounts[test.category] = (categoryCounts[test.category] || 0) + 1;
    }
    const score = (entry.result.score ?? entry.result.overallScore ?? entry.result.percentage) as number | undefined;
    if (typeof score === "number") {
      totalScore += score;
      scoreCount++;
    }
    const day = new Date(entry.timestamp).toISOString().split("T")[0];
    daySet.add(day);
  }

  let favoriteCategory = "";
  let maxCount = 0;
  for (const [cat, count] of Object.entries(categoryCounts)) {
    if (count > maxCount) {
      maxCount = count;
      favoriteCategory = cat;
    }
  }

  // Calculate streak
  const sortedDays = Array.from(daySet).sort().reverse();
  let streak = 0;
  const today = new Date().toISOString().split("T")[0];
  for (let i = 0; i < sortedDays.length; i++) {
    const expected = new Date();
    expected.setDate(expected.getDate() - i);
    const expectedStr = expected.toISOString().split("T")[0];
    if (sortedDays[i] === expectedStr) {
      streak++;
    } else if (i === 0 && sortedDays[i] === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]) {
      streak++;
    } else {
      break;
    }
  }

  const timestamps = entries.map((e) => e.timestamp);

  return {
    totalTests: entries.length,
    uniqueTests: new Set(entries.map((e) => e.testId)).size,
    categories: categoryCounts,
    averageScore: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0,
    streakDays: streak,
    favoriteCategory,
    oldestEntry: timestamps.length > 0 ? Math.min(...timestamps) : null,
    newestEntry: timestamps.length > 0 ? Math.max(...timestamps) : null,
    totalDataSize: JSON.stringify(entries).length,
  };
}

export function exportAllData(): string {
  const quizData: Record<string, unknown> = {};
  for (const key of getAllQuizKeys()) {
    try {
      quizData[key] = JSON.parse(localStorage.getItem(key) ?? "");
    } catch {
      quizData[key] = localStorage.getItem(key);
    }
  }

  let bookmarks: unknown = null;
  try {
    bookmarks = JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "null");
  } catch {}

  const exportPayload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    platform: "quiz-platform-v2",
    quizResults: quizData,
    bookmarks,
    lang: localStorage.getItem(LANG_KEY),
  };

  const json = JSON.stringify(exportPayload, null, 2);

  // Trigger download
  if (typeof document !== "undefined") {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quiz-platform-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return json;
}

export type ImportMode = "merge" | "replace";

export function importData(json: string, mode: ImportMode = "merge"): { success: boolean; message: string; imported: number } {
  try {
    const payload = JSON.parse(json);
    if (!payload.quizResults && !payload.quizData) {
      return { success: false, message: "Invalid file format: missing quiz data", imported: 0 };
    }

    const quizResults = payload.quizResults ?? payload.quizData ?? {};

    if (mode === "replace") {
      // Clear existing quiz data
      const existingKeys = getAllQuizKeys();
      for (const key of existingKeys) {
        localStorage.removeItem(key);
      }
    }

    let imported = 0;
    for (const [key, value] of Object.entries(quizResults)) {
      if (mode === "merge" && localStorage.getItem(key)) continue; // skip existing in merge mode
      localStorage.setItem(key, JSON.stringify(value));
      imported++;
    }

    if (payload.bookmarks) {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(payload.bookmarks));
    }
    if (payload.lang) {
      localStorage.setItem(LANG_KEY, payload.lang);
    }

    return { success: true, message: `Successfully imported ${imported} entries`, imported };
  } catch (e) {
    return { success: false, message: `Failed to parse file: ${e instanceof Error ? e.message : "unknown error"}`, imported: 0 };
  }
}

export function clearAllData(): void {
  const keys = getAllQuizKeys();
  for (const key of keys) {
    localStorage.removeItem(key);
  }
  localStorage.removeItem(BOOKMARK_KEY);
}

export function getDataSummary(): { quizEntries: number; bookmarks: number; storageUsed: string } {
  const quizKeys = getAllQuizKeys();
  let bookmarks = 0;
  try {
    const bm = JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "[]");
    bookmarks = Array.isArray(bm) ? bm.length : 0;
  } catch {}

  const totalBytes = new Blob(Object.values(localStorage)).size;
  const sizeStr = totalBytes > 1024 * 1024
    ? `${(totalBytes / (1024 * 1024)).toFixed(1)} MB`
    : totalBytes > 1024
    ? `${(totalBytes / 1024).toFixed(1)} KB`
    : `${totalBytes} B`;

  return { quizEntries: quizKeys.length, bookmarks, storageUsed: sizeStr };
}
