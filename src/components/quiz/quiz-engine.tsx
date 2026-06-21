"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
import { Celebration } from "@/components/celebration";

interface QuizEngineProps {
  testType: string;
}
// Dimension color palette for the mini breakdown bars
const DIM_PALETTE = ["#6B5B95","#00BFA5","#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"];

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
    submit: "See My Results",
    question: "Question",
    errorTitle: "Oops, something went wrong",
    errorMsg: "We couldn't load this test. Please check the link and try again.",
    backHome: "Back to Home",
    shortcuts: "Press 1–5 to answer · Enter to continue · Backspace to go back",
    loading: "Reading your answers and painting your portrait...",
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

/* ─── Lightweight milestone confetti (particles only, ~800ms) ─── */
function MilestoneConfetti({ onComplete }: { onComplete?: () => void }) {
  const [particles] = useState(() => {
    const emojis = ["✨", "🌟", "💫", "⭐", "🎉", "🎊"];
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      rotation: Math.random() * 720 - 360,
      scale: 0.5 + Math.random() * 0.7,
      delay: Math.random() * 0.25,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
  });

  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-xl"
          style={{ left: `${p.x}%` }}
          initial={{ y: "-10vh", rotate: 0, scale: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: p.rotation,
            scale: [0, p.scale, p.scale, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: p.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function QuizEngine({ testType }: QuizEngineProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });
  const [testData, setTestData] = useState<TestData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [direction, setDirection] = useState(1);

  /* ─── Swipe gesture state ─── */
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);

  /* ─── Milestone confetti state ─── */
  const [milestoneConfetti, setMilestoneConfetti] = useState(false);
  const milestonesReachedRef = useRef<Set<number>>(new Set());

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
  const effectiveLang = lang === "ja" ? "en" : lang;
  const displayName = testMeta?.[effectiveLang]?.name ?? testData?.[effectiveLang]?.name ?? testType;

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
    // Haptic feedback on mobile
    try { navigator.vibrate?.(10); } catch {}
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
    setCelebrating(true);
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
      // Append to history for trend tracking
      const historyKey = `quiz-history-${testType}`;
      try {
        const existing = JSON.parse(localStorage.getItem(historyKey) || "[]");
        if (!Array.isArray(existing)) { /* ignore corrupt */ }
        else {
          existing.push({ result, timestamp: Date.now(), testName: displayName, testNameEn: testMeta?.en?.name ?? testData?.en?.name ?? testType });
          localStorage.setItem(historyKey, JSON.stringify(existing));
        }
      } catch { /* ignore */ }
    } catch {}
    setTimeout(() => router.push(`/result/${testType}`), 600);
  }, [testData, answers, testType, router, displayName, testMeta]);

  /* ─── Keyboard navigation ─── */
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

  /* ─── Swipe gesture handlers ─── */
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    setSwipeOffset(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.touches[0].clientX - touchStartRef.current.x;
    const dy = e.touches[0].clientY - touchStartRef.current.y;
    // Only show horizontal feedback when horizontal movement clearly dominates
    if (Math.abs(dx) > Math.abs(dy) * 1.5) {
      setSwipeOffset(dx * 0.25);
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    setSwipeOffset(0);

    // Only trigger nav if horizontal swipe dominates and exceeds threshold
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && currentAnswer !== null) {
        // Swipe left → next question
        if (isLast) {
          handleSubmit();
        } else {
          goNext();
        }
      } else if (dx > 0 && !isFirst) {
        // Swipe right → previous question
        goPrev();
      }
    }
  }, [goNext, goPrev, handleSubmit, currentAnswer, isFirst, isLast]);

  /* ─── Progress milestone confetti ─── */
  useEffect(() => {
    if (totalQuestions === 0) return;
    const pct = ((currentQuestion + 1) / totalQuestions) * 100;
    const milestones = [25, 50, 75];
    for (const m of milestones) {
      if (pct >= m && !milestonesReachedRef.current.has(m)) {
        milestonesReachedRef.current.add(m);
        setMilestoneConfetti(true);
        break;
      }
    }
  }, [currentQuestion, totalQuestions]);

  // ─── Error state ───
  if (loadError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4">
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
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4">
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
  if (celebrating) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#0a0a0a]">
        <Celebration color={color} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          {t.loading}
        </motion.p>
      </div>
    );
  }

  if (submitting) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4">
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
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      {/* Milestone confetti overlay */}
      <AnimatePresence>
        {milestoneConfetti && (
          <MilestoneConfetti onComplete={() => setMilestoneConfetti(false)} />
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md px-4 py-3"
      >
        <Link href="/" className="text-sm font-semibold text-[#2C2C2C] dark:text-white opacity-60 hover:opacity-100 transition-opacity">
          认识你自己
        </Link>
        <span className="text-sm font-medium" style={{ color }}>
          {displayIcon} {displayName}
        </span>
        <button
          onClick={() => setLang((l) => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; })}
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
        >
          {lang === "zh" ? "EN" : "中"}
        </button>
      </motion.div>

      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-6 pb-24 sm:pb-6">
        {/* Progress bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
          <div className="relative" aria-live="polite" aria-label={`${t.answered} ${answeredCount} ${t.total} ${totalQuestions} ${t.questions}`}>
           <Progress value={progress} className="h-3 sm:h-2 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-3 sm:h-2 rounded-full"
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

        {/* Question Card with swipe support */}
        <div
          className="flex-1 mb-6 relative overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            style={{
              transform: `translateX(${swipeOffset}px)`,
              transition: swipeOffset === 0 ? "transform 0.2s ease-out" : "none",
            }}
          >
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

                  <h2 className="mb-6 text-lg font-medium leading-relaxed text-[#2C2C2C] dark:text-white">
                    {question?.[effectiveLang] || question?.zh || ""}
                  </h2>

                  <div className="flex flex-col gap-2.5" role="radiogroup">
                    {((question?.options?.[effectiveLang] || question?.options?.zh) || []).map((opt: string, idx: number) => {
                      const isSelected = currentAnswer === idx;
                      return (
                        <motion.button
                          key={idx}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => selectAnswer(idx)}
                          tabIndex={0}
                          className={cn(
                            "w-full cursor-pointer rounded-xl px-5 py-4 text-left text-sm transition-all min-h-[60px] sm:min-h-[52px] flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
                            isSelected
                              ? "font-medium shadow-md"
                              : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50/50 dark:hover:bg-white/5"
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
                              isSelected ? "text-white" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/60"
                            )}
                            style={isSelected ? { backgroundColor: color } : undefined}
                          >
                            {idx + 1}
                          </span>
                          <span className={cn("flex-1", isSelected ? "" : "text-gray-700 dark:text-white/80")}>{opt}</span>
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
            className="flex-1 h-14 sm:h-12 rounded-xl"
          >
            {t.prev}
          </Button>
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-14 w-14 sm:h-12 sm:w-12 rounded-xl">🏠</Button>
          </Link>
          {isLast ? (
            <Button
              onClick={handleSubmit}
              disabled={currentAnswer === null}
              className="flex-1 h-14 sm:h-12 rounded-xl font-semibold"
              style={{ backgroundColor: color }}
            >
              {t.submit}
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={goNext}
              disabled={currentAnswer === null}
              className="flex-1 h-14 sm:h-12 rounded-xl"
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
          className="mt-4 text-center text-[10px] text-muted-foreground/40 select-none hidden sm:block"
        >
          {t.shortcuts}
        </motion.p>
      </div>
    </div>
  );
}
