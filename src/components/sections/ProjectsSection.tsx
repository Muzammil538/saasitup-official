"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2, Sparkles } from "lucide-react";
import { cn } from "~/lib/utils";
import { PROJECTS } from "~/lib/constants";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Badge } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";

const projectCardVariants = {
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

export default function ProjectsSection() {
  return (
    <section className="relative py-20" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          description="Discover how we've helped businesses transform their operations and achieve exceptional results"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={projectCardVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <div className="glass-card h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 group-hover:shadow-2xl group-hover:shadow-primary-glow transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="primary" className="flex items-center gap-1.5 text-xs">
                        <Sparkles width={14} height={14} />
                        Featured
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {project.category}
                    </Badge>

                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 bg-dark-700 rounded text-xs text-slate-400"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Result */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm water-500 mb-1">
                        <span className="font-display text-lg font-bold text-gradient">
                          {project.result}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <a
                      href={`#${project.id}`}
                      className="inline-flex items-center justify-between w-full px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors group-hover:bg-primary-500/10 group-hover:border group-hover:border-primary-500/30"
                    >
                      <span className="text-sm font-medium text-slate-300 group-hover:text-primary-500 transition-colors">
                        View Case Study
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors group-hover:translate-x-1" />
                    </a>
                  </div>
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
          <Button size="lg" variant="primary" href="/projects">
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}