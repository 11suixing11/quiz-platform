"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TestEntry } from "@/lib/types";
import { CATEGORY_COLORS } from "@/lib/constants";

interface TestCardProps {
  test: TestEntry;
  index?: number;
}

export function TestCard({ test, index = 0 }: TestCardProps) {
  const categoryColor = CATEGORY_COLORS[test.category] || "#666";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link href={`/quiz/${test.id}`} className="block group">
        <Card className="h-full cursor-pointer border-[#2C2C2C]/8 transition-all duration-300 hover:border-[#2C2C2C]/20 hover:shadow-lg hover:shadow-[#2C2C2C]/5 hover:-translate-y-1">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{test.icon}</span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white transition-all duration-300 group-hover:shadow-sm"
                style={{ backgroundColor: categoryColor }}
              >
                {test.questions} 题
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-[#2C2C2C] group-hover:text-[#2C2C2C]/90 transition-colors">
              {test.zh.name}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-[#2C2C2C]/60 line-clamp-2">
              {test.zh.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-[#2C2C2C]/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{test.time} 分钟</span>
              </div>
              <span className="text-xs font-medium text-[#2C2C2C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                开始 →
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
