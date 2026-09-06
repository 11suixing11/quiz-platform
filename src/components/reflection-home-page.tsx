"use client";

import Link from "next/link";
import { ArrowUpRight, Bookmark, History, Sparkles } from "lucide-react";
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
    <div className="atlas-page wellness-page reflection-home-page">
      <AppHeader />
      <PageContainer className="reflection-home-shell">
        <section className="home-hero">
          <header className="home-hero-copy">
            <h1>{language === "zh" ? <>认识<br /><span>你自己</span></> : <>Know<br /><span>Yourself</span></>}</h1>
            <p className="home-hero-lede">{localized(language, "做一次测评，或用图像留住难以说清的感受。", "Take an assessment, or hold a difficult feeling in images.")}</p>
          </header>

          <section className="home-paths" aria-label={localized(language, "选择反思方式", "Choose a way to reflect")}>
            <Link href="/assessments/" className="home-path home-path--assessment group">
              <div className="home-path-media">
                {assessmentVisual && <QuizVisualFrame visual={assessmentVisual} lang={language} sizes="(max-width: 799px) 92vw, 46vw" className="home-path-visual" preload />}
                <span className="home-path-media-label">{localized(language, "结构化路径", "Structured")}</span>
              </div>
              <div className="home-path-body">
                <h2>{localized(language, "做一次测评", "Take an assessment")}</h2>
                <p>{localized(language, "沿着一组问题，观察性格、情绪、关系与生活中的倾向。", "Follow a set of questions to notice patterns across personality, emotions, relationships, and daily life.")}</p>
                <span className="home-path-action">{localized(language, "浏览测评", "Browse assessments")}<ArrowUpRight aria-hidden="true" /></span>
              </div>
            </Link>

            <Link href="/community/" className="home-path home-path--journal group">
              <div className="home-path-media">
                <QuizVisualFrame visual={journalVisual} lang={language} sizes="(max-width: 799px) 92vw, 46vw" className="home-path-visual" preload />
                <span className="home-path-media-label">{localized(language, "开放式路径", "Open-ended")}</span>
              </div>
              <div className="home-path-body">
                <h2>{localized(language, "进入社区分享", "Share with the community")}</h2>
                <p>{localized(language, "选择文字、测评或图像，把此刻的观察留给可能懂你的人。", "Choose words, an assessment, or images and leave an observation for someone who may understand.")}</p>
                <span className="home-path-action">{localized(language, "打开社区", "Open community")}<ArrowUpRight aria-hidden="true" /></span>
              </div>
            </Link>
          </section>
        </section>

        <section className="home-continue-strip" aria-label={localized(language, "继续已有内容", "Continue existing reflections")}>
          <div className="home-continue-label"><Sparkles aria-hidden="true" /><span>{localized(language, "继续上次的线索", "Pick up a thread")}</span></div>
          <nav>
            <Link href="/history/"><History aria-hidden="true" />{localized(language, "回看测评记录", "Review history")}<ArrowUpRight aria-hidden="true" /></Link>
            <Link href="/bookmarks/"><Bookmark aria-hidden="true" />{localized(language, "查看收藏", "View saved")}<ArrowUpRight aria-hidden="true" /></Link>
          </nav>
        </section>

        <section className="home-principles" aria-labelledby="home-principles-title">
          <div className="home-principles-intro"><h2 id="home-principles-title">{localized(language, "慢一点，也可以看见更多。", "A slower look can reveal more.")}</h2></div>
          <div className="home-principle-list">
            <div><span>01</span><p>{localized(language, "没有标准答案，只有更接近此刻的回答。", "There are no right answers, only responses closer to this moment.")}</p></div>
            <div><span>02</span><p>{localized(language, "默认从本机开始，何时同步或公开由你决定。", "Start on your device by default. You choose when to sync or publish.")}</p></div>
          </div>
        </section>
      </PageContainer>
      <footer className="home-footer"><div><span>认识你自己 / Know Yourself</span></div><Link href="/privacy/">{localized(language, "隐私说明", "Privacy notes")}<ArrowUpRight aria-hidden="true" /></Link></footer>
    </div>
  );
}
