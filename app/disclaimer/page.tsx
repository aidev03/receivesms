import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Disclaimer Page - Required for Google AdSense Approval
 * Important disclaimers about service limitations and user responsibilities
 */
export const metadata: Metadata = {
  title: 'Disclaimer – SMS Verify Online',
  description: 'Important disclaimers regarding the use of SMS Verify Online free SMS verification service. Understand the limitations and your responsibilities.',
  keywords: ['disclaimer', 'legal disclaimer', 'service limitations', 'sms verification disclaimer'],
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer – SMS Verify Online',
    description: 'Important disclaimers and limitations for our free SMS verification service.',
    type: 'website',
  },
};

export default function DisclaimerPage() {
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
        item: 'https://smsverify.online/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Disclaimer',
        item: 'https://smsverify.online/disclaimer/',
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
                <li className="text-primary-600 font-medium">Disclaimer</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Disclaimer
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
                  {/* General Disclaimer */}
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">General Disclaimer</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The information and services provided by SMS Verify Online are for general informational 
                    and educational purposes only. All information on our website is provided in good faith, 
                    however, we make no representation or warranty of any kind, express or implied, regarding 
                    the accuracy, adequacy, validity, reliability, availability, or completeness of any 
                    information or service on the site.
                  </p>

                  {/* Educational Purpose */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Educational and Informational Use</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our service is provided for educational and informational purposes. The temporary phone 
                    numbers available on our platform are intended to demonstrate how SMS verification works 
                    and to provide a convenient solution for users who wish to protect their privacy when 
                    signing up for online services. Users are encouraged to use this service responsibly 
                    and in accordance with all applicable laws and regulations.
                  </p>

                  {/* No Guarantee of Delivery */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">No Guarantee of Message Delivery</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We do not guarantee that SMS messages will be delivered to our phone numbers. Message 
                    delivery depends on various factors beyond our control, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>The sender&apos;s service provider and their policies</li>
                    <li>Network congestion and technical issues</li>
                    <li>Geographic restrictions and carrier limitations</li>
                    <li>Rate limiting or blocking by third-party services</li>
                    <li>Number availability and active status</li>
                  </ul>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Some online services may detect and block messages to virtual phone numbers. We are not 
                    responsible for any inconvenience caused by failed message delivery.
                  </p>

                  {/* No Affiliation */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">No Affiliation with Third-Party Services</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    SMS Verify Online is an independent service and is NOT affiliated with, endorsed by, 
                    or sponsored by any of the third-party services mentioned on our website. All trademarks, 
                    service marks, trade names, and logos mentioned on our site belong to their respective 
                    owners. References to services such as WhatsApp, Telegram, Google, Facebook, Twitter, 
                    and others are made solely for informational purposes to describe the compatibility of 
                    our service.
                  </p>

                  {/* Use at Own Risk */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Use at Your Own Risk</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">Important Warning</h3>
                        <p className="text-yellow-700 text-sm leading-relaxed">
                          You use our service entirely at your own risk. We strongly advise against using 
                          our temporary phone numbers for sensitive accounts such as banking, financial 
                          services, cryptocurrency exchanges, government services, or any account containing 
                          personal, financial, or confidential information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    By using our service, you acknowledge that you understand the risks associated with 
                    using shared public phone numbers and accept full responsibility for any consequences 
                    that may arise from your use of our service.
                  </p>

                  {/* Public Nature of Numbers */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Public Nature of Phone Numbers</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    All phone numbers provided on our platform are shared public numbers. This means that 
                    any message sent to these numbers can be viewed by anyone visiting our website. Do not 
                    use these numbers if you require privacy or confidentiality of your messages. We are 
                    not responsible for any privacy breaches that may occur as a result of using our public 
                    phone numbers.
                  </p>

                  {/* No Professional Advice */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">No Professional Advice</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The content on our website does not constitute professional advice of any kind. If you 
                    have concerns about online privacy, security, or legal matters, you should consult with 
                    appropriate professionals. Our service is not a substitute for professional advice or 
                    secure communication methods.
                  </p>

                  {/* External Links */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">External Links Disclaimer</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our website may contain links to external websites that are not provided or maintained 
                    by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any 
                    information on these external websites. The inclusion of any links does not necessarily 
                    imply a recommendation or endorsement of the views expressed within them.
                  </p>

                  {/* Advertisement Disclaimer */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Advertisement Disclaimer</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Our website displays advertisements provided by third-party advertising networks, 
                    including Google AdSense. These advertisements are not endorsements of any products 
                    or services. The appearance of advertisements on our website does not constitute an 
                    endorsement, guarantee, warranty, or recommendation by us. We are not responsible for 
                    the content or accuracy of any advertisements displayed.
                  </p>

                  {/* Errors and Omissions */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Errors and Omissions</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    While we strive to keep the information on our website accurate and up-to-date, we 
                    make no representations or warranties about the completeness, accuracy, reliability, 
                    suitability, or availability of the website or the information, products, services, 
                    or related graphics contained on the website for any purpose. Any reliance you place 
                    on such information is strictly at your own risk.
                  </p>

                  {/* Changes to Disclaimer */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Changes to This Disclaimer</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    We reserve the right to update or change this disclaimer at any time. Any changes will 
                    be posted on this page with an updated revision date. Your continued use of our website 
                    after any changes to this disclaimer constitutes your acceptance of such changes.
                  </p>

                  {/* Contact */}
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    If you have any questions about this Disclaimer, please contact us:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                    <li>Through our <Link href="/contact" className="text-primary-600 hover:underline">Contact Page</Link></li>
                    <li>Email: info@smsverify.online</li>
                  </ul>
                </div>
              </article>

              {/* Related Links */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy →
                </Link>
                <Link href="/terms-of-service" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service →
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
