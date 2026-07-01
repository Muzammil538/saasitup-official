"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/Button";


export default function FinalCTA() {
  const handleCTAClick = () => {
    window.location.href = "#contact";
  };

  const handleButtonClick = () => {
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-dark-900 to-dark-900" />
      
      {/* Animated Particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
        suppressHydrationWarning={true}
          key={i}
          className="absolute w-2 h-2 bg-primary-500 rounded-full"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 1000,
            y: typeof window !== "undefined" ? window.innerHeight + 10 : 800,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -50,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <motion.div
        suppressHydrationWarning={true}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-12 md:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/10 to-primary-500/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/30 to-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent-500/20 to-primary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Tagline */}
            <motion.div
            suppressHydrationWarning={true}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-white text-sm font-medium mb-4">
                <Check size={16} />
                <span className="text-white/90">Ready to Build Something Smarter?</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
            suppressHydrationWarning={true}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Business
                <br />
                With AI-Powered Solutions
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                Let's work together to build intelligent digital systems that drive growth and efficiency for your business.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
            suppressHydrationWarning={true}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button
                onClick={handleCTAClick}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-glow"
              >
                <div className="flex items-center gap-2">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  Book a Discovery Call
                </div>
              </button>
              <button
                onClick={handleButtonClick}
                className="px-8 py-4 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 text-white font-medium transition-all duration-300 hover:border-primary-500/30"
              >
                <div className="flex items-center gap-2">
                  <ArrowRight size={20} />
                  Learn More
                </div>
              </button>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              suppressHydrationWarning={true}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Us</div>
                    <div className="text-sm text-slate-500">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <div className="text-sm text-slate-500">hello@saasitup.com</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">100% Satisfaction</div>
                    <div className="text-sm text-slate-500">Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}