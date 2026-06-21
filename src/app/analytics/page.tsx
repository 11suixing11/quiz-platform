"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, BarChart3, Trophy, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TEST_REGISTRY, type TestRegistryEntry } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";
import type { Lang } from "@/lib/types";

interface HistoryEntry {
  testId: string;
  registry: TestRegistryEntry;
  result: Record<string, unknown>;
  answers: number[];
  timestamp: number;
}

interface CategoryStat {
  id: string;
  count: number;
  color: string;
  label: string;
}

interface TestFrequency {
  testId: string;
  name: string;
  nameJa?: string;
  count: number;
  icon: string;
  category: string;
}

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  personality: { zh: "自我认知", en: "Self Identity", ja: "自己認識" },
  emotion: { zh: "情绪图谱", en: "Emotion", ja: "感情" },
  mental: { zh: "内在平衡", en: "Inner Balance", ja: "内なるバランス" },
  relationship: { zh: "关系动力", en: "Relationship", ja: "人間関係" },
  career: { zh: "职业原型", en: "Career", ja: "キャリア" },
  intelligence: { zh: "认知模式", en: "Intelligence", ja: "認知" },
  lifestyle: { zh: "生活哲学", en: "Lifestyle", ja: "ライフスタイル" },
  social: { zh: "社交智慧", en: "Social", ja: "ソーシャル" },
  fun: { zh: "趣味探索", en: "Fun", ja: "遊び" },
};

const UI: Record<string, Record<string, string>> = {
  zh: {
    title: "测试分析",
    subtitle: "你的测试行为数据，全部在本地。",
    totalTests: "总测试次数",
    uniqueTests: "不同测试",
    avgPerDay: "日均测试",
    mostTaken: "最常做的测试",
    categoryDist: "分类分布",
    recentTests: "最近测试",
    noData: "还没有测试数据",
    noDataDesc: "完成一些测试后，这里会显示你的分析数据。",
    exploreTests: "探索测试",
    times: "次",
    tests: "个测试",
    ago: "前",
    today: "今天",
    yesterday: "昨天",
    daysAgo: "天前",
  },
  en: {
    title: "Test Analytics",
    subtitle: "Your test behavior data, all stored locally.",
    totalTests: "Total Tests Taken",
    uniqueTests: "Unique Tests",
    avgPerDay: "Avg Per Day",
    mostTaken: "Most Taken Tests",
    categoryDist: "Category Distribution",
    recentTests: "Recent Tests",
    noData: "No test data yet",
    noDataDesc: "Complete some tests and your analytics will appear here.",
    exploreTests: "Explore Tests",
    times: "times",
    tests: "tests",
    ago: "ago",
    today: "Today",
    yesterday: "Yesterday",
    daysAgo: "days ago",
  },
  ja: {
    title: "テスト分析",
    subtitle: "テスト行動データ、すべてローカル保存。",
    totalTests: "テスト回数",
    uniqueTests: "異なるテスト",
    avgPerDay: "1日平均",
    mostTaken: "よく受けるテスト",
    categoryDist: "カテゴリ分布",
    recentTests: "最近のテスト",
    noData: "テストデータがありません",
    noDataDesc: "テストを完了すると、ここに分析データが表示されます。",
    exploreTests: "テストを探す",
    times: "回",
    tests: "件",
    ago: "前",
    today: "今日",
    yesterday: "昨日",
    daysAgo: "日前",
  },
};

function loadEntries(): HistoryEntry[] {
  const entries: HistoryEntry[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("quiz-result-")) {
        const testId = key.replace("quiz-result-", "");
        const registry = TEST_REGISTRY.find((t) => t.id === testId);
        if (!registry) continue;
        try {
          const data = JSON.parse(localStorage.getItem(key) ?? "");
          if (data && data.result && data.timestamp) {
            entries.push({
              testId,
              registry,
              result: data.result,
              answers: data.answers ?? [],
              timestamp: data.timestamp,
            });
          }
        } catch {}
      }
    }
  } catch {}
  entries.sort((a, b) => b.timestamp - a.timestamp);
  return entries;
}

function getFrequency(entries: HistoryEntry[]): TestFrequency[] {
  const counts: Record<string, number> = {};
  for (const e of entries) {
    counts[e.testId] = (counts[e.testId] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([testId, count]) => {
      const reg = TEST_REGISTRY.find((t) => t.id === testId);
      return {
        testId,
        name: reg?.zh.name ?? testId,
        nameJa: reg?.en.name ?? testId,
        count,
        icon: reg?.icon ?? "📝",
        category: reg?.category ?? "unknown",
      };
    })
    .sort((a, b) => b.count - a.count);
}

function getCategoryStats(entries: HistoryEntry[]): CategoryStat[] {
  const counts: Record<string, number> = {};
  for (const e of entries) {
    const cat = e.registry.category;
    counts[cat] = (counts[cat] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([id, count]) => ({
      id,
      count,
      color: CATEGORY_COLORS[id] ?? "#6B5B95",
      label: CATEGORY_LABELS[id]?.en ?? id,
    }))
    .sort((a, b) => b.count - a.count);
}

function timeAgo(ts: number, lang: Lang): string {
  const now = Date.now();
  const diffMs = now - ts;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  const t = UI[lang];
  if (diffDays > 30) {
    const d = new Date(ts);
    if (lang === "zh") return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }
  if (diffDays > 1) return `${diffDays} ${t.daysAgo}`;
  if (diffDays === 1) return t.yesterday;
  if (diffHr >= 1) return `${diffHr}h ${t.ago}`;
  if (diffMin >= 1) return `${diffMin}m ${t.ago}`;
  return t.today;
}

export default function AnalyticsPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
    setEntries(loadEntries());
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]" />;

  const t = UI[lang];
  const frequency = getFrequency(entries);
  const categoryStats = getCategoryStats(entries);
  const totalEntries = entries.length;
  const uniqueTests = new Set(entries.map((e) => e.testId)).size;

  // Average per day
  const daySpan = entries.length > 1
    ? Math.max(1, Math.ceil((entries[0].timestamp - entries[entries.length - 1].timestamp) / 86400000))
    : 1;
  const avgPerDay = totalEntries > 0 ? (totalEntries / daySpan).toFixed(1) : "0";

  const maxCategoryCount = categoryStats.length > 0 ? categoryStats[0].count : 1;
  const maxFrequency = frequency.length > 0 ? frequency[0].count : 1;

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
          <span>{lang === "zh" ? "认识你自己" : lang === "ja" ? "自分を知る" : "Know Yourself"}</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleLang} aria-label="Toggle language">
          <Globe className="size-4 text-[#2C2C2C] dark:text-white" />
        </Button>
      </motion.header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-3 block">📊</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">{t.title}</h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">{t.subtitle}</p>
        </motion.div>

        {totalEntries === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <span className="text-6xl mb-6 block">📈</span>
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-2">{t.noData}</h2>
            <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 max-w-sm mb-8">{t.noDataDesc}</p>
            <Link
              href="/#explore"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#2C2C2C] dark:bg-white px-8 text-sm font-medium text-white dark:text-[#2C2C2C] transition-colors hover:opacity-90"
            >
              {t.exploreTests}
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-8">
            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-4"
            >
              <Card className="p-5 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{totalEntries}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.totalTests}</div>
              </Card>
              <Card className="p-5 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                <div className="text-2xl mb-1">📋</div>
                <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{uniqueTests}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.uniqueTests}</div>
              </Card>
              <Card className="p-5 text-center border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{avgPerDay}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.avgPerDay}</div>
              </Card>
            </motion.div>

            {/* Most Taken Tests */}
            {frequency.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="flex items-center gap-2 text-lg font-bold text-[#2C2C2C] dark:text-white mb-4">
                  <Trophy className="size-5 text-amber-500" />
                  {t.mostTaken}
                </h2>
                <div className="space-y-3">
                  {frequency.slice(0, 5).map((item, i) => (
                    <motion.div
                      key={item.testId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Card className="p-4 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-[#2C2C2C] dark:text-white truncate">
                              {lang === "en" ? item.nameJa : item.name}
                            </div>
                            <div className="mt-1 h-2 rounded-full bg-[#2C2C2C]/5 dark:bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.count / maxFrequency) * 100}%` }}
                                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: CATEGORY_COLORS[item.category] ?? "#6B5B95" }}
                              />
                            </div>
                          </div>
                          <span className="text-sm font-bold text-[#2C2C2C]/60 dark:text-white/60 shrink-0">
                            {item.count} {t.times}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Category Distribution (CSS pie chart) */}
            {categoryStats.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="flex items-center gap-2 text-lg font-bold text-[#2C2C2C] dark:text-white mb-4">
                  <Target className="size-5 text-blue-500" />
                  {t.categoryDist}
                </h2>
                <Card className="p-6 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    {/* CSS Pie Chart */}
                    <div
                      className="relative shrink-0"
                      style={{ width: 160, height: 160 }}
                    >
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          background: (() => {
                            const total = categoryStats.reduce((s, c) => s + c.count, 0);
                            let cumulative = 0;
                            const stops: string[] = [];
                            for (const cat of categoryStats) {
                              const start = (cumulative / total) * 360;
                              cumulative += cat.count;
                              const end = (cumulative / total) * 360;
                              stops.push(`${cat.color} ${start}deg ${end}deg`);
                            }
                            return `conic-gradient(${stops.join(", ")})`;
                          })(),
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#FAFAF8] dark:bg-[#141414] flex items-center justify-center">
                          <span className="text-lg font-bold text-[#2C2C2C] dark:text-white">{totalEntries}</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex-1 space-y-2 w-full">
                      {categoryStats.map((cat) => (
                        <div key={cat.id} className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                          <span className="text-sm text-[#2C2C2C]/70 dark:text-white/70 flex-1">
                            {CATEGORY_LABELS[cat.id]?.[lang] ?? cat.label}
                          </span>
                          <span className="text-sm font-medium text-[#2C2C2C] dark:text-white">{cat.count}</span>
                          <span className="text-xs text-[#2C2C2C]/40 dark:text-white/40 w-10 text-right">
                            {Math.round((cat.count / totalEntries) * 100)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Recent Tests */}
            {entries.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="flex items-center gap-2 text-lg font-bold text-[#2C2C2C] dark:text-white mb-4">
                  <Clock className="size-5 text-green-500" />
                  {t.recentTests}
                </h2>
                <div className="space-y-2">
                  {entries.slice(0, 10).map((entry, i) => (
                    <motion.div
                      key={`${entry.testId}-${entry.timestamp}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link href={`/result/${entry.testId}/`}>
                        <Card className="p-3 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414] hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{entry.registry.icon}</span>
                            <span className="text-sm font-medium text-[#2C2C2C] dark:text-white flex-1 truncate">
                              {lang === "en" ? entry.registry.en.name : entry.registry.zh.name}
                            </span>
                            <span className="text-xs text-[#2C2C2C]/40 dark:text-white/40 shrink-0">
                              {timeAgo(entry.timestamp, lang)}
                            </span>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2C2C2C]/8 dark:border-white/8 px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30 dark:text-white/30">
            <Link href="/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "返回首页" : lang === "ja" ? "ホーム" : "Home"}
            </Link>
            <span>·</span>
            <Link href="/history/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "测试历史" : lang === "ja" ? "履歴" : "History"}
            </Link>
            <span>·</span>
            <Link href="/#explore" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "探索测试" : lang === "ja" ? "テストを探す" : "Explore"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
