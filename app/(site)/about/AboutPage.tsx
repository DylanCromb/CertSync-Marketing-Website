'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/Container';
import { Linkedin } from 'lucide-react';
import Card from '@/components/Card';

export default function AboutPage() {
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

  // Refs for in-view animations
  const aboutRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: '-50px' });
  const storyInView = useInView(storyRef, { once: true, margin: '-50px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-50px' });

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      credibility: 'Former Head of Security at TechCorp, 15+ years in compliance',
      linkedin: '#',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      credibility: 'Ex-Google engineer, built infrastructure for 100M+ users',
      linkedin: '#',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      credibility: 'Led mobile products at Stripe, UX design expert',
      linkedin: '#',
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      credibility: 'Former AWS architect, security systems specialist',
      linkedin: '#',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      credibility: '10+ years helping enterprises with compliance automation',
      linkedin: '#',
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Sales',
      credibility: 'Built sales teams at 3 successful B2B SaaS companies',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <Container maxWidth="lg">
        <div className="col-span-12 max-w-3xl mx-auto">
          {/* About Us Section */}
          <motion.section
            ref={aboutRef}
            className="mb-20"
            variants={fadeUpVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-neutral-900 mb-8 text-center">
              About CertSync
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed text-center">
              CertSync unites a mobile wallet for employees with an employer dashboard that automates reminders, approvals and audit-ready reporting—so nothing slips through the cracks.
            </p>
          </motion.section>

          {/* Section Divider */}
          <div className="w-24 h-px bg-neutral-200 mx-auto mb-20"></div>

          {/* Our Story Section */}
          <motion.section
            ref={storyRef}
            className="mb-20"
            variants={fadeUpVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-neutral-600 leading-relaxed">
                After years of watching organizations struggle with expired credentials, missed renewals, and compliance nightmares, we knew there had to be a better way.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We built CertSync to eliminate the chaos of credential management, giving both employees and employers the tools they need to stay compliant, organized, and stress-free.
              </p>
            </div>
          </motion.section>

          {/* Section Divider */}
          <div className="w-24 h-px bg-neutral-200 mx-auto mb-20"></div>

          {/* Meet Our Team Section */}
          <motion.section
            ref={teamRef}
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeUpVariants}
                >
                  <Card className="text-center" padding="lg">
                    <div className="bg-neutral-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <div className="bg-neutral-300 rounded-full w-24 h-24 flex items-center justify-center">
                        <span className="text-neutral-600 text-2xl font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                      {member.credibility}
                    </p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center justify-center w-8 h-8 text-neutral-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </Container>
    </div>
  );
}
