import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* About Column */}
          <div className="footer-column footer-about">
            <Link href="/" className="footer-logo">
              <span className="logo-text">Plastix</span>
            </Link>
            <p className="footer-description">
              Plastix Marketing is the premier agency for plastic surgeons, medical spas, 
              and other aesthetic practices. The Plastix Growth Plan enables aesthetic 
              practices to gain a distinct advantage over their competition.
            </p>
          </div>

          {/* Solutions Column */}
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

          {/* More Solutions Column */}
          <div className="footer-column">
            <h3 className="footer-heading">&nbsp;</h3>
            <ul className="footer-links">
              {siteConfig.footerLinks.solutions.slice(7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Specialties</h3>
            <ul className="footer-links">
              {siteConfig.footerLinks.specialties.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links footer-contact">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\./g, '')}`}>{siteConfig.phone}</a>
              </li>
            </ul>
            
            <div className="footer-social">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <span className="social-icon">𝕏</span>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="social-icon">f</span>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="social-icon">in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Plastix Marketing. | <Link href="/privacy">Privacy</Link> <Link href="/terms">Terms of Service</Link>
          </p>
          <p className="division">A Division of Evolve Marketing</p>
        </div>
      </div>
    </footer>
  );
}

