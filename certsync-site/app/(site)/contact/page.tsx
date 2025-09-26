import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with CertSync. Have questions about our certificate management platform? We'd love to hear from you.",
  openGraph: {
    title: 'CertSync — Contact Us',
    description:
      "Get in touch with CertSync. Have questions about our certificate management platform? We'd love to hear from you.",
  },
};

export default function Contact() {
  return <ContactPage />;
}
