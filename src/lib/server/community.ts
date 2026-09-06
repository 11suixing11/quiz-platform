import "server-only";

import { randomBytes } from "node:crypto";
import { getResultKey, getResultScore, getScoreBand, loadQuizDefinition, type QuizDefinition, type QuizResult } from "@/core/quiz";
import { wornBadgesForAuthors, type AuthorBadge } from "./badges";
import { asRow, getDatabase, withTransaction } from "./database";
import { assertAccountCanWrite, GovernanceError } from "./governance";

export const COMMUNITY_LIMITS = {
  title: 120,
  reflection: 500,
  body: 12_000,
  comment: 500,
  pageSize: 20,
  maxCommentsPerPost: 60,
} as const;

export class CommunityValidationError extends Error {
  constructor(message: string, public readonly code = "INVALID_DATA", public readonly status = 400) {
    super(message);
    this.name = "CommunityValidationError";
  }
}

const HIGH_RISK_REPORT_REASONS = new Set(["illegal", "minor_sexual", "nonconsensual_intimate", "privacy", "explicit_harm"]);
const REPORT_REASONS = new Set([...HIGH_RISK_REPORT_REASONS, "spam", "abuse", "sexual", "copyright", "other"]);

function assertCommunityWrite(userId: string) {
  try {
    assertAccountCanWrite(userId);
  } catch (cause) {
    if (cause instanceof GovernanceError) throw new CommunityValidationError(cause.message, cause.code, cause.status);
    throw cause;
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
  author: { displayName: string; badges: AuthorBadge[] };
  isAuthor: boolean;
  canDelete: boolean;
}

export interface CommunityPost {
  id: string;
  kind: "assessment" | "text";
  title: string;
  contentLanguage: string;
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
  author: { displayName: string; avatar: string; badges: AuthorBadge[] };
  reactionCount: number;
  commentCount: number;
  reacted: boolean;
  isAuthor: boolean;
  comments: CommunityComment[];
}

export type CommunityPostKind = "assessment" | "text";

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

function optionalText(value: unknown, max: number) {
  if (value === undefined || value === null) return "";
  return text(value, max, false);
}

function bool(value: unknown, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

/**
 * The one label derivation shared by community shares and badge collection:
 * a badge worn next to an author name is always the label a share of the
 * same attempt would print.
 */
export function resultTitle(definition: QuizDefinition, result: QuizResult, language: Lang) {
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
  assertCommunityWrite(userId);
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const rawAttemptId = input.attemptId;
  if (rawAttemptId !== undefined && rawAttemptId !== null && typeof rawAttemptId !== "string") {
    throw new CommunityValidationError("测评记录无效", "INVALID_ATTEMPT");
  }
  const attemptId = typeof rawAttemptId === "string" ? rawAttemptId.trim() : "";
  if (attemptId && !/^[a-zA-Z0-9:_-]+$/.test(attemptId)) throw new CommunityValidationError("测评记录无效", "INVALID_ATTEMPT");
  const isAssessment = Boolean(attemptId);
  const title = optionalText(input.title, COMMUNITY_LIMITS.title);
  const reflection = isAssessment
    ? optionalText(input.reflection ?? input.body, COMMUNITY_LIMITS.reflection)
    : optionalText(input.body ?? input.reflection, COMMUNITY_LIMITS.body);
  if (!isAssessment && !title && !reflection) throw new CommunityValidationError("请至少写下一点内容", "EMPTY_POST");
  const database = getDatabase();
  let testId = "";
  let testName = "";
  let testNameEn = "";
  let resultTitleZh: string | null = null;
  let resultTitleEn: string | null = null;
  let dimensionJson = "[]";
  if (isAssessment) {
    const row = asRow(database.prepare(`SELECT test_id, result_json, test_name, test_name_en FROM quiz_attempts WHERE user_id = ? AND id = ?`).get(userId, attemptId));
    if (!row) throw new CommunityValidationError("没有找到可分享的测评记录", "ATTEMPT_NOT_FOUND");
    const definition = await loadQuizDefinition(String(row.test_id));
    if (!definition) throw new CommunityValidationError("这项测评暂时不能公开分享", "QUIZ_NOT_FOUND");
    let result: QuizResult;
    try { result = JSON.parse(String(row.result_json)) as QuizResult; } catch { throw new CommunityValidationError("测评结果无效"); }
    testId = definition.id;
    testName = definition.title.zh;
    testNameEn = definition.title.en;
    resultTitleZh = resultTitle(definition, result, "zh");
    resultTitleEn = resultTitle(definition, result, "en");
    dimensionJson = JSON.stringify(dimensions(definition, result));
  }
  const now = Date.now();
  const postId = id("post");
  const storedAttemptId = isAssessment ? attemptId : `post:${postId}`;
  try {
    database.prepare(`
      INSERT INTO community_posts
        (id, user_id, post_kind, title, content_language, attempt_id, test_id, test_name, test_name_en, result_title, result_title_en, dimensions_json, reflection, show_result_type, show_dimensions, show_avatar, allow_comments, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(postId, userId, isAssessment ? "assessment" : "text", title, typeof input.contentLanguage === "string" && input.contentLanguage.trim() ? input.contentLanguage.trim().slice(0, 16) : "zh", storedAttemptId, testId, testName, testNameEn,
      resultTitleZh, resultTitleEn, dimensionJson, reflection,
      bool(input.showResultType, true) ? 1 : 0, bool(input.showDimensions, false) ? 1 : 0,
      bool(input.showAvatar, isAssessment) ? 1 : 0,
      bool(input.allowComments, true) ? 1 : 0, now, now);
  } catch (cause) {
    if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed")) throw new CommunityValidationError("这次测评已经分享过了", "ALREADY_SHARED");
    throw cause;
  }
  return postId;
}

/**
 * List visible community posts. `kind` is intentionally optional so existing
 * callers that consume the complete community stream keep their behaviour.
 * When present, the predicate is applied in SQL before the page-size limit so
 * a busy stream of the other kind cannot starve the requested filter.
 */
export async function listCommunityPosts(viewerId: string | null, sort: "latest" | "resonant" = "latest", kind?: CommunityPostKind): Promise<CommunityPost[]> {
  const database = getDatabase();
  const order = sort === "resonant"
    ? "reaction_count DESC, p.created_at DESC, p.id DESC"
    : "p.created_at DESC, p.id DESC";
  const kindFilter = kind === "assessment" || kind === "text" ? " AND p.post_kind = ?" : "";
  const queryArgs: unknown[] = [viewerId, viewerId];
  if (kindFilter) queryArgs.push(kind);
  queryArgs.push(COMMUNITY_LIMITS.pageSize);
  const rows = database.prepare(`
    SELECT p.*, u.name AS display_name, pr.avatar,
      (SELECT COUNT(*) FROM community_reactions r WHERE r.post_id = p.id) AS reaction_count,
      (SELECT COUNT(*) FROM community_comments c WHERE c.post_id = p.id AND c.deleted_at IS NULL AND c.moderation_status = 'visible') AS comment_count,
      CASE WHEN ? IS NOT NULL AND EXISTS (SELECT 1 FROM community_reactions vr WHERE vr.post_id = p.id AND vr.user_id = ?) THEN 1 ELSE 0 END AS reacted
    FROM community_posts p
    JOIN "user" u ON u.id = p.user_id
    LEFT JOIN profiles pr ON pr.user_id = p.user_id
    WHERE p.deleted_at IS NULL AND p.moderation_status = 'visible'${kindFilter}
    ORDER BY ${order}
    LIMIT ?
  `).all(...queryArgs) as Array<Record<string, unknown>>;
  if (!rows.length) return [];
  const postIds = rows.map((row) => String(row.id));
  const placeholders = postIds.map(() => "?").join(",");
  const commentRows = database.prepare(`
    SELECT c.*, u.name AS display_name, p.user_id AS post_user_id
    FROM community_comments c
    JOIN "user" u ON u.id = c.user_id
    JOIN community_posts p ON p.id = c.post_id
    WHERE c.post_id IN (${placeholders}) AND c.deleted_at IS NULL AND c.moderation_status = 'visible'
    ORDER BY c.created_at ASC
  `).all(...postIds) as Array<Record<string, unknown>>;
  const comments = new Map<string, CommunityComment[]>();
  const commentAuthorIds: string[] = [];
  const commentAuthorOf = new Map<string, string>();
  for (const row of commentRows) {
    const postId = String(row.post_id);
    const list = comments.get(postId) ?? [];
    if (list.length >= COMMUNITY_LIMITS.maxCommentsPerPost) continue;
    const commentUserId = String(row.user_id);
    commentAuthorIds.push(commentUserId);
    const commentId = String(row.id);
    commentAuthorOf.set(commentId, commentUserId);
    list.push({
      id: commentId, postId, parentId: typeof row.parent_id === "string" ? row.parent_id : null,
      body: String(row.body), createdAt: Number(row.created_at), author: { displayName: String(row.display_name), badges: [] },
      isAuthor: viewerId === commentUserId, canDelete: Boolean(viewerId && (viewerId === commentUserId || viewerId === row.post_user_id)),
    });
    comments.set(postId, list);
  }
  const authorBadges = await wornBadgesForAuthors([...rows.map((row) => String(row.user_id)), ...commentAuthorIds]);
  for (const list of comments.values()) {
    for (const comment of list) comment.author.badges = authorBadges.get(commentAuthorOf.get(comment.id) ?? "") ?? [];
  }
  return rows.map((row): CommunityPost => ({
    id: String(row.id), kind: String(row.post_kind ?? (row.test_id ? "assessment" : "text")) === "text" ? "text" : "assessment",
    title: String(row.title ?? ""), contentLanguage: String(row.content_language ?? "zh"),
    testId: String(row.test_id ?? ""), testName: String(row.test_name ?? ""), testNameEn: String(row.test_name_en ?? ""),
    resultTitle: row.show_result_type ? String(row.result_title || "") || null : null,
    resultTitleEn: row.show_result_type ? String(row.result_title_en || "") || null : null,
    dimensions: row.show_dimensions ? parseDimensions(row.dimensions_json) : [], reflection: String(row.reflection),
    showResultType: Boolean(row.show_result_type), showDimensions: Boolean(row.show_dimensions), showAvatar: Boolean(row.show_avatar),
    allowComments: Boolean(row.allow_comments), createdAt: Number(row.created_at),
    author: {
      displayName: String(row.display_name),
      avatar: row.show_avatar && typeof row.avatar === "string" ? row.avatar : "",
      badges: authorBadges.get(String(row.user_id)) ?? [],
    },
    reactionCount: Number(row.reaction_count), commentCount: Number(row.comment_count), reacted: Boolean(row.reacted),
    isAuthor: viewerId === row.user_id, comments: comments.get(String(row.id)) ?? [],
  }));
}

export function deleteCommunityPost(userId: string, postId: string) {
  assertCommunityWrite(userId);
  const result = getDatabase().prepare("DELETE FROM community_posts WHERE id = ? AND user_id = ?").run(postId, userId);
  return result.changes > 0;
}

export function setCommunityReaction(userId: string, postId: string, active: boolean) {
  assertCommunityWrite(userId);
  const database = getDatabase();
  const post = asRow(database.prepare("SELECT id FROM community_posts WHERE id = ? AND deleted_at IS NULL AND moderation_status = 'visible'").get(postId));
  if (!post) throw new CommunityValidationError("分享内容不存在", "POST_NOT_FOUND");
  if (active) database.prepare("INSERT OR IGNORE INTO community_reactions (post_id, user_id, created_at) VALUES (?, ?, ?)").run(postId, userId, Date.now());
  else database.prepare("DELETE FROM community_reactions WHERE post_id = ? AND user_id = ?").run(postId, userId);
}

export function createCommunityComment(userId: string, postId: string, value: unknown) {
  assertCommunityWrite(userId);
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const body = text(input.body, COMMUNITY_LIMITS.comment);
  const parentId = input.parentId == null || input.parentId === "" ? null : text(input.parentId, 100);
  return withTransaction(() => {
    const database = getDatabase();
    const post = asRow(database.prepare("SELECT allow_comments FROM community_posts WHERE id = ? AND deleted_at IS NULL AND moderation_status = 'visible'").get(postId));
    if (!post) throw new CommunityValidationError("分享内容不存在", "POST_NOT_FOUND");
    if (!post.allow_comments) throw new CommunityValidationError("这篇分享没有开放留言", "COMMENTS_CLOSED");
    if (parentId) {
      const parent = asRow(database.prepare("SELECT parent_id FROM community_comments WHERE id = ? AND post_id = ? AND deleted_at IS NULL AND moderation_status = 'visible'").get(parentId, postId));
      if (!parent || parent.parent_id) throw new CommunityValidationError("只能回复第一层留言", "INVALID_PARENT");
    }
    const commentId = id("comment");
    database.prepare("INSERT INTO community_comments (id, post_id, user_id, parent_id, body, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(commentId, postId, userId, parentId, body, Date.now());
    return commentId;
  });
}

export function deleteCommunityComment(userId: string, commentId: string) {
  assertCommunityWrite(userId);
  const result = getDatabase().prepare(`
    DELETE FROM community_comments WHERE id = ? AND deleted_at IS NULL
      AND (user_id = ? OR post_id IN (SELECT id FROM community_posts WHERE user_id = ?))
  `).run(commentId, userId, userId);
  return result.changes > 0;
}

export function createCommunityReport(userId: string, value: unknown) {
  assertCommunityWrite(userId);
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new CommunityValidationError("请求格式无效");
  const input = value as Record<string, unknown>;
  const postId = typeof input.postId === "string" && input.postId ? input.postId : null;
  const commentId = typeof input.commentId === "string" && input.commentId ? input.commentId : null;
  const reason = typeof input.reason === "string" && REPORT_REASONS.has(input.reason) ? input.reason : "other";
  if (Boolean(postId) === Boolean(commentId)) throw new CommunityValidationError("请选择要举报的内容");
  return withTransaction(() => {
    const database = getDatabase();
    const exists = postId
      ? asRow(database.prepare("SELECT id FROM community_posts WHERE id = ? AND deleted_at IS NULL AND moderation_status = 'visible'").get(postId))
      : asRow(database.prepare("SELECT id FROM community_comments WHERE id = ? AND deleted_at IS NULL AND moderation_status = 'visible'").get(commentId));
    if (!exists) throw new CommunityValidationError("内容不存在", "CONTENT_NOT_FOUND", 404);
    try {
      database.prepare("INSERT INTO community_reports (id, reporter_id, post_id, comment_id, reason, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(id("report"), userId, postId, commentId, reason, Date.now());
    } catch (cause) {
      if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed")) return { hidden: false, duplicate: true };
      throw cause;
    }
    const count = Number(asRow(database.prepare(postId
      ? "SELECT COUNT(DISTINCT reporter_id) AS count FROM community_reports WHERE post_id = ?"
      : "SELECT COUNT(DISTINCT reporter_id) AS count FROM community_reports WHERE comment_id = ?").get(postId ?? commentId))?.count ?? 0);
    const hidden = HIGH_RISK_REPORT_REASONS.has(reason) || count >= 3;
    if (hidden) {
      const now = Date.now();
      if (postId) database.prepare("UPDATE community_posts SET moderation_status = 'hidden', hidden_at = ? WHERE id = ? AND moderation_status = 'visible'").run(now, postId);
      else database.prepare("UPDATE community_comments SET moderation_status = 'hidden', hidden_at = ? WHERE id = ? AND moderation_status = 'visible'").run(now, commentId);
      database.prepare(`
        INSERT INTO moderation_audit_log (id, actor_type, action, target_type, target_id, reason, metadata_json, created_at)
        VALUES (?, 'system', 'auto_hide', ?, ?, ?, ?, ?)
      `).run(id("audit"), postId ? "community_post" : "community_comment", postId ?? commentId, reason, JSON.stringify({ independentReporters: count }), now);
    }
    return { hidden, duplicate: false };
  });
}
