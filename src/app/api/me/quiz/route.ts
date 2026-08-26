import { loadQuizDefinition, scoreQuiz } from "@/core/quiz";
import { getCurrentUser } from "@/lib/server/auth";
import { clearAttemptRecords, DataValidationError, deleteAttemptRecord, saveAttemptRecord } from "@/lib/server/data";
import { isCloudDataValidationError, parseCloudSubmission } from "@/lib/server/cloud-data-schema";
import { assertTrustedMutation, error, json, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Validate answers against the canonical definition and score on the server. */
export async function POST(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");

  try {
    const input = parseCloudSubmission(await readJson(request, 64_000));
    const definition = await loadQuizDefinition(input.testId);
    if (!definition) return error("这项测评不存在或暂不可用", 404, "QUIZ_NOT_FOUND");
    const result = scoreQuiz(definition, input.answers);
    const attempt = saveAttemptRecord(user.id, {
      testId: definition.id,
      result,
      testName: definition.title.zh,
      testNameEn: definition.title.en,
    });
    return json({ attempt }, 201);
  } catch (cause) {
    if (isCloudDataValidationError(cause) || cause instanceof DataValidationError) return error(cause.message, 400, "INVALID_DATA");
    if (cause instanceof Error && (cause.message === "请求内容过大" || cause.message === "请求格式无效" || cause.message.includes("outside the available option range"))) {
      return error(cause.message, 400, "INVALID_DATA");
    }
    console.error("Cloud quiz submission failed", cause);
    return error("测评结果暂时无法保存，请稍后再试", 500);
  }
}

/** Delete one result by id, or all results when no id is provided. */
export async function DELETE(request: Request) {
  const trustedError = await assertTrustedMutation(request);
  if (trustedError) return trustedError;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");

  const id = new URL(request.url).searchParams.get("id");
  if (id !== null) {
    if (!/^[a-zA-Z0-9:_-]{1,180}$/.test(id)) return error("无效的记录编号", 400, "INVALID_ID");
    deleteAttemptRecord(user.id, id);
  } else {
    clearAttemptRecords(user.id);
  }
  return json({ ok: true });
}
