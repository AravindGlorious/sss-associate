import React from 'react';
import HomeClient from './HomeClient';

export const metadata = {
  title: 'SSS Associate - Legal Opinion, Land Survey, Bank Loans & Auditing | Papanasam, Tamil Nadu',
  description:
    'MSME registered legal opinion, land survey, accounts, auditing, bank loan facilitation, private finance, takeovers, debt settlements, and SARFAESI bank auctions in Papanasam, Thanjavur, and Tamil Nadu. Call 9385954338.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/',
  },
  openGraph: {
    title: 'SSS Associate - Legal Opinion, Land Survey, Bank Loans & Auditing | Papanasam, Tamil Nadu',
    description:
      'MSME registered legal opinion, land survey, accounts, auditing, bank loan facilitation, private finance, takeovers, debt settlements, and SARFAESI bank auctions in Papanasam, Thanjavur, and Tamil Nadu.',
    url: 'https://sss-associate.vercel.app/',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
