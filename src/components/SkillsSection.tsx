import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal, Database, Code2, Palette, FileSpreadsheet, BarChart3,
  PieChart, Brain, TrendingUp, Layers, Search, Layout, Laptop,
  BookOpen, GitBranch, Sparkles, LucideIcon
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  Database,
  Code2,
  Palette,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  Brain,
  TrendingUp,
  Layers,
  Search,
  Figma: Layout,
  Layout,
  Laptop,
  BookOpen,
  GitBranch,
};

// Interactive 3D Tilt Card Component
function SkillCard({ skill, onSelect }: { skill: SkillItem; onSelect: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = ICON_MAP[skill.iconName] || Terminal;

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`group relative p-5 rounded-2xl cursor-pointer border transition-colors duration-200 select-none ${
        isHovered
          ? 'bg-neutral-900 border-purple-500/50 shadow-xl shadow-purple-500/10'
          : 'bg-white/70 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-700'
      }`}
      data-cursor-text="Inspect"
    >
      {/* Subtle corner light indicator on hover */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent rounded-tr-2xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30 scale-105'
              : 'bg-neutral-100 dark:bg-neutral-800 text-purple-600 dark:text-purple-400'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
          {skill.category}
        </span>
      </div>

      <h3 className="text-base font-semibold text-neutral-900 dark:text-white font-display mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
        {skill.name}
      </h3>

      <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
        {skill.description}
      </p>

      <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-purple-400 transition-colors">
        <span>Click for details</span>
        <span className="font-mono text-xs">→</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Technical Skills', 'Data Analysis', 'Tools & Design', 'Core Concepts'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white">
              SKILLS & TOOLKIT
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
                data-cursor-text={cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                onSelect={() => setSelectedSkill(skill)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md p-6 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl text-left text-neutral-100 relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                      {selectedSkill.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-1">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-sm text-neutral-300">
                  <p className="leading-relaxed">
                    {selectedSkill.description}
                  </p>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs space-y-2">
                    <div className="font-semibold text-neutral-200">How Shayyan Applies This:</div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-400">
                      <li>Hands-on academic coursework and machine learning implementations</li>
                      <li>Practical lab problem solving at C. Abdul Hakeem College</li>
                      <li>Project lifecycle integration across data cleaning, modeling, and toolchains</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
