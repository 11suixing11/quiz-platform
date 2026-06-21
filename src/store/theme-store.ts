"use client";

export interface ThemeColors {
  primary: string;
  accent: string;
  bg: string;
  bgDark: string;
}

export interface Theme {
  id: string;
  name: string;
  nameEn: string;
  colors: ThemeColors;
}

export const THEMES: Theme[] = [
  {
    id: "warm",
    name: "温暖",
    nameEn: "Warm",
    colors: { primary: "#2C2C2C", accent: "#B07D6E", bg: "#FAFAF8", bgDark: "#0a0a0a" },
  },
  {
    id: "ocean",
    name: "海洋",
    nameEn: "Ocean",
    colors: { primary: "#1a4b6b", accent: "#3b82f6", bg: "#f0f7ff", bgDark: "#0a1628" },
  },
  {
    id: "forest",
    name: "森林",
    nameEn: "Forest",
    colors: { primary: "#2d5a27", accent: "#22c55e", bg: "#f0f7f0", bgDark: "#0a1a0a" },
  },
  {
    id: "sunset",
    name: "日落",
    nameEn: "Sunset",
    colors: { primary: "#8b3a3a", accent: "#f97316", bg: "#fff7ed", bgDark: "#1a0a0a" },
  },
];

const STORAGE_KEY = "quiz-platform-theme";

export function getStoredThemeId(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) || "warm";
  } catch {
    return "warm";
  }
}

export function storeThemeId(id: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {}
}

export function getThemeById(id: string): Theme {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.style.setProperty("--theme-primary", theme.colors.primary);
  root.style.setProperty("--theme-accent", theme.colors.accent);
  root.style.setProperty("--theme-bg", theme.colors.bg);
  root.style.setProperty("--theme-bg-dark", theme.colors.bgDark);
}
