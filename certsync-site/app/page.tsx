export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="gradient-hero pt-24 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            All staff licences & permits. Tracked. Verified. On time.
          </h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            CertSync unites a mobile wallet for employees with an employer
            dashboard that automates reminders, approvals and audit-ready
            reporting—so nothing slips through the cracks.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-primary shadow hover:shadow-md"
              href="/pricing"
            >
              Start free trial
            </a>
            <a
              className="inline-block rounded-xl border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10"
              href="#apps"
            >
              Get the app
            </a>
          </div>
        </div>
      </section>

      {/* EMPLOYEES */}
      <section id="apps" className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">
            The CertSync mobile app
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">01</div>
              <h3 className="mt-3 font-semibold">
                Upload once, never chase again
              </h3>
              <p className="mt-2 text-gray-600">
                Auto-extract expiries from PDFs/photos. Live countdown per item.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">02</div>
              <h3 className="mt-3 font-semibold">Smart reminders</h3>
              <p className="mt-2 text-gray-600">
                Custom 90/30/7-day schedules. Email/SMS/Slack/WhatsApp*.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">03</div>
              <h3 className="mt-3 font-semibold">Granular access</h3>
              <p className="mt-2 text-gray-600">
                Share per document, revoke anytime. Full view audit trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYERS */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">
            The CertSync Web platform
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">01</div>
              <h3 className="mt-3 font-semibold">
                Bulk assign & verify in minutes
              </h3>
              <p className="mt-2 text-gray-600">
                Roles/sites with valid-from/to; approve or reject with evidence.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">02</div>
              <h3 className="mt-3 font-semibold">See risk at a glance</h3>
              <p className="mt-2 text-gray-600">
                Dashboard of missing/expiring items; filter by urgency, role,
                contractor.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="text-5xl font-black text-primary/80">03</div>
              <h3 className="mt-3 font-semibold">Auditor-ready reporting</h3>
              <p className="mt-2 text-gray-600">
                Export CSV/PDF packs with statuses, dates and evidence links.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
