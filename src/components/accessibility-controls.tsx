"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FontSize = "small" | "medium" | "large" | "extra-large";

interface A11ySettings {
  fontSize: FontSize;
  highContrast: boolean;
  reduceMotion: boolean;
}

const STORAGE_KEY = "quiz-platform-a11y";

const DEFAULT_SETTINGS: A11ySettings = {
  fontSize: "medium",
  highContrast: false,
  reduceMotion: false,
};

const FONT_SIZES: { key: FontSize; label: string; labelZh: string }[] = [
  { key: "small", label: "Small", labelZh: "小" },
  { key: "medium", label: "Medium", labelZh: "中" },
  { key: "large", label: "Large", labelZh: "大" },
  { key: "extra-large", label: "XL", labelZh: "特大" },
];

function loadSettings(): A11ySettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_SETTINGS;
}

function saveSettings(settings: A11ySettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    /* ignore */
  }
}

function applySettings(settings: A11ySettings) {
  const body = document.body;
  // Remove all font size classes
  body.classList.remove(
    "a11y-font-small",
    "a11y-font-medium",
    "a11y-font-large",
    "a11y-font-extra-large"
  );
  body.classList.add(`a11y-font-${settings.fontSize}`);

  // High contrast
  if (settings.highContrast) {
    body.classList.add("a11y-high-contrast");
  } else {
    body.classList.remove("a11y-high-contrast");
  }

  // Reduce motion
  if (settings.reduceMotion) {
    body.classList.add("a11y-reduce-motion");
  } else {
    body.classList.remove("a11y-reduce-motion");
  }
}

export function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
  }, []);

  const updateSettings = useCallback(
    (partial: Partial<A11ySettings>) => {
      const next = { ...settings, ...partial };
      setSettings(next);
      saveSettings(next);
      applySettings(next);
    },
    [settings]
  );

  if (!mounted) return null;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="a11y-trigger fixed bottom-20 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#2C2C2C] text-white shadow-lg transition-all hover:scale-105 dark:bg-white dark:text-[#2C2C2C]"
        aria-label="Accessibility settings"
        title="Accessibility settings"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v10" />
          <path d="M6.5 9.5l11 0" />
          <path d="M9 21l3-4 3 4" />
        </svg>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="a11y-panel fixed bottom-32 left-4 z-50 w-72 rounded-2xl border border-[#2C2C2C]/10 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#1a1a1a]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#2C2C2C] dark:text-white">
                ♿ 无障碍设置
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#2C2C2C]/40 hover:text-[#2C2C2C] dark:text-white/40 dark:hover:text-white"
                aria-label="Close"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Font Size */}
            <div className="mb-4">
              <label className="mb-2 block text-xs font-medium text-[#2C2C2C]/60 dark:text-white/60">
                字体大小 Font Size
              </label>
              <div className="flex gap-1">
                {FONT_SIZES.map((fs) => (
                  <button
                    key={fs.key}
                    onClick={() => updateSettings({ fontSize: fs.key })}
                    className={`flex-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-colors ${
                      settings.fontSize === fs.key
                        ? "bg-[#2C2C2C] text-white dark:bg-white dark:text-[#2C2C2C]"
                        : "bg-[#2C2C2C]/5 text-[#2C2C2C]/60 hover:bg-[#2C2C2C]/10 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10"
                    }`}
                  >
                    {fs.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-[#2C2C2C]/70 dark:text-white/70">
                高对比度 High Contrast
              </span>
              <button
                onClick={() =>
                  updateSettings({ highContrast: !settings.highContrast })
                }
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  settings.highContrast
                    ? "bg-[#2C2C2C] dark:bg-white"
                    : "bg-[#2C2C2C]/20 dark:bg-white/20"
                }`}
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform dark:bg-[#2C2C2C] ${
                    settings.highContrast ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </div>

            {/* Reduce Motion */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#2C2C2C]/70 dark:text-white/70">
                减少动画 Reduce Motion
              </span>
              <button
                onClick={() =>
                  updateSettings({ reduceMotion: !settings.reduceMotion })
                }
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  settings.reduceMotion
                    ? "bg-[#2C2C2C] dark:bg-white"
                    : "bg-[#2C2C2C]/20 dark:bg-white/20"
                }`}
                role="switch"
                aria-checked={settings.reduceMotion}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform dark:bg-[#2C2C2C] ${
                    settings.reduceMotion ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
