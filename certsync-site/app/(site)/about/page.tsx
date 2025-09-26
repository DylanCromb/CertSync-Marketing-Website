import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about CertSync and our mission to simplify certificate and permit management. Meet our team of experts dedicated to compliance automation.',
  openGraph: {
    title: 'About CertSync — Meet Our Team',
    description:
      'Learn about CertSync and our mission to simplify certificate and permit management. Meet our team of experts dedicated to compliance automation.',
  },
};

export default function About() {
  return <AboutPage />;
}
