import SectionHeader from '@/components/SectionHeader';
import GradientButton from '@/components/GradientButton';
import { Check, Star, Crown, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for small teams getting started',
      price: '$29',
      period: '/month',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Up to 5 users',
        'Basic certificate tracking',
        'Email reminders',
        'Standard support',
        'Mobile app access',
      ],
      cta: 'Get Started',
      popular: false,
      gradient: 'from-gray-100 to-gray-200',
    },
    {
      name: 'Team',
      description: 'Perfect for growing teams and multiple sites',
      price: '$79',
      period: '/month',
      icon: <Star className="w-6 h-6" />,
      features: [
        'Up to 20 users',
        'Advanced tracking & reporting',
        'SMS & Slack reminders',
        'Priority support',
        'Custom branding',
        'API access',
        'Bulk operations',
      ],
      cta: 'Choose Team',
      popular: true,
      gradient: 'from-primary to-secondary',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom',
      period: '',
      icon: <Crown className="w-6 h-6" />,
      features: [
        'Unlimited users',
        'Dedicated account manager',
        'On-premise deployment options',
        '24/7 Premium support',
        'Advanced API access',
        'Custom integrations',
        'White-label solution',
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-secondary to-accent',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-glow">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose the plan that best fits your organization&apos;s needs. All
            plans include access to our mobile app and web platform, with
            dedicated support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Choose Your Plan"
            subtitle="Flexible pricing options to scale with your organization"
          />

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg p-8 shadow-lg hover-lift transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-500 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <GradientButton
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                  href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                >
                  {plan.cta}
                </GradientButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be prorated and reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all plans. No credit card
                required to get started.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What happens if I exceed my user limit?
              </h3>
              <p className="text-gray-600">
                We&apos;ll notify you when you&apos;re approaching your limit.
                You can upgrade your plan or purchase additional user licenses
                as needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom enterprise solutions?
              </h3>
              <p className="text-gray-600">
                Yes, our Enterprise plan includes custom integrations,
                on-premise deployment options, and dedicated support. Contact
                our sales team to discuss your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
