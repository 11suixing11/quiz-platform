import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();
const moduleCache = new Map();
const CJK = /[\u3400-\u9fff\u3040-\u30ff]/u;

function resolveModule(request, parentFile) {
  if (!request.startsWith(".") && !request.startsWith("@/")) return request;
  const base = request.startsWith("@/")
    ? path.join(root, "src", request.slice(2))
    : path.resolve(path.dirname(parentFile), request);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, path.join(base, "index.ts"), path.join(base, "index.tsx")]) {
    try {
      readFileSync(candidate);
      return candidate;
    } catch {
      // Try the next extension.
    }
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
  const moduleRecord = { exports: {} };
  moduleCache.set(normalized, moduleRecord);
  const localRequire = (request) => {
    if (!request.startsWith(".") && !request.startsWith("@/")) return require(request);
    return loadModule(resolveModule(request, normalized));
  };
  new Function("module", "exports", "require", outputText)(moduleRecord, moduleRecord.exports, localRequire);
  return moduleRecord.exports;
}

function unwrap(module) {
  return module?.default ?? module;
}

function addIssue(bucket, message) {
  if (!bucket.includes(message)) bucket.push(message);
}

function inspectEnglish(value, pathLabel, warnings, englishContext = false) {
  if (typeof value === "string") {
    if (englishContext && CJK.test(value)) addIssue(warnings, `${pathLabel} contains CJK characters`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectEnglish(item, `${pathLabel}[${index}]`, warnings, englishContext));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    const isEnglishField = key === "en" || key.endsWith("_en") || key.toLowerCase().includes("english");
    inspectEnglish(child, `${pathLabel}.${key}`, warnings, englishContext || isEnglishField);
  }
}

function getQuestions(content, standard) {
  return content.questions.map((question) => standard
    ? {
        id: question.id,
        zh: question.prompt?.zh ?? "",
        en: question.prompt?.en ?? "",
        optionsZh: question.options?.map((option) => option.label?.zh ?? "") ?? [],
        optionsEn: question.options?.map((option) => option.label?.en ?? "") ?? [],
        scores: question.options?.map((option) => option.score) ?? [],
      }
    : {
        id: question.id,
        zh: question.zh ?? "",
        en: question.en ?? "",
        optionsZh: question.options?.zh ?? [],
        optionsEn: question.options?.en ?? [],
        scores: question.scores ?? [],
      });
}

function resultKey(result) {
  return result?.type ?? result?.dominant ?? result?.dominantType ?? result?.resultType ?? result?.primary ?? "";
}

function scoreValue(result) {
  return result?.score ?? result?.overallScore ?? result?.percentage;
}

function runCalculator(content, standard, answers) {
  return standard ? content.scoring.calculate(answers) : content.calculate(answers, content.questions);
}

function validateScoreBands(definition, warnings) {
  const bands = definition.resultContent?.scoreBands;
  if (!Array.isArray(bands) || bands.length === 0) {
    addIssue(warnings, "score test has no scoreBands");
    return;
  }
  const sorted = [...bands].sort((a, b) => a.min - b.min);
  for (let index = 0; index < sorted.length; index++) {
    const band = sorted[index];
    if (!Number.isFinite(band.min) || !Number.isFinite(band.max) || band.min > band.max) addIssue(warnings, `invalid score band ${index + 1}`);
    if (!band.title?.zh || !band.title?.en || !band.description?.zh || !band.description?.en) addIssue(warnings, `score band ${index + 1} is not bilingual`);
    if (index > 0 && sorted[index - 1].max + 1 !== band.min) addIssue(warnings, `score bands are not contiguous at ${band.min}`);
  }
  const range = definition.resultContent?.scoreRange;
  if (range && (sorted[0].min > range.min || sorted.at(-1).max < range.max)) addIssue(warnings, "score bands do not cover scoreRange");
}

async function auditEntry(entry) {
  const errors = [];
  const warnings = [];
  const standard = typeof entry.definitionLoader === "function";
  let content;
  try {
    content = standard ? unwrap(await entry.definitionLoader()) : unwrap(await entry.loader());
  } catch (error) {
    return { id: entry.id, kind: entry.pattern, origin: standard ? "standard" : "legacy", errors: [`load failed: ${error instanceof Error ? error.message : String(error)}`], warnings };
  }

  const questions = getQuestions(content, standard);
  if (questions.length !== entry.questions) errors.push(`registry declares ${entry.questions}, content has ${questions.length}`);
  const ids = new Set();
  questions.forEach((question, questionIndex) => {
    if (ids.has(question.id)) errors.push(`duplicate question id ${question.id}`);
    ids.add(question.id);
    if (!question.zh.trim()) errors.push(`question ${questionIndex + 1} missing Chinese prompt`);
    if (!question.en.trim()) errors.push(`question ${questionIndex + 1} missing English prompt`);
    if (question.optionsZh.length !== question.optionsEn.length) errors.push(`question ${questionIndex + 1} option language counts differ`);
    if (question.scores.length !== question.optionsZh.length) errors.push(`question ${questionIndex + 1} score count differs from options`);
    question.optionsZh.forEach((label, optionIndex) => {
      if (!String(label).trim() || !String(question.optionsEn[optionIndex] ?? "").trim()) errors.push(`question ${questionIndex + 1} option ${optionIndex + 1} is not bilingual`);
      if (!Number.isFinite(Number(question.scores[optionIndex]))) errors.push(`question ${questionIndex + 1} option ${optionIndex + 1} score is not finite`);
    });
  });

  const metadata = standard ? content : { title: { zh: entry.zh.name, en: entry.en.name }, description: { zh: entry.zh.description, en: entry.en.description } };
  for (const field of ["title", "description"]) {
    if (!metadata[field]?.zh?.trim() || !metadata[field]?.en?.trim()) errors.push(`${field} is not bilingual`);
  }
  inspectEnglish(metadata, `${entry.id}.metadata`, warnings);
  if (standard) inspectEnglish(content.resultContent, `${entry.id}.resultContent`, warnings);
  else inspectEnglish(content, `${entry.id}.legacyContent`, warnings);

  const midpoint = questions.map((question) => Math.floor((question.optionsZh.length - 1) / 2));
  let midpointResult;
  try {
    midpointResult = runCalculator(content, standard, midpoint);
    const first = runCalculator(content, standard, questions.map(() => 0));
    const last = runCalculator(content, standard, questions.map((question) => question.optionsZh.length - 1));
    for (const [label, result] of [["midpoint", midpointResult], ["minimum", first], ["maximum", last]]) {
      if (!result || typeof result !== "object" || Array.isArray(result)) errors.push(`${label} scoring returned no object`);
      const score = scoreValue(result);
      if (score !== undefined && !Number.isFinite(Number(score))) errors.push(`${label} scoring returned a non-finite score`);
    }
  } catch (error) {
    errors.push(`scoring failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  const definition = standard ? content : { kind: entry.pattern, resultContent: { dimensions: content.dimensions, types: content.types, narrative: content.narrative, archetypes: content.archetypes, resultTypes: content.resultTypes } };
  if (entry.pattern === "type") {
    const key = resultKey(midpointResult);
    if (!key) errors.push("type test does not return a result key");
    const keyedContent = definition.resultContent?.types?.[key] ?? definition.resultContent?.narrative?.[key] ?? definition.resultContent?.archetypes?.[key];
    if (!keyedContent && !definition.resultContent?.resultTypes) addIssue(warnings, `no keyed explanation for result ${key || "(empty)"}`);
  } else if (entry.pattern === "dimensions") {
    const percentages = midpointResult?.percentages;
    if (!percentages && !Array.isArray(midpointResult?.dimensions)) errors.push("dimensions test returns neither percentages nor dimensions");
    if (percentages && definition.resultContent?.dimensions) {
      for (const key of Object.keys(percentages)) if (!definition.resultContent.dimensions[key]) addIssue(warnings, `dimension ${key} has no metadata label`);
    } else if (percentages) addIssue(warnings, "dimensions have no metadata labels");
  } else if (entry.pattern === "score") {
    if (!Number.isFinite(Number(scoreValue(midpointResult)))) errors.push("score test does not return a finite score");
    if (standard) validateScoreBands(definition, warnings);
    else addIssue(warnings, "legacy score test needs explicit scoreBands");
  }

  if (!standard) addIssue(warnings, "still uses legacy content adapter");
  const status = errors.length ? "blocked" : warnings.length ? "review" : "ready";
  return { id: entry.id, kind: entry.pattern, origin: standard ? "standard" : "legacy", status, errors, warnings };
}

const registry = unwrap(loadModule(path.join(root, "src", "lib", "test-registry.ts"))).TEST_REGISTRY;
const core = loadModule(path.join(root, "src", "lib", "core-tests.ts"));
const coreIds = unwrap(core).CORE_TEST_IDS ?? core.CORE_TEST_IDS;
const catalog = loadModule(path.join(root, "src", "core", "quiz", "catalog.ts"));
const publicCatalog = unwrap(catalog).QUIZ_CATALOG ?? catalog.QUIZ_CATALOG;
assert.equal(publicCatalog.length, 16, "Public catalog must expose exactly 16 flagship routes");
assert.deepEqual(
  new Set(publicCatalog.map((entry) => entry.id)),
  new Set(coreIds),
  "Public catalog IDs must match CORE_TEST_IDS",
);
const entries = coreIds.map((id) => registry.find((entry) => entry.id === id)).filter(Boolean);
assert.equal(entries.length, 16, "Expected 16 flagship entries");

const reports = [];
for (const entry of entries) reports.push(await auditEntry(entry));

console.log("# Flagship test audit");
console.log("");
console.log("| Test | Kind | Origin | Status | Errors | Warnings |");
console.log("| --- | --- | --- | --- | ---: | ---: |");
for (const report of reports) console.log(`| ${report.id} | ${report.kind} | ${report.origin} | **${report.status}** | ${report.errors.length} | ${report.warnings.length} |`);
console.log("");
console.log("## Findings");
for (const report of reports) {
  if (!report.errors.length && !report.warnings.length) continue;
  console.log(`\n### ${report.id}`);
  for (const issue of report.errors) console.log(`- **error:** ${issue}`);
  for (const issue of report.warnings) console.log(`- review: ${issue}`);
}

const blocked = reports.filter((report) => report.status === "blocked").length;
console.log(`\nSummary: ${reports.filter((report) => report.status === "ready").length} ready, ${reports.filter((report) => report.status === "review").length} review, ${blocked} blocked.`);
if (blocked) process.exitCode = 1;
