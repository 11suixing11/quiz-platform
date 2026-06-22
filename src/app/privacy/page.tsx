"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Cookie, Database, Lock, CheckCircle } from "lucide-react";
import type { Lang } from "@/lib/types";

const uiText = {
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2025年1月",
    intro: "Quiz Platform 非常重视你的隐私。这份隐私政策说明了我们如何（不）处理你的数据。",
    principles: "我们的隐私原则",
    principle1Title: "不收集数据",
    principle1Desc: "我们不收集、不存储、不传输任何个人数据。所有测试结果仅保存在你的浏览器本地存储（localStorage）中。",
    principle2Title: "没有 Cookie",
    principle2Desc: "我们不使用任何 Cookie，无论是功能性的还是追踪性的。你的浏览器在使用我们的平台时不会存储任何 Cookie。",
    principle3Title: "没有追踪",
    principle3Desc: "我们不嵌入任何第三方分析工具（如 Google Analytics、Facebook Pixel 等）。我们不知道你是谁，也不想知道。",
    principle4Title: "没有账户系统",
    principle4Desc: "我们没有用户注册或登录系统。你不需要提供电子邮件、姓名或任何个人信息。",
    principle5Title: "数据在你的设备上",
    principle5Desc: "所有测试数据存储在你的浏览器 localStorage 中。这意味着：数据不会上传到任何服务器，只有你能访问。清除浏览器数据会删除所有测试记录。",
    principle6Title: "GDPR 合规",
    principle6Desc: "由于我们不收集任何个人数据，我们实际上超出了 GDPR（欧盟通用数据保护条例）的要求。没有数据需要处理，就没有数据需要保护或删除。",
    openSource: "开源透明",
    openSourceDesc: "我们的代码完全开源，任何人都可以审计我们是否真的不收集数据。我们欢迎安全研究人员的审查。",
    contactTitle: "联系我们",
    contactDesc: "如果你对我们的隐私政策有任何疑问，请在 GitHub 上提交 Issue。",
    back: "返回首页",
    viewGithub: "在 GitHub 上查看",
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: January 2025",
    intro: "Quiz Platform takes your privacy very seriously. This privacy policy explains how we (don't) handle your data.",
    principles: "Our Privacy Principles",
    principle1Title: "No Data Collection",
    principle1Desc: "We don't collect, store, or transmit any personal data. All test results are saved only in your browser's local storage (localStorage).",
    principle2Title: "No Cookies",
    principle2Desc: "We don't use any cookies — neither functional nor tracking. Your browser stores no cookies while using our platform.",
    principle3Title: "No Tracking",
    principle3Desc: "We don't embed any third-party analytics tools (like Google Analytics, Facebook Pixel, etc.). We don't know who you are, and we don't want to.",
    principle4Title: "No Account System",
    principle4Desc: "We have no user registration or login system. You don't need to provide an email, name, or any personal information.",
    principle5Title: "Data Lives on Your Device",
    principle5Desc: "All test data is stored in your browser's localStorage. This means: data is never uploaded to any server, and only you can access it. Clearing browser data deletes all test records.",
    principle6Title: "GDPR Compliant",
    principle6Desc: "Since we don't collect any personal data, we actually exceed GDPR requirements. There's no data to process, so there's nothing to protect or delete.",
    openSource: "Open Source Transparency",
    openSourceDesc: "Our code is fully open source — anyone can audit whether we truly don't collect data. We welcome scrutiny from security researchers.",
    contactTitle: "Contact Us",
    contactDesc: "If you have any questions about our privacy policy, please open an issue on GitHub.",
    back: "Back to Home",
    viewGithub: "View on GitHub",
  },
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新：2025年1月",
    intro: "Quiz Platform はあなたのプライバシーを非常に大切にしています。このプライバシーポリシーは、私たちがどのように（しない）データを処理するかを説明しています。",
    principles: "プライバシー原則",
    principle1Title: "データ収集なし",
    principle1Desc: "個人データの収集、保存、送信は一切行いません。すべてのテスト結果はブラウザのローカルストレージ（localStorage）にのみ保存されます。",
    principle2Title: "Cookie なし",
    principle2Desc: "Cookie は一切使用しません。機能的なものもトラッキング的なものも。当プラットフォームの使用中にブラウザにCookieは保存されません。",
    principle3Title: "トラッキングなし",
    principle3Desc: "Google Analytics、Facebook Pixel などのサードパーティ分析ツールは一切組み込んでいません。あなたが誰かは知りませんし、知りたくもありません。",
    principle4Title: "アカウントシステムなし",
    principle4Desc: "ユーザー登録やログインシステムはありません。メールアドレス、名前、個人情報を提供する必要はありません。",
    principle5Title: "データはあなたのデバイス上に",
    principle5Desc: "すべてのテストデータはブラウザのlocalStorageに保存されます。データはサーバーにアップロードされず、あなただけがアクセスできます。ブラウザデータをクリアするとテスト記録はすべて削除されます。",
    principle6Title: "GDPR 準拠",
    principle6Desc: "個人データを一切収集しないため、実際にはGDPRの要件を超えています。処理するデータがないため、保護や削除するものもありません。",
    openSource: "オープンソースの透明性",
    openSourceDesc: "コードは完全にオープンソースで、誰でもデータ収集がないことを監査できます。セキュリティ研究者の精査を歓迎します。",
    contactTitle: "お問い合わせ",
    contactDesc: "プライバシーポリシーについてご質問がある場合は、GitHubでIssueを作成してください。",
    back: "ホームに戻る",
    viewGithub: "GitHubで見る",
  },
};

const principles = [
  { icon: Eye, key: "1" },
  { icon: Cookie, key: "2" },
  { icon: Lock, key: "3" },
  { icon: Database, key: "4" },
  { icon: Shield, key: "5" },
  { icon: CheckCircle, key: "6" },
];

export default function PrivacyPage() {
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
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" /> {t.back}
          </Link>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{t.title}</h1>
            <button
              onClick={toggleLang}
              className="flex h-8 items-center justify-center rounded-full border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/80 px-3 text-xs font-semibold backdrop-blur-sm"
            >
              {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
            </button>
          </div>
          <p className="text-xs text-[#2C2C2C]/40 dark:text-white/40 mb-3">{t.lastUpdated}</p>
          <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 leading-relaxed">{t.intro}</p>
        </div>

        {/* Principles */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-6">{t.principles}</h2>
          <div className="space-y-4">
            {principles.map((p, i) => {
              const Icon = p.key === "1" ? Eye : p.key === "2" ? Cookie : p.key === "3" ? Lock : p.key === "4" ? Database : p.key === "5" ? Shield : CheckCircle;
              return (
                <motion.div
                  key={p.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl border border-[#2C2C2C]/8 dark:border-white/8 bg-white/50 dark:bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C2C2C]/5 dark:bg-white/10 flex-shrink-0">
                      <Icon className="h-4 w-4 text-[#2C2C2C]/60 dark:text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-1">
                        {t[`principle${p.key}Title` as keyof typeof t]}
                      </h3>
                      <p className="text-sm text-[#2C2C2C]/60 dark:text-white/60 leading-relaxed">
                        {t[`principle${p.key}Desc` as keyof typeof t]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <div className="rounded-2xl bg-gradient-to-br from-[#4A8B5A]/10 to-[#4A6FA5]/10 dark:from-[#4A8B5A]/20 dark:to-[#4A6FA5]/20 p-6 border border-[#4A8B5A]/10">
            <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-2">{t.openSource}</h3>
            <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70 mb-3">{t.openSourceDesc}</p>
            <a
              href="https://github.com/11suixing11/quiz-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#4A8B5A] hover:underline"
            >
              {t.viewGithub} →
            </a>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 mb-10"
        >
          <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white mb-2">{t.contactTitle}</h3>
          <p className="text-sm text-[#2C2C2C]/60 dark:text-white/60">{t.contactDesc}</p>
        </motion.div>
      </div>
    </div>
  );
}
