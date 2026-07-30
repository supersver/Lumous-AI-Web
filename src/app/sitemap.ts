import type { MetadataRoute } from "next";

const SITE_URL = "https://getlumous.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add additional pages/routes here as the app grows, e.g.:
    // {
    //   url: `${SITE_URL}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 0.8,
    // },
  ];
}
