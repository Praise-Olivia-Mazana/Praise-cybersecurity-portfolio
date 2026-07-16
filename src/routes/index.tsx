import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

const OG_IMAGE = "https://id-preview--8b7d8c0c-d612-4b62-a420-6d3a56849152.lovable.app/images/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praise Olivia Mazana | Junior SOC Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Praise Olivia Mazana — Junior SOC Analyst with ISC² CC and Google Cybersecurity certifications. SOC operations, incident response, threat monitoring, and GRC.",
      },
      { property: "og:title", content: "Praise Olivia Mazana | Junior SOC Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Praise Olivia Mazana — Junior SOC Analyst with ISC² CC and Google Cybersecurity certifications.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
