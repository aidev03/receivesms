'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Signup Modal - Clean SaaS Design
 */
export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'signup' | 'signin'>('signup');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = mode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json() as { error?: string; success?: boolean };

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      if (mode === 'signup') {
        setError('');
        alert('Account created! Please check your email to verify, then sign in.');
        setMode('signin');
      } else {
        window.location.reload();
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="relative p-6 pb-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-700 mb-4">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Unlock Premium
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            {mode === 'signup' ? 'Get Unlimited Access' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            {mode === 'signup' 
              ? 'Create a free account to unlock all numbers'
              : 'Sign in to continue'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              id="modal-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="modal-password" className="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              id="modal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              placeholder="Min. 8 characters"
            />
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
            ) : mode === 'signup' ? 'Create Free Account' : 'Sign In'}
          </button>

          {/* Trust Signal */}
          <p className="text-center text-xs text-slate-500">
            No credit card required
          </p>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center">
          {mode === 'signup' ? (
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </button>
            </p>
          ) : (
            <p className="text-sm text-slate-600">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Create one free
              </button>
            </p>
          )}
          <p className="text-xs text-slate-400 mt-2">
            Or{' '}
            <Link href={mode === 'signup' ? '/sign-up' : '/sign-in'} className="text-indigo-600 hover:underline">
              use full page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
