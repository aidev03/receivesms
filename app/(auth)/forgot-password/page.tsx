'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Forgot Password Page
 * Secure password reset request form
 */
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        credentials: 'include',
      });

      const data = await response.json() as { error?: string };

      if (!response.ok && response.status !== 429) {
        setError(data.error || 'Failed to send reset email');
        return;
      }

      if (response.status === 429) {
        setError(data.error || 'Too many requests. Please try again later.');
        return;
      }

      // Always show success to prevent email enumeration
      setSubmitted(true);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Check your email</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
          <p className="text-slate-600 mb-6">
            If an account exists with <strong>{email}</strong>, you&apos;ll receive a password reset link shortly.
          </p>
          <p className="text-sm text-slate-500 mb-6">
            The link will expire in 30 minutes. Check your spam folder if you don&apos;t see it.
          </p>
          <Link
            href="/sign-in"
            className="inline-block py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Logo/Brand */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary-600">
          <span className="text-3xl">📱</span>
          Receive SMS
        </Link>
        <p className="text-slate-600 mt-2">Reset your password</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="mb-6">
          <p className="text-slate-600 text-sm">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>

        {/* Back to Sign In */}
        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <Link href="/sign-in" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to Sign In
          </Link>
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-6">
        <Link href="/" className="text-slate-500 hover:text-slate-700 text-sm">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
