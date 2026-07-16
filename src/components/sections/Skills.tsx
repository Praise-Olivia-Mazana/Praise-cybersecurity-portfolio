import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Lock, FileSearch, ShieldAlert } from "lucide-react";

const tools = [
  "Microsoft Sentinel",
  "Microsoft Defender",
  "Nmap",
  "Nikto",
  "Wireshark",
  "Burp Suite",
  "Metasploit",
  "UFW",
  "Kali Linux",
  "TryHackMe",
];

const domains = [
  "Incident Response",
  "SOC Operations",
  "Threat Modeling",
  "Cryptography",
  "JWT Pen Testing",
  "SQL Injection",
  "Vulnerability Assessment",
  "Patch Management",
  "OWASP Top 10",
  "Network Security",
  "Password Auditing",
  "GRC",
  "IAM",
  "Log Analysis",
  "Digital Forensics",
  "Packet Analysis",
];

const highlights = [
  {
    icon: ShieldAlert,
    title: "SOC Operations",
    description: "Real-time threat monitoring, alert triage, and incident response workflows.",
  },
  {
    icon: Lock,
    title: "Offensive Security",
    description: "Hands-on exploitation in controlled environments: SQLi, JWT attacks, and password audits.",
  },
  {
    icon: FileSearch,
    title: "Forensics & GRC",
    description: "Artifact analysis, threat reporting, and aligning security frameworks to operations.",
  },
  {
    icon: Monitor,
    title: "Network Analysis",
    description: "Reconnaissance, packet capture review, and firewall configuration with Nmap and Wireshark.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Technical skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A growing toolkit built through internships, labs, and self-directed practice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title} className="bg-card">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="px-3 py-1 text-sm font-normal">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Domains</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <Badge key={domain} variant="outline" className="px-3 py-1 text-sm font-normal">
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
