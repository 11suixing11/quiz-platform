"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "quiz-platform-analytics";
const MAX_ENTRIES = 1000;

interface PageView {
  url: string;
  timestamp: number;
  referrer: string;
}

function getStored(): PageView[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as PageView[];
  } catch {
    return [];
  }
}

function recordView() {
  try {
    const views = getStored();
    views.push({
      url: window.location.pathname,
      timestamp: Date.now(),
      referrer: document.referrer || "",
    });
    // Keep only last MAX_ENTRIES
    while (views.length > MAX_ENTRIES) views.shift();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
  } catch {}
}

export function getAnalytics() {
  const views = getStored();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStart = today.getTime();

  const pageCounts: Record<string, number> = {};
  let visitsToday = 0;

  for (const v of views) {
    pageCounts[v.url] = (pageCounts[v.url] || 0) + 1;
    if (v.timestamp >= todayStart) visitsToday++;
  }

  const uniquePages = Object.keys(pageCounts).length;
  const mostVisited = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return {
    totalPageViews: views.length,
    uniquePages,
    mostVisited,
    visitsToday,
  };
}

export default function Analytics() {
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState<ReturnType<typeof getAnalytics> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    recordView();
  }, []);

  const handleToggle = useCallback(() => {
    if (!open) {
      setStats(getAnalytics());
    }
    setOpen((o) => !o);
  }, [open]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999]" style={{ position: "fixed" }}>
      {open && stats && (
        <div
          className="mb-2 rounded-xl border p-4 text-xs shadow-lg backdrop-blur-md"
          style={{
            backgroundColor: "var(--card-bg, rgba(255,255,255,0.95))",
            borderColor: "rgba(44,44,44,0.1)",
            color: "#2C2C2C",
            width: 240,
          }}
        >
          <div className="mb-2 font-semibold text-sm" style={{ color: "#2C2C2C" }}>
            📊 Page Analytics
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span style={{ color: "#2C2C2C80" }}>Total views</span>
              <span className="font-medium">{stats.totalPageViews}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#2C2C2C80" }}>Unique pages</span>
              <span className="font-medium">{stats.uniquePages}</span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#2C2C2C80" }}>Visits today</span>
              <span className="font-medium">{stats.visitsToday}</span>
            </div>
            {stats.mostVisited.length > 0 && (
              <div className="mt-2 pt-2 border-t" style={{ borderColor: "rgba(44,44,44,0.1)" }}>
                <div className="font-medium mb-1">Most visited</div>
                {stats.mostVisited.slice(0, 5).map(([url, count]) => (
                  <div key={url} className="flex justify-between gap-2 py-0.5">
                    <span className="truncate" style={{ color: "#2C2C2C80", maxWidth: 140 }}>{url}</span>
                    <span className="font-medium shrink-0">{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-2 pt-2 border-t text-center" style={{ borderColor: "rgba(44,44,44,0.1)", color: "rgba(44,44,44,0.3)" }}>
            Privacy-first · No cookies
          </div>
        </div>
      )}
      <button
        onClick={handleToggle}
        className="flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-all hover:scale-110"
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(44,44,44,0.1)",
        }}
        aria-label="Toggle analytics"
        title="View page analytics"
      >
        📊
      </button>
    </div>
  );
}
