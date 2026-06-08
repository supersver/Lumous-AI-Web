"use client";
import { motion } from "framer-motion";
import type { Feature } from "@/types";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-700/30 rounded-lg">{feature.icon}</div>
        <div>
          <h3 className="font-semibold text-lg">{feature.title}</h3>
          <p className="mt-2 text-slate-300 text-sm">{feature.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
