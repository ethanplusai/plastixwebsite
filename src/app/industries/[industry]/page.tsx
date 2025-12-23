import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generatePageMetadata, JsonLd, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { getIndustryBySlug, getAllIndustrySlugs } from '@/content/industries';
import { services, getServiceBySlug } from '@/content/services';

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

// Generate static params for all industries
export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    industry: slug,
  }));
}

// Generate metadata for each industry page
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

  // Get related services
  const relatedServices = industry.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">{industry.shortTitle} Marketing</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>{industry.heroHeadline}</h1>
              <p>{industry.heroSubheadline}</p>
              <Link href="/contact" className="cta-button" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="article-content">
              {industry.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section section-alt">
          <div className="container">
            <div className="grid grid-2" style={{ gap: '3rem' }}>
              <div>
                <h2>Challenges We Solve</h2>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} style={{ marginBottom: '0.75rem' }}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2>Our Solutions</h2>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {industry.solutions.map((solution) => (
                    <li key={solution} style={{ marginBottom: '0.75rem' }}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Services for {industry.shortTitle} Practices</h2>
              <p>
                Our comprehensive marketing services tailored to 
                {industry.shortTitle.toLowerCase()} practices.
              </p>
            </div>
            
            <div className="grid grid-3">
              {relatedServices.map((service) => service && (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1.125rem' }}>{service.shortTitle}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{service.description}</p>
                </Link>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link href="/services" className="button-outline button">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Grow Your {industry.shortTitle} Practice?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Schedule a consultation to discuss your goals and learn how we can help.
              </p>
              <Link 
                href="/contact" 
                className="cta-button" 
                style={{ marginTop: '1.5rem', display: 'inline-flex', background: 'white', color: 'var(--color-primary)' }}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

