import "./globals.css";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Lumous AI",
  description: "Premium AI platform for teams — Lumous AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 antialiased">
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
