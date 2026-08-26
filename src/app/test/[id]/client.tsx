"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, BookmarkCheck, CheckCircle2, Clock3, ListChecks, PauseCircle, ShieldCheck } from "lucide-react";
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
  if (!entry) return <div className="atlas-page min-h-screen"><AppHeader /><PageContainer><div className="atlas-empty-state"><h1 className="text-2xl font-semibold">{language === "zh" ? "找不到这项测评" : "Assessment not found"}</h1><Link href="/" className="atlas-primary-action mx-auto mt-6">{language === "zh" ? "返回首页" : "Back home"}</Link></div></PageContainer></div>;

  const title = language === "zh" ? entry.title.zh : entry.title.en;
  const description = language === "zh" ? entry.description.zh : entry.description.en;
  const sampleQuestions = definition?.questions.slice(0, 3) ?? [];

  return (
    <div className="atlas-page wellness-page min-h-screen">
      <AppHeader section={title} />
      <PageContainer className="assessment-detail-enter">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <section>
            <div className="flex items-center gap-3 text-accent"><CategoryMark category={entry.category} className="size-12" /><span className="atlas-section-kicker">{language === "zh" ? "已选择的测评" : "Assessment selected"}</span></div>
            <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">{title}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink/60 dark:text-white/60">{description}</p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-ink/55 dark:text-white/55"><span className="atlas-meta-chip"><ListChecks className="size-3.5" />{entry.questions} {language === "zh" ? "道问题" : "questions"}</span><span className="atlas-meta-chip"><Clock3 className="size-3.5" />{entry.duration} {language === "zh" ? "分钟" : "min"}</span><span className="atlas-meta-chip">{entry.kind === "type" ? (language === "zh" ? "类型结果" : "Type result") : entry.kind === "dimensions" ? (language === "zh" ? "维度结果" : "Dimension result") : (language === "zh" ? "分数结果" : "Score result")}</span></div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"><Link href={`/quiz/${testId}/`} className="atlas-primary-action justify-center sm:justify-start">{language === "zh" ? "开始测评" : "Start assessment"}<ArrowRight className="size-4" aria-hidden="true" /></Link><button type="button" onClick={() => toggleBookmark(testId)} className="atlas-secondary-action justify-center sm:justify-start">{saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}{saved ? (language === "zh" ? "已收藏" : "Saved") : (language === "zh" ? "稍后再做" : "Save for later")}</button><Link href="/#routes" className="assessment-reselect-link justify-center sm:justify-start">{language === "zh" ? "重新选择测评" : "Choose another"}</Link></div>
            <section className="atlas-assessment-brief mt-12" aria-labelledby="assessment-brief-title">
              <div className="atlas-assessment-brief-heading">
                <p className="atlas-section-kicker">{language === "zh" ? "开始前" : "Before you begin"}</p>
                <h2 id="assessment-brief-title">{language === "zh" ? "先知道这几件事" : "A few things to know"}</h2>
              </div>
              <div className="atlas-assessment-brief-grid">
                <div className="atlas-assessment-brief-item"><CheckCircle2 aria-hidden="true" /><div><strong>{language === "zh" ? "没有标准答案" : "There is no right answer"}</strong><p>{language === "zh" ? "选择最接近你当下感受的选项即可。" : "Choose the option closest to how you feel today."}</p></div></div>
                <div className="atlas-assessment-brief-item"><Clock3 aria-hidden="true" /><div><strong>{language === "zh" ? `大约 ${entry.duration} 分钟` : `About ${entry.duration} minutes`}</strong><p>{language === "zh" ? `${entry.questions} 道问题，一次完成也可以。` : `${entry.questions} questions, designed for one sitting.`}</p></div></div>
                <div className="atlas-assessment-brief-item"><PauseCircle aria-hidden="true" /><div><strong>{language === "zh" ? "可以随时暂停" : "Pause whenever you need"}</strong><p>{language === "zh" ? "游客进度留在本机；开启同步后可在其他登录设备继续。" : "Guest progress stays on this device; synced progress can continue on another signed-in device."}</p></div></div>
                <div className="atlas-assessment-brief-item"><ShieldCheck aria-hidden="true" /><div><strong>{language === "zh" ? "只用于自我反思" : "For self-reflection"}</strong><p>{language === "zh" ? "它不是诊断，也不替代专业评估。" : "It is not a diagnosis or a substitute for professional assessment."}</p></div></div>
              </div>
            </section>
          </section>

          <aside className="atlas-detail-panel"><div className="atlas-detail-grid" aria-hidden="true" /><p className="atlas-section-kicker relative">{language === "zh" ? "你会遇到的问题" : "Questions you will meet"}</p><div className="relative mt-6 space-y-4">{sampleQuestions.length ? sampleQuestions.map((question, index) => <div key={question.id} className="border-t border-ink/12 pt-4 dark:border-white/12"><span className="atlas-question-index">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-medium leading-6">{question.prompt[language]}</p></div>) : <div className="atlas-skeleton-lines" />}</div><p className="relative mt-8 text-xs leading-5 text-ink/42 dark:text-white/42">{language === "zh" ? "没有标准答案。选择最接近你当下感受的选项即可。" : "There are no right answers. Choose what feels closest to you today."}</p></aside>
        </div>

        {related.length > 0 && <section className="mt-20 border-t border-ink/10 pt-10 dark:border-white/10"><div className="flex items-end justify-between"><div><p className="atlas-section-kicker">{language === "zh" ? "相关测评" : "Related assessments"}</p><h2 className="atlas-section-title mt-2">{language === "zh" ? "如果你想从另一个角度继续" : "Continue from another angle"}</h2></div><Link href="/#library" className="hidden text-xs font-semibold text-accent hover:underline sm:block">{language === "zh" ? "查看全部" : "See all"}</Link></div><div className="mt-6 grid gap-4 sm:grid-cols-3">{related.map((item, index) => <TestCard key={item.id} test={item} index={index} lang={language} />)}</div></section>}
      </PageContainer>
    </div>
  );
}
