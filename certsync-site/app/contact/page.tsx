export default function Contact() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">Contact us</h1>
      <p className="mt-6 max-w-2xl">
        Have questions about CertSync? We&apos;d love to hear from you. Send us
        a message and we&apos;ll respond as soon as possible.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your company"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-semibold"
            >
              Send message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@certsync.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                123 Business Street
                <br />
                Suite 100
                <br />
                San Francisco, CA 94105
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
