/**
 * SMS API - Cloudflare Pages Functions
 * 
 * This is a placeholder for the SMS API endpoint.
 * In production, this will handle:
 * - Fetching available phone numbers
 * - Retrieving SMS messages for a number
 * - Real-time message updates
 * 
 * Cloudflare Pages Functions run at the edge for low latency.
 */

// Type definitions for Cloudflare Pages Functions
interface Env {
  // Cloudflare D1 Database binding (placeholder)
  DB: D1Database;
  // Environment variables
  API_SECRET?: string;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T>(column?: string): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T>(): Promise<D1Result<T>>;
}

interface D1Result<T = unknown> {
  results?: T[];
  success: boolean;
  error?: string;
  meta?: object;
}

interface D1ExecResult {
  count: number;
  duration: number;
}

/**
 * GET /api/sms
 * Returns list of available phone numbers or messages for a specific number
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const numberId = url.searchParams.get('number');

  // CORS headers for API responses
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=30', // Cache for 30 seconds
  };

  try {
    if (numberId) {
      // Return messages for a specific number
      // TODO: Implement actual database query
      const mockMessages = [
        {
          id: '1',
          from: '+1234567890',
          text: 'Your verification code is 123456',
          timestamp: new Date().toISOString(),
        },
        {
          id: '2',
          from: '+0987654321',
          text: 'Your OTP is 654321. Valid for 5 minutes.',
          timestamp: new Date(Date.now() - 60000).toISOString(),
        },
      ];

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            number: numberId,
            messages: mockMessages,
          },
        }),
        { headers }
      );
    } else {
      // Return list of available numbers
      // TODO: Implement actual database query
      const mockNumbers = [
        {
          id: '1',
          number: '+1 (555) 123-4567',
          country: 'US',
          countryName: 'United States',
          status: 'active',
          messageCount: 42,
        },
        {
          id: '2',
          number: '+44 7911 123456',
          country: 'GB',
          countryName: 'United Kingdom',
          status: 'active',
          messageCount: 28,
        },
        {
          id: '3',
          number: '+49 151 12345678',
          country: 'DE',
          countryName: 'Germany',
          status: 'active',
          messageCount: 15,
        },
      ];

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            numbers: mockNumbers,
            total: mockNumbers.length,
          },
        }),
        { headers }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      { 
        status: 500,
        headers,
      }
    );
  }
};

/**
 * OPTIONS handler for CORS preflight requests
 */
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};
