import type { Metadata } from 'next';
import PricingPage from './PricingPage';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for CertSync. Choose the plan that fits your organization. Starter, Team, and Enterprise plans available.',
  openGraph: {
    title: 'CertSync — Simple, Transparent Pricing',
    description:
      'Choose the plan that fits your organization. Starter, Team, and Enterprise plans available.',
  },
};

export default function Pricing() {
  return <PricingPage />;
}
