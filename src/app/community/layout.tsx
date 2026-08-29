import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "社区 | 图像札记与测评分享" },
  description: "分别浏览公开的图像札记与测评分享，阅读人们主动留下的观察与反思。",
  alternates: { canonical: siteUrl("/community/") },
  openGraph: {
    title: "社区 | 图像札记与测评分享",
    description: "分别浏览公开的图像札记与测评分享，阅读人们主动留下的观察与反思。",
    type: "website",
    url: siteUrl("/community/"),
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "社区 | 图像札记与测评分享" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "社区 | 图像札记与测评分享",
    description: "分别浏览公开的图像札记与测评分享，阅读人们主动留下的观察与反思。",
    images: [OG_IMAGE_URL],
  },
};

export default function CommunityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
