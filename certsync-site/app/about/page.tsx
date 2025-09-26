import SectionHeader from '@/components/SectionHeader';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-glow">
            About CertSync
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We&apos;re on a mission to simplify credential management and ensure
            compliance never becomes a burden for your organization.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CertSync is dedicated to simplifying credential and permit
                management across organizations. We believe that compliance
                shouldn&apos;t be complicated, and that technology can make
                credential management seamless and efficient.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower businesses to maintain compliance
                effortlessly, reduce administrative burden, and ensure that all
                staff certifications are always up-to-date.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    A world where compliance is effortless
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Our Values</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Simplicity, security, and reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The passionate individuals behind CertSync's success"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover-lift text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-primary font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about simplifying complex processes and building
                products that make a real difference.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover-lift text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-primary font-medium mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Technology enthusiast with over 10 years of experience in
                building scalable enterprise solutions.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover-lift text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Emily Rodriguez
              </h3>
              <p className="text-primary font-medium mb-3">Head of Product</p>
              <p className="text-gray-600 text-sm">
                User experience advocate focused on creating intuitive and
                powerful tools for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <p className="text-gray-600">Credentials Tracked</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
