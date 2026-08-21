export type Language = "zh" | "en";
export type Lang = Language;
export type QuizKind = "type" | "dimensions" | "score";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface LegacyQuestion {
  id: number;
  zh: string;
  en: string;
  dimension?: string;
  options: {
    zh: string[];
    en: string[];
  };
  scores: number[];
  [key: string]: unknown;
}

export interface QuizOption {
  id: string;
  label: LocalizedText;
  score: number;
}

export interface QuizQuestion {
  id: number;
  prompt: LocalizedText;
  dimension?: string;
  options: QuizOption[];
}

export interface QuizResult {
  type?: string;
  dominant?: string;
  dominantType?: string;
  resultType?: string;
  primary?: string;
  secondary?: string;
  score?: number;
  overallScore?: number;
  percentage?: number;
  scores?: Record<string, number>;
  percentages?: Record<string, number>;
  dimensions?: ResultDimension[];
  [key: string]: unknown;
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

export interface ScoreBand {
  min: number;
  max: number;
  title: LocalizedText;
  description: LocalizedText;
  icon?: string;
  color?: string;
  suggestions?: {
    zh: string[];
    en: string[];
  };
}

export interface ResultDimension {
  name: string;
  zh: string;
  en?: string;
  score: number;
  left?: string;
  right?: string;
  leftScore?: number;
  rightScore?: number;
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

export interface LegacyQuizContent {
  type?: string;
  icon?: string;
  color?: string;
  pattern?: QuizKind;
  category?: string;
  file?: string;
  time?: string;
  zh?: { name: string; description: string };
  en?: { name: string; description: string };
  questions: LegacyQuestion[];
  calculate: (answers: number[], questions: LegacyQuestion[]) => QuizResult;
  uiText?: {
    zh?: Record<string, string>;
    en?: Record<string, string>;
  };
  resultTypes?: unknown;
  narrative?: Record<string, { zh: NarrativeResult; en: NarrativeResult }>;
  types?: Record<string, { zh: TypeData; en: TypeData }>;
  dimensions?: Record<string, DimensionData>;
  archetypes?: Record<string, ArchetypeData>;
  [key: string]: unknown;
}

export interface QuizCatalogEntry {
  id: string;
  category: string;
  kind: QuizKind;
  questions: number;
  duration: string;
  icon: string;
  isNew: boolean;
  availability: "flagship" | "standard" | "review" | "archive";
  title: LocalizedText;
  description: LocalizedText;
  load: () => Promise<{ default: unknown }>;
}

export interface QuizDefinition {
  id: string;
  kind: QuizKind;
  origin: "standard" | "legacy";
  category: string;
  accent: string;
  duration: string;
  title: LocalizedText;
  description: LocalizedText;
  questions: QuizQuestion[];
  resultContent: {
    uiText: { zh: Record<string, string>; en: Record<string, string> };
    resultTypes?: unknown;
    scoreBands?: ScoreBand[];
    scoreRange?: { min: number; max: number };
    narrative?: Record<string, { zh: NarrativeResult; en: NarrativeResult }>;
    types?: Record<string, { zh: TypeData; en: TypeData }>;
    dimensions?: Record<string, DimensionData>;
    archetypes?: Record<string, ArchetypeData>;
  };
  scoring: {
    kind: QuizKind;
    calculate: QuizCalculator;
  };
}

export type QuizCalculator = (answers: number[]) => QuizResult;

export interface ScoringAdapter {
  kind: QuizKind;
  calculate: (definition: QuizDefinition, answers: number[]) => QuizResult;
}

export interface QuizValidationIssue {
  path: string;
  message: string;
}

export interface QuizValidationResult {
  valid: boolean;
  issues: QuizValidationIssue[];
}
