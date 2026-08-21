import legacy from "../tests/emotion-regulation";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  CR: { name: "Cognitive reappraisal", zh: "认知重评", description: "通过改变理解角度来调整情绪影响的倾向。" },
  ES: { name: "Expressive suppression", zh: "表达抑制", description: "把已经出现的情绪表达收起来的频率；高分不等于更好。" },
  AC: { name: "Acceptance", zh: "情绪接纳", description: "允许感受存在，而不是立刻否定或摆脱它的倾向。" },
};

const definition = defineQuiz({
  id: "emotion-regulation",
  kind: "dimensions",
  category: "emotion",
  accent: legacy.color ?? "#FF9800",
  duration: "4-7",
  title: { zh: "情绪调节测试", en: "Emotion Regulation Test" },
  description: {
    zh: "看看你如何重新理解情境、接纳感受，以及何时会压住情绪表达。",
    en: "See how you reframe situations, accept feelings, and sometimes hold emotional expression back.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    dimensions,
    narrative: {
      default: {
        zh: { description: "这三个分数描述你使用不同策略的频率，不是一张“情绪管理好坏”的总成绩单。尤其是表达抑制，高低都需要结合情境理解。" },
        en: { description: "These scores describe how often you use different strategies; they are not an overall grade for emotional skill. Expressive suppression in particular needs context rather than a simple high-is-good reading." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["CR", "ES", "AC"]);
    return { scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
