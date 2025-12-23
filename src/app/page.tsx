import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import { services } from '@/content/services';
import { industries } from '@/content/industries';

export const metadata: Metadata = generatePageMetadata({
  title: 'Plastix Marketing',
  description: 'The premier marketing agency for plastic surgeons, medical spas, and aesthetic practices. Our proven marketing strategy delivers effective lead generation and tangible results.',
  canonical: '/',
  keywords: [
    'plastic surgery marketing agency',
    'medical spa marketing',
    'aesthetic practice marketing',
    'plastic surgeon SEO',
    'med spa lead generation',
  ],
});

const stats = [
  { value: '805%', label: 'Inbound Marketing ROI' },
  { value: '805+', label: 'New Leads Monthly' },
  { value: '400%', label: 'Traffic Increase' },
  { value: '500K+', label: 'Monthly Impressions' },
];

const testimonials = [
  {
    quote: "We were looking for an elite lead generation marketing agency, and Plastix Marketing more than delivered. We saw an immediate increase in the number of leads coming into the practice.",
    author: 'Dr. Alan Larsen',
    company: 'Buckhead Plastic Surgery',
  },
  {
    quote: "Plastix Marketing far exceeds expectations in performance. They are dedicated to the success of our business and are extremely knowledgeable in business operations and marketing expertise.",
    author: 'Courtney Rodriguez',
    company: 'LUX Med Spa',
  },
  {
    quote: "Plastix Marketing is fantastic at what they do. Kari and her team will jump through hoops to get the job done. They are always very professional and a pleasure to work with.",
    author: 'Robbie Spence',
    company: 'Slim Studio Atlanta',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
      
      <main>
        <section className="hero-home">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Marketing for Aesthetic Practices</p>
              <h1>Strategic Growth<br />for Elite Practices</h1>
              <p style={{ maxWidth: '580px', marginBottom: 'var(--space-10)' }}>
                We partner with plastic surgeons, medical spas, and aesthetic practices 
                to deliver measurable growth through precision marketing.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/contact" className="cta-button button-large">
                  Schedule Consultation
                </Link>
                <Link href="/portfolio" className="button button-outline button-large">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Results</p>
              <h2>Performance That Speaks</h2>
              <p>
                Our clients choose Plastix because we deliver long-term strategies 
                that generate new patients consistently, year after year.
              </p>
            </div>
            
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Client Success</p>
              <h2>Trusted by Leading Practices</h2>
            </div>
            
            <div className="grid grid-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author} className="testimonial">
                  <blockquote className="testimonial-quote">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer>
                    <cite className="testimonial-author">{testimonial.author}</cite>
                    <div className="testimonial-company">{testimonial.company}</div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Industries</p>
              <h2>Our Specialization</h2>
              <p>
                We exclusively serve aesthetic and medical practices, 
                bringing deep industry expertise to every engagement.
              </p>
            </div>
            
            <div className="grid grid-3">
              {industries.map((industry) => (
                <Link 
                  key={industry.slug} 
                  href={`/industries/${industry.slug}`}
                  className="card"
                >
                  <h3>{industry.shortTitle}</h3>
                  <p>{industry.description}</p>
                  <span className="link-arrow">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Solutions</p>
              <h2>Full-Service Capabilities</h2>
              <p>
                Comprehensive marketing services designed for the unique 
                demands of aesthetic practices.
              </p>
            </div>
            
            <div className="grid grid-4">
              {services.slice(0, 8).map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                >
                  <h4 style={{ marginBottom: 'var(--space-3)' }}>{service.shortTitle}</h4>
                  <p style={{ fontSize: '0.9375rem' }}>{service.description}</p>
                </Link>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
              <Link href="/services" className="button button-outline">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Elevate Your Practice?</h2>
            <p>
              Schedule a consultation to discuss your goals and learn how 
              we can help your practice reach its full potential.
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
