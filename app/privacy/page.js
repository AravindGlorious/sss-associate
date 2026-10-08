import React from 'react';
import PrivacyClient from './PrivacyClient';

export const metadata = {
  title: 'Privacy Policy | SSS Associate - DPDP Act Compliance',
  description:
    'Privacy Policy and data protection commitments of SSS Associate [ MSME ] Registered in Tamil Nadu, India. Fully compliant with Digital Personal Data Protection Act.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
