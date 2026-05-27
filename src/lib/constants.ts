import { TestCategory, WorldDefinition } from "./types";

export const TEST_CATEGORIES: TestCategory[] = [
  { id: "personality", zh: "自我认知", en: "Self Identity", icon: "🧬", desc: "你的性格、气质与人格原型", descEn: "Your character, temperament and personality archetype" },
  { id: "emotion", zh: "情绪图谱", en: "Emotional Landscape", icon: "💕", desc: "你如何感受、表达与管理情绪", descEn: "How you feel, express and manage emotions" },
  { id: "mental", zh: "内在平衡", en: "Inner Balance", icon: "🧘", desc: "你的心理状态与内在韧性", descEn: "Your mental state and inner resilience" },
  { id: "relationship", zh: "关系动力", en: "Social Dynamics", icon: "🤝", desc: "你与他人之间的连接模式", descEn: "The patterns between you and others" },
  { id: "career", zh: "职业原型", en: "Career Archetypes", icon: "💼", desc: "你在工作中扮演的角色", descEn: "The role you play at work" },
  { id: "intelligence", zh: "认知模式", en: "Cognitive Patterns", icon: "🧪", desc: "你的思维方式与智力图谱", descEn: "Your thinking style and cognitive map" },
  { id: "lifestyle", zh: "生活哲学", en: "Life Philosophy", icon: "🌿", desc: "你选择如何度过这一生", descEn: "How you choose to live your life" },
  { id: "social", zh: "社交智慧", en: "Social Intelligence", icon: "🎭", desc: "你在人群中如何自处", descEn: "How you navigate the social world" },
  { id: "fun", zh: "趣味探索", en: "Playful Discovery", icon: "🎪", desc: "用轻松的方式认识自己", descEn: "Discover yourself through play" },
];

export const WORLDS: WorldDefinition[] = [
  {
    id: "dreamers",
    icon: "🌙",
    categories: ["emotion", "mental"],
    zh: { title: "梦境感知者", desc: "为那些感受过深、常常在深夜回放一句话的人。", hint: "情绪、共情、敏感度" },
    en: { title: "Dreamers", desc: "For those who feel too deeply, who replay a single sentence late into the night.", hint: "Emotion, empathy, sensitivity" },
    color: "#6B5B95",
    bgLight: "#F3F0F8",
    borderColor: "#E0DAF0",
    atmoColor: "#EDE8F5",
  },
  {
    id: "analysts",
    icon: "🔮",
    categories: ["personality", "intelligence"],
    zh: { title: "理性建筑师", desc: "为那些在混乱中寻找结构、习惯把世界拆解成系统的人。", hint: "人格、认知、系统思维" },
    en: { title: "Analysts", desc: "For those who find structure in chaos, who take the world apart to understand it.", hint: "Personality, cognition, systems" },
    color: "#4A6FA5",
    bgLight: "#EEF3F8",
    borderColor: "#D8E2F0",
    atmoColor: "#E8EFF7",
  },
  {
    id: "connectors",
    icon: "🌊",
    categories: ["relationship", "social"],
    zh: { title: "关系连接者", desc: "为那些总能感到关系里的温度、沉默和拉扯的人。", hint: "依恋、爱语、人际边界" },
    en: { title: "Connectors", desc: "For those who sense every temperature shift in a relationship — the warmth, the silence, the pull.", hint: "Attachment, love, boundaries" },
    color: "#4A8B5A",
    bgLight: "#EEF5EF",
    borderColor: "#D0E8D5",
    atmoColor: "#E8F2EA",
  },
  {
    id: "explorers",
    icon: "🔥",
    categories: ["career", "lifestyle", "fun"],
    zh: { title: "行动探索者", desc: "为那些需要走出去，才知道自己是谁的人。", hint: "职业、生活方式、冒险" },
    en: { title: "Explorers", desc: "For those who need to walk out into the world to discover who they are.", hint: "Career, lifestyle, adventure" },
    color: "#C4783C",
    bgLight: "#FAF3EC",
    borderColor: "#F0DCC8",
    atmoColor: "#F8EFE5",
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  personality: "#88619A",
  emotion: "#E0607A",
  mental: "#4A90A4",
  relationship: "#E8A838",
  career: "#54965C",
  intelligence: "#5B7FB5",
  lifestyle: "#8BAA6B",
  social: "#D4824A",
  fun: "#C76B8A",
};
