"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ImagePlus, MessageSquarePlus } from "lucide-react";
import { CommunityFeed } from "@/components/community/community-feed";
import { CommunityTextComposer } from "@/components/community/community-text-composer";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAccountIdentity } from "@/components/account-provider";
import { useLanguage } from "@/hooks/use-local-storage";

/**
 * The unified community stream. It backs both the homepage and the
 * compatibility `/community/` route so the feed has exactly one
 * implementation, one empty-state copy, and one composer wiring.
 */
export function CommunityStream() {
  const { language } = useLanguage();
  const { user } = useAccountIdentity();
  const [composerOpen, setComposerOpen] = useState(false);
  const [feedVersion, setFeedVersion] = useState(0);
  const text = language === "zh";
  return <div className="atlas-page min-h-screen">
    <AppHeader section={text ? "社区" : "Community"} />
    <PageContainer className="community-page max-w-4xl">
      <header className="community-intro">
        <div><h1>{text ? "把想法留给可能懂你的人" : "Leave a thought for someone who may understand"}</h1><p>{text ? "测评、文字和图像现在在同一个社区里。你可以选择最适合此刻的一种表达方式。" : "Assessments, words, and images now live in one community. Choose the form that fits this moment."}</p></div>
        <aside><p>{text ? "主题不设预设范围，你可以选择文字、测评或图像来表达。公开发布前，你可以先看清会出现什么；未来如提供 AI 功能，也会单独征得同意。" : "There is no preset topic list. Choose words, an assessment, or images. Review what will be public before posting; if AI features are offered later, they will require separate consent."}</p><Link href="/history/" className="atlas-text-link">{text ? "从测评记录开始" : "Start from an assessment"}<ArrowRight aria-hidden="true" /></Link></aside>
      </header>

      <div className="community-create-actions" aria-label={text ? "创建社区内容" : "Create community content"}>
        <button type="button" className="atlas-primary-action" onClick={() => setComposerOpen(true)}><MessageSquarePlus aria-hidden="true" />{text ? "写一段文字" : "Write a text post"}</button>
        <Link href="/journal/new/?from=community" className="atlas-secondary-action"><ImagePlus aria-hidden="true" />{text ? "发一篇图文帖" : "Create an image post"}</Link>
        <div className="community-create-meta">
          <span className="community-create-note">{text ? "图像上传需要验证邮箱" : "Email verification is required for image uploads"}</span>
          {user
            ? <Link href="/journal/" className="atlas-text-link">{text ? "我的图文帖" : "My image posts"}<ArrowRight aria-hidden="true" /></Link>
            : <Link href="/account/" className="atlas-text-link">{text ? "登录后参与" : "Sign in to participate"}<ArrowRight aria-hidden="true" /></Link>}
        </div>
      </div>

      {composerOpen && <CommunityTextComposer language={language} onClose={() => setComposerOpen(false)} onPublished={() => { setComposerOpen(false); setFeedVersion((value) => value + 1); }} />}
      <CommunityFeed key={feedVersion} language={language} onCreateText={() => setComposerOpen(true)} />
    </PageContainer>
  </div>;
}
