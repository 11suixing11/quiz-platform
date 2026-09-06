import { getCurrentUser } from "@/lib/server/auth";
import { CommunityValidationError, createCommunityPost, listCommunityPosts } from "@/lib/server/community";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  const sort = new URL(request.url).searchParams.get("sort") === "resonant" ? "resonant" : "latest";
  return json({ posts: listCommunityPosts(user?.id ?? null, sort) });
}

export async function POST(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `community-post:${user.id}`, 5)) return rateLimitResponse();
  try {
    // A 12,000-character text post can occupy roughly 48 KB in UTF-8 JSON.
    // Leave room for field names and options while retaining a bounded body.
    const id = await createCommunityPost(user.id, await readJson(request, 64_000));
    return json({ id }, 201);
  } catch (cause) {
    if (cause instanceof CommunityValidationError) return error(cause.message, cause.status, cause.code);
    if (cause instanceof Error && cause.message === "请求内容过大") return error(cause.message, 413, "PAYLOAD_TOO_LARGE");
    if (cause instanceof Error && cause.message === "请求格式无效") return error(cause.message, 400, "INVALID_DATA");
    console.error("Community post creation failed", cause);
    return error("暂时无法发布，请稍后再试", 500);
  }
}
