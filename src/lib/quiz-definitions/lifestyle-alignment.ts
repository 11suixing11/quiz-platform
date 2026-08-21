import legacy from "../tests/lifestyle-alignment";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  VA: { name: "Values and actions", zh: "价值与行动", description: "日常选择是否反映自己真正重视的东西。" },
  GR: { name: "Goals and reality", zh: "目标与现实", description: "长期方向是否已经转化为眼前可执行的步骤。" },
  PR: { name: "Passion and routine", zh: "热情与日常", description: "热爱之事是否在现实作息里拥有稳定位置。" },
  AP: { name: "Authentic expression", zh: "真实表达", description: "日常呈现的自己与内在感受是否大体一致。" },
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
