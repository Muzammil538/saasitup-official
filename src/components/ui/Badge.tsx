import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "success";
  icon?: LucideIcon;
}

export function Badge({ 
  variant = "primary", 
  icon: Icon, 
  className,
  children,
  ...props 
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-500/10 text-primary-500 border-primary-500/20",
    secondary: "bg-secondary text-secondary-foreground border-secondary",
    accent: "bg-accent-500/10 text-accent-500 border-accent-500/20",
    success: "bg-success-500/10 text-success-500 border-success-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-300 hover:scale-105",
        variants[variant],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={14} />}
      {children}
    </motion.div>
  );
}

export default Badge;