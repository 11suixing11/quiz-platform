"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Globe, Repeat } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";

type Lang = "zh" | "en";

interface TestAttempt {
  timestamp: number;
  score: number;
  result: Record<string, unknown>;
}

interface TestTrend {
  testId: string;
  testName: string;
  testNameEn: string;
  category: string;
  icon: string;
  attempts: TestAttempt[];
}

function extractScore(result: Record<string, unknown>): number {
  if (typeof result.score === "number") return result.score;
  if (typeof result.overallScore === "number") return result.overallScore;
  if (typeof result.percentages === "object" && result.percentages) {
    const vals = Object.values(result.percentages as Record<string, number>);
    if (vals.length > 0) return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }
  if (typeof result.scores === "object" && result.scores) {
    const vals = Object.values(result.scores as Record<string, number>);
    if (vals.length > 0) {
      const max = Math.max(...vals);
      return max > 0 ? Math.round((vals.reduce((a, b) => a + b, 0) / (vals.length * max)) * 100) : 0;
    }
  }
  return 0;
}

export default function TrendsPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [trends, setTrends] = useState<TestTrend[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh") setLang(saved);
    } catch {}

    try {
      const testMap = new Map<string, TestAttempt[]>();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("quiz-result-")) {
          const testId = key.replace("quiz-result-", "");
          try {
            const data = JSON.parse(localStorage.getItem(key) ?? "");
            if (data && data.result && data.timestamp) {
              const existing = testMap.get(testId) || [];
              existing.push({
                timestamp: data.timestamp,
                score: extractScore(data.result),
                result: data.result,
              });
              testMap.set(testId, existing);
            }
          } catch {}
        }
      }

      const result: TestTrend[] = [];
      for (const [testId, attempts] of testMap) {
        const registry = TEST_REGISTRY.find((t) => t.id === testId);
        if (!registry) continue;
        attempts.sort((a, b) => a.timestamp - b.timestamp);
        result.push({
          testId,
          testName: registry.zh.name,
          testNameEn: registry.en.name,
          category: registry.category,
          icon: registry.icon,
          attempts,
        });
      }

      // Only include tests with multiple attempts
      const withRetakes = result.filter((t) => t.attempts.length > 1);
      withRetakes.sort((a, b) => b.attempts.length - a.attempts.length);
      setTrends(withRetakes);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  const formatDate = useCallback((ts: number) => {
    const d = new Date(ts);
    if (lang === "zh") {
      return `${d.getMonth() + 1}/${d.getDate()}`;
    }
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }, [lang]);

  if (!mounted) {
    return <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]" />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 border-b border-[#2C2C2C]/8 dark:border-white/8"
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] dark:text-white hover:opacity-80 transition-opacity">
          <ArrowLeft className="size-4" />
          <span>{lang === "zh" ? "认识你自己" : "Know Yourself"}</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleLang} aria-label="Toggle language">
          <Globe className="size-4 text-[#2C2C2C] dark:text-white" />
        </Button>
      </motion.header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-3 block">📈</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? "成绩趋势" : "Result Trends"}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
            {lang === "zh"
              ? "追踪你多次测试的成绩变化"
              : "Track how your scores change across retakes"}
          </p>
        </motion.div>

        {trends.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="text-6xl mb-6"
            >
              🔁
            </motion.span>
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-2">
              {lang === "zh" ? "还没有重测记录" : "No retakes yet"}
            </h2>
            <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 max-w-sm mb-3">
              {lang === "zh"
                ? "重做已完成的测试，这里会展示你的成绩变化趋势。看看自己有没有进步吧！"
                : "Retake tests you've already completed to see how your scores change over time. See if you've improved!"}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#2C2C2C]/40 dark:text-white/40 mb-8">
              <Repeat className="size-3.5" />
              <span>{lang === "zh" ? "提示：进入任意测试结果页即可重测" : "Tip: Visit any result page to retake a test"}</span>
            </div>
            <Link
              href="/history/"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#2C2C2C]/20 dark:border-white/20 px-6 text-sm font-medium text-[#2C2C2C] dark:text-white transition-colors hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5"
            >
              {lang === "zh" ? "查看测试历史 →" : "View Test History →"}
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {trends.map((trend, idx) => {
              const categoryColor = CATEGORY_COLORS[trend.category] ?? "#6B5B95";
              const maxScore = Math.max(...trend.attempts.map((a) => a.score), 1);
              const scores = trend.attempts.map((a) => a.score);
              const firstScore = scores[0];
              const lastScore = scores[scores.length - 1];
              const diff = lastScore - firstScore;
              const improved = diff > 0;

              return (
                <motion.div
                  key={trend.testId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <Card className="p-5 border-[#2C2C2C]/8 dark:border-white/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex size-10 shrink-0 items-center justify-center rounded-xl text-xl"
                        style={{ backgroundColor: categoryColor + "15" }}
                      >
                        {trend.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">
                          {lang === "zh" ? trend.testName : trend.testNameEn}
                        </h3>
                        <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50 mt-0.5">
                          {lang === "zh"
                            ? `${trend.attempts.length} 次测试`
                            : `${trend.attempts.length} attempts`}
                          {" · "}
                          <span className={improved ? "text-emerald-500" : diff < 0 ? "text-red-400" : ""}>
                            {diff === 0
                              ? (lang === "zh" ? "无变化" : "No change")
                              : improved
                                ? `↑ ${diff}`
                                : `↓ ${Math.abs(diff)}`}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Bar chart */}
                    <div className="flex items-end gap-1.5 h-24">
                      {trend.attempts.map((attempt, i) => {
                        const heightPct = Math.max((attempt.score / maxScore) * 100, 4);
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-[10px] font-medium text-[#2C2C2C]/60 dark:text-white/60">
                              {attempt.score}
                            </span>
                            <div className="w-full relative" style={{ height: "80px" }}>
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${heightPct}%` }}
                                transition={{ duration: 0.5, delay: idx * 0.08 + i * 0.1 }}
                                className="absolute bottom-0 left-0 right-0 rounded-t-md"
                                style={{ backgroundColor: categoryColor }}
                              />
                            </div>
                            <span className="text-[9px] text-[#2C2C2C]/40 dark:text-white/40">
                              {formatDate(attempt.timestamp)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2C2C2C]/8 dark:border-white/8 px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30 dark:text-white/30">
            <Link href="/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "返回首页" : "Home"}
            </Link>
            <span>·</span>
            <Link href="/history/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "测试历史" : "History"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
