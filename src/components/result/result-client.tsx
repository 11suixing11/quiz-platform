"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, RefreshCw, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { loadQuizDefinition, getQuizEntry, getResultKey, getResultScore, getScoreBand, type QuizDefinition, type QuizResult } from "@/core/quiz";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { NarrativeSection } from "@/components/result/narrative-section";
import { ReflectionGuide } from "@/components/result/reflection-guide";
import { useLanguage } from "@/hooks/use-local-storage";
import { getAttemptById, getLatestAttempt } from "@/lib/storage";
import type { Lang } from "@/core/quiz";

function pickNarrative(definition: QuizDefinition, key: string, language: Lang) {
  const entry = definition.resultContent.narrative?.[key] ?? definition.resultContent.narrative?.[Object.keys(definition.resultContent.narrative ?? {})[0]];
  return entry?.[language];
}

function pickType(definition: QuizDefinition, key: string, language: Lang) {
  const entry = definition.resultContent.types?.[key] ?? definition.resultContent.types?.[Object.keys(definition.resultContent.types ?? {})[0]];
  return entry?.[language];
}

function pickArchetype(definition: QuizDefinition, key: string, language: Lang) {
  const entry = definition.resultContent.archetypes?.[key];
  if (!entry) return undefined;
  return {
    title: language === "zh" ? entry.title_zh ?? key : entry.title_en ?? key,
    description: language === "zh" ? entry.desc_zh : entry.desc_en,
  };
}

function Loading({ language }: { language: Lang }) {
  return <div className="atlas-page min-h-screen"><AppHeader /><main id="main-content" tabIndex={-1} className="atlas-loading" aria-busy="true"><span className="atlas-loading-orbit" aria-hidden="true" /><p role="status" aria-live="polite">{language === "zh" ? "正在整理这次回答…" : "Reading this route…"}</p></main></div>;
}

export default function ResultClient({ testId }: { testId: string }) {
  const router = useRouter();
  const { language } = useLanguage();
  const [definition, setDefinition] = useState<QuizDefinition | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);
  const entry = getQuizEntry(testId);

  useEffect(() => {
    let cancelled = false;
    loadQuizDefinition(testId).then((loaded) => {
      if (cancelled) return;
      setDefinition(loaded);
      const queryAttempt = new URLSearchParams(window.location.search).get("attempt");
      const attempt = queryAttempt ? getAttemptById(queryAttempt) : getLatestAttempt(testId);
      if (attempt?.testId === testId) {
        setResult(attempt.result);
      }
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [testId]);

  const content = useMemo(() => {
    if (!definition || !result) return null;
    const key = getResultKey(result);
    const narrative = pickNarrative(definition, key, language);
    const typeData = pickType(definition, key, language);
    const archetype = pickArchetype(definition, key, language);
    const scoreBand = getScoreBand(definition, result);
    const title = (scoreBand?.title[language] ?? narrative?.archetype ?? archetype?.title ?? typeData?.name ?? key) || (language === "zh" ? "这次的结果" : "Your result");
    const description = scoreBand?.description[language] ?? narrative?.hero ?? narrative?.description ?? archetype?.description ?? typeData?.description;
    return { key, narrative, typeData, title, description, score: getResultScore(result) };
  }, [definition, language, result]);

  const share = useCallback(async () => {
    if (!content || !entry) return;
    setShareError(false);
    const shareUrl = new URL(window.location.href);
    const resultRoute = `/result/${testId}`;
    const resultRouteIndex = shareUrl.pathname.lastIndexOf(resultRoute);
    const basePath = resultRouteIndex >= 0 ? shareUrl.pathname.slice(0, resultRouteIndex) : "";
    shareUrl.pathname = `${basePath}/test/${testId}/`;
    shareUrl.search = "";
    shareUrl.hash = "";
    const url = shareUrl.toString();
    const text = language === "zh"
      ? `我完成了「${entry.title.zh}」，结果是 ${content.title}。`
      : `I completed “${entry.title.en}” and got ${content.title}.`;
    if (navigator.share) {
      try { await navigator.share({ title: content.title, text, url }); return; } catch (error) { if (error instanceof DOMException && error.name === "AbortError") return; }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setShareError(true);
    }
  }, [content, entry, language, testId]);

  if (loading) return <Loading language={language} />;
  if (!definition || !entry || !result || !content) {
    return <div className="atlas-page min-h-screen"><AppHeader /><PageContainer><div className="atlas-empty-state mx-auto mt-16 max-w-lg"><h1 className="text-2xl font-semibold">{language === "zh" ? "还没有找到这次结果" : "No result found yet"}</h1><p className="mt-3 max-w-md text-sm leading-6 text-ink/55 dark:text-white/55">{language === "zh" ? "先完成一次测试，结果会保存在当前浏览器中。" : "Complete the route once. Results stay in this browser."}</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href={`/test/${testId}/`} className="atlas-primary-action justify-center">{language === "zh" ? "查看测试说明" : "View test details"}<ArrowRight className="size-4" /></Link><Link href="/" className="atlas-secondary-action justify-center">{language === "zh" ? "回到探索" : "Back to explore"}</Link></div></div></PageContainer></div>;
  }

  const pattern = definition.kind;
  const accent = definition.accent;
  const testName = language === "zh" ? entry.title.zh : entry.title.en;

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={language === "zh" ? "探索地图" : "Explore map"} section={testName} />
      <PageContainer className="max-w-3xl">
        <div className="atlas-result-intro-block" style={{ "--result-accent": accent } as React.CSSProperties}>
          <p className="atlas-section-kicker">{language === "zh" ? "这次路线的回看" : "A reading of this route"}</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] sm:text-7xl">{content.title}</h1>
          {content.description && <p className="mt-6 max-w-2xl text-base leading-7 text-ink/60 dark:text-white/60">{content.description}</p>}
          {content.score !== null && <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent"><span className="atlas-result-score-dot" />{language === "zh" ? `当前分数 ${Math.round(content.score)}` : `Current score ${Math.round(content.score)}`}</div>}
          <p className="mt-8 text-xs text-ink/40 dark:text-white/40">{language === "zh" ? "它是一张此刻的地图，不是固定的身份。" : "A map of this moment, not a fixed identity."}</p>
        </div>

        <section className="atlas-result-panel mt-10"><h2 className="atlas-section-kicker">{language === "zh" ? "展开看看" : "Read the contour"}</h2><div className="mt-7"><NarrativeSection pattern={pattern} result={result} narrative={content.narrative} typeData={content.typeData} dimensions={definition.resultContent.dimensions} archetypes={definition.resultContent.archetypes} scoreBands={definition.resultContent.scoreBands} accentColor={accent} lang={language} /></div></section>
        <ReflectionGuide testId={testId} entry={entry} pattern={pattern} result={result} narrative={content.narrative} typeData={content.typeData} dimensions={definition.resultContent.dimensions} accentColor={accent} lang={language} />

        <section className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-6 dark:border-white/10 sm:flex-row" aria-label={language === "zh" ? "结果操作" : "Result actions"}><button type="button" onClick={() => router.push(`/quiz/${testId}/`)} className="atlas-secondary-action flex-1 justify-center"><RefreshCw className="size-4" aria-hidden="true" />{language === "zh" ? "重新测试" : "Retake"}</button><button type="button" onClick={share} className="atlas-primary-action flex-1 justify-center" aria-describedby="share-status">{copied ? <Check className="size-4" aria-hidden="true" /> : <Share2 className="size-4" aria-hidden="true" />}{copied ? (language === "zh" ? "已复制" : "Copied") : (language === "zh" ? "分享这张地图" : "Share this map")}</button></section>
        <p id="share-status" className="mt-3 min-h-5 text-center text-xs text-ink/55 dark:text-white/55" role="status" aria-live="polite">{copied ? (language === "zh" ? "分享文字和链接已复制。" : "Share text and link copied.") : shareError ? (language === "zh" ? "暂时无法分享或复制，请稍后再试。" : "Sharing and clipboard access are unavailable. Please try again.") : ""}</p>
        <div className="mt-5 flex flex-col gap-3 text-center text-xs text-ink/45 dark:text-white/45 sm:flex-row sm:items-center sm:justify-center"><Link href="/history/" className="atlas-text-link justify-center">{language === "zh" ? "查看历史" : "View history"}</Link><span className="hidden sm:inline">/</span><Link href={`/test/${testId}/`} className="atlas-text-link justify-center">{language === "zh" ? "查看测试说明" : "Test details"}</Link></div>
        <p className="mt-9 text-center text-xs leading-5 text-ink/35 dark:text-white/35">{language === "zh" ? "仅用于自我反思，不构成诊断或专业评估。" : "For self-reflection only. This is not a diagnosis or professional assessment."}</p>
      </PageContainer>
    </div>
  );
}
