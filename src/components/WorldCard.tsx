"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { WorldDefinition, Lang } from "@/lib/types";

interface WorldCardProps {
  world: WorldDefinition;
  onSelect: (worldId: string) => void;
  lang?: Lang;
}

export function WorldCard({ world, onSelect, lang = "zh" }: WorldCardProps) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const text = lang === "en" ? world.en : world.zh;

  return (
    <motion.button
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onSelect(world.id)}
      className="group relative flex flex-col items-start gap-3 rounded-2xl border p-6 text-left transition-all sm:p-8 overflow-hidden"
      style={{
        backgroundColor: isDark ? world.bgDark : world.bgLight,
        borderColor: isDark ? world.borderDark : world.borderColor,
      }}
    >
      {/* Decorative gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${world.color}10 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3 w-full">
        <div className="flex items-start justify-between">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{world.icon}</span>
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs text-[#2C2C2C]/30 dark:text-white/30 font-medium"
          >
            {world.categories.length} {lang === "en" ? "tests" : "个测试"}
          </motion.span>
        </div>

        <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: world.color }}>
          {text.title}
        </h3>

        <p className="text-sm leading-relaxed text-[#2C2C2C]/70 dark:text-white/70">
          {text.desc}
        </p>

        <span
          className="mt-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 group-hover:shadow-sm"
          style={{
            backgroundColor: world.atmoColor,
            color: world.color,
          }}
        >
          {text.hint}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path d="M4.5 2.5l4 3.5-4 3.5" />
          </svg>
        </span>
      </div>
    </motion.button>
  );
}
