import { motion } from 'motion/react';
import { MapPin, GraduationCap, School, Sparkles, Terminal, Briefcase } from 'lucide-react';
import { STATS, SUMMARY_TEXT, EXPERIENCE_DATA, INITIAL_CONTACT_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white">
            A LITTLE ABOUT ME
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Container & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 shadow-2xl p-2 group">
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-blue-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden aspect-square bg-neutral-950">
                <img
                  src="/src/assets/images/shayyan_portfolio_avatar_1793957633625.jpg"
                  alt="Shayyan Najath C N - AI & Data Science Student"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>AI & DATA SCIENCE CANDIDATE</span>
                  </div>
                  <h3 className="text-base font-semibold text-white font-display">
                    {INITIAL_CONTACT_INFO.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>{INITIAL_CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative, Internship & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Authentic bio directly from resume summary */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                {SUMMARY_TEXT}
              </p>
            </div>

            {/* Academic Credential Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span>DEGREE</span>
                </div>
                <div className="font-semibold text-sm text-neutral-900 dark:text-white">
                  B.Tech in Artificial Intelligence and Data Science
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                  2023 – 2027 · CGPA 7.9/10
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                  <School className="w-4 h-4 text-indigo-500" />
                  <span>INSTITUTION</span>
                </div>
                <div className="font-semibold text-sm text-neutral-900 dark:text-white truncate" title="C. Abdul Hakeem College of Engineering and Technology">
                  C. Abdul Hakeem College
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Melvisharam, Tamil Nadu
                </div>
              </div>
            </div>

            {/* Experience / Internship from Resume */}
            {EXPERIENCE_DATA.length > 0 && (
              <div className="p-4 rounded-2xl border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/20 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-purple-600 dark:text-purple-400 font-mono mb-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>INTERNSHIP EXPERIENCE</span>
                  </span>
                  <span>{EXPERIENCE_DATA[0].period}</span>
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {EXPERIENCE_DATA[0].role} — {EXPERIENCE_DATA[0].company} ({EXPERIENCE_DATA[0].location})
                </div>
                <ul className="mt-2 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {EXPERIENCE_DATA[0].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantitative Statistics Bar */}
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800/80">
              <div className="grid grid-cols-3 gap-4 text-center">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-mono tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 hidden sm:block">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
