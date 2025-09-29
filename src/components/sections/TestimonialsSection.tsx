import { AnimationTitle } from "../ui/animation-title";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";

const testimonials = [
  {
    quote:
      "The choir gave me hope when I had none. Music became my pathway to healing.",
    name: "Aminata Koroma",
    role: "GCGC Program Participant",
    avatar: "/images/_DSC2927.webp",
    rating: 5,
  },
  {
    quote:
      "Through digital skills, I discovered my potential to lead and create change.",
    name: "Fatmata Sesay",
    role: "She Leads Digital Graduate",
    avatar: "/images/_DSC2933.webp",
    rating: 5,
  },
  {
    quote:
      "Reach Afrika transformed my understanding of community and personal growth.",
    name: "Mohamed Bangura",
    role: "Skills for Life Alumni",
    avatar: "/images/_DSC2991.webp",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <AnimationTitle
          className="mb-16"
          title={{ highlight: "Voices of change" }}
          description="Stories that inspire and demonstrate our impact."
        />

        <div className="grid md:grid-cols-3 gap-8 [grid-template-rows:1fr_auto]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-lg transition-all duration-300 group grid [grid-template-rows:subgrid] row-span-2 bg-white dark:bg-neutral-700"
            >
              <CardContent>
                <CardDescription className="text-md text-foreground leading-relaxed">
                  <blockquote>"{testimonial.quote}"</blockquote>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
        </div>
      </div>
    </section>
  );
};
