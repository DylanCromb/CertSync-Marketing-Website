export default function Policy() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">Policy and conditions</h1>
      <p className="mt-6 max-w-2xl">
        Our policies and terms of service outline how we protect your data and
        what you can expect from our platform.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            Learn how we collect, use, and protect your personal information and
            credential data.
          </p>
          <a
            href="/policy/privacy-policy"
            className="text-primary hover:underline"
          >
            Read privacy policy →
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Terms of Service</h2>
          <p className="text-gray-600 mb-4">
            Understand the terms and conditions for using CertSync&apos;s
            platform and services.
          </p>
          <a
            href="/policy/terms-of-service"
            className="text-primary hover:underline"
          >
            Read terms →
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Security Policy</h2>
          <p className="text-gray-600 mb-4">
            Our commitment to keeping your data secure with industry-leading
            security measures.
          </p>
          <a
            href="/policy/security-policy"
            className="text-primary hover:underline"
          >
            Read security policy →
          </a>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Cookie Policy</h2>
          <p className="text-gray-600 mb-4">
            Information about how we use cookies and similar technologies on our
            website.
          </p>
          <a
            href="/policy/cookie-policy"
            className="text-primary hover:underline"
          >
            Read cookie policy →
          </a>
        </div>
      </div>
    </main>
  );
}
