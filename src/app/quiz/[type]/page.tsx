import QuizEngine from "@/components/quiz/quiz-engine";
import { getQuizEntry, QUIZ_IDS } from "@/core/quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_IDS.map((type) => ({ type }));
}

export default async function QuizPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!getQuizEntry(type)) return null;
  return <QuizEngine key={type} testId={type} />;
}
