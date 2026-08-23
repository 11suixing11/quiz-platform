"use client";

import Link from "next/link";
import { History, House } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";

export default function NotFound() {
  const { language } = useLanguage();
  return <div className="atlas-page min-h-screen"><AppHeader /><PageContainer><div className="atlas-empty-state mx-auto mt-14 max-w-xl"><div className="atlas-empty-line" /><h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">{language === "zh" ? "这个页面没有找到" : "This page could not be found"}</h1><p className="mt-3 max-w-md text-sm leading-6 text-ink/55 dark:text-white/55">{language === "zh" ? "页面可能已经移除，或者地址并不存在。你可以返回首页重新选择。" : "The page may have been removed, or the address may not exist. Return home and choose again."}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/" className="atlas-primary-action justify-center"><House className="size-4" />{language === "zh" ? "返回首页" : "Back home"}</Link><Link href="/history/" className="atlas-secondary-action justify-center"><History className="size-4" />{language === "zh" ? "查看历史" : "View history"}</Link></div></div></PageContainer></div>;
}
