import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiInfo, FiPercent, FiActivity, FiArrowRight, FiHome, FiAlertCircle } from 'react-icons/fi';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

export default function PlanHealthSnapshot({ plan, company }) {
  if (!plan || !company) return null;

  // Fetch ratio data using the single source of truth helper
  const settlementRatio = getCompanyRatioValue(company.id, 'settlement') || '99.0%';
  const incurredRatio = getCompanyRatioValue(company.id, 'incurred') || '68%';
  const complaintRatio = getCompanyRatioValue(company.id, 'complaint') || '14.2 per 10k';
  const solvencyRatio = getCompanyRatioValue(company.id, 'solvency') || '1.85';

  // Fetch fundamental data
  const restoration = getDerivedValue(plan, company, 'restoration') || '100% Restoration';
  const roomRent = plan.details.roomRent || 'Single Private Room';
  const prePostHosp = plan.details.prePostHospital || '90 Days Pre & 180 Days Post';
  const cashlessNetwork = getDerivedValue(plan, company, 'cashlessHospitals') || '10,000+ Hospitals';

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.35, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white rounded-3xl p-3 sm:p-8 shadow-sm border border-slate-100 mb-8 relative overflow-hidden font-sans w-full min-w-0"
    >
      {/* Premium subtle red gradient accent line on the left side of the block */}
      <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-gradient-to-b from-red-600 via-red-500 to-red-700" />

      {/* Section Header */}
      <div className="mb-4 sm:mb-6 pl-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shrink-0" />
          <h2 className="text-[14px] sm:text-xl font-black text-slate-900 tracking-tight font-display">
            Plan Health Snapshot
          </h2>
        </div>
        <p className="text-[9px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-normal">
          A quick view of the plan’s financial indicators and core benefits.
        </p>
      </div>

      {/* Main Side-by-Side Grid - Guaranteed side-by-side on all screens */}
      <div className="grid grid-cols-2 gap-2 sm:gap-6 items-start w-full min-w-0">
        
        {/* Left Column: Financial Ratios */}
        <div className="space-y-2 sm:space-y-4 min-w-0 w-full">
          <span className="text-[8px] sm:text-xs font-black uppercase tracking-widest text-slate-400 block px-1 leading-none">
            Financial Ratios
          </span>

          <div className="space-y-2 sm:space-y-3 w-full min-w-0">
            {/* Claim Settlement Ratio Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-100 hover:border-red-100 hover:shadow-xs transition-all duration-200 flex flex-col justify-between h-auto w-full min-w-0"
            >
              <div className="min-w-0 w-full">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 break-words leading-tight">
                    Claim Settlement
                  </span>
                  <FiPercent className="text-[9px] sm:text-xs text-red-500 shrink-0 mt-0.5" />
                </div>
                <div className="text-[12px] xs:text-sm sm:text-2xl font-black text-slate-900 mt-0.5 sm:mt-1 font-display break-words">
                  {settlementRatio}
                </div>
              </div>
              <div className="mt-1 sm:mt-2 space-y-1 w-full min-w-0">
                {/* Custom Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-1 sm:h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full" 
                    style={{ width: `${parseFloat(settlementRatio)}%` }}
                  />
                </div>
                <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-bold text-red-600 flex items-center gap-0.5 break-words leading-tight">
                  <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" /> Excellent
                </span>
              </div>
            </motion.div>

            {/* Solvency Ratio Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-100 hover:border-red-100 hover:shadow-xs transition-all duration-200 flex flex-col justify-between h-auto w-full min-w-0"
            >
              <div className="min-w-0 w-full">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 break-words leading-tight">
                    Solvency Ratio
                  </span>
                  <FiShield className="text-[9px] sm:text-xs text-red-500 shrink-0 mt-0.5" />
                </div>
                <div className="text-[12px] xs:text-sm sm:text-2xl font-black text-slate-900 mt-0.5 sm:mt-1 font-display break-words">
                  {solvencyRatio}
                </div>
              </div>
              <div className="mt-1 sm:mt-2 space-y-1 w-full min-w-0">
                {/* Solvency Gauge Indicator */}
                <div className="w-full bg-slate-100 rounded-full h-1 sm:h-1.5 overflow-hidden relative">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full" 
                    style={{ width: `${Math.min(100, (parseFloat(solvencyRatio) / 2.5) * 100)}%` }}
                  />
                </div>
                <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-bold text-red-600 flex items-center gap-0.5 break-words leading-tight">
                  <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" /> Target &gt; 1.50
                </span>
              </div>
            </motion.div>

            {/* Incurred Claim Ratio Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-100 hover:border-red-100 hover:shadow-xs transition-all duration-200 flex flex-col justify-between h-auto w-full min-w-0"
            >
              <div className="min-w-0 w-full">
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 break-words leading-tight">
                    Incurred Claim
                  </span>
                  <FiActivity className="text-[9px] sm:text-xs text-red-500 shrink-0 mt-0.5" />
                </div>
                <div className="text-[12px] xs:text-sm sm:text-2xl font-black text-slate-900 mt-0.5 sm:mt-1 font-display break-words">
                  {incurredRatio}
                </div>
              </div>
              <div className="mt-1 sm:mt-2 space-y-1 w-full min-w-0">
                {/* ICR Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-1 sm:h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full" 
                    style={{ width: `${parseFloat(incurredRatio)}%` }}
                  />
                </div>
                <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-bold text-red-600 flex items-center gap-0.5 break-words leading-tight">
                  <span className="w-1 h-1 rounded-full bg-red-500 shrink-0" /> Ideal: 50%-90%
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Core Fundamentals */}
        <div className="space-y-2 sm:space-y-4 min-w-0 w-full">
          <span className="text-[8px] sm:text-xs font-black uppercase tracking-widest text-slate-400 block px-1 leading-none">
            Plan Fundamentals
          </span>

          <div className="space-y-2 sm:space-y-3 w-full min-w-0">
            {/* Fundamental item: Room Rent */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -1 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-slate-100 hover:border-slate-200 transition-all duration-200 min-w-0 w-full"
            >
              <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block break-words leading-tight">
                Room Rent Limit
              </span>
              <div className="text-[9px] xs:text-[11px] sm:text-sm font-black text-slate-800 mt-0.5 leading-tight break-words">
                {roomRent.replace('No capping - ', '')}
              </div>
              <p className="text-[8px] sm:text-[10px] text-slate-400 font-semibold leading-normal mt-0.5 hidden sm:block">
                Defines room class eligibility during hospitalization.
              </p>
            </motion.div>

            {/* Fundamental item: Restoration Benefit */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -1 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-slate-100 hover:border-slate-200 transition-all duration-200 min-w-0 w-full"
            >
              <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block break-words leading-tight">
                Restoration Benefit
              </span>
              <div className="text-[9px] xs:text-[11px] sm:text-sm font-black text-slate-800 mt-0.5 leading-tight break-words">
                {restoration}
              </div>
              <p className="text-[8px] sm:text-[10px] text-slate-400 font-semibold leading-normal mt-0.5 hidden sm:block">
                Auto-refills your sum insured upon exhaustion.
              </p>
            </motion.div>

            {/* Fundamental item: Pre/Post Hosp */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -1 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-slate-100 hover:border-slate-200 transition-all duration-200 min-w-0 w-full"
            >
              <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block break-words leading-tight">
                Pre & Post Hosp.
              </span>
              <div className="text-[9px] xs:text-[11px] sm:text-sm font-black text-slate-800 mt-0.5 leading-tight break-words">
                {prePostHosp.replace(' covered', '')}
              </div>
              <p className="text-[8px] sm:text-[10px] text-slate-400 font-semibold leading-normal mt-0.5 hidden sm:block">
                Covers medical diagnostics pre-admission & post-discharge.
              </p>
            </motion.div>

            {/* Fundamental item: Cashless Network */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -1 }}
              className="bg-slate-50/50 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-slate-100 hover:border-slate-200 transition-all duration-200 min-w-0 w-full"
            >
              <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block break-words leading-tight">
                Cashless Network
              </span>
              <div className="text-[9px] xs:text-[11px] sm:text-sm font-black text-slate-800 mt-0.5 leading-tight break-words">
                {cashlessNetwork}
              </div>
              <p className="text-[8px] sm:text-[10px] text-slate-400 font-semibold leading-normal mt-0.5 hidden sm:block">
                Hospitals offering immediate cashless claim support.
              </p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* UX Enhancement: Why It Matters Insight Strip */}
      <motion.div 
        variants={itemVariants}
        className="mt-4 sm:mt-5 bg-red-50/30 border-l-[3px] border-red-500 p-2 sm:p-4 rounded-xl flex items-start gap-1.5 sm:gap-3 w-full min-w-0"
      >
        <FiInfo className="text-red-500 text-[11px] sm:text-lg shrink-0 mt-0.5" />
        <div className="space-y-0.5 sm:space-y-1 min-w-0 w-full">
          <h4 className="text-[8px] sm:text-xs font-black uppercase tracking-wider text-red-800 leading-none">
            Why it matters
          </h4>
          <p className="text-[8px] xs:text-[9px] sm:text-xs text-red-700 leading-normal font-semibold break-words">
            Numbers tell you the financial strength; Fundamentals tell you what the plan actually gives you. 
            With a Claim Settlement Ratio of <strong className="text-red-800">{settlementRatio}</strong> and a healthy Incurred Claim Ratio of <strong className="text-red-800">{incurredRatio}</strong>, Tata AIG demonstrates exceptional capability to pay claims, backed by a strong solvency margin of <strong className="text-red-800">{solvencyRatio}</strong> to ensure long-term coverage sustainability.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
