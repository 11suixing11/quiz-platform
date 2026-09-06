"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, KeyRound } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";
import { AccountApiError, resetPassword } from "@/lib/account";

function readableError(error: unknown, language: "zh" | "en") {
  const message = error instanceof Error ? error.message : "";
  const code = error instanceof AccountApiError ? error.code ?? "" : "";
  const normalized = `${code} ${message}`.toUpperCase().replaceAll(" ", "_");
  if (normalized.includes("INVALID_TOKEN")) return language === "zh" ? "重置链接无效或已过期，请重新申请一封邮件。" : "The reset link is invalid or has expired. Request a new email.";
  if (normalized.includes("PASSWORD_TOO_SHORT")) return language === "zh" ? "新密码至少需要 10 个字符。" : "Use at least 10 characters for your new password.";
  if (normalized.includes("PASSWORD_TOO_LONG")) return language === "zh" ? "新密码不能超过 128 个字符。" : "Use no more than 128 characters for your new password.";
  if (normalized.includes("RATE_LIMIT") || normalized.includes("TOO_MANY_REQUESTS")) return language === "zh" ? "操作过于频繁，请稍后再试。" : "Too many attempts. Please try again later.";
  return message || (language === "zh" ? "操作失败，请稍后重试。" : "The request failed. Please try again.");
}

export default function ResetPasswordPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      setToken(params.get("error") === "INVALID_TOKEN" ? "" : params.get("token") || "");
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");
    if (newPassword.length < 10) {
      setFeedback(zh ? "新密码至少需要 10 个字符。" : "Use at least 10 characters for your new password.");
      return;
    }
    if (newPassword.length > 128) {
      setFeedback(zh ? "新密码不能超过 128 个字符。" : "Use no more than 128 characters for your new password.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setFeedback(zh ? "两次输入的新密码不一致。" : "The new passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      await resetPassword({ token: token ?? "", newPassword });
      setSucceeded(true);
    } catch (error) {
      setFeedback(readableError(error, language));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/account/" backLabel={zh ? "返回账号" : "Back to account"} section={zh ? "账号" : "Account"} />
      <PageContainer className="max-w-3xl">
        <div className="max-w-2xl">
          <h1 className="atlas-section-title">{zh ? "设置新密码" : "Set a new password"}</h1>
          <p className="mt-4 text-base leading-7 text-ink/60 dark:text-white/60">{zh ? "通过邮件中的重置链接设置新密码。新密码需要 10 至 128 个字符，设置成功后其他设备会退出登录。" : "Set a new password through the link from your email. It must be 10 to 128 characters; other devices are signed out once it is set."}</p>
        </div>

        {succeeded ? <section className="mt-12 border-y border-ink/12 py-10 dark:border-white/12" aria-live="polite">
          <CheckCircle2 className="size-7 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-semibold">{zh ? "密码已更新" : "Password updated"}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "为安全起见，所有设备上的登录状态都已退出，请使用新密码重新登录。" : "For safety, every signed-in session has been signed out. Sign in again with the new password."}</p>
          <Link href="/account/" className="atlas-primary-action mt-6 justify-center">{zh ? "前往登录" : "Go to sign in"}</Link>
        </section> : token === null ? <p className="mt-12 border-y border-ink/12 py-10 text-sm text-ink/55 dark:border-white/12 dark:text-white/55" role="status" aria-busy="true">{zh ? "正在读取重置链接…" : "Reading the reset link…"}</p> : token === "" ? <section className="mt-12 border-y border-ink/12 py-10 dark:border-white/12" role="alert">
          <h2 className="text-xl font-semibold">{zh ? "重置链接无效" : "Invalid reset link"}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "链接缺失、已使用或已超过 30 分钟有效期，请重新申请一封邮件。" : "The link is missing, already used, or older than 30 minutes. Request a new email."}</p>
          <Link href="/account/forgot-password/" className="atlas-secondary-action mt-6 justify-center">{zh ? "重新申请重置邮件" : "Request a new email"}</Link>
        </section> : <form onSubmit={submit} className="mt-12 space-y-4 border-y border-ink/12 py-8 dark:border-white/12">
          <label className="block text-sm font-semibold">
            <span>{zh ? "新密码" : "New password"}</span>
            <input aria-label={zh ? "新密码" : "New password"} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} name="new-password" type="password" minLength={10} maxLength={128} autoComplete="new-password" required className="atlas-account-input mt-2" />
            <span className="mt-2 block text-xs font-normal text-ink/45 dark:text-white/45">{zh ? "10 至 128 个字符" : "10 to 128 characters"}</span>
          </label>
          <label className="block text-sm font-semibold">
            <span>{zh ? "确认新密码" : "Confirm new password"}</span>
            <input aria-label={zh ? "确认新密码" : "Confirm new password"} value={confirmNewPassword} onChange={(event) => setConfirmNewPassword(event.target.value)} name="confirm-new-password" type="password" minLength={10} maxLength={128} autoComplete="new-password" required className="atlas-account-input mt-2" />
          </label>
          <button type="submit" disabled={busy} className="atlas-primary-action w-full justify-center disabled:cursor-not-allowed disabled:opacity-45">
            <KeyRound className="size-4" aria-hidden="true" />
            {busy ? (zh ? "正在设置…" : "Setting…") : (zh ? "设置新密码" : "Set new password")}
          </button>
          {feedback && <p className="text-sm text-[color:var(--danger)]" role="alert">{feedback}</p>}
          <Link href="/account/forgot-password/" className="atlas-text-link justify-start font-semibold">{zh ? "重置邮件没有收到？" : "No reset email?"}</Link>
        </form>}
        <p className="mt-10 text-sm text-ink/45 dark:text-white/45"><Link href="/privacy/" className="atlas-text-link justify-start font-semibold">{zh ? "查看隐私说明" : "Read privacy notes"}</Link></p>
      </PageContainer>
    </div>
  );
}
