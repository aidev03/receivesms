import { Metadata } from 'next';

/**
 * Contact Page Metadata
 * SEO-optimized metadata for the contact page
 * Unique title (50-60 chars), unique description (140-160 chars)
 */
export const metadata: Metadata = {
  title: 'Contact Us - SMS Verify Online Support',
  description: 'Get in touch with SMS Verify Online. Contact us for questions about our free temporary phone numbers, SMS verification service, or technical support.',
  keywords: [
    'contact sms verify',
    'sms verification support',
    'temporary phone number help',
    'free sms numbers contact',
  ],
  openGraph: {
    title: 'Contact SMS Verify Online - Get Support',
    description: 'Have questions about our free SMS verification service? Contact our support team for help with temporary phone numbers.',
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - SMS Verify Online',
    description: 'Get in touch with SMS Verify Online for support and questions.',
  },
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Contact Page Layout
 * Provides metadata wrapper for the client-side contact page
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact SMS Verify Online',
            description: 'Contact page for SMS Verify Online - free temporary phone numbers for SMS verification.',
            url: 'https://receivesms.it.com/contact/',
            mainEntity: {
              '@id': 'https://receivesms.it.com/#organization',
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://receivesms.it.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact Us',
                item: 'https://receivesms.it.com/contact/',
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}
