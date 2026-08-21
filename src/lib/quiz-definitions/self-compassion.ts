import legacy from "../tests/self-compassion";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  SK: { name: "Self-kindness", zh: "自我善意", description: "犯错或受挫时，是否能减少苛责并给予自己理解。" },
  CH: { name: "Common humanity", zh: "共同人性", description: "能否记得困难并非只发生在自己身上。" },
  MI: { name: "Mindful awareness", zh: "清醒觉察", description: "能否看见痛苦而不否认，也不被它完全淹没。" },
};

const definition = defineQuiz({
  id: "self-compassion",
  kind: "dimensions",
  category: "personality",
  accent: legacy.color ?? "#F44336",
  duration: "2-4",
  title: { zh: "自我关怀测试", en: "Self-Compassion Test" },
  description: {
    zh: "回看你在困难时给予自己的善意、共同感与清醒关注。",
    en: "Reflect on the kindness, shared humanity, and mindful attention you offer yourself during difficulty.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    dimensions,
    narrative: {
      default: {
        zh: { description: "自我关怀不是放弃责任，而是在承认困难后，用更可持续的方式继续行动。三个维度可以分别练习，不必一次都做到。" },
        en: { description: "Self-compassion is not avoiding responsibility. It means acknowledging difficulty and continuing in a more sustainable way. Each dimension can be practiced separately." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["SK", "CH", "MI"]);
    return { scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
