import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessagesList, CopyNumberButton, RefreshButton } from '@/components/NumberPageClient';

/**
 * Phone numbers data for verification
 * Real numbers available for SMS verification
 */
interface PhoneNumber {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  number: string;
  fullNumber: string;
  status: 'available' | 'busy';
  messageCount: number;
}

// Phone numbers data - same as free-sms-numbers page
const phoneNumbersData: Record<string, PhoneNumber> = {
  // United States Numbers
  'us-15415805923': { id: 'us-15415805923', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 541 580 5923', fullNumber: '+15415805923', status: 'available', messageCount: 1247 },
  'us-17373786349': { id: 'us-17373786349', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 737 378 6349', fullNumber: '+17373786349', status: 'available', messageCount: 2103 },
  'us-16574569699': { id: 'us-16574569699', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 657 456 9699', fullNumber: '+16574569699', status: 'available', messageCount: 1876 },
  'us-14134498280': { id: 'us-14134498280', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 413 449 8280', fullNumber: '+14134498280', status: 'available', messageCount: 945 },
  'us-17404619427': { id: 'us-17404619427', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 740 461 9427', fullNumber: '+17404619427', status: 'available', messageCount: 1532 },
  'us-12152688872': { id: 'us-12152688872', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 268 8872', fullNumber: '+12152688872', status: 'available', messageCount: 876 },
  'us-12152409264': { id: 'us-12152409264', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 240 9264', fullNumber: '+12152409264', status: 'available', messageCount: 654 },
  'us-12155527184': { id: 'us-12155527184', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 552 7184', fullNumber: '+12155527184', status: 'available', messageCount: 432 },
  'us-12156695708': { id: 'us-12156695708', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 669 5708', fullNumber: '+12156695708', status: 'available', messageCount: 789 },
  'us-12152149274': { id: 'us-12152149274', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 214 9274', fullNumber: '+12152149274', status: 'available', messageCount: 654 },
  'us-16465190037': { id: 'us-16465190037', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 646 519 0037', fullNumber: '+16465190037', status: 'available', messageCount: 1123 },
  'us-12155013109': { id: 'us-12155013109', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 501 3109', fullNumber: '+12155013109', status: 'available', messageCount: 892 },
  'us-12153308972': { id: 'us-12153308972', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 330 8972', fullNumber: '+12153308972', status: 'available', messageCount: 1456 },
  'us-12155945135': { id: 'us-12155945135', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 594 5135', fullNumber: '+12155945135', status: 'available', messageCount: 678 },
  'us-12155014450': { id: 'us-12155014450', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 501 4450', fullNumber: '+12155014450', status: 'available', messageCount: 543 },
  'us-16465105581': { id: 'us-16465105581', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 646 510 5581', fullNumber: '+16465105581', status: 'available', messageCount: 765 },
  'us-12156029761': { id: 'us-12156029761', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 602 9761', fullNumber: '+12156029761', status: 'available', messageCount: 432 },
  'us-12156029544': { id: 'us-12156029544', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 602 9544', fullNumber: '+12156029544', status: 'available', messageCount: 321 },
  'us-12155019866': { id: 'us-12155019866', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 501 9866', fullNumber: '+12155019866', status: 'available', messageCount: 234 },
  'us-12155941987': { id: 'us-12155941987', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 594 1987', fullNumber: '+12155941987', status: 'available', messageCount: 456 },
  'us-12155526021': { id: 'us-12155526021', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 552 6021', fullNumber: '+12155526021', status: 'available', messageCount: 298 },
  'us-12155549137': { id: 'us-12155549137', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 215 554 9137', fullNumber: '+12155549137', status: 'available', messageCount: 512 },
  // United Kingdom Numbers
  'uk-447417477095': { id: 'uk-447417477095', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7417 477095', fullNumber: '+447417477095', status: 'available', messageCount: 892 },
  'uk-447405671467': { id: 'uk-447405671467', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7405 671467', fullNumber: '+447405671467', status: 'available', messageCount: 1456 },
  'uk-447459603196': { id: 'uk-447459603196', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7459 603196', fullNumber: '+447459603196', status: 'available', messageCount: 678 },
  'uk-447424061435': { id: 'uk-447424061435', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7424 061435', fullNumber: '+447424061435', status: 'available', messageCount: 543 },
  'uk-447438478125': { id: 'uk-447438478125', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7438 478125', fullNumber: '+447438478125', status: 'available', messageCount: 765 },
  'uk-447440426577': { id: 'uk-447440426577', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7440 426577', fullNumber: '+447440426577', status: 'available', messageCount: 432 },
  'uk-447917327980': { id: 'uk-447917327980', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7917 327980', fullNumber: '+447917327980', status: 'available', messageCount: 321 },
  'uk-447979136852': { id: 'uk-447979136852', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7979 136852', fullNumber: '+447979136852', status: 'available', messageCount: 234 },
  'uk-447308282680': { id: 'uk-447308282680', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7308 282680', fullNumber: '+447308282680', status: 'available', messageCount: 456 },
  'uk-447920662802': { id: 'uk-447920662802', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7920 662802', fullNumber: '+447920662802', status: 'available', messageCount: 298 },
  // Greece Numbers
  'gr-306974913102': { id: 'gr-306974913102', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 491 3102', fullNumber: '+306974913102', status: 'available', messageCount: 312 },
  'gr-306978209848': { id: 'gr-306978209848', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 820 9848', fullNumber: '+306978209848', status: 'available', messageCount: 567 },
  'gr-306970461358': { id: 'gr-306970461358', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 046 1358', fullNumber: '+306970461358', status: 'available', messageCount: 234 },
  'gr-306976910209': { id: 'gr-306976910209', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 691 0209', fullNumber: '+306976910209', status: 'available', messageCount: 456 },
  'gr-306973592015': { id: 'gr-306973592015', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 359 2015', fullNumber: '+306973592015', status: 'available', messageCount: 321 },
  'gr-306974872752': { id: 'gr-306974872752', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 487 2752', fullNumber: '+306974872752', status: 'available', messageCount: 678 },
  'gr-306974663347': { id: 'gr-306974663347', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 466 3347', fullNumber: '+306974663347', status: 'available', messageCount: 345 },
  'gr-306940193382': { id: 'gr-306940193382', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 694 019 3382', fullNumber: '+306940193382', status: 'available', messageCount: 567 },
  'gr-306970565259': { id: 'gr-306970565259', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 056 5259', fullNumber: '+306970565259', status: 'available', messageCount: 234 },
  'gr-306970446093': { id: 'gr-306970446093', country: 'Greece', countryCode: 'GR', flag: '🇬🇷', number: '+30 697 044 6093', fullNumber: '+306970446093', status: 'available', messageCount: 456 },
  // Netherlands Numbers
  'nl-31630826396': { id: 'nl-31630826396', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 63 082 6396', fullNumber: '+31630826396', status: 'available', messageCount: 298 },
  'nl-31613449087': { id: 'nl-31613449087', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 61 344 9087', fullNumber: '+31613449087', status: 'available', messageCount: 512 },
  'nl-31617780160': { id: 'nl-31617780160', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 61 778 0160', fullNumber: '+31617780160', status: 'available', messageCount: 634 },
  'nl-31653538599': { id: 'nl-31653538599', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 65 353 8599', fullNumber: '+31653538599', status: 'available', messageCount: 421 },
  'nl-31647761825': { id: 'nl-31647761825', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 64 776 1825', fullNumber: '+31647761825', status: 'available', messageCount: 234 },
  'nl-31612440360': { id: 'nl-31612440360', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 61 244 0360', fullNumber: '+31612440360', status: 'available', messageCount: 567 },
  'nl-31657700013': { id: 'nl-31657700013', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 65 770 0013', fullNumber: '+31657700013', status: 'available', messageCount: 345 },
  'nl-31686289639': { id: 'nl-31686289639', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 68 628 9639', fullNumber: '+31686289639', status: 'available', messageCount: 678 },
  'nl-31645726853': { id: 'nl-31645726853', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 64 572 6853', fullNumber: '+31645726853', status: 'available', messageCount: 234 },
  'nl-31685549850': { id: 'nl-31685549850', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 68 554 9850', fullNumber: '+31685549850', status: 'available', messageCount: 456 },
  // Belgium Numbers
  'be-32467881495': { id: 'be-32467881495', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 467 88 14 95', fullNumber: '+32467881495', status: 'available', messageCount: 312 },
  'be-32465194893': { id: 'be-32465194893', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 19 48 93', fullNumber: '+32465194893', status: 'available', messageCount: 567 },
  'be-32465459514': { id: 'be-32465459514', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 45 95 14', fullNumber: '+32465459514', status: 'available', messageCount: 234 },
  'be-32465429413': { id: 'be-32465429413', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 42 94 13', fullNumber: '+32465429413', status: 'available', messageCount: 456 },
  'be-32465520726': { id: 'be-32465520726', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 52 07 26', fullNumber: '+32465520726', status: 'available', messageCount: 321 },
  'be-32465790418': { id: 'be-32465790418', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 79 04 18', fullNumber: '+32465790418', status: 'available', messageCount: 678 },
  'be-32465337418': { id: 'be-32465337418', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 33 74 18', fullNumber: '+32465337418', status: 'available', messageCount: 345 },
  'be-32465440735': { id: 'be-32465440735', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 465 44 07 35', fullNumber: '+32465440735', status: 'available', messageCount: 567 },
  'be-32466352688': { id: 'be-32466352688', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 466 35 26 88', fullNumber: '+32466352688', status: 'available', messageCount: 234 },
  'be-32466365199': { id: 'be-32466365199', country: 'Belgium', countryCode: 'BE', flag: '🇧🇪', number: '+32 466 36 51 99', fullNumber: '+32466365199', status: 'available', messageCount: 456 },
  // France Numbers
  'fr-33752989028': { id: 'fr-33752989028', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 52 98 90 28', fullNumber: '+33752989028', status: 'available', messageCount: 312 },
  'fr-33672629209': { id: 'fr-33672629209', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 6 72 62 92 09', fullNumber: '+33672629209', status: 'available', messageCount: 567 },
  'fr-33605651273': { id: 'fr-33605651273', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 6 05 65 12 73', fullNumber: '+33605651273', status: 'available', messageCount: 234 },
  'fr-33758114416': { id: 'fr-33758114416', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 58 11 44 16', fullNumber: '+33758114416', status: 'available', messageCount: 456 },
  'fr-33745591536': { id: 'fr-33745591536', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 59 15 36', fullNumber: '+33745591536', status: 'available', messageCount: 321 },
  'fr-33758023768': { id: 'fr-33758023768', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 58 02 37 68', fullNumber: '+33758023768', status: 'available', messageCount: 678 },
  'fr-33745586110': { id: 'fr-33745586110', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 58 61 10', fullNumber: '+33745586110', status: 'available', messageCount: 345 },
  'fr-33745593581': { id: 'fr-33745593581', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 59 35 81', fullNumber: '+33745593581', status: 'available', messageCount: 567 },
  'fr-33745645671': { id: 'fr-33745645671', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 45 64 56 71', fullNumber: '+33745645671', status: 'available', messageCount: 234 },
  'fr-33780728845': { id: 'fr-33780728845', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 80 72 88 45', fullNumber: '+33780728845', status: 'available', messageCount: 456 },
  // Spain Numbers
  'es-34639710702': { id: 'es-34639710702', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 639 710 702', fullNumber: '+34639710702', status: 'available', messageCount: 445 },
  'es-34699826122': { id: 'es-34699826122', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 699 826 122', fullNumber: '+34699826122', status: 'available', messageCount: 321 },
  'es-34631517261': { id: 'es-34631517261', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 631 517 261', fullNumber: '+34631517261', status: 'available', messageCount: 567 },
  'es-34608223970': { id: 'es-34608223970', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 608 223 970', fullNumber: '+34608223970', status: 'available', messageCount: 234 },
  'es-34602179511': { id: 'es-34602179511', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 602 179 511', fullNumber: '+34602179511', status: 'available', messageCount: 456 },
  'es-34689257191': { id: 'es-34689257191', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 689 257 191', fullNumber: '+34689257191', status: 'available', messageCount: 321 },
  'es-34631228143': { id: 'es-34631228143', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 631 228 143', fullNumber: '+34631228143', status: 'available', messageCount: 678 },
  'es-34604331059': { id: 'es-34604331059', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 604 331 059', fullNumber: '+34604331059', status: 'available', messageCount: 345 },
  'es-34629023515': { id: 'es-34629023515', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 629 023 515', fullNumber: '+34629023515', status: 'available', messageCount: 567 },
  'es-34612208119': { id: 'es-34612208119', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 612 208 119', fullNumber: '+34612208119', status: 'available', messageCount: 234 },
  // Italy Numbers
  'it-393509899247': { id: 'it-393509899247', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 989 9247', fullNumber: '+393509899247', status: 'available', messageCount: 312 },
  'it-393511313798': { id: 'it-393511313798', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 351 131 3798', fullNumber: '+393511313798', status: 'available', messageCount: 567 },
  'it-393509616801': { id: 'it-393509616801', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 961 6801', fullNumber: '+393509616801', status: 'available', messageCount: 234 },
  'it-393508199284': { id: 'it-393508199284', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 819 9284', fullNumber: '+393508199284', status: 'available', messageCount: 456 },
  'it-393509675180': { id: 'it-393509675180', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 967 5180', fullNumber: '+393509675180', status: 'available', messageCount: 321 },
  'it-393508060104': { id: 'it-393508060104', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 806 0104', fullNumber: '+393508060104', status: 'available', messageCount: 678 },
  'it-393509980837': { id: 'it-393509980837', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 998 0837', fullNumber: '+393509980837', status: 'available', messageCount: 345 },
  'it-393511955891': { id: 'it-393511955891', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 351 195 5891', fullNumber: '+393511955891', status: 'available', messageCount: 567 },
  'it-393508123829': { id: 'it-393508123829', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 812 3829', fullNumber: '+393508123829', status: 'available', messageCount: 234 },
  'it-393509418437': { id: 'it-393509418437', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 941 8437', fullNumber: '+393509418437', status: 'available', messageCount: 456 },
  // Austria Numbers
  'at-436776184029': { id: 'at-436776184029', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 677 618 40291', fullNumber: '+436776184029', status: 'available', messageCount: 312 },
  'at-436776340759': { id: 'at-436776340759', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 677 634 07593', fullNumber: '+436776340759', status: 'available', messageCount: 567 },
  'at-436656597340': { id: 'at-436656597340', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 73407', fullNumber: '+436656597340', status: 'available', messageCount: 234 },
  'at-436656570972': { id: 'at-436656570972', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 657 09728', fullNumber: '+436656570972', status: 'available', messageCount: 456 },
  'at-436656571051': { id: 'at-436656571051', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 657 10513', fullNumber: '+436656571051', status: 'available', messageCount: 321 },
  'at-436656597352': { id: 'at-436656597352', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 73526', fullNumber: '+436656597352', status: 'available', messageCount: 678 },
  'at-436656597269': { id: 'at-436656597269', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 72691', fullNumber: '+436656597269', status: 'available', messageCount: 345 },
  'at-436656597068': { id: 'at-436656597068', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 70688', fullNumber: '+436656597068', status: 'available', messageCount: 567 },
  'at-436656597308': { id: 'at-436656597308', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 665 659 73082', fullNumber: '+436656597308', status: 'available', messageCount: 234 },
  'at-436504763900': { id: 'at-436504763900', country: 'Austria', countryCode: 'AT', flag: '🇦🇹', number: '+43 650 476 3900', fullNumber: '+436504763900', status: 'available', messageCount: 456 },
  // Denmark Numbers
  'dk-4591841365': { id: 'dk-4591841365', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 84 13 65', fullNumber: '+4591841365', status: 'available', messageCount: 456 },
  'dk-4552693317': { id: 'dk-4552693317', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 52 69 33 17', fullNumber: '+4552693317', status: 'available', messageCount: 312 },
  'dk-4550159257': { id: 'dk-4550159257', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 50 15 92 57', fullNumber: '+4550159257', status: 'available', messageCount: 567 },
  'dk-4571629812': { id: 'dk-4571629812', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 71 62 98 12', fullNumber: '+4571629812', status: 'available', messageCount: 234 },
  'dk-4591439286': { id: 'dk-4591439286', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 43 92 86', fullNumber: '+4591439286', status: 'available', messageCount: 456 },
  'dk-4552611036': { id: 'dk-4552611036', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 52 61 10 36', fullNumber: '+4552611036', status: 'available', messageCount: 321 },
  'dk-4549995639': { id: 'dk-4549995639', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 49 99 56 39', fullNumber: '+4549995639', status: 'available', messageCount: 678 },
  'dk-4591886554': { id: 'dk-4591886554', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 91 88 65 54', fullNumber: '+4591886554', status: 'available', messageCount: 345 },
  'dk-4550145734': { id: 'dk-4550145734', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 50 14 57 34', fullNumber: '+4550145734', status: 'available', messageCount: 567 },
  'dk-4581904715': { id: 'dk-4581904715', country: 'Denmark', countryCode: 'DK', flag: '🇩🇰', number: '+45 81 90 47 15', fullNumber: '+4581904715', status: 'available', messageCount: 234 },
  // Sweden Numbers
  'se-46720380024': { id: 'se-46720380024', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 72 038 00 24', fullNumber: '+46720380024', status: 'available', messageCount: 312 },
  'se-46720380174': { id: 'se-46720380174', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 72 038 01 74', fullNumber: '+46720380174', status: 'available', messageCount: 567 },
  'se-46762669011': { id: 'se-46762669011', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 266 90 11', fullNumber: '+46762669011', status: 'available', messageCount: 234 },
  'se-46700299205': { id: 'se-46700299205', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 029 92 05', fullNumber: '+46700299205', status: 'available', messageCount: 456 },
  'se-46766537514': { id: 'se-46766537514', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 653 75 14', fullNumber: '+46766537514', status: 'available', messageCount: 321 },
  'se-46700284934': { id: 'se-46700284934', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 028 49 34', fullNumber: '+46700284934', status: 'available', messageCount: 678 },
  'se-46737791723': { id: 'se-46737791723', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 73 779 17 23', fullNumber: '+46737791723', status: 'available', messageCount: 345 },
  'se-46700294150': { id: 'se-46700294150', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 70 029 41 50', fullNumber: '+46700294150', status: 'available', messageCount: 567 },
  'se-46762865564': { id: 'se-46762865564', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 286 55 64', fullNumber: '+46762865564', status: 'available', messageCount: 234 },
  'se-46767132356': { id: 'se-46767132356', country: 'Sweden', countryCode: 'SE', flag: '🇸🇪', number: '+46 76 713 23 56', fullNumber: '+46767132356', status: 'available', messageCount: 456 },
  // Germany Numbers
  'de-4915511026848': { id: 'de-4915511026848', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1102 6848', fullNumber: '+4915511026848', status: 'available', messageCount: 654 },
  'de-4915510075952': { id: 'de-4915510075952', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1007 5952', fullNumber: '+4915510075952', status: 'available', messageCount: 1123 },
  'de-4915511001909': { id: 'de-4915511001909', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1100 1909', fullNumber: '+4915511001909', status: 'available', messageCount: 312 },
  'de-4915511204337': { id: 'de-4915511204337', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1120 4337', fullNumber: '+4915511204337', status: 'available', messageCount: 567 },
  'de-4915511042149': { id: 'de-4915511042149', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1104 2149', fullNumber: '+4915511042149', status: 'available', messageCount: 234 },
  'de-4915511002204': { id: 'de-4915511002204', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1100 2204', fullNumber: '+4915511002204', status: 'available', messageCount: 456 },
  'de-4915511209323': { id: 'de-4915511209323', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1120 9323', fullNumber: '+4915511209323', status: 'available', messageCount: 321 },
  'de-4915510283686': { id: 'de-4915510283686', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1028 3686', fullNumber: '+4915510283686', status: 'available', messageCount: 678 },
  'de-4915511029577': { id: 'de-4915511029577', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1102 9577', fullNumber: '+4915511029577', status: 'available', messageCount: 345 },
  'de-4915510894003': { id: 'de-4915510894003', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1089 4003', fullNumber: '+4915510894003', status: 'available', messageCount: 567 },
  // Finland Numbers
  'fi-358465573036': { id: 'fi-358465573036', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 5573 036', fullNumber: '+358465573036', status: 'available', messageCount: 312 },
  'fi-358403647461': { id: 'fi-358403647461', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 40 3647 461', fullNumber: '+358403647461', status: 'available', messageCount: 567 },
  'fi-358449500016': { id: 'fi-358449500016', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9500 016', fullNumber: '+358449500016', status: 'available', messageCount: 234 },
  'fi-358449422995': { id: 'fi-358449422995', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9422 995', fullNumber: '+358449422995', status: 'available', messageCount: 456 },
  'fi-358449410863': { id: 'fi-358449410863', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9410 863', fullNumber: '+358449410863', status: 'available', messageCount: 321 },
  'fi-358449447109': { id: 'fi-358449447109', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9447 109', fullNumber: '+358449447109', status: 'available', messageCount: 678 },
  'fi-358466133406': { id: 'fi-358466133406', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 6133 406', fullNumber: '+358466133406', status: 'available', messageCount: 345 },
  'fi-358466133365': { id: 'fi-358466133365', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 46 6133 365', fullNumber: '+358466133365', status: 'available', messageCount: 567 },
  'fi-358449369760': { id: 'fi-358449369760', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 44 9369 760', fullNumber: '+358449369760', status: 'available', messageCount: 234 },
  'fi-358402429232': { id: 'fi-358402429232', country: 'Finland', countryCode: 'FI', flag: '🇫🇮', number: '+358 40 2429 232', fullNumber: '+358402429232', status: 'available', messageCount: 456 },
  // Bulgaria Numbers
  'bg-359895378767': { id: 'bg-359895378767', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 895 378 767', fullNumber: '+359895378767', status: 'available', messageCount: 312 },
  'bg-359887953052': { id: 'bg-359887953052', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 887 953 052', fullNumber: '+359887953052', status: 'available', messageCount: 567 },
  'bg-359895379490': { id: 'bg-359895379490', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 895 379 490', fullNumber: '+359895379490', status: 'available', messageCount: 234 },
  'bg-359894839116': { id: 'bg-359894839116', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 894 839 116', fullNumber: '+359894839116', status: 'available', messageCount: 456 },
  'bg-359882499819': { id: 'bg-359882499819', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 882 499 819', fullNumber: '+359882499819', status: 'available', messageCount: 321 },
  'bg-359882782389': { id: 'bg-359882782389', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 882 782 389', fullNumber: '+359882782389', status: 'available', messageCount: 678 },
  'bg-359889291524': { id: 'bg-359889291524', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 291 524', fullNumber: '+359889291524', status: 'available', messageCount: 345 },
  'bg-359889164532': { id: 'bg-359889164532', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 164 532', fullNumber: '+359889164532', status: 'available', messageCount: 567 },
  'bg-359889378533': { id: 'bg-359889378533', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 889 378 533', fullNumber: '+359889378533', status: 'available', messageCount: 234 },
  'bg-359887443106': { id: 'bg-359887443106', country: 'Bulgaria', countryCode: 'BG', flag: '🇧🇬', number: '+359 887 443 106', fullNumber: '+359887443106', status: 'available', messageCount: 456 },
  // Ireland Numbers
  'ie-353899646919': { id: 'ie-353899646919', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 964 6919', fullNumber: '+353899646919', status: 'available', messageCount: 312 },
  'ie-353899462743': { id: 'ie-353899462743', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 946 2743', fullNumber: '+353899462743', status: 'available', messageCount: 567 },
  'ie-353899459114': { id: 'ie-353899459114', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 945 9114', fullNumber: '+353899459114', status: 'available', messageCount: 234 },
  'ie-353899747266': { id: 'ie-353899747266', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 974 7266', fullNumber: '+353899747266', status: 'available', messageCount: 456 },
  'ie-353899835595': { id: 'ie-353899835595', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 983 5595', fullNumber: '+353899835595', status: 'available', messageCount: 321 },
  'ie-353899563913': { id: 'ie-353899563913', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 956 3913', fullNumber: '+353899563913', status: 'available', messageCount: 678 },
  'ie-353899656814': { id: 'ie-353899656814', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 965 6814', fullNumber: '+353899656814', status: 'available', messageCount: 345 },
  'ie-353899656228': { id: 'ie-353899656228', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 965 6228', fullNumber: '+353899656228', status: 'available', messageCount: 567 },
  'ie-353899847129': { id: 'ie-353899847129', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 984 7129', fullNumber: '+353899847129', status: 'available', messageCount: 234 },
  'ie-353899467720': { id: 'ie-353899467720', country: 'Ireland', countryCode: 'IE', flag: '🇮🇪', number: '+353 89 946 7720', fullNumber: '+353899467720', status: 'available', messageCount: 456 },
  // Latvia Numbers
  'lv-37124859394': { id: 'lv-37124859394', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 24 859 394', fullNumber: '+37124859394', status: 'available', messageCount: 312 },
  'lv-37125723748': { id: 'lv-37125723748', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 25 723 748', fullNumber: '+37125723748', status: 'available', messageCount: 567 },
  'lv-37128713281': { id: 'lv-37128713281', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 28 713 281', fullNumber: '+37128713281', status: 'available', messageCount: 234 },
  'lv-37122017330': { id: 'lv-37122017330', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 017 330', fullNumber: '+37122017330', status: 'available', messageCount: 456 },
  'lv-37126174459': { id: 'lv-37126174459', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 26 174 459', fullNumber: '+37126174459', status: 'available', messageCount: 321 },
  'lv-37122403303': { id: 'lv-37122403303', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 403 303', fullNumber: '+37122403303', status: 'available', messageCount: 678 },
  'lv-37128784287': { id: 'lv-37128784287', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 28 784 287', fullNumber: '+37128784287', status: 'available', messageCount: 345 },
  'lv-37125604784': { id: 'lv-37125604784', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 25 604 784', fullNumber: '+37125604784', status: 'available', messageCount: 567 },
  'lv-37120402944': { id: 'lv-37120402944', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 20 402 944', fullNumber: '+37120402944', status: 'available', messageCount: 234 },
  'lv-37122371324': { id: 'lv-37122371324', country: 'Latvia', countryCode: 'LV', flag: '🇱🇻', number: '+371 22 371 324', fullNumber: '+37122371324', status: 'available', messageCount: 456 },
  // Estonia Numbers
  'ee-37256107762': { id: 'ee-37256107762', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 07762', fullNumber: '+37256107762', status: 'available', messageCount: 312 },
  'ee-37256144052': { id: 'ee-37256144052', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 44052', fullNumber: '+37256144052', status: 'available', messageCount: 567 },
  'ee-37256142298': { id: 'ee-37256142298', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 42298', fullNumber: '+37256142298', status: 'available', messageCount: 234 },
  'ee-37256140566': { id: 'ee-37256140566', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 561 40566', fullNumber: '+37256140566', status: 'available', messageCount: 456 },
  'ee-37256043868': { id: 'ee-37256043868', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 560 43868', fullNumber: '+37256043868', status: 'available', messageCount: 321 },
  'ee-37258524786': { id: 'ee-37258524786', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 585 24786', fullNumber: '+37258524786', status: 'available', messageCount: 678 },
  'ee-37258207077': { id: 'ee-37258207077', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 582 07077', fullNumber: '+37258207077', status: 'available', messageCount: 345 },
  'ee-37258235480': { id: 'ee-37258235480', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 582 35480', fullNumber: '+37258235480', status: 'available', messageCount: 567 },
  'ee-37255632258': { id: 'ee-37255632258', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 556 32258', fullNumber: '+37255632258', status: 'available', messageCount: 234 },
  'ee-37255665534': { id: 'ee-37255665534', country: 'Estonia', countryCode: 'EE', flag: '🇪🇪', number: '+372 556 65534', fullNumber: '+37255665534', status: 'available', messageCount: 456 },
  // Moldova Numbers
  'md-37376997241': { id: 'md-37376997241', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 97241', fullNumber: '+37376997241', status: 'available', messageCount: 312 },
  'md-37376779376': { id: 'md-37376779376', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 767 79376', fullNumber: '+37376779376', status: 'available', messageCount: 567 },
  'md-37376925824': { id: 'md-37376925824', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 25824', fullNumber: '+37376925824', status: 'available', messageCount: 234 },
  'md-37378910513': { id: 'md-37378910513', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 789 10513', fullNumber: '+37378910513', status: 'available', messageCount: 456 },
  'md-37376559148': { id: 'md-37376559148', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 765 59148', fullNumber: '+37376559148', status: 'available', messageCount: 321 },
  'md-37376993105': { id: 'md-37376993105', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 93105', fullNumber: '+37376993105', status: 'available', messageCount: 678 },
  'md-37376915074': { id: 'md-37376915074', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 15074', fullNumber: '+37376915074', status: 'available', messageCount: 345 },
  'md-37376973382': { id: 'md-37376973382', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 73382', fullNumber: '+37376973382', status: 'available', messageCount: 567 },
  'md-37376980383': { id: 'md-37376980383', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 769 80383', fullNumber: '+37376980383', status: 'available', messageCount: 234 },
  'md-37376871748': { id: 'md-37376871748', country: 'Moldova', countryCode: 'MD', flag: '🇲🇩', number: '+373 768 71748', fullNumber: '+37376871748', status: 'available', messageCount: 456 },
  // Slovenia Numbers
  'si-38670262346': { id: 'si-38670262346', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 262 346', fullNumber: '+38670262346', status: 'available', messageCount: 312 },
  'si-38670218471': { id: 'si-38670218471', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 218 471', fullNumber: '+38670218471', status: 'available', messageCount: 567 },
  'si-38671826471': { id: 'si-38671826471', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 826 471', fullNumber: '+38671826471', status: 'available', messageCount: 234 },
  'si-38671808986': { id: 'si-38671808986', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 808 986', fullNumber: '+38671808986', status: 'available', messageCount: 456 },
  'si-38671825468': { id: 'si-38671825468', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 825 468', fullNumber: '+38671825468', status: 'available', messageCount: 321 },
  'si-38670220170': { id: 'si-38670220170', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 220 170', fullNumber: '+38670220170', status: 'available', messageCount: 678 },
  'si-38671801945': { id: 'si-38671801945', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 71 801 945', fullNumber: '+38671801945', status: 'available', messageCount: 345 },
  'si-38670535553': { id: 'si-38670535553', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 535 553', fullNumber: '+38670535553', status: 'available', messageCount: 567 },
  'si-38670572953': { id: 'si-38670572953', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 572 953', fullNumber: '+38670572953', status: 'available', messageCount: 234 },
  'si-38670478416': { id: 'si-38670478416', country: 'Slovenia', countryCode: 'SI', flag: '🇸🇮', number: '+386 70 478 416', fullNumber: '+38670478416', status: 'available', messageCount: 456 },
  // Argentina Numbers
  'ar-543815890994': { id: 'ar-543815890994', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 381 589 0994', fullNumber: '+543815890994', status: 'available', messageCount: 312 },
  'ar-543813638388': { id: 'ar-543813638388', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 381 363 8388', fullNumber: '+543813638388', status: 'available', messageCount: 567 },
  'ar-5491166895824': { id: 'ar-5491166895824', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 6689 5824', fullNumber: '+5491166895824', status: 'available', messageCount: 234 },
  'ar-541178391032': { id: 'ar-541178391032', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 1032', fullNumber: '+541178391032', status: 'available', messageCount: 456 },
  'ar-541178391038': { id: 'ar-541178391038', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 1038', fullNumber: '+541178391038', status: 'available', messageCount: 321 },
  'ar-541178394841': { id: 'ar-541178394841', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 117 839 4841', fullNumber: '+541178394841', status: 'available', messageCount: 678 },
  'ar-5491153337198': { id: 'ar-5491153337198', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 5333 7198', fullNumber: '+5491153337198', status: 'available', messageCount: 345 },
  'ar-5491150298646': { id: 'ar-5491150298646', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 911 5029 8646', fullNumber: '+5491150298646', status: 'available', messageCount: 567 },
  'ar-541164113526': { id: 'ar-541164113526', country: 'Argentina', countryCode: 'AR', flag: '🇦🇷', number: '+54 116 411 3526', fullNumber: '+541164113526', status: 'available', messageCount: 234 },
  // Ivory Coast Numbers
  'ci-2250506169325': { id: 'ci-2250506169325', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 05 061 69325', fullNumber: '+2250506169325', status: 'available', messageCount: 312 },
  'ci-2250700966743': { id: 'ci-2250700966743', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 009 66743', fullNumber: '+2250700966743', status: 'available', messageCount: 567 },
  'ci-2250769708271': { id: 'ci-2250769708271', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 697 08271', fullNumber: '+2250769708271', status: 'available', messageCount: 234 },
  'ci-2250720184686': { id: 'ci-2250720184686', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 201 84686', fullNumber: '+2250720184686', status: 'available', messageCount: 456 },
  'ci-2250715501715': { id: 'ci-2250715501715', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 155 01715', fullNumber: '+2250715501715', status: 'available', messageCount: 321 },
  'ci-2250701208509': { id: 'ci-2250701208509', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 012 08509', fullNumber: '+2250701208509', status: 'available', messageCount: 678 },
  'ci-2250748601800': { id: 'ci-2250748601800', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 486 01800', fullNumber: '+2250748601800', status: 'available', messageCount: 345 },
  'ci-2250171983455': { id: 'ci-2250171983455', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 01 719 83455', fullNumber: '+2250171983455', status: 'available', messageCount: 567 },
  'ci-2250171940341': { id: 'ci-2250171940341', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 01 719 40341', fullNumber: '+2250171940341', status: 'available', messageCount: 234 },
  'ci-2250788200294': { id: 'ci-2250788200294', country: 'Ivory Coast', countryCode: 'CI', flag: '🇨🇮', number: '+225 07 882 00294', fullNumber: '+2250788200294', status: 'available', messageCount: 456 },
};

/**
 * Generate static params for all number pages
 * This enables static generation (SSG) for all number pages
 */
export async function generateStaticParams() {
  // Fetch from Cloudflare D1 database in production
  return Object.keys(phoneNumbersData).map((id) => ({
    id,
  }));
}

/**
 * Generate metadata for each number page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const phoneNumber = phoneNumbersData[id];

  if (!phoneNumber) {
    return {
      title: 'Number Not Found',
      description: 'The requested phone number was not found.',
    };
  }

  return {
    title: `${phoneNumber.flag} ${phoneNumber.country} Free SMS Number - Receive SMS Online`,
    description: `Receive SMS verification codes online with this free ${phoneNumber.country} phone number. No registration required. Messages appear instantly.`,
    keywords: [
      `${phoneNumber.country.toLowerCase()} phone number`,
      'receive sms online',
      'free sms verification',
      'temporary phone number',
      `${phoneNumber.countryCode} virtual number`,
    ],
    openGraph: {
      title: `${phoneNumber.country} Free SMS Number`,
      description: `Receive SMS verification codes with this free ${phoneNumber.country} number.`,
      type: 'website',
    },
  };
}

/**
 * Number Detail Page
 * Shows phone number details and received SMS messages
 */
export default async function NumberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const phoneNumber = phoneNumbersData[id];

  // Handle number not found
  if (!phoneNumber) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Number Not Found</h1>
            <p className="text-slate-600 mb-8">The phone number you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/free-sms-numbers" className="btn-primary">
              Browse Available Numbers
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${phoneNumber.country} Free SMS Number - ${phoneNumber.number}`,
            description: `Receive SMS verification codes with this free ${phoneNumber.country} phone number. Use for WhatsApp, Telegram, Google verification.`,
            url: `https://receivesms.it.com/number/${phoneNumber.id}/`,
            isPartOf: {
              '@id': 'https://receivesms.it.com/#website',
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://receivesms.it.com/logo.png',
            },
            about: {
              '@type': 'Service',
              name: 'Free SMS Verification',
              provider: {
                '@id': 'https://receivesms.it.com/#organization',
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
                item: 'https://receivesms.it.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Free SMS Numbers',
                item: 'https://receivesms.it.com/free-sms-numbers/',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: `${phoneNumber.country} - ${phoneNumber.number}`,
                item: `https://receivesms.it.com/number/${phoneNumber.id}/`,
              },
            ],
          }),
        }}
      />

      <Header />

      <main id="main-content" role="main" className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-12 md:py-16">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/free-sms-numbers" className="hover:text-primary-600 transition-colors">
                    Free Numbers
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-600 font-medium">{phoneNumber.country}</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto">
              {/* Number Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left side - Number info */}
                  <div className="flex items-center gap-4">
                    <span className="text-5xl" role="img" aria-label={`${phoneNumber.country} flag`}>
                      {phoneNumber.flag}
                    </span>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                        {phoneNumber.country} Number
                      </h1>
                      <p className="text-slate-500">Free virtual phone number for SMS verification</p>
                    </div>
                  </div>

                  {/* Right side - Status */}
                  <div className="text-center md:text-right">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                        phoneNumber.status === 'available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${
                        phoneNumber.status === 'available' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
                      }`} />
                      {phoneNumber.status === 'available' ? 'Online & Available' : 'Currently Busy'}
                    </span>
                    <p className="text-sm text-slate-500 mt-2">
                      {phoneNumber.messageCount} messages received
                    </p>
                  </div>
                </div>

                {/* Phone Number Display */}
                <div className="mt-8 bg-slate-900 rounded-xl p-6 text-center">
                  <p className="text-sm text-slate-400 mb-2">Use this number for SMS verification</p>
                  <p className="text-3xl md:text-4xl font-mono font-bold text-white tracking-wider">
                    {phoneNumber.fullNumber}
                  </p>
                  <CopyNumberButton number={phoneNumber.fullNumber} />
                </div>

                {/* Instructions */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">How to use this number</h3>
                      <ol className="text-sm text-blue-800 list-decimal list-inside space-y-1">
                        <li>Copy the phone number above</li>
                        <li>Paste it in the app or website requiring verification</li>
                        <li>Wait for the SMS and check below for your code</li>
                        <li>Click &quot;Refresh Messages&quot; if you don&apos;t see it immediately</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Messages Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Received Messages</h2>
                  <p className="text-slate-600">Latest SMS messages for this number</p>
                </div>
                <RefreshButton />
              </div>

              {/* Auto-refresh notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-700">
                  Messages auto-refresh every 5 seconds. New messages appear at the top.
                </span>
              </div>

              {/* Messages List with Load More functionality */}
              <MessagesList phoneId={id} />
            </div>
          </div>
        </section>

        {/* Other Numbers Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Available Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.values(phoneNumbersData)
                  .filter((n) => n.id !== id && n.status === 'available')
                  .slice(0, 4)
                  .map((num) => (
                    <Link
                      key={num.id}
                      href={`/number/${num.id}`}
                      className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-center"
                    >
                      <span className="text-3xl block mb-2">{num.flag}</span>
                      <span className="font-medium text-slate-900 block">{num.country}</span>
                      <span className="text-xs text-green-600">Available</span>
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/free-sms-numbers" className="text-primary-600 hover:text-primary-700 font-medium">
                  View All Free Numbers →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-8 bg-yellow-50 border-t border-yellow-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">Important Notice</h3>
                <p className="text-sm text-yellow-700">
                  This is a shared public number. Anyone can see messages sent to this number.
                  Do not use for sensitive accounts like banking, crypto, or accounts with personal financial information.
                  For private numbers, consider our <Link href="/" className="underline font-medium">premium options</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
