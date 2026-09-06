import type { Metadata } from "next";
import { JournalEditor } from "@/components/journal/journal-editor";
import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";

export const metadata: Metadata = { ...PRIVATE_PAGE_METADATA, title: "新建图像札记" };

export default async function NewJournalPage({ searchParams }: { searchParams: Promise<{ from?: string }> }) {
  const params = await searchParams;
  return <JournalEditor createOnMount returnTo={params.from === "community" ? "/community/" : undefined} />;
}
