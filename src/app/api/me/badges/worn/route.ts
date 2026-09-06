import { z } from "zod";
import { getCurrentUser } from "@/lib/server/auth";
import { BadgeValidationError, setWornBadges } from "@/lib/server/badges";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// The array length is deliberately unconstrained here: an oversized selection
// must surface as BADGE_LIMIT_EXCEEDED from the badge layer, not a generic
// schema rejection, so the interface can explain the three-badge limit.
const schema = z.strictObject({
  worn: z.array(z.strictObject({
    testId: z.string().min(1).max(100),
    resultKey: z.string().min(1).max(160),
  })),
});

/** Replace the complete worn selection and echo the stored result. */
export async function PUT(request: Request) {
  const trusted = await assertTrustedMutation(request);
  if (trusted) return trusted;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `badges:${user.id}`)) return rateLimitResponse();
  try {
    const input = schema.parse(await readJson(request, 8_000));
    const worn = await setWornBadges(user.id, input.worn);
    return json({ userId: user.id, worn });
  } catch (cause) {
    if (cause instanceof BadgeValidationError) return error(cause.message, cause.status, cause.code);
    if (cause instanceof z.ZodError) return error("佩戴格式无效", 400, "BADGE_INVALID");
    if (cause instanceof Error && (cause.message === "请求内容过大" || cause.message === "请求格式无效")) return error(cause.message, 400, "BADGE_INVALID");
    console.error("Badge wear update failed", cause);
    return error("徽章暂时无法更新，请稍后再试", 500);
  }
}
