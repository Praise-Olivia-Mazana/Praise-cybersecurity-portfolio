import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Digital & Creative Technician",
    company: "Bellatools",
    location: "",
    period: "March 2026 – Present",
    bullets: [
      "Built and managed a full Shopify Horizon e-commerce store including product listings, theme customisation, and store configuration.",
      "Designed marketing assets — badges, wristbands, and branded print materials — using graphic design tools.",
      "Produced and encoded NFC keyholders, managing the full production workflow from design to delivery.",
      "Created and edited promotional video content using CapCut for TikTok, driving brand engagement.",
      "Managed print production operations including layout, file preparation, and quality control.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Ubuntu Bridge Initiative TRAN",
    location: "Remote",
    period: "June 2026 – Aug 2026 (Ongoing)",
    bullets: [
      "Performed SOC operations: incident response workflows, real-time threat monitoring, and forensic artifact analysis.",
      "Decrypted multi-layer ciphers (Base64, ROT13, Atbash) and conducted JWT pen testing — token forgery, HMAC cracking, privilege escalation.",
      "Contributed to GRC initiatives aligning security frameworks with operational requirements; applied threat modeling and vulnerability assessment.",
    ],
  },
  {
    role: "Security Analyst Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    period: "June 2026 – July 2026",
    bullets: [
      "Conducted vulnerability scanning with Nmap & Nikto; performed traffic analysis (Wireshark) and firewall configuration (UFW).",
      "Exploited SQL Injection in a controlled web app environment to identify and document web application security risks.",
    ],
  },
  {
    role: "Helpdesk Support",
    company: "Murray Mac Dougal",
    location: "Harare, ZW",
    period: "April 2025 – April 2026",
    bullets: [
      "Monitored POS systems for anomalies, reported suspicious activity, and followed fraud prevention and incident response procedures.",
      "Handled sensitive customer data in compliance with data protection standards; maintained digital records for audit readiness.",
    ],
  },
  {
    role: "IT Intern",
    company: "Willowvale Motor Industries",
    location: "Harare, ZW",
    period: "Aug 2022 – Aug 2023",
    bullets: [
      "Managed user accounts, access control (least-privilege), and supported compliance, vulnerability identification, and data backup processes.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Professional experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A mix of SOC-focused internships and IT support roles that built my security foundation.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-border md:pl-12">
          {experiences.map((exp) => (
            <div key={exp.company + exp.period} className="relative">
              <div className="absolute -left-[1.85rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background md:-left-[3.35rem] md:h-8 md:w-8">
                <Briefcase className="h-3 w-3 text-primary md:h-4 md:w-4" />
              </div>
              <Card>
                <CardHeader className="pb-3">
                  <p className="text-sm font-medium text-primary">{exp.period}</p>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
