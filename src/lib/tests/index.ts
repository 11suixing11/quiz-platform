import { getTestById } from "../test-registry";
import type { TestData } from "../types";

/**
 * Transitional raw-content loader. New product code uses loadQuizDefinition
 * from @/core/quiz so metadata, questions, and scoring share one boundary.
 */
export async function loadTestData(type: string): Promise<TestData | null> {
  const entry = getTestById(type);
  if (!entry) return null;
  try {
    const module = await entry.loader();
    const data = module.default as TestData;
    return data && Array.isArray(data.questions) && typeof data.calculate === "function" ? data : null;
  } catch (error) {
    console.error("loadTestData error:", type, error);
    return null;
  }
}

export function isTestRegistered(type: string): boolean {
  return Boolean(getTestById(type));
}