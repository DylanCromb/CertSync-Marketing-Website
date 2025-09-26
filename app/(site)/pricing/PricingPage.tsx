'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Container from '@/components/Container';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import Card from '@/components/Card';

export default function PricingPage() {
  const [staffCount, setStaffCount] = useState(20);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-50px' });
  const faqInView = useInView(faqRef, { once: true, margin: '-50px' });

  // Calculate pricing
  const starterPrice = Math.max(29, staffCount * 3);
  const teamPrice = Math.max(199, staffCount * 3);

  const pricingTiers = [
    {
      name: 'Starter',
      staffLimit: '≤20 staff',
      price: staffCount <= 20 ? `$${starterPrice}` : 'Contact us',
      period: staffCount <= 20 ? '/month' : '',
      description: 'Essential tracking + reminders',
      features: [
        'Up to 20 staff members',
        'Certificate tracking',
        'Email reminders',
        'Basic reporting',
        'Email support',
      ],
      cta: staffCount <= 20 ? 'Start free trial' : 'Contact sales',
      popular: false,
    },
    {
      name: 'Team',
      staffLimit: '≤200 staff',
      price: staffCount <= 200 ? `$${teamPrice}` : 'Contact us',
      period: staffCount <= 200 ? '/month' : '',
      description: 'Bulk assigning, dashboards, exports',
      features: [
        'Up to 200 staff members',
        'Bulk certificate assignment',
        'Advanced dashboards',
        'Export capabilities',
        'Priority support',
        'API access',
      ],
      cta: staffCount <= 200 ? 'Start free trial' : 'Contact sales',
      popular: true,
    },
    {
      name: 'Enterprise',
      staffLimit: '200+ staff',
      price: 'Custom',
      period: '',
      description: 'SSO, advanced reporting, dedicated support',
      features: [
        'Unlimited staff members',
        'Single Sign-On (SSO)',
        'Advanced reporting',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment',
      ],
      cta: 'Contact sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
    },
    {
      question: 'What happens if I exceed my staff limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or contact us to discuss your needs.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 20% discount for annual billing on all paid plans. Contact us for more information.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, Starter and Team plans come with a 14-day free trial. No credit card required to get started.',
    },
    {
      question: 'What support options are available?',
      answer: 'Starter includes email support, Team includes priority support, and Enterprise includes dedicated support with SLA guarantees.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="col-span-12 text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your organization's needs. 
            All plans include our core certificate management features.
          </p>
          
          {/* Staff Count Input */}
          <div className="max-w-md mx-auto">
            <label htmlFor="staff-count" className="block text-sm font-medium text-neutral-700 mb-2">
              Number of staff members
            </label>
            <input
              id="staff-count"
              type="number"
              min="1"
              max="1000"
              value={staffCount}
              onChange={(e) => setStaffCount(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-center text-lg"
            />
            <p className="text-sm text-neutral-500 mt-2">
              Pricing: $3 per user/month (minimums apply)
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={pricingRef}
          className="col-span-12 grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUpVariants}
            >
              <Card 
                className={`relative ${
                  tier.popular ? 'border-2 border-primary' : ''
                }`}
                padding="lg"
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <p className="text-neutral-600 mb-4">{tier.staffLimit}</p>
                  <p className="text-neutral-600 text-sm mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-neutral-900">{tier.price}</span>
                    {tier.period && <span className="text-neutral-600 ml-2">{tier.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {tier.popular ? (
                  <PrimaryButton className="w-full">
                    {tier.cta}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton className="w-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200">
                    {tier.cta}
                  </SecondaryButton>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          className="col-span-12 mb-20"
          variants={fadeUpVariants}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Team</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {[
                    ['Staff Members', '≤20', '≤200', 'Unlimited'],
                    ['Certificate Tracking', '✓', '✓', '✓'],
                    ['Email Reminders', '✓', '✓', '✓'],
                    ['Bulk Assignment', '✗', '✓', '✓'],
                    ['Advanced Dashboards', '✗', '✓', '✓'],
                    ['Export Capabilities', '✗', '✓', '✓'],
                    ['API Access', '✗', '✓', '✓'],
                    ['Single Sign-On', '✗', '✗', '✓'],
                    ['Advanced Reporting', '✗', '✗', '✓'],
                    ['Dedicated Support', '✗', '✗', '✓'],
                  ].map(([feature, starter, team, enterprise], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-neutral-900">{feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-neutral-600">{starter}</td>
                      <td className="px-6 py-4 text-center text-sm text-neutral-600">{team}</td>
                      <td className="px-6 py-4 text-center text-sm text-neutral-600">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          ref={faqRef}
          className="col-span-12 max-w-3xl mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} hover={false} padding="none">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-neutral-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-4">
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
