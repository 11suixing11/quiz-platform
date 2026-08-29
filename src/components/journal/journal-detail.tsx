"use client";

import Link from "next/link";
import { ArrowLeft, FileImage, LogIn, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAccount } from "@/components/account-provider";
import { JournalArticle } from "@/components/journal/journal-article";
import { JournalInteractions } from "@/components/journal/journal-interactions";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";
import { getJournalEntry, JournalApiError, type JournalEntry } from "@/lib/journal";

export function JournalDetail({
  id,
  initialEntry,
  initialViewerId,
}: {
  id: string;
  initialEntry: JournalEntry;
  initialViewerId: string | null;
}) {
  const { language } = useLanguage();
  const { user, syncState } = useAccount();
  const userId = user?.id;
  const [entry, setEntry] = useState<JournalEntry | null>(initialEntry);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const loadedViewerRef = useRef<string | null | undefined>(initialViewerId);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    setErrorCode("");
    try {
      const response = await getJournalEntry(id, userId);
      if (!response.entry.isOwner && response.entry.status !== "published") throw new JournalApiError("札记不可用", 404, "NOT_FOUND");
      setEntry(response.entry);
    } catch (cause) {
      setEntry(null);
      setErrorCode(cause instanceof JournalApiError ? cause.code ?? String(cause.status) : "UNKNOWN");
      setError(cause instanceof Error ? cause.message : (language === "zh" ? "暂时无法读取这篇札记" : "This journal is unavailable"));
    } finally {
      loadedViewerRef.current = userId ?? null;
      setLoading(false);
    }
  }, [id, language, userId]);

  useEffect(() => {
    if (syncState === "loading") return;
    if (loadedViewerRef.current === (userId ?? null)) return;
    const timer = window.setTimeout(() => { void load(); }, 0);
    return () => window.clearTimeout(timer);
  }, [load, syncState, userId]);

  return (
    <div className="atlas-page journal-detail-page">
      <AppHeader backHref={entry?.isOwner ? "/journal/" : "/community/"} backLabel={language === "zh" ? "返回" : "Back"} section={language === "zh" ? "图像札记" : "Image journal"} narrow />
      <PageContainer className="journal-reading-container max-w-3xl">
        {loading && <div className="journal-state" role="status"><span className="journal-state-pulse" />{language === "zh" ? "正在打开札记…" : "Opening journal…"}</div>}

        {!loading && error && (
          <div className="journal-state journal-state-error">
            <FileImage aria-hidden="true" />
            <h1>{errorCode === "404" || errorCode === "NOT_FOUND"
              ? (language === "zh" ? "这篇札记没有公开" : "This journal is not public")
              : (language === "zh" ? "暂时无法打开札记" : "Unable to open this journal")}</h1>
            <p>{error}</p>
            <div>
              <button type="button" className="atlas-secondary-action" onClick={() => void load()}><RefreshCw aria-hidden="true" />{language === "zh" ? "重新加载" : "Try again"}</button>
              {user
                ? <Link href="/journal/" className="atlas-primary-action"><ArrowLeft aria-hidden="true" />{language === "zh" ? "回到个人库" : "Back to library"}</Link>
                : <Link href="/account/" className="atlas-primary-action"><LogIn aria-hidden="true" />{language === "zh" ? "登录查看自己的札记" : "Sign in for your journals"}</Link>}
            </div>
          </div>
        )}

        {!loading && entry && <>
          <JournalArticle
            entry={entry}
            language={language}
            preview={entry.isOwner && entry.status !== "published" ? "private" : undefined}
            showOwnerActions={entry.isOwner}
          />
          {entry.status === "published" && <JournalInteractions entry={entry} language={language} onRefresh={() => void load()} />}
        </>}
      </PageContainer>
    </div>
  );
}
