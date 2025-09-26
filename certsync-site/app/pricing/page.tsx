export default function Pricing() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-6 max-w-2xl">
        Choose the plan that works best for your organization. All plans include
        our core features with no hidden fees.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Starter</h2>
          <div className="text-3xl font-bold mb-6">
            $29<span className="text-lg text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Up to 50 employees
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Mobile app access
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Basic reporting
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Email support
            </li>
          </ul>
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90">
            Start free trial
          </button>
        </div>
        <div className="border-2 border-primary rounded-lg p-8 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <h2 className="text-2xl font-semibold mb-4">Professional</h2>
          <div className="text-3xl font-bold mb-6">
            $79<span className="text-lg text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Up to 200 employees
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Advanced reporting
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              API access
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Priority support
            </li>
          </ul>
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90">
            Start free trial
          </button>
        </div>
        <div className="border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <div className="text-3xl font-bold mb-6">Custom</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Unlimited employees
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Custom integrations
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              Dedicated support
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">✓</span>
              SLA guarantee
            </li>
          </ul>
          <button className="w-full border border-primary text-primary py-3 rounded-lg hover:bg-primary/5">
            Contact sales
          </button>
        </div>
      </div>
    </main>
  );
}
