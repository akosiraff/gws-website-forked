'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Award, MapPin, Zap } from 'lucide-react';

function CountUp({ to, suffix = '', prefix = '', duration = 2000 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  {
    Icon: TrendingUp,
    value: 500,
    suffix: '+',
    label: 'Successful Placements',
    sub: 'Across mining, construction & manufacturing',
    color: 'blue',
  },
  {
    Icon: Zap,
    value: 14,
    suffix: ' days',
    label: 'Average Deployment Time',
    sub: '62% faster than industry average',
    color: 'amber',
  },
  {
    Icon: Award,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction Rate',
    sub: 'Based on post-placement surveys',
    color: 'emerald',
  },
  {
    Icon: MapPin,
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    sub: 'In Australian mining & construction',
    color: 'violet',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; number: string }> = {
  blue:   { bg: 'bg-blue-600/10',   border: 'border-blue-500/20',   icon: 'text-blue-400',   number: 'text-blue-400' },
  amber:  { bg: 'bg-amber-600/10',  border: 'border-amber-500/20',  icon: 'text-amber-400',  number: 'text-amber-400' },
  emerald:{ bg: 'bg-emerald-600/10',border: 'border-emerald-500/20',icon: 'text-emerald-400',number: 'text-emerald-400' },
  violet: { bg: 'bg-violet-600/10', border: 'border-violet-500/20', icon: 'text-violet-400', number: 'text-violet-400' },
};

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050D1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A1828] backdrop-blur-sm border border-white/[0.07] rounded-2xl p-7"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-5`}>
                  <stat.Icon size={20} className={c.icon} />
                </div>
                <p className={`text-4xl font-extrabold ${c.number} mb-1`}>
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white font-semibold text-[15px] mb-1">{stat.label}</p>
                <p className="text-slate-500 text-xs">{stat.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
