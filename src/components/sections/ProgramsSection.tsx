import {
  BrainIcon,
  CaretDoubleRightIcon,
  CertificateIcon,
  ShuffleAngularIcon,
} from "@phosphor-icons/react";
import { AnimationTitle } from "../ui/animation-title";
import { AnimatedSection } from "../ui/animated-section";
import { Link } from "react-router";
import { OptimizedImage } from "../ui/optimized-image";

interface Programs {
  icon?: React.ElementType;
  category?: string;
  title: string;
  description: string;
  cta: string;
  background: string;
  rowSpan: number;
  image?: string;
}

const programs: Programs[] = [
  {
    category: "Music",
    title: "Goderich Community Gospel Choir",
    description: "Healing through music and collective expression.",
    cta: "Learn",
    background: "bg-gradient-to-br from-slate-800 to-slate-600",
    rowSpan: 2, // Taller card
    image: "/images/_DSC2813.webp",
  },
  {
    icon: CertificateIcon,
    title: "Skills for Life",
    description: "Practical training for personal and professional growth.",
    cta: "Discover",
    background: "bg-gradient-to-br from-teal-600 to-blue-600",
    rowSpan: 1, // Standard height
    image: "/images/skills-for-life.webp",
  },
  {
    category: "Digital",
    title: "She Leads Digital",
    description: "Empowering women through technology and leadership.",
    cta: "Explore",
    background: "bg-gradient-to-br from-orange-500 to-pink-500",
    rowSpan: 2, // Taller card
    image: "/images/she-leads.webp",
  },
  {
    category: "Breakthrough",
    title: "From Bucket to Breakthrough",
    description: "Overcoming barriers through targeted support.",
    cta: "Learn",
    background: "bg-gradient-to-br from-amber-700 to-brown-600",
    rowSpan: 2, // Taller card
    image: "/images/bucket-to-breakthrough.webp",
  },
  {
    icon: ShuffleAngularIcon,
    title: "Change Conference",
    description: "Inspiring dialogues for social transformation.",
    cta: "Explore",
    background: "bg-gradient-to-br from-amber-600 to-orange-500",
    rowSpan: 1, // Standard height
    image: "/images/change-conference.webp",
  },
  {
    icon: BrainIcon,
    title: "Innovative programs for youth development",
    description: "Comprehensive approach to community transformation.",
    cta: "Engage",
    background: "bg-neutral-600",
    rowSpan: 1, // Standard height
  },
];

export const ProgramsSection = () => {
  return (
    <div className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <AnimationTitle
          title={{
            preText: "Our \n",
            highlight: "transformative",
            postText: " \u00A0programs",
          }}
          subtitle="Impact"
          description="Six focused initiatives driving youth empowerment in Sierra Leone."
        />

        <AnimatedSection
          direction="up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]"
        >
          {programs.map((program, index) => {
            const rowSpanClass =
              program.rowSpan === 2 ? "row-span-2" : "row-span-1";

            return (
              <div
                // direction={`${
                //   index === 0 || index === 4
                //     ? "right"
                //     : index === 5 || index === 2
                //     ? "left"
                //     : index === 1
                //     ? "down"
                //     : "up"
                // }`}
                key={index}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${program.background} col-span-1 ${rowSpanClass} transition-all duration-300 hover:shadow-2xl`}
              >
                <div>
                  {/* Background Image */}
                  {program.image && (
                    <ProgramImage src={program.image} alt={program.title} />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category/Icon */}
                  <div className="absolute top-4 left-4">
                    {program.category ? (
                      <span className="text-xs text-white font-semibold bg-white/20 px-2 py-1 rounded-full group-hover:bg-white/30 transition-all duration-300">
                        {program.category}
                      </span>
                    ) : (
                      <div>
                        {program.icon && (
                          <program.icon
                            weight="bold"
                            color="white"
                            size={24}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="card-title text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {program.description}
                    </p>
                    <Link
                      to="/about"
                      className="flex items-center gap-1 text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                    >
                      {program.cta}
                      <CaretDoubleRightIcon
                        size={12}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </div>
  );
};

const ProgramImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="absolute inset-0">
      <OptimizedImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        skeletonClassName="w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};
