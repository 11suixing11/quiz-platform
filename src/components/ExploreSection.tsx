"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TestCard } from "@/components/TestCard";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TEST_CATEGORIES } from "@/lib/constants";
import type { TestEntry, Lang } from "@/lib/types";

/* ---------- Region detection & recommendations ---------- */
function getRegionFromTimezone(): "asia" | "europe" | "americas" | "other" {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (/^(Asia|Australia|Pacific\/Auckland|Pacific\/Fiji)/i.test(tz)) return "asia";
    if (/^(Europe|Africa)/i.test(tz)) return "europe";
    if (/^(America)/i.test(tz)) return "americas";
  } catch {
    /* fallback */
  }
  return "other";
}

const REGIONAL_TESTS: Record<string, string[]> = {
  asia: ["zodiac-match", "enneagram", "color-personality", "mbti", "charisma"],
  europe: ["big-five", "enneagram", "mbti", "disc", "leadership"],
  americas: ["big-five", "mbti", "disc", "charisma", "leadership"],
  other: ["mbti", "enneagram", "big-five", "charisma", "color-personality"],
};

const REGION_LABELS: Record<string, { zh: string; en: string }> = {
  asia: { zh: "你所在地区热门", en: "Popular in your region" },
  europe: { zh: "你所在地区热门", en: "Popular in your region" },
  americas: { zh: "你所在地区热门", en: "Popular in your region" },
  other: { zh: "热门推荐", en: "Popular picks" },
};

/* ---------- Levenshtein distance for fuzzy matching ---------- */
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function fuzzyMatch(query: string, target: string): boolean {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  // Exact substring match
  if (t.includes(q)) return true;
  // startsWith match
  if (t.startsWith(q) || q.startsWith(t)) return true;
  // Word-prefix match: each query word starts some word in target
  const qWords = q.split(/\s+/);
  const tWords = t.split(/\s+/);
  if (qWords.every((qw) => tWords.some((tw) => tw.startsWith(qw)))) return true;
  // Levenshtein for short queries (≤5 chars) — typo tolerance
  if (q.length <= 5) {
    for (const tw of tWords) {
      if (levenshtein(q, tw) <= Math.max(1, Math.floor(q.length / 3))) return true;
    }
  }
  return false;
}

function fuzzySearch(query: string, tests: TestEntry[]): TestEntry[] {
  if (!query.trim()) return tests;
  const q = query.toLowerCase().trim();
  return tests.filter((t) => {
    const fields = [
      t.zh.name, t.zh.description,
      t.en.name, t.en.description,
    ];
    return fields.some((f) => fuzzyMatch(q, f));
  });
}

/* ---------- Difficulty filter helpers ---------- */
type DifficultyFilter = "quick" | "standard" | "deep" | null;

function matchesDifficulty(test: TestEntry, filter: DifficultyFilter): boolean {
  if (!filter) return true;
  const q = test.questions;
  switch (filter) {
    case "quick": return q <= 16;
    case "standard": return q >= 17 && q <= 25;
    case "deep": return q >= 26;
  }
}

const DIFFICULTY_OPTIONS: { key: DifficultyFilter; zh: string; en: string }[] = [
  { key: "quick", zh: "快速 (≤16题)", en: "Quick (≤16Q)" },
  { key: "standard", zh: "标准 (17-25题)", en: "Standard (17-25Q)" },
  { key: "deep", zh: "深度 (26+题)", en: "Deep (26+Q)" },
];

/* ---------- Component ---------- */

interface ExploreSectionProps {
  selectedWorld?: string;
  worldCategories?: string[];
  lang?: Lang;
}

export function ExploreSection({
  selectedWorld,
  worldCategories,
  lang = "zh",
}: ExploreSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>(null);
  const [region] = useState(() => getRegionFromTimezone());

  // When a world is selected, reset category filter
  useEffect(() => {
    if (selectedWorld && worldCategories && worldCategories.length > 0) {
      setActiveCategory(null);
    }
  }, [selectedWorld, worldCategories]);

  const regionTests = useMemo(() => {
    const ids = REGIONAL_TESTS[region] || REGIONAL_TESTS.other;
    return ids
      .map((id) => TEST_REGISTRY.find((t) => t.id === id))
      .filter(Boolean) as typeof TEST_REGISTRY;
  }, [region]);

  const totalCount = TEST_REGISTRY.length;

  const filteredTests = useMemo(() => {
    let tests = TEST_REGISTRY;

    // Filter by world categories if a world is selected
    if (selectedWorld && worldCategories && worldCategories.length > 0) {
      tests = tests.filter((t) => worldCategories.includes(t.category));
    }

    // Filter by active category
    if (activeCategory) {
      tests = tests.filter((t) => t.category === activeCategory);
    }

    // Filter by difficulty
    if (difficultyFilter) {
      tests = tests.filter((t) => matchesDifficulty(t, difficultyFilter));
    }

    // Apply search
    if (searchQuery.trim()) {
      tests = fuzzySearch(searchQuery, tests);
    }

    return tests;
  }, [searchQuery, activeCategory, difficultyFilter, selectedWorld, worldCategories]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  const handleDifficultyClick = useCallback((key: DifficultyFilter) => {
    setDifficultyFilter((prev) => (prev === key ? null : key));
  }, []);

  const hasActiveFilters = searchQuery.trim() || activeCategory || difficultyFilter;

  const clearAllFilters = useCallback(() => {
    setSearchQuery("");
    setActiveCategory(null);
    setDifficultyFilter(null);
  }, []);

  return (
    <section id="explore" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#2C2C2C] dark:text-white sm:text-3xl">
          {lang === "zh" ? "探索测试" : "Explore Tests"}
        </h2>
        <p className="mt-2 text-sm text-[#2C2C2C]/60 dark:text-white/60">
          {lang === "zh" ? "选择一个你感兴趣的方向，开始了解自己。" : "Pick a direction that calls to you and start discovering yourself."}
        </p>
      </motion.div>

      {/* Search */}
      <div className="mt-8">
        <Input
          type="text"
          placeholder={lang === "zh" ? "搜索测试（支持模糊匹配）..." : "Search tests (fuzzy matching)…"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11 rounded-xl border-[#2C2C2C]/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] text-base"
        />
      </div>

      {/* Regional Recommendations */}
      {regionTests.length > 0 && !searchQuery.trim() && !activeCategory && !difficultyFilter && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium text-[#2C2C2C]/50 dark:text-white/50">
            🌍 {lang === "zh" ? REGION_LABELS[region].zh : REGION_LABELS[region].en}
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {regionTests.map((test) => (
              <Link
                key={test.id}
                href={`/test/${test.id}`}
                className="flex min-w-[140px] shrink-0 items-center gap-2 rounded-xl border border-[#2C2C2C]/8 bg-white px-3 py-2.5 transition-all hover:border-[#2C2C2C]/20 hover:shadow-md dark:border-white/10 dark:bg-[#1a1a1a] dark:hover:border-white/20"
              >
                <span className="text-xl">{test.icon}</span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#2C2C2C] dark:text-white">
                    {lang === "en" ? test.en.name : test.zh.name}
                  </p>
                  <p className="text-[10px] text-[#2C2C2C]/40 dark:text-white/40">
                    {test.questions} {lang === "en" ? "Q" : "题"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <Badge
          variant={!activeCategory ? "default" : "outline"}
          className="cursor-pointer rounded-full px-3 py-1 text-xs transition-colors"
          onClick={() => setActiveCategory(null)}
        >
          {lang === "zh" ? "全部" : "All"}
        </Badge>
        {TEST_CATEGORIES.map((cat) => (
          <Badge
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1 text-xs transition-colors"
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.icon} {lang === "en" ? cat.en : cat.zh}
          </Badge>
        ))}
      </div>

      {/* Difficulty Filter */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#2C2C2C]/40 dark:text-white/40">
          {lang === "zh" ? "题量：" : "Length:"}
        </span>
        {DIFFICULTY_OPTIONS.map((opt) => (
          <Badge
            key={opt.key}
            variant={difficultyFilter === opt.key ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1 text-xs transition-colors"
            onClick={() => handleDifficultyClick(opt.key)}
          >
            {lang === "zh" ? opt.zh : opt.en}
          </Badge>
        ))}
      </div>

      {/* Result count + Clear filters */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50">
          {lang === "zh"
            ? `显示 ${filteredTests.length} / ${totalCount} 个测试`
            : `Showing ${filteredTests.length} of ${totalCount} tests`}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-[#2C2C2C]/50 dark:text-white/50 hover:text-[#2C2C2C] dark:hover:text-white underline transition-colors"
          >
            {lang === "zh" ? "清除筛选" : "Clear filters"}
          </button>
        )}
      </div>

      {/* Test Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredTests.map((test, i) => (
            <TestCard key={test.id} test={test} index={i} lang={lang} />
          ))}
        </AnimatePresence>
      </div>

      {filteredTests.length === 0 && (
        <div className="mt-16 flex flex-col items-center gap-2 text-[#2C2C2C]/40 dark:text-white/40">
          <span className="text-4xl">🔍</span>
          <p className="text-sm">{lang === "zh" ? "没有找到匹配的测试" : "No matching tests found"}</p>
          <button
            onClick={clearAllFilters}
            className="text-xs underline hover:text-[#2C2C2C] dark:hover:text-white transition-colors"
          >
            {lang === "zh" ? "清除所有筛选" : "Clear all filters"}
          </button>
        </div>
      )}
    </section>
  );
}
