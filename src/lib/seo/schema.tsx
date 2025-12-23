import { siteConfig } from '@/config/site';

/**
 * JSON-LD Schema generators for structured data
 * These follow Google's structured data guidelines
 */

export interface SchemaOrganization {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    city: string;
    state: string;
    country: string;
  };
  sameAs?: string[];
}

/**
 * Generate Organization schema
 * Use on homepage and about page
 */
export function generateOrganizationSchema(org?: Partial<SchemaOrganization>) {
  const data = {
    name: org?.name || siteConfig.name,
    url: org?.url || siteConfig.url,
    description: org?.description || siteConfig.description,
    email: org?.email || siteConfig.email,
    telephone: org?.telephone || siteConfig.phone,
    address: org?.address || siteConfig.address,
    sameAs: org?.sameAs || [
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    description: data.description,
    email: data.email,
    telephone: data.telephone,
    address: data.address ? {
      '@type': 'PostalAddress',
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      addressCountry: data.address.country,
    } : undefined,
    sameAs: data.sameAs,
  };
}

/**
 * Generate WebSite schema with search action
 * Use on homepage
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Article schema for blog posts
 */
export interface SchemaArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}

export function generateArticleSchema(article: SchemaArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || siteConfig.ogImage,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

/**
 * Generate Service schema
 */
export interface SchemaService {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

export function generateServiceSchema(service: SchemaService) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: service.provider || siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: service.areaServed || 'United States',
    serviceType: service.serviceType || 'Marketing Agency',
  };
}

/**
 * Generate BreadcrumbList schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate LocalBusiness schema
 * Good for contact page
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    priceRange: '$$$',
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  };
}

/**
 * Helper to render JSON-LD script tag
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
      }}
    />
  );
}

