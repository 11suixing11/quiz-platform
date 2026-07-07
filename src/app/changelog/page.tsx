import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const versions = [
  {
    version: "v0.3.0",
    date: "2026-06-21",
    title: "Content and workflow updates",
    changes: [
      "Expanded the self-reflection quiz library while keeping public copy at 100+ to avoid metadata drift.",
      "Added test detail pages, related quizzes, daily recommendations, bookmarks, and comparison flows.",
      "Improved static deployment and GitHub Actions delivery.",
    ],
  },
  {
    version: "v0.2.0",
    date: "2026-06-20",
    title: "Product polish",
    changes: [
      "Added dark mode, PWA metadata, local history, personal stats, and result sharing.",
      "Improved bilingual content and SEO metadata.",
      "Added local-only analytics for page-view insight without a backend.",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-05-15",
    title: "Initial public release",
    changes: [
      "Launched the first public version of the self-reflection quiz platform.",
      "Added quiz categories for personality, emotions, relationships, career, habits, and inner patterns.",
      "Added MBTI relationship matching and localStorage result persistence.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] dark:bg-[#0a0a0a]">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/40 bg-[#FAFAF8]/80 px-6 py-4 backdrop-blur-md dark:bg-[#0a0a0a]/80">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] hover:opacity-80 dark:text-white"
        >
          <ArrowLeft className="size-4" />
          <span>Quiz Platform</span>
        </Link>
        <span className="text-xs font-semibold text-[#2C2C2C]/50 dark:text-white/50">
          Self-reflection, not diagnosis
        </span>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="mb-2 text-2xl font-bold text-[#2C2C2C] dark:text-white">Changelog</h1>
        <p className="mb-10 text-sm text-[#2C2C2C]/60 dark:text-white/60">
          Notable changes to the quiz library, product experience, and project boundaries.
        </p>

        <div className="relative space-y-8">
          {versions.map((entry) => (
            <article
              key={entry.version}
              className="border-l border-[#2C2C2C]/15 pl-5 dark:border-white/15"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <h2 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">
                  {entry.version}
                </h2>
                <time className="text-xs text-[#2C2C2C]/45 dark:text-white/45">{entry.date}</time>
              </div>
              <h3 className="mb-3 text-sm font-semibold text-[#2C2C2C]/70 dark:text-white/70">
                {entry.title}
              </h3>
              <ul className="space-y-2 text-sm leading-6 text-[#2C2C2C]/65 dark:text-white/65">
                {entry.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
