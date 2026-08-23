import { TEST_REGISTRY, type TestRegistryEntry } from "./test-registry";

export type CoreTestGroupId = "self" | "emotion" | "relationship" | "life";

export interface CoreTestGroup {
  id: CoreTestGroupId;
  zh: string;
  en: string;
  descriptionZh: string;
  descriptionEn: string;
  entryTestId: string;
  entryZh: string;
  entryEn: string;
  entryHintZh: string;
  entryHintEn: string;
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
    descriptionZh: "先从性格和倾向开始，看清自己更常使用的反应方式。",
    descriptionEn: "Start with personality and patterns to notice the responses you rely on most.",
    entryTestId: "mbti",
    entryZh: "最近总在问：我到底是什么样的人？",
    entryEn: "I keep wondering what kind of person I am.",
    entryHintZh: "从注意力、判断和行动方式开始看。",
    entryHintEn: "Start with how you focus, decide, and act.",
    ids: ["mbti", "big-five", "personality-archetype", "animal-personality"],
  },
  {
    id: "emotion",
    zh: "情绪与能量",
    en: "Feel and recharge",
    descriptionZh: "看见情绪如何流动，也看见你恢复能量的方式。",
    descriptionEn: "Notice how emotions move through you and how you recover your energy.",
    entryTestId: "emotion-regulation",
    entryZh: "我明明已经很累了，却还在撑着。",
    entryEn: "I am tired, but I still keep holding it together.",
    entryHintZh: "看看你如何理解、容纳和表达情绪。",
    entryHintEn: "Notice how you reframe, hold, and express feelings.",
    ids: ["emotion-regulation", "emotional-resilience", "self-compassion", "stress-resilience"],
  },
  {
    id: "relationship",
    zh: "关系互动",
    en: "Relate with others",
    descriptionZh: "理解亲密、沟通和边界里的惯性反应。",
    descriptionEn: "Understand the patterns you bring to closeness, communication, and boundaries.",
    entryTestId: "attachment-style",
    entryZh: "我很在意这段关系，却不太会说自己的需要。",
    entryEn: "I care about this relationship, but struggle to say what I need.",
    entryHintZh: "从靠近、退开和寻求回应的方式开始。",
    entryHintEn: "Start with how you move toward, away, and ask for connection.",
    ids: ["attachment-style", "communication-style", "conflict-resolution", "boundaries"],
  },
  {
    id: "life",
    zh: "工作与生活",
    en: "Work and life",
    descriptionZh: "把价值观、工作方式和生活满意度放回真实日常。",
    descriptionEn: "Bring values, work style, and life satisfaction back to everyday choices.",
    entryTestId: "lifestyle-alignment",
    entryZh: "生活没有大问题，却总觉得哪里不太对。",
    entryEn: "Nothing is terribly wrong, but daily life still feels a little off.",
    entryHintZh: "看看重要的事，是否真的出现在你的日常里。",
    entryHintEn: "Notice whether what matters has a visible place in your days.",
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
