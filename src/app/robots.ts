import type { MetadataRoute } from "next";
import { SITE_URL, siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: siteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
