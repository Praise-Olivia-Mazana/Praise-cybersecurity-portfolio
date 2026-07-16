import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About me</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I am an entry-level Cybersecurity Analyst with ISC² CC and Google Cybersecurity
              certifications, currently pursuing Microsoft SC-200. My hands-on experience spans SOC
              operations, incident response workflows, log and packet analysis, vulnerability
              assessment, and GRC alignment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I enjoy decoding multi-layer ciphers, hunting anomalies in traffic captures, and
              translating technical findings into clear, risk-focused reports. I am targeting SOC
              Analyst roles where curiosity, discipline, and a defender mindset matter.
            </p>
          </div>

          <Card className="h-fit">
            <CardContent className="grid gap-6 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:praise.olivia.mazana@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    praise.olivia.mazana@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+263-78-654-1823</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Linkedin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/praise-olivia-mazana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    linkedin.com/in/praise-olivia-mazana
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Github className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <a
                    href="https://github.com/Praise-Olivia-Mazana/Cybersecurity-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Cybersecurity-Portfolio
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
