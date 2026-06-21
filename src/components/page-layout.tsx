"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import type { Lang } from "@/lib/types";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  titleJa?: string;
  icon?: string;
  subtitle?: string;
  subtitleJa?: string;
}

export function PageLayout({
  children,
  title,
  titleJa,
  icon,
  subtitle,
  subtitleJa,
}: PageLayoutProps) {
  const [lang, setLang] = useState<Lang>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try {
        localStorage.setItem("quiz-platform-lang", next);
      } catch {}
      return next;
    });
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]" />;
  }

  const displayTitle =
    lang === "ja" && titleJa ? titleJa : lang === "en" ? title : title;
  const displaySubtitle =
    lang === "ja" && subtitleJa
      ? subtitleJa
      : lang === "en"
        ? subtitle
        : subtitle;

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 border-b border-[#2C2C2C]/8 dark:border-white/8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] dark:text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="size-4" />
          <span>
            {lang === "zh"
              ? "认识你自己"
              : lang === "ja"
                ? "自分を知る"
                : "Know Yourself"}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            <Globe className="size-4 text-[#2C2C2C] dark:text-white" />
          </Button>
        </div>
      </motion.header>

      <PageTransition>
        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            {icon && <span className="text-4xl mb-3 block">{icon}</span>}
            <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
              {displayTitle}
            </h1>
            {displaySubtitle && (
              <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
                {displaySubtitle}
              </p>
            )}
          </motion.div>

          {children}
        </main>
      </PageTransition>

      {/* Footer */}
      <footer className="border-t border-[#2C2C2C]/8 dark:border-white/8 px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30 dark:text-white/30">
            <Link
              href="/"
              className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors"
            >
              {lang === "zh" ? "返回首页" : lang === "ja" ? "ホーム" : "Home"}
            </Link>
            <span>·</span>
            <Link
              href="/#explore"
              className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors"
            >
              {lang === "zh"
                ? "探索测试"
                : lang === "ja"
                  ? "テストを探す"
                  : "Explore"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
