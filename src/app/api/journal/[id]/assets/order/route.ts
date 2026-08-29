import { updateJournalAssetOrder } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser } from "../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try { return json(updateJournalAssetOrder(auth.user!.id, id, await journalJson(request, 4_000))); }
  catch (cause) { return journalFailure(cause, "暂时无法调整图片顺序"); }
}
