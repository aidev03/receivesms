import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Privacy Policy Page - Required for Google AdSense Approval
 * Comprehensive privacy policy covering data collection, cookies, and third-party services
 */
export const metadata: Metadata = {
  title: 'Privacy Policy – SMS Verify Online',
  description: 'Read our privacy policy to understand how SMS Verify Online collects, uses, and protects your personal information when using our free SMS verification service.',
  keywords: ['privacy policy', 'data protection', 'cookies policy', 'sms verification privacy'],
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy – SMS Verify Online',
    description: 'Our commitment to protecting your privacy while providing free SMS verification services.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: 'https://receivesms.it.com/privacy-policy/',
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
                <li className="text-primary-600 font-medium">Privacy Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Privacy Policy
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
                  {/* Introduction */}
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Welcome to SMS Verify Online (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting 
                    your privacy and ensuring you have a positive experience on our website. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you visit our 
                    website and use our free SMS verification services.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                    policy, please do not access the site. By using our services, you consent to our collection, 
                    use, and disclosure of your information as described in this Privacy Policy.
                  </p>

                  {/* Information We Collect */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Automatically Collected Information</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device 
                    and your visit. This information may include:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>IP address (anonymized where possible)</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring website</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Date and time of your visit</li>
                    <li>Device information (screen resolution, device type)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Information You Provide</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our core SMS verification service does not require registration or the provision of personal 
                    information. However, if you contact us through our contact form, you may voluntarily provide 
                    us with your name and email address for communication purposes only.
                  </p>

                  {/* Cookies and Tracking */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold 
                    certain information. Cookies are files with a small amount of data that are stored on your device.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Google AdSense and DoubleClick Cookies</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We use Google AdSense to display advertisements on our website. Google AdSense uses cookies, 
                    including the DoubleClick cookie, to serve ads based on your prior visits to our website or 
                    other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads 
                    to you based on your visit to our site and/or other sites on the Internet.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    You may opt out of personalized advertising by visiting{' '}
                    <a 
                      href="https://www.google.com/settings/ads" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Google Ads Settings
                    </a>. Additionally, you can opt out of third-party vendor cookies by visiting the{' '}
                    <a 
                      href="https://optout.networkadvertising.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Network Advertising Initiative opt-out page
                    </a>.
                  </p>

                  {/* Third-Party Services */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Third-Party Services</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We may employ third-party companies and individuals to facilitate our service, provide 
                    services on our behalf, perform service-related functions, or assist us in analyzing how 
                    our service is used. These third parties may include:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                    <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                    <li><strong>Cloudflare:</strong> For content delivery and security</li>
                  </ul>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    These third parties have access to limited information only to perform specific tasks on our 
                    behalf and are obligated not to disclose or use it for any other purpose.
                  </p>

                  {/* How We Use Your Information */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>To provide and maintain our service</li>
                    <li>To improve and optimize our website</li>
                    <li>To understand how users interact with our service</li>
                    <li>To detect, prevent, and address technical issues</li>
                    <li>To respond to your inquiries and support requests</li>
                    <li>To display relevant advertisements</li>
                  </ul>

                  {/* Data Retention */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Data Retention</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We retain automatically collected information for analytics purposes for a period of 26 months. 
                    SMS messages displayed on our platform are temporary and are automatically deleted after a 
                    short period. We do not permanently store SMS message content.
                  </p>

                  {/* Your Rights */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Your Privacy Rights</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>The right to access the personal information we hold about you</li>
                    <li>The right to request correction of inaccurate information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to opt out of marketing communications</li>
                    <li>The right to withdraw consent at any time</li>
                  </ul>

                  {/* Children's Privacy */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Children&apos;s Privacy</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our service is not directed to anyone under the age of 13. We do not knowingly collect 
                    personally identifiable information from children under 13. If you are a parent or guardian 
                    and you are aware that your child has provided us with personal information, please contact us.
                  </p>

                  {/* Security */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Security</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>

                  {/* Changes to This Policy */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are 
                    advised to review this Privacy Policy periodically for any changes.
                  </p>

                  {/* Contact Us */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Through our <Link href="/contact" className="text-primary-600 hover:underline">Contact Page</Link></li>
                    <li>Email: privacy@receivesms.it.com</li>
                  </ul>
                </div>
              </article>

              {/* Related Links */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/terms-of-service" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service →
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
