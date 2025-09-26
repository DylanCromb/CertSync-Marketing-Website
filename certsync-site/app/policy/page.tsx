import SectionHeader from '@/components/SectionHeader';
import { FileText, Shield, Cookie, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Policy() {
  const policies = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your data.',
      href: '/policy/privacy-policy',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Terms of Service',
      description: 'The rules and regulations for using our service.',
      href: '/policy/terms-of-service',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Security Policy',
      description: 'Our commitment to securing your information.',
      href: '/policy/security-policy',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Cookie className="w-8 h-8" />,
      title: 'Cookie Policy',
      description: 'Details about our use of cookies.',
      href: '/policy/cookie-policy',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-glow">
            Policy & Conditions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transparency and trust are at the core of everything we do. Here you
            can find all our legal documents and policies.
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Our Policies"
            subtitle="Comprehensive legal documents that govern the use of CertSync"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover-lift border-t-4 border-transparent hover:border-gradient-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${policy.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {policy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{policy.description}</p>
                    <Link
                      href={policy.href}
                      className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors"
                    >
                      Read {policy.title.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about our policies or need clarification
              on any terms, please don&apos;t hesitate to reach out to our legal
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Legal Team
              </Link>
              <Link
                href="mailto:legal@certsync.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
