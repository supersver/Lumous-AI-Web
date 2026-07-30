import {
  Hero,
  OpenSource,
  FAQ,
  CTA,
  Features,
  LogoCloud,
} from "@/components/sections";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_URL = "https://getlumous.in";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lumous AI",
  url: SITE_URL,
  description:
    "Lumous AI is an open-source AI workspace that connects to your own providers through OpenRouter. Bring your own API keys, track usage across models, and understand every dollar spent.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lumous AI",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free and open-source. Bring your own API keys.",
  },
  description:
    "An open-source AI workspace that lets you bring your own API keys, track cost across models, and understand every dollar spent.",
  author: {
    "@type": "Organization",
    name: "Lumous AI",
    url: SITE_URL,
  },
  license: "https://opensource.org/licenses/MIT",
  featureList: [
    "Bring Your Own Key (BYOK)",
    "OpenRouter integration",
    "AI cost analytics",
    "Multi-model support",
    "Self-hostable",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumous AI",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  sameAs: [
    // Add social profile URLs when available, e.g.:
    // "https://twitter.com/lumousai",
    // "https://github.com/supersver/Lumous-AI-Web",
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <OpenSource />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
