"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, LockKeyhole, NotebookPen } from "lucide-react";
import { CommunityFeed } from "@/components/community/community-feed";
import { JournalCommunityFeed } from "@/components/community/journal-feed";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAccount } from "@/components/account-provider";
import { useLanguage } from "@/hooks/use-local-storage";

export default function CommunityPage() {
  const { language } = useLanguage();
  const { user } = useAccount();
  const [tab, setTab] = useState<"journals" | "assessments">("journals");
  return <div className="atlas-page min-h-screen">
    <AppHeader section={language === "zh" ? "社区" : "Community"} />
    <PageContainer className="community-page max-w-4xl">
      <header className="community-intro">
        <div><h1>{language === "zh" ? "把一次看见，留给可能懂你的人" : "Leave one observation for someone who may understand"}</h1><p>{language === "zh" ? "阅读公开的图像札记，或浏览大家主动分享的测评发现。两类内容各自成流，不混合排序。" : "Read public image journals or browse assessment discoveries people chose to share. Each has its own feed."}</p></div>
        <aside>{tab === "journals" ? <NotebookPen aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}<p>{tab === "journals" ? (language === "zh" ? "公开版是发布时的不可变快照，作者的后续编辑不会自动替换它。" : "A public version is an immutable publishing snapshot; later edits do not replace it automatically.") : (language === "zh" ? "原始答案不会公开。结果只有在本人主动确认后才会出现在这里。" : "Raw answers are never public. A result appears only after its owner confirms sharing.")}</p>{user ? <Link href={tab === "journals" ? "/journal/new/" : "/history/"} className="atlas-text-link">{tab === "journals" ? (language === "zh" ? "写一篇图像札记" : "Write an image journal") : (language === "zh" ? "从历史记录分享结果" : "Share from history")}<ArrowRight /></Link> : <Link href="/account/" className="atlas-text-link">{language === "zh" ? "登录后参与交流" : "Sign in to participate"}<ArrowRight /></Link>}</aside>
      </header>
      <div className="mb-8 grid grid-cols-2 rounded-lg border border-ink/12 p-1 dark:border-white/12" role="tablist" aria-label={language === "zh" ? "社区内容" : "Community content"}>
        <button type="button" role="tab" aria-selected={tab === "journals"} onClick={() => setTab("journals")} className={`min-h-11 rounded-md px-3 text-sm font-semibold ${tab === "journals" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55"}`}>{language === "zh" ? "图像札记" : "Image journals"}</button>
        <button type="button" role="tab" aria-selected={tab === "assessments"} onClick={() => setTab("assessments")} className={`min-h-11 rounded-md px-3 text-sm font-semibold ${tab === "assessments" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55"}`}>{language === "zh" ? "测评分享" : "Assessment shares"}</button>
      </div>
      {tab === "journals" ? <JournalCommunityFeed language={language} /> : <CommunityFeed language={language} />}
    </PageContainer>
  </div>;
}
