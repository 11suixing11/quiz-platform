import type { MetadataRoute } from "next";
import { QUIZ_CATALOG } from "@/core/quiz";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl("/privacy/"), changeFrequency: "yearly", priority: 0.3 },
    { url: siteUrl("/community/"), changeFrequency: "daily", priority: 0.6 },
  ];
  const tests: MetadataRoute.Sitemap = QUIZ_CATALOG.map((quiz) => ({
    url: siteUrl(`/test/${quiz.id}/`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...tests];
}
