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
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Contact</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Contact</p>
              <h1>Let&apos;s Discuss Your Growth</h1>
              <p>
                Ready to grow your aesthetic practice? Get in touch with our team 
                to schedule a consultation.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>
              <div>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>Schedule a Consultation</h2>
                <p className="text-tertiary" style={{ marginBottom: 'var(--space-10)' }}>
                  Fill out the form below and a member of our team will be in touch 
                  within one business day.
                </p>
                
                <form action="#" method="POST">
                  <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
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
                  </div>
                  
                  <div className="grid grid-2" style={{ gap: 'var(--space-6)' }}>
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
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="practice-type" className="form-label">Practice Type</label>
                    <select id="practice-type" name="practice-type" className="form-input">
                      <option value="">Select your practice type...</option>
                      <option value="plastic-surgery">Plastic Surgery</option>
                      <option value="medical-spa">Medical Spa</option>
                      <option value="coolsculpting">CoolSculpting</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="other">Other Aesthetic Practice</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">How can we help? *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      placeholder="Tell us about your practice and goals..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="cta-button button-large" style={{ width: '100%' }}>
                    Submit Request
                  </button>
                </form>
              </div>

              <div>
                <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ marginBottom: 'var(--space-6)' }}>Get In Touch</h3>
                  
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h6>Phone</h6>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/\./g, '')}`} 
                      style={{ fontSize: '1.125rem', fontWeight: '500' }}
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h6>Email</h6>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      style={{ fontSize: '1.125rem', fontWeight: '500' }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  
                  <div>
                    <h6>Location</h6>
                    <p className="mb-0" style={{ fontSize: '1.125rem' }}>
                      {siteConfig.address.city}, {siteConfig.address.state}
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h3 style={{ marginBottom: 'var(--space-6)' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <a 
                      href={siteConfig.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a 
                      href={siteConfig.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Twitter"
                    >
                      X
                    </a>
                    <a 
                      href={siteConfig.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Facebook"
                    >
                      f
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
