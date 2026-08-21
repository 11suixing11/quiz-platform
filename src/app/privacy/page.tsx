"use client";

import Link from "next/link";
import { Database, EyeOff, HardDrive, ShieldCheck } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";

const content = {
  zh: {
    title: "隐私说明",
    updated: "更新于 2026 年 8 月 19 日",
    intro: "认识你自己是一款本地优先的静态应用。测试回答、结果、历史和收藏不会由应用发送到服务器。",
    items: [
      ["回答留在设备上", "测试会话与结果保存在当前浏览器的 localStorage 中。清除浏览器数据或使用设置页的清空功能会删除它们。"],
      ["没有账号与云端同步", "应用不要求姓名、邮箱或登录信息，也不会跨设备同步你的记录。"],
      ["没有应用内分析追踪", "当前版本没有接入第三方分析、广告像素或行为画像工具，也不会把测试内容发送给 AI 服务。"],
      ["你可以带走或删除数据", "设置页支持导出 v3 JSON 备份、导入备份，以及清空当前浏览器中的全部本地数据。"],
    ],
    hosting: "托管说明",
    hostingText: "站点通过 GitHub Pages 提供静态文件。托管服务可能按其自身政策处理标准网络请求元数据；应用本身不会把测试答案或结果加入这些请求。",
    controls: "管理本地数据",
    source: "查看源代码",
  },
  en: {
    title: "Privacy notes",
    updated: "Updated August 19, 2026",
    intro: "Know Yourself is a local-first static app. Quiz answers, results, history, and bookmarks are not sent to an application server.",
    items: [
      ["Answers stay on this device", "Quiz sessions and results live in this browser's localStorage. Clearing browser data or using the clear control in Settings removes them."],
      ["No account or cloud sync", "The app does not ask for a name, email address, or login, and it does not sync records across devices."],
      ["No in-app analytics tracking", "This release does not include third-party analytics, advertising pixels, behavioral profiles, or any service that sends quiz content to AI."],
      ["You can take or delete your data", "Settings lets you export a v3 JSON backup, import a backup, or clear all local data in this browser."],
    ],
    hosting: "Hosting note",
    hostingText: "GitHub Pages serves the site's static files. The hosting provider may process standard request metadata under its own policies; the app does not add quiz answers or results to those requests.",
    controls: "Manage local data",
    source: "View source code",
  },
} as const;

const icons = [HardDrive, ShieldCheck, EyeOff, Database];

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={language === "zh" ? "探索地图" : "Explore map"} section={t.title} />
      <PageContainer className="max-w-3xl">
        <p className="atlas-section-kicker">{language === "zh" ? "本地优先" : "Local first"}</p>
        <h1 className="atlas-section-title mt-3">{t.title}</h1>
        <p className="mt-3 text-xs text-ink/40 dark:text-white/40">{t.updated}</p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/65 dark:text-white/65">{t.intro}</p>

        <div className="mt-12 border-y border-ink/10 dark:border-white/10">{t.items.map(([title, description], index) => { const Icon = icons[index]; return <section key={title} className="grid gap-4 border-b border-ink/10 py-7 last:border-b-0 dark:border-white/10 sm:grid-cols-[3rem_1fr]"><span className="flex size-10 items-center justify-center rounded-full border border-accent/25 text-accent"><Icon className="size-4" strokeWidth={1.7} /></span><div><h2 className="text-base font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{description}</p></div></section>; })}</div>

        <section className="atlas-detail-panel mt-10"><p className="atlas-section-kicker">{t.hosting}</p><p className="relative mt-4 text-sm leading-6 text-ink/58 dark:text-white/58">{t.hostingText}</p></section>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/settings/#data" className="atlas-primary-action justify-center">{t.controls}</Link><a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noreferrer" className="atlas-secondary-action justify-center">{t.source}</a></div>
      </PageContainer>
    </div>
  );
}
