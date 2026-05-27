// Calculator functions for each test type
// These are imported statically to avoid dynamic import issues on the client

const calculators: Record<string, (answers: number[], questions: any[]) => any> = {};

// Register calculators dynamically at module load time
// Each test file exports its calculate function
try {
  // Big Five
  const bf = require("./big-five");
  if (bf?.default?.calculate) calculators["big-five"] = bf.default.calculate;
} catch {}

export function getCalculator(testType: string) {
  return calculators[testType] || null;
}
