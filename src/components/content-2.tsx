import { organizationProfile } from "@/data/organization";
import { Cpu, Zap } from "lucide-react";
import { AnimationTitle } from "./ui/animation-title";

export default function ContentSection() {
  const { founded } = organizationProfile;

  const Info = [
    {
      icon: Zap,
      title: "Founded",
      description: founded,
    },
    {
      icon: Cpu,
      title: "Headquarters",
      description: "Freetown, Sierra Leone",
    },
    {
      icon: Cpu,
      title: "Legal Status",
      description:
        "Registered non-profit with the National Youth Commission of Sierra Leone",
    },
    {
      icon: Cpu,
      title: "Areas of Operation",
      description:
        "Currently operating within Sierra Leone. Expansion to other countries will be considered as the need arises.",
    },
    {
      icon: Cpu,
      title: "Vision",
      description:
        "A transformed Africa where young people thrive as leaders, innovators, and change-makers.",
    },
    {
      icon: Cpu,
      title: "Mission",
      description:
        "To empower youth and communities through music, education,leadership, and economic empowerment initiatives that foster resilience, inclusivity, and sustainable growth.",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <AnimationTitle
          className="items-start! text-start"
          title={{
            highlight: "Empowering Youth",
            postText: ", Transforming Communities",
          }}
          subtitle="About Us"
          titleClassName="md:text-6xl leading-[1.1]"
          descriptionClassName="text-base md:text-xl"
        />

        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p>
              Reach Afrika is a dynamic, youth-focused non-governmental
              organization dedicated to{" "}
              <span className="font-semibold text-primary">
                empowering young people, strengthening communities,
              </span>{" "}
              and creating pathways to sustainable development across Sierra
              Leone and beyond.
            </p>

            <p className="text-muted-foreground">
              Since 2015, we've been responding to the challenges facing African
              youth through innovative programs that inspire hope, build
              capacity, and drive positive transformation.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              {Info.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2 aspect-video">
              <img
                src="/images/_DSC2933.webp"
                className="hidden rounded-[12px] dark:block w-full h-full object-cover"
                alt="payments illustration dark"
                width={1000}
                height={400}
              />
              <img
                src="/images/_DSC2933.webp"
                className="rounded-[12px] shadow dark:hidden w-full h-full object-cover"
                alt="payments illustration light"
                width={1000}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <Icon className="size-4" />
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm">{description} </p>
  </div>
);
