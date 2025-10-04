import { AnimationTitle } from "../ui/animation-title";
import { SlidingNumber } from "../ui/sliding-number";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { AnimatedSection } from "../ui/animated-section";
import { StaggeredAnimation } from "../ui/staggered-animation";

const stats = [
  {
    number: "2000",
    suffix: "+",
    label: "Yearly participants",
    description:
      "Over 2,000 people impacted annually through our education, leadership, and empowerment programs.",
  },
  {
    number: "10",
    suffix: "+",
    label: "Years of experience",
    description:
      "10+ years of consistent commitment to youth development in Sierra Leone.",
  },
  {
    number: "50",
    suffix: "+",
    label: "Events carried out",
    description:
      "Over 50 community programs and events successfully delivered over the past years.",
  },
];

export const ImpactSection = () => {
  return (
    <div className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <AnimationTitle
          title={{
            preText: "Our\n",
            highlight: "impact",
            postText: " in numbers",
          }}
          subtitle="Progress"
          description="Measuring the tangible difference we make in young lives."
        />

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <StaggeredAnimation className="space-y-6" direction="left">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="py-8 px-2 gap-4  transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-1 title">
                    <SlidingNumber
                      from={0}
                      to={parseInt(stat.number)}
                      digitHeight={50}
                      delay={index * 0.5}
                    />
                    {stat.suffix && (
                      <span className="group-hover:scale-105 transition-transform duration-300">
                        {stat.suffix}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <div className="card-subtitle mb-2">{stat.label}</div>
                    <div>{stat.description}</div>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>

          <AnimatedSection
            delay={0.6}
            direction="right"
            className="relative col-span-2"
          >
            <MainImage />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

const MainImage = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="aspect-5/4 rounded-2xl overflow-hidden relative">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src="/images/_DSC2925.webp"
        alt="Community members working together"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
