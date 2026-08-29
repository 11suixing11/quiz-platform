import { getCurrentUser } from "@/lib/server/auth";
import { CommunityValidationError, deleteCommunityPost } from "@/lib/server/community";
import { assertExpectedAccount, assertTrustedMutation, error, json } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  const { id } = await context.params;
  try {
    if (!deleteCommunityPost(user.id, id)) return error("没有找到可删除的分享", 404, "POST_NOT_FOUND");
    return json({ ok: true });
  } catch (cause) {
    if (cause instanceof CommunityValidationError) return error(cause.message, cause.status, cause.code);
    return error("暂时无法删除分享", 500);
  }
}
