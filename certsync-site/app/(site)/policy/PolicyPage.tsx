'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { FileText, ChevronRight } from 'lucide-react';
import Card from '@/components/Card';

export default function PolicyPage() {
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

  const policiesRef = useRef(null);
  const policiesInView = useInView(policiesRef, {
    once: true,
    margin: '-50px',
  });

  const policies = [
    {
      slug: 'privacy-policy',
      title: 'Privacy Policy',
      description:
        'How we collect, use, and protect your personal information and data.',
      lastUpdated: '2024-01-15',
      fileSize: '2.3 KB',
    },
    {
      slug: 'terms-of-service',
      title: 'Terms of Service',
      description:
        'The terms and conditions governing your use of CertSync services.',
      lastUpdated: '2024-01-15',
      fileSize: '3.1 KB',
    },
    {
      slug: 'security-policy',
      title: 'Security Policy',
      description:
        'Our security measures, data protection practices, and incident response procedures.',
      lastUpdated: '2024-01-10',
      fileSize: '2.8 KB',
    },
    {
      slug: 'cookie-policy',
      title: 'Cookie Policy',
      description:
        'Information about how we use cookies and similar technologies on our website.',
      lastUpdated: '2024-01-15',
      fileSize: '1.9 KB',
    },
    {
      slug: 'data-processing-agreement',
      title: 'Data Processing Agreement',
      description:
        'Terms for processing personal data in compliance with GDPR and other regulations.',
      lastUpdated: '2024-01-12',
      fileSize: '4.2 KB',
    },
    {
      slug: 'acceptable-use-policy',
      title: 'Acceptable Use Policy',
      description:
        'Guidelines for acceptable use of CertSync services and prohibited activities.',
      lastUpdated: '2024-01-15',
      fileSize: '2.1 KB',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <Container maxWidth="xl">
        <div className="col-span-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Policy and Conditions
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Review our policies and terms to understand how we protect your
              data and govern our services.
            </p>
          </motion.div>

          {/* Policy Cards Grid */}
          <motion.div
            ref={policiesRef}
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={policiesInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            {policies.map((policy) => (
              <motion.div key={policy.slug} variants={fadeUpVariants}>
                <Link href={`/policy/${policy.slug}`}>
                  <Card className="group cursor-pointer" padding="md">
                    <div className="flex items-start gap-4">
                      {/* PDF Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 border-2 border-red-500 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-red-500" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                          {policy.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-3 leading-relaxed">
                          {policy.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-neutral-500">
                          <span>Last updated: {policy.lastUpdated}</span>
                          <span>{policy.fileSize}</span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <div className="flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
