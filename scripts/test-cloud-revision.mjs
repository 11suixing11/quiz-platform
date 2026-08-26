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
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
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

const directory = mkdtempSync(path.join(os.tmpdir(), "quiz-platform-revision-"));
const databasePath = path.join(directory, "test.sqlite");
process.env.DATABASE_PATH = databasePath;

const BetterSqlite3 = require("better-sqlite3");
const bootstrap = new BetterSqlite3(databasePath);
bootstrap.exec('CREATE TABLE "user" (id TEXT PRIMARY KEY NOT NULL)');
bootstrap.prepare('INSERT INTO "user" (id) VALUES (?)').run("user-a");
bootstrap.prepare('INSERT INTO "user" (id) VALUES (?)').run("user-b");
bootstrap.close();

const storage = { STORAGE_VERSION: 3 };
const cloudSchema = compile("src/lib/server/cloud-data-schema.ts", {
  "server-only": {},
  "@/core/quiz": { getQuizEntry: () => ({ questions: 1 }) },
  "@/lib/storage": storage,
});
const database = compile("src/lib/server/database.ts", { "server-only": {} });
const data = compile("src/lib/server/data.ts", {
  "server-only": {},
  "@/lib/storage": storage,
  "./cloud-data-schema": cloudSchema,
  "./database": database,
});
const routeHttp = {
  allowRateLimitedRequest: () => true,
  assertExpectedAccount: (request, userId) => request.headers.get("x-expected-user-id") === userId
    ? null
    : Response.json({ error: "account changed", code: "ACCOUNT_CHANGED" }, { status: 409 }),
  assertTrustedMutation: async () => null,
  error: (message, status, code) => Response.json({ error: message, ...(code ? { code } : {}) }, { status }),
  json: (value, status = 200) => Response.json(value, { status }),
  rateLimitResponse: () => Response.json({ error: "rate limited" }, { status: 429 }),
  readJson: (request) => request.json(),
};
const routeDependencies = {
  "@/lib/server/auth": { getCurrentUser: async () => ({ id: "user-a" }) },
  "@/lib/server/data": data,
  "@/lib/server/cloud-data-schema": cloudSchema,
  "@/lib/server/http": routeHttp,
};
const dataRoute = compile("src/app/api/me/data/route.ts", routeDependencies);
const importRoute = compile("src/app/api/me/data/import/route.ts", routeDependencies);

const mutable = {
  version: 3,
  preferences: { lang: "zh", theme: "system" },
  bookmarks: ["mbti"],
  sessions: {
    mbti: { answers: [0], currentQuestion: 0, timestamp: Date.now() },
  },
};

try {
  const initial = data.getUserSnapshotState("user-a");
  assert.equal(initial.revision, 0);

  const first = data.saveMutableSnapshot("user-a", mutable, 0, "replace");
  assert.equal(first.revision, 1);
  assert.deepEqual(first.snapshot.bookmarks, ["mbti"]);

  const accountHeaders = { "X-Expected-User-Id": "user-a" };
  const getResponse = await dataRoute.GET(new Request("https://example.test/api/me/data", { headers: accountHeaders }));
  assert.deepEqual(await getResponse.json().then(({ revision, snapshot }) => ({ revision, bookmarks: snapshot.bookmarks })), {
    revision: 1,
    bookmarks: ["mbti"],
  });

  assert.throws(
    () => data.saveMutableSnapshot("user-a", { ...mutable, bookmarks: ["big-five"] }, 0, "replace"),
    (error) => error instanceof data.DataRevisionConflictError
      && error.baseRevision === 0
      && error.currentRevision === 1,
  );
  const afterConflict = data.getUserSnapshotState("user-a");
  assert.equal(afterConflict.revision, 1);
  assert.deepEqual(afterConflict.snapshot.bookmarks, ["mbti"]);

  const stalePutResponse = await dataRoute.PUT(new Request("https://example.test/api/me/data", {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...accountHeaders },
    body: JSON.stringify({ baseRevision: 0, mode: "replace", snapshot: mutable }),
  }));
  assert.equal(stalePutResponse.status, 409);
  assert.deepEqual(await stalePutResponse.json().then(({ code, revision }) => ({ code, revision })), {
    code: "SYNC_REVISION_CONFLICT",
    revision: 1,
  });

  const staleImportResponse = await importRoute.PUT(new Request("https://example.test/api/me/data/import", {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...accountHeaders },
    body: JSON.stringify({ baseRevision: 0, mode: "merge", snapshot: { ...mutable, attempts: [] } }),
  }));
  assert.equal(staleImportResponse.status, 409);
  assert.equal((await staleImportResponse.json()).code, "SYNC_REVISION_CONFLICT");

  const wrongAccountResponse = await dataRoute.GET(new Request("https://example.test/api/me/data", {
    headers: { "X-Expected-User-Id": "user-b" },
  }));
  assert.equal(wrongAccountResponse.status, 409);
  assert.equal((await wrongAccountResponse.json()).code, "ACCOUNT_CHANGED");

  const imported = data.saveImportedSnapshot("user-a", {
    ...mutable,
    attempts: [{ id: "imported", testId: "mbti", result: { type: "INTJ" }, answers: [0], timestamp: 10 }],
  }, 1, "merge");
  assert.equal(imported.revision, 2);
  assert.equal(imported.snapshot.attempts.length, 1);

  data.saveAttemptRecord("user-a", { testId: "mbti", result: { type: "ENTP" }, timestamp: 20 });
  assert.equal(database.getSyncRevision("user-a"), 3);
  data.deleteAttemptRecord("user-a", "imported");
  assert.equal(database.getSyncRevision("user-a"), 4);
  data.clearAttemptRecords("user-a");
  assert.equal(database.getSyncRevision("user-a"), 5);
  data.clearQuizSessionRecord("user-a", "mbti");
  assert.equal(database.getSyncRevision("user-a"), 6);
  data.setBookmarkRecord("user-a", "big-five", true);
  assert.equal(database.getSyncRevision("user-a"), 7);
  data.setUserPreferences("user-a", { lang: "en", theme: "dark" });
  assert.equal(database.getSyncRevision("user-a"), 8);
  data.deleteUserData("user-a");
  assert.equal(database.getSyncRevision("user-a"), 9);

  const sqlite = database.getDatabase();
  sqlite.prepare(`
    INSERT INTO quiz_sessions
      (user_id, test_id, answers_json, current_question, updated_at, expires_at)
    VALUES (?, ?, '[]', 0, 1, 1)
  `).run("user-a", "expired-a");
  assert.equal(data.getUserSnapshotState("user-a").revision, 10);

  sqlite.prepare(`
    INSERT INTO quiz_sessions
      (user_id, test_id, answers_json, current_question, updated_at, expires_at)
    VALUES (?, ?, '[]', 0, 1, 1)
  `).run("user-b", "expired-b");
  assert.equal(database.pruneExpiredSessions(Date.now()), 1);
  assert.equal(database.getSyncRevision("user-b"), 1);

  assert.throws(() => cloudSchema.parseCloudPut({ mode: "replace", snapshot: mutable }), cloudSchema.CloudDataValidationError);
  assert.throws(() => cloudSchema.parseCloudImportPut({ baseRevision: -1, mode: "merge", snapshot: { ...mutable, attempts: [] } }), cloudSchema.CloudDataValidationError);
} finally {
  globalThis.__knowYourselfDatabase?.close();
  globalThis.__knowYourselfDatabase = undefined;
  rmSync(directory, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
}

console.log("✓ Cloud snapshot revisions reject stale writes and advance for every server mutation");
