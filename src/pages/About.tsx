// import Layout from "@/components/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-10";
import CallToAction from "@/components/call-to-action";
import { ContactSection } from "@/components/sections/ContactSection";

export default function About() {
  const title = "About Us - Reach Afrika";
  const description =
    "Learn about Reach Afrika, a youth-focused NGO empowering communities across Sierra Leone through education, leadership, and sustainable development since 2015.";

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords="about reach afrika, NGO Sierra Leone, youth empowerment, non-profit organization, community development"
      />

      {/* Hero Section */}
      <section className="relative px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <ContentSection />
      </section>

      {/* Core Values */}
      <section className="py-16 pt-32 px-4">
        <Features />
      </section>

      <CallToAction />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
