import type { MetadataRoute } from "next";
import { TEST_TYPES } from "@/lib/test-types";

export const dynamic = "force-static";

const BASE_URL = "https://11suixing11.github.io/quiz-platform";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/compat/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const quizPages: MetadataRoute.Sitemap = TEST_TYPES.map((type) => ({
    url: `${BASE_URL}/quiz/${type}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resultPages: MetadataRoute.Sitemap = TEST_TYPES.map((type) => ({
    url: `${BASE_URL}/result/${type}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...quizPages, ...resultPages];
}
