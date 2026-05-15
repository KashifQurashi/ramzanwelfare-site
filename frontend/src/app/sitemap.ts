import type { MetadataRoute } from "next";
import { blogPosts, newsItems, donationCauses, initiatives } from "@/lib/constants";

const BASE_URL = "https://ramzanwelfareclinic.com";

const staticRoutes = [
  "",
  "/about",
  "/bank-details",
  "/blogs",
  "/contact-us",
  "/donate",
  "/media",
  "/news",
  "/qurbani",
  "/sponsor",
];

const serviceSlugs = [
  "general-opd",
  "child-healthcare",
  "women-health",
  "vaccination",
  "laboratory-tests",
  "emergency-care",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1.0 : 0.8 as number,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6 as number,
  }));

  const newsPages = newsItems.map((item) => ({
    url: `${BASE_URL}/news/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6 as number,
  }));

  const donatePages = donationCauses.map((cause) => ({
    url: `${BASE_URL}${cause.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as number,
  }));

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as number,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...newsPages,
    ...donatePages,
    ...servicePages,
  ];
}
