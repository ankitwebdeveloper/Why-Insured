import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  FiPlay,
  FiShield,
  FiX,
  FiCreditCard,
  FiCalendar,
  FiActivity,
  FiRefreshCw,
  FiTrendingUp,
  FiHeart,
  FiAward,
  FiHome,
  FiTruck,
  FiDollarSign,
  FiUsers,
  FiClipboard,
  FiZap,
  FiSmile,
  FiGlobe,
  FiClock,
  FiCheckSquare,
  FiCheck,
  FiInfo,
  FiAlertCircle
} from 'react-icons/fi';
import { LuHospital } from 'react-icons/lu';

// Comprehensive Icon Dictionary
const ICON_MAP = {
  credit: FiCreditCard,
  calendar: FiCalendar,
  activity: FiActivity,
  refresh: FiRefreshCw,
  trending: FiTrendingUp,
  shield: FiShield,
  heart: FiHeart,
  award: FiAward,
  home: FiHome,
  truck: FiTruck,
  dollar: FiDollarSign,
  users: FiUsers,
  clipboard: FiClipboard,
  zap: FiZap,
  smile: FiSmile,
  globe: FiGlobe,
  clock: FiClock,
  check: FiCheckSquare,
  hospital: LuHospital
};

// Curated Soft Card Color Themes for Benefit Points (Matching 100% Cashless Quality)
const CARD_THEMES = [
  {
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#BBF7D0]',
    ring: 'ring-emerald-500/10',
    iconBg: 'bg-emerald-600',
    tagColor: 'text-emerald-700',
    titleColor: 'text-emerald-950',
    textColor: 'text-emerald-950',
    hoverBorder: 'hover:border-emerald-400/80',
    icon: FiShield
  },
  {
    bg: 'bg-[#FAF5FF]',
    border: 'border-[#E9D5FF]',
    ring: 'ring-purple-500/10',
    iconBg: 'bg-purple-700',
    tagColor: 'text-purple-700',
    titleColor: 'text-purple-950',
    textColor: 'text-purple-950',
    hoverBorder: 'hover:border-purple-400/80',
    icon: FiCreditCard
  },
  {
    bg: 'bg-[#F0F4FF]',
    border: 'border-[#BFDBFE]',
    ring: 'ring-blue-500/10',
    iconBg: 'bg-[#0038A8]',
    tagColor: 'text-[#0038A8]',
    titleColor: 'text-[#0F172A]',
    textColor: 'text-slate-800',
    hoverBorder: 'hover:border-blue-400/80',
    icon: FiCheckSquare
  },
  {
    bg: 'bg-[#FFFBEB]',
    border: 'border-[#FDE68A]',
    ring: 'ring-amber-500/10',
    iconBg: 'bg-amber-600',
    tagColor: 'text-amber-800',
    titleColor: 'text-amber-950',
    textColor: 'text-amber-950',
    hoverBorder: 'hover:border-amber-400/80',
    icon: FiActivity
  }
];

/**
 * Parses raw benefit items dynamically based ONLY on existing MediCare Select data.
 * Content-driven architecture:
 * - NO invented content
 * - NO empty UI sections
 * - Preserves all numbers, conditions, and exact wording
 */
function parseBenefitContent(item) {
  const {
    id,
    title,
    summary = '',
    points = [],
    tableData
  } = item;

  let heroSummary = summary;
  const standardCards = [];
  const simpleListItems = [];
  const examples = [];
  const importantNotes = [];
  let orIndex = -1;

  const rawPoints = [...points];

  // If heroSummary is empty and the first point is an introductory statement ending with a colon
  if (!heroSummary && rawPoints.length > 0) {
    const first = rawPoints[0].trim();
    if (first.endsWith(':') && !first.includes('→')) {
      heroSummary = first;
      rawPoints.shift();
    }
  }

  // Pre-check for dedicated lists of medical tests or simple items
  const isListFeature = (summary && summary.trim().endsWith(':')) ||
    (rawPoints.length >= 4 && rawPoints.every(p => p.length < 55 && !p.includes(':') && !p.includes('→')));

  let inExampleBlock = false;
  let currentExample = null;

  for (let i = 0; i < rawPoints.length; i++) {
    const pt = rawPoints[i].trim();
    if (!pt) continue;

    // Check for OR separator
    if (pt === 'OR' || pt === 'or') {
      orIndex = standardCards.length;
      continue;
    }

    // Check for Important Notes
    if (/^important note:/i.test(pt) || /^note:/i.test(pt)) {
      inExampleBlock = false;
      importantNotes.push({
        title: 'Important Note',
        text: pt.replace(/^(important note|note):\s*/i, '').trim()
      });
      continue;
    }

    // Check for Examples
    if (/^example/i.test(pt)) {
      inExampleBlock = true;
      const colonMatch = pt.match(/^(example[^:]*):\s*(.*)$/i);
      if (colonMatch) {
        currentExample = {
          title: colonMatch[1].trim(),
          text: colonMatch[2].trim(),
          steps: []
        };
      } else {
        currentExample = {
          title: 'Example Illustration',
          text: pt.replace(/^example\s*/i, '').trim(),
          steps: []
        };
      }
      examples.push(currentExample);
      continue;
    }

    // In-example claim steps (e.g. 1st Claim, 2nd Claim, Year 1, Next Policy Year)
    if (inExampleBlock && currentExample && (
      /^\d+(st|nd|rd|th)\s+claim/i.test(pt) ||
      /^year\s+\d/i.test(pt) ||
      /^next policy year/i.test(pt)
    )) {
      currentExample.steps.push(pt);
      continue;
    } else {
      inExampleBlock = false;
    }

    // If marked as list feature
    if (isListFeature && pt.length < 55 && !pt.includes('→')) {
      simpleListItems.push(pt);
      continue;
    }

    // Check for Titled Key-Value points (e.g. "Pre-Hospitalisation: Up to 90 days before admission")
    if (pt.includes(':') && pt.indexOf(':') < 45) {
      const cIdx = pt.indexOf(':');
      const pTitle = pt.substring(0, cIdx).trim();
      const pDesc = pt.substring(cIdx + 1).trim();
      standardCards.push({ title: pTitle, desc: pDesc });
      continue;
    }

    // Numbered points like "1. Mental Health Screening"
    if (/^\d+\.\s*/.test(pt)) {
      standardCards.push({ title: null, desc: pt });
      continue;
    }

    // Short list items if no cards exist or specifically short items without arrows
    if (pt.length < 50 && !pt.includes('→') && standardCards.length === 0) {
      simpleListItems.push(pt);
    } else {
      standardCards.push({ title: null, desc: pt });
    }
  }

  return {
    id,
    title,
    heroSummary,
    standardCards,
    simpleListItems,
    examples,
    importantNotes,
    orIndex,
    hasTable: Boolean(tableData)
  };
}

/**
 * Universal Dynamic Policy Benefit Detail Modal Popup for Tata AIG MediCare Select
 * 
 * PRIMARY DESIGN REFERENCE: 100% Cashless Policy Detail Popup
 * Core Principle: CONTENT DETERMINES LAYOUT
 * - Case 1: Small Content (Title + Description) -> Clean hero card, zero empty boxes
 * - Case 2: Medium Content (Title + Description + Supporting Points) -> Hero + 2-3 benefit cards
 * - Case 3: Large Content (Title + Description + Details + Notes/Examples/Tables) -> Rich multi-section layout
 * - NO empty cards, NO placeholder text, NO fake badges, NO invented conditions.
 */
export default function CashlessPolicyModal({
  isOpen,
  onClose,
  item,
  primaryColor = '#0038A8',
  onOpenVideo
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

  if (!isOpen || !item) return null;

  const {
    id,
    title,
    subtitle,
    badge,
    iconType,
    tableData,
    tableNote,
    isRider,
    videoUrl,
    _isMatched
  } = item;

  const parsed = parseBenefitContent(item);
  const {
    heroSummary,
    standardCards,
    simpleListItems,
    examples,
    importantNotes,
    orIndex
  } = parsed;

  const MainIcon = (iconType && ICON_MAP[iconType]) || FiCreditCard;

  // Header Title
  const headerTitle = id === 'select-cashless-policy'
    ? 'CASHLESS POLICY'
    : (title ? title.toUpperCase().replace(/\s*\(.*?\)\s*/g, '').trim() : 'BENEFIT DETAIL');

  // Hero Pill Badge (Only when meaningful content/badge exists)
  let heroBadge = null;
  if (id === 'select-cashless-policy') {
    heroBadge = '100% CASHLESS';
  } else if (badge) {
    heroBadge = badge.toUpperCase();
  } else if (isRider) {
    heroBadge = 'OPTIONAL RIDER';
  }

  // Divide standard cards if there's an OR separator
  const cardsBeforeOr = orIndex > 0 ? standardCards.slice(0, orIndex) : standardCards;
  const cardsAfterOr = orIndex > 0 ? standardCards.slice(orIndex) : [];

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
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
          animate={shouldReduceMotion ? false : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-2xl w-[calc(100%-16px)] max-w-2xl lg:max-w-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Section Header, Video Button (only if videoUrl exists), & Close Button */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0038A8] shadow-xs" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0F172A] font-display">
                {headerTitle} &bull; BENEFIT DETAIL
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* Existing Video button ONLY if a video is already associated with this feature */}
              {videoUrl && onOpenVideo && (
                <button
                  type="button"
                  onClick={() => onOpenVideo(title, videoUrl)}
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
            
            {/* ========================================================================= */}
            {/* 1. HERO CARD: Feature Title, Subtitle, Badge, and Summary Description    */}
            {/* ========================================================================= */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-b from-slate-50/90 via-[#F0F4FF]/30 to-white border border-slate-200/90 p-4 sm:p-5 shadow-2xs">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                {/* Rounded Square Icon Container */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                  animate={shouldReduceMotion ? false : { scale: 1, opacity: 1 }}
                  transition={{ delay: 0.08, duration: 0.3, ease: 'easeOut' }}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-[#0038A8] text-white flex items-center justify-center shadow-xs shrink-0 ring-4 ring-[#0038A8]/10"
                >
                  <MainIcon className="text-lg sm:text-2xl" />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-xl font-black text-[#0F172A] font-display tracking-tight leading-snug">
                      {title}
                    </h3>

                    {/* Pill Badge (Only when meaningful content/badge exists) */}
                    {heroBadge && (
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
                        {heroBadge}
                      </motion.span>
                    )}

                    {_isMatched && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                        Matched
                      </span>
                    )}
                  </div>

                  {subtitle && (
                    <p className="text-[11px] sm:text-xs font-bold text-slate-500 mt-0.5">
                      {subtitle}
                    </p>
                  )}

                  {heroSummary && (
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-2 leading-relaxed">
                      {heroSummary}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 2. BENEFIT CARDS: Dynamic Responsive Grid (Rendered ONLY if content exists)*/}
            {/* ========================================================================= */}
            {cardsBeforeOr.length > 0 && (
              <div className={`grid ${
                cardsBeforeOr.length === 1
                  ? 'grid-cols-1'
                  : cardsBeforeOr.length === 3
                  ? 'grid-cols-1 sm:grid-cols-3'
                  : 'grid-cols-1 sm:grid-cols-2'
              } gap-3 sm:gap-4 items-stretch`}>
                {cardsBeforeOr.map((card, idx) => {
                  const theme = CARD_THEMES[idx % CARD_THEMES.length];
                  const CardIcon = theme.icon;

                  return (
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                      transition={{ delay: 0.14 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
                      className={`rounded-xl sm:rounded-2xl ${theme.bg} border ${theme.border} p-4 sm:p-5 flex flex-col justify-between shadow-2xs ${theme.hoverBorder} hover:shadow-xs transition-all duration-200 ring-1 ${theme.ring}`}
                    >
                      <div>
                        {card.title && (
                          <div className="flex items-center gap-2.5 mb-2.5">
                            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${theme.iconBg} text-white flex items-center justify-center shadow-2xs shrink-0`}>
                              <CardIcon className="text-sm sm:text-base stroke-[2.5]" />
                            </div>
                            <div>
                              <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${theme.tagColor} block font-display`}>
                                {card.title}
                              </span>
                              <h4 className={`text-xs sm:text-sm font-black ${theme.titleColor} font-display leading-tight`}>
                                {card.title}
                              </h4>
                            </div>
                          </div>
                        )}

                        <p className={`text-xs sm:text-[13px] ${theme.textColor} font-medium leading-relaxed ${card.title ? 'mt-2' : ''}`}>
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* ========================================================================= */}
            {/* OPTIONAL "OR" DIVIDER (e.g. in No Claim Bonus)                           */}
            {/* ========================================================================= */}
            {orIndex > 0 && (
              <div className="flex items-center justify-center my-3 sm:my-4">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="px-3.5 py-1 bg-[#F0F4FF] text-[#0038A8] text-xs font-black rounded-full border border-[#0038A8]/25 tracking-wider mx-3 shadow-2xs">
                  OR
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>
            )}

            {/* Cards after OR separator */}
            {cardsAfterOr.length > 0 && (
              <div className={`grid ${
                cardsAfterOr.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-1 sm:grid-cols-2'
              } gap-3 sm:gap-4 items-stretch`}>
                {cardsAfterOr.map((card, idx) => {
                  const theme = CARD_THEMES[(cardsBeforeOr.length + idx + 1) % CARD_THEMES.length];
                  const CardIcon = theme.icon;

                  return (
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
                      className={`rounded-xl sm:rounded-2xl ${theme.bg} border ${theme.border} p-4 sm:p-5 flex flex-col justify-between shadow-2xs ${theme.hoverBorder} hover:shadow-xs transition-all duration-200 ring-1 ${theme.ring}`}
                    >
                      <div>
                        {card.title && (
                          <div className="flex items-center gap-2.5 mb-2.5">
                            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${theme.iconBg} text-white flex items-center justify-center shadow-2xs shrink-0`}>
                              <CardIcon className="text-sm sm:text-base stroke-[2.5]" />
                            </div>
                            <div>
                              <span className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${theme.tagColor} block font-display`}>
                                {card.title}
                              </span>
                              <h4 className={`text-xs sm:text-sm font-black ${theme.titleColor} font-display leading-tight`}>
                                {card.title}
                              </h4>
                            </div>
                          </div>
                        )}

                        <p className={`text-xs sm:text-[13px] ${theme.textColor} font-medium leading-relaxed ${card.title ? 'mt-2' : ''}`}>
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* ========================================================================= */}
            {/* 3. SIMPLE LIST / BULLETS SECTION (Rendered ONLY if content exists)        */}
            {/* ========================================================================= */}
            {simpleListItems.length > 0 && (
              <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-500 font-display block">
                  Covered Items / Details
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                  {simpleListItems.map((itemStr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0038A8] font-bold text-sm shrink-0 leading-tight mt-0.5">•</span>
                      <span>{itemStr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ========================================================================= */}
            {/* 4. TABLE SECTION: Full interactive data table (Rendered ONLY if present)  */}
            {/* ========================================================================= */}
            {tableData && tableData.columns && tableData.rows && (
              <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs space-y-2">
                {tableData.title && (
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 font-display">
                    {tableData.title}
                  </h4>
                )}
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100/90 border-b border-slate-200">
                          {tableData.columns.map((col, idx) => (
                            <th key={idx} className="px-3 sm:px-4 py-2.5 font-black uppercase tracking-wider text-slate-700 font-display text-[10px] sm:text-xs">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`px-3 sm:px-4 py-2.5 text-xs sm:text-[13px] ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {tableNote && (
                  <p className="text-[11px] sm:text-xs text-slate-500 italic mt-1">
                    *{tableNote}
                  </p>
                )}
              </div>
            )}

            {/* ========================================================================= */}
            {/* 5. EXAMPLES SECTION (Rendered ONLY if example exists)                     */}
            {/* ========================================================================= */}
            {examples.length > 0 && (
              <div className="space-y-3">
                {examples.map((ex, idx) => (
                  <div key={idx} className="rounded-xl sm:rounded-2xl bg-[#F0F4FF] border border-[#0038A8]/20 p-3.5 sm:p-4 text-left shadow-2xs ring-1 ring-[#0038A8]/10 space-y-2">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0038A8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <FiInfo className="text-xs sm:text-sm stroke-[2.5]" />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0038A8] font-display">
                          {ex.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-800 font-semibold leading-relaxed">
                          {ex.text}
                        </p>
                      </div>
                    </div>

                    {/* Step-by-step example sequence if present (e.g. 1st Claim, 2nd Claim) */}
                    {ex.steps && ex.steps.length > 0 && (
                      <div className="mt-2.5 pt-2.5 border-t border-[#0038A8]/15 space-y-1.5 pl-9 sm:pl-11">
                        {ex.steps.map((stepStr, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0038A8] mt-1.5 shrink-0" />
                            <span>{stepStr}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ========================================================================= */}
            {/* 6. IMPORTANT NOTES BANNER (Rendered ONLY if important note exists)        */}
            {/* ========================================================================= */}
            {importantNotes.length > 0 && (
              <div className="space-y-2.5">
                {importantNotes.map((note, idx) => (
                  <div key={idx} className="rounded-xl sm:rounded-2xl bg-[#FFF7ED] border border-amber-200/90 p-3.5 sm:p-4 text-left shadow-2xs ring-1 ring-amber-500/10">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <FiAlertCircle className="text-xs sm:text-sm stroke-[2.5]" />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 font-display">
                          {note.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-amber-950 font-medium leading-relaxed">
                          {note.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
