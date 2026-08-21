import legacy from "../tests/animal-personality";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  LI: { name: "Lion drive", zh: "狮子行动力", description: "主动、果断、愿意承担领导责任的倾向。" },
  DO: { name: "Dog connection", zh: "狗狗连接力", description: "重视忠诚、协作与相互支持的倾向。" },
  CA: { name: "Cat independence", zh: "猫咪独立性", description: "按自己的节奏行动并从独处中恢复的倾向。" },
  OW: { name: "Owl observation", zh: "猫头鹰观察力", description: "先观察、思考，再形成判断的倾向。" },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: {
      title: "混合动物画像",
      name: "混合型",
      description: "这次回答中没有单一动物倾向明显领先。你可能会根据情境切换行动、连接、独处与观察的方式。",
    },
    en: {
      title: "Mixed Animal Profile",
      name: "Mixed profile",
      description: "No single animal pattern clearly leads in these answers. You may shift between action, connection, independence, and observation depending on the situation.",
    },
  },
};

const definition = defineQuiz({
  id: "animal-personality",
  kind: "type",
  category: "personality",
  accent: legacy.color ?? "#795548",
  duration: "3-6",
  title: { zh: "动物人格测试", en: "Animal Personality Test" },
  description: {
    zh: "用四种动物意象回看你的行动、关系与独处倾向。",
    en: "Use four animal archetypes to reflect on how you act, connect, and recharge alone.",
  },
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
