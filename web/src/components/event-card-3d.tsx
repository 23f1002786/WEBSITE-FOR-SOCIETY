"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface EventCard3DProps {
  title: string;
  date: string;
  summary: string;
  cta?: string;
  index?: number;
}

export function EventCard3D({
  title,
  date,
  summary,
  cta,
  index = 0,
}: EventCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
      onHoverStart={() => !prefersReducedMotion && setIsFlipped(true)}
      onHoverEnd={() => !prefersReducedMotion && setIsFlipped(false)}
      onClick={() => prefersReducedMotion && setIsFlipped(!isFlipped)}
      className="group relative h-80 cursor-pointer overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 90 : 0,
          opacity: isFlipped ? 0 : 1
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Front */}
        <div className="panel grain w-full h-full flex flex-col gap-4 overflow-hidden border-l-4 border-[color:var(--gold)] bg-[color:var(--surface)] p-6 transition-all hover:border-[color:var(--charcoal)] hover:shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="meta text-[color:var(--gold-dark)]">{date}</div>
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--accent-coral)] shadow-md transition-transform group-hover:scale-150"></div>
          </div>
          <h3 className="display text-2xl leading-snug text-[color:var(--text-primary)]">
            {title}
          </h3>
          <p className="flex-1 leading-relaxed text-[color:var(--text-secondary)]">
            {summary}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 0 : -90,
          opacity: isFlipped ? 1 : 0
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Back */}
        <div className="panel grain w-full h-full flex flex-col items-center justify-center gap-4 border-l-4 border-[color:var(--purple)] bg-gradient-to-br from-[color:var(--purple)]/20 to-[color:var(--gold)]/10 p-6">
          <div className="text-center">
            <h4 className="display mb-3 text-xl text-[color:var(--gold)]">
              Event Details
            </h4>
            <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
              Join us for this transformative experience. All are welcome.
            </p>
          </div>
          {cta && (
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--purple)] px-4 py-2 text-sm font-semibold text-[color:var(--purple)] transition-all hover:bg-[color:var(--purple)] hover:text-white"
            >
              {cta}
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
