import { getCurrentUser } from "@/lib/server/auth";
import { listCollectedBadges, listWornBadges, showBadgesEnabled } from "@/lib/server/badges";
import { assertExpectedAccount, error, json } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** The signed-in account's derived collection, worn selection, and visibility opt-in. */
export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  const [collected, worn] = [await listCollectedBadges(user.id), await listWornBadges(user.id, true)];
  return json({ userId: user.id, collected, worn, showBadges: showBadgesEnabled(user.id) });
}
