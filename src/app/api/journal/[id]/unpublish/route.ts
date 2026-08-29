import { unpublishJournalEntry } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try { return json({ entry: unpublishJournalEntry(auth.user!.id, id) }); }
  catch (cause) { return journalFailure(cause, "暂时无法取消公开"); }
}
