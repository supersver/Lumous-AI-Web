import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://getlumous.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Lumous AI — Open-source AI workspace with BYOK & cost analytics",
    template: "%s | Lumous AI",
  },
  description:
    "Lumous AI is an open-source AI workspace that connects to your own providers through OpenRouter. Bring your own API keys, track usage across models, and understand every dollar spent.",

  keywords: [
    "AI workspace",
    "open source AI",
    "BYOK",
    "bring your own key",
    "OpenRouter",
    "AI cost analytics",
    "LLM cost tracking",
    "self-hosted AI",
    "AI chat",
    "Claude",
    "GPT",
    "Gemini",
  ],

  authors: [{ name: "Lumous AI", url: SITE_URL }],
  creator: "Lumous AI",
  publisher: "Lumous AI",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lumous AI",
    title: "Lumous AI — Open-source AI workspace with BYOK & cost analytics",
    description:
      "Lumous AI is an open-source AI workspace that connects to your own providers through OpenRouter. Bring your own API keys, track usage across models, and understand every dollar spent.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumous AI — Open-source AI workspace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumous AI — Open-source AI workspace with BYOK & cost analytics",
    description:
      "Lumous AI is an open-source AI workspace that connects to your own providers through OpenRouter. Bring your own API keys, track usage across models, and understand every dollar spent.",
    images: ["/og-image.png"],
    creator: "@lumousai",
    site: "@lumousai",
  },

  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "your-google-site-verification-code", // add when available
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
