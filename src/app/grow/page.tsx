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
    description: 'We create comprehensive content that positions you as an authority and drives organic traffic for years to come.',
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

export default function GrowPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Grow', url: `${siteConfig.url}/grow` },
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
              <li><span aria-current="page">Grow</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Grow With Plastix</h1>
              <p>
                The Plastix Growth Plan is our proven framework for sustainable 
                practice growth. Learn how we can help your aesthetic practice 
                reach its full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Why Grow With Us */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Why Practices Choose Plastix</h2>
              <p>
                We're not a generic marketing agency. We exclusively serve aesthetic 
                practices, bringing deep industry expertise to every engagement.
              </p>
            </div>
            
            <div className="grid grid-3">
              <div className="card">
                <h3>Industry Expertise</h3>
                <p>
                  We understand plastic surgery and med spa marketing inside and out. 
                  We know what patients are searching for, what concerns they have, 
                  and how to convert them.
                </p>
              </div>
              
              <div className="card">
                <h3>Proven Results</h3>
                <p>
                  Our clients generate 805+ leads per month, see 400% traffic increases, 
                  and achieve dominant search rankings. We have the track record to prove it.
                </p>
              </div>
              
              <div className="card">
                <h3>Full-Service Partnership</h3>
                <p>
                  From web design to marketing automation, we handle everything. 
                  One partner, one strategy, one team focused on your growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Plan Steps */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>The Plastix Growth Plan</h2>
              <p>
                Our proven 5-step process for sustainable aesthetic practice growth.
              </p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {growthPlanSteps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="card" 
                  style={{ 
                    marginBottom: index < growthPlanSteps.length - 1 ? '1.5rem' : 0,
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <span 
                    style={{ 
                      fontSize: '2rem', 
                      fontWeight: 700, 
                      color: 'var(--color-accent)',
                      lineHeight: 1
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 style={{ marginTop: 0 }}>{step.title}</h3>
                    <p className="mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Our Comprehensive Services</h2>
              <p>
                The Plastix Growth Plan leverages our full suite of marketing services, 
                customized to your practice's unique needs.
              </p>
            </div>
            
            <div className="grid grid-4">
              {services.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1rem' }}>{service.shortTitle}</h3>
                  <p style={{ fontSize: '0.875rem' }} className="mb-0">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Start Growing?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Schedule a consultation to discuss your practice goals and learn how 
                the Plastix Growth Plan can help you achieve them.
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

