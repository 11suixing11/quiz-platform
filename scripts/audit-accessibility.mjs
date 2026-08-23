import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourceRoots = [path.join(root, "src", "app"), path.join(root, "src", "components")];
const errors = [];
const warnings = [];

function add(bucket, message) {
  if (!bucket.includes(message)) bucket.push(message);
}

function collectFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(filePath));
    else if (/\.(?:[jt]sx?|css)$/u.test(entry.name)) files.push(filePath);
  }
  return files;
}

function relative(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function openingTagAt(source, index) {
  const start = source.lastIndexOf("<", index);
  const end = source.indexOf(">", index);
  return start >= 0 && end >= index ? source.slice(start, end + 1) : "";
}

function hasAccessibleName(tag) {
  return /(?:aria-label|aria-labelledby|title)\s*=/u.test(tag);
}

const files = sourceRoots.flatMap((directory) => {
  try {
    return statSync(directory).isDirectory() ? collectFiles(directory) : [];
  } catch {
    return [];
  }
});
const sources = files.map((filePath) => ({ name: relative(filePath), source: readFileSync(filePath, "utf8") }));
const allSource = sources.map(({ source }) => source).join("\n");

const layout = sources.find(({ name }) => name === "src/app/layout.tsx")?.source ?? "";
if (!/<html\b[^>]*\blang\s*=/u.test(layout)) add(errors, "src/app/layout.tsx: root html element is missing a lang attribute");
if (!(layout.includes('className="skip-link"') && layout.includes('href="#main-content"'))) add(errors, "src/app/layout.tsx: skip link to #main-content is missing");
if (!/<main\b/u.test(allSource)) add(errors, "No main landmark found in the application source");
if (!/<h1\b/u.test(allSource)) add(errors, "No primary h1 heading found in the application source");

for (const { name, source } of sources) {
  for (const className of ["atlas-icon-button", "atlas-card-save", "atlas-icon-link"]) {
    let index = source.indexOf(className);
    while (index >= 0) {
      const tag = openingTagAt(source, index);
      if (tag.startsWith("<button") && !hasAccessibleName(tag)) {
        add(errors, `${name}: ${className} button is missing an accessible name`);
      }
      index = source.indexOf(className, index + className.length);
    }
  }

  for (const match of source.matchAll(/<input\b([^>]*)>/gu)) {
    const attrs = match[1];
    const id = attrs.match(/\bid\s*=\s*"([^"]+)"/u)?.[1];
    const hasLabel = /(?:aria-label|aria-labelledby)\s*=/u.test(attrs)
      || Boolean(id && source.includes(`htmlFor="${id}"`));
    if (!hasLabel) add(errors, `${name}: input is missing a visible or programmatic label`);
  }

  for (const match of source.matchAll(/<img\b([^>]*)>/gu)) {
    if (!/\balt\s*=/u.test(match[1])) add(errors, `${name}: img is missing alt text`);
  }

  for (const match of source.matchAll(/role\s*=\s*"progressbar"/gu)) {
    const tag = openingTagAt(source, match.index);
    if (!/aria-valuemin\s*=/u.test(tag) || !/aria-valuemax\s*=/u.test(tag) || !/aria-valuenow\s*=/u.test(tag)) {
      add(errors, `${name}: progressbar is missing value attributes`);
    }
    if (!hasAccessibleName(tag)) add(errors, `${name}: progressbar is missing an accessible name`);
  }

  for (const match of source.matchAll(/role\s*=\s*"dialog"/gu)) {
    const tag = openingTagAt(source, match.index);
    if (!hasAccessibleName(tag)) add(errors, `${name}: dialog is missing an accessible name`);
    if (!/aria-describedby\s*=/u.test(tag)) add(warnings, `${name}: dialog has no aria-describedby; verify its description is exposed`);
  }

  if (/prefers-reduced-motion[\s\S]{0,600}0\.01ms/iu.test(source)) {
    add(errors, `${name}: reduced-motion rule globally compresses animation to 0.01ms`);
  }
}

if (!/aria-current\s*=/u.test(allSource)) add(warnings, "No current-page navigation state found; verify active navigation semantics");
if (!/aria-live\s*=/u.test(allSource)) add(warnings, "No live region found; verify loading and recovery feedback");
if (!/useReducedMotion|prefers-reduced-motion/u.test(allSource)) add(warnings, "No reduced-motion fallback found");

console.log("# Accessibility audit");
console.log(`Scanned ${sources.length} source files.`);
console.log(`Errors: ${errors.length} · Warnings: ${warnings.length}`);
if (errors.length) {
  console.log("\n## Errors");
  errors.forEach((issue) => console.log(`- ${issue}`));
}
if (warnings.length) {
  console.log("\n## Heuristic warnings");
  warnings.forEach((issue) => console.log(`- ${issue}`));
}
if (!errors.length) console.log("\n✓ Blocking checks passed. Review heuristic warnings before release.");
process.exitCode = errors.length ? 1 : 0;
