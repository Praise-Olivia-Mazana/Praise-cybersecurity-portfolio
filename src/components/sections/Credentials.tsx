import { Award, GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "ISC2 Certified in Cybersecurity (CC)", status: "Earned" },
  { name: "Google Cybersecurity Certificate", status: "Earned" },
  { name: "Microsoft SC-200", status: "In Progress" },
];

export function Credentials() {
  return (
    <section id="credentials" className="py-24 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Credentials</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Certifications and education that back up the skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start justify-between gap-4">
                    <span className="font-medium text-foreground">{cert.name}</span>
                    <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {cert.status}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Bachelor of Information Systems</p>
                <p className="text-sm text-muted-foreground">Great Zimbabwe University</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>2020 – 2024 · 2:1 (Upper Second Class Honours)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
