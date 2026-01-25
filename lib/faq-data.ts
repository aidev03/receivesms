/**
 * FAQ Data - SEO optimized questions and answers
 * Separated into its own file to be usable in both server and client components
 * This data is used for JSON-LD structured data and the FAQ accordion
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'How do I receive SMS online for free?',
    answer: 'Simply visit our website, browse the list of available phone numbers, and select one. Use that number to receive SMS verification codes from any service. The messages will appear on the number\'s page in real-time. No registration or payment is required for our free service.',
  },
  {
    question: 'Is it safe to use temporary phone numbers for verification?',
    answer: 'Yes, using temporary phone numbers is safe and actually enhances your privacy. Since these numbers are not linked to your personal identity, you avoid exposing your real phone number to third-party services. However, note that public numbers should not be used for sensitive accounts like banking.',
  },
  {
    question: 'Which apps and services work with your SMS verification service?',
    answer: 'Our temporary phone numbers work with most major platforms including WhatsApp, Telegram, Google, Facebook, Twitter, Instagram, Uber, Airbnb, dating apps, and thousands of other services. Some premium services may require private numbers for better success rates.',
  },
  {
    question: 'How fast will I receive the SMS verification code?',
    answer: 'SMS messages typically arrive within 5-30 seconds after being sent. Our real-time system displays messages as soon as they\'re received. If a message doesn\'t arrive, try refreshing the page or selecting a different number.',
  },
  {
    question: 'Do I need to register to use this service?',
    answer: 'No, you don\'t need to create an account or register to use our free SMS receiver service. Simply visit the website, choose a number, and start receiving messages immediately. We offer premium options for users who need private numbers or additional features.',
  },
];
