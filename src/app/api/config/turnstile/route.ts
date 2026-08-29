import { json } from "@/lib/server/http";
import { turnstileAvailableForRequest, turnstileSiteKey } from "@/lib/server/account-capabilities";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const siteKey = turnstileAvailableForRequest(request) ? turnstileSiteKey() : "";
  return json({ siteKey: siteKey || null });
}
