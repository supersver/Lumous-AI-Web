/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        // Apply security and SEO headers to all routes
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Restrict iframe embedding (helps avoid duplicate content from framing)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Only send the referrer on same-origin; protects user privacy & link equity
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Modern browser permission policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Force HTTPS for 1 year (important for canonical signals)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Long-lived cache for static assets (hashed filenames, safe to cache forever)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public images (OG image, favicons, etc.) for 7 days
        // Next.js route sources use path-to-regexp — no non-capturing groups (?:)
        source: "/:path*.(png|jpg|jpeg|webp|svg|ico|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
