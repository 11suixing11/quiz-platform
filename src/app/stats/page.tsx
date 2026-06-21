"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";

interface QuizResult {
  testId: string;
  testName: string;
  testNameEn: string;
  timestamp: number;
  result: Record<string, unknown>;
  answers: number[];
}

type Lang = "zh" | "en" | "ja";

function loadResults(): QuizResult[] {
  const results: QuizResult[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("quiz-result-")) {
        const testId = key.replace("quiz-result-", "");
        const data = JSON.parse(localStorage.getItem(key) ?? "");
        if (data && data.result && data.timestamp) {
          results.push({
            testId,
            testName: data.testName ?? testId,
            testNameEn: data.testNameEn ?? testId,
            timestamp: data.timestamp,
            result: data.result,
            answers: data.answers ?? [],
          });
        }
      }
    }
  } catch {}
  return results;
}

function computeScore(result: Record<string, unknown>, testId: string): number | null {
  // For big-five, compute percentile average
  const dims = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
  const vals: number[] = [];
  for (const d of dims) {
    const v = result[d];
    if (typeof v === "number") vals.push(v);
  }
  if (vals.length > 0) return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);

  // For numeric scores
  if (typeof result.score === "number") return result.score;
  if (typeof result.percentage === "number") return result.percentage;

  return null;
}

export default function StatsPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [results, setResults] = useState<QuizResult[]>([]);
  const [mounted, setMounted] = useState(false);

  const loadData = useCallback(() => {
    setResults(loadResults());
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
    loadData();
  }, [loadData]);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  // Compute stats
  const totalCompleted = results.length;

  // Most taken tests
  const testFreq: Record<string, number> = {};
  for (const r of results) {
    testFreq[r.testId] = (testFreq[r.testId] || 0) + 1;
  }
  const mostTaken = Object.entries(testFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, count]) => {
      const entry = TEST_REGISTRY.find((t) => t.id === id);
      return {
        id,
        count,
        name: entry?.zh.name ?? id,
        nameEn: entry?.en.name ?? id,
        icon: entry?.icon ?? "📝",
      };
    });

  // Average scores
  const allScores: number[] = [];
  for (const r of results) {
    const s = computeScore(r.result, r.testId);
    if (s !== null) allScores.push(s);
  }
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : null;

  // Timeline: last 7 days
  const now = new Date();
  const timeline: { date: string; count: number; label: string }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const start = d.getTime();
    const end = start + 86400000;
    const count = results.filter((r) => r.timestamp >= start && r.timestamp < end).length;
    const dayNames = lang === "zh"
      ? ["日", "一", "二", "三", "四", "五", "六"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    timeline.push({
      date: `${d.getMonth() + 1}/${d.getDate()}`,
      count,
      label: dayNames[d.getDay()],
    });
  }
  const maxTimeline = Math.max(...timeline.map((t) => t.count), 1);

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
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLang} aria-label="Toggle language">
            <Globe className="size-4 text-[#2C2C2C] dark:text-white" />
          </Button>
        </div>
      </motion.header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-3 block">📈</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? "统计面板" : "Stats Dashboard"}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
            {lang === "zh"
              ? "你的测试之旅，用数据呈现。"
              : "Your test journey, visualized."}
          </p>
        </motion.div>

        {/* Summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          <Card className="p-4 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{totalCompleted}</div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50 mt-1">
              {lang === "zh" ? "完成测试" : "Tests Done"}
            </div>
          </Card>
          <Card className="p-4 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">
              {avgScore !== null ? `${avgScore}%` : "—"}
            </div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50 mt-1">
              {lang === "zh" ? "平均分" : "Avg Score"}
            </div>
          </Card>
          <Card className="p-4 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">
              {Object.keys(testFreq).length}
            </div>
            <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50 mt-1">
              {lang === "zh" ? "不同测试" : "Unique Tests"}
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <Card className="p-6 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
            <h2 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-4">
              {lang === "zh" ? "最近 7 天" : "Last 7 Days"}
            </h2>
            <div className="flex items-end gap-2 h-32">
              {timeline.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-[#2C2C2C]/50 dark:text-white/50 font-medium">
                    {day.count || ""}
                  </span>
                  <div
                    className="w-full rounded-t-md transition-all"
                    style={{
                      height: day.count ? `${Math.max((day.count / maxTimeline) * 80, 4)}%` : "4px",
                      backgroundColor: day.count ? "#6B5B95" : "rgba(44,44,44,0.1)",
                      minHeight: 4,
                    }}
                  />
                  <span className="text-[9px] text-[#2C2C2C]/40 dark:text-white/40">
                    {day.date}
                  </span>
                  <span className="text-[9px] text-[#2C2C2C]/30 dark:text-white/30">
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Most taken tests */}
        {mostTaken.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <Card className="p-6 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
              <h2 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-4">
                {lang === "zh" ? "最常做的测试" : "Most Taken Tests"}
              </h2>
              <div className="space-y-3">
                {mostTaken.map((t, i) => {
                  const entry = TEST_REGISTRY.find((e) => e.id === t.id);
                  const categoryColor = entry ? CATEGORY_COLORS[entry.category] ?? "#6B5B95" : "#6B5B95";
                  return (
                    <div key={t.id} className="flex items-center gap-3">
                      <span className="text-lg">{t.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#2C2C2C] dark:text-white truncate">
                          {lang === "zh" ? t.name : t.nameEn}
                        </div>
                        <div className="h-1.5 rounded-full mt-1" style={{ backgroundColor: categoryColor + "20" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(t.count / mostTaken[0].count) * 100}%`,
                              backgroundColor: categoryColor,
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#2C2C2C]/50 dark:text-white/50 shrink-0">
                        {t.count}×
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Empty state */}
        {totalCompleted === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <span className="text-6xl mb-6">📭</span>
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-2">
              {lang === "zh" ? "还没有数据" : "No data yet"}
            </h2>
            <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 max-w-sm mb-8">
              {lang === "zh"
                ? "完成一些测试后，你的统计数据会出现在这里。"
                : "Complete some tests and your stats will appear here."}
            </p>
          </motion.div>
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
            <span>·</span>
            <Link href="/#explore" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "探索测试" : "Explore"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
