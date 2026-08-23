import legacy from "../tests/work-style";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, rankDimensions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  PL: {
    name: "Planner",
    zh: "规划",
    description: "先建立结构、顺序和明确预期再推进工作的倾向。",
    descriptionEn: "Creating structure, sequence, and clear expectations before moving work forward.",
    observation: {
      zh: "开始之前先把路径想清楚，会让你更安心；计划不是束缚，而是帮你把注意力留给真正重要的部分。",
      en: "Thinking through the path before starting helps you settle. A plan is not a cage; it keeps your attention for what matters.",
    },
  },
  IM: {
    name: "Improviser",
    zh: "即兴应变",
    description: "根据新信息灵活调整并在行动中形成方案的倾向。",
    descriptionEn: "Adjusting to new information and forming a solution through action.",
    observation: {
      zh: "你常在真正动起来以后才看见最好的办法；临时变化不一定打乱你，反而可能让你进入状态。",
      en: "You often find the best method after you start moving. A last-minute change does not always disrupt you; it may help you get into the work.",
    },
  },
  CB: {
    name: "Collaborator",
    zh: "协作",
    description: "通过讨论、反馈和共同判断完成工作的倾向。",
    descriptionEn: "Completing work through discussion, feedback, and shared judgment.",
    observation: {
      zh: "你不是单纯需要热闹，而是相信好的想法经得起来回讨论；有人一起看，很多问题会更快变清楚。",
      en: "You do not simply need company. You trust ideas that survive discussion, and another perspective can make a problem clear faster.",
    },
  },
  IN: {
    name: "Independent",
    zh: "独立专注",
    description: "在低干扰环境中自主判断并深入推进的倾向。",
    descriptionEn: "Making independent judgments and going deep in a low-distraction environment.",
    observation: {
      zh: "你需要一段不被频繁打断的时间，把复杂的事按自己的逻辑想透；过多同步反而会切碎你的专注。",
      en: "You need uninterrupted time to think complex work through in your own logic; too much coordination can fragment your focus.",
    },
  },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: { title: "混合工作风格", name: "混合型", description: "你是混合型：能在规划、应变、协作与独立推进之间切换，按任务需要调用不同方式。灵活切换本身就是你的工作优势。" },
    en: { title: "Mixed Work Style", name: "Mixed style", description: "You are a mixed style: you can move between planning, improvising, collaborating, and working independently as the task requires. That flexibility is part of your strength." },
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
