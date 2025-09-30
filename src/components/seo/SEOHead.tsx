import React from "react";
import { Helmet } from "react-helmet-async";
import type { SEOProps } from "@/lib/seo";
import {
  defaultSEO,
  generatePageTitle,
  generateMetaDescription,
  generateOrganizationStructuredData,
} from "@/lib/seo";

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  children,
}) => {
  const pageTitle = generatePageTitle(title);
  const metaDescription = generateMetaDescription(description);
  const pageUrl = url || defaultSEO.url;
  const pageImage = image || defaultSEO.image;
  const pageKeywords = keywords || defaultSEO.keywords;
  const orgJsonLd = generateOrganizationStructuredData();

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={pageKeywords} />
      {author && <meta name="author" content={author} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Reach Afrika" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags &&
            tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
        </>
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={pageImage} />
      <meta property="twitter:creator" content="@reachafrika" />
      <meta property="twitter:site" content="@reachafrika" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#155c39" />
      <meta name="msapplication-TileColor" content="#155c39" />

      {children}

      {/* Organization structured data */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
    </Helmet>
  );
};

// Structured Data Component
interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

// Breadcrumb Component
interface BreadcrumbProps {
  items: Array<{ name: string; url: string }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-sm text-muted-foreground"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span>/</span>}
            <a
              href={item.url}
              className="hover:text-foreground transition-colors"
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.name}
            </a>
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};
