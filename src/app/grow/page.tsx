import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { services } from '@/content/services';

export const metadata: Metadata = generatePageMetadata({
  title: 'Grow With Plastix',
  description: 'Ready to grow your plastic surgery or medical spa practice? Learn about the Plastix Growth Plan and how we deliver 805+ new leads per month.',
  canonical: '/grow',
  keywords: ['grow aesthetic practice', 'plastic surgery marketing plan', 'med spa growth strategy'],
});

const growthPlanSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your practice, goals, competition, and target patients. This informs a customized growth strategy.',
  },
  {
    number: '02',
    title: 'Foundation Building',
    description: 'We build or optimize your website, establish your SEO foundation, and set up the marketing technology stack.',
  },
  {
    number: '03',
    title: 'Content & Authority',
    description: 'We create comprehensive content that positions you as an authority and drives organic traffic for years.',
  },
  {
    number: '04',
    title: 'Lead Generation',
    description: 'We launch targeted campaigns across multiple channels to generate a consistent flow of qualified leads.',
  },
  {
    number: '05',
    title: 'Optimization & Scaling',
    description: 'We continuously optimize based on data, improve conversion rates, and scale what works to accelerate growth.',
  },
];

const reasons = [
  {
    title: 'Industry Expertise',
    description: 'We understand plastic surgery and med spa marketing inside and out. We know what patients search for, their concerns, and how to convert them.',
  },
  {
    title: 'Proven Results',
    description: 'Our clients generate 805+ leads per month, see 400% traffic increases, and achieve dominant search rankings.',
  },
  {
    title: 'Full-Service Partnership',
    description: 'From web design to marketing automation, we handle everything. One partner, one strategy, one team focused on your growth.',
  },
];

export default function GrowPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Grow', url: `${siteConfig.url}/grow` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Grow</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Growth Framework</p>
              <h1>The Plastix Growth Plan</h1>
              <p style={{ maxWidth: '640px' }}>
                Our proven framework for sustainable practice growth. Learn how we 
                help aesthetic practices reach their full potential.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Why Plastix</p>
              <h2>Why Practices Choose Us</h2>
              <p>
                We are not a generic marketing agency. We exclusively serve aesthetic 
                practices, bringing deep industry expertise to every engagement.
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

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Process</p>
              <h2>Our Five-Step Framework</h2>
              <p>
                A proven process for sustainable aesthetic practice growth.
              </p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {growthPlanSteps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="card" 
                  style={{ 
                    marginBottom: index < growthPlanSteps.length - 1 ? 'var(--space-4)' : 0,
                    display: 'flex',
                    gap: 'var(--space-8)',
                    alignItems: 'flex-start'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem', 
                      fontWeight: 400, 
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 style={{ marginTop: 0, marginBottom: 'var(--space-3)' }}>{step.title}</h3>
                    <p className="mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Capabilities</p>
              <h2>Comprehensive Services</h2>
              <p>
                The Plastix Growth Plan leverages our full suite of marketing services, 
                customized to your practice&apos;s unique needs.
              </p>
            </div>
            
            <div className="grid grid-4">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                >
                  <h4 style={{ marginBottom: 'var(--space-2)' }}>{service.shortTitle}</h4>
                  <p style={{ fontSize: '0.875rem' }} className="mb-0">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Start Growing?</h2>
            <p>
              Schedule a consultation to discuss your practice goals and learn how 
              the Plastix Growth Plan can help you achieve them.
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
