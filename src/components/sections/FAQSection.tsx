"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "~/lib/utils";
import { FAQ_ITEMS } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Button } from "~/components/ui/Button";
import Link from "next/link";

const faqItemVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Have questions about our services? We're here to help"
        />

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-700/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-500">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 text-slate-500"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={faqItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="text-slate-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: FAQ_ITEMS.length * 0.1 + 0.2 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-2">
                  Still Have Questions?
                </h4>
                <p className="text-slate-400 text-sm">
                  Can't find what you're looking for? Our team is here to help.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="mailto:hello@saasitup.com"
                  className="px-6 py-3 rounded-lg bg-dark-700 border border-white/10 hover:bg-dark-600 hover:border-primary-500/30 transition-all duration-300 text-white text-sm font-medium"
                >
                  Email Us
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}