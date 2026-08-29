"use strict";

/* eslint-disable @typescript-eslint/no-require-imports */

// quiz-platform-standalone-supervisor

const { spawn } = require("node:child_process");
const path = require("node:path");

const root = __dirname;
let stopping = false;
let worker = null;
let restartDelay = 1_000;

const server = spawn(process.execPath, [path.join(root, "next-server.js")], {
  cwd: root,
  env: process.env,
  stdio: "inherit",
});

function startWorker() {
  if (stopping) return;
  const child = spawn(process.execPath, [path.join(root, "media-worker.mjs")], {
    cwd: root,
    env: process.env,
    stdio: "inherit",
  });
  worker = child;
  const healthyTimer = setTimeout(() => {
    if (worker === child && !stopping) restartDelay = 1_000;
  }, 60_000);
  healthyTimer.unref();
  child.once("exit", (code, signal) => {
    clearTimeout(healthyTimer);
    if (worker === child) worker = null;
    if (stopping) return;
    console.error(`media worker exited (${signal ?? code}); restarting in ${restartDelay}ms`);
    const delay = restartDelay;
    restartDelay = Math.min(30_000, restartDelay * 2);
    setTimeout(startWorker, delay);
  });
}

function stop(signal = "SIGTERM") {
  if (stopping) return;
  stopping = true;
  if (worker && !worker.killed) worker.kill(signal);
  if (!server.killed) server.kill(signal);
  const deadline = setTimeout(() => {
    if (worker && !worker.killed) worker.kill("SIGKILL");
    if (!server.killed) server.kill("SIGKILL");
  }, 25_000);
  deadline.unref();
}

server.once("exit", (code, signal) => {
  if (!stopping) {
    stopping = true;
    if (worker && !worker.killed) worker.kill("SIGTERM");
  }
  process.exitCode = Number.isInteger(code) ? code : signal ? 1 : 0;
});
server.once("error", (cause) => {
  console.error("Next.js server failed to start", cause);
  stop();
  process.exitCode = 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => stop(signal));

startWorker();
