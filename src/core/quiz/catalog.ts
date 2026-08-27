import { CATEGORY_COLORS } from "@/lib/constants";
import { CORE_TEST_IDS, getCoreTestGroup } from "@/lib/core-tests";
import { FLAGSHIP_TRUST_PROFILES } from "@/lib/quiz-trust";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { normalizeLegacyQuestions } from "./definition";
import { assertQuizDefinition } from "./validation";
import type { LegacyQuizContent, PublicQuizCatalogEntry, QuizCatalogEntry, QuizDefinition } from "./types";

function getAvailability(entry: (typeof TEST_REGISTRY)[number]): QuizCatalogEntry["availability"] {
  return entry.availability ?? "review";
}

/** Internal catalog: all source modules remain addressable to tooling. */
export const INTERNAL_QUIZ_CATALOG: QuizCatalogEntry[] = TEST_REGISTRY.map((entry) => ({
  id: entry.id,
  category: entry.category,
  kind: entry.pattern,
  questions: entry.questions,
  duration: entry.time,
  icon: entry.icon,
  isNew: Boolean(entry.new),
  availability: getAvailability(entry),
  title: { zh: entry.zh.name, en: entry.en.name },
  description: { zh: entry.zh.description, en: entry.en.description },
  load: entry.definitionLoader ?? entry.loader,
}));

/** Public catalog: the v0.2 product surface is intentionally limited to flagship routes. */
const internalCatalogById = new Map(INTERNAL_QUIZ_CATALOG.map((quiz) => [quiz.id, quiz]));

export const QUIZ_CATALOG: PublicQuizCatalogEntry[] = CORE_TEST_IDS
  .map((id) => {
    const quiz = internalCatalogById.get(id);
    if (!quiz || quiz.availability !== "flagship") throw new Error(`Curated quiz ${id} is not available as a flagship route`);
    const trust = FLAGSHIP_TRUST_PROFILES[quiz.id];
    if (!trust) throw new Error(`Flagship quiz ${quiz.id} is missing trust metadata`);
    const group = getCoreTestGroup(quiz.id);
    if (!group) throw new Error(`Flagship quiz ${quiz.id} is missing a public topic`);
    return { ...quiz, trust, topic: { id: group.id, label: { zh: group.zh, en: group.en } } };
  });

export const QUIZ_IDS = QUIZ_CATALOG.map((quiz) => quiz.id);

export const INTERNAL_QUIZ_IDS = INTERNAL_QUIZ_CATALOG.map((quiz) => quiz.id);

const catalogById = new Map(QUIZ_CATALOG.map((quiz) => [quiz.id, quiz]));
const definitionCache = new Map<string, Promise<QuizDefinition | null>>();

export function getQuizEntry(id: string): PublicQuizCatalogEntry | undefined {
  return catalogById.get(id);
}

function isQuizDefinition(content: unknown): content is QuizDefinition {
  if (!content || typeof content !== "object" || Array.isArray(content)) return false;
  const candidate = content as Partial<QuizDefinition>;
  return candidate.origin === "standard"
    && Array.isArray(candidate.questions)
    && typeof candidate.scoring?.calculate === "function";
}

function assertCatalogMatch(entry: QuizCatalogEntry, definition: QuizDefinition) {
  if (definition.id !== entry.id) throw new Error(`Quiz definition id ${definition.id} does not match catalog id ${entry.id}`);
  if (definition.kind !== entry.kind) throw new Error(`Quiz ${entry.id} kind ${definition.kind} does not match catalog kind ${entry.kind}`);
  if (definition.category !== entry.category) throw new Error(`Quiz ${entry.id} category ${definition.category} does not match catalog category ${entry.category}`);
  if (definition.questions.length !== entry.questions) {
    throw new Error(`Quiz ${entry.id} has ${definition.questions.length} questions; catalog declares ${entry.questions}`);
  }
}

function normalizeLegacyDefinition(entry: QuizCatalogEntry, content: LegacyQuizContent): QuizDefinition {
  const definition: QuizDefinition = {
    id: entry.id,
    kind: entry.kind,
    origin: "legacy",
    category: entry.category,
    accent: content.color ?? CATEGORY_COLORS[entry.category] ?? "#2F6B5F",
    duration: entry.duration,
    title: entry.title,
    description: entry.description,
    questions: normalizeLegacyQuestions(content.questions),
    resultContent: {
      uiText: {
        zh: content.uiText?.zh ?? {},
        en: content.uiText?.en ?? {},
      },
      resultTypes: content.resultTypes,
      narrative: content.narrative,
      types: content.types,
      dimensions: content.dimensions,
      archetypes: content.archetypes,
    },
    scoring: {
      kind: entry.kind,
      calculate: (answers) => content.calculate(answers, content.questions),
    },
  };

  assertCatalogMatch(entry, definition);
  return assertQuizDefinition(definition);
}

export function loadQuizDefinition(id: string): Promise<QuizDefinition | null> {
  const cached = definitionCache.get(id);
  if (cached) return cached;

  const entry = getQuizEntry(id);
  if (!entry) return Promise.resolve(null);

  const promise = entry.load()
    .then((module) => {
      const content = module.default;
      if (isQuizDefinition(content)) {
        assertCatalogMatch(entry, content);
        return assertQuizDefinition(content);
      }
      const legacy = content as LegacyQuizContent;
      if (!legacy || !Array.isArray(legacy.questions) || typeof legacy.calculate !== "function") {
        throw new Error(`Quiz ${id} does not export a standard definition or valid legacy content`);
      }
      return normalizeLegacyDefinition(entry, legacy);
    })
    .catch((error) => {
      definitionCache.delete(id);
      console.error(`Failed to load quiz ${id}`, error);
      return null;
    });

  definitionCache.set(id, promise);
  return promise;
}
