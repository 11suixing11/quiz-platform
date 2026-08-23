"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, BookmarkCheck, Clock3 } from "lucide-react";
import type { QuizCatalogEntry } from "@/core/quiz";
import type { TestRegistryEntry } from "@/lib/test-registry";
import type { Lang } from "@/lib/types";
import { TEST_CATEGORIES } from "@/lib/constants";
import { useBookmarks } from "@/hooks/use-local-storage";
import { CategoryMark } from "@/components/quiz/category-mark";

type TestCardItem = TestRegistryEntry | QuizCatalogEntry;

function getCardCopy(test: TestCardItem, lang: Lang) {
  if ("title" in test) {
    return {
      title: test.title[lang],
      description: test.description[lang],
      duration: test.duration,
    };
  }
  return {
    title: test[lang].name,
    description: test[lang].description,
    duration: test.time,
  };
}

function getCategoryLabel(category: string, lang: Lang) {
  const item = TEST_CATEGORIES.find((candidate) => candidate.id === category);
  return item ? (lang === "zh" ? item.zh : item.en) : category;
}

export function TestCard({ test, index = 0, lang = "zh" }: { test: TestCardItem; index?: number; lang?: Lang }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(test.id);
  const { title, description, duration } = getCardCopy(test, lang);
  const categoryLabel = getCategoryLabel(test.category, lang);

  return (
    <article className="atlas-test-card">
      <Link href={`/test/${test.id}/`} className="group block h-full">
        <div className="flex h-full flex-col gap-5 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <CategoryMark category={test.category} className="text-accent" />
              <span className="atlas-card-category truncate">{categoryLabel}</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink transition group-hover:text-accent dark:text-white">{title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/58 dark:text-white/58">{description}</p>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-ink/10 pt-4 text-xs text-ink/45 dark:border-white/10 dark:text-white/45">
            <span className="inline-flex min-w-0 items-center gap-2"><span className="atlas-index">{String(index + 1).padStart(2, "0")}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" />{test.questions} {lang === "zh" ? "题" : "questions"} · {duration} {lang === "zh" ? "分钟" : "min"}</span></span>
            <span className="inline-flex items-center gap-1 font-semibold text-ink/70 transition group-hover:text-accent dark:text-white/70"><span>{lang === "zh" ? "先了解" : "Explore"}</span><ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" /></span>
          </div>
        </div>
      </Link>
      <button type="button" onClick={() => toggleBookmark(test.id)} className="atlas-card-save" aria-pressed={saved} aria-label={saved ? (lang === "zh" ? "取消收藏" : "Remove bookmark") : (lang === "zh" ? "收藏测评" : "Save assessment")}>
        {saved ? <BookmarkCheck className="size-4" aria-hidden="true" /> : <Bookmark className="size-4" aria-hidden="true" />}
      </button>
    </article>
  );
}
