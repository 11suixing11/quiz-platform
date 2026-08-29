import { readJournalMedia } from "@/lib/server/journal";
import { journalFailure } from "../../../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ revisionId: string; assetId: string; width: string }> }) {
  const { revisionId, assetId, width } = await context.params;
  try {
    const media = readJournalMedia("public", null, assetId, Number(width), revisionId);
    return new Response(media.bytes, { headers: { "Content-Type": media.contentType, "Cache-Control": media.cacheControl, "X-Content-Type-Options": "nosniff" } });
  } catch (cause) { return journalFailure(cause, "暂时无法读取图片"); }
}
