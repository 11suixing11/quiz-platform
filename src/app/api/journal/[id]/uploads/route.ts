import { createJournalUploadBatch } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { journalFailure, journalJson, mutationUser, requestAddress } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-upload-batch:${auth.user!.id}`, 12)) return rateLimitResponse();
  const { id } = await context.params;
  try {
    const input = await journalJson(request, 4_000) as Record<string, unknown>;
    const batch = await createJournalUploadBatch(auth.user!.id, id, input?.turnstileToken, requestAddress(request));
    return json({ upload: { id: batch.uploadId, expiresAt: batch.expiresAt } }, 201);
  } catch (cause) { return journalFailure(cause, "暂时无法开始上传"); }
}
