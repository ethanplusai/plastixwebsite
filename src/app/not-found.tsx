import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Plastix Marketing',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main>
      <section 
        className="hero" 
        style={{ 
          minHeight: 'calc(100vh - 76px - 200px)', 
          display: 'flex', 
          alignItems: 'center' 
        }}
      >
        <div className="container">
          <div className="hero-content text-center" style={{ maxWidth: '560px', margin: '0 auto' }}>
            <p className="section-label">Error 404</p>
            <h1 style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', marginBottom: 'var(--space-4)' }}>
              404
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)' }}>
              Page Not Found
            </p>
            <p style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-10)' }}>
              The page you are looking for might have been removed, had its name 
              changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="cta-button button-large">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
