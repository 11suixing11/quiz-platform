import { createContentComplaint, JournalError } from "@/lib/server/journal";
import { allowRateLimitedRequest, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  if (!allowRateLimitedRequest(request, "content-complaint", 4)) return rateLimitResponse();
  try {
    return json(createContentComplaint(await readJson(request, 12_000)), 201);
  } catch (cause) {
    if (cause instanceof JournalError) return error(cause.message, cause.status, cause.code);
    return error("暂时无法提交投诉", 500, "COMPLAINT_FAILED");
  }
}
