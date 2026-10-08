import HomeClient from './HomeClient';

const SITE_URL = 'https://sss-associate.vercel.app';

export const metadata = {
  title:
    'SSS Associate | Legal, Financial & Business Advisory Services in Tamil Nadu',

  description:
    'SSS Associate provides legal advisory, land survey and boundary verification, accounts management, auditing, bank loan assistance, loan takeover and debt restructuring, debt settlement, OTS, real estate and SARFAESI bank auction support across Tamil Nadu.',

  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SSS Associate',

    title:
      'SSS Associate | Legal, Financial & Business Advisory Services in Tamil Nadu',

    description:
      'Legal advisory, land survey, accounts, auditing, loan assistance, debt restructuring, settlement, real estate and SARFAESI bank auction support across Tamil Nadu.',

    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt:
          'SSS Associate - Legal, Financial and Business Advisory Services in Tamil Nadu',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'SSS Associate | Legal, Financial & Business Advisory Services in Tamil Nadu',

    description:
      'Legal, financial, property, loan and business advisory support across Tamil Nadu.',

    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,

      name: 'SSS Associate',

      url: SITE_URL,

      description:
        'SSS Associate provides legal, financial, property, loan, accounting and business advisory services across Tamil Nadu.',

      telephone: [
        '+919385954338',
        '+919087853733',
      ],

      areaServed: {
        '@type': 'State',
        name: 'Tamil Nadu',
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
    },

    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,

      url: SITE_URL,

      name: 'SSS Associate',

      description:
        'Legal, financial, property, loan and business advisory services across Tamil Nadu.',

      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },

      inLanguage: 'en-IN',
    },

    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,

      url: SITE_URL,

      name:
        'SSS Associate | Legal, Financial & Business Advisory Services in Tamil Nadu',

      description:
        'SSS Associate provides legal advisory, land survey, accounts management, auditing, loan assistance, debt restructuring, debt settlement, real estate and SARFAESI bank auction support across Tamil Nadu.',

      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },

      about: {
        '@id': `${SITE_URL}/#organization`,
      },

      inLanguage: 'en-IN',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <HomeClient />
    </>
  );
}
