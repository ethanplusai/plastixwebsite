import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generatePageMetadata, JsonLd, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { getIndustryBySlug, getAllIndustrySlugs } from '@/content/industries';
import { getServiceBySlug } from '@/content/services';

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    industry: slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  
  if (!industry) {
    return {};
  }

  return generatePageMetadata({
    title: industry.title,
    description: industry.metaDescription,
    canonical: `/industries/${industry.slug}`,
    keywords: [
      `${industry.shortTitle} marketing`,
      `${industry.shortTitle} SEO`,
      `${industry.shortTitle} lead generation`,
    ],
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: industry.shortTitle, url: `${siteConfig.url}/industries/${industry.slug}` },
  ];

  const serviceSchema = generateServiceSchema({
    name: `${industry.shortTitle} Marketing`,
    description: industry.metaDescription,
    url: `${siteConfig.url}/industries/${industry.slug}`,
    serviceType: `${industry.shortTitle} Marketing`,
  });

  const relatedServices = industry.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">{industry.shortTitle} Marketing</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Industry</p>
              <h1>{industry.heroHeadline}</h1>
              <p style={{ maxWidth: '640px', marginBottom: 'var(--space-10)' }}>
                {industry.heroSubheadline}
              </p>
              <Link href="/contact" className="cta-button button-large">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="article-content">
              {industry.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-16)' }}>
              <div>
                <p className="section-label">Challenges</p>
                <h2 style={{ marginBottom: 'var(--space-8)' }}>What We Solve</h2>
                <ul style={{ paddingLeft: 'var(--space-5)' }}>
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} style={{ marginBottom: 'var(--space-4)' }}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="section-label">Solutions</p>
                <h2 style={{ marginBottom: 'var(--space-8)' }}>Our Approach</h2>
                <ul style={{ paddingLeft: 'var(--space-5)' }}>
                  {industry.solutions.map((solution) => (
                    <li key={solution} style={{ marginBottom: 'var(--space-4)' }}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Services</p>
              <h2>Services for {industry.shortTitle} Practices</h2>
              <p>
                Comprehensive marketing services tailored to {industry.shortTitle.toLowerCase()} practices.
              </p>
            </div>
            
            <div className="grid grid-3">
              {relatedServices.map((service) => service && (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                >
                  <h3 style={{ fontSize: '1.125rem' }}>{service.shortTitle}</h3>
                  <p style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-4)' }}>{service.description}</p>
                  <span className="link-arrow">Learn more</span>
                </Link>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
              <Link href="/services" className="button button-outline">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Grow Your {industry.shortTitle} Practice?</h2>
            <p>
              Schedule a consultation to discuss your goals and learn how we can help.
            </p>
            <Link href="/contact" className="cta-button button-large">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
