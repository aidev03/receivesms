'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  name?: string | null;
  emailVerified: boolean;
  createdAt: string;
}

interface NumberHistory {
  id: string;
  country: string;
  flag: string;
  number: string;
  viewedAt: string;
}

/**
 * Dashboard Page
 * Protected page - redirects to sign-in if not authenticated
 */
export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [numberHistory, setNumberHistory] = useState<NumberHistory[]>([]);
  const [sendingVerification, setSendingVerification] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSendVerification = async () => {
    setSendingVerification(true);
    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setVerificationSent(true);
        setTimeout(() => setVerificationSent(false), 5000);
      }
    } catch {
      // Error handling
    } finally {
      setSendingVerification(false);
    }
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (!response.ok) {
          router.push('/sign-in');
          return;
        }

        const data = await response.json() as { user: User };
        setUser(data.user);
        
        // Load number viewing history from localStorage
        const history = localStorage.getItem('numberHistory');
        if (history) {
          try {
            setNumberHistory(JSON.parse(history));
          } catch {
            // Invalid JSON, ignore
          }
        }
      } catch {
        router.push('/sign-in');
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      window.location.href = '/sign-in';
    } catch {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-primary-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
              <span className="text-2xl">📱</span>
              Receive SMS
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 hidden sm:inline">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50"
              >
                {loggingOut ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Premium Access Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white shadow-lg shadow-green-500/25">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold text-lg">Premium Access Enabled</p>
              <p className="text-green-100 text-sm">Unlimited access to all 200+ phone numbers</p>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome{user.name ? `, ${user.name}` : ''}! 👋
          </h1>
          <p className="text-slate-600 mt-2">
            Manage your account and access our SMS verification services.
          </p>
        </div>

        {/* Email Verification Alert */}
        {!user.emailVerified && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800">Verify your email</h3>
              <p className="text-yellow-700 text-sm mt-1">
                Please check your inbox and click the verification link we sent to <strong>{user.email}</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <span className="text-xl">📱</span>
                <span className="font-medium text-slate-700">Browse Numbers</span>
              </Link>
              <Link
                href="/free-sms-numbers"
                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <span className="text-xl">🌍</span>
                <span className="font-medium text-slate-700">All Countries</span>
              </Link>
            </div>
          </div>

          {/* Account Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">👤</span>
              Account Info
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wide">Email</label>
                <div className="flex items-center gap-2">
                  <p className="text-slate-900 font-medium truncate">{user.email}</p>
                  {!user.emailVerified && (
                    <button
                      onClick={handleSendVerification}
                      disabled={sendingVerification}
                      className="text-xs px-2 py-1 bg-primary-100 text-primary-700 hover:bg-primary-200 rounded-md font-medium transition-colors disabled:opacity-50"
                    >
                      {sendingVerification ? 'Sending...' : verificationSent ? '✓ Sent!' : 'Verify'}
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wide">Status</label>
                <p className="flex items-center gap-2">
                  {user.emailVerified ? (
                    <>
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-700 font-medium">Verified</span>
                    </>
                  ) : (
                    <>
                      <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-yellow-700 font-medium">Pending Verification</span>
                    </>
                  )}
                </p>
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wide">Member Since</label>
                <p className="text-slate-900 font-medium">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }) : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              Security
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center gap-2 text-green-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">Secure Session</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Your account is protected</p>
              </div>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="w-full flex items-center justify-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors border border-red-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="font-medium">{loggingOut ? 'Signing out...' : 'Sign Out'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Number Viewing History */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Recently Viewed Numbers
          </h2>
          {numberHistory.length > 0 ? (
            <div className="space-y-3">
              {numberHistory.slice(0, 5).map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={`/number/${item.id}`}
                  className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <p className="font-medium text-slate-900">{item.number}</p>
                      <p className="text-sm text-slate-500">{item.country}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">
                    {new Date(item.viewedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <span className="text-4xl mb-2 block">📱</span>
              <p>No numbers viewed yet</p>
              <Link href="/" className="text-primary-600 hover:underline mt-2 inline-block">
                Browse available numbers →
              </Link>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">🎉 Thank you for using Receive SMS!</h2>
          <p className="text-primary-100 mb-6">
            Access free temporary phone numbers for SMS verification. No registration required for basic features.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
          >
            Browse Available Numbers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Receive SMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
