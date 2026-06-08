import { Lock, BarChart3, DollarSign, Code, BookOpen, Zap } from "lucide-react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "Bring Your Own Keys",
    description:
      "Connect your own OpenRouter credentials and keep full ownership of your AI infrastructure.",
    icon: <Lock />,
  },
  {
    title: "Encrypted Storage",
    description:
      "API keys are encrypted before storage to help protect sensitive credentials.",
    icon: <Lock />,
  },
  {
    title: "Model Analytics",
    description:
      "Track model usage, requests, tokens, and performance across providers.",
    icon: <BarChart3 />,
  },
  {
    title: "Cost Tracking",
    description:
      "Understand exactly where your AI budget is going with detailed cost insights.",
    icon: <DollarSign />,
  },
  {
    title: "Open Source",
    description:
      "Inspect the code, contribute improvements, and self-host if needed.",
    icon: <Code />,
  },
  {
    title: "Multi-Model Access",
    description:
      "Use the latest models through OpenRouter without vendor lock-in.",
    icon: <Zap />,
  },
];

export default features;
