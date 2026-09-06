import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();

const smtpKeys = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_FROM",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "SMTP_SECURE",
  "TURNSTILE_SITE_KEY",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_SECRET_KEY",
  "TURNSTILE_ALLOWED_HOSTNAMES",
  "BETTER_AUTH_SECRET",
  "BETTER_AUTH_URL",
];
const previousEnvironment = new Map(smtpKeys.map((key) => [key, process.env[key]]));
const previousDatabasePath = process.env.DATABASE_PATH;
const previousFetch = globalThis.fetch;
let directory = "";
let sqlite = null;

function setEnvironment(values = {}) {
  for (const key of smtpKeys) delete process.env[key];
  for (const [key, value] of Object.entries(values)) process.env[key] = value;
}

function compile(relativePath, dependencies = {}) {
  const source = readFileSync(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: relativePath,
  });
  const testModule = { exports: {} };
  const localRequire = (request) => {
    if (Object.hasOwn(dependencies, request)) return dependencies[request];
    if (!request.startsWith(".") && !request.startsWith("@/")) return require(request);
    throw new Error(`Unexpected runtime import in ${relativePath}: ${request}`);
  };
  new Function("require", "module", "exports", outputText)(localRequire, testModule, testModule.exports);
  return testModule.exports;
}

const moduleCache = new Map();

function resolveModule(request, parentFile) {
  if (!request.startsWith(".") && !request.startsWith("@/")) return request;
  const base = request.startsWith("@/") ? path.join(root, "src", request.slice(2)) : path.resolve(path.dirname(parentFile), request);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts")]) {
    if (existsSync(candidate)) return candidate;
  }
  return base;
}

function loadModule(filePath, dependencies = {}) {
  const normalized = path.normalize(filePath);
  if (moduleCache.has(normalized)) return moduleCache.get(normalized).exports;
  const source = readFileSync(normalized, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: normalized,
  });
  const record = { exports: {} };
  moduleCache.set(normalized, record);
  const localRequire = (request) => {
    if (Object.hasOwn(dependencies, request)) return dependencies[request];
    if (request === "server-only") return {};
    const resolved = resolveModule(request, normalized);
    return typeof resolved === "string" && path.isAbsolute(resolved) ? loadModule(resolved) : require(resolved);
  };
  new Function("module", "exports", "require", outputText)(record, record.exports, localRequire);
  return record.exports;
}

function apiErrorCode(error) {
  const body = error && typeof error === "object" && "body" in error ? error.body : null;
  return String(body?.code ?? error?.code ?? error?.message ?? "");
}

try {
  // ------------------------------------------------------------------
  // Section A: configuration, capability, route-gate, and client contracts.
  // ------------------------------------------------------------------
  const deliveredMails = [];
  const email = compile("src/lib/server/email.ts", {
    "server-only": {},
    nodemailer: {
      __esModule: true,
      default: {
        createTransport() {
          return { sendMail: async (mail) => { deliveredMails.push(mail); } };
        },
      },
    },
  });
  assert.equal(typeof email.sendPasswordResetEmail, "function", "email.ts must export sendPasswordResetEmail()");
  assert.equal(email.PASSWORD_RESET_TOKEN_MINUTES, 30, "the reset window must be shared between mail copy and token expiry");

  setEnvironment({});
  await assert.rejects(
    () => email.sendPasswordResetEmail({ email: "person@example.test", displayName: "Person", url: "https://example.test/reset" }),
    /EMAIL_DELIVERY_NOT_CONFIGURED/,
    "reset mail must fail closed when SMTP is not configured",
  );

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test" });
  await email.sendPasswordResetEmail({
    email: "person@example.test",
    displayName: "Person<script>",
    url: "https://knowyourself.cc.cd/x?a=1&b=<2>",
  });
  const resetMail = deliveredMails.at(-1);
  assert.equal(resetMail.to, "person@example.test");
  assert.equal(resetMail.from, "noreply@example.test");
  assert.match(resetMail.subject, /重置你的密码 \| Reset your password/);
  assert.match(resetMail.html, /重置你的密码/);
  assert.match(resetMail.html, /Reset your password/);
  assert.match(resetMail.text, /30 分钟内有效，且只能使用一次/);
  assert.match(resetMail.text, /expires in 30 minutes and can be used only once/);
  assert.ok(resetMail.html.includes("Person&lt;script&gt;"), "the display name must be escaped in HTML mail");
  assert.ok(resetMail.html.includes("https://knowyourself.cc.cd/x?a=1&amp;b=&lt;2&gt;"), "the reset URL must be escaped in HTML mail");

  const authHosts = compile("src/lib/server/auth-hosts.ts", {
    "server-only": {},
    "@/lib/site-config": { SITE_URL: "https://knowyourself.cc.cd" },
  });
  const capabilities = compile("src/lib/server/account-capabilities.ts", {
    "server-only": {},
    "./email": email,
    "./auth-hosts": authHosts,
  });

  setEnvironment({});
  assert.equal(capabilities.accountCapabilities().passwordResetAvailable, false, "missing SMTP and Turnstile must disable password recovery");
  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test" });
  assert.equal(capabilities.accountCapabilities().passwordResetAvailable, false, "a missing Turnstile setup must fail closed like registration");
  setEnvironment({ TURNSTILE_SITE_KEY: "site-key", TURNSTILE_SECRET_KEY: "secret" });
  assert.equal(capabilities.accountCapabilities().passwordResetAvailable, false, "a missing SMTP setup must disable password recovery");
  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test", TURNSTILE_SITE_KEY: "site-key", TURNSTILE_SECRET_KEY: "secret" });
  assert.equal(capabilities.accountCapabilities().passwordResetAvailable, true, "SMTP plus Turnstile enables password recovery");
  assert.equal(
    capabilities.accountCapabilities(new Request("https://maintenance.example.test/api/config/account")).passwordResetAvailable,
    false,
    "unsupported hosts must not advertise password recovery",
  );

  let capabilityState = { emailVerificationAvailable: true, registrationAvailable: true, passwordResetAvailable: false, hostAllowed: true };
  const downstreamCalls = [];
  let downstreamMode = "ok";
  const downstreamResponse = (status = 200, body = { status: true }) => Response.json(body, { status });
  const downstreamHandler = Object.fromEntries(["GET", "POST", "PATCH", "PUT", "DELETE"].map((method) => [method, async (request) => {
    const requestPath = new URL(request.url).pathname;
    downstreamCalls.push({ method, path: requestPath });
    if (requestPath === "/api/auth/request-password-reset/") return downstreamResponse(404, { error: "not found" });
    if (requestPath === "/api/auth/reset-password/") return downstreamResponse(404, { error: "not found" });
    if (method === "POST" && requestPath === "/api/auth/request-password-reset") {
      if (downstreamMode === "status-5xx") return downstreamResponse(502, { error: "upstream failed" });
      if (downstreamMode === "status-4xx") return downstreamResponse(429, { error: "rate limited", code: "RATE_LIMITED" });
      if (downstreamMode === "throw-delivery") throw new Error("RESET_PASSWORD_DELIVERY_FAILED");
      if (downstreamMode === "throw-delivery-code") {
        const error = new Error("SMTP connection failed");
        error.code = "RESET_PASSWORD_DELIVERY_FAILED";
        throw error;
      }
      if (downstreamMode === "throw-generic") throw new Error("SMTP connection failed");
    }
    if (downstreamMode === "status-5xx") return downstreamResponse(502, { error: "upstream failed" });
    return downstreamResponse(201, { forwarded: true });
  }]));
  const capabilityRequests = [];
  const authRoute = compile("src/app/api/auth/[...all]/route.ts", {
    "better-auth/next-js": { toNextJsHandler: () => downstreamHandler },
    "@/lib/auth": { auth: {}, ensureAuthReady: async () => {} },
    "@/lib/server/account-capabilities": { accountCapabilities: (request) => {
      capabilityRequests.push(request);
      if (new URL(request.url).hostname === "maintenance.example.test") {
        return { emailVerificationAvailable: false, registrationAvailable: false, passwordResetAvailable: false, hostAllowed: false };
      }
      return capabilityState;
    } },
  });

  async function postAuth(endpoint, hostname = "example.test") {
    return authRoute.POST(new Request(`https://${hostname}${endpoint}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
    }));
  }

  downstreamCalls.length = 0;
  let response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "PASSWORD_RESET_UNAVAILABLE");
  assert.equal(downstreamCalls.length, 0, "unavailable password recovery must not call Better Auth");

  capabilityState = { emailVerificationAvailable: true, registrationAvailable: true, passwordResetAvailable: true, hostAllowed: true };
  downstreamCalls.length = 0;
  response = await postAuth("/api/auth/request-password-reset", "maintenance.example.test");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "PASSWORD_RESET_UNAVAILABLE");
  assert.equal(downstreamCalls.length, 0, "maintenance-host password recovery must fail closed");
  assert.equal(new URL(capabilityRequests.at(-1).url).hostname, "maintenance.example.test", "the auth route must pass the incoming request to capability checks");

  capabilityState = { emailVerificationAvailable: true, registrationAvailable: true, passwordResetAvailable: true, hostAllowed: true };
  downstreamMode = "ok";
  downstreamCalls.length = 0;
  response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 201, "configured reset requests must be forwarded");
  assert.deepEqual(await response.json(), { forwarded: true });

  response = await postAuth("/api/auth/request-password-reset/");
  assert.equal(response.status, 404, "a trailing-slash path must retain Better Auth's native response");
  assert.deepEqual(await response.json(), { error: "not found" });
  assert.equal(downstreamCalls.length, 2, "only the canonical reset path is guarded");

  downstreamMode = "status-5xx";
  response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "RESET_PASSWORD_DELIVERY_FAILED");

  downstreamMode = "status-4xx";
  response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 429, "reset endpoint 4xx responses must remain transparent");
  assert.deepEqual(await response.json(), { error: "rate limited", code: "RATE_LIMITED" });

  downstreamMode = "throw-delivery";
  response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 503, "a thrown delivery failure must be normalized");
  assert.equal((await response.json()).code, "RESET_PASSWORD_DELIVERY_FAILED");

  downstreamMode = "throw-delivery-code";
  response = await postAuth("/api/auth/request-password-reset");
  assert.equal(response.status, 503, "a delivery error code must be normalized too");
  assert.equal((await response.json()).code, "RESET_PASSWORD_DELIVERY_FAILED");

  downstreamMode = "throw-generic";
  await assert.rejects(
    () => postAuth("/api/auth/request-password-reset"),
    /SMTP connection failed/,
    "generic handler errors must not be misreported as delivery failures",
  );

  downstreamMode = "ok";
  response = await postAuth("/api/auth/reset-password");
  assert.equal(response.status, 201, "the token-bearing reset endpoint must not be gated by capabilities");
  response = await postAuth("/api/auth/reset-password/");
  assert.equal(response.status, 404, "native Better Auth 404 passthrough must still work for the reset endpoint");

  const accountClient = compile("src/lib/account.ts", {
    "./auth-client": { notifyAuthSessionChanged() {} },
  });
  const requests = [];
  globalThis.fetch = async (input, init = {}) => {
    const url = String(input);
    requests.push({ url, init });
    if (url.endsWith("/api/auth/request-password-reset")) return Response.json({ status: true, message: "If this email exists in our system, check your email for the reset link" });
    if (url.endsWith("/api/auth/reset-password")) return Response.json({ status: true });
    throw new Error(`Unexpected fetch: ${url}`);
  };
  await accountClient.requestPasswordReset({ email: "person@example.test", captchaToken: "captcha-token", redirectTo: "/account/reset-password/" });
  const resetRequest = requests.find(({ url }) => url.endsWith("/api/auth/request-password-reset"));
  assert.ok(resetRequest, "requestPasswordReset must issue a reset request");
  assert.equal(resetRequest.init.method, "POST");
  assert.equal(resetRequest.init.credentials, "include");
  assert.equal(resetRequest.init.headers["X-Captcha-Response"], "captcha-token");
  assert.deepEqual(JSON.parse(resetRequest.init.body), { email: "person@example.test", redirectTo: "/account/reset-password/" });

  await accountClient.resetPassword({ token: "reset-token", newPassword: "brand-new-password" });
  const setPasswordRequest = requests.find(({ url }) => url.endsWith("/api/auth/reset-password"));
  assert.ok(setPasswordRequest, "resetPassword must issue a set-password request");
  assert.equal(setPasswordRequest.init.method, "POST");
  assert.deepEqual(JSON.parse(setPasswordRequest.init.body), { token: "reset-token", newPassword: "brand-new-password" });
  globalThis.fetch = previousFetch;

  const authSource = readFileSync(path.join(root, "src/lib/auth.ts"), "utf8");
  assert.match(authSource, /sendResetPassword:/, "auth must wire Better Auth's reset-password mail hook");
  assert.match(authSource, /RESET_PASSWORD_DELIVERY_FAILED/, "reset delivery failures must be normalized like verification mail");
  assert.match(authSource, /resetPasswordTokenExpiresIn:\s*PASSWORD_RESET_TOKEN_MINUTES\s*\*\s*60/, "reset tokens must use the shared expiry window");
  assert.match(authSource, /revokeSessionsOnPasswordReset:\s*true/, "a completed reset must revoke existing sessions");
  const captchaBlocks = authSource.match(/captcha\(\{[\s\S]*?\}\)/g) ?? [];
  assert.ok(captchaBlocks.length >= 2, "a second captcha instance must guard the password-reset endpoint");
  const resetCaptcha = captchaBlocks.find((block) => block.includes("/request-password-reset"));
  assert.ok(resetCaptcha, "the reset captcha instance must name the request-password-reset endpoint");
  assert.match(resetCaptcha, /expectedAction:\s*"password_reset"/, "the reset widget must use the password_reset action");

  const routeSource = readFileSync(path.join(root, "src/app/api/auth/[...all]/route.ts"), "utf8");
  assert.match(routeSource, /PASSWORD_RESET_UNAVAILABLE/, "the auth route must fail closed when recovery is unavailable");
  assert.match(routeSource, /RESET_PASSWORD_DELIVERY_FAILED/, "the auth route must normalize reset delivery failures");

  const accountPageSource = readFileSync(path.join(root, "src/app/account/page.tsx"), "utf8");
  assert.match(accountPageSource, /\/account\/forgot-password\//, "the account page must link to password recovery");

  const forgotPageSource = readFileSync(path.join(root, "src/app/account/forgot-password/page.tsx"), "utf8");
  assert.match(forgotPageSource, /action="password_reset"/, "the recovery form must use the password_reset Turnstile action");
  assert.match(forgotPageSource, /redirectTo:\s*"\/account\/reset-password\/"/, "reset links must land on the reset page");
  assert.doesNotMatch(forgotPageSource, /该邮箱未注册|没有找到该账号|email is not registered|no account was found/i, "recovery copy must never reveal whether an address exists");
  assert.match(forgotPageSource, /如果该邮箱已注册|If the address is registered/, "the success copy must be uniform for registered and unknown addresses");

  const resetPageSource = readFileSync(path.join(root, "src/app/account/reset-password/page.tsx"), "utf8");
  assert.match(resetPageSource, /URLSearchParams\(window\.location\.search\)/, "the reset page must read the token from the link query");
  assert.match(resetPageSource, /INVALID_TOKEN/, "the reset page must handle invalid or expired links");
  assert.match(resetPageSource, /minLength=\{10\}/, "the reset form must enforce the shared password floor");
  assert.match(resetPageSource, /maxLength=\{128\}/, "the reset form must enforce the shared password ceiling");

  // ------------------------------------------------------------------
  // Section B: the real Better Auth pipeline against a temporary SQLite
  // database, with a capturing SMTP transport and a Turnstile siteverify stub.
  // ------------------------------------------------------------------
  directory = mkdtempSync(path.join(os.tmpdir(), "quiz-platform-password-reset-"));
  process.env.DATABASE_PATH = path.join(directory, "test.sqlite");
  setEnvironment({
    SMTP_HOST: "smtp.example.test",
    SMTP_FROM: "noreply@example.test",
    TURNSTILE_SITE_KEY: "site-key",
    TURNSTILE_SECRET_KEY: "secret",
    BETTER_AUTH_SECRET: "test-secret-for-password-reset-pipeline",
    BETTER_AUTH_URL: "http://localhost:3333",
  });

  const sectionBMails = [];
  const emailModule = loadModule(path.join(root, "src/lib/server/email.ts"), {
    nodemailer: {
      __esModule: true,
      default: {
        createTransport() {
          return { sendMail: async (mail) => { sectionBMails.push(mail); } };
        },
      },
    },
  });
  assert.equal(typeof emailModule.sendPasswordResetEmail, "function", "the auth module must share the real SMTP pipeline");
  const authModule = loadModule(path.join(root, "src/lib/auth.ts"), {
    "better-auth/next-js": { nextCookies: () => ({ id: "next-cookies" }) },
    "@/lib/server/journal": { prepareJournalUserDeletion() {}, replayJournalUserDeletion() {} },
  });
  await authModule.ensureAuthReady();

  globalThis.fetch = async (input, init = {}) => {
    const url = String(input);
    if (url.startsWith("https://challenges.cloudflare.com/")) {
      let body = {};
      try { body = JSON.parse(String(init?.body ?? "{}")); } catch { /* keep the default action */ }
      const action = String(body.response ?? "").includes("password-reset") ? "password_reset" : "signup";
      return new Response(JSON.stringify({ success: true, action, hostname: "knowyourself.cc.cd" }), {
        headers: { "content-type": "application/json" },
      });
    }
    return previousFetch(input, init);
  };

  const userEmail = "reset-person@example.test";
  const originalPassword = "original-password-10";
  const newPassword = "brand-new-password-10";
  const { user: createdUser } = await authModule.auth.api.signUpEmail({
    body: { name: "重置用户", email: userEmail, password: originalPassword },
    headers: new Headers({ "x-captcha-response": "signup-captcha-token" }),
  });
  assert.equal(createdUser.email, userEmail);

  const BetterSqlite3 = require("better-sqlite3");
  sqlite = new BetterSqlite3(process.env.DATABASE_PATH);
  sqlite.prepare('UPDATE "user" SET emailVerified = 1 WHERE email = ?').run(userEmail);

  const signedIn = await authModule.auth.api.signInEmail({ body: { email: userEmail, password: originalPassword, rememberMe: true } });
  assert.equal(signedIn.user.email, userEmail, "the original password must sign in before the reset");
  const countSessions = () => Number(sqlite.prepare('SELECT COUNT(*) AS count FROM session WHERE "userId" = ?').get(signedIn.user.id)?.count ?? 0);
  assert.ok(countSessions() >= 1, "signing in must create a session that the reset should later revoke");

  sectionBMails.length = 0;
  const resetResponse = await authModule.auth.api.requestPasswordReset({
    body: { email: userEmail, redirectTo: "/account/reset-password/" },
    headers: new Headers({ "x-captcha-response": "password-reset-captcha-token" }),
  });
  assert.equal(resetResponse.status, true, "requesting a reset must report success");
  assert.match(resetResponse.message, /If this email exists in our system/, "the response must use the framework's enumeration-safe message");
  assert.equal(sectionBMails.length, 1, "a registered address must receive exactly one reset email");
  assert.equal(sectionBMails[0].to, userEmail);
  const resetToken = String(sectionBMails[0].text).match(/\/reset-password\/([A-Za-z0-9]+)/)?.[1];
  assert.ok(resetToken, "the reset email must carry the token link");

  sectionBMails.length = 0;
  const unknownResponse = await authModule.auth.api.requestPasswordReset({
    body: { email: "nobody@example.test", redirectTo: "/account/reset-password/" },
    headers: new Headers({ "x-captcha-response": "password-reset-captcha-token" }),
  });
  assert.equal(unknownResponse.status, resetResponse.status, "an unknown address must return the same status");
  assert.equal(unknownResponse.message, resetResponse.message, "an unknown address must return the identical message");
  assert.equal(sectionBMails.length, 0, "an unknown address must not trigger an email");

  await authModule.auth.api.resetPassword({ body: { token: resetToken, newPassword } });
  assert.equal(
    Number(sqlite.prepare("SELECT COUNT(*) AS count FROM verification WHERE identifier = ?").get(`reset-password:${resetToken}`)?.count ?? 1),
    0,
    "a consumed reset token must be deleted from the verification store",
  );
  assert.equal(countSessions(), 0, "completing a reset must revoke every existing session");

  await assert.rejects(
    () => authModule.auth.api.resetPassword({ body: { token: resetToken, newPassword: "another-password-10" } }),
    (error) => apiErrorCode(error).includes("INVALID_TOKEN"),
    "a consumed reset token must not be reusable",
  );

  await assert.rejects(
    () => authModule.auth.api.resetPassword({ body: { token: resetToken, newPassword: "short" } }),
    (error) => apiErrorCode(error).includes("PASSWORD_TOO_SHORT"),
    "the password floor must be enforced before the token is consumed",
  );

  await assert.rejects(
    () => authModule.auth.api.signInEmail({ body: { email: userEmail, password: originalPassword } }),
    (error) => {
      const code = apiErrorCode(error);
      return code.includes("INVALID_EMAIL_OR_PASSWORD") || code.includes("INVALID_PASSWORD") || /invalid email or password/i.test(code);
    },
    "the old password must be rejected after the reset",
  );
  const resignedIn = await authModule.auth.api.signInEmail({ body: { email: userEmail, password: newPassword, rememberMe: true } });
  assert.equal(resignedIn.user.email, userEmail, "the new password must sign in");

  sectionBMails.length = 0;
  await authModule.auth.api.requestPasswordReset({
    body: { email: userEmail, redirectTo: "/account/reset-password/" },
    headers: new Headers({ "x-captcha-response": "password-reset-captcha-token" }),
  });
  assert.equal(sectionBMails.length, 1);
  const expiredToken = String(sectionBMails[0].text).match(/\/reset-password\/([A-Za-z0-9]+)/)?.[1];
  assert.ok(expiredToken, "a second request must deliver a fresh token");
  const verificationRow = sqlite.prepare("SELECT * FROM verification WHERE identifier = ?").get(`reset-password:${expiredToken}`);
  assert.ok(verificationRow, "the fresh reset token must be persisted as a verification value");
  const storedExpiry = verificationRow.expiresAt;
  const pastExpiry = storedExpiry instanceof Date
    ? new Date(Date.now() - 3_600_000)
    : typeof storedExpiry === "number"
      ? Date.now() - 3_600_000
      : new Date(Date.now() - 3_600_000).toISOString();
  sqlite.prepare("UPDATE verification SET expiresAt = ? WHERE identifier = ?").run(pastExpiry, `reset-password:${expiredToken}`);
  await assert.rejects(
    () => authModule.auth.api.resetPassword({ body: { token: expiredToken, newPassword: "expired-token-password-10" } }),
    (error) => apiErrorCode(error).includes("INVALID_TOKEN"),
    "an expired reset token must be rejected",
  );

  console.log("✓ Password reset fail-closed guards, client contracts, and the end-to-end recovery pipeline passed");
} finally {
  globalThis.fetch = previousFetch;
  try { sqlite?.close(); } catch { /* the temp database may already be closed */ }
  if (directory) {
    try { rmSync(directory, { recursive: true, force: true }); } catch { /* Windows may keep WAL handles briefly */ }
  }
  for (const key of smtpKeys) {
    const value = previousEnvironment.get(key);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  if (previousDatabasePath === undefined) delete process.env.DATABASE_PATH;
  else process.env.DATABASE_PATH = previousDatabasePath;
}
