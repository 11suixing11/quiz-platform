import legacy from "../tests/attachment-style";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, rankDimensions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  SE: { name: "Secure", zh: "安全感", description: "在亲密关系中信任、表达需要并保持相对放松的倾向。" },
  AN: { name: "Anxious", zh: "焦虑倾向", description: "对距离、回应和被离开的可能更敏感的倾向。" },
  AV: { name: "Avoidant", zh: "回避倾向", description: "在亲密和依赖增加时，更容易拉开距离的倾向。" },
  DI: { name: "Disorganized", zh: "矛盾不确定", description: "同时渴望靠近又感到不安，反应可能来回切换的倾向。" },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: {
      title: "混合依恋画像",
      name: "混合倾向",
      description: "这次回答中没有一种依恋倾向明显领先。不同关系、阶段和安全感可能让你呈现不同反应。",
    },
    en: {
      title: "Mixed Attachment Profile",
      name: "Mixed pattern",
      description: "No single attachment tendency clearly leads in these answers. Different relationships, stages, and levels of safety may bring out different responses.",
    },
  },
};

const definition = defineQuiz({
  id: "attachment-style",
  kind: "type",
  category: "relationship",
  accent: legacy.color ?? "#E91E63",
  duration: "6-11",
  title: { zh: "依恋风格测试", en: "Attachment Style Test" },
  description: {
    zh: "回看你在靠近、寻求确认、保持距离和关系不确定感中的常见反应。",
    en: "Reflect on how you respond to closeness, reassurance, distance, and uncertainty in important relationships.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    archetypes: legacy.archetypes,
    dimensions,
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["SE", "AN", "AV", "DI"]);
    const ranking = rankDimensions(percentages);
    const type = ranking.tied ? "MIXED" : ranking.primary;
    return {
      type,
      dominantType: type,
      secondary: ranking.tied ? undefined : ranking.secondary,
      scores,
      percentages,
      dimensions: dimensionResults(dimensions, percentages),
    };
  },
});

export default definition;
