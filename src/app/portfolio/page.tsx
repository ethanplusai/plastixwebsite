import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Portfolio',
  description: 'View case studies and results from Plastix Marketing clients. See how we help plastic surgeons and medical spas achieve significant growth.',
  canonical: '/portfolio',
  keywords: ['marketing case studies', 'plastic surgery marketing results', 'med spa marketing portfolio'],
});

const clients = [
  'Buckhead Plastic Surgery',
  'LUX Med Spa',
  'Slim Studio Atlanta',
  'Zubowicz Plastic Surgery',
  'Coastal Aesthetics',
  'Emergent Testing',
];

const caseStudy = {
  title: 'Buckhead Plastic Surgery Case Study',
  description: 'Learn how we helped Buckhead Plastic Surgery dominate keyword rankings, convert more leads, and schedule more surgeries.',
  stats: [
    { value: '805%', label: 'Inbound Marketing ROI' },
    { value: '4,000+', label: 'New Leads Generated' },
    { value: '400%', label: 'Traffic Increase' },
    { value: '500K+', label: 'Monthly Impressions' },
  ],
};

export default function PortfolioPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
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
              <li><span aria-current="page">Portfolio</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Our Portfolio</h1>
              <p>
                We take great pride in the work and results we have provided 
                for elite aesthetic practices across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="section">
          <div className="container">
            <div className="card" style={{ padding: '3rem' }}>
              <div style={{ maxWidth: '700px' }}>
                <span className="text-muted" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Featured Case Study
                </span>
                <h2 style={{ marginTop: '0.5rem' }}>{caseStudy.title}</h2>
                <p>{caseStudy.description}</p>
              </div>
              
              <div className="stats" style={{ marginTop: '2rem' }}>
                {caseStudy.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/contact" 
                className="button" 
                style={{ marginTop: '2rem', display: 'inline-flex' }}
              >
                Download Case Study
              </Link>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Our Clients</h2>
              <p>
                We partner with leading plastic surgeons, medical spas, and aesthetic 
                practices to drive sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-3">
              {clients.map((client) => (
                <div key={client} className="card text-center">
                  <h3 style={{ fontSize: '1.125rem', marginBottom: 0 }}>{client}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>The Results We Deliver</h2>
              <p>
                Our clients see measurable improvements in leads, traffic, and revenue. 
                Here's what the Plastix Growth Plan delivers.
              </p>
            </div>
            
            <div className="grid grid-2">
              <div className="card">
                <h3>Lead Generation</h3>
                <p>
                  Our clients generate an average of 805+ new leads per month through 
                  comprehensive inbound marketing strategies. These are qualified prospects 
                  actively seeking aesthetic services.
                </p>
              </div>
              
              <div className="card">
                <h3>SEO Dominance</h3>
                <p>
                  We help practices achieve top rankings for competitive procedure keywords. 
                  Clients see 400%+ increases in organic traffic and dominate local search results.
                </p>
              </div>
              
              <div className="card">
                <h3>Conversion Optimization</h3>
                <p>
                  Beyond driving traffic, we optimize the entire patient journey. Our clients 
                  convert more website visitors into consultations and more consultations into procedures.
                </p>
              </div>
              
              <div className="card">
                <h3>Marketing Automation</h3>
                <p>
                  We implement marketing automation that nurtures leads, retains patients, and 
                  scales growth without requiring additional staff. More efficiency, better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Join Our Portfolio?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Schedule a consultation to learn how we can deliver similar 
                results for your practice.
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

