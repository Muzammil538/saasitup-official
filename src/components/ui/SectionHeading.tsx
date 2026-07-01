import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  icon: Icon,
  align = "center",
  className,
}: SectionHeadingProps) {
  const containerDirection = align === "center" ? "center" : align === "right" ? "right" : "left";
  
  return (
    <div className={cn("mb-16", containerDirection === "center" ? "text-center" : "", containerDirection === "right" ? "text-right" : "", className)}>
      {Icon && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center justify-center gap-3 mb-6",
            containerDirection === "right" && "justify-end"
          )}
        >
          <Icon className="w-8 h-8 text-primary-500" />
          <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
            {subtitle}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-slate-400"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;