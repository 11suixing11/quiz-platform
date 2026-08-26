import "server-only";

import { requestAddress, isTrustedMutation } from "./auth";

const WINDOW_MS = 60_000;
const MAX_ATTEMPTS_PER_WINDOW = 12;

declare global {
  var __knowYourselfRateLimits: Map<string, number[]> | undefined;
}

function rateLimits() {
  return globalThis.__knowYourselfRateLimits ??= new Map<string, number[]>();
}

export function json(data: unknown, status = 200, headers?: HeadersInit) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export function error(message: string, status: number, code?: string) {
  return json({ error: message, ...(code ? { code } : {}) }, status);
}

export async function readJson(request: Request, maxBytes = 32_000) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBytes) throw new Error("请求内容过大");
  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > maxBytes) throw new Error("请求内容过大");
  try {
    return JSON.parse(body) as unknown;
  } catch {
    throw new Error("请求格式无效");
  }
}

export async function assertTrustedMutation(request: Request) {
  if (!(await isTrustedMutation(request))) return error("请求来源不受信任", 403, "UNTRUSTED_ORIGIN");
  return null;
}

export function allowRateLimitedRequest(request: Request, action: string) {
  const now = Date.now();
  const key = `${action}:${requestAddress(request)}`;
  const existing = rateLimits().get(key) ?? [];
  const recent = existing.filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_ATTEMPTS_PER_WINDOW) {
    rateLimits().set(key, recent);
    return false;
  }
  recent.push(now);
  rateLimits().set(key, recent);
  if (rateLimits().size > 5000) {
    for (const [storedKey, times] of rateLimits()) {
      if (!times.some((time) => now - time < WINDOW_MS)) rateLimits().delete(storedKey);
    }
  }
  return true;
}

export function rateLimitResponse() {
  return error("请求过于频繁，请稍后再试", 429, "RATE_LIMITED");
}
