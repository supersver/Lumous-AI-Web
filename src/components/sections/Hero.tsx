import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/elements";
import { GithubIcon } from "@/components/logos";
import { DashboardVisual } from "@/components/ui/DashboardVisual";

const highlights = [
  "Bring Your Own Keys",
  "Encrypted API Key Storage",
  "Model Usage Analytics",
  "Cost Transparency",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10rem] size-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-[-6rem] top-[6rem] size-[28rem] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:gap-10 lg:pb-28 lg:pt-40">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            Open Source • BYOK • Privacy First
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build with the best AI models.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Own your keys. Control your costs.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Lumous AI is an open-source AI workspace that connects to your own
            providers through OpenRouter. Bring your own API keys, track usage
            across models, and understand every dollar spent.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="https://lumous-ai.vercel.app" />}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
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
              View on GitHub
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
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
        </div>

        <div className="relative">
          <DashboardVisual />
        </div>
      </div>
    </section>
  );
}
