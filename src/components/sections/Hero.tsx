import type { Product } from "@/types";
import { HeroParallax } from "../ui/hero-parallax";

export const Hero = () => {
  const products: Product[] = [
    {
      title: "Skills Training",
      thumbnail: "/images/_DSC2854.webp",
      priority: true, // Above the fold
    },
    {
      title: "Positive Change",
      thumbnail: "/images/_DSC3090.webp",
      priority: true, // Above the fold
    },
    {
      title: "Education Support",
      thumbnail: "/images/_DSC2874.webp",
      priority: true, // Above the fold
    },
    {
      title: "Mentorship Programs",
      thumbnail: "/images/_DSC2886.webp",
      priority: true, // LCP candidate - most important!
    },
    {
      title: "Career Guidance",
      thumbnail: "/images/_DSC2927.webp",
      priority: true, // Above the fold
    },
    {
      title: "Community Building",
      thumbnail: "/images/_DSC2933.webp",
      priority: true,
    },
    {
      title: "Life Skills",
      thumbnail: "/images/_DSC2991.webp",
      priority: true,
    },
    {
      title: "Empowerment",
      thumbnail: "/images/_DSC3013.webp",
      priority: true,
    },
    {
      title: "Future Leaders",
      thumbnail: "/images/_DSC3017.webp",
      priority: true,
    },
    {
      title: "Support Network",
      thumbnail: "/images/_DSC3026.webp",
      priority: true,
    },
    {
      title: "Community Impact",
      thumbnail: "/images/_DSC2813.webp",
      priority: true,
    },
  ];

  return (
    <div
      id="hero"
      aria-label="Reach Afrika - Building Communities Across Africa"
      className="relative"
    >
      <HeroParallax products={products} />

      {/* Hidden SEO content for screen readers */}
      <div className="sr-only">
        <h1>Reach Afrika - Building Communities Across Africa</h1>
        <p>
          We are a non-profit organization dedicated to building sustainable
          communities across Africa through education, healthcare, and economic
          development programs. Our mission is to empower individuals and
          communities to create lasting positive change.
        </p>
        <h2>Our Impact Areas</h2>
        <ul>
          <li>Education and Skills Training</li>
          <li>Healthcare Access and Support</li>
          <li>Economic Development Programs</li>
          <li>Community Building and Mentorship</li>
          <li>Youth Empowerment and Leadership</li>
        </ul>
      </div>
    </div>
  );
};
