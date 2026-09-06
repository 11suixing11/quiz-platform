import legacy from "../tests/animal-personality";
import { QUIZ_MEDIA } from "../quiz-media";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  LI: {
    name: "Lion drive",
    zh: "狮子行动力",
    description: "主动、果断、愿意承担领导责任的倾向。",
    descriptionEn: "A tendency to act decisively, take initiative, and carry responsibility.",
    observation: {
      zh: "别人还在判断要不要开始时，你更容易先站出来，把模糊的问题变成一个可以行动的下一步。",
      en: "While others are still deciding whether to begin, you are more likely to step forward and turn an unclear problem into a next action.",
    },
  },
  DO: {
    name: "Dog connection",
    zh: "狗狗连接力",
    description: "重视忠诚、协作与相互支持的倾向。",
    descriptionEn: "A tendency to value loyalty, cooperation, and mutual support.",
    observation: {
      zh: "你会记得谁需要被照顾、谁答应过什么，也很在意一段关系能不能经得住时间和小摩擦。",
      en: "You remember who needs support and who promised what, and you care whether a relationship can hold up through time and small frictions.",
    },
  },
  CA: {
    name: "Cat independence",
    zh: "猫咪独立性",
    description: "按自己的节奏行动并从独处中恢复的倾向。",
    descriptionEn: "A tendency to move at your own pace and recover through solitude.",
    observation: {
      zh: "你不一定抗拒连接，但需要保留一块不被打扰的空间，才能重新听见自己的节奏和判断。",
      en: "You do not necessarily avoid connection, but you need some undisturbed space to hear your own pace and judgment again.",
    },
  },
  OW: {
    name: "Owl observation",
    zh: "猫头鹰观察力",
    description: "先观察、思考，再形成判断的倾向。",
    descriptionEn: "A tendency to observe and think before forming a judgment.",
    observation: {
      zh: "你常会先看清气氛、细节和前因后果，再开口；别人觉得你安静时，你可能已经在心里整理出完整判断。",
      en: "You often read the atmosphere, details, and context before speaking. While others see quiet, you may already be forming a complete judgment.",
    },
  },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: {
      title: "混合动物画像",
      name: "混合型",
      description: "你是混合型：行动、连接、独处与观察都能成为你的自然方式，你会根据情境切换。多面性就是你的特点。",
    },
    en: {
      title: "Mixed Animal Profile",
      name: "Mixed profile",
      description: "You are a mixed profile: action, connection, independence, and observation can all come naturally to you. Your range is part of what makes this profile yours.",
    },
  },
};

const definition = defineQuiz({
  id: "animal-personality",
  kind: "type",
  category: "personality",
  duration: "3-6",
  title: { zh: "动物人格测试", en: "Animal Personality Test" },
  description: {
    zh: "用四种动物意象回看你的行动、关系与独处倾向。",
    en: "Use four animal archetypes to reflect on how you act, connect, and recharge alone.",
  },
  media: QUIZ_MEDIA["animal-personality"],
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    dimensions,
  },
  calculate: (answers) => {
    const totals: Record<string, number> = { LI: 0, DO: 0, CA: 0, OW: 0 };
    const counts: Record<string, number> = { LI: 0, DO: 0, CA: 0, OW: 0 };
    answers.forEach((answer, index) => {
      const question = questions[index];
      const dimension = question?.dimension;
      const option = question?.options[answer];
      if (dimension && option && dimension in totals) {
        totals[dimension] += option.score;
        counts[dimension] += 1;
      }
    });

    const percentages = Object.fromEntries(
      Object.keys(totals).map((key) => [key, counts[key] ? Math.round((totals[key] / (counts[key] * 5)) * 100) : 0]),
    );
    const ranked = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    const tied = ranked.length > 1 && ranked[0][1] === ranked[1][1];
    const type = tied ? "MIXED" : ranked[0][0];

    return {
      type,
      secondary: tied ? undefined : ranked[1]?.[0],
      scores: totals,
      percentages,
      dimensions: Object.entries(dimensions).map(([key, metadata]) => ({
        name: key,
        zh: metadata.zh,
        en: metadata.name,
        score: percentages[key] ?? 0,
      })),
    };
  },
});

export default definition;
