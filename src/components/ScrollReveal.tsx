'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  /** Animation variant */
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fadeIn';
  delay?: number;
  duration?: number;
  stagger?: number;
  /** Selector for child elements to stagger (e.g. ".card") */
  staggerTarget?: string;
};

export default function ScrollReveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  stagger = 0,
  staggerTarget,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = staggerTarget ? el.querySelectorAll(staggerTarget) : [el];

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ...(variant === 'fadeUp'    && { y: 40 }),
      ...(variant === 'fadeLeft'  && { x: -40 }),
      ...(variant === 'fadeRight' && { x: 40 }),
      ...(variant === 'scaleIn'   && { scale: 0.88 }),
      ...(variant === 'fadeIn'    && {}),
      filter: variant !== 'scaleIn' ? 'blur(6px)' : 'none',
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0, x: 0, scale: 1,
      filter: 'blur(0px)',
      duration,
      delay,
      ease: 'power3.out',
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    };

    gsap.fromTo(targets, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [variant, delay, duration, stagger, staggerTarget]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
