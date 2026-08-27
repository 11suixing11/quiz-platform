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
bootstrap.close();

const database = compile("src/lib/server/database.ts", { "server-only": {} });
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
});

try {
  const sqlite = database.getDatabase();
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

  community.createCommunityReport("user-b", { postId, reason: "privacy" });
  community.createCommunityReport("user-b", { postId, reason: "privacy" });
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM community_reports").get().count, 1);
  assert.equal(community.deleteCommunityComment("user-a", commentId), true, "post owner can moderate a response");
  assert.equal(community.deleteCommunityPost("user-a", postId), true);
  assert.equal(community.listCommunityPosts(null, "latest").length, 0);
} finally {
  globalThis.__knowYourselfDatabase?.close();
  globalThis.__knowYourselfDatabase = undefined;
  rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
}

console.log("✓ Community sharing hides raw answers and enforces ownership, reactions, replies, reports, and deletion");
