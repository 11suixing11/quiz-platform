import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "隐私说明 | 认识你自己" },
  description: "了解认识你自己的本地优先存储、账号同步、公开分享和数据删除规则。",
  alternates: { canonical: siteUrl("/privacy/") },
  openGraph: {
    title: "隐私说明 | 认识你自己",
    description: "了解认识你自己的本地优先存储、账号同步、公开分享和数据删除规则。",
    type: "article",
    url: siteUrl("/privacy/"),
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "隐私说明 | 认识你自己" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "隐私说明 | 认识你自己",
    description: "了解认识你自己的本地优先存储、账号同步、公开分享和数据删除规则。",
    images: [OG_IMAGE_URL],
  },
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
