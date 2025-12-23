import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateServiceMetadata, JsonLd, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/content/services';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    service: slug,
  }));
}

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

  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><span aria-current="page">{service.shortTitle}</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Service</p>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>
              <div className="article-content" style={{ maxWidth: 'none' }}>
                {service.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <aside style={{ position: 'sticky', top: 'calc(76px + var(--space-8))' }}>
                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                  <h4 style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
                    What&apos;s Included
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-5)' }}>
                    {service.features.map((feature) => (
                      <li key={feature} style={{ marginBottom: 'var(--space-3)', fontSize: '0.9375rem' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h4 style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
                    Benefits
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-5)' }}>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} style={{ marginBottom: 'var(--space-3)', fontSize: '0.9375rem' }}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Explore</p>
              <h2>Related Services</h2>
              <p>Explore more ways we can help grow your practice.</p>
            </div>
            
            <div className="grid grid-3">
              {relatedServices.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/services/${related.slug}`}
                  className="card"
                >
                  <h3 style={{ fontSize: '1.125rem' }}>{related.shortTitle}</h3>
                  <p style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-4)' }}>{related.description}</p>
                  <span className="link-arrow">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Start with {service.shortTitle}?</h2>
            <p>
              Schedule a consultation to discuss how {service.shortTitle.toLowerCase()} can 
              help grow your aesthetic practice.
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
