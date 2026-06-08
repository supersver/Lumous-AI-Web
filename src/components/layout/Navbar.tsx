"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/elements/Button";
import { LumousLogo } from "@/components/logos/lumous-logo";
import { cn } from "@/lib/utils";
import { GithubIcon } from "../logos";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Open Source", href: "#open-source" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "backdrop-blur-xl",
        scrolled
          ? "border-b border-border bg-background/70"
          : "border-b border-transparent bg-background/30",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Lumous AI home">
          <LumousLogo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {/* <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<a href="#docs" />}
          >
            <BookOpen className="size-4" />
            Docs
          </Button> */}
          <Button
            size="sm"
            nativeButton={false}
            render={
              <a
                href="https://github.com/supersver/Lumous-AI"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <GithubIcon />
            GitHub
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#docs"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Docs
          </a>
          <Button
            className="mt-2"
            nativeButton={false}
            render={
              <a href="https://github.com" target="_blank" rel="noreferrer" />
            }
          >
            <GithubIcon />
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
}
