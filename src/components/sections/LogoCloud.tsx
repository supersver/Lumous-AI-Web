const logos = ["Anthropic", "OpenAI", "Google", "Meta", "Mistral"];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-background/50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-muted-foreground">
          Built for everyone using modern AI infrastructure
        </p>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/50 grayscale transition-colors hover:text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
