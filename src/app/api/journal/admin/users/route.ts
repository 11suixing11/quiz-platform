import { listGovernanceUsers } from "@/lib/server/journal";
import { error, json } from "@/lib/server/http";
import { getCurrentUser, journalFailure } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const query = new URL(request.url).searchParams.get("query") || "";
  try { return json({ users: listGovernanceUsers(user.id, query) }); }
  catch (cause) { return journalFailure(cause, "暂时无法读取账号"); }
}
