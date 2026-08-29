import { deleteJournalAsset, replaceJournalAsset } from "@/lib/server/journal";
import { allowRateLimitedRequest, json, rateLimitResponse } from "@/lib/server/http";
import { fileFromForm, journalFailure, journalForm, metadataFromForm, mutationUser } from "../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request, context: { params: Promise<{ id: string; assetId: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  if (!allowRateLimitedRequest(request, `journal-replace:${auth.user!.id}`, 20)) return rateLimitResponse();
  const { id, assetId } = await context.params;
  try {
    const form = await journalForm(request);
    const entry = await replaceJournalAsset(auth.user!.id, id, assetId, fileFromForm(form), metadataFromForm(form));
    return json({ image: entry.images.find((image) => image.id === assetId) });
  } catch (cause) { return journalFailure(cause, "暂时无法替换图片"); }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string; assetId: string }> }) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  const { id, assetId } = await context.params;
  try { deleteJournalAsset(auth.user!.id, id, assetId); return json({ ok: true }); }
  catch (cause) { return journalFailure(cause, "暂时无法删除图片"); }
}
