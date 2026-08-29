import type { QuizDefinition, QuizValidationIssue, QuizValidationResult, QuizVisual } from "./types";

function validateVisual(visual: QuizVisual, path: string, add: (path: string, message: string) => void) {
  if (!visual.src.startsWith("/")) add(`${path}.src`, "Quiz visual src must be a root-relative path");
  if (!Number.isInteger(visual.width) || visual.width <= 0) add(`${path}.width`, "Quiz visual width must be a positive integer");
  if (!Number.isInteger(visual.height) || visual.height <= 0) add(`${path}.height`, "Quiz visual height must be a positive integer");
  if (!visual.alt.zh.trim()) add(`${path}.alt.zh`, "Chinese quiz visual alt text is required");
  if (!visual.alt.en.trim()) add(`${path}.alt.en`, "English quiz visual alt text is required");
  if (visual.focus && (
    !Number.isFinite(visual.focus.x)
    || !Number.isFinite(visual.focus.y)
    || visual.focus.x < 0
    || visual.focus.x > 100
    || visual.focus.y < 0
    || visual.focus.y > 100
  )) add(`${path}.focus`, "Quiz visual focus must use percentages between 0 and 100");
}

function validateMedia(definition: QuizDefinition, add: (path: string, message: string) => void) {
  if (!definition.media) return;
  validateVisual(definition.media.cover, "media.cover", add);
  for (const [key, visual] of Object.entries(definition.media.byResult ?? {})) {
    if (!key.trim()) add("media.byResult", "Result visual keys must not be empty");
    validateVisual(visual, `media.byResult.${key}`, add);
  }
  for (const [key, visual] of Object.entries(definition.media.byScoreBand ?? {})) {
    if (!key.trim()) add("media.byScoreBand", "Score-band visual keys must not be empty");
    validateVisual(visual, `media.byScoreBand.${key}`, add);
  }
  if (definition.media.byScoreBand && definition.kind !== "score") {
    add("media.byScoreBand", "Only score quizzes may define score-band visuals");
  }
}

function validateScoreBands(definition: QuizDefinition, add: (path: string, message: string) => void) {
  if (definition.kind !== "score") return;
  const bands = definition.resultContent.scoreBands;
  const range = definition.resultContent.scoreRange;
  if (!bands?.length) {
    if (definition.origin === "standard") add("resultContent.scoreBands", "Standard score quizzes require score bands");
    return;
  }

  const sorted = [...bands].sort((a, b) => a.min - b.min);
  const ids = new Set<string>();
  sorted.forEach((band, index) => {
    const path = `resultContent.scoreBands.${index}`;
    const id = typeof band.id === "string" ? band.id.trim() : "";
    if (!id) add(`${path}.id`, "Score band id is required");
    if (id && ids.has(id)) add(`${path}.id`, `Duplicate score band id ${id}`);
    if (id) ids.add(id);
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
  for (const key of Object.keys(definition.media?.byScoreBand ?? {})) {
    if (!ids.has(key)) add(`media.byScoreBand.${key}`, "Score-band visual key must match a declared score band id");
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
  validateMedia(definition, add);

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
