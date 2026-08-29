import { publishJournalEntry } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { journalFailure, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function publish(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-publish:${auth.user!.id}`, 6)) return rateLimitResponse();
  const { id } = await context.params;
  try { return json({ entry: publishJournalEntry(auth.user!.id, id) }); }
  catch (cause) { return journalFailure(cause, "暂时无法发布札记"); }
}

export const POST = publish;
export const PUT = publish;
