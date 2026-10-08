import React from 'react';
import RefundClient from './RefundClient';

export const metadata = {
  title: 'Refund & Cancellation Policy | SSS Associate',
  description:
    'Transparent Refund & Cancellation Policy for advisory retainers, document audits, and legal consulting by SSS Associate [ MSME ] Registered in Tamil Nadu, India.',
  alternates: {
    canonical: 'https://sss-associate.vercel.app/refund',
  },
};

export default function RefundPage() {
  return <RefundClient />;
}
