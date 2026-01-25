import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NumbersGrid, { FreeNumber } from '@/components/NumbersGrid';

/**
 * SEO Metadata for Free SMS Numbers page
 * Optimized for search engines with target keywords
 */
export const metadata: Metadata = {
  title: 'Free Temporary Phone Numbers - Receive SMS Verification Codes Online',
  description: 'Use our free temporary phone numbers to receive SMS verification codes online. Our free numbers are non-VoIP and work with any service. Get a burner phone number for free SMS verification!',
  keywords: [
    'temporary phone number',
    'burner phone number',
    'temp phone number',
    'temporary phone number for verification',
    'temp number',
    'free burner number',
    'temp sms',
    'free temporary phone number',
    'burner phone number free',
    'disposable phone number',
    'temporary cell phone',
    'temp sms number',
    'temp number for otp',
    'temp phone',
    'temp number for whatsapp',
    'temporary number for verification',
    'temp mobile number',
    'free burner number for verification',
    'temporary mobile number',
    'temporary phone number online',
    'temp number for verification',
    'temp phone number for otp',
    'temp mobile number for otp',
    'temporary virtual phone number',
    'temporary phone number for whatsapp',
    'free online temporary phone number',
    'temporary phone number for gmail verification',
    'burner phone number for verification',
    'temporary phone number sms',
    'free temp phone number',
    'receive sms online free',
    'sms verification free',
    'non-voip phone number',
  ],
  openGraph: {
    title: 'Free Temporary Phone Numbers - Receive SMS Online',
    description: 'Use our free temporary phone numbers to receive SMS verification codes online. Non-VoIP numbers that work with any service. No registration required!',
    type: 'website',
    url: '/free-sms-numbers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Temporary Phone Numbers - Receive SMS Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Temporary Phone Numbers - Burner Numbers for SMS Verification',
    description: 'Get free temp phone numbers to receive SMS verification codes. Non-VoIP, works with WhatsApp, Telegram, Google & more!',
  },
  alternates: {
    canonical: '/free-sms-numbers',
  },
};

/**
 * Phone numbers data for free SMS verification
 * Real numbers available for SMS verification
 */
const mockFreeNumbers: FreeNumber[] = [
  // United States Numbers
  { id: 'us-15415805923', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (541) 580-5923', status: 'available', lastMessage: '2 min ago', messageCount: 1247 },
  { id: 'us-17373786349', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (737) 378-6349', status: 'available', lastMessage: '1 min ago', messageCount: 2103 },
  { id: 'us-16574569699', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (657) 456-9699', status: 'available', lastMessage: '3 min ago', messageCount: 1876 },
  { id: 'us-14134498280', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (413) 449-8280', status: 'available', lastMessage: '5 min ago', messageCount: 945 },
  { id: 'us-17404619427', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (740) 461-9427', status: 'available', lastMessage: '4 min ago', messageCount: 1532 },
  { id: 'us-12152688872', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 268-8872', status: 'available', lastMessage: '2 min ago', messageCount: 876 },
  { id: 'us-12152409264', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 240-9264', status: 'available', lastMessage: '6 min ago', messageCount: 654 },
  { id: 'us-12155527184', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 552-7184', status: 'available', lastMessage: '8 min ago', messageCount: 432 },
  { id: 'us-12156695708', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 669-5708', status: 'available', lastMessage: '3 min ago', messageCount: 789 },
  { id: 'us-12152149274', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 214-9274', status: 'available', lastMessage: '4 min ago', messageCount: 654 },
  { id: 'us-16465190037', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (646) 519-0037', status: 'available', lastMessage: '2 min ago', messageCount: 892 },
  { id: 'us-12155013109', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 501-3109', status: 'available', lastMessage: '5 min ago', messageCount: 1456 },
  { id: 'us-12153308972', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 330-8972', status: 'available', lastMessage: '3 min ago', messageCount: 678 },
  { id: 'us-12155945135', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 594-5135', status: 'available', lastMessage: '1 min ago', messageCount: 543 },
  { id: 'us-12155014450', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 501-4450', status: 'available', lastMessage: '4 min ago', messageCount: 765 },
  { id: 'us-16465105581', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (646) 510-5581', status: 'available', lastMessage: '6 min ago', messageCount: 432 },
  { id: 'us-12156029761', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 602-9761', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'us-12156029544', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 602-9544', status: 'available', lastMessage: '11 min ago', messageCount: 234 },
  { id: 'us-12155019866', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 501-9866', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'us-12155941987', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 594-1987', status: 'available', lastMessage: '3 min ago', messageCount: 298 },
  { id: 'us-12155526021', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 552-6021', status: 'available', lastMessage: '7 min ago', messageCount: 512 },
  { id: 'us-12155549137', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (215) 554-9137', status: 'available', lastMessage: '2 min ago', messageCount: 634 },
  // United Kingdom Numbers
  { id: 'uk-447417477095', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7417 477095', status: 'available', lastMessage: '2 min ago', messageCount: 892 },
  { id: 'uk-447405671467', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7405 671467', status: 'available', lastMessage: '5 min ago', messageCount: 1456 },
  { id: 'uk-447459603196', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7459 603196', status: 'available', lastMessage: '3 min ago', messageCount: 678 },
  { id: 'uk-447424061435', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7424 061435', status: 'available', lastMessage: '1 min ago', messageCount: 543 },
  { id: 'uk-447438478125', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7438 478125', status: 'available', lastMessage: '4 min ago', messageCount: 765 },
  { id: 'uk-447440426577', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7440 426577', status: 'available', lastMessage: '6 min ago', messageCount: 432 },
  { id: 'uk-447917327980', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7917 327980', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'uk-447979136852', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7979 136852', status: 'available', lastMessage: '11 min ago', messageCount: 234 },
  { id: 'uk-447308282680', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7308 282680', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'uk-447920662802', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7920 662802', status: 'available', lastMessage: '3 min ago', messageCount: 298 },
  { id: 'uk-447474997832', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7474 997832', status: 'available', lastMessage: '7 min ago', messageCount: 512 },
  { id: 'uk-447465825598', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7465 825598', status: 'available', lastMessage: '2 min ago', messageCount: 634 },
  { id: 'uk-447721288027', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7721 288027', status: 'available', lastMessage: '4 min ago', messageCount: 421 },
  { id: 'uk-447423770930', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7423 770930', status: 'available', lastMessage: '6 min ago', messageCount: 445 },
  { id: 'uk-447437768442', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7437 768442', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'uk-447723476354', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7723 476354', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'uk-447449192262', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7449 192262', status: 'available', lastMessage: '5 min ago', messageCount: 234 },
  { id: 'uk-447428307875', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7428 307875', status: 'available', lastMessage: '4 min ago', messageCount: 387 },
  { id: 'uk-447399506653', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7399 506653', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'uk-44724042617', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7240 42617', status: 'available', lastMessage: '5 min ago', messageCount: 1432 },
  // Greece Numbers
  { id: 'gr-306974913102', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 491 3102', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'gr-306978209848', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 820 9848', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'gr-306970461358', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 046 1358', status: 'available', lastMessage: '10 min ago', messageCount: 123 },
  { id: 'gr-306976910209', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 691 0209', status: 'available', lastMessage: '4 min ago', messageCount: 523 },
  { id: 'gr-306973592015', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 359 2015', status: 'available', lastMessage: '6 min ago', messageCount: 312 },
  { id: 'gr-306974872752', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 487 2752', status: 'available', lastMessage: '2 min ago', messageCount: 456 },
  { id: 'gr-306974663347', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 466 3347', status: 'available', lastMessage: '5 min ago', messageCount: 298 },
  { id: 'gr-306940193382', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 694 019 3382', status: 'available', lastMessage: '8 min ago', messageCount: 167 },
  { id: 'gr-306970565259', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 056 5259', status: 'available', lastMessage: '3 min ago', messageCount: 389 },
  { id: 'gr-306970446093', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 044 6093', status: 'available', lastMessage: '6 min ago', messageCount: 234 },
  // Netherlands Numbers
  { id: 'nl-31630826396', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 30826396', status: 'available', lastMessage: '3 min ago', messageCount: 298 },
  { id: 'nl-31613449087', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 13449087', status: 'available', lastMessage: '7 min ago', messageCount: 512 },
  { id: 'nl-31617780160', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 17780160', status: 'available', lastMessage: '2 min ago', messageCount: 634 },
  { id: 'nl-31653538599', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 53538599', status: 'available', lastMessage: '4 min ago', messageCount: 421 },
  { id: 'nl-31647761825', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 47761825', status: 'available', lastMessage: '6 min ago', messageCount: 445 },
  { id: 'nl-31612440360', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 12440360', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'nl-31657700013', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 57700013', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'nl-31686289639', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 86289639', status: 'available', lastMessage: '5 min ago', messageCount: 234 },
  { id: 'nl-31645726853', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 45726853', status: 'available', lastMessage: '4 min ago', messageCount: 387 },
  { id: 'nl-31685549850', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 6 85549850', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  // Belgium Numbers
  { id: 'be-32467881495', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 467 88 14 95', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'be-32465194893', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 19 48 93', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'be-32465459514', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 45 95 14', status: 'available', lastMessage: '10 min ago', messageCount: 123 },
  { id: 'be-32465429413', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 42 94 13', status: 'available', lastMessage: '4 min ago', messageCount: 523 },
  { id: 'be-32465520726', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 52 07 26', status: 'available', lastMessage: '6 min ago', messageCount: 312 },
  { id: 'be-32465790418', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 79 04 18', status: 'available', lastMessage: '2 min ago', messageCount: 456 },
  { id: 'be-32465337418', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 33 74 18', status: 'available', lastMessage: '5 min ago', messageCount: 298 },
  { id: 'be-32465440735', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 44 07 35', status: 'available', lastMessage: '8 min ago', messageCount: 167 },
  { id: 'be-32466352688', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 466 35 26 88', status: 'available', lastMessage: '3 min ago', messageCount: 389 },
  { id: 'be-32466365199', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 466 36 51 99', status: 'available', lastMessage: '6 min ago', messageCount: 234 },
  // France Numbers
  { id: 'fr-33752989028', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 52 98 90 28', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'fr-33672629209', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 6 72 62 92 09', status: 'available', lastMessage: '6 min ago', messageCount: 890 },
  { id: 'fr-33605651273', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 6 05 65 12 73', status: 'available', lastMessage: '10 min ago', messageCount: 234 },
  { id: 'fr-33758114416', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 58 11 44 16', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'fr-33745591536', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 59 15 36', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'fr-33758023768', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 58 02 37 68', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'fr-33745586110', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 58 61 10', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'fr-33745593581', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 59 35 81', status: 'available', lastMessage: '8 min ago', messageCount: 321 },
  { id: 'fr-33745645671', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 64 56 71', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'fr-33780728845', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 80 72 88 45', status: 'available', lastMessage: '6 min ago', messageCount: 234 },
  // Spain Numbers
  { id: 'es-34639710702', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 639 710 702', status: 'available', lastMessage: '6 min ago', messageCount: 445 },
  { id: 'es-34699826122', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 699 826 122', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'es-34631517261', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 631 517 261', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'es-34608223970', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 608 223 970', status: 'available', lastMessage: '5 min ago', messageCount: 234 },
  { id: 'es-34602179511', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 602 179 511', status: 'available', lastMessage: '4 min ago', messageCount: 387 },
  { id: 'es-34689257191', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 689 257 191', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'es-34631228143', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 631 228 143', status: 'available', lastMessage: '5 min ago', messageCount: 1432 },
  { id: 'es-34604331059', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 604 331 059', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'es-34629023515', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 629 023 515', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'es-34612208119', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 612 208 119', status: 'available', lastMessage: '10 min ago', messageCount: 123 },
  // Italy Numbers
  { id: 'it-393509899247', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 9899247', status: 'available', lastMessage: '3 min ago', messageCount: 312 },
  { id: 'it-393511313798', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 351 1313798', status: 'available', lastMessage: '8 min ago', messageCount: 567 },
  { id: 'it-393509616801', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 9616801', status: 'available', lastMessage: '5 min ago', messageCount: 234 },
  { id: 'it-393508199284', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 8199284', status: 'available', lastMessage: '2 min ago', messageCount: 456 },
  { id: 'it-393509675180', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 9675180', status: 'available', lastMessage: '6 min ago', messageCount: 678 },
  { id: 'it-393508060104', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 8060104', status: 'available', lastMessage: '4 min ago', messageCount: 345 },
  { id: 'it-393509980837', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 9980837', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'it-393511955891', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 351 1955891', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'it-393508123829', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 8123829', status: 'available', lastMessage: '9 min ago', messageCount: 123 },
  { id: 'it-393509418437', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 9418437', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  // Austria Numbers
  { id: 'at-436776184029', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 677 618 4029', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'at-436776340759', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 677 634 0759', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'at-436656597340', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 7340', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'at-436656570972', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 657 0972', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'at-436656571051', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 657 1051', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'at-436656597352', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 7352', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'at-436656597269', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 7269', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'at-436656597068', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 7068', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'at-436656597308', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 7308', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'at-436504763900', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 650 476 3900', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Denmark Numbers
  { id: 'dk-4591841365', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 84 13 65', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'dk-4552693317', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 52 69 33 17', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'dk-4550159257', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 50 15 92 57', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'dk-4571629812', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 71 62 98 12', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'dk-4591439286', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 43 92 86', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'dk-4552611036', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 52 61 10 36', status: 'available', lastMessage: '6 min ago', messageCount: 321 },
  { id: 'dk-4549995639', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 49 99 56 39', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'dk-4591886554', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 88 65 54', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'dk-4550145734', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 50 14 57 34', status: 'available', lastMessage: '9 min ago', messageCount: 345 },
  { id: 'dk-4581904715', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 81 90 47 15', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  // Sweden Numbers
  { id: 'se-46720380024', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 72 038 00 24', status: 'available', lastMessage: '6 min ago', messageCount: 389 },
  { id: 'se-46720380174', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 72 038 01 74', status: 'available', lastMessage: '12 min ago', messageCount: 234 },
  { id: 'se-46762669011', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 266 90 11', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  { id: 'se-46700299205', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 029 92 05', status: 'available', lastMessage: '5 min ago', messageCount: 432 },
  { id: 'se-46766537514', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 653 75 14', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'se-46700284934', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 028 49 34', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'se-46737791723', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 73 779 17 23', status: 'available', lastMessage: '4 min ago', messageCount: 456 },
  { id: 'se-46700294150', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 029 41 50', status: 'available', lastMessage: '8 min ago', messageCount: 321 },
  { id: 'se-46762865564', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 286 55 64', status: 'available', lastMessage: '6 min ago', messageCount: 234 },
  { id: 'se-46767132356', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 713 23 56', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  // Germany Numbers
  { id: 'de-4915511026848', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1102 6848', status: 'available', lastMessage: '4 min ago', messageCount: 654 },
  { id: 'de-4915510075952', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1007 5952', status: 'available', lastMessage: '7 min ago', messageCount: 1123 },
  { id: 'de-4915511001909', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1100 1909', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  { id: 'de-4915511204337', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1120 4337', status: 'available', lastMessage: '5 min ago', messageCount: 789 },
  { id: 'de-4915511042149', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1104 2149', status: 'available', lastMessage: '2 min ago', messageCount: 321 },
  { id: 'de-4915511002204', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1100 2204', status: 'available', lastMessage: '6 min ago', messageCount: 567 },
  { id: 'de-4915511209323', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1120 9323', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'de-4915510283686', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1028 3686', status: 'available', lastMessage: '4 min ago', messageCount: 456 },
  { id: 'de-4915511029577', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1102 9577', status: 'available', lastMessage: '9 min ago', messageCount: 678 },
  { id: 'de-4915510894003', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1089 4003', status: 'available', lastMessage: '3 min ago', messageCount: 345 },
  // Finland Numbers
  { id: 'fi-358465573036', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 5573036', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'fi-358403647461', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 40 3647461', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'fi-358449500016', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9500016', status: 'available', lastMessage: '7 min ago', messageCount: 345 },
  { id: 'fi-358449422995', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9422995', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'fi-358449410863', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9410863', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'fi-358449447109', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9447109', status: 'available', lastMessage: '6 min ago', messageCount: 321 },
  { id: 'fi-358466133406', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 6133406', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'fi-358466133365', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 6133365', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'fi-358449369760', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9369760', status: 'available', lastMessage: '9 min ago', messageCount: 345 },
  { id: 'fi-358402429232', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 40 2429232', status: 'available', lastMessage: '3 min ago', messageCount: 567 },
  // Bulgaria Numbers
  { id: 'bg-359895378767', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 895 378 767', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'bg-359887953052', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 887 953 052', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'bg-359895379490', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 895 379 490', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'bg-359894839116', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 894 839 116', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'bg-359882499819', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 882 499 819', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'bg-359882782389', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 882 782 389', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'bg-359889291524', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 291 524', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'bg-359889164532', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 164 532', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'bg-359889378533', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 378 533', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'bg-359887443106', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 887 443 106', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Ireland Numbers
  { id: 'ie-353899646919', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9646919', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'ie-353899462743', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9462743', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'ie-353899459114', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9459114', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'ie-353899747266', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9747266', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'ie-353899835595', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9835595', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'ie-353899563913', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9563913', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'ie-353899656814', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9656814', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'ie-353899656228', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9656228', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'ie-353899847129', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9847129', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'ie-353899467720', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 9467720', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Latvia Numbers
  { id: 'lv-37124859394', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 24 859 394', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'lv-37125723748', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 25 723 748', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'lv-37128713281', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 28 713 281', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'lv-37122017330', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 017 330', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'lv-37126174459', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 26 174 459', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'lv-37122403303', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 403 303', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'lv-37128784287', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 28 784 287', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'lv-37125604784', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 25 604 784', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'lv-37120402944', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 20 402 944', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'lv-37122371324', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 371 324', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Estonia Numbers
  { id: 'ee-37256107762', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 07762', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'ee-37256144052', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 44052', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'ee-37256142298', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 42298', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'ee-37256140566', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 40566', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'ee-37256043868', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 560 43868', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'ee-37258524786', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 585 24786', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'ee-37258207077', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 582 07077', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'ee-37258235480', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 582 35480', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'ee-37255632258', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 556 32258', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'ee-37255665534', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 556 65534', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Moldova Numbers
  { id: 'md-37376997241', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 97241', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'md-37376779376', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 767 79376', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'md-37376925824', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 25824', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'md-37378910513', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 789 10513', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'md-37376559148', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 765 59148', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'md-37376993105', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 93105', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'md-37376915074', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 15074', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'md-37376973382', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 73382', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'md-37376980383', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 80383', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'md-37376871748', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 768 71748', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Slovenia Numbers
  { id: 'si-38670262346', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 262 346', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'si-38670218471', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 218 471', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'si-38671826471', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 826 471', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'si-38671808986', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 808 986', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'si-38671825468', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 825 468', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'si-38670220170', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 220 170', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'si-38671801945', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 801 945', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'si-38670535553', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 535 553', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'si-38670572953', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 572 953', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'si-38670478416', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 478 416', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
  // Argentina Numbers
  { id: 'ar-543815890994', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 381 589 0994', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'ar-543813638388', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 381 363 8388', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'ar-5491166895824', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 6689 5824', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'ar-541178391032', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 1032', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'ar-541178391038', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 1038', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'ar-541178394841', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 4841', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'ar-5491153337198', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 5333 7198', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'ar-5491150298646', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 5029 8646', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'ar-541164113526', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 116 411 3526', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  // Ivory Coast Numbers
  { id: 'ci-2250506169325', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 05 061 69325', status: 'available', lastMessage: '4 min ago', messageCount: 312 },
  { id: 'ci-2250700966743', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 009 66743', status: 'available', lastMessage: '7 min ago', messageCount: 567 },
  { id: 'ci-2250769708271', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 697 08271', status: 'available', lastMessage: '3 min ago', messageCount: 234 },
  { id: 'ci-2250720184686', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 201 84686', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'ci-2250715501715', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 155 01715', status: 'available', lastMessage: '9 min ago', messageCount: 321 },
  { id: 'ci-2250701208509', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 012 08509', status: 'available', lastMessage: '2 min ago', messageCount: 678 },
  { id: 'ci-2250748601800', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 486 01800', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
  { id: 'ci-2250171983455', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 01 719 83455', status: 'available', lastMessage: '4 min ago', messageCount: 567 },
  { id: 'ci-2250171940341', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 01 719 40341', status: 'available', lastMessage: '8 min ago', messageCount: 234 },
  { id: 'ci-2250788200294', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 882 00294', status: 'available', lastMessage: '3 min ago', messageCount: 456 },
];

/**
 * FAQ data for the Free SMS Numbers page
 * Optimized with target keywords for SEO
 */
const freeNumbersFAQ = [
  {
    question: 'What is a temporary phone number?',
    answer: 'A temporary phone number (also called a burner phone number, temp number, or disposable phone number) is a virtual phone number that you can use to receive SMS verification codes without using your personal number. Our free temporary phone numbers are perfect for online verification, protecting your privacy, and creating accounts on various platforms.',
  },
  {
    question: 'Are these phone numbers non-VoIP?',
    answer: 'Yes, our phone numbers include both VoIP and non-VoIP numbers from real mobile carriers. Non-VoIP numbers use real SIM cards and operate like normal cell phone numbers, which means they are accepted by virtually any online service including Tinder, Venmo, and other strict platforms that reject VoIP numbers.',
  },
  {
    question: 'What\'s the difference between VoIP and non-VoIP numbers?',
    answer: 'VoIP numbers are cheap virtual numbers that may be rejected by many services (Tinder, Venmo, PayPal, etc). Non-VoIP numbers use real SIM cards and operate exactly like a normal cell phone number. Numbers that are non-VoIP are accepted by any online service. We provide both types to ensure maximum compatibility.',
  },
  {
    question: 'Can I use these temp numbers for WhatsApp verification?',
    answer: 'Yes! Our temporary phone numbers work with WhatsApp, Telegram, and most messaging apps. Simply select a number, enter it in WhatsApp during registration, and receive your verification code instantly. For best results with WhatsApp, try numbers from different countries if one doesn\'t work.',
  },
  {
    question: 'How do I get a temporary phone number for verification?',
    answer: 'Getting a temp phone number is easy: 1) Browse our list of available free numbers above, 2) Select a number from your preferred country, 3) Copy the number and paste it into the app or website requiring verification, 4) Wait a few seconds and your SMS verification code will appear on our website.',
  },
  {
    question: 'Can I use a temp number for OTP verification?',
    answer: 'Absolutely! Our temp numbers for OTP work with most services. When you need a temp mobile number for OTP verification, simply use one of our free numbers. The one-time password will appear on our website within seconds. This works for Gmail verification, social media signups, and most online services.',
  },
  {
    question: 'Are free burner numbers safe to use?',
    answer: 'Yes, free burner numbers are safe for general verification purposes. However, since these are public numbers visible to everyone, we recommend not using them for sensitive accounts like banking or cryptocurrency. They are perfect for social media, app signups, ChatGPT verification, and general verification needs.',
  },
  {
    question: 'How long do SMS messages stay visible?',
    answer: 'Messages on our free temporary phone numbers are displayed in real-time and remain visible for approximately 24 hours. Messages are refreshed every 30 seconds. We recommend copying your verification code as soon as it arrives since these are shared public numbers.',
  },
  {
    question: 'Can these temp numbers be used worldwide?',
    answer: 'Our phone numbers can be used by people all across the world! We have numbers from the United States, United Kingdom, Germany, France, and many other countries. They will work for any service that supports phone numbers from these countries.',
  },
  {
    question: 'What if the free number doesn\'t work for my service?',
    answer: 'Some services maintain blacklists of known virtual numbers to prevent abuse. If a number doesn\'t work, try a different one from another country. Free numbers are used quickly and the service you want may already be taken. For guaranteed verification, consider our premium private numbers with higher success rates.',
  },
];

/**
 * Supported services data for SEO content
 */
const supportedServices = [
  { name: 'WhatsApp', icon: '💬', description: 'Temp number for WhatsApp verification' },
  { name: 'Telegram', icon: '📱', description: 'Create Telegram accounts securely' },
  { name: 'Google/Gmail', icon: '🔍', description: 'Temp number for Gmail verification' },
  { name: 'Facebook', icon: '👥', description: 'Facebook & Messenger verification' },
  { name: 'Instagram', icon: '📷', description: 'Instagram account verification' },
  { name: 'TikTok', icon: '🎵', description: 'TikTok account signup & OTP' },
  { name: 'Twitter/X', icon: '🐦', description: 'Twitter/X account verification' },
  { name: 'Discord', icon: '🎮', description: 'Discord server verification' },
  { name: 'ChatGPT', icon: '🤖', description: 'OpenAI ChatGPT phone verification' },
  { name: 'Uber', icon: '🚗', description: 'Uber driver & rider verification' },
  { name: 'Tinder', icon: '🔥', description: 'Tinder dating app verification' },
  { name: 'PayPal', icon: '💳', description: 'PayPal account verification' },
];

/**
 * Free SMS Numbers Page
 * Displays available free virtual phone numbers for SMS verification
 */
export default function FreeSMSNumbersPage() {
  // Count available numbers for display
  const availableCount = mockFreeNumbers.filter((n) => n.status === 'available').length;

  return (
    <>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: freeNumbersFAQ.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* JSON-LD for Webpage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Free Temporary Phone Numbers - Receive SMS Verification Codes',
            description: 'Use free temporary phone numbers to receive SMS verification codes online. Non-VoIP burner numbers for WhatsApp, Telegram, Google verification.',
            url: 'https://smsverify.online/free-sms-numbers/',
            isPartOf: {
              '@id': 'https://smsverify.online/#website',
            },
            about: {
              '@type': 'Service',
              name: 'Free SMS Verification Service',
              provider: {
                '@id': 'https://smsverify.online/#organization',
              },
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
                item: 'https://smsverify.online/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Free SMS Numbers',
                item: 'https://smsverify.online/free-sms-numbers/',
              },
            ],
          }),
        }}
      />

      <Header />

      <main id="main-content" role="main">
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="relative bg-gradient-primary py-16 md:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl" />
          </div>

          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center gap-2 text-sm text-slate-600">
                  <li>
                    <Link href="/" className="hover:text-primary-600 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-primary-600 font-medium">Free SMS Numbers</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {availableCount} Numbers Available Now
              </div>

              {/* H1 - SEO Optimized */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Free Temporary Phone Numbers for{' '}
                <span className="text-gradient">SMS Verification</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Get <strong>free burner phone numbers</strong> to receive SMS verification codes instantly.
                Our <strong>temp numbers</strong> are <strong>non-VoIP</strong> and work with any service.
                <strong> No signup required</strong> – completely <strong>free to use</strong>!
              </p>

              {/* CTA Button */}
              <a
                href="#numbers"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                View Available Numbers
              </a>
            </div>
          </div>
        </section>

        {/* ============================================
            FREE NUMBERS GRID
            ============================================ */}
        <section id="numbers" className="section bg-white" aria-labelledby="numbers-heading">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="badge mb-4">Active Phone Numbers</span>
              <h2 id="numbers-heading" className="heading-2 mb-4">
                Free Temporary Phone Numbers Online
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Send a message to a phone number below and receive your SMS verification shortly.
                All temp numbers are free to use and messages refresh every 30 seconds.
              </p>
            </div>

            {/* Interactive Numbers Grid with Country Filter */}
            <NumbersGrid numbers={mockFreeNumbers} />
          </div>
        </section>

        {/* ============================================
            HOW TO USE FREE NUMBERS
            ============================================ */}
        <section className="section bg-slate-50" aria-labelledby="how-to-use-heading">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="badge mb-4">Quick Guide</span>
              <h2 id="how-to-use-heading" className="heading-2 mb-4">
                How to Get a Temporary Phone Number
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Get a free temp phone number for verification in three simple steps. 
                No registration, no app download, completely free!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="heading-3 mb-2">Choose a Temp Number</h3>
                <p className="text-slate-600">
                  Browse our list of available free temporary phone numbers. Pick a burner number from your preferred country.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="heading-3 mb-2">Use for Verification</h3>
                <p className="text-slate-600">
                  Copy the disposable phone number and paste it into the app or website that requires SMS or OTP verification.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="heading-3 mb-2">Receive SMS Instantly</h3>
                <p className="text-slate-600">
                  Wait a few seconds and your verification code will appear. Messages refresh every 30 seconds automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SUPPORTED SERVICES (SEO BLOCK)
            ============================================ */}
        <section className="section bg-white" aria-labelledby="services-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="badge mb-4">Compatible Services</span>
                <h2 id="services-heading" className="heading-2 mb-4">
                  Services That Work with Temp Phone Numbers
                </h2>
                <p className="text-body max-w-2xl mx-auto">
                  Our free burner phone numbers work with thousands of apps and websites.
                  Get a temp number for verification on any of these popular platforms.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {supportedServices.map((service) => (
                  <div
                    key={service.name}
                    className="p-4 rounded-xl bg-slate-50 text-center hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-3xl mb-2 block">{service.icon}</span>
                    <h3 className="font-semibold text-slate-900">{service.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* SEO Content Block */}
              <article className="bg-slate-50 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Free Temporary Phone Numbers for SMS Verification
                </h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    We believe that privacy is a human right. That&apos;s why we offer <strong>free temporary phone numbers</strong> 
                    for SMS verification. Use our <strong>free burner numbers</strong> to receive verification codes and get 
                    <strong> free phone verifications</strong> for your favorite services like <strong>WhatsApp</strong>, 
                    <strong>Telegram</strong>, <strong>Google</strong>, <strong>ChatGPT</strong>, and <strong>Facebook</strong>.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Our <strong>temp phone numbers</strong> include non-VoIP numbers from real mobile carriers, meaning they 
                    work with virtually any online service – including strict platforms that reject regular VoIP numbers. 
                    When you need a <strong>temp number for OTP</strong> verification, our <strong>disposable phone numbers</strong> 
                    provide a quick and reliable solution without requiring any personal information or registration.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Our <strong>free online temporary phone numbers</strong> can be used by anyone, anywhere in the world. 
                    Whether you need a <strong>temporary phone number for WhatsApp</strong>, a <strong>temp number for verification</strong>, 
                    or a <strong>burner phone number for verification</strong> purposes, we&apos;ve got you covered. Messages 
                    are refreshed every 30 seconds, so you&apos;ll receive your SMS verification code almost instantly.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We update our <strong>free non-VoIP numbers</strong> regularly, so check back often for new numbers. 
                    If you need exclusive and private numbers with higher success rates, we also offer premium private 
                    lines where messages are only visible to you. Perfect for <strong>temporary phone number for Gmail verification</strong>, 
                    <strong>temp mobile number for OTP</strong>, and more!
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ SECTION
            ============================================ */}
        <section className="section bg-slate-50" aria-labelledby="faq-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="badge mb-4">FAQ</span>
                <h2 id="faq-heading" className="heading-2 mb-4">
                  Frequently Asked Questions About Temp Phone Numbers
                </h2>
                <p className="text-body">
                  Common questions about using temporary phone numbers, burner numbers, and free SMS verification.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                {freeNumbersFAQ.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-white overflow-hidden"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                      <h3
                        className="text-lg font-semibold text-slate-900 pr-8"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 w-6 h-6 text-primary-600 transition-transform duration-200 group-open:rotate-180">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div
                      className="px-5 pb-5 text-slate-600 leading-relaxed"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            CTA SECTION
            ============================================ */}
        {/* ============================================
            CTA SECTION
            ============================================ */}
        <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full opacity-20 blur-3xl" />
          </div>

          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Service Already Taken?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Try Our Premium Private Numbers
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Free numbers are used quickly and the service you want may already be taken. 
                Get exclusive private burner numbers with higher success rates starting at just $0.25.
                Messages are only visible to you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg text-lg"
                >
                  View Premium Numbers
                </Link>
                <a
                  href="#numbers"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
                >
                  Continue with Free Temp Numbers
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            INTERNAL LINKS
            ============================================ */}
        <section className="py-12 bg-slate-100">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/" className="text-slate-600 hover:text-primary-600 transition-colors">
                ← Back to Home
              </Link>
              <Link href="/terms-of-service" className="text-slate-600 hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-slate-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-primary-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
