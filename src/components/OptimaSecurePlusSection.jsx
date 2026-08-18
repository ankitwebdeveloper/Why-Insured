import React from 'react';
import { motion } from 'framer-motion';
import {
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiZap,
  FiRefreshCw,
  FiTrendingUp,
  FiHeart,
  FiUserCheck,
  FiDollarSign,
  FiPlusCircle,
  FiAward,
  FiCheckSquare
} from 'react-icons/fi';
import { FaHospital, FaUserMd, FaStethoscope, FaSyringe, FaShieldAlt, FaAmbulance, FaMedkit } from 'react-icons/fa';
import hdfcErgoLogo from '../assets/hdfc-ergo-logo.png';

export default function OptimaSecurePlusSection() {
  // Motion Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.04 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
  };

  // Shared Compact Section Header Component
  const SectionHeader = ({ title, subtitle, badgeText }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#E2E8F0] pb-2.5 mb-4 sm:mb-6">
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-5 rounded-full bg-[#E30613] shrink-0" />
        <div>
          <h2 className="text-sm sm:text-xl font-black text-[#0F172A] tracking-tight font-display uppercase leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badgeText && (
        <span className="bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full self-start sm:self-center">
          {badgeText}
        </span>
      )}
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-7 font-sans w-full max-w-full overflow-x-hidden text-[#0F172A] bg-[#FFFFFF] p-2 sm:p-4 rounded-2xl sm:rounded-3xl">

      {/* ========================================================================= */}
      {/* HEADER: COMPACT HDFC ERGO BRANDED HEADER                                 */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-[#E30613]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* LEFT: HDFC ERGO Official Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-2 shrink-0 shadow-sm">
              <img
                src={hdfcErgoLogo}
                alt="HDFC ERGO"
                className="w-24 sm:w-36 h-auto max-h-9 sm:max-h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#E2E8F0]" />
          </div>

          {/* CENTER / RIGHT: Title & Subtitle */}
          <div className="space-y-0.5 text-left sm:text-right">
            <div className="inline-flex items-center gap-1 bg-[#FFF5F5] border border-[#FECDD3] text-[#E30613] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse" />
              Official Health Policy
            </div>
            <h1 className="text-xl sm:text-4xl font-black tracking-tight font-display leading-tight">
              <span className="text-[#E30613]">Optima</span>{' '}
              <span className="text-[#0F172A]">Secure+</span>
            </h1>
            <p className="text-[11px] sm:text-sm text-[#475569] font-medium">
              Comprehensive Health Insurance Policy by HDFC ERGO
            </p>
          </div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 1 — MOST IMPORTANT FEATURES (COMPACT MOBILE GRID — NO EMPTY SPACE)*/}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        <SectionHeader
          title="Most Important Features"
          subtitle="Core hospitalisation coverage built into HDFC ERGO Optima Secure+."
          badgeText="Core Coverage"
        />

        {/* Compact Mobile Composition: Full-width Hero + 2x2 Mobile Grid */}
        <div className="space-y-3">
          
          {/* FEATURED HERO CARD (Full Width on Mobile, Spans 2 Cols on Desktop) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFF5F5]/40 border-2 border-[#E30613]/30 hover:border-[#E30613] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 transition-all flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0 shadow-sm">
                  <FaHospital className="text-base sm:text-xl" />
                </div>
                <span className="bg-[#E30613] text-[#FFFFFF] text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Featured Core Cover
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-black text-[#0F172A] font-display">
                  Any Room Category
                </h3>
                <p className="text-xs sm:text-sm text-[#E30613] font-extrabold mt-0.5">
                  100% Cashless Policy
                </p>
                <p className="text-[11px] sm:text-sm text-[#475569] mt-1 sm:mt-2 font-medium leading-relaxed">
                  Choose any room category in cashless network hospitals with zero room rent capping.
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#FECDD3] flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#E30613]">
              <FiCheckCircle className="text-xs sm:text-base shrink-0" />
              <span>Zero Room Capping</span>
            </div>
          </motion.div>

          {/* 2x2 Grid on Mobile (Grid-cols-2) & 4-col on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            
            {/* Feature 2: No Limit on ICU */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                  <FiActivity className="text-sm sm:text-lg" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display leading-tight">
                    No Limit on ICU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#E30613] font-bold mt-0.5">
                    No ICU room category limit.
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#475569] mt-1 font-medium leading-normal hidden sm:block">
                    Full coverage for intensive care unit charges with zero daily sub-limits.
                  </p>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0 text-[10px]" />
                <span className="truncate">Actual ICU Charges</span>
              </div>
            </motion.div>

            {/* Feature 3: Pre & Post Hospitalisation */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                  <FiClock className="text-sm sm:text-lg" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display leading-tight">
                    Pre & Post Hospitalisation
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#E30613] font-bold mt-0.5">
                    60 & 180 Days
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#475569] mt-1 font-medium leading-normal hidden sm:block">
                    Covers 60 days before hospital admission and 180 days after discharge.
                  </p>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0 text-[10px]" />
                <span className="truncate">Medical Tests Included</span>
              </div>
            </motion.div>

            {/* Feature 4: All Day Care Diseases Covered */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                  <FaUserMd className="text-sm sm:text-lg" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display leading-tight">
                    All Day Care Diseases Covered
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#475569] mt-1 font-medium leading-normal hidden sm:block">
                    All medical procedures and daycare treatments requiring less than 24 hours stay.
                  </p>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0 text-[10px]" />
                <span className="truncate">Daycare Cover</span>
              </div>
            </motion.div>

            {/* Feature 5: Modern Treatment & Robotic Surgery */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                  <FaStethoscope className="text-sm sm:text-lg" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display leading-tight">
                    Modern Treatment & Robotic Surgery
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#475569] mt-1 font-medium leading-normal hidden sm:block">
                    Advanced surgical technology, robotic surgeries, and stem cell therapy covered up to Sum Insured.
                  </p>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0 text-[10px]" />
                <span className="truncate">Robotic Surgery</span>
              </div>
            </motion.div>

          </div>

          {/* Compact Network Banner Bar (Eliminates empty space on Mobile) */}
          <div className="bg-[#FFF5F5] border border-[#FECDD3] rounded-xl p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <FaShieldAlt className="text-base sm:text-xl text-[#E30613] shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] leading-tight">100% Cashless Network</h4>
                <p className="text-[10px] sm:text-xs text-[#475569] font-medium">
                  Access over 13,000+ cashless network hospitals across India.
                </p>
              </div>
            </div>
            <span className="hidden sm:block text-[10px] font-black uppercase text-[#E30613] bg-[#FFFFFF] px-2.5 py-1 rounded-full border border-[#FECDD3]">
              Verified Network
            </span>
          </div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 2 — VALUE ADDED FEATURES (COMPACT MOBILE BLOCKS)                   */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        <SectionHeader
          title="Value Added Features"
          subtitle="High-impact multipliers and infinite coverage restoration benefits."
          badgeText="Enhanced Value"
        />

        {/* 2-Column Mobile Grid for Top 4 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          
          {/* Unlimited Restoration */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                <FiRefreshCw className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                  Unlimited Restoration
                </h3>
                <div className="mt-2 bg-[#FFF5F5] border border-[#FECDD3] rounded-lg p-2.5 text-xs font-semibold text-[#0F172A]">
                  <span className="text-[#E30613] block text-[9px] uppercase tracking-wider font-extrabold mb-0.5">Restoration Structure:</span>
                  <p className="text-[#0F172A] font-mono text-[10px] sm:text-xs">
                    ₹10 Lakh Base SI → ₹10 Lakh restored again → ₹10 Lakh → ₹10 Lakh...
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#E30613]">
              <FiCheckCircle className="shrink-0" />
              <span>Restores 100% Base Sum Insured</span>
            </div>
          </motion.div>

          {/* Secure Benefit */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                  Secure Benefit
                </h3>
                <p className="text-[10px] sm:text-xs text-[#E30613] font-bold mt-0.5">
                  2X coverage from Day 1.
                </p>
                <div className="mt-2 bg-[#FFF5F5] border border-[#FECDD3] rounded-lg p-2.5 text-xs font-semibold text-[#0F172A]">
                  <span className="text-[#E30613] block text-[9px] uppercase tracking-wider font-extrabold mb-0.5">Example:</span>
                  <p className="text-[#0F172A] text-[10px] sm:text-xs">
                    ₹20 Lakh Base Cover → <strong className="text-[#E30613] font-black">₹40 Lakh from Day 1</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#E30613]">
              <FiCheckCircle className="shrink-0" />
              <span>Instant Double Protection</span>
            </div>
          </motion.div>

          {/* Infinite Benefit */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                <FiTrendingUp className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                  Infinite Benefit
                </h3>
                <p className="text-[10px] sm:text-xs text-[#E30613] font-bold mt-0.5">
                  100% Base SI Added Every Year.
                </p>
                <div className="mt-2 bg-[#FFF5F5] border border-[#FECDD3] rounded-lg p-2.5 text-xs font-semibold text-[#0F172A]">
                  <p className="text-[#0F172A] font-mono text-[10px] sm:text-xs tracking-wide font-bold">
                    ₹20 Lakh → ₹40 Lakh → ₹60 Lakh → ₹80 Lakh → ∞
                  </p>
                  <span className="text-[9px] text-[#475569] block mt-0.5 font-medium">
                    Irrespective of claims.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#E30613]">
              <FiCheckCircle className="shrink-0" />
              <span>Guaranteed Annual SI Growth</span>
            </div>
          </motion.div>

          {/* Protect Benefit */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center shrink-0">
                <FaSyringe className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                  Protect Benefit
                </h3>
                <p className="text-[11px] sm:text-xs text-[#475569] mt-1 font-medium leading-relaxed">
                  Covers eligible non-medical expenses such as gloves, cotton, syringes, masks, PPE kits, etc.
                </p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#E30613]">
              <FiCheckCircle className="shrink-0" />
              <span>100% Non-Medical Expenses Covered</span>
            </div>
          </motion.div>

        </div>

        {/* FULL-WIDTH BOTTOM FEATURE CARD: Preventive Health Check-up */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -2 }}
          className="bg-[#FFF5F5]/60 border border-[#FECDD3] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#FFF5F5] text-[#E30613] shrink-0 border border-[#FECDD3]">
              <FiCheckSquare className="text-base sm:text-xl" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A]">
                Preventive Health Check-up
              </h3>
              <p className="text-[10px] sm:text-xs text-[#475569] font-medium mt-0.5">
                Covered every policy year for all insured members upon renewal.
              </p>
            </div>
          </div>
          <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full shrink-0">
            Annual Renewal Benefit
          </span>
        </motion.div>

      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 3 — ADDITIONAL FEATURES (COMPACT HORIZONTAL BENEFIT ROWS)         */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        <SectionHeader
          title="Additional Features"
          subtitle="Specialized peripheral benefits and emergency medical assistance."
          badgeText="Extra Safeguards"
        />

        {/* Compact Horizontal Benefit Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
          
          {/* Daily Cash For Shared Room */}
          <motion.div
            variants={cardVariants}
            whileHover={{ x: 2 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 transition-all flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] shrink-0">
                <FiDollarSign className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Daily Cash For Shared Room
                </h3>
                <p className="text-[10px] sm:text-xs text-[#475569] mt-0.5 font-medium">
                  ₹800 per day up to a maximum of ₹4,800
                </p>
              </div>
            </div>
            <FiCheckCircle className="text-[#E30613] shrink-0 text-sm sm:text-base" />
          </motion.div>

          {/* Domiciliary, Organ & AYUSH Treatment */}
          <motion.div
            variants={cardVariants}
            whileHover={{ x: 2 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 transition-all flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] shrink-0">
                <FaMedkit className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Domiciliary, Organ & AYUSH Treatment
                </h3>
                <p className="text-[10px] sm:text-xs text-[#475569] mt-0.5 font-medium">
                  Complete coverage for home treatment, organ donor costs, and alternative AYUSH therapies.
                </p>
              </div>
            </div>
            <FiCheckCircle className="text-[#E30613] shrink-0 text-sm sm:text-base" />
          </motion.div>

          {/* Road Ambulance Cover Available */}
          <motion.div
            variants={cardVariants}
            whileHover={{ x: 2 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 transition-all flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] shrink-0">
                <FaAmbulance className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Road Ambulance Cover Available
                </h3>
                <p className="text-[10px] sm:text-xs text-[#475569] mt-0.5 font-medium">
                  Emergency road transportation expenses covered up to Sum Insured limit.
                </p>
              </div>
            </div>
            <FiCheckCircle className="text-[#E30613] shrink-0 text-sm sm:text-base" />
          </motion.div>

          {/* All Day Care Treatment */}
          <motion.div
            variants={cardVariants}
            whileHover={{ x: 2 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFFFF] hover:bg-[#FFF5F5]/40 border border-[#E2E8F0] hover:border-[#E30613]/50 transition-all flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] shrink-0">
                <FiCheckCircle className="text-sm sm:text-lg" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  All Day Care Treatment
                </h3>
                <p className="text-[10px] sm:text-xs text-[#475569] mt-0.5 font-medium">
                  Less than 24 hours admission
                </p>
              </div>
            </div>
            <FiCheckCircle className="text-[#E30613] shrink-0 text-sm sm:text-base" />
          </motion.div>

        </div>

      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 4 — OPTIONAL RIDERS (ADD-ONS) (PURPOSE-BUILT MOBILE CARDS)       */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        <SectionHeader
          title="Optional Riders (Add-Ons)"
          subtitle="Customizable add-on covers for personalized policy enhancement."
          badgeText="6 Optional Riders"
        />

        {/* 3x2 Grid on Desktop | 1-Col Compact Card Stream on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
          
          {/* Rider 1: ABCD Chronic Care */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  DAY 31 COVERAGE
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiPlusCircle className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                ABCD Chronic Care
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Pre-existing Asthma, BP, Cholesterol and Diabetes covered from the 31st day.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>31st Day Chronic Cover</span>
            </div>
          </motion.div>

          {/* Rider 2: Limitless */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  LIFETIME UNLIMITED
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiZap className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                Limitless
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                One unlimited claim in a lifetime — No Sum Insured limit.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>No Sum Insured Limit</span>
            </div>
          </motion.div>

          {/* Rider 3: Optima Wellbeing */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  OUTPATIENT COVER
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiUserCheck className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                Optima Wellbeing
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Covers outpatient benefits.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>OPD Consultations & Diagnostics</span>
            </div>
          </motion.div>

          {/* Rider 4: Parenthood */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  MATERNITY COVER
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiHeart className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                Parenthood
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Covers maternity expenses.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>Delivery & Newborn Expenses</span>
            </div>
          </motion.div>

          {/* Rider 5: Hospital Cash Benefit */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  DAILY ALLOWANCE
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiDollarSign className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                Hospital Cash Benefit
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Get a daily cash amount for each completed day of hospitalisation.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>Fixed Daily Cash Allowance</span>
            </div>
          </motion.div>

          {/* Rider 6: Serious Illness Booster */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613] hover:bg-[#FFF5F5]/30 rounded-xl sm:rounded-2xl p-4 transition-all duration-150 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FFFFFF] bg-[#E30613] px-2 py-0.5 rounded">
                  2X CRITICAL BOOSTER
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#FECDD3] flex items-center justify-center">
                  <FiAward className="text-xs" />
                </div>
              </div>
              <h3 className="text-xs sm:text-base font-black text-[#0F172A] font-display">
                Serious Illness Booster
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                2X Sum Insured for listed critical illnesses.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] text-[#E30613] font-bold flex items-center gap-1">
              <FiCheckCircle className="shrink-0 text-[10px]" />
              <span>2X Critical Sum Insured</span>
            </div>
          </motion.div>

        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* MANDATORY FOOTER DISCLAIMER                                               */}
      {/* ========================================================================= */}
      <div className="text-center text-[11px] sm:text-xs text-[#475569] font-medium pt-1 pb-3">
        *T&C Apply
      </div>

    </div>
  );
}
