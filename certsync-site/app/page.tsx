import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import {
  Smartphone,
  Upload,
  Bell,
  Shield,
  Users,
  BarChart3,
  FileText,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Two-Path Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Choose Your Path"
            subtitle="Whether you're an employee managing your credentials or an employer overseeing your team, CertSync has you covered."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Employee Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover-lift">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  For Employees
                </h3>
                <p className="text-gray-600">
                  Manage your credentials on the go
                </p>
              </div>

              {/* Phone Mockup Placeholder */}
              <div className="phone-mockup bg-gray-100 rounded-2xl p-4 mb-8 mx-auto w-48 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Smartphone className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-sm">Phone Screenshot</p>
                  <p className="text-xs">180x360px</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Upload once, never chase again
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Auto-extract expiries from PDFs/photos. Live countdown per
                      item.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Smart reminders
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Custom 90/30/7-day schedules. Email/SMS/Slack/WhatsApp*.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Granular access
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Share per document, revoke anytime. Full view audit trail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Employer Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover-lift">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  For Employers
                </h3>
                <p className="text-gray-600">
                  Oversee your team&apos;s compliance
                </p>
              </div>

              {/* Desktop Mockup Placeholder */}
              <div className="desktop-mockup bg-gray-100 rounded-lg p-4 mb-8 mx-auto w-full h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-sm">Dashboard Screenshot</p>
                  <p className="text-xs">600x400px</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Bulk assign & verify in minutes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Roles/sites with valid-from/to; approve or reject with
                      evidence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      See risk at a glance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Dashboard of missing/expiring items; filter by urgency,
                      role, contractor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Auditor-ready reporting
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Export CSV/PDF packs with statuses, dates and evidence
                      links.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="apps" className="py-20">
        <div className="container">
          <SectionHeader
            title="Why Choose CertSync?"
            subtitle="Powerful features designed to streamline credential management for teams of all sizes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8" />}
              title="Smart Upload"
              description="Automatically extract expiry dates from PDFs and photos with our advanced OCR technology."
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8" />}
              title="Intelligent Reminders"
              description="Customizable notification schedules via email, SMS, Slack, and WhatsApp to keep everyone on track."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure Access"
              description="Granular permission controls with full audit trails and secure document sharing."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Team Management"
              description="Bulk operations, role-based assignments, and comprehensive team oversight tools."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Risk Dashboard"
              description="Real-time visibility into compliance status with filtering and risk assessment tools."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Audit Reports"
              description="Generate comprehensive reports for auditors with all necessary documentation and evidence."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
