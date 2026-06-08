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

export const features: Feature[] = [
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
