"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import type { Lang } from "@/lib/types";

const VERSIONS = [
  {
    version: "v0.3.0",
    date: "2026-06-21",
    zh: {
      title: "功能爆发",
      features: [
        "123 个心理测试（+10 新测试）",
        "测试详情页 — 预览题目、相关测试",
        "测试对比 — 左右对比两次测试结果",
        "每日测试推荐 — 每天推荐一个新测试",
        "书签系统 — 收藏想做的测试",
        "Changelog 页面 — 版本历史",
        "GitHub Actions CI/CD 自动部署",
      ],
    },
    en: {
      title: "Feature Explosion",
      features: [
        "123 psychological tests (+10 new)",
        "Test detail pages — preview questions, related tests",
        "Test comparison — compare two results side by side",
        "Daily test recommendation — a new test each day",
        "Bookmark system — save tests for later",
        "Changelog page — version history",
        "GitHub Actions CI/CD auto-deploy",
      ],
    },
  },
  {
    version: "v0.2.0",
    date: "2026-06-20",
    zh: {
      title: "全面升级",
      features: [
        "深色模式 — 全组件暗色支持",
        "完整中英文 — 118 个测试描述全部重写",
        "PWA 支持 — manifest.json + 安装提示",
        "测试历史 — 浏览所有过往结果",
        "个人统计面板 — 测试完成统计",
        "滑动手势 — 手机端左右滑动切换题目",
        "里程碑彩纸 — 25%/50%/75% 进度庆祝",
        "智能推荐 — 结果页推荐相关测试",
        "Web Share API — 原生分享功能",
        "隐私分析 — 本地页面访问统计",
        "SEO 优化 — JSON-LD + sitemap + robots.txt",
        "OG 图片 — 社交分享预览",
        "博客文章 — Dev.to + 掘金双语版本",
      ],
    },
    en: {
      title: "Major Upgrade",
      features: [
        "Dark mode — full dark theme support",
        "Complete i18n — 118 test descriptions rewritten",
        "PWA support — manifest.json + install prompt",
        "Test history — browse all past results",
        "Personal stats dashboard — test completion analytics",
        "Swipe gestures — mobile swipe to navigate questions",
        "Milestone confetti — celebrate at 25%/50%/75%",
        "Smart recommendations — related tests on result page",
        "Web Share API — native sharing on mobile",
        "Privacy analytics — local page view tracking",
        "SEO optimization — JSON-LD + sitemap + robots.txt",
        "OG image — social sharing preview",
        "Blog posts — Dev.to + Juejin bilingual versions",
      ],
    },
  },
  {
    version: "v0.1.0",
    date: "2026-05-15",
    zh: {
      title: "首次发布",
      features: [
        "113 个心理测试上线",
        "9 大测试维度",
        "4 个内在世界（梦境感知者、理性建筑师、关系连接者、行动探索者）",
        "MBTI 关系配对功能",
        "中英文双语支持",
        "Framer Motion 动画",
        "键盘快捷键支持",
        "localStorage 结果保存",
        "GitHub Pages 静态部署",
      ],
    },
    en: {
      title: "Initial Launch",
      features: [
        "113 psychological tests launched",
        "9 test dimensions",
        "4 inner worlds (Dreamers, Analysts, Connectors, Explorers)",
        "MBTI relationship matching",
        "Chinese/English bilingual support",
        "Framer Motion animations",
        "Keyboard shortcuts",
        "localStorage result persistence",
        "GitHub Pages static deployment",
      ],
    },
  },
];

export default function ChangelogPage() {
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });

  const toggleLang = useCallback(() => {
    setLang((l) => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; });
  }, []);

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

      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-12 sm:px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-[#2C2C2C] dark:text-white mb-2">
          {lang === "zh" ? "更新日志" : "Changelog"}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm text-[#2C2C2C]/60 dark:text-white/60 mb-10">
          {lang === "zh" ? "记录每一次让这个平台变得更好的改变。" : "Every change that makes this platform a little better."}
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2C2C2C]/10 dark:bg-white/10" />

          {VERSIONS.map((v, i) => (
            <motion.div
              key={v.version}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#2C2C2C] dark:bg-white border-2 border-[#FAFAF8] dark:border-[#0a0a0a]" />

              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="text-lg font-bold text-[#2C2C2C] dark:text-white">{v.version}</h2>
                <span className="text-xs text-[#2C2C2C]/40 dark:text-white/40">{v.date}</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2C2C2C]/80 dark:text-white/80 mb-3">{v[lang].title}</h3>
              <ul className="space-y-1.5">
                {v[lang].features.map((f, j) => (
                  <li key={j} className="text-sm text-[#2C2C2C]/60 dark:text-white/60 flex items-start gap-2">
                    <span className="text-[#2C2C2C]/30 dark:text-white/30 mt-0.5">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
