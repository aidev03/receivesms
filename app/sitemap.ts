import { MetadataRoute } from 'next';

/**
 * Sitemap Configuration
 * Automatically generates sitemap.xml for search engines
 * Includes all pages for comprehensive SEO coverage
 */

// Required for static export
export const dynamic = 'force-static';

const BASE_URL = 'https://receivesms.it.com'; // Update with actual domain

// Phone numbers available on the site (same as generateStaticParams)
const PHONE_NUMBERS = [
  // United States
  { id: 'us-15415805923', country: 'US' }, { id: 'us-17373786349', country: 'US' }, { id: 'us-16574569699', country: 'US' },
  { id: 'us-14134498280', country: 'US' }, { id: 'us-17404619427', country: 'US' }, { id: 'us-12152688872', country: 'US' },
  { id: 'us-12152409264', country: 'US' }, { id: 'us-12155527184', country: 'US' }, { id: 'us-12156695708', country: 'US' },
  { id: 'us-12152149274', country: 'US' }, { id: 'us-16465190037', country: 'US' }, { id: 'us-12155013109', country: 'US' },
  { id: 'us-12153308972', country: 'US' }, { id: 'us-12155945135', country: 'US' }, { id: 'us-12155014450', country: 'US' },
  { id: 'us-16465105581', country: 'US' }, { id: 'us-12156029761', country: 'US' }, { id: 'us-12156029544', country: 'US' },
  { id: 'us-12155019866', country: 'US' }, { id: 'us-12155941987', country: 'US' }, { id: 'us-12155526021', country: 'US' },
  { id: 'us-12155549137', country: 'US' },
  // United Kingdom
  { id: 'uk-447417477095', country: 'GB' }, { id: 'uk-447405671467', country: 'GB' }, { id: 'uk-447459603196', country: 'GB' },
  { id: 'uk-447424061435', country: 'GB' }, { id: 'uk-447438478125', country: 'GB' }, { id: 'uk-447440426577', country: 'GB' },
  { id: 'uk-447917327980', country: 'GB' }, { id: 'uk-447979136852', country: 'GB' }, { id: 'uk-447308282680', country: 'GB' },
  { id: 'uk-447920662802', country: 'GB' },
  // Greece
  { id: 'gr-306974913102', country: 'GR' }, { id: 'gr-306978209848', country: 'GR' }, { id: 'gr-306970461358', country: 'GR' },
  { id: 'gr-306976910209', country: 'GR' }, { id: 'gr-306973592015', country: 'GR' }, { id: 'gr-306974872752', country: 'GR' },
  { id: 'gr-306974663347', country: 'GR' }, { id: 'gr-306940193382', country: 'GR' }, { id: 'gr-306970565259', country: 'GR' },
  { id: 'gr-306970446093', country: 'GR' },
  // Netherlands
  { id: 'nl-31630826396', country: 'NL' }, { id: 'nl-31613449087', country: 'NL' }, { id: 'nl-31617780160', country: 'NL' },
  { id: 'nl-31653538599', country: 'NL' }, { id: 'nl-31647761825', country: 'NL' }, { id: 'nl-31612440360', country: 'NL' },
  { id: 'nl-31657700013', country: 'NL' }, { id: 'nl-31686289639', country: 'NL' }, { id: 'nl-31645726853', country: 'NL' },
  { id: 'nl-31685549850', country: 'NL' },
  // Belgium
  { id: 'be-32467881495', country: 'BE' }, { id: 'be-32465194893', country: 'BE' }, { id: 'be-32465459514', country: 'BE' },
  { id: 'be-32465429413', country: 'BE' }, { id: 'be-32465520726', country: 'BE' }, { id: 'be-32465790418', country: 'BE' },
  { id: 'be-32465337418', country: 'BE' }, { id: 'be-32465440735', country: 'BE' }, { id: 'be-32466352688', country: 'BE' },
  { id: 'be-32466365199', country: 'BE' },
  // France
  { id: 'fr-33752989028', country: 'FR' }, { id: 'fr-33672629209', country: 'FR' }, { id: 'fr-33605651273', country: 'FR' },
  { id: 'fr-33758114416', country: 'FR' }, { id: 'fr-33745591536', country: 'FR' }, { id: 'fr-33758023768', country: 'FR' },
  { id: 'fr-33745586110', country: 'FR' }, { id: 'fr-33745593581', country: 'FR' }, { id: 'fr-33745645671', country: 'FR' },
  { id: 'fr-33780728845', country: 'FR' },
  // Spain
  { id: 'es-34639710702', country: 'ES' }, { id: 'es-34699826122', country: 'ES' }, { id: 'es-34631517261', country: 'ES' },
  { id: 'es-34608223970', country: 'ES' }, { id: 'es-34602179511', country: 'ES' }, { id: 'es-34689257191', country: 'ES' },
  { id: 'es-34631228143', country: 'ES' }, { id: 'es-34604331059', country: 'ES' }, { id: 'es-34629023515', country: 'ES' },
  { id: 'es-34612208119', country: 'ES' },
  // Italy
  { id: 'it-393509899247', country: 'IT' }, { id: 'it-393511313798', country: 'IT' }, { id: 'it-393509616801', country: 'IT' },
  { id: 'it-393508199284', country: 'IT' }, { id: 'it-393509675180', country: 'IT' }, { id: 'it-393508060104', country: 'IT' },
  { id: 'it-393509980837', country: 'IT' }, { id: 'it-393511955891', country: 'IT' }, { id: 'it-393508123829', country: 'IT' },
  { id: 'it-393509418437', country: 'IT' },
  // Austria
  { id: 'at-436776184029', country: 'AT' }, { id: 'at-436776340759', country: 'AT' }, { id: 'at-436656597340', country: 'AT' },
  { id: 'at-436656570972', country: 'AT' }, { id: 'at-436656571051', country: 'AT' }, { id: 'at-436656597352', country: 'AT' },
  { id: 'at-436656597269', country: 'AT' }, { id: 'at-436656597068', country: 'AT' }, { id: 'at-436656597308', country: 'AT' },
  { id: 'at-436504763900', country: 'AT' },
  // Denmark
  { id: 'dk-4591841365', country: 'DK' }, { id: 'dk-4552693317', country: 'DK' }, { id: 'dk-4550159257', country: 'DK' },
  { id: 'dk-4571629812', country: 'DK' }, { id: 'dk-4591439286', country: 'DK' }, { id: 'dk-4552611036', country: 'DK' },
  { id: 'dk-4549995639', country: 'DK' }, { id: 'dk-4591886554', country: 'DK' }, { id: 'dk-4550145734', country: 'DK' },
  { id: 'dk-4581904715', country: 'DK' },
  // Sweden
  { id: 'se-46720380024', country: 'SE' }, { id: 'se-46720380174', country: 'SE' }, { id: 'se-46762669011', country: 'SE' },
  { id: 'se-46700299205', country: 'SE' }, { id: 'se-46766537514', country: 'SE' }, { id: 'se-46700284934', country: 'SE' },
  { id: 'se-46737791723', country: 'SE' }, { id: 'se-46700294150', country: 'SE' }, { id: 'se-46762865564', country: 'SE' },
  { id: 'se-46767132356', country: 'SE' },
  // Germany
  { id: 'de-4915511026848', country: 'DE' }, { id: 'de-4915510075952', country: 'DE' }, { id: 'de-4915511001909', country: 'DE' },
  { id: 'de-4915511204337', country: 'DE' }, { id: 'de-4915511042149', country: 'DE' }, { id: 'de-4915511002204', country: 'DE' },
  { id: 'de-4915511209323', country: 'DE' }, { id: 'de-4915510283686', country: 'DE' }, { id: 'de-4915511029577', country: 'DE' },
  { id: 'de-4915510894003', country: 'DE' },
  // Finland
  { id: 'fi-358465573036', country: 'FI' }, { id: 'fi-358403647461', country: 'FI' }, { id: 'fi-358449500016', country: 'FI' },
  { id: 'fi-358449422995', country: 'FI' }, { id: 'fi-358449410863', country: 'FI' }, { id: 'fi-358449447109', country: 'FI' },
  { id: 'fi-358466133406', country: 'FI' }, { id: 'fi-358466133365', country: 'FI' }, { id: 'fi-358449369760', country: 'FI' },
  { id: 'fi-358402429232', country: 'FI' },
  // Bulgaria
  { id: 'bg-359895378767', country: 'BG' }, { id: 'bg-359887953052', country: 'BG' }, { id: 'bg-359895379490', country: 'BG' },
  { id: 'bg-359894839116', country: 'BG' }, { id: 'bg-359882499819', country: 'BG' }, { id: 'bg-359882782389', country: 'BG' },
  { id: 'bg-359889291524', country: 'BG' }, { id: 'bg-359889164532', country: 'BG' }, { id: 'bg-359889378533', country: 'BG' },
  { id: 'bg-359887443106', country: 'BG' },
  // Ireland
  { id: 'ie-353899646919', country: 'IE' }, { id: 'ie-353899462743', country: 'IE' }, { id: 'ie-353899459114', country: 'IE' },
  { id: 'ie-353899747266', country: 'IE' }, { id: 'ie-353899835595', country: 'IE' }, { id: 'ie-353899563913', country: 'IE' },
  { id: 'ie-353899656814', country: 'IE' }, { id: 'ie-353899656228', country: 'IE' }, { id: 'ie-353899847129', country: 'IE' },
  { id: 'ie-353899467720', country: 'IE' },
  // Latvia
  { id: 'lv-37124859394', country: 'LV' }, { id: 'lv-37125723748', country: 'LV' }, { id: 'lv-37128713281', country: 'LV' },
  { id: 'lv-37122017330', country: 'LV' }, { id: 'lv-37126174459', country: 'LV' }, { id: 'lv-37122403303', country: 'LV' },
  { id: 'lv-37128784287', country: 'LV' }, { id: 'lv-37125604784', country: 'LV' }, { id: 'lv-37120402944', country: 'LV' },
  { id: 'lv-37122371324', country: 'LV' },
  // Estonia
  { id: 'ee-37256107762', country: 'EE' }, { id: 'ee-37256144052', country: 'EE' }, { id: 'ee-37256142298', country: 'EE' },
  { id: 'ee-37256140566', country: 'EE' }, { id: 'ee-37256043868', country: 'EE' }, { id: 'ee-37258524786', country: 'EE' },
  { id: 'ee-37258207077', country: 'EE' }, { id: 'ee-37258235480', country: 'EE' }, { id: 'ee-37255632258', country: 'EE' },
  { id: 'ee-37255665534', country: 'EE' },
  // Moldova
  { id: 'md-37376997241', country: 'MD' }, { id: 'md-37376779376', country: 'MD' }, { id: 'md-37376925824', country: 'MD' },
  { id: 'md-37378910513', country: 'MD' }, { id: 'md-37376559148', country: 'MD' }, { id: 'md-37376993105', country: 'MD' },
  { id: 'md-37376915074', country: 'MD' }, { id: 'md-37376973382', country: 'MD' }, { id: 'md-37376980383', country: 'MD' },
  { id: 'md-37376871748', country: 'MD' },
  // Slovenia
  { id: 'si-38670262346', country: 'SI' }, { id: 'si-38670218471', country: 'SI' }, { id: 'si-38671826471', country: 'SI' },
  { id: 'si-38671808986', country: 'SI' }, { id: 'si-38671825468', country: 'SI' }, { id: 'si-38670220170', country: 'SI' },
  { id: 'si-38671801945', country: 'SI' }, { id: 'si-38670535553', country: 'SI' }, { id: 'si-38670572953', country: 'SI' },
  { id: 'si-38670478416', country: 'SI' },
  // Argentina
  { id: 'ar-543815890994', country: 'AR' }, { id: 'ar-543813638388', country: 'AR' }, { id: 'ar-5491166895824', country: 'AR' },
  { id: 'ar-541178391032', country: 'AR' }, { id: 'ar-541178391038', country: 'AR' }, { id: 'ar-541178394841', country: 'AR' },
  { id: 'ar-5491153337198', country: 'AR' }, { id: 'ar-5491150298646', country: 'AR' }, { id: 'ar-541164113526', country: 'AR' },
  // Ivory Coast
  { id: 'ci-2250506169325', country: 'CI' }, { id: 'ci-2250700966743', country: 'CI' }, { id: 'ci-2250769708271', country: 'CI' },
  { id: 'ci-2250720184686', country: 'CI' }, { id: 'ci-2250715501715', country: 'CI' }, { id: 'ci-2250701208509', country: 'CI' },
  { id: 'ci-2250748601800', country: 'CI' }, { id: 'ci-2250171983455', country: 'CI' }, { id: 'ci-2250171940341', country: 'CI' },
  { id: 'ci-2250788200294', country: 'CI' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const mainPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/free-sms-numbers`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
  ];

  // Legal pages (required for AdSense)
  const legalPages = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Dynamic phone number pages
  const numberPages = PHONE_NUMBERS.map((number) => ({
    url: `${BASE_URL}/number/${number.id}`,
    lastModified: new Date(),
    changeFrequency: 'hourly' as const,
    priority: 0.8,
  }));

  return [
    ...mainPages,
    ...legalPages,
    ...numberPages,
  ];
}
