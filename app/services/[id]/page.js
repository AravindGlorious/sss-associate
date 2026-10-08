import React from 'react';
import ServiceDetailClient from './ServiceDetailClient';
import { SERVICES_DATA } from '../../../src/data/servicesData';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const serviceId = resolvedParams?.id || 'legal-advisory';
  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  return {
    title: `${service.title} | SSS Associate - Papanasam, Tamil Nadu`,
    description: `${service.shortDesc} Professional advisory, document audit, and compliance representation by SSS Associate in Papanasam, Thanjavur, and Tamil Nadu. Call 9385954338.`,
    alternates: {
      canonical: `https://sss-associate.vercel.app/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | SSS Associate`,
      description: service.shortDesc,
      url: `https://sss-associate.vercel.app/services/${service.id}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const serviceId = resolvedParams?.id || 'legal-advisory';
  return <ServiceDetailClient serviceId={serviceId} />;
}
