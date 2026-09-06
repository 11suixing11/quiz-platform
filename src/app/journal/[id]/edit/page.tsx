import type { Metadata } from "next";
import { JournalEditor } from "@/components/journal/journal-editor";
import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";

export const metadata: Metadata = { ...PRIVATE_PAGE_METADATA, title: "编辑图像札记" };

export default async function EditJournalPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ from?: string }> }) {
  const { id } = await params;
  const query = await searchParams;
  return <JournalEditor entryId={id} returnTo={query.from === "community" ? "/community/" : undefined} />;
}
