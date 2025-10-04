import { AnimationTitle } from "../ui/animation-title";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { StaggeredAnimation } from "../ui/staggered-animation";

const testimonials = [
  {
    quote:
      "The choir gave me hope when I had none. Music became my pathway to healing.",
    name: "Aminata Koroma",
    role: "GCGC Program Participant",
    avatar: "/avatars/_DSC3102.webp",
    rating: 5,
  },
  {
    quote:
      "Through digital skills, I discovered my potential to lead and create change.",
    name: "Fatmata Sesay",
    role: "She Leads Digital Graduate",
    avatar: "/avatars/_DSC3006.webp",
    rating: 5,
  },
  {
    quote:
      "Reach Afrika transformed my understanding of community and personal growth.",
    name: "Mohamed Bangura",
    role: "Skills for Life Alumni",
    avatar: "/avatars/_DSC3178.webp",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimationTitle
          className="mb-16"
          title={{ preText: "Voices of change" }}
          description="Stories that inspire and demonstrate our impact."
        />

        <StaggeredAnimation
          staggerDelay={0.2}
          className="grid md:grid-cols-3 gap-8 [grid-template-rows:1fr_auto]"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-lg transition-all duration-300 group grid [grid-template-rows:subgrid] row-span-2 bg-card"

              // className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
            >
              <CardContent>
                <CardDescription className="text-md text-foreground leading-relaxed">
                  <blockquote>"{testimonial.quote}"</blockquote>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <AvatarWithSkeleton
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="text-sm">
                    <div className="text-black dark:text-white font-unbounded">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  );
};

const AvatarWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
