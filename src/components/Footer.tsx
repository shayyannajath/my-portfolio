import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { INITIAL_CONTACT_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-neutral-900 bg-white/50 dark:bg-neutral-950/70 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Tagline */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-sm font-bold font-display text-neutral-900 dark:text-white flex items-center justify-center md:justify-start gap-1.5">
            <span>Designed & Built by Shayyan Najath C N</span>
            <span className="inline-block text-purple-500">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </span>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Exploring Intelligence · Building What&apos;s Next
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={INITIAL_CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            data-cursor-text="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={INITIAL_CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            data-cursor-text="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${INITIAL_CONTACT_INFO.email}`}
            aria-label="Direct Email"
            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            data-cursor-text="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Smooth Back-to-Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-500 font-mono">
            © {currentYear} Shayyan Najath C N
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:-translate-y-1"
            data-cursor-text="Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
