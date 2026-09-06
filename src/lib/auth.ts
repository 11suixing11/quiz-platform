import "server-only";

import { APIError, betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { captcha } from "better-auth/plugins";
import { getDatabase } from "@/lib/server/database";
import { PASSWORD_RESET_TOKEN_MINUTES, sendAccountVerificationEmail, sendPasswordResetEmail } from "@/lib/server/email";
import { DEVELOPMENT_ORIGINS, PRODUCTION_HOST, PRODUCTION_ORIGIN, turnstileHostnames } from "@/lib/server/auth-hosts";
import { prepareJournalUserDeletion, replayJournalUserDeletion } from "@/lib/server/journal";

function authSecret() {
  const configured = process.env.BETTER_AUTH_SECRET?.trim() || process.env.AUTH_SECRET?.trim();
  if (configured) return configured;
  // Better Auth intentionally rejects a missing secret in production. Keep a
  // long, development-only fallback so local setup can run without an .env.
  if (process.env.NODE_ENV !== "production") {
    return "local-development-secret-change-me-quiz-platform-2026-08-26";
  }
  return undefined;
}

function authBaseUrl() {
  const configured = process.env.BETTER_AUTH_URL?.trim() || process.env.NEXT_PUBLIC_BETTER_AUTH_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  return process.env.NODE_ENV === "production" ? PRODUCTION_ORIGIN : "http://localhost:3333";
}

function normalizeDisplayName(value: unknown) {
  if (typeof value !== "string") {
    throw new APIError("BAD_REQUEST", { code: "INVALID_NAME", message: "显示名称不能为空" });
  }
  const name = value.trim();
  if (!name || Array.from(name).length > 80) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_NAME", message: "显示名称需要为 1 至 80 个字符" });
  }
  return name;
}

const database = getDatabase();

/**
 * Better Auth's full (Kysely) adapter accepts a better-sqlite3 Database
 * instance directly. It creates the `user`, `session`, `account`, and
 * `verification` tables through its migration API; application tables are
 * created by `server/database.ts` and reference the Better Auth `user` table.
 */
export const auth = betterAuth({
  appName: "Know Yourself",
  baseURL: authBaseUrl(),
  basePath: "/api/auth",
  secret: authSecret(),
  database,
  trustedOrigins: process.env.NODE_ENV === "production" ? [PRODUCTION_ORIGIN] : [...DEVELOPMENT_ORIGINS],
  logger: { level: "warn" },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
    maxPasswordLength: 128,
    autoSignIn: false,
    requireEmailVerification: true,
    // Single-use, time-limited reset tokens; every other session is revoked
    // once the password is reset through the email link.
    resetPasswordTokenExpiresIn: PASSWORD_RESET_TOKEN_MINUTES * 60,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      try {
        await sendPasswordResetEmail({ email: user.email, displayName: user.name, url });
      } catch {
        throw new Error("RESET_PASSWORD_DELIVERY_FAILED");
      }
    },
  },
  emailVerification: {
    sendOnSignUp: false,
    sendOnSignIn: false,
    autoSignInAfterVerification: true,
    expiresIn: 60 * 60 * 24,
    sendVerificationEmail: async ({ user, url }) => {
      try {
        await sendAccountVerificationEmail({ email: user.email, displayName: user.name, url });
      } catch {
        throw new Error("VERIFICATION_EMAIL_DELIVERY_FAILED");
      }
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({ data: { ...user, name: normalizeDisplayName(user.name) } }),
      },
      update: {
        before: async (user) => user.name === undefined
          ? undefined
          : { data: { ...user, name: normalizeDisplayName(user.name) } },
      },
      delete: {
        before: async (user) => { prepareJournalUserDeletion(user.id); },
        after: async (user) => { replayJournalUserDeletion(user.id); },
      },
    },
  },
  user: {
    deleteUser: { enabled: true },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
    freshAge: 60 * 60 * 24,
    cookieCache: { enabled: false },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  plugins: [
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: process.env.TURNSTILE_SECRET_KEY?.trim() || "",
      endpoints: ["/sign-up/email"],
      expectedAction: "signup",
      allowedHostnames: turnstileHostnames(),
    }),
    captcha({
      provider: "cloudflare-turnstile",
      secretKey: process.env.TURNSTILE_SECRET_KEY?.trim() || "",
      endpoints: ["/request-password-reset"],
      expectedAction: "password_reset",
      allowedHostnames: turnstileHostnames(),
    }),
    nextCookies(),
  ],
});

let authReadyPromise: Promise<void> | undefined;

/**
 * Run Better Auth's schema migration exactly once per process and make all
 * callers await it. The package does not run migrations automatically.
 */
export function ensureAuthReady() {
  authReadyPromise ??= (async () => {
    const context = await auth.$context;
    await context.runMigrations();
  })().catch((error) => {
    // Allow a later request to retry after a transient startup/database error.
    authReadyPromise = undefined;
    throw error;
  });
  return authReadyPromise;
}

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  createdAt: number;
}

export interface AuthSession {
  user: AuthUser;
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };
}

function mapUser(user: { id: string; email: string; name: string; emailVerified: boolean; createdAt: Date }) : AuthUser {
  return {
    id: user.id,
    email: user.email,
    displayName: user.name,
    emailVerified: user.emailVerified,
    createdAt: user.createdAt.getTime(),
  };
}

/** Read the authoritative database-backed session for the current request. */
export async function getCurrentAuthSession(): Promise<AuthSession | null> {
  const { headers } = await import("next/headers");
  await ensureAuthReady();
  const result = await auth.api.getSession({
    headers: await headers(),
    query: { disableCookieCache: true },
  });
  if (!result) return null;
  return {
    user: mapUser(result.user),
    session: {
      id: result.session.id,
      userId: result.session.userId,
      expiresAt: result.session.expiresAt,
      createdAt: result.session.createdAt,
      updatedAt: result.session.updatedAt,
    },
  };
}

export async function getCurrentUser() {
  return (await getCurrentAuthSession())?.user ?? null;
}

export function requestAddress(request: Request) {
  const proxyAddress = request.headers.get("x-real-ip");
  if (proxyAddress) return proxyAddress;
  return process.env.NODE_ENV === "production" ? "unknown" : request.headers.get("cf-connecting-ip") || "unknown";
}

/** Restrict state-changing requests to the canonical site (and local dev). */
export async function isTrustedMutation(request: Request) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const isDevelopmentHost = process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1", "::1"].includes(host);
  if (!isDevelopmentHost && host !== PRODUCTION_HOST) return false;

  const origin = request.headers.get("origin");
  if (!origin) return isDevelopmentHost;
  if (isDevelopmentHost && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) return true;
  return origin === PRODUCTION_ORIGIN;
}
