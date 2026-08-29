import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();

function compileRoute() {
  const relativePath = "src/app/api/config/turnstile/route.ts";
  const source = readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: relativePath,
  });
  const testModule = { exports: {} };
  const localRequire = (request) => {
    if (request === "@/lib/server/http") return { json: (value) => value };
    throw new Error(`Unexpected runtime import in ${relativePath}: ${request}`);
  };
  new Function("require", "module", "exports", outputText)(localRequire, testModule, testModule.exports);
  return testModule.exports;
}

const previousRuntimeKey = process.env.TURNSTILE_SITE_KEY;
const previousLegacyKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

try {
  const route = compileRoute();

  process.env.TURNSTILE_SITE_KEY = "runtime-key";
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "legacy-key";
  assert.deepEqual(route.GET(), { siteKey: "runtime-key" });

  delete process.env.TURNSTILE_SITE_KEY;
  assert.deepEqual(route.GET(), { siteKey: "legacy-key" });

  delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  assert.deepEqual(route.GET(), { siteKey: null });

  const accountSource = readFileSync(path.join(root, "src/app/account/page.tsx"), "utf8");
  const journalSource = readFileSync(path.join(root, "src/components/journal/journal-editor.tsx"), "utf8");
  const widgetSource = readFileSync(path.join(root, "src/components/turnstile-widget.tsx"), "utf8");

  assert.doesNotMatch(accountSource, /NEXT_PUBLIC_TURNSTILE_SITE_KEY/);
  assert.doesNotMatch(journalSource, /NEXT_PUBLIC_TURNSTILE_SITE_KEY/);
  assert.match(accountSource, /onConfigurationChange=\{setCaptchaConfigurationStatus\}/);
  assert.match(accountSource, /captchaConfigurationStatus !== "ready" \|\| !captchaToken/);
  assert.match(widgetSource, /fetch\("\/api\/config\/turnstile"/);
  assert.match(widgetSource, /"loading" \| "ready" \| "unavailable"/);
} finally {
  if (previousRuntimeKey === undefined) delete process.env.TURNSTILE_SITE_KEY;
  else process.env.TURNSTILE_SITE_KEY = previousRuntimeKey;
  if (previousLegacyKey === undefined) delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  else process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = previousLegacyKey;
}

console.log("Turnstile runtime configuration contract passed.");
