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

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <JsonLd data={[generateOrganizationSchema(), generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">About</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>About Plastix Marketing</h1>
              <p>
                The premier marketing agency for plastic surgeons, medical spas, 
                and aesthetic practices nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container">
            <div className="article-content">
              <h2>Our Story</h2>
              <p>
                Plastix Marketing was founded with a singular focus: helping aesthetic practices 
                grow through proven marketing strategies. We understood that plastic surgeons, 
                medical spas, and aesthetic practices face unique marketing challenges that 
                generic agencies simply don't understand.
              </p>
              <p>
                Our team brings together decades of experience in healthcare marketing, digital 
                strategy, and the aesthetic industry. We've worked inside practices, understanding 
                firsthand the challenges of patient acquisition, consultation conversion, and 
                building a sustainable growth engine.
              </p>

              <h2>Our Approach</h2>
              <p>
                We don't believe in one-size-fits-all marketing. Every practice is different—different 
                services, different markets, different goals. Our approach starts with understanding 
                your unique situation before developing a customized strategy.
              </p>
              <p>
                The Plastix Growth Plan is our comprehensive framework for aesthetic practice marketing. 
                It combines proven tactics across SEO, content marketing, paid advertising, marketing 
                automation, and sales enablement to create predictable, sustainable growth.
              </p>

              <h2>Why Choose Plastix</h2>
              <ul>
                <li><strong>Industry Expertise:</strong> We exclusively serve aesthetic practices</li>
                <li><strong>Proven Results:</strong> 805+ leads per month for our clients</li>
                <li><strong>Long-Term Partnership:</strong> We build strategies for sustainable growth</li>
                <li><strong>Full-Service Capabilities:</strong> From web design to marketing automation</li>
                <li><strong>Transparent Reporting:</strong> You always know what you're getting</li>
              </ul>

              <h2>Our Values</h2>
              <p>
                <strong>Results-Driven:</strong> Everything we do is measured by the results it produces 
                for your practice. We're not interested in vanity metrics—we care about consultations 
                and procedures.
              </p>
              <p>
                <strong>Partnership:</strong> We view ourselves as an extension of your team. Your 
                success is our success, and we're invested in your long-term growth.
              </p>
              <p>
                <strong>Innovation:</strong> The digital marketing landscape evolves constantly. We 
                stay ahead of trends and continuously improve our strategies to maintain your 
                competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Ready to Grow Your Practice?</h2>
              <p>
                Schedule a consultation to learn how Plastix Marketing can help your 
                aesthetic practice reach its full potential.
              </p>
              <Link href="/contact" className="button" style={{ marginTop: '1rem' }}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

