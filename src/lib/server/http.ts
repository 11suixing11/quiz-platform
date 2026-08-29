import "server-only";

import { createHash } from "node:crypto";
import { requestAddress, isTrustedMutation } from "./auth";
import { asRow, getDatabase } from "./database";

const WINDOW_MS = 60_000;
const MAX_ATTEMPTS_PER_WINDOW = 12;

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

export async function readFormData(request: Request, maxBytes: number) {
  const contentType = request.headers.get("content-type") || "";
  if (!/^multipart\/form-data(?:;|$)/iu.test(contentType)) throw new Error("请求格式无效");

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number(contentLengthHeader);
    if (!Number.isSafeInteger(contentLength) || contentLength < 0) throw new Error("请求格式无效");
    if (contentLength > maxBytes) throw new Error("请求内容过大");
  }

  const reader = request.body?.getReader();
  if (!reader) throw new Error("请求格式无效");
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        throw new Error("请求内容过大");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return await new Response(body, { headers: { "Content-Type": contentType } }).formData();
  } catch {
    throw new Error("请求格式无效");
  }
}

export async function assertTrustedMutation(request: Request) {
  if (!(await isTrustedMutation(request))) return error("请求来源不受信任", 403, "UNTRUSTED_ORIGIN");
  return null;
}

/** Reject requests sent by a stale tab after another tab switches accounts. */
export function assertExpectedAccount(request: Request, userId: string) {
  return request.headers.get("x-expected-user-id") === userId
    ? null
    : error("账号状态已变化，请刷新后重试", 409, "ACCOUNT_CHANGED");
}

export function allowRateLimitedRequest(request: Request, action: string, maxAttempts = MAX_ATTEMPTS_PER_WINDOW) {
  const now = Date.now();
  const windowStartedAt = now - (now % WINDOW_MS);
  const key = createHash("sha256").update(`${action}\0${requestAddress(request)}`).digest("hex");
  const database = getDatabase();
  const row = asRow(database.prepare(`
    INSERT INTO request_rate_limits (rate_key, window_started_at, attempt_count, updated_at)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(rate_key, window_started_at) DO UPDATE SET
      attempt_count = attempt_count + 1,
      updated_at = excluded.updated_at
    RETURNING attempt_count
  `).get(key, windowStartedAt, now));
  database.prepare("DELETE FROM request_rate_limits WHERE updated_at < ?").run(now - (2 * WINDOW_MS));
  return Number(row?.attempt_count ?? maxAttempts + 1) <= maxAttempts;
}

export function rateLimitResponse() {
  return error("请求过于频繁，请稍后再试", 429, "RATE_LIMITED");
}
