"use client";
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default {} as const;
