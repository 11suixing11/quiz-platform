"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { loadTestData } from "@/lib/tests";
import { getTestById } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";
import type { TestData, Lang } from "@/lib/types";
import { cn } from "@/lib/utils";

interface QuizEngineProps {
  testType: string;
}

const UI: Record<string, Record<string, string>> = {
  zh: {
    prev: "上一题",
    next: "下一题",
    submit: "查看结果",
    question: "问题",
    errorTitle: "加载失败",
    errorMsg: "无法加载该测试的数据，请确认测试类型是否正确。",
    backHome: "返回首页",
    shortcuts: "按 1-5 选择 · Enter 下一题 · Backspace 上一题",
    loading: "正在整理你的内在图景……",
    answered: "已答",
    total: "共",
    questions: "题",
  },
  en: {
    prev: "Previous",
    next: "Next",
    submit: "See Results",
    question: "Question",
    errorTitle: "Load Failed",
    errorMsg: "Could not load this test. Please verify the test type is correct.",
    backHome: "Back to Home",
    shortcuts: "Press 1-5 to select · Enter next · Backspace prev",
    loading: "Mapping your inner landscape...",
    answered: "answered",
    total: "of",
    questions: "questions",
  },
};

const questionVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function QuizEngine({ testType }: QuizEngineProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });
  const [testData, setTestData] = useState<TestData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);

  const testMeta = getTestById(testType);

  useEffect(() => {
    let cancelled = false;
    loadTestData(testType).then((data) => {
      if (cancelled) return;
      if (data) {
        setTestData(data);
        setAnswers(new Array(data.questions.length).fill(null));
      } else {
        setLoadError(true);
      }
    });
    return () => { cancelled = true; };
  }, [testType]);

  const totalQuestions = testData?.questions.length ?? 0;
  const progress = totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;
  const answeredCount = answers.filter((a) => a !== null).length;
  const t = UI[lang];
  const color = testData?.color ?? CATEGORY_COLORS[testType] ?? "#6B5B95";
  const question = testData?.questions[currentQuestion];
  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === totalQuestions - 1;
  const currentAnswer = answers[currentQuestion];
  const displayIcon = testMeta?.icon ?? testData?.icon ?? "📝";
  const displayName = testMeta?.[lang]?.name ?? testData?.[lang]?.name ?? testType;

  const moveToQuestion = useCallback((nextQ: number) => {
    setDirection(nextQ > currentQuestion ? 1 : -1);
    setCurrentQuestion(nextQ);
  }, [currentQuestion]);

  const selectAnswer = useCallback((idx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = idx;
      return next;
    });
    if (!isLast) {
      setTimeout(() => {
        setDirection(1);
        setCurrentQuestion((q) => Math.min(q + 1, totalQuestions - 1));
      }, 300);
    }
  }, [currentQuestion, isLast, totalQuestions]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentQuestion((q) => Math.min(q + 1, totalQuestions - 1));
  }, [totalQuestions]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentQuestion((q) => Math.max(q - 1, 0));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!testData) return;
    setSubmitting(true);
    const numericAnswers = answers.map((a) => a ?? 0);
    const result = testData.calculate(numericAnswers, testData.questions as any);
    try {
      localStorage.setItem(`quiz-result-${testType}`, JSON.stringify({
        result,
        answers: numericAnswers,
        testName: displayName,
        testNameEn: testMeta?.en?.name ?? testData?.en?.name ?? testType,
        timestamp: Date.now(),
      }));
    } catch {}
    setTimeout(() => router.push(`/result/${testType}`), 600);
  }, [testData, answers, testType, router, displayName, testMeta]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (submitting) return;
      if (e.key >= "1" && e.key <= "5") {
        const idx = parseInt(e.key) - 1;
        if (question && idx < (question.options?.zh?.length ?? 0)) selectAnswer(idx);
        return;
      }
      if (e.key === "Enter" && currentAnswer !== null && currentAnswer !== undefined) {
        e.preventDefault();
        isLast ? handleSubmit() : goNext();
        return;
      }
      if (e.key === "Backspace") { e.preventDefault(); goPrev(); }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [submitting, question, selectAnswer, isLast, handleSubmit, goNext, goPrev, currentAnswer]);

  // ─── Error state ───
  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="mb-6 text-6xl">😢</motion.div>
        <h1 className="mb-2 text-2xl font-bold">{t.errorTitle}</h1>
        <p className="mb-6 max-w-md text-center text-muted-foreground">{t.errorMsg}</p>
        <Link href="/"><Button>{t.backHome}</Button></Link>
      </div>
    );
  }

  // ─── Loading state ───
  if (!testData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] px-4">
        <div className="relative h-20 w-20 mb-8">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-transparent"
            style={{ borderColor: color + "30", borderTopColor: "transparent" }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-b-transparent"
            style={{ borderColor: color + "60", borderBottomColor: "transparent" }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-4 border-l-transparent"
            style={{ borderColor: color + "90", borderLeftColor: "transparent" }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          {t.loading}
        </motion.p>
      </div>
    );
  }

  // ─── Submitting state ───
  if (submitting) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] px-4">
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-t-transparent"
          style={{ borderColor: color, borderTopColor: "transparent" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          {t.loading}
        </motion.p>
      </div>
    );
  }

  // ─── Main quiz UI ───
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8]">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 backdrop-blur-md px-4 py-3"
      >
        <Link href="/" className="text-sm font-semibold text-[#2C2C2C] opacity-60 hover:opacity-100 transition-opacity">
          认识你自己
        </Link>
        <span className="text-sm font-medium" style={{ color }}>
          {displayIcon} {displayName}
        </span>
        <button
          onClick={() => setLang((l) => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; })}
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          {lang === "zh" ? "EN" : "中"}
        </button>
      </motion.div>

      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-6">
        {/* Progress bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
          <div className="relative">
            <Progress value={progress} className="h-2 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-2 rounded-full"
              style={{ backgroundColor: color, width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{currentQuestion + 1} / {totalQuestions}</span>
            <span>{answeredCount} {t.answered}</span>
          </div>
        </motion.div>

        {/* Question Card with animation */}
        <div className="flex-1 mb-6 relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              variants={questionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {currentQuestion + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.question}
                  </span>
                </div>

                <h2 className="mb-6 text-lg font-medium leading-relaxed text-[#2C2C2C]">
                  {question?.[lang] || question?.zh || ""}
                </h2>

                <div className="flex flex-col gap-2.5" role="radiogroup">
                  {((question?.options?.[lang] || question?.options?.zh) || []).map((opt: string, idx: number) => {
                    const isSelected = currentAnswer === idx;
                    return (
                      <motion.button
                        key={idx}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => selectAnswer(idx)}
                        className={cn(
                          "w-full cursor-pointer rounded-xl px-5 py-4 text-left text-sm transition-all min-h-[52px] flex items-center gap-3",
                          isSelected
                            ? "font-medium shadow-md"
                            : "border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                        )}
                        style={
                          isSelected
                            ? {
                                backgroundColor: color + "12",
                                borderWidth: "2px",
                                borderColor: color,
                                color: color,
                              }
                            : undefined
                        }
                        role="radio"
                        aria-checked={isSelected}
                      >
                        <span
                          className={cn(
                            "flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all",
                            isSelected ? "text-white" : "bg-gray-100 text-gray-500"
                          )}
                          style={isSelected ? { backgroundColor: color } : undefined}
                        >
                          {idx + 1}
                        </span>
                        <span className={cn("flex-1", isSelected ? "" : "text-gray-700")}>{opt}</span>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="text-lg"
                          >
                            ✓
                          </motion.span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between gap-3"
        >
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={isFirst}
            className="flex-1 h-12 rounded-xl"
          >
            {t.prev}
          </Button>
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl">🏠</Button>
          </Link>
          {isLast ? (
            <Button
              onClick={handleSubmit}
              disabled={currentAnswer === null}
              className="flex-1 h-12 rounded-xl font-semibold"
              style={{ backgroundColor: color }}
            >
              {t.submit}
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={goNext}
              disabled={currentAnswer === null}
              className="flex-1 h-12 rounded-xl"
            >
              {t.next}
            </Button>
          )}
        </motion.div>

        {/* Shortcuts hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-center text-[10px] text-muted-foreground/40 select-none"
        >
          {t.shortcuts}
        </motion.p>
      </div>
    </div>
  );
}
