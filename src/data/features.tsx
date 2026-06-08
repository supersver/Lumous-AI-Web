import { Code, GitBranch, Layers, Zap, Users } from "lucide-react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "AI Agents",
    description:
      "Create autonomous agents that run workflows and automate tasks.",
    icon: <Code />,
  },
  {
    title: "Visual Workflows",
    description: "Compose models and actions visually and iterate quickly.",
    icon: <Layers />,
  },
  {
    title: "Version Control",
    description: "Track and revert model and workflow changes with ease.",
    icon: <GitBranch />,
  },
  {
    title: "Integrations",
    description:
      "Connect popular tools and data sources with first-class integrations.",
    icon: <Zap />,
  },
  {
    title: "Team Collaboration",
    description: "Shared workspaces, permissions, and audit logs for teams.",
    icon: <Users />,
  },
];

export default features;
