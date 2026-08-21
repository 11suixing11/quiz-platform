"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, BookmarkCheck, Clock3, ListChecks } from "lucide-react";
import { loadQuizDefinition, getQuizEntry, QUIZ_CATALOG, type QuizDefinition } from "@/core/quiz";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { CategoryMark } from "@/components/quiz/category-mark";
import { TestCard } from "@/components/TestCard";
import { useBookmarks, useLanguage } from "@/hooks/use-local-storage";

export default function TestDetailClient({ testId }: { testId: string }) {
  const { language } = useLanguage();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [definition, setDefinition] = useState<QuizDefinition | null>(null);
  const entry = getQuizEntry(testId);
  const saved = isBookmarked(testId);

  useEffect(() => {
    let cancelled = false;
    loadQuizDefinition(testId).then((value) => { if (!cancelled) setDefinition(value); });
    return () => { cancelled = true; };
  }, [testId]);

  const related = useMemo(() => entry ? QUIZ_CATALOG.filter((item) => item.category === entry.category && item.id !== testId).slice(0, 3) : [], [entry, testId]);
  if (!entry) return <div className="atlas-page min-h-screen"><AppHeader /><PageContainer><div className="atlas-empty-state"><h1 className="text-2xl font-semibold">{language === "zh" ? "找不到这项测试" : "Test not found"}</h1><Link href="/" className="atlas-primary-action mx-auto mt-6">{language === "zh" ? "返回地图" : "Back to map"}</Link></div></PageContainer></div>;

  const title = language === "zh" ? entry.title.zh : entry.title.en;
  const description = language === "zh" ? entry.description.zh : entry.description.en;
  const sampleQuestions = definition?.questions.slice(0, 3) ?? [];

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={language === "zh" ? "探索地图" : "Explore map"} section={title} />
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <section>
            <div className="flex items-center gap-3 text-accent"><CategoryMark category={entry.category} className="size-12" /><span className="atlas-section-kicker">{language === "zh" ? "路径说明" : "Route notes"}</span></div>
            <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">{title}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink/60 dark:text-white/60">{description}</p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-ink/55 dark:text-white/55"><span className="atlas-meta-chip"><ListChecks className="size-3.5" />{entry.questions} {language === "zh" ? "道问题" : "questions"}</span><span className="atlas-meta-chip"><Clock3 className="size-3.5" />{entry.duration} {language === "zh" ? "分钟" : "min"}</span><span className="atlas-meta-chip">{entry.kind === "type" ? (language === "zh" ? "类型结果" : "Type result") : entry.kind === "dimensions" ? (language === "zh" ? "维度结果" : "Dimension result") : (language === "zh" ? "分数结果" : "Score result")}</span></div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href={`/quiz/${testId}/`} className="atlas-primary-action justify-center sm:justify-start">{language === "zh" ? "开始这条路径" : "Start this route"}<ArrowRight className="size-4" /></Link><button type="button" onClick={() => toggleBookmark(testId)} className="atlas-secondary-action justify-center sm:justify-start">{saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}{saved ? (language === "zh" ? "已收藏" : "Saved") : (language === "zh" ? "稍后再做" : "Save for later")}</button></div>
          </section>

          <aside className="atlas-detail-panel"><div className="atlas-detail-grid" aria-hidden="true" /><p className="atlas-section-kicker relative">{language === "zh" ? "你会遇到的问题" : "What you will meet"}</p><div className="relative mt-6 space-y-4">{sampleQuestions.length ? sampleQuestions.map((question, index) => <div key={question.id} className="border-t border-ink/12 pt-4 dark:border-white/12"><span className="atlas-question-index">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-medium leading-6">{question.prompt[language]}</p></div>) : <div className="atlas-skeleton-lines" />}</div><p className="relative mt-8 text-xs leading-5 text-ink/42 dark:text-white/42">{language === "zh" ? "没有标准答案。选择最接近你当下感受的选项即可。" : "There are no right answers. Choose what feels closest to you today."}</p></aside>
        </div>

        {related.length > 0 && <section className="mt-20 border-t border-ink/10 pt-10 dark:border-white/10"><div className="flex items-end justify-between"><div><p className="atlas-section-kicker">{language === "zh" ? "同一片区域" : "Same region"}</p><h2 className="atlas-section-title mt-2">{language === "zh" ? "如果你想继续往旁边走" : "If you want to explore nearby"}</h2></div><Link href="/#library" className="hidden text-xs font-semibold text-accent hover:underline sm:block">{language === "zh" ? "查看全部" : "See all"}</Link></div><div className="mt-6 grid gap-4 sm:grid-cols-3">{related.map((item, index) => <TestCard key={item.id} test={item} index={index} lang={language} />)}</div></section>}
      </PageContainer>
    </div>
  );
}
