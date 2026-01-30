'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Sign In Page - Clean SaaS Design
 */
export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json() as { error?: string; needsVerification?: boolean; redirectTo?: string };

      if (!response.ok) {
        if (data.needsVerification) {
          setError('Please verify your email before logging in. Check your inbox.');
        } else {
          setError(data.error || 'Login failed');
        }
        return;
      }

      window.location.href = data.redirectTo || '/dashboard';
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Logo */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-2">
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-900">Receive SMS</span>
        </Link>
        <h1 className="text-lg font-semibold text-slate-900">Sign in to your account</h1>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-soft p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-700">
              Create one free
            </Link>
          </p>
        </div>
      </div>

      {/* Trust Signal */}
      <p className="text-center text-xs text-slate-500 mt-4">
        No credit card required · Instant access
      </p>
    </>
  );
}
