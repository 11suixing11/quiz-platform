import legacy from "../tests/emotional-resilience";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { ScoreBand } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const scoreBands: ScoreBand[] = [
  {
    id: "fewer-resources",
    min: 20,
    max: 30,
    icon: "🌱",
    color: "#C26A5A",
    title: { zh: "恢复资源较少", en: "Fewer Recovery Resources" },
    description: {
      zh: "最近面对情绪波动时，你可能较难快速恢复或找到有效支持。先识别最常消耗你的情境，再从一个可重复的小恢复动作开始。",
      en: "Recovering from emotional shifts may feel difficult right now, or support may be hard to access. Start by naming the situations that drain you most and choose one small repeatable recovery action.",
    },
    suggestions: {
      zh: ["给情绪起一个更准确的名字", "把恢复动作缩小到十分钟以内"],
      en: ["Give the feeling a more precise name", "Make one recovery action smaller than ten minutes"],
    },
  },
  {
    id: "in-progress",
    min: 31,
    max: 60,
    icon: "🌿",
    color: "#B8893D",
    title: { zh: "恢复能力正在形成", en: "Recovery Skills in Progress" },
    description: {
      zh: "你已经有一些调节和恢复方法，但它们在不同压力情境下可能不够稳定。留意哪些方法真正有效，而不是只看自己是否立刻平静。",
      en: "You already have some ways to regulate and recover, though they may not feel reliable in every situation. Notice what genuinely helps rather than judging whether you calm down immediately.",
    },
  },
  {
    id: "stronger-resources",
    min: 61,
    max: 100,
    icon: "🌳",
    color: "#4E8A67",
    title: { zh: "恢复资源较充足", en: "Stronger Recovery Resources" },
    description: {
      zh: "你目前能较好地识别情绪、调节反应并从困难中恢复。继续留意支持你的关系、节奏和习惯，让这些资源在高压时期仍然可用。",
      en: "You currently show stronger resources for noticing emotions, regulating reactions, and recovering from difficulty. Keep track of the relationships, rhythms, and habits that make those resources available under pressure.",
    },
  },
];

const definition = defineQuiz({
  id: "emotional-resilience",
  kind: "score",
  category: "emotion",
  duration: "3-6",
  title: { zh: "情绪韧性测试", en: "Emotional Resilience Test" },
  description: {
    zh: "回看你识别、调节和从情绪波动中恢复的方式。",
    en: "Reflect on how you notice, regulate, and recover from emotional shifts.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    scoreBands,
    scoreRange: { min: 20, max: 100 },
  },
  calculate: (answers) => {
    const points = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer]?.score ?? 0), 0);
    return { score: answers.length ? Math.round((points / (answers.length * 5)) * 100) : 0 };
  },
});

export default definition;
