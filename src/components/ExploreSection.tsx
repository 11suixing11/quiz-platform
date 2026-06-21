"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TestCard } from "@/components/TestCard";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { TEST_CATEGORIES } from "@/lib/constants";
import type { TestEntry, Lang } from "@/lib/types";

function fuzzySearch(query: string, tests: TestEntry[]): TestEntry[] {
  if (!query.trim()) return tests;
  const q = query.toLowerCase().trim();
  return tests.filter((t) => {
    const name = t.zh.name.toLowerCase();
    const desc = t.zh.description.toLowerCase();
    const nameEn = t.en.name.toLowerCase();
    const descEn = t.en.description.toLowerCase();
    return (
      name.includes(q) ||
      desc.includes(q) ||
      nameEn.includes(q) ||
      descEn.includes(q)
    );
  });
}

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

  // When a world is selected, filter by its categories
  useEffect(() => {
    if (selectedWorld && worldCategories && worldCategories.length > 0) {
      setActiveCategory(null); // reset category filter, world filter takes precedence
    }
  }, [selectedWorld, worldCategories]);

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

    // Apply search
    if (searchQuery.trim()) {
      tests = fuzzySearch(searchQuery, tests);
    }

    return tests;
  }, [searchQuery, activeCategory, selectedWorld, worldCategories]);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
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
          placeholder={lang === "zh" ? "搜索测试..." : "Search tests..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11 rounded-xl border-[#2C2C2C]/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] text-base"
        />
      </div>

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

      {/* Test Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      )}
    </section>
  );
}
