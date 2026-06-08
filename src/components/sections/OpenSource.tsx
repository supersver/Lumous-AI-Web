import { BookOpen, Star, GitFork, Eye, Check } from "lucide-react";
import { Button } from "@/components/elements";
import { GithubIcon } from "@/components/logos";

const highlights = [
  "Open-source codebase",
  "Community contributions",
  "Self-host friendly",
  "Public roadmap",
];

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="scroll-mt-20 border-y border-border bg-background/50 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Community Driven
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Open source from day one
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Lumous AI is built in public and designed to be transparent. Review
            the code, contribute features, report issues, or self-host the
            platform.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://github.com/supersver/Lumous-AI"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <GithubIcon className="size-4" />
              View GitHub
            </Button>
            {/* <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#docs" />}
            >
              <BookOpen className="size-4" />
              Read Documentation
            </Button> */}
          </div>
        </div>

        <GithubStatsCard />
      </div>
    </section>
  );
}

function GithubStatsCard() {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground">
          <GithubIcon className="size-5" />
        </div>
        <div className="min-w-0">
          <div className="font-mono text-sm text-foreground">
            supersver/lumous-ai
          </div>
          <div className="truncate text-xs text-muted-foreground">
            Open-source AI workspace with BYOK & cost analytics
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Stat icon={Star} label="Stars" value="0" />
        <Stat icon={GitFork} label="Forks" value="0" />
        <Stat icon={Eye} label="Watching" value="0" />
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background/40 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Languages</span>
          <span className="font-mono">main</span>
        </div>
        <div className="mt-3 flex h-2 overflow-hidden rounded-full">
          <span
            className="h-full"
            style={{ width: "64%", backgroundColor: "oklch(0.78 0.14 185)" }}
          />
          <span
            className="h-full"
            style={{ width: "22%", backgroundColor: "oklch(0.7 0.16 280)" }}
          />
          <span
            className="h-full"
            style={{ width: "14%", backgroundColor: "oklch(0.8 0.13 150)" }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: "oklch(0.78 0.14 185)" }}
            />
            TypeScript
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: "oklch(0.7 0.16 280)" }}
            />
            Rust
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: "oklch(0.8 0.13 150)" }}
            />
            CSS
          </span>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Star;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3 text-center">
      <Icon className="mx-auto size-4 text-muted-foreground" />
      <div className="mt-1.5 text-base font-semibold text-foreground">
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
