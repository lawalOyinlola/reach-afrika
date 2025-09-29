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

export const AboutSection = () => {
  const features = [
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
      title: "Inclusivity",
      description:
        "We embrace diversity and ensure that youth from all backgrounds have equal opportunities.",
      cta: "Button",
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

  return (
    <section className="py-20 px-10 bg-neutral-800">
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
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
              <PixelImage
                src="/images/_DSC2813.webp"
                alt="Community members working together on skills development and youth empowerment programs"
                delay={300}
                isView={true}
                scrollTrigger={true}
                scrollStart="start end"
                scrollEnd="center center"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="py-0 gap-4 text-primary-foreground border-none"
              >
                <CardHeader className="px-0">
                  <CardTitle className="flex flex-col gap-4 items-start card-title">
                    <feature.icon size={32} weight="bold" />
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>

                <CardFooter className="px-0">
                  <CardAction>
                    <Button
                      variant="link"
                      className="group p-0! text-primary-foreground [&_svg:not([class*='size-'])]:size-2.5"
                    >
                      {feature.cta}
                      <CaretDoubleRightIcon
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 duration-300"
                      />
                    </Button>
                  </CardAction>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
