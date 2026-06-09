import type { MetadataRoute } from "next";
import { getSlugs } from "@/lib/heart";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getSlugs().map((slug) => ({
    url: `${SITE_URL}/heart/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...articles,
  ];
}
