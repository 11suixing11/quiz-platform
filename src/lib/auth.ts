import "server-only";

import { APIError, betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { getDatabase } from "@/lib/server/database";

const PRODUCTION_ORIGIN = "https://loveyourself.cc.cd";
const DEVELOPMENT_ORIGINS = [
  "http://localhost:*",
  "http://127.0.0.1:*",
  "https://loveyourself.cc.cd",
] as const;

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
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
    maxPasswordLength: 128,
    autoSignIn: true,
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
  plugins: [nextCookies()],
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

function mapUser(user: { id: string; email: string; name: string; createdAt: Date }) : AuthUser {
  return {
    id: user.id,
    email: user.email,
    displayName: user.name,
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
  return request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
}

/** Restrict state-changing requests to the canonical site (and local dev). */
export async function isTrustedMutation(request: Request) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const isDevelopmentHost = process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1", "::1"].includes(host);
  if (!isDevelopmentHost && host !== "loveyourself.cc.cd") return false;

  const origin = request.headers.get("origin");
  if (!origin) return isDevelopmentHost;
  if (isDevelopmentHost && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) return true;
  return origin === PRODUCTION_ORIGIN;
}
