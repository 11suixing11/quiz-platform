import QuizEngine from "@/components/quiz/quiz-engine";

interface QuizPageProps {
  params: Promise<{ type: string }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { type } = await params;
  return <QuizEngine testType={type} />;
}
