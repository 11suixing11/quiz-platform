import { uploadJournalAsset } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { fileFromForm, journalFailure, journalForm, metadataFromForm, mutationUser } from "../../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ id: string; uploadId: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-upload:${auth.user!.id}`, 20)) return rateLimitResponse();
  const { id, uploadId } = await context.params;
  try {
    const form = await journalForm(request);
    const metadata = metadataFromForm(form, uploadId);
    const entry = await uploadJournalAsset(auth.user!.id, id, fileFromForm(form), metadata);
    const image = entry.images.find((item) => item.id === entry.uploadedAssetId);
    return json({ image }, 201);
  } catch (cause) { return journalFailure(cause, "暂时无法上传图片"); }
}
