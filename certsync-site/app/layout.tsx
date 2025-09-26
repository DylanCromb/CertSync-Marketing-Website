import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CertSync — Licence & Permit Management',
  description:
    'All staff licences & permits in one place. CertSync tracks, reminds and reports so nothing slips through the cracks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' text-gray-900 antialiased'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
