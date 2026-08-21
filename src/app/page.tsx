"use client";

/*
 * DIRECTION CONTRACT
 * WORLD: cartographer's field atlas — quiet ink, contour lines, route markers.
 * FIRST VIEWPORT: four lived questions become four visible routes; the next action is a destination, not a generic CTA.
 * PRIMARY ACTION: choose one route and start a test.
 * FORM: assigned grounded direction 7 from seed 2beb0247; the route map is the shared grammar across discovery, quiz, and result.
 * FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
 */

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Bookmark, History, Map, MoveRight, Sparkles } from "lucide-react";
import ExploreSection from "@/components/ExploreSection";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { CategoryMark } from "@/components/quiz/category-mark";
import { CORE_TEST_GROUPS, getCoreGroupTests } from "@/lib/core-tests";
import { useAttempts, useLanguage } from "@/hooks/use-local-storage";
import { getQuizEntry } from "@/core/quiz";

const groupColors: Record<string, string> = {
  self: "#2F6B5F",
  emotion: "#B65C5C",
  relationship: "#B47B32",
  life: "#4E6C8C",
};

function localized(language: "zh" | "en", zh: string, en: string) {
  return language === "zh" ? zh : en;
}

function relativeTime(timestamp: number, language: "zh" | "en") {
  const days = Math.floor((Date.now() - timestamp) / 86400000);
  if (days <= 0) return localized(language, "今天", "Today");
  if (days === 1) return localized(language, "昨天", "Yesterday");
  return language === "zh" ? `${days} 天前` : `${days} days ago`;
}

function RouteCard({ group, language, reduceMotion }: { group: (typeof CORE_TEST_GROUPS)[number]; language: "zh" | "en"; reduceMotion: boolean }) {
  const tests = getCoreGroupTests(group);
  const color = groupColors[group.id];
  return (
    <motion.section whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="atlas-route-card" style={{ "--route-color": color } as React.CSSProperties}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="atlas-route-kicker">{language === "zh" ? "一条可能的路径" : "A possible route"}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{language === "zh" ? group.zh : group.en}</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink/58 dark:text-white/58">{language === "zh" ? group.descriptionZh : group.descriptionEn}</p>
        </div>
        <span className="atlas-route-dot" aria-hidden="true" />
      </div>
      <div className="mt-7 border-t border-ink/10 pt-4 dark:border-white/10">
        <div className="grid gap-1 sm:grid-cols-2">
          {tests.map((test, index) => (
            <Link key={test.id} href={`/test/${test.id}/`} className="atlas-route-link group">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--route-color)_12%,transparent)] text-[color:var(--route-color)]"><CategoryMark category={test.category} className="size-8 border-0" /></span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{language === "zh" ? test.zh.name : test.en.name}</span>
                <span className="mt-1 block text-[11px] text-ink/42 dark:text-white/42">{test.questions} {language === "zh" ? "题" : "questions"} · {test.time} {language === "zh" ? "分钟" : "min"}</span>
              </span>
              <span className="atlas-route-number">{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function HomePage() {
  const { language } = useLanguage();
  const { attempts } = useAttempts();
  const shouldReduceMotion = useReducedMotion();
  const latest = attempts[0];
  const latestEntry = latest ? getQuizEntry(latest.testId) : undefined;

  return (
    <div className="atlas-page">
      <AppHeader />
      <PageContainer className="pt-0 sm:pt-0">
        <section className="atlas-hero relative overflow-hidden py-14 sm:py-20">
          <div className="atlas-contour atlas-contour-one" aria-hidden="true" />
          <div className="atlas-contour atlas-contour-two" aria-hidden="true" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="atlas-coordinate"><Map className="size-3.5" />{localized(language, "一份给自己的地图", "A map for the self")}</div>
              <h1 className="mt-7 max-w-3xl text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-ink dark:text-white">
                {language === "zh" ? <>先找到<br /><span className="text-accent">你在意的方向。</span></> : <>Start with<br /><span className="text-accent">what matters now.</span></>}
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-ink/60 dark:text-white/60 sm:text-lg">
                {localized(language, "不用先定义自己。选一条最接近此刻的路径，花几分钟回答问题，再带着一个更清晰的自己离开。", "You do not need to define yourself first. Choose the route that feels closest today, answer for a few minutes, and leave with a clearer next step.")}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#routes" className="atlas-primary-action"><span>{localized(language, "开始探索", "Start exploring")}</span><MoveRight className="size-4" /></a>
                <Link href="/history/" className="atlas-secondary-action"><History className="size-4" />{localized(language, "查看记录", "View history")}</Link>
              </div>
            </div>
            <div className="relative hidden min-h-[270px] lg:block">
              <div className="atlas-map-plate">
                <div className="atlas-map-grid" aria-hidden="true" />
                <div className="atlas-map-pin pin-a" aria-hidden="true" />
                <div className="atlas-map-pin pin-b" aria-hidden="true" />
                <div className="atlas-map-pin pin-c" aria-hidden="true" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 300" fill="none" aria-hidden="true">
                  <path d="M30 244C93 196 106 222 156 164C198 115 219 169 270 115C327 56 338 94 391 54C427 27 466 46 503 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" className="text-accent/70" />
                  <path d="M17 271C115 246 139 264 210 208C273 159 304 205 360 140C414 78 454 105 505 81" stroke="currentColor" strokeWidth="1" className="text-ink/25 dark:text-white/25" />
                </svg>
                <div className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35 dark:text-white/35">FIELD NOTE 01 / 16</div>
              </div>
            </div>
          </div>
        </section>

        {latest && latestEntry && (
          <section className="atlas-return-strip">
            <div className="flex min-w-0 items-center gap-4">
              <span className="atlas-return-marker"><Sparkles className="size-4" /></span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/40 dark:text-white/40">{localized(language, "最近走过", "Last visited")}</p>
                <p className="mt-1 truncate text-sm font-semibold">{language === "zh" ? latestEntry.title.zh : latestEntry.title.en}</p>
              </div>
              <span className="ml-auto shrink-0 text-xs text-ink/40 dark:text-white/40">{relativeTime(latest.timestamp, language)}</span>
            </div>
            <Link href={`/result/${latest.testId}/?attempt=${encodeURIComponent(latest.id)}`} className="atlas-inline-action">{localized(language, "回看结果", "Review result")} <ArrowUpRight className="size-3.5" /></Link>
          </section>
        )}

        <section id="routes" className="scroll-mt-8 py-12 sm:py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="atlas-section-kicker">{localized(language, "从这里开始", "Begin here")}</p>
              <h2 className="atlas-section-title mt-2">{localized(language, "四条入口，足够今天。", "Four routes are enough for today.")}</h2>
            </div>
            <Link href="#library" className="hidden items-center gap-1.5 text-xs font-semibold text-accent hover:underline sm:inline-flex">{localized(language, "看精选路线", "See the curated routes")} <ArrowUpRight className="size-3.5" /></Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {CORE_TEST_GROUPS.map((group) => <RouteCard key={group.id} group={group} language={language} reduceMotion={Boolean(shouldReduceMotion)} />)}
          </div>
        </section>

        <section id="library" className="-mx-5 border-t border-ink/10 dark:border-white/10 sm:-mx-8">
          <ExploreSection lang={language} />
        </section>

        <section className="grid gap-4 py-12 sm:grid-cols-2 sm:py-16">
          <Link href="/bookmarks/" className="atlas-support-panel group">
            <Bookmark className="size-5 text-accent" />
            <div><h2 className="text-lg font-semibold">{localized(language, "留一条以后再走的路", "Save a route for later")}</h2><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{localized(language, "收藏测试，不需要注册，也不会离开你的浏览器。", "Bookmark a test. No account, no upload, nothing leaves your browser.")}</p></div>
            <ArrowUpRight className="ml-auto size-4 text-ink/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-white/35" />
          </Link>
          <Link href="/settings/" className="atlas-support-panel group">
            <span className="atlas-data-symbol" aria-hidden="true">⌁</span>
            <div><h2 className="text-lg font-semibold">{localized(language, "你的数据，你来决定", "Your data, your call")}</h2><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{localized(language, "随时导出、导入或清除这台设备上的记录。", "Export, import, or clear everything stored on this device.")}</p></div>
            <ArrowUpRight className="ml-auto size-4 text-ink/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-white/35" />
          </Link>
        </section>
      </PageContainer>
      <footer className="border-t border-ink/10 px-5 py-12 dark:border-white/10 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-5 text-xs text-ink/45 dark:text-white/45 sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-ink/70 dark:text-white/70">认识你自己 / Know Yourself</span><div className="flex gap-5"><Link href="/privacy/" className="atlas-text-link">{localized(language, "隐私", "Privacy")}</Link><a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noreferrer" className="atlas-text-link">GitHub</a></div></div></footer>
    </div>
  );
}
