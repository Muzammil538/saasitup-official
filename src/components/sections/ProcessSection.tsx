"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Cpu, Lock, Rocket, BarChart2 } from "lucide-react";
import { cn } from "~/lib/utils";
import { PROCESS_STEPS } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Badge } from "~/components/ui/Badge";

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  hover: {
    scale: 1.05,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: { scale: 1, rotate: 0 },
};

export default function ProcessSection() {
  return (
    <section className="relative py-20" id="process">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          description="A proven methodology that ensures success from concept to launch and beyond"
        />

        {/* Process Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transform -translate-y-1/2 opacity-30" />
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.id === "discovery" ? PlayCircle :
                          step.id === "strategy" ? Cpu :
                          step.id === "build" ? BarChart2 :
                          step.id === "launch" ? Rocket :
                          Lock;

              return (
                <motion.div
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover="hover"
                  className="relative"
                >
                  <div className="glass-card rounded-2xl p-6 border border-white/10 group hover:border-primary-500/30 transition-all duration-300 h-full">
                    {/* Step Number */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={stepVariants}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                      className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 text-white font-display font-bold text-sm flex items-center justify-center border-2 border-dark-900"
                    >
                      {step.number}
                    </motion.div>

                    <div className="mt-6">
                      {/* Main Icon */}
                      <motion.div
                        variants={iconVariants}
                        className="mb-4"
                      >
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-300">
                          <Icon size={28} className="text-primary-500" />
                        </div>
                      </motion.div>

                      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {step.title}
                      </h3>

                      <Badge variant="secondary" className="mb-3">
                        {step.id.charAt(0).toUpperCase() + step.id.slice(1)}
                      </Badge>

                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-10 border border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-8">
              {[
                { value: "4-8 weeks", label: "Discovery Phase" },
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-text-slate-400">
              Our streamlined process reduces projects from concept to launch by 30% compared to traditional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}