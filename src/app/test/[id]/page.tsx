import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TestDetailClient from "./client";
import { getQuizEntry, loadQuizDefinition, QUIZ_IDS } from "@/core/quiz";
import { OG_IMAGE_URL, serializeJsonLd, SITE_NAME, siteUrl } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return QUIZ_IDS.map((id) => ({ id }));
}

type TestPageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: TestPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getQuizEntry(id);
  if (!entry) notFound();
  const definition = await loadQuizDefinition(id);

  const title = `${entry.title.zh} | ${entry.title.en}`;
  const description = `${entry.description.zh} ${entry.description.en}`;
  const canonical = siteUrl(`/test/${entry.id}/`);
  const cover = definition?.media?.cover;
  const socialImage = cover
    ? { url: siteUrl(cover.src), width: cover.width, height: cover.height, alt: `${cover.alt.zh} ${cover.alt.en}` }
    : { url: OG_IMAGE_URL, width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      siteName: SITE_NAME,
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
  };
}

export default async function TestPage({ params }: TestPageProps) {
  const { id } = await params;
  const entry = getQuizEntry(id);
  if (!entry) notFound();
  const definition = await loadQuizDefinition(id);
  if (!definition) notFound();
  const sampleQuestions = definition.questions.slice(0, 3).map(({ id: questionId, prompt }) => ({ id: questionId, prompt }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `${entry.title.zh} | ${entry.title.en}`,
    description: `${entry.description.zh} ${entry.description.en}`,
    url: siteUrl(`/test/${entry.id}/`),
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: siteUrl("/") },
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "assessment framework",
      targetName: entry.trust.label.en,
      targetDescription: entry.trust.source.en,
    },
  };
  return <><TestDetailClient testId={id} sampleQuestions={sampleQuestions} media={definition.media} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /></>;
}
