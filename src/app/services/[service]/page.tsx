import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateServiceMetadata, JsonLd, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/content/services';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    service: slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {};
  }

  return generateServiceMetadata({
    title: service.title,
    description: service.metaDescription,
    canonical: `/services/${service.slug}`,
    serviceType: service.shortTitle,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: service.shortTitle, url: `${siteConfig.url}/services/${service.slug}` },
  ];

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    serviceType: service.shortTitle,
  });

  // Get related services (excluding current)
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><span aria-current="page">{service.shortTitle}</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
              {/* Content */}
              <div className="article-content" style={{ maxWidth: 'none' }}>
                {service.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Sidebar */}
              <aside>
                {/* Features */}
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.25rem' }}>What's Included</h2>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {service.features.map((feature) => (
                      <li key={feature} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="card">
                  <h2 style={{ fontSize: '1.25rem' }}>Benefits</h2>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Related Services</h2>
              <p>Explore more ways we can help grow your practice.</p>
            </div>
            
            <div className="grid grid-3">
              {relatedServices.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/services/${related.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1.125rem' }}>{related.shortTitle}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Get Started with {service.shortTitle}?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Schedule a consultation to discuss how {service.shortTitle.toLowerCase()} can 
                help grow your aesthetic practice.
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

