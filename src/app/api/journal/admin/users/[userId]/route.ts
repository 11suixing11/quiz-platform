import { setUserGovernance } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser } from "../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: Request, context: { params: Promise<{ userId: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { userId } = await context.params;
  try { return json(setUserGovernance(auth.user!.id, userId, await journalJson(request, 4_000))); }
  catch (cause) { return journalFailure(cause, "暂时无法更新账号状态"); }
}
