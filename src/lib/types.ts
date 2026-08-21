import type {
  ArchetypeData,
  DimensionData,
  LegacyQuestion,
  NarrativeResult,
  QuizResult,
  TypeData,
} from "@/core/quiz/types";

export type { ArchetypeData, DimensionData, Lang, Language, NarrativeResult, QuizResult, ScoreBand, TypeData } from "@/core/quiz/types";

export type TestQuestion = LegacyQuestion;

export interface TestCategory {
  id: string;
  zh: string;
  en: string;
  icon: string;
  desc: string;
  descEn: string;
}

export interface TestEntry {
  loader: () => Promise<{ default: unknown }>;
  id: string;
  category: string;
  file: string;
  icon: string;
  pattern: "type" | "dimensions" | "score";
  questions: number;
  time: string;
  new?: boolean;
  zh: { name: string; description: string };
  en: { name: string; description: string };
}

export interface TestData extends Omit<TestEntry, "questions"> {
  color?: string;
  questions: TestQuestion[];
  calculate: (answers: number[], questions: TestQuestion[]) => QuizResult;
  uiText: {
    zh: Record<string, string>;
    en: Record<string, string>;
  };
  narrative?: Record<string, { zh: NarrativeResult; en: NarrativeResult }>;
  types?: Record<string, { zh: TypeData; en: TypeData }>;
  dimensions?: Record<string, DimensionData>;
  archetypes?: Record<string, ArchetypeData>;
  [key: string]: unknown;
}

export interface WorldDefinition {
  id: string;
  icon: string;
  categories: string[];
  zh: { title: string; desc: string; hint: string };
  en: { title: string; desc: string; hint: string };
  color: string;
  bgLight: string;
  bgDark: string;
  borderColor: string;
  borderDark: string;
  atmoColor: string;
}
