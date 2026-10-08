import React from 'react';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | SSS Associate - MSME Registered Consultancy Papanasam',
  description:
    'Learn about SSS Associate, an MSME certified consultancy in Papanasam, Tamil Nadu specializing in Legal Opinion, Land Survey, Financial Audits, Bank Loans, and SARFAESI Bank Auctions. 1,000+ satisfied clients.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | SSS Associate - MSME Registered Consultancy Papanasam',
    description:
      'Learn about SSS Associate, an MSME certified consultancy in Papanasam, Tamil Nadu specializing in Legal Opinion, Land Survey, Financial Audits, Bank Loans, and SARFAESI Bank Auctions.',
    url: 'https://sss-associate.vercel.app/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
