"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { Lang } from "@/lib/types";

export default function LazyExploreSection({ lang }: { lang: Lang }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [ExploreSection, setExploreSection] = useState<ComponentType<{ lang?: Lang }> | null>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const load = () => {
      setReady(true);
      import("@/components/ExploreSection").then((module) => setExploreSection(() => module.default));
    };
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      load();
    }, { rootMargin: "720px 0px" });
    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={hostRef}>
      {ExploreSection ? <ExploreSection lang={lang} /> : (
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20" aria-busy={ready}>
          <div className="h-3 w-24 rounded-full bg-ink/10 dark:bg-white/10" />
          <div className="mt-5 h-10 max-w-md rounded-lg bg-ink/8 dark:bg-white/8" />
          <div className="mt-8 h-12 w-full rounded-lg border border-ink/10 dark:border-white/10" />
        </div>
      )}
    </div>
  );
}
