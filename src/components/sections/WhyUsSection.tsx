"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Target, Cpu, Wrench } from "lucide-react";
import { cn } from "~/lib/utils";
import { WHY_CHOOSE_US } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";

export default function WhyUsSection() {
  const pointVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const features = [
    {
      id: "ai-first",
      title: "AI-First Approach",
      description:
        "We leverage the latest AI technologies to build smarter, more efficient systems that scale with your business.",
      icon: Activity,
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      description:
        "Every project is tailored to your unique business needs with personalized architecture and development.",
      icon: Target,
    },
    {
      id: "modern-tech",
      title: "Modern Technology Stack",
      description:
        "We use cutting-edge frameworks and tools including Next.js, React, TypeScript, and AI/ML platforms.",
      icon: Cpu,
    },
    {
      id: "fast-execution",
      title: "Fast Execution",
      description:
        "Our agile methodology ensures rapid development cycles and faster time-to-market for your projects.",
      icon: Zap,
    },
    {
      id: "business-focused",
      title: "Business-Focused Development",
      description:
        "We design technology solutions that align with your business goals and drive measurable results.",
      icon: Wrench,
    },
  ];

  return (
    <section className="relative py-20" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Businesses Choose SaasItUp"
          description="Our unique approach delivers exceptional results for businesses of all sizes"
        />

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10 lg:col-span-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex-shrink-0">
                  <Zap size={32} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Build Faster, Scale Smarter
                  </h3>
                  <p className="text-slate-400">
                    We combine industry-leading speed with intelligent design to deliver solutions that grow with you.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Faster Development",
                  "Year-Long Support",
                  "Enterprise-Grade",
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="font-display text-2xl font-bold text-gradient mb-1">
                      {["98%", "24/7", "10x"][index]}
                    </div>
                    <div className="text-sm text-slate-500">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((point, index) => {
            const Icon = point.icon as React.ElementType;
            return (
              <motion.div
                key={point.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover="hover"
              >
                <motion.div
                  className="glass-card h-full rounded-2xl p-6 border border-white/10 group hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-300 flex-shrink-0">
                      <Icon size={24} className="text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}