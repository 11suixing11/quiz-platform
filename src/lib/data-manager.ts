"use client";

import {
  STORAGE_VERSION,
  clearAllData as clearStorage,
  getStorageSummary,
  parseStorageSnapshot,
  readSnapshot,
  writeSnapshot,
  type StorageSnapshot,
} from "./storage";
import { TEST_REGISTRY } from "./test-registry";

export type ImportMode = "merge" | "replace";

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

export function getDataStats(): DataStats {
  const snapshot = readSnapshot();
  const categories: Record<string, number> = {};
  const scores: number[] = [];
  for (const attempt of snapshot.attempts) {
    const entry = TEST_REGISTRY.find((test) => test.id === attempt.testId);
    if (entry) categories[entry.category] = (categories[entry.category] ?? 0) + 1;
    const score = attempt.result.score ?? attempt.result.overallScore ?? attempt.result.percentage;
    if (typeof score === "number") scores.push(score);
  }
  const favoriteCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
  const timestamps = snapshot.attempts.map((attempt) => attempt.timestamp);
  return {
    totalTests: snapshot.attempts.length,
    uniqueTests: new Set(snapshot.attempts.map((attempt) => attempt.testId)).size,
    categories,
    averageScore: scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0,
    streakDays: 0,
    favoriteCategory,
    oldestEntry: timestamps.length ? Math.min(...timestamps) : null,
    newestEntry: timestamps.length ? Math.max(...timestamps) : null,
    totalDataSize: JSON.stringify(snapshot).length,
  };
}

export function exportAllData() {
  const payload = readSnapshot();
  const json = JSON.stringify(payload, null, 2);
  if (typeof document !== "undefined") {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `know-yourself-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }
  return json;
}

function mergeSnapshots(current: StorageSnapshot, incoming: StorageSnapshot): StorageSnapshot {
  const attempts = [...current.attempts];
  const attemptIds = new Set(attempts.map((attempt) => attempt.id));
  for (const attempt of incoming.attempts) {
    if (!attemptIds.has(attempt.id)) attempts.push(attempt);
  }

  return {
    version: STORAGE_VERSION,
    preferences: incoming.preferences,
    attempts,
    bookmarks: Array.from(new Set([...current.bookmarks, ...incoming.bookmarks])),
    sessions: { ...current.sessions, ...incoming.sessions },
  };
}

export function importData(json: string, mode: ImportMode = "merge") {
  try {
    const incoming = parseStorageSnapshot(JSON.parse(json));
    if (!incoming) {
      return { success: false, message: `Only version ${STORAGE_VERSION} backups are supported`, imported: 0 };
    }
    const current = readSnapshot();
    const currentAttemptIds = new Set(current.attempts.map((attempt) => attempt.id));
    const next = mode === "replace" ? incoming : mergeSnapshots(current, incoming);
    writeSnapshot(next);
    const imported = mode === "replace"
      ? next.attempts.length
      : next.attempts.filter((attempt) => !currentAttemptIds.has(attempt.id)).length;
    return {
      success: true,
      message: "Import complete",
      imported,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Invalid backup file",
      imported: 0,
    };
  }
}

export function clearAllData() {
  clearStorage();
}

export function getDataSummary() {
  const summary = getStorageSummary();
  return {
    quizEntries: summary.attempts,
    bookmarks: summary.bookmarks,
    storageUsed: summary.storageUsed,
  };
}
