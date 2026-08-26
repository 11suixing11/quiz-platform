import { getCurrentUser } from "@/lib/server/auth";
import { saveImportedSnapshot } from "@/lib/server/data";
import { CLOUD_DATA_LIMITS, isCloudDataValidationError, parseCloudImportPut } from "@/lib/server/cloud-data-schema";
import { assertTrustedMutation, error, json, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Explicit one-off import of an existing localStorage v3 backup/history. */
export async function PUT(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");

  try {
    const body = await readJson(request, CLOUD_DATA_LIMITS.snapshotBytes + 32_000);
    const input = parseCloudImportPut(body);
    const snapshot = saveImportedSnapshot(user.id, input.snapshot, input.mode);
    return json({ snapshot });
  } catch (cause) {
    if (isCloudDataValidationError(cause)) return error(cause.message, 400, "INVALID_DATA");
    if (cause instanceof Error && (cause.message === "请求内容过大" || cause.message === "请求格式无效")) return error(cause.message, 400, "INVALID_DATA");
    console.error("Cloud history import failed", cause);
    return error("历史记录暂时无法导入，请稍后再试", 500);
  }
}
