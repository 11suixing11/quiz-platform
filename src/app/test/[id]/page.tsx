import TestDetailClient from "./client";
import { TEST_REGISTRY } from "@/lib/test-registry";

export function generateStaticParams() {
  return TEST_REGISTRY.map((t) => ({ id: t.id }));
}

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TestDetailClient testId={id} />;
}
