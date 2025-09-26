'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/Container';
import NumberedItem from '@/components/NumberedItem';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export default function HomePage() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Refs for in-view animations
  const employeesRef = useRef(null);
  const employersRef = useRef(null);
  const employeesInView = useInView(employeesRef, { once: true, margin: '-100px' });
  const employersInView = useInView(employersRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <Container maxWidth="2xl">
          <motion.div
            className="col-span-12 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              variants={fadeUpVariants}
            >
              All staff licences & permits. Tracked. Verified. On time.
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeUpVariants}
            >
              CertSync unites a mobile wallet for employees with an employer dashboard that automates reminders, approvals and audit-ready reporting—so nothing slips through the cracks.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={fadeUpVariants}
            >
              <PrimaryButton size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start free trial
              </PrimaryButton>
              <SecondaryButton size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Get the app
              </SecondaryButton>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 items-center"
              variants={fadeUpVariants}
            >
              {/* Client Logo Row */}
              <div className="flex justify-center items-center space-x-6">
                <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm font-medium">
                  Company A
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm font-medium">
                  Company B
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm font-medium">
                  Company C
                </div>
              </div>

              {/* Rating */}
              <div className="text-center">
                <div className="text-white text-lg font-semibold">
                  ⭐ 4.8 from 1,200+ users
                </div>
              </div>

              {/* Statistic */}
              <div className="text-center">
                <div className="text-white text-lg font-semibold">
                  62% fewer expired credentials in 60 days
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* For Employees Section */}
      <section ref={employeesRef} className="py-24 bg-white">
        <Container maxWidth="2xl">
          <div className="col-span-12 grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              className="lg:col-span-6"
              variants={slideInLeft}
              initial="hidden"
              animate={employeesInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                {/* Phone Mockup Placeholder */}
                <div className="bg-neutral-100 rounded-3xl p-8 mx-auto max-w-sm mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="h-4 bg-primary/20 rounded"></div>
                      <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                      <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
                      <div className="h-8 bg-primary/10 rounded"></div>
                      <div className="h-3 bg-neutral-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                
                {/* App Store Badges */}
                <div className="flex justify-center gap-4">
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                    App Store
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                    Google Play
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="lg:col-span-6"
              variants={slideInRight}
              initial="hidden"
              animate={employeesInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                  For Employees — "The CertSync mobile app"
                </h2>
                
                <div className="space-y-8">
                  <NumberedItem
                    number="01"
                    title="Upload once, never chase again"
                    description="Auto-extract expiries from PDFs/photos. Live countdown per item."
                  />
                  
                  <NumberedItem
                    number="02"
                    title="Smart reminders"
                    description="Custom 90/30/7-day schedules. Email/SMS/Slack/WhatsApp* (*placeholder)."
                  />
                  
                  <NumberedItem
                    number="03"
                    title="Granular access"
                    description="Share per-document, revoke anytime. Full view audit trail."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* For Employers Section */}
      <section ref={employersRef} className="py-24 bg-neutral-50">
        <Container maxWidth="2xl">
          <div className="col-span-12 grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Side */}
            <motion.div
              className="lg:col-span-6 lg:order-1 order-2"
              variants={slideInLeft}
              initial="hidden"
              animate={employersInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                  For Employers — "The CertSync Web platform"
                </h2>
                
                <div className="space-y-8">
                  <NumberedItem
                    number="01"
                    title="Bulk assign & verify in minutes"
                    description="Roles/sites with valid-from/to; approve/reject with photo/PDF evidence."
                  />
                  
                  <NumberedItem
                    number="02"
                    title="See risk at a glance"
                    description="Dashboard of missing/expiring items; filter by urgency, role, contractor."
                  />
                  
                  <NumberedItem
                    number="03"
                    title="Auditor-ready reporting"
                    description="Export CSV/PDF packs (statuses, dates, evidence links) in ~30s."
                  />
                </div>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className="lg:col-span-6 lg:order-2 order-1"
              variants={slideInRight}
              initial="hidden"
              animate={employersInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center">
                {/* Desktop Mockup Placeholder */}
                <div className="bg-neutral-100 rounded-2xl p-8 mx-auto max-w-2xl mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                        <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                        <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="h-4 bg-primary/20 rounded"></div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 bg-neutral-100 rounded"></div>
                        <div className="h-16 bg-neutral-100 rounded"></div>
                        <div className="h-16 bg-neutral-100 rounded"></div>
                      </div>
                      <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                      <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Start Free Trial Button */}
                <PrimaryButton size="lg">
                  Start free trial
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
