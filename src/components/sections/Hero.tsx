"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Download, Search, Zap, ShieldCheck, Users, Target } from "lucide-react";
import { cn } from "~/lib/utils";
import AIDashboardMockup from "~/components/hero-mockup/AIDashboardMockup";
import AIInterface from "~/components/hero-mockup/AIInterface";

const features = [
  {
    id: "ai-powered",
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Intelligent systems that learn, adapt, and optimize your business processes automatically.",
  },
  {
    id: "modern-stack",
    icon: Download,
    title: "Modern Tech Stack",
    description: "Built with cutting-edge technologies including Next.js, React, and AI/ML platforms.",
  },
  {
    id: "custom-solutions",
    icon: ShieldCheck,
    title: "Tailored Solutions",
    description: "Every project is customized to meet your unique business requirements.",
  },
];

export default function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-primary-500 tracking-wider uppercase">
                Now Accepting New Projects
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Build Smarter.
              <br />
              <span className="block text-gradient">Scale Faster.</span>
              <br />
              With AI & Modern Software.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We design and build AI-powered systems, SaaS platforms, and digital experiences
              that help businesses automate, grow, and compete in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" className="min-w-[200px]" href="#contact">
                <Target size={20} />
                Start Your Project
              </Button>
              <Button variant="secondary" size="lg" className="min-w-[180px]" href="/services">
                <Search size={20} />
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 text-center"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "20+", label: "Businesses" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl glow">
              <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative"
              >
                <AIDashboardMockup />
                <AIInterface />
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden lg:block"
            >
              <div className="absolute top-20 -left-12 glass px-4 py-3 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">AI Agent Active</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="hidden lg:block"
            >
              <div className="absolute bottom-32 -right-12 glass px-4 py-3 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-white">147% Efficiency</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 mx-auto text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}