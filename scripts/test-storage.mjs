import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
async function compile(relativePath, dependencies = {}) {
  const source = await readFile(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }, fileName: relativePath });
  const testModule = { exports: {} };
  const requireModule = (request) => { if (request in dependencies) return dependencies[request]; throw new Error(`Unexpected runtime import in ${relativePath}: ${request}`); };
  new Function("require", "module", "exports", outputText)(requireModule, testModule, testModule.exports);
  return testModule.exports;
}

class LocalStorageMock {
  constructor(entries = {}) { this.values = new Map(Object.entries(entries).map(([key, value]) => [key, String(value)])); }
  get length() { return this.values.size; }
  key(index) { return Array.from(this.values.keys())[index] ?? null; }
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { this.values.set(key, String(value)); }
  removeItem(key) { this.values.delete(key); }
  clear() { this.values.clear(); }
}

function setupStorage(entries = {}) {
  const localStorage = new LocalStorageMock(entries);
  const events = [];
  globalThis.window = { localStorage, dispatchEvent(event) { events.push(event); return true; } };
  globalThis.Blob ??= class Blob { constructor(parts) { this.size = parts.join("").length; } };
  return { localStorage, events };
}

const storage = await compile("src/lib/storage.ts");
const registry = await compile("src/lib/test-registry.ts");
const dataManager = await compile("src/lib/data-manager.ts", { "./storage": storage, "./test-registry": registry });

{
  const { localStorage } = setupStorage({
    "quiz-platform-theme": "dark",
    "quiz-platform-lang": "en",
    "quiz-platform:v2:attempts": JSON.stringify([{ testId: "legacy", result: { type: "OLD" }, timestamp: 1 }]),
  });
  assert.deepEqual(storage.getAttempts(), []);
  assert.deepEqual(storage.getBookmarks(), []);
  assert.deepEqual(storage.getPreferences(), { lang: "zh", theme: "system" });
  assert.equal(storage.getQuizSession("legacy"), null);
  assert.equal(localStorage.getItem(storage.STORAGE_KEY), null);
}

{
  const { events, localStorage } = setupStorage();
  const timestamp = 1_700_000_000_000;
  const attempt = storage.saveAttempt({ testId: "mbti", result: { type: "INTJ" }, answers: [1, 2], timestamp });
  storage.setBookmarks(["mbti", "big-five", "mbti"]);
  storage.setPreference("lang", "en");
  storage.setPreference("theme", "dark");
  storage.saveQuizSession("big-five", [1, null, 2], 1);
  assert.equal(storage.getAttempts().length, 1);
  assert.equal(storage.getAttemptById(attempt.id)?.testId, "mbti");
  assert.deepEqual(storage.getBookmarks(), ["mbti", "big-five"]);
  assert.deepEqual(storage.getPreferences(), { lang: "en", theme: "dark" });
  assert.deepEqual(storage.getQuizSession("big-five")?.answers, [1, null, 2]);
  assert.equal(JSON.parse(localStorage.getItem(storage.STORAGE_KEY)).version, 3);
  assert(events.some((event) => event.type === storage.STORAGE_EVENT));
}

{
  setupStorage();
  const base = { version: 3, preferences: { lang: "en", theme: "light" }, attempts: [{ id: "a", testId: "mbti", result: { type: "ENTP" }, answers: [0], timestamp: 10 }], bookmarks: ["mbti"], sessions: {} };
  const merge = dataManager.importData(JSON.stringify(base), "merge");
  assert.equal(merge.success, true);
  assert.equal(storage.getAttempts().length, 1);
  assert.equal(storage.getLanguage(), "en");
  const replace = dataManager.importData(JSON.stringify({ ...base, attempts: [{ id: "b", testId: "big-five", result: { percentages: { O: 80 } }, answers: [1], timestamp: 20 }], bookmarks: ["big-five"] }), "replace");
  assert.equal(replace.success, true);
  assert.equal(replace.imported, 1);
  assert.deepEqual(storage.getAttempts().map((item) => item.id), ["b"]);
  assert.deepEqual(storage.getBookmarks(), ["big-five"]);
}

{
  setupStorage({
    ["know-yourself:v3"]: JSON.stringify({
      version: 3,
      preferences: { lang: "zh", theme: "system" },
      attempts: [],
      bookmarks: [],
      sessions: { mbti: { answers: [1, null], currentQuestion: 99, timestamp: Date.now() } },
    }),
  });
  assert.equal(storage.getQuizSession("mbti")?.currentQuestion, 1);
}

{
  setupStorage();
  storage.saveAttempt({ testId: "mbti", result: { type: "INTJ" }, answers: [], timestamp: 1 });
  storage.setBookmarks(["mbti"]);
  storage.saveQuizSession("mbti", [null], 0);
  storage.clearAllData();
  assert.deepEqual(storage.getAttempts(), []);
  assert.deepEqual(storage.getBookmarks(), []);
  assert.equal(storage.getQuizSession("mbti"), null);
  assert.deepEqual(storage.getPreferences(), { lang: "zh", theme: "system" });
}

console.log("✓ Storage v3 snapshot, history, bookmarks, sessions, import/export, and legacy isolation");
