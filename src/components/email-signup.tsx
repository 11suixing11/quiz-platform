"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "@/lib/types";

const STORAGE_KEY = "quiz-platform-email-signups";

const TEXT = {
  zh: {
    title: "获取新测试通知",
    subtitle: "订阅后，每次发布新测试时我们会通知你。",
    placeholder: "输入你的邮箱地址",
    button: "订阅",
    success: "感谢订阅！",
    coming: "邮件通知功能即将上线，目前邮箱已保存。",
    invalid: "请输入有效的邮箱地址",
    already: "你已经订阅过了",
  },
  en: {
    title: "Get Notified of New Tests",
    subtitle: "Subscribe and we'll let you know when new tests are published.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    success: "Thanks for subscribing!",
    coming: "Email notifications coming soon — your email has been saved.",
    invalid: "Please enter a valid email address",
    already: "You're already subscribed!",
  },
  ja: {
    title: "新テストの通知を受け取る",
    subtitle: "購読すると、新しいテストが公開されたらお知らせします。",
    placeholder: "メールアドレスを入力",
    button: "購読する",
    success: "ご購読ありがとうございます！",
    coming: "メール通知は近日公開 — メールアドレスは保存されました。",
    invalid: "有効なメールアドレスを入力してください",
    already: "すでに購読済みです",
  },
} as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSavedEmails(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function saveEmail(email: string): void {
  try {
    const emails = getSavedEmails();
    emails.push(email.toLowerCase());
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(emails)]));
  } catch {}
}

interface EmailSignupProps {
  lang: Lang;
}

export function EmailSignup({ lang }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "already">("idle");
  const t = TEXT[lang];

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = email.trim();

      if (!isValidEmail(trimmed)) {
        setStatus("error");
        return;
      }

      const saved = getSavedEmails();
      if (saved.includes(trimmed.toLowerCase())) {
        setStatus("already");
        return;
      }

      saveEmail(trimmed);
      setEmail("");
      setStatus("success");
    },
    [email],
  );

  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center"
        style={{
          background: "linear-gradient(135deg, #6B5B95 0%, #4A6FA5 50%, #4A8B5A 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        />

        <div className="relative z-10">
          <span className="text-4xl mb-3 block">🔔</span>
          <h2 className="text-xl font-bold text-white sm:text-2xl">{t.title}</h2>
          <p className="mt-2 text-sm text-white/80 max-w-md mx-auto">{t.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder={t.placeholder}
              className="flex-1 w-full h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/60 focus:bg-white/25 transition-all"
              aria-label={t.placeholder}
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#6B5B95] transition-all hover:bg-white/90 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              {t.button}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {status !== "idle" && (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-sm"
              >
                {status === "success" && (
                  <div className="text-white/90">
                    <span className="mr-1.5">✅</span>
                    {t.success}
                    <br />
                    <span className="text-white/60 text-xs">{t.coming}</span>
                  </div>
                )}
                {status === "already" && (
                  <div className="text-white/80">
                    <span className="mr-1.5">ℹ️</span>
                    {t.already}
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-200">
                    <span className="mr-1.5">⚠️</span>
                    {t.invalid}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
