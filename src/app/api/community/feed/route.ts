import { getCurrentUser } from "@/lib/server/auth";
import { listCommunityFeed, type CommunityFeedFilter } from "@/lib/server/community-feed";
import { json } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const filters = new Set<CommunityFeedFilter>(["all", "assessment", "text", "image"]);

export async function GET(request: Request) {
  const user = await getCurrentUser();
  const params = new URL(request.url).searchParams;
  const sort = params.get("sort") === "resonant" ? "resonant" : "latest";
  const requestedFilter = params.get("type") as CommunityFeedFilter;
  const filter = filters.has(requestedFilter) ? requestedFilter : "all";
  return json({ posts: listCommunityFeed(user?.id ?? null, sort, filter) });
}
