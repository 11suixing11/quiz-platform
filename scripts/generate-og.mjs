/**
 * generate-og.mjs
 *
 * Screenshot public/og-template.html → public/og-image.png (1200×630).
 *
 * Usage:
 *   node scripts/generate-og.mjs
 *
 * Requires: puppeteer  (npm i -D puppeteer)
 */

import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const htmlPath = path.join(projectRoot, "public", "og-template.html");
const outputPath = path.join(projectRoot, "public", "og-image.png");

async function main() {
  console.log("🖼  Generating OG image …");

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

  // Give fonts / emoji rendering a moment
  await page.waitForTimeout(500);

  await page.screenshot({ path: outputPath, type: "png" });
  await browser.close();

  console.log(`✅  Saved → ${outputPath}`);
}

main().catch((err) => {
  console.error("❌  OG image generation failed:", err);
  process.exit(1);
});
