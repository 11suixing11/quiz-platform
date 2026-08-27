"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, History, MoveRight, ShieldCheck } from "lucide-react";
import ExploreSection from "@/components/ExploreSection";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { CategoryMark } from "@/components/quiz/category-mark";
import { CORE_TEST_GROUPS, getCoreGroupTests } from "@/lib/core-tests";
import { useAttempts, useLanguage } from "@/hooks/use-local-storage";
import { getQuizEntry } from "@/core/quiz";

const groupColors: Record<string, string> = {
  self: "#5E7F70",
  emotion: "#B77770",
  relationship: "#B38A54",
  life: "#7A856B",
};

const checkinGroups = CORE_TEST_GROUPS.slice(0, 3);

function localized(language: "zh" | "en", zh: string, en: string) {
  return language === "zh" ? zh : en;
}

function relativeTime(timestamp: number, language: "zh" | "en") {
  const days = Math.floor((Date.now() - timestamp) / 86400000);
  if (days <= 0) return localized(language, "今天", "Today");
  if (days === 1) return localized(language, "昨天", "Yesterday");
  return language === "zh" ? days + " 天前" : days + " days ago";
}

function RouteCard({ group, language }: { group: (typeof CORE_TEST_GROUPS)[number]; language: "zh" | "en" }) {
  const tests = getCoreGroupTests(group);
  const color = groupColors[group.id];

  return (
    <section id={`topic-${group.id}`} className="wellness-topic scroll-mt-8" style={{ "--topic-color": color } as React.CSSProperties}>
      <div className="wellness-topic-heading">
        <div className="min-w-0">
          <h3 className="wellness-topic-title">{language === "zh" ? group.zh : group.en}</h3>
          <p className="wellness-topic-description">{language === "zh" ? group.descriptionZh : group.descriptionEn}</p>
          <p className="wellness-topic-count">{tests.length} {language === "zh" ? "项测评可选" : "assessments to explore"}</p>
        </div>
        <span className="wellness-topic-mark" aria-hidden="true" />
      </div>

      <div className="wellness-topic-routes">
        {tests.map((test) => (
          <Link key={test.id} href={"/test/" + test.id + "/"} className="wellness-route-link group">
            <span className="wellness-route-icon"><CategoryMark category={group.id} className="size-8 border-0" /></span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{language === "zh" ? test.zh.name : test.en.name}</span>
              <span className="wellness-route-meta">{test.questions} {language === "zh" ? "题" : "questions"} · {test.time} {language === "zh" ? "分钟" : "min"} · {getQuizEntry(test.id)?.trust.label[language]}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const { language } = useLanguage();
  const { attempts } = useAttempts();
  const latest = attempts[0];
  const latestEntry = latest ? getQuizEntry(latest.testId) : undefined;

  return (
    <div className="atlas-page wellness-page">
      <AppHeader />
      <PageContainer className="wellness-home pt-0 sm:pt-0">
        <section className="wellness-hero">
          <div className="wellness-hero-copy">
            <h1 className="wellness-display">
              {language === "zh" ? <>最近，<br /><em>什么让你</em><br />想更懂自己？</> : <>What is making you<br /><em>want to know yourself</em><br />better?</>}
            </h1>
            <p className="wellness-hero-context">
              {localized(language, "面向日常的心理与自我认知测评，覆盖性格、情绪、关系与生活。", "Everyday psychology and self-understanding assessments across personality, emotions, relationships, and life.")}
            </p>
            <p className="wellness-hero-lede">
              {localized(language, "不用先给自己下结论。选一个你想了解的主题，花几分钟回答问题，再带走一个更清晰的观察。", "You do not need a conclusion first. Choose a subject, answer a few questions, and leave with a clearer observation.")}
            </p>
            <div className="wellness-hero-actions">
              <a href="#routes" className="wellness-primary-action"><span>{localized(language, "开始测评", "Start an assessment")}</span><MoveRight className="size-4" aria-hidden="true" /></a>
              <Link href="/history/" className="wellness-secondary-action"><History className="size-4" aria-hidden="true" />{localized(language, "查看记录", "View history")}</Link>
            </div>
            <div className="wellness-trust-note"><ShieldCheck className="size-4" aria-hidden="true" /><span>{localized(language, "仅供自我反思，不是诊断；游客数据留在本机，登录后自动与账号合并同步。", "For self-reflection, not diagnosis. Guest data stays on this device; signing in merges and syncs it with your account.")}</span></div>
          </div>

          <aside id="checkin" className="wellness-checkin scroll-mt-8" aria-label={localized(language, "选择测评主题", "Choose an assessment subject")}>
            <div className="wellness-checkin-topline"><span>{localized(language, "在线自我测评", "Everyday self-assessment")}</span></div>
            <h2>{localized(language, "你想先了解哪一部分自己？", "What part of yourself do you want to understand first?")}</h2>
            <p>{localized(language, "选择一个主题，完成几分钟的测评，再从结果里找到可以继续思考的线索。", "Choose a subject, take a few minutes to answer, and find a clue to keep thinking about.")}</p>
            <div className="wellness-checkin-list">
              {checkinGroups.map((group) => (
                <Link key={group.id} href={`/test/${group.entryTestId}/`}>
                  <span className="wellness-checkin-entry">
                    <strong>{language === "zh" ? group.zh : group.en}</strong>
                    <small>{language === "zh" ? group.entryZh : group.entryEn}</small>
                  </span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <a href="#routes" className="wellness-checkin-more">{localized(language, "查看全部测评", "See all assessments")}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
            <div className="wellness-sheet-note"><span className="wellness-sheet-dot" aria-hidden="true" />{localized(language, "本地优先 · 登录后自动同步", "Local first · Automatic sync after sign-in")}</div>
          </aside>
        </section>

        <a href="#routes" className="wellness-hero-bridge">
          <span className="wellness-hero-bridge-rule" aria-hidden="true" />
          <span>{localized(language, "下一步，选一个你想了解的测评主题。", "Next, choose an assessment subject to explore.")}</span>
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>

        {latest && latestEntry && (
          <section className="wellness-return" aria-label={localized(language, "继续上次的记录", "Continue your last reflection")}>
            <div className="flex min-w-0 items-center gap-4">
              <span className="wellness-return-mark" aria-hidden="true" />
              <div className="min-w-0">
                <p className="wellness-small-label">{localized(language, "继续上次的记录", "Continue your last reflection")}</p>
                <p className="mt-1 truncate text-sm font-semibold">{language === "zh" ? latestEntry.title.zh : latestEntry.title.en}</p>
              </div>
              <span className="ml-auto shrink-0 text-xs text-muted-foreground">{relativeTime(latest.timestamp, language)}</span>
            </div>
            <Link href={"/result/" + latest.testId + "/?attempt=" + encodeURIComponent(latest.id)} className="wellness-inline-action">{localized(language, "回看结果", "Review result")} <ArrowUpRight className="size-3.5" aria-hidden="true" /></Link>
          </section>
        )}

        <section className="wellness-section">
          <div id="routes" className="wellness-section-heading scroll-mt-20" tabIndex={-1}>
            <div>
              <h2 className="wellness-section-title">{localized(language, "选择一个测评主题，先从这里开始。", "Choose a subject to start with.")}</h2>
            </div>
            <Link href="#library" className="wellness-inline-action hidden sm:inline-flex">{localized(language, "浏览全部测评", "Browse all assessments")} <ArrowUpRight className="size-3.5" aria-hidden="true" /></Link>
          </div>
          <div className="wellness-topic-grid">
            {CORE_TEST_GROUPS.map((group) => <RouteCard key={group.id} group={group} language={language} />)}
          </div>
        </section>

        <section className="wellness-process" aria-labelledby="process-title">
          <div className="wellness-process-heading">
            <h2 id="process-title">{localized(language, "从一个问题开始，带走一个可以继续思考的观察。", "Start with one question. Leave with an observation you can keep thinking about.")}</h2>
          </div>
          <ol className="wellness-process-list">
            <li><span className="wellness-process-marker" aria-hidden="true" /><div><strong>{localized(language, "选一个当下的问题", "Choose one question")}</strong><p>{localized(language, "不用一次解决所有事情。", "You do not need to solve everything at once.")}</p></div></li>
            <li><span className="wellness-process-marker" aria-hidden="true" /><div><strong>{localized(language, "诚实回答，不求完美", "Answer without performing")}</strong><p>{localized(language, "没有标准答案，也没有需要迎合的形象。", "There is no right answer and no image to maintain.")}</p></div></li>
            <li><span className="wellness-process-marker" aria-hidden="true" /><div><strong>{localized(language, "带走一个小小的下一步", "Take one small next step")}</strong><p>{localized(language, "结果是起点，不是给自己的结论。", "The result is a starting point, not a verdict.")}</p></div></li>
          </ol>
        </section>

        <section id="library" className="wellness-library border-t border-ink/12 dark:border-white/12">
          <ExploreSection lang={language} />
        </section>

        <section className="wellness-support-grid">
          <Link href="/bookmarks/" className="wellness-support-panel group">
            <Bookmark className="size-5 text-accent" aria-hidden="true" />
            <div><h2>{localized(language, "收藏一项以后再做", "Save an assessment for later")}</h2><p>{localized(language, "游客收藏保存在本机；开启账号同步后，也能在其他设备继续。", "Guest bookmarks stay on this device; account sync makes them available on your other devices.")}</p></div>
            <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
          </Link>
          <Link href="/settings/" className="wellness-support-panel group">
            <ShieldCheck className="size-5 text-accent" aria-hidden="true" />
            <div><h2>{localized(language, "你的数据，你来决定", "Your data, your call")}</h2><p>{localized(language, "随时导出、导入或清除这台设备上的记录。", "Export, import, or clear everything stored on this device.")}</p></div>
            <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
          </Link>
        </section>
      </PageContainer>

      <footer className="wellness-footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-ink/70 dark:text-white/70">认识你自己 / Know Yourself</span>
          <div className="flex gap-5"><Link href="/privacy/" className="atlas-text-link">{localized(language, "隐私", "Privacy")}</Link><a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noreferrer" className="atlas-text-link">GitHub</a></div>
        </div>
      </footer>
    </div>
  );
}
