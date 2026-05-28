"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MBTI_TYPES, MBTI_GROUPS, getCompatibility } from "@/lib/compat-data";
import type { Lang } from "@/lib/types";

export default function CompatPage() {
  const [lang, setLang] = useState<Lang>(() => { try { return (localStorage.getItem("quiz-platform-lang") as Lang) || "zh"; } catch { return "zh"; } });
  const [type1, setType1] = useState<string | null>(null);
  const [type2, setType2] = useState<string | null>(null);

  const result = useMemo(() => {
    if (!type1 || !type2) return null;
    return getCompatibility(type1, type2, lang);
  }, [type1, type2, lang]);

  const handleSelect = (mbtiType: string) => {
    if (!type1) {
      setType1(mbtiType);
    } else if (!type2) {
      setType2(mbtiType === type1 ? null : mbtiType);
    } else {
      setType1(mbtiType);
      setType2(null);
    }
  };

  const handleReset = () => {
    setType1(null);
    setType2(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-30 flex items-center justify-between bg-[#FAFAF8]/80 backdrop-blur-md px-6 py-4 border-b border-border/40"
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity">
          <ArrowLeft className="size-4" />
          <span>{lang === "zh" ? "认识你自己" : "Know Yourself"}</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setLang(l => { const next = l === "zh" ? "en" : "zh"; try { localStorage.setItem("quiz-platform-lang", next); } catch {} return next; })}>
          <Globe className="size-4" />
        </Button>
      </motion.header>

      <main className="flex flex-1 flex-col items-center px-6 py-12 w-full max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="text-4xl mb-4 block">💞</span>
          <h1 className="text-3xl font-bold text-[#2C2C2C] sm:text-4xl">
            {lang === "zh" ? "你们之间" : "Between You"}
          </h1>
          <p className="mt-3 text-sm text-[#2C2C2C]/60 max-w-md mx-auto">
            {lang === "zh"
              ? "选择两个人格类型，看看你们之间的故事。"
              : "Select two personality types and discover the story between you."}
          </p>
        </motion.div>

        {/* Selection area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`flex items-center justify-center w-24 h-24 rounded-2xl border-2 transition-all ${type1 ? "border-[#6B5B95] bg-[#6B5B95]/5" : "border-dashed border-gray-300"}`}>
              {type1 ? (
                <span className="text-2xl font-bold text-[#6B5B95]">{type1}</span>
              ) : (
                <span className="text-xs text-gray-400">{lang === "zh" ? "选择你" : "You"}</span>
              )}
            </div>
            <Heart className={`size-6 transition-colors ${type1 && type2 ? "text-[#E0607A] fill-[#E0607A]" : "text-gray-300"}`} />
            <div className={`flex items-center justify-center w-24 h-24 rounded-2xl border-2 transition-all ${type2 ? "border-[#4A6FA5] bg-[#4A6FA5]/5" : "border-dashed border-gray-300"}`}>
              {type2 ? (
                <span className="text-2xl font-bold text-[#4A6FA5]">{type2}</span>
              ) : (
                <span className="text-xs text-gray-400">{lang === "zh" ? "选择对方" : "Them"}</span>
              )}
            </div>
          </div>

          {/* Instruction */}
          <p className="text-center text-xs text-muted-foreground mb-4">
            {!type1
              ? (lang === "zh" ? "先选择你的人格类型" : "First, select your type")
              : !type2
                ? (lang === "zh" ? "再选择对方的人格类型" : "Now, select their type")
                : (lang === "zh" ? "点击其他类型可重新选择" : "Click another type to change")}
          </p>
        </motion.div>

        {/* MBTI Type Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full mb-10"
        >
          {MBTI_GROUPS.map((group) => (
            <div key={group.label} className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {lang === "zh" ? group.label : group.labelEn}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {group.types.map((t) => {
                  const isSelected = t === type1 || t === type2;
                  const isType1 = t === type1;
                  return (
                    <motion.button
                      key={t}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelect(t)}
                      className={`relative rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                        isSelected
                          ? "text-white shadow-lg"
                          : "bg-white border border-gray-200 text-[#2C2C2C] hover:border-gray-300 hover:shadow-sm"
                      }`}
                      style={isSelected ? { backgroundColor: isType1 ? "#6B5B95" : "#4A6FA5" } : undefined}
                    >
                      {t}
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[10px] font-bold flex items-center justify-center shadow-sm"
                          style={{ color: isType1 ? "#6B5B95" : "#4A6FA5" }}
                        >
                          {isType1 ? "1" : "2"}
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Result */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={`${type1}-${type2}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Pair name */}
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-[#2C2C2C] sm:text-3xl"
                >
                  {result.pair.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 text-base text-[#2C2C2C]/70 max-w-lg mx-auto leading-relaxed"
                >
                  {result.pair.desc}
                </motion.p>
                {result.pair.quote && (
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-sm italic text-[#6B5B95]/80 border-l-2 border-[#6B5B95]/30 pl-4 max-w-md mx-auto text-left"
                  >
                    &ldquo;{result.pair.quote}&rdquo;
                  </motion.blockquote>
                )}
              </div>

              {/* Detailed sections */}
              <div className="space-y-6">
                {[
                  { key: "how_they_meet", title: lang === "zh" ? "相遇" : "How You Meet" },
                  { key: "emotional_cycle", title: lang === "zh" ? "情感循环" : "Emotional Cycle" },
                  { key: "conflict_source", title: lang === "zh" ? "冲突来源" : "Source of Conflict" },
                  { key: "who_retreats_first", title: lang === "zh" ? "谁先退缩" : "Who Retreats First" },
                  { key: "who_softens_first", title: lang === "zh" ? "谁先心软" : "Who Softens First" },
                  { key: "most_dangerous_phase", title: lang === "zh" ? "最危险的阶段" : "Most Dangerous Phase" },
                  { key: "deepest_connection", title: lang === "zh" ? "最深的连接" : "Deepest Connection" },
                  { key: "night_state_together", title: lang === "zh" ? "夜晚的你们" : "At Night Together" },
                  { key: "after_separation", title: lang === "zh" ? "分开之后" : "After Separation" },
                ].map((section, i) => {
                  const text = result.pair[section.key];
                  if (!text) return null;
                  return (
                    <motion.div
                      key={section.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm"
                    >
                      <h3 className="text-sm font-semibold text-[#2C2C2C] mb-2">{section.title}</h3>
                      <p className="text-sm leading-relaxed text-[#2C2C2C]/70">{text}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* World compatibility */}
              {result.world && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-8 rounded-2xl bg-[#6B5B95]/5 border border-[#6B5B95]/10 p-5"
                >
                  <h3 className="text-sm font-semibold text-[#6B5B95] mb-2">
                    {lang === "zh" ? "世界之间的共鸣" : "World Resonance"}
                  </h3>
                  <p className="text-sm font-medium text-[#2C2C2C] mb-1">{result.world.name}</p>
                  <p className="text-sm leading-relaxed text-[#2C2C2C]/70">{result.world.desc}</p>
                  {result.world.tension && (
                    <p className="mt-2 text-xs text-[#2C2C2C]/50 italic">
                      {lang === "zh" ? "张力：" : "Tension: "}{result.world.tension}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Reset button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 text-center"
              >
                <Button variant="outline" onClick={handleReset} className="rounded-xl">
                  {lang === "zh" ? "重新选择" : "Start Over"}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No result hint */}
        {!result && type1 && !type2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground text-center"
          >
            {lang === "zh" ? "👆 请选择对方的人格类型" : "👆 Select the other person's type"}
          </motion.p>
        )}
      </main>
    </div>
  );
}
