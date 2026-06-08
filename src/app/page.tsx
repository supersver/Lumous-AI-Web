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

export default function Page() {
  return (
    <>
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
