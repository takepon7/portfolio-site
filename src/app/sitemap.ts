import type { MetadataRoute } from "next";
import { getSlugs } from "@/lib/heart";
import { listBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getSlugs().map((slug) => ({
    url: `${SITE_URL}/heart/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPosts = listBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.updated ?? post.date}T00:00:00+09:00`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    ...blogPosts,
    ...articles,
  ];
}
