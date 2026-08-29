import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import sharp from "sharp";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();
const moduleCache = new Map();

function resolveModule(request, parentFile) {
  const base = request.startsWith("@/")
    ? path.join(root, "src", request.slice(2))
    : path.resolve(path.dirname(parentFile), request);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, path.join(base, "index.ts")]) {
    if (existsSync(candidate)) return candidate;
  }
  return base;
}

function loadModule(filePath) {
  const normalized = path.normalize(filePath);
  if (moduleCache.has(normalized)) return moduleCache.get(normalized).exports;
  const source = readFileSync(normalized, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: normalized,
  });
  const record = { exports: {} };
  moduleCache.set(normalized, record);
  const localRequire = (request) => request.startsWith(".") || request.startsWith("@/")
    ? loadModule(resolveModule(request, normalized))
    : require(request);
  new Function("module", "exports", "require", outputText)(record, record.exports, localRequire);
  return record.exports;
}

const { getQuizVisualSelection } = loadModule(path.join(root, "src", "core", "quiz", "scoring.ts"));
const { QUIZ_MEDIA } = loadModule(path.join(root, "src", "lib", "quiz-media.ts"));

function definition(id, kind, resultContent = {}) {
  return { id, kind, media: QUIZ_MEDIA[id], resultContent };
}

function expectSelection(quiz, result, key, source) {
  const before = JSON.stringify(result);
  const selection = getQuizVisualSelection(quiz, result);
  assert.equal(selection?.key, key);
  assert.equal(selection?.source, source);
  assert.equal(JSON.stringify(result), before, "Visual selection must not mutate QuizResult");
  assert.equal(Object.hasOwn(result, "src"), false, "QuizResult must not store image URLs");
}

const animal = definition("animal-personality", "type");
expectSelection(animal, { type: "LI" }, "LI", "result");
expectSelection(animal, { type: "MIXED" }, "MIXED", "result");
expectSelection(animal, { type: "UNKNOWN" }, "cover", "cover");

const emotion = definition("emotion-regulation", "dimensions");
expectSelection(emotion, { percentages: { CR: 82, ES: 41, AC: 65 } }, "CR", "result");
expectSelection(emotion, { dimensions: [{ name: "AC", zh: "", score: 74 }, { name: "CR", zh: "", score: 55 }] }, "AC", "result");
expectSelection(emotion, { percentages: { CR: 70, AC: 70, ES: 30 } }, "cover", "cover");

const attachment = definition("attachment-style", "type");
expectSelection(attachment, { type: "DI" }, "DI", "result");
expectSelection(attachment, { dominantType: "MIXED" }, "MIXED", "result");

const scoreBands = [
  { id: "low", min: 20, max: 30 },
  { id: "moderate", min: 31, max: 60 },
  { id: "high", min: 61, max: 100 },
];
const life = definition("life-satisfaction", "score", { scoreBands });
expectSelection(life, { score: 20 }, "low", "score-band");
expectSelection(life, { score: 31 }, "moderate", "score-band");
expectSelection(life, { score: 61 }, "high", "score-band");
expectSelection(life, { score: 0 }, "cover", "cover");

assert.equal(getQuizVisualSelection({ kind: "type", resultContent: {} }, { type: "LI" }), undefined);

const visuals = Object.values(QUIZ_MEDIA).flatMap((media) => [
  media.cover,
  ...Object.values(media.byResult ?? {}),
  ...Object.values(media.byScoreBand ?? {}),
]);
assert.equal(visuals.length, 20);
assert.equal(new Set(visuals.map((visual) => visual.src)).size, visuals.length, "Quiz visual paths must be unique");

for (const visual of visuals) {
  assert.ok(visual.alt.zh.trim() && visual.alt.en.trim(), `${visual.src} needs bilingual alt text`);
  const filePath = path.join(root, "public", visual.src.replace(/^\//, ""));
  assert.ok(existsSync(filePath), `${visual.src} is missing`);
  const metadata = await sharp(filePath).metadata();
  assert.equal(metadata.format, "webp", `${visual.src} must be WebP`);
  assert.equal(metadata.width, visual.width, `${visual.src} width does not match metadata`);
  assert.equal(metadata.height, visual.height, `${visual.src} height does not match metadata`);
}

console.log(`Quiz media selection passed for ${visuals.length} result and cover visuals.`);
