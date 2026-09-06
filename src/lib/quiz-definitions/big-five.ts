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
  O: {
    name: "Openness",
    zh: "开放性",
    description: "对新体验、想法、艺术与抽象概念的开放程度。",
    descriptionEn: "Openness to new experiences, ideas, art, and abstract concepts.",
    observation: {
      zh: "你会被新鲜的想法、不同的审美或没走过的路吸引；熟悉不一定让你安心，可能性反而会让你醒过来。",
      en: "New ideas, unfamiliar aesthetics, and paths you have not taken can draw you in. Familiarity does not always settle you; possibility can wake you up.",
    },
  },
  C: {
    name: "Conscientiousness",
    zh: "尽责性",
    description: "在计划、执行、秩序与目标坚持上的倾向。",
    descriptionEn: "Planning, following through, keeping order, and staying with goals.",
    observation: {
      zh: "你会把“想做”变成清单、顺序和交付；即使没人催，也很难完全放下自己对完成度的要求。",
      en: "You turn “I want to do this” into a list, sequence, and finish line. Even without anyone pushing you, it can be hard to put your standards down.",
    },
  },
  E: {
    name: "Extraversion",
    zh: "外向性",
    description: "从互动、表达与外部刺激中获得能量的倾向。",
    descriptionEn: "Gaining energy from interaction, expression, and external stimulation.",
    observation: {
      zh: "你的想法常在说出来、走出去、和别人碰一碰之后变得更清楚；太久没有互动，反而容易觉得自己被关小了。",
      en: "Your ideas often become clearer when spoken, explored, or tested with others. Too little interaction can make life feel smaller.",
    },
  },
  A: {
    name: "Agreeableness",
    zh: "宜人性",
    description: "在信任、合作、体谅与和谐上的倾向。",
    descriptionEn: "Trust, cooperation, consideration, and the wish to preserve harmony.",
    observation: {
      zh: "你会先想“站在对方的位置会怎样”，也愿意为关系留余地；需要留意的是，体谅别人不等于要把自己排到最后。",
      en: "You naturally ask what the situation feels like from the other person's side and leave room for the relationship. Remember that consideration does not require putting yourself last.",
    },
  },
  N: {
    name: "Neuroticism",
    zh: "神经质",
    description: "对压力、担忧与情绪波动的敏感程度。",
    descriptionEn: "Sensitivity to pressure, worry, and emotional shifts.",
    observation: {
      zh: "你比别人更早察觉气氛、风险和情绪的变化；这让你有细腻的感受力，也意味着你需要更认真地安排恢复时间。",
      en: "You may notice shifts in atmosphere, risk, and emotion earlier than others. That brings sensitivity, and it also makes recovery time worth planning deliberately.",
    },
  },
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
