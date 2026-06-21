"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/types";

export default function NotFound() {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("quiz-platform-lang") as Lang;
      if (stored === "en" || stored === "zh") setLang(stored);
    } catch {}
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FAFAF8] dark:bg-[#0a0a0a] px-6 text-center">
      <span className="text-6xl">🌙</span>
      <h1 className="text-3xl font-bold text-[#2C2C2C] dark:text-white">{lang === "zh" ? "迷路了？" : "Lost your way?"}</h1>
      <p className="max-w-md text-sm text-[#2C2C2C]/60 dark:text-white/60 leading-relaxed">
        {lang === "zh" ? (
          <>
            这个页面不存在。也许你想要探索的，不在这个方向。
            <br />
            没关系，回去看看还有哪些世界在等你。
          </>
        ) : (
          <>
            This page doesn't exist. Maybe what you're looking for lies in a different direction.
            <br />
            That's okay — head back and see what other worlds are waiting for you.
          </>
        )}
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#2C2C2C] dark:bg-white dark:text-[#2C2C2C] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2C2C2C]/80 dark:hover:bg-white/80"
        >
          {lang === "zh" ? "回到首页" : "Back to Home"}
        </Link>
        <Link
          href="/compat/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#2C2C2C]/20 dark:border-white/20 px-6 text-sm font-medium text-[#2C2C2C] dark:text-white transition-colors hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5"
        >
          {lang === "zh" ? "探索关系" : "Explore Compatibility"}
        </Link>
      </div>
    </div>
  );
}
