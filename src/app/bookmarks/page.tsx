"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, BookmarkX } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TestCard } from "@/components/TestCard";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/types";

function getBookmarks(): string[] {
  try { return JSON.parse(localStorage.getItem("quiz-platform-bookmarks") || "[]"); } catch { return []; }
}

export default function BookmarksPage() {
  const [lang, setLang] = useState<Lang>(() => { try { const saved = localStorage.getItem("quiz-platform-lang") as Lang; return (saved === "zh" || saved === "en" || saved === "ja") ? saved : "zh"; } catch { return "zh"; } });
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => { setBookmarks(getBookmarks()); }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => { const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; });
  }, []);

  const bookmarkedTests = bookmarks.map((id) => TEST_REGISTRY.find((t) => t.id === id)).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 border-b border-border/40">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] dark:text-white hover:opacity-80">
          <ArrowLeft className="size-4" />
          <span>{lang === "zh" ? "认识你自己" : "Know Yourself"}</span>
        </Link>
        <button onClick={toggleLang} className="text-xs font-semibold text-[#2C2C2C]/60 dark:text-white/60 hover:text-[#2C2C2C] dark:hover:text-white">
          {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
        </button>
      </motion.header>

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-[#2C2C2C] dark:text-white mb-2">
          {lang === "zh" ? "收藏的测试" : "Bookmarked Tests"}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm text-[#2C2C2C]/60 dark:text-white/60 mb-8">
          {lang === "zh" ? "你保存了想稍后再做的测试。" : "Tests you saved to take later."}
        </motion.p>

        {bookmarkedTests.length === 0 ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
            <BookmarkX className="size-12 text-[#2C2C2C]/20 dark:text-white/20 mb-4" />
            <p className="text-sm text-[#2C2C2C]/40 dark:text-white/40 mb-4">{lang === "zh" ? "还没有收藏任何测试" : "No bookmarked tests yet"}</p>
            <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "rounded-xl")}>{lang === "zh" ? "去探索测试" : "Explore Tests"}</Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {bookmarkedTests.map((test, i) => test && (
                <motion.div key={test.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.05 }}>
                  <TestCard test={test} index={i} lang={lang} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
