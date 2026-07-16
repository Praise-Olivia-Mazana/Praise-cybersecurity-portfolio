import { Shield, Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-foreground">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-semibold">Praise Olivia Mazana</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {year ?? ""} Praise Olivia Mazana. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/praise-olivia-mazana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Praise-Olivia-Mazana/Cybersecurity-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:praise.olivia.mazana@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
