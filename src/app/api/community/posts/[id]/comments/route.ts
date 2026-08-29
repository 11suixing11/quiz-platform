import { getCurrentUser } from "@/lib/server/auth";
import { CommunityValidationError, createCommunityComment } from "@/lib/server/community";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `community-comment:${user.id}`, 12)) return rateLimitResponse();
  try {
    const id = createCommunityComment(user.id, (await context.params).id, await readJson(request, 8_000));
    return json({ id }, 201);
  } catch (cause) {
    if (cause instanceof CommunityValidationError) return error(cause.message, cause.status, cause.code);
    console.error("Community comment creation failed", cause);
    return error("暂时无法留言，请稍后再试", 500);
  }
}
