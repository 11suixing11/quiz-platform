"use client";

import Link from "next/link";
import { ArrowRight, Bookmark, History, Images, ListChecks } from "lucide-react";
import type { QuizVisual } from "@/core/quiz";
import { QuizVisualFrame } from "@/components/quiz/quiz-visual";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";
import { getQuizCover } from "@/lib/quiz-media";

const assessmentVisual = getQuizCover("animal-personality");
const journalVisual: QuizVisual = {
  src: "/quiz-media/home/journal-cover.webp",
  width: 1200,
  height: 900,
  alt: {
    zh: "一本摊开的图像札记，页面上排列着两幅无文字的风景图像。",
    en: "An open image journal with two wordless landscape pictures arranged across its pages.",
  },
  focus: { x: 50, y: 50 },
};

function localized(language: "zh" | "en", zh: string, en: string) {
  return language === "zh" ? zh : en;
}

export default function ReflectionHomePage() {
  const { language } = useLanguage();

  return (
    <div className="atlas-page wellness-page reflection-home">
      <AppHeader />
      <PageContainer className="reflection-home-shell">
        <header className="reflection-home-intro">
          <h1>{localized(language, "认识你自己", "Know yourself")}</h1>
          <p>{localized(language, "从一次结构化测评开始，或用图像留住此刻难以说清的感受。", "Begin with a structured assessment, or use images to hold what is difficult to put into words.")}</p>
        </header>

        <section className="reflection-paths" aria-label={localized(language, "选择反思方式", "Choose a way to reflect")}>
          <Link href="/assessments/" className="reflection-path group">
            {assessmentVisual && <QuizVisualFrame visual={assessmentVisual} lang={language} sizes="(max-width: 760px) calc(100vw - 2.5rem), 45vw" className="reflection-path-visual" preload />}
            <div className="reflection-path-copy">
              <ListChecks aria-hidden="true" />
              <h2>{localized(language, "做一次测评", "Take an assessment")}</h2>
              <p>{localized(language, "沿着问题看见性格、情绪、关系与生活中的倾向。", "Follow a set of questions to notice patterns across personality, emotions, relationships, and daily life.")}</p>
              <span>{localized(language, "浏览测评", "Browse assessments")}<ArrowRight aria-hidden="true" /></span>
            </div>
          </Link>

          <Link href="/journal/" className="reflection-path group">
            <QuizVisualFrame visual={journalVisual} lang={language} sizes="(max-width: 760px) calc(100vw - 2.5rem), 45vw" className="reflection-path-visual" preload />
            <div className="reflection-path-copy">
              <Images aria-hidden="true" />
              <h2>{localized(language, "写一篇图像札记", "Create an image journal")}</h2>
              <p>{localized(language, "把一组图像、片段和说明排成只属于你的观察。", "Arrange images, fragments, and captions into an observation that is yours.")}</p>
              <span>{localized(language, "进入札记", "Open journal")}<ArrowRight aria-hidden="true" /></span>
            </div>
          </Link>
        </section>

        <nav className="reflection-home-secondary" aria-label={localized(language, "继续已有内容", "Continue existing reflections")}>
          <Link href="/history/"><History aria-hidden="true" />{localized(language, "回看测评记录", "Review assessment history")}</Link>
          <Link href="/bookmarks/"><Bookmark aria-hidden="true" />{localized(language, "查看收藏", "View saved assessments")}</Link>
        </nav>
      </PageContainer>
    </div>
  );
}
