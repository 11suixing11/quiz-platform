"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Check,
  Cloud,
  CloudOff,
  DatabaseBackup,
  LogIn,
  LogOut,
  RefreshCw,
  ShieldCheck,
  Trash2,
  UserPlus,
} from "lucide-react";
import { useAccount, type SyncChoice } from "@/components/account-provider";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAttempts, useBookmarks, useLanguage } from "@/hooks/use-local-storage";
import { readSnapshot, STORAGE_EVENT } from "@/lib/storage";
import { deleteAccount, deleteCloudData, loginAccount, registerAccount } from "@/lib/account";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "register";

function readableError(error: unknown, language: "zh" | "en") {
  const message = error instanceof Error ? error.message : "";
  const normalized = message.toUpperCase().replaceAll(" ", "_");
  if (normalized.includes("INVALID_EMAIL_OR_PASSWORD")) return language === "zh" ? "邮箱或密码不正确。" : "The email or password is incorrect.";
  if (normalized.includes("USER_ALREADY_EXISTS")) return language === "zh" ? "这个邮箱已经注册，可以直接登录。" : "This email is already registered. Sign in instead.";
  if (normalized.includes("PASSWORD_TOO_SHORT")) return language === "zh" ? "密码至少需要 10 个字符。" : "Use at least 10 characters for your password.";
  if (normalized.includes("INVALID_PASSWORD")) return language === "zh" ? "密码不正确。" : "The password is incorrect.";
  if (normalized.includes("INVALID_NAME")) return language === "zh" ? "显示名称需要为 1 至 80 个字符。" : "Use 1 to 80 characters for your display name.";
  return message || (language === "zh" ? "操作失败，请稍后重试。" : "The request failed. Please try again.");
}

export default function AccountPage() {
  const { language } = useLanguage();
  const {
    user,
    syncState,
    syncError,
    syncChoice,
    cloudSummary,
    refreshAccount,
    chooseSync,
    syncNow,
    signOut,
  } = useAccount();
  const { attempts } = useAttempts();
  const { bookmarks } = useBookmarks();
  const [localSessions, setLocalSessions] = useState(0);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [action, setAction] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [confirmCloudClear, setConfirmCloudClear] = useState(false);
  const [confirmAccountDelete, setConfirmAccountDelete] = useState(false);

  const zh = language === "zh";
  const busy = action !== null;
  const cloudSyncEnabled = syncChoice === "merge" || syncChoice === "cloud";
  useEffect(() => {
    const update = () => setLocalSessions(Object.keys(readSnapshot().sessions).length);
    const timer = window.setTimeout(update, 0);
    window.addEventListener(STORAGE_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(STORAGE_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  const localSummary = { attempts: attempts.length, bookmarks: bookmarks.length, sessions: localSessions };
  const counts = (summary: typeof localSummary) => zh
    ? `${summary.attempts} 条记录 · ${summary.bookmarks} 个收藏 · ${summary.sessions} 个未完成进度`
    : `${summary.attempts} results · ${summary.bookmarks} saved · ${summary.sessions} unfinished`;
  const syncOptions: Array<{ id: SyncChoice; icon: typeof Cloud; title: string; description: string }> = [
    {
      id: "merge",
      icon: DatabaseBackup,
      title: zh ? "合并本机与云端" : "Merge device and cloud",
      description: zh ? "保留两边的数据；同一条记录只保留一份。" : "Keep data from both sides; duplicate records stay single.",
    },
    {
      id: "cloud",
      icon: Cloud,
      title: zh ? "只使用云端" : "Use cloud only",
      description: zh ? "用账号中的数据替换这台设备的数据，本机独有记录不会上传。" : "Replace this device with the account copy; device-only records are not uploaded.",
    },
    {
      id: "local",
      icon: CloudOff,
      title: zh ? "暂不同步" : "Pause sync",
      description: zh ? "继续只在这台设备保存，之后可以再开启。" : "Keep saving on this device and enable sync later.",
    },
  ];

  const submitAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");
    if (password.length < 10) {
      setFeedback(zh ? "密码至少需要 10 个字符。" : "Use at least 10 characters for your password.");
      return;
    }
    if (authMode === "register" && !displayName.trim()) {
      setFeedback(zh ? "请输入显示名称。" : "Enter a display name.");
      return;
    }
    setAction("auth");
    try {
      if (authMode === "register") {
        await registerAccount({ email: email.trim(), password, displayName: displayName.trim() });
      } else {
        await loginAccount({ email: email.trim(), password });
      }
      setPassword("");
      await refreshAccount();
    } catch (error) {
      setFeedback(readableError(error, language));
    } finally {
      setAction(null);
    }
  };

  const selectSync = async (choice: SyncChoice) => {
    setFeedback("");
    setAction(`sync-${choice}`);
    await chooseSync(choice);
    setAction(null);
  };

  const clearCloud = async () => {
    if (!confirmCloudClear) {
      setConfirmCloudClear(true);
      return;
    }
    setFeedback("");
    setAction("clear-cloud");
    try {
      await deleteCloudData();
      await chooseSync("local");
      setConfirmCloudClear(false);
      setFeedback(zh ? "云端数据已清空，同步已暂停。本机数据仍然保留。" : "Cloud data was cleared and sync is paused. This device's data remains.");
    } catch (error) {
      setFeedback(readableError(error, language));
    } finally {
      setAction(null);
    }
  };

  const removeAccount = async () => {
    if (!confirmAccountDelete) {
      setConfirmAccountDelete(true);
      return;
    }
    if (!deletePassword) {
      setFeedback(zh ? "请输入当前密码以确认删除。" : "Enter your current password to confirm deletion.");
      return;
    }
    setFeedback("");
    setAction("delete-account");
    try {
      await deleteAccount(deletePassword);
      setDeletePassword("");
      setConfirmAccountDelete(false);
      await refreshAccount();
      setFeedback(zh ? "账号和云端数据已删除，本机数据仍然保留。" : "The account and cloud data were deleted. This device's data remains.");
    } catch (error) {
      setFeedback(readableError(error, language));
    } finally {
      setAction(null);
    }
  };

  if (syncState === "loading") {
    return <div className="atlas-page min-h-screen"><AppHeader backHref="/" backLabel={zh ? "返回首页" : "Back home"} /><main id="main-content" tabIndex={-1} className="atlas-loading" aria-busy="true"><span className="atlas-loading-orbit" aria-hidden="true" /><p>{zh ? "正在读取账号状态…" : "Loading account…"}</p></main></div>;
  }

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={zh ? "返回首页" : "Back home"} section={zh ? "账号" : "Account"} />
      <PageContainer className="max-w-3xl">
        <div className="max-w-2xl">
          <h1 className="atlas-section-title">{zh ? "账号与同步" : "Account and sync"}</h1>
          <p className="mt-4 text-base leading-7 text-ink/60 dark:text-white/60">{zh ? "游客数据默认留在本机。登录后，你可以决定是否在自己的设备之间同步。" : "Guest data stays on this device by default. After signing in, you decide whether to sync across your devices."}</p>
        </div>

        {!user ? (
          <section className="mt-12 border-y border-ink/12 py-8 dark:border-white/12" aria-labelledby="auth-heading">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 id="auth-heading" className="text-2xl font-semibold">{authMode === "login" ? (zh ? "登录" : "Sign in") : (zh ? "创建账号" : "Create account")}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "登录不会自动上传本机数据。首次登录后会先让你选择同步方式。" : "Signing in does not upload device data automatically. You choose a sync mode first."}</p>
                <div className="mt-6 inline-grid grid-cols-2 rounded-lg border border-ink/12 p-1 dark:border-white/12" role="tablist" aria-label={zh ? "账号操作" : "Account action"}>
                  <button type="button" role="tab" aria-selected={authMode === "login"} onClick={() => { setAuthMode("login"); setFeedback(""); }} className={cn("min-h-10 rounded-md px-4 text-sm font-semibold", authMode === "login" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55")}>{zh ? "登录" : "Sign in"}</button>
                  <button type="button" role="tab" aria-selected={authMode === "register"} onClick={() => { setAuthMode("register"); setFeedback(""); }} className={cn("min-h-10 rounded-md px-4 text-sm font-semibold", authMode === "register" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55")}>{zh ? "注册" : "Register"}</button>
                </div>
              </div>

              <form onSubmit={submitAuth} className="space-y-4">
                {authMode === "register" && <label className="block text-sm font-semibold"><span>{zh ? "显示名称" : "Display name"}</span><input aria-label={zh ? "显示名称" : "Display name"} value={displayName} onChange={(event) => setDisplayName(event.target.value)} name="name" autoComplete="name" maxLength={80} required className="atlas-account-input mt-2" /></label>}
                <label className="block text-sm font-semibold"><span>{zh ? "邮箱" : "Email"}</span><input aria-label={zh ? "邮箱" : "Email"} value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" autoComplete="email" required className="atlas-account-input mt-2" /></label>
                <label className="block text-sm font-semibold"><span>{zh ? "密码" : "Password"}</span><input aria-label={zh ? "密码" : "Password"} value={password} onChange={(event) => setPassword(event.target.value)} name="password" type="password" minLength={10} maxLength={128} autoComplete={authMode === "login" ? "current-password" : "new-password"} required className="atlas-account-input mt-2" /><span className="mt-2 block text-xs font-normal text-ink/45 dark:text-white/45">{zh ? "至少 10 个字符" : "At least 10 characters"}</span></label>
                <button type="submit" disabled={busy} className="atlas-primary-action w-full justify-center disabled:cursor-not-allowed disabled:opacity-45">{authMode === "login" ? <LogIn className="size-4" aria-hidden="true" /> : <UserPlus className="size-4" aria-hidden="true" />}{action === "auth" ? (zh ? "请稍候…" : "Please wait…") : authMode === "login" ? (zh ? "登录" : "Sign in") : (zh ? "创建账号" : "Create account")}</button>
              </form>
            </div>
          </section>
        ) : (
          <>
            <section className="mt-12 flex flex-col gap-5 border-y border-ink/12 py-7 dark:border-white/12 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-xl font-semibold">{user.displayName}</p>
                <p className="mt-1 truncate text-sm text-ink/50 dark:text-white/50">{user.email}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ink/55 dark:text-white/55"><span className={cn("size-2 rounded-full", syncState === "ready" ? "bg-accent" : syncState === "paused" || syncState === "awaiting-consent" ? "bg-[#b38a54]" : syncState === "error" ? "bg-[#a53f3f]" : "bg-ink/25 dark:bg-white/25")} aria-hidden="true" /><span>{syncState === "ready" ? (zh ? "同步已开启" : "Sync on") : syncState === "syncing" ? (zh ? "正在同步" : "Syncing") : syncState === "paused" ? (zh ? "仅保存在本机" : "Device only") : syncState === "awaiting-consent" ? (zh ? "等待选择同步方式" : "Choose a sync mode") : (zh ? "同步需要处理" : "Sync needs attention")}</span></div>
            </section>

            <section className="atlas-settings-section mt-10" aria-labelledby="sync-heading">
              <h2 id="sync-heading" className="text-2xl font-semibold">{syncState === "awaiting-consent" ? (zh ? "选择同步方式" : "Choose a sync mode") : (zh ? "同步方式" : "Sync mode")}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "云端保存结果、收藏、偏好和 24 小时内的未完成进度；已完成测评的原始答案只留在本机。" : "The cloud stores results, bookmarks, preferences, and unfinished progress for 24 hours. Completed raw answers stay on this device."}</p>
              {syncState === "awaiting-consent" && <div className="mt-5 grid gap-3 sm:grid-cols-2" aria-label={zh ? "同步前数据摘要" : "Data summary before syncing"}>
                <div className="atlas-sync-summary"><span>{zh ? "这台设备" : "This device"}</span><strong>{counts(localSummary)}</strong></div>
                <div className="atlas-sync-summary"><span>{zh ? "账号云端" : "Account cloud"}</span><strong>{cloudSummary ? counts(cloudSummary) : (zh ? "暂时无法读取，可选择暂不同步" : "Unavailable now; you can keep sync paused")}</strong></div>
              </div>}
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {syncOptions.map(({ id, icon: Icon, title, description }) => {
                  const selected = syncChoice === id;
                  return <button key={id} type="button" onClick={() => void selectSync(id)} disabled={busy} aria-pressed={selected} className={cn("flex min-h-40 flex-col justify-between rounded-lg border p-4 text-left transition disabled:cursor-not-allowed disabled:opacity-45", selected ? "border-accent bg-accent/8" : "border-ink/12 hover:border-ink/30 dark:border-white/12 dark:hover:border-white/30")}><span className="flex items-center justify-between"><Icon className="size-5 text-accent" aria-hidden="true" />{selected && <Check className="size-4 text-accent" aria-hidden="true" />}</span><span><strong className="block text-sm">{action === `sync-${id}` ? (zh ? "正在处理…" : "Working…") : title}</strong><span className="mt-2 block text-xs font-normal leading-5 text-ink/50 dark:text-white/50">{description}</span></span></button>;
                })}
              </div>
              {(syncError || (feedback && !confirmAccountDelete)) && <p className={cn("mt-4 text-sm leading-6", syncError ? "text-[#a53f3f] dark:text-red-200" : "text-accent")} role={syncError ? "alert" : "status"}>{syncError || feedback}</p>}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {cloudSyncEnabled && <button type="button" onClick={() => void syncNow()} disabled={busy || syncState === "syncing"} className="atlas-secondary-action justify-center disabled:opacity-45"><RefreshCw className={cn("size-4", syncState === "syncing" && "animate-spin")} aria-hidden="true" />{zh ? "立即同步" : "Sync now"}</button>}
                <button type="button" onClick={() => void signOut()} disabled={busy} className="atlas-secondary-action justify-center disabled:opacity-45"><LogOut className="size-4" aria-hidden="true" />{zh ? "退出登录" : "Sign out"}</button>
              </div>
            </section>

            <section className="atlas-settings-section mt-10" aria-labelledby="cloud-data-heading">
              <h2 id="cloud-data-heading" className="text-xl font-semibold">{zh ? "云端数据" : "Cloud data"}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "清空后会自动暂停同步，本机记录不会被删除。" : "Clearing cloud data also pauses sync. Records on this device are not deleted."}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {confirmCloudClear && <button type="button" onClick={() => setConfirmCloudClear(false)} disabled={busy} className="atlas-text-button">{zh ? "取消" : "Cancel"}</button>}
                <button type="button" onClick={() => void clearCloud()} disabled={busy} className="atlas-danger-action disabled:opacity-45"><Trash2 className="size-4" aria-hidden="true" />{action === "clear-cloud" ? (zh ? "正在清空…" : "Clearing…") : confirmCloudClear ? (zh ? "确认清空云端" : "Confirm cloud clear") : (zh ? "清空云端数据" : "Clear cloud data")}</button>
              </div>
            </section>

            <section className="atlas-settings-section mt-10" aria-labelledby="delete-account-heading">
              <h2 id="delete-account-heading" className="text-xl font-semibold">{zh ? "删除账号" : "Delete account"}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "账号、登录会话和全部云端数据会永久删除；这台设备上的本机数据仍然保留。" : "The account, sessions, and all cloud data are permanently deleted. This device's local data remains."}</p>
              <div className="mt-5 max-w-md">
                {confirmAccountDelete && <label className="block text-sm font-semibold"><span>{zh ? "当前密码" : "Current password"}</span><input aria-label={zh ? "当前密码" : "Current password"} value={deletePassword} onChange={(event) => setDeletePassword(event.target.value)} type="password" autoComplete="current-password" className="atlas-account-input mt-2" /></label>}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {confirmAccountDelete && <button type="button" onClick={() => { setConfirmAccountDelete(false); setDeletePassword(""); }} disabled={busy} className="atlas-text-button">{zh ? "取消" : "Cancel"}</button>}
                  <button type="button" onClick={() => void removeAccount()} disabled={busy} className="atlas-danger-action disabled:opacity-45"><ShieldCheck className="size-4" aria-hidden="true" />{action === "delete-account" ? (zh ? "正在删除…" : "Deleting…") : confirmAccountDelete ? (zh ? "确认永久删除" : "Delete permanently") : (zh ? "删除账号" : "Delete account")}</button>
                </div>
                {confirmAccountDelete && feedback && <p className="mt-3 text-sm text-[#a53f3f] dark:text-red-200" role="alert">{feedback}</p>}
              </div>
            </section>
          </>
        )}

        {!user && feedback && <p className="mt-5 text-sm text-[#a53f3f] dark:text-red-200" role="alert">{feedback}</p>}
        <p className="mt-10 text-sm text-ink/45 dark:text-white/45"><Link href="/privacy/" className="atlas-text-link justify-start font-semibold">{zh ? "查看隐私说明" : "Read privacy notes"}</Link></p>
      </PageContainer>
    </div>
  );
}
