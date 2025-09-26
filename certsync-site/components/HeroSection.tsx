'use client';
import { useEffect, useState } from 'react';
import GradientButton from './GradientButton';

export default function HeroSection() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
          }}
        ></div>
      ))}

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 text-glow slide-up">
            All staff licences & permits.
            <br />
            <span className="gradient-text">Tracked. Verified. On time.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed slide-up">
            CertSync unites a mobile wallet for employees with an employer
            dashboard that automates reminders, approvals and audit-ready
            reporting—so nothing slips through the cracks.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <GradientButton
              variant="primary"
              size="lg"
              href="/pricing"
              className="text-lg px-8 py-4"
            >
              Start free trial
            </GradientButton>

            <GradientButton
              variant="secondary"
              size="lg"
              href="#apps"
              className="text-lg px-8 py-4"
            >
              Get the app
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
