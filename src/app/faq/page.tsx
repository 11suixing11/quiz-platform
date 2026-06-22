"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/types";

type Category = "general" | "privacy" | "tests" | "technical";

const categories: { id: Category; zh: string; en: string; ja: string; icon: string }[] = [
  { id: "general", zh: "通用", en: "General", ja: "一般", icon: "📋" },
  { id: "privacy", zh: "隐私", en: "Privacy", ja: "プライバシー", icon: "🔒" },
  { id: "tests", zh: "测试", en: "Tests", ja: "テスト", icon: "🧪" },
  { id: "technical", zh: "技术", en: "Technical", ja: "技術", icon: "⚙️" },
];

interface FaqItem {
  category: Category;
  q: { zh: string; en: string; ja: string };
  a: { zh: string; en: string; ja: string };
}

const faqs: FaqItem[] = [
  {
    category: "general",
    q: { zh: "这个平台是什么？", en: "What is this platform?", ja: "このプラットフォームは何ですか？" },
    a: { zh: "Quiz Platform 是一个免费的心理自我探索平台，提供 150+ 种心理学测试，涵盖人格、情绪、关系、职业等多个维度。我们不是诊断工具，而是一面帮助你了解自己的镜子。", en: "Quiz Platform is a free psychological self-exploration platform offering 150+ tests across personality, emotion, relationships, career, and more. We're not a diagnostic tool — we're a mirror to help you understand yourself.", ja: "Quiz Platform は、人格、感情、人間関係、キャリアなど150以上のテストを提供する無料の心理自己探求プラットフォームです。診断ツールではなく、自分を理解するための鏡です。" },
  },
  {
    category: "general",
    q: { zh: "测试结果准确吗？", en: "Are the test results accurate?", ja: "テスト結果は正確ですか？" },
    a: { zh: "我们的测试基于心理学研究，但它们是自我探索工具，不是临床诊断。结果可以作为参考，帮助你更好地理解自己的模式和倾向。建议以开放的心态看待结果。", en: "Our tests are based on psychological research, but they're self-exploration tools, not clinical diagnoses. Results can serve as a reference to help you understand your patterns and tendencies. We recommend viewing them with an open mind.", ja: "テストは心理学研究に基づいていますが、自己探求ツールであり、臨床診断ではありません。結果は参考として、自分のパターンや傾向を理解するのに役立ちます。オープンな心で結果を見ることをお勧めします。" },
  },
  {
    category: "general",
    q: { zh: "完全免费吗？", en: "Is it completely free?", ja: "完全に無料ですか？" },
    a: { zh: "是的，所有测试完全免费，没有隐藏收费，没有会员制度。我们相信自我探索应该是每个人都能负担得起的。", en: "Yes, all tests are completely free — no hidden fees, no membership required. We believe self-exploration should be accessible to everyone.", ja: "はい、すべてのテストは完全に無料です。隠れた料金も、メンバーシップも不要です。自己探求は誰もがアクセスできるべきだと信じています。" },
  },
  {
    category: "general",
    q: { zh: "需要注册账号吗？", en: "Do I need to create an account?", ja: "アカウント登録は必要ですか？" },
    a: { zh: "不需要。你可以直接开始测试，无需注册或登录。所有数据都保存在你的浏览器本地存储中。", en: "No. You can start testing immediately — no registration or login required. All data is stored locally in your browser.", ja: "いいえ。登録やログインなしですぐにテストを開始できます。すべてのデータはブラウザのローカルストレージに保存されます。" },
  },
  {
    category: "privacy",
    q: { zh: "你们收集我的数据吗？", en: "Do you collect my data?", ja: "私のデータを収集しますか？" },
    a: { zh: "不收集。所有测试数据仅保存在你的浏览器 localStorage 中，我们不会上传、存储或访问任何用户数据。没有服务器端数据库。", en: "No. All test data is saved only in your browser's localStorage. We never upload, store, or access any user data. There is no server-side database.", ja: "いいえ。すべてのテストデータはブラウザのlocalStorageにのみ保存され、ユーザーデータのアップロード、保存、アクセスは一切行いません。サーバーサイドのデータベースはありません。" },
  },
  {
    category: "privacy",
    q: { zh: "有 Cookie 或追踪吗？", en: "Are there cookies or tracking?", ja: "Cookieやトラッキングはありますか？" },
    a: { zh: "没有。我们不使用任何 Cookie，不嵌入任何分析工具（如 Google Analytics），不追踪你的行为。你的隐私完全受到保护。", en: "No. We don't use any cookies, don't embed any analytics tools (like Google Analytics), and don't track your behavior. Your privacy is fully protected.", ja: "いいえ。Cookie は使用せず、Google Analytics などの分析ツールも組み込んでおらず、行動追跡も行いません。あなたのプライバシーは完全に保護されています。" },
  },
  {
    category: "privacy",
    q: { zh: "符合 GDPR 吗？", en: "Is it GDPR compliant?", ja: "GDPRに準拠していますか？" },
    a: { zh: "是的，实际上我们超出了 GDPR 的要求。因为我们根本不收集任何个人数据，所以没有数据需要处理、删除或导出。GDPR 的核心要求在我们这里自动满足。", en: "Yes — we actually exceed GDPR requirements. Since we don't collect any personal data at all, there's nothing to process, delete, or export. The core GDPR requirements are automatically met.", ja: "はい、実際にはGDPRの要件を超えています。個人データを一切収集しないため、処理、削除、エクスポートするデータがありません。GDPRの核心要件は自動的に満たされます。" },
  },
  {
    category: "tests",
    q: { zh: "有多少个测试？", en: "How many tests are there?", ja: "テストはいくつありますか？" },
    a: { zh: "目前有 150+ 个测试，分布在 9 个维度：人格、情绪、心理、关系、职业、认知、生活、社交和趣味探索。我们还在持续添加新测试。", en: "There are currently 150+ tests across 9 dimensions: personality, emotion, mental health, relationships, career, cognition, lifestyle, social, and playful discovery. We're continuously adding new tests.", ja: "現在150以上のテストがあり、人格、感情、メンタルヘルス、人間関係、キャリア、認知、ライフスタイル、ソーシャル、遊び心の9つの次元にわたっています。新しいテストを継続的に追加中です。" },
  },
  {
    category: "tests",
    q: { zh: "可以重新做同一个测试吗？", en: "Can I retake the same test?", ja: "同じテストを再受験できますか？" },
    a: { zh: "可以，你可以随时重新做任何测试。新结果会覆盖旧结果。这也是一种观察自己变化的好方式。", en: "Yes, you can retake any test at any time. New results will overwrite the old ones. This is also a great way to observe how you've changed.", ja: "はい、いつでもテストを再受験できます。新しい結果は古い結果を上書きします。自分の変化を観察する良い方法でもあります。" },
  },
  {
    category: "tests",
    q: { zh: "测试需要多长时间？", en: "How long does a test take?", ja: "テストにはどのくらい時間がかかりますか？" },
    a: { zh: "大多数测试需要 3-10 分钟，取决于题目数量。每个测试页面都会显示预计用时和题目数量，方便你安排时间。", en: "Most tests take 3-10 minutes depending on the number of questions. Each test page shows the estimated time and question count so you can plan accordingly.", ja: "テストの多くは質問数に応じて3〜10分です。各テストページには推定時間と質問数が表示されるので、計画を立てやすいです。" },
  },
  {
    category: "tests",
    q: { zh: "我的结果会丢失吗？", en: "Will I lose my results?", ja: "結果は失われますか？" },
    a: { zh: "如果你清除浏览器数据，结果会丢失。建议使用数据导出功能定期备份你的测试结果。你可以在仪表板或数据管理页面找到导出按钮。", en: "If you clear your browser data, results will be lost. We recommend using the data export feature to regularly back up your results. You can find the export button in the dashboard or data manager.", ja: "ブラウザデータをクリアすると、結果は失われます。データエクスポート機能を使って定期的にテスト結果をバックアップすることをお勧めします。ダッシュボードまたはデータ管理ページにエクスポートボタンがあります。" },
  },
  {
    category: "technical",
    q: { zh: "支持哪些浏览器？", en: "Which browsers are supported?", ja: "対応ブラウザは？" },
    a: { zh: "支持所有现代浏览器：Chrome、Firefox、Safari、Edge。我们建议使用最新版本以获得最佳体验。不支持 Internet Explorer。", en: "All modern browsers are supported: Chrome, Firefox, Safari, Edge. We recommend using the latest version for the best experience. Internet Explorer is not supported.", ja: "すべてのモダンブラウザに対応：Chrome、Firefox、Safari、Edge。最高の体験のために最新バージョンのご使用をお勧めします。Internet Explorer には対応していません。" },
  },
  {
    category: "technical",
    q: { zh: "数据存储在哪里？", en: "Where is the data stored?", ja: "データはどこに保存されますか？" },
    a: { zh: "所有数据都存储在你的浏览器的 localStorage 中。这是一种客户端存储方式，数据不会离开你的设备。不同浏览器之间的数据不互通。", en: "All data is stored in your browser's localStorage. This is client-side storage — your data never leaves your device. Data is not shared between different browsers.", ja: "すべてのデータはブラウザのlocalStorageに保存されます。これはクライアント側のストレージで、データはデバイスから離れません。異なるブラウザ間でデータは共有されません。" },
  },
  {
    category: "technical",
    q: { zh: "开源的吗？", en: "Is it open source?", ja: "オープンソースですか？" },
    a: { zh: "是的，Quiz Platform 是完全开源的项目，使用 MIT 许可证。你可以在 GitHub 上查看所有源代码，也可以参与贡献。", en: "Yes, Quiz Platform is fully open-source under the MIT License. You can view all source code on GitHub and contribute as well.", ja: "はい、Quiz Platform はMITライセンスの下で完全にオープンソースです。GitHubですべてのソースコードを閲覧でき、貢献することもできます。" },
  },
  {
    category: "technical",
    q: { zh: "可以离线使用吗？", en: "Can I use it offline?", ja: "オフラインで使えますか？" },
    a: { zh: "首次加载后，大多数功能可以离线使用。测试数据、结果查看和历史记录都可以在没有网络连接的情况下使用。", en: "After the initial load, most features work offline. Test taking, result viewing, and history can all be used without an internet connection.", ja: "初回読み込み後、ほとんどの機能はオフラインで動作します。テスト、結果表示、履歴はすべてインターネット接続なしで使用できます。" },
  },
];

function AccordionItem({ item, lang, isOpen, onToggle }: { item: FaqItem; lang: Lang; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#2C2C2C]/8 dark:border-white/8 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-[#2C2C2C] dark:text-white pr-4">{item.q[lang]}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-[#2C2C2C]/40 dark:text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-[#2C2C2C]/60 dark:text-white/60 leading-relaxed">{item.a[lang]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

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

  const title = { zh: "常见问题", en: "FAQ", ja: "よくある質問" }[lang];
  const subtitle = { zh: "找到你想要的答案", en: "Find answers to your questions", ja: "質問への答えを見つける" }[lang];
  const searchPlaceholder = { zh: "搜索问题...", en: "Search questions...", ja: "質問を検索..." }[lang];
  const allLabel = { zh: "全部", en: "All", ja: "すべて" }[lang];

  const filteredFaqs = faqs.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      return item.q[lang].toLowerCase().includes(s) || item.a[lang].toLowerCase().includes(s);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#0a0a0a] px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" /> {lang === "zh" ? "返回首页" : lang === "ja" ? "ホームに戻る" : "Back to Home"}
          </Link>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-[#2C2C2C] dark:text-white">{title}</h1>
            <button
              onClick={toggleLang}
              className="flex h-8 items-center justify-center rounded-full border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-[#1a1a1a]/80 px-3 text-xs font-semibold backdrop-blur-sm"
            >
              {lang === "zh" ? "EN" : lang === "en" ? "JA" : "中"}
            </button>
          </div>
          <p className="text-sm text-[#2C2C2C]/50 dark:text-white/50">{subtitle}</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2C2C2C]/30 dark:text-white/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 bg-white/80 dark:bg-white/5 pl-10 pr-4 py-3 text-sm text-[#2C2C2C] dark:text-white placeholder:text-[#2C2C2C]/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#2C2C2C]/20 dark:focus:ring-white/20"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => { setActiveCategory("all"); setOpenIndex(null); }}
            className={cn(
              "flex-shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all",
              activeCategory === "all"
                ? "bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C]"
                : "bg-[#2C2C2C]/5 dark:bg-white/10 text-[#2C2C2C]/60 dark:text-white/60 hover:bg-[#2C2C2C]/10 dark:hover:bg-white/15"
            )}
          >
            {allLabel}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C]"
                  : "bg-[#2C2C2C]/5 dark:bg-white/10 text-[#2C2C2C]/60 dark:text-white/60 hover:bg-[#2C2C2C]/10 dark:hover:bg-white/15"
              )}
            >
              {cat.icon} {cat[lang]}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <motion.div layout className="rounded-2xl border border-[#2C2C2C]/8 dark:border-white/8 bg-white/50 dark:bg-white/5 p-4">
          {filteredFaqs.length === 0 ? (
            <p className="py-8 text-center text-sm text-[#2C2C2C]/40 dark:text-white/40">
              {lang === "zh" ? "没有找到相关问题" : lang === "ja" ? "関連する質問が見つかりません" : "No matching questions found"}
            </p>
          ) : (
            filteredFaqs.map((item, index) => (
              <AccordionItem
                key={`${item.category}-${index}`}
                item={item}
                lang={lang}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
