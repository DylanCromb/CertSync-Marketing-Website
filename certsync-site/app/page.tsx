export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="gradient-hero pt-24 pb-16 text-center text-white">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">
            Welcome to CertSync
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            All your staff licenses & permits, in one place
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/pricing"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-primary shadow hover:shadow-md"
            >
              Get the app
            </a>
            <a
              href="/about"
              className="inline-block rounded-full border border-white/80 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              See employer dashboard
            </a>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-16">
          {/* Employees */}
          <div>
            <h2 className="text-3xl font-bold text-center">For Employees</h2>
            <div className="mt-8 flex justify-center">
              <div className="floating w-[200px] h-[400px] rounded-[30px] border-[10px] border-neutral-800 shadow-2xl bg-gradient-to-br from-neutral-100 to-white" />
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">01</div>
                <div>
                  <h3 className="font-semibold">Store & track</h3>
                  <p className="text-gray-600">
                    Add your licences, tickets and permits once, access on any
                    device, and set expiry reminders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">02</div>
                <div>
                  <h3 className="font-semibold">Smart reminders</h3>
                  <p className="text-gray-600">
                    Customizable reminders keep you ahead of expiries with handy
                    renewal links.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">03</div>
                <div>
                  <h3 className="font-semibold">Share what you choose</h3>
                  <p className="text-gray-600">
                    Share only what&apos;s needed. Link your team in seconds
                    with privacy controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Employers */}
          <div>
            <h2 className="text-3xl font-bold text-center">For Employers</h2>
            <div className="mt-8 flex justify-center">
              <div className="floating w-full max-w-[400px] h-[250px] rounded-[10px] border-[15px] border-neutral-800 shadow-2xl bg-gradient-to-br from-neutral-100 to-white relative">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[100px] h-[20px] bg-neutral-500 rounded-b-[10px]" />
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">01</div>
                <div>
                  <h3 className="font-semibold">Assign & verify in minutes</h3>
                  <p className="text-gray-600">
                    Set requirements by role or site. Staff upload proof;
                    managers approve.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">02</div>
                <div>
                  <h3 className="font-semibold">See risk at a glance</h3>
                  <p className="text-gray-600">
                    Dashboard of missing/expiring items with filters by urgency,
                    role, contractor.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-black text-primary">03</div>
                <div>
                  <h3 className="font-semibold">Auditor-ready reporting</h3>
                  <p className="text-gray-600">
                    Export CSV/PDF packs with statuses, dates and evidence
                    links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose CertSync?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                '📋',
                'Complete Compliance',
                'Never miss a renewal with automated tracking and smart notifications.',
              ],
              [
                '🔒',
                'Bank-Level Security',
                'Enterprise-grade encryption and hardened security.',
              ],
              [
                '📊',
                'Real-Time Analytics',
                'Dashboards for instant compliance visibility.',
              ],
              [
                '🚀',
                'Quick Implementation',
                'Up and running in minutes; zero training required.',
              ],
              [
                '💼',
                'Industry Specific',
                'Construction, healthcare, logistics and more.',
              ],
              [
                '🌐',
                'Global Scale',
                'Effortless scaling from 10 to 10,000 staff.',
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl text-white bg-gradient-to-br from-indigo-400 to-purple-500">
                  {icon}
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
