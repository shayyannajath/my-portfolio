import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Plus, CheckCircle2, Sparkles, X, ExternalLink } from 'lucide-react';
import { INITIAL_CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState<CertificationItem[]>(() => {
    try {
      const saved = localStorage.getItem('shayyan_portfolio_certs_resume_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_CERTIFICATIONS.length) {
          return parsed;
        }
      }
      return INITIAL_CERTIFICATIONS;
    } catch {
      return INITIAL_CERTIFICATIONS;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newType, setNewType] = useState('Certificate');
  const [newDesc, setNewDesc] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(
        user?.uid === 'OdKOVbcOJCYAHLiifG9NGgK1inI2'
      );
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('shayyan_portfolio_certs_resume_v1', JSON.stringify(certifications));
    } catch {
      // storage safeguard
    }
  }, [certifications]);

  const handleAddCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCert: CertificationItem = {
      id: `cert-${Date.now()}`,
      title: newTitle.trim(),
      issuer: newIssuer.trim() || 'Verified Organization',
      date: newDate.trim() || undefined,
      type: newType,
      description: newDesc.trim() || undefined,
      credentialUrl: newUrl.trim() || undefined,
    };

    setCertifications((prev) => [...prev, newCert]);
    setIsModalOpen(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewDesc('');
    setNewUrl('');
  };

  const handleResetCerts = () => {
    if (confirm('Reset certifications back to resume items?')) {
      setCertifications(INITIAL_CERTIFICATIONS);
      localStorage.removeItem('shayyan_portfolio_certs_resume_v1');
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white">
              CERTIFICATES
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-lg">
              Verified certifications and job simulations completed as documented in my official resume.
            </p>
          </div>
          
        </div>

        {/* Certifications Gallery (2x2 or 4-col responsive grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-lg hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-purple-600 dark:text-purple-300 font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mb-2">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-xs">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-neutral-500 flex items-center gap-1 font-mono text-[11px]">
                    <CheckCircle2 className="w-3 h-3 text-purple-400" />
                    <span>Verified Credential</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
