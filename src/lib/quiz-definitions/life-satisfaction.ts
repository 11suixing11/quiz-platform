import legacy from "../tests/life-satisfaction";
import { QUIZ_MEDIA } from "../quiz-media";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { ScoreBand } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const scoreBands: ScoreBand[] = [
  {
    id: "low",
    min: 20,
    max: 30,
    icon: "😞",
    color: "#C26A5A",
    title: { zh: "低生活满意度", en: "Low Life Satisfaction" },
    description: {
      zh: "最近的生活可能有几处持续摩擦。先找出最想改变的一小块，比要求自己立刻变得积极更有帮助。",
      en: "Several parts of life may be creating ongoing friction. Start with one small area you want to change instead of demanding instant positivity.",
    },
  },
  {
    id: "moderate",
    min: 31,
    max: 60,
    icon: "😐",
    color: "#C28B42",
    title: { zh: "中等生活满意度", en: "Moderate Life Satisfaction" },
    description: {
      zh: "你对生活的部分方面感到满意，也能看见仍有调整空间。留意哪些条件最能支持你的稳定感。",
      en: "Some parts of life feel satisfying while others still need adjustment. Notice which conditions support your sense of steadiness.",
    },
  },
  {
    id: "high",
    min: 61,
    max: 100,
    icon: "🌟",
    color: "#4E8A67",
    title: { zh: "高生活满意度", en: "High Life Satisfaction" },
    description: {
      zh: "你目前能在多个生活领域感到满足。看看哪些选择与关系正在持续提供这种支持。",
      en: "You currently feel satisfied across several areas of life. Notice which choices and relationships keep providing that support.",
    },
  },
];

const definition = defineQuiz({
  id: "life-satisfaction",
  kind: "score",
  category: "lifestyle",
  accent: legacy.color ?? "#FFC107",
  duration: "3-6",
  title: {
    zh: "生活满意度测试",
    en: "Life Satisfaction Test",
  },
  description: {
    zh: "回看此刻对生活各方面的感受，找到满足感与摩擦感分别来自哪里。",
    en: "Check in with how life feels right now and notice where satisfaction or friction may be coming from.",
  },
  media: QUIZ_MEDIA["life-satisfaction"],
  questions,
  resultContent: {
    uiText: legacy.uiText,
    scoreBands,
    scoreRange: { min: 20, max: 100 },
  },
  calculate: (answers) => {
    const answered = answers.reduce((total, answer, index) => total + (questions[index]?.options[answer] ? 1 : 0), 0);
    const points = answers.reduce((total, answer, index) => total + (questions[index]?.options[answer]?.score ?? 0), 0);
    return { score: answered ? Math.round((points / (answered * 5)) * 100) : 0 };
  },
});

export default definition;
