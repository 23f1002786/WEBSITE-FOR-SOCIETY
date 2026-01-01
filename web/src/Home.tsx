import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { FadeIn } from "@/components/fade-in";
import { Splash } from "@/components/splash";
import { ThemeToggle } from "@/components/theme-toggle";
import { EventCard3D } from "@/components/event-card-3d";
import { WaveTransformationScene } from "@/components/wave-transformation-3d";
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
    summary: "CipherTrace is an immersive digital detective challenge where participants follow clues across websites and social media to crack codes, uncover hidden flags, and close a cyber‑mystery case.",
    cta: "Register Now",
    link: "https://iitmparadox.org/events/23",
  },
];

const pastEvents: Event[] = [
  {
    title: "CIA - Classify, Infer, Automate",
    date: "Saavan’25",
    summary: "Organized in collaboration with the Tech Society, CIA was a three-round cyber intelligence competition that aimed to give participants a hands-on experience of real-world cyber operations.",
    cta: "Read notes",
  },
    {
    title: "SheCodes - Code4GovTech",
    date: "September 2025",
    summary: "A week-long open-source program by Code4GovTech with workshops and mentored project contributions.",
    cta: "View recap",
  },

  {
    title: "Python Coding Challenge",
    date: "Saavan’23",
    summary: "The event was designed to encourage participants to strengthen their problem-solving skills while applying logical thinking to real-world–style programming challenges.",
    cta: "Read notes",
  },
];

const teams = [
  {
    name: "Executive Team",
    members: [
      { name: "Devishi Jain", role: "Secretary", photo: "/profiles/Devishi.png", linkedin: "https://www.linkedin.com/in/devishi-jain-6164bsavra/", email: "23f1002786@ds.study.iitm.ac.in" },
      { name: "Ilesha Srivastava", role: "Deputy Secretary", photo: "/profiles/ilesha.jpg", linkedin: "https://www.linkedin.com/in/ilesha-srivastava", email: "23f2004210@ds.study.iitm.ac.in" },
    ],
  },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [eventTab, setEventTab] = useState<"upcoming" | "past">("past");

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
              <div className="eyebrow">Our Objectives</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Community-first, always.</h2>
              <div className="grid gap-5 text-lg leading-relaxed text-[color:var(--text-secondary)]">
                <div className="panel grain border-l-4 border-[color:var(--teal)] bg-gradient-to-r from-[color:var(--teal)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--teal-dark)]">Hands-On Learning</div>
                  <p className="mt-2">Facilitating hands-on learning through workshops, skill-building challenges, initiatives, and hackathons that build confidence and practical skills.</p>
                </div>
                <div className="panel grain border-l-4 border-[color:var(--purple)] bg-gradient-to-r from-[color:var(--purple)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--purple-dark)]">Industry Exposure</div>
                  <p className="mt-2">Organising guest lectures, industry talks, networking meetups, and community panels to encourage exposure and professional interaction.</p>
                </div>
                <div className="panel grain border-l-4 border-[color:var(--coral)] bg-gradient-to-r from-[color:var(--coral)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="font-semibold text-[color:var(--coral-dark)]">Mentorship</div>
                  <p className="mt-2">Providing mentorship and guidance through seniors, alumni, professionals, and peer-learning programs.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <div className="panel grain flex flex-col gap-6 border-2 border-[color:var(--purple)] bg-gradient-to-br from-[color:var(--purple)]/20 to-[color:var(--purple-dark)]/10 p-8 shadow-2xl">
                <div className="eyebrow text-[color:var(--purple)] opacity-95">Community</div>
                <div className="display text-3xl leading-snug text-[color:var(--purple)]">Peer Collaboration</div>
                <p className="leading-relaxed text-[color:var(--text-primary)]">
                  Enabling a supportive peer network that promotes collaboration, shared learning, and growth without comparison.
                </p>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/60 opacity-90"></div>
                <div className="h-64 w-full rounded-lg overflow-hidden border-2 border-white/20 bg-[color:var(--surface)]">
                  <Suspense fallback={<div className="w-full h-full bg-[color:var(--charcoal-light)]/50" />}>
                    <MerryGoRoundScene />
                  </Suspense>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* <div className="panel rounded-2xl border-2 border-[color:var(--teal)] bg-gradient-to-br from-[color:var(--teal)]/15 to-[color:var(--teal)]/5 p-5 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="display mb-2 text-3xl font-bold text-[color:var(--teal)]">800+</div>
                  <div className="text-sm font-medium text-[color:var(--text-primary)]">Active members</div>
                </div>
                <div className="panel rounded-2xl border-2 border-[color:var(--coral)] bg-gradient-to-br from-[color:var(--coral)]/15 to-[color:var(--coral)]/5 p-5 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="display mb-2 text-3xl font-bold text-[color:var(--coral)]">5</div>
                  <div className="text-sm font-medium text-[color:var(--text-primary)]">Events this year</div>
                </div> */}
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
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-20 rounded-full bg-[color:var(--purple)]"></div>
                  <span className="eyebrow">Since 2023</span>
                </div>
              </div>
            </FadeIn>
                <FadeIn delay={0.15} className="panel grain flex flex-col gap-6 border-2 border-[color:var(--sage)] bg-gradient-to-br from-[color:var(--sage)]/20 to-[color:var(--coral)]/10 p-8 shadow-2xl h-full min-h-full">
                  <div className="flex flex-col flex-grow justify-between h-full">
                    <div>
                      <div className="eyebrow text-[color:var(--sage)] opacity-95 text-center text-xl">Our Vision</div>
                      <div className="mt-1 mb-2 text-xs sm:text-sm text-[color:var(--white)] text-center italic opacity-80">"Empowering women to grow, connect, and lead in tech—together."</div>
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

        <section id="events" className="w-full max-w-[1400px] mx-auto px-6 py-16">
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
                { key: "past" as const, label: "Past" },
                { key: "upcoming" as const, label: "Upcoming" },
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
          {eventTab === "past" ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {pastEvents.map((event, idx) => (
                <div key={event.title}>
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
          ) : (
            upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={event.title}>
                    <EventCard3D
                      title={event.title}
                      date={event.date}
                      summary={event.summary}
                      cta={event.cta}
                      link={event.link}
                      index={idx}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FadeIn>
                  <p className="text-xl text-[color:var(--text-secondary)]">Stay tuned for upcoming events!</p>
                </FadeIn>
              </div>
            )
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
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name + " profile"}
                              className="h-16 w-16 rounded-full object-cover border-2 border-[color:var(--purple)] shadow-lg bg-white"
                            />
                          ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--purple)] to-[color:var(--gold)] text-white text-lg font-bold shadow-lg">
                              {member.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="font-bold text-lg text-[color:var(--text-primary)]">{member.name}</div>
                            <div className="text-[color:var(--purple)] font-medium">{member.role}</div>
                          </div>
                          <div className="flex flex-col items-end gap-2 min-w-[40px]">
                            <span className="flex gap-2">
                              {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                  <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-7 h-7">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                  </span>
                                </a>
                              )}
                              {member.email && (
                                <a href={`mailto:${member.email}`} aria-label="Email" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                  <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-7 h-7">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                  </span>
                                </a>
                              )}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn className="mt-8">
                <a
                  href="/teams"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-[color:var(--purple)] bg-[color:var(--purple)] px-6 py-3 text-sm font-semibold !text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  Know More About Our Team
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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
              <div className="flex justify-center">
                <a
                  href="https://forms.gle/8D1hocffN92LnYjDA"
                  className="text-sm font-semibold underline-offset-4 text-center"
                  style={{ color: '#4B2067', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#9159f2ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#c6a4f9ff')}
                >
                  Become a member
                </a>
              </div>
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
              <div className="flex justify-center">
                <a
                  href="https://forms.gle/da3UbYdZ74x1sGLT8"
                  className="text-sm font-semibold underline-offset-4 text-center"
                  style={{ color: '#4B2067', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#9159f2ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#c6a4f9ff')}
                >
                  Join the Core Team now.
                </a>
              </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <footer className="page-shell flex flex-col items-center gap-2 border-t border-[color:var(--border)] pt-8 text-sm text-[color:var(--text-secondary)]">
          <div className="font-semibold text-[color:var(--text-primary)]">Women in Tech Society · IIT Madras BS</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:womenintech.society@study.iitm.ac.in" className="flex items-center gap-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-4 w-4" fill="currentColor"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM305.1 331.9L204.4 271.4C196.7 266.8 192 258.5 192 249.5C192 235.4 203.4 224 217.5 224L422.4 224C436.5 224 447.9 235.4 447.9 249.5C447.9 258.5 443.2 266.8 435.5 271.4L334.9 331.9C330.4 334.6 325.3 336 320 336C314.7 336 309.6 334.6 305.1 331.9zM448 301.3L448 384C448 401.7 433.7 416 416 416L224 416C206.3 416 192 401.7 192 384L192 301.3L288.7 359.3C298.1 365 309 368 320 368C331 368 341.9 365 351.3 359.3L448 301.3z"/></svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/woman-in-tech-society" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-4 w-4" fill="currentColor"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/womenintech.iitm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-4 w-4" fill="currentColor"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
              Instagram
            </a>
          </div>
          <div className="text-xs">Built with intentional design, thoughtful motion, and a people-first mindset.</div>
        </footer>
      </motion.main>
    </div>
  );
}