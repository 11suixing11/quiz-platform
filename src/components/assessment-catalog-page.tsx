"use client";

import Link from "next/link";
import { ArrowUpRight, Bookmark, History, ShieldCheck } from "lucide-react";
import ExploreSection from "@/components/ExploreSection";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAttempts, useLanguage } from "@/hooks/use-local-storage";
import { getQuizEntry } from "@/core/quiz";

function localized(language: "zh" | "en", zh: string, en: string) {
  return language === "zh" ? zh : en;
}

function relativeTime(timestamp: number, language: "zh" | "en") {
  const days = Math.floor((Date.now() - timestamp) / 86400000);
  if (days <= 0) return localized(language, "今天", "Today");
  if (days === 1) return localized(language, "昨天", "Yesterday");
  return language === "zh" ? `${days} 天前` : `${days} days ago`;
}

export default function AssessmentCatalogPage() {
  const { language } = useLanguage();
  const { attempts } = useAttempts();
  const latest = attempts[0];
  const latestEntry = latest ? getQuizEntry(latest.testId) : undefined;

  return (
    <div className="atlas-page wellness-page assessment-catalog-page">
      <AppHeader />
      <PageContainer className="assessment-catalog-shell">
        <section className="assessment-catalog-intro">
          <div>
            <p className="atlas-section-kicker">{localized(language, "结构化测评", "Structured assessments")}</p>
            <h1>{localized(language, "从一个当下的问题开始。", "Start with one question that matters now.")}</h1>
          </div>
          <div className="assessment-catalog-intro-copy">
            <p>{localized(language, "按主题、题量或关键词找到一项测评。回答几分钟，把结果当作可以继续观察的线索，而不是关于自己的结论。", "Find an assessment by subject, length, or keyword. Answer for a few minutes, then treat the result as a clue for further observation, not a conclusion about yourself.")}</p>
            <nav aria-label={localized(language, "测评辅助入口", "Assessment shortcuts")}>
              <Link href="/history/"><History aria-hidden="true" />{localized(language, "查看记录", "View history")}</Link>
              <Link href="/bookmarks/"><Bookmark aria-hidden="true" />{localized(language, "查看收藏", "View saved")}</Link>
            </nav>
          </div>
        </section>

        <div className="assessment-catalog-boundary">
          <ShieldCheck aria-hidden="true" />
          <span>{localized(language, "仅供自我反思，不是诊断。游客记录保存在本机，登录后会与账号合并同步。", "For self-reflection, not diagnosis. Guest records stay on this device and merge with your account after sign-in.")}</span>
        </div>

        {latest && latestEntry && (
          <section className="assessment-return" aria-label={localized(language, "继续上次的记录", "Continue your last reflection")}>
            <div>
              <p>{localized(language, "上次完成", "Last completed")}</p>
              <strong>{language === "zh" ? latestEntry.title.zh : latestEntry.title.en}</strong>
              <span>{relativeTime(latest.timestamp, language)}</span>
            </div>
            <Link href={`/result/${latest.testId}/?attempt=${encodeURIComponent(latest.id)}`}>{localized(language, "回看结果", "Review result")}<ArrowUpRight aria-hidden="true" /></Link>
          </section>
        )}

        <section id="library" className="assessment-catalog-library scroll-mt-20">
          <ExploreSection lang={language} />
        </section>
      </PageContainer>

      <footer className="wellness-footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-ink/70 dark:text-white/70">认识你自己 / Know Yourself</span>
          <div className="flex gap-5"><Link href="/privacy/" className="atlas-text-link">{localized(language, "隐私", "Privacy")}</Link><a href="https://github.com/11suixing11/know-yourself" target="_blank" rel="noreferrer" className="atlas-text-link">GitHub</a></div>
        </div>
      </footer>
    </div>
  );
}
