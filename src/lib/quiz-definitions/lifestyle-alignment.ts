import legacy from "../tests/lifestyle-alignment";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  VA: {
    name: "Values and actions",
    zh: "价值与行动",
    description: "日常选择是否反映自己真正重视的东西。",
    descriptionEn: "Whether everyday choices reflect what you genuinely value.",
    observation: {
      zh: "你在意的东西并不只停留在想法里；真正让你不舒服的，往往是生活长期没有给它留位置。",
      en: "What you value does not stay only in your thoughts. What often creates friction is daily life leaving it no real place.",
    },
  },
  GR: {
    name: "Goals and reality",
    zh: "目标与现实",
    description: "长期方向是否已经转化为眼前可执行的步骤。",
    descriptionEn: "Whether long-term direction has become an actionable next step.",
    observation: {
      zh: "你可能已经知道自己想往哪里走，真正卡住的不是方向，而是今天有没有一小步能接上它。",
      en: "You may already know where you want to go. The friction is less about direction and more about finding a small step that connects today to it.",
    },
  },
  PR: {
    name: "Passion and routine",
    zh: "热情与日常",
    description: "热爱之事是否在现实作息里拥有稳定位置。",
    descriptionEn: "Whether what you love has a stable place in your real routine.",
    observation: {
      zh: "你不是没有热情，而是热爱的事很容易被“等有空再做”推到最后；缺的可能不是愿望，而是固定位置。",
      en: "You are not short on passion, but what you love can keep getting moved to “when I have time.” The missing piece may be a fixed place, not desire.",
    },
  },
  AP: {
    name: "Authentic expression",
    zh: "真实表达",
    description: "日常呈现的自己与内在感受是否大体一致。",
    descriptionEn: "Whether the self you show day to day broadly matches what you feel inside.",
    observation: {
      zh: "你会察觉自己在不同人面前的版本；真正消耗你的，常常不是适应，而是长期说着不像自己的话。",
      en: "You notice the versions of yourself that appear with different people. What drains you is often not adapting, but speaking in a way that stays unlike you.",
    },
  },
};

const definition = defineQuiz({
  id: "lifestyle-alignment",
  kind: "dimensions",
  category: "lifestyle",
  accent: legacy.color ?? "#26A69A",
  duration: "3-6",
  title: { zh: "生活一致性测试", en: "Lifestyle Alignment Test" },
  description: {
    zh: "看看价值观、目标、热情和真实表达是否已经进入你的日常。",
    en: "See whether your values, goals, passions, and authentic expression have a real place in daily life.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    resultTypes: legacy.resultTypes,
    dimensions,
    narrative: {
      default: {
        zh: { description: "一致性不是把生活安排得完美，而是让真正重要的东西在日常里有可见的位置。先处理摩擦最大的一个维度即可。" },
        en: { description: "Alignment is not a perfectly arranged life. It means giving what matters a visible place in daily routines. Start with the dimension creating the most friction." },
      },
    },
  },
  calculate: (answers) => {
    const { scores, percentages, overallScore } = scoreDimensions(questions, answers, ["VA", "GR", "PR", "AP"]);
    return { score: overallScore, scores, percentages, dimensions: dimensionResults(dimensions, percentages) };
  },
});

export default definition;
