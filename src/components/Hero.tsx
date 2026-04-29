'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Clock, Users, MapPin } from 'lucide-react';
import { Player } from '@remotion/player';
import { HeroSequence } from '@/remotion/HeroSequence';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, delay, ease: EASE },
});

function CountUp({ to, suffix = '', duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const badges = [
  { Icon: Shield, text: 'Modern Slavery Compliant' },
  { Icon: Clock,  text: '24/7 Candidate Care' },
  { Icon: Users,  text: 'Manila Operations Hub' },
  { Icon: MapPin, text: 'Australia-Wide Deployments' },
];

const quickStats = [
  { value: 500, suffix: '+', label: 'Placements' },
  { value: 14,  suffix: 'd',  label: 'Avg Deploy' },
  { value: 98,  suffix: '%',  label: 'Satisfaction' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050D1A] pt-20 pb-16">

      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial gradient */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(37,99,235,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(217,119,6,0.04) 0%, transparent 60%)'
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        {/* Horizontal glow line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">

          {/* ── LEFT: Text block ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div {...fadeUp(0.05)}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[11px] font-bold text-blue-300 tracking-[0.18em] uppercase">
                  Australian-Based · Manila Operations
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-5xl sm:text-6xl xl:text-[4.5rem] font-black tracking-tight leading-[1.03] mb-6"
            >
              <span className="text-white">Australia's Premier</span>
              <br />
              <span className="relative">
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(125deg, #60A5FA 0%, #3B82F6 40%, #D97706 100%)' }}
                >
                  Workforce Partner.
                </span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/60 to-amber-500/40 origin-left"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p {...fadeUp(0.28)} className="text-[1.1rem] text-slate-400 leading-relaxed mb-8 max-w-lg">
              Rapid, compliant deployment of trade and industrial talent for mining,
              construction, and manufacturing — sourced through our Manila hub and
              placed with precision across Australia.
            </motion.p>

            {/* Trust badges */}
            <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-2.5 mb-10">
              {badges.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm text-slate-400 text-[11.5px] font-medium"
                >
                  <Icon size={11} className="text-blue-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.48)} className="flex flex-col sm:flex-row gap-3.5 mb-12">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center justify-center gap-2.5 relative overflow-hidden bg-blue-600 text-white font-bold text-[15px] px-8 py-4 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Submit a Vacancy <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#process"
                onClick={(e) => { e.preventDefault(); document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2.5 border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm text-white font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-200"
              >
                <Play size={15} className="text-blue-400" /> How It Works
              </a>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              {...fadeUp(0.58)}
              className="flex items-center gap-px rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              {quickStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 flex flex-col items-center py-4 px-5 ${i < quickStats.length - 1 ? 'border-r border-white/[0.06]' : ''}`}
                >
                  <p className="text-2xl font-black text-white leading-none mb-1">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Remotion Hero Player ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[540px] mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-8 rounded-2xl bg-blue-600/5 blur-3xl pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-white/[0.04] pointer-events-none" />

              <Player
                component={HeroSequence}
                durationInFrames={300}
                compositionWidth={540}
                compositionHeight={540}
                fps={30}
                loop
                autoPlay
                acknowledgeRemotionLicense
                style={{
                  width: '100%',
                  borderRadius: 20,
                  border: '1px solid rgba(37,99,235,0.12)',
                }}
              />

              {/* Live indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-4 left-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[11px] font-bold">Live Placements Active</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-center text-[11px] text-slate-600 tracking-[0.22em] uppercase mb-5">
            Trusted by Australia's leading project operators
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {['Mining', 'Civil Construction', 'Manufacturing', 'Infrastructure', 'Oil & Gas', 'Agriculture'].map((ind) => (
              <span key={ind} className="text-slate-700 font-semibold text-xs tracking-wide">{ind}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
