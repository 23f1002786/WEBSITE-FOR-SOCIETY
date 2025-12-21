"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if dark mode is preferred
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    const isDarkMode = stored ? stored === "dark" : prefersDark;
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);
  }, []);

  const applyTheme = (dark: boolean) => {
    const htmlElement = document.documentElement;
    if (dark) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
    }
    // Force a reflow to ensure CSS updates
    void htmlElement.offsetHeight;
  };

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyTheme(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-20 z-50 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] p-2 text-[color:var(--text-primary)] shadow-sm transition-all hover:border-[color:var(--purple)] hover:shadow-md"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 7C7.73228 7 6 8.73228 6 11C6 13.2677 7.73228 15 10 15C12.2677 15 14 13.2677 14 11C14 8.73228 12.2677 7 10 7ZM2 11C2 6.58172 5.58172 3 10 3C13.0583 3 15.7158 4.61358 17.0711 7.00329C18.8174 6.38752 20.7839 6.02339 23 6.0082V8.00794C20.8574 8.02308 18.8886 8.26075 17.1676 8.68721C17.6832 9.33399 18.0613 10.1256 18.0613 11C18.0613 14.326 15.326 17.0613 12.0613 17.0613C9.99471 17.0613 8.17939 15.9869 7.20404 14.3583C5.40759 14.9283 3.82639 15.7944 2.5 16.9228C1.77946 18.0624 1.25 19.4943 1.25 21C1.25 21.4142 0.914214 21.75 0.5 21.75C0.085786 21.75 -0.25 21.4142 -0.25 21C-0.25 19.1543 0.932783 17.5402 2.5 16.5118C3.06617 16.0469 3.69813 15.6221 4.36864 15.2383C3.53073 13.9936 3 12.5 3 11Z" />
        </svg>
      )}
    </button>
  );
}
