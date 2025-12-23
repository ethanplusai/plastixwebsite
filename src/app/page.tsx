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
  { value: '805+', label: 'New Leads Every Month' },
  { value: '400%', label: 'Increase in Website Traffic' },
  { value: '500K+', label: 'Monthly Search Impressions' },
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
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Grow With Plastix</h1>
              <p>
                Our proven marketing strategy delivers effective lead generation 
                and tangible results for plastic surgery practices and med spas.
              </p>
              <Link href="/contact" className="cta-button" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Show Me How
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>It's All About The Results</h2>
              <p>
                Our clients are much like your patients—it's all about the results. 
                Aesthetic practices across the country choose Plastix because we deliver 
                a long-term marketing strategy that continues to deliver new patients for years.
              </p>
            </div>
            
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link href="/portfolio" className="button-outline button">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="grid grid-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author} className="testimonial">
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
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

        {/* Specialties Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Our Specialties</h2>
              <p>
                We are not just another marketing agency. We focus on marketing for plastic surgeons, 
                medical spas, coolsculpting studios, and other aesthetic practices.
              </p>
            </div>
            
            <div className="grid grid-3">
              {industries.map((industry) => (
                <Link 
                  key={industry.slug} 
                  href={`/industries/${industry.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3>{industry.shortTitle} Marketing</h3>
                  <p>{industry.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Our Solutions</h2>
              <p>
                Comprehensive marketing services designed specifically for aesthetic practices.
              </p>
            </div>
            
            <div className="grid grid-4">
              {services.slice(0, 8).map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1.125rem' }}>{service.shortTitle}</h3>
                  <p style={{ fontSize: '0.875rem' }}>{service.description}</p>
                </Link>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link href="/services" className="button">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <h2 style={{ color: 'white' }}>Ready to Grow Your Practice?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Learn more about Plastix Marketing and why so many plastic surgery 
                & medical spa practices trust us to grow their business.
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

