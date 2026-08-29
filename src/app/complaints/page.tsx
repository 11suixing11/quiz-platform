"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";

type ComplaintKind = "privacy" | "copyright";

export default function ComplaintsPage() {
  const { language } = useLanguage();
  const zh = language === "zh";
  const [kind, setKind] = useState<ComplaintKind>("privacy");
  const [targetUrl, setTargetUrl] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/complaints", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ kind, targetUrl: targetUrl.trim(), contact: contact.trim(), details: details.trim() }),
      });
      const payload = await response.json().catch(() => null) as { error?: string } | null;
      if (!response.ok) throw new Error(payload?.error || (zh ? "提交失败" : "Submission failed"));
      setSubmitted(true);
      setTargetUrl("");
      setContact("");
      setDetails("");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : (zh ? "暂时无法提交投诉" : "Unable to submit the complaint"));
    } finally {
      setBusy(false);
    }
  };

  return <div className="atlas-page min-h-screen">
    <AppHeader backHref="/privacy/" backLabel={zh ? "返回隐私说明" : "Back to privacy"} section={zh ? "内容投诉" : "Content complaint"} />
    <PageContainer className="max-w-3xl">
      <header className="max-w-2xl">
        <h1 className="atlas-section-title">{zh ? "隐私与版权投诉" : "Privacy and copyright complaints"}</h1>
        <p className="mt-4 text-base leading-7 text-ink/60 dark:text-white/60">{zh ? "无需登录即可提交。请提供准确的公开链接和足以定位问题的说明。" : "No account is required. Provide the exact public URL and enough detail to locate the issue."}</p>
      </header>

      {submitted ? <section className="mt-12 border-y border-ink/12 py-10 dark:border-white/12" aria-live="polite">
        <CheckCircle2 className="size-7 text-accent" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold">{zh ? "投诉已提交" : "Complaint submitted"}</h2>
        <p className="mt-3 text-sm leading-6 text-ink/55 dark:text-white/55">{zh ? "我们会保留记录并尽力处理。" : "The report has been recorded for review."}</p>
        <button type="button" className="atlas-secondary-action mt-6" onClick={() => setSubmitted(false)}>{zh ? "提交另一项" : "Submit another"}</button>
      </section> : <form onSubmit={submit} className="mt-12 space-y-7 border-y border-ink/12 py-9 dark:border-white/12">
        <fieldset>
          <legend className="text-sm font-semibold">{zh ? "投诉类型" : "Complaint type"}</legend>
          <div className="mt-3 inline-grid grid-cols-2 rounded-lg border border-ink/12 p-1 dark:border-white/12">
            <button type="button" aria-pressed={kind === "privacy"} onClick={() => setKind("privacy")} className={`min-h-10 rounded-md px-4 text-sm font-semibold ${kind === "privacy" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55"}`}>{zh ? "隐私" : "Privacy"}</button>
            <button type="button" aria-pressed={kind === "copyright"} onClick={() => setKind("copyright")} className={`min-h-10 rounded-md px-4 text-sm font-semibold ${kind === "copyright" ? "bg-ink text-paper dark:bg-white dark:text-night" : "text-ink/55 dark:text-white/55"}`}>{zh ? "版权" : "Copyright"}</button>
          </div>
        </fieldset>

        <label className="block text-sm font-semibold">
          <span>{zh ? "目标链接" : "Public URL"}</span>
          <input aria-label={zh ? "目标链接" : "Public URL"} value={targetUrl} onChange={(event) => setTargetUrl(event.target.value)} type="url" maxLength={2000} required className="atlas-account-input mt-2" placeholder="https://knowyourself.cc.cd/journal/..." />
        </label>
        <label className="block text-sm font-semibold">
          <span>{zh ? "联系方式（可选）" : "Contact (optional)"}</span>
          <input aria-label={zh ? "联系方式（可选）" : "Contact (optional)"} value={contact} onChange={(event) => setContact(event.target.value)} maxLength={254} className="atlas-account-input mt-2" autoComplete="email" />
        </label>
        <label className="block text-sm font-semibold">
          <span>{zh ? "说明" : "Details"}</span>
          <textarea value={details} onChange={(event) => setDetails(event.target.value)} minLength={1} maxLength={5000} required rows={8} className="atlas-account-input mt-2 min-h-44 resize-y" />
        </label>
        {error && <p className="text-sm text-[color:var(--danger)]" role="alert">{error}</p>}
        <button type="submit" disabled={busy} className="atlas-primary-action justify-center disabled:opacity-45"><Send className="size-4" aria-hidden="true" />{busy ? (zh ? "正在提交…" : "Submitting…") : (zh ? "提交投诉" : "Submit complaint")}</button>
      </form>}
    </PageContainer>
  </div>;
}
