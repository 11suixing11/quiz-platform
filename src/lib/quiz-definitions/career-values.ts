import legacy from "../tests/career-values";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  AC: { name: "Achievement", zh: "成就与认可", description: "通过挑战、成果、成长和外部认可获得动力的程度。" },
  WB: { name: "Work-life boundaries", zh: "工作生活边界", description: "为关系、休息和个人生活保留时间的重视程度。" },
  AU: { name: "Autonomy", zh: "自主权", description: "自己决定目标、方法和节奏的需要程度。" },
  SI: { name: "Social impact", zh: "社会影响", description: "通过工作帮助他人、创造意义或产生公共价值的重视程度。" },
};

const definition = defineQuiz({
  id: "career-values",
  kind: "dimensions",
  category: "career",
  accent: legacy.color ?? "#3F51B5",
  duration: "3-6",
  title: { zh: "职业价值观测试", en: "Career Values Test" },
  description: {
    zh: "看见成就、生活边界、自主权与社会影响在你职业选择中的分量。",
    en: "See how achievement, life boundaries, autonomy, and social impact weigh into your career choices.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    dimensions,
    narrative: {
      default: {
        zh: { description: "这些维度可以同时重要，不需要选出唯一答案。更有用的问题是：当前工作满足了哪些价值，又长期压低了哪些价值？" },
        en: { description: "Several values can matter at the same time. Rather than choosing one winner, ask which values your current work supports and which it repeatedly pushes aside." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["AC", "WB", "AU", "SI"]);
    return { scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
