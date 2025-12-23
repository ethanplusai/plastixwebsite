import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { services } from '@/content/services';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services',
  description: 'Explore our full range of marketing services for plastic surgeons and medical spas. From SEO to lead generation, we have the expertise to grow your practice.',
  canonical: '/services',
  keywords: [
    'plastic surgery marketing services',
    'medical spa marketing services',
    'healthcare SEO',
    'aesthetic practice marketing',
  ],
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Services</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Our Services</h1>
              <p>
                Comprehensive marketing solutions designed specifically for 
                plastic surgeons, medical spas, and aesthetic practices.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-3">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h2 style={{ fontSize: '1.25rem' }}>{service.shortTitle}</h2>
                  <p>{service.description}</p>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose Plastix Marketing</h2>
              <p>
                We're not a generalist agency. We focus exclusively on marketing for 
                aesthetic practices, bringing unmatched industry expertise to every service.
              </p>
            </div>
            
            <div className="grid grid-3">
              <div className="card">
                <h3>Industry Expertise</h3>
                <p>
                  Deep understanding of plastic surgery and med spa marketing, 
                  patient concerns, and competitive landscapes.
                </p>
              </div>
              
              <div className="card">
                <h3>Proven Results</h3>
                <p>
                  805+ leads per month, 400% traffic increases, and dominant 
                  search rankings for our clients.
                </p>
              </div>
              
              <div className="card">
                <h3>Full-Service Capabilities</h3>
                <p>
                  One partner for all your marketing needs, with integrated 
                  strategies that work together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Get Started?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Schedule a consultation to discuss which services are right for your practice.
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

