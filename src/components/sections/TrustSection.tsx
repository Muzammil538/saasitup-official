"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { METRICS } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Button } from "~/components/ui/Button";
import Image from "next/image";

const logoVariants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export default function TrustSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="trusted">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Nzk3OWEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgOGgwdjZhMiAyIDIgMCAwLSAyIDJ2Mmgydi0yaDF2M2gzdjIaIi8+PC9nPjwvZz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by ambitious businesses building the future"
          description="Join dozens of forward-thinking companies that have transformed their operations with SaasItUp solutions"
        />

        {/* Trust Markers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-slate-500 text-lg mb-8">Recognized by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={logoVariants}
              >
                <div className="aspect-square w-32 h-32 border border-dark-700 rounded-2xl flex items-center justify-center bg-dark-800/50 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-400">KCOI</div>
                    <div className="text-xs text-slate-600">TechCorp</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: formatNumber(METRICS.projects), label: "Projects Delivered" },
            { value: formatNumber(METRICS.businessesHelped), label: "Businesses Helped" },
            { value: METRICS.satisfaction, label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-8 border border-white/10 text-center group cursor-default"
            >
              <div className="font-display text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-sm text-slate-500">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl max-w-2xl mx-auto p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to power your business with AI?
              </h3>
              <p className="text-slate-400 mb-8">
                Get started today and see how SaasItUp can help you automate and scale your operations.
              </p>
              <Button size="lg" variant="primary" className="group" href="#contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
  return `${num}`;
}