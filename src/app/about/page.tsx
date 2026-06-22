"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, Heart, Code, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Lang } from "@/lib/types";

const uiText = {
  zh: {
    title: "关于我们",
    storyTitle: "项目故事",
    story: "Quiz Platform 诞生于一个简单的问题：我们能不能创建一个真正帮助人们理解自己的工具？不是那种娱乐性质的小测试，而是基于心理学研究、真正有深度的自我探索平台。",
    story2: "我们相信，每个人都值得被理解——尤其是被自己理解。当你知道自己的人格模式、情绪习惯和关系风格时，你就拥有了改变的力量。",
    missionTitle: "我们的使命",
    mission: "让高质量的心理自我探索工具免费、易用、对每个人开放。我们不是诊断工具，而是一面镜子，帮助你更靠近真实的自己。",
    teamTitle: "贡献者",
    teamDesc: "这是一个开源项目，由社区驱动。感谢每一位贡献者。",
    leadDev: "主要开发者",
    leadName: "11suixing11",
    leadRole: "全栈开发 · 心理学研究 · 设计",
    contributors: "社区贡献者",
    contributorsDesc: "感谢所有提交反馈、报告 Bug、提出建议的朋友们。",
    techTitle: "技术栈",
    techDesc: "我们使用现代、高性能的技术构建这个平台。",
    openSourceTitle: "开源承诺",
    openSourceDesc: "Quiz Platform 是一个完全开源的项目。我们相信透明度和社区协作的力量。",
    openSource1: "所有代码在 GitHub 上公开可查",
    openSource2: "不收集任何用户数据",
    openSource3: "欢迎社区贡献代码和建议",
    openSource4: "MIT 许可证，自由使用和修改",
    back: "返回首页",
    viewSource: "查看源码",
  },
  en: {
    title: "About Us",
    storyTitle: "Our Story",
    story: "Quiz Platform was born from a simple question: can we create a tool that truly helps people understand themselves? Not just fun little quizzes, but a platform for genuine self-exploration grounded in psychological research.",
    story2: "We believe everyone deserves to be understood — especially by themselves. When you know your personality patterns, emotional habits, and relationship styles, you gain the power to change.",
    missionTitle: "Our Mission",
    mission: "Make high-quality psychological self-exploration tools free, accessible, and open to everyone. We're not a diagnostic tool — we're a mirror to help you get closer to your true self.",
    teamTitle: "Contributors",
    teamDesc: "This is an open-source project driven by the community. Thank you to every contributor.",
    leadDev: "Lead Developer",
    leadName: "11suixing11",
    leadRole: "Full-Stack Dev · Psychology Research · Design",
    contributors: "Community Contributors",
    contributorsDesc: "Thanks to everyone who submits feedback, reports bugs, and offers suggestions.",
    techTitle: "Technology Stack",
    techDesc: "We build this platform with modern, high-performance technology.",
    openSourceTitle: "Open Source Commitment",
    openSourceDesc: "Quiz Platform is a fully open-source project. We believe in the power of transparency and community collaboration.",
    openSource1: "All code publicly available on GitHub",
    openSource2: "No user data collected whatsoever",
    openSource3: "Community contributions welcome",
    openSource4: "MIT License — free to use and modify",
    back: "Back to Home",
    viewSource: "View Source",
  },
  ja: {
    title: "私たちについて",
    storyTitle: "プロジェクトの物語",
    story: "Quiz Platform はシンプルな疑問から生まれました：人々が自分自身を理解するのを本当に助けるツールを作ることはできるのか？楽しい小テストではなく、心理学研究に基づいた真の自己探求プラットフォーム。",
    story2: "私たちは、誰もが理解される価値があると信じています。特に自分自身に理解されること。自分の人格パターン、感情の癖、関係スタイルを知るとき、変化する力が得られます。",
    missionTitle: "私たちのミッション",
    mission: "高品質な心理自己探求ツールを無料で、使いやすく、すべての人に開かれたものに。診断ツールではなく、本当の自分に近づくための鏡です。",
    teamTitle: "貢献者",
    teamDesc: "これはコミュニティ主導のオープンソースプロジェクトです。すべての貢献者に感謝します。",
    leadDev: "メインデベロッパー",
    leadName: "11suixing11",
    leadRole: "フルスタック開発・心理学研究・デザイン",
    contributors: "コミュニティ貢献者",
    contributorsDesc: "フィードバック、バグ報告、提案をくださるすべての方に感謝します。",
    techTitle: "技術スタック",
    techDesc: "最新の高性能技術でこのプラットフォームを構築しています。",
    openSourceTitle: "オープンソースのコミットメント",
    openSourceDesc: "Quiz Platform は完全なオープンソースプロジェクトです。透明性とコミュニティ協業の力を信じています。",
    openSource1: "すべてのコードはGitHubで公開",
    openSource2: "ユーザーデータは一切収集しません",
    openSource3: "コミュニティの貢献を歓迎",
    openSource4: "MITライセンス、自由に使用・改変可能",
    back: "ホームに戻る",
    viewSource: "ソースを見る",
  },
};

const technologies = [
  { name: "Next.js 16", desc: "React Framework" },
  { name: "React 19", desc: "UI Library" },
  { name: "Tailwind CSS v4", desc: "Styling" },
  { name: "Framer Motion", desc: "Animations" },
  { name: "TypeScript", desc: "Type Safety" },
  { name: "localStorage", desc: "Client Storage" },
];

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("quiz-platform-lang");
      if (saved === "en" || saved === "zh" || saved === "ja") setLang(saved);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "zh" ? "en" : l === "en" ? "ja" : "zh";
      try { localStorage.setItem("quiz-platform-lang", next); } catch {}
      return next;
    });
  }, []);

  const t = uiText[lang];

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{t.title}</h1>
            <button
              onClick={toggleLang}
              className="flex h-8 items-center justify-center rounded-full border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/80 px-3 text-xs font-semibold backdrop-blur-sm"
            >
              {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
            </button>
          </div>
        </div>

        {/* Story */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-4 w-4 text-[#E0607A]" />
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">{t.storyTitle}</h2>
          </div>
          <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 leading-relaxed mb-3">{t.story}</p>
          <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 leading-relaxed">{t.story2}</p>
        </motion.section>

        {/* Mission */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-[#6B5B95]" />
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">{t.missionTitle}</h2>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#6B5B95]/10 to-[#4A6FA5]/10 dark:from-[#6B5B95]/20 dark:to-[#4A6FA5]/20 p-6 border border-[#6B5B95]/10">
            <p className="text-sm text-[#2C2C2C]/80 dark:text-white/80 leading-relaxed italic">&ldquo;{t.mission}&rdquo;</p>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-10">
          <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-4">{t.teamTitle}</h2>
          <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 mb-4">{t.teamDesc}</p>
          <div className="rounded-2xl border border-[#2C2C2C]/8 dark:border-white/8 p-5 bg-white/50 dark:bg-white/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2C2C]/5 dark:bg-white/10 text-lg">👨‍💻</div>
              <div>
                <div className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.leadName}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.leadRole}</div>
              </div>
            </div>
            <Badge className="mt-2 text-[10px]">{t.leadDev}</Badge>
          </div>
          <div className="mt-3 rounded-2xl border border-[#2C2C2C]/8 dark:border-white/8 p-5 bg-white/50 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2C2C]/5 dark:bg-white/10 text-lg">🌍</div>
              <div>
                <div className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{t.contributors}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{t.contributorsDesc}</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-4 w-4 text-[#4A6FA5]" />
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">{t.techTitle}</h2>
          </div>
          <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50 mb-4">{t.techDesc}</p>
          <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="rounded-xl border border-[#2C2C2C]/8 dark:border-white/8 p-3 bg-white/50 dark:bg-white/5">
                <div className="text-sm font-semibold text-[#2C2C2C] dark:text-white">{tech.name}</div>
                <div className="text-xs text-[#2C2C2C]/50 dark:text-white/50">{tech.desc}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Open Source */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-[#4A8B5A]" />
            <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">{t.openSourceTitle}</h2>
          </div>
          <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 mb-4">{t.openSourceDesc}</p>
          <ul className="space-y-2">
            {[t.openSource1, t.openSource2, t.openSource3, t.openSource4].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#2C2C2C]/70 dark:text-white/70">
                <span className="text-[#4A8B5A]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/11suixing11/quiz-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2C2C2C]/15 dark:border-white/15 px-4 py-2 text-sm font-medium text-[#2C2C2C] dark:text-white hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
          >
            <Globe className="h-4 w-4" /> {t.viewSource}
          </a>
        </motion.section>
      </div>
    </div>
  );
}
