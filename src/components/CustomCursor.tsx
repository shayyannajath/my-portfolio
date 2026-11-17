import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

interface CursorState {
  text: string;
  variant: 'default' | 'hover' | 'project' | 'action' | 'magnetic';
}

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({ text: '', variant: 'default' });

  // Spring physics for smooth trailing ring
  const mouseX = useSpring(-100, { damping: 28, stiffness: 350 });
  const mouseY = useSpring(-100, { damping: 28, stiffness: 350 });

  // Direct position for instant small center dot
  const dotX = useRef(-100);
  const dotY = useRef(-100);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports touch/has coarse pointer
    const checkTouch = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return isCoarse || hasTouch;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    // Add class to body to hide default cursor
    document.body.classList.add('has-custom-cursor');

    const updateCursorPosition = (clientX: number, clientY: number) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
      dotX.current = clientX;
      dotY.current = clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      updateCursorPosition(e.clientX, e.clientY);

      // Check hovered element for cursor directives
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor-text], [data-cursor-variant], button, a, input, textarea, [role="button"]');
      if (interactive) {
        const text = interactive.getAttribute('data-cursor-text') || '';
        const variant = (interactive.getAttribute('data-cursor-variant') as CursorState['variant']) ||
          (text ? 'action' : 'hover');
        setCursorState({ text, variant });
      } else {
        setCursorState({ text: '', variant: 'default' });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorState({ text: '', variant: 'default' });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsVisible(true);
      updateCursorPosition(e.clientX, e.clientY);
    };

    const handleWindowFocus = () => {
      setIsVisible(true);
      setCursorState({ text: '', variant: 'default' });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsVisible(true);
        setCursorState({ text: '', variant: 'default' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isExpanded = cursorState.variant !== 'default';
  const hasText = Boolean(cursorState.text);

  return (
    <>
      {/* Central precise dot - Highest z-index with pointer-events-none */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full mix-blend-difference transition-opacity duration-150"
        style={{
          opacity: isExpanded && hasText ? 0 : 1,
          willChange: 'transform',
          zIndex: 99999,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Trailing smooth ring with contextual label - Highest z-index with pointer-events-none */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full transition-colors duration-200"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 99998,
          pointerEvents: 'none',
        }}
        animate={{
          width: hasText ? 90 : isExpanded ? 48 : 26,
          height: hasText ? 90 : isExpanded ? 48 : 26,
          backgroundColor: hasText
            ? 'rgba(147, 51, 234, 0.9)'
            : isExpanded
            ? 'rgba(168, 85, 247, 0.15)'
            : 'rgba(255, 255, 255, 0.05)',
          borderColor: isExpanded ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.35)',
          borderWidth: hasText ? 0 : 1.5,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
        aria-hidden="true"
      >
        {hasText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-semibold tracking-wider text-white uppercase text-center px-2 select-none"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
