import TestDetailClient from "./client";
import { getQuizEntry, QUIZ_IDS } from "@/core/quiz";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_IDS.map((id) => ({ id }));
}

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!getQuizEntry(id)) return null;
  return <TestDetailClient testId={id} />;
}
