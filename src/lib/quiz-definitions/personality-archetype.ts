import legacy from "../tests/personality-archetype";
import { defineQuiz, normalizeLegacyQuestions, rankDimensions } from "../../core/quiz/definition";
import type { DimensionData, NarrativeResult, TypeData } from "../../core/quiz/types";

function cleanEnglish(text: string) {
  return text
    .replaceAll("I渴望 to", "I long to")
    .replaceAll("You渴望 to", "You long to")
    .replaceAll("curiosity,渴望 freedom", "curiosity, a desire for freedom")
    .replaceAll("deeply思考 the", "deeply consider the");
}

function cleanTypeData(value: { zh: TypeData; en: TypeData }) {
  return {
    zh: value.zh,
    en: Object.fromEntries(Object.entries(value.en ?? {}).map(([key, text]) => [key, typeof text === "string" ? cleanEnglish(text) : text])),
  };
}

const questions = normalizeLegacyQuestions(legacy.questions).map((question) => ({
  ...question,
  prompt: { ...question.prompt, en: cleanEnglish(question.prompt.en) },
}));

const dimensions: Record<string, DimensionData> = {
  HR: { name: "Hero", zh: "英雄" },
  CG: { name: "Caregiver", zh: "照顾者" },
  EX: { name: "Explorer", zh: "探索者" },
  RB: { name: "Rebel", zh: "叛逆者" },
  CR: { name: "Creator", zh: "创造者" },
  SG: { name: "Sage", zh: "智者" },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = Object.fromEntries(
  Object.entries(legacy.types ?? {}).map(([key, value]) => [key, cleanTypeData(value as { zh: TypeData; en: TypeData })]),
);

types.MIXED = {
  zh: {
    title: "混合型原型",
    name: "混合型",
    description: "这次回答里，不止一种原型同样鲜明。你会在照顾、探索、行动、创造与理解之间调用不同的一面；这种切换本身，就是你可以认领的特点。",
  },
  en: {
    title: "Mixed Archetype",
    name: "Mixed profile",
    description: "More than one archetype stands out in these answers. You can move between care, exploration, action, creation, and understanding; that range is part of what you can claim as your own.",
  },
};

const lifeDescriptions: Record<string, { zh: string; en: string }> = {
  HR: {
    zh: "这次回答里，你更常从承担、行动和保护别人中获得方向。遇到困难时，你可能会先站出来，再边走边调整。",
    en: "In these answers, you seem to find direction through responsibility, action, and protecting others. When something is difficult, you may step forward first and adjust as you go.",
  },
  CG: {
    zh: "这次回答里，你更容易留意别人需要什么，也愿意先伸手帮忙。被需要会让你有价值感，但也要留意自己的需要有没有被推到最后。",
    en: "In these answers, you seem quick to notice what others need and willing to help first. Being needed can feel meaningful, while your own needs may end up last.",
  },
  EX: {
    zh: "这次回答里，新鲜感、自由和亲身体验更容易点亮你。重复安排可能让你感到收紧，你会在探索中重新确认自己。",
    en: "In these answers, novelty, freedom, and first-hand experience seem to bring you alive. Repetition may feel constraining, and exploration helps you reconnect with yourself.",
  },
  RB: {
    zh: "这次回答里，你更习惯先问一句“为什么要这样”，也愿意为更合适的方式留下空间。挑战规则时，也可以看看自己想保护的是什么。",
    en: "In these answers, you seem likely to ask why things have to be this way and make room for a better option. When you challenge a rule, it can help to notice what you are protecting.",
  },
  CR: {
    zh: "这次回答里，把想法做成看得见的东西会给你能量。你可能在创作、改造或解决问题时，找到比较顺手的表达方式。",
    en: "In these answers, turning an idea into something tangible seems energizing. Creating, adapting, or solving a problem may be one of your most natural ways to express yourself.",
  },
  SG: {
    zh: "这次回答里，理解事情的来龙去脉会让你更安心。你可能会反复思考、查找资料，也常被别人当作可以商量的人。",
    en: "In these answers, understanding how things fit together seems to settle you. You may think things through, look for information, and often become someone others consult.",
  },
  MIXED: {
    zh: "这次回答里，有不止一种原型同样鲜明。你可能会在不同情境里切换：需要时照顾别人，想探索时走出去，遇到问题时行动或创造。",
    en: "More than one archetype is vivid in these answers. Different situations may bring out care, exploration, action, or creation, and you can move between them without losing your sense of self.",
  },
};

for (const [key, copy] of Object.entries(lifeDescriptions)) {
  const entry = types[key];
  if (!entry) continue;
  types[key] = {
    zh: { ...entry.zh, description: copy.zh },
    en: { ...entry.en, description: copy.en },
  };
}

const typeScenes: Record<string, { zh: string[]; en: string[] }> = {
  HR: {
    zh: ["别人还在犹豫时，你会自然地先承担一件事。", "遇到难题时，你更容易先行动，再一边走一边调整。", "答应过的事即使变得麻烦，你也会想办法完成。"],
    en: ["When others are still hesitating, you naturally take on one part of the task.", "When a problem appears, you tend to act first and adjust along the way.", "Even when a promise becomes inconvenient, you look for a way to follow through."],
  },
  CG: {
    zh: ["聚会结束后，你会顺手确认每个人是否平安到家。", "你常常先记住别人需要什么，过后才想起自己也有需要。", "看到有人手忙脚乱时，你很难完全不伸手帮忙。"],
    en: ["After a gathering, you may be the one checking that everyone got home safely.", "You often remember what others need before remembering that you need something too.", "When someone is struggling, it is hard for you not to lend a hand."],
  },
  EX: {
    zh: ["一个空出来的下午，会让你想去没走过的路或试一件新事。", "重复的安排让你提不起劲，临时变化反而可能让你重新有精神。", "你会通过亲自体验，而不是只听别人描述，来确认自己喜不喜欢。"],
    en: ["An open afternoon makes you want to take an unfamiliar path or try something new.", "A repeated routine can drain you, while an unexpected change may bring your energy back.", "You prefer finding out through experience rather than relying only on someone else’s description."],
  },
  RB: {
    zh: ["听到“大家一直都是这样做的”时，你会忍不住追问原因。", "规则和现实冲突时，你更愿意提出一个不一样的办法。", "你可以接受不同意见，但很难接受不允许提问。"],
    en: ["When someone says, “this is how we have always done it,” you want to know why.", "When a rule clashes with reality, you are willing to suggest a different way.", "You can live with disagreement, but not with being told that questions are not allowed."],
  },
  CR: {
    zh: ["一个小念头出现后，你会忍不住先画下来、写下来，或做出一个粗略版本。", "你会把普通的任务改成更符合自己手感的做法。", "完成作品不一定是重点，动手让想法变清楚本身就很有满足感。"],
    en: ["When an idea arrives, you want to sketch it, write it down, or make a rough version.", "You often reshape an ordinary task until it feels more like your own way of doing it.", "Finishing is not always the point; making an idea clearer with your hands can be satisfying on its own."],
  },
  SG: {
    zh: ["遇到一个问题时，你会想把前因后果弄清楚，而不是只记住结论。", "你常常打开资料、做笔记，直到事情在脑中形成自己的结构。", "别人来找你商量时，你会先听完整，再给出经过思考的回应。"],
    en: ["When a problem appears, you want to understand what led to it rather than remember only the conclusion.", "You may open several sources and take notes until the subject forms its own structure in your mind.", "When someone asks for your thoughts, you tend to listen fully before offering a considered response."],
  },
  MIXED: {
    zh: ["你会根据眼前的人和事，换一种更合适的做法，而不是始终只用同一种方式。", "有时你先照顾关系，有时你先行动、探索或动手解决问题。", "别人可能很难用一个词概括你，但你自己知道这些侧面都是真的。"],
    en: ["You adjust your way of responding to fit the person and situation rather than relying on one mode every time.", "Sometimes you protect the relationship; other times you act, explore, or make something happen.", "Others may find it hard to sum you up in one word, but you know these different sides are all real."],
  },
};

const narrative: Record<string, { zh: NarrativeResult; en: NarrativeResult }> = Object.fromEntries(
  Object.entries(typeScenes).map(([key, scenes]) => [key, { zh: { scenes: scenes.zh }, en: { scenes: scenes.en } }]),
) as Record<string, { zh: NarrativeResult; en: NarrativeResult }>;

const definition = defineQuiz({
  id: "personality-archetype",
  kind: "type",
  category: "personality",
  duration: "4-7",
  title: {
    zh: "人格原型测试",
    en: "Personality Archetype Test",
  },
  description: {
    zh: "从六种常见原型倾向中，看见你更常依靠的动力与行动方式。",
    en: "Explore six familiar archetype patterns and the motivations you tend to rely on most.",
  },
  questions,
  resultContent: {
    uiText: legacy.uiText,
    resultTypes: legacy.resultTypes,
    types,
    narrative,
    dimensions,
  },
  calculate: (answers) => {
    const totals: Record<string, { total: number; count: number }> = {};
    for (const question of questions) {
      if (question.dimension && !totals[question.dimension]) totals[question.dimension] = { total: 0, count: 0 };
    }

    answers.forEach((answer, index) => {
      const question = questions[index];
      const bucket = question?.dimension ? totals[question.dimension] : undefined;
      const option = question?.options[answer];
      if (bucket && option) {
        bucket.total += option.score;
        bucket.count += 1;
      }
    });

    const percentages = Object.fromEntries(
      Object.entries(totals).map(([key, bucket]) => [
        key,
        bucket.count ? Math.round((bucket.total / (bucket.count * 5)) * 100) : 0,
      ]),
    );
    const ranking = rankDimensions(percentages);
    const topGap = ranking.ranked.length > 1
      ? ranking.ranked[0][1] - ranking.ranked[1][1]
      : Number.POSITIVE_INFINITY;
    // A tie or a very small gap is a meaningful mixed result, not a failure
    // to choose. Keep a clear leader when it is visibly ahead.
    const dominantType = ranking.tied || topGap <= 5 ? "MIXED" : ranking.primary;
    const total = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer]?.score ?? 0), 0);
    const max = answers.reduce((sum, answer, index) => sum + (questions[index]?.options[answer] ? 5 : 0), 0);

    return {
      type: dominantType,
      dominantType,
      secondary: dominantType === "MIXED" ? undefined : ranking.secondary,
      score: max ? Math.round((total / max) * 100) : 0,
      percentages,
      dimensions: Object.entries(dimensions).map(([name, metadata]) => ({
        name,
        zh: metadata.zh,
        en: metadata.name,
        score: percentages[name] ?? 0,
      })),
    };
  },
});

export default definition;
