export interface TestRegistryEntry {
  id: string;
  file: string;
  category: string;
  icon: string;
  pattern: "type" | "dimensions" | "score";
  questions: number;
  time: string;
  zh: { name: string; description: string };
  en: { name: string; description: string };
}

export const TEST_REGISTRY: TestRegistryEntry[] = [
  { id: "mbti", category: "personality", file: "mbti", icon: "🧠", pattern: "type", questions: 60, time: "10-15", zh: { name: "MBTI 人格测试", description: "了解你的16型人格，发现你的性格特点。" }, en: { name: "MBTI Personality Test", description: "Discover your 16 personality type and traits." } },
  { id: "big-five", category: "personality", file: "big-five", icon: "🌊", pattern: "dimensions", questions: 50, time: "8-12", zh: { name: "大五人格测试", description: "了解你的五大人格特质，全面认识自己。" }, en: { name: "Big Five Personality Test", description: "Discover your five major personality traits." } },
  { id: "enneagram", category: "personality", file: "enneagram", icon: "✡️", pattern: "type", questions: 45, time: "8-10", zh: { name: "九型人格测试", description: "发现你的人格型号，了解核心动机。" }, en: { name: "Enneagram Test", description: "Discover your enneagram type and core motivations." } },
  { id: "disc", category: "personality", file: "disc", icon: "🔶", pattern: "type", questions: 28, time: "5-8", zh: { name: "DISC 行为风格测试", description: "了解你的行为模式和沟通风格。" }, en: { name: "DISC Behavioral Test", description: "Understand your behavioral patterns and communication style." } },
  { id: "temperament", category: "personality", file: "temperament", icon: "🌡️", pattern: "type", questions: 40, time: "6-10", zh: { name: "气质类型测试", description: "发现你的天生气质类型。" }, en: { name: "Temperament Test", description: "Discover your innate temperament type." } },
  { id: "dark-triad", category: "personality", file: "dark-triad", icon: "🌑", pattern: "dimensions", questions: 27, time: "5-8", zh: { name: "黑暗三联征测试", description: "了解你的暗黑人格特质水平。" }, en: { name: "Dark Triad Test", description: "Measure your dark personality traits." } },
  { id: "narcissism", category: "personality", file: "narcissism", icon: "🪞", pattern: "score", questions: 16, time: "3-5", zh: { name: "自恋人格测试", description: "了解你的自恋倾向程度。" }, en: { name: "Narcissism Test", description: "Measure your narcissistic tendencies." } },
  { id: "perfectionism", category: "personality", file: "perfectionism", icon: "💎", pattern: "dimensions", questions: 20, time: "4-6", zh: { name: "完美主义测试", description: "了解你的完美主义倾向。" }, en: { name: "Perfectionism Test", description: "Measure your perfectionist tendencies." } },
  { id: "introversion", category: "personality", file: "introversion", icon: "🌙", pattern: "score", questions: 20, time: "4-6", zh: { name: "内向指数测试", description: "了解你的内向/外向程度。" }, en: { name: "Introversion Index", description: "Measure your introversion/extroversion level." } },
  { id: "ab-personality", category: "personality", file: "ab-personality", icon: "⚡", pattern: "score", questions: 20, time: "4-6", zh: { name: "A/B型人格测试", description: "了解你是A型还是B型人格。" }, en: { name: "A/B Personality Test", description: "Discover if you have Type A or Type B personality." } },
  { id: "locus-control", category: "personality", file: "locus-control", icon: "🎯", pattern: "score", questions: 20, time: "4-6", zh: { name: "控制点测试", description: "了解你对生活的控制感。" }, en: { name: "Locus of Control Test", description: "Discover your sense of control over life." } },
  { id: "resilience", category: "personality", file: "resilience", icon: "🛡️", pattern: "score", questions: 20, time: "4-6", zh: { name: "心理弹性测试", description: "了解你的心理韧性水平。" }, en: { name: "Resilience Test", description: "Measure your psychological resilience." } },
  { id: "self-efficacy", category: "personality", file: "self-efficacy", icon: "🌟", pattern: "score", questions: 10, time: "2-4", zh: { name: "自我效能感测试", description: "了解你对自己能力的信心。" }, en: { name: "Self-Efficacy Test", description: "Measure your confidence in your abilities." } },
];

export function getTestById(id: string): TestRegistryEntry | undefined {
  return TEST_REGISTRY.find((t) => t.id === id);
}
