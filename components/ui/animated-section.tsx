"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className, id, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9], delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
