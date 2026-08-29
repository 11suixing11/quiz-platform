import { json } from "@/lib/server/http";
import { turnstileSiteKey } from "@/lib/server/account-capabilities";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  const siteKey = turnstileSiteKey();
  return json({ siteKey: siteKey || null });
}
