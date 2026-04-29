'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Target, Star, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const differentiators = [
  'Australian professionals conduct every candidate assessment',
  'Manila hub provides direct access to a large skilled labour pool',
  'Established relationship with the Department of Migrant Workers',
  'Hundreds of placements within three months for major projects',
  'Transparent all-inclusive pricing with no hidden fees',
  'Full compliance with the Australian Modern Slavery Act 2018',
];

const metrics = [
  { value: '10+', label: 'Years in Industry', color: 'text-blue-400' },
  { value: '500+', label: 'Successful Placements', color: 'text-amber-400' },
  { value: '2', label: 'Countries of Operation', color: 'text-emerald-400' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050D1A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Story ── */}
          <ScrollReveal variant="fadeLeft">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] backdrop-blur-sm mb-6">
              <span className="text-[11px] font-bold text-blue-300 tracking-[0.16em] uppercase">Our Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">
              Built from the{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(125deg, #60A5FA, #D97706)' }}
              >
                Ground Up.
              </span>
            </h2>

            <div className="space-y-5 text-slate-400 text-[15.5px] leading-relaxed mb-10">
              <p>
                Global Workforce Solutions was born from deep industry experience in Australian mining and
                construction. Our founders worked alongside the country's major placement agencies,
                building relationships with the most demanding project operators in the sector.
              </p>
              <p>
                Seeing a persistent gap between what projects needed and what traditional recruitment
                delivered, we established our Manila hub — combining Australian professional oversight
                with direct access to one of the world's most work-ready labour pools.
              </p>
              <p>
                Today, we're recognised by top-10 industry leaders as the partner they call when
                speed, quality, and compliance can't be compromised.
              </p>
            </div>

            {/* Mission card */}
            <div
              className="relative rounded-2xl p-6 flex gap-4 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(30,64,175,0.04))', border: '1px solid rgba(59,130,246,0.12)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent pointer-events-none" />
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">
                <Target size={17} className="text-blue-400" />
              </div>
              <div className="relative z-10">
                <p className="text-white font-bold text-sm mb-1.5">Mission Statement</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To ascend as Australia's premier labour sourcing company — bridging talent gaps with
                  precision and efficiency while exceeding the expectations of every client we serve.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Cards ── */}
          <ScrollReveal variant="fadeRight" delay={0.1}>
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-[#0A1828]/80 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-4 text-center"
                >
                  <p className={`text-2xl font-black ${m.color} mb-1`}>{m.value}</p>
                  <p className="text-slate-500 text-[10.5px] leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Hub cards */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="relative bg-[#0A1828]/80 backdrop-blur-sm border border-amber-500/15 rounded-2xl p-5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-amber-400" />
                    <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">Australia</span>
                  </div>
                  <p className="text-white font-bold text-sm leading-tight">Client Relations & Standards</p>
                  <p className="text-slate-500 text-[11px] mt-1">Industry oversight & compliance</p>
                </div>
              </div>
              <div className="relative bg-[#0A1828]/80 backdrop-blur-sm border border-blue-500/15 rounded-2xl p-5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-blue-400" />
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">Manila</span>
                  </div>
                  <p className="text-white font-bold text-sm leading-tight">Sourcing & Operations Hub</p>
                  <p className="text-slate-500 text-[11px] mt-1">Candidate pipeline & logistics</p>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <div className="bg-[#0A1828]/80 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Star size={13} className="text-amber-400" />
                </div>
                <span className="text-white font-bold text-sm">Why GWS over alternatives?</span>
              </div>
              <ul className="space-y-3">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-[13.5px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
