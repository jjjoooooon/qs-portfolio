import React from 'react';
import { motion } from 'framer-motion';

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary ${className}`}>
    {children}
  </span>
);

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = "", 
  ...props 
}) => {
  // Switched from transition-all to transition-colors to avoid conflict with Framer Motion transforms
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const buttonMotionVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    hover: { 
      x: "200%", 
      transition: { 
        repeat: Infinity, 
        duration: 1.5, 
        ease: "linear",
        repeatDelay: 0.5
      } 
    },
  };

  // Only show shimmer on filled buttons
  const showShimmer = variant === 'primary' || variant === 'secondary';

  return (
    <motion.button
      variants={buttonMotionVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {showShimmer && (
        <motion.div
          variants={shimmerVariants}
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        />
      )}
    </motion.button>
  );
};

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ 
  children, 
  className = "",
  hoverEffect = false
}) => (
  <div className={`rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm backdrop-blur-sm ${hoverEffect ? 'transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5' : ''} ${className}`}>
    {children}
  </div>
);

// --- Section Heading ---
export const SectionHeading: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
      {title}
      <span className="block h-1.5 w-16 bg-gradient-to-r from-primary to-sky-500 mt-2 rounded-full"></span>
    </h2>
    {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
  </div>
);