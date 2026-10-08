import React from 'react';
import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'All Services | Legal Opinion, Land Survey, Loans & Auditing | SSS Associate',
  description:
    'Explore our 10 core financial and legal advisory services in Papanasam, Thanjavur, and Tamil Nadu: Legal Opinion, Land Survey, Accounts, Auditing, Loan Facilitation, Private Finance, Takeovers, Settlements, and Bank Auctions.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/services',
  },
  openGraph: {
    title: 'All Services | Legal Opinion, Land Survey, Loans & Auditing | SSS Associate',
    description:
      'Explore our 10 core financial and legal advisory services in Papanasam, Thanjavur, and Tamil Nadu: Legal Opinion, Land Survey, Accounts, Auditing, Loan Facilitation, Private Finance, Takeovers, Settlements, and Bank Auctions.',
    url: 'https://sss-associate.vercel.app/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
