import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { FadeIn } from "@/components/fade-in";
import { Splash } from "@/components/splash";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingGeometryScene } from "@/components/floating-geometry";
import { EventCard3D } from "@/components/event-card-3d";
import { WaveTransformationScene } from "@/components/wave-transformation-3d";
import { CommunityNetworkScene } from "@/components/community-network-3d";
import { GrowthHelixScene } from "@/components/growth-helix-3d";
import { ProgressParticlesScene } from "@/components/progress-particles-3d";
import { MerryGoRoundScene } from "@/components/merry-go-round-3d";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Sidebar } from "@/components/sidebar";

type Event = {
  title: string;
  date: string;
  summary: string;
  cta?: string;
  link?: string;
};

const upcomingEvents: Event[] = [
  {
    title: "CipherTrace",
    date: "Margazhi'26",
    summary: "A mystery-based digital hunt using cryptography, steganography, and OSINT.",
    cta: "Register Now",
  },
];

const pastEvents: Event[] = [
  {
    title: "CIA - Classify, Infer, Automate",
    date: "Saavan’25",
    summary: "A multi-round cyber challenge blending AI/ML, OSINT, and cybersecurity strategy.",
    cta: "Read notes",
  },
    {
    title: "SheCodes - Code4GovTech",
    date: "September 2025",
    summary: "A week-long open-source program with workshops and mentored project contributions.",
    cta: "View recap",
  },

  {
    title: "Python Coding Challenge",
    date: "Saavan’25",
    summary: "A Python coding contest focused on logic, problem-solving, and real-world challenges.",
    cta: "Read notes",
  },
];

const testimonials = [
  {
    quote:
      "I never felt like I had to prove I was 'technical enough'. The space stayed academic and kind at the same time.",
    name: "Ananya K.",
    role: "Learning Studio participant",
  },
  {
    quote: "The mentorship circles are thoughtful and paced. No pressure to perform, just steady growth.",
    name: "Meera S.",
    role: "Council applicant",
  },
  {
    quote: "Events start with people before projects. It changes how confident you feel walking into the room.",
    name: "Shruti R.",
    role: "Community member",
  },
];

const teams = [
  {
    name: "Executive Team",
    members: [
      { name: "Devishi Jain", role: "Secretary" },
      { name: "Ilesha Srivastava", role: "Deputy Secretary" },
    ],
  },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [eventTab, setEventTab] = useState<"upcoming" | "past">("upcoming");

  const handleSplashDone = () => {
    setShowSplash(false);
    setContentReady(true);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)]">
      <Sidebar />
      <Suspense fallback={null}>
        <WaveTransformationScene />
      </Suspense>
      {showSplash ? <Splash onDone={handleSplashDone} /> : null}
      <ThemeToggle />

      <motion.main
        className="flex flex-col"
        initial={{ opacity: contentReady ? 1 : 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: showSplash ? 0.2 : 0 }}
      >
        <section id="hero" className="grain relative flex min-h-[85vh] items-center justify-center bg-gradient-to-br from-[color:var(--bg)] via-[color:var(--bg)] to-[color:var(--surface)]/60 px-6 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[color:var(--purple)] blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#B8E0E1] blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-[#F5D4D8] blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#D4E6CC] blur-2xl"></div>
          </div>
          <FadeIn className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="h-24 w-24 rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--gold)]/5 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src="/wits logo.png" alt="Women in Tech Society logo" className="h-full w-full object-contain p-1" />
            </div>
            <div className="eyebrow rounded-full border border-[color:var(--gold)] bg-[color:var(--gold)]/10 px-5 py-2.5 text-[color:var(--text-primary)] font-semibold tracking-wider uppercase">Women in Tech Society · IITM BS</div>
            <div className="py-6 sm:py-8 md:py-12">
              <h1 className="display bg-gradient-to-br from-[color:var(--text-primary)] via-[color:var(--purple)] to-[color:var(--text-primary)] bg-clip-text text-4xl leading-[1.2] text-transparent sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Together, We Learn.
              </h1>
              <h6 className="mt-4 text-sm sm:text-base md:text-lg font-medium text-[color:var(--text-secondary)] tracking-wide">
                Connect | Empower | Grow
              </h6>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[color:var(--text-primary)]">
                WiTS is an initiative dedicated to fostering an inclusive, growth-oriented environment that
                empowers women to excel in technology through, inter alia, learning, leadership
                opportunities, and peer collaboration. The community emphasises openness, support, and
                shared engagement to create space for meaningful learning and collective development.

            </p>
          </FadeIn>
          <motion.div 
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            animate={{ opacity: [0.3, 0.6, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">Scroll</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </section>

        <section className="page-shell py-16">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <FadeIn className="flex flex-col gap-6">
              <div className="eyebrow">Our Foundation</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Community-first, always.</h2>
              <div className="grid gap-5 text-lg leading-relaxed text-[color:var(--text-secondary)]">
                <div className="panel grain border-l-4 border-[color:var(--teal)] bg-gradient-to-r from-[color:var(--teal)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--teal-dark)]">🤝 Inclusive language</div>
                  <p className="mt-2">No jargon, no prerequisites. Warm facilitators guide every session.</p>
                </div>
                <div className="panel grain border-l-4 border-[color:var(--purple)] bg-gradient-to-r from-[color:var(--purple)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--purple-dark)]">🎨 Calm motion</div>
                  <p className="mt-2">Reduced-motion friendly design with gentle, respectful pacing.</p>
                </div>
                <div className="panel grain border-l-4 border-[color:var(--coral)] bg-gradient-to-r from-[color:var(--coral)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--coral-dark)]">📚 Academic tone</div>
                  <p className="mt-2">Editorial layouts, thoughtful reading widths, and intentional typography.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <div className="panel grain flex flex-col gap-6 border-2 border-[color:var(--purple)] bg-gradient-to-br from-[color:var(--purple)]/20 to-[color:var(--purple-dark)]/10 p-8 shadow-2xl">
                <div className="eyebrow text-[color:var(--purple)] opacity-95">Design DNA</div>
                <div className="display text-3xl leading-snug text-[color:var(--purple)]">Editorial elegance</div>
                <p className="leading-relaxed text-[color:var(--text-primary)]">
                  Calm, academic space with restrained accents. Purple anchors identity, gold highlights sparingly, neutrals provide clarity.
                </p>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/60 opacity-90"></div>
                <div className="h-64 w-full rounded-lg overflow-hidden border-2 border-white/20 bg-[color:var(--surface)]">
                  <Suspense fallback={<div className="w-full h-full bg-[color:var(--charcoal-light)]/50" />}>
                    <MerryGoRoundScene />
                  </Suspense>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="panel rounded-2xl border-2 border-[color:var(--teal)] bg-gradient-to-br from-[color:var(--teal)]/15 to-[color:var(--teal)]/5 p-5 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="display mb-2 text-3xl font-bold text-[color:var(--teal)]">120+</div>
                  <div className="text-sm font-medium text-[color:var(--text-primary)]">Active members</div>
                </div>
                <div className="panel rounded-2xl border-2 border-[color:var(--coral)] bg-gradient-to-br from-[color:var(--coral)]/15 to-[color:var(--coral)]/5 p-5 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="display mb-2 text-3xl font-bold text-[color:var(--coral)]">24</div>
                  <div className="text-sm font-medium text-[color:var(--text-primary)]">Events this year</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="about" className="page-shell py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn className="flex flex-col justify-center gap-6">
              <div className="eyebrow">About WiTS</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Grow Beyond Limits.</h2>
              <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-secondary)]">
                <p>
                  WiTS is a student-led community within the IIT Madras BS Degree Program, established to empower women in the field of technology.
                  What began as a platform for learning and peer interaction has evolved into a structured community that supports technical development
                  alongside mentorship, leadership exposure, professional networking, and collaboration.
                  </p>
                  <p>Today, we continues to grow as a space that equips its members with the skills, guidance,
                  and connections needed to navigate and thrive in the rapidly evolving technology landscape.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-[color:var(--purple)] bg-[color:var(--purple)] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  Know More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-20 rounded-full bg-[color:var(--purple)]"></div>
                  <span className="eyebrow">Since 2023</span>
                </div>
              </div>
            </FadeIn>
                <FadeIn delay={0.15} className="panel grain flex flex-col gap-6 border-2 border-[color:var(--sage)] bg-gradient-to-br from-[color:var(--sage)]/20 to-[color:var(--coral)]/10 p-8 shadow-2xl h-full" style={{ minHeight: '100%' }}>
                  <div className="flex flex-col flex-grow justify-between h-full">
                    <div>
                      <div className="eyebrow text-[color:var(--sage)] opacity-95 text-xl">Our Vision</div>
                      <div className="mt-1 mb-2 text-xs sm:text-sm text-[color:var(--sage)] text-center italic opacity-80">Empowering women to grow, connect, and lead in tech—together.</div>
                      <div className="display text-3xl leading-snug text-[color:var(--sage)]">&ldquo;</div>
                      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[color:var(--text-primary)]">
                        <p>
                          We envision a community that extends beyond academic learning and events, recognising the
                        importance of peer connection, leadership development, and meaningful networking.
                        </p>
                        <br />
                        <p>
                           We aim to create an environment where women are encouraged to engage, collaborate, and build confidence
                          through shared learning, mutual support, and sustained professional interaction, thus enabling
                          holistic growth as both technologists and individuals.
                        </p>
                      </p>
                    </div>
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/60 opacity-90 mx-auto my-6"></div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[color:var(--purple)] via-[color:var(--teal)] to-[color:var(--coral)] shadow-lg"></div>
                      <div>
                        <div className="font-semibold text-[color:var(--text-primary)]">WiTS Community</div>
                        <div className="text-sm text-[color:var(--text-secondary)]">Holistic growth for women in tech</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
          </div>
        </section>

        <section id="events" className="page-shell py-16">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <FadeIn className="flex flex-col gap-3">
              <div className="eyebrow">Events</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Upcoming and past events</h2>
              <p className="max-w-2xl text-lg text-[color:var(--text-secondary)]">
                Clear separation, no overload. Attend at your pace.
              </p>
            </FadeIn>
            <div className="mt-4 flex gap-3">
              {[
                { key: "upcoming" as const, label: "Upcoming" },
                { key: "past" as const, label: "Past" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setEventTab(tab.key)}
                  className={`rounded-full border-2 px-6 py-3 text-sm font-semibold transition-all ${
                    eventTab === tab.key
                      ? "scale-105 border-[color:var(--purple)] bg-[color:var(--purple)] text-white shadow-lg"
                      : "border-[color:var(--border)] text-[color:var(--text-primary)] hover:border-[color:var(--purple)] hover:shadow-md"
                  }`}
                  aria-pressed={eventTab === tab.key}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {eventTab === "upcoming" ? (
            <div className="text-center py-8">
              <FadeIn>
                <p className="text-xl text-[color:var(--text-secondary)]">Stay tuned for upcoming events!</p>
              </FadeIn>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              {pastEvents.map((event, idx) => (
                <div key={event.title} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-80 2xl:w-96">
                  <EventCard3D
                    title={event.title}
                    date={event.date}
                    summary={event.summary}
                    cta={event.cta}
                    index={idx}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        

        <section id="team" className="page-shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <FadeIn className="flex flex-col gap-2 max-w-2xl mb-6">
                <div className="eyebrow">Executive Team</div>
                <h2 className="display text-xl sm:text-2xl md:text-3xl leading-snug">Leading with purpose and quiet strength.</h2>
                <p className="max-w-2xl text-[color:var(--text-secondary)]">
                  Meet the dedicated leaders guiding our community towards growth and inclusivity.
                </p>
              </FadeIn>
              <div className="space-y-6">
                {teams.map((group) => (
                  <FadeIn key={group.name} className="panel grain border-2 border-[color:var(--gold)]/20 bg-gradient-to-br from-[color:var(--gold)]/5 to-[color:var(--purple)]/5 p-8 shadow-xl">
                    <div className="meta text-center mb-6 text-[color:var(--gold)] font-bold">{group.name}</div>
                    <div className="grid gap-6">
                      {group.members.map((member) => (
                        <div
                          key={member.name}
                          className="flex items-center gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[color:var(--gold)]/50"
                        >
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--purple)] to-[color:var(--gold)] text-white text-lg font-bold shadow-lg">
                            {member.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-lg text-[color:var(--text-primary)]">{member.name}</div>
                            <div className="text-[color:var(--purple)] font-medium">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn className="mt-8">
                <a href="/teams" className="inline-block bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--gold)] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Know More About Our Team
                </a>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <div className="eyebrow">Learning & Growth</div>
              <h3 className="display text-xl sm:text-2xl text-[color:var(--text-primary)]">Progress through mentorship and learning</h3>
              <div className="h-96 rounded-3xl border-2 border-[color:var(--gold)]/30 bg-gradient-to-br from-[color:var(--gold)]/5 to-[color:var(--accent-coral)]/5 overflow-hidden shadow-lg">
                <Suspense fallback={<div className="w-full h-full bg-[color:var(--surface)]/50" />}>
                  <GrowthHelixScene />
                </Suspense>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="join" className="page-shell py-16">
          <div className="flex flex-col gap-6">
            <FadeIn className="flex flex-col gap-2 max-w-2xl">
              <ScrollReveal className="flex flex-col gap-2">
                <div className="eyebrow">Join Us</div>
                <h2 className="display text-xl sm:text-2xl md:text-3xl leading-snug">Find the path that feels right for you.</h2>
              </ScrollReveal>
              <p className="max-w-2xl text-[color:var(--text-secondary)]">
                Whether you’re exploring the community or stepping into leadership, both journeys are grounded in respect, care, and belonging.
              </p>
            </FadeIn>
            <div className="grid gap-4 md:grid-cols-3">
              <FadeIn className="panel flex flex-col gap-4 p-6">
              <div className="meta">Community membership</div>
              <div className="display text-2xl leading-snug">Explore. Connect. Evolve.</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Take part in events, engage in mentor circles, and unlock shared resources.
                No technical background required — just openness, curiosity, and kindness.
              </p>
              <a
                href="https://forms.gle/8D1hocffN92LnYjDA"
                className="text-sm font-semibold text-[color:var(--purple)] underline-offset-4 hover:underline"
              >
                Become a member
              </a>
              </FadeIn>
              <FadeIn className="panel flex flex-col gap-4 items-center justify-center min-h-64 border border-[color:var(--gold)]">
              <Suspense fallback={null}>
                <ProgressParticlesScene />
              </Suspense>
              </FadeIn>
              <FadeIn className="panel flex flex-col gap-4 p-6">
              <div className="meta">Core Council 2025</div>
              <div className="display text-2xl leading-snug">Be part of what we build.</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Play a role in shaping initiatives, guiding circles, and nurturing inclusive spaces.
                You’ll receive structured training and ongoing mentorship along the way.
              </p>
              <a
                href="https://forms.gle/da3UbYdZ74x1sGLT8"
                className="text-sm font-semibold text-[color:var(--purple)] underline-offset-4 hover:underline"
              >
                Join the Core Team now.
              </a>
              </FadeIn>
            </div>
          </div>
        </section>

        <footer className="page-shell flex flex-col items-center gap-2 border-t border-[color:var(--border)] pt-8 text-sm text-[color:var(--text-secondary)]">
          <div className="font-semibold text-[color:var(--text-primary)]">Women in Tech Society · IIT Madras BS</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:wits@students.iitm.ac.in" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </a>
            <a href="https://linkedin.com/company/wits-iitmadras-bs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://instagram.com/wits_iitmadras_bs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="white" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.609.034 6.298.1 4.993.166 4.087.334 3.285.634c-.8.3-1.482.7-2.165 1.383C.437 2.7.037 3.382 0 4.182c-.3.8-.468 1.706-.534 3.011C-.1 8.504-.134 9.291-.134 12.912s.034 4.408.1 5.719c.066 1.305.234 2.211.534 3.011.3.8.7 1.482 1.383 2.165.683.683 1.365 1.083 2.165 1.383.8.3 1.706.468 3.011.534 1.311.066 2.098.1 5.719.1s4.408-.034 5.719-.1c1.305-.066 2.211-.234 3.011-.534.8-.3 1.482-.7 2.165-1.383.683-.683 1.083-1.365 1.383-2.165.3-.8.468-1.706.534-3.011.066-1.311.1-2.098.1-5.719s-.034-4.408-.1-5.719c-.066-1.305-.234-2.211-.534-3.011-.3-.8-.7-1.482-1.383-2.165C21.3.7 20.618.3 19.818 0c-.8-.3-1.706-.468-3.011-.534C16.496-.1 15.709-.134 12.088-.134 12.053-.134 12.017 0 12.017 0zm0 1.801c3.578 0 4.352.034 5.888.1 1.444.066 2.238.3 2.778.5.683.267 1.167.617 1.683 1.133.517.517.867 1 .133 1.683.2.54.434 1.334.5 2.778.066 1.536.1 2.31.1 5.888s-.034 4.352-.1 5.888c-.066 1.444-.3 2.238-.5 2.778-.267.683-.617 1.167-1.133 1.683-.517.517-1 .867-1.683 1.133-.54.2-1.334.434-2.778.5-1.536.066-2.31.1-5.888.1s-4.352-.034-5.888-.1c-1.444-.066-2.238-.3-2.778-.5-.683-.267-1.167-.617-1.683-1.133C1.617 20.617 1.267 20.1.583 19.417c-.2-.54-.434-1.334-.5-2.778-.066-1.536-.1-2.31-.1-5.888s.034-4.352.1-5.888c.066-1.444.3-2.238.5-2.778.267-.683.617-1.167 1.133-1.683.517-.517.867-1 .133-1.683.2-.54.434-1.334.5-2.778.066-1.536.1-2.31.1-5.888z"/>
                <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                <circle cx="17.006" cy="6.994" r="1.4"/>
              </svg>
              Instagram
            </a>
            <a href="https://twitter.com/wits_iitmadras" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a>
          </div>
          <div className="text-xs">Built with intentional design, thoughtful motion, and a people-first mindset.</div>
        </footer>
      </motion.main>
    </div>
  );
}