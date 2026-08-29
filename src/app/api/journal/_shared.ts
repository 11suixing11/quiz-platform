import { getCurrentUser, requestAddress } from "@/lib/server/auth";
import { GovernanceError } from "@/lib/server/governance";
import { JournalError, JOURNAL_LIMITS } from "@/lib/server/journal";
import { assertExpectedAccount, assertTrustedMutation, error, readFormData, readJson } from "@/lib/server/http";

export function journalFailure(cause: unknown, fallback = "暂时无法完成请求") {
  if (cause instanceof JournalError) return error(cause.message, cause.status, cause.code);
  if (cause instanceof GovernanceError) return error(cause.message, cause.status, cause.code);
  console.error("Journal request failed", cause);
  return error(fallback, 500);
}

export async function mutationUser(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return { response: trustedError, user: null };
  const user = await getCurrentUser();
  if (!user) return { response: error("请先登录", 401, "UNAUTHORIZED"), user: null };
  const accountError = assertExpectedAccount(request, user.id);
  return accountError ? { response: accountError, user: null } : { response: null, user };
}

export async function journalJson(request: Request, maxBytes = 32_000) {
  return readJson(request, maxBytes);
}

export async function journalForm(request: Request) {
  try {
    return await readFormData(request, JOURNAL_LIMITS.fileBytes + 1_000_000);
  } catch (cause) {
    if (cause instanceof Error && cause.message === "请求内容过大") {
      throw new JournalError("上传内容过大", "FILE_TOO_LARGE", 413);
    }
    throw new JournalError("上传格式无效", "INVALID_UPLOAD");
  }
}

export function fileFromForm(form: FormData) {
  const file = form.get("file");
  if (!(file instanceof File)) throw new JournalError("请选择图片", "FILE_REQUIRED");
  return file;
}

export function metadataFromForm(form: FormData, uploadId?: string) {
  return {
    uploadId: uploadId || String(form.get("uploadSessionId") ?? form.get("uploadId") ?? ""),
    position: form.get("position") ?? undefined,
    caption: form.get("caption") ?? "",
    altText: form.get("altText") ?? "",
    decorative: form.get("decorative") ?? false,
  };
}

export { getCurrentUser, requestAddress };
