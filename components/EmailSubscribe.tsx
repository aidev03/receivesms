'use client';

import { useState, FormEvent } from 'react';

/**
 * Email Subscribe - Clean inline form
 */
export default function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email');
      setStatus('error');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrorMessage('Something went wrong');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-700">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Thanks! We&apos;ll keep you updated.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex gap-2">
        <div className="flex-1">
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email"
            className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow ${
              status === 'error' 
                ? 'border-red-300 bg-red-50' 
                : 'border-slate-200 bg-white'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50 transition-colors flex-shrink-0"
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && errorMessage && (
        <p className="mt-1.5 text-xs text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
