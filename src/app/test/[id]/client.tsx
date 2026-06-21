"use client";

import { useState, useCallback, useEffect } from "react";
// params passed from server component
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, HelpCircle, Play, Globe, Bookmark, BookmarkCheck } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEST_REGISTRY, getTestById } from "@/lib/test-registry";
import { TEST_CATEGORIES, CATEGORY_COLORS, WORLDS } from "@/lib/constants";
import { loadTestData } from "@/lib/tests";
import { TestCard } from "@/components/TestCard";
import { cn } from "@/lib/utils";
import type { Lang, TestData } from "@/lib/types";
import { TestInsights } from "@/components/test-insights";

function getBookmarks(): string[] {
  try { return JSON.parse(localStorage.getItem("quiz-platform-bookmarks") || "[]"); } catch { return []; }
}
function toggleBookmark(id: string): string[] {
  const bm = getBookmarks();
  const idx = bm.indexOf(id);
  if (idx >= 0) bm.splice(idx, 1); else bm.push(id);
  localStorage.setItem("quiz-platform-bookmarks", JSON.stringify(bm));
  return bm;
}

export default function TestDetailClient({ testId }: { testId: string }) {
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });
  const [testData, setTestData] = useState<TestData | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  const entry = getTestById(testId);
  const color = CATEGORY_COLORS[entry?.category || ""] || "#6B5B95";
  const category = TEST_CATEGORIES.find((c) => c.id === entry?.category);
  const world = WORLDS.find((w) => w.categories.includes(entry?.category || ""));

  useEffect(() => {
    setBookmarks(getBookmarks());
    loadTestData(testId).then((d) => { if (d) setTestData(d); });
  }, [testId]);

  const handleBookmark = useCallback(() => {
    setBookmarks(toggleBookmark(testId));
  }, [testId]);

  const isBookmarked = bookmarks.includes(testId);

  const toggleLang = useCallback(() => {
    setLang((l) => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; });
  }, []);

  if (!entry) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4">
        <span className="text-5xl mb-4">🔍</span>
        <h1 className="text-xl font-bold text-[#2C2C2C] dark:text-white">{lang === "zh" ? "测试未找到" : "Test Not Found"}</h1>
        <Link href="/" className={cn(buttonVariants({ variant: "default" }), "mt-4 rounded-xl")}>{lang === "zh" ? "返回首页" : "Back to Home"}</Link>
      </div>
    );
  }

  const relatedTests = TEST_REGISTRY.filter((t) => t.category === entry.category && t.id !== testId).slice(0, 4);
  const sampleQuestions = testData?.questions.slice(0, 3) || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 border-b border-border/40">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] dark:text-white hover:opacity-80">
          <ArrowLeft className="size-4" />
          <span>{lang === "zh" ? "认识你自己" : "Know Yourself"}</span>
        </Link>
        <button onClick={toggleLang} className="text-xs font-semibold text-[#2C2C2C]/60 dark:text-white/60 hover:text-[#2C2C2C] dark:hover:text-white">
          {lang === "zh" ? "EN" : "中"}
        </button>
      </motion.header>

      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <span className="text-5xl mb-4 block">{entry.icon}</span>
          <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? entry.zh.name : entry.en.name}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60 max-w-md mx-auto">
            {lang === "zh" ? entry.zh.description : entry.en.description}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {category && (
              <Badge variant="secondary" style={{ backgroundColor: color + "15", color }}>
                {category.icon} {lang === "zh" ? category.zh : category.en}
              </Badge>
            )}
            <span className="flex items-center gap-1 text-xs text-[#2C2C2C]/40 dark:text-white/40">
              <HelpCircle className="size-3" /> {entry.questions} {lang === "zh" ? "题" : "questions"}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#2C2C2C]/40 dark:text-white/40">
              <Clock className="size-3" /> {entry.time} {lang === "zh" ? "分钟" : "min"}
            </span>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex gap-3 mb-8">
          <Link href={`/quiz/${testId}/`} className={cn(buttonVariants({ variant: "default" }), "flex-1 h-12 rounded-xl gap-2")} style={{ backgroundColor: color }}>
            <Play className="size-4" /> {lang === "zh" ? "开始测试" : "Start Test"}
          </Link>
          <Button variant="outline" onClick={handleBookmark} className="h-12 rounded-xl gap-2">
            {isBookmarked ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
            {isBookmarked ? (lang === "zh" ? "已收藏" : "Saved") : (lang === "zh" ? "收藏" : "Save")}
          </Button>
        </motion.div>

        {/* World context */}
        {world && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mb-8 p-4 rounded-xl border" style={{ borderColor: world.borderColor, backgroundColor: world.bgLight }}>
            <p className="text-xs text-[#2C2C2C]/60 dark:text-white/60">
              {world.icon} {lang === "zh" ? `属于「${world.zh.title}」世界` : `Part of the "${world.en.title}" world`}
              {" — "}
              {lang === "zh" ? world.zh.hint : world.en.hint}
            </p>
          </motion.div>
        )}

        {/* Test Insights */}
        <TestInsights category={entry.category} lang={lang} />

        {/* Sample Questions */}
        {sampleQuestions.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <h2 className="text-lg font-bold text-[#2C2C2C] dark:text-white mb-4">
              {lang === "zh" ? "题目预览" : "Question Preview"}
            </h2>
            <div className="space-y-3">
              {sampleQuestions.map((q, i) => (
                <Card key={q.id} className="p-4">
                  <p className="text-sm font-medium text-[#2C2C2C] dark:text-white">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white mr-2" style={{ backgroundColor: color }}>
                      {i + 1}
                    </span>
                    {q[lang === "ja" ? "en" : lang] || q.zh}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {(q.options[lang === "ja" ? "en" : lang] || q.options.zh).map((opt: string, j: number) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-full bg-[#2C2C2C]/5 dark:bg-white/10 text-[#2C2C2C]/60 dark:text-white/60">{opt}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related Tests */}
        {relatedTests.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-lg font-bold text-[#2C2C2C] dark:text-white mb-4">
              {lang === "zh" ? "相关测试" : "Related Tests"}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {relatedTests.map((t, i) => (
                <TestCard key={t.id} test={t} index={i} lang={lang} />
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
