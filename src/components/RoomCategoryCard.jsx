import React from 'react';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiCheck,
  FiChevronRight,
  FiAlertTriangle,
  FiActivity,
  FiUsers,
  FiPlay,
  FiShield,
  FiX
} from 'react-icons/fi';
import { LuBed, LuBedDouble, LuBedSingle } from 'react-icons/lu';

/**
 * Expanded Room Category Detail Box
 * Appears directly below the Room Category box when clicked.
 * Features:
 * - Desktop: Left Main Area (~65-70% width) & Right Benefit Cards (~30-35% width)
 * - Full-width Bottom Important Warning Box
 * - Tata AIG Royal Blue accent (#0038A8)
 * - Clean close button and responsive stacking on mobile
 */
export default function RoomCategoryCard({
  item,
  primaryColor = '#0038A8',
  onClose,
  onOpenVideo,
  demoVideoUrl
}) {
  const isMatched = item?._isMatched;
  const videoUrl = item?.videoUrl || demoVideoUrl;

  const roomCategories = [
    { label: 'General Ward', icon: LuBedSingle, isHighlighted: false },
    { label: 'Shared Room', icon: LuBedDouble, isHighlighted: false },
    { label: 'Semi-Private Room', icon: LuBed, isHighlighted: false },
    { label: 'Single Private Room', icon: FiHome, isHighlighted: true }
  ];

  return (
    <div
      className={`w-full rounded-2xl sm:rounded-3xl border bg-white shadow-md p-4 sm:p-5 lg:p-6 transition-all duration-300 relative overflow-hidden text-left ${
        isMatched
          ? 'border-emerald-500 ring-2 ring-emerald-500/20'
          : 'border-[#0038A8]/35 ring-1 ring-[#0038A8]/10'
      }`}
    >
      {/* Decorative subtle ambient gradient accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0038A8]/[0.03] pointer-events-none blur-3xl -mr-20 -mt-20" />

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 items-stretch relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP / LEFT MAIN AREA (Desktop ~65-70% -> col-span-7 / col-span-8) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 flex flex-col justify-between rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-50/70 to-[#F0F4FF]/35 border border-slate-200/80 p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
          
          {/* Header Row: Rounded Square Icon + Heading + Pill Badge + Video */}
          <div className="flex items-start sm:items-center justify-between gap-2.5 sm:gap-3 flex-wrap">
            <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
              {/* Large Rounded Square Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-xs shrink-0 ring-4 ring-[#0038A8]/10">
                <FiHome className="text-lg sm:text-xl" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0F172A] font-display tracking-tight leading-snug">
                    Room Category
                  </h3>
                  
                  {/* Premium Pill / Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#0038A8]/10 text-[#0038A8] border border-[#0038A8]/20 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0038A8]" />
                    Single Private Room
                  </span>

                  {isMatched && (
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Matched
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 leading-relaxed">
                  You can choose Single Private Room with no room amount limit and no proportionate deductions.
                </p>
              </div>
            </div>

            {/* Controls: Video & Close button */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {onOpenVideo && (
                <button
                  type="button"
                  onClick={() => onOpenVideo('Room Category', videoUrl)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-white text-[#0038A8] border border-[#0038A8]/30 hover:bg-[#0038A8] hover:text-white transition-all cursor-pointer shadow-2xs group shrink-0"
                >
                  <FiPlay className="text-[9px] sm:text-[10px] fill-current text-[#0038A8] group-hover:text-white transition-colors" />
                  <span>Video</span>
                </button>
              )}

              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  title="Close expanded view"
                >
                  <FiX className="text-xs sm:text-sm stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>

          {/* YOU CAN CHOOSE FROM AREA */}
          <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 p-3 sm:p-4 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                You can choose from:
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#0038A8] bg-[#F0F4FF] px-2 py-0.5 rounded-md">
                100% Cashless Eligible
              </span>
            </div>

            {/* Horizontal Room Categories Progression */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 items-stretch">
              {roomCategories.map((cat, cIdx) => {
                const CatIcon = cat.icon;
                return (
                  <div
                    key={cIdx}
                    className={`relative rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center transition-all duration-200 border select-none ${
                      cat.isHighlighted
                        ? 'bg-gradient-to-b from-[#F0F4FF] to-white border-[#0038A8] ring-2 ring-[#0038A8]/20 shadow-xs scale-[1.02]'
                        : 'bg-slate-50/70 hover:bg-slate-100/70 border-slate-200/80 text-slate-700'
                    }`}
                  >
                    {/* Selected Active Ribbon */}
                    {cat.isHighlighted && (
                      <span className="absolute -top-2.5 bg-[#0038A8] text-white text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.2 rounded-full tracking-wider shadow-2xs">
                        Included
                      </span>
                    )}

                    {/* Circular Icon Container */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mb-1.5 transition-colors ${
                        cat.isHighlighted
                          ? 'bg-[#0038A8] text-white shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-500'
                      }`}
                    >
                      <CatIcon className="text-sm sm:text-base" />
                    </div>

                    {/* Category Label */}
                    <span
                      className={`text-[11px] sm:text-xs font-bold leading-tight font-display ${
                        cat.isHighlighted ? 'text-[#0038A8]' : 'text-slate-700'
                      }`}
                    >
                      {cat.label}
                    </span>

                    {/* Chevron Arrow on Desktop (except last item) */}
                    {cIdx < roomCategories.length - 1 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                        <FiChevronRight className="text-xs" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ROOM CATEGORY CONDITION */}
          <div className="rounded-xl bg-[#F0F4FF] border border-[#0038A8]/20 p-2.5 sm:p-3 flex items-start sm:items-center gap-2 sm:gap-2.5 text-[#0038A8] shadow-2xs">
            <div className="w-5 h-5 rounded-full bg-[#0038A8] text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <FiCheck className="text-xs stroke-[3]" />
            </div>
            <p className="text-[11px] sm:text-xs font-semibold leading-relaxed text-slate-800">
              <strong className="text-[#0038A8] font-bold">Zero Deductions: </strong>
              No proportionate deduction applies when you choose a room up to Single Private Room, across network hospitals.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE BENEFIT CARDS (Desktop ~30-35% -> col-span-4) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-3.5 justify-between">
          
          {/* RIGHT SIDE CARD 1: Soft green/teal No ICU Limit Card */}
          <div className="flex-1 rounded-xl sm:rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-3.5 sm:p-4.5 flex flex-col justify-between shadow-2xs transition-all duration-200 hover:border-emerald-400/80 hover:shadow-xs">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-2xs shrink-0">
                  <FiActivity className="text-sm sm:text-base stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-700 block font-display">
                    ICU Coverage
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-emerald-950 font-display leading-tight">
                    No ICU Limit
                  </h4>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-emerald-900/85 font-medium leading-relaxed">
                You can get ICU room accommodation without any separate monetary limit, subject to policy terms and conditions.
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[10px] font-bold text-emerald-700">
              <span className="inline-flex items-center gap-1">
                <FiShield className="text-xs" /> Covered at 100%
              </span>
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-200/60 text-emerald-900 font-extrabold">
                No Sub-limits
              </span>
            </div>
          </div>

          {/* RIGHT SIDE CARD 2: Soft purple Shared Room Option Card */}
          <div className="flex-1 rounded-xl sm:rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] p-3.5 sm:p-4.5 flex flex-col justify-between shadow-2xs transition-all duration-200 hover:border-purple-400/80 hover:shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shadow-2xs shrink-0">
                    <FiUsers className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-700 block font-display">
                      Cost Optimization
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-purple-950 font-display leading-tight">
                      Shared Room Option
                    </h4>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-purple-200/80 text-purple-900 border border-purple-300/80 shrink-0">
                  Lower Premium
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-purple-900/85 font-medium leading-relaxed">
                Choose a shared room instead of a Single Private Room and get a lower premium.
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-purple-200/60 flex items-center justify-between text-[10px] font-bold text-purple-700">
              <span>Optional Preference</span>
              <span className="text-purple-900 font-extrabold">Save on Premium</span>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM IMPORTANT INFORMATION (Full Width across section) */}
      {/* ========================================================================= */}
      <div className="w-full mt-3.5 sm:mt-4 rounded-xl sm:rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] p-3.5 sm:p-4 text-left shadow-2xs relative overflow-hidden">
        <div className="flex items-start gap-2.5 sm:gap-3">
          {/* Warning Icon Container */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            <FiAlertTriangle className="text-xs sm:text-sm stroke-[2.5]" />
          </div>

          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-rose-950 font-display">
                Important
              </h4>
              <span className="text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-rose-200/80 text-rose-900">
                Policy Clause
              </span>
            </div>

            <div className="text-[11px] sm:text-xs text-rose-950 font-medium leading-relaxed space-y-1">
              <p>
                If you choose any room above Single Private Room, such as Deluxe, Super Deluxe or Suite, proportionate deduction will apply.
              </p>
              <p className="text-rose-900/90 font-semibold">
                This means you may have to bear part of the hospital bill even if the treatment is otherwise covered under your cashless policy.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
