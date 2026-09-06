import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalDetail } from "@/components/journal/journal-detail";
import { journalExcerpt, type JournalEntry } from "@/lib/journal";
import { getCurrentUser } from "@/lib/server/auth";
import { getJournalEntryForViewer, getPublishedJournalEntry, JournalError } from "@/lib/server/journal";
import { OG_IMAGE_URL, PRIVATE_PAGE_METADATA, SITE_NAME, siteUrl } from "@/lib/site-config";

type JournalPageProps = { params: Promise<{ id: string }>; searchParams: Promise<{ from?: string }> };

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = (() => {
    try { return getPublishedJournalEntry(id, null); }
    catch { return null; }
  })();
  if (!entry) return { ...PRIVATE_PAGE_METADATA, title: "私密图像札记" };
  const displayTitle = entry.title.trim() || (entry.contentLanguage === "en" ? "Image post" : entry.contentLanguage === "bilingual" ? "图像分享 / Image post" : "图像分享");
  const description = journalExcerpt(entry.body, 180) || "一篇公开的图像分享。";
  const cover = entry.images[0];
  const coverVariant = cover?.variants.large ?? cover?.variants.medium ?? cover?.variants.thumb;
  const image = coverVariant
    ? { url: coverVariant.src, width: coverVariant.width, height: coverVariant.height, alt: cover.decorative ? displayTitle : cover.alt }
    : { url: OG_IMAGE_URL, width: 1200, height: 630, alt: displayTitle };
  const canonical = siteUrl(`/journal/${entry.id}/`);
  return {
    title: displayTitle,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    authors: entry.author.displayName ? [{ name: entry.author.displayName }] : undefined,
    openGraph: {
      title: displayTitle,
      description,
      type: "article",
      url: canonical,
      siteName: SITE_NAME,
      publishedTime: entry.publishedAt ? new Date(entry.publishedAt).toISOString() : undefined,
      authors: entry.author.displayName ? [entry.author.displayName] : undefined,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: displayTitle, description, images: [image.url] },
  };
}

export default async function JournalEntryPage({ params, searchParams }: JournalPageProps) {
  const { id } = await params;
  const query = await searchParams;
  const user = await getCurrentUser();
  let entry: JournalEntry;
  try {
    entry = getJournalEntryForViewer(user?.id ?? null, id) as JournalEntry;
  } catch (cause) {
    if (cause instanceof JournalError && cause.status === 404) notFound();
    throw cause;
  }
  return <JournalDetail id={id} initialEntry={entry} initialViewerId={user?.id ?? null} returnTo={query.from === "community" ? "community" : undefined} />;
}
