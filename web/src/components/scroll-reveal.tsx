"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.15"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div style={{ opacity }}>
        {children}
      </motion.div>
    </div>
  );
}
