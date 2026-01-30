import { MetadataRoute } from 'next';

/**
 * Robots.txt Configuration
 * Controls search engine crawler behavior
 * Optimized for SEO while protecting sensitive routes
 */

// Required for static export
export const dynamic = 'force-static';

const BASE_URL = 'https://receivesms.it.com'; // Update with actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers by default
        userAgent: '*',
        allow: '/',
        disallow: [
          // Protect API routes
          '/api/',
          // Protect admin/dashboard areas
          '/admin/',
          '/dashboard/',
          // Protect authentication routes
          '/auth/',
          '/login/',
          '/register/',
          '/sign-in/',
          '/sign-up/',
          '/forgot-password/',
          '/reset-password/',
          '/verify-email/',
          // Protect internal paths
          '/_next/',
          '/static/',
          // Protect search and filter pages to avoid duplicate content
          '/search',
          '/*?*', // Query parameters
        ],
      },
      {
        // Special rules for Googlebot
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/auth/'],
      },
      {
        // Block bad bots (optional - add known bad bots)
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],
    // Reference to sitemap
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Optional: Add crawl delay for rate limiting
    // Note: Only some crawlers respect this
    host: BASE_URL,
  };
}
