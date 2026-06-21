"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BarChart3, ChevronDown, Globe } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TEST_REGISTRY, type TestRegistryEntry } from "@/lib/test-registry";
import { cn } from "@/lib/utils";
import type { Lang, QuizResult } from "@/lib/types";

interface HistoryEntry {
  testId: string;
  registry: TestRegistryEntry;
  result: QuizResult;
  testName: string;
  testNameEn: string;
  timestamp: number;
}

function getResultLabel(result: QuizResult, _lang: Lang): string {
  const key = (result.type ?? result.dominant ?? result.primary ?? "") as string;
  return key;
}

function getDimensionScores(result: QuizResult): Record<string, number> {
  if (result.percentages) return result.percentages;
  if (result.scores) return result.scores;
  if (result.dimensions) {
    const out: Record<string, number> = {};
    for (const d of result.dimensions) out[d.name] = d.score;
    return out;
  }
  return {};
}

const COMPARISON_TEXTS: Record<string, { zh: string; en: string }> = {
  high_vs_low: {
    zh: "你在第一个测试中的得分明显高于第二个，这表明你在这方面的特质更为突出。",
    en: "You scored notably higher in the first test, suggesting stronger traits in that area.",
  },
  similar: {
    zh: "两个测试的维度得分非常接近，说明你在这两方面有着均衡的表现。",
    en: "The dimension scores are quite similar, indicating balanced performance in both areas.",
  },
  different_profile: {
    zh: "两个测试展现了不同的特质轮廓，每个维度上都有各自的优势。",
    en: "The two tests reveal different profiles, each with strengths in different dimensions.",
  },
};

function getComparisonText(key: string, lang: Lang): string {
  const texts = COMPARISON_TEXTS[key];
  if (!texts) return "";
  const effectiveLang = lang === "ja" ? "en" : lang;
  return texts[effectiveLang as keyof typeof texts] ?? texts.en;
}

function generateComparison(
  entry1: HistoryEntry,
  entry2: HistoryEntry,
  lang: Lang
): string {
  const scores1 = getDimensionScores(entry1.result);
  const scores2 = getDimensionScores(entry2.result);
  const keys1 = Object.keys(scores1);
  const keys2 = Object.keys(scores2);

  if (keys1.length === 0 || keys2.length === 0) {
    return lang === "zh"
      ? "这两个测试结果没有足够的维度数据进行详细比较。"
      : "These two test results don't have enough dimension data for a detailed comparison.";
  }

  const avg1 = keys1.reduce((s, k) => s + (scores1[k] ?? 0), 0) / keys1.length;
  const avg2 = keys2.reduce((s, k) => s + (scores2[k] ?? 0), 0) / keys2.length;
  const diff = Math.abs(avg1 - avg2);

  if (diff < 10) {
    return getComparisonText("similar", lang);
  } else if (avg1 > avg2) {
    return getComparisonText("high_vs_low", lang);
  } else {
    return getComparisonText("different_profile", lang);
  }
}

function DimensionBar({
  label,
  value1,
  value2,
  color1,
  color2,
  index,
}: {
  label: string;
  value1: number;
  value2: number;
  color1: string;
  color2: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between text-xs">
        <span className="font-medium text-[#2C2C2C] dark:text-white">{label}</span>
        <span className="text-[#2C2C2C]/50 dark:text-white/50">
          {Math.round(value1)}% vs {Math.round(value2)}%
        </span>
      </div>
      <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-[#2C2C2C]/5 dark:bg-white/5">
        <motion.div
          className="rounded-full"
          style={{ backgroundColor: color1 }}
          initial={{ width: 0 }}
          animate={{ width: `${value1}%` }}
          transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="rounded-full"
          style={{ backgroundColor: color2 }}
          initial={{ width: 0 }}
          animate={{ width: `${value2}%` }}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function TestSelector({
  entries,
  selected,
  onSelect,
  lang,
  label,
  color,
}: {
  entries: HistoryEntry[];
  selected: HistoryEntry | null;
  onSelect: (entry: HistoryEntry) => void;
  lang: Lang;
  label: string;
  color: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <p className="text-xs font-medium text-[#2C2C2C]/60 dark:text-white/60 mb-2">{label}</p>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 bg-white dark:bg-[#141414] px-4 py-3 text-left transition-colors hover:border-[#2C2C2C]/20 dark:hover:border-white/20"
      >
        {selected ? (
          <>
            <span className="text-xl">{selected.registry.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#2C2C2C] dark:text-white truncate">
                {lang === "zh" ? selected.registry.zh.name : selected.registry.en.name}
              </p>
              <p className="text-xs truncate" style={{ color }}>
                {getResultLabel(selected.result, lang)}
              </p>
            </div>
          </>
        ) : (
          <span className="text-sm text-[#2C2C2C]/40 dark:text-white/40">
            {lang === "zh" ? "选择一个测试…" : "Select a test…"}
          </span>
        )}
        <ChevronDown className={cn("size-4 text-[#2C2C2C]/30 dark:text-white/30 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 mt-1 w-full max-h-60 overflow-auto rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 bg-white dark:bg-[#141414] shadow-lg"
          >
            {entries.map((entry) => (
              <button
                key={entry.testId + entry.timestamp}
                onClick={() => { onSelect(entry); setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg">{entry.registry.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#2C2C2C] dark:text-white truncate">
                    {lang === "zh" ? entry.registry.zh.name : entry.registry.en.name}
                  </p>
                  <p className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ComparePage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [selected1, setSelected1] = useState<HistoryEntry | null>(null);
  const [selected2, setSelected2] = useState<HistoryEntry | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}

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
                registry,
                result: data.result,
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
      if (stored.length >= 2) {
        setSelected1(stored[0]);
        setSelected2(stored[1]);
      } else if (stored.length === 1) {
        setSelected1(stored[0]);
      }
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  const color1 = "#6B5B95";
  const color2 = "#E94F37";

  const dimensionComparison = useMemo(() => {
    if (!selected1 || !selected2) return [];
    const scores1 = getDimensionScores(selected1.result);
    const scores2 = getDimensionScores(selected2.result);
    const allKeys = [...new Set([...Object.keys(scores1), ...Object.keys(scores2)])];
    return allKeys.map((key) => ({
      label: key,
      value1: scores1[key] ?? 0,
      value2: scores2[key] ?? 0,
    }));
  }, [selected1, selected2]);

  const comparisonText = useMemo(() => {
    if (!selected1 || !selected2) return "";
    return generateComparison(selected1, selected2, lang);
  }, [selected1, selected2, lang]);

  if (!mounted) {
    return <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]" />;
  }

  if (entries.length < 2) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
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

        <main className="mx-auto max-w-2xl px-4 py-20 text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="text-6xl mb-6 block"
          >
            🔍
          </motion.span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white mb-3">
            {lang === "zh" ? "需要更多测试结果" : "More Results Needed"}
          </h1>
          <p className="text-sm text-[#2C2C2C]/60 dark:text-white/60 max-w-md mx-auto mb-8">
            {lang === "zh"
              ? `你目前有 ${entries.length} 个测试结果。至少需要 2 个测试结果才能进行比较。`
              : `You have ${entries.length} result${entries.length !== 1 ? "s" : ""}. Complete at least 2 tests to compare them.`}
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "default" }), "rounded-full px-8 h-11 text-sm")}
            >
              {lang === "zh" ? "去探索测试" : "Explore Tests"}
            </Link>
            {entries.length > 0 && (
              <Link
                href="/history/"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full px-8 h-11 text-sm")}
              >
                {lang === "zh" ? "查看历史" : "View History"}
              </Link>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
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
          <Link href="/history/" className="text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors">
            {lang === "zh" ? "测试历史" : "History"}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleLang} aria-label="Toggle language">
            <Globe className="size-4 text-[#2C2C2C] dark:text-white" />
          </Button>
        </div>
      </motion.header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-3 block">⚖️</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? "测试结果对比" : "Compare Results"}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
            {lang === "zh" ? "选择两个测试，查看维度对比分析" : "Select two tests to compare their dimension profiles"}
          </p>
        </motion.div>

        {/* Selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          <TestSelector
            entries={entries}
            selected={selected1}
            onSelect={setSelected1}
            lang={lang}
            label={lang === "zh" ? "测试 A" : "Test A"}
            color={color1}
          />
          <TestSelector
            entries={entries}
            selected={selected2}
            onSelect={setSelected2}
            lang={lang}
            label={lang === "zh" ? "测试 B" : "Test B"}
            color={color2}
          />
        </motion.div>

        {/* Comparison Results */}
        {selected1 && selected2 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selected1.testId + selected2.testId + selected1.timestamp + selected2.timestamp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Side by side cards */}
              <div className="grid grid-cols-2 gap-4">
                {[selected1, selected2].map((entry, idx) => {
                  const c = idx === 0 ? color1 : color2;
                  return (
                    <motion.div
                      key={entry.testId + idx}
                      initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    >
                      <Card className="p-5 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="flex size-10 shrink-0 items-center justify-center rounded-xl text-xl"
                            style={{ backgroundColor: c + "15" }}
                          >
                            {entry.registry.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white truncate">
                              {lang === "zh" ? entry.registry.zh.name : entry.registry.en.name}
                            </h3>
                            <p className="text-xs font-medium truncate" style={{ color: c }}>
                              {getResultLabel(entry.result, lang) || (lang === "zh" ? "结果" : "Result")}
                            </p>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">
                          {new Date(entry.timestamp).toLocaleDateString()}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dimension comparison */}
              {dimensionComparison.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Card className="p-6 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                    <div className="flex items-center gap-2 mb-5">
                      <BarChart3 className="size-4 text-[#2C2C2C]/50 dark:text-white/50" />
                      <h2 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">
                        {lang === "zh" ? "维度对比" : "Dimension Comparison"}
                      </h2>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-[10px]">
                      <span className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full" style={{ backgroundColor: color1 }} />
                        {lang === "zh" ? "测试 A" : "Test A"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full" style={{ backgroundColor: color2 }} />
                        {lang === "zh" ? "测试 B" : "Test B"}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {dimensionComparison.map((dim, i) => (
                        <DimensionBar
                          key={dim.label}
                          label={dim.label}
                          value1={dim.value1}
                          value2={dim.value2}
                          color1={color1}
                          color2={color2}
                          index={i}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Narrative comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="p-6 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                  <h2 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-3">
                    {lang === "zh" ? "对比分析" : "Comparison Analysis"}
                  </h2>
                  <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 leading-relaxed">
                    {comparisonText}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <footer className="border-t border-[#2C2C2C]/8 dark:border-white/8 px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30 dark:text-white/30">
            <Link href="/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "返回首页" : "Home"}
            </Link>
            <span>·</span>
            <Link href="/history/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "测试历史" : "Test History"}
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
