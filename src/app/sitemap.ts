import type { MetadataRoute } from "next";
import { QUIZ_CATALOG } from "@/core/quiz";
import { getDatabase } from "@/lib/server/database";
import { siteUrl } from "@/lib/site-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function publishedJournals(): MetadataRoute.Sitemap {
  try {
    const rows = getDatabase().prepare(`
      SELECT e.id, e.published_at, r.created_at AS revision_created_at
      FROM journal_entries e
      JOIN journal_revisions r ON r.id = e.published_revision_id
      WHERE e.status = 'published'
      ORDER BY e.published_at DESC
    `).all() as Array<{ id: string; published_at: number; revision_created_at: number }>;
    return rows.map((entry) => ({
      url: siteUrl(`/journal/${encodeURIComponent(entry.id)}/`),
      lastModified: new Date(entry.revision_created_at || entry.published_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl("/assessments/"), changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/privacy/"), changeFrequency: "yearly", priority: 0.3 },
    { url: siteUrl("/complaints/"), changeFrequency: "yearly", priority: 0.2 },
    { url: siteUrl("/community/"), changeFrequency: "daily", priority: 0.6 },
  ];
  const tests: MetadataRoute.Sitemap = QUIZ_CATALOG.map((quiz) => ({
    url: siteUrl(`/test/${quiz.id}/`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...tests, ...publishedJournals()];
}
