import type { Metadata } from 'next';
import PolicyPage from './PolicyPage';

export const metadata: Metadata = {
  title: 'Policy and Conditions',
  description:
    'Review CertSync policies and terms to understand how we protect your data and govern our services. Privacy policy, terms of service, and more.',
  openGraph: {
    title: 'CertSync — Policy and Conditions',
    description:
      'Review CertSync policies and terms to understand how we protect your data and govern our services.',
  },
};

export default function Policy() {
  return <PolicyPage />;
}
