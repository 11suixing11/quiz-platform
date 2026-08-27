import "server-only";

import { randomBytes } from "node:crypto";
import { getResultKey, getResultScore, getScoreBand, loadQuizDefinition, type QuizDefinition, type QuizResult } from "@/core/quiz";
import { asRow, getDatabase, withTransaction } from "./database";

export const COMMUNITY_LIMITS = {
  reflection: 500,
  comment: 500,
  pageSize: 20,
  maxCommentsPerPost: 60,
} as const;

export class CommunityValidationError extends Error {
  constructor(message: string, public readonly code = "INVALID_DATA") {
    super(message);
    this.name = "CommunityValidationError";
  }
}

type Lang = "zh" | "en";
type DimensionSummary = { label: string; labelEn: string; value: string };

export interface CommunityComment {
  id: string;
  postId: string;
  parentId: string | null;
  body: string;
  createdAt: number;
  author: { displayName: string };
  isAuthor: boolean;
  canDelete: boolean;
}

export interface CommunityPost {
  id: string;
  testId: string;
  testName: string;
  testNameEn: string;
  resultTitle: string | null;
  resultTitleEn: string | null;
  dimensions: DimensionSummary[];
  reflection: string;
  showResultType: boolean;
  showDimensions: boolean;
  showAvatar: boolean;
  allowComments: boolean;
  createdAt: number;
  author: { displayName: string; avatar: string };
  reactionCount: number;
  commentCount: number;
  reacted: boolean;
  isAuthor: boolean;
  comments: CommunityComment[];
}

function id(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${randomBytes(8).toString("hex")}`;
}

function text(value: unknown, max: number, required = true) {
  if (typeof value !== "string") throw new CommunityValidationError("内容格式无效");
  const normalized = value.trim().replace(/\r\n?/g, "\n");
  const length = Array.from(normalized).length;
  if ((required && length === 0) || length > max) throw new CommunityValidationError(`内容需要为 1 至 ${max} 个字符`);
  return normalized;
}

function bool(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function resultTitle(definition: QuizDefinition, result: QuizResult, language: Lang) {
  const key = getResultKey(result) || Object.entries(result.percentages ?? {}).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  const scoreBand = getScoreBand(definition, result);
  const narrative = definition.resultContent.narrative?.[key] ?? definition.resultContent.narrative?.[Object.keys(definition.resultContent.narrative ?? {})[0]];
  const archetype = definition.resultContent.archetypes?.[key];
  const type = definition.resultContent.types?.[key] ?? definition.resultContent.types?.[Object.keys(definition.resultContent.types ?? {})[0]];
  const dimension = definition.resultContent.dimensions?.[key];
  return scoreBand?.title[language]
    ?? narrative?.[language]?.archetype
    ?? (language === "zh" ? archetype?.title_zh : archetype?.title_en)
    ?? type?.[language]?.name
    ?? (language === "zh" ? dimension?.zh : dimension?.name)
    ?? (key || null);
}

function dimensions(definition: QuizDefinition, result: QuizResult): DimensionSummary[] {
  if (result.dimensions?.length) {
    return result.dimensions.slice(0, 8).map((item) => {
      const metadata = definition.resultContent.dimensions?.[item.name];
      const paired = item.left && item.right && typeof item.leftScore === "number" && typeof item.rightScore === "number";
      return {
        label: metadata?.zh ?? item.zh ?? item.name,
        labelEn: metadata?.name ?? item.en ?? item.name,
        value: paired ? `${item.left} ${Math.round(item.leftScore ?? 0)}% / ${item.right} ${Math.round(item.rightScore ?? 0)}%` : `${Math.round(item.score)}%`,
      };
    });
  }
  const percentages = Object.entries(result.percentages ?? {}).slice(0, 8).map(([key, score]) => ({
    label: definition.resultContent.dimensions?.[key]?.zh ?? key,
    labelEn: definition.resultContent.dimensions?.[key]?.name ?? key,
    value: `${Math.round(score)}%`,
  }));
  if (percentages.length) return percentages;
  const score = getResultScore(result);
  return score === null ? [] : [{ label: "这次的分数", labelEn: "Score", value: `${Math.round(score)}%` }];
}

function parseDimensions(value: unknown): DimensionSummary[] {
  try {
    const parsed = JSON.parse(typeof value === "string" ? value : "[]") as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is DimensionSummary => Boolean(item && typeof item === "object"
      && typeof (item as DimensionSummary).label === "string"
      && typeof (item as DimensionSummary).labelEn === "string"
      && typeof (item as DimensionSummary).value === "string")).slice(0, 8);
  } catch { return []; }
}

export async function createCommunityPost(userId: string, value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const attemptId = text(input.attemptId, 180);
  if (!/^[a-zA-Z0-9:_-]+$/.test(attemptId)) throw new CommunityValidationError("测评记录无效", "INVALID_ATTEMPT");
  const reflection = text(input.reflection, COMMUNITY_LIMITS.reflection);
  const database = getDatabase();
  const row = asRow(database.prepare(`SELECT test_id, result_json, test_name, test_name_en FROM quiz_attempts WHERE user_id = ? AND id = ?`).get(userId, attemptId));
  if (!row) throw new CommunityValidationError("没有找到可分享的测评记录", "ATTEMPT_NOT_FOUND");
  const definition = await loadQuizDefinition(String(row.test_id));
  if (!definition) throw new CommunityValidationError("这项测评暂时不能公开分享", "QUIZ_NOT_FOUND");
  let result: QuizResult;
  try { result = JSON.parse(String(row.result_json)) as QuizResult; } catch { throw new CommunityValidationError("测评结果无效"); }
  const now = Date.now();
  const postId = id("post");
  try {
    database.prepare(`
      INSERT INTO community_posts
        (id, user_id, attempt_id, test_id, test_name, test_name_en, result_title, result_title_en, dimensions_json, reflection, show_result_type, show_dimensions, show_avatar, allow_comments, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(postId, userId, attemptId, definition.id, definition.title.zh, definition.title.en,
      resultTitle(definition, result, "zh"), resultTitle(definition, result, "en"), JSON.stringify(dimensions(definition, result)), reflection,
      bool(input.showResultType, true) ? 1 : 0, bool(input.showDimensions, false) ? 1 : 0, bool(input.showAvatar, true) ? 1 : 0,
      bool(input.allowComments, true) ? 1 : 0, now, now);
  } catch (cause) {
    if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed")) throw new CommunityValidationError("这次测评已经分享过了", "ALREADY_SHARED");
    throw cause;
  }
  return postId;
}

export function listCommunityPosts(viewerId: string | null, sort: "latest" | "resonant") {
  const database = getDatabase();
  const order = sort === "resonant" ? "reaction_count DESC, p.created_at DESC" : "p.created_at DESC";
  const rows = database.prepare(`
    SELECT p.*, u.name AS display_name, pr.avatar,
      (SELECT COUNT(*) FROM community_reactions r WHERE r.post_id = p.id) AS reaction_count,
      (SELECT COUNT(*) FROM community_comments c WHERE c.post_id = p.id AND c.deleted_at IS NULL) AS comment_count,
      CASE WHEN ? IS NOT NULL AND EXISTS (SELECT 1 FROM community_reactions vr WHERE vr.post_id = p.id AND vr.user_id = ?) THEN 1 ELSE 0 END AS reacted
    FROM community_posts p
    JOIN "user" u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = p.user_id
    WHERE p.deleted_at IS NULL
    ORDER BY ${order}
    LIMIT ?
  `).all(viewerId, viewerId, COMMUNITY_LIMITS.pageSize) as Array<Record<string, unknown>>;
  if (!rows.length) return [];
  const postIds = rows.map((row) => String(row.id));
  const placeholders = postIds.map(() => "?").join(",");
  const commentRows = database.prepare(`
    SELECT c.*, u.name AS display_name, p.user_id AS post_user_id
    FROM community_comments c
    JOIN "user" u ON u.id = c.user_id
    JOIN community_posts p ON p.id = c.post_id
    WHERE c.post_id IN (${placeholders}) AND c.deleted_at IS NULL
    ORDER BY c.created_at ASC
  `).all(...postIds) as Array<Record<string, unknown>>;
  const comments = new Map<string, CommunityComment[]>();
  for (const row of commentRows) {
    const postId = String(row.post_id);
    const list = comments.get(postId) ?? [];
    if (list.length >= COMMUNITY_LIMITS.maxCommentsPerPost) continue;
    list.push({
      id: String(row.id), postId, parentId: typeof row.parent_id === "string" ? row.parent_id : null,
      body: String(row.body), createdAt: Number(row.created_at), author: { displayName: String(row.display_name) },
      isAuthor: viewerId === row.user_id, canDelete: Boolean(viewerId && (viewerId === row.user_id || viewerId === row.post_user_id)),
    });
    comments.set(postId, list);
  }
  return rows.map((row): CommunityPost => ({
    id: String(row.id), testId: String(row.test_id), testName: String(row.test_name), testNameEn: String(row.test_name_en),
    resultTitle: row.show_result_type ? String(row.result_title || "") || null : null,
    resultTitleEn: row.show_result_type ? String(row.result_title_en || "") || null : null,
    dimensions: row.show_dimensions ? parseDimensions(row.dimensions_json) : [], reflection: String(row.reflection),
    showResultType: Boolean(row.show_result_type), showDimensions: Boolean(row.show_dimensions), showAvatar: Boolean(row.show_avatar),
    allowComments: Boolean(row.allow_comments), createdAt: Number(row.created_at),
    author: { displayName: String(row.display_name), avatar: row.show_avatar && typeof row.avatar === "string" ? row.avatar : "" },
    reactionCount: Number(row.reaction_count), commentCount: Number(row.comment_count), reacted: Boolean(row.reacted),
    isAuthor: viewerId === row.user_id, comments: comments.get(String(row.id)) ?? [],
  }));
}

export function deleteCommunityPost(userId: string, postId: string) {
  const result = getDatabase().prepare("DELETE FROM community_posts WHERE id = ? AND user_id = ?").run(postId, userId);
  return result.changes > 0;
}

export function setCommunityReaction(userId: string, postId: string, active: boolean) {
  const database = getDatabase();
  const post = asRow(database.prepare("SELECT id FROM community_posts WHERE id = ? AND deleted_at IS NULL").get(postId));
  if (!post) throw new CommunityValidationError("分享内容不存在", "POST_NOT_FOUND");
  if (active) database.prepare("INSERT OR IGNORE INTO community_reactions (post_id, user_id, created_at) VALUES (?, ?, ?)").run(postId, userId, Date.now());
  else database.prepare("DELETE FROM community_reactions WHERE post_id = ? AND user_id = ?").run(postId, userId);
}

export function createCommunityComment(userId: string, postId: string, value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const body = text(input.body, COMMUNITY_LIMITS.comment);
  const parentId = input.parentId == null || input.parentId === "" ? null : text(input.parentId, 100);
  return withTransaction(() => {
    const database = getDatabase();
    const post = asRow(database.prepare("SELECT allow_comments FROM community_posts WHERE id = ? AND deleted_at IS NULL").get(postId));
    if (!post) throw new CommunityValidationError("分享内容不存在", "POST_NOT_FOUND");
    if (!post.allow_comments) throw new CommunityValidationError("这篇分享没有开放留言", "COMMENTS_CLOSED");
    if (parentId) {
      const parent = asRow(database.prepare("SELECT parent_id FROM community_comments WHERE id = ? AND post_id = ? AND deleted_at IS NULL").get(parentId, postId));
      if (!parent || parent.parent_id) throw new CommunityValidationError("只能回复第一层留言", "INVALID_PARENT");
    }
    const commentId = id("comment");
    database.prepare("INSERT INTO community_comments (id, post_id, user_id, parent_id, body, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(commentId, postId, userId, parentId, body, Date.now());
    return commentId;
  });
}

export function deleteCommunityComment(userId: string, commentId: string) {
  const result = getDatabase().prepare(`
    DELETE FROM community_comments WHERE id = ? AND deleted_at IS NULL
      AND (user_id = ? OR post_id IN (SELECT id FROM community_posts WHERE user_id = ?))
  `).run(commentId, userId, userId);
  return result.changes > 0;
}

export function createCommunityReport(userId: string, value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const postId = typeof input.postId === "string" && input.postId ? input.postId : null;
  const commentId = typeof input.commentId === "string" && input.commentId ? input.commentId : null;
  const reasons = new Set(["spam", "abuse", "sexual", "privacy", "other"]);
  const reason = typeof input.reason === "string" && reasons.has(input.reason) ? input.reason : "other";
  if (Boolean(postId) === Boolean(commentId)) throw new CommunityValidationError("请选择要举报的内容");
  const database = getDatabase();
  const exists = postId
    ? asRow(database.prepare("SELECT id FROM community_posts WHERE id = ? AND deleted_at IS NULL").get(postId))
    : asRow(database.prepare("SELECT id FROM community_comments WHERE id = ? AND deleted_at IS NULL").get(commentId));
  if (!exists) throw new CommunityValidationError("内容不存在");
  try {
    database.prepare("INSERT INTO community_reports (id, reporter_id, post_id, comment_id, reason, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(id("report"), userId, postId, commentId, reason, Date.now());
  } catch (cause) {
    if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed")) return;
    throw cause;
  }
}
