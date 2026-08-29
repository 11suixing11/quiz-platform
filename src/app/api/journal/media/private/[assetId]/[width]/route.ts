import { readJournalMedia } from "@/lib/server/journal";
import { error } from "@/lib/server/http";
import { getCurrentUser, journalFailure } from "../../../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ assetId: string; width: string }> }) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const { assetId, width } = await context.params;
  try {
    const media = readJournalMedia("private", user.id, assetId, Number(width));
    return new Response(media.bytes, { headers: { "Content-Type": media.contentType, "Cache-Control": media.cacheControl, "X-Content-Type-Options": "nosniff" } });
  } catch (cause) { return journalFailure(cause, "暂时无法读取图片"); }
}
