import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1400; // 1.4 seconds smooth load

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 400);
        }, 150);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-neutral-100 select-none"
        >
          {/* Subtle ambient background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-24 h-24 mb-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md shadow-2xl shadow-purple-500/10"
            >
              {/* Corner accent lights */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-400" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-purple-400" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400" />

              <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-br from-white via-neutral-200 to-purple-300 bg-clip-text text-transparent font-display">
                SN
              </span>
            </motion.div>

            {/* Name & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-base font-semibold tracking-widest text-neutral-200 uppercase">
                Shayyan Najath
              </h2>
              <p className="text-xs text-neutral-400 tracking-wider mt-1">
                Exploring Intelligence · Building What&apos;s Next
              </p>
            </motion.div>

            {/* Percentage Bar & Counter */}
            <div className="w-56 space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tabular-nums">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>INITIALIZING</span>
                </span>
                <span className="text-neutral-200 font-medium">{progress}%</span>
              </div>

              <div className="relative h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>

          {/* Quick skip */}
          <button
            onClick={onComplete}
            className="absolute bottom-8 text-xs text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-widest py-1 px-3"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
