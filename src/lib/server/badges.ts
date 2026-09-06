import "server-only";

import { getResultKey, loadQuizDefinition, type QuizDefinition, type QuizResult } from "@/core/quiz";
import { asRow, getDatabase, withTransaction } from "./database";
import { resultTitle } from "./community";

/**
 * The badge collection is a derived view: every completed attempt of a public
 * assessment earns its result variant, so nothing is ever reported by the
 * client and nothing can be forged. Only the worn selection is stored.
 */
export const BADGE_LIMITS = {
  maxWorn: 3,
  scannedAttempts: 500,
} as const;

export class BadgeValidationError extends Error {
  constructor(message: string, public readonly code = "BADGE_INVALID", public readonly status = 400) {
    super(message);
    this.name = "BadgeValidationError";
  }
}

export interface CollectedBadge {
  testId: string;
  resultKey: string;
  testName: string;
  testNameEn: string;
  resultTitle: string;
  resultTitleEn: string;
  /** First time this variant appeared in the account's history. */
  earnedAt: number;
  /** Most recent time this variant appeared; the label follows this attempt. */
  lastEarnedAt: number;
}

export interface WornBadge {
  testId: string;
  resultKey: string;
  testName: string;
  testNameEn: string;
  resultTitle: string;
  resultTitleEn: string;
  position: number;
  wornAt: number;
}

/** The author-facing projection: display labels only, never the result key. */
export interface PublicBadge {
  testId: string;
  testName: string;
  testNameEn: string;
  resultTitle: string;
  resultTitleEn: string;
}

export type AuthorBadge = PublicBadge;

function badgeGroupKey(testId: string, resultKey: string) {
  return `${testId}\0${resultKey}`;
}

/** The same key derivation `resultTitle` uses, so a badge always names what a share would name. */
function badgeResultKey(result: QuizResult) {
  return getResultKey(result) || Object.entries(result.percentages ?? {}).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function toPublicBadge(badge: WornBadge): PublicBadge {
  return {
    testId: badge.testId,
    testName: badge.testName,
    testNameEn: badge.testNameEn,
    resultTitle: badge.resultTitle,
    resultTitleEn: badge.resultTitleEn,
  };
}

/**
 * Derive the badge collection from the account's own attempts. Attempts of
 * internal modules are skipped because `loadQuizDefinition` only resolves the
 * 16 public routes; a badge always links to a page a visitor can open.
 */
export async function listCollectedBadges(userId: string): Promise<CollectedBadge[]> {
  const rows = getDatabase().prepare(`
    SELECT test_id, result_json, test_name, test_name_en, completed_at
    FROM quiz_attempts
    WHERE user_id = ?
    ORDER BY completed_at ASC, id ASC
    LIMIT ?
  `).all(userId, BADGE_LIMITS.scannedAttempts) as Array<Record<string, unknown>>;
  if (!rows.length) return [];

  type BadgeGroup = {
    testId: string;
    resultKey: string;
    earnedAt: number;
    lastEarnedAt: number;
    result: QuizResult;
    testName: string;
    testNameEn: string;
  };
  const groups = new Map<string, BadgeGroup>();
  const testIds = new Set<string>();
  for (const row of rows) {
    const testId = typeof row.test_id === "string" ? row.test_id : "";
    if (!testId || !/^[a-z0-9-]{1,100}$/u.test(testId)) continue;
    let result: QuizResult;
    try {
      const parsed = JSON.parse(typeof row.result_json === "string" ? row.result_json : "null") as unknown;
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) continue;
      result = parsed as QuizResult;
    } catch {
      continue;
    }
    const resultKey = badgeResultKey(result);
    if (!resultKey) continue;
    const completedAt = Number(row.completed_at);
    const timestamp = Number.isFinite(completedAt) ? completedAt : 0;
    const key = badgeGroupKey(testId, resultKey);
    const group = groups.get(key);
    if (group) {
      group.earnedAt = Math.min(group.earnedAt, timestamp);
      if (timestamp >= group.lastEarnedAt) {
        group.lastEarnedAt = timestamp;
        group.result = result;
      }
    } else {
      groups.set(key, {
        testId,
        resultKey,
        earnedAt: timestamp,
        lastEarnedAt: timestamp,
        result,
        testName: typeof row.test_name === "string" ? row.test_name : "",
        testNameEn: typeof row.test_name_en === "string" ? row.test_name_en : "",
      });
    }
    testIds.add(testId);
  }
  if (!groups.size) return [];

  const definitions = new Map<string, QuizDefinition | null>();
  for (const testId of testIds) definitions.set(testId, await loadQuizDefinition(testId));

  const badges: CollectedBadge[] = [];
  for (const group of groups.values()) {
    const definition = definitions.get(group.testId);
    // A missing definition means the route is not public; it earns no badge.
    if (!definition) continue;
    const titleZh = resultTitle(definition, group.result, "zh");
    const titleEn = resultTitle(definition, group.result, "en");
    badges.push({
      testId: group.testId,
      resultKey: group.resultKey,
      testName: definition.title.zh || group.testName,
      testNameEn: definition.title.en || group.testNameEn,
      resultTitle: titleZh || group.resultKey,
      resultTitleEn: titleEn || titleZh || group.resultKey,
      earnedAt: group.earnedAt,
      lastEarnedAt: group.lastEarnedAt,
    });
  }
  return badges;
}

type WornRow = { testId: string; resultKey: string; position: number; wornAt: number };

function readWornRows(userId: string): WornRow[] {
  const rows = getDatabase().prepare(`
    SELECT test_id, result_key, position, worn_at
    FROM profile_badges
    WHERE user_id = ?
    ORDER BY position ASC, worn_at ASC
  `).all(userId) as Array<Record<string, unknown>>;
  return rows.flatMap((row) => {
    const testId = typeof row.test_id === "string" ? row.test_id : "";
    const resultKey = typeof row.result_key === "string" ? row.result_key : "";
    if (!testId || !resultKey) return [];
    return [{ testId, resultKey, position: Number(row.position) || 0, wornAt: Number(row.worn_at) || 0 }];
  });
}

/**
 * Keep only rows that are still part of the derived collection. A cloud
 * "replace" import can delete attempts, so a stale worn row is filtered at
 * read time instead of blocking the account's badge API.
 */
async function resolveWornBadges(userId: string, wornRows: WornRow[]): Promise<WornBadge[]> {
  if (!wornRows.length) return [];
  const collected = await listCollectedBadges(userId);
  const collectedByKey = new Map(collected.map((badge) => [badgeGroupKey(badge.testId, badge.resultKey), badge]));
  return wornRows
    .flatMap((row) => {
      const badge = collectedByKey.get(badgeGroupKey(row.testId, row.resultKey));
      if (!badge) return [];
      return [{
        testId: badge.testId,
        resultKey: badge.resultKey,
        testName: badge.testName,
        testNameEn: badge.testNameEn,
        resultTitle: badge.resultTitle,
        resultTitleEn: badge.resultTitleEn,
        position: row.position,
        wornAt: row.wornAt,
      }];
    })
    .sort((a, b) => a.position - b.position || a.wornAt - b.wornAt);
}

/**
 * The owner's worn selection. `viewerScoped` marks the owner viewing their own
 * profile; every other reader additionally requires the `show_badges` opt-in
 * and receives only the public display projection.
 */
export async function listWornBadges(userId: string, viewerScoped: boolean): Promise<WornBadge[] | PublicBadge[]> {
  const worn = await resolveWornBadges(userId, readWornRows(userId));
  if (viewerScoped) return worn;
  if (!showBadgesEnabled(userId)) return [];
  return worn.map(toPublicBadge);
}

export function showBadgesEnabled(userId: string): boolean {
  const row = asRow(getDatabase().prepare("SELECT show_badges FROM profiles WHERE user_id = ?").get(userId));
  return Number(row?.show_badges) === 1;
}

/** Replace the complete worn selection. The input must be earned and unique. */
export async function setWornBadges(userId: string, input: unknown): Promise<WornBadge[]> {
  if (!Array.isArray(input)) throw new BadgeValidationError("佩戴格式无效", "BADGE_INVALID");
  if (input.length > BADGE_LIMITS.maxWorn) throw new BadgeValidationError("最多只能佩戴 3 枚徽章", "BADGE_LIMIT_EXCEEDED");
  const items: Array<{ testId: string; resultKey: string }> = [];
  for (const value of input) {
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new BadgeValidationError("佩戴格式无效", "BADGE_INVALID");
    const record = value as Record<string, unknown>;
    const testId = typeof record.testId === "string" ? record.testId : "";
    const resultKey = typeof record.resultKey === "string" ? record.resultKey : "";
    if (!testId || !resultKey || testId.length > 100 || resultKey.length > 160) throw new BadgeValidationError("佩戴格式无效", "BADGE_INVALID");
    if (items.some((item) => item.testId === testId && item.resultKey === resultKey)) throw new BadgeValidationError("不能重复佩戴同一枚徽章", "BADGE_INVALID");
    items.push({ testId, resultKey });
  }
  const collected = await listCollectedBadges(userId);
  const earned = new Set(collected.map((badge) => badgeGroupKey(badge.testId, badge.resultKey)));
  for (const item of items) {
    if (!earned.has(badgeGroupKey(item.testId, item.resultKey))) throw new BadgeValidationError("还没有获得这枚徽章", "BADGE_NOT_EARNED");
  }
  const now = Date.now();
  withTransaction(() => {
    const database = getDatabase();
    database.prepare("DELETE FROM profile_badges WHERE user_id = ?").run(userId);
    const insert = database.prepare(`
      INSERT INTO profile_badges (user_id, test_id, result_key, position, worn_at)
      VALUES (?, ?, ?, ?, ?)
    `);
    items.forEach((item, position) => insert.run(userId, item.testId, item.resultKey, position, now));
  });
  return resolveWornBadges(userId, readWornRows(userId));
}

/**
 * The single outward exit for author badges. Only authors who opted in through
 * `show_badges` are queried, and each author returns at most the worn three.
 */
export async function wornBadgesForAuthors(authorIds: string[]): Promise<Map<string, PublicBadge[]>> {
  const ids = Array.from(new Set(authorIds.filter((id) => typeof id === "string" && id)));
  if (!ids.length) return new Map();
  const rows = getDatabase().prepare(`
    SELECT pb.user_id, pb.test_id, pb.result_key, pb.position, pb.worn_at
    FROM profile_badges pb
    JOIN profiles pr ON pr.user_id = pb.user_id
    WHERE pr.show_badges = 1 AND pb.user_id IN (${ids.map(() => "?").join(",")})
    ORDER BY pb.position ASC, pb.worn_at ASC
  `).all(...ids) as Array<Record<string, unknown>>;
  if (!rows.length) return new Map();

  const rowsByUser = new Map<string, WornRow[]>();
  for (const row of rows) {
    const userId = typeof row.user_id === "string" ? row.user_id : "";
    const testId = typeof row.test_id === "string" ? row.test_id : "";
    const resultKey = typeof row.result_key === "string" ? row.result_key : "";
    if (!userId || !testId || !resultKey) continue;
    const list = rowsByUser.get(userId) ?? [];
    list.push({ testId, resultKey, position: Number(row.position) || 0, wornAt: Number(row.worn_at) || 0 });
    rowsByUser.set(userId, list);
  }

  const badges = new Map<string, PublicBadge[]>();
  for (const [userId, wornRows] of rowsByUser) {
    const worn = await resolveWornBadges(userId, wornRows);
    if (worn.length) badges.set(userId, worn.map(toPublicBadge));
  }
  return badges;
}
