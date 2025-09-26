import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'All staff licences & permits. Tracked. Verified. On time. CertSync unites a mobile wallet for employees with an employer dashboard that automates reminders, approvals and audit-ready reporting.',
  openGraph: {
    title:
      'CertSync — All staff licences & permits. Tracked. Verified. On time.',
    description:
      'CertSync unites a mobile wallet for employees with an employer dashboard that automates reminders, approvals and audit-ready reporting.',
  },
};

export default function Home() {
  return <HomePage />;
}
