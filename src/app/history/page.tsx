"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock3, Trash2 } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAttempts, useLanguage } from "@/hooks/use-local-storage";
import { getQuizEntry, getResultKey, getResultScore } from "@/core/quiz";
import { clearAttempts } from "@/lib/storage";
import { CategoryMark } from "@/components/quiz/category-mark";

function resultLabel(result: ReturnType<typeof getResultKey> extends never ? never : Parameters<typeof getResultKey>[0], language: "zh" | "en") {
  const key = getResultKey(result);
  if (key) return key;
  const score = getResultScore(result);
  if (score !== null) return `${Math.round(score)}${language === "zh" ? " 分" : " points"}`;
  const dimension = result.dimensions?.[0];
  if (dimension) return language === "zh" ? dimension.zh : dimension.name;
  return language === "zh" ? "已完成" : "Completed";
}

export default function HistoryPage() {
  const { language } = useLanguage();
  const { attempts, deleteAttempt } = useAttempts();
  const [confirmClear, setConfirmClear] = useState(false);
  const entries = useMemo(() => attempts.map((attempt) => ({ attempt, entry: getQuizEntry(attempt.testId) })).filter((item): item is { attempt: typeof attempts[number]; entry: NonNullable<ReturnType<typeof getQuizEntry>> } => Boolean(item.entry)), [attempts]);
  const formatDate = (timestamp: number) => language === "zh" ? new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(timestamp) : new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(timestamp);

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={language === "zh" ? "探索地图" : "Explore map"} section={language === "zh" ? "记录" : "History"} />
      <PageContainer>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="atlas-section-kicker">{language === "zh" ? "回到你走过的路线" : "Routes you have taken"}</p><h1 className="atlas-section-title mt-3">{language === "zh" ? "历史记录" : "History"}</h1><p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{language === "zh" ? `已完成 ${attempts.length} 次，记录只保存在这个浏览器。` : `${attempts.length} completed locally in this browser.`}</p></div>{attempts.length > 0 && <div className="flex items-center gap-2">{confirmClear ? <><span className="text-xs text-ink/50 dark:text-white/50">{language === "zh" ? "确定清空全部记录？" : "Clear all records?"}</span><button type="button" onClick={() => setConfirmClear(false)} className="atlas-text-button">{language === "zh" ? "取消" : "Cancel"}</button><button type="button" onClick={() => { clearAttempts(); setConfirmClear(false); }} className="atlas-danger-action"><Trash2 className="size-3.5" />{language === "zh" ? "确认" : "Confirm"}</button></> : <button type="button" onClick={() => setConfirmClear(true)} className="atlas-text-button"><Trash2 className="size-3.5" />{language === "zh" ? "清空记录" : "Clear history"}</button>}</div>}</div>

        {entries.length === 0 ? <div className="atlas-empty-state mt-12"><div className="atlas-empty-line" /><h2 className="mt-5 text-xl font-semibold">{language === "zh" ? "还没有走过一条路线" : "No routes taken yet"}</h2><p className="mt-3 max-w-sm text-sm leading-6 text-ink/50 dark:text-white/50">{language === "zh" ? "完成一次测试后，你的结果会回到这里。" : "Complete a quiz and your result will return here."}</p><Link href="/#routes" className="atlas-primary-action mx-auto mt-7">{language === "zh" ? "开始探索" : "Start exploring"}<ArrowUpRight className="size-4" /></Link></div> : <div className="mt-10 space-y-3">{entries.map(({ attempt, entry }) => { const title = language === "zh" ? entry.title.zh : entry.title.en; return <article key={attempt.id} className="atlas-history-row"><CategoryMark category={entry.category} className="size-10 shrink-0 text-accent" /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><Link href={`/result/${attempt.testId}/?attempt=${encodeURIComponent(attempt.id)}`} className="truncate text-sm font-semibold hover:text-accent">{title}</Link><span className="text-xs text-accent">{resultLabel(attempt.result, language)}</span></div><div className="mt-2 flex items-center gap-2 text-xs text-ink/42 dark:text-white/42"><Clock3 className="size-3.5" />{formatDate(attempt.timestamp)}</div></div><div className="flex items-center gap-2"><Link href={`/result/${attempt.testId}/?attempt=${encodeURIComponent(attempt.id)}`} className="atlas-icon-link" aria-label={language === "zh" ? "查看结果" : "View result"}><ArrowUpRight className="size-4" /></Link><button type="button" onClick={() => deleteAttempt(attempt.id)} className="atlas-icon-link text-ink/35 hover:text-red-600 dark:text-white/35 dark:hover:text-red-300" aria-label={language === "zh" ? "删除记录" : "Delete record"}><Trash2 className="size-4" /></button></div></article>; })}</div>}
      </PageContainer>
    </div>
  );
}
