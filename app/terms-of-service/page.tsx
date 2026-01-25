import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Terms of Service Page - Required for Google AdSense Approval
 * Comprehensive terms covering service usage, limitations, and legal disclaimers
 */
export const metadata: Metadata = {
  title: 'Terms of Service – SMS Verify Online',
  description: 'Read our terms of service to understand the rules and guidelines for using SMS Verify Online free SMS verification service.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'sms verification terms'],
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service – SMS Verify Online',
    description: 'Terms and conditions for using our free SMS verification service.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 25, 2026';

  // BreadcrumbList Schema
  const breadcrumbSchema = {
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
        name: 'Terms of Service',
        item: 'https://receivesms.it.com/terms-of-service/',
      },
    ],
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Header />
      <main id="main-content" className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-12 md:py-16">
          <div className="container-custom">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-600 font-medium">Terms of Service</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-600">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
                <div className="prose prose-slate max-w-none">
                  {/* Agreement */}
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Welcome to SMS Verify Online. These Terms of Service (&quot;Terms&quot;) govern your access to and use 
                    of our website and services. By accessing or using our service, you agree to be bound by these 
                    Terms. If you disagree with any part of these terms, you may not access the service.
                  </p>

                  {/* Service Description */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Description of Service</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    SMS Verify Online provides a free online service that allows users to receive SMS messages 
                    using temporary virtual phone numbers. Our service is designed for:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Receiving SMS verification codes for online account registration</li>
                    <li>Testing applications that require SMS functionality</li>
                    <li>Protecting your personal phone number from spam</li>
                    <li>Temporary communication needs</li>
                  </ul>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The phone numbers provided on our platform are shared public numbers. All messages received 
                    on these numbers are publicly visible to all users of our service.
                  </p>

                  {/* Temporary Numbers Limitation */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Temporary Numbers Limitation</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Please understand the following important limitations regarding our temporary phone numbers:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Numbers are shared among all users – messages are publicly visible</li>
                    <li>Numbers may be recycled or changed without prior notice</li>
                    <li>Message retention is temporary – messages are automatically deleted</li>
                    <li>We do not guarantee that specific numbers will remain available</li>
                    <li>Some services may block or refuse to send to our numbers</li>
                    <li>Numbers cannot be used for two-factor authentication on sensitive accounts</li>
                  </ul>

                  {/* Acceptable Use */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptable Use Policy</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    By using our service, you agree NOT to use it for:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Any illegal or unauthorized purpose</li>
                    <li>Fraud, identity theft, or impersonation</li>
                    <li>Harassment, spam, or abuse of any kind</li>
                    <li>Bypassing security measures or account bans</li>
                    <li>Activities that violate any applicable laws or regulations</li>
                    <li>Accessing accounts that belong to others without authorization</li>
                    <li>Banking, financial services, or cryptocurrency account verification</li>
                    <li>Any activity that could cause harm to individuals or organizations</li>
                  </ul>

                  {/* Abuse Prevention */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Abuse Prevention</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We reserve the right to monitor usage of our service to prevent abuse. We may implement 
                    rate limiting, captchas, or other measures to prevent automated abuse of our service. 
                    Users who violate our acceptable use policy may be blocked from accessing our service 
                    without prior notice.
                  </p>

                  {/* No Liability */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMS VERIFY ONLINE SHALL NOT BE LIABLE FOR:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                    <li>Damages resulting from unauthorized access to your accounts</li>
                    <li>Messages not received or delayed</li>
                    <li>Service interruptions or downtime</li>
                    <li>Actions of third parties using our service</li>
                    <li>Any consequences of using our numbers for sensitive accounts</li>
                  </ul>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, 
                    either express or implied.
                  </p>

                  {/* Service Availability */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Service Availability</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We strive to maintain high availability of our service, but we do not guarantee uninterrupted 
                    access. The service may be temporarily unavailable due to maintenance, updates, or circumstances 
                    beyond our control. We reserve the right to modify, suspend, or discontinue any part of our 
                    service at any time without prior notice.
                  </p>

                  {/* Intellectual Property */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Intellectual Property</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The service and its original content (excluding content provided by users), features, and 
                    functionality are and will remain the exclusive property of SMS Verify Online. Our service 
                    is protected by copyright, trademark, and other laws. You may not copy, modify, distribute, 
                    sell, or lease any part of our service without our prior written consent.
                  </p>

                  {/* Third-Party Links */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Third-Party Links and Services</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our service may contain links to third-party websites or services that are not owned or 
                    controlled by us. We have no control over, and assume no responsibility for, the content, 
                    privacy policies, or practices of any third-party websites or services. We do not endorse 
                    any third-party websites or services.
                  </p>

                  {/* Indemnification */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Indemnification</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless SMS Verify Online and its officers, 
                    directors, employees, and agents from and against any claims, damages, obligations, 
                    losses, liabilities, costs, or debt arising from your use of the service or your 
                    violation of these Terms.
                  </p>

                  {/* Governing Law */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Governing Law</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    These Terms shall be governed and construed in accordance with applicable laws, without 
                    regard to conflict of law provisions. Our failure to enforce any right or provision of 
                    these Terms will not be considered a waiver of those rights.
                  </p>

                  {/* Changes to Terms */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to Terms</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                    If a revision is material, we will provide at least 30 days notice prior to any new terms 
                    taking effect. What constitutes a material change will be determined at our sole discretion. 
                    By continuing to access or use our service after those revisions become effective, you agree 
                    to be bound by the revised terms.
                  </p>

                  {/* Contact */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Through our <Link href="/contact" className="text-primary-600 hover:underline">Contact Page</Link></li>
                    <li>Email: legal@receivesms.it.com</li>
                  </ul>
                </div>
              </article>

              {/* Related Links */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy →
                </Link>
                <Link href="/disclaimer" className="text-primary-600 hover:text-primary-700 font-medium">
                  Disclaimer →
                </Link>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
