import { Hero } from "@/components/sections";
import {
  OpenSource,
  FAQ,
  CTA,
  Features,
  LogoCloud,
} from "@/components/sections";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
}
