import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}

/**
 * Generate complete metadata for a page
 * Use this in each page's generateMetadata function
 */
export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
  keywords = [],
}: PageSEO): Metadata {
  const fullTitle = title === siteConfig.name 
    ? title 
    : `${title} | ${siteConfig.name}`;
  
  const canonicalUrl = canonical 
    ? `${siteConfig.url}${canonical}` 
    : undefined;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    
    // Robots
    robots: noindex 
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    
    // Canonical
    alternates: canonicalUrl 
      ? { canonical: canonicalUrl }
      : undefined,
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl || siteConfig.url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || siteConfig.ogImage],
    },
  };
}

/**
 * Generate metadata for a blog article
 */
export interface ArticleSEO extends PageSEO {
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  tags?: string[];
}

export function generateArticleMetadata({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
  keywords = [],
  publishedTime,
  modifiedTime,
  author,
  tags = [],
}: ArticleSEO): Metadata {
  const baseMetadata = generatePageMetadata({
    title,
    description,
    canonical,
    ogImage,
    noindex,
    keywords: [...keywords, ...tags],
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      tags,
    },
  };
}

/**
 * Generate metadata for a service page
 */
export interface ServiceSEO extends PageSEO {
  serviceType?: string;
}

export function generateServiceMetadata(seo: ServiceSEO): Metadata {
  return generatePageMetadata({
    ...seo,
    keywords: [
      ...(seo.keywords || []),
      seo.serviceType || '',
      'marketing',
      'plastic surgery marketing',
      'medical spa marketing',
    ].filter(Boolean),
  });
}

