"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Lang } from "@/lib/types";

interface HeroSectionProps {
  lang?: Lang;
}

export function HeroSection({ lang = "zh" }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6B5B95]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00BFA5]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8D5B7]/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        {/* Brand mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center justify-center"
        >
          <span className="text-5xl">🌙</span>
        </motion.div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#2C2C2C] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          {lang === "zh" ? "有些自己，要慢慢被看见。" : lang === "ja" ? "自分の中の一部は、ゆっくりと見つけていくもの。" : "Some parts of you take time to be seen."}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-base text-[#2C2C2C]/70 sm:text-lg md:text-xl leading-relaxed dark:text-white/70"
        >
          {lang === "zh" ? (
            <>
              通过人格、情绪与关系叙事，重新理解你的内在模式。
              <br />
              <span className="text-[#2C2C2C]/50 dark:text-white/50">这里不是诊断，而是一面帮助你靠近自己的镜子。</span>
            </>
          ) : lang === "ja" ? (
            <>
              パーソナリティ、感情、関係性の物語を通じて、内なるパターンを再認識する。
              <br />
              <span className="text-[#2C2C2C]/50 dark:text-white/50">これは診断ではなく、自分に近づくための鏡です。</span>
            </>
          ) : (
            <>
              Understand your inner patterns through personality, emotion, and relationship narratives.
              <br />
              <span className="text-[#2C2C2C]/50 dark:text-white/50">Not a diagnosis — just a mirror to help you get closer to yourself.</span>
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#worlds"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#2C2C2C] px-8 text-sm font-medium text-white transition-all hover:bg-[#2C2C2C]/80 hover:shadow-lg hover:shadow-[#2C2C2C]/10 active:scale-[0.98] dark:bg-white dark:text-[#2C2C2C] dark:hover:bg-white/80"
          >
            {lang === "zh" ? "进入内在世界" : lang === "ja" ? "内なる世界へ" : "Enter Your Inner World"}
          </a>
          <Link
            href="/quiz/big-five"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#2C2C2C]/20 px-8 text-sm font-medium text-[#2C2C2C] transition-all hover:bg-[#2C2C2C]/5 hover:border-[#2C2C2C]/30 active:scale-[0.98] dark:border-white/20 dark:text-white dark:hover:bg-white/5"
          >
            {lang === "zh" ? "开始大五人格测试" : lang === "ja" ? "ビッグファイブテストを始める" : "Take the Big Five Test"}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#2C2C2C]/40 dark:text-white/40"
        >
          <span className="text-xs">{lang === "zh" ? "向下探索" : lang === "ja" ? "スクロールして探索" : "Scroll to explore"}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6l4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
