import type { Metadata, Viewport } from 'next';
import './globals.css';

/**
 * Site-wide configuration constants
 * Centralized for easy updates and consistency
 */
const SITE_CONFIG = {
  name: 'SMS Verify Online',
  url: 'https://receivesms.it.com', // Update with actual domain
  description: 'Receive SMS online for free without registration. Get temporary phone numbers from 50+ countries for instant SMS verification. No signup required - completely free and private.',
  keywords: [
    'receive sms online',
    'temporary phone number',
    'rent temporary phone number',
    'free sms verification',
    'receive sms online free',
    'virtual phone number',
    'disposable phone number',
    'free phone number for verification',
    'sms verification service',
    'online phone number',
    'receive sms for free',
    'worldwide phone numbers',
    'registration free sms',
    'sms reception online',
    'keep privacy sms online',
  ],
  author: 'SMS Verify Online',
  twitterHandle: '@smsverifyonline',
};

/**
 * Viewport configuration for optimal mobile experience
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

/**
 * Global metadata configuration using Next.js Metadata API
 * This provides SEO optimization across all pages
 */
export const metadata: Metadata = {
  // Base metadata
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Receive SMS Online – Free Temporary Phone Numbers | SMS Verify',
    template: '%s | Receive SMS Online Free',
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  
  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Receive SMS Online for Verification – Free & Instant',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SMS Verify Online - Receive SMS for Verification',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Receive SMS Online for Verification – Free & Instant',
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: ['/og-image.png'],
  },

  // Additional metadata
  category: 'technology',
  classification: 'SMS Verification Service',
  
  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Alternate languages (add when supporting multiple languages)
  alternates: {
    canonical: SITE_CONFIG.url,
    // languages: {
    //   'en-US': '/en-US',
    //   'es-ES': '/es',
    // },
  },

  // Icons configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // App-specific metadata
  applicationName: SITE_CONFIG.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_CONFIG.name,
  },

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/**
 * Root Layout Component
 * Wraps all pages with common structure, fonts, and global styles
 * Includes global JSON-LD schemas for SEO
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://receivesms.it.com/#organization',
    name: 'SMS Verify Online',
    url: 'https://receivesms.it.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://receivesms.it.com/logo.png',
      width: 512,
      height: 512,
    },
    description: 'Free online SMS verification service. Receive SMS online for WhatsApp, Telegram, Google, and more without registration.',
    sameAs: [
      'https://twitter.com/smsverifyonline',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
      url: 'https://receivesms.it.com/contact',
    },
  };

  // Global WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://receivesms.it.com/#website',
    name: 'SMS Verify Online',
    url: 'https://receivesms.it.com',
    publisher: {
      '@id': 'https://receivesms.it.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://receivesms.it.com/free-sms-numbers?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load Inter font for clean typography */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* DNS prefetch for analytics (update with your analytics domain) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QDL21G6MHR" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QDL21G6MHR');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v78gi8qdqc");
            `,
          }}
        />

        {/* Global JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased" suppressHydrationWarning>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
