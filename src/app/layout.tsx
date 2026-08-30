import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./rebuild.css";
import { MobileNav, PreferenceSync } from "@/components/shell/app-shell";
import { AccountProvider } from "@/components/account-provider";
import { OG_IMAGE_URL, serializeJsonLd, SITE_DESCRIPTION, SITE_DESCRIPTION_EN, SITE_NAME, SITE_URL, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "认识你自己 | Know Yourself", template: "%s | Know Yourself" },
  description: `${SITE_DESCRIPTION} ${SITE_DESCRIPTION_EN}`,
  alternates: { canonical: "/" },
  keywords: ["自我反思", "人格测试", "情绪", "关系", "self reflection", "personality quiz"],
  authors: [{ name: "Know Yourself" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "认识你自己 | Know Yourself",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    type: "website",
    url: siteUrl("/"),
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "认识你自己 | Know Yourself" }],
  },
  twitter: { card: "summary_large_image", title: "认识你自己 | Know Yourself", description: SITE_DESCRIPTION_EN, images: [OG_IMAGE_URL] },
  robots: { index: true, follow: true },
  other: { "apple-mobile-web-app-capable": "yes", "apple-mobile-web-app-status-bar-style": "default", "apple-mobile-web-app-title": "认识你自己" },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F4F0E8" }, { media: "(prefers-color-scheme: dark)", color: "#18231F" }], colorScheme: "light dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "认识你自己",
  alternateName: "Know Yourself",
  url: SITE_URL,
  description: `${SITE_DESCRIPTION} ${SITE_DESCRIPTION_EN}`,
  inLanguage: ["zh-CN", "en"],
};

const preferenceScript = `(function(){try{var raw=localStorage.getItem('know-yourself:v3');var data=raw?JSON.parse(raw):null;var p=data&&data.version===3?data.preferences:null;var theme=p&&p.theme?p.theme:'system';var dark=theme==='dark'||(theme==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';document.documentElement.lang=p&&p.lang==='en'?'en':'zh-CN';}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head><link rel="apple-touch-icon" href="/icons/icon-192.svg" /><script dangerouslySetInnerHTML={{ __html: preferenceScript }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /></head>
      <body className="min-h-full bg-paper font-sans text-ink dark:bg-night dark:text-white"><a className="skip-link" href="#main-content">跳到主要内容 / Skip to main content</a><AccountProvider><PreferenceSync />{children}<MobileNav /></AccountProvider></body>
    </html>
  );
}
