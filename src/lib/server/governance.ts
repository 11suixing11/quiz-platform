import "server-only";

import { asRow, getDatabase } from "./database";

export type GovernanceStatus = "normal" | "no_upload" | "read_only" | "suspended" | "banned";

export class GovernanceError extends Error {
  constructor(message: string, public readonly code: string, public readonly status = 403) {
    super(message);
    this.name = "GovernanceError";
  }
}

const STATUSES = new Set<GovernanceStatus>(["normal", "no_upload", "read_only", "suspended", "banned"]);

export function getGovernanceStatus(userId: string): GovernanceStatus {
  const row = asRow(getDatabase().prepare("SELECT status FROM user_governance WHERE user_id = ?").get(userId));
  const status = String(row?.status ?? "normal") as GovernanceStatus;
  return STATUSES.has(status) ? status : "normal";
}

export function assertAccountCanWrite(userId: string) {
  const status = getGovernanceStatus(userId);
  if (status === "banned" || status === "suspended") throw new GovernanceError("账号当前不可进行此操作", "ACCOUNT_RESTRICTED");
  if (status === "read_only") throw new GovernanceError("账号当前为只读状态", "ACCOUNT_READ_ONLY");
  return status;
}

export function assertAccountCanUpload(userId: string) {
  const status = assertAccountCanWrite(userId);
  if (status === "no_upload") throw new GovernanceError("账号当前不可上传图片", "UPLOAD_BLOCKED");
  return status;
}

function configuredAdminIds() {
  return new Set((process.env.JOURNAL_ADMIN_USER_ID || process.env.ADMIN_USER_ID || "").split(",").map((item) => item.trim()).filter(Boolean));
}

export function assertAdmin(userId: string) {
  if (!configuredAdminIds().has(userId)) throw new GovernanceError("没有管理权限", "FORBIDDEN");
}
