import { setJournalReaction } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try {
    const input = await journalJson(request, 2_000) as Record<string, unknown>;
    return json(setJournalReaction(auth.user!.id, id, input?.active !== false));
  } catch (cause) { return journalFailure(cause, "暂时无法更新共鸣"); }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try { return json(setJournalReaction(auth.user!.id, id, false)); }
  catch (cause) { return journalFailure(cause, "暂时无法更新共鸣"); }
}
