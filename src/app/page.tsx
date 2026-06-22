"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/HeroSection";
import { WorldCard } from "@/components/WorldCard";
import { ExploreSection } from "@/components/ExploreSection";
import { WORLDS, TEST_CATEGORIES, CATEGORY_COLORS } from "@/lib/constants";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TestCard } from "@/components/TestCard";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeSelector } from "@/components/theme-selector";
import { DailyTest } from "@/components/daily-test";
import type { Lang } from "@/lib/types";
import { QuickStart } from "@/components/quick-start";
import { EmailSignup } from "@/components/email-signup";

// Animated counter component
function AnimatedNumber({ target, label, icon, delay = 0 }: { target: number; label: string; icon: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const duration = 1200;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, target, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="flex flex-col items-center gap-1"
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-3xl font-bold text-[#2C2C2C] dark:text-white sm:text-4xl">{count}</span>
      <span className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{label}</span>
    </motion.div>
  );
}

// How it works step
function HowItWorksStep({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center text-center gap-3"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2C2C2C]/5 dark:bg-white/10 text-2xl">{icon}</div>
      <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{title}</h3>
      <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50 max-w-[200px]">{desc}</p>
    </motion.div>
  );
}

export default function Home() {
  const [selectedWorld, setSelectedWorld] = useState<string | undefined>();
  const [worldCategories, setWorldCategories] = useState<string[]>([]);
  const [lang, setLang] = useState<Lang>(() => { try { const saved = localStorage.getItem("quiz-platform-lang") as Lang; return (saved === "zh" || saved === "en" || saved === "ja") ? saved : "zh"; } catch { return "zh"; } });

  const toggleLang = useCallback(() => {
    setLang((l) => { const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; });
  }, []);

  const handleWorldSelect = useCallback((worldId: string) => {
    const world = WORLDS.find((w) => w.id === worldId);
    if (world) {
      setSelectedWorld(worldId);
      setWorldCategories(world.categories);
      const el = document.getElementById("explore");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleCategoryClick = useCallback((catId: string) => {
    setSelectedWorld(undefined);
    setWorldCategories([catId]);
    const el = document.getElementById("explore");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const testCount = TEST_REGISTRY.length;

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      <ThemeToggle />
      <ThemeSelector lang={lang} />
      <button
        onClick={toggleLang}
        className="fixed right-16 top-4 z-50 flex h-10 items-center justify-center rounded-full border border-[#2C2C2C]/10 bg-white/80 px-3 text-xs font-semibold backdrop-blur-sm transition-all hover:scale-110 dark:border-white/10 dark:bg-[#1a1a1a]/80 text-[#2C2C2C] dark:text-white"
        aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
      >
        {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
      </button>
      <QuickStart lang={lang} />
      <HeroSection lang={lang} />

      {/* Stats Banner */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-3 gap-4">
          <AnimatedNumber target={testCount} label={lang === "zh" ? "心理测试" : lang === "ja" ? "心理テスト" : "Psych Tests"} icon="🧪" delay={0} />
          <AnimatedNumber target={9} label={lang === "zh" ? "测试维度" : lang === "ja" ? "テスト次元" : "Dimensions"} icon="🧭" delay={200} />
          <AnimatedNumber target={4} label={lang === "zh" ? "内在世界" : lang === "ja" ? "内なる世界" : "Inner Worlds"} icon="🌙" delay={400} />
        </div>
      </section>

      {/* Daily Test Recommendation */}
      <DailyTest lang={lang} />

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg font-bold text-[#2C2C2C] dark:text-white mb-10"
        >
          {lang === "zh" ? "三步探索自己" : lang === "ja" ? "3ステップで自分を知る" : "Three Steps to Self-Discovery"}
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          <HowItWorksStep
            icon="🎯"
            title={lang === "zh" ? "选择测试" : lang === "ja" ? "テストを選ぶ" : "Choose a Test"}
            desc={lang === "zh" ? "从 9 大维度 118 个测试中，选一个与你此刻相关的。" : lang === "ja" ? "9つの次元から118個のテストを選び、今あなたに響くものを。" : "Pick from 118 tests across 9 dimensions — whatever speaks to you right now."}
            index={0}
          />
          <HowItWorksStep
            icon="✍️"
            title={lang === "zh" ? "回答问题" : lang === "ja" ? "質問に答える" : "Answer Questions"}
            desc={lang === "zh" ? "诚实作答，没有对错之分。每道题都是一次自我对话。" : lang === "ja" ? "正直に答えよう。正解も不正解もない。一つ一つの質問が自分との対話。" : "Answer honestly — no right or wrong. Each question is a conversation with yourself."}
            index={1}
          />
          <HowItWorksStep
            icon="🪞"
            title={lang === "zh" ? "探索结果" : lang === "ja" ? "結果を探す" : "Discover Results"}
            desc={lang === "zh" ? "看到你的内在画像，理解自己的模式与力量。" : lang === "ja" ? "あなたの内なる姿を見て、自分のパターンと強みを理解する。" : "See your inner portrait. Understand your patterns and strengths."}
            index={2}
          />
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {TEST_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all hover:scale-105 border"
              style={{
                borderColor: CATEGORY_COLORS[cat.id] + "40",
                color: CATEGORY_COLORS[cat.id],
                backgroundColor: CATEGORY_COLORS[cat.id] + "08",
              }}
            >
              <span>{cat.icon}</span>
              <span>{lang === "zh" ? cat.zh : cat.en}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="worlds" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
            {lang === "zh" ? "四个内在世界" : lang === "ja" ? "四つの内なる世界" : "Four Inner Worlds"}
          </h2>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
            {lang === "zh" ? "选择一个与你共振的世界，开始探索。" : lang === "ja" ? "あなたと共鳴する世界を選び、探求を始めよう。" : "Choose a world that resonates with you and begin exploring."}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WORLDS.map((world, i) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <WorldCard world={world} onSelect={handleWorldSelect} lang={lang} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">{lang === "zh" ? "从这里开始" : lang === "ja" ? "ここから始めよう" : "Start Here"}</h2>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">{lang === "zh" ? "不知道选什么？这几个测试最受欢迎。" : lang === "ja" ? "どれを選べばいい？こちらが最も人気のあるテスト。" : "Not sure where to begin? These are our most popular tests."}</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["big-five", "mbti", "enneagram", "love-language", "emotional-intelligence", "anxiety"].map((id, i) => {
            const test = TEST_REGISTRY.find((t) => t.id === id);
            if (!test) return null;
            return <TestCard key={test.id} test={test} index={i} lang={lang} />;
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 text-center">
          <a href="#explore" className="inline-flex h-10 items-center justify-center rounded-full border border-[#2C2C2C]/20 dark:border-white/20 px-6 text-sm font-medium text-[#2C2C2C] dark:text-white transition-colors hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5">{lang === "zh" ? `查看全部 ${testCount} 个测试 →` : lang === "ja" ? `全${testCount}個のテストを見る →` : `Explore all ${testCount} tests →`}</a>
        </motion.div>
      </section>

      <ExploreSection
        selectedWorld={selectedWorld}
        worldCategories={worldCategories}
        lang={lang}
      />

      {/* Email Signup CTA */}
      <EmailSignup lang={lang} />

      <footer className="border-t border-[#2C2C2C]/8 dark:border-white/8 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="text-3xl mb-4 block">🌙</span>
          <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 mb-4">{lang === "zh" ? "这里不是诊断，而是一面帮助你靠近自己的镜子。" : lang === "ja" ? "これは診断ではありません — 自分に近づくための鏡です。" : "This isn't a diagnosis — it's a mirror to help you get closer to yourself."}</p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#2C2C2C]/30 dark:text-white/30 flex-wrap">
            <Link href="/compat/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "关系配对" : lang === "ja" ? "相性" : "Compatibility"}</Link>
            <span>·</span>
            <Link href="/history/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "测试历史" : lang === "ja" ? "履歴" : "History"}</Link>
            <span>·</span>
            <Link href="/bookmarks/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "收藏" : lang === "ja" ? "ブックマーク" : "Bookmarks"}</Link>
            <span>·</span>
            <Link href="/compare/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "对比" : lang === "ja" ? "比較" : "Compare"}</Link>
            <span>·</span>
            <Link href="/stats/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "统计" : lang === "ja" ? "統計" : "Stats"}</Link>
            <span>·</span>
            <Link href="/analytics/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "分析" : lang === "ja" ? "分析" : "Analytics"}</Link>
            <span>·</span>
            <Link href="/trends/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "趋势" : lang === "ja" ? "トレンド" : "Trends"}</Link>
            <span>·</span>
            <Link href="/changelog/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "更新日志" : lang === "ja" ? "更新履歴" : "Changelog"}</Link>
            <span>·</span>
            <Link href="/dashboard/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "仪表板" : lang === "ja" ? "ダッシュボード" : "Dashboard"}</Link>
            <span>·</span>
            <Link href="/about/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "关于" : lang === "ja" ? "概要" : "About"}</Link>
            <span>·</span>
            <Link href="/faq/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "常见问题" : lang === "ja" ? "FAQ" : "FAQ"}</Link>
            <span>·</span>
            <Link href="/privacy/" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">{lang === "zh" ? "隐私政策" : lang === "ja" ? "プライバシー" : "Privacy"}</Link>
            <span>·</span>
            <a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C2C2C]/60 dark:hover:text-white/60 transition-colors">GitHub ⭐</a>
          </div>
          <p className="mt-6 text-[10px] text-[#2C2C2C]/20 dark:text-white/20">Made with 💛 by 11suixing11</p>
        </div>
      </footer>
    </div>
  );
}
