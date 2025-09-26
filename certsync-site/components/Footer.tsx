import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-extrabold text-xl">CertSync</div>
          <p className="text-white/70 mt-2">
            The simple solution to credential and permit management.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Links</div>
          <div className="flex flex-col gap-1">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/policy">Policies</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Discover our app</div>
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-white/10 rounded" />
            <div className="h-10 w-32 bg-white/10 rounded" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-sm text-white/60">
          © {new Date().getFullYear()} CertSync
        </div>
      </div>
    </footer>
  );
}
