import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Copy, Sparkles, ExternalLink, Settings, AlertCircle} from 'lucide-react';
import { INITIAL_CONTACT_INFO } from '../data/portfolioData';
import { ContactInfo } from '../types/portfolio';

export default function ContactSection() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    try {
      const saved = localStorage.getItem('shayyan_portfolio_contact_resume_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.email === INITIAL_CONTACT_INFO.email) {
          return parsed;
        }
      }
      return INITIAL_CONTACT_INFO;
    } catch {
      return INITIAL_CONTACT_INFO;
    }
  });

  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [editLinkedin, setEditLinkedin] = useState(contactInfo.linkedin);
  const [editGithub, setEditGithub] = useState(contactInfo.github);
  const [editEmail, setEditEmail] = useState(contactInfo.email);
  const [editPhone, setEditPhone] = useState(false);

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('shayyan_portfolio_contact_resume_v1', JSON.stringify(contactInfo));
    } catch {
      // storage safeguard
    }
  }, [contactInfo]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSaveContactLinks = (e: React.FormEvent) => {
    e.preventDefault();
    setContactInfo({
      ...contactInfo,
      email: editEmail.trim() || INITIAL_CONTACT_INFO.email,
      linkedin: editLinkedin.trim() || INITIAL_CONTACT_INFO.linkedin,
      github: editGithub.trim() || INITIAL_CONTACT_INFO.github,
    });
    setIsEditingLinks(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    // Prepare real mailto link to open user's configured email client
    const mailtoSubject = encodeURIComponent(subject.trim() || `Portfolio Inquiry from ${name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hello Shayyan,\n\nMy name is ${name.trim()} (${email.trim()}).\n\nMessage:\n${message.trim()}\n\nBest regards,\n${name.trim()}`
    );
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-neutral-900 dark:text-white leading-tight">
            LET&apos;S BUILD SOMETHING GREAT TOGETHER
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            I&apos;m always open to learning opportunities, collaborations and exciting projects.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                  Direct Contact
                </h3>
                
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-500" />
                    <span>EMAIL ADDRESS</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 text-[11px]"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800">
                <div className="text-xs text-neutral-500 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>LOCATION</span>
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {contactInfo.location}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Tamil Nadu, India
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                  Online Profiles (Resume Verified)
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-100 dark:hover:bg-neutral-850 text-neutral-900 dark:text-white transition-all text-xs font-semibold"
                    data-cursor-text="GitHub"
                  >
                    <Github className="w-4 h-4 text-purple-500" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>

                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-100 dark:hover:bg-neutral-850 text-neutral-900 dark:text-white transition-all text-xs font-semibold"
                    data-cursor-text="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Functional Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                Fill out the form below to prepare a direct inquiry. Your message will be formatted and launched to Shayyan&apos;s inbox ({contactInfo.email}).
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                    Email Client Dispatched
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your message draft has been generated for <strong>{contactInfo.email}</strong>. If your mail client did not automatically pop up, you can copy the email address or message directly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-purple-500 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Technical Interview / Entry-level Role"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share position details, team information, or technical requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white text-xs focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    data-cursor-text="Send"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Shayyan</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
