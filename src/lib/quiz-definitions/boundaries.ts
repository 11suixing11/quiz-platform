import legacy from "../tests/boundaries";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, ScoreBand } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  HB: { name: "Boundary expression", zh: "边界表达", description: "表达需要、拒绝、保护空间并尊重彼此界限的能力。" },
  PB: { name: "Boundary pressure", zh: "边界压力", description: "因为担心拒绝、关系受损或被否定而难以坚持界限的程度。" },
};

const scoreBands: ScoreBand[] = [
  {
    min: 0,
    max: 30,
    icon: "🚧",
    color: "#C26A5A",
    title: { zh: "边界承受较大压力", en: "Boundaries Under Pressure" },
    description: {
      zh: "表达拒绝、保护需要或承受他人的失望，最近可能比较困难。先从风险较低的情境练习一句具体而温和的界限。",
      en: "Saying no, protecting your needs, or tolerating another person's disappointment may feel difficult right now. Begin with one specific, gentle limit in a lower-risk situation.",
    },
    suggestions: {
      zh: ["把含糊的不舒服改写成具体请求", "先在低风险关系中练习说不"],
      en: ["Turn vague discomfort into a specific request", "Practice saying no first in a lower-risk relationship"],
    },
  },
  {
    min: 31,
    max: 60,
    icon: "🛡️",
    color: "#B8893D",
    title: { zh: "边界仍会随情境波动", en: "Context-Dependent Boundaries" },
    description: {
      zh: "你在一些关系中能表达界限，在另一些情境里则更容易退让。留意是谁、什么压力或哪种期待最容易改变你的选择。",
      en: "You can express limits in some relationships but may give way more easily in others. Notice which people, pressures, or expectations are most likely to change your response.",
    },
  },
  {
    min: 61,
    max: 100,
    icon: "🏡",
    color: "#4E8A67",
    title: { zh: "边界表达较稳定", en: "More Stable Boundaries" },
    description: {
      zh: "你目前较能表达需要、保护空间并尊重他人的界限。继续保持弹性：健康边界既不是完全封闭，也不是永远答应。",
      en: "You currently show a steadier ability to express needs, protect space, and respect others' limits. Keep the flexibility: healthy boundaries are neither total walls nor automatic agreement.",
    },
  },
];

const definition = defineQuiz({
  id: "boundaries",
  kind: "score",
  category: "lifestyle",
  accent: legacy.color ?? "#FF9800",
  duration: "3-6",
  title: { zh: "边界感测试", en: "Boundaries Test" },
  description: {
    zh: "看看你如何表达需求、保护空间，也如何处理拒绝他人的压力。",
    en: "Reflect on how you express needs, protect space, and handle the pressure of saying no.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    scoreBands,
    scoreRange: { min: 0, max: 100 },
    dimensions,
  },
  calculate: (answers) => {
    const totals: Record<string, number> = { HB: 0, PB: 0 };
    const counts: Record<string, number> = { HB: 0, PB: 0 };
    answers.forEach((answer, index) => {
      const question = questions[index];
      const dimension = question?.dimension;
      const option = question?.options[answer];
      if (dimension && option && dimension in totals) {
        totals[dimension] += option.score;
        counts[dimension] += 1;
      }
    });

    const average = (key: string) => counts[key] ? totals[key] / counts[key] : 3;
    const healthy = Math.round(((average("HB") - 1) / 4) * 100);
    const pressure = Math.round(((average("PB") - 1) / 4) * 100);
    const score = Math.round((healthy + (100 - pressure)) / 2);

    return {
      score,
      percentages: { HB: healthy, PB: pressure },
      dimensions: [
        { name: "HB", zh: dimensions.HB.zh, en: dimensions.HB.name, score: healthy },
        { name: "PB", zh: dimensions.PB.zh, en: dimensions.PB.name, score: pressure },
      ],
    };
  },
});

export default definition;
