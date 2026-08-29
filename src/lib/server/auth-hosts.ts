import "server-only";

import { SITE_URL } from "@/lib/site-config";

export const PRODUCTION_ORIGIN = SITE_URL;
export const PRODUCTION_HOST = new URL(PRODUCTION_ORIGIN).hostname;
export const DEVELOPMENT_ORIGINS = [
  "http://localhost:*",
  "http://127.0.0.1:*",
  PRODUCTION_ORIGIN,
] as const;

/** Return the hostnames that may advertise Cloudflare-backed account actions. */
export function turnstileHostnames() {
  const configured = process.env.TURNSTILE_ALLOWED_HOSTNAMES
    ?.split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  if (configured?.length) return configured;
  return process.env.NODE_ENV === "production"
    ? [PRODUCTION_HOST]
    : [PRODUCTION_HOST, "localhost", "127.0.0.1"];
}

export function requestHostname(request: Request) {
  const host = request.headers.get("host")?.trim().split(":")[0].toLowerCase();
  if (host) return host;
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim().split(":")[0].toLowerCase();
  if (forwardedHost) return forwardedHost;
  try {
    return new URL(request.url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

export function isAllowedAuthHostname(hostname: string) {
  return turnstileHostnames().includes(hostname.trim().toLowerCase());
}
