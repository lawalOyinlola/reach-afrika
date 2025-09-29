export const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      tagline: "Tagline",
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: "/images/_DSC2854.webp",
    },
    {
      number: "02",
      tagline: "Tagline",
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: "/images/_DSC2874.webp",
    },
    {
      number: "03",
      tagline: "Tagline",
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: "/images/_DSC2886.webp",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="text-sm text-neutral-500 mb-2">
                {feature.number} Feature{" "}
                {index === 0 ? "one" : index === 1 ? "two" : "three"}
              </div>
              <div className="text-sm text-black dark:text-white mb-4">
                {feature.tagline}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex gap-4">
                <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors duration-200">
                  Button
                </button>
                <button className="text-neutral-800 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
                  Button
                </button>
              </div>
            </div>
            <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
