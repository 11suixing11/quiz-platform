import legacy from "../tests/self-compassion";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  SK: {
    name: "Self-kindness",
    zh: "自我善意",
    description: "犯错或受挫时，是否能减少苛责并给予自己理解。",
    descriptionEn: "Responding to mistakes or setbacks with less self-criticism and more understanding.",
    observation: {
      zh: "你对别人往往比对自己宽容；真正的练习不是放过错误，而是在承认错误后，仍然愿意站在自己这边。",
      en: "You may be more forgiving toward others than yourself. The practice is not excusing mistakes, but staying on your own side after acknowledging them.",
    },
  },
  CH: {
    name: "Common humanity",
    zh: "共同人性",
    description: "能否记得困难并非只发生在自己身上。",
    descriptionEn: "Remembering that difficulty is part of being human and not yours alone.",
    observation: {
      zh: "难受时你很容易以为“只有我这样”；当你想起别人也会卡住、失败和需要时间，孤立感会松开一点。",
      en: "When things hurt, it can feel like “I am the only one like this.” Remembering that others also struggle can loosen the sense of isolation.",
    },
  },
  MI: {
    name: "Mindful awareness",
    zh: "清醒觉察",
    description: "能否看见痛苦而不否认，也不被它完全淹没。",
    descriptionEn: "Seeing pain without denying it or being completely overwhelmed by it.",
    observation: {
      zh: "你可以一边承认“我现在真的不好受”，一边不让这份感受替你决定全部结论；这中间的空间很珍贵。",
      en: "You can acknowledge “this really hurts” without letting the feeling decide every conclusion for you. That space in between matters.",
    },
  },
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
