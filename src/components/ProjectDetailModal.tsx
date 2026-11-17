
import { motion } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

  const hasGithub = Boolean(
    project.githubUrl && project.githubUrl.trim().length > 0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-8 rounded-3xl bg-neutral-950 border border-neutral-800 text-neutral-100 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700/60 backdrop-blur-md transition-colors"
          data-cursor-text="Close"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Hero */}
        <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold mb-2 block">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Tagline & Description */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base font-medium text-purple-300">
              {project.tagline}
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mb-3">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Technologies</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Resume Key Highlights</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Pipeline */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Workflow & Execution Pipeline</span>
              </h3>

              <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800">
                <ol className="space-y-2 text-xs text-neutral-300">
                  {project.architecture.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 text-xs font-semibold transition-all hover:scale-[1.02]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all hover:scale-[1.02]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
            >
              Close Window
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
