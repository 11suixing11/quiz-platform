import type { Metadata } from "next";

/**
 * Public site identity and URL helpers.
 *
 * Keep the canonical origin in one place so metadata, feeds, auth and
 * deployment checks cannot drift when the public domain changes.
 */
export const SITE_URL = "https://knowyourself.cc.cd";
export const SITE_NAME = "认识你自己 | Know Yourself";
export const SITE_DESCRIPTION = "通过结构化测评，或在社区分享文字与图像，记录对性格、情绪、关系与日常生活的观察。";
export const SITE_DESCRIPTION_EN = "Reflect through structured assessments, then share words or images with the community when you choose.";
export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const PRIVATE_PAGE_METADATA: Metadata = {
  description: null,
  keywords: null,
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

/** Return a canonical absolute URL while preserving the app's trailing slash convention. */
export function siteUrl(path = "/") {
  const normalizedPath = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

/** JSON-LD must not be allowed to terminate the script element. */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
