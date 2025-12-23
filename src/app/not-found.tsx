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
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="hero-content text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Page Not Found
            </p>
            <p>
              The page you are looking for might have been removed, had its name 
              changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="button" style={{ marginTop: '1.5rem' }}>
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

