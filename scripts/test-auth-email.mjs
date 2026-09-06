import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import path from "node:path";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = process.cwd();

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
];
const previousEnvironment = new Map(smtpKeys.map((key) => [key, process.env[key]]));

function setEnvironment(values = {}) {
  for (const key of smtpKeys) delete process.env[key];
  for (const [key, value] of Object.entries(values)) process.env[key] = value;
}

const email = compile("src/lib/server/email.ts", {
  "server-only": {},
  nodemailer: {
    __esModule: true,
    default: { createTransport() { throw new Error("transport must not be created by configuration checks"); } },
  },
});
assert.equal(typeof email.emailDeliveryConfigured, "function", "email.ts must export emailDeliveryConfigured()");

try {
  // SMTP readiness depends only on the SMTP settings, not on Turnstile or auth settings.
  setEnvironment({ BETTER_AUTH_SECRET: "present", TURNSTILE_SECRET_KEY: "turnstile-only" });
  assert.equal(email.emailDeliveryConfigured(), false, "missing SMTP host/from must disable delivery");

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test" });
  assert.equal(email.emailDeliveryConfigured(), true, "host/from with the default port is valid");

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test", SMTP_PORT: "not-a-port" });
  assert.equal(email.emailDeliveryConfigured(), false, "an invalid SMTP port must disable delivery");

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test", SMTP_PORT: "0" });
  assert.equal(email.emailDeliveryConfigured(), false, "an out-of-range SMTP port must disable delivery");

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test", SMTP_USER: "user@example.test" });
  assert.equal(email.emailDeliveryConfigured(), false, "SMTP credentials must be supplied as a pair");

  setEnvironment({
    SMTP_HOST: "smtp.example.test",
    SMTP_FROM: "noreply@example.test",
    SMTP_PORT: "465",
    SMTP_USER: "user@example.test",
    SMTP_PASSWORD: "secret",
    TURNSTILE_SITE_KEY: "",
    TURNSTILE_SECRET_KEY: "",
  });
  assert.equal(email.emailDeliveryConfigured(), true, "a complete authenticated SMTP configuration is valid");

  const authHosts = compile("src/lib/server/auth-hosts.ts", {
    "server-only": {},
    "@/lib/site-config": { SITE_URL: "https://knowyourself.cc.cd" },
  });
  const capabilities = compile("src/lib/server/account-capabilities.ts", {
    "server-only": {},
    "./email": email,
    "./auth-hosts": authHosts,
  });
  const accountConfigRoute = compile("src/app/api/config/account/route.ts", {
    "@/lib/server/account-capabilities": capabilities,
    "@/lib/server/http": { json: (value) => value },
  });
  assert.equal(typeof capabilities.accountCapabilities, "function");
  assert.equal(typeof accountConfigRoute.GET, "function");

  setEnvironment({ SMTP_HOST: "smtp.example.test", SMTP_FROM: "noreply@example.test" });
  assert.deepEqual(capabilities.accountCapabilities(), {
    emailVerificationAvailable: true,
    registrationAvailable: false,
    passwordResetAvailable: false,
    hostAllowed: true,
  }, "Turnstile must gate registration without disabling configured email delivery");
  assert.deepEqual(accountConfigRoute.GET(new Request("https://knowyourself.cc.cd/api/config/account")), {
    emailVerificationAvailable: true,
    registrationAvailable: false,
    passwordResetAvailable: false,
    hostAllowed: true,
  }, "account capability API must expose capability and host status");

  assert.deepEqual(capabilities.accountCapabilities(new Request("https://maintenance.example.test/api/config/account")), {
    emailVerificationAvailable: false,
    registrationAvailable: false,
    passwordResetAvailable: false,
    hostAllowed: false,
  }, "unsupported hosts must not advertise account email or registration services");
  assert.equal(capabilities.turnstileAvailableForRequest(new Request("https://maintenance.example.test/api/config/turnstile")), false);
  assert.equal(authHosts.requestHostname(new Request("http://127.0.0.1/api/config/account", { headers: { host: "knowyourself.cc.cd" } })), "knowyourself.cc.cd", "reverse-proxy Host must override the internal request URL");

  setEnvironment({ TURNSTILE_SITE_KEY: "site-key", TURNSTILE_SECRET_KEY: "secret" });
  assert.deepEqual(capabilities.accountCapabilities(), {
    emailVerificationAvailable: false,
    registrationAvailable: false,
    passwordResetAvailable: false,
    hostAllowed: true,
  }, "Turnstile alone must not advertise registration when SMTP is absent");

  setEnvironment({
    SMTP_HOST: "smtp.example.test",
    SMTP_FROM: "noreply@example.test",
    TURNSTILE_SITE_KEY: "site-key",
    TURNSTILE_SECRET_KEY: "secret",
  });
  assert.deepEqual(capabilities.accountCapabilities(), {
    emailVerificationAvailable: true,
    registrationAvailable: true,
    passwordResetAvailable: true,
    hostAllowed: true,
  });

  let capabilityState = { emailVerificationAvailable: false, registrationAvailable: false, hostAllowed: true };
  const capabilityRequests = [];
  let downstreamMode = "ok";
  const downstreamCalls = [];
  const downstreamResponse = (status = 200, body = { ok: true }) => Response.json(body, { status });
  const downstreamHandler = Object.fromEntries(["GET", "POST", "PATCH", "PUT", "DELETE"].map((method) => [method, async (request) => {
    const requestPath = new URL(request.url).pathname;
    downstreamCalls.push({ method, path: requestPath });
    if (requestPath === "/api/auth/send-verification-email/") {
      return downstreamResponse(404, { error: "not found" });
    }
    if (method === "POST" && requestPath === "/api/auth/send-verification-email") {
      if (downstreamMode === "status-5xx") return downstreamResponse(502, { error: "upstream failed" });
      if (downstreamMode === "status-4xx") return downstreamResponse(429, { error: "rate limited", code: "RATE_LIMITED" });
      if (downstreamMode === "throw-delivery") throw new Error("VERIFICATION_EMAIL_DELIVERY_FAILED");
      if (downstreamMode === "throw-delivery-code") {
        const error = new Error("SMTP connection failed");
        error.code = "VERIFICATION_EMAIL_DELIVERY_FAILED";
        throw error;
      }
      if (downstreamMode === "throw-generic") throw new Error("SMTP connection failed");
    }
    if (downstreamMode === "status-5xx") return downstreamResponse(502, { error: "upstream failed" });
    return downstreamResponse(201, { forwarded: true });
  }]));
  const authRoute = compile("src/app/api/auth/[...all]/route.ts", {
    "better-auth/next-js": { toNextJsHandler: () => downstreamHandler },
    "@/lib/auth": { auth: {}, ensureAuthReady: async () => {} },
    "@/lib/server/account-capabilities": { accountCapabilities: (request) => {
      capabilityRequests.push(request);
      if (new URL(request.url).hostname === "maintenance.example.test") {
        return { emailVerificationAvailable: false, registrationAvailable: false, hostAllowed: false };
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
  let response = await postAuth("/api/auth/sign-up/email");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "REGISTRATION_UNAVAILABLE");
  assert.equal(downstreamCalls.length, 0, "unavailable registration must not create an account or call Better Auth");

  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "EMAIL_VERIFICATION_UNAVAILABLE");
  assert.equal(downstreamCalls.length, 0, "unavailable email delivery must not call Better Auth");

  downstreamMode = "ok";
  downstreamCalls.length = 0;
  response = await postAuth("/api/auth/send-verification-email/");
  assert.equal(response.status, 404, "a trailing-slash path must retain Better Auth's native response");
  assert.deepEqual(await response.json(), { error: "not found" });
  assert.equal(downstreamCalls.length, 1, "only the canonical verification path is guarded");

  capabilityState = { emailVerificationAvailable: true, registrationAvailable: false, hostAllowed: true };
  response = await postAuth("/api/auth/sign-up/email");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "REGISTRATION_UNAVAILABLE");

  capabilityState = { emailVerificationAvailable: true, registrationAvailable: true, hostAllowed: true };
  downstreamMode = "ok";
  downstreamCalls.length = 0;
  response = await postAuth("/api/auth/sign-up/email");
  assert.equal(response.status, 201, "configured sign-up requests must be forwarded");
  assert.deepEqual(await response.json(), { forwarded: true });
  assert.equal(downstreamCalls.length, 1);

  downstreamCalls.length = 0;
  response = await postAuth("/api/auth/sign-up/email", "maintenance.example.test");
  assert.equal(response.status, 503, "maintenance-host sign-up must fail closed");
  assert.equal((await response.json()).code, "REGISTRATION_UNAVAILABLE");
  assert.equal(downstreamCalls.length, 0, "maintenance-host sign-up must not reach Better Auth");
  assert.equal(new URL(capabilityRequests.at(-1).url).hostname, "maintenance.example.test", "the auth route must pass the incoming request to capability checks");

  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 201, "configured verification requests must be forwarded");

  downstreamMode = "status-5xx";
  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, "VERIFICATION_EMAIL_DELIVERY_FAILED");

  downstreamMode = "status-4xx";
  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 429, "verification endpoint 4xx responses must remain transparent");
  assert.deepEqual(await response.json(), { error: "rate limited", code: "RATE_LIMITED" });

  downstreamMode = "throw-delivery";
  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 503, "a thrown delivery failure must be normalized too");
  assert.equal((await response.json()).code, "VERIFICATION_EMAIL_DELIVERY_FAILED");

  downstreamMode = "throw-delivery-code";
  response = await postAuth("/api/auth/send-verification-email");
  assert.equal(response.status, 503, "a delivery error code must be normalized too");
  assert.equal((await response.json()).code, "VERIFICATION_EMAIL_DELIVERY_FAILED");

  downstreamMode = "throw-generic";
  await assert.rejects(
    () => postAuth("/api/auth/send-verification-email"),
    /SMTP connection failed/,
    "generic handler errors must not be misreported as delivery failures",
  );

  downstreamMode = "status-5xx";
  response = await authRoute.POST(new Request("https://example.test/api/auth/sign-in/email", { method: "POST", body: "{}" }));
  assert.equal(response.status, 502, "unrelated auth endpoint failures must remain transparent");

  const accountClient = compile("src/lib/account.ts", {
    "./auth-client": { notifyAuthSessionChanged() {} },
  });
  const previousFetch = globalThis.fetch;
  const requests = [];
  globalThis.fetch = async (input, init = {}) => {
    const url = String(input);
    requests.push({ url, init });
    if (url.endsWith("/api/auth/sign-up/email")) {
      return Response.json({ user: {
        id: "user-1",
        email: "person@example.test",
        name: "Person",
        emailVerified: false,
        createdAt: "2026-01-01T00:00:00.000Z",
      } });
    }
    if (url.endsWith("/api/auth/send-verification-email")) return Response.json({ status: true });
    if (url.endsWith("/api/config/account")) return Response.json({ emailVerificationAvailable: true, registrationAvailable: true });
    throw new Error(`Unexpected fetch: ${url}`);
  };
  try {
    await accountClient.registerAccount({
      email: "person@example.test",
      password: "long-enough-password",
      displayName: "Person",
      captchaToken: "captcha-token",
    });
    const registrationRequest = requests.find(({ url }) => url.endsWith("/api/auth/sign-up/email"));
    assert.ok(registrationRequest, "registerAccount must issue a sign-up request");
    assert.deepEqual(JSON.parse(registrationRequest.init.body), {
      name: "Person",
      email: "person@example.test",
      password: "long-enough-password",
      callbackURL: "/account/",
    });
    await accountClient.sendVerificationEmail("person@example.test");
    const verificationRequest = requests.find(({ url }) => url.endsWith("/api/auth/send-verification-email"));
    assert.ok(verificationRequest, "sendVerificationEmail must issue a verification request");
    assert.deepEqual(JSON.parse(verificationRequest.init.body), {
      email: "person@example.test",
      callbackURL: "/account/",
    });
  } finally {
    globalThis.fetch = previousFetch;
  }

  const authSource = readFileSync(path.join(root, "src/lib/auth.ts"), "utf8");
  assert.match(authSource, /logger:\s*\{\s*level:\s*"warn"\s*\}/, "auth logs must not include Better Auth's info-level existing-email message");
  assert.match(authSource, /sendOnSignUp:\s*false/, "signup email must be sent explicitly after registration");
  assert.match(authSource, /sendOnSignIn:\s*false/, "sign-in must not trigger an unobservable verification send");

  const hostSource = readFileSync(path.join(root, "src/lib/server/auth-hosts.ts"), "utf8");
  assert.match(hostSource, /TURNSTILE_ALLOWED_HOSTNAMES/, "auth and capability checks must share the Turnstile hostname allow-list");

  const accountPageSource = readFileSync(path.join(root, "src/app/account/page.tsx"), "utf8");
  const registerIndex = accountPageSource.indexOf("await registerAccount");
  const sendIndex = accountPageSource.indexOf("await sendVerificationEmail", registerIndex);
  assert.ok(registerIndex >= 0 && sendIndex > registerIndex, "registration must explicitly trigger verification email");
  assert.ok(sendIndex - registerIndex < 1_000, "verification send must be part of the registration flow, not only the resend action");
  const registrationFlow = accountPageSource.slice(registerIndex, sendIndex + 1_200);
  assert.match(registrationFlow, /try\s*\{[\s\S]*await sendVerificationEmail/);
  assert.match(registrationFlow.slice(0, sendIndex - registerIndex + 1), /targetEmail/);
  assert.match(registrationFlow, /catch\s*\{/);
  assert.match(registrationFlow, /发送失败|could not be sent|failed/i, "delivery failure needs an explicit failure message");
  assert.doesNotMatch(accountPageSource.slice(registerIndex, sendIndex), /验证邮件已发送|verification email sent/i, "success copy must follow a successful send, not precede it");
} finally {
  for (const key of smtpKeys) {
    const value = previousEnvironment.get(key);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("✓ Email verification configuration, auth guards, delivery normalization, and registration feedback contracts passed");
