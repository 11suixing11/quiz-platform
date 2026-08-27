import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const source = readFileSync(path.join(root, "src/lib/share.ts"), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  fileName: "src/lib/share.ts",
});
const testModule = { exports: {} };
new Function("module", "exports", outputText)(testModule, testModule.exports);
const { copyOrShare } = testModule.exports;

const payload = { title: "结果", text: "我完成了测评。", url: "https://example.test/test/mbti/" };
const copied = [];
let nativeShareCalls = 0;
assert.equal(await copyOrShare({
  clipboard: { writeText: async (value) => copied.push(value) },
  share: async () => { nativeShareCalls += 1; },
}, payload), "copied");
assert.deepEqual(copied, ["我完成了测评。 https://example.test/test/mbti/"]);
assert.equal(nativeShareCalls, 0, "copy should not open the native share sheet");

assert.equal(await copyOrShare({
  share: async () => {},
}, payload), "shared");

assert.equal(await copyOrShare({
  clipboard: { writeText: async () => { throw new Error("clipboard blocked"); } },
  share: async () => {},
}, payload), "shared");

assert.equal(await copyOrShare({
  share: async () => { throw new DOMException("cancelled", "AbortError"); },
}, payload), "cancelled");

await assert.rejects(() => copyOrShare({}, payload), /SHARE_UNAVAILABLE/);
console.log("✓ Share action copies first, falls back to native share, and handles cancellation");
