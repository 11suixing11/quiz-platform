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
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: relativePath,
  });
  const testModule = { exports: {} };
  const localRequire = (request) => {
    if (request in dependencies) return dependencies[request];
    if (!request.startsWith(".") && !request.startsWith("@/")) return require(request);
    throw new Error(`Unexpected runtime import in ${relativePath}: ${request}`);
  };
  new Function("require", "module", "exports", outputText)(localRequire, testModule, testModule.exports);
  return testModule.exports;
}

const directory = mkdtempSync(path.join(os.tmpdir(), "quiz-platform-badges-"));
process.env.DATABASE_PATH = path.join(directory, "test.sqlite");
process.env.BETTER_AUTH_SECRET = "badge-test-secret-with-enough-length";
process.env.BETTER_AUTH_URL = "http://localhost:3333";
const BetterSqlite3 = require("better-sqlite3");
const bootstrap = new BetterSqlite3(process.env.DATABASE_PATH);
bootstrap.exec('CREATE TABLE "user" (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL DEFAULT "", emailVerified INTEGER NOT NULL DEFAULT 1)');
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-a", "安静的人");
bootstrap.prepare('INSERT INTO "user" (id, name) VALUES (?, ?)').run("user-b", "同行者");
bootstrap.close();

// One public route earns badges; every other id behaves like an internal
// module with no quiz definition and therefore no badge.
const definition = {
  id: "sample-test",
  title: { zh: "示例测评", en: "Sample assessment" },
  kind: "type",
  resultContent: {
    types: {
      quiet: { zh: { name: "安静观察者" }, en: { name: "Quiet observer" } },
      loud: { zh: { name: "热烈表达者" }, en: { name: "Loud expresser" } },
      bold: { zh: { name: "沉稳行动者" }, en: { name: "Steady actor" } },
      calm: { zh: { name: "从容陪伴者" }, en: { name: "Calm companion" } },
    },
    dimensions: {},
  },
};
const quiz = {
  getResultKey: (result) => result.type || "",
  getResultScore: () => null,
  getScoreBand: () => undefined,
  loadQuizDefinition: async (id) => (id === definition.id ? definition : null),
};
class GovernanceError extends Error {
  constructor(message, code, status = 403) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

const database = compile("src/lib/server/database.ts", { "server-only": {} });
const community = compile("src/lib/server/community.ts", {
  "server-only": {},
  "@/core/quiz": quiz,
  "./database": database,
  "./governance": { GovernanceError, assertAccountCanWrite: () => "normal" },
  "./badges": { wornBadgesForAuthors: () => new Map() },
});
// badges.ts reuses the compiled community's resultTitle, so a worn badge is
// labelled by exactly the function a public share of the same attempt uses.
const badges = compile("src/lib/server/badges.ts", {
  "server-only": {},
  "@/core/quiz": quiz,
  "./database": database,
  "./community": community,
});

try {
  const sqlite = database.getDatabase();
  assert.ok(
    (sqlite.prepare("PRAGMA table_info(profiles)").all()).some((column) => column.name === "show_badges"),
    "profiles must gain the show_badges opt-in column",
  );
  assert.ok(
    (sqlite.prepare("PRAGMA table_info(profile_badges)").all()).some((column) => column.name === "result_key"),
    "profile_badges must exist for the worn selection",
  );

  const insertAttempt = sqlite.prepare(`
    INSERT INTO quiz_attempts
      (user_id, id, test_id, result_json, answers_json, test_name, test_name_en, completed_at, created_at)
    VALUES (?, ?, ?, ?, '[]', ?, ?, ?, ?)
  `);
  // An internal route completes too, but without a definition it earns nothing.
  insertAttempt.run("user-a", "attempt-internal", "ab-personality", JSON.stringify({ type: "driven" }), "A/B型人格测试", "A/B Personality Test", 500, 500);
  insertAttempt.run("user-a", "attempt-1", definition.id, JSON.stringify({ type: "quiet" }), definition.title.zh, definition.title.en, 1_000, 1_000);
  insertAttempt.run("user-a", "attempt-2", definition.id, JSON.stringify({ type: "loud" }), definition.title.zh, definition.title.en, 2_000, 2_000);
  insertAttempt.run("user-a", "attempt-3", definition.id, JSON.stringify({ type: "quiet" }), definition.title.zh, definition.title.en, 3_000, 3_000);
  insertAttempt.run("user-a", "attempt-4", definition.id, JSON.stringify({ type: "bold" }), definition.title.zh, definition.title.en, 4_000, 4_000);
  insertAttempt.run("user-a", "attempt-5", definition.id, JSON.stringify({ type: "calm" }), definition.title.zh, definition.title.en, 5_000, 5_000);

  // 1. The collection derives from the account's own attempts.
  const collected = await badges.listCollectedBadges("user-a");
  assert.equal(collected.length, 4, "only public routes with definitions earn badges");
  const quiet = collected.find((badge) => badge.resultKey === "quiet");
  const loud = collected.find((badge) => badge.resultKey === "loud");
  assert.ok(quiet && loud, "both earned variants of the family appear");
  assert.equal(quiet.resultTitle, "安静观察者");
  assert.equal(quiet.resultTitleEn, "Quiet observer");
  assert.equal(quiet.testName, "示例测评", "the badge names the assessment it came from");
  assert.equal(quiet.earnedAt, 1_000, "earnedAt keeps the first completion");
  assert.equal(quiet.lastEarnedAt, 3_000, "lastEarnedAt keeps the most recent completion");
  assert.equal(loud.earnedAt, 2_000);

  // 9. A worn badge label equals the label a public share would print.
  const shareId = await community.createCommunityPost("user-a", { attemptId: "attempt-3", showResultType: true });
  const [sharedPost] = await community.listCommunityPosts(null, "latest");
  assert.equal(sharedPost.id, shareId);
  assert.equal(sharedPost.resultTitle, quiet.resultTitle, "badge label equals the community share label (zh)");
  assert.equal(sharedPost.resultTitleEn, quiet.resultTitleEn, "badge label equals the community share label (en)");

  // 2. Wearing replaces the whole selection and echoes it in order.
  const worn = await badges.setWornBadges("user-a", [
    { testId: definition.id, resultKey: "loud" },
    { testId: definition.id, resultKey: "quiet" },
  ]);
  assert.deepEqual(worn.map((badge) => badge.resultKey), ["loud", "quiet"], "the worn selection echoes in the requested order");
  assert.equal(worn[0].position, 0);
  const ownerWorn = await badges.listWornBadges("user-a", true);
  assert.deepEqual(ownerWorn.map((badge) => badge.resultKey), ["loud", "quiet"], "the owner view lists the stored selection");
  assert.equal(badges.showBadgesEnabled("user-a"), false, "show_badges defaults to off");

  // 3. More than three badges is rejected.
  await assert.rejects(
    () => badges.setWornBadges("user-a", ["quiet", "loud", "bold", "calm"].map((resultKey) => ({ testId: definition.id, resultKey }))),
    (error) => error.code === "BADGE_LIMIT_EXCEEDED",
  );
  // 4. A variant the account never earned is rejected.
  await assert.rejects(
    () => badges.setWornBadges("user-a", [{ testId: definition.id, resultKey: "distant" }]),
    (error) => error.code === "BADGE_NOT_EARNED",
  );
  // 5. An internal route has no definition, so nothing was earned there.
  await assert.rejects(
    () => badges.setWornBadges("user-a", [{ testId: "ab-personality", resultKey: "driven" }]),
    (error) => error.code === "BADGE_NOT_EARNED",
  );
  await assert.rejects(
    () => badges.setWornBadges("user-a", [{ testId: definition.id }]),
    (error) => error.code === "BADGE_INVALID",
  );
  await assert.rejects(
    () => badges.setWornBadges("user-a", [{ testId: definition.id, resultKey: "quiet" }, { testId: definition.id, resultKey: "quiet" }]),
    (error) => error.code === "BADGE_INVALID",
    "duplicating one badge in a single request is rejected",
  );

  // 6. Worn badges stay private until the author opts in.
  sqlite.prepare(`INSERT INTO profiles (user_id, avatar, bio, tags_json, show_badges, updated_at) VALUES ('user-a', '', '', '[]', 0, 1)`).run();
  assert.equal((await badges.listWornBadges("user-a", false)).length, 0, "the non-owner projection respects the opt-in");
  let authorBadges = await badges.wornBadgesForAuthors(["user-a", "user-b"]);
  assert.equal(authorBadges.has("user-a"), false, "worn badges stay invisible to other readers by default");
  sqlite.prepare("UPDATE profiles SET show_badges = 1 WHERE user_id = 'user-a'").run();
  authorBadges = await badges.wornBadgesForAuthors(["user-a", "user-b"]);
  const shown = authorBadges.get("user-a") ?? [];
  assert.deepEqual(shown.map((badge) => badge.resultTitle), ["热烈表达者", "安静观察者"], "opting in reveals the worn selection in position order");
  assert.equal(Object.hasOwn(shown[0], "resultKey"), false, "the public projection must not expose the internal result key");
  assert.equal(JSON.stringify(shown).includes("position"), false, "the public projection must not expose the internal position");

  // 7. A cloud "replace" can delete attempts; stale worn rows are filtered at read time.
  sqlite.prepare("DELETE FROM quiz_attempts WHERE user_id = 'user-a' AND id = 'attempt-2'").run();
  assert.equal((await badges.listCollectedBadges("user-a")).some((badge) => badge.resultKey === "loud"), false, "deleting the attempt removes the variant from the collection");
  assert.deepEqual(
    (await badges.listWornBadges("user-a", true)).map((badge) => badge.resultKey),
    ["quiet"],
    "a stale worn row is filtered at read time",
  );
  assert.equal(
    sqlite.prepare("SELECT COUNT(*) AS count FROM profile_badges WHERE user_id = 'user-a' AND result_key = 'loud'").get().count,
    1,
    "filtering happens at read time without rewriting the stored row",
  );
  authorBadges = await badges.wornBadgesForAuthors(["user-a"]);
  assert.deepEqual((authorBadges.get("user-a") ?? []).map((badge) => badge.resultTitle), ["安静观察者"], "the public projection drops stale rows too");

  // 8. Account deletion cascades to the worn selection.
  sqlite.prepare('DELETE FROM "user" WHERE id = \'user-a\'').run();
  assert.equal(sqlite.prepare("SELECT COUNT(*) AS count FROM profile_badges WHERE user_id = 'user-a'").get().count, 0, "account deletion cascades to the worn badges");
} finally {
  globalThis.__knowYourselfDatabase?.close();
  globalThis.__knowYourselfDatabase = undefined;
  rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
}

console.log("✓ Badges derive from server-scored attempts, cap wearing at three, stay opt-in private, and cascade on deletion");
