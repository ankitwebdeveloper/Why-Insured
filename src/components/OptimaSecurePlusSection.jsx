import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiShield,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiZap,
  FiRefreshCw,
  FiTrendingUp,
  FiHeart,
  FiUserCheck,
  FiTruck,
  FiDollarSign,
  FiPlusCircle,
  FiLayers,
  FiArrowRight,
  FiStar,
  FiSun,
  FiAward,
  FiCornerDownRight,
  FiHelpCircle
} from 'react-icons/fi';
import { FaHospital, FaUserMd, FaStethoscope, FaSyringe, FaShieldAlt } from 'react-icons/fa';

export default function OptimaSecurePlusSection({ plan, company }) {
  const [selectedSum, setSelectedSum] = useState('10');

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  // Base SI calculation preview numbers for visual indicator
  const baseSI = parseInt(selectedSum, 10);
  const secureSI = baseSI * 2;
  const year1SI = baseSI * 2 + baseSI * 1;
  const year2SI = baseSI * 2 + baseSI * 2;
  const year3SI = baseSI * 2 + baseSI * 3;

  return (
    <div className="space-y-10 font-sans w-full max-w-full overflow-hidden text-slate-800">

      {/* ========================================================================= */}
      {/* COMPACT PLAN HEADER & PROTECTION GROWTH INDICATOR                         */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-red-900/40 relative overflow-hidden text-white"
      >
        {/* Background Decorative Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-red-800/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-red-900/40 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  HDFC ERGO Official
                </span>
                <span className="bg-slate-800/80 text-slate-300 border border-slate-700 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                  Flagship Health Plan
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
                Optima Secure<span className="text-red-500">+</span>
              </h1>

              <p className="text-red-200/90 text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2">
                <FiZap className="text-red-400 shrink-0" />
                “Unlimited Protection. Added Every Year.”
              </p>
            </div>

            {/* HDFC ERGO Logo Badge */}
            {company?.logo && (
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shrink-0 shadow-lg border border-white/20 self-start sm:self-center">
                <img
                  src={company.logo}
                  alt="HDFC ERGO"
                  className="w-28 sm:w-36 h-auto max-h-10 sm:max-h-12 object-contain"
                />
              </div>
            )}
          </div>

          {/* Protection Growth Indicator (Infinite Benefit Visual) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                <FiTrendingUp className="text-red-400" />
                Visual Protection-Growth Indicator (Infinite Benefit)
              </span>
              
              {/* Interactive Sum Insured Selector */}
              <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-red-900/50">
                <span className="text-[10px] text-slate-400 font-bold px-1.5 hidden xs:inline">Base SI:</span>
                {['5', '10', '20', '50'].map((sum) => (
                  <button
                    key={sum}
                    onClick={() => setSelectedSum(sum)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
                      selectedSum === sum
                        ? 'bg-red-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    ₹{sum}L
                  </button>
                ))}
              </div>
            </div>

            {/* Growth Timeline Steps */}
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 pt-2">
              
              {/* Step 1: Base SI */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 sm:p-4 text-center relative group overflow-hidden"
              >
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Base Cover
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-black text-white mt-1 font-display">
                  ₹{baseSI} Lakh
                </div>
                <div className="text-[9px] text-slate-400 mt-1 font-medium">
                  Chosen Base SI
                </div>
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <FiArrowRight className="text-sm" />
                </div>
              </motion.div>

              {/* Step 2: Day 1 (Secure Benefit) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-red-950/60 border border-red-700/50 rounded-2xl p-3 sm:p-4 text-center relative group overflow-hidden shadow-inner"
              >
                <span className="inline-block bg-red-600 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md mb-0.5">
                  Day 1 (2X)
                </span>
                <div className="text-base sm:text-xl md:text-2xl font-black text-red-400 mt-0.5 font-display">
                  ₹{secureSI} Lakh
                </div>
                <div className="text-[9px] text-red-200/80 mt-1 font-semibold">
                  Secure Benefit
                </div>
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-red-700">
                  <FiArrowRight className="text-sm" />
                </div>
              </motion.div>

              {/* Step 3: Year 1 Add */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 sm:p-4 text-center relative group overflow-hidden"
              >
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  After Year 1
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-black text-white mt-1 font-display">
                  ₹{year1SI} Lakh
                </div>
                <div className="text-[9px] text-slate-400 mt-1 font-medium">
                  +100% SI Added
                </div>
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <FiArrowRight className="text-sm" />
                </div>
              </motion.div>

              {/* Step 4: Year 2 Add */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 sm:p-4 text-center relative group overflow-hidden"
              >
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  After Year 2
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-black text-white mt-1 font-display">
                  ₹{year2SI} Lakh
                </div>
                <div className="text-[9px] text-slate-400 mt-1 font-medium">
                  +100% SI Added
                </div>
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <FiArrowRight className="text-sm" />
                </div>
              </motion.div>

              {/* Step 5: Infinite Cover */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="col-span-2 xs:col-span-1 bg-gradient-to-br from-red-600 to-red-700 border border-red-400/50 rounded-2xl p-3 sm:p-4 text-center relative group overflow-hidden shadow-lg"
              >
                <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-red-100">
                  Every Year (+)
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-0.5 font-display flex items-center justify-center gap-1">
                  <span>∞</span>
                  <span className="text-xs font-bold">Infinite</span>
                </div>
                <div className="text-[9px] text-red-100 mt-1 font-bold">
                  Unlimited Growth
                </div>
              </motion.div>

            </div>

            <p className="text-[11px] sm:text-xs text-red-200/70 font-medium italic text-center sm:text-left pt-1">
              *100% of Base Sum Insured is added every policy year, regardless of whether claims were made.
            </p>
          </div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 1: MOST IMPORTANT FEATURES (RED THEMED)                          */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-red-100 relative overflow-hidden"
      >
        {/* Subtle top border accent line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-rose-600" />

        {/* Desktop Accent Watermark Graphic */}
        <div className="hidden lg:block absolute -right-6 -bottom-10 text-red-500/5 pointer-events-none">
          <FaHospital className="w-64 h-64" />
        </div>

        <div className="relative z-10 space-y-6">
          
          {/* Section Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-display uppercase">
                  Most Important Features
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold pl-4">
                Core hospitalisation protection built into HDFC ERGO Optima Secure+.
              </p>
            </div>

            <span className="bg-red-50 text-red-600 border border-red-200/60 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shrink-0 hidden xs:inline-block">
              5 Core Benefits
            </span>
          </div>

          {/* 5 Compact Icon-Based Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Feature 1: Any Room Category */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-red-50/40 hover:bg-red-50/80 border border-red-100 hover:border-red-200 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
                  <FaHospital className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    Any Room Category
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    100% cashless policy with no room category restriction.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 flex items-center gap-1.5 text-[11px] font-bold text-red-700">
                <FiCheckCircle className="text-red-600 shrink-0" />
                <span>Zero Room Rent Capping</span>
              </div>
            </motion.div>

            {/* Feature 2: No ICU Limit */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-red-50/40 hover:bg-red-50/80 border border-red-100 hover:border-red-200 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
                  <FiActivity className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    No ICU Limit
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    No limit on ICU room charges during critical medical treatment.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 flex items-center gap-1.5 text-[11px] font-bold text-red-700">
                <FiCheckCircle className="text-red-600 shrink-0" />
                <span>Actual ICU Expenses Covered</span>
              </div>
            </motion.div>

            {/* Feature 3: Pre & Post Hospitalisation */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-red-50/40 hover:bg-red-50/80 border border-red-100 hover:border-red-200 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
                  <FiClock className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    Pre & Post Hospitalisation
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    60 days pre-hospitalisation + 180 days post-hospitalisation.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 flex items-center gap-1.5 text-[11px] font-bold text-red-700">
                <FiCheckCircle className="text-red-600 shrink-0" />
                <span>Diagnostics & Medicines Covered</span>
              </div>
            </motion.div>

            {/* Feature 4: All Day Care Diseases Covered */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-red-50/40 hover:bg-red-50/80 border border-red-100 hover:border-red-200 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
                  <FaUserMd className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    All Day Care Diseases Covered
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    Eligible daycare procedures covered even when hospitalisation is less than 24 hours.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 flex items-center gap-1.5 text-[11px] font-bold text-red-700">
                <FiCheckCircle className="text-red-600 shrink-0" />
                <span>Includes Modern Surgeries</span>
              </div>
            </motion.div>

            {/* Feature 5: Modern Treatment & Robotic Surgery */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="col-span-1 sm:col-span-2 lg:col-span-1 bg-red-50/40 hover:bg-red-50/80 border border-red-100 hover:border-red-200 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
                  <FaStethoscope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    Modern Treatment & Robotic Surgery
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    Coverage for eligible modern medical treatments and robotic surgery procedures.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100/60 flex items-center gap-1.5 text-[11px] font-bold text-red-700">
                <FiCheckCircle className="text-red-600 shrink-0" />
                <span>Advanced Medical Tech</span>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 2: VALUE ADDED FEATURES (DEEP BLUE / SLATE THEMED - HERO SECTION)*/}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-slate-900 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden text-white"
      >
        {/* Gradient backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-blue-900/30 via-slate-900 to-red-950/20 pointer-events-none" />

        <div className="relative z-10 space-y-8">
          
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-400 block mb-1">
                High-Impact Protection Perks
              </span>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white font-display uppercase">
                Value Added Features
              </h2>
            </div>
            <span className="bg-red-600/20 text-red-300 border border-red-500/30 text-xs font-extrabold px-3 py-1 rounded-full self-start sm:self-center">
              ⭐ Most Visually Impressive Benefits
            </span>
          </div>

          {/* Grid Layout: 5 Cards with Infinite Benefit as HERO card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* HERO CARD: Infinite Benefit (Larger Card) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-800 via-slate-900 to-red-950/60 border-2 border-red-500/50 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-red-700 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                Major Selling Point
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                  <FiTrendingUp className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display flex items-center gap-2">
                    Infinite Benefit
                    <span className="text-xs font-bold text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-800/60">
                      100% Every Year
                    </span>
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 font-medium leading-relaxed max-w-2xl">
                    100% of Base Sum Insured is added every policy year, irrespective of claims made in previous years.
                  </p>
                </div>

                {/* Example Visual Badge */}
                <div className="bg-slate-950/80 border border-red-900/50 rounded-2xl p-4 mt-2">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 mb-2">
                    Example Growth Visualization:
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-white flex-wrap">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">₹20 Lakh</span>
                    <FiArrowRight className="text-red-500 shrink-0" />
                    <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">₹40 Lakh</span>
                    <FiArrowRight className="text-red-500 shrink-0" />
                    <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">₹60 Lakh</span>
                    <FiArrowRight className="text-red-500 shrink-0" />
                    <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">₹80 Lakh</span>
                    <FiArrowRight className="text-red-500 shrink-0" />
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-lg shadow-md font-extrabold flex items-center gap-1">
                      <span>∞</span> Infinite
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Claims do NOT reduce annual SI additions</span>
                <span className="text-red-400 font-bold">Automatic Addition</span>
              </div>
            </motion.div>


            {/* Card 2: Unlimited Restoration */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <FiRefreshCw className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400">
                    Auto-Refill Guarantee
                  </span>
                  <h3 className="text-lg font-black text-white font-display mt-0.5">
                    Unlimited Restoration
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                    Sum Insured is restored 100% infinitely upon exhaustion for any subsequent illness.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-[11px] font-bold text-slate-300 space-y-1">
                  <div className="text-slate-400 text-[10px]">Restoration Formula:</div>
                  <div className="text-blue-300 leading-tight">
                    ₹10L Base SI → ₹10L restored again → ₹10L → ₹10L…
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-bold text-blue-400">
                <FiCheckCircle className="shrink-0" />
                <span>Unlimited Refills Per Year</span>
              </div>
            </motion.div>


            {/* Card 3: Secure Benefit */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <FaShieldAlt className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">
                    Instant Double Cover
                  </span>
                  <h3 className="text-lg font-black text-white font-display mt-0.5">
                    Secure Benefit
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                    Get 2X coverage right from Day 1 of policy issuance without waiting.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-[11px] font-bold text-slate-300">
                  <span className="text-slate-400 text-[10px] block">Example:</span>
                  <span className="text-red-300">₹20 Lakh Base Cover → </span>
                  <strong className="text-white">₹40 Lakh from Day 1</strong>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-bold text-red-400">
                <FiCheckCircle className="shrink-0" />
                <span>2X Multiplier Active Day 1</span>
              </div>
            </motion.div>


            {/* Card 4: Protect Benefit */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <FaSyringe className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                    Zero Deductions
                  </span>
                  <h3 className="text-lg font-black text-white font-display mt-0.5">
                    Protect Benefit
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                    Coverage for eligible non-medical expenses such as gloves, cotton, syringes, masks, PPE kits, etc.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <FiCheckCircle className="shrink-0" />
                <span>68+ Non-Medical Items Paid</span>
              </div>
            </motion.div>


            {/* Card 5: Preventive Health Check-up */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shrink-0">
                  <FiHeart className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                    Annual Wellness
                  </span>
                  <h3 className="text-lg font-black text-white font-display mt-0.5">
                    Preventive Health Check-up
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                    Comprehensive preventive health check-up covered for all insured members every policy year.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <FiCheckCircle className="shrink-0" />
                <span>Included Every Renewal</span>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 3: ADDITIONAL FEATURES (CLEAN GRID)                              */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-100 space-y-6"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <div className="w-2 h-6 rounded-full bg-slate-800" />
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 font-display uppercase tracking-tight">
              Additional Features
            </h2>
            <p className="text-xs text-slate-500 font-semibold">
              Comprehensive medical sub-limit details and peripheral care inclusions.
            </p>
          </div>
        </div>

        {/* 2 or 3 Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Item 1: Daily Cash For Shared Room */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiDollarSign className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                Daily Cash For Shared Room
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                ₹800 per day, up to a maximum of ₹4,800 for shared room occupancy.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Domiciliary Treatment */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiUserCheck className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                Domiciliary Treatment
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Hospitalisation expenses for treatment taken at home under medical advice.
              </p>
            </div>
          </motion.div>

          {/* Item 3: Organ Treatment */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiHeart className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                Organ Treatment
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                In-patient hospitalisation costs for organ donor harvesting fully covered.
              </p>
            </div>
          </motion.div>

          {/* Item 4: AYUSH Treatment */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiSun className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                AYUSH Treatment
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                100% cover for Ayurveda, Yoga, Unani, Siddha & Homeopathy in recognized institutes.
              </p>
            </div>
          </motion.div>

          {/* Item 5: Road Ambulance Cover */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiTruck className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                Road Ambulance Cover
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Emergency road ambulance expenses covered up to Sum Insured limit.
              </p>
            </div>
          </motion.div>

          {/* Item 6: All Day Care Treatment */}
          <motion.div
            variants={cardVariants}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0 mt-0.5">
              <FiCheckCircle className="text-base" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900">
                All Day Care Treatment
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Eligible day-care treatments requiring less than 24 hours admission.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 4: OPTIONAL RIDERS / ADD-ONS (RED THEMED 3x2 GRID)               */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-slate-900 rounded-3xl p-5 sm:p-8 shadow-md border border-slate-800 text-white space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h2 className="text-lg sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                Optional Riders (Add-Ons)
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-semibold pl-4">
              Enhance your policy with tailor-made protective riders.
            </p>
          </div>
          <span className="bg-red-600/20 text-red-300 border border-red-500/30 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full self-start sm:self-center">
            6 Specialized Riders
          </span>
        </div>

        {/* 3 x 2 Grid on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Rider 1: ABCD Chronic Care */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  Day 31 Coverage
                </span>
                <FiPlusCircle className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                ABCD Chronic Care
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Pre-existing Asthma, BP, Cholesterol and Diabetes covered from the 31st day.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Shortened Waiting Period
            </div>
          </motion.div>

          {/* Rider 2: Limitless */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  Lifetime Unlimited
                </span>
                <FiZap className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                Limitless
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                One unlimited claim in a lifetime — no Sum Insured limit for extreme medical events.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Zero SI Capping
            </div>
          </motion.div>

          {/* Rider 3: Optima Wellbeing */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  OPD Cover
                </span>
                <FiUserCheck className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                Optima Wellbeing
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Covers eligible outpatient benefits including consultations & consultations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Outpatient Consultations
            </div>
          </motion.div>

          {/* Rider 4: Parenthood */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  Maternity Protection
                </span>
                <FiHeart className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                Parenthood
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Covers eligible maternity expenses and newborn baby care costs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Delivery & Newborn Expenses
            </div>
          </motion.div>

          {/* Rider 5: Hospital Cash Benefit */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  Daily Allowance
                </span>
                <FiDollarSign className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                Hospital Cash Benefit
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Get a fixed daily cash amount for each completed day of hospitalisation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Daily Cash Paid
            </div>
          </motion.div>

          {/* Rider 6: Serious Illness Booster */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="bg-slate-800/80 hover:bg-slate-800 border border-red-900/40 hover:border-red-600/60 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                  2X Critical Booster
                </span>
                <FiAward className="text-red-500 text-lg" />
              </div>
              <h3 className="text-base font-black text-white font-display">
                Serious Illness Booster
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                2X Sum Insured for listed critical illnesses like Cancer, Heart Attack, etc.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-red-400 font-bold flex items-center gap-1">
              <FiCheckCircle /> Double Cover for Critical Illnesses
            </div>
          </motion.div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 5: CONVERSION CTA & DISCLAIMER FOOTER                            */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight">
            Ready to secure HDFC ERGO Optima Secure+?
          </h3>
          <p className="text-xs sm:text-sm text-red-100 font-medium">
            Get instant quote calculation or connect with our certified health advisor.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
          <a
            href="tel:18001234567"
            className="px-5 py-3 rounded-xl bg-white text-red-700 hover:bg-red-50 font-black text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <FiZap /> Get Instant Quote
          </a>
        </div>
      </motion.div>

      {/* Footer Disclaimer */}
      <div className="text-center text-xs text-slate-400 font-medium pb-2">
        *T&C Apply. Policy features and benefit terms as per official HDFC ERGO General Insurance Co. Ltd. guidelines.
      </div>

    </div>
  );
}
