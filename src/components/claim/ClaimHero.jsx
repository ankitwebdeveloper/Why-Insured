import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiSearch, FiArrowDown } from 'react-icons/fi';

export default function ClaimHero({ onScrollToSection }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC]">
      {/* Background ambient decorative glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Independent Tag / Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold tracking-wide mb-6 shadow-xs"
        >
          <FiShield className="text-emerald-600 text-sm" />
          <span>Independent Health Claim Guidance</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-display leading-[1.15] max-w-4xl mx-auto"
        >
          No confusion during claims,{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
            just clear guidance.
          </span>
        </motion.h1>

        {/* Subheading / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Understand your claim, identify the problem and find the right next step — without the insurance jargon.
        </motion.p>

        {/* Primary CTA: Find My Claim Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <button
            type="button"
            onClick={() => onScrollToSection('claim-help-center')}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <FiSearch className="text-emerald-400 text-base group-hover:scale-110 transition-transform" />
            <span>Find My Claim Problem</span>
            <FiArrowDown className="text-slate-400 group-hover:translate-y-0.5 transition-transform text-xs" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
