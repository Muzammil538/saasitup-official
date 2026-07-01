"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { NAVIGATION_ITEMS } from "~/lib/constants";
import { Button } from "~/components/ui/Button";
import Link from "next/link";

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = NAVIGATION_ITEMS.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="relative group text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
      onClick={() => setMobileMenuOpen(false)}
    >
      {item.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  ));

  const menuContent = (
    <div className="flex flex-col gap-6 py-6">
      {navItems}
      <div className="flex gap-4 pt-4 border-t border-dark-700">
        <Button variant="primary" size="sm" href="#contact">
          Book a Call
        </Button>
        <Button variant="outline" size="sm" href="/projects">
          View Work
        </Button>
      </div>
    </div>
  );

  return (
    <motion.nav
      initial={navbarVariants.hidden}
      animate={navbarVariants.visible}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass bg-dark-900/80 backdrop-blur-xl py-3 border-b border-white/5"
          : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute inset-1 bg-dark-900 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  S
                </span>
              </div>
            </div>
            <span className="font-display text-xl font-bold text-white group-hover:text-white/80 transition-colors">
              SaasItUp
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems}
            <div className="flex gap-3">
              <Button variant="primary" size="sm" href="#contact">
                Book a Call
              </Button>
              <Button variant="secondary" size="sm" href="/projects">
                View Work
              </Button>
            </div>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-dark-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass bg-dark-900/95 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {menuContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}