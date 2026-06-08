import { LumousLogo } from "@/components/logos";

const columns = [
  {
    title: "Product",
    links: ["Features", "Open Source", "Documentation", "Changelog"],
  },
  {
    title: "Resources",
    // links: ["Blog", "Community", "Roadmap", "GitHub"],
    links: ["GitHub"],
  },
  //   {
  //     title: "Developers",
  //     links: ["OpenRouter", "API Docs", "Self Hosting"],
  //   },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LumousLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An open-source AI workspace. Bring your own keys, own your usage.
            </p>
            <p className="mt-5 text-xs font-medium text-muted-foreground">
              Open Source • BYOK • Privacy First
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Lumous AI. Open source and built for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
