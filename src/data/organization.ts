export type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
};

export type Contact = {
  email: string;
  phone: string;
  url: string;
};

export type Program = {
  slug: string;
  name: string;
  summary: string;
  keywords: string[];
};

export type Policy = {
  name: string;
  summary: string;
};

export type OrganizationProfile = {
  name: string;
  legalName?: string;
  alternateName?: string[];
  description: string;
  founded: string; // ISO date or human readable
  motto?: string;
  mission: string;
  vision: string;
  values: string[];
  colors: { primary: string; secondary: string; neutral?: string };
  fonts: string[];
  logo: string;
  wordmark: string;
  address: Address;
  contact: Contact;
  sameAs: string[]; // social links
  keywords: string[]; // global keywords for SEO
  programs: Program[];
  policies: Policy[];
};

export const organizationProfile: OrganizationProfile = {
  name: "Reach Afrika",
  legalName: "Reach Afrika",
  alternateName: ["Reach Africa", "Reach Afrika NGO"],
  description:
    "Reach Afrika is a youth-focused NGO empowering young people and strengthening communities in Sierra Leone through music, education, leadership, and economic empowerment.",
  founded: "15th August 2015",
  motto: "Empowering Youth, Transforming Africa",
  mission:
    "To empower youth and communities through music, education, leadership, and economic empowerment initiatives that foster resilience, inclusivity, and sustainable growth.",
  vision:
    "A transformed Africa where young people thrive as leaders, innovators, and change-makers.",
  values: [
    "Integrity",
    "Inclusivity",
    "Accountability",
    "Innovation",
    "Respect for Diversity",
  ],
  colors: { primary: "#155c39", secondary: "#f68116", neutral: "#ffffff" },
  fonts: ["Montserrat", "Arial", "system-ui", "-apple-system", "sans-serif"],
  logo: "/logo/logo-icon-dark-removebg.png",
  wordmark: "/logo/logo-words-dark-removebg.png",
  address: {
    streetAddress: "23 Main Peninsular Road, Goderich",
    addressLocality: "Freetown",
    addressRegion: "Western Region",
    addressCountry: "Sierra Leone",
  },
  contact: {
    email: "info@reachafrika.org",
    phone: "+232 79 566771",
    url: "https://reachafrika.org",
  },
  sameAs: [
    "https://twitter.com/reachafrika",
    "https://www.facebook.com/reachafrika",
    "https://www.instagram.com/reachafrika",
    "https://www.linkedin.com/company/reachafrika",
  ],
  keywords: [
    "Reach Afrika",
    "NGO Sierra Leone",
    "youth empowerment",
    "community development",
    "education programs",
    "leadership training",
    "economic empowerment",
    "women in tech",
    "digital skills",
    "gospel choir",
    "volunteer",
    "charity",
    "non-profit Africa",
  ],
  programs: [
    {
      slug: "gcgc",
      name: "Goderich Community Gospel Choir (GCGC)",
      summary:
        "Using the power of music to inspire hope, nurture talent, and promote unity through annual events and youth support.",
      keywords: ["music", "choir", "youth", "unity", "events"],
    },
    {
      slug: "change-conference",
      name: "Change Conference",
      summary:
        "Annual leadership, faith, and innovation platform offering dialogue, training, and mentorship for young leaders.",
      keywords: ["leadership", "mentorship", "conference", "youth"],
    },
    {
      slug: "skills-for-life",
      name: "Skills for Life",
      summary:
        "Practical skills training, mentorship, and educational support including school and exam fee assistance.",
      keywords: ["skills", "education", "mentorship", "support"],
    },
    {
      slug: "from-bucket-to-breakthrough",
      name: "From Bucket to Breakthrough",
      summary:
        "Entrepreneurial and economic empowerment program transitioning youth from survival to sustainable businesses.",
      keywords: ["entrepreneurship", "economic empowerment", "business"],
    },
    {
      slug: "she-leads-digital",
      name: "She Leads Digital",
      summary:
        "Women-focused digital skills training (coding, design, social media, web, online business) and digital safety.",
      keywords: [
        "women",
        "digital skills",
        "coding",
        "safety",
        "entrepreneurship",
      ],
    },
  ],
  policies: [
    {
      name: "Safeguarding Policy",
      summary:
        "We are committed to protecting the safety and dignity of children, youth, and vulnerable persons in all programs.",
    },
    {
      name: "Gender Policy (70/30)",
      summary:
        "We prioritize women’s participation with a 70% focus on women and 30% on men to promote equity and inclusion.",
    },
  ],
};
