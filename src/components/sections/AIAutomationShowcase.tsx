"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Cpu, Zap, ShieldCheck, Growth } from "lucide-react";
import { cn } from "~/lib/utils";
import { AI_FEATURES } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AIAutomationShowcase() {
  const features = [
    {
      id: "intelligent-automation",
      icon: Bot,
      title: "Intelligent Automation",
      description: "AI-powered workflows that learn, adapt, and optimize your business processes over time.",
      highlight: "70% faster",
    },
    {
      id: "smart-agents",
      icon: Sparkles,
      title: "Smart Agents",
      description: "AI agents that handle complex tasks, analyze data, and provide intelligent recommendations.",
      highlight: "24/7 active",
    },
    {
      id: "predictive-insights",
      icon: Cpu,
      title: "Predictive Insights",
      description: "Machine learning models that forecast trends and help you make data-driven decisions.",
      highlight: "95% accuracy",
    },
    {
      id: "seamless-integration",
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect all your tools and automate complex workflows with our intelligent integration system.",
      highlight: "500+ apps",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="solutions">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-dark-900 to-dark-900" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-500 rounded-full animate-float" />
        <div className="top-40 right-20 w-3 h-3 bg-accent-500 rounded-full animate-float-delayed" />
        <div className="bottom-40 left-1/4 w-5 h-5 bg-primary-500 rounded-full animate-float" />
        <div className="bottom-20 right-1/3 w-4 h-4 bg-accent-500 rounded-full animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="AI-Powered Automation for Your Business"
          description="Leverage cutting-edge AI to empower your team, reduce manual work, and drive unprecedented growth"
        />

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon as React.ElementType;
            return (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={featureVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 border border-white/10 group-hover:border-primary-500/30 group-hover:bg-dark-700/50 transition-all duration-300 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-500" />
                  
                  {index % 2 === 0 && (
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-accent-500/20 to-primary-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-all duration-300 flex-shrink-0">
                        <Icon size={32} className="text-primary-500" />
                      </div>
                      
                      <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-white text-sm font-medium">
                        {feature.highlight}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      Ready to deploy
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "barAwesome", label: "AI Efficiency Increase" },
                  { value: "barSpeed", label: "Time Saved" },
                  { value: "barReduced", label: "Error Rate" },
                  { value: "barSatisfaction", label: "Customer Satisfaction" },
                ].map((stat, index) => {
                  const stats = [
                    { value: "85%", label: "Average Efficiency Gain" },
                    { value: "70%", label: "Time Saved Monthly" },
                    { value: "95%", label: "Error Reduction" },
                    { value: "98%", label: "Customer Satisfaction" },
                  ];
                  const metric = stats[index];
                  return (
                    <div key={stat.value}>
                      <div className="font-display text-3xl font-bold text-gradient mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-500">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-slate-400 mb-6">
              Schedule a free consultation to discover how our AI automation solutions can help you achieve extraordinary results.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-glow">
              Get Started with AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckCircle(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}