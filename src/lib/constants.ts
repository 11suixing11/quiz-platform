import { TestCategory } from "./types";

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

/**
 * The accent a quiz carries into its result: its topic's exposure of the
 * blueprint blue, not a colour of its own. These are `var()` references rather
 * than hexes so a result flips with the theme -- a fixed mid-tone hex that reads
 * as "the accent" on paper turns into a smudge on the night page. Categories are
 * grouped onto the four public topics: self, feeling, relating, living.
 */
export const CATEGORY_COLORS: Record<string, string> = {
  personality: "var(--topic-self)",
  intelligence: "var(--topic-self)",
  emotion: "var(--topic-emotion)",
  mental: "var(--topic-emotion)",
  fun: "var(--topic-emotion)",
  relationship: "var(--topic-relationship)",
  social: "var(--topic-relationship)",
  career: "var(--topic-life)",
  lifestyle: "var(--topic-life)",
};

/**
 * The one resolver for a quiz's accent. Both halves of the catalog go through
 * it -- the legacy normalizer and `defineQuiz` -- so a quiz cannot acquire an
 * accent of its own by declaring one.
 */
export function categoryAccent(category: string) {
  return CATEGORY_COLORS[category] ?? "var(--accent)";
}
