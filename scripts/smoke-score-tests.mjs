import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { readdir as readDirectory } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();
const testsDir = path.join(root, "src", "lib", "tests");

function resolveModule(request, parentFile) {
  if (!request.startsWith("@/") && !request.startsWith(".")) return request;
  const base = request.startsWith("@/")
    ? path.join(root, "src", request.slice(2))
    : path.resolve(path.dirname(parentFile), request);
  for (const candidate of [base, `${base}.ts`, `${base}.js`, path.join(base, "index.ts")]) {
    try {
      readFileSync(candidate);
      return candidate;
    } catch {
      // Try the next extension.
    }
  }
  return base;
}

const moduleCache = new Map();

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
  const evaluate = new Function("module", "exports", "require", outputText);
  evaluate(moduleRecord, moduleRecord.exports, localRequire);
  return moduleRecord.exports;
}

function unwrap(module) {
  return module?.default ?? module;
}

const files = await readDirectory(testsDir);
const ids = files
  .filter((file) => file.endsWith(".ts") && file !== "index.ts" && file !== "calculators.ts")
  .map((file) => file.slice(0, -3))
  .sort();

const registry = unwrap(loadModule(path.join(root, "src", "lib", "test-registry.ts"))).TEST_REGISTRY;
const metadataById = new Map(registry.map((test) => [test.id, test]));
assert.equal(metadataById.size, ids.length, "Registry metadata count does not match test modules");

let scenarios = 0;
let standardDefinitions = 0;
for (const testId of ids) {
  const metadata = metadataById.get(testId);
  assert(metadata, `${testId}: missing registry metadata`);
  const isStandard = typeof metadata.definitionLoader === "function";
  const loadedModule = isStandard ? await metadata.definitionLoader() : await metadata.loader();
  const testData = unwrap(loadedModule);
  assert(testData && typeof testData === "object", `${testId}: missing default test export`);
  assert(Array.isArray(testData.questions) && testData.questions.length > 0, `${testId}: no questions array`);
  assert.equal(testData.questions.length, metadata.questions, `${testId}: registry question count is stale`);

  const midpointAnswers = testData.questions.map((question) => {
    const options = isStandard ? question.options : (question.options?.zh ?? question.options?.en);
    assert(Array.isArray(options) && options.length > 0, `${testId}: question has no options`);
    return Math.floor((options.length - 1) / 2);
  });

  if (isStandard) {
    standardDefinitions++;
    assert.equal(testData.origin, "standard", `${testId}: definition loader did not return a standard definition`);
    assert.equal(typeof testData.scoring?.calculate, "function", `${testId}: standard definition has no scoring calculator`);
  } else {
    assert.equal(typeof testData.calculate, "function", `${testId}: no legacy calculate function`);
  }

  for (let questionIndex = 0; questionIndex < testData.questions.length; questionIndex++) {
    const question = testData.questions[questionIndex];
    const options = isStandard ? question.options : (question.options?.zh ?? question.options?.en);
    const boundaryAnswers = [0, Math.floor((options.length - 1) / 2), options.length - 1];

    for (const answer of boundaryAnswers) {
      const answers = [...midpointAnswers];
      answers[questionIndex] = answer;
      let result;
      try {
        result = isStandard
          ? testData.scoring.calculate(answers)
          : testData.calculate(answers, testData.questions);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new Error(`${testId}: scoring failed at question ${questionIndex + 1}, answer ${answer}: ${message}`);
      }
      assert(result && typeof result === "object" && !Array.isArray(result), `${testId}: calculate returned no result`);
      scenarios++;
    }
  }
}

console.log(`✓ Scoring execution coverage: ${scenarios} answer-boundary scenarios across ${ids.length} test modules (${standardDefinitions} standard definitions)`);
