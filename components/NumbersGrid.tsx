'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import SignupModal from './SignupModal';

/**
 * Free Number Interface
 */
export interface FreeNumber {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  number: string;
  status: 'available' | 'busy';
  lastMessage: string;
  messageCount: number;
}

/**
 * Country Filter Interface
 */
interface CountryFilter {
  code: string;
  name: string;
  flag: string;
}

/**
 * Available country filters
 */
const COUNTRY_FILTERS: CountryFilter[] = [
  { code: 'ALL', name: 'All Countries', flag: '🌍' },
  { code: 'US', name: 'USA', flag: '🇺🇸' },
  { code: 'GB', name: 'UK', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'CI', name: 'Ivory Coast', flag: '🇨🇮' },
];

const FREE_NUMBERS_LIMIT = 3;

/**
 * Free Number Card - Clean, accessible design
 */
function FreeNumberCard({ number }: { number: FreeNumber }) {
  return (
    <article className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 hover:shadow-medium transition-all duration-200">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl" role="img" aria-label={`${number.country} flag`}>
            {number.flag}
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{number.country}</h3>
            <p className="text-xs text-slate-500">{number.messageCount.toLocaleString()} messages</p>
          </div>
        </div>
        
        {/* Status Badge */}
        <span className={`badge-${number.status === 'available' ? 'success' : 'warning'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${number.status === 'available' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          {number.status === 'available' ? 'Free' : 'Busy'}
        </span>
      </div>

      {/* Phone Number Display */}
      <div className="bg-slate-50 rounded-lg px-3 py-2.5 mb-3 group-hover:bg-slate-100 transition-colors">
        <p className="font-mono text-base font-semibold text-slate-900 text-center tracking-tight">
          {number.number}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Updated {number.lastMessage}
        </span>
        <Link
          href={`/number/${number.id}`}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            number.status === 'available'
              ? 'bg-slate-900 text-white hover:bg-slate-800'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
          }`}
          aria-disabled={number.status !== 'available'}
        >
          View SMS
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/**
 * Locked/Premium Number Card - Clear conversion CTA
 */
function LockedNumberCard({ number, onUnlock }: { number: FreeNumber; onUnlock: () => void }) {
  return (
    <article className="relative bg-slate-50 border border-slate-200 border-dashed rounded-xl p-4 overflow-hidden">
      {/* Premium Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="badge-premium">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
          </svg>
          Premium
        </span>
      </div>

      {/* Blurred Header */}
      <div className="flex items-center gap-2.5 mb-3 opacity-60 select-none">
        <span className="text-2xl blur-[2px]" role="img" aria-label={`${number.country} flag`}>
          {number.flag}
        </span>
        <div className="blur-[1px]">
          <h3 className="text-sm font-semibold text-slate-700">{number.country}</h3>
          <p className="text-xs text-slate-600">{number.messageCount.toLocaleString()} messages</p>
        </div>
      </div>

      {/* Masked Number */}
      <div className="bg-slate-200/60 rounded-lg px-3 py-2.5 mb-3 relative">
        <p className="font-mono text-base font-semibold text-slate-500 text-center blur-sm select-none" aria-hidden="true">
          {number.number.substring(0, 6)}••••••
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Unlock CTA */}
      <button
        onClick={onUnlock}
        className="w-full btn-accent text-xs py-2"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
        Create account to unlock
      </button>
    </article>
  );
}

/**
 * Numbers Grid Component - Freemium Model with Conversion Focus
 */
interface NumbersGridProps {
  numbers: FreeNumber[];
  isAuthenticated?: boolean;
  showPremiumBadge?: boolean;
}

export default function NumbersGrid({ 
  numbers, 
  isAuthenticated: propIsAuthenticated,
  showPremiumBadge = true 
}: NumbersGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(propIsAuthenticated ?? false);
  const [checkingAuth, setCheckingAuth] = useState(propIsAuthenticated === undefined);

  // Check authentication status on mount
  useEffect(() => {
    if (propIsAuthenticated !== undefined) {
      setIsAuthenticated(propIsAuthenticated);
      setCheckingAuth(false);
      return;
    }

    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        setIsAuthenticated(response.ok);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, [propIsAuthenticated]);

  // Filter numbers
  const filteredNumbers = useMemo(() => {
    if (activeFilter === 'ALL') return numbers;
    return numbers.filter((n) => n.countryCode === activeFilter);
  }, [numbers, activeFilter]);

  // Split into free and premium
  const { freeNumbers, premiumNumbers } = useMemo(() => {
    if (isAuthenticated) {
      return { freeNumbers: filteredNumbers, premiumNumbers: [] as FreeNumber[] };
    }
    return {
      freeNumbers: filteredNumbers.slice(0, FREE_NUMBERS_LIMIT),
      premiumNumbers: filteredNumbers.slice(FREE_NUMBERS_LIMIT),
    };
  }, [filteredNumbers, isAuthenticated]);

  const displayedFreeNumbers = freeNumbers.slice(0, Math.min(visibleCount, freeNumbers.length));
  const displayedPremiumNumbers = premiumNumbers.slice(0, Math.max(0, visibleCount - freeNumbers.length));
  const hasMore = (freeNumbers.length + premiumNumbers.length) > visibleCount;

  const handleFilterChange = (code: string) => {
    setActiveFilter(code);
    setVisibleCount(12);
  };

  const handleUnlock = () => setShowModal(true);

  const handleLoadMore = () => {
    if (!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT) {
      setShowModal(true);
    } else {
      setVisibleCount((prev) => prev + 8);
    }
  };

  return (
    <>
      {/* Premium Access Badge */}
      {isAuthenticated && showPremiumBadge && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-emerald-700">Premium Access Enabled</span>
          </div>
        </div>
      )}

      {/* Free User Info */}
      {!isAuthenticated && !checkingAuth && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-slate-600">
              <strong className="text-slate-900">{FREE_NUMBERS_LIMIT} free numbers</strong> available · Create account for unlimited access
            </span>
          </div>
          <button 
            onClick={handleUnlock}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Unlock all →
          </button>
        </div>
      )}

      {/* Country Filters */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-slate-100" role="group" aria-label="Filter by country">
        {COUNTRY_FILTERS.slice(0, 10).map((filter) => (
          <button
            key={filter.code}
            onClick={() => handleFilterChange(filter.code)}
            aria-pressed={activeFilter === filter.code}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeFilter === filter.code
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter.code === 'ALL' ? filter.name : `${filter.flag} ${filter.name}`}
          </button>
        ))}
        {COUNTRY_FILTERS.length > 10 && (
          <button
            onClick={() => handleFilterChange('ALL')}
            className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-800"
          >
            +{COUNTRY_FILTERS.length - 10} more
          </button>
        )}
      </div>

      {/* Results Count */}
      <p className="text-sm text-slate-500 mb-4">
        Showing {displayedFreeNumbers.length + displayedPremiumNumbers.length} of {filteredNumbers.length} numbers
        {activeFilter !== 'ALL' && (
          <span> in {COUNTRY_FILTERS.find((f) => f.code === activeFilter)?.name}</span>
        )}
      </p>

      {/* Numbers Grid */}
      {filteredNumbers.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedFreeNumbers.map((number) => (
              <FreeNumberCard key={number.id} number={number} />
            ))}
            {displayedPremiumNumbers.map((number) => (
              <LockedNumberCard key={number.id} number={number} onUnlock={handleUnlock} />
            ))}
          </div>

          {/* Unlock Banner - Non-authenticated users */}
          {!isAuthenticated && premiumNumbers.length > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-indigo-200 rounded-full text-xs font-medium text-indigo-700 mb-3">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
                {premiumNumbers.length}+ more numbers available
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Unlock Unlimited Access
              </h3>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                Create a free account to access all {filteredNumbers.length} phone numbers from {COUNTRY_FILTERS.length - 1}+ countries
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={handleUnlock}
                  className="btn-accent"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  Get Unlimited Access – Free
                </button>
                <span className="text-xs text-slate-500">No credit card required</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-1">No Numbers Found</h3>
          <p className="text-sm text-slate-600 mb-3">
            No numbers available for this country.
          </p>
          <button
            onClick={() => handleFilterChange('ALL')}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all countries
          </button>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-8">
          <button 
            onClick={handleLoadMore} 
            className={`${!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT ? 'btn-accent' : 'btn-secondary'}`}
          >
            {!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Unlock More Numbers
              </>
            ) : (
              <>
                Load More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Signup Modal */}
      <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
