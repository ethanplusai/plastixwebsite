import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateArticleMetadata, JsonLd, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { getBlogPostBySlug, getAllBlogSlugs, getRecentBlogPosts } from '@/content/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {};
  }

  return generateArticleMetadata({
    title: post.title,
    description: post.metaDescription,
    canonical: `/blog/${post.slug}`,
    publishedTime: post.publishDate,
    modifiedTime: post.modifiedDate,
    author: post.author,
    tags: post.tags,
  });
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: post.author,
  });

  const relatedPosts = getRecentBlogPosts(4)
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listIndex = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listIndex++}`}>
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={index}>{trimmedLine.replace('## ', '')}</h2>);
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={index}>{trimmedLine.replace('### ', '')}</h3>);
      } else if (trimmedLine.startsWith('- ')) {
        currentList.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine) {
        flushList();
        const formattedLine = trimmedLine.replace(
          /\*\*(.*?)\*\*/g,
          '<strong>$1</strong>'
        );
        elements.push(
          <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <JsonLd data={[articleSchema, generateBreadcrumbSchema(breadcrumbs)]} />
      
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><span aria-current="page">{post.title}</span></li>
            </ol>
          </div>
        </nav>

        <header className="hero">
          <div className="container">
            <div className="hero-content" style={{ maxWidth: 'var(--container-narrow)' }}>
              <div className="blog-meta" style={{ marginBottom: 'var(--space-6)' }}>
                <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                <span style={{ margin: '0 var(--space-2)' }}>·</span>
                <span>{post.category}</span>
              </div>
              
              <h1 style={{ marginBottom: 'var(--space-6)' }}>{post.title}</h1>
              
              <p className="text-tertiary mb-0">By {post.author}</p>
            </div>
          </div>
        </header>

        <article className="section">
          <div className="container">
            <div className="article-content">
              {renderContent(post.content)}
            </div>

            {post.tags.length > 0 && (
              <div className="article-content" style={{ marginTop: 'var(--space-12)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      style={{
                        padding: 'var(--space-2) var(--space-4)',
                        background: 'var(--color-surface-elevated)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <p className="section-label">Related</p>
                <h2>More Insights</h2>
              </div>
              
              <div className="grid grid-3">
                {relatedPosts.map((related) => (
                  <article key={related.slug} className="card blog-card">
                    <div className="blog-meta">
                      <time dateTime={related.publishDate}>{formatDate(related.publishDate)}</time>
                    </div>
                    
                    <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--space-3)' }}>
                      <Link 
                        href={`/blog/${related.slug}`}
                        style={{ color: 'inherit' }}
                      >
                        {related.title}
                      </Link>
                    </h3>
                    
                    <p style={{ fontSize: '0.9375rem' }} className="mb-0">{related.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="cta-section">
          <div className="container">
            <p className="section-label">Get Started</p>
            <h2>Ready to Grow Your Practice?</h2>
            <p>
              Schedule a consultation to discuss how Plastix Marketing can help.
            </p>
            <Link href="/contact" className="cta-button button-large">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
