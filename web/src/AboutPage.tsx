import { motion } from "framer-motion";
import { Suspense } from "react";
import { FadeIn } from "@/components/fade-in";
import { CommunityNetworkScene } from "@/components/community-network-3d";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Suspense fallback={null}>
          <CommunityNetworkScene />
        </Suspense>
      </div>
      {/* Floating tech symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-[color:var(--purple)]/20 text-4xl font-mono"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-[color:var(--teal)]/15 text-3xl font-mono"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {'{}'}
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-[color:var(--coral)]/20 text-2xl font-mono"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'[]'}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-[color:var(--gold)]/15 text-3xl font-mono"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {'<>'}
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 text-[color:var(--purple)]/10 text-5xl font-mono"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          {'&&'}
        </motion.div>
      </div>
      <div className="page-shell py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <div className="eyebrow">About WiTS</div>
            <h1 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">Learn More About Us</h1>
            <p className="text-lg text-[color:var(--text-secondary)]">Discover our vision, membership, and objectives</p>
          </FadeIn>
          <motion.div
            className="grid gap-8 grid-cols-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >

            <FadeIn delay={0.2} className="panel grain border-l-4 border-[color:var(--coral)] bg-gradient-to-r from-[color:var(--coral)]/10 to-transparent p-6 shadow-lg">
              <div className="font-semibold text-[color:var(--yellow-dark)] mb-3 text-xl">Our Story</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                WiTS is a student-led community within the IIT Madras BS Degree Program, established to empower women in the field of technology.
                What began as a platform for learning and peer interaction has evolved into a structured community that supports technical development
                alongside mentorship, leadership exposure, professional networking, and collaboration.
                Today, We continues to grow as a space that equips its members with the skills, guidance,
                and connections needed to navigate and thrive in the rapidly evolving technology landscape.
              </p>
            </FadeIn>
            <FadeIn className="panel grain border-l-4 border-[color:var(--purple)] bg-gradient-to-r from-[color:var(--purple)]/10 to-transparent p-6 shadow-lg">
              <div className="font-semibold text-[color:var(--purple-dark)] mb-3 text-xl">Our Vision</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                We envision a community that extends beyond academic learning and events, recognising the
                importance of peer connection, leadership development, and meaningful networking. We aim to
                create an environment where women are encouraged to engage, collaborate, and build confidence
                through shared learning, mutual support, and sustained professional interaction, thus enabling
                holistic growth as both technologists and individuals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="panel grain border-l-4 border-[color:var(--coral)] bg-gradient-to-r from-[color:var(--coral)]/10 to-transparent p-6 shadow-lg">
              <div className="font-semibold text-[color:var(--coral-dark)] mb-3 text-xl">Our Objectives</div>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc list-inside ml-4">
                <li>Facilitating hands-on learning through workshops, skill-building challenges, initiatives, and hackathons that build confidence and practical skills.</li>
                <li>Organising guest lectures, industry talks, networking meetups, and community panels to encourage exposure and professional interaction.</li>
                <li>Providing mentorship and guidance through seniors, alumni, professionals, and peer-learning programs.</li>
                <li>Enabling a supportive peer network that promotes collaboration, shared learning, and growth without comparison.</li>
              </ul>
            </FadeIn>


          </motion.div>
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[color:var(--text-secondary)] px-6 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition-all hover:border-[color:var(--purple)] hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}