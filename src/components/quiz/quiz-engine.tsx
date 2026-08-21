"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleHelp, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { loadQuizDefinition, scoreQuiz, type QuizDefinition } from "@/core/quiz";
import { AppHeader } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";
import { clearQuizSession, getQuizSession, saveAttempt, saveQuizSession } from "@/lib/storage";
import { cn } from "@/lib/utils";

interface QuizEngineProps {
  testId: string;
}

function LoadingState({ language }: { language: "zh" | "en" }) {
  return <div className="atlas-page min-h-screen"><AppHeader /><main id="main-content" tabIndex={-1} className="atlas-loading" aria-busy="true"><span className="atlas-loading-orbit" aria-hidden="true" /><p role="status" aria-live="polite">{language === "zh" ? "正在展开这条路径……" : "Opening the route…"}</p></main></div>;
}

export default function QuizEngine({ testId }: QuizEngineProps) {
  const router = useRouter();
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [definition, setDefinition] = useState<QuizDefinition | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resumeSession, setResumeSession] = useState<{ answers: (number | null)[]; currentQuestion: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusQuestion = useRef(false);

  useEffect(() => {
    let cancelled = false;
    loadQuizDefinition(testId).then((next) => {
      if (cancelled) return;
      if (!next) {
        setLoadError(true);
        return;
      }
      setDefinition(next);
      const freshAnswers = new Array(next.questions.length).fill(null) as (number | null)[];
      const session = getQuizSession(testId);
      if (session && session.answers.length === next.questions.length) {
        setResumeSession({ answers: session.answers, currentQuestion: Math.min(session.currentQuestion, next.questions.length - 1) });
        setAnswers(freshAnswers);
      } else {
        setAnswers(freshAnswers);
        setCurrentQuestion(0);
      }
    });
    return () => { cancelled = true; };
  }, [testId]);

  useEffect(() => {
    if (!definition || resumeSession || !answers.some((answer) => answer !== null)) return;
    saveQuizSession(testId, answers, currentQuestion);
  }, [answers, currentQuestion, definition, resumeSession, testId]);

  const total = definition?.questions.length ?? 0;
  const question = definition?.questions[currentQuestion];
  const currentAnswer = answers[currentQuestion] ?? null;
  const answered = answers.filter((answer) => answer !== null).length;
  const progress = total ? ((currentQuestion + 1) / total) * 100 : 0;
  const isLast = currentQuestion === total - 1;

  const move = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(next, total - 1));
    if (bounded === currentQuestion) return;
    shouldFocusQuestion.current = true;
    setDirection(bounded > currentQuestion ? 1 : -1);
    setCurrentQuestion(bounded);
  }, [currentQuestion, total]);

  const selectAnswer = useCallback((index: number) => {
    if (!definition) return;
    setAnswers((current) => {
      const next = [...current];
      next[currentQuestion] = index;
      return next;
    });
    if (!isLast) window.setTimeout(() => move(currentQuestion + 1), shouldReduceMotion ? 0 : 260);
  }, [currentQuestion, definition, isLast, move, shouldReduceMotion]);

  const submit = useCallback(() => {
    if (!definition || answers.some((answer) => answer === null) || submitting) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const numericAnswers = answers as number[];
      const result = scoreQuiz(definition, numericAnswers);
      const attempt = saveAttempt({
        testId,
        result,
        answers: numericAnswers,
        testName: definition.title.zh,
        testNameEn: definition.title.en,
        timestamp: Date.now(),
      });
      clearQuizSession(testId);
      window.setTimeout(() => router.push(`/result/${testId}/?attempt=${encodeURIComponent(attempt.id)}`), 250);
    } catch {
      setSubmitting(false);
      setSubmitError(true);
    }
  }, [answers, definition, router, submitting, testId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!question || submitting) return;
      if (event.defaultPrevented || event.isComposing || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || Boolean(target.closest("input, textarea, select, [role='textbox']")))) return;
      if (document.querySelector("dialog[open], [role='dialog'][aria-modal='true']")) return;
      if (/^[1-9]$/.test(event.key)) {
        const index = Number(event.key) - 1;
        if (index < question.options.length) selectAnswer(index);
      } else if (event.key === "ArrowRight" && currentAnswer !== null) {
        event.preventDefault();
        if (isLast) submit(); else move(currentQuestion + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(currentQuestion - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentAnswer, currentQuestion, isLast, move, question, selectAnswer, submit, submitting]);

  useEffect(() => {
    if (!question || resumeSession || !shouldFocusQuestion.current) return;
    const timer = window.setTimeout(() => {
      if (!questionHeadingRef.current) return;
      shouldFocusQuestion.current = false;
      questionHeadingRef.current.focus({ preventScroll: true });
    }, shouldReduceMotion ? 0 : 280);
    return () => window.clearTimeout(timer);
  }, [question, resumeSession, shouldReduceMotion]);

  const touchHandlers = useMemo(() => ({
    onTouchStart: (event: React.TouchEvent) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; },
    onTouchEnd: (event: React.TouchEvent) => {
      if (!touchStart.current) return;
      const dx = event.changedTouches[0].clientX - touchStart.current.x;
      const dy = event.changedTouches[0].clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      if (dx < 0 && currentAnswer !== null) {
        if (isLast) submit();
        else move(currentQuestion + 1);
      }
      if (dx > 0) move(currentQuestion - 1);
    },
  }), [currentAnswer, currentQuestion, isLast, move, submit]);

  if (!definition && !loadError) return <LoadingState language={language} />;
  if (loadError || !definition) {
    return <div className="atlas-page min-h-screen"><AppHeader /><main id="main-content" tabIndex={-1} className="atlas-empty-state mx-auto mt-24 max-w-md" role="alert"><CircleHelp className="mx-auto size-8 text-accent" aria-hidden="true" /><h1 className="mt-4 text-xl font-semibold">{language === "zh" ? "这条路径暂时打不开" : "This route is unavailable"}</h1><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{language === "zh" ? "请回到地图，换一条路径试试。" : "Return to the map and try another route."}</p><Link href="/" className="atlas-primary-action mx-auto mt-6">{language === "zh" ? "返回地图" : "Back to map"}</Link></main></div>;
  }

  if (!question) {
    return <div className="atlas-page min-h-screen"><AppHeader /><main id="main-content" tabIndex={-1} className="atlas-empty-state mx-auto mt-24 max-w-md" role="alert"><CircleHelp className="mx-auto size-8 text-accent" aria-hidden="true" /><h1 className="mt-4 text-xl font-semibold">{language === "zh" ? "这条路线没有可用问题" : "This route has no available questions"}</h1><Link href={`/test/${testId}/`} className="atlas-primary-action mx-auto mt-6">{language === "zh" ? "返回测试说明" : "Back to test details"}</Link></main></div>;
  }

  if (resumeSession) {
    const answeredInSession = resumeSession.answers.filter((answer) => answer !== null).length;
    return <div className="atlas-page min-h-screen"><AppHeader backHref={`/test/${testId}/`} backLabel={language === "zh" ? "测试说明" : "Test details"} /><main id="main-content" tabIndex={-1} className="mx-auto flex min-h-[70vh] max-w-lg items-center px-5 py-16"><div className="atlas-resume-panel w-full"><span className="atlas-resume-symbol" aria-hidden="true">↗</span><p className="atlas-section-kicker mt-6">{language === "zh" ? "回到原来的路径" : "Return to your route"}</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{language === "zh" ? "你有一段未完成的回答。" : "You have an unfinished route."}</h1><p className="mt-4 text-sm leading-6 text-ink/58 dark:text-white/58">{language === "zh" ? `已经回答 ${answeredInSession} 题，从第 ${resumeSession.currentQuestion + 1} 题继续。` : `${answeredInSession} answered. Continue from question ${resumeSession.currentQuestion + 1}.`}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={() => { shouldFocusQuestion.current = true; clearQuizSession(testId); setResumeSession(null); setAnswers(new Array(total).fill(null)); setCurrentQuestion(0); }} className="atlas-secondary-action flex-1 justify-center"><RotateCcw className="size-4" aria-hidden="true" />{language === "zh" ? "重新开始" : "Start fresh"}</button><button type="button" onClick={() => { shouldFocusQuestion.current = true; setAnswers(resumeSession.answers); setCurrentQuestion(resumeSession.currentQuestion); setResumeSession(null); }} className="atlas-primary-action flex-1 justify-center"><ArrowRight className="size-4" aria-hidden="true" />{language === "zh" ? "继续回答" : "Continue"}</button></div></div></main></div>;
  }

  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref={`/test/${testId}/`} backLabel={language === "zh" ? "测试说明" : "Test details"} section={language === "zh" ? definition.title.zh : definition.title.en} />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12" aria-labelledby="quiz-title" aria-busy={submitting}>
        <div className="mb-8 flex items-end justify-between gap-5"><div><p className="atlas-section-kicker">{language === "zh" ? "正在探索" : "Exploring"}</p><h1 id="quiz-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{language === "zh" ? definition.title.zh : definition.title.en}</h1></div><span className="atlas-progress-count">{String(currentQuestion + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></span></div>
        <div className="atlas-progress-route" role="progressbar" aria-label={language === "zh" ? "答题进度" : "Quiz progress"} aria-valuemin={1} aria-valuemax={total} aria-valuenow={currentQuestion + 1} aria-valuetext={language === "zh" ? `第 ${currentQuestion + 1} 题，共 ${total} 题` : `Question ${currentQuestion + 1} of ${total}`}><span style={{ "--progress": progress / 100 } as React.CSSProperties} /></div>
        <div className="mt-3 flex justify-between text-[11px] text-ink/40 dark:text-white/40"><span>{answered} {language === "zh" ? "题已回答" : "answered"}</span><span>{language === "zh" ? "可以随时返回" : "You can go back anytime"}</span></div>

        <div {...touchHandlers} className="mt-10">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.section key={question.id} custom={direction} initial={shouldReduceMotion ? false : { opacity: 0, x: direction * 36 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: direction * -36 }} transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}>
              <p className="atlas-question-index">{language === "zh" ? "问题" : "Question"} {currentQuestion + 1}</p>
              <h2 ref={questionHeadingRef} tabIndex={-1} className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] outline-none sm:text-5xl">{question.prompt[language]}</h2>
              <div className="mt-9 grid gap-3">
                {question.options.map((option, index) => {
                  const selected = currentAnswer === index;
                  return <button key={option.id} type="button" onClick={() => selectAnswer(index)} aria-pressed={selected} className={cn("atlas-answer-option", selected && "atlas-answer-selected")}><span className="atlas-answer-key" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span className="flex-1 text-left">{option.label[language]}</span>{selected && <Check className="size-4 shrink-0" aria-hidden="true" />}</button>;
                })}
              </div>
            </motion.section>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-ink/10 pt-5 dark:border-white/10"><button type="button" onClick={() => move(currentQuestion - 1)} disabled={currentQuestion === 0} className="atlas-secondary-action disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft className="size-4" aria-hidden="true" />{language === "zh" ? "上一题" : "Previous"}</button>{isLast ? <button type="button" onClick={submit} disabled={currentAnswer === null || submitting || answered !== total} className="atlas-primary-action disabled:cursor-not-allowed disabled:opacity-35">{submitting ? (language === "zh" ? "正在整理……" : "Reading…") : (language === "zh" ? "查看结果" : "See result")}<ArrowRight className="size-4" aria-hidden="true" /></button> : <button type="button" onClick={() => move(currentQuestion + 1)} disabled={currentAnswer === null} className="atlas-primary-action disabled:cursor-not-allowed disabled:opacity-35">{language === "zh" ? "下一题" : "Next"}<ArrowRight className="size-4" aria-hidden="true" /></button>}</div>
        <div className="mt-4 min-h-5 text-center text-xs" role="status" aria-live="polite">{submitError && (language === "zh" ? "结果暂时无法保存，请再试一次。" : "Your result could not be saved. Please try again.")}</div>
        <p className="mt-5 text-center text-[11px] text-ink/35 dark:text-white/35">{language === "zh" ? "提示：使用 1–9 选择，← → 移动" : "Tip: use 1–9 to choose, ← → to move"}</p>
      </main>
    </div>
  );
}
