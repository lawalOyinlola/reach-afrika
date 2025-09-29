import { CaretDoubleRightIcon } from "@phosphor-icons/react";
import { AnimationTitle } from "../ui/animation-title";

const programs = [
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
    icon: "📦",
    title: "Skills for Life",
    description: "Practical training for personal and professional growth.",
    cta: "Discover",
    background: "bg-gradient-to-br from-teal-600 to-blue-600",
    rowSpan: 1, // Standard height
  },
  {
    category: "Digital",
    title: "She Leads Digital",
    description: "Empowering women through technology and leadership.",
    cta: "Explore",
    background: "bg-gradient-to-br from-orange-500 to-pink-500",
    rowSpan: 2, // Taller card
    image: "/images/_DSC2819.webp",
  },
  {
    category: "Breakthrough",
    title: "From Bucket to Breakthrough",
    description: "Overcoming barriers through targeted support.",
    cta: "Learn",
    background: "bg-gradient-to-br from-amber-700 to-brown-600",
    rowSpan: 2, // Taller card
    image: "/images/_DSC2854.webp",
  },
  {
    icon: "📦",
    title: "Change Conference",
    description: "Inspiring dialogues for social transformation.",
    cta: "Explore",
    background: "bg-gradient-to-br from-amber-600 to-orange-500",
    rowSpan: 1, // Standard height
  },
  {
    icon: "📦",
    title: "Innovative programs for youth development",
    description: "Comprehensive approach to community transformation.",
    cta: "Engage",
    background: "bg-neutral-600",
    rowSpan: 1, // Standard height
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
          {programs.map((program, index) => {
            const rowSpanClass =
              program.rowSpan === 2 ? "row-span-2" : "row-span-1";

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${program.background} col-span-1 ${rowSpanClass}`}
              >
                {/* Background Image */}
                {program.image && (
                  <div className="absolute inset-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category/Icon */}
                <div className="absolute top-4 left-4">
                  {program.category ? (
                    <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full">
                      {program.category}
                    </span>
                  ) : (
                    <div className="text-white text-2xl">{program.icon}</div>
                  )}
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="card-title text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3 leading-relaxed">
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-white hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                  >
                    {program.cta}
                    <CaretDoubleRightIcon
                      size={12}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 duration-300"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
