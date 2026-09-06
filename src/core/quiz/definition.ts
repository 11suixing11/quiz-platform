import { categoryAccent } from "@/lib/constants";
import type {
  LegacyQuestion,
  LocalizedText,
  QuizCalculator,
  QuizDefinition,
  QuizOption,
  QuizQuestion,
  QuizKind,
} from "./types";

/**
 * Convert the current content shape into the small question model used by the
 * product core. This is deliberately a pure conversion so legacy content can
 * be retired one test at a time.
 */
export function normalizeLegacyQuestions(questions: LegacyQuestion[]): QuizQuestion[] {
  return questions.map((question, questionIndex) => {
    const zhOptions = question.options?.zh ?? [];
    const enOptions = question.options?.en ?? [];
    const optionCount = Math.max(zhOptions.length, enOptions.length, question.scores?.length ?? 0);
    const questionId = Number.isInteger(question.id) ? question.id : questionIndex + 1;
    const options: QuizOption[] = Array.from({ length: optionCount }, (_, optionIndex) => ({
      id: `${questionId}:${optionIndex}`,
      label: {
        zh: zhOptions[optionIndex] ?? "",
        en: enOptions[optionIndex] ?? "",
      },
      score: question.scores?.[optionIndex] ?? optionIndex,
    }));

    return {
      id: questionId,
      prompt: { zh: question.zh ?? "", en: question.en ?? "" },
      dimension: question.dimension,
      options,
    };
  });
}

export interface QuizDefinitionInput {
  id: string;
  kind: QuizKind;
  category: string;
  duration: string;
  title: LocalizedText;
  description: LocalizedText;
  media?: QuizDefinition["media"];
  questions: QuizQuestion[];
  resultContent: QuizDefinition["resultContent"];
  calculate: QuizCalculator;
}

export function defineQuiz(input: QuizDefinitionInput): QuizDefinition {
  return {
    id: input.id,
    kind: input.kind,
    origin: "standard",
    category: input.category,
    // Not `input.accent`: a definition does not get to name its own colour. Each
    // of these modules was seeded with the Material swatch its legacy source
    // carried -- #6C63FF for MBTI, #E91E63 for attachment -- and sixteen such
    // choices are sixteen palettes. The topic decides.
    accent: categoryAccent(input.category),
    duration: input.duration,
    title: input.title,
    description: input.description,
    media: input.media,
    questions: input.questions,
    resultContent: input.resultContent,
    scoring: {
      kind: input.kind,
      calculate: input.calculate,
    },
  };
}

export function scoreDimensions(
  questions: QuizQuestion[],
  answers: number[],
  keys: readonly string[],
) {
  const scores = Object.fromEntries(keys.map((key) => [key, 0])) as Record<string, number>;
  const counts = Object.fromEntries(keys.map((key) => [key, 0])) as Record<string, number>;

  answers.forEach((answer, index) => {
    const question = questions[index];
    const dimension = question?.dimension;
    const option = question?.options[answer];
    if (dimension && option && dimension in scores) {
      scores[dimension] += option.score;
      counts[dimension] += 1;
    }
  });

  const percentages = Object.fromEntries(keys.map((key) => [
    key,
    counts[key] ? Math.round((scores[key] / (counts[key] * 5)) * 100) : 0,
  ])) as Record<string, number>;
  const total = keys.reduce((sum, key) => sum + scores[key], 0);
  const answered = keys.reduce((sum, key) => sum + counts[key], 0);

  return {
    scores,
    counts,
    percentages,
    overallScore: answered ? Math.round((total / (answered * 5)) * 100) : 0,
  };
}

export function rankDimensions(percentages: Record<string, number>) {
  const ranked = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  return {
    ranked,
    tied: ranked.length > 1 && ranked[0][1] === ranked[1][1],
    primary: ranked[0]?.[0] ?? "",
    secondary: ranked[1]?.[0],
  };
}

export function dimensionResults(
  dimensions: Record<string, { name: string; zh: string }>,
  percentages: Record<string, number>,
) {
  return Object.entries(dimensions).map(([key, metadata]) => ({
    name: key,
    zh: metadata.zh,
    en: metadata.name,
    score: percentages[key] ?? 0,
  }));
}
