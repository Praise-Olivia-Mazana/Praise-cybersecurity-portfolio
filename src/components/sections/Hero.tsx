import { ArrowDown, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="container-tight flex flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-sm font-medium text-primary">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
          {"> "}Junior SOC Analyst | ISC² CC
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground text-glow sm:text-5xl md:text-6xl lg:text-7xl">
          Praise Olivia Mazana
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Entry-level cybersecurity analyst focused on SOC operations, incident response, threat
          monitoring, and GRC. I turn raw logs and alerts into actionable security insight.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/files/Praise-Olivia-Mazana-CV.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="gap-2" asChild>
            <a href="#projects">
              View projects
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
