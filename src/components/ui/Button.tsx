import type { ReactNode } from "react";

export default function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
} & React.ComponentProps<"button">) {
  const base = "rounded-lg px-5 py-3 font-medium";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-500 to-sky-400 text-black shadow-lg"
      : "bg-transparent border border-slate-700 text-slate-100";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
