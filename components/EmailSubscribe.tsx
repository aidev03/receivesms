'use client';

import { useState, FormEvent } from 'react';

/**
 * Email Subscription Form Component
 * Client-side validated email subscription for lead collection
 * AdSense-safe with privacy note
 * SEO benefit: Trust signal and engagement metric improvement
 */
export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Validate email format using regex
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Handle form submission with client-side validation
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call (placeholder - implement actual backend later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // TODO: Implement actual email subscription API
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      setStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <h3 className="text-white font-semibold mb-2">
        Stay Updated
      </h3>
      <p className="text-slate-400 text-sm mb-4">
        Get notified about new numbers and features
      </p>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Email Input */}
          <div className="flex-1">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email"
              autoComplete="email"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm
                ${status === 'error' 
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                  : 'border-slate-700 focus:border-primary-500 focus:ring-primary-500'
                }
                bg-slate-800 text-white placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-offset-0
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors`}
              aria-describedby={status === 'error' ? 'email-error' : undefined}
              aria-invalid={status === 'error'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm
              ${status === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-primary-600 hover:bg-primary-700 text-white'
              }
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 whitespace-nowrap
              flex items-center justify-center gap-2`}
          >
            {status === 'loading' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Subscribing...</span>
              </>
            ) : status === 'success' ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Subscribed!</span>
              </>
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </div>

        {/* Error Message */}
        {status === 'error' && errorMessage && (
          <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
            {errorMessage}
          </p>
        )}

        {/* Success Message */}
        {status === 'success' && (
          <p className="text-green-400 text-xs mt-1" role="status">
            Thank you for subscribing! You&apos;ll receive updates about new features.
          </p>
        )}
      </form>

      {/* Privacy Note - AdSense Safe */}
      <p className="text-slate-500 text-xs mt-3 leading-relaxed">
        By subscribing, you agree to our{' '}
        <a href="/privacy-policy" className="text-primary-400 hover:text-primary-300 underline">
          Privacy Policy
        </a>
        . We respect your privacy and will never share your email.
        Unsubscribe anytime.
      </p>
    </div>
  );
}
