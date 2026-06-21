"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TestEntry, Lang } from "@/lib/types";
import { CATEGORY_COLORS } from "@/lib/constants";
import { isBookmarked, toggleBookmark } from "@/lib/bookmarks";

interface TestCardProps {
  test: TestEntry;
  index?: number;
  lang?: Lang;
}

export function TestCard({ test, index = 0, lang = "zh" }: TestCardProps) {
  const categoryColor = CATEGORY_COLORS[test.category] || "#666";
  const name = lang === "en" ? test.en.name : test.zh.name;
  const description = lang === "en" ? test.en.description : test.zh.description;
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(test.id));
  }, [test.id]);

  const handleBookmark = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const updated = toggleBookmark(test.id);
      setBookmarked(updated.includes(test.id));
    },
    [test.id]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link href={`/test/${test.id}`} className="block group">
        <Card className="h-full cursor-pointer border-[#2C2C2C]/8 dark:border-white/10 transition-all duration-300 hover:border-[#2C2C2C]/20 dark:hover:border-white/20 hover:shadow-lg hover:shadow-[#2C2C2C]/5 dark:hover:shadow-black/20 hover:-translate-y-1">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{test.icon}</span>
              <div className="flex items-center gap-1.5">
                {test.new && (
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm">
                    NEW
                  </span>
                )}
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white transition-all duration-300 group-hover:shadow-sm"
                  style={{ backgroundColor: categoryColor }}
                >
                  {test.questions} {lang === "en" ? "Q" : "题"}
                </span>
                <button
                  onClick={handleBookmark}
                  className="flex h-6 w-6 items-center justify-center rounded-full transition-all hover:scale-110"
                  aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
                >
                  {bookmarked ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#2C2C2C]/25 dark:text-white/25">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <h3 className="mt-2 text-base font-semibold text-[#2C2C2C] dark:text-white group-hover:text-[#2C2C2C]/90 dark:group-hover:text-white/90 transition-colors">
              {name}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-[#2C2C2C]/60 dark:text-white/60 line-clamp-2">
              {description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-[#2C2C2C]/40 dark:text-white/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{test.time} {lang === "en" ? "min" : "分钟"}</span>
              </div>
              <span className="text-xs font-medium text-[#2C2C2C]/30 dark:text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {lang === "en" ? "Details →" : "详情 →"}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
