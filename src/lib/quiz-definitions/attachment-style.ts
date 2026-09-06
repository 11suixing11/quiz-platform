import legacy from "../tests/attachment-style";
import { QUIZ_MEDIA } from "../quiz-media";
import { defineQuiz, dimensionResults, normalizeLegacyQuestions, rankDimensions, scoreDimensions } from "../../core/quiz/definition";
import type { DimensionData, NarrativeResult, TypeData } from "../../core/quiz/types";

const questions = normalizeLegacyQuestions(legacy.questions);

const dimensions: Record<string, DimensionData> = {
  SE: {
    name: "Secure",
    zh: "安全感",
    description: "在亲密关系中信任、表达需要并保持相对放松的倾向。",
    descriptionEn: "Trusting, expressing needs, and staying relatively at ease in close relationships.",
    observation: {
      zh: "你可以靠近别人，也可以保留自己的节奏；一次回复变慢，不会立刻推翻你对整段关系的判断。",
      en: "You can move close while keeping your own pace. A delayed reply does not immediately overturn your view of the whole relationship.",
    },
  },
  AN: {
    name: "Anxious",
    zh: "焦虑倾向",
    description: "对距离、回应和被离开的可能更敏感的倾向。",
    descriptionEn: "Being more sensitive to distance, replies, and the possibility of being left.",
    observation: {
      zh: "关系里一点小小的距离就可能被你捕捉到；你不是故意想太多，而是很在意对方的心意有没有改变。",
      en: "You notice small changes in distance quickly. It is not that you choose to overthink; you care deeply about whether the other person's feelings have shifted.",
    },
  },
  AV: {
    name: "Avoidant",
    zh: "回避倾向",
    description: "在亲密和依赖增加时，更容易拉开距离的倾向。",
    descriptionEn: "Pulling back more easily as closeness and dependence increase.",
    observation: {
      zh: "当关系变得很近，你会先把注意力收回自己；独立不是你不在乎，而是你需要空间来保持呼吸感。",
      en: "When a relationship becomes very close, you first return your attention to yourself. Independence does not mean you do not care; you need room to breathe.",
    },
  },
  DI: {
    name: "Disorganized",
    zh: "矛盾不确定",
    description: "同时渴望靠近又感到不安，反应可能来回切换的倾向。",
    descriptionEn: "Wanting closeness while also feeling unsafe, with responses that may switch back and forth.",
    observation: {
      zh: "你可能刚确认自己想靠近，就又在对方真正回应时退后；这种来回不是矫情，而是连接和自我保护同时在说话。",
      en: "You may decide you want closeness and then step back when the other person responds. The push and pull is not performative; connection and self-protection are speaking at once.",
    },
  },
};

const types: Record<string, { zh: TypeData; en: TypeData }> = {
  ...legacy.types,
  MIXED: {
    zh: {
      title: "混合依恋画像",
      name: "混合倾向",
      description: "你是混合型依恋画像：不同关系、阶段和安全感会唤起你不同的回应。能感知并切换这些需要，本身就是你理解自己的入口。",
    },
    en: {
      title: "Mixed Attachment Profile",
      name: "Mixed pattern",
      description: "You have a mixed attachment profile: different relationships, stages, and levels of safety can bring out different responses. Noticing that range is part of understanding yourself.",
    },
  },
};

const lifeDescriptions: Record<string, { zh: string; en: string }> = {
  SE: {
    zh: "这次回答里，你更容易在关系中保有信任，也能说出自己的需要。你可以靠近别人，同时保留自己的节奏。",
    en: "In these answers, you seem more able to trust in a relationship and name what you need. You can move closer while keeping your own pace.",
  },
  AN: {
    zh: "这次回答里，回应的快慢和关系里的距离比较容易牵动你。你可能会先确认对方还在不在，再决定自己要不要放松下来。",
    en: "In these answers, the pace of replies and the distance between you may affect you quickly. You may look for reassurance before you can settle.",
  },
  AV: {
    zh: "这次回答里，独立和个人空间比较重要。关系变得很近时，你可能会先退一步，让自己重新找回呼吸的地方。",
    en: "In these answers, independence and personal space seem important. When closeness increases, you may step back to find room to breathe.",
  },
  DI: {
    zh: "这次回答里，靠近和退开可能会轮流出现。你一方面想要连接，另一方面也会在不确定时保护自己。",
    en: "In these answers, moving closer and pulling back may take turns. You can want connection and still protect yourself when things feel uncertain.",
  },
  MIXED: {
    zh: "这次回答里，没有一种反应一直占上风。不同的人、关系和阶段，可能会让你用不同方式保护自己或靠近别人。",
    en: "Your mixed profile can show different sides across relationships and stages: sometimes moving closer, sometimes needing distance, all as real parts of your response.",
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
  SE: {
    zh: ["你能直接说出“我需要一点时间”或“我希望你陪我一下”。", "对方暂时没有回应时，你会先给关系留一点解释的空间。", "发生分歧后，你愿意回到对话里，而不是只靠猜测。"],
    en: ["You can say, “I need a little time” or “I would like some company.”", "When someone is slow to reply, you can leave room for more than one explanation.", "After a disagreement, you are willing to return to the conversation instead of relying only on guesses."],
  },
  AN: {
    zh: ["对方回复变慢时，你会反复看消息，猜测是不是哪里出了问题。", "关系有一点距离时，你很快就想确认对方的心意。", "你知道自己想要安慰，却常常先用试探来表达。"],
    en: ["When a reply is slow, you may reread the message and wonder whether something went wrong.", "A little distance in a relationship can quickly make you want reassurance.", "You know you want comfort, but may first express it through a test or hint."],
  },
  AV: {
    zh: ["关系靠近时，你会先把注意力放回工作、兴趣或自己的安排。", "你更习惯自己消化情绪，不太想让别人看到需要帮助的一面。", "对方希望你多说一点时，你可能会先觉得压力变大。"],
    en: ["When a relationship becomes closer, you may put your attention back on work, interests, or your own plans.", "You are more used to processing feelings alone and may hesitate to show that you need help.", "When someone asks you to say more, you may first feel the pressure rise."],
  },
  DI: {
    zh: ["你刚想靠近，又在对方真的回应时突然退后。", "同一段关系里，你有时很想确认，有时又只想完全安静。", "不确定感变强时，你会在寻求连接和保护自己之间来回切换。"],
    en: ["You may want to move closer, then step back when the other person truly responds.", "In the same relationship, you may sometimes seek reassurance and at other times want complete quiet.", "When uncertainty grows, you can switch between reaching for connection and protecting yourself."],
  },
  MIXED: {
    zh: ["在不同关系里，你会发现自己有时很放松，有时又需要更多距离。", "同一个人身上，不同阶段也可能唤起你不同的反应。", "回看具体情境，比急着给自己归类更能说明发生了什么。"],
    en: ["Across relationships, you may notice that you feel relaxed in some moments and need more distance in others.", "Different stages with the same person can bring out different responses.", "Looking at the specific situation may tell you more than rushing to classify yourself."],
  },
};

const narrative: Record<string, { zh: NarrativeResult; en: NarrativeResult }> = Object.fromEntries(
  Object.entries(typeScenes).map(([key, scenes]) => [
    key,
    {
      zh: { scenes: scenes.zh, description: lifeDescriptions[key]?.zh },
      en: { scenes: scenes.en, description: lifeDescriptions[key]?.en },
    },
  ]),
) as Record<string, { zh: NarrativeResult; en: NarrativeResult }>;

const definition = defineQuiz({
  id: "attachment-style",
  kind: "type",
  category: "relationship",
  duration: "6-11",
  title: { zh: "依恋风格测试", en: "Attachment Style Test" },
  description: {
    zh: "回看你在靠近、寻求确认、保持距离和关系不确定感中的常见反应。",
    en: "Reflect on how you respond to closeness, reassurance, distance, and uncertainty in important relationships.",
  },
  media: QUIZ_MEDIA["attachment-style"],
  questions,
  resultContent: {
    uiText: legacy.uiText,
    types,
    narrative,
    archetypes: legacy.archetypes,
    dimensions,
  },
  calculate: (answers) => {
    const { scores, percentages } = scoreDimensions(questions, answers, ["SE", "AN", "AV", "DI"]);
    const ranking = rankDimensions(percentages);
    const type = ranking.tied ? "MIXED" : ranking.primary;
    return {
      type,
      dominantType: type,
      secondary: ranking.tied ? undefined : ranking.secondary,
      scores,
      percentages,
      dimensions: dimensionResults(dimensions, percentages),
    };
  },
});

export default definition;
