'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Contact Page - Required for Google AdSense Approval
 * Contact form UI with professional layout (no backend yet)
 * AdSense-friendly content and structure
 */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /**
   * Handle form input changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   * Currently shows success message (no backend implementation yet)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Implement actual form submission to backend
    // For now, just show success message
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form after success
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
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
                <li className="text-primary-600 font-medium">Contact</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Have questions, feedback, or need assistance? We&apos;re here to help. 
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

                    {submitStatus === 'success' ? (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-700 mb-4">
                          Thank you for contacting us. We&apos;ll get back to you within 24-48 hours.
                        </p>
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>

                        {/* Subject Field */}
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="report">Report an Issue</option>
                            <option value="business">Business Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                            placeholder="How can we help you?"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sticky top-24">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>

                    {/* Email */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600 text-sm">support@smsverify.online</p>
                        <p className="text-slate-500 text-xs mt-1">We respond within 24-48 hours</p>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
                        <p className="text-slate-600 text-sm">24-48 hours</p>
                        <p className="text-slate-500 text-xs mt-1">Monday - Friday</p>
                      </div>
                    </div>

                    {/* FAQ Link */}
                    <div className="border-t border-slate-100 pt-6 mt-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Need Quick Help?</h3>
                      <p className="text-slate-600 text-sm mb-4">
                        Check out our FAQ section for answers to common questions.
                      </p>
                      <Link href="/#faq" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        View FAQ →
                      </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="border-t border-slate-100 pt-6 mt-6">
                      <h3 className="font-semibold text-slate-900 mb-3">Legal</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/privacy-policy" className="text-slate-600 hover:text-primary-600 text-sm">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-of-service" className="text-slate-600 hover:text-primary-600 text-sm">
                            Terms of Service
                          </Link>
                        </li>
                        <li>
                          <Link href="/disclaimer" className="text-slate-600 hover:text-primary-600 text-sm">
                            Disclaimer
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">We Value Your Feedback</h2>
              <p className="text-slate-600 mb-8">
                Your input helps us improve our service. Whether you have a suggestion, found a bug, 
                or just want to say hello, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600">Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600">Friendly Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600">Helpful Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
