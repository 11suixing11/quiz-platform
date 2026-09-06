import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | undefined;

function smtpConfiguration() {
  const host = process.env.SMTP_HOST?.trim();
  const from = process.env.SMTP_FROM?.trim();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();
  const portValue = Number(process.env.SMTP_PORT || "587");
  if (!host || !from || !Number.isInteger(portValue) || portValue < 1 || portValue > 65_535) {
    throw new Error("EMAIL_DELIVERY_NOT_CONFIGURED");
  }
  if (Boolean(user) !== Boolean(password)) throw new Error("EMAIL_DELIVERY_NOT_CONFIGURED");
  return {
    host,
    port: portValue,
    secure: process.env.SMTP_SECURE === "true" || portValue === 465,
    from,
    auth: user && password ? { user, pass: password } : undefined,
  };
}

export function emailDeliveryConfigured() {
  try {
    smtpConfiguration();
    return true;
  } catch {
    return false;
  }
}

function mailTransport() {
  if (transporter) return transporter;
  const configuration = smtpConfiguration();
  transporter = nodemailer.createTransport({
    host: configuration.host,
    port: configuration.port,
    secure: configuration.secure,
    auth: configuration.auth,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export const PASSWORD_RESET_TOKEN_MINUTES = 30;

export async function sendPasswordResetEmail(input: { email: string; displayName: string; url: string }) {
  const configuration = smtpConfiguration();
  const displayName = input.displayName.trim() || "朋友";
  const safeName = escapeHtml(displayName);
  const safeUrl = escapeHtml(input.url);
  await mailTransport().sendMail({
    from: configuration.from,
    to: input.email,
    subject: "重置你的密码 | Reset your password",
    text: `${displayName}，你好：\n\n请打开以下链接设置新密码。链接 ${PASSWORD_RESET_TOKEN_MINUTES} 分钟内有效，且只能使用一次；如果这不是你本人的操作，可以忽略这封邮件。\n${input.url}\n\nHello ${displayName},\n\nOpen the link above to set a new password. It expires in ${PASSWORD_RESET_TOKEN_MINUTES} minutes and can be used only once. Ignore this email if you did not request a reset.`,
    html: `<!doctype html><html lang="zh-CN"><body style="margin:0;background:#f6f4ef;color:#1e2422;font-family:Arial,'Microsoft YaHei',sans-serif"><main style="max-width:560px;margin:0 auto;padding:40px 24px"><h1 style="font-size:24px;line-height:1.35;margin:0 0 20px">重置你的密码</h1><p style="font-size:16px;line-height:1.7">${safeName}，你好。链接 ${PASSWORD_RESET_TOKEN_MINUTES} 分钟内有效，且只能使用一次；如果这不是你本人的操作，可以忽略这封邮件。</p><p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;background:#1e2422;color:#fff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:700">设置新密码</a></p><hr style="border:0;border-top:1px solid #d8d6cf;margin:32px 0"><h2 style="font-size:18px;line-height:1.4">Reset your password</h2><p style="font-size:15px;line-height:1.7">Hello ${safeName}. The link expires in ${PASSWORD_RESET_TOKEN_MINUTES} minutes and can be used only once. Ignore this email if you did not request a reset.</p><p style="font-size:13px;line-height:1.6;color:#5e6561;overflow-wrap:anywhere">${safeUrl}</p></main></body></html>`,
  });
}

export async function sendAccountVerificationEmail(input: { email: string; displayName: string; url: string }) {
  const configuration = smtpConfiguration();
  const displayName = input.displayName.trim() || "朋友";
  const safeName = escapeHtml(displayName);
  const safeUrl = escapeHtml(input.url);
  await mailTransport().sendMail({
    from: configuration.from,
    to: input.email,
    subject: "验证你的邮箱 | Verify your email",
    text: `${displayName}，你好：\n\n请打开以下链接验证邮箱，完成后即可上传和发布图像札记：\n${input.url}\n\nHello ${displayName},\n\nOpen the link above to verify your email before uploading or publishing image journals.`,
    html: `<!doctype html><html lang="zh-CN"><body style="margin:0;background:#f6f4ef;color:#1e2422;font-family:Arial,'Microsoft YaHei',sans-serif"><main style="max-width:560px;margin:0 auto;padding:40px 24px"><h1 style="font-size:24px;line-height:1.35;margin:0 0 20px">验证你的邮箱</h1><p style="font-size:16px;line-height:1.7">${safeName}，你好。完成验证后即可上传和发布图像札记。</p><p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;background:#1e2422;color:#fff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:700">验证邮箱</a></p><hr style="border:0;border-top:1px solid #d8d6cf;margin:32px 0"><h2 style="font-size:18px;line-height:1.4">Verify your email</h2><p style="font-size:15px;line-height:1.7">Hello ${safeName}. Verify your email before uploading or publishing image journals.</p><p style="font-size:13px;line-height:1.6;color:#5e6561;overflow-wrap:anywhere">${safeUrl}</p></main></body></html>`,
  });
}
