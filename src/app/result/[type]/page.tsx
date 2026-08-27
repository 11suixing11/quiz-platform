import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResultClient from "@/components/result/result-client";
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
    title: { absolute: `${entry.title.zh} | 测评结果` },
    robots: { index: false, follow: false },
    alternates: { canonical: null },
  };
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!getQuizEntry(type)) notFound();
  return <ResultClient testId={type} />;
}
