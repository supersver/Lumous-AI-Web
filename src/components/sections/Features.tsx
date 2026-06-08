import {
  KeyRound,
  ShieldCheck,
  BarChart3,
  DollarSign,
  GitBranch,
  Layers,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: KeyRound,
    title: "Bring Your Own Keys",
    description:
      "Connect your own OpenRouter credentials and keep full ownership of your AI infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted Storage",
    description:
      "API keys are encrypted before storage to help protect sensitive credentials.",
  },
  {
    icon: BarChart3,
    title: "Model Analytics",
    description:
      "Track model usage, requests, tokens, and performance across providers.",
  },
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description:
      "Understand exactly where your AI budget is going with detailed cost insights.",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "Inspect the code, contribute improvements, and self-host if needed.",
  },
  {
    icon: Layers,
    title: "Multi-Model Access",
    description:
      "Use the latest models through OpenRouter without vendor lock-in.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to manage AI usage at scale
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Connect your own providers, monitor usage, understand costs, and
            stay in control.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/40">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
