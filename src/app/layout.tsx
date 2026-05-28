import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "认识你自己 — 内在探索平台",
  description:
    "通过人格、情绪与关系叙事，重新理解你的内在模式。113 个心理测试，覆盖自我认知、情绪图谱、关系动力等 9 大维度。这里不是诊断，而是一面帮助你靠近自己的镜子。",
  keywords: ["心理测试", "人格测试", "MBTI", "大五人格", "九型人格", "自我认知", "情绪管理", "关系"],
  authors: [{ name: "认识你自己" }],
  openGraph: {
    title: "认识你自己 — 有些自己，要慢慢被看见",
    description: "113 个心理测试 + MBTI 关系配对，重新理解你的内在模式。",
    siteName: "认识你自己",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "认识你自己 — 有些自己，要慢慢被看见",
    description: "113 个心理测试 + MBTI 关系配对，重新理解你的内在模式。",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
