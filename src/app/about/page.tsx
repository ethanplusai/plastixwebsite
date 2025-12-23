import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Plastix Marketing',
  description: 'Learn about Plastix Marketing, the premier marketing agency for plastic surgeons and medical spas. Our team brings decades of aesthetic industry expertise.',
  canonical: '/about',
  keywords: ['marketing agency', 'aesthetic practice marketing', 'about Plastix'],
});

const values = [
  {
    title: 'Results-Driven',
    description: 'Everything we do is measured by the results it produces. We focus on consultations and procedures, not vanity metrics.',
  },
  {
    title: 'Partnership',
    description: 'We view ourselves as an extension of your team. Your success is our success, and we invest in your long-term growth.',
  },
  {
    title: 'Innovation',
    description: 'The digital landscape evolves constantly. We stay ahead of trends to maintain your competitive advantage.',
  },
];

const advantages = [
  { title: 'Industry Expertise', description: 'We exclusively serve aesthetic practices' },
  { title: 'Proven Results', description: '805+ leads per month for our clients' },
  { title: 'Long-Term Partnership', description: 'Strategies for sustainable growth' },
  { title: 'Full-Service Capabilities', description: 'From web design to automation' },
  { title: 'Transparent Reporting', description: 'You always know what you are getting' },
];

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <JsonLd data={[generateOrganizationSchema(), generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">About</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">About Us</p>
              <h1>The Premier Agency for Aesthetic Practices</h1>
              <p>
                We partner with plastic surgeons, medical spas, and aesthetic 
                practices nationwide to deliver measurable, sustainable growth.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>
              <div className="article-content" style={{ maxWidth: 'none' }}>
                <h2>Our Story</h2>
                <p>
                  Plastix Marketing was founded with a singular focus: helping aesthetic practices 
                  grow through proven marketing strategies. We understood that plastic surgeons, 
                  medical spas, and aesthetic practices face unique marketing challenges that 
                  generic agencies simply do not understand.
                </p>
                <p>
                  Our team brings together decades of experience in healthcare marketing, digital 
                  strategy, and the aesthetic industry. We have worked inside practices, understanding 
                  firsthand the challenges of patient acquisition, consultation conversion, and 
                  building a sustainable growth engine.
                </p>
              </div>
              
              <div className="article-content" style={{ maxWidth: 'none' }}>
                <h2>Our Approach</h2>
                <p>
                  We do not believe in one-size-fits-all marketing. Every practice is different—different 
                  services, different markets, different goals. Our approach starts with understanding 
                  your unique situation before developing a customized strategy.
                </p>
                <p>
                  The Plastix Growth Plan is our comprehensive framework for aesthetic practice marketing. 
                  It combines proven tactics across SEO, content marketing, paid advertising, marketing 
                  automation, and sales enablement to create predictable, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Why Plastix</p>
              <h2>Your Competitive Advantage</h2>
            </div>
            
            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              {advantages.map((advantage) => (
                <div key={advantage.title} className="card">
                  <h4 style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-2)' }}>
                    {advantage.title}
                  </h4>
                  <p className="mb-0" style={{ fontSize: '0.9375rem' }}>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Our Values</p>
              <h2>What Drives Us</h2>
            </div>
            
            <div className="grid grid-3">
              {values.map((value) => (
                <div key={value.title} className="card">
                  <h3>{value.title}</h3>
                  <p className="mb-0">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Grow Your Practice?</h2>
            <p>
              Schedule a consultation to learn how Plastix Marketing can help your 
              aesthetic practice reach its full potential.
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
