import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "@phosphor-icons/react";
import { AnimationTitle } from "../ui/animation-title";
import ContactForm from "./ContactForm";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredAnimation } from "../ui/staggered-animation";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: EnvelopeSimpleIcon,
      label: "Email",
      value: "info@reachafrika.org",
    },
    {
      icon: PhoneCallIcon,
      label: "Phone",
      value: "+232 79 566 771",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "23 Main Peninsular Road, Goderich, Freetown, Sierra Leone",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimationTitle
              className="items-start! text-left"
              title={{ preText: "Get\n", highlight: "Involved" }}
              description="Join us in transforming lives across Africa. Whether you want to volunteer, donate, or partner with us, your support makes a difference."
            />

            <StaggeredAnimation className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-end space-x-4">
                  <info.icon
                    size={40}
                    weight="duotone"
                    color="var(--primary)"
                  />
                  <div>
                    <div className="font-semibold">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>

          <AnimatedSection delay={0.4} direction="right">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
