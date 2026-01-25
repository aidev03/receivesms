/**
 * Numbers API - Cloudflare Pages Functions
 * 
 * Handles phone number-related operations:
 * - List all available numbers
 * - Get numbers by country
 * - Get number details
 */

interface Env {
  DB: D1Database;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T>(): Promise<{ results: T[] }>;
}

interface PhoneNumber {
  id: string;
  number: string;
  country: string;
  countryName: string;
  status: 'active' | 'inactive' | 'busy';
  lastMessage: string | null;
  messageCount: number;
  createdAt: string;
}

/**
 * GET /api/numbers
 * Returns available phone numbers with optional country filter
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const country = url.searchParams.get('country');
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=60',
  };

  try {
    // Mock data - Replace with actual D1 database queries
    const mockNumbers: PhoneNumber[] = [
      {
        id: 'us-1',
        number: '+1 (555) 234-5678',
        country: 'US',
        countryName: 'United States',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 156,
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 'us-2',
        number: '+1 (555) 345-6789',
        country: 'US',
        countryName: 'United States',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 89,
        createdAt: '2024-01-02T00:00:00Z',
      },
      {
        id: 'uk-1',
        number: '+44 7700 900123',
        country: 'GB',
        countryName: 'United Kingdom',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 234,
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 'de-1',
        number: '+49 151 23456789',
        country: 'DE',
        countryName: 'Germany',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 67,
        createdAt: '2024-01-03T00:00:00Z',
      },
      {
        id: 'ca-1',
        number: '+1 (604) 555-0123',
        country: 'CA',
        countryName: 'Canada',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 45,
        createdAt: '2024-01-04T00:00:00Z',
      },
      {
        id: 'fr-1',
        number: '+33 6 12 34 56 78',
        country: 'FR',
        countryName: 'France',
        status: 'active',
        lastMessage: new Date().toISOString(),
        messageCount: 123,
        createdAt: '2024-01-05T00:00:00Z',
      },
    ];

    // Filter by country if specified
    let filteredNumbers = country
      ? mockNumbers.filter((n) => n.country === country.toUpperCase())
      : mockNumbers;

    // Pagination
    const startIndex = (page - 1) * limit;
    const paginatedNumbers = filteredNumbers.slice(startIndex, startIndex + limit);

    // Get unique countries for filter dropdown
    const countries = [...new Set(mockNumbers.map((n) => n.country))].map((code) => ({
      code,
      name: mockNumbers.find((n) => n.country === code)?.countryName,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          numbers: paginatedNumbers,
          pagination: {
            page,
            limit,
            total: filteredNumbers.length,
            totalPages: Math.ceil(filteredNumbers.length / limit),
          },
          countries,
        },
      }),
      { headers }
    );
  } catch (error) {
    console.error('Numbers API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch numbers',
      }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
