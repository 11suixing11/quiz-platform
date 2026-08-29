import { createJournalComment } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-comment:${auth.user!.id}`, 12)) return rateLimitResponse();
  const { id } = await context.params;
  try { return json(createJournalComment(auth.user!.id, id, await journalJson(request, 4_000)), 201); }
  catch (cause) { return journalFailure(cause, "暂时无法留言"); }
}
