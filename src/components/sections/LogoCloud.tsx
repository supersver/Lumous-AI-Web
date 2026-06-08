"use client";
import { useEffect, useRef } from "react";
import logos from "@/data/logos";

export default function LogoCloud() {
  const strip = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    function step() {
      const container = strip.current;
      if (!container) return;
      x -= 0.5;
      if (x < -container.scrollWidth / 2) x = 0;
      container.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-12">
      <h3 className="text-sm text-slate-400 uppercase tracking-wider">
        Trusted by teams at
      </h3>
      <div className="mt-6 overflow-hidden">
        <div ref={strip} className="flex gap-8 will-change-transform">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="opacity-80 grayscale hover:grayscale-0 transition"
            >
              <img src={logo.src} alt={logo.alt} className="h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
