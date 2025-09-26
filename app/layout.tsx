import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'CertSync — Licence & Permit Management',
    template: '%s | CertSync',
  },
  description: 'Streamline your certificate management with CertSync. Automated tracking, renewal alerts, and compliance monitoring.',
  keywords: ['certificate management', 'permit tracking', 'licence management', 'compliance', 'automation'],
  authors: [{ name: 'CertSync Team' }],
  creator: 'CertSync',
  publisher: 'CertSync',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://certsync.com',
    siteName: 'CertSync',
    title: 'CertSync — Licence & Permit Management',
    description: 'Streamline your certificate management with CertSync. Automated tracking, renewal alerts, and compliance monitoring.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'CertSync — Licence & Permit Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CertSync — Licence & Permit Management',
    description: 'Streamline your certificate management with CertSync. Automated tracking, renewal alerts, and compliance monitoring.',
    images: ['/og.png'],
    creator: '@certsync',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
