'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/policy', label: 'Policy' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-lg">
          CertSync
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-primary ${pathname === l.href ? 'text-primary font-semibold' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/signin"
            className="rounded-lg border px-3 py-1.5 hover:bg-gray-50"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
