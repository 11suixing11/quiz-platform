"use client";

import Link from "next/link";
import { Database, EyeOff, HardDrive, ShieldCheck } from "lucide-react";
import { AppHeader, PageContainer } from "@/components/shell/app-shell";
import { useLanguage } from "@/hooks/use-local-storage";

const content = {
  zh: {
    title: "隐私说明",
    updated: "更新于 2026 年 8 月 27 日",
    intro: "认识你自己是一款本地优先的自我反思应用。游客数据留在当前设备；注册或登录后，本机与云端数据会自动合并并同步到你的账号。",
    items: [
      ["登录后自动同步", "不登录时，结果、收藏、偏好和未完成进度保存在当前浏览器。注册或登录后，这些本机数据会自动与账号云端数据合并；头像、个性签名和标签也会随账号同步。"],
      ["账号与云端数据范围", "注册需要显示名称、邮箱和密码；服务器保存密码哈希而不是明文密码。云端保存测评结果、历史、收藏、语言与主题偏好、个人资料，以及 24 小时内的未完成进度。"],
      ["完成后的原始答案不进云端", "新测评只向服务器提交测评编号和答案用于重新计分；云端结果写入后不保留已完成测评的原始答案。未完成进度在同步开启时会暂存，以便跨设备继续。"],
      ["没有应用内分析追踪", "当前版本没有接入第三方分析、广告像素或行为画像工具，也不会把测试内容发送给 AI 服务。"],
      ["你可以带走或删除数据", "设置页支持导出、导入或清空当前设备数据，备份可包含当前账号的个人资料。历史页可删除结果；账号页支持退出登录和永久删除账号。删除账号会删除账号及全部云端数据，但不会自动删除当前设备的本地副本。"],
    ],
    dataTable: "数据、保留期限与删除方式",
    tableHeaders: ["数据", "保留期限", "如何删除"],
    dataRows: [
      ["本机数据：结果、已完成测评的回答、收藏、偏好与个人资料副本", "保留到你主动删除，或浏览器清除本站数据。", "在历史页删除记录，或在设置页清空本机数据。"],
      ["账号资料：显示名称、邮箱、密码哈希与登录会话", "账号资料保留到你删除账号；登录会话最长 30 天，并可能在持续使用时更新。", "在账号页永久删除账号。"],
      ["云端数据：结果、测评名称、完成时间、收藏、偏好、头像、个性签名与标签", "保留到你删除相关记录或删除账号。云端不保留已完成测评的原始答案。", "在历史页删除结果，或在账号页永久删除账号及全部云端数据。"],
      ["测评分享：主动公开的结果、感想、留言和共鸣", "公开内容保留到你删除帖子、留言或账号。原始答案不会因为分享而公开。", "在测评分享区删除自己的内容，或在账号页永久删除账号。"],
      ["未完成进度：当前题目与暂存回答", "云端最多保留 24 小时；每次保存后重新计算，完成测评或到期后删除。", "完成测评、等待进度到期，或删除账号以删除云端进度。"],
    ],
    hosting: "托管说明",
    hostingText: "站点运行在自有服务器上，由 Caddy 提供 HTTPS 并转发到应用服务，账号和同步数据保存在该服务器的 SQLite 数据库中。服务器和网络服务会处理提供网站所需的标准请求元数据。",
    controls: "管理本地数据",
    accountControls: "管理账号与云端数据",
    source: "查看源代码",
    contact: "联系渠道",
    contactText: "如需咨询隐私、数据访问或删除问题，请通过项目仓库联系。不要在公开问题中提交密码、测评回答或其他敏感信息。",
    contactLink: "通过项目仓库联系",
  },
  en: {
    title: "Privacy notes",
    updated: "Updated August 27, 2026",
    intro: "Know Yourself is a local-first reflection app. Guest data stays on the current device; after registration or sign-in, device and cloud data are merged automatically and synced with your account.",
    items: [
      ["Automatic sync after sign-in", "Without signing in, results, bookmarks, preferences, and unfinished progress stay in this browser. Registration or sign-in automatically merges this device data with the account cloud copy. Avatar, bio, and personality tags also sync with the account."],
      ["Account and cloud data", "Registration requires a display name, email address, and password. The server stores a password hash, not the plain password. It stores results, history, bookmarks, language and theme preferences, profile data, and unfinished progress for up to 24 hours."],
      ["Completed raw answers stay off the cloud", "A new completion sends only the assessment id and answers for server-side scoring. After the result is stored, completed raw answers are not retained in cloud storage. Unfinished progress may be stored while sync is enabled so another device can continue."],
      ["No in-app analytics tracking", "This release does not include third-party analytics, advertising pixels, behavioral profiles, or any service that sends quiz content to AI."],
      ["You can take or delete your data", "Settings lets you export, import, or clear data on the current device, including the current account profile in backups. History lets you delete results. Account controls let you sign out or permanently delete the account and all cloud data. Deleting an account does not automatically erase local device copies."],
    ],
    dataTable: "Data, retention, and deletion",
    tableHeaders: ["Data", "Retention", "How to delete"],
    dataRows: [
      ["On-device data: results, completed answers, bookmarks, preferences, and local profile copies", "Kept until you delete it or the browser clears this site's data.", "Delete records in History, or clear device data in Settings."],
      ["Account data: display name, email, password hash, and sign-in sessions", "Account data is kept until you delete the account. Sign-in sessions last up to 30 days and may refresh while you keep using the service.", "Permanently delete the account on the Account page."],
      ["Cloud data: results, assessment name, completion time, bookmarks, preferences, avatar, bio, and tags", "Kept until you delete the related records or delete the account. Completed raw answers are not retained in the cloud.", "Delete results in History, or permanently delete the account and all cloud data on the Account page."],
      ["Community: results, reflections, responses, and resonances you choose to publish", "Public content remains until you delete the post, response, or account. Raw assessment answers are never published.", "Delete your content in Community, or permanently delete the account on the Account page."],
      ["Unfinished progress: current question and draft answers", "Cloud drafts are kept for up to 24 hours. The period restarts after each save; completion or expiry removes the draft.", "Finish the assessment, wait for the draft to expire, or delete the account to remove cloud drafts."],
    ],
    hosting: "Hosting note",
    hostingText: "The site runs on a self-managed server. Caddy provides HTTPS and forwards requests to the application, while account and sync data are stored in a SQLite database on that server. The server and network providers process standard request metadata needed to deliver the site.",
    controls: "Manage local data",
    accountControls: "Manage account and cloud data",
    source: "View source code",
    contact: "Contact",
    contactText: "For privacy, data access, or deletion questions, contact the project through its repository. Do not post passwords, assessment answers, or other sensitive data in a public issue.",
    contactLink: "Contact via project repository",
  },
} as const;

const icons = [HardDrive, ShieldCheck, Database, EyeOff, Database];

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="atlas-page min-h-screen">
      <AppHeader backHref="/" backLabel={language === "zh" ? "返回首页" : "Back home"} section={t.title} />
      <PageContainer className="max-w-3xl">
        <p className="atlas-section-kicker">{language === "zh" ? "本地优先" : "Local first"}</p>
        <h1 className="atlas-section-title mt-3">{t.title}</h1>
        <p className="mt-3 text-xs text-ink/40 dark:text-white/40">{t.updated}</p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/65 dark:text-white/65">{t.intro}</p>

        <div className="mt-12 border-y border-ink/10 dark:border-white/10">{t.items.map(([title, description], index) => { const Icon = icons[index]; return <section key={title} className="grid gap-4 border-b border-ink/10 py-7 last:border-b-0 dark:border-white/10 sm:grid-cols-[3rem_1fr]"><span className="flex size-10 items-center justify-center rounded-full border border-accent/25 text-accent"><Icon className="size-4" strokeWidth={1.7} /></span><div><h2 className="text-base font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-ink/55 dark:text-white/55">{description}</p></div></section>; })}</div>

        <section className="mt-12" aria-labelledby="data-retention-heading">
          <h2 id="data-retention-heading" className="text-xl font-semibold">{t.dataTable}</h2>
          <div className="mt-5 overflow-x-auto rounded-lg border border-ink/12 dark:border-white/12">
            <table className="w-full min-w-[44rem] border-collapse text-left text-xs leading-5 sm:text-sm">
              <thead className="bg-ink/[0.04] dark:bg-white/[0.05]"><tr>{t.tableHeaders.map((header) => <th key={header} scope="col" className="border-b border-ink/12 px-3 py-3 font-semibold dark:border-white/12 sm:px-4">{header}</th>)}</tr></thead>
              <tbody>{t.dataRows.map(([data, retention, deletion]) => <tr key={data} className="align-top border-b border-ink/10 last:border-b-0 dark:border-white/10"><th scope="row" className="px-3 py-4 font-semibold sm:px-4">{data}</th><td className="px-3 py-4 text-ink/58 dark:text-white/58 sm:px-4">{retention}</td><td className="px-3 py-4 text-ink/58 dark:text-white/58 sm:px-4">{deletion}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="atlas-detail-panel mt-10"><p className="atlas-section-kicker">{t.hosting}</p><p className="relative mt-4 text-sm leading-6 text-ink/58 dark:text-white/58">{t.hostingText}</p></section>
        <section className="atlas-settings-section mt-10" aria-labelledby="privacy-contact-heading"><h2 id="privacy-contact-heading" className="text-xl font-semibold">{t.contact}</h2><p className="mt-3 text-sm leading-6 text-ink/58 dark:text-white/58">{t.contactText}</p><a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noreferrer" className="atlas-text-link mt-4 justify-start font-semibold">{t.contactLink}</a></section>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/settings/#data" className="atlas-primary-action justify-center">{t.controls}</Link><Link href="/account/" className="atlas-secondary-action justify-center">{t.accountControls}</Link><a href="https://github.com/11suixing11/quiz-platform" target="_blank" rel="noreferrer" className="atlas-secondary-action justify-center">{t.source}</a></div>
      </PageContainer>
    </div>
  );
}
