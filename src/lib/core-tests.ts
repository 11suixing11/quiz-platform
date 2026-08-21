import { TEST_REGISTRY, type TestRegistryEntry } from "./test-registry";

export type CoreTestGroupId = "self" | "emotion" | "relationship" | "life";

export interface CoreTestGroup {
  id: CoreTestGroupId;
  zh: string;
  en: string;
  descriptionZh: string;
  descriptionEn: string;
  ids: string[];
}

/**
 * The small, intentional front door to the curated public catalog.
 * Keep this list curated; adding a test to the library must not automatically
 * add it to the homepage.
 */
export const CORE_TEST_GROUPS: CoreTestGroup[] = [
  {
    id: "self",
    zh: "自我认知",
    en: "Know yourself",
    descriptionZh: "先从性格和倾向开始，找到一张更清晰的自我地图。",
    descriptionEn: "Start with personality and patterns to find a clearer map of yourself.",
    ids: ["mbti", "big-five", "personality-archetype", "animal-personality"],
  },
  {
    id: "emotion",
    zh: "情绪与能量",
    en: "Feel and recharge",
    descriptionZh: "看见情绪如何流动，也看见你恢复能量的方式。",
    descriptionEn: "Notice how emotions move through you and how you recover your energy.",
    ids: ["emotion-regulation", "emotional-resilience", "self-compassion", "stress-resilience"],
  },
  {
    id: "relationship",
    zh: "关系互动",
    en: "Relate with others",
    descriptionZh: "理解亲密、沟通和边界里的惯性反应。",
    descriptionEn: "Understand the patterns you bring to closeness, communication, and boundaries.",
    ids: ["attachment-style", "communication-style", "conflict-resolution", "boundaries"],
  },
  {
    id: "life",
    zh: "工作与生活",
    en: "Work and life",
    descriptionZh: "把价值观、工作方式和生活满意度放回真实日常。",
    descriptionEn: "Bring values, work style, and life satisfaction back to everyday choices.",
    ids: ["career-values", "work-style", "life-satisfaction", "lifestyle-alignment"],
  },
];

export const CORE_TEST_IDS = CORE_TEST_GROUPS.flatMap((group) => group.ids);

export const CORE_TEST_SET = new Set(CORE_TEST_IDS);

export const SENSITIVE_TEST_IDS = new Set([
  "anxiety",
  "depression",
  "ocd",
  "phobia",
  "death-anxiety",
  "existential-anxiety",
  "grief-processing",
  "body-image",
  "social-anxiety",
]);

export function getCoreTests(ids: string[] = CORE_TEST_IDS): TestRegistryEntry[] {
  return ids
    .map((id) => TEST_REGISTRY.find((test) => test.id === id))
    .filter((test): test is TestRegistryEntry => Boolean(test));
}

export function getCoreGroupTests(group: CoreTestGroup): TestRegistryEntry[] {
  return getCoreTests(group.ids);
}

export function getNextCoreTests(currentTestId: string, limit = 3) {
  const current = TEST_REGISTRY.find((test) => test.id === currentTestId);
  const preferred = current
    ? CORE_TEST_IDS.filter((id) => id !== currentTestId && TEST_REGISTRY.find((test) => test.id === id)?.category === current.category)
    : [];
  const fallback = CORE_TEST_IDS.filter((id) => id !== currentTestId && !preferred.includes(id));
  return getCoreTests([...preferred, ...fallback]).slice(0, limit);
}
