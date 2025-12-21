"use client";

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
    title: "Mentor Circles: Semester Kickoff",
    date: "Feb 8, 2026",
    summary: "Small-group circles to set intentions, match mentors, and share goals for the term.",
    cta: "Add to calendar",
  },
  {
    title: "Confidence in the Room",
    date: "Feb 22, 2026",
    summary: "A calm skills lab on facilitation, note-taking, and decision clarity without the hype.",
  },
  {
    title: "Learning Studio: Build with Peers",
    date: "Mar 15, 2026",
    summary: "Guided work session for projects and coursework with peer reviewers and structured breaks.",
  },
];

const pastEvents: Event[] = [
  {
    title: "Belonging Before Ambition",
    date: "Nov 18, 2025",
    summary: "Community forum on inclusive tech journeys; published notes and commitments.",
    cta: "View recap",
  },
  {
    title: "Designing Calm Products",
    date: "Oct 12, 2025",
    summary: "Workshop on accessible motion and thoughtful defaults, co-hosted with Accessibility SIG.",
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
    name: "Community",
    members: [
      { name: "Priya Raman", role: "Lead" },
      { name: "Jahnavi I.", role: "Engagement" },
      { name: "Sara Joseph", role: "Logistics" },
    ],
  },
  {
    name: "Learning",
    members: [
      { name: "Lakshmi V.", role: "Lead" },
      { name: "Navya Menon", role: "Curriculum" },
      { name: "Arushi B.", role: "Mentor ops" },
    ],
  },
  {
    name: "Design & Comms",
    members: [
      { name: "Aditi Rao", role: "Lead" },
      { name: "Riya S.", role: "Visuals" },
      { name: "Harini K.", role: "Content" },
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
                Belonging before ambition.
              </h1>
            </div>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[color:var(--text-primary)]">
              You do not need to already be in tech to grow with us. WiTS is a calm, academic space
              for women and non-binary students to learn together, try leadership safely, and build
              confidence with peers.
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
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">You grow here, with others.</h2>
              <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-secondary)]">
                <p>
                  WiTS is built to be welcoming before anything else. We prioritize clarity, small-group
                  belonging, and gentle progression over hype.
                </p>
                <p>
                  You will see mentorship circles, learning studios, and leadership labs — each paced for
                  sustainable growth. We design for accessibility and for students new to tech.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 rounded-full bg-[color:var(--purple)]"></div>
                <span className="eyebrow">Since 2023</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="grain relative overflow-hidden rounded-3xl border-2 border-[color:var(--sage)] bg-gradient-to-br from-[color:var(--sage)]/15 via-[color:var(--surface)] to-[color:var(--coral)]/15 p-10 shadow-2xl">
              <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10">
                <Suspense fallback={null}>
                  <FloatingGeometryScene />
                </Suspense>
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="display mb-4 text-6xl leading-none text-[color:var(--sage)]">&ldquo;</div>
                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[color:var(--text-primary)]">
                    Motion is subtle, typography is academic, and every experience respects focus and calm.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[color:var(--purple)] via-[color:var(--teal)] to-[color:var(--coral)] shadow-lg"></div>
                  <div>
                    <div className="font-semibold text-[color:var(--text-primary)]">Our Philosophy</div>
                    <div className="text-sm text-[color:var(--text-secondary)]">Belonging before ambition</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--teal)]/20 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[color:var(--coral)]/20 blur-2xl"></div>
              <div className="absolute right-20 top-20 h-20 w-20 rounded-full bg-[color:var(--purple)]/20 blur-xl"></div>
            </FadeIn>
          </div>
        </section>

        <section id="events" className="page-shell py-16">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <FadeIn className="flex flex-col gap-3">
              <div className="eyebrow">Events</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Upcoming and recent gatherings</h2>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(eventTab === "upcoming" ? upcomingEvents : pastEvents).map((event, idx) => (
              <EventCard3D
                key={event.title}
                title={event.title}
                date={event.date}
                summary={event.summary}
                cta={event.cta}
                index={idx}
              />
            ))}
          </div>
        </section>

        <section className="page-shell py-16" id="testimonials">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-4">
              <FadeIn className="flex flex-col gap-3 max-w-2xl">
                <div className="eyebrow">Testimonials</div>
                <h2 className="display text-xl sm:text-2xl md:text-3xl leading-snug">Voices from the community.</h2>
              <p className="max-w-xl text-[color:var(--text-secondary)]">
                Quote-centric, calm transitions, focus on lived experience.
              </p>
              </FadeIn>
              <div className="grid gap-4">
                {testimonials.slice(0, 2).map((item, idx) => (
                  <FadeIn key={item.name} delay={0.05 * idx} className="panel p-5 h-full">
                    <div className="display text-2xl leading-relaxed text-[color:var(--text-primary)]">"{item.quote}"</div>
                    <div className="mt-3 text-sm font-semibold text-[color:var(--text-primary)]">{item.name}</div>
                    <div className="text-sm text-[color:var(--text-secondary)]">{item.role}</div>
                  </FadeIn>
                ))}
              </div>
            </div>
          <div className="flex flex-col gap-4">
          <div className="h-80 rounded-3xl border-2 border-[color:var(--gold)] bg-gradient-to-br from-[color:var(--gold)]/15 to-[color:var(--purple)]/15 overflow-hidden shadow-lg">
            <Suspense fallback={<div className="w-full h-full bg-[color:var(--surface)]/50" />}>
              <CommunityNetworkScene />
            </Suspense>
          </div>
          <div className="grid gap-4">
            {testimonials.slice(2).map((item, idx) => (
              <FadeIn key={item.name} delay={0.05 * (idx + 2)} className="panel p-5 h-full">
                <div className="display text-2xl leading-relaxed text-[color:var(--text-primary)]">"{item.quote}"</div>
                <div className="mt-3 text-sm font-semibold text-[color:var(--text-primary)]">{item.name}</div>
                <div className="text-sm text-[color:var(--text-secondary)]">{item.role}</div>
              </FadeIn>
            ))}
            </div>
          </div>
          </div>
        </section>

        <section id="team" className="page-shell py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <FadeIn className="flex flex-col gap-2 max-w-2xl mb-6">
                <div className="eyebrow">Team · 2025</div>
                <h2 className="display text-xl sm:text-2xl md:text-3xl leading-snug">Yearbook-inspired, organized by department.</h2>
                <p className="max-w-2xl text-[color:var(--text-secondary)]">
                  Clean grid, warm portraits, respectful hover.
                </p>
              </FadeIn>
              <div className="grid gap-6 md:grid-cols-2">
                {teams.map((group) => (
                  <FadeIn key={group.name} className="panel flex flex-col gap-4 p-5">
                    <div className="meta">{group.name}</div>
                    <div className="flex flex-col gap-3">
                      {group.members.map((member) => (
                        <div
                          key={member.name}
                          className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--surface)] text-sm font-semibold text-[color:var(--purple)]">
                            {member.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-[color:var(--text-primary)]">{member.name}</div>
                            <div className="text-sm text-[color:var(--text-secondary)]">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
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
                <h2 className="display text-xl sm:text-2xl md:text-3xl leading-snug">Choose the path that fits.</h2>
              </ScrollReveal>
              <p className="max-w-2xl text-[color:var(--text-secondary)]">
                Community membership or Core Council recruitment — both respectful, both welcoming.
              </p>
            </FadeIn>
            <div className="grid gap-4 md:grid-cols-3">
              <FadeIn className="panel flex flex-col gap-4 p-6">
              <div className="meta">Community membership</div>
              <div className="display text-2xl leading-snug">Learn, attend, and grow.</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Attend events, join mentor circles, and access resources. No tech prerequisites. Just
                curiosity and care.
              </p>
              <a
                href="mailto:wits@students.iitm.ac.in"
                className="text-sm font-semibold text-[color:var(--purple)] underline-offset-4 hover:underline"
              >
                Join the community
              </a>
              </FadeIn>
              <FadeIn className="panel flex flex-col gap-4 items-center justify-center min-h-64 border border-[color:var(--gold)]">
              <Suspense fallback={null}>
                <ProgressParticlesScene />
              </Suspense>
              </FadeIn>
              <FadeIn className="panel flex flex-col gap-4 p-6">
              <div className="meta">Core Council 2025</div>
              <div className="display text-2xl leading-snug">Lead with calm confidence.</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Help shape programs, facilitate circles, and steward inclusive experiences. Training and
                mentorship provided.
              </p>
              <a
                href="https://forms.gle"
                className="text-sm font-semibold text-[color:var(--purple)] underline-offset-4 hover:underline"
              >
                View recruitment brief
              </a>
              </FadeIn>
            </div>
          </div>
        </section>

        <footer className="page-shell flex flex-col gap-2 border-t border-[color:var(--border)] pt-8 text-sm text-[color:var(--text-secondary)]">
          <div className="font-semibold text-[color:var(--text-primary)]">Women in Tech Society · IIT Madras BS</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:wits@students.iitm.ac.in" className="hover:underline">
              Email
            </a>
            <a href="#events" className="hover:underline">
              Events
            </a>
            <a href="#join" className="hover:underline">
              Join
            </a>
          </div>
          <div className="text-xs">Built with calm motion, editorial typography, and community-first storytelling.</div>
        </footer>
      </motion.main>
    </div>
  );
}
