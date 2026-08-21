import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowLeft,
  FiX,
  FiCheck,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiPlay,
  FiHome,
  FiHeart,
  FiCalendar,
  FiCheckSquare,
  FiCpu,
  FiRefreshCw,
  FiShield,
  FiClipboard,
  FiTrendingUp,
  FiCreditCard,
  FiTruck,
  FiClock,
  FiSmile,
  FiDollarSign,
  FiZap,
  FiUsers,
  FiActivity
} from 'react-icons/fi';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

// =============================================================================
// DEMO VIDEO CONFIGURATION
// Replace DEMO_VIDEO_URL below with your actual video link whenever needed.
// =============================================================================
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";


// Feature Icons Dictionary for Tata AIG
const FEATURE_ICONS = {
  "s1-1": FiHome,        // Inpatient Hospitalisation
  "s1-2": FiHeart,       // Room Category Capping
  "s1-3": FiCalendar,    // Pre & Post Hospitalisation
  "s1-4": FiCheckSquare, // All Day Care Procedures
  "s1-5": FiCpu,         // Modern Medical Treatments

  "s2-1": FiRefreshCw,   // Restoration Benefit
  "s2-2": FiTrendingUp,  // Cumulative Bonus
  "s2-3": FiClipboard,   // Preventive Health Check-up
  "s2-4": FiShield,      // AYUSH Treatment Cover
  "s2-5": FiShield,      // Consumables Cover

  "s3-1": FiTruck,       // Emergency Road Ambulance
  "s3-2": FiHome,        // Organ Donor Expenses
  "s3-3": FiClock,       // Second Medical Opinion
  "s3-4": FiDollarSign,  // Tax Savings under Sec 80D

  "s4-1": FiHeart,       // Maternity & Newborn Cover
  "s4-2": FiSmile,       // Hospital Daily Cash Allowance
  "s4-3": FiZap          // Global Emergency Cover
};

// Contextual Benefit Badges Dictionary
const FEATURE_BADGES = {
  "s1-1": "CORE COVER",
  "s1-2": "NO CAPPING",
  "s1-3": "PRE & POST",
  "s1-4": "DAY CARE",
  "s1-5": "ADVANCED SURGERY",

  "s2-1": "RESTORATION",
  "s2-2": "BONUS GROWTH",
  "s2-3": "ANNUAL CHECKUP",
  "s2-4": "AYUSH COVER",
  "s2-5": "CONSUMABLES",

  "s3-1": "AMBULANCE",
  "s3-2": "ORGAN DONOR",
  "s3-3": "2ND OPINION",
  "s3-4": "TAX SAVER 80D",

  "s4-1": "MATERNITY",
  "s4-2": "DAILY CASH",
  "s4-3": "GLOBAL COVER"
};

// Visual Numerical Progression Steps Dictionary
const FEATURE_STEPS = {
  "s2-1": ["Base Sum Insured", "100% Restored once", "100% Additional Cover"],
  "s2-2": ["Base Cover", "Yr 1 (+10%)", "Yr 2 (+10%)", "Max 50% Bonus"]
};

// Helper to format YouTube or Direct MP4 URLs
const getVideoEmbedUrl = (url) => {
  if (!url) return { type: 'none', url: '' };
  if (url.includes('youtube.com/embed/')) return { type: 'youtube', url };
  
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return { type: 'youtube', url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1` };
  }
  
  if (url.endsWith('.mp4') || url.includes('.mp4?')) {
    return { type: 'mp4', url };
  }

  return { type: 'iframe', url };
};

// Compact Feature-Wise Inline Video Button Component
const VideoButton = ({ featureTitle, onOpenVideo }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpenVideo(featureTitle, DEMO_VIDEO_URL);
      }}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#F0F4FF] text-[#0038A8] border border-[#0038A8]/25 hover:bg-[#0038A8] hover:text-white transition-all cursor-pointer select-none shrink-0 shadow-2xs group align-middle ml-1"
      title={`Watch demo video for ${featureTitle}`}
    >
      <FiPlay className="text-[9px] sm:text-[10px] fill-current text-[#0038A8] group-hover:text-white transition-colors" />
      <span>Video</span>
    </button>
  );
};

// Premium In-Page Video Lightbox Modal
const FeatureVideoModal = ({ isOpen, onClose, videoTitle, videoUrl }) => {
  if (!isOpen || !videoUrl) return null;

  const embedData = getVideoEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
        style={{ width: 'calc(100vw - 32px)', maxWidth: '900px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0038A8]" />
            <span className="truncate">{videoTitle} — Feature Demo</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0038A8] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <FiX />
          </button>
        </div>

        {/* Video Player Container (16:9) */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {embedData.type === 'mp4' ? (
            <video
              src={embedData.url}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={embedData.url}
              title={videoTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-component for Tata AIG Features Accordion Items with Scroll Reveal & Stagger
function TataFeatureAccordionItem({
  id,
  title,
  subtitle,
  summary,
  isExpanded,
  onToggle,
  isRider = false,
  index = 0,
  onOpenVideo
}) {
  const itemRef = React.useRef(null);
  const IconComponent = FEATURE_ICONS[id];
  const badgeText = FEATURE_BADGES[id];
  const visualSteps = FEATURE_STEPS[id];

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
      onClick={() => onToggle(id, itemRef)}
      className={`transition-all duration-200 cursor-pointer rounded-xl sm:rounded-2xl border overflow-hidden select-none flex flex-col justify-between ${
        isExpanded
          ? 'bg-[#F0F4FF]/80 border-[#0038A8]/60 shadow-md ring-1 ring-[#0038A8]/20'
          : 'bg-white border-slate-200/80 hover:border-[#0038A8]/40 shadow-2xs'
      }`}
    >
      {/* Header Row */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          {IconComponent && (
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isExpanded ? 'bg-[#0038A8] text-white shadow-xs' : 'bg-[#F0F4FF] text-[#0038A8]'
            }`}>
              <IconComponent className="text-xs sm:text-base" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-xs sm:text-base font-extrabold font-display leading-snug text-[#0F172A]">
                {title}
              </h3>
              {onOpenVideo && (
                <VideoButton featureTitle={title} onOpenVideo={onOpenVideo} />
              )}
              {isRider && (
                <span className="text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#0038A8]/10 text-[#0038A8] tracking-wide shrink-0">
                  Rider
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-[10px] sm:text-xs font-semibold mt-0.5 leading-snug text-slate-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Plus / Minus Button */}
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
          isExpanded ? 'bg-[#0038A8] text-white rotate-180' : 'bg-[#F0F4FF] text-[#0038A8]'
        }`}>
          {isExpanded ? (
            <FiMinus className="text-xs sm:text-sm stroke-[2.5]" />
          ) : (
            <FiPlus className="text-xs sm:text-sm stroke-[2.5]" />
          )}
        </div>
      </div>

      {/* Expanded Summary & Contextual Badges */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 sm:px-4.5 sm:pb-4.5 border-t border-slate-100/80 text-slate-600 space-y-2.5">
              {/* Contextual Badge & Subtitle Checkmark */}
              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-2">
                {badgeText && (
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-[#F0F4FF] text-[#0038A8] border border-[#0038A8]/20 tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0038A8]" />
                    {badgeText}
                  </span>
                )}
                {subtitle && (
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-700">
                    <FiCheck className="text-[#0038A8] text-xs shrink-0" /> {subtitle}
                  </span>
                )}
              </div>

              {/* Short explanation / Details */}
              <div className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                {summary}
              </div>

              {/* Visual Number Step Progression */}
              {visualSteps && visualSteps.length > 0 && (
                <div className="mt-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Coverage Progression Example
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {visualSteps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[11px] sm:text-xs font-black text-[#0F172A] flex items-center gap-1">
                          {step}
                        </div>
                        {sIdx < visualSteps.length - 1 && (
                          <span className="text-xs font-extrabold text-[#0038A8] px-0.5">
                            →
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MedicareSelectSection({ plan, company }) {
  const [activeModal, setActiveModal] = useState(null);
  const [videoModalState, setVideoModalState] = useState({
    isOpen: false,
    title: '',
    url: ''
  });
  const location = useLocation();
  const isFeaturesPage = location.pathname.endsWith('/features');

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (activeModal || videoModalState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal, videoModalState.isOpen]);

  const handleOpenVideo = (title, url) => {
    setVideoModalState({
      isOpen: true,
      title: title || 'Feature Video',
      url: url || DEMO_VIDEO_URL
    });
  };

  const handleCloseVideo = () => {
    setVideoModalState({
      isOpen: false,
      title: '',
      url: ''
    });
  };

  const { logo, name } = company;

  // Key ratios for Tata AIG
  const settlementRatio = getCompanyRatioValue('tata-aig', 'settlement') || '99.0%';
  const incurredRatio = getCompanyRatioValue('tata-aig', 'incurred') || '68%';
  const solvencyRatio = getCompanyRatioValue('tata-aig', 'solvency') || '1.85';
  const complaintRatio = getCompanyRatioValue('tata-aig', 'complaint') || '0.15';

  const [expandedFeatureId, setExpandedFeatureId] = useState(null);

  const toggleAccordionItem = (id, ref) => {
    if (expandedFeatureId === id) {
      setExpandedFeatureId(null);
    } else {
      setExpandedFeatureId(id);
      // Smart Scroll: Smoothly scroll the opened item into view with top offset for header clearance
      setTimeout(() => {
        if (ref && ref.current) {
          const yOffset = -110;
          const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  // =========================================================================
  // DEDICATED FEATURES PAGE (STRUCTURALLY IDENTICAL TO HDFC ERGO)
  // =========================================================================
  if (isFeaturesPage) {
    return (
      <div className="w-full pb-20 bg-[#F0F4FF] min-h-screen overflow-x-hidden relative">
        {/* Subtle Ambient Blue Glow matching Plan Detail page */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-[#0038A8]" />

        {/* Page Container — Tata AIG Theme */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 space-y-10 sm:space-y-12 relative z-10">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center pt-2"
          >
            <div className="text-left mb-3 sm:mb-4">
              <Link
                to={`/insurance/${company.id}/${plan.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to {plan.name}</span><span className="sm:hidden">Back to Plan</span>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={logo}
                alt={name}
                className="w-24 sm:w-44 h-auto max-h-9 sm:max-h-16 object-contain select-none mb-3.5 sm:mb-5"
              />
              <h1 className="text-base sm:text-2xl font-black text-[#0F172A] tracking-tight font-display">
                {plan.name} <span className="text-[#0038A8]">—</span> FEATURES
              </h1>
              <div className="w-8 sm:w-12 h-1 bg-[#0038A8] mx-auto mt-1.5 rounded-full" />
            </div>
          </motion.div>

          {/* SECTION 1: MOST IMPORTANT FEATURES */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                MOST IMPORTANT FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <TataFeatureAccordionItem
                id="s1-1"
                index={0}
                title="100% Inpatient Hospitalisation"
                subtitle="Full coverage up to Sum Insured"
                summary="Covers room rent, nursing expenses, ICU charges, surgeon fees, and medicines incurred during hospital admission exceeding 24 hours."
                isExpanded={expandedFeatureId === 's1-1'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s1-2"
                index={1}
                title="Single Private Room"
                subtitle="No room rent capping or pro-rata limit"
                summary="Full coverage for Single Private Room or Shared Room category without any daily rent capping or proportional deductions."
                isExpanded={expandedFeatureId === 's1-2'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s1-3"
                index={2}
                title="Pre & Post Hospitalisation"
                subtitle="30 & 60 Days Covered"
                summary="Medical expenses incurred 30 days prior to hospital admission and 60 days post-discharge are fully covered."
                isExpanded={expandedFeatureId === 's1-3'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s1-4"
                index={3}
                title="All Day Care Procedures"
                subtitle="540+ Procedures Covered"
                summary="All medical treatments and day care procedures requiring less than 24 hours of hospitalisation due to advanced medical technology."
                isExpanded={expandedFeatureId === 's1-4'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s1-5"
                index={4}
                title="Modern Treatment & Robotic Surgery"
                subtitle="Cutting-edge Surgical Care"
                summary="Coverage for modern medical advancements including robotic surgeries, stem cell therapy, and precision procedures up to Sum Insured."
                isExpanded={expandedFeatureId === 's1-5'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
            </div>
          </div>

          {/* SECTION 2: VALUE ADDED FEATURES */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                VALUE ADDED FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <TataFeatureAccordionItem
                id="s2-1"
                index={0}
                title="100% Restoration Benefit"
                subtitle="Automatic refill once per policy year"
                summary="Automatically refills 100% of your Base Sum Insured upon partial or complete exhaustion for subsequent unrelated claims."
                isExpanded={expandedFeatureId === 's2-1'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s2-2"
                index={1}
                title="Cumulative Bonus Growth"
                subtitle="10% per claim-free year (Max 50%)"
                summary="Earn a 10% increase in your Sum Insured for every claim-free year, capped at a maximum bonus of 50%."
                isExpanded={expandedFeatureId === 's2-2'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s2-3"
                index={2}
                title="Preventive Health Check-up"
                subtitle="Covered at every renewal"
                summary="Complimentary comprehensive health check-up vouchers provided for all insured members upon continuous policy renewal."
                isExpanded={expandedFeatureId === 's2-3'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s2-4"
                index={3}
                title="AYUSH Treatment Cover"
                subtitle="100% AYUSH Inpatient Coverage"
                summary="Full inpatient coverage for alternative treatments taken under Ayurveda, Unani, Siddha, and Homeopathy at recognized hospitals."
                isExpanded={expandedFeatureId === 's2-4'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s2-5"
                index={4}
                title="Consumables Cover"
                subtitle="Eligible medical non-medical items"
                summary="Covers eligible non-medical items such as gloves, syringes, masks, PPE kits, and administrative charges during hospitalisation."
                isExpanded={expandedFeatureId === 's2-5'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
            </div>
          </div>

          {/* SECTION 3: ADDITIONAL FEATURES */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                ADDITIONAL FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <TataFeatureAccordionItem
                id="s3-1"
                index={0}
                title="Emergency Road Ambulance"
                subtitle="Reimbursed as per policy limits per admission"
                summary="Covers emergency road ambulance transportation charges to transfer the insured patient to the nearest hospital."
                isExpanded={expandedFeatureId === 's3-1'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s3-2"
                index={1}
                title="Organ Donor Expenses"
                subtitle="Inpatient harvesting cost covered"
                summary="Inpatient medical expenses incurred for organ donor harvesting surgery during transplant procedures are fully covered up to SI."
                isExpanded={expandedFeatureId === 's3-2'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s3-3"
                index={2}
                title="Second Medical Opinion"
                subtitle="1 Expert opinion per year"
                summary="Avail 1 complimentary expert second medical opinion consultation per policy year for major critical illnesses."
                isExpanded={expandedFeatureId === 's3-3'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s3-4"
                index={3}
                title="Tax Savings under Section 80D"
                subtitle="Tax deduction under Section 80D"
                summary="Premiums paid qualify for tax deductions under Section 80D of the Income Tax Act for self, family, and parents."
                isExpanded={expandedFeatureId === 's3-4'}
                onToggle={toggleAccordionItem}
                onOpenVideo={handleOpenVideo}
              />
            </div>
          </div>

          {/* SECTION 4: OPTIONAL RIDERS (ADD-ONS) */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                OPTIONAL RIDERS (ADD-ONS)
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <TataFeatureAccordionItem
                id="s4-1"
                index={0}
                title="Maternity & Newborn Cover"
                subtitle="Optional Rider"
                summary="Covers delivery expenses (Normal & C-Section) along with newborn baby medical care up to 90 days."
                isExpanded={expandedFeatureId === 's4-1'}
                onToggle={toggleAccordionItem}
                isRider={true}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s4-2"
                index={1}
                title="Hospital Daily Cash Allowance"
                subtitle="Optional Rider"
                summary="Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage non-medical expenses."
                isExpanded={expandedFeatureId === 's4-2'}
                onToggle={toggleAccordionItem}
                isRider={true}
                onOpenVideo={handleOpenVideo}
              />
              <TataFeatureAccordionItem
                id="s4-3"
                index={2}
                title="Global Emergency Cover"
                subtitle="Optional Rider"
                summary="Extends emergency inpatient hospitalization coverage outside India for sudden medical emergencies during international travel."
                isExpanded={expandedFeatureId === 's4-3'}
                onToggle={toggleAccordionItem}
                isRider={true}
                onOpenVideo={handleOpenVideo}
              />
            </div>
          </div>


          {/* FOOTNOTE */}
          <div className="text-right pt-1">
            <span className="text-xs font-bold text-slate-400">
              *T&C Apply
            </span>
          </div>

        </div>

        {/* IN-PAGE VIDEO LIGHTBOX MODAL */}
        <FeatureVideoModal
          isOpen={videoModalState.isOpen}
          onClose={handleCloseVideo}
          videoTitle={videoModalState.title}
          videoUrl={videoModalState.url}
        />
      </div>
    );
  }

  // =========================================================================
  // MAIN TATA AIG PLAN DETAIL PAGE (SINGLE VIEWPORT — STRUCTURALLY IDENTICAL TO HDFC ERGO)
  // =========================================================================
  return (
    <div className="w-full">
      {/* Single Viewport Container - Compact Mobile Packing & Balanced Desktop Layout */}
      <div className="max-w-3xl mx-auto flex flex-col justify-start sm:justify-center items-stretch sm:min-h-[calc(100vh-220px)] py-1 sm:py-4 space-y-0">
        {/* Navigation Breadcrumb - Back to Plans */}
        <div className="shrink-0 text-left mb-3.5 sm:mb-5">
          <Link
            to={`/insurance/${company.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to Tata AIG Plans</span><span className="sm:hidden">Back to Plans</span>
          </Link>
        </div>

        {/* 1. TATA AIG LOGO */}
        <div className="flex flex-col items-center justify-center shrink-0 mb-2.5 sm:mb-4">
          <img
            src={logo}
            alt={name}
            className="w-24 sm:w-48 h-auto max-h-9 sm:max-h-20 object-contain select-none"
          />
        </div>

        {/* 2. PLAN NAME HEADING */}
        <div className="text-center shrink-0 mb-3.5 sm:mb-6">
          <h1 className="text-sm sm:text-2xl font-black text-slate-900 tracking-tight font-display">
            {plan.name}
          </h1>
          <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#0038A8] mx-auto mt-1 sm:mt-1.5 rounded-full" />
        </div>

        {/* 3. 2-COLUMN BUTTON GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
          {/* Card 1: Ratio (Marksheet) */}
          <button
            onClick={() => setActiveModal('ratio')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0038A8]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0038A8]/30 group-hover:bg-[#0038A8] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0038A8] transition-colors duration-200 font-display leading-tight pr-1">
              Ratio (Marksheet)
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0038A8] group-hover:bg-[#F0F4FF] group-hover:border-[#0038A8]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Fundamental / Family Background */}
          <button
            onClick={() => setActiveModal('fundamental')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0038A8]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0038A8]/30 group-hover:bg-[#0038A8] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0038A8] transition-colors duration-200 font-display leading-tight pr-1">
              Fundamental / Family Background
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0038A8] group-hover:bg-[#F0F4FF] group-hover:border-[#0038A8]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Features */}
          <Link
            to={`/insurance/tata-aig/${plan.id}/features`}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0038A8]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0038A8]/30 group-hover:bg-[#0038A8] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0038A8] transition-colors duration-200 font-display leading-tight pr-1">
              Features
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0038A8] group-hover:bg-[#F0F4FF] group-hover:border-[#0038A8]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* Card 4: Condition */}
          <button
            onClick={() => setActiveModal('condition')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0038A8]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0038A8]/30 group-hover:bg-[#0038A8] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0038A8] transition-colors duration-200 font-display leading-tight pr-1">
              Condition
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0038A8] group-hover:bg-[#F0F4FF] group-hover:border-[#0038A8]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL OVERLAYS (RATIO, FUNDAMENTAL, CONDITION)                            */}
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
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8] block">
                      Tata AIG Performance
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      RATIO (MARKSHEET)
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Official claim settlement and financial strength metrics.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-[#F0F4FF] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#0038A8]/20 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Claim Settlement Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Verified IRDAI Report</span>
                      </div>
                      <span className="text-base sm:text-lg font-black text-[#0038A8]">{settlementRatio}</span>
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
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8] block">
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
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Eligibility Criteria
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.eligibility}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Cashless Network Size
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        10,000+ Cashless Hospitals across India
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Claim Support System
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        24/7 Dedicated Cashless Assistance Desk
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Ambulance Cover
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        Emergency Road Ambulance Reimbursed per admission limits
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 3: CONDITION */}
              {activeModal === 'condition' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8] block">
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
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Initial Waiting Period
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        30 Days Initial Waiting Period (accidents covered from Day 1)
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Pre-Existing Diseases Waiting
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.waitingPeriod}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Room Rent & ICU Capping
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details.roomRent}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-[#F0F4FF]/60 rounded-xl sm:rounded-2xl border border-[#0038A8]/20 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0038A8]">
                        Important Policy Exclusions
                      </span>
                      <p className="text-xs font-semibold text-[#0F172A] leading-relaxed">
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
