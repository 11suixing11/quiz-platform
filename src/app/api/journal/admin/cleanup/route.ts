import { cleanupOrphanedJournalMedia } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { journalFailure, mutationUser } from "../../_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  try { return json(cleanupOrphanedJournalMedia(auth.user!.id)); }
  catch (cause) { return journalFailure(cause, "暂时无法清理媒体"); }
}
