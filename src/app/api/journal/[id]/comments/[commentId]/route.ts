import { deleteJournalComment } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, mutationUser } from "../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(request: Request, context: { params: Promise<{ id: string; commentId: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id, commentId } = await context.params;
  try { return json(deleteJournalComment(auth.user!.id, id, commentId)); }
  catch (cause) { return journalFailure(cause, "暂时无法删除留言"); }
}
