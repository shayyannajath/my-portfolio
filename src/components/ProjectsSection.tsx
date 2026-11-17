
import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import ProjectDetailModal from './ProjectDetailModal';

// Interactive 3D Tilt Project Card
function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (p: Project) => void;
}) {
  const hasGithub = Boolean(
    project.githubUrl && project.githubUrl.trim().length > 0
  );

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between"
      data-cursor-text="View"
    >
      {/* Top Image Preview with Scrim */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

        {/* Category kicker */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-purple-200 bg-neutral-900/80 backdrop-blur-md border border-purple-500/30">
            {project.category}
          </span>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/70 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          ) : (
            <span className="text-[11px] text-neutral-400 font-mono">
              Academic Repository
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [projects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Resume Projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white">
              PROJECTS
            </h2>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl">
              Completed academic and applied projects documented in my official curriculum vitae.
            </p>
          </div>

          <span className="text-xs text-neutral-500 font-mono">
            {projects.length} Verified Projects
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
