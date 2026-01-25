import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * 404 Not Found Page
 * Displayed when a page is not found
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-600">404</span>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>
            <Link
              href="/free-sms-numbers"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Browse Numbers
            </Link>
          </div>

          {/* Help Text */}
          <p className="mt-8 text-sm text-slate-500">
            Need help? Try searching for what you need or{' '}
            <Link href="/" className="text-primary-600 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
