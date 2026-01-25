'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

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

/**
 * Number Card Component
 * Displays individual free SMS number with status and actions
 */
function NumberCard({ number }: { number: FreeNumber }) {
  return (
    <article className="card group hover:border-primary-200 transition-all duration-300">
      {/* Header with flag and country */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={`${number.country} flag`}>
            {number.flag}
          </span>
          <div>
            <h3 className="font-semibold text-slate-900">{number.country}</h3>
            <p className="text-sm text-slate-500">{number.messageCount} messages</p>
          </div>
        </div>
        {/* Status Badge */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            number.status === 'available'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {number.status === 'available' ? '● Available' : '● Busy'}
        </span>
      </div>

      {/* Phone Number */}
      <div className="bg-slate-50 rounded-lg p-3 mb-4">
        <p className="text-lg font-mono font-semibold text-slate-800 text-center">
          {number.number}
        </p>
      </div>

      {/* Last message info */}
      <p className="text-xs text-slate-500 mb-4 text-center">
        Last message: {number.lastMessage}
      </p>

      {/* Action Button */}
      <Link
        href={`/number/${number.id}`}
        className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
          number.status === 'available'
            ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25'
            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
        }`}
        aria-disabled={number.status !== 'available'}
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Receive SMS
      </Link>
    </article>
  );
}

/**
 * Numbers Grid Component
 * Displays filterable grid of free SMS numbers
 */
interface NumbersGridProps {
  numbers: FreeNumber[];
}

export default function NumbersGrid({ numbers }: NumbersGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState<number>(12);

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
   * Numbers to display (with load more)
   */
  const displayedNumbers = filteredNumbers.slice(0, visibleCount);
  const hasMore = filteredNumbers.length > visibleCount;

  /**
   * Handle filter change
   */
  const handleFilterChange = (code: string) => {
    setActiveFilter(code);
    setVisibleCount(12); // Reset visible count when filter changes
  };

  /**
   * Handle load more
   */
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <>
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
        Showing {displayedNumbers.length} of {filteredNumbers.length} numbers
        {activeFilter !== 'ALL' && (
          <span> in {COUNTRY_FILTERS.find((f) => f.code === activeFilter)?.name}</span>
        )}
      </p>

      {/* Numbers Grid */}
      {displayedNumbers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedNumbers.map((number) => (
            <NumberCard key={number.id} number={number} />
          ))}
        </div>
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
          <button onClick={handleLoadMore} className="btn-secondary">
            Load More Numbers
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
