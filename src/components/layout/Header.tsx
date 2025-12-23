import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo" aria-label="Plastix Marketing Home">
          <span className="logo-text">Plastix</span>
        </Link>
        
        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="header-actions">
          <a href={`tel:${siteConfig.phone.replace(/\./g, '')}`} className="phone-link">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
