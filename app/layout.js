import type { Metadata } from 'next';
import '../src/index.css';

const SITE_URL = 'https://sss-associate.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      'SSS Associate | Legal, Land Survey, Loans & Auditing Services in Tamil Nadu',
    template: '%s | SSS Associate',
  },

  description:
    'SSS Associate provides legal advisory, land survey assistance, accounts, auditing, bank loan assistance, loan takeovers, debt settlement, OTS and SARFAESI bank auction support across Tamil Nadu.',

  authors: [
    {
      name: 'SSS Associate',
    },
  ],

  creator: 'SSS Associate',
  publisher: 'SSS Associate',

  applicationName: 'SSS Associate',

  referrer: 'origin-when-cross-origin',

  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'SSS Associate',

    title:
      'SSS Associate | Legal, Land Survey, Loans & Auditing Services in Tamil Nadu',

    description:
      'Legal advisory, land survey assistance, accounts, auditing, loan assistance, debt settlement, OTS and SARFAESI bank auction support across Tamil Nadu.',

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
      'SSS Associate | Legal, Land Survey, Loans & Auditing Services in Tamil Nadu',

    description:
      'Legal, financial, property, loan and bank auction advisory support across Tamil Nadu.',

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

      description:
        'SSS Associate provides legal advisory, land survey assistance, accounts, auditing, bank loan assistance, loan takeovers, debt settlement, OTS and SARFAESI bank auction support across Tamil Nadu.',

      url: SITE_URL,

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
        'SSS Associate | Legal, Land Survey, Loans & Auditing Services in Tamil Nadu',

      description:
        'SSS Associate provides legal advisory, land survey assistance, accounts, auditing, bank loan assistance, loan takeovers, debt settlement, OTS and SARFAESI bank auction support across Tamil Nadu.',

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
