import legacy from "../tests/emotion-regulation";
import { QUIZ_MEDIA } from "../quiz-media";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData, NarrativeResult } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  CR: {
    name: "Cognitive reappraisal",
    zh: "认知重评",
    description: "通过改变理解角度来调整情绪影响的倾向。",
    observation: {
      zh: "你会给正在发生的事找一个既承认感受、又让自己能继续往前走的新角度。",
      en: "You look for a new angle that acknowledges the feeling while still helping you move forward.",
    },
  },
  ES: {
    name: "Expressive suppression",
    zh: "表达抑制",
    description: "把已经出现的情绪表达收起来的频率；高分不等于更好。",
    observation: {
      zh: "你会先判断“现在适不适合表达”，必要时把情绪收好，等到更安全或更合适的时刻再让别人看见。",
      en: "You first judge whether the moment feels safe for expression, sometimes holding emotion back until the timing feels better.",
    },
  },
  AC: {
    name: "Acceptance",
    zh: "情绪接纳",
    description: "允许感受存在，而不是立刻否定或摆脱它的倾向。",
    observation: {
      zh: "你会让难受先存在一会儿，而不是立刻赶走它，等自己听懂这份感受在提醒什么。",
      en: "You let discomfort stay for a while instead of immediately pushing it away, listening for what the feeling may be signaling.",
    },
  },
};

const narrative: Record<string, { zh: NarrativeResult; en: NarrativeResult }> = {
  default: {
    zh: {
      description: "这三个分数描述你使用不同策略的频率，不是一张“情绪管理好坏”的总成绩单。尤其是表达抑制，高低都需要结合情境理解。",
      scenes: [
        "情绪起来时，你会先试着换一个角度理解正在发生的事。",
        "有些感受出现后，你愿意先让它待一会儿，而不是马上把它赶走。",
        "在不想让场面更复杂时，你可能会先把情绪收起来，等一个更安全的时刻。",
      ],
    },
    en: {
      description: "These scores describe how often you use different strategies; they are not an overall grade for emotional skill. Expressive suppression in particular needs context rather than a simple high-is-good reading.",
      scenes: [
        "When emotion rises, you may first try to view what is happening from another angle.",
        "When a feeling appears, you may sometimes let it stay for a moment instead of trying to get rid of it at once.",
        "When you do not want to make a situation more complicated, you may hold emotion back until a safer moment.",
      ],
    },
  },
};

const definition = defineQuiz({
  id: "emotion-regulation",
  kind: "dimensions",
  category: "emotion",
  duration: "4-7",
  title: { zh: "情绪调节测试", en: "Emotion Regulation Test" },
  description: {
    zh: "看看你如何重新理解情境、接纳感受，以及何时会压住情绪表达。",
    en: "See how you reframe situations, accept feelings, and sometimes hold emotional expression back.",
  },
  media: QUIZ_MEDIA["emotion-regulation"],
  questions,
  resultContent: {
    uiText: legacy.uiText,
    dimensions,
    narrative,
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["CR", "ES", "AC"]);
    return { scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
