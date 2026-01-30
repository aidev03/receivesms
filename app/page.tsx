import {
  Header,
  Footer,
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  UseCasesSection,
  SEOContentSection,
  FAQSection,
  CTASection,
  NumbersPreviewSection,
} from '@/components';
import { faqData } from '@/lib/faq-data';

/**
 * JSON-LD Structured Data for FAQ
 * Helps search engines understand FAQ content
 * Enables rich snippets in search results
 */
function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * JSON-LD Structured Data for Organization
 * Provides business information to search engines
 */
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SMS Verify Online',
    url: 'https://receivesms.it.com',
    logo: 'https://receivesms.it.com/logo.png',
    description: 'Free online SMS verification service. Receive SMS online for WhatsApp, Telegram, Google, and more.',
    sameAs: [
      'https://twitter.com/smsverifyonline',
      'https://github.com/smsverifyonline',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };
}

/**
 * JSON-LD Structured Data for WebSite
 * Enables sitelinks search box in Google
 */
function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SMS Verify Online',
    url: 'https://receivesms.it.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://receivesms.it.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * JSON-LD Structured Data for Service
 * Describes the SMS verification service
 */
function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Online SMS Verification Service',
    description: 'Receive SMS online for free. Get temporary phone numbers from 50+ countries for instant SMS verification without registration.',
    provider: {
      '@type': 'Organization',
      name: 'SMS Verify Online',
    },
    serviceType: 'SMS Verification',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Completely free phone number for verification',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SMS Verification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Receive SMS Online Free',
            description: 'Registration free - receive SMS online in seconds from 50+ countries',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rent Temporary Phone Number',
            description: 'Worldwide GEO phone numbers for SMS verification',
          },
        },
      ],
    },
  };
}

/**
 * Home Page Component
 * Main landing page with all SEO-optimized sections
 * Server Component for optimal performance
 */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema()),
        }}
      />

      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section - Above the fold */}
        <HeroSection />

        {/* Numbers Preview - Show available numbers */}
        <NumbersPreviewSection />

        {/* How It Works - Process explanation */}
        <HowItWorksSection />

        {/* Features/Why Choose Us */}
        <FeaturesSection />

        {/* Use Cases - Platform compatibility */}
        <UseCasesSection />

        {/* SEO Content Block - Keyword-rich content */}
        <SEOContentSection />

        {/* FAQ Section - Common questions */}
        <FAQSection />

        {/* CTA Section - Final conversion push */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
