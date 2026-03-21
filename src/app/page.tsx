"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Transforming Ideas into <br />
              <span className="text-primary italic">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              SAASITUP (SUP) provides top-tier IT solutions for students and agencies.
              From college projects to enterprise-grade SAAS applications, we build what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose SUP?</h2>
            <p className="text-muted-foreground">We deliver excellence at every step of the process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-10 w-10 text-primary" />,
                title: "Fast Delivery",
                description: "We understand deadlines. Get your projects delivered on time, every time."
              },
              {
                icon: <Code2 className="h-10 w-10 text-secondary" />,
                title: "Modern Tech Stack",
                description: "Built with the latest technologies like Next.js, React, and AI integrations."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-accent" />,
                title: "Secure & Scalable",
                description: "Enterprise-grade security and scalability for businesses of all sizes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <div className="mb-4 bg-card w-16 h-16 rounded-2xl flex items-center justify-center border border-border">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <Link href="/register">
            <Button size="lg" className="h-14 px-10 text-xl rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg">
              Get Started Now
            </Button>
          </Link>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
}
