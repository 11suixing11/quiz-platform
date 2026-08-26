import { getCurrentUser } from "@/lib/server/auth";
import { DataRevisionConflictError, saveImportedSnapshot } from "@/lib/server/data";
import { CLOUD_DATA_LIMITS, isCloudDataValidationError, parseCloudImportPut } from "@/lib/server/cloud-data-schema";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Merge browser history and synchronize the complete mutable snapshot. */
export async function PUT(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `history-sync:${user.id}`, 120)) return rateLimitResponse();

  try {
    const body = await readJson(request, CLOUD_DATA_LIMITS.snapshotBytes + 32_000);
    const input = parseCloudImportPut(body);
    return json(saveImportedSnapshot(user.id, input.snapshot, input.baseRevision, input.mode));
  } catch (cause) {
    if (cause instanceof DataRevisionConflictError) {
      return json({ error: "云端数据已更新，请重新同步", code: "SYNC_REVISION_CONFLICT", revision: cause.currentRevision }, 409);
    }
    if (isCloudDataValidationError(cause)) return error(cause.message, 400, "INVALID_DATA");
    if (cause instanceof Error && (cause.message === "请求内容过大" || cause.message === "请求格式无效")) return error(cause.message, 400, "INVALID_DATA");
    console.error("Cloud history import failed", cause);
    return error("历史记录暂时无法导入，请稍后再试", 500);
  }
}
