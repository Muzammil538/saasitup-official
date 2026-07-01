"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "~/lib/utils";
import { TESTIMONIALS } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
// fix the imports
import { Badge } from "~/components/ui/Badge";

const testimonialVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stars = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what businesses say about working with SaasItUp"
        />

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => {
            return (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={testimonialVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass-card h-full rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {stars.map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={cn(
                          "text-yellow-500",
                          star <= testimonial.rating ? "" : "text-slate-700"
                        )}
                        fill={star <= testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="font-display text-lg font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" size="sm">
                      Verification
                    </Badge>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500 mb-8">
              {[
                "Integrated with 50+ Tools",
                "Enterprise-Grade Security",
                "99.9% Uptime SLA",
                "24/7 Technical Support",
                "GDPR Compliant",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkmark className="w-4 h-4 text-primary-500" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-slate-400">
              Trusted by teams at leading companies around the world. Join thousands of satisfied clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Checkmark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}