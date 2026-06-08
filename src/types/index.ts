import type { ReactNode } from "react";

export type Feature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type Logo = {
  src: string;
  alt: string;
};

export {};
