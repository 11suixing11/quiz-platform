import { getCurrentUser } from "@/lib/server/auth";
import { DataRevisionConflictError, deleteUserData, getUserDataSummaryState, getUserSnapshotState, saveMutableSnapshot } from "@/lib/server/data";
import { CLOUD_DATA_LIMITS, isCloudDataValidationError, parseCloudPut } from "@/lib/server/cloud-data-schema";
import { assertExpectedAccount, assertTrustedMutation, error, json, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (new URL(request.url).searchParams.get("view") === "summary") return json(getUserDataSummaryState(user.id));
  return json(getUserSnapshotState(user.id));
}

/** Sync mutable account data only. Completed attempts use /api/me/quiz. */
export async function PUT(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;

  try {
    const body = await readJson(request, CLOUD_DATA_LIMITS.snapshotBytes + 32_000);
    const input = parseCloudPut(body);
    return json(saveMutableSnapshot(user.id, input.snapshot, input.baseRevision, input.mode));
  } catch (cause) {
    if (cause instanceof DataRevisionConflictError) {
      return json({ error: "云端数据已更新，请重新同步", code: "SYNC_REVISION_CONFLICT", revision: cause.currentRevision }, 409);
    }
    if (isCloudDataValidationError(cause)) return error(cause.message, 400, "INVALID_DATA");
    if (cause instanceof Error && (cause.message === "请求内容过大" || cause.message === "请求格式无效")) return error(cause.message, 400, "INVALID_DATA");
    console.error("Cloud data sync failed", cause);
    return error("数据暂时无法保存，请稍后再试", 500);
  }
}

export async function DELETE(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  deleteUserData(user.id);
  return json({ ok: true });
}
