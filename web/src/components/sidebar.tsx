"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "/about", id: "about" },
    { label: "Events", href: "#events", id: "events" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Team", href: "#team", id: "team" },
    { label: "Join", href: "#join", id: "join" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation Buttons - Centered at Top */}
      <div className="fixed top-8 left-1/2 z-40 -translate-x-1/2 hidden md:flex gap-2">
        {navLinks.map((link, index) => {
          const gradientOffset = (scrollY * 0.3 + index * 15) % 100;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative rounded-lg px-3 py-1.5 text-xs font-medium text-[color:var(--text-primary)] transition-all overflow-hidden group"
              style={{
                background: `linear-gradient(${45 + gradientOffset}deg,
                  color-mix(in srgb, var(--purple) 30%, transparent),
                  color-mix(in srgb, var(--surface) 50%, var(--purple) 20%))`,
                backdropFilter: "blur(4px)",
              }}
            >
              <span className="relative z-10 group-hover:text-[color:var(--purple)]">
                {link.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-6 z-40 rounded-lg p-2 text-[color:var(--text-primary)] transition-all md:hidden hover:bg-[color:var(--bg)]/50"
        aria-label="Toggle menu"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-6 right-6 z-30 overflow-hidden rounded-lg bg-[color:var(--surface)] shadow-lg md:hidden"
      >
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[color:var(--text-primary)] transition-all hover:bg-[color:var(--bg)] hover:text-[color:var(--purple)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
