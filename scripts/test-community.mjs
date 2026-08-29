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
  const publicPosts = community.listCommunityPosts(null, "latest");
  assert.equal(publicPosts.length, 1);
  assert.equal(publicPosts[0].resultTitle, "安静观察者");
  assert.equal(publicPosts[0].author.avatar, "");
  assert.equal(JSON.stringify(publicPosts).includes("1,2,3"), false, "raw answers must never enter the public response");
  await assert.rejects(() => community.createCommunityPost("user-a", { attemptId: "attempt-1", reflection: "重复" }), (error) => error.code === "ALREADY_SHARED");

  community.setCommunityReaction("user-b", postId, true);
  const commentId = community.createCommunityComment("user-b", postId, { body: "谢谢你的分享。" });
  const replyId = community.createCommunityComment("user-a", postId, { body: "也谢谢你的理解。", parentId: commentId });
  assert.throws(() => community.createCommunityComment("user-b", postId, { body: "不能再嵌套", parentId: replyId }), (error) => error.code === "INVALID_PARENT");
  const signedInPosts = community.listCommunityPosts("user-b", "resonant");
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
  assert.equal(community.listCommunityPosts(null, "latest").length, 0, "hidden posts leave the public feed immediately");
  restrictedUsers.add("user-a");
  assert.throws(() => community.deleteCommunityComment("user-a", commentId), (error) => error.code === "ACCOUNT_READ_ONLY");
  assert.throws(() => community.deleteCommunityPost("user-a", postId), (error) => error.code === "ACCOUNT_READ_ONLY");
  restrictedUsers.delete("user-a");
  assert.equal(community.deleteCommunityComment("user-a", commentId), true, "post owner can moderate a response");
  assert.equal(community.deleteCommunityPost("user-a", postId), true);
  assert.equal(community.listCommunityPosts(null, "latest").length, 0);
} finally {
  globalThis.__knowYourselfDatabase?.close();
  globalThis.__knowYourselfDatabase = undefined;
  rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
}

console.log("✓ Community sharing hides raw answers and enforces ownership, reactions, replies, reports, and deletion");
