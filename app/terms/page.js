import React from 'react';
import TermsClient from './TermsClient';

export const metadata = {
  title: 'Terms of Use (User Agreement) | SSS Associate',
  description:
    'Terms of Use and client User Agreement governing professional advisory services provided by SSS Associate [ MSME ] Registered in Tamil Nadu, India.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/terms',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
