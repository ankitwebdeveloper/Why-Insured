import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
 * Premium Room Category Detail Modal Popup for Tata AIG MediCare Select
 * Features:
 * - Subtle, premium, non-flashy opening animation sequence
 * - Continuous, slow (3s) soft breathing/glow loop on:
 *   1. "Single Private Room" badge & selected category card
 *   2. "No Proportionate Deduction" condition strip & check icon
 *   3. "Important" warning box subtle breathing
 * - High visual hierarchy: Secondary cards remain calm and clean
 * - Respects prefers-reduced-motion for optimal accessibility
 */
export default function RoomCategoryModal({
  isOpen,
  onClose,
  item,
  primaryColor = '#0038A8',
  onOpenVideo,
  demoVideoUrl
}) {
  const shouldReduceMotion = useReducedMotion();

  // Handle escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isMatched = item?._isMatched;
  const videoUrl = item?.videoUrl || demoVideoUrl;

  const roomCategories = [
    { label: 'General Ward', icon: LuBedSingle, isHighlighted: false },
    { label: 'Shared Room', icon: LuBedDouble, isHighlighted: false },
    { label: 'Semi-Private Room', icon: LuBed, isHighlighted: false },
    { label: 'Single Private Room', icon: FiHome, isHighlighted: true }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6">
        {/* 1. Backdrop overlay smoothly fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
        />

        {/* 2. Centered Premium Detail Popup Box */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-2xl w-[calc(100%-16px)] max-w-4xl lg:max-w-5xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Section Header & Close Button */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0038A8] shadow-xs" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0F172A] font-display">
                ROOM CATEGORY &bull; BENEFIT DETAIL
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {onOpenVideo && (
                <button
                  type="button"
                  onClick={() => onOpenVideo('Room Category', videoUrl)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-[#F0F4FF] text-[#0038A8] border border-[#0038A8]/25 hover:bg-[#0038A8] hover:text-white transition-all cursor-pointer shadow-2xs group"
                >
                  <FiPlay className="text-[9px] fill-current text-[#0038A8] group-hover:text-white transition-colors" />
                  <span>Video</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <FiX className="text-sm sm:text-base stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-4 sm:p-6 lg:p-7 overflow-y-auto space-y-3.5 sm:space-y-4">
            
            {/* Main 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
              
              {/* ========================================================================= */}
              {/* TOP / LEFT MAIN AREA (Desktop ~65-70% -> col-span-7 / col-span-8) */}
              {/* ========================================================================= */}
              <div className="lg:col-span-8 flex flex-col justify-between rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-50/80 to-[#F0F4FF]/40 border border-slate-200/80 p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
                
                {/* Header Row: Rounded Square Icon + Heading + Pill Badge */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                  {/* Large Rounded Square Icon Container */}
                  <motion.div
                    initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                    animate={shouldReduceMotion ? false : { scale: 1, opacity: 1 }}
                    transition={{ delay: 0.08, duration: 0.3, ease: 'easeOut' }}
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-xs shrink-0 ring-4 ring-[#0038A8]/10"
                  >
                    <FiHome className="text-lg sm:text-2xl" />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0F172A] font-display tracking-tight leading-snug">
                        Room Category
                      </h3>
                      
                      {/* FOCUS 1: Single Private Room Pill Badge with Continuous Soft Breathing Glow */}
                      <motion.span
                        initial={shouldReduceMotion ? false : { scale: 0.92, opacity: 0 }}
                        animate={shouldReduceMotion ? false : {
                          opacity: 1,
                          scale: [1, 1.03, 1],
                          boxShadow: [
                            '0 0 0px rgba(0,56,168,0.1)',
                            '0 0 12px rgba(0,56,168,0.32)',
                            '0 0 0px rgba(0,56,168,0.1)'
                          ]
                        }}
                        transition={{
                          opacity: { delay: 0.12, duration: 0.3 },
                          scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                          boxShadow: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#0038A8]/10 text-[#0038A8] border border-[#0038A8]/30 shadow-xs ring-1 ring-[#0038A8]/20"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0038A8]" />
                        Single Private Room
                      </motion.span>

                      {isMatched && (
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                          Matched
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1 leading-relaxed">
                      <strong className="text-slate-900 font-bold">Features specific room choices as outlined in the policy terms.</strong>
                    </p>

                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-[13px] text-slate-600 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0038A8] font-bold text-sm shrink-0 leading-tight mt-0.5">•</span>
                        <span>
                          <strong className="text-slate-900 font-bold">Single Private Room</strong> — A private room for one patient.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0038A8] font-bold text-sm shrink-0 leading-tight mt-0.5">•</span>
                        <span>
                          <strong className="text-slate-900 font-bold">No Room Rent Limit</strong> — No fixed limit on the room rent.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0038A8] font-bold text-sm shrink-0 leading-tight mt-0.5">•</span>
                        <span>
                          <strong className="text-slate-900 font-bold">No Extra Deduction</strong> — No extra amount is cut from your eligible hospital bill because of the room.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CASHLESS TREATMENT / ROOM PROGRESSION AREA */}
                <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                      Cashless Treatment
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#0038A8] bg-[#F0F4FF] px-2 py-0.5 rounded-md">
                      100% Cashless Eligible
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                    At a network hospital, approved treatment can be paid directly by the insurance company to the hospital.
                  </p>

                  {/* Horizontal Room Categories Progression */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 items-stretch pt-0.5">
                    {roomCategories.map((cat, cIdx) => {
                      const CatIcon = cat.icon;
                      return (
                        <motion.div
                          key={cIdx}
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                          animate={shouldReduceMotion ? false : {
                            opacity: 1,
                            y: 0,
                            boxShadow: cat.isHighlighted ? [
                              '0 1px 3px rgba(0,56,168,0.1)',
                              '0 4px 14px rgba(0,56,168,0.22)',
                              '0 1px 3px rgba(0,56,168,0.1)'
                            ] : undefined
                          }}
                          transition={{
                            opacity: { delay: 0.12 + cIdx * 0.04, duration: 0.32, ease: 'easeOut' },
                            y: { delay: 0.12 + cIdx * 0.04, duration: 0.32, ease: 'easeOut' },
                            boxShadow: cat.isHighlighted ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : undefined
                          }}
                          className={`relative rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center transition-all duration-200 border select-none ${
                            cat.isHighlighted
                              ? 'bg-gradient-to-b from-[#F0F4FF] to-white border-[#0038A8] ring-2 ring-[#0038A8]/25 shadow-xs scale-[1.02]'
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
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* FOCUS 2: NO ROOM DEDUCTION CONDITION STRIP with Continuous Subtle Breathing Glow */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? false : {
                    opacity: 1,
                    y: 0,
                    borderColor: [
                      'rgba(0,56,168,0.25)',
                      'rgba(0,56,168,0.5)',
                      'rgba(0,56,168,0.25)'
                    ],
                    boxShadow: [
                      '0 1px 2px rgba(0,56,168,0.05)',
                      '0 2px 10px rgba(0,56,168,0.18)',
                      '0 1px 2px rgba(0,56,168,0.05)'
                    ]
                  }}
                  transition={{
                    opacity: { delay: 0.2, duration: 0.32, ease: 'easeOut' },
                    y: { delay: 0.2, duration: 0.32, ease: 'easeOut' },
                    borderColor: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                    boxShadow: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="rounded-xl bg-[#F0F4FF] border border-[#0038A8]/25 p-2.5 sm:p-3 flex items-start sm:items-center gap-2 sm:gap-2.5 text-[#0038A8] shadow-2xs ring-1 ring-[#0038A8]/10"
                >
                  <motion.div
                    animate={shouldReduceMotion ? false : {
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        '0 1px 2px rgba(0,56,168,0.2)',
                        '0 0 8px rgba(0,56,168,0.45)',
                        '0 1px 2px rgba(0,56,168,0.2)'
                      ]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="w-5 h-5 rounded-full bg-[#0038A8] text-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-xs"
                  >
                    <FiCheck className="text-xs stroke-[3]" />
                  </motion.div>
                  <p className="text-[11px] sm:text-xs font-semibold leading-relaxed text-slate-800">
                    <strong className="text-[#0038A8] font-bold">No Proportionate Deduction: </strong>
                    If you choose a <strong className="text-[#0038A8] font-bold">Single Private Room or a lower room</strong>, your eligible hospital bill is not reduced because of the room you chose.
                  </p>
                </motion.div>

              </div>

              {/* ========================================================================= */}
              {/* RIGHT SIDE BENEFIT CARDS (Desktop ~30-35% -> col-span-4) */}
              {/* ========================================================================= */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-3.5 justify-between">
                
                {/* RIGHT SIDE CARD 1: Soft green/teal No ICU Limit Card */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.32, ease: 'easeOut' }}
                  className="flex-1 rounded-xl sm:rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-3.5 sm:p-4.5 flex flex-col justify-between shadow-2xs transition-all duration-200 hover:border-emerald-400/80 hover:shadow-xs ring-1 ring-emerald-500/10"
                >
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
                      <strong className="text-emerald-950 font-bold">No fixed limit on ICU room charges</strong>, as per the policy rules.
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[10px] font-bold text-emerald-700">
                    <span className="inline-flex items-center gap-1">
                      <FiShield className="text-xs" /> 100% Covered
                    </span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-200/60 text-emerald-900 font-extrabold">
                      No Separate ICU Limit
                    </span>
                  </div>
                </motion.div>

                {/* RIGHT SIDE CARD 2: Soft purple Shared Room Option Card */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.32, ease: 'easeOut' }}
                  className="flex-1 rounded-xl sm:rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] p-3.5 sm:p-4.5 flex flex-col justify-between shadow-2xs transition-all duration-200 hover:border-purple-400/80 hover:shadow-xs ring-1 ring-purple-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shadow-2xs shrink-0">
                          <FiUsers className="text-sm sm:text-base" />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-700 block font-display">
                            Save on Premium
                          </span>
                          <h4 className="text-xs sm:text-sm font-black text-purple-950 font-display leading-tight">
                            Shared Room Option
                          </h4>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-purple-200/80 text-purple-900 border border-purple-300/80 shrink-0 shadow-2xs">
                        Lower Premium
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-purple-900/85 font-medium leading-relaxed">
                      You can choose a <strong className="text-purple-950 font-bold">Shared Room</strong> if you want a lower premium.
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-purple-200/60 flex items-center justify-between text-[10px] font-bold text-purple-700">
                    <span>Shared Room</span>
                    <span className="text-purple-900 font-extrabold">&rarr; Lower Premium</span>
                  </div>
                </motion.div>

              </div>

            </div>

            {/* ========================================================================= */}
            {/* FOCUS 3: BOTTOM IMPORTANT WARNING with Gentle Continuous Breathing Border */}
            {/* ========================================================================= */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? false : {
                opacity: 1,
                y: 0,
                borderColor: [
                  'rgba(254,205,211,0.9)',
                  'rgba(244,63,94,0.4)',
                  'rgba(254,205,211,0.9)'
                ],
                boxShadow: [
                  '0 1px 2px rgba(225,29,72,0.04)',
                  '0 2px 10px rgba(225,29,72,0.12)',
                  '0 1px 2px rgba(225,29,72,0.04)'
                ]
              }}
              transition={{
                opacity: { delay: 0.32, duration: 0.32, ease: 'easeOut' },
                y: { delay: 0.32, duration: 0.32, ease: 'easeOut' },
                borderColor: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
                boxShadow: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="w-full rounded-xl sm:rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] p-3.5 sm:p-4 text-left shadow-2xs relative overflow-hidden ring-1 ring-rose-500/10"
            >
              <div className="flex items-start gap-2.5 sm:gap-3">
                {/* Warning Icon Container */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <FiAlertTriangle className="text-xs sm:text-sm stroke-[2.5]" />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-rose-950 font-display">
                      Important
                    </h4>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-rose-200/80 text-rose-900">
                      Choosing a Higher Room
                    </span>
                  </div>

                  <div className="text-[11px] sm:text-xs text-rose-950 font-medium leading-relaxed space-y-1">
                    <p>
                      If you choose a room <strong className="text-rose-950 font-bold">more expensive than a Single Private Room</strong>, such as Deluxe, Super Deluxe or Suite, you may have to pay some extra amount.
                    </p>
                    <p className="text-rose-900 font-bold">
                      In simple words: A more expensive room can increase the amount you pay from your own pocket.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Modal Footer */}
          <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Tata AIG MediCare Select &bull; Policy Terms & Conditions Apply
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1.5 sm:py-2 rounded-xl bg-[#0038A8] text-white text-xs font-bold hover:bg-[#002670] transition-colors shadow-2xs cursor-pointer select-none"
            >
              Got It
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
