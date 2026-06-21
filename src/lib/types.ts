// ===== Core Types =====

export interface TestQuestion {
  id: number;
  zh: string;
  en: string;
  dimension?: string;
  options: {
    zh: string[];
    en: string[];
  };
  scores: number[];
}

export interface TestCategory {
  id: string;
  zh: string;
  en: string;
  icon: string;
  desc: string;
  descEn: string;
}

export interface TestEntry {
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
}

export interface QuizResult {
  type?: string;
  dominant?: string;
  primary?: string;
  score?: number;
  overallScore?: number;
  scores?: Record<string, number>;
  percentages?: Record<string, number>;
  dimensions?: { name: string; zh: string; score: number }[];
}

export interface NarrativeResult {
  hero?: string;
  archetype?: string;
  subtitle?: string;
  description?: string;
  quote?: string;
  mood?: string;
  strengths?: string[];
  weaknesses?: string[];
  scenes?: string[];
  inRelationship?: string;
  underPressure?: string;
  atWork?: string;
  hiddenStrength?: string;
  contradiction?: string;
  portrait?: Record<string, string>;
  bible?: Record<string, string>;
}

export interface TypeData {
  name?: string;
  title?: string;
  description?: string;
  inRelationship?: string;
  underPressure?: string;
  atWork?: string;
  hiddenStrength?: string;
  strengths?: string[];
  weaknesses?: string[];
}

export interface DimensionData {
  name: string;
  zh: string;
  description?: string;
}

export interface ArchetypeData {
  world?: string;
  color?: string;
  mood?: string;
  title_zh?: string;
  title_en?: string;
  desc_zh?: string;
  desc_en?: string;
  high_zh?: string;
  high_en?: string;
  low_zh?: string;
  low_en?: string;
  quote_zh?: string;
  quote_en?: string;
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

export type Lang = "zh" | "en" | "ja";
