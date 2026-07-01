"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "~/lib/utils";
import { SERVICES } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";

const serviceIcons: Record<string, React.ReactNode> = {
  Wand2: <Wand2 />,
  Bot: <Bot />,
  LayoutDashboard: <LayoutDashboard />,
  Globe: <Globe />,
  TrendingUp: <TrendingUp />,
  Workflow: <Workflow />,
};

export default function ServicesSection() {
  const serviceVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          description="Comprehensive solutions to help your business thrive in the digital age"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={serviceVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <div className="glass-card h-full rounded-2xl p-6 border border-white/10 group-hover:border-primary-500/30 group-hover:bg-dark-700/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-300">
                      {serviceIcons[service.icon]}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Process automation",
                      "Smart integration",
                      "24/7 monitoring",
                      "AI optimization",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="relative flex items-center">
                          <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <div className="absolute inset-0 bg-primary-500/10 blur-sm"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors group-hover:gap-3"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="primary" href="/services">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Wand2() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4z" />
      <path d="M15 21a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4z" />
    </svg>
  );
}

function Bot() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="m4.22 4.22 1.42 1.42" />
      <path d="m18.36 18.36 1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="m4.22 19.78 1.42-1.42" />
      <path d="m18.36 5.64 1.42-1.42" />
    </svg>
  );
}

function LayoutDashboard() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <rect x="3" y="3" width="18" height="9" rx="2" />
      <rect x="3" y="14" width="18" height="9" rx="2" />
      <line x1="7" x2="7" y1="6" y2="6" />
      <line x1="7" x2="7" y1="17" y2="17" />
      <line x1="12" x2="12" y1="6" y2="6" />
      <line x1="12" x2="12" y1="17" y2="17" />
      <line x1="17" x2="17" y1="6" y2="6" />
      <line x1="17" x2="17" y1="17" y2="17" />
    </svg>
  );
}

function Globe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TrendingUp() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function Workflow() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
      <polygon points="16 3 21 3 21 8" />
      <line x1="4" x2="21" y1="20" y2="20" />
      <line x1="21" x2="21" y1="14" y2="20" />
      <line x1="4" x2="4" y1="8" y2="20" />
      <polyline points="10 12 16 12 4 20 4 8 10 16" />
    </svg>
  );
}