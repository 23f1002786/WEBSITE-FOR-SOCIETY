"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface SplashProps {
  onDone?: () => void;
}

const wordMap = [
  {
    label: "Leadership",
    color: "var(--purple)",
    scatter: { x: -120, y: -80 },
    converge: { x: -80, y: -30 },
  },
  {
    label: "Learning",
    color: "#4A9FA0",
    scatter: { x: 120, y: -70 },
    converge: { x: 60, y: -20 },
  },
  {
    label: "Growth",
    color: "#C25A5E",
    scatter: { x: -30, y: 100 },
    converge: { x: -10, y: 40 },
  },
  {
    label: "Confidence",
    color: "#5A7A54",
    scatter: { x: 130, y: 90 },
    converge: { x: 90, y: 20 },
  },
  {
    label: "Community",
    color: "var(--gold)",
    scatter: { x: -150, y: 40 },
    converge: { x: -40, y: 0 },
  },
];

export function Splash({ onDone }: SplashProps) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(!reduce);
  const handleFinish = useCallback(() => {
    setShow(false);
    onDone?.();
  }, [onDone]);

  useEffect(() => {
    if (reduce) {
      onDone?.();
    }
  }, [onDone, reduce]);

  const overlayAnimate = reduce
    ? { opacity: 1 }
    : { opacity: [1, 1, 0], transition: { duration: 5.5, ease: "easeInOut" as const, times: [0, 0.73, 1] } };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-[color:var(--bg)] px-6 text-[color:var(--text-primary)]"
          initial={{ opacity: 1 }}
          animate={overlayAnimate}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onAnimationComplete={handleFinish}
        >
          <div className="absolute inset-0 grain" aria-hidden />
          <div className="relative flex h-[320px] w-full max-w-xl items-center justify-center">
            {wordMap.map((word, idx) => (
              <motion.span
                key={word.label}
                className="display absolute text-xl md:text-2xl"
                style={{ color: word.color }}
                initial={{ opacity: 0, scale: 0.92, x: word.scatter.x, y: word.scatter.y }}
                animate={
                  reduce
                    ? {
                        opacity: 1,
                        scale: 1,
                        x: word.converge.x,
                        y: word.converge.y,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.15 * idx },
                      }
                    : {
                        opacity: [0, 1, 1],
                        scale: [0.92, 1, 1.05],
                        x: [word.scatter.x, word.scatter.x, word.converge.x],
                        y: [word.scatter.y, word.scatter.y, word.converge.y],
                        transition: { duration: 2.6, ease: "easeInOut", times: [0, 0.35, 1], delay: 0.05 * idx },
                      }
                }
              >
                {word.label}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="absolute bottom-16 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: reduce ? 0.2 : 2.6, duration: 0.6, ease: "easeOut" } }}
          >
            <div className="display text-2xl md:text-3xl">Women in Tech Society</div>
            <div className="meta mt-2">IIT Madras BS Degree Program</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
