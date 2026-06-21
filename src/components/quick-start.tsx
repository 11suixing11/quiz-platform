"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TEST_REGISTRY } from "@/lib/test-registry";
import type { Lang } from "@/lib/types";

interface PastResult {
  testId: string;
  testName: string;
  testNameEn: string;
  result: any;
  timestamp: number;
}

function loadPastResults(): PastResult[] {
  const results: PastResult[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("quiz-result-")) continue;
      const testId = key.replace("quiz-result-", "");
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      try {
        const data = JSON.parse(raw);
        results.push({
          testId,
          testName: data.testName || testId,
          testNameEn: data.testNameEn || testId,
          result: data.result,
          timestamp: data.timestamp || 0,
        });
      } catch {}
    }
  } catch {}
  // Sort by most recent, limit to 6
  results.sort((a, b) => b.timestamp - a.timestamp);
  return results.slice(0, 6);
}

function getResultPreview(result: any): string {
  if (!result) return "";
  if (typeof result === "string") return result;
  if (result.type) return result.type;
  if (result.title) return result.title;
  if (result.label) return result.label;
  if (result.name) return result.name;
  if (result.primary) return result.primary;
  if (result.archetype) return result.archetype;
  return "";
}

export function QuickStart({ lang }: { lang: Lang }) {
  const [results, setResults] = useState<PastResult[]>([]);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("quiz-quickstart-dismissed") === "1") {
        setDismissed(true);
        return;
      }
    } catch {}
    setResults(loadPastResults());
  }, []);

  if (dismissed || results.length === 0) return null;

  const handleDismiss = () => {
    try {
      localStorage.setItem("quiz-quickstart-dismissed", "1");
    } catch {}
    setDismissed(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-6xl w-full px-4 pt-4 pb-2 sm:px-6"
    >
      <div className="relative rounded-2xl border border-[#2C2C2C]/8 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">
            {lang === "zh" ? "⚡ 继续上次" : lang === "ja" ? "⚡ 前回の続き" : "⚡ Quick Start"}
          </h3>
          <button
            onClick={handleDismiss}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "zh" ? "隐藏" : "Dismiss"} ✕
          </button>
        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {results.map((r) => {
            const meta = TEST_REGISTRY.find((t) => t.id === r.testId);
            const preview = getResultPreview(r.result);
            return (
              <motion.div
                key={r.testId}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-44 rounded-xl border border-[#2C2C2C]/8 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-3 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{meta?.icon ?? "📝"}</span>
                  <span className="text-xs font-medium text-[#2C2C2C] dark:text-white truncate flex-1">
                    {lang === "zh" ? r.testName : r.testNameEn}
                  </span>
                </div>
                {preview && (
                  <p className="text-[11px] text-muted-foreground line-clamp-1">{preview}</p>
                )}
                <Link href={`/quiz/${r.testId}`} className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full h-7 text-[10px] rounded-lg">
                    {lang === "zh" ? "重新测试" : lang === "ja" ? "再テスト" : "Retake"}
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
