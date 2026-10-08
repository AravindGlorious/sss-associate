import React from 'react';
import '../src/index.css';

export const metadata = {
  metadataBase: new URL('https://sss-associate.vercel.app'),
  title: {
    default: 'SSS Associate - Legal Opinion, Land Survey, Bank Loans & Auditing | Papanasam, Tamil Nadu',
    template: '%s | SSS Associate [ MSME ] Registered',
  },
  description:
    'MSME registered legal opinion, land survey, accounts, auditing, bank loan facilitation, private finance, takeovers, debt settlements, and SARFAESI bank auctions in Papanasam, Thanjavur, and Tamil Nadu. Call 9385954338.',
  keywords: [
    'SSS Associate',
    'Legal Opinion Papanasam',
    'Legal Services Tamil Nadu',
    'Land Survey Thanjavur',
    'Bank Loans Facilitation',
    'Auditing Services',
    'Accounts Management',
    'Private Finance Tamil Nadu',
    'Loan Takeovers',
    'Debt Settlement OTS',
    'SARFAESI Bank Auctions',
    'Real Estate Builders Papanasam',
    '9385954338',
    '9087853733',
  ],
  authors: [{ name: 'SSS Associate' }],
  creator: 'SSS Associate',
  publisher: 'SSS Associate [ MSME ] Registered',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sss-associate.vercel.app/',
    siteName: 'SSS Associate',
    title: 'SSS Associate - Legal Opinion, Land Survey, Bank Loans & Auditing | Papanasam, Tamil Nadu',
    description:
      'MSME registered legal opinion, land survey, accounts, auditing, bank loan facilitation, private finance, takeovers, debt settlements, and SARFAESI bank auctions in Papanasam, Thanjavur, and Tamil Nadu.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSS Associate - Legal Opinion, Land Survey, Bank Loans & Auditing | Papanasam, Tamil Nadu',
    description:
      'MSME registered legal opinion, land survey, accounts, auditing, bank loan facilitation, private finance, takeovers, debt settlements, and SARFAESI bank auctions in Papanasam, Thanjavur, and Tamil Nadu.',
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
    canonical: 'https://sss-associate.vercel.app/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'LegalService', 'FinancialService', 'ProfessionalService'],
      '@id': 'https://sss-associate.vercel.app/#organization',
      name: 'SSS Associate',
      alternateName: 'SSS Associate MSME Registered Legal, Survey & Financial Consultancy',
      description:
        'Professional MSME registered consultancy providing Legal Opinion, Land Survey, Accounts, Auditing, Loan Facilitation, Private Finance, Takeovers, Settlements, Bank Auctions, Real Estate & Builders advisory in Papanasam, Thanjavur, and Tamil Nadu.',
      url: 'https://sss-associate.vercel.app/',
      telephone: ['+91-9385954338', '+91-9087853733'],
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Papanasam Main Road',
        addressLocality: 'Papanasam',
        addressRegion: 'Tamil Nadu',
        postalCode: '614205',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.9254,
        longitude: 79.277,
      },
      areaServed: [
        'Papanasam',
        'Thanjavur',
        'Kumbakonam',
        'Tiruchirappalli',
        'Tamil Nadu',
        'India',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '19:30',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1000',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
