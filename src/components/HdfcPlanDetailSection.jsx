import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX, FiCheck, FiArrowRight } from 'react-icons/fi';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

export default function HdfcPlanDetailSection({ plan, company }) {
  const [activeModal, setActiveModal] = useState(null);
  const location = useLocation();
  const isFeaturesPage = location.pathname.endsWith('/features');

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const { logo, name } = company;

  // Key ratios for HDFC ERGO
  const settlementRatio = getCompanyRatioValue('hdfc-ergo', 'settlement');
  const incurredRatio = getCompanyRatioValue('hdfc-ergo', 'incurred');
  const solvencyRatio = getCompanyRatioValue('hdfc-ergo', 'solvency');
  const complaintRatio = getCompanyRatioValue('hdfc-ergo', 'complaint');

  // =========================================================================
  // DEDICATED FEATURES PAGE (SINGLE VIEWPORT — MOBILE & DESKTOP PERFECT)
  // Desktop remains 100% identical. Mobile optimized for 320px–430px single viewport.
  // =========================================================================
  if (isFeaturesPage) {
    return (
      <div className="w-full">
        {/* Single Viewport Container - Compact Mobile Packing & Unchanged Desktop Layout */}
        <div className="max-w-3xl mx-auto flex flex-col justify-start sm:justify-center items-stretch sm:min-h-[calc(100vh-220px)] py-1 sm:py-4 space-y-0 sm:space-y-6">
          {/* Navigation Breadcrumb - Back to Plan (12-16px gap to Logo) */}
          <div className="shrink-0 text-left mb-3.5 sm:mb-0">
            <Link
              to={`/insurance/${company.id}/${plan.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to {plan.name}</span><span className="sm:hidden">Back to Plan</span>
            </Link>
          </div>

          {/* 1. HDFC ERGO LOGO (8-12px gap to Heading) */}
          <div className="flex flex-col items-center justify-center shrink-0 mb-2.5 sm:mb-0">
            <img
              src={logo}
              alt={name}
              className="w-24 sm:w-48 h-auto max-h-9 sm:max-h-20 object-contain select-none"
            />
          </div>

          {/* 2. HEADING (12-16px gap to Feature Cards) */}
          <div className="text-center shrink-0 mb-3.5 sm:mb-0">
            <h1 className="text-sm sm:text-2xl font-black text-slate-900 tracking-tight font-display">
              {plan.name} — Features
            </h1>
            <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#E30613] mx-auto mt-1 sm:mt-1.5 rounded-full" />
          </div>

          {/* 3. 2-COLUMN FEATURE GRID (8-12px gap between rows) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
            {/* Feature 1: Cashless */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/40 group-hover:bg-[#E30613] transition-colors duration-200" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block mb-0.5 sm:mb-1">
                  01 • Cashless
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] font-display leading-tight">
                  100% Cashless Policy
                </h3>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-snug">
                Zero out-of-pocket at 12,000+ network hospitals.
              </p>
            </div>

            {/* Feature 2: Room Rent */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/40 group-hover:bg-[#E30613] transition-colors duration-200" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block mb-0.5 sm:mb-1">
                  02 • Room Category
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] font-display leading-tight">
                  Room Rent Category
                </h3>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-snug truncate">
                {plan.details.roomRent}
              </p>
            </div>

            {/* Feature 3: Restoration */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/40 group-hover:bg-[#E30613] transition-colors duration-200" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block mb-0.5 sm:mb-1">
                  03 • Restoration
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] font-display leading-tight">
                  Restoration & Bonus
                </h3>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-snug truncate">
                {plan.details.noClaimBonus || "Unlimited Restoration"}
              </p>
            </div>

            {/* Feature 4: Pre & Post Hosp */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex flex-col justify-between shadow-2xs relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/40 group-hover:bg-[#E30613] transition-colors duration-200" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block mb-0.5 sm:mb-1">
                  04 • Hosp. Care
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] font-display leading-tight">
                  Pre & Post Hosp.
                </h3>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-snug truncate">
                {plan.details.prePostHospital}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN HDFC ERGO PLAN DETAIL PAGE (SINGLE VIEWPORT — MOBILE & DESKTOP PERFECT)
  // Desktop remains 100% identical. Mobile optimized for 320px–430px single viewport.
  // =========================================================================
  return (
    <div className="w-full">
      {/* Single Viewport Container - Compact Mobile Packing & Unchanged Desktop Layout */}
      <div className="max-w-3xl mx-auto flex flex-col justify-start sm:justify-center items-stretch sm:min-h-[calc(100vh-220px)] py-1 sm:py-4 space-y-0 sm:space-y-6">
        {/* Navigation Breadcrumb - Back to Plans (12-16px gap to Logo) */}
        <div className="shrink-0 text-left mb-3.5 sm:mb-0">
          <Link
            to={`/insurance/${company.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to HDFC ERGO Plans</span><span className="sm:hidden">Back to Plans</span>
          </Link>
        </div>

        {/* 1. HDFC ERGO LOGO (8-12px gap to Plan Name) */}
        <div className="flex flex-col items-center justify-center shrink-0 mb-2.5 sm:mb-0">
          <img
            src={logo}
            alt={name}
            className="w-24 sm:w-48 h-auto max-h-9 sm:max-h-20 object-contain select-none"
          />
        </div>

        {/* 2. PLAN NAME HEADING (12-16px gap to 4 Buttons) */}
        <div className="text-center shrink-0 mb-3.5 sm:mb-0">
          <h1 className="text-sm sm:text-2xl font-black text-slate-900 tracking-tight font-display">
            {plan.name}
          </h1>
          <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#E30613] mx-auto mt-1 sm:mt-1.5 rounded-full" />
        </div>

        {/* 3. 2-COLUMN BUTTON GRID (8-12px gap between rows) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
          {/* Card 1: Ratio (Marksheet) */}
          <button
            onClick={() => setActiveModal('ratio')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#E30613]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/30 group-hover:bg-[#E30613] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#E30613] transition-colors duration-200 font-display leading-tight pr-1">
              Ratio (Marksheet)
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#E30613] group-hover:bg-[#FFF5F5] group-hover:border-[#E30613]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Fundamental / Family Background */}
          <button
            onClick={() => setActiveModal('fundamental')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#E30613]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/30 group-hover:bg-[#E30613] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#E30613] transition-colors duration-200 font-display leading-tight pr-1">
              Fundamental / Family Background
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#E30613] group-hover:bg-[#FFF5F5] group-hover:border-[#E30613]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Features */}
          <Link
            to={`/insurance/hdfc-ergo/${plan.id}/features`}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#E30613]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/30 group-hover:bg-[#E30613] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#E30613] transition-colors duration-200 font-display leading-tight pr-1">
              Features
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#E30613] group-hover:bg-[#FFF5F5] group-hover:border-[#E30613]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* Card 4: Condition */}
          <button
            onClick={() => setActiveModal('condition')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#E30613]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E30613]/30 group-hover:bg-[#E30613] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#E30613] transition-colors duration-200 font-display leading-tight pr-1">
              Condition
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#E30613] group-hover:bg-[#FFF5F5] group-hover:border-[#E30613]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL OVERLAYS (RATIO, FUNDAMENTAL, CONDITION)                            */}
      {/* Fits inside 1 mobile viewport with internal scroll if content is long    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-2xl w-[calc(100%-20px)] max-w-lg overflow-hidden z-10 p-4 sm:p-8 max-h-[88dvh] sm:max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <FiX className="text-base sm:text-lg" />
              </button>

              {/* MODAL 1: RATIO (MARKSHEET) */}
              {activeModal === 'ratio' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block">
                      HDFC ERGO Performance
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      RATIO (MARKSHEET)
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Official claim settlement and financial strength metrics.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-[#FFF5F5] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#E30613]/20 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Claim Settlement Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Verified IRDAI Report</span>
                      </div>
                      <span className="text-base sm:text-lg font-black text-[#E30613]">{settlementRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Incurred Claim Ratio (ICR)</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Claims Paid vs Premium</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{incurredRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Solvency Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">IRDAI Requirement: 1.50</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{solvencyRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Complaints Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Per 10,000 Claims</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{complaintRatio}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 2: FUNDAMENTAL / FAMILY BACKGROUND */}
              {activeModal === 'fundamental' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block">
                      Core Policy Details
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      FUNDAMENTAL / FAMILY BACKGROUND
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Eligibility criteria and essential plan architecture.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Eligibility Criteria
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.eligibility}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Cashless Network Size
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        12,000+ Cashless Hospitals across India
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Claim Support System
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        24/7 Dedicated Cashless Support with Direct Desk Assistance
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Ambulance Cover
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {getDerivedValue(plan, company, 'ambulance')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 3: CONDITION */}
              {activeModal === 'condition' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613] block">
                      Terms & Exclusions
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      CONDITION
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Waiting periods, room rent restrictions, and exclusions.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Initial Waiting Period
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {getDerivedValue(plan, company, 'initialWaitingPeriod')}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Pre-Existing Diseases Waiting
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.waitingPeriod}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E30613]">
                        Room Rent & ICU Capping
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.roomRent}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-rose-50/60 rounded-xl sm:rounded-2xl border border-rose-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-rose-600">
                        Important Policy Exclusions
                      </span>
                      <p className="text-xs font-semibold text-rose-900 leading-relaxed">
                        {plan.details.exclusions}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
