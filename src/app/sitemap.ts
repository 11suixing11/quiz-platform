import type { MetadataRoute } from "next";
import { QUIZ_CATALOG } from "@/core/quiz";

export const dynamic = "force-static";
const BASE_URL = "https://loveyourself.cc.cd";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/community/`, changeFrequency: "daily", priority: 0.6 },
  ];
  const tests: MetadataRoute.Sitemap = QUIZ_CATALOG.map((quiz) => ({ url: `${BASE_URL}/test/${quiz.id}/`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...staticPages, ...tests];
}
