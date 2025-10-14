import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import CallToAction from "@/components/call-to-action";
import FAQsThree from "@/components/faqs-3";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="programs">
        <ProgramsSection />
      </section>

      <section id="impact">
        <ImpactSection />
      </section>

      <section id="cta">
        <CallToAction />
      </section>

      <section id="faqs">
        <FAQsThree />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
