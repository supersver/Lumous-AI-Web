import { ArrowUpRight, TrendingUp, Activity } from "lucide-react";

const providerRows = [
  {
    name: "Anthropic",
    model: "claude-opus-4",
    pct: 38,
    cost: "$842.10",
    color: "oklch(0.78 0.14 185)",
  },
  {
    name: "OpenAI",
    model: "gpt-5-mini",
    pct: 27,
    cost: "$601.44",
    color: "oklch(0.7 0.16 280)",
  },
  {
    name: "Google",
    model: "gemini-3-flash",
    pct: 21,
    cost: "$468.90",
    color: "oklch(0.72 0.15 230)",
  },
  {
    name: "Mistral",
    model: "mistral-large",
    pct: 14,
    cost: "$312.06",
    color: "oklch(0.8 0.13 150)",
  },
];

const bars = [42, 58, 36, 71, 49, 64, 53, 80, 61, 74, 55, 88];

export function DashboardVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-2xl backdrop-blur-sm sm:p-5">
      {/* Window chrome */}
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          lumous · usage
        </span>
        <span className="text-xs text-muted-foreground">Last 30 days</span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Total spend" value="$2,224" delta="+12.4%" />
        <StatCard label="Tokens" value="48.2M" delta="+8.1%" />
        <StatCard label="Requests" value="91.3K" delta="+3.7%" />
      </div>

      {/* Chart */}
      <div className="mt-4 rounded-xl border border-border bg-background/40 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Activity className="size-4 text-primary" />
            Token consumption
          </div>
          <span className="flex items-center gap-1 text-xs text-primary">
            <TrendingUp className="size-3.5" />
            Trending up
          </span>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Provider breakdown */}
      <div className="mt-4 rounded-xl border border-border bg-background/40 p-4">
        <div className="mb-3 text-sm font-medium text-foreground">
          Provider breakdown
        </div>
        <div className="flex flex-col gap-3">
          {providerRows.map((row) => (
            <div key={row.name} className="flex items-center gap-3">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="truncate text-foreground">
                    {row.name}
                    <span className="ml-1.5 font-mono text-muted-foreground">
                      {row.model}
                    </span>
                  </span>
                  <span className="ml-2 shrink-0 font-mono text-muted-foreground">
                    {row.cost}
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-0.5 flex items-center gap-0.5 text-xs text-primary">
        <ArrowUpRight className="size-3" />
        {delta}
      </div>
    </div>
  );
}
