import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, MapIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AnimationTitle } from "./ui/animation-title";
import type React from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <AnimationTitle
          title={{ preText: "Policies\n", highlight: " and Core Values" }}
        />
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={MapIcon}
                title="Safeguarding Policy"
                description="We are committed to protecting the safety and dignity of children, youth, and vulnerable persons in all programs."
              />
            </CardHeader>

            {/* <div className="relative border-t border-dashed max-sm:mb-6">
              <div
                aria-hidden
                className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
              />
              <div className="aspect-76/59 p-1 px-6">
                <DualModeImage
                  darkSrc="/payments.png"
                  lightSrc="/payments-light.png"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div> */}
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Calendar}
                title="Gender Policy (70/30)"
                description="We prioritize women’s participation with a 70% focus on women and 30% on men to promote equity and inclusion."
              />
            </CardHeader>

            {/* <CardContent>
              <div className="mask-radial-at-right mask-radial-from-75% mask-radial-[75%_75%] relative max-sm:mb-6">
                <div className="aspect-76/59 overflow-hidden rounded-lg border">
                  <DualModeImage
                    darkSrc="/origin-cal-dark.png"
                    lightSrc="/origin-cal.png"
                    alt="calendar illustration"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent> */}
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
              Our Core Values
            </p>

            <div className="flex justify-center gap-6 overflow-hidden">
              <CircularUI
                label="Integrity"
                circles={[{ pattern: "border" }, { pattern: "border" }]}
              />

              <CircularUI
                label="Inclusion"
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
              />

              <CircularUI
                label="Accountability"
                circles={[{ pattern: "blue" }, { pattern: "none" }]}
              />

              <CircularUI
                label="innovation"
                circles={[{ pattern: "none" }, { pattern: "primary" }]}
                className="hidden sm:block"
              />

              <CircularUI
                label="Respect for diversity"
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
                className="hidden sm:block"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

// interface DualModeImageProps {
//   darkSrc: string;
//   lightSrc: string;
//   alt: string;
//   width: number;
//   height: number;
//   className?: string;
// }

// const DualModeImage = ({
//   darkSrc,
//   lightSrc,
//   alt,
//   width,
//   height,
//   className,
// }: DualModeImageProps) => (
//   <>
//     <img
//       src={darkSrc}
//       className={cn("hidden dark:block", className)}
//       alt={`${alt} dark`}
//       width={width}
//       height={height}
//     />
//     <img
//       src={lightSrc}
//       className={cn("shadow dark:hidden", className)}
//       alt={`${alt} light`}
//       width={width}
//       height={height}
//     />
//   </>
// );

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
