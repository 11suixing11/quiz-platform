"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ArrowLeft, ClipboardList, History, House, Languages, MessageCircle, Moon, NotebookPen, Settings, Sun, UserRound } from "lucide-react";
import { useAccount } from "@/components/account-provider";
import { useLanguage, useTheme } from "@/hooks/use-local-storage";
import { cn } from "@/lib/utils";

type Theme = "system" | "light" | "dark";

function initials(name: string) {
  return Array.from(name.trim()).slice(0, 2).join("").toUpperCase() || "ME";
}

function AccountAvatar({ displayName, avatar, compact = false }: { displayName: string; avatar?: string; compact?: boolean }) {
  return (
    <span className={cn("atlas-account-avatar", compact && "atlas-account-avatar-compact")} aria-hidden="true">
      {avatar
        ? <Image src={avatar} alt="" width={64} height={64} unoptimized />
        : <span>{initials(displayName)}</span>}
    </span>
  );
}

const navItems = [
  { href: "/", label: "首页", labelEn: "Home", icon: House },
  { href: "/assessments/", label: "测评", labelEn: "Assess", icon: ClipboardList },
  { href: "/journal/", label: "札记", labelEn: "Journal", icon: NotebookPen },
  { href: "/community/", label: "社区", labelEn: "Community", icon: MessageCircle },
  { href: "/history/", label: "记录", labelEn: "History", icon: History },
  { href: "/account/", label: "账号", labelEn: "Account", icon: UserRound },
];

function isNavItemActive(routePath: string, href: string) {
  if (href === "/") return routePath === "/";
  if (href === "/assessments/" && routePath.startsWith("/test/")) return true;
  return routePath.startsWith(href);
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export function PreferenceSync() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    applyTheme(theme);
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, [language, theme]);
  return null;
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button type="button" onClick={toggleLanguage} className={cn("atlas-preference-control", compact && "atlas-preference-control-compact")} aria-label={language === "zh" ? "切换到 English" : "Switch to Chinese"}>
      <Languages className="size-3.5" strokeWidth={1.8} />
      <span>{language === "zh" ? "EN" : "中"}</span>
    </button>
  );
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const next: Theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Settings;
  const language = useLanguage().language;
  const label = language === "zh"
    ? (theme === "dark" ? "切换为跟随系统" : theme === "light" ? "切换为深色主题" : "切换为浅色主题")
    : (theme === "dark" ? "Use system theme" : theme === "light" ? "Use dark theme" : "Use light theme");
  const visibleLabel = language === "zh"
    ? (theme === "dark" ? "深色" : theme === "light" ? "浅色" : "跟随系统")
    : (theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System");
  return (
    <button type="button" onClick={() => setTheme(next)} className={cn("atlas-preference-control", compact && "atlas-preference-control-compact")} aria-label={label}>
      <Icon className="size-3.5" strokeWidth={1.8} />
      <span className="hidden lg:inline">{visibleLabel}</span>
    </button>
  );
}

export function AppHeader({ backHref, backLabel, section, narrow = false }: { backHref?: string; backLabel?: string; section?: string; narrow?: boolean }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { user, profile } = useAccount();
  const routePath = pathname || "/";
  const accountLabel = user
    ? (language === "zh" ? `打开 ${user.displayName} 的账号` : `Open ${user.displayName}'s account`)
    : (language === "zh" ? "登录或注册" : "Sign in or register");
  return (
    <header className="atlas-header">
      <div className={cn("atlas-header-inner mx-auto flex w-full items-center gap-4 px-5 sm:px-8", narrow ? "max-w-3xl" : "max-w-6xl")}>
        <div className="flex min-w-0 items-center gap-4">
          {backHref ? <Link href={backHref} className="atlas-back-link"><ArrowLeft className="size-3.5" aria-hidden="true" /><span>{backLabel ?? (language === "zh" ? "返回" : "Back")}</span></Link> : <Link href="/" className="atlas-wordmark"><span className="atlas-wordmark-mark" aria-hidden="true" /><span className="sm:hidden">认识你自己</span><span className="hidden sm:inline">认识你自己 <span className="text-muted-foreground">/</span> Know Yourself</span></Link>}
          {section && <span className="hidden truncate text-xs font-medium text-muted-foreground sm:inline">{section}</span>}
        </div>
        {!narrow && (
          <nav className="atlas-desktop-nav" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
            {navItems.slice(1, 5).map(({ href, label, labelEn }) => {
              const active = isNavItemActive(routePath, href);
              return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{language === "zh" ? label : labelEn}</Link>;
            })}
          </nav>
        )}
        <div className="atlas-header-actions ml-auto flex shrink-0 items-center gap-1.5"><Link href="/account/" className={cn("atlas-icon-link", user && "atlas-account-link")} aria-label={accountLabel} title={user ? user.displayName : (language === "zh" ? "账号" : "Account")}>{user ? <AccountAvatar displayName={user.displayName} avatar={profile?.avatar} /> : <UserRound className="size-4" aria-hidden="true" />}</Link><ThemeToggle compact /><LanguageToggle compact /></div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { user, profile } = useAccount();
  const routePath = pathname || "/";
  if (routePath.startsWith("/quiz/") || routePath.startsWith("/result/")) return null;
  return (
    <nav className="atlas-mobile-nav fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper px-3 pt-2 dark:border-white/10 dark:bg-night" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
      <div className="mx-auto grid max-w-lg grid-cols-6 gap-0.5">
        {navItems.map(({ href, label, labelEn, icon: Icon }) => {
          const active = isNavItemActive(routePath, href);
          const accountAvatar = href === "/account/" && user;
          return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={cn("atlas-mobile-nav-link flex min-h-12 flex-col items-center justify-center gap-1 whitespace-nowrap font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", active ? "bg-ink text-paper dark:bg-white dark:text-ink" : "text-ink/65 hover:bg-ink/5 dark:text-white/68 dark:hover:bg-white/5")}>{accountAvatar ? <AccountAvatar displayName={user.displayName} avatar={profile?.avatar} compact /> : <Icon className="size-4" strokeWidth={active ? 2.2 : 1.7} />}<span>{language === "zh" ? label : labelEn}</span></Link>;
        })}
      </div>
    </nav>
  );
}

export function PageContainer({ children, className, id = "main-content" }: { children: React.ReactNode; className?: string; id?: string }) {
  return <main id={id} tabIndex={-1} className={cn("atlas-page-container mx-auto w-full max-w-6xl px-5 pb-28 pt-8 sm:px-8 sm:pb-16 sm:pt-12", className)}>{children}</main>;
}
