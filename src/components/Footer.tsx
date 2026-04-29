'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Shield } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Candidate Screening', href: '#services' },
    { label: 'International Recruitment', href: '#services' },
    { label: 'Medical Screening', href: '#services' },
    { label: 'Candidate Care', href: '#services' },
    { label: 'Submit a Vacancy', href: '#contact' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'Blog', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  Legal: [
    { label: 'Data Privacy Policy', href: '#' },
    { label: 'Modern Slavery Statement', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { icon: <FacebookIcon />,   href: '#', label: 'Facebook' },
  { icon: <InstagramIcon />,  href: '#', label: 'Instagram' },
  { icon: <LinkedInIcon />,   href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030810] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">GW</span>
              </div>
              <div>
                <p className="text-white font-bold text-[15px] leading-tight">Global Workforce Solutions</p>
                <p className="text-blue-400 text-[10px] font-semibold tracking-widest uppercase">Pty Ltd</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Australia's premier international labour recruitment company. Sourcing qualified trade and industrial
              talent from our Manila hub for mining, construction, and manufacturing projects.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+61413566464" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <Phone size={14} className="text-blue-400" />
                <span className="text-sm">+61 413 566 464</span>
              </a>
              <a href="mailto:admin@globalworkforcesolutions.com.au" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail size={14} className="text-blue-400" />
                <span className="text-sm">admin@globalworkforcesolutions.com.au</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-slate-500 hover:text-slate-200 text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance bar */}
        <div className="py-5 border-t border-white/[0.05]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <span>© 2024 Global Workforce Solutions Pty Ltd</span>
              <span>ACN 671 808 772</span>
              <span>ABN 46 671 808 772</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-1.5">
              <Shield size={12} className="text-blue-400" />
              <span className="text-slate-600 text-xs">Modern Slavery Act 2018 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
