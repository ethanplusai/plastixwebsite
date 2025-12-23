# Plastix Marketing Website

A production-ready, SEO-first marketing website built with Next.js App Router. This site replaces the traditional WordPress site at plastixmarketing.com with significantly better performance.

## Features

### SEO Excellence
- **Dynamic metadata** - Title, description, and Open Graph for every page
- **JSON-LD schema** - Organization, WebSite, Article, Service, LocalBusiness, and Breadcrumb schemas
- **Semantic HTML** - Proper heading hierarchy (H1-H6), semantic elements (header, main, article, section, footer)
- **Sitemap & robots.txt** - Auto-generated from content
- **Canonical URLs** - Prevent duplicate content issues
- **301 redirects** - Central configuration for SEO preservation

### Performance
- **Static generation** - Pages are pre-rendered at build time
- **Image optimization** - Next.js Image component with AVIF/WebP formats
- **Core Web Vitals** - Optimized for LCP, FID, and CLS
- **Minimal JavaScript** - Server components by default

### Content Architecture
- **CMS-like structure** - Content stored as TypeScript objects
- **Services** - 14 service pages with full SEO
- **Industries** - 3 industry-specific landing pages
- **Blog** - Dynamic blog with article schema

## URL Structure

```
/                         - Homepage
/about                    - About page
/services                 - Services index
/services/[service]       - Individual service pages
/industries/[industry]    - Industry-specific pages
/blog                     - Blog index
/blog/[slug]              - Individual blog posts
/portfolio                - Portfolio/case studies
/grow                     - Growth plan information
/contact                  - Contact form
```

## Project Structure

```
plastixwebsite/
├── config/
│   └── site.ts           # Site configuration
├── content/
│   ├── services/         # Service content
│   ├── industries/       # Industry content
│   ├── blog/             # Blog posts
│   └── pages/            # Static page content
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/
│       └── seo/          # SEO utilities
├── public/               # Static assets
├── next.config.js        # Next.js configuration
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd plastixwebsite
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Adding Content

### New Service

Add to `content/services/index.ts`:

```typescript
{
  slug: 'new-service',
  title: 'New Service Title',
  shortTitle: 'New Service',
  description: 'Brief description...',
  metaDescription: 'SEO meta description...',
  features: ['Feature 1', 'Feature 2'],
  benefits: ['Benefit 1', 'Benefit 2'],
  content: 'Full content here...'
}
```

### New Blog Post

Add to `content/blog/index.ts`:

```typescript
{
  slug: 'new-blog-post',
  title: 'Blog Post Title',
  description: 'Brief description...',
  metaDescription: 'SEO meta description...',
  author: 'Author Name',
  publishDate: '2024-01-01',
  category: 'Category',
  tags: ['Tag1', 'Tag2'],
  content: 'Full markdown content...'
}
```

### New Industry

Add to `content/industries/index.ts`:

```typescript
{
  slug: 'new-industry',
  title: 'Marketing for New Industry',
  shortTitle: 'New Industry',
  description: 'Brief description...',
  metaDescription: 'SEO meta description...',
  heroHeadline: 'Grow Your Practice',
  heroSubheadline: 'Subheadline here',
  challenges: ['Challenge 1'],
  solutions: ['Solution 1'],
  content: 'Full content here...',
  relatedServices: ['seo', 'content-marketing']
}
```

## SEO Utilities

### Metadata Generation

```typescript
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Page Title',
  description: 'Page description',
  canonical: '/page-path',
  keywords: ['keyword1', 'keyword2'],
});
```

### JSON-LD Schema

```typescript
import { JsonLd, generateOrganizationSchema } from '@/lib/seo';

<JsonLd data={generateOrganizationSchema()} />
```

## Deployment

This site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```
NEXT_PUBLIC_SITE_URL=https://plastixmarketing.com
```

## License

Proprietary - Plastix Marketing

