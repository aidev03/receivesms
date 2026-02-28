import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog-data';

/**
 * Blog Page Metadata - SEO optimized
 */
export const metadata: Metadata = {
  title: 'Blog - SMS Verification Tips, Privacy & Security Guides',
  description: 'Learn about SMS verification, online privacy, temporary phone numbers, and how to protect your personal information when signing up for online services.',
  keywords: [
    'sms verification blog',
    'phone verification tips',
    'online privacy guide',
    'temporary phone numbers',
    'virtual numbers guide',
  ],
  openGraph: {
    title: 'Blog - SMS Verification Tips & Privacy Guides',
    description: 'Learn about SMS verification, online privacy, and temporary phone numbers.',
    type: 'website',
  },
};

/**
 * Blog Listing Page
 */
export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

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
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                SMS Verification Blog
              </h1>
              <p className="text-lg text-slate-600">
                Tips, guides, and insights about SMS verification, online privacy, and protecting your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-slate-500 mr-2">Categories:</span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-soft transition-all duration-200"
                >
                  {/* Category Badge */}
                  <div className="px-5 pt-5">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="px-5 pb-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Protect Your Privacy?
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Use our free temporary phone numbers for SMS verification without exposing your personal number.
            </p>
            <Link href="/free-sms-numbers" className="btn-accent">
              Get Free Numbers
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
    </>
  );
}
