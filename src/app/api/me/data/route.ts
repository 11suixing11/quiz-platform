import { getCurrentUser } from "@/lib/server/auth";
import { deleteUserData, getUserDataSummary, getUserSnapshot, saveMutableSnapshot } from "@/lib/server/data";
import { CLOUD_DATA_LIMITS, isCloudDataValidationError, parseCloudPut } from "@/lib/server/cloud-data-schema";
import { assertTrustedMutation, error, json, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  if (new URL(request.url).searchParams.get("view") === "summary") return json({ summary: getUserDataSummary(user.id) });
  return json({ snapshot: getUserSnapshot(user.id) });
}

/** Sync mutable account data only. Completed attempts use /api/me/quiz. */
export async function PUT(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");

  try {
    const body = await readJson(request, CLOUD_DATA_LIMITS.snapshotBytes + 32_000);
    const input = parseCloudPut(body);
    const snapshot = saveMutableSnapshot(user.id, input.snapshot, input.mode);
    return json({ snapshot });
  } catch (cause) {
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
  deleteUserData(user.id);
  return json({ ok: true });
}
