import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, FileText, Sparkles, Code, Cpu, ArrowUpRight } from 'lucide-react';
import { ROTATING_ROLES, RESUME_PDF_PATH } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[360px] h-[360px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Greeting Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>HEY, I&apos;M SHAYYAN NAJATH C N</span>
        </motion.div>

        {/* Large Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white leading-[1.08] mb-6"
          style={{ textWrap: 'balance' }}
        >
          AI & DATA SCIENCE{' '}
          <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            ENTHUSIAST
          </span>
        </motion.h1>

        {/* Rotating Specialization Badges / Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-400">
            <span>Specializing in</span>
            <div className="relative inline-block min-w-[220px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="font-bold text-purple-600 dark:text-purple-300 font-display block"
                >
                  {ROTATING_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Supporting text directly derived from resume */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          style={{ textWrap: 'balance' }}
        >
          Final-year B.Tech Artificial Intelligence and Data Science student with foundational knowledge of Python, SQL, and machine learning concepts. Eager to apply analytical skills and contribute to real-world AI/ML solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {/* Explore My Work CTA */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0"
            data-cursor-text="Explore"
          >
            <Code className="w-4 h-4 text-purple-200" />
            <span>Explore My Work</span>
          </a>

          {/* Download Resume CTA - opens in new browser tab preserving portfolio tab and cursor */}
          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-2xl text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-200/60 dark:hover:bg-neutral-850 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            data-cursor-text="Resume"
          >
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Download Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>

        {/* Floating Quick Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden md:flex items-center gap-6 px-6 py-3 rounded-full bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md text-xs text-neutral-600 dark:text-neutral-400 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-500" />
            <span>B.Tech AI & Data Science</span>
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>C. Abdul Hakeem College</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Class of 2027</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-mono font-semibold">CGPA 7.9</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500 hover:text-purple-500 transition-colors cursor-pointer group"
        data-cursor-text="Scroll"
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
