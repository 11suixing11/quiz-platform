import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();

function compile(relativePath, dependencies = {}) {
  const source = readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }, fileName: relativePath });
  const testModule = { exports: {} };
  const localRequire = (request) => {
    if (request in dependencies) return dependencies[request];
    if (!request.startsWith(".") && !request.startsWith("@/")) return require(request);
    throw new Error(`Unexpected runtime import in ${relativePath}: ${request}`);
  };
  new Function("require", "module", "exports", outputText)(localRequire, testModule, testModule.exports);
  return testModule.exports;
}

const directory = mkdtempSync(path.join(os.tmpdir(), "quiz-platform-community-"));
process.env.DATABASE_PATH = path.join(directory, "test.sqlite");
const BetterSqlite3 = require("better-sqlite3");
const bootstrap = new BetterSqlite3(process.env.DATABASE_PATH);
bootstrap.exec('CREATE TABLE "user" (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL)');
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-a", "安静的人");
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-b", "同行者");
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-c", "第三位读者");
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-d", "第四位读者");
bootstrap.close();

const database = compile("src/lib/server/database.ts", { "server-only": {} });
const http = compile("src/lib/server/http.ts", {
  "server-only": {},
  "./auth": {
    isTrustedMutation: async () => true,
    requestAddress: (request) => request.headers.get("x-real-ip") || "unknown",
  },
  "./database": database,
});
const restrictedUsers = new Set();
class GovernanceError extends Error {
  constructor(message, code, status = 403) {
    super(message);
    this.code = code;
    this.status = status;
  }
}
const definition = {
  id: "sample-test", title: { zh: "示例测评", en: "Sample assessment" }, kind: "type",
  resultContent: { types: { quiet: { zh: { name: "安静观察者" }, en: { name: "Quiet observer" } } }, dimensions: {} },
};
const community = compile("src/lib/server/community.ts", {
  "server-only": {},
  "@/core/quiz": {
    getResultKey: (result) => result.type || "",
    getResultScore: () => null,
    getScoreBand: () => undefined,
    loadQuizDefinition: async (id) => id === definition.id ? definition : null,
  },
  "./database": database,
  "./governance": {
    GovernanceError,
    assertAccountCanWrite: (userId) => {
      if (restrictedUsers.has(userId)) throw new GovernanceError("账号当前为只读状态", "ACCOUNT_READ_ONLY");
      return "normal";
    },
  },
  "./badges": { wornBadgesForAuthors: () => new Map() },
});

const feedCalls = { community: [], journal: [] };
const feedCommunityItems = {
  assessment: Array.from({ length: 25 }, (_, index) => ({
    id: `feed-assessment-${index}`,
    kind: "assessment",
    title: "",
    contentLanguage: "zh",
    testId: "sample-test",
    testName: "示例测评",
    testNameEn: "Sample assessment",
    resultTitle: "安静观察者",
    resultTitleEn: "Quiet observer",
    dimensions: [],
    reflection: `assessment-${index}`,
    showResultType: true,
    showDimensions: false,
    showAvatar: false,
    allowComments: true,
    createdAt: 3_000 - index,
    author: { displayName: "测评用户", avatar: "" },
    reactionCount: 1,
    commentCount: 0,
    reacted: false,
    isAuthor: false,
    comments: [],
  })),
  text: Array.from({ length: 25 }, (_, index) => ({
    id: `feed-text-${index}`,
    kind: "text",
    title: `文字 ${index}`,
    contentLanguage: "zh",
    testId: "",
    testName: "",
    testNameEn: "",
    resultTitle: null,
    resultTitleEn: null,
    dimensions: [],
    reflection: `text-${index}`,
    showResultType: false,
    showDimensions: false,
    showAvatar: false,
    allowComments: true,
    createdAt: 2_000 - index,
    author: { displayName: "文字用户", avatar: "" },
    reactionCount: 0,
    commentCount: 0,
    reacted: false,
    isAuthor: false,
    comments: [],
  })),
};
const feedJournalItems = [{
  id: "feed-journal-high",
  title: "图像札记",
  body: "公开内容",
  contentLanguage: "zh",
  allowComments: true,
  isOwner: false,
  ownerId: "private-owner-id",
  author: { displayName: "图像作者", id: "private-author-id", avatar: "" },
  cover: { id: "asset-1", alt: "公开图片", decorative: false, caption: "", variants: { medium: { src: "/media/public/revision/asset-1/960.webp", width: 960, height: 640 } } },
  imageCount: 1,
  publishedAt: 4_000,
  reactionCount: 99,
  commentCount: 2,
  reacted: false,
}];
const feed = compile("src/lib/server/community-feed.ts", {
  "server-only": {},
  "./community": {
    listCommunityPosts: (_viewerId, sort, kind) => {
      feedCalls.community.push({ sort, kind });
      if (kind === "assessment") return feedCommunityItems.assessment;
      if (kind === "text") return feedCommunityItems.text;
      return [...feedCommunityItems.assessment, ...feedCommunityItems.text];
    },
  },
  "./journal": {
    listPublishedJournalFeedEntries: (_viewerId, sort) => {
      feedCalls.journal.push({ sort });
      return feedJournalItems;
    },
  },
  "./badges": { wornBadgesForAuthors: () => new Map() },
});

try {
  const sqlite = database.getDatabase();
  const rateRequest = new Request("http://localhost/api/test", { headers: { "x-real-ip": "203.0.113.9" } });
  assert.equal(http.allowRateLimitedRequest(rateRequest, "test-action", 2), true);
  assert.equal(http.allowRateLimitedRequest(rateRequest, "test-action", 2), true);
  assert.equal(http.allowRateLimitedRequest(rateRequest, "test-action", 2), false);
  const rateRow = sqlite.prepare("SELECT rate_key, attempt_count FROM request_rate_limits").get();
  assert.equal(rateRow.attempt_count, 3);
  assert.equal(rateRow.rate_key.includes("203.0.113.9"), false, "rate limits must not persist raw request addresses");

  const boundary = "quiz-platform-boundary";
  const multipartBytes = new TextEncoder().encode([
    `--${boundary}`,
    'Content-Disposition: form-data; name="field"',
    "",
    "bounded value",
    `--${boundary}--`,
    "",
  ].join("\r\n"));
  const chunkedRequest = (bytes) => new Request("http://localhost/api/upload", {
    method: "POST",
    headers: { "content-type": `multipart/form-data; boundary=${boundary}` },
    body: new ReadableStream({
      start(controller) {
        const midpoint = Math.max(1, Math.floor(bytes.byteLength / 2));
        controller.enqueue(bytes.subarray(0, midpoint));
        controller.enqueue(bytes.subarray(midpoint));
        controller.close();
      },
    }),
    duplex: "half",
  });
  const parsedForm = await http.readFormData(chunkedRequest(multipartBytes), multipartBytes.byteLength);
  assert.equal(parsedForm.get("field"), "bounded value");
  await assert.rejects(
    () => http.readFormData(chunkedRequest(multipartBytes), multipartBytes.byteLength - 1),
    /请求内容过大/,
    "chunked multipart bodies without Content-Length must still be bounded",
  );

  sqlite.prepare(`INSERT INTO quiz_attempts (user_id, id, test_id, result_json, answers_json, test_name, test_name_en, completed_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run("user-a", "attempt-1", definition.id, JSON.stringify({ type: "quiet" }), JSON.stringify([1, 2, 3]), definition.title.zh, definition.title.en, 1, 1);
  sqlite.prepare(`INSERT INTO profiles (user_id, avatar, bio, tags_json, updated_at) VALUES (?, ?, '', '[]', 1)`).run("user-a", "data:image/jpeg;base64,AA==");

  const postId = await community.createCommunityPost("user-a", { attemptId: "attempt-1", reflection: "我发现自己需要更慢一点。", showResultType: true, showDimensions: false, showAvatar: false, allowComments: true });
  const publicPosts = await community.listCommunityPosts(null, "latest");
  assert.equal(publicPosts.length, 1);
  assert.equal(publicPosts[0].resultTitle, "安静观察者");
  assert.equal(publicPosts[0].author.avatar, "");
  assert.equal(JSON.stringify(publicPosts).includes("1,2,3"), false, "raw answers must never enter the public response");
  await assert.rejects(() => community.createCommunityPost("user-a", { attemptId: "attempt-1", reflection: "重复" }), (error) => error.code === "ALREADY_SHARED");

  community.setCommunityReaction("user-b", postId, true);
  const commentId = community.createCommunityComment("user-b", postId, { body: "谢谢你的分享。" });
  const replyId = community.createCommunityComment("user-a", postId, { body: "也谢谢你的理解。", parentId: commentId });
  assert.throws(() => community.createCommunityComment("user-b", postId, { body: "不能再嵌套", parentId: replyId }), (error) => error.code === "INVALID_PARENT");
  const signedInPosts = await community.listCommunityPosts("user-b", "resonant");
  assert.equal(signedInPosts[0].reacted, true);
  assert.equal(signedInPosts[0].reactionCount, 1);
  assert.equal(signedInPosts[0].commentCount, 2);
  assert.equal(signedInPosts[0].comments.length, 2);

  community.createCommunityReport("user-b", { postId, reason: "spam" });
  const duplicate = community.createCommunityReport("user-b", { postId, reason: "spam" });
  assert.equal(duplicate.duplicate, true);
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM community_reports WHERE post_id = ?").get(postId).count, 1);
  community.createCommunityReport("user-b", { commentId: replyId, reason: "privacy" });
  assert.equal(sqlite.prepare("SELECT moderation_status FROM community_comments WHERE id = ?").get(replyId).moderation_status, "hidden", "a high-risk report hides on first report");
  community.createCommunityReport("user-c", { postId, reason: "spam" });
  const threshold = community.createCommunityReport("user-d", { postId, reason: "spam" });
  assert.equal(threshold.hidden, true);
  assert.equal(sqlite.prepare("SELECT moderation_status FROM community_posts WHERE id = ?").get(postId).moderation_status, "hidden", "three independent ordinary reports hide the post");
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM moderation_audit_log WHERE action = 'auto_hide'").get().count, 2);
  assert.equal((await community.listCommunityPosts(null, "latest")).length, 0, "hidden posts leave the public feed immediately");
  restrictedUsers.add("user-a");
  assert.throws(() => community.deleteCommunityComment("user-a", commentId), (error) => error.code === "ACCOUNT_READ_ONLY");
  assert.throws(() => community.deleteCommunityPost("user-a", postId), (error) => error.code === "ACCOUNT_READ_ONLY");
  restrictedUsers.delete("user-a");
  assert.equal(community.deleteCommunityComment("user-a", commentId), true, "post owner can moderate a response");
  assert.equal(community.deleteCommunityPost("user-a", postId), true);
  assert.equal((await community.listCommunityPosts(null, "latest")).length, 0);

  const resultOnlyId = await community.createCommunityPost("user-a", { attemptId: "attempt-1", reflection: "", showResultType: true });
  const resultOnly = (await community.listCommunityPosts(null, "latest")).find((post) => post.id === resultOnlyId);
  assert.equal(resultOnly.kind, "assessment");
  assert.equal(resultOnly.reflection, "", "an assessment result can be shared without a reflection");
  assert.equal(community.deleteCommunityPost("user-a", resultOnlyId), true);

  const textId = await community.createCommunityPost("user-b", { title: "给今天留一句话", body: "先把想法放在这里。" });
  const textPost = (await community.listCommunityPosts(null, "latest")).find((post) => post.id === textId);
  assert.equal(textPost.kind, "text");
  assert.equal(textPost.title, "给今天留一句话");
  assert.equal(textPost.reflection, "先把想法放在这里。");
  assert.equal(textPost.showAvatar, false, "text posts must not expose an avatar unless explicitly selected");
  assert.equal((await community.listCommunityPosts(null, "latest", "assessment")).every((post) => post.kind === "assessment"), true);
  assert.equal((await community.listCommunityPosts(null, "latest", "text")).every((post) => post.kind === "text"), true);
  await assert.rejects(() => community.createCommunityPost("user-b", { title: "", body: "" }), (error) => error.code === "EMPTY_POST");
  assert.equal(community.deleteCommunityPost("user-b", textId), true);

  // Seed alternating kinds so a post-kind query must apply its predicate
  // before the 20-row page limit rather than filtering a mixed page in JS.
  const feedSeed = sqlite.prepare(`
    INSERT INTO community_posts
      (id, user_id, post_kind, title, content_language, attempt_id, test_id, test_name, test_name_en,
       result_title, result_title_en, dimensions_json, reflection, show_result_type, show_dimensions,
       show_avatar, allow_comments, created_at, updated_at)
    VALUES (?, ?, ?, ?, 'zh', ?, ?, ?, ?, NULL, NULL, '[]', ?, 0, 0, 0, 1, ?, ?)
  `);
  const seedBase = Date.now() + 10_000;
  for (let index = 0; index < 21; index += 1) {
    feedSeed.run(`feed-smoke-text-${index}`, "user-b", "text", `文字 ${index}`, `post:feed-smoke-text-${index}`, "", "", "", `文字内容 ${index}`, seedBase + index * 2, seedBase + index * 2);
    feedSeed.run(`feed-smoke-assessment-${index}`, "user-a", "assessment", "", `post:feed-smoke-assessment-${index}`, definition.id, definition.title.zh, definition.title.en, `测评内容 ${index}`, seedBase + index * 2 + 1, seedBase + index * 2 + 1);
  }
  const filteredTexts = await community.listCommunityPosts(null, "latest", "text");
  const filteredAssessments = await community.listCommunityPosts(null, "latest", "assessment");
  assert.equal(filteredTexts.length, 20, "text filter must apply before LIMIT");
  assert.equal(filteredAssessments.length, 20, "assessment filter must apply before LIMIT");
  assert.equal(filteredTexts.every((post) => post.kind === "text"), true);
  assert.equal(filteredAssessments.every((post) => post.kind === "assessment"), true);
  sqlite.prepare("DELETE FROM community_posts WHERE id LIKE 'feed-smoke-%'").run();

  feedCalls.community.length = 0;
  feedCalls.journal.length = 0;
  const assessmentFeed = await feed.listCommunityFeed(null, "latest", "assessment");
  assert.equal(assessmentFeed.length, 20, "assessment feed keeps a full page after filtering");
  assert.equal(assessmentFeed.every((post) => post.source === "community" && post.kind === "assessment"), true);
  assert.deepEqual(feedCalls.community[0], { sort: "latest", kind: "assessment" });
  assert.equal(feedCalls.journal.length, 0, "assessment feed must not query journal entries");

  feedCalls.community.length = 0;
  feedCalls.journal.length = 0;
  const imageFeed = await feed.listCommunityFeed(null, "latest", "image");
  assert.equal(imageFeed.length, 1);
  assert.equal(imageFeed[0].source, "journal");
  assert.match(imageFeed[0].href, /from=community/);
  assert.equal(feedCalls.community.length, 0, "image feed must not query community posts");
  assert.deepEqual(feedCalls.journal[0], { sort: "latest" });
  assert.equal(Object.hasOwn(imageFeed[0], "ownerId"), false, "feed DTO must not expose journal owner ids");
  assert.equal(JSON.stringify(imageFeed).includes("private-author-id"), false, "feed DTO must not expose private author ids");

  feedCalls.community.length = 0;
  feedCalls.journal.length = 0;
  const resonantFeed = await feed.listCommunityFeed(null, "resonant", "all");
  assert.equal(resonantFeed[0].source, "journal", "resonant feed must use journal reaction ordering");
  assert.deepEqual(feedCalls.journal[0], { sort: "resonant" });
} finally {
  globalThis.__knowYourselfDatabase?.close();
  globalThis.__knowYourselfDatabase = undefined;
  rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
}

console.log("✓ Community sharing hides raw answers and enforces ownership, reactions, replies, reports, and deletion");
