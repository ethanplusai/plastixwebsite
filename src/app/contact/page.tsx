import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Contact Plastix Marketing to discuss how we can help grow your plastic surgery or medical spa practice. Schedule a consultation today.',
  canonical: '/contact',
  keywords: ['contact Plastix Marketing', 'marketing consultation', 'plastic surgery marketing agency'],
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ];

  return (
    <>
      <JsonLd data={[generateLocalBusinessSchema(), generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Contact</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Contact Us</h1>
              <p>
                Ready to grow your aesthetic practice? Get in touch with our team 
                to schedule a consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'start' }}>
              {/* Contact Form */}
              <div>
                <h2>Schedule a Consultation</h2>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                  Fill out the form below and a member of our team will be in touch 
                  within one business day.
                </p>
                
                <form action="#" method="POST">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-input" 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="practice" className="form-label">Practice Name</label>
                    <input 
                      type="text" 
                      id="practice" 
                      name="practice" 
                      className="form-input" 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="practice-type" className="form-label">Practice Type</label>
                    <select id="practice-type" name="practice-type" className="form-input">
                      <option value="">Select...</option>
                      <option value="plastic-surgery">Plastic Surgery</option>
                      <option value="medical-spa">Medical Spa</option>
                      <option value="coolsculpting">CoolSculpting</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="other">Other Aesthetic Practice</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">How Can We Help? *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="button">
                    Submit
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2>Get In Touch</h2>
                <p className="text-muted" style={{ marginBottom: '2rem' }}>
                  Prefer to reach out directly? Here's how to contact us.
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Phone</h3>
                  <a href={`tel:${siteConfig.phone.replace(/\./g, '')}`} style={{ fontSize: '1.25rem' }}>
                    {siteConfig.phone}
                  </a>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Email</h3>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '1.25rem' }}>
                    {siteConfig.email}
                  </a>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Location</h3>
                  <p className="mb-0">
                    {siteConfig.address.city}, {siteConfig.address.state}
                  </p>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Connect With Us</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a 
                      href={siteConfig.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      Twitter
                    </a>
                    <a 
                      href={siteConfig.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      Facebook
                    </a>
                    <a 
                      href={siteConfig.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

