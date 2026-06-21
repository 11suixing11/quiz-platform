"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { THEMES, getStoredThemeId, storeThemeId, applyTheme, getThemeById } from "@/store/theme-store";

interface ThemeSelectorProps {
  lang?: "zh" | "en";
}

export function ThemeSelector({ lang = "zh" }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(getStoredThemeId());

  useEffect(() => {
    const theme = getThemeById(activeTheme);
    applyTheme(theme);
  }, [activeTheme]);

  const handleSelect = useCallback((themeId: string) => {
    setActiveTheme(themeId);
    storeThemeId(themeId);
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed right-28 top-4 z-50">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="flex h-10 items-center justify-center rounded-full border border-[#2C2C2C]/10 bg-white/80 px-3 text-xs font-semibold backdrop-blur-sm transition-all hover:scale-110 dark:border-white/10 dark:bg-[#1a1a1a]/80 text-[#2C2C2C] dark:text-white"
        aria-label={lang === "zh" ? "切换主题" : "Switch theme"}
        aria-expanded={isOpen}
      >
        <Palette className="size-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-lg p-2 min-w-[160px]"
            role="menu"
            aria-label={lang === "zh" ? "选择主题" : "Choose theme"}
          >
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  activeTheme === theme.id
                    ? "bg-[var(--theme-primary,#6B5B95)]/10 font-medium"
                    : "hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
                role="menuitem"
                aria-current={activeTheme === theme.id ? "true" : undefined}
              >
                <span
                  className="inline-block h-4 w-4 rounded-full border border-black/10 dark:border-white/10 flex-shrink-0"
                  style={{ backgroundColor: theme.colors.accent }}
                  aria-hidden="true"
                />
                <span className="text-[#2C2C2C] dark:text-white">
                  {lang === "zh" ? theme.name : theme.nameEn}
                </span>
                {activeTheme === theme.id && (
                  <span className="ml-auto text-xs" style={{ color: theme.colors.primary }}>✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
