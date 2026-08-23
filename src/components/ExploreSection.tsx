"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { TEST_CATEGORIES } from "@/lib/constants";
import { QUIZ_CATALOG } from "@/core/quiz";
import type { Lang } from "@/lib/types";
import { TestCard } from "@/components/TestCard";
import { cn } from "@/lib/utils";

type LengthFilter = "all" | "short" | "medium" | "long";

export default function ExploreSection({ lang = "zh" }: { lang?: Lang }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [length, setLength] = useState<LengthFilter>("all");
  const availableCategories = useMemo(
    () => TEST_CATEGORIES.filter((item) => QUIZ_CATALOG.some((test) => test.category === item.id)),
    [],
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return QUIZ_CATALOG.filter((test) => {
      const matchesQuery = !normalizedQuery || [test.id, test.title.zh, test.title.en, test.description.zh, test.description.en]
        .some((value) => value.toLowerCase().includes(normalizedQuery));
      const matchesCategory = category === "all" || test.category === category;
      const matchesLength = length === "all"
        || (length === "short" && test.questions <= 16)
        || (length === "medium" && test.questions > 16 && test.questions <= 25)
        || (length === "long" && test.questions > 25);
      return matchesQuery && matchesCategory && matchesLength;
    });
  }, [category, length, query]);

  const hasFilters = Boolean(query || category !== "all" || length !== "all");
  const reset = () => { setQuery(""); setCategory("all"); setLength("all"); };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <h2 className="atlas-section-title">{lang === "zh" ? "精选测评" : "Curated assessments"}</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-ink/58 dark:text-white/58">
            {lang === "zh" ? `这里有 ${QUIZ_CATALOG.length} 项经过审阅的测评。可以按主题、题量，或一个此刻在意的词来筛选。` : `${QUIZ_CATALOG.length} reviewed assessments are available. Search by subject, length, or a question that matters today.`}
          </p>
        </div>
        <label className="atlas-search" htmlFor="assessment-search">
          <span className="sr-only">{lang === "zh" ? "搜索测评" : "Search assessments"}</span>
          <Search className="size-4 text-ink/35 dark:text-white/35" aria-hidden="true" />
          <input id="assessment-search" name="assessment-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={lang === "zh" ? "搜索性格、情绪、关系……" : "Search personality, emotion, relationships…"} />
          {query && <button type="button" onClick={() => setQuery("")} className="atlas-icon-button" aria-label={lang === "zh" ? "清除搜索" : "Clear search"}><X className="size-4" aria-hidden="true" /></button>}
        </label>
      </div>

      <div className="mt-8 border-y border-ink/10 py-5 dark:border-white/10">
        <div className="flex items-start gap-3">
          <SlidersHorizontal className="mt-2 size-4 shrink-0 text-ink/35 dark:text-white/35" />
          <div className="flex flex-1 flex-wrap gap-2" role="group" aria-label={lang === "zh" ? "按主题筛选" : "Filter by subject"}>
            <button type="button" onClick={() => setCategory("all")} aria-pressed={category === "all"} className={cn("atlas-filter", category === "all" && "atlas-filter-active")}>{lang === "zh" ? "全部" : "All"}</button>
            {availableCategories.map((item) => <button key={item.id} type="button" onClick={() => setCategory(item.id)} aria-pressed={category === item.id} className={cn("atlas-filter", category === item.id && "atlas-filter-active")}>{lang === "zh" ? item.zh : item.en}</button>)}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 pl-7" role="group" aria-label={lang === "zh" ? "按题量筛选" : "Filter by length"}>
          {(["all", "short", "medium", "long"] as LengthFilter[]).map((value) => {
            const labels = lang === "zh"
              ? { all: "全部题量", short: "≤ 16 题", medium: "17–25 题", long: "26+ 题" }
              : { all: "Any length", short: "≤ 16 questions", medium: "17–25 questions", long: "26+ questions" };
            return <button key={value} type="button" onClick={() => setLength(value)} aria-pressed={length === value} className={cn("atlas-filter atlas-filter-secondary", length === value && "atlas-filter-active")}>{labels[value]}</button>;
          })}
          {hasFilters && <button type="button" onClick={reset} className="atlas-text-button ml-auto">{lang === "zh" ? "清除筛选" : "Clear filters"}</button>}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-ink/45 dark:text-white/45" role="status" aria-live="polite">
        <span>{lang === "zh" ? `找到 ${results.length} 个测试` : `${results.length} quizzes found`}</span>
      </div>

      {results.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((test, index) => <TestCard key={test.id} test={test} index={index} lang={lang} />)}
        </div>
      ) : (
        <div className="atlas-empty-state mt-8">
          <p className="font-semibold">{lang === "zh" ? "暂时没有符合条件的测评" : "No assessment matched those filters"}</p>
          <button type="button" onClick={reset} className="mt-3 text-sm font-semibold text-accent hover:underline">{lang === "zh" ? "清除筛选" : "Clear filters"}</button>
        </div>
      )}
    </div>
  );
}
