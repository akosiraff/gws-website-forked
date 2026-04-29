'use client';

import { motion } from 'framer-motion';
import { UserCheck, BarChart3, Globe, HeartPulse, HandHeart, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    Icon: UserCheck,
    title: 'Candidate Screening',
    description: 'Australian construction and trade professionals apply real-world experience to identify talent that delivers — not just candidates that look good on paper.',
    tag: 'Core Service',
    color: 'blue',
  },
  {
    Icon: BarChart3,
    title: 'Requirement Analysis',
    description: 'Deep-dive analysis of your unique project needs. We tailor every search to your skill tests, English proficiency standards, and bespoke trade testing requirements.',
    tag: 'Strategy',
    color: 'indigo',
  },
  {
    Icon: Globe,
    title: 'International Recruitment',
    description: 'Cross-border talent sourcing using Australian regulatory frameworks, facilitated by our Manila hub. We scale companies with international pipelines that actually work.',
    tag: 'Global',
    color: 'violet',
  },
  {
    Icon: HeartPulse,
    title: 'Medical Screening',
    description: 'Full health and wellness assessments adhering to Australian healthcare standards — every recruit arrives on-site ready to perform from day one.',
    tag: 'Compliance',
    color: 'amber',
  },
  {
    Icon: HandHeart,
    title: 'Candidate Care Program',
    description: "We don't stop at placement. Our structured support framework helps overseas hires acclimate — covering transitions, accommodation guidance, and PPE.",
    tag: 'Support',
    color: 'emerald',
  },
];

const colorMap: Record<string, { iconBg: string; iconBorder: string; icon: string; tag: string; glow: string }> = {
  blue:   { iconBg: 'bg-blue-600/10',   iconBorder: 'border-blue-500/20',   icon: 'text-blue-400',   tag: 'bg-blue-500/10 text-blue-300 border-blue-500/15',   glow: 'group-hover:shadow-blue-600/10' },
  indigo: { iconBg: 'bg-indigo-600/10', iconBorder: 'border-indigo-500/20', icon: 'text-indigo-400', tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15', glow: 'group-hover:shadow-indigo-600/10' },
  violet: { iconBg: 'bg-violet-600/10', iconBorder: 'border-violet-500/20', icon: 'text-violet-400', tag: 'bg-violet-500/10 text-violet-300 border-violet-500/15', glow: 'group-hover:shadow-violet-600/10' },
  amber:  { iconBg: 'bg-amber-600/10',  iconBorder: 'border-amber-500/20',  icon: 'text-amber-400',  tag: 'bg-amber-500/10 text-amber-300 border-amber-500/15',  glow: 'group-hover:shadow-amber-600/10' },
  emerald:{ iconBg: 'bg-emerald-600/10',iconBorder: 'border-emerald-500/20',icon: 'text-emerald-400',tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15', glow: 'group-hover:shadow-emerald-600/10' },
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050D1A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] backdrop-blur-sm mb-6">
            <span className="text-[11px] font-bold text-blue-300 tracking-[0.16em] uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            End-to-End Workforce Solutions
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From sourcing to placement and beyond — we manage every stage of the international
            recruitment lifecycle so you can focus on running your project.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal variant="fadeUp" stagger={0.1} staggerTarget=".service-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => {
              const c = colorMap[svc.color];
              return (
                <div
                  key={svc.title}
                  className={`service-card group relative bg-[#0A1828]/80 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-400 hover:shadow-2xl ${c.glow} overflow-hidden cursor-default`}
                >
                  {/* Glass hover overlay */}
                  <div className={`absolute inset-0 ${c.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-6 right-6 h-px ${c.iconBg} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${c.iconBg} ${c.iconBorder} border flex items-center justify-center`}>
                        <svc.Icon size={21} className={c.icon} />
                      </div>
                      <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-lg border ${c.tag}`}>
                        {svc.tag}
                      </span>
                    </div>
                    <h3 className="text-[17px] font-bold text-white mb-3 leading-tight">{svc.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.description}</p>
                    <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 group-hover:text-slate-300 transition-colors duration-200">
                      Learn more <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div
              className="service-card relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 50%, #1a3580 100%)',
                boxShadow: '0 0 60px rgba(37,99,235,0.18)',
              }}
            >
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 60%)',
              }} />
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white mb-3">Ready to scale your workforce?</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Submit a vacancy today and receive a tailored recruitment plan within 24 hours.
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="relative z-10 mt-8 inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Submit a Vacancy <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
