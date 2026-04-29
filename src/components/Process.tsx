'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Search, FlaskConical, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    Icon: ClipboardList,
    title: 'Submit Your Requirements',
    description:
      'Tell us exactly what you need — trade types, headcount, timeline, site location, and any specific testing or compliance requirements. We tailor the search to your exact specs.',
  },
  {
    number: '02',
    Icon: Search,
    title: 'We Source & Screen',
    description:
      'Our Manila team activates the search immediately. Every candidate is assessed by Australian construction and trade professionals who know what good looks like on a real job site.',
  },
  {
    number: '03',
    Icon: FlaskConical,
    title: 'Testing & Compliance',
    description:
      'Shortlisted candidates complete skills tests, English proficiency checks, and medical screenings — all aligned to Australian standards. You only see people ready to work.',
  },
  {
    number: '04',
    Icon: Truck,
    title: 'Rapid Deployment',
    description:
      'We handle visa processing, logistics, and onboarding support. Qualified workers arrive on-site faster than any alternative — with our Candidate Care Program supporting their transition.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050D1A] relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            From Vacancy to Verified,<br />
            <span className="text-blue-400">in Days.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A four-stage process built for speed without sacrificing quality — because
            your project timeline doesn't wait.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number + icon circle */}
                <div className="relative mb-7">
                  <div className="w-20 h-20 rounded-2xl bg-[#0A1828] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center shadow-lg">
                    <step.Icon size={28} className="text-blue-400" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <span className="text-white text-[10px] font-black">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0A1828] backdrop-blur-sm border border-white/[0.07] rounded-2xl px-8 py-6"
        >
          <div>
            <p className="text-white font-bold text-lg">Typical deployment: 14 days or less.</p>
            <p className="text-slate-400 text-sm mt-1">From vacancy submission to boots on the ground.</p>
          </div>
          <a
            href="tel:+61413566464"
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap"
          >
            Call +61 413 566 464
          </a>
        </motion.div>
      </div>
    </section>
  );
}
