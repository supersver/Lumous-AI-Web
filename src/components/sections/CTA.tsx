import { ArrowRight } from "lucide-react";
import { Button } from "@/components/elements";
import { GithubIcon } from "@/components/logos";

export function CTA() {
  return (
    <section id="get-started" className="scroll-mt-20 px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-16 text-center backdrop-blur-sm sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute right-10 top-0 size-[18rem] rounded-full bg-accent/15 blur-[100px]" />
        </div>

        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Take control of your AI infrastructure
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Bring your own keys, monitor usage, understand costs, and build with
          the latest models.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
            View GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
