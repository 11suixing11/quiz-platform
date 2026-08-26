import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextRoot = path.join(projectRoot, ".next");
const standaloneRoot = path.join(nextRoot, "standalone");

async function assertFile(filePath, description) {
  try {
    await access(filePath);
  } catch {
    throw new Error(`Missing ${description}: ${filePath}. Run ` +
      "npm run build before packaging the standalone release.");
  }
}

await assertFile(path.join(standaloneRoot, "server.js"), "standalone server");
await assertFile(path.join(projectRoot, "public"), "public directory");
await assertFile(path.join(nextRoot, "static"), ".next/static directory");

// Next deliberately leaves these two directories out of standalone output.
// Copy them beside server.js so the generated server can serve the complete UI.
await rm(path.join(standaloneRoot, "public"), { recursive: true, force: true });
await rm(path.join(standaloneRoot, ".next", "static"), { recursive: true, force: true });
// Never ship operator-local SQLite files or ad-hoc smoke scripts that may have
// been created under the standalone working directory during local testing.
await rm(path.join(standaloneRoot, ".data"), { recursive: true, force: true });
await mkdir(path.join(standaloneRoot, ".next"), { recursive: true });
await cp(path.join(projectRoot, "public"), path.join(standaloneRoot, "public"), { recursive: true });
await cp(path.join(nextRoot, "static"), path.join(standaloneRoot, ".next", "static"), { recursive: true });

await assertFile(path.join(standaloneRoot, "public", "robots.txt"), "standalone public assets");
await assertFile(path.join(standaloneRoot, ".next", "static"), "standalone static assets");
console.log(`Standalone release prepared at ${standaloneRoot}`);
