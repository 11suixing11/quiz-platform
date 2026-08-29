import { createJournalEntry, getJournalViewer, listOwnedJournalEntries, listPublishedJournalEntries } from "@/lib/server/journal";
import { json } from "@/lib/server/http";
import { getCurrentUser, journalFailure, journalJson, mutationUser } from "./_shared";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  const url = new URL(request.url);
  if (url.searchParams.get("scope") === "public") {
    const cursor = Number(url.searchParams.get("cursor"));
    return json({ entries: listPublishedJournalEntries(user?.id ?? null, cursor) });
  }
  if (!user) return json({ entries: [], viewer: null });
  try {
    const viewer = getJournalViewer(user.id);
    return json({ entries: viewer.emailVerified ? listOwnedJournalEntries(user.id) : [], viewer });
  } catch (cause) { return journalFailure(cause); }
}

export async function POST(request: Request) {
  const auth = await mutationUser(request);
  if (auth.response) return auth.response;
  try { return json({ entry: createJournalEntry(auth.user!.id, await journalJson(request)) }, 201); }
  catch (cause) { return journalFailure(cause, "暂时无法创建札记"); }
}
