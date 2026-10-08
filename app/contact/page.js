import React from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | SSS Associate - Papanasam, Thanjavur, Tamil Nadu',
  description:
    'Contact SSS Associate in Papanasam, Thanjavur district, Tamil Nadu. Direct helplines: 9385954338 & 9087853733. WhatsApp support available for Legal, Land Survey, Loans, and Audits.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us | SSS Associate - Papanasam, Thanjavur, Tamil Nadu',
    description:
      'Contact SSS Associate in Papanasam, Thanjavur district, Tamil Nadu. Direct helplines: 9385954338 & 9087853733.',
    url: 'https://sss-associate.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
