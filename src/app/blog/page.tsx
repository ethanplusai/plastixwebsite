import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/content/blog';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Marketing tips, strategies, and insights for plastic surgeons, medical spas, and aesthetic practices from the experts at Plastix Marketing.',
  canonical: '/blog',
  keywords: [
    'plastic surgery marketing blog',
    'medical spa marketing tips',
    'aesthetic practice marketing insights',
  ],
});

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
  ];

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Blog</span></li>
            </ol>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="section-label">Insights</p>
              <h1>Marketing Insights for Aesthetic Practices</h1>
              <p>
                Strategies, tips, and industry knowledge to help you grow your practice.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              {sortedPosts.map((post) => (
                <article key={post.slug} className="card blog-card">
                  <div className="blog-meta">
                    <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                    <span style={{ margin: '0 var(--space-2)' }}>·</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      style={{ color: 'inherit' }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="blog-excerpt">{post.description}</p>
                  
                  <Link href={`/blog/${post.slug}`} className="link-arrow">
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Stay Updated</p>
            <h2>Get Marketing Insights</h2>
            <p>
              Get the latest marketing insights for aesthetic practices 
              delivered to your inbox.
            </p>
            <Link href="/contact" className="cta-button button-large">
              Subscribe to Updates
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
