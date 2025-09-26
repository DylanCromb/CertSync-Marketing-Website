'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from '@/components/Container';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

interface PolicyDetailClientProps {
  slug: string;
}

export default function PolicyDetailClient({ slug }: PolicyDetailClientProps) {
  const [content, setContent] = useState('');
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);

  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Mock markdown content based on slug
  const getPolicyContent = (policySlug: string) => {
    const policies = {
      'privacy-policy': `# Privacy Policy

## Information We Collect

We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

### Account Information
When you create an account, we collect your name, email address, and any other information you choose to provide.

### Certificate Data
We collect information about your certificates, including metadata, expiration dates, and configuration details. We do not store private keys or sensitive certificate data.

### Usage Information
We collect information about how you use our services, including your interactions with our platform and the features you use.

## How We Use Your Information

We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send technical notices, updates, and support messages
- Respond to your comments and questions
- Monitor and analyze trends and usage

## Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

### Service Providers
We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support.

### Legal Requirements
We may disclose your information if required to do so by law or in response to valid requests by public authorities.

## Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Your Rights

You have the right to:
- Access and update your personal information
- Delete your account and associated data
- Opt out of certain communications
- Request a copy of your data

## Contact Us

If you have any questions about this Privacy Policy, please contact us at:

**Email:** privacy@certsync.com  
**Address:** 123 Security Street, Tech City, TC 12345`,

      'terms-of-service': `# Terms of Service

## Acceptance of Terms

By accessing and using CertSync services, you accept and agree to be bound by the terms and provision of this agreement.

## Use License

Permission is granted to temporarily download one copy of CertSync per device for personal, non-commercial transitory viewing only.

## Disclaimer

The materials on CertSync are provided on an 'as is' basis. CertSync makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## Limitations

In no event shall CertSync or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CertSync, even if CertSync or a CertSync authorized representative has been notified orally or in writing of the possibility of such damage.

## Accuracy of Materials

The materials appearing on CertSync could include technical, typographical, or photographic errors. CertSync does not warrant that any of the materials on its website are accurate, complete, or current.

## Links

CertSync has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.

## Modifications

CertSync may revise these terms of service for its website at any time without notice.`,

      'security-policy': `# Security Policy

## Security Measures

We implement comprehensive security measures to protect your data and ensure the integrity of our services.

### Data Encryption
All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.

### Access Controls
We implement role-based access controls and multi-factor authentication for all administrative access.

### Infrastructure Security
Our infrastructure is hosted on secure cloud platforms with regular security audits and monitoring.

## Incident Response

In the event of a security incident, we follow a structured response process:

1. **Detection and Analysis**
2. **Containment and Eradication**
3. **Recovery and Lessons Learned**

## Data Protection

We are committed to protecting your personal data in accordance with applicable data protection laws and regulations.

### Data Minimization
We only collect and process the minimum amount of data necessary for our services.

### Data Retention
We retain data only for as long as necessary to fulfill the purposes outlined in our privacy policy.

## Compliance

We maintain compliance with industry standards and regulations including:
- SOC 2 Type II
- ISO 27001
- GDPR
- CCPA

## Reporting Security Issues

If you discover a security vulnerability, please report it to security@certsync.com.`,

      'cookie-policy': `# Cookie Policy

## What Are Cookies

Cookies are small text files that are placed on your computer or mobile device when you visit our website.

## How We Use Cookies

We use cookies to:
- Remember your preferences and settings
- Analyze how you use our website
- Improve our services and user experience

## Types of Cookies

### Essential Cookies
These cookies are necessary for the website to function properly and cannot be disabled.

### Analytics Cookies
These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.

### Functional Cookies
These cookies enable enhanced functionality and personalization, such as remembering your language preference.

## Managing Cookies

You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.

## Third-Party Cookies

Some cookies on our website are set by third-party services that we use, such as analytics providers.`,

      'data-processing-agreement': `# Data Processing Agreement

## Scope and Purpose

This Data Processing Agreement (DPA) governs the processing of personal data by CertSync on behalf of our customers.

## Definitions

**Personal Data:** Any information relating to an identified or identifiable natural person.

**Processing:** Any operation performed on personal data, including collection, storage, and transmission.

**Data Controller:** The entity that determines the purposes and means of processing personal data.

**Data Processor:** The entity that processes personal data on behalf of the data controller.

## Processing Details

### Categories of Data
We process the following categories of personal data:
- Contact information
- Account information
- Usage data
- Certificate metadata

### Processing Purposes
Personal data is processed for the following purposes:
- Providing CertSync services
- Customer support
- Service improvement
- Compliance with legal obligations

## Data Protection Measures

We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.

## Data Subject Rights

We assist data controllers in fulfilling data subject rights requests, including:
- Right of access
- Right to rectification
- Right to erasure
- Right to data portability

## International Transfers

When transferring personal data outside the European Economic Area, we ensure adequate protection through appropriate safeguards.`,

      'acceptable-use-policy': `# Acceptable Use Policy

## General Use

CertSync services are intended for legitimate business purposes related to certificate and credential management.

## Prohibited Uses

You may not use our services:
- For any unlawful purpose or to solicit others to perform unlawful acts
- To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
- To infringe upon or violate our intellectual property rights or the intellectual property rights of others
- To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
- To submit false or misleading information
- To upload or transmit viruses or any other type of malicious code

## Content Standards

Content you submit must:
- Be accurate and truthful
- Not violate any third-party rights
- Not contain harmful or malicious content
- Comply with applicable laws and regulations

## Enforcement

We reserve the right to:
- Monitor usage of our services
- Investigate violations of this policy
- Take appropriate action, including suspension or termination of accounts

## Reporting Violations

If you become aware of any violation of this policy, please report it to abuse@certsync.com.`,
    };

    return (
      policies[policySlug as keyof typeof policies] ||
      '# Policy Not Found\n\nThe requested policy could not be found.'
    );
  };

  const getPolicyTitle = (policySlug: string) => {
    const titles = {
      'privacy-policy': 'Privacy Policy',
      'terms-of-service': 'Terms of Service',
      'security-policy': 'Security Policy',
      'cookie-policy': 'Cookie Policy',
      'data-processing-agreement': 'Data Processing Agreement',
      'acceptable-use-policy': 'Acceptable Use Policy',
    };
    return titles[policySlug as keyof typeof titles] || 'Policy';
  };

  useEffect(() => {
    const markdownContent = getPolicyContent(slug);
    setContent(markdownContent);

    // Extract headings for TOC
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extractedHeadings: Array<{
      id: string;
      text: string;
      level: number;
    }> = [];
    let match;

    while ((match = headingRegex.exec(markdownContent)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);
  }, [slug]);

  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/policy"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Policies
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-red-500 rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-neutral-900">
                {getPolicyTitle(slug)}
              </h1>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              ref={contentRef}
              className="lg:col-span-3"
              variants={fadeUpVariants}
              initial="hidden"
              animate={contentInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/^-|-$/g, '')}
                        className="text-2xl font-bold text-neutral-900 mb-6 pt-4 first:pt-0"
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/^-|-$/g, '')}
                        className="text-xl font-semibold text-neutral-900 mb-4 mt-8 pt-4"
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        id={children
                          ?.toString()
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/^-|-$/g, '')}
                        className="text-lg font-semibold text-neutral-900 mb-3 mt-6"
                      >
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-neutral-600 mb-4 leading-relaxed">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-neutral-600 mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-neutral-600 mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="leading-relaxed">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-neutral-900">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <code className="bg-neutral-100 text-neutral-800 px-1 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Table of Contents - Desktop Only */}
            <motion.div
              className="lg:col-span-1 hidden lg:block"
              variants={fadeUpVariants}
              initial="hidden"
              animate={contentInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm text-neutral-600 hover:text-primary transition-colors ${
                          heading.level === 1
                            ? 'font-medium'
                            : heading.level === 2
                              ? 'ml-2'
                              : 'ml-4'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
