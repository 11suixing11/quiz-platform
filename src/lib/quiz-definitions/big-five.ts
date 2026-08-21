import legacy from "../tests/big-five";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const reverseScoredIds = new Set([42, 43, 45, 47, 49, 50]);
const questions = normalizeLegacyQuestions(legacy.questions).map((question) => reverseScoredIds.has(question.id)
  ? {
      ...question,
      options: question.options.map((option) => ({ ...option, score: 6 - option.score })),
    }
  : question);

const dimensions: Record<string, DimensionData> = {
  O: { name: "Openness", zh: "开放性", description: "对新体验、想法、艺术与抽象概念的开放程度。" },
  C: { name: "Conscientiousness", zh: "尽责性", description: "在计划、执行、秩序与目标坚持上的倾向。" },
  E: { name: "Extraversion", zh: "外向性", description: "从互动、表达与外部刺激中获得能量的倾向。" },
  A: { name: "Agreeableness", zh: "宜人性", description: "在信任、合作、体谅与和谐上的倾向。" },
  N: { name: "Neuroticism", zh: "神经质", description: "对压力、担忧与情绪波动的敏感程度。" },
};

const archetypeMap: Record<string, string> = {
  O: "Openness",
  C: "Conscientiousness",
  E: "Extraversion",
  A: "Agreeableness",
  N: "Neuroticism",
};

const definition = defineQuiz({
  id: "big-five",
  kind: "dimensions",
  category: "personality",
  accent: legacy.color ?? "#00BFA5",
  duration: "10-18",
  title: {
    zh: "大五人格测试",
    en: "Big Five Personality Test",
  },
  description: {
    zh: "从五个维度看见你的性格轮廓，而不是把自己压缩成一个标签。",
    en: "See your personality across five dimensions instead of reducing yourself to one label.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    archetypes: Object.fromEntries(Object.entries(archetypeMap).map(([key, source]) => [key, legacy.archetypes?.[source]])),
    dimensions,
  },
  calculate: (answers) => {
    const scores: Record<string, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    const counts: Record<string, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };

    answers.forEach((answer, index) => {
      const question = questions[index];
      const dimension = question?.dimension;
      const option = question?.options[answer];
      if (dimension && option && dimension in scores) {
        scores[dimension] += option.score;
        counts[dimension] += 1;
      }
    });

    const percentages = Object.fromEntries(
      Object.keys(scores).map((key) => [key, counts[key] ? Math.round((scores[key] / (counts[key] * 5)) * 100) : 0]),
    );

    return {
      scores,
      percentages,
      dimensions: Object.entries(dimensions).map(([key, metadata]) => ({
        name: metadata.name,
        zh: metadata.zh,
        en: metadata.name,
        score: percentages[key] ?? 0,
      })),
    };
  },
});

export default definition;
