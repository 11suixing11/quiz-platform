"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Lang } from "@/lib/types";

/* ---------- Educational content per category ---------- */
const INSIGHTS: Record<string, { zh: { title: string; content: string; basis: string }; en: { title: string; content: string; basis: string } }> = {
  personality: {
    zh: {
      title: "这个测试测量什么",
      content: "人格测试探索你稳定的行为模式、偏好和气质倾向。帮助你理解为什么你在某些情境下会做出特定反应。",
      basis: "基于人格心理学研究，包括特质理论和类型理论，这些框架已被广泛验证并应用于临床、教育和职业领域。",
    },
    en: {
      title: "What this test measures",
      content: "Personality tests explore your stable patterns of behavior, preferences, and temperamental tendencies. They help you understand why you react in certain ways in specific situations.",
      basis: "Based on personality psychology research, including trait theories and type theories, these frameworks have been extensively validated across clinical, educational, and occupational domains.",
    },
  },
  emotion: {
    zh: {
      title: "这个测试测量什么",
      content: "情绪测试评估你识别、表达和调节情绪的能力与模式。帮助你了解自己的情绪习惯和潜在的改进空间。",
      basis: "基于情绪心理学和情商研究，借鉴了Gross的情绪调节模型和Bar-On的情商理论。",
    },
    en: {
      title: "What this test measures",
      content: "Emotion tests assess your ability and patterns in identifying, expressing, and regulating emotions. They help you understand your emotional habits and areas for potential growth.",
      basis: "Based on emotion psychology and emotional intelligence research, drawing from Gross's emotion regulation model and Bar-On's emotional intelligence theory.",
    },
  },
  mental: {
    zh: {
      title: "这个测试测量什么",
      content: "心理健康测试关注你的心理状态、压力水平和内在韧性。这类测试帮助你觉察可能需要关注的心理健康领域。",
      basis: "基于临床心理学和积极心理学研究，参考了WHO心理健康框架和压力应对理论。",
    },
    en: {
      title: "What this test measures",
      content: "Mental health tests focus on your psychological state, stress levels, and inner resilience. They help you become aware of mental health areas that may need attention.",
      basis: "Based on clinical and positive psychology research, referencing WHO mental health frameworks and stress-coping theories.",
    },
  },
  relationship: {
    zh: {
      title: "这个测试测量什么",
      content: "关系测试探索你与他人建立和维持关系的方式，包括沟通模式、依恋风格和冲突处理方式。",
      basis: "基于依恋理论（Bowlby & Ainsworth）、关系心理学和人际沟通研究。",
    },
    en: {
      title: "What this test measures",
      content: "Relationship tests explore how you build and maintain connections with others, including communication patterns, attachment styles, and conflict resolution approaches.",
      basis: "Based on attachment theory (Bowlby & Ainsworth), relationship psychology, and interpersonal communication research.",
    },
  },
  career: {
    zh: {
      title: "这个测试测量什么",
      content: "职业测试帮助你了解自己的职业倾向、决策风格和工作动机，为职业规划提供参考。",
      basis: "基于职业心理学和组织行为学研究，参考了Holland职业兴趣理论和Schein的职业锚理论。",
    },
    en: {
      title: "What this test measures",
      content: "Career tests help you understand your vocational inclinations, decision-making style, and work motivations, providing guidance for career planning.",
      basis: "Based on vocational and organizational psychology research, referencing Holland's RIASEC model and Schein's career anchor theory.",
    },
  },
  intelligence: {
    zh: {
      title: "这个测试测量什么",
      content: "认知测试评估你的思维方式、创造力和问题解决能力，帮助你了解自己独特的认知优势。",
      basis: "基于认知心理学和多元智能理论（Gardner），以及Sternberg的三元智力理论。",
    },
    en: {
      title: "What this test measures",
      content: "Cognitive tests assess your thinking patterns, creativity, and problem-solving abilities, helping you understand your unique cognitive strengths.",
      basis: "Based on cognitive psychology and Gardner's multiple intelligences theory, as well as Sternberg's triarchic theory of intelligence.",
    },
  },
  lifestyle: {
    zh: {
      title: "这个测试测量什么",
      content: "生活方式测试探索你的日常习惯、价值观和生活选择，帮助你反思当前的生活方式是否与内在需求一致。",
      basis: "基于生活方式心理学和行为科学研究，参考了价值观理论和习惯形成研究。",
    },
    en: {
      title: "What this test measures",
      content: "Lifestyle tests explore your daily habits, values, and life choices, helping you reflect on whether your current lifestyle aligns with your inner needs.",
      basis: "Based on lifestyle psychology and behavioral science research, referencing value theories and habit formation studies.",
    },
  },
  social: {
    zh: {
      title: "这个测试测量什么",
      content: "社交测试评估你在社交场合中的行为模式、舒适度和人际交往策略。",
      basis: "基于社会心理学和社交智能理论，参考了Goleman的社交智能研究。",
    },
    en: {
      title: "What this test measures",
      content: "Social tests assess your behavioral patterns, comfort level, and interpersonal strategies in social situations.",
      basis: "Based on social psychology and social intelligence theory, referencing Goleman's social intelligence research.",
    },
  },
  fun: {
    zh: {
      title: "这个测试测量什么",
      content: "趣味测试以轻松有趣的方式帮你从不同角度认识自己。虽然方式轻松，但背后依然有心理学原理的支撑。",
      basis: "融合了流行心理学和自我认知研究，以寓教于乐的方式促进自我探索。",
    },
    en: {
      title: "What this test measures",
      content: "Fun tests help you explore yourself from different angles in a lighthearted way. Though playful, they're grounded in psychological principles.",
      basis: "Drawing from popular psychology and self-awareness research, promoting self-discovery through an enjoyable experience.",
    },
  },
};

const DEFAULT_INSIGHT = {
  zh: { title: "这个测试测量什么", content: "本测试帮助你更好地了解自己。", basis: "基于心理学研究和自我认知理论。" },
  en: { title: "What this test measures", content: "This test helps you better understand yourself.", basis: "Based on psychology research and self-awareness theory." },
};

/* ---------- Component ---------- */

interface TestInsightsProps {
  category: string;
  lang: Lang;
}

export function TestInsights({ category, lang }: TestInsightsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);

  const insight = INSIGHTS[category] || DEFAULT_INSIGHT;
  const text = insight[lang === "ja" ? "en" : lang];

  return (
    <div className="mb-8">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-xl border border-[#2C2C2C]/10 dark:border-white/10 px-4 py-3 text-left hover:bg-[#2C2C2C]/5 dark:hover:bg-white/5 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-[#2C2C2C] dark:text-white">
          <Info className="size-4 text-[#2C2C2C]/40 dark:text-white/40" />
          {text.title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="size-4 text-[#2C2C2C]/40 dark:text-white/40" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <Card className="mt-2 p-4 space-y-3">
              <p className="text-sm text-[#2C2C2C]/80 dark:text-white/80 leading-relaxed">
                {text.content}
              </p>
              <div className="pt-2 border-t border-[#2C2C2C]/10 dark:border-white/10">
                <p className="text-xs text-[#2C2C2C]/50 dark:text-white/50 leading-relaxed">
                  <span className="font-semibold">
                    {lang === "zh" ? "科学依据：" : "Scientific basis: "}
                  </span>
                  {text.basis}
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
