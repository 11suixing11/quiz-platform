import legacy from "../tests/stress-resilience";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  HA: {
    name: "Hardiness",
    zh: "坚韧与投入",
    description: "压力下保持投入、影响感和挑战视角的倾向。",
    descriptionEn: "Staying engaged, agentic, and able to see challenge under pressure.",
    observation: {
      zh: "你会尽量保留“我还能做点什么”的感觉；即使局面不理想，也不容易马上把自己从故事里抽走。",
      en: "You try to keep a sense of “there is still something I can do.” Even when things are difficult, you do not easily remove yourself from the story.",
    },
  },
  CR: {
    name: "Coping resources",
    zh: "应对资源",
    description: "能否找到具体、可执行的处理方式。",
    descriptionEn: "Finding concrete and workable ways to respond.",
    observation: {
      zh: "压力一来，你最需要的不是一句“想开点”，而是一个能马上落地的下一步；当步骤变清楚，你会更容易恢复掌控感。",
      en: "When pressure rises, “just think positively” is less useful than a next step you can actually take. Clear steps help you regain a sense of control.",
    },
  },
  SS: {
    name: "Social support",
    zh: "社会支持",
    description: "是否拥有并愿意使用可信任的关系支持。",
    descriptionEn: "Having and being willing to use trustworthy relational support.",
    observation: {
      zh: "你不一定缺少可以求助的人，真正的门槛可能是“我能不能在还没撑不住之前开口”。",
      en: "You may not lack people to turn to. The harder step may be asking for support before you have completely run out of strength.",
    },
  },
  MM: {
    name: "Meaning-making",
    zh: "意义建构",
    description: "能否从困难中形成理解、方向或新的价值。",
    descriptionEn: "Making meaning, direction, or new value from difficulty.",
    observation: {
      zh: "你会试着把经历放进更大的脉络里理解；当一件事不再只是“为什么发生在我身上”，你就开始找回方向。",
      en: "You try to place an experience in a wider context. When it becomes more than “why did this happen to me,” direction starts to return.",
    },
  },
};

const definition = defineQuiz({
  id: "stress-resilience",
  kind: "dimensions",
  category: "mental",
  accent: legacy.color ?? "#607D8B",
  duration: "3-6",
  title: { zh: "压力韧性测试", en: "Stress Resilience Test" },
  description: {
    zh: "回看压力下可用的坚持、应对资源、社会支持与意义感。",
    en: "Reflect on the hardiness, coping resources, social support, and meaning available to you under pressure.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    resultTypes: legacy.resultTypes,
    dimensions,
    narrative: {
      default: {
        zh: { description: "韧性不是永远不受影响，而是在压力中仍能调用一些内部或外部资源。低分维度更适合作为支持入口，而不是缺点标签。" },
        en: { description: "Resilience does not mean being unaffected. It means having some internal or external resources available under pressure. Lower dimensions are better treated as support entry points than as flaws." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages, overallScore } = scoreDimensions(questions, answers, ["HA", "CR", "SS", "MM"]);
    return { score: overallScore, scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
