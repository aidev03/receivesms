'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Sign Up Page - Clean SaaS Design
 */
export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Password strength
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!hasMinLength || !hasUppercase || !hasLowercase || !hasNumber) {
      setError('Password does not meet requirements');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json() as { error?: string };

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      setSuccess(true);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (success) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
          <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-900 mb-2">Check your email</h1>
        <p className="text-sm text-slate-600 mb-6">
          We sent a verification link to <strong>{email}</strong>
        </p>
        <Link href="/sign-in" className="btn-primary">
          Go to Sign In
        </Link>
      </div>
    );
  }

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
        <h1 className="text-lg font-semibold text-slate-900">Create your free account</h1>
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
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Min. 8 characters"
            />
            {/* Password Requirements */}
            {password.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                <span className={hasMinLength ? 'text-emerald-600' : 'text-slate-400'}>
                  ✓ 8+ characters
                </span>
                <span className={hasUppercase ? 'text-emerald-600' : 'text-slate-400'}>
                  ✓ Uppercase
                </span>
                <span className={hasLowercase ? 'text-emerald-600' : 'text-slate-400'}>
                  ✓ Lowercase
                </span>
                <span className={hasNumber ? 'text-emerald-600' : 'text-slate-400'}>
                  ✓ Number
                </span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1.5">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Confirm password"
            />
            {confirmPassword.length > 0 && (
              <p className={`mt-1 text-xs ${passwordsMatch ? 'text-emerald-600' : 'text-red-500'}`}>
                {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-accent py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : 'Create Free Account'}
          </button>

          <p className="text-center text-xs text-slate-500">
            By signing up, you agree to our{' '}
            <Link href="/terms-of-service" className="text-indigo-600 hover:underline">Terms</Link>
            {' '}and{' '}
            <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
          </p>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Trust Signal */}
      <p className="text-center text-xs text-slate-500 mt-4">
        No credit card required · Instant access · 100% free
      </p>
    </>
  );
}
