import { AnimationTitle } from "../ui/animation-title";
import { SlidingNumber } from "../ui/sliding-number";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const stats = [
  {
    number: "70",
    suffix: "%",
    label: "Youth empowerment",
    description:
      "Percentage of participants reporting significant life improvements.",
  },
  {
    number: "10",
    suffix: "+",
    label: "Years of service",
    description: "Consistent commitment to youth development in Sierra Leone.",
  },
  {
    number: "50",
    suffix: "+",
    label: "Community programs",
    description:
      "Diverse initiatives addressing multiple aspects of youth growth.",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
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
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="py-8 px-2 gap-4">
                <CardHeader>
                  <CardTitle className="flex items-center title">
                    <SlidingNumber
                      from={0}
                      to={parseInt(stat.number)}
                      delay={index}
                    />

                    {stat.suffix && <span>{stat.suffix}</span>}
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
          </div>

          <div className="relative col-span-2">
            <div className="aspect-5/4 rounded-2xl overflow-hidden">
              <img
                src="/images/_DSC2927.webp"
                alt="Community members working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
