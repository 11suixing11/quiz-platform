import legacy from "../tests/personality-archetype";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

function cleanEnglish(text: string) {
  return text
    .replaceAll("I渴望 to", "I long to")
    .replaceAll("You渴望 to", "You long to")
    .replaceAll("curiosity,渴望 freedom", "curiosity, a desire for freedom")
    .replaceAll("deeply思考 the", "deeply consider the");
}

function cleanTypeData(value: { zh: TypeData; en: TypeData }) {
  return {
    zh: value.zh,
    en: Object.fromEntries(Object.entries(value.en ?? {}).map(([key, text]) => [key, typeof text === "string" ? cleanEnglish(text) : text])),
  };
}

const questions = normalizeLegacyQuestions(legacy.questions).map((question) => ({
  ...question,
  prompt: { ...question.prompt, en: cleanEnglish(question.prompt.en) },
}));

const dimensions: Record<string, DimensionData> = {
  HR: { name: "Hero", zh: "英雄" },
  CG: { name: "Caregiver", zh: "照顾者" },
  EX: { name: "Explorer", zh: "探索者" },
  RB: { name: "Rebel", zh: "叛逆者" },
  CR: { name: "Creator", zh: "创造者" },
  SG: { name: "Sage", zh: "智者" },
};

const types = Object.fromEntries(
  Object.entries(legacy.types ?? {}).map(([key, value]) => [key, cleanTypeData(value as { zh: TypeData; en: TypeData })]),
);

const definition = defineQuiz({
  id: "personality-archetype",
  kind: "type",
  category: "personality",
  accent: legacy.color ?? "#795548",
  duration: "4-7",
  title: {
    zh: "人格原型测试",
    en: "Personality Archetype Test",
  },
  description: {
    zh: "从六种常见原型倾向中，看见你更常依靠的动力与行动方式。",
    en: "Explore six familiar archetype patterns and the motivations you tend to rely on most.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    resultTypes: legacy.resultTypes,
    types,
    dimensions,
  },
  calculate: (answers) => {
    const totals: Record<string, { total: number; count: number }> = {};
    for (const question of questions) {
      if (question.dimension && !totals[question.dimension]) totals[question.dimension] = { total: 0, count: 0 };
    }

    answers.forEach((answer, index) => {
      const question = questions[index];
      const bucket = question?.dimension ? totals[question.dimension] : undefined;
      const option = question?.options[answer];
      if (bucket && option) {
        bucket.total += option.score;
        bucket.count += 1;
      }
    });

    const percentages = Object.fromEntries(
      Object.entries(totals).map(([key, bucket]) => [
        key,
        bucket.count ? Math.round((bucket.total / (bucket.count * 5)) * 100) : 0,
      ]),
    );
    const dominantType = Object.entries(percentages).reduce(
      (best, current) => current[1] > best[1] ? current : best,
      ["HR", -1] as [string, number],
    )[0];
    const total = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer]?.score ?? 0), 0);
    const max = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer] ? 5 : 0), 0);

    return {
      type: dominantType,
      dominantType,
      score: max ? Math.round((total / max) * 100) : 0,
      percentages,
      dimensions: Object.entries(dimensions).map(([name, metadata]) => ({
        name,
        zh: metadata.zh,
        en: metadata.name,
        score: percentages[name] ?? 0,
      })),
    };
  },
});

export default definition;
