import legacy from "../tests/career-values";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  AC: {
    name: "Achievement",
    zh: "成就与认可",
    description: "通过挑战、成果、成长和外部认可获得动力的程度。",
    descriptionEn: "Being motivated by challenge, results, growth, and recognition.",
    observation: {
      zh: "你需要的不只是“有事做”，而是能看见自己正在变强、做成了什么；没有反馈的努力容易让你慢慢失去燃料。",
      en: "You need more than tasks to fill time. Seeing yourself grow and knowing what you accomplished fuels you; effort without feedback can slowly drain that fuel.",
    },
  },
  WB: {
    name: "Work-life boundaries",
    zh: "工作生活边界",
    description: "为关系、休息和个人生活保留时间的重视程度。",
    descriptionEn: "Keeping time for relationships, rest, and life outside work.",
    observation: {
      zh: "你在意工作能不能和生活共存，而不是每次都靠牺牲休息来证明认真；长期没有边界，会让你连喜欢的事也开始厌倦。",
      en: "You want work and life to coexist rather than proving commitment by sacrificing rest. Without boundaries for too long, even meaningful work can become hard to love.",
    },
  },
  AU: {
    name: "Autonomy",
    zh: "自主权",
    description: "自己决定目标、方法和节奏的需要程度。",
    descriptionEn: "The need to decide your goals, methods, and pace for yourself.",
    observation: {
      zh: "你可以接受难题，但很难接受别人替你规定每一步怎么走；拥有选择权时，你的责任感和创造力反而更容易出来。",
      en: "You can handle difficult work, but being told exactly how to take every step is harder. Choice tends to bring out more of your responsibility and creativity.",
    },
  },
  SI: {
    name: "Social impact",
    zh: "社会影响",
    description: "通过工作帮助他人、创造意义或产生公共价值的重视程度。",
    descriptionEn: "Helping others, creating meaning, or contributing public value through work.",
    observation: {
      zh: "当你知道自己的工作确实让某个人、某件事或一个更大的目标变得更好，你会更愿意承受过程里的辛苦。",
      en: "Knowing that your work genuinely helps a person, a cause, or a larger purpose makes the hard parts more worth carrying.",
    },
  },
};

const definition = defineQuiz({
  id: "career-values",
  kind: "dimensions",
  category: "career",
  accent: legacy.color ?? "#3F51B5",
  duration: "3-6",
  title: { zh: "职业价值观测试", en: "Career Values Test" },
  description: {
    zh: "看见成就、生活边界、自主权与社会影响在你职业选择中的分量。",
    en: "See how achievement, life boundaries, autonomy, and social impact weigh into your career choices.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    dimensions,
    narrative: {
      default: {
        zh: { description: "这些维度可以同时重要，不需要选出唯一答案。更有用的问题是：当前工作满足了哪些价值，又长期压低了哪些价值？" },
        en: { description: "Several values can matter at the same time. Rather than choosing one winner, ask which values your current work supports and which it repeatedly pushes aside." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["AC", "WB", "AU", "SI"]);
    return { scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
