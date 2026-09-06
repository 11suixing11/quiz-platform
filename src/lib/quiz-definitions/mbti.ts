import legacy from "../tests/mbti";
import { defineQuiz, normalizeLegacyQuestions } from "../../core/quiz/definition";
import type { DimensionData, NarrativeResult, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  EI: { name: "Extraversion / Introversion", zh: "外向 / 内向", description: "更常从外部互动还是内部空间获得注意力与能量。" },
  SN: { name: "Sensing / Intuition", zh: "实感 / 直觉", description: "更常依靠具体事实还是模式、可能性和整体联想。" },
  TF: { name: "Thinking / Feeling", zh: "思考 / 情感", description: "做判断时更常优先一致性逻辑还是人的感受与价值。" },
  JP: { name: "Judging / Perceiving", zh: "判断 / 感知", description: "更偏好预先确定结构，还是保留弹性与开放选项。" },
};

function cleanEnglish(text: string) {
  return text
    .replaceAll("feel不安 about", "feel uneasy about")
    .replaceAll("excel at感受 beauty", "excel at appreciating beauty")
    .replaceAll("—", ",");
}

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  ISFP: {
    ...legacy.types.ISFP,
    en: {
      ...legacy.types.ISFP.en,
      description: cleanEnglish(legacy.types.ISFP.en.description),
    },
  },
};

const baseNarrative: Record<string, { zh: NarrativeResult; en: NarrativeResult }> = {
  ...legacy.narrative,
  ESTP: {
    ...legacy.narrative.ESTP,
    en: {
      ...legacy.narrative.ESTP.en,
      inRelationship: cleanEnglish(legacy.narrative.ESTP.en.inRelationship),
    },
  },
};

function splitScenes(value: unknown) {
  if (typeof value !== "string") return undefined;
  const scenes = value.split(";").map((scene) => scene.trim()).filter(Boolean);
  return scenes.length ? scenes : undefined;
}

const legacyArchetypes = legacy.archetypes as Record<string, { scenes_zh?: string; scenes_en?: string } | undefined>;
const narrative: Record<string, { zh: NarrativeResult; en: NarrativeResult }> = Object.fromEntries(
  Object.entries(baseNarrative).map(([key, value]) => {
    const scenes = legacyArchetypes?.[key];
    return [
      key,
      {
        zh: { ...value.zh, scenes: splitScenes(scenes?.scenes_zh) },
        en: { ...value.en, scenes: splitScenes(cleanEnglish(scenes?.scenes_en ?? "")) },
      },
    ];
  }),
) as Record<string, { zh: NarrativeResult; en: NarrativeResult }>;

const definition = defineQuiz({
  id: "mbti",
  kind: "type",
  category: "personality",
  duration: "12-21",
  title: { zh: "MBTI人格测试", en: "MBTI Personality Test" },
  description: {
    zh: "从四组偏好回看你更常使用的注意、判断和行动方式。",
    en: "Reflect on four preference pairs that shape how you focus, decide, and act most often.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    narrative,
    archetypes: legacy.archetypes,
    dimensions,
  },
  calculate: (answers) => {
    const scores: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach((answer, index) => {
      const question = questions[index];
      const score = question?.options[answer]?.score;
      if (!question?.dimension || score === undefined) return;
      if (question.dimension === "EI") scores[score === 1 ? "E" : "I"] += 1;
      if (question.dimension === "SN") scores[score === 1 ? "N" : "S"] += 1;
      if (question.dimension === "TF") scores[score === 1 ? "T" : "F"] += 1;
      if (question.dimension === "JP") scores[score === 1 ? "J" : "P"] += 1;
    });

    const pair = (left: string, right: string) => {
      const total = scores[left] + scores[right];
      const leftScore = total ? Math.round((scores[left] / total) * 100) : 50;
      return { leftScore, rightScore: 100 - leftScore };
    };
    const ei = pair("E", "I");
    const sn = pair("S", "N");
    const tf = pair("T", "F");
    const jp = pair("J", "P");
    const type = `${scores.E >= scores.I ? "E" : "I"}${scores.S >= scores.N ? "S" : "N"}${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;
    const percentages = { E: ei.leftScore, I: ei.rightScore, S: sn.leftScore, N: sn.rightScore, T: tf.leftScore, F: tf.rightScore, J: jp.leftScore, P: jp.rightScore };

    return {
      type,
      scores,
      percentages,
      dimensions: [
        { name: "EI", zh: dimensions.EI.zh, score: Math.max(ei.leftScore, ei.rightScore), left: "E", right: "I", ...ei },
        { name: "SN", zh: dimensions.SN.zh, score: Math.max(sn.leftScore, sn.rightScore), left: "S", right: "N", ...sn },
        { name: "TF", zh: dimensions.TF.zh, score: Math.max(tf.leftScore, tf.rightScore), left: "T", right: "F", ...tf },
        { name: "JP", zh: dimensions.JP.zh, score: Math.max(jp.leftScore, jp.rightScore), left: "J", right: "P", ...jp },
      ],
    };
  },
});

export default definition;
