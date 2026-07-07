import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";
import BottomNav from "@/components/bottom-nav";
import { AccessibilityControls } from "@/components/accessibility-controls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://11suixing11.github.io/quiz-platform";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "认识你自己 — 内在探索平台",
  description:
    "通过人格、情绪与关系叙事，重新理解你的内在模式。100+ 个自我探索测试，覆盖自我认知、情绪图谱、关系动力等 9 大维度。这里不是诊断，而是一面帮助你靠近自己的镜子。",
  keywords: ["心理测试", "人格测试", "MBTI", "大五人格", "九型人格", "自我认知", "情绪管理", "关系"],
  authors: [{ name: "认识你自己" }],
  manifest: "/quiz-platform/manifest.json",
  openGraph: {
    title: "认识你自己 — 有些自己，要慢慢被看见",
    description: "100+ 个自我探索测试 + MBTI 关系配对，重新理解你的内在模式。",
    siteName: "认识你自己",
    locale: "zh_CN",
    type: "website",
    url: SITE_URL,
    images: ["/quiz-platform/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "认识你自己 — 有些自己，要慢慢被看见",
    description: "100+ 个自我探索测试 + MBTI 关系配对，重新理解你的内在模式。",
    images: ["/quiz-platform/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "认识你自己",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "认识你自己",
  alternateName: "Know Yourself",
  url: SITE_URL,
  description:
    "通过人格、情绪与关系叙事，重新理解你的内在模式。100+ 个自我探索测试，覆盖自我认知、情绪图谱、关系动力等 9 大维度。",
  inLanguage: "zh-CN",
  publisher: {
    "@type": "Organization",
    name: "认识你自己",
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#FAFAF8" />
        <link rel="apple-touch-icon" href="/quiz-platform/icons/icon-192.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=JSON.parse('{"warm":{"primary":"#2C2C2C","accent":"#B07D6E","bg":"#FAFAF8","bgDark":"#0a0a0a"},"ocean":{"primary":"#1a4b6b","accent":"#3b82f6","bg":"#f0f7ff","bgDark":"#0a1628"},"forest":{"primary":"#2d5a27","accent":"#22c55e","bg":"#f0f7f0","bgDark":"#0a1a0a"},"sunset":{"primary":"#8b3a3a","accent":"#f97316","bg":"#fff7ed","bgDark":"#1a0a0a"}}');var id=localStorage.getItem("quiz-platform-theme")||"warm";var c=t[id]||t.warm;var r=document.documentElement;r.style.setProperty("--theme-primary",c.primary);r.style.setProperty("--theme-accent",c.accent);r.style.setProperty("--theme-bg",c.bg);r.style.setProperty("--theme-bg-dark",c.bgDark)}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <BottomNav />
        <AccessibilityControls />
        <Analytics />
      </body>
    </html>
  );
}
