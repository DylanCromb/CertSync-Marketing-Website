export default function About() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">About us</h1>
      <p className="mt-6 max-w-2xl">
        CertSync was founded to solve the complex challenge of managing staff
        credentials and permits across organizations. We believe that compliance
        shouldn&apos;t be complicated, and that technology can make credential
        management simple, automated, and reliable.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To eliminate the administrative burden of credential management
            while ensuring nothing falls through the cracks.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            A world where every organization can confidently manage their
            compliance requirements with ease and transparency.
          </p>
        </div>
      </div>
    </main>
  );
}
