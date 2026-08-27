"use client";

import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { CommunityFeed } from "@/components/community/community-feed";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useAccount } from "@/components/account-provider";
import { useLanguage } from "@/hooks/use-local-storage";

export default function CommunityPage() {
  const { language } = useLanguage();
  const { user } = useAccount();
  return <div className="atlas-page min-h-screen">
    <AppHeader section={language === "zh" ? "公共频道" : "Community"} />
    <PageContainer className="community-page max-w-4xl">
      <header className="community-intro">
        <div><h1>{language === "zh" ? "把一次发现，留给可能懂你的人" : "Leave one discovery for someone who may understand"}</h1><p>{language === "zh" ? "这里收集大家主动公开的测评结果与感想。你可以安静地阅读，也可以留下理解和支持。" : "This space holds assessment results and reflections people chose to make public. Read quietly, or leave understanding and support."}</p></div>
        <aside><LockKeyhole aria-hidden="true" /><p>{language === "zh" ? "原始答案不会公开。结果只有在本人主动确认后才会出现在这里。" : "Raw answers are never public. A result appears here only after its owner confirms sharing."}</p>{user ? <Link href="/history/" className="atlas-text-link">{language === "zh" ? "从历史记录打开结果" : "Open a result from history"}<ArrowRight /></Link> : <Link href="/account/" className="atlas-text-link">{language === "zh" ? "登录后参与交流" : "Sign in to participate"}<ArrowRight /></Link>}</aside>
      </header>
      <CommunityFeed language={language} />
    </PageContainer>
  </div>;
}
