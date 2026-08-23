import legacy from "../tests/communication-style";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  AS: {
    name: "Assertive",
    zh: "坚定表达",
    description: "清楚表达需求，同时为对方保留空间。",
    descriptionEn: "Expressing needs clearly while leaving room for the other person.",
    observation: {
      zh: "你更愿意把“我不舒服”说成一件具体的事，也希望讨论最后能落到双方都知道该怎么做。",
      en: "You are more likely to turn “I feel uncomfortable” into something specific and want the conversation to end with both people knowing what to do next.",
    },
  },
  PA: {
    name: "Accommodating",
    zh: "迁就配合",
    description: "优先维持关系与和谐，较容易让步。",
    descriptionEn: "Prioritizing harmony and the relationship, sometimes by yielding.",
    observation: {
      zh: "你很快就能看见对方的难处，常会先把气氛照顾好；只是自己的那句“其实我不想”可能会晚一点才出现。",
      en: "You quickly notice the other person's difficulty and often take care of the atmosphere first, while your own “I actually do not want this” may arrive later.",
    },
  },
  AG: {
    name: "Forceful",
    zh: "强势主导",
    description: "倾向用控制、批评或压迫感推动对话。",
    descriptionEn: "Pushing a conversation through control, criticism, or increased pressure.",
    observation: {
      zh: "当事情迟迟没有结论时，你会本能地提高力度、收紧选择，希望尽快把局面带回可控范围。",
      en: "When a conversation stalls without a conclusion, you may instinctively increase the pressure and narrow the options to bring the situation back under control.",
    },
  },
  AN: {
    name: "Reserved / Avoidant",
    zh: "内敛回避",
    description: "较少主动表达，面对分歧时更容易退回沉默。",
    descriptionEn: "Speaking less and retreating into silence more easily during disagreement.",
    observation: {
      zh: "你不是没有想法，而是会先衡量说出来会不会让事情更糟；如果没有足够安全感，沉默会比解释更省力。",
      en: "It is not that you have no opinion. You first weigh whether speaking will make things worse, and without enough safety, silence can feel easier than explaining.",
    },
  },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  AS: {
    zh: { title: "坚定表达型", name: "坚定表达", description: "你更常直接说明想法和需要，也会尝试尊重对方的边界。留意坚定是否仍给彼此留下倾听和调整的空间。" },
    en: { title: "Assertive Communicator", name: "Assertive", description: "You tend to state your thoughts and needs directly while respecting the other person's boundaries. Notice whether firmness still leaves room for listening and adjustment." },
  },
  PA: {
    zh: { title: "迁就配合型", name: "迁就配合", description: "你更常通过配合、妥协和避免冲突来维持关系。它能减少摩擦，也可能让自己的需要较晚才被看见。" },
    en: { title: "Accommodating Communicator", name: "Accommodating", description: "You often preserve relationships through cooperation, compromise, and conflict avoidance. This can reduce friction, while your own needs may be noticed later." },
  },
  AG: {
    zh: { title: "强势主导型", name: "强势主导", description: "你在分歧中更容易提高力度、掌控节奏或直接推动结论。明确立场是优势，也值得留意对方是否仍有安全表达的空间。" },
    en: { title: "Forceful Communicator", name: "Forceful", description: "During disagreement, you may raise the intensity, control the pace, or push directly toward a conclusion. Clarity can be useful; notice whether others still have room to speak safely." },
  },
  AN: {
    zh: { title: "内敛回避型", name: "内敛回避", description: "你更常先倾听、少说或暂时退出分歧。安静不等于没有立场，但长期不表达可能让需要和不满难以被理解。" },
    en: { title: "Reserved / Avoidant Communicator", name: "Reserved", description: "You tend to listen first, speak less, or step back from disagreement. Quiet does not mean having no position, but unspoken needs can become harder to understand over time." },
  },
  MIXED: {
    zh: { title: "情境切换型", name: "情境切换", description: "这次回答中没有一种沟通方式明显领先。你可能会根据对象、关系安全感和压力程度切换表达方式。" },
    en: { title: "Context-Switching Communicator", name: "Context-switching", description: "You are a context-switching communicator: you adjust how you express yourself based on the person, relational safety, and pressure. Reading the room and shifting is part of your communication strength." },
  },
};

const definition = defineQuiz({
  id: "communication-style",
  kind: "type",
  category: "relationship",
  accent: legacy.color ?? "#2196F3",
  duration: "4-7",
  title: { zh: "沟通风格测试", en: "Communication Style Test" },
  description: {
    zh: "看见你在表达、倾听、冲突和边界中的常用沟通方式。",
    en: "See the communication pattern you use most when expressing, listening, disagreeing, and setting boundaries.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    dimensions,
  },
  calculate: (answers) => {
    const totals: Record<string, number> = { AS: 0, PA: 0, AG: 0, AN: 0 };
    const counts: Record<string, number> = { AS: 0, PA: 0, AG: 0, AN: 0 };
    answers.forEach((answer, index) => {
      const question = questions[index];
      const dimension = question?.dimension;
      const option = question?.options[answer];
      if (dimension && option && dimension in totals) {
        totals[dimension] += option.score;
        counts[dimension] += 1;
      }
    });

    const percentages = Object.fromEntries(
      Object.keys(totals).map((key) => [key, counts[key] ? Math.round((totals[key] / (counts[key] * 5)) * 100) : 0]),
    );
    const ranked = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    const tied = ranked.length > 1 && ranked[0][1] === ranked[1][1];
    const type = tied ? "MIXED" : ranked[0][0];

    return {
      type,
      secondary: tied ? undefined : ranked[1]?.[0],
      scores: totals,
      percentages,
      dimensions: Object.entries(dimensions).map(([key, metadata]) => ({
        name: key,
        zh: metadata.zh,
        en: metadata.name,
        score: percentages[key] ?? 0,
      })),
    };
  },
});

export default definition;
