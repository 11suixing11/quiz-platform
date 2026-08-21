import ResultClient from "@/components/result/result-client";
import { getQuizEntry, QUIZ_IDS } from "@/core/quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_IDS.map((type) => ({ type }));
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!getQuizEntry(type)) return null;
  return <ResultClient testId={type} />;
}
