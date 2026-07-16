import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Network Vulnerability Scanning & Traffic Analysis",
    tools: ["Nmap", "Wireshark", "Nikto"],
    description:
      "Performed network reconnaissance using Nmap to identify open ports, services, and potential attack surfaces; analysed captured packets in Wireshark to detect anomalies and network threats.",
    tasks: "Task-1, Task-8, Task-10",
  },
  {
    title: "Password Audit & Credential Security Assessment",
    tools: ["Kali Linux"],
    description:
      "Conducted a password audit to evaluate password strength and policy compliance; documented findings and recommended controls to reduce credential-based attack risk.",
    tasks: "Task-2",
  },
  {
    title: "OWASP Top 10 & Web Application Security Testing",
    tools: ["Burp Suite", "SQLi"],
    description:
      "Performed web application security testing against OWASP Top 10 vulnerabilities including SQL Injection; documented exploited weaknesses and proposed remediation steps.",
    tasks: "Task-5",
  },
  {
    title: "Network Threat Reporting & Patch Management",
    tools: ["GRC", "Vulnerability Management"],
    description:
      "Investigated and documented network-based threats; produced a structured threat report and patch management plan aligned with security best practices.",
    tasks: "Task-4, Task-6",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hands-on labs and assessments that demonstrate practical security skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs font-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{project.tasks}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Praise-Olivia-Mazana/Cybersecurity-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View more on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
