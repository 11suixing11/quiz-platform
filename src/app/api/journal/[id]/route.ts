import { deleteJournalEntry, getJournalEntryForViewer, updateJournalEntry } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { getCurrentUser, journalFailure, journalJson, mutationUser } from "../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  const { id } = await context.params;
  const viewDraft = new URL(request.url).searchParams.get("view") === "draft";
  try { return json({ entry: getJournalEntryForViewer(user?.id ?? null, id, viewDraft) }); }
  catch (cause) { return journalFailure(cause, "暂时无法读取札记"); }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try { return json(updateJournalEntry(auth.user!.id, id, await journalJson(request, 20_000))); }
  catch (cause) { return journalFailure(cause, "暂时无法保存札记"); }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try { return json(deleteJournalEntry(auth.user!.id, id)); }
  catch (cause) { return journalFailure(cause, "暂时无法删除札记"); }
}
