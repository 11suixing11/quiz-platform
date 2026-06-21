"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trash2, Clock, Globe, BarChart3 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEST_REGISTRY, type TestRegistryEntry } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HistoryEntry {
  testId: string;
  registry: TestRegistryEntry;
  result: Record<string, unknown>;
  answers: number[];
  testName: string;
  testNameEn: string;
  timestamp: number;
}

type Lang = "zh" | "en" | "ja";

function getResultLabel(result: Record<string, unknown>, _lang: Lang): string {
  const key = (result.type ?? result.dominant ?? result.primary ?? "") as string;
  if (!key) return "";
  // Try to get a nice label from archetypes or narrative
  if (result.archetype && typeof result.archetype === "string") return result.archetype;
  return key;
}

export default function HistoryPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [mounted, setMounted] = useState(false);

  const loadEntries = useCallback(() => {
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
    } catch {}
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
    loadEntries();
  }, [loadEntries]);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  const handleClearAll = useCallback(() => {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("quiz-result-")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => localStorage.removeItem(k));
    } catch {}
    setEntries([]);
    setShowConfirm(false);
  }, []);

  const formatDate = useCallback((ts: number) => {
    const d = new Date(ts);
    if (lang === "zh") {
      return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
    }
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }, [lang]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]" />
    );
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

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-3 block">📋</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? "测试历史" : "Test History"}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
            {lang === "zh"
              ? `你已完成 ${entries.length} 个测试`
              : `You have completed ${entries.length} test${entries.length !== 1 ? "s" : ""}`}
          </p>
          <Link
            href="/compare/"
            className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors"
          >
            <BarChart3 className="size-3.5" />
            {lang === "zh" ? "对比测试结果" : "Compare Results"}
          </Link>
        </motion.div>

        {entries.length === 0 ? (
          /* Empty state */
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
              🕰️
            </motion.span>
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-2">
              {lang === "zh" ? "还没有测试记录" : "No test history yet"}
            </h2>
            <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 max-w-sm mb-8">
              {lang === "zh"
                ? "完成一些测试后，你的结果会出现在这里。"
                : "Complete some tests and your results will appear here."}
            </p>
            <Link
              href="/#explore"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-8 h-11 text-sm"
              )}
            >
              {lang === "zh" ? "探索测试" : "Explore Tests"}
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Clear all button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-end mb-6"
            >
              {!showConfirm ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-[#2C2C2C]/40 dark:text-white/40 hover:text-red-500 dark:hover:text-red-400 gap-1.5"
                  onClick={() => setShowConfirm(true)}
                >
                  <Trash2 className="size-3.5" />
                  {lang === "zh" ? "清除所有记录" : "Clear All History"}
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-xs text-[#2C2C2C]/60 dark:text-white/60">
                    {lang === "zh" ? "确定清除所有记录？" : "Clear all history?"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => setShowConfirm(false)}
                  >
                    {lang === "zh" ? "取消" : "Cancel"}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="text-xs"
                    onClick={handleClearAll}
                  >
                    {lang === "zh" ? "确认清除" : "Confirm"}
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {/* Card grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {entries.map((entry, i) => {
                  const resultLabel = getResultLabel(entry.result, lang);
                  const categoryColor = CATEGORY_COLORS[entry.registry.category] ?? "#6B5B95";
                  const categoryName = entry.registry.category;

                  return (
                    <motion.div
                      key={entry.testId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
                      layout
                    >
                      <Link href={`/result/${entry.testId}/`} className="block group">
                        <Card className="relative overflow-hidden p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#2C2C2C]/5 dark:hover:shadow-black/20 hover:-translate-y-0.5 border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414]">
                          {/* Category color accent bar */}
                          <div
                            className="absolute top-0 left-0 right-0 h-1 opacity-60"
                            style={{ backgroundColor: categoryColor }}
                          />

                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className="flex size-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                              style={{ backgroundColor: categoryColor + "15" }}
                            >
                              {entry.registry.icon}
                            </div>

                            {/* Content */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="truncate text-sm font-semibold text-[#2C2C2C] dark:text-white">
                                  {lang === "zh" ? entry.registry.zh.name : entry.registry.en.name}
                                </h3>
                              </div>

                              {resultLabel && (
                                <p className="truncate text-xs font-medium mb-2" style={{ color: categoryColor }}>
                                  {resultLabel}
                                </p>
                              )}

                              <div className="flex items-center gap-3">
                                <Badge
                                  variant="secondary"
                                  className="text-[10px] font-normal px-1.5 py-0"
                                  style={{
                                    backgroundColor: categoryColor + "12",
                                    color: categoryColor,
                                    border: "none",
                                  }}
                                >
                                  {lang === "zh"
                                    ? (categoryName === "personality" ? "自我认知"
                                      : categoryName === "emotion" ? "情绪图谱"
                                      : categoryName === "relationship" ? "关系动力"
                                      : categoryName === "career" ? "职业原型"
                                      : categoryName === "intelligence" ? "认知模式"
                                      : categoryName === "lifestyle" ? "生活哲学"
                                      : categoryName === "social" ? "社交智慧"
                                      : categoryName === "mental" ? "内在平衡"
                                      : categoryName)
                                    : categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                                </Badge>
                                <span className="flex items-center gap-1 text-[10px] text-[#2C2C2C]/40 dark:text-white/40">
                                  <Clock className="size-3" />
                                  {formatDate(entry.timestamp)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
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
            <Link href="/#explore" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">
              {lang === "zh" ? "探索测试" : "Explore"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
