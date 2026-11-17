import { motion } from 'motion/react';
import { GraduationCap, Sparkles, BookOpen, Calendar, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white">
            EDUCATION
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-lg mx-auto">
            Formal technical education in engineering, artificial intelligence, and scientific principles.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-12 ml-2 sm:ml-4">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node / Circle Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-neutral-950 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/50 backdrop-blur-md shadow-lg hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    <span>{item.period}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 text-xs font-semibold font-mono tabular-nums self-start sm:self-auto">
                    <Award className="w-3 h-3 text-purple-400" />
                    <span>
                      {item.scoreType}: {item.score}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white mb-1.5 group-hover:text-purple-400 transition-colors">
                  {item.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  <GraduationCap className="w-4 h-4 text-neutral-500" />
                  <span>{item.institution}</span>
                  {item.location && (
                    <span className="text-xs text-neutral-500 font-mono">
                      · {item.location}
                    </span>
                  )}
                </div>

                {item.details && (
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/60 pt-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-purple-500 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
