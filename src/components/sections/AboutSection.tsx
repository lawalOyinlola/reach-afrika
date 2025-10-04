import {
  TargetIcon,
  GlobeIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
  ScalesIcon,
  LightbulbIcon,
  CaretDoubleRightIcon,
} from "@phosphor-icons/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { AnimationTitle } from "../ui/animation-title";
import { PixelImage } from "../ui/pixel-image";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredAnimation } from "../ui/staggered-animation";
import { Link } from "react-router";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
}

const features: Feature[] = [
  {
    icon: TargetIcon,
    title: "Skills development",
    description:
      "Practical training for real-world success and career advancement.",
    cta: "Learn",
  },
  {
    icon: GlobeIcon,
    title: "Community impact",
    description:
      "Transforming lives through targeted support and local engagement.",
    cta: "Discover",
  },
  {
    icon: UsersThreeIcon,
    title: "Inclusion",
    description:
      "We embrace diversity and ensure that youth from all backgrounds have equal opportunities.",
    cta: "Join us",
  },
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    description:
      "We uphold transparency, honesty, and ethical conduct in all our programs.",
    cta: "Learn",
  },
  {
    icon: ScalesIcon,
    title: "Accountability",
    description:
      "Responsible stewardship of resources and measurable impact delivery.",
    cta: "Discover",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description:
      "Creative approaches to youth empowerment that remain relevant and impactful.",
    cta: "Explore",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 px-10 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <AnimationTitle
          title={{
            preText: "Through \n",
            highlight: "Community-driven",
            postText: " \u00A0programs",
          }}
          subtitle="How we work"
          description="We transform young lives through targeted support, practical training, and nurturing the next generation of community leaders across Africa."
          titleClassName="text-white"
          descriptionClassName="text-neutral-300"
        />

        <div className="grid lg:grid-cols-2 md:gap-12 gap-8 items-center">
          <AnimatedSection delay={0.4} direction="left">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
                <PixelImage
                  src="/images/_DSC2813.webp"
                  alt="Community members working together on skills development and youth empowerment programs"
                  delay={300}
                  isView={true}
                  scrollTrigger={true}
                  scrollStart="start end"
                  scrollEnd="end end"
                />
              </div>
            </div>
          </AnimatedSection>

          <StaggeredAnimation
            className="grid grid-cols-2 gap-6"
            direction="right"
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="py-0 gap-4 text-primary-foreground border-none group"
              >
                <CardHeader className="px-0">
                  <CardTitle className="flex flex-col gap-4 items-start text-white card-title">
                    <feature.icon
                      size={32}
                      weight="bold"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="break-all">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>

                <CardFooter className="px-0">
                  <CardAction>
                    <Button
                      variant="link"
                      className="group p-0! text-white [&_svg:not([class*='size-'])]:size-2.5"
                      asChild
                    >
                      <Link to="/about">
                        {feature.cta}
                        <CaretDoubleRightIcon
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5 duration-300"
                        />
                      </Link>
                    </Button>
                  </CardAction>
                </CardFooter>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </div>
    </div>
  );
};
