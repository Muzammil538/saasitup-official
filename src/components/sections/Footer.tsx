"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, Link } from "lucide-react";
import { cn } from "~/lib/utils";
import { CONTACT_ITEMS, SOCIAL_LINKS } from "~/lib/constants";
// fix the icons from react-icons
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";





const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-dark-800 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary-500/10 to-transparent rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand and Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg transform rotate-45" />
                    <div className="absolute inset-0.5 bg-dark-800 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white transform -rotate-45">S</span>
                    </div>
                  </div>
                  <span className="font-display text-xl font-bold text-white">SaasItUp</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building intelligent digital systems that help businesses automate, scale, and thrive in the AI-powered future.
                </p>
                <div className="flex items-center gap-4">
                  {SOCIAL_LINKS.map((social) => {
                    switch (social.icon) {
                      case "Twitter":
                        return <BsTwitterX key={social.id} className="w-5 h-5 text-slate-400 hover:text-primary-500 transition-colors cursor-pointer" />;
                      case "linkedin":
                        return <FaLinkedin key={social.id} className="w-5 h-5 text-slate-400 hover:text-primary-500 transition-colors cursor-pointer" />;
                      case "Github":
                        return <FaGithub key={social.id} className="w-5 h-5 text-slate-400 hover:text-primary-500 transition-colors cursor-pointer" />;
                      case "Instagram":
                        return <FaInstagram key={social.id} className="w-5 h-5 text-slate-400 hover:text-primary-500 transition-colors cursor-pointer" />;
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-display text-sm font-bold text-white mb-6 tracking-widest uppercase">Navigations</h4>
                <ul className="space-y-3">
                  {navItems?.map((item, index) => (
                    <li key={item.href || index}>
                      <Link
                        href={item.href || "/"}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {/* Change 'name' to whatever property your array uses (e.g., item.label or item.title) */}
                        {item.name || item.label || "Link"}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-display text-sm font-bold text-white mb-6 tracking-widest uppercase">Services</h4>
                <ul className="space-y-3">
                  {[
                    { name: "AI Automation", href: "/services#ai-automation" },
                    { name: "SaaS Development", href: "/services#saas-development" },
                    { name: "Web Development", href: "/services#web-development" },
                    { name: "SEO & Growth", href: "/services#seo-growth" },
                    { name: "Custom Solutions", href: "/services#custom-solutions" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-display text-sm font-bold text-white mb-6 tracking-widest uppercase">Contact</h4>
                <ul className="space-y-4">
                  {CONTACT_ITEMS.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                        {item.label === "Email" ? (
                          <Mail className="w-4 h-4 text-slate-400" />
                        ) : item.label === "Phone" ? (
                          <Phone className="w-4 h-4 text-slate-400" />
                        ) : (
                          <MapPin className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors leading-relaxed flex-1"
                      >
                        {item.value || item.name}
                      </Link>
                      <Link
                        href={item.href}
                        className={`flex-shrink-0 transition-colors ${item.href.includes("http")
                            ? "text-slate-400 hover:text-primary-500"
                            : ""
                          }`}
                      >
                        <ExternalLink className="w-4 h-4 text-slate-500 hover:text-primary-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} SaasItUp. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap.xml"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}