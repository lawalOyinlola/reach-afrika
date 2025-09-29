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

          {/* <div className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div> */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
