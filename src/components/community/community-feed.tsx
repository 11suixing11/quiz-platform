"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Heart, MessageCircle, Reply, ShieldAlert, Trash2, X } from "lucide-react";
import { useAccount } from "@/components/account-provider";
import { addCommunityComment, deleteCommunityComment, deleteCommunityPost, getCommunityPosts, reportCommunityContent, setCommunityReaction, type CommunityComment, type CommunityPost } from "@/lib/community";
import type { Lang } from "@/core/quiz";

function initials(name: string) { return Array.from(name.trim()).slice(0, 2).join("").toUpperCase() || "ME"; }

const REPORT_REASONS = [
  ["illegal", "违法内容", "Illegal content"],
  ["minor_sexual", "涉及未成年人性内容", "Sexual content involving minors"],
  ["nonconsensual_intimate", "非自愿私密影像", "Non-consensual intimate content"],
  ["privacy", "隐私泄露", "Privacy exposure"],
  ["explicit_harm", "明确伤害内容", "Explicit harm"],
  ["spam", "垃圾广告", "Spam"],
  ["abuse", "攻击或骚扰", "Abuse or harassment"],
  ["sexual", "不适当性内容", "Inappropriate sexual content"],
  ["copyright", "版权问题", "Copyright"],
  ["other", "其他", "Other"],
] as const;

function timeLabel(timestamp: number, language: Lang) {
  return new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en", { year: "numeric", month: "short", day: "numeric" }).format(timestamp);
}

function ReportDialog({ language, onSubmit }: { language: Lang; onSubmit: (reason: string) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("other");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return <>
    <button type="button" onClick={() => setOpen(true)}><ShieldAlert />{language === "zh" ? "举报" : "Report"}</button>
    {open && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 sm:items-center" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !busy) setOpen(false); }}>
      <section className="w-full max-w-md rounded-lg bg-paper p-5 shadow-2xl dark:bg-night" role="dialog" aria-modal="true" aria-labelledby="community-report-title" aria-describedby="community-report-description">
        <div className="flex items-center justify-between gap-4"><h2 id="community-report-title" className="text-lg font-semibold">{language === "zh" ? "举报内容" : "Report content"}</h2><button type="button" className="community-icon-action" onClick={() => setOpen(false)} disabled={busy} aria-label={language === "zh" ? "关闭" : "Close"} title={language === "zh" ? "关闭" : "Close"}><X aria-hidden="true" /></button></div>
        <p id="community-report-description" className="sr-only">{language === "zh" ? "选择最符合这项内容的举报原因。" : "Choose the reason that best describes this content."}</p>
        <label className="mt-5 block text-sm font-semibold"><span>{language === "zh" ? "原因" : "Reason"}</span><select value={reason} onChange={(event) => setReason(event.target.value)} className="atlas-account-input mt-2">{REPORT_REASONS.map(([value, zh, en]) => <option key={value} value={value}>{language === "zh" ? zh : en}</option>)}</select></label>
        {error && <p className="mt-3 text-sm text-[#a53f3f] dark:text-red-200" role="alert">{error}</p>}
        <div className="mt-6 flex justify-end gap-3"><button type="button" className="atlas-text-button" onClick={() => setOpen(false)} disabled={busy}>{language === "zh" ? "取消" : "Cancel"}</button><button type="button" className="atlas-danger-action disabled:opacity-45" disabled={busy} onClick={async () => { setBusy(true); setError(""); try { await onSubmit(reason); setOpen(false); } catch (cause) { setError(cause instanceof Error ? cause.message : (language === "zh" ? "举报失败" : "Report failed")); } finally { setBusy(false); } }}><ShieldAlert aria-hidden="true" />{busy ? (language === "zh" ? "提交中…" : "Submitting…") : (language === "zh" ? "提交举报" : "Submit report")}</button></div>
      </section>
    </div>}
  </>;
}

function CommentForm({ postId, parentId, language, onSaved }: { postId: string; parentId?: string; language: Lang; onSaved: () => void }) {
  const { user } = useAccount();
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  if (!user) return <Link href="/account/" className="atlas-text-link mt-4 justify-start">{language === "zh" ? "登录后留言" : "Sign in to respond"}</Link>;
  return <form className="community-comment-form" onSubmit={async (event) => {
    event.preventDefault(); if (!body.trim() || busy) return; setBusy(true); setError("");
    try { await addCommunityComment(user.id, postId, body, parentId); setBody(""); onSaved(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : (language === "zh" ? "暂时无法留言" : "Unable to respond")); }
    finally { setBusy(false); }
  }}>
    <label className="sr-only" htmlFor={`comment-${postId}-${parentId ?? "root"}`}>{language === "zh" ? "留下你的理解或支持" : "Leave understanding or support"}</label>
    <textarea id={`comment-${postId}-${parentId ?? "root"}`} value={body} onChange={(event) => setBody(event.target.value)} maxLength={500} rows={parentId ? 2 : 3} placeholder={language === "zh" ? "留下你的理解或支持…" : "Leave understanding or support…"} />
    <div><span className="community-field-status">{error || `${Array.from(body).length}/500`}</span><button className="atlas-secondary-action" disabled={busy || !body.trim()}>{busy ? (language === "zh" ? "发送中…" : "Sending…") : (language === "zh" ? "发送" : "Send")}</button></div>
  </form>;
}

function CommentItem({ comment, post, language, refresh }: { comment: CommunityComment; post: CommunityPost; language: Lang; refresh: () => void }) {
  const { user } = useAccount();
  const [replying, setReplying] = useState(false);
  const replies = post.comments.filter((item) => item.parentId === comment.id);
  return <div className="community-comment">
    <div className="community-comment-meta"><strong>{comment.author.displayName}</strong><span>{timeLabel(comment.createdAt, language)}</span></div>
    <p>{comment.body}</p>
    <div className="community-comment-actions">
      {user && !comment.parentId && <button type="button" onClick={() => setReplying((value) => !value)}><Reply />{language === "zh" ? "回复" : "Reply"}</button>}
      {user && <ReportDialog language={language} onSubmit={async (reason) => { await reportCommunityContent(user.id, { commentId: comment.id, reason }); refresh(); }} />}
      {comment.canDelete && user && <button type="button" onClick={async () => { if (window.confirm(language === "zh" ? "删除这条留言？" : "Delete this response?")) { await deleteCommunityComment(user.id, comment.id); refresh(); } }}><Trash2 />{language === "zh" ? "删除" : "Delete"}</button>}
    </div>
    {replying && <CommentForm postId={post.id} parentId={comment.id} language={language} onSaved={() => { setReplying(false); refresh(); }} />}
    {replies.length > 0 && <div className="community-replies">{replies.map((reply) => <CommentItem key={reply.id} comment={reply} post={post} language={language} refresh={refresh} />)}</div>}
  </div>;
}

export function CommunityFeed({ language }: { language: Lang }) {
  const { user } = useAccount();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [sort, setSort] = useState<"latest" | "resonant">("latest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    setLoading(true); setError("");
    try { setPosts((await getCommunityPosts(sort)).posts); }
    catch (cause) { setError(cause instanceof Error ? cause.message : (language === "zh" ? "暂时无法加载" : "Unable to load")); }
    finally { setLoading(false); }
  }, [language, sort]);
  useEffect(() => { const timer = window.setTimeout(() => { void load(); }, 0); return () => window.clearTimeout(timer); }, [load, user?.id]);

  return <>
    <div className="community-toolbar" aria-label={language === "zh" ? "排序" : "Sort posts"}>
      <button className={sort === "latest" ? "is-active" : ""} onClick={() => setSort("latest")}>{language === "zh" ? "最新分享" : "Latest"}</button>
      <button className={sort === "resonant" ? "is-active" : ""} onClick={() => setSort("resonant")}>{language === "zh" ? "最多共鸣" : "Most resonant"}</button>
    </div>
    {loading && <div className="community-state" role="status">{language === "zh" ? "正在听见大家的分享…" : "Listening for shared reflections…"}</div>}
    {error && <div className="community-state"><p>{error}</p><button className="atlas-secondary-action" onClick={load}>{language === "zh" ? "重新加载" : "Try again"}</button></div>}
    {!loading && !error && posts.length === 0 && <div className="community-state"><h2>{language === "zh" ? "这里还很安静" : "It is quiet here for now"}</h2><p>{language === "zh" ? "完成一项测评后，你可以选择分享这次发现。" : "After an assessment, you can choose to share what you noticed."}</p><Link href="/" className="atlas-primary-action">{language === "zh" ? "选择一项测评" : "Choose an assessment"}</Link></div>}
    <div className="community-feed">{posts.map((post) => {
      const roots = post.comments.filter((comment) => !comment.parentId);
      return <article key={post.id} className="community-post">
        <header className="community-post-header">
          <span className="community-avatar" aria-hidden="true">{post.author.avatar ? <Image src={post.author.avatar} alt="" width={80} height={80} unoptimized /> : initials(post.author.displayName)}</span>
          <div><strong>{post.author.displayName}</strong><span>{timeLabel(post.createdAt, language)}</span></div>
          {post.isAuthor && user && <button className="community-icon-action" title={language === "zh" ? "删除分享" : "Delete post"} onClick={async () => { if (window.confirm(language === "zh" ? "删除这篇公开分享及其留言？" : "Delete this public post and its responses?")) { await deleteCommunityPost(user.id, post.id); load(); } }}><Trash2 /></button>}
        </header>
        <div className="community-assessment"><Link href={`/test/${post.testId}/`}>{language === "zh" ? post.testName : post.testNameEn}</Link>{post.resultTitle && <><span>·</span><strong>{language === "zh" ? post.resultTitle : post.resultTitleEn}</strong></>}</div>
        {post.dimensions.length > 0 && <dl className="community-dimensions">{post.dimensions.map((item) => <div key={`${item.label}-${item.value}`}><dt>{language === "zh" ? item.label : item.labelEn}</dt><dd>{item.value}</dd></div>)}</dl>}
        <p className="community-reflection">{post.reflection}</p>
        <div className="community-post-actions">
          <button disabled={!user} className={post.reacted ? "is-active" : ""} title={!user ? (language === "zh" ? "登录后可以共鸣" : "Sign in to resonate") : undefined} onClick={async () => { if (!user) return; await setCommunityReaction(user.id, post.id, !post.reacted); load(); }}><Heart fill={post.reacted ? "currentColor" : "none"} />{language === "zh" ? "共鸣" : "Resonate"}<span>{post.reactionCount}</span></button>
          <span><MessageCircle />{language === "zh" ? `${post.commentCount} 条留言` : `${post.commentCount} responses`}</span>
          {user && !post.isAuthor && <ReportDialog language={language} onSubmit={async (reason) => { await reportCommunityContent(user.id, { postId: post.id, reason }); await load(); }} />}
        </div>
        {post.allowComments && <section className="community-comments" aria-label={language === "zh" ? "留言" : "Responses"}>
          {roots.map((comment) => <CommentItem key={comment.id} comment={comment} post={post} language={language} refresh={load} />)}
          <CommentForm postId={post.id} language={language} onSaved={load} />
        </section>}
      </article>;
    })}</div>
  </>;
}
