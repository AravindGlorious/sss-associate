import React from 'react';
import DisclaimerClient from './DisclaimerClient';

export const metadata = {
  title: 'Bar Council Compliance / Advocate Disclaimer | SSS Associate',
  description:
    'Bar Council of India compliance and professional advocate disclaimer for SSS Associate [ MSME ] Registered in Papanasam, Thanjavur, and Tamil Nadu, India.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/disclaimer',
  },
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
