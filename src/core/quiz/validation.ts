import type { QuizDefinition, QuizValidationIssue, QuizValidationResult } from "./types";

function validateScoreBands(definition: QuizDefinition, add: (path: string, message: string) => void) {
  if (definition.kind !== "score") return;
  const bands = definition.resultContent.scoreBands;
  const range = definition.resultContent.scoreRange;
  if (!bands?.length) {
    if (definition.origin === "standard") add("resultContent.scoreBands", "Standard score quizzes require score bands");
    return;
  }

  const sorted = [...bands].sort((a, b) => a.min - b.min);
  sorted.forEach((band, index) => {
    const path = `resultContent.scoreBands.${index}`;
    if (!Number.isFinite(band.min) || !Number.isFinite(band.max) || band.min > band.max) add(path, "Score band bounds are invalid");
    if (!band.title.zh.trim()) add(`${path}.title.zh`, "Chinese score-band title is required");
    if (!band.title.en.trim()) add(`${path}.title.en`, "English score-band title is required");
    if (!band.description.zh.trim()) add(`${path}.description.zh`, "Chinese score-band description is required");
    if (!band.description.en.trim()) add(`${path}.description.en`, "English score-band description is required");
    if (band.suggestions && (!Array.isArray(band.suggestions.zh) || !Array.isArray(band.suggestions.en))) add(`${path}.suggestions`, "Score-band suggestions must be bilingual arrays");
    if (index > 0 && sorted[index - 1].max + 1 !== band.min) add(path, "Score bands must be contiguous and non-overlapping");
  });
  if (range && (sorted[0].min > range.min || sorted[sorted.length - 1].max < range.max)) {
    add("resultContent.scoreBands", "Score bands must cover the declared score range");
  }
}

export function validateQuizDefinition(definition: QuizDefinition): QuizValidationResult {
  const issues: QuizValidationIssue[] = [];
  const add = (path: string, message: string) => issues.push({ path, message });

  if (!definition.id) add("id", "Quiz id is required");
  if (!definition.origin) add("origin", "Quiz origin is required");
  if (definition.scoring.kind !== definition.kind) add("scoring.kind", "Scoring kind must match quiz kind");
  if (!definition.title.zh.trim()) add("title.zh", "Chinese title is required");
  if (!definition.title.en.trim()) add("title.en", "English title is required");
  if (!definition.description.zh.trim()) add("description.zh", "Chinese description is required");
  if (!definition.description.en.trim()) add("description.en", "English description is required");
  if (!definition.questions.length) add("questions", "At least one question is required");

  const questionIds = new Set<number>();
  definition.questions.forEach((question, questionIndex) => {
    const path = `questions.${questionIndex}`;
    if (questionIds.has(question.id)) add(`${path}.id`, `Duplicate question id ${question.id}`);
    questionIds.add(question.id);
    if (!question.prompt.zh.trim()) add(`${path}.prompt.zh`, "Chinese prompt is required");
    if (!question.prompt.en.trim()) add(`${path}.prompt.en`, "English prompt is required");
    if (question.options.length < 2) add(`${path}.options`, "At least two options are required");
    const optionIds = new Set<string>();
    question.options.forEach((option, optionIndex) => {
      if (optionIds.has(option.id)) add(`${path}.options.${optionIndex}.id`, `Duplicate option id ${option.id}`);
      optionIds.add(option.id);
      if (!option.label.zh.trim()) add(`${path}.options.${optionIndex}.label.zh`, "Chinese option is required");
      if (!option.label.en.trim()) add(`${path}.options.${optionIndex}.label.en`, "English option is required");
      if (!Number.isFinite(option.score)) add(`${path}.options.${optionIndex}.score`, "Score must be finite");
    });
  });

  validateScoreBands(definition, add);

  return { valid: issues.length === 0, issues };
}

export function assertQuizDefinition(definition: QuizDefinition): QuizDefinition {
  const result = validateQuizDefinition(definition);
  if (!result.valid) {
    const detail = result.issues.slice(0, 5).map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid quiz definition for ${definition.id}: ${detail}`);
  }
  return definition;
}
