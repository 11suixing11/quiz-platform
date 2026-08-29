import { access, cp, mkdir, readFile, readdir, rename, rm } from "node:fs/promises";
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

// Sharp loads its platform-specific optional packages dynamically. Turbopack
// tracing can omit that optional @img scope, so copy the packages installed
// for the build host into the standalone runtime explicitly.
const installedImgRoot = path.join(projectRoot, "node_modules", "@img");
const packagedImgRoot = path.join(standaloneRoot, "node_modules", "@img");
await assertFile(installedImgRoot, "installed Sharp platform packages");
const installedImgPackages = (await readdir(installedImgRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("sharp-"))
  .map((entry) => entry.name);
if (!installedImgPackages.length) {
  throw new Error(`No Sharp platform package is installed under ${installedImgRoot}`);
}
await rm(packagedImgRoot, { recursive: true, force: true });
await mkdir(path.dirname(packagedImgRoot), { recursive: true });
await cp(installedImgRoot, packagedImgRoot, { recursive: true });

// Keep the installed systemd unit unchanged: the packaged server.js is a
// supervisor that starts both Next's generated server and the media worker.
const packagedServer = path.join(standaloneRoot, "server.js");
const nextServer = path.join(standaloneRoot, "next-server.js");
const currentServer = await readFile(packagedServer, "utf8");
if (!currentServer.includes("quiz-platform-standalone-supervisor")) {
  await rm(nextServer, { force: true });
  await rename(packagedServer, nextServer);
}
await cp(path.join(projectRoot, "scripts", "standalone-supervisor.cjs"), packagedServer);
for (const script of ["media-worker.mjs", "media-backup.mjs", "media-restore.mjs"]) {
  await cp(path.join(projectRoot, "scripts", script), path.join(standaloneRoot, script));
}

// `robots.ts` is a Next metadata route, so verify that output tracing copied
// its generated payload into the standalone release rather than only checking
// the source build tree.
await assertFile(path.join(standaloneRoot, ".next", "server", "app", "robots.txt.body"), "standalone robots metadata");
await assertFile(path.join(standaloneRoot, ".next", "static"), "standalone static assets");
await assertFile(nextServer, "Next standalone server");
await assertFile(path.join(standaloneRoot, "media-worker.mjs"), "media worker");
await assertFile(path.join(standaloneRoot, "node_modules", "sharp", "package.json"), "Sharp runtime");
await assertFile(path.join(packagedImgRoot, "colour", "package.json"), "Sharp colour runtime");
for (const packageName of installedImgPackages) {
  await assertFile(path.join(packagedImgRoot, packageName, "package.json"), `Sharp platform runtime ${packageName}`);
}
console.log(`Standalone release prepared at ${standaloneRoot}`);
