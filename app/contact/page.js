import React from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact SSS Associate Services Coimbatore | Best Legal Opinion & Property Registration',
  description:
    'Looking for expert legal opinion, land survey, and property registration in Coimbatore? Contact SSS Associate Services at 9385954338 & 9087853733. Get reliable legal consultancy and documentation support in Coimbatore, Tamil Nadu.',
  keywords: [
    'Legal Opinion Coimbatore',
    'Property Registration Coimbatore',
    'Land Survey Coimbatore',
    'Document Verification Coimbatore',
    'SSS Associate Services Coimbatore',
    'Legal Consultants in Coimbatore'
  ],
  alternates: {
    canonical: 'https://sss-associate.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact SSS Associate Services Coimbatore | Legal & Property Experts',
    description:
      'Connect with SSS Associate Services in Coimbatore for Legal Opinions, Property Registration, Land Surveys, and Bank Loan documentation. Call 9385954338 / 9087853733.',
    url: 'https://sss-associate.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SSS Associate Services Coimbatore',
    description: 'Expert Legal Opinion, Land Survey & Property Registration Services in Coimbatore. Call: 9385954338.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
