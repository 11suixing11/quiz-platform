import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "测评分享 | 认识你自己" },
  description: "阅读人们主动公开的测评结果与感想，也可以留下理解和支持。",
  alternates: { canonical: siteUrl("/community/") },
  openGraph: {
    title: "测评分享 | 认识你自己",
    description: "阅读人们主动公开的测评结果与感想，也可以留下理解和支持。",
    type: "website",
    url: siteUrl("/community/"),
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "测评分享 | 认识你自己" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "测评分享 | 认识你自己",
    description: "阅读人们主动公开的测评结果与感想，也可以留下理解和支持。",
    images: [OG_IMAGE_URL],
  },
};

export default function CommunityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
