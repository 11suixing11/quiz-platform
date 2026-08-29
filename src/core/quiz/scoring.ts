import type { QuizDefinition, QuizKind, QuizResult, QuizVisual, ScoringAdapter, ScoreBand } from "./types";

function executeCalculator(definition: QuizDefinition, answers: number[]): QuizResult {
  if (answers.length !== definition.questions.length) {
    throw new Error(`Expected ${definition.questions.length} answers, received ${answers.length}`);
  }

  for (let index = 0; index < answers.length; index++) {
    const answer = answers[index];
    const optionCount = definition.questions[index]?.options.length ?? 0;
    if (!Number.isInteger(answer) || answer < 0 || answer >= optionCount) {
      throw new Error(`Answer ${index + 1} is outside the available option range`);
    }
  }

  const result = definition.scoring.calculate(answers);
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    throw new Error(`Quiz ${definition.id} returned an invalid result`);
  }
  return normalizeQuizResult(result);
}

function createAdapter(kind: QuizKind): ScoringAdapter {
  return {
    kind,
    calculate(definition, answers) {
      return executeCalculator(definition, answers);
    },
  };
}

export const SCORING_ADAPTERS: Record<QuizKind, ScoringAdapter> = {
  type: createAdapter("type"),
  dimensions: createAdapter("dimensions"),
  score: createAdapter("score"),
};

export function scoreQuiz(definition: QuizDefinition, answers: number[]): QuizResult {
  return SCORING_ADAPTERS[definition.kind].calculate(definition, answers);
}

export function getResultKey(result: QuizResult): string {
  return result.type ?? result.dominant ?? result.dominantType ?? result.resultType ?? result.primary ?? "";
}

export function getResultScore(result: QuizResult): number | null {
  if (typeof result.score === "number") return result.score;
  if (typeof result.overallScore === "number") return result.overallScore;
  if (typeof result.percentage === "number") return result.percentage;
  return null;
}

export function getScoreBand(definition: QuizDefinition, result: QuizResult): ScoreBand | undefined {
  const score = getResultScore(result);
  if (score === null) return undefined;
  return definition.resultContent.scoreBands?.find((band) => score >= band.min && score <= band.max);
}

export interface QuizVisualSelection {
  key: string;
  source: "result" | "score-band" | "cover";
  visual: QuizVisual;
}

function getDominantVisualKey(result: QuizResult): string | undefined {
  const percentages = result.percentages
    ?? (result.dimensions?.length
      ? Object.fromEntries(result.dimensions.map((dimension) => [dimension.name, dimension.score]))
      : undefined);
  if (!percentages) return undefined;
  const ranked = Object.entries(percentages).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  if (!ranked.length || (ranked[1] && ranked[0][1] === ranked[1][1])) return undefined;
  return ranked[0][0];
}

export function getQuizVisualSelection(definition: QuizDefinition, result: QuizResult): QuizVisualSelection | undefined {
  const media = definition.media;
  if (!media) return undefined;

  if (definition.kind === "score") {
    const band = getScoreBand(definition, result);
    const visual = band ? media.byScoreBand?.[band.id] : undefined;
    if (band && visual) return { key: band.id, source: "score-band", visual };
  } else {
    const key = getResultKey(result) || (definition.kind === "dimensions" ? getDominantVisualKey(result) : "");
    const visual = key ? media.byResult?.[key] : undefined;
    if (key && visual) return { key, source: "result", visual };
  }

  return { key: "cover", source: "cover", visual: media.cover };
}

export function normalizeQuizResult(result: QuizResult): QuizResult {
  const normalized: QuizResult = { ...result };
  const key = getResultKey(normalized);
  if (!normalized.type && key) normalized.type = key;
  if (!normalized.percentages && normalized.dimensions?.length) {
    normalized.percentages = Object.fromEntries(normalized.dimensions.map((dimension) => [dimension.name, dimension.score]));
  }
  if (!normalized.percentages && normalized.scores) {
    normalized.percentages = { ...normalized.scores };
  }
  return normalized;
}
