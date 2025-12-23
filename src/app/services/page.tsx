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

const reasons = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of plastic surgery and med spa marketing, patient concerns, and competitive landscapes.',
  },
  {
    title: 'Proven Results',
    description: '805+ leads per month, 400% traffic increases, and dominant search rankings for our clients.',
  },
  {
    title: 'Full-Service Capabilities',
    description: 'One partner for all your marketing needs, with integrated strategies that work together.',
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Services</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Solutions</p>
              <h1>Full-Service Marketing Solutions</h1>
              <p>
                Comprehensive marketing services designed specifically for 
                plastic surgeons, medical spas, and aesthetic practices.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-3">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                >
                  <h3 style={{ fontSize: '1.25rem' }}>{service.shortTitle}</h3>
                  <p style={{ marginBottom: 'var(--space-6)' }}>{service.description}</p>
                  <span className="link-arrow">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Why Plastix</p>
              <h2>Not Just Another Agency</h2>
              <p>
                We focus exclusively on marketing for aesthetic practices, 
                bringing unmatched industry expertise to every service.
              </p>
            </div>
            
            <div className="grid grid-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="card">
                  <h3>{reason.title}</h3>
                  <p className="mb-0">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Begin?</h2>
            <p>
              Schedule a consultation to discuss which services are right for your practice.
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
