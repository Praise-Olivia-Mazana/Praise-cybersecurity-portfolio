import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have an opportunity, question, or just want to connect? Send a message and I will get back to you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="grid gap-6 p-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:praise.olivia.mazana@gmail.com"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      praise.olivia.mazana@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+263-78-654-1823</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Harare, Zimbabwe</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
