'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, CheckCircle2, Send } from 'lucide-react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    headcount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an API route
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050D1A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-amber-500/[0.04] rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
              <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase">Get Started</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Build Your<br />
              <span className="text-blue-400">Ideal Workforce?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Submit your vacancy details below and our team will respond within 24 hours with
              a tailored recruitment plan and timeline.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+61413566464"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Call us directly</p>
                  <p className="text-white font-bold text-base">+61 413 566 464</p>
                </div>
              </a>
              <a
                href="mailto:admin@globalworkforcesolutions.com.au"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email us</p>
                  <p className="text-white font-bold text-sm">admin@globalworkforcesolutions.com.au</p>
                </div>
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-white/[0.06]">
              <p className="text-slate-500 text-sm mb-4">Typical response time</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '25%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
                  />
                </div>
                <span className="text-white font-bold text-sm whitespace-nowrap">Under 24 hrs</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#0A1828] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600/15 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Vacancy Submitted!</h3>
                <p className="text-slate-400 max-w-xs">
                  Our team will review your requirements and reach out within 24 hours with a tailored recruitment plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-1">Submit a Vacancy</h3>
                <p className="text-slate-500 text-sm mb-6">Tell us what you need and we'll build your workforce.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1a2a42] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Mining Pty Ltd"
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1a2a42] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com.au"
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1a2a42] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+61 4xx xxx xxx"
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1a2a42] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Industry *</label>
                    <select
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                    >
                      <option value="" className="text-slate-600">Select industry</option>
                      <option>Mining</option>
                      <option>Construction</option>
                      <option>Manufacturing</option>
                      <option>Infrastructure</option>
                      <option>Resources / Oil & Gas</option>
                      <option>Agriculture</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Headcount Required</label>
                    <select
                      name="headcount"
                      value={form.headcount}
                      onChange={handleChange}
                      className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                    >
                      <option value="">Select range</option>
                      <option>1 – 10</option>
                      <option>11 – 50</option>
                      <option>51 – 200</option>
                      <option>200+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the roles, location, timeline, and any specific requirements..."
                    className="w-full bg-[#162236] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1a2a42] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35"
                >
                  Submit Vacancy <Send size={16} />
                </button>

                <p className="text-center text-xs text-slate-600">
                  By submitting you agree to our{' '}
                  <a href="#" className="text-slate-500 hover:text-slate-300 underline">Privacy Policy</a>.
                  We respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
