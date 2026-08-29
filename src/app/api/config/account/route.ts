import { accountCapabilities } from "@/lib/server/account-capabilities";
import { json } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return json(accountCapabilities());
}
