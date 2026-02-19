import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

type Newsletter = {
  id: number;
  title: string;
  edition: string;
  date: string;
  description: string;
  readOnlineLink?: string;
  downloadLink?: string;
  color: "purple" | "teal" | "coral" | "sage" | "gold";
};

const newsletters: Newsletter[] = [
  {
    id: 1,
    title: "Women in Tech - Vol. 1",
    edition: "Edition 1",
    date: "January 2025",
    description: "Our inaugural newsletter covers the journey of Women in Tech Society, key initiatives, and member spotlights.",
    readOnlineLink: "/newsletter-vol-1.pdf",
    downloadLink: "/newsletter-vol-1.pdf",
    color: "purple",
  },
];

const colorClasses = {
  purple: {
    border: "border-[color:var(--purple)]",
    bg: "bg-[color:var(--purple)]/5",
    text: "text-[color:var(--purple-dark)]",
    accent: "from-[color:var(--purple)]/20 to-[color:var(--purple-dark)]/10",
  },
  teal: {
    border: "border-[color:var(--teal)]",
    bg: "bg-[color:var(--teal)]/5",
    text: "text-[color:var(--teal-dark)]",
    accent: "from-[color:var(--teal)]/20 to-[color:var(--teal-dark)]/10",
  },
  coral: {
    border: "border-[color:var(--coral)]",
    bg: "bg-[color:var(--coral)]/5",
    text: "text-[color:var(--coral-dark)]",
    accent: "from-[color:var(--coral)]/20 to-[color:var(--coral-dark)]/10",
  },
  sage: {
    border: "border-[color:var(--sage)]",
    bg: "bg-[color:var(--sage)]/5",
    text: "text-[color:var(--sage-dark)]",
    accent: "from-[color:var(--sage)]/20 to-[color:var(--sage-light)]/10",
  },
  gold: {
    border: "border-[color:var(--gold)]",
    bg: "bg-[color:var(--gold)]/5",
    text: "text-[color:var(--gold-dark)]",
    accent: "from-[color:var(--gold)]/20 to-[color:var(--gold-dark)]/10",
  },
};

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)]">
      <Sidebar />
      <ThemeToggle />

      <motion.main
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <section className="grain relative flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-[color:var(--bg)] via-[color:var(--bg)] to-[color:var(--surface)]/60 px-6 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[color:var(--gold)] blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[color:var(--teal)] blur-3xl"></div>
          </div>
          <FadeIn className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="eyebrow rounded-full border border-[color:var(--gold)] bg-[color:var(--gold)]/10 px-5 py-2.5 text-[color:var(--text-primary)] font-semibold tracking-wider uppercase">Newsletter</div>
            <div className="py-4">
              <h1 className="display bg-gradient-to-br from-[color:var(--text-primary)] via-[color:var(--gold)] to-[color:var(--text-primary)] bg-clip-text text-4xl leading-[1.2] text-transparent sm:text-5xl md:text-6xl text-balance">
                Stay Connected
              </h1>
              <h6 className="mt-4 text-sm sm:text-base md:text-lg font-medium text-[color:var(--text-secondary)] tracking-wide">
                Insights, stories, and opportunities from the Women in Tech community
              </h6>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[color:var(--text-primary)] max-w-2xl">
              Explore our curated newsletters featuring the latest trends, inspiring member stories, learning resources, and community highlights.
            </p>
          </FadeIn>
        </section>

        {/* Newsletter Editions Grid */}
        <section id="newsletters" className="page-shell py-12 md:py-16">
          <FadeIn>
            <div className="mb-12 text-center">
              <div className="eyebrow mb-4 text-center">Our Editions</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl leading-tight">
                Explore our Editions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {newsletters.map((newsletter, index) => {
              const colors = colorClasses[newsletter.color];
              return (
                <ScrollReveal key={newsletter.id} delay={index * 0.1}>
                  <motion.div
                    className={`panel grain relative overflow-hidden rounded-lg border-2 ${colors.border} ${colors.bg} bg-gradient-to-br ${colors.accent} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 md:p-8 flex flex-col h-full`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--gold)]/10 to-transparent blur-2xl"></div>

                    <div className="relative z-10 flex flex-col h-full gap-4">
                      {/* Header */}
                      <div>
                        <div className={`inline-block rounded-full border ${colors.border} bg-[color:var(--surface)] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase ${colors.text} mb-3`}>
                          {newsletter.edition}
                        </div>
                        <h3 className={`display text-2xl md:text-3xl leading-tight ${colors.text}`}>
                          {newsletter.title}
                        </h3>
                      </div>

                      {/* Date */}
                      <p className="text-xs md:text-sm font-medium text-[color:var(--text-muted)] uppercase tracking-wide">
                        {newsletter.date}
                      </p>

                      {/* Description */}
                      <p className="text-sm md:text-base leading-relaxed text-[color:var(--text-secondary)] flex-grow">
                        {newsletter.description}
                      </p>

                      {/* Actions */}
                      <div className="flex gap-3 md:gap-4 pt-4 md:pt-6 mt-auto">
                        <a
                          href={newsletter.readOnlineLink}
                          className={`flex-1 rounded-lg border-2 ${colors.border} px-4 py-2.5 md:py-3 text-center text-xs md:text-sm font-semibold transition-all duration-300 hover:bg-[color:var(--surface)] ${colors.text} uppercase tracking-wide`}
                        >
                          Read Online
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Load More / Coming Soon */}
          <FadeIn delay={0.4} className="mt-12 md:mt-16">
            <div className="panel grain rounded-lg border-2 border-[color:var(--gold)]/20 bg-gradient-to-r from-[color:var(--gold)]/5 to-transparent p-8 md:p-12 text-center">
              <p className="eyebrow mb-3 text-[color:var(--gold)]">Stay Tuned</p>
              <h3 className="display text-xl md:text-2xl mb-4">
                More editions coming soon!
              </h3>
            </div>
          </FadeIn>
        </section>
      </motion.main>
    </div>
  );
}
