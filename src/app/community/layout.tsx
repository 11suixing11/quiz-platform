import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "社区 | 测评、文字与图像分享" },
  description: "在一个统一的社区里，浏览人们主动留下的测评、文字与图像观察。",
  alternates: { canonical: siteUrl("/community/") },
  openGraph: {
    title: "社区 | 测评、文字与图像分享",
    description: "在一个统一的社区里，浏览人们主动留下的测评、文字与图像观察。",
    type: "website",
    url: siteUrl("/community/"),
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "社区 | 测评、文字与图像分享" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "社区 | 测评、文字与图像分享",
    description: "在一个统一的社区里，浏览人们主动留下的测评、文字与图像观察。",
    images: [OG_IMAGE_URL],
  },
};

export default function CommunityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
