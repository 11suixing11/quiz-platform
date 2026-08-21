import legacy from "../tests/work-style";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, rankDimensions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  PL: { name: "Planner", zh: "规划", description: "先建立结构、顺序和明确预期再推进工作的倾向。" },
  IM: { name: "Improviser", zh: "即兴应变", description: "根据新信息灵活调整并在行动中形成方案的倾向。" },
  CB: { name: "Collaborator", zh: "协作", description: "通过讨论、反馈和共同判断完成工作的倾向。" },
  IN: { name: "Independent", zh: "独立专注", description: "在低干扰环境中自主判断并深入推进的倾向。" },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: { title: "混合工作风格", name: "混合型", description: "这次回答中没有一种工作方式明显领先。你可能会根据任务阶段、团队和不确定性切换方法。" },
    en: { title: "Mixed Work Style", name: "Mixed style", description: "No single work pattern clearly leads in these answers. You may switch methods depending on the task stage, team, and level of uncertainty." },
  },
};

const definition = defineQuiz({
  id: "work-style",
  kind: "type",
  category: "career",
  accent: legacy.color ?? "#607D8B",
  duration: "3-6",
  title: { zh: "工作风格测试", en: "Work Style Test" },
  description: {
    zh: "看见你在规划、应变、协作与独立工作之间更常使用的方式。",
    en: "See how you tend to balance planning, improvisation, collaboration, and independent work.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    dimensions,
  },
  calculate: (answers) => {
    const { scores, percentages, overallScore } = scoreDimensions(questions, answers, ["PL", "IM", "CB", "IN"]);
    const ranking = rankDimensions(percentages);
    const type = ranking.tied ? "MIXED" : ranking.primary;
    return {
      type,
      dominantType: type,
      secondary: ranking.tied ? undefined : ranking.secondary,
      score: overallScore,
      scores,
      percentages,
      dimensions: dimensionResults(dimensions, percentages),
    };
  },
});

export default definition;
