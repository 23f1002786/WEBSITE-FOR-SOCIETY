import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const meta = Source_Sans_3({
  variable: "--font-meta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Women in Tech Society | IIT Madras BS",
  description:
    "A welcoming home for learning, leadership, and community in the IIT Madras BS Women in Tech Society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                
                const html = document.documentElement;
                if (isDark) {
                  html.classList.add('dark');
                  html.classList.remove('light');
                } else {
                  html.classList.remove('dark');
                  html.classList.add('light');
                }
                
                // Force reflow to ensure styles apply
                void html.offsetHeight;
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${meta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
