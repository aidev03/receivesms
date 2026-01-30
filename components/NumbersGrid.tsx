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
 * Number Card Component - Modern Compact Design
 */
function NumberCard({ number }: { number: FreeNumber }) {
  return (
    <article className="group relative bg-white rounded-2xl border border-slate-200 p-4 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      {/* Country & Status Row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label={`${number.country} flag`}>
            {number.flag}
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{number.country}</h3>
            <p className="text-xs text-slate-400">{number.messageCount} messages</p>
          </div>
        </div>
        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
          number.status === 'available'
            ? 'bg-green-50 text-green-600'
            : 'bg-amber-50 text-amber-600'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${number.status === 'available' ? 'bg-green-500' : 'bg-amber-500'}`} />
          {number.status === 'available' ? 'Online' : 'Busy'}
        </span>
      </div>

      {/* Phone Number */}
      <div className="bg-slate-50 rounded-xl px-3 py-2.5 mb-3 group-hover:bg-blue-50 transition-colors">
        <p className="text-base font-mono font-semibold text-slate-800 text-center tracking-tight">
          {number.number}
        </p>
      </div>

      {/* Last Message & Action */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-400">
          Updated {number.lastMessage}
        </span>
        <Link
          href={`/number/${number.id}`}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            number.status === 'available'
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
          aria-disabled={number.status !== 'available'}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          View SMS
        </Link>
      </div>
    </article>
  );
}

/**
 * Locked Number Card Component - Premium numbers
 */
function LockedNumberCard({ number, onUnlock }: { number: FreeNumber; onUnlock: () => void }) {
  return (
    <article className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-dashed border-slate-200 p-4 overflow-hidden">
      {/* Premium Badge */}
      <div className="absolute top-2 right-2 z-10">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-semibold">
          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Premium
        </span>
      </div>

      {/* Country & Status Row - Blurred */}
      <div className="flex items-center justify-between mb-3 filter blur-[1px] select-none opacity-60">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label={`${number.country} flag`}>
            {number.flag}
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-500">{number.country}</h3>
            <p className="text-xs text-slate-400">{number.messageCount} messages</p>
          </div>
        </div>
      </div>

      {/* Phone Number - Hidden */}
      <div className="bg-slate-200/50 rounded-xl px-3 py-2.5 mb-3 relative">
        <p className="text-base font-mono font-semibold text-slate-400 text-center filter blur-sm select-none">
          {number.number.slice(0, 5)}•••••••
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
          </svg>
        </div>
      </div>

      {/* Unlock Button */}
      <button
        onClick={onUnlock}
        className="w-full flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-sm transition-all"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
        Unlock Free
      </button>
    </article>
  );
}

/**
 * Numbers Grid Component with Freemium Model
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
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        setIsAuthenticated(response.ok);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, [propIsAuthenticated]);

  /**
   * Filter numbers based on selected country
   */
  const filteredNumbers = useMemo(() => {
    if (activeFilter === 'ALL') {
      return numbers;
    }
    return numbers.filter((n) => n.countryCode === activeFilter);
  }, [numbers, activeFilter]);

  /**
   * Split numbers into free and premium
   */
  const { freeNumbers, premiumNumbers } = useMemo(() => {
    if (isAuthenticated) {
      // Authenticated users see all numbers as free
      return {
        freeNumbers: filteredNumbers,
        premiumNumbers: [] as FreeNumber[],
      };
    }
    // Non-authenticated users see limited free numbers
    return {
      freeNumbers: filteredNumbers.slice(0, FREE_NUMBERS_LIMIT),
      premiumNumbers: filteredNumbers.slice(FREE_NUMBERS_LIMIT),
    };
  }, [filteredNumbers, isAuthenticated]);

  /**
   * Numbers to display (with load more)
   */
  const displayedFreeNumbers = freeNumbers.slice(0, Math.min(visibleCount, freeNumbers.length));
  const displayedPremiumNumbers = premiumNumbers.slice(0, Math.max(0, visibleCount - freeNumbers.length));
  const hasMore = (freeNumbers.length + premiumNumbers.length) > visibleCount;

  /**
   * Handle filter change
   */
  const handleFilterChange = (code: string) => {
    setActiveFilter(code);
    setVisibleCount(12);
  };

  /**
   * Handle load more
   */
  const handleLoadMore = () => {
    if (!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT) {
      setShowModal(true);
    } else {
      setVisibleCount((prev) => prev + 8);
    }
  };

  /**
   * Handle unlock click
   */
  const handleUnlock = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Premium Access Badge for authenticated users */}
      {isAuthenticated && showPremiumBadge && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg animate-fade-in">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Premium Access Enabled
          </div>
        </div>
      )}

      {/* Free Numbers Label for non-authenticated users */}
      {!isAuthenticated && !checkingAuth && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Free Numbers (Limited) - {FREE_NUMBERS_LIMIT} available
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filter by country">
        {COUNTRY_FILTERS.map((filter) => (
          <button
            key={filter.code}
            onClick={() => handleFilterChange(filter.code)}
            role="tab"
            aria-selected={activeFilter === filter.code}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              activeFilter === filter.code
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter.code === 'ALL' ? filter.name : `${filter.flag} ${filter.name}`}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-center text-slate-500 text-sm mb-6">
        {isAuthenticated ? (
          <>
            Showing {Math.min(visibleCount, filteredNumbers.length)} of {filteredNumbers.length} numbers
          </>
        ) : (
          <>
            Showing {displayedFreeNumbers.length} free + {displayedPremiumNumbers.length} premium of {filteredNumbers.length} numbers
          </>
        )}
        {activeFilter !== 'ALL' && (
          <span> in {COUNTRY_FILTERS.find((f) => f.code === activeFilter)?.name}</span>
        )}
      </p>

      {/* Numbers Grid */}
      {filteredNumbers.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Free Numbers */}
            {displayedFreeNumbers.map((number) => (
              <NumberCard key={number.id} number={number} />
            ))}
            
            {/* Premium/Locked Numbers */}
            {displayedPremiumNumbers.map((number) => (
              <LockedNumberCard 
                key={number.id} 
                number={number} 
                onUnlock={handleUnlock}
              />
            ))}
          </div>

          {/* Premium Upsell Banner (for non-authenticated users) */}
          {!isAuthenticated && premiumNumbers.length > 0 && displayedPremiumNumbers.length < premiumNumbers.length && (
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {premiumNumbers.length - displayedPremiumNumbers.length}+ more premium numbers
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Unlock All {filteredNumbers.length} Numbers
              </h3>
              <p className="text-slate-600 mb-4">
                Create a free account to access all premium phone numbers from {COUNTRY_FILTERS.length - 1}+ countries
              </p>
              <button
                onClick={handleUnlock}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Unlock Premium Numbers – Free
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No Numbers Found</h3>
          <p className="text-slate-600">
            No numbers available for this country. Try selecting a different filter.
          </p>
          <button
            onClick={() => handleFilterChange('ALL')}
            className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Countries
          </button>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore} 
            className={`btn-secondary ${!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600' : ''}`}
          >
            {!isAuthenticated && visibleCount >= FREE_NUMBERS_LIMIT ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                Unlock More Numbers
              </>
            ) : (
              <>
                Load More Numbers
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
