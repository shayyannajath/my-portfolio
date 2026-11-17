import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Download, Printer, ExternalLink, CheckCircle2, FileText, Mail, MapPin, Phone, Briefcase, Eye } from 'lucide-react';
import {
  INITIAL_CONTACT_INFO,
  EDUCATION_DATA,
  SKILLS_DATA,
  INITIAL_PROJECTS,
  EXPERIENCE_DATA,
  INITIAL_CERTIFICATIONS,
  RESUME_PDF_PATH,
  SUMMARY_TEXT,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = 'Shayyan_Najath_C_N_Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl my-6 rounded-3xl bg-neutral-950 border border-neutral-800 text-neutral-100 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4 bg-neutral-900/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                {INITIAL_CONTACT_INFO.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-neutral-400">
                Official Resume Document · Verified Single Source of Truth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
              title="Print Document"
              data-cursor-text="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
              data-cursor-text="Open"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/20 transition-all hover:scale-105 active:scale-95"
              data-cursor-text="Download"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              data-cursor-text="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verified Resume Source Strip */}
        <div className="px-6 py-2.5 bg-purple-950/40 border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-purple-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span>
              Direct link to verified PDF: <strong>Shayyan_Najath_C_N_Resume.pdf</strong>
            </span>
          </div>

          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-purple-200 hover:text-white underline font-medium"
            data-cursor-text="Open PDF"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Open Original PDF in New Browser Tab</span>
          </a>
        </div>

        {/* Document Content View - Clean structured ATS resume view (never iframe) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-neutral-900/30 font-sans print:bg-white print:text-black">
            {/* Header */}
            <div className="border-b border-neutral-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white print:text-black tracking-tight">
                    {INITIAL_CONTACT_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold text-purple-400 print:text-purple-700 mt-1">
                    {INITIAL_CONTACT_INFO.degree}
                  </p>
                </div>

                <div className="text-xs text-neutral-400 space-y-1 sm:text-right font-mono">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3 h-3 text-neutral-500" />
                    <span>{INITIAL_CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3 h-3 text-neutral-500" />
                    <span>{INITIAL_CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>{INITIAL_CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-neutral-800/60 text-xs font-mono text-purple-400">
                <a href={INITIAL_CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/shayyan-najath-1a4531294
                </a>
                <span>·</span>
                <a href={INITIAL_CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/shayyannajath
                </a>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {SUMMARY_TEXT}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <span className="font-semibold text-sm text-white">{edu.institution}</span>
                      <span className="text-xs font-mono text-purple-300">{edu.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-neutral-400">
                      <span>{edu.degree}</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-200 mt-1">
                      {edu.scoreType}: {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                EXPERIENCE
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.company} className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-semibold text-sm text-white">{exp.role} — {exp.company}</span>
                    <span className="text-xs font-mono text-purple-300">{exp.period}</span>
                  </div>
                  <div className="text-xs text-neutral-400">{exp.location}</div>
                  <ul className="space-y-1 text-xs text-neutral-300 list-disc list-inside">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Academic Projects (strictly 3 from resume) */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                PROJECTS
              </h2>
              <div className="space-y-3">
                {INITIAL_PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                      <span className="text-[11px] font-mono text-purple-300">{proj.category}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-300 list-disc list-inside">
                      {proj.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                    <div className="text-[11px] text-purple-300 font-mono">
                      <strong>Technologies:</strong> {proj.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                SKILLS
              </h2>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs space-y-2">
                <div>
                  <strong className="text-white">Technical Skills:</strong>{' '}
                  <span className="text-neutral-300">Python, SQL, Microsoft Excel, Data Analysis, HTML, CSS</span>
                </div>
                <div>
                  <strong className="text-white">Tools & Design:</strong>{' '}
                  <span className="text-neutral-300">Visual Studio Code, Figma, Jupyter Notebook, Canva</span>
                </div>
                <div>
                  <strong className="text-white">Data Analysis:</strong>{' '}
                  <span className="text-neutral-300">Pandas, NumPy, Matplotlib</span>
                </div>
                <div>
                  <strong className="text-white">Core Concepts:</strong>{' '}
                  <span className="text-neutral-300">Data Structures, Object-Oriented Programming (OOP), Algorithms</span>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                CERTIFICATES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INITIAL_CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{cert.title}</div>
                      <div className="text-[11px] text-neutral-400">{cert.issuer}</div>
                    </div>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
