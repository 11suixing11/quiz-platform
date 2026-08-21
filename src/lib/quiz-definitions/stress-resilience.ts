import legacy from "../tests/stress-resilience";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  HA: { name: "Hardiness", zh: "坚韧与投入", description: "压力下保持投入、影响感和挑战视角的倾向。" },
  CR: { name: "Coping resources", zh: "应对资源", description: "能否找到具体、可执行的处理方式。" },
  SS: { name: "Social support", zh: "社会支持", description: "是否拥有并愿意使用可信任的关系支持。" },
  MM: { name: "Meaning-making", zh: "意义建构", description: "能否从困难中形成理解、方向或新的价值。" },
};

const definition = defineQuiz({
  id: "stress-resilience",
  kind: "dimensions",
  category: "mental",
  accent: legacy.color ?? "#607D8B",
  duration: "3-6",
  title: { zh: "压力韧性测试", en: "Stress Resilience Test" },
  description: {
    zh: "回看压力下可用的坚持、应对资源、社会支持与意义感。",
    en: "Reflect on the hardiness, coping resources, social support, and meaning available to you under pressure.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    resultTypes: legacy.resultTypes,
    dimensions,
    narrative: {
      default: {
        zh: { description: "韧性不是永远不受影响，而是在压力中仍能调用一些内部或外部资源。低分维度更适合作为支持入口，而不是缺点标签。" },
        en: { description: "Resilience does not mean being unaffected. It means having some internal or external resources available under pressure. Lower dimensions are better treated as support entry points than as flaws." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages, overallScore } = scoreDimensions(questions, answers, ["HA", "CR", "SS", "MM"]);
    return { score: overallScore, scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
