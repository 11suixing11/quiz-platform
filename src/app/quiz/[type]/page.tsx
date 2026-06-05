import QuizEngine from "@/components/quiz/quiz-engine";
import { TEST_TYPES } from "@/lib/test-types";

export function generateStaticParams() {
  return TEST_TYPES.map((type) => ({ type }));
}

export default async function QuizPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <QuizEngine testType={type} />;
}
