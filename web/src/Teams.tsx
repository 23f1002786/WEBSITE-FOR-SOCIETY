import { motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { Splash } from "@/components/splash";
import { ThemeToggle } from "@/components/theme-toggle";
// Updated team order and photo paths
import { ScrollReveal } from "@/components/scroll-reveal";
import { Sidebar } from "@/components/sidebar";

const teams = [
  {
    name: "Internal Community Managers",
    members: [
      { name: "Mili Parasher", linkedin: "https://www.linkedin.com/in/mili-parashar/", email: "23f2004291@ds.study.iitm.ac.in", photo: "/profiles/Mili Parashar.jpg" },
      { name: "Jiya B. Thakker", linkedin: "", email: "24f3001258@ds.study.iitm.ac.in", photo: "/profiles/Jiya B Thakker.jpeg" },
      { name: "Preety Topno", linkedin: "https://www.linkedin.com/in/preety-topno-66614327b/", email: "23f2002294@ds.study.iitm.ac.in", photo: "/profiles/Preety Topno.png" },
      { name: "Bhavika Jain", linkedin: "https://www.linkedin.com/in/bhavika-jain04", email: "24f2000884@ds.study.iitm.ac.in", label: "Ideation Team", photo: "/profiles/Bhavika Jain.jpg" },
      { name: "Sharmitha K", linkedin: "https://www.linkedin.com/in/sharmitha-k-1696893a3", email: "24f2007979@ds.study.iitm.ac.in ", label: "Grievance Redressal", photo: "/profiles/Sharmitha.png" },

    ],
  },
  {
    name: "Content Creation",
    members: [
      { name: "Radhika", linkedin: "https://www.linkedin.com/in/radhika-singh-chauhan-5493a0321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "24f3002832@ds.study.iitm.ac.in", photo: "/profiles/Radhika Singh Chauhan.jpg" },
      { name: "Adrija Chatterjee", linkedin: "https://www.linkedin.com/in/adrija-chatterjee-b14349357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "24f2000867@ds.study.iitm.ac.in", photo: "/profiles/Adrija Chatterjee.jpg" },
      { name: "Adrija Chakroborty", linkedin: "https://www.linkedin.com/in/adrija-chakrabarty-503879220/", email: "25f2000399@ds.study.iitm.ac.in", photo: "/profiles/Adrija Chakrabarty.jpg" },
    ],
  },
  {
    name: "Sponsorship, Outreach & PR",
    members: [
      { name: "Nashwa S P", label: "Sponsorship Team", linkedin: "", email: "23f2002294@ds.study.iitm.ac.in", photo: "/profiles/Nashwa.png" },
      { name: "Adrika Ghosh", label: "PR Team", linkedin: "https://www.linkedin.com/in/adrika-ghosh/", email: "24f2006087@ds.study.iitm.ac.in", photo: "/profiles/Adrika Ghosh.jpeg" },
    ],
  },
  {
    name: "Design Team",
    members: [
      { name: "Shreya Singh", linkedin: "http://www.linkedin.com/in/shreya-singh-1101ss2006", email: "24f2005569@ds.study.iitm.ac.in", photo: "/profiles/Shreya Singh.jpg" },
      { name: "Adya Jha", linkedin: "", email: "23f3003352@ds.study.iitm.ac.in", photo: "/profiles/Adya Jha.jpg" },
    ],
  },
  {
    name: "Social Media Unit",
    members: [
      { name: "Ashka Pathak", linkedin: "https://www.linkedin.com/in/ashkapathak/", email: "23f3002663@ds.study.iitm.ac.in", photo: "/profiles/AshkaPathak.jpg" },
      { name: "Prisha Gupta", linkedin: "", email: "24f2005549@ds.study.iitm.ac.in", photo: "/profiles/Prisha Gupta.jpg" },
    ],
  },
  {
    name: "Newsletter Team",
    members: [
      { name: "Ananya", label: "Design Team", linkedin: "", email: "ananya@example.com", photo: "/profiles/Ananya Verma.jpg" },
      { name: "Ananya Seeta", label: "Editorial Team", linkedin: "https://www.linkedin.com/in/ananya-seeta-2911092ba/", email: "23f3000678@ds.study.iitm.ac.in", photo: "/profiles/Ananya Seeta.png" },
      { name: "Dr Asma Iqbal", label: "Management Team", linkedin: "", email: "21f1001894@ds.study.iitm.ac.in", photo: "/profiles/Asma Iqbal.png" },
      { name: "Harsheen Kaur", label: "Research Team", linkedin: "https://www.linkedin.com/in/harsheen-kour-8b801834a/", email: "harsheen@example.com", photo: "/profiles/Harsheen kour.jpeg" },
      { name: "Meher Soni", label: "Research Team", linkedin: "http://linkedin.com/in/meher-soni-7a99bb296/", email: "24f3005108@ds.study.iitm.ac.in", photo: "/profiles/Meher Soni.jpg" },
      { name: "Muskan Y. Memon", label: "Content Team", linkedin: "http://www.linkedin.com/in/muskan-memon-4ab388341", email: "muskan@example.com", photo: "/profiles/Muskan Memon.jpg" },
      { name: "Rakshana", label: "Design Team", linkedin: "https://www.linkedin.com/in/rakshna-r-087674370/", email: "25f2003109@ds.study.iitm.ac.in", photo: "/profiles/RAKSHNA.R.jpg" },
      { name: "Roshini K", label: "Content Team", linkedin: "http://www.linkedin.com/in/roshini-k-91763b2a5", email: "roshini@example.com", photo: "/profiles/Roshini_K.jpg" },
      { name: "Tanishka K Wagh", label: "Editorial Team", linkedin: "", email: "tanishka@example.com", photo: "/profiles/TanishkaWagh.jpg" },
    ],
  }
];

export default function Teams() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(0);

  const handleSplashDone = () => {
    setShowSplash(false);
    setContentReady(true);
  };

  const nextTeam = () => {
    setCurrentTeam((prev) => (prev + 1) % teams.length);
  };

  const prevTeam = () => {
    setCurrentTeam((prev) => (prev - 1 + teams.length) % teams.length);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)]">
      <Sidebar />
      {/* Removed WaveTransformationScene for error-free rendering */}
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
                Our Teams
              </h1>
              <h6 className="mt-4 text-sm sm:text-base md:text-lg font-medium text-[color:var(--text-secondary)] tracking-wide">
                Meet the people behind the magic
              </h6>
            </div>
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

        {/* <section className="page-shell py-16">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <FadeIn className="flex flex-col gap-6">
              <div className="eyebrow">Testimonials</div>
              <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">What our community says</h2>
              <div className="grid gap-6">
                {testimonials.map((testimonial, index) => (
                  <FadeIn key={index} delay={index * 0.1} className="panel grain border-l-4 border-[color:var(--purple)] bg-gradient-to-r from-[color:var(--purple)]/10 to-transparent p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <blockquote className="text-lg leading-relaxed text-[color:var(--text-primary)] italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="mt-4 block text-sm font-semibold text-[color:var(--purple)]">
                      {testimonial.name}
                    </cite>
                    <span className="text-xs text-[color:var(--text-secondary)]">{testimonial.role}</span>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-6">
              <div className="eyebrow text-[color:var(--purple)]">Our Teams</div>
              <div className="display text-3xl leading-snug text-[color:var(--purple)]">Dedicated and passionate</div>
              <p className="leading-relaxed text-[color:var(--text-primary)]">
                Meet the teams that make WiTS happen. Each member brings unique skills and unwavering commitment to our mission.
              </p>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/60 opacity-90"></div>
              {/* Removed MerryGoRoundScene for error-free rendering */}
            {/* </FadeIn> */}
          {/* </div> */}
        {/* </section> */} 

        <section className="page-shell py-16">
          <div className="flex flex-col gap-6">
            <FadeIn className="flex flex-col gap-2 max-w-2xl">
              <ScrollReveal className="flex flex-col gap-2">
                <div className="eyebrow">Team Members</div>
                <h2 className="display text-2xl sm:text-3xl md:text-4xl leading-snug">The heart of our community</h2>
              </ScrollReveal>
              <p className="max-w-2xl text-[color:var(--text-secondary)]">
                Our teams work tirelessly to create inclusive spaces, foster learning, and build lasting connections.
              </p>
            </FadeIn>
            <div className="flex flex-col items-center gap-4 sm:gap-8 w-full">
              <div className="flex flex-col items-center w-full max-w-full px-4 sm:px-0">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 w-full justify-center">
                  {teams.map((team, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTeam(index)}
                      className={`px-2 py-1 rounded-md text-xs font-normal transition-all duration-200 border whitespace-nowrap overflow-hidden text-ellipsis ${
                        index === currentTeam
                          ? 'bg-[color:var(--surface)] text-[color:var(--purple)] border-[color:var(--purple)] shadow'
                          : 'bg-[color:var(--surface)] text-[color:var(--text-primary)] border-[color:var(--border)] hover:bg-[color:var(--purple)] hover:text-white hover:border-[color:var(--purple)]'
                      }`}
                      style={{ minWidth: 'unset', width: 'auto', maxWidth: '100%' }}
                    >
                      {team.name}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 sm:gap-6 w-full justify-center overflow-x-auto">
                  <button
                    onClick={prevTeam}
                    className="p-2 sm:p-3 rounded-full bg-[color:var(--surface)] hover:bg-[color:var(--purple)] hover:text-white transition-colors shadow-lg flex-shrink-0"
                    aria-label="Previous team"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <FadeIn key={currentTeam} className="panel grain flex flex-col gap-6 p-4 sm:p-6 md:p-8 w-full max-w-4xl">
                    <div className="text-center">
                      <div className="meta text-xl sm:text-2xl mb-2">{teams[currentTeam].name}</div>
                    </div>
                    <div className="border-t border-[color:var(--border)] pt-6 flex justify-center w-full">
                      {teams[currentTeam].members.length < 3 ? (
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center w-full">
                          {teams[currentTeam].members.map((member, memberIndex) => (
                            <div
                              key={memberIndex}
                              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl bg-[color:var(--bg)] border border-[color:var(--border)] hover:border-[color:var(--purple)] transition-colors p-3 sm:p-4 ${member.name.trim().split(/\s+/).length > 2 ? 'sm:py-2 sm:px-4' : ''}`}
                              style={{ minWidth: 'auto', maxWidth: '100%', flex: '1 1 calc(50% - 0.5rem)' }}
                            >
                              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[color:var(--purple)] text-white font-semibold flex-shrink-0 overflow-hidden">
                                {member.photo ? (
                                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                                ) : (
                                  member.name.split(" ").map(part => part[0]).join("")
                                )}
                              </div>
                              <span className="text-[color:var(--text-primary)] font-medium flex flex-col items-center sm:items-start text-xs sm:text-sm">
                                {member.name}
                                {(teams[currentTeam].name === "Newsletter Team" || teams[currentTeam].name === "Sponsorship, Outreach & PR" || teams[currentTeam].name === "Internal Community Managers") && member.label && (
                                  <span className="mt-0.5 text-xs text-[color:var(--purple)] font-semibold">{member.label}</span>
                                )}
                                <span className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 justify-center sm:justify-start items-center">
                                  {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                      <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-6 h-6 sm:w-7 sm:h-7">
                                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                      </span>
                                    </a>
                                  )}
                                  {member.email && (
                                    <a href={`mailto:${member.email}`} aria-label="Email" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                      <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-6 h-6 sm:w-7 sm:h-7">
                                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                      </span>
                                    </a>
                                  )}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-center w-full">
                          {teams[currentTeam].members.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[color:var(--bg)] border border-[color:var(--border)] hover:border-[color:var(--purple)] transition-colors w-full" style={{ minWidth: 'auto', maxWidth: '100%' }}>
                              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[color:var(--purple)] text-white font-semibold flex-shrink-0 overflow-hidden">
                                {member.photo ? (
                                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                                ) : (
                                  member.name.split(" ").map(part => part[0]).join("")
                                )}
                              </div>
                              <span className="text-[color:var(--text-primary)] font-medium flex flex-col items-center sm:items-start text-xs sm:text-sm">
                                {member.name}
                                {(teams[currentTeam].name === "Newsletter Team" || teams[currentTeam].name === "Sponsorship, Outreach & PR" || teams[currentTeam].name === "Internal Community Managers") && member.label && (
                                  <span className="mt-0.5 text-xs text-[color:var(--purple)] font-semibold">{member.label}</span>
                                )}
                                <span className="flex gap-2 sm:gap-3 mt-2 sm:mt-3 justify-center sm:justify-start items-center">
                                  {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                      <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-6 h-6 sm:w-7 sm:h-7">
                                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                      </span>
                                    </a>
                                  )}
                                  {member.email && (
                                    <a href={`mailto:${member.email}`} aria-label="Email" className="hover:text-[color:var(--purple)] flex items-center justify-center">
                                      <span className="inline-flex items-center justify-center rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] w-6 h-6 sm:w-7 sm:h-7">
                                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                      </span>
                                    </a>
                                  )}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                  
                  <button
                    onClick={nextTeam}
                    className="p-2 sm:p-3 rounded-full bg-[color:var(--surface)] hover:bg-[color:var(--purple)] hover:text-white transition-colors shadow-lg flex-shrink-0"
                    aria-label="Next team"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {teams.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTeam(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTeam ? 'bg-[color:var(--purple)]' : 'bg-[color:var(--border)]'
                      }`}
                      aria-label={`Go to ${teams[index].name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="page-shell flex flex-col items-center gap-2 border-t border-[color:var(--border)] pt-8 text-sm text-[color:var(--text-secondary)]">
          <div className="font-semibold text-[color:var(--text-primary)]">Women in Tech Society · IIT Madras BS</div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:wits@students.iitm.ac.in" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-4 w-4" fill="currentColor"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
              Instagram
            </a>
            {/* <a href="https://twitter.com/wits_iitmadras" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a> */}
          </div>
          {/* <div className="text-xs">Built with intentional design, thoughtful motion, and a people-first mindset.</div> */}
        </footer>
      </motion.main>
    </div>
  );
}