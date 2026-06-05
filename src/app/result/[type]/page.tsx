import ResultClient from "@/components/result/result-client";
import { TEST_TYPES } from "@/lib/test-types";

export function generateStaticParams() {
  return TEST_TYPES.map((type) => ({ type }));
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <ResultClient testType={type} />;
}
