"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface EventCard3DProps {
  title: string;
  date: string;
  summary: string;
  cta?: string;
  link?: string;
  index?: number;
}

export function EventCard3D({
  title,
  date,
  summary,
  cta,
  link,
  index = 0,
}: EventCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const enableFlip = cta === "Register Now";

  const handleQRClick = () => {
    if (!link) return;
    
    try {
      // Open QR code in a new window
      const newWindow = window.open('', '', 'width=400,height=500');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${title} - Registration QR Code</title>
              <style>
                body {
                  margin: 0;
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  min-height: 100vh;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .container {
                  background: white;
                  padding: 30px;
                  border-radius: 12px;
                  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                  text-align: center;
                }
                h2 {
                  margin: 0 0 10px 0;
                  color: #333;
                  font-size: 18px;
                }
                p {
                  margin: 0 0 20px 0;
                  color: #666;
                  font-size: 14px;
                }
                img {
                  border: 2px solid #667eea;
                  border-radius: 8px;
                  margin: 20px 0;
                  max-width: 100%;
                  height: auto;
                }
                a {
                  display: inline-block;
                  margin-top: 20px;
                  padding: 10px 20px;
                  background: #667eea;
                  color: white;
                  text-decoration: none;
                  border-radius: 6px;
                  font-size: 14px;
                  transition: background 0.3s;
                }
                a:hover {
                  background: #764ba2;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>${title}</h2>
                <p>Scan to register</p>
                <img src="/qr-code.png" alt="Registration QR Code" />
                <p>Or visit: <br><a href="${link}" target="_blank" rel="noopener noreferrer">Click here</a></p>
              </div>
            </body>
          </html>
        `);
      }
    } catch (error) {
      console.error('Error opening QR code:', error);
      // Fallback: open the link directly
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
      onHoverStart={() => enableFlip && !prefersReducedMotion && setIsFlipped(true)}
      onHoverEnd={() => enableFlip && !prefersReducedMotion && setIsFlipped(false)}
      onClick={() => enableFlip && prefersReducedMotion && setIsFlipped(!isFlipped)}
      className={`group relative h-80 w-full ${enableFlip ? 'cursor-pointer' : ''} overflow-hidden`}
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

      {enableFlip && (
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
                            <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
                Join us for this transformative experience. All are welcome.
              </p>
            </div>
            {cta && (
              <button
                onClick={handleQRClick}
                className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--purple)] px-4 py-2 text-sm font-semibold text-[color:var(--purple)] transition-all hover:bg-[color:var(--purple)] hover:text-white cursor-pointer"
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
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
