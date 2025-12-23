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
  title: 'Buckhead Plastic Surgery',
  subtitle: 'Featured Case Study',
  description: 'Learn how we helped Buckhead Plastic Surgery dominate keyword rankings, convert more leads, and schedule more surgeries.',
  stats: [
    { value: '805%', label: 'Inbound Marketing ROI' },
    { value: '4,000+', label: 'New Leads Generated' },
    { value: '400%', label: 'Traffic Increase' },
    { value: '500K+', label: 'Monthly Impressions' },
  ],
};

const results = [
  {
    title: 'Lead Generation',
    description: 'Our clients generate an average of 805+ new leads per month through comprehensive inbound marketing strategies. These are qualified prospects actively seeking aesthetic services.',
  },
  {
    title: 'SEO Dominance',
    description: 'We help practices achieve top rankings for competitive procedure keywords. Clients see 400%+ increases in organic traffic and dominate local search results.',
  },
  {
    title: 'Conversion Optimization',
    description: 'Beyond driving traffic, we optimize the entire patient journey. Our clients convert more website visitors into consultations and more consultations into procedures.',
  },
  {
    title: 'Marketing Automation',
    description: 'We implement marketing automation that nurtures leads, retains patients, and scales growth without requiring additional staff.',
  },
];

export default function PortfolioPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Portfolio</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Our Work</p>
              <h1>Results That Speak for Themselves</h1>
              <p>
                We take great pride in the work and results we have provided 
                for elite aesthetic practices across the country.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ padding: 'var(--space-12)' }}>
              <p className="section-label">{caseStudy.subtitle}</p>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{caseStudy.title}</h2>
              <p style={{ maxWidth: '640px', marginBottom: 'var(--space-10)' }}>
                {caseStudy.description}
              </p>
              
              <div className="stats" style={{ padding: '0' }}>
                {caseStudy.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: 'var(--space-10)' }}>
                <Link href="/contact" className="cta-button">
                  Download Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Partners</p>
              <h2>Our Clients</h2>
              <p>
                We partner with leading plastic surgeons, medical spas, and aesthetic 
                practices to drive sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-3">
              {clients.map((client) => (
                <div 
                  key={client} 
                  className="card text-center"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '120px'
                  }}
                >
                  <h4 style={{ margin: 0, fontSize: '1.125rem' }}>{client}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Outcomes</p>
              <h2>The Results We Deliver</h2>
              <p>
                Our clients see measurable improvements in leads, traffic, and revenue. 
                Here is what the Plastix Growth Plan delivers.
              </p>
            </div>
            
            <div className="grid grid-2">
              {results.map((result) => (
                <div key={result.title} className="card">
                  <h3>{result.title}</h3>
                  <p className="mb-0">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Join Us</p>
            <h2>Ready to Join Our Portfolio?</h2>
            <p>
              Schedule a consultation to learn how we can deliver similar 
              results for your practice.
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
