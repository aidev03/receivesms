import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog-data';

/**
 * Generate static params for all blog posts
 */
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Generate metadata for each blog post
 */
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

/**
 * Blog Post Page
 */
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Convert markdown-style content to HTML (simple conversion)
  const contentHtml = post.content
    .split('\n')
    .map((line) => {
      if (line.startsWith('## ')) {
        return `<h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-lg font-semibold text-slate-900 mt-6 mb-3">${line.slice(4)}</h3>`;
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return `<li class="mb-2"><strong class="text-slate-900">${match[1]}</strong>: ${match[2]}</li>`;
        }
      }
      if (line.startsWith('- ')) {
        return `<li class="mb-1 ml-4">${line.slice(2)}</li>`;
      }
      if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        return `<li class="mb-1 ml-4 list-decimal">${line.slice(3)}</li>`;
      }
      if (line.startsWith('| ')) {
        // Skip tables for now
        return '';
      }
      if (line.trim() === '') {
        return '';
      }
      // Handle bold text
      let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900">$1</strong>');
      return `<p class="mb-4 text-slate-600 leading-relaxed">${processed}</p>`;
    })
    .filter(Boolean)
    .join('\n');

  // JSON-LD for blog post
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'SMS Verify Online',
      url: 'https://receivesms.it.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://receivesms.it.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 h-14 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900">Receive SMS</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/free-sms-numbers" className="text-sm text-slate-600 hover:text-slate-900">
              Numbers
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-900">
              Blog
            </Link>
            <Link href="/sign-in" className="text-sm text-slate-600 hover:text-slate-900">
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content" className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="py-4 bg-slate-50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/blog" className="text-slate-500 hover:text-slate-700">Blog</Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium truncate max-w-[200px]">{post.title}</li>
            </ol>
          </div>
        </nav>

        {/* Article */}
        <article className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-2.5 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
            </header>

            {/* Content */}
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-slate-50 rounded-xl">
              <p className="text-sm font-medium text-slate-900 mb-3">Share this article</p>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://receivesms.it.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://receivesms.it.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-soft transition-all duration-200"
                  >
                    <h3 className="text-base font-semibold text-slate-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-indigo-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-xs text-slate-500">{relatedPost.readTime} min read</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Try Our Free SMS Verification Service
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Get temporary phone numbers from 50+ countries for instant SMS verification.
            </p>
            <Link href="/free-sms-numbers" className="btn-accent">
              Get Free Numbers
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Receive SMS Online. All rights reserved.
            </p>
            <nav className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-700">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-slate-500 hover:text-slate-700">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-700">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
