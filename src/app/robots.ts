import type { MetadataRoute } from "next";

const SITE_URL = "https://getlumous.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow private/auth pages once they exist, e.g.:
        // disallow: ["/dashboard/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
