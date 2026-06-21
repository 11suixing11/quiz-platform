"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEST_REGISTRY, type TestRegistryEntry } from "@/lib/test-registry";
import { CATEGORY_COLORS } from "@/lib/constants";
import type { Lang } from "@/lib/types";

// Top 6 popular tests to exclude
const POPULAR_IDS = new Set([
  "big-five",
  "mbti",
  "enneagram",
  "love-language",
  "emotional-intelligence",
  "anxiety",
]);

function getDailyTest(): TestRegistryEntry {
  // Deterministic: same test all day, changes at midnight
  const now = new Date();
  const daySeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

  const lessCommon = TEST_REGISTRY.filter((t) => !POPULAR_IDS.has(t.id));
  const index = daySeed % lessCommon.length;
  return lessCommon[index];
}

interface DailyTestProps {
  lang: Lang;
}

export function DailyTest({ lang }: DailyTestProps) {
  const [test, setTest] = useState<TestRegistryEntry | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTest(getDailyTest());
  }, []);

  if (!mounted || !test) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="h-40 rounded-2xl bg-[#2C2C2C]/5 dark:bg-white/5 animate-pulse" />
      </div>
    );
  }

  const categoryColor = CATEGORY_COLORS[test.category] ?? "#6B5B95";

  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-[#2C2C2C]/8 dark:border-white/10 bg-white dark:bg-[#141414] p-6 sm:p-8"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            background: `radial-gradient(ellipse at 70% 50%, ${categoryColor} 0%, transparent 70%)`,
          }}
        />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
            style={{ backgroundColor: categoryColor + "15" }}
          >
            {test.icon}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
                style={{ backgroundColor: categoryColor + "15", color: categoryColor }}
              >
                {lang === "zh" ? "每日推荐" : "Test of the Day"}
              </span>
              <span className="text-[10px] text-[#2C2C2C]/30 dark:text-white/30">
                {lang === "zh" ? "每天零点更新" : "Updates daily at midnight"}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#2C2C2C] dark:text-white mb-1">
              {lang === "zh" ? test.zh.name : test.en.name}
            </h3>

            <p className="text-sm text-[#2C2C2C]/60 dark:text-white/60 leading-relaxed line-clamp-2">
              {lang === "zh" ? test.zh.description : test.en.description}
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="shrink-0 w-full sm:w-auto"
          >
            <Link
              href={`/quiz/${test.id}/`}
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: categoryColor }}
            >
              {lang === "zh" ? "来做这个测试" : "Take This Test"}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
