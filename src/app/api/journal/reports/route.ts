import { createJournalReport } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser } from "../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-report:${auth.user!.id}`, 10)) return rateLimitResponse();
  try { return json(createJournalReport(auth.user!.id, await journalJson(request, 6_000)), 201); }
  catch (cause) { return journalFailure(cause, "暂时无法提交举报"); }
}
