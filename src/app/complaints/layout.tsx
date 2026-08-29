import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

const title = "隐私与版权投诉 | Know Yourself";
const description = "提交与公开内容有关的隐私或版权投诉。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: siteUrl("/complaints/") },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl("/complaints/"),
    siteName: SITE_NAME,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE_URL],
  },
};

export default function ComplaintsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
