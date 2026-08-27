import { getCurrentUser } from "@/lib/server/auth";
import { CommunityValidationError, createCommunityReport } from "@/lib/server/community";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `community-report:${user.id}`, 10)) return rateLimitResponse();
  try {
    createCommunityReport(user.id, await readJson(request, 4_000));
    return json({ ok: true }, 201);
  } catch (cause) {
    if (cause instanceof CommunityValidationError) return error(cause.message, 400, cause.code);
    return error("暂时无法提交举报", 500);
  }
}
