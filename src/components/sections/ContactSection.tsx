import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "@phosphor-icons/react";
import { AnimationTitle } from "../ui/animation-title";
import ContactForm from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimationTitle
              className="items-start! text-left"
              title={{ preText: "Get\n", highlight: "Involved" }}
              description="Join us in transforming lives across Africa. Whether you want to volunteer, donate, or partner with us, your support makes a difference."
            />

            <div className="space-y-6">
              <div className="flex items-end space-x-4">
                <EnvelopeSimpleIcon size={40} weight="duotone" />

                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    Email
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    info@reachafrika.org
                  </div>
                </div>
              </div>

              <div className="flex items-end space-x-4">
                <PhoneCallIcon size={40} weight="duotone" />

                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    Phone
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    +232 79 566 771
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPinIcon size={40} weight="duotone" />

                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    Location
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    23 Main Peninsular Road, Goderich, Freetown, Sierra Leone
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
