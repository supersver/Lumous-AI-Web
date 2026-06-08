export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-slate-800/60 px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
}
