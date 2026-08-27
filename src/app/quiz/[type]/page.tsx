import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuizEngine from "@/components/quiz/quiz-engine";
import { getQuizEntry, QUIZ_IDS } from "@/core/quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_IDS.map((type) => ({ type }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const entry = getQuizEntry(type);
  if (!entry) notFound();
  return {
    title: { absolute: `${entry.title.zh} | 开始测评` },
    robots: { index: false, follow: false },
    alternates: { canonical: null },
  };
}

export default async function QuizPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!getQuizEntry(type)) notFound();
  return <QuizEngine key={type} testId={type} />;
}
