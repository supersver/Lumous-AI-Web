"use client";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#051025] via-transparent to-[#071022] opacity-60 pointer-events-none" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <Badge>Announcing: Lumous Agents</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Build AI products with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">
              speed
            </span>{" "}
            and control.
          </motion.h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Ship production-ready AI features with first-class tooling for
            teams, integrations, and deployments.
          </p>
          <div className="mt-8 flex gap-4">
            <Button>Get started</Button>
            <Button variant="ghost">See demo</Button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.98, opacity: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-3xl p-6 shadow-2xl"
          >
            <div className="h-64 bg-gradient-to-tr from-[#041026] to-[#081123] rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
