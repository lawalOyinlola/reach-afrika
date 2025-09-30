export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "organization";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const defaultSEO: SEOProps = {
  title: "Reach Afrika - Building Communities Across Africa | NGO",
  description:
    "Reach Afrika is a non-profit organization dedicated to building sustainable communities across Africa through education, healthcare, and economic development programs. Join us in making a difference.",
  keywords:
    "NGO Africa, community development, education Africa, healthcare Africa, sustainable development, non-profit, volunteer Africa, charity, social impact",
  image: "https://reachafrika.org/og-image.jpg",
  url: "https://reachafrika.org",
  type: "website",
  author: "Reach Afrika",
};

export const generatePageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return defaultSEO.title!;
  return `${pageTitle} | Reach Afrika`;
};

export const generateMetaDescription = (description?: string): string => {
  if (!description) return defaultSEO.description!;
  return description.length > 160
    ? description.substring(0, 157) + "..."
    : description;
};

export const generateStructuredData = (seo: SEOProps) => {
  return {
    "@context": "https://schema.org",
    "@type": seo.type === "article" ? "Article" : "WebPage",
    name: seo.title || defaultSEO.title,
    description: seo.description || defaultSEO.description,
    url: seo.url || defaultSEO.url,
    image: seo.image || defaultSEO.image,
    ...(seo.type === "article" && {
      headline: seo.title,
      author: {
        "@type": "Organization",
        name: seo.author || defaultSEO.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Reach Afrika",
        logo: {
          "@type": "ImageObject",
          url: "https://reachafrika.org/logo/logo-words.png",
        },
      },
      datePublished: seo.publishedTime,
      dateModified: seo.modifiedTime,
      articleSection: seo.section,
      keywords: seo.tags?.join(", "),
    }),
  };
};

export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateEventStructuredData = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location,
    },
    url: event.url,
    organizer: {
      "@type": "Organization",
      name: "Reach Afrika",
      url: "https://reachafrika.org",
    },
  };
};

// Organization structured data from centralized data module
import { organizationProfile } from "@/data/organization";

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: organizationProfile.name,
    alternateName: organizationProfile.alternateName,
    url: organizationProfile.contact.url,
    logo: organizationProfile.logo,
    sameAs: organizationProfile.sameAs,
    slogan: organizationProfile.motto,
    foundingDate: organizationProfile.founded,
    description: organizationProfile.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: organizationProfile.address.streetAddress,
      addressLocality: organizationProfile.address.addressLocality,
      addressRegion: organizationProfile.address.addressRegion,
      addressCountry: organizationProfile.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: organizationProfile.contact.email,
        telephone: organizationProfile.contact.phone,
      },
    ],
    knowsAbout: organizationProfile.keywords,
  };
};
