import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MobileNav, PreferenceSync } from "@/components/shell/app-shell";
import { AccountProvider } from "@/components/account-provider";

const SITE_URL = "https://loveyourself.cc.cd";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "认识你自己 | Know Yourself", template: "%s | Know Yourself" },
  description: "16 项经过审阅的中英双语心理评测。游客记录保存在当前浏览器，登录后可在自己的设备之间同步。",
  keywords: ["自我反思", "人格测试", "情绪", "关系", "self reflection", "personality quiz"],
  authors: [{ name: "Know Yourself" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "认识你自己 | Know Yourself",
    description: "16 项经过审阅的中英双语心理评测，安静、清晰，并且本地优先。",
    siteName: "认识你自己 | Know Yourself",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    type: "website",
    url: SITE_URL,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "认识你自己 | Know Yourself" }],
  },
  twitter: { card: "summary_large_image", title: "认识你自己 | Know Yourself", description: "Bilingual, local-first self-reflection quizzes.", images: [OG_IMAGE_URL] },
  robots: { index: true, follow: true },
  other: { "apple-mobile-web-app-capable": "yes", "apple-mobile-web-app-status-bar-style": "default", "apple-mobile-web-app-title": "认识你自己" },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#FAF0E5" }, { media: "(prefers-color-scheme: dark)", color: "#17201E" }], colorScheme: "light dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "认识你自己",
  alternateName: "Know Yourself",
  url: SITE_URL,
  description: "A bilingual, local-first self-reflection quiz library.",
  inLanguage: ["zh-CN", "en"],
};

const preferenceScript = `(function(){try{var raw=localStorage.getItem('know-yourself:v3');var data=raw?JSON.parse(raw):null;var p=data&&data.version===3?data.preferences:null;var theme=p&&p.theme?p.theme:'system';var dark=theme==='dark'||(theme==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';document.documentElement.lang=p&&p.lang==='en'?'en':'zh-CN';}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head><link rel="apple-touch-icon" href="/icons/icon-192.svg" /><script dangerouslySetInnerHTML={{ __html: preferenceScript }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="min-h-full bg-paper font-sans text-ink dark:bg-night dark:text-white"><a className="skip-link" href="#main-content">跳到主要内容 / Skip to main content</a><AccountProvider><PreferenceSync />{children}<MobileNav /></AccountProvider></body>
    </html>
  );
}
