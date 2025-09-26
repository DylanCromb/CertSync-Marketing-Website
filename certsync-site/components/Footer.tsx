import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo and Caption */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary mb-4 block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            >
              CertSync
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The simple solution to credential and permit management.
            </p>
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex justify-center">
            <nav
              className="flex flex-wrap justify-center gap-6 text-sm"
              role="navigation"
              aria-label="Footer navigation"
            >
              <Link
                href="/about"
                className="text-neutral-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
              >
                About
              </Link>
              <span className="text-neutral-600" aria-hidden="true">
                ·
              </span>
              <Link
                href="/contact"
                className="text-neutral-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
              >
                Contact
              </Link>
              <span className="text-neutral-600" aria-hidden="true">
                ·
              </span>
              <Link
                href="/policy"
                className="text-neutral-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
              >
                Policies
              </Link>
              <span className="text-neutral-600" aria-hidden="true">
                ·
              </span>
              <Link
                href="/pricing"
                className="text-neutral-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Right: App Discovery */}
          <div className="text-right">
            <p className="text-neutral-300 text-sm mb-4">Discover our app</p>
            <div className="flex justify-end gap-3">
              {/* Google Play Badge Placeholder */}
              <div
                className="bg-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                role="button"
                tabIndex={0}
                aria-label="Download from Google Play Store"
              >
                Google Play
              </div>
              {/* App Store Badge Placeholder */}
              <div
                className="bg-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                role="button"
                tabIndex={0}
                aria-label="Download from App Store"
              >
                App Store
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>© {currentYear} CertSync. All rights reserved.</p>
            <a
              href="mailto:support@certsync.com"
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2 py-1"
            >
              support@certsync.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
