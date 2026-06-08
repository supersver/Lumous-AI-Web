import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <header className="mb-8">
      <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
    </header>
  );
}
