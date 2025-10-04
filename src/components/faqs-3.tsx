"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HeartIcon,
  UsersIcon,
  GraduationCapIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ShieldIcon,
  CalendarIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { AnimationTitle } from "./ui/animation-title";
import { StaggeredAnimation } from "./ui/staggered-animation";

type FAQItem = {
  id: string;
  icon: React.ElementType;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: HeartIcon,
      question: "What is Reach Afrika and what do you do?",
      answer:
        "Reach Afrika is a youth-focused NGO established in 2015 that empowers young people and strengthens communities in Sierra Leone. We run five core programs: Goderich Community Gospel Choir (GCGC), Change Conference, Skills for Life, From Bucket to Breakthrough, and She Leads Digital. Our mission is to empower youth through music, education, leadership, and economic empowerment initiatives.",
    },
    {
      id: "item-2",
      icon: UsersIcon,
      question: "How can I get involved with Reach Afrika?",
      answer:
        "There are several ways to get involved! You can volunteer with our programs, participate in our annual Change Conference, join the Goderich Community Gospel Choir, or apply for our Skills for Life or She Leads Digital programs. We also welcome partnerships with churches, schools, and community organizations. Contact us at info@reachafrika.org to learn more about opportunities.",
    },
    {
      id: "item-3",
      icon: GraduationCapIcon,
      question: "What programs do you offer for young people?",
      answer:
        "We offer five main programs: 1) Skills for Life - practical skills training and educational support including school fee assistance, 2) She Leads Digital - digital skills training for women (coding, design, social media, online business), 3) From Bucket to Breakthrough - entrepreneurship and economic empowerment, 4) Goderich Community Gospel Choir - music and spiritual development, and 5) Change Conference - annual leadership and mentorship platform.",
    },
    {
      id: "item-4",
      icon: CurrencyDollarIcon,
      question: "How can I donate to support Reach Afrika's work?",
      answer:
        "You can support our work through financial donations, in-kind contributions, or by sponsoring specific programs. We use donations to cover school fees for underprivileged youth, provide start-up equipment for entrepreneurs, fund our annual events, and support our digital skills training programs. Contact us at info@reachafrika.org or visit our donate page to learn about different ways to contribute.",
    },
    {
      id: "item-5",
      icon: MapPinIcon,
      question: "Where does Reach Afrika operate?",
      answer:
        "Reach Afrika is headquartered in Freetown, Sierra Leone, at 23 Main Peninsular Road, Goderich. We currently operate within Sierra Leone, with our programs reaching communities across the Western Region. We're always exploring opportunities to expand our impact to other African countries as needs arise.",
    },
    {
      id: "item-6",
      icon: ShieldIcon,
      question: "What is your gender policy and commitment to inclusion?",
      answer:
        "We have a Gender Policy (70/30) that prioritizes women's participation with a 70% focus on women and 30% on men to promote equity and inclusion. We also have a comprehensive Safeguarding Policy to protect the safety and dignity of children, youth, and vulnerable persons in all our programs. We embrace diversity and ensure equal opportunities for all, including marginalized groups.",
    },
    {
      id: "item-7",
      icon: CalendarIcon,
      question: "When are your annual events and how can I attend?",
      answer:
        "We organize three major annual events: Rainbow Room, Bring Down His Glory, and Change Conference. These events typically take place throughout the year and are open to the public. The Change Conference is our flagship leadership and mentorship event. Follow us on social media or contact us at info@reachafrika.org for specific dates and registration information.",
    },
    {
      id: "item-8",
      icon: EnvelopeSimpleIcon,
      question: "How can I contact Reach Afrika for more information?",
      answer:
        "You can reach us at info@reachafrika.org or call +232 79 566771. Our headquarters is located at 23 Main Peninsular Road, Goderich, Freetown, Sierra Leone. You can also follow us on social media (@reachafrika) for updates on our programs and events. We're always happy to answer questions about our work and how you can get involved.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <AnimationTitle
                className="items-start! text-left mb-10"
                title={{
                  preText: "Frequently\n",
                  highlight: "Asked Questions",
                }}
              />

              <p className="text-muted-foreground">
                Can't find what you're looking for? Contact our{" "}
                <a
                  href="mailto:info@reachafrika.org"
                  className="text-primary font-medium hover:underline"
                >
                  team
                </a>{" "}
                or call us at{" "}
                <a
                  href="tel:+23279566771"
                  className="text-primary font-medium hover:underline"
                >
                  +232 79 566771
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full"
            >
              <StaggeredAnimation staggerDelay={0.2} className="space-y-2">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-card shadow-xs rounded-lg border px-4 last:border-b"
                  >
                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="flex size-6">
                          <item.icon
                            size={16}
                            weight="bold"
                            className="m-auto"
                          />
                        </div>
                        <span className="text-base">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <div className="px-9">
                        <p className="text-base">{item.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </StaggeredAnimation>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
