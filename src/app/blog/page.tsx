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

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <main>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">Blog</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Blog</h1>
              <p>
                Marketing insights, strategies, and tips for plastic surgeons, 
                medical spas, and aesthetic practices.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              {sortedPosts.map((post) => (
                <article key={post.slug} className="card blog-card">
                  <div className="blog-meta">
                    <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                    <span style={{ margin: '0 0.5rem' }}>•</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="blog-excerpt">{post.description}</p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    style={{ color: 'var(--color-accent)', fontWeight: 500 }}
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Stay Updated</h2>
              <p>
                Get the latest marketing insights for aesthetic practices 
                delivered to your inbox.
              </p>
              <Link href="/contact" className="button" style={{ marginTop: '1rem' }}>
                Subscribe to Our Newsletter
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

