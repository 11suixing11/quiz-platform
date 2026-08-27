import { getCurrentUser } from "@/lib/server/auth";
import { CommunityValidationError, setCommunityReaction } from "@/lib/server/community";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function mutate(request: Request, context: { params: Promise<{ id: string }> }, active: boolean) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `community-reaction:${user.id}`, 30)) return rateLimitResponse();
  try {
    setCommunityReaction(user.id, (await context.params).id, active);
    return json({ ok: true });
  } catch (cause) {
    if (cause instanceof CommunityValidationError) return error(cause.message, 404, cause.code);
    return error("暂时无法更新共鸣", 500);
  }
}

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) { return mutate(request, context, true); }
export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) { return mutate(request, context, false); }
