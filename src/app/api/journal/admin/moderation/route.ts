import { listJournalModerationQueue, moderateJournalTarget } from "@/lib/server/journal";
import { error, json } from "@/lib/server/http";
import { getCurrentUser, journalFailure, journalJson, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  try { return json(listJournalModerationQueue(user.id)); }
  catch (cause) { return journalFailure(cause, "暂时无法读取审核队列"); }
}

export async function PATCH(request: Request) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  try { return json(moderateJournalTarget(auth.user!.id, await journalJson(request, 6_000))); }
  catch (cause) { return journalFailure(cause, "暂时无法完成审核"); }
}
