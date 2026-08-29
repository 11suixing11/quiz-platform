import type { Metadata } from "next";
import { JournalEditor } from "@/components/journal/journal-editor";
import { PRIVATE_PAGE_METADATA } from "@/lib/site-config";

export const metadata: Metadata = { ...PRIVATE_PAGE_METADATA, title: "编辑图像札记" };

export default async function EditJournalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <JournalEditor entryId={id} />;
}
