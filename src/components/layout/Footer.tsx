import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column footer-about">
            <Link href="/" className="footer-logo">
              Plastix
            </Link>
            <p className="footer-description">
              The premier marketing partner for plastic surgeons, medical spas, 
              and aesthetic practices. We deliver measurable growth through 
              strategic, data-driven marketing.
            </p>
            <div className="footer-social">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="social-icon">in</span>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span className="social-icon">X</span>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="social-icon">f</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              {siteConfig.footerLinks.solutions.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">More</h3>
            <ul className="footer-links">
              {siteConfig.footerLinks.solutions.slice(7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Industries</h3>
            <ul className="footer-links">
              {siteConfig.footerLinks.specialties.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links footer-contact">
              <li>
                <Link href="/contact">Schedule Consultation</Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\./g, '')}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                {siteConfig.address.city}, {siteConfig.address.state}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Plastix Marketing. All rights reserved.
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </p>
          <p className="division">A Division of Evolve Marketing</p>
        </div>
      </div>
    </footer>
  );
}
