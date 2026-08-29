import type { Metadata } from "next";
import { OG_IMAGE_URL, SITE_NAME, siteUrl } from "@/lib/site-config";

const title = "测评目录 | Assessments";
const description = "浏览关于性格、情绪、关系与生活的双语自我反思测评。 Browse bilingual self-reflection assessments across personality, emotions, relationships, and life.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl("/assessments/") },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl("/assessments/"),
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

export default function AssessmentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
