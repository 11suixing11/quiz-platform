import { categoryAccent } from "@/lib/constants";
import { CORE_TEST_IDS, getCoreTestGroup } from "@/lib/core-tests";
import { FLAGSHIP_TRUST_PROFILES } from "@/lib/quiz-trust";
import { TEST_REGISTRY } from "@/lib/test-registry";
import { normalizeLegacyQuestions } from "./definition";
import { assertQuizDefinition } from "./validation";
import type { LegacyQuizContent, PublicQuizCatalogEntry, QuizCatalogEntry, QuizDefinition, QuizPaper, QuizQuestionSet } from "./types";

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
const paperCache = new Map<string, Promise<QuizPaper | null>>();

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
    // Every legacy module carries its own `color`, picked one module at a time out
    // of Material's swatches -- #607D8B in one, #FF9800 in the next. The accent is
    // a property of the topic now, so those are deliberately not read.
    accent: categoryAccent(entry.category),
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

/**
 * A React Flight payload has to be plain data. Legacy modules can put anything
 * on `resultContent.resultTypes`, so a paper is checked once, on the server,
 * before a page is allowed to hand it to the client. Failing here breaks the
 * build rather than the browser.
 */
function assertSerializable(value: unknown, path: string, seen: WeakSet<object>): void {
  if (value === null || value === undefined) return;
  const kind = typeof value;
  if (kind === "string" || kind === "number" || kind === "boolean") return;
  if (kind !== "object") throw new Error(`Quiz paper field ${path} is a ${kind} and cannot be sent to the client`);

  const object = value as object;
  if (seen.has(object)) throw new Error(`Quiz paper field ${path} is part of a cycle and cannot be sent to the client`);
  seen.add(object);

  if (Array.isArray(object)) {
    object.forEach((item, index) => assertSerializable(item, `${path}[${index}]`, seen));
    return;
  }
  const prototype = Object.getPrototypeOf(object);
  if (prototype !== Object.prototype && prototype !== null) {
    throw new Error(`Quiz paper field ${path} is a class instance and cannot be sent to the client`);
  }
  for (const [key, item] of Object.entries(object)) assertSerializable(item, `${path}.${key}`, seen);
}

/**
 * The quiz without its calculator. Server Components use this so the answering
 * and result pages render their content on first paint; the calculator is
 * loaded separately, in the browser, only when answers are submitted offline.
 */
export function loadQuizPaper(id: string): Promise<QuizPaper | null> {
  const cached = paperCache.get(id);
  if (cached) return cached;

  const promise = loadQuizDefinition(id)
    .then((definition) => {
      if (!definition) return null;
      // This is where the two halves part: `scoring` stays here, the paper travels.
      const { scoring, ...paper } = definition;
      if (typeof scoring.calculate !== "function") throw new Error(`Quiz ${id} has no calculator`);
      assertSerializable(paper, `${id}`, new WeakSet());
      return paper;
    })
    .catch((error) => {
      paperCache.delete(id);
      console.error(`Failed to prepare quiz paper ${id}`, error);
      return null;
    });

  paperCache.set(id, promise);
  return promise;
}

/** The answering flow needs the questions, not the result copy. */
export async function loadQuizQuestionSet(id: string): Promise<QuizQuestionSet | null> {
  const paper = await loadQuizPaper(id);
  if (!paper) return null;
  return {
    id: paper.id,
    kind: paper.kind,
    accent: paper.accent,
    duration: paper.duration,
    title: paper.title,
    questions: paper.questions,
  };
}
