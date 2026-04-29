'use client';

import { motion } from 'framer-motion';
import { HardHat, Pickaxe, Factory, Truck, Bolt, TreePine } from 'lucide-react';

const industries = [
  {
    Icon: Pickaxe,
    name: 'Mining',
    description: 'Underground and open-cut mining operations across Western Australia, Queensland, and the Northern Territory.',
    roles: ['Drilling Operators', 'Blasting Technicians', 'Mining Engineers', 'Surface Crew'],
    color: 'amber',
  },
  {
    Icon: HardHat,
    name: 'Construction',
    description: 'Large-scale civil, commercial, and residential construction projects requiring qualified trade professionals.',
    roles: ['Formworkers', 'Steel Fixers', 'Scaffolders', 'Concreters'],
    color: 'blue',
  },
  {
    Icon: Factory,
    name: 'Manufacturing',
    description: 'Production facilities needing skilled operators, maintenance technicians, and quality control personnel.',
    roles: ['Machine Operators', 'Maintenance Techs', 'QC Inspectors', 'Welders'],
    color: 'violet',
  },
  {
    Icon: Truck,
    name: 'Infrastructure',
    description: 'Roads, rail, ports, and utilities infrastructure projects with specialised labour requirements at scale.',
    roles: ['Plant Operators', 'Traffic Controllers', 'Pipe Layers', 'Labourers'],
    color: 'emerald',
  },
  {
    Icon: Bolt,
    name: 'Resources',
    description: 'Oil and gas, LNG, and energy sector placements with rigorous safety and competency requirements.',
    roles: ['Riggers', 'Boilermakers', 'Instrumentation Techs', 'HSE Officers'],
    color: 'red',
  },
  {
    Icon: TreePine,
    name: 'Agriculture',
    description: 'Seasonal and permanent agricultural workforce placements for farms, orchards, and processing facilities.',
    roles: ['Farm Supervisors', 'Equipment Operators', 'Packhouse Workers', 'Agronomists'],
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; tag: string }> = {
  amber:  { bg: 'bg-amber-600/8',   border: 'border-amber-500/15',  icon: 'text-amber-400',  tag: 'bg-amber-500/10 text-amber-300 border-amber-500/15' },
  blue:   { bg: 'bg-blue-600/8',    border: 'border-blue-500/15',   icon: 'text-blue-400',   tag: 'bg-blue-500/10 text-blue-300 border-blue-500/15' },
  violet: { bg: 'bg-violet-600/8',  border: 'border-violet-500/15', icon: 'text-violet-400', tag: 'bg-violet-500/10 text-violet-300 border-violet-500/15' },
  emerald:{ bg: 'bg-emerald-600/8', border: 'border-emerald-500/15',icon: 'text-emerald-400',tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15' },
  red:    { bg: 'bg-red-600/8',     border: 'border-red-500/15',    icon: 'text-red-400',    tag: 'bg-red-500/10 text-red-300 border-red-500/15' },
  green:  { bg: 'bg-green-600/8',   border: 'border-green-500/15',  icon: 'text-green-400',  tag: 'bg-green-500/10 text-green-300 border-green-500/15' },
};

export default function Industries() {
  return (
    <section id="industries" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050D1A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">Sectors We Serve</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Industries We Specialise In
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We operate where the work is hardest and the labour shortages most acute —
            placing qualified people where Australian projects need them most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => {
            const c = colorMap[ind.color];
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group bg-[#0A1828] backdrop-blur-sm border ${c.border} rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-5`}>
                  <ind.Icon size={22} className={c.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{ind.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.roles.map((role) => (
                    <span
                      key={role}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${c.tag}`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
