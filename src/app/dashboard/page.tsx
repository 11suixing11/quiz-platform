"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BarChart3, Trophy, Flame, Star, Clock, TrendingUp, Download, RefreshCw, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TEST_CATEGORIES, CATEGORY_COLORS } from "@/lib/constants";
import { getDataStats, exportAllData, type DataStats } from "@/lib/data-manager";
import { DataManager } from "@/components/data-manager";
import type { Lang } from "@/lib/types";

interface HistoryEntry {
  testId: string;
  result: Record<string, unknown>;
  answers: number[];
  testName: string;
  testNameEn: string;
  timestamp: number;
}

const uiText = {
  zh: {
    title: "仪表板",
    subtitle: "你的测试之旅概览",
    totalTests: "测试总数",
    avgScore: "平均分数",
    streak: "连续天数",
    favCategory: "最爱分类",
    recentActivity: "最近活动",
    noActivity: "还没有测试记录",
    startFirst: "开始你的第一个测试吧！",
    categoryDist: "分类分布",
    scoreTrend: "分数趋势",
    achievements: "成就",
    quickActions: "快捷操作",
    retake: "重新测试",
    compare: "对比结果",
    exportData: "导出数据",
    dataManager: "数据管理",
    back: "返回首页",
    tests: "次",
    days: "天",
    viewAll: "查看全部",
    noData: "暂无数据",
    timeAgo: {
      now: "刚刚",
      minutes: "分钟前",
      hours: "小时前",
      days: "天前",
    },
  },
  en: {
    title: "Dashboard",
    subtitle: "Overview of your quiz journey",
    totalTests: "Total Tests",
    avgScore: "Avg Score",
    streak: "Streak",
    favCategory: "Top Category",
    recentActivity: "Recent Activity",
    noActivity: "No test records yet",
    startFirst: "Take your first test!",
    categoryDist: "Category Distribution",
    scoreTrend: "Score Trend",
    achievements: "Achievements",
    quickActions: "Quick Actions",
    retake: "Retake",
    compare: "Compare",
    exportData: "Export",
    dataManager: "Data Manager",
    back: "Back to Home",
    tests: "tests",
    days: "days",
    viewAll: "View All",
    noData: "No data yet",
    timeAgo: {
      now: "just now",
      minutes: "min ago",
      hours: "hours ago",
      days: "days ago",
    },
  },
  ja: {
    title: "ダッシュボード",
    subtitle: "テストジャーニーの概要",
    totalTests: "テスト合計",
    avgScore: "平均スコア",
    streak: "連続日数",
    favCategory: "お気に入り",
    recentActivity: "最近のアクティビティ",
    noActivity: "テスト記録がありません",
    startFirst: "最初のテストを始めましょう！",
    categoryDist: "カテゴリ分布",
    scoreTrend: "スコア推移",
    achievements: "アチーブメント",
    quickActions: "クイックアクション",
    retake: "再テスト",
    compare: "比較",
    exportData: "エクスポート",
    dataManager: "データ管理",
    back: "ホームに戻る",
    tests: "回",
    days: "日",
    viewAll: "すべて見る",
    noData: "まだデータがありません",
    timeAgo: {
      now: "たった今",
      minutes: "分前",
      hours: "時間前",
      days: "日前",
    },
  },
};

const achievements = [
  { id: "first", threshold: 1, icon: "🌱", zh: "初次探索", en: "First Steps", ja: "最初の一歩" },
  { id: "five", threshold: 5, icon: "🌿", zh: "5次测试", en: "5 Tests", ja: "5回テスト" },
  { id: "ten", threshold: 10, icon: "🌳", zh: "10次测试", en: "10 Tests", ja: "10回テスト" },
  { id: "twentyfive", threshold: 25, icon: "🏆", zh: "25次测试", en: "25 Tests", ja: "25回テスト" },
  { id: "fifty", threshold: 50, icon: "⭐", zh: "50次测试", en: "50 Tests", ja: "50回テスト" },
  { id: "hundred", threshold: 100, icon: "💎", zh: "100次测试", en: "100 Tests", ja: "100回テスト" },
  { id: "streak3", threshold: 0, icon: "🔥", zh: "3天连续", en: "3-Day Streak", ja: "3日連続", streakReq: 3 },
  { id: "streak7", threshold: 0, icon: "🔥🔥", zh: "7天连续", en: "7-Day Streak", ja: "7日連続", streakReq: 7 },
  { id: "explorer", threshold: 0, icon: "🧭", zh: "探索者", en: "Explorer", ja: "探検家", categoryReq: 5 },
];

function timeAgo(timestamp: number, lang: Lang): string {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const t = uiText[lang].timeAgo;

  if (minutes < 1) return t.now;
  if (minutes < 60) return `${minutes}${t.minutes}`;
  if (hours < 24) return `${hours}${t.hours}`;
  return `${days}${t.days}`;
}

function SimplePieChart({ data, lang }: { data: { label: string; value: number; color: string }[]; lang: Lang }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) return <p className="text-center text-xs text-[#2C2C2C]/40 dark:text-white/40 py-8">{uiText[lang].noData}</p>;

  let cumulative = 0;
  const segments = data.map((d) => {
    const start = cumulative / total;
    cumulative += d.value;
    const end = cumulative / total;
    return { ...d, start, end };
  });

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="w-24 h-24 flex-shrink-0">
        {segments.map((seg, i) => {
          const startAngle = seg.start * 2 * Math.PI - Math.PI / 2;
          const endAngle = seg.end * 2 * Math.PI - Math.PI / 2;
          const largeArc = seg.end - seg.start > 0.5 ? 1 : 0;
          const x1 = 50 + 40 * Math.cos(startAngle);
          const y1 = 50 + 40 * Math.sin(startAngle);
          const x2 = 50 + 40 * Math.cos(endAngle);
          const y2 = 50 + 40 * Math.sin(endAngle);
          return (
            <path
              key={i}
              d={`M50,50 L${x1},${y1} A40,40 0 ${largeArc},1 ${x2},${y2} Z`}
              fill={seg.color}
              opacity={0.8}
            />
          );
        })}
      </svg>
      <div className="flex flex-col gap-1">
        {data.filter((d) => d.value > 0).map((d) => (
          <div key={d.label} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
            <span className="text-[#2C2C2C]/70 dark:text-white/70">{d.label}</span>
            <span className="text-[#2C2C2C]/40 dark:text-white/40">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreTimeline({ entries, lang }: { entries: HistoryEntry[]; lang: Lang }) {
  const recent = entries.slice(-10);
  if (recent.length < 2) return <p className="text-center text-xs text-[#2C2C2C]/40 dark:text-white/40 py-8">{uiText[lang].noData}</p>;

  const scores = recent.map((e) => {
    const r = e.result;
    const s = (r.score ?? r.overallScore ?? r.percentage) as number | undefined;
    return typeof s === "number" ? s : 50;
  });

  const max = Math.max(...scores, 100);
  const min = Math.min(...scores, 0);
  const range = max - min || 1;

  const points = scores.map((s, i) => {
    const x = (i / (scores.length - 1)) * 200;
    const y = 80 - ((s - min) / range) * 60;
    return `${x},${y}`;
  });

  return (
    <svg viewBox="0 0 200 90" className="w-full h-20">
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2"
        className="dark:stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {scores.map((s, i) => {
        const x = (i / (scores.length - 1)) * 200;
        const y = 80 - ((s - min) / range) * 60;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="#2C2C2C"
            className="dark:fill-white"
          />
        );
      })}
    </svg>
  );
}

export default function DashboardPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [stats, setStats] = useState<DataStats | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showDataManager, setShowDataManager] = useState(false);

  const load = useCallback(() => {
    try {
      const stored: HistoryEntry[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("quiz-result-")) {
          const testId = key.replace("quiz-result-", "");
          const registry = TEST_REGISTRY.find((t) => t.id === testId);
          if (!registry) continue;
          try {
            const data = JSON.parse(localStorage.getItem(key) ?? "");
            if (data && data.result && data.timestamp) {
              stored.push({
                testId,
                result: data.result,
                answers: data.answers ?? [],
                testName: data.testName ?? registry.zh.name,
                testNameEn: data.testNameEn ?? registry.en.name,
                timestamp: data.timestamp,
              });
            }
          } catch {}
        }
      }
      stored.sort((a, b) => b.timestamp - a.timestamp);
      setEntries(stored);
      setStats(getDataStats());
    } catch {}
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
    load();
  }, [load]);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  const t = uiText[lang];

  const categoryData = useMemo(() => {
    if (!stats) return [];
    return TEST_CATEGORIES.map((cat) => ({
      label: lang === "zh" ? cat.zh : lang === "ja" ? cat.zh : cat.en,
      value: stats.categories[cat.id] || 0,
      color: CATEGORY_COLORS[cat.id],
    }));
  }, [stats, lang]);

  const earnedAchievements = useMemo(() => {
    if (!stats) return [];
    return achievements.filter((a) => {
      if (a.streakReq) return stats.streakDays >= a.streakReq;
      if (a.categoryReq) return Object.keys(stats.categories).length >= a.categoryReq;
      return stats.totalTests >= a.threshold;
    });
  }, [stats]);

  const favCatName = useMemo(() => {
    if (!stats?.favoriteCategory) return "—";
    const cat = TEST_CATEGORIES.find((c) => c.id === stats.favoriteCategory);
    return cat ? (lang === "zh" ? cat.zh : lang === "ja" ? cat.zh : cat.en) : stats.favoriteCategory;
  }, [stats, lang]);

  const favCatIcon = useMemo(() => {
    if (!stats?.favoriteCategory) return "—";
    const cat = TEST_CATEGORIES.find((c) => c.id === stats.favoriteCategory);
    return cat?.icon || "—";
  }, [stats]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{t.title}</h1>
              <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 mt-1">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => { load(); }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/80 hover:scale-105 transition-transform"
              >
                <RefreshCw className="h-3.5 w-3.5 text-[#2C2C2C]/60 dark:text-white/60" />
              </button>
              <button
                onClick={toggleLang}
                className="flex h-8 items-center justify-center rounded-full border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/80 px-3 text-xs font-semibold backdrop-blur-sm"
              >
                {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
              </button>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-[#4A6FA5]" />
              <span className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.totalTests}</span>
            </div>
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{stats?.totalTests ?? 0}</div>
            <span className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">{stats?.uniqueTests ?? 0} unique</span>
          </Card>
          <Card className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-[#E0607A]" />
              <span className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.avgScore}</span>
            </div>
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{stats?.averageScore ?? 0}%</div>
          </Card>
          <Card className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-4 w-4 text-[#C4783C]" />
              <span className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.streak}</span>
            </div>
            <div className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{stats?.streakDays ?? 0}</div>
            <span className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">{t.days}</span>
          </Card>
          <Card className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-[#88619A]" />
              <span className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.favCategory}</span>
            </div>
            <div className="text-lg font-bold text-[#2C2C2C] dark:text-white">{favCatIcon} {favCatName}</div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
                <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.recentActivity}</h3>
              </div>
              <Link href="/history/" className="text-xs text-[#2C2C2C]/40 dark:text-white/40 hover:text-[#2C2C2C] dark:hover:text-white transition-colors">
                {t.viewAll} →
              </Link>
            </div>
            {entries.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-[#2C2C2C]/40 dark:text-white/40 mb-2">{t.noActivity}</p>
                <Link href="/" className="text-xs text-[#4A6FA5] hover:underline">{t.startFirst}</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {entries.slice(0, 5).map((entry, i) => {
                  const test = TEST_REGISTRY.find((t) => t.id === entry.testId);
                  const cat = TEST_CATEGORIES.find((c) => c.id === test?.category);
                  return (
                    <div key={entry.testId + entry.timestamp} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ backgroundColor: (test?.category && CATEGORY_COLORS[test.category] || "#888") + "15" }}>
                        {test?.icon || "🧪"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#2C2C2C] dark:text-white truncate">
                          {lang === "zh" || lang === "ja" ? entry.testName : entry.testNameEn || entry.testName}
                        </div>
                        <div className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">
                          {cat ? (lang === "zh" ? cat.zh : lang === "ja" ? cat.zh : cat.en) : ""}
                        </div>
                      </div>
                      <span className="text-[10px] text-[#2C2C2C]/30 dark:text-white/30 flex-shrink-0">
                        {timeAgo(entry.timestamp, lang)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </motion.div>

        {/* Category Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.categoryDist}</h3>
            </div>
            <SimplePieChart data={categoryData} lang={lang} />
          </Card>
        </motion.div>

        {/* Score Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.scoreTrend}</h3>
            </div>
            <ScoreTimeline entries={entries} lang={lang} />
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-4 w-4 text-[#E8A838]" />
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.achievements}</h3>
              <Badge className="text-[10px] ml-auto">{earnedAchievements.length}/{achievements.length}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {achievements.map((a) => {
                const earned = earnedAchievements.some((e) => e.id === a.id);
                const label = a[lang as "zh" | "en" | "ja"] || a.en;
                return (
                  <div
                    key={a.id}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-xl p-3 text-center transition-all",
                      earned
                        ? "bg-[#E8A838]/10 border border-[#E8A838]/20"
                        : "bg-[#2C2C2C]/3 dark:bg-white/3 border border-[#2C2C2C]/5 dark:border-white/5 opacity-40"
                    )}
                  >
                    <span className="text-xl">{a.icon}</span>
                    <span className="text-[10px] font-medium text-[#2C2C2C] dark:text-white">{label}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <Card className="p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-[#2C2C2C]/8 dark:border-white/8 mb-6">
            <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-4">{t.quickActions}</h3>
            <div className="grid grid-cols-3 gap-3">
              <Link
                href="/history/"
                className="flex flex-col items-center gap-2 rounded-xl border border-[#2C2C2C]/8 dark:border-white/8 p-4 hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
              >
                <RefreshCw className="h-5 w-5 text-[#2C2C2C]/60 dark:text-white/60" />
                <span className="text-xs font-medium text-[#2C2C2C] dark:text-white">{t.retake}</span>
              </Link>
              <Link
                href="/compare/"
                className="flex flex-col items-center gap-2 rounded-xl border border-[#2C2C2C]/8 dark:border-white/8 p-4 hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
              >
                <BarChart3 className="h-5 w-5 text-[#2C2C2C]/60 dark:text-white/60" />
                <span className="text-xs font-medium text-[#2C2C2C] dark:text-white">{t.compare}</span>
              </Link>
              <button
                onClick={() => exportAllData()}
                className="flex flex-col items-center gap-2 rounded-xl border border-[#2C2C2C]/8 dark:border-white/8 p-4 hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
              >
                <Download className="h-5 w-5 text-[#2C2C2C]/60 dark:text-white/60" />
                <span className="text-xs font-medium text-[#2C2C2C] dark:text-white">{t.exportData}</span>
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Data Manager Toggle */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <button
            onClick={() => setShowDataManager(!showDataManager)}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 py-3 text-sm font-medium text-[#2C2C2C] dark:text-white hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors mb-6"
          >
            📦 {t.dataManager}
          </button>
          <AnimatePresence>
            {showDataManager && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-10"
              >
                <DataManager lang={lang} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
