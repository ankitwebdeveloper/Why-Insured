import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FiCheckSquare,
  FiPlus,
  FiMinus,
  FiPlay,
  FiX
} from 'react-icons/fi';
import {
  FaHospital,
  FaUserMd,
  FaStethoscope,
  FaSyringe,
  FaShieldAlt,
  FaAmbulance,
  FaMedkit
} from 'react-icons/fa';
import hdfcErgoLogo from '../assets/hdfc-ergo-logo.png';
import unlimitedVideo from '../assets/unlimited.mp4';
import secureBenefitVideo from '../assets/2x coverage.mp4';
import preventiveVideo from '../assets/Preventive.mp4';

// =============================================================================
// CENTRALIZED DEMO VIDEO CONFIGURATION
// Replace DEMO_VIDEO_URL below with your actual video link whenever needed.
// =============================================================================
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

const FEATURE_VIDEOS = {
  // MOST IMPORTANT FEATURES
  "Any Room Category": DEMO_VIDEO_URL,
  "No Limit on ICU": DEMO_VIDEO_URL,
  "Pre & Post Hospitalisation": DEMO_VIDEO_URL,
  "All Day Care Diseases Covered": DEMO_VIDEO_URL,
  "Modern Treatment & Robotic Surgery": DEMO_VIDEO_URL,

  // VALUE ADDED FEATURES
  "Unlimited Restoration": unlimitedVideo,
  "Secure Benefit": secureBenefitVideo,
  "Infinite Benefit": DEMO_VIDEO_URL,
  "Protect Benefit": DEMO_VIDEO_URL,
  "Preventive Health Check-up": preventiveVideo,

  // ADDITIONAL FEATURES
  "Daily Cash For Shared Room": DEMO_VIDEO_URL,
  "Domiciliary, Organ & AYUSH Treatment": DEMO_VIDEO_URL,
  "Road Ambulance Cover Available": DEMO_VIDEO_URL,
  "All Day Care Treatment": DEMO_VIDEO_URL,

  // OPTIONAL RIDERS
  "ABCD Chronic Care": DEMO_VIDEO_URL,
  "Limitless": DEMO_VIDEO_URL,
  "Optima Wellbeing": DEMO_VIDEO_URL,
  "Parenthood": DEMO_VIDEO_URL,
  "Hospital Cash Benefit": DEMO_VIDEO_URL,
  "Serious Illness Booster": DEMO_VIDEO_URL
};

// Helper to format YouTube or Direct MP4 URLs
const getVideoEmbedUrl = (url) => {
  if (!url) return { type: 'none', url: '' };
  if (url.includes('youtube.com/embed/')) return { type: 'youtube', url };
  
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return { type: 'youtube', url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1` };
  }
  
  if (url.endsWith('.mp4') || url.includes('.mp4?') || url.includes('.mp4') || (typeof url === 'string' && (url.startsWith('data:video') || url.startsWith('blob:') || url.includes('unlimited') || url.includes('Preventive') || url.includes('coverage') || url.includes('/assets/')))) {
    return { type: 'mp4', url };
  }

  return { type: 'iframe', url };
};

// Compact Feature-Wise Inline Video Button Component
const VideoButton = ({ featureTitle, onOpenVideo }) => {
  const videoUrl = FEATURE_VIDEOS[featureTitle];
  if (!videoUrl || videoUrl.trim() === '') return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpenVideo(featureTitle, videoUrl);
      }}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/25 hover:bg-[#E30613] hover:text-white transition-all cursor-pointer select-none shrink-0 shadow-2xs group ml-1.5 align-middle"
    >
      <FiPlay className="text-[9px] fill-current text-[#E30613] group-hover:text-white transition-colors" />
      <span>Video</span>
    </button>
  );
};

// Modal Overlay for In-Page Video Player
const VideoModal = ({ isOpen, onClose, videoTitle, videoUrl }) => {
  if (!isOpen || !videoUrl) return null;

  const embedData = getVideoEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-opacity"
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
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span className="truncate">{videoTitle} — Feature Explanation</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#E30613] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
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
              playsInline
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

// Main Section Container Component with Split-Border (Top+Right: Red #E30613, Left+Bottom: Orange #FF5722)
const MainSectionContainer = ({ children, title, subtitle }) => {
  return (
    <div className="relative bg-[#FFFFFF] rounded-2xl p-4 sm:p-7 shadow-xs border border-[#E2E8F0] overflow-hidden">
      {/* TOP BORDER (RED) */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E30613] z-10" />
      {/* RIGHT BORDER (RED) */}
      <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-[#E30613] z-10" />
      {/* BOTTOM BORDER (ORANGE) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5722] z-10" />
      {/* LEFT BORDER (ORANGE) */}
      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#FF5722] z-10" />

      {/* SECTION HEADER AREA */}
      <div className="relative z-10 flex items-start gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#E2E8F0]">
        <div className="w-1.5 h-6 sm:h-7 bg-[#E30613] rounded-full shrink-0 mt-0.5" />
        <div>
          <h2 className="text-base sm:text-xl font-extrabold text-emerald-700 tracking-tight uppercase font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#475569] font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* SECTION CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Mobile Dual-Accent Split Border Wrapper for Interactive Feature Cards
const DualAccentCard = ({ children, onClick, className = '' }) => (
  <div
    onClick={onClick}
    className={`relative bg-[#FFFFFF] rounded-xl sm:rounded-2xl shadow-xs transition-all duration-200 overflow-hidden cursor-pointer border border-[#E2E8F0] ${className}`}
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E30613] z-10" />
    <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-[#E30613] z-10" />
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5722] z-10" />
    <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#FF5722] z-10" />

    <div className="relative z-0 p-2.5 sm:p-4">
      {children}
    </div>
  </div>
);

// Motion Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' }
  }
};

export default function OptimaSecurePlusSection() {
  // Mobile Single-Open Active States
  const [mobileActiveSec1, setMobileActiveSec1] = useState(0);
  const [mobileActiveSec2, setMobileActiveSec2] = useState(0);
  const [mobileActiveSec3, setMobileActiveSec3] = useState(0);
  const [mobileActiveSec4, setMobileActiveSec4] = useState(0);

  // In-Page Video Modal State
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    title: '',
    url: ''
  });

  const handleOpenVideo = (title, url) => {
    setVideoModal({
      isOpen: true,
      title,
      url
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      title: '',
      url: ''
    });
  };

  return (
    <div className="space-y-8 sm:space-y-10 font-sans w-full max-w-full overflow-x-hidden text-[#0F172A] bg-[#FFFFFF]">
      
      {/* ========================================================================= */}
      {/* COMPACT HDFC ERGO BRANDED HEADER                                         */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 shadow-xs border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <img
            src={hdfcErgoLogo}
            alt="HDFC ERGO"
            className="h-10 sm:h-12 w-auto object-contain select-none shrink-0"
          />
        </div>

        <div className="text-center sm:text-right">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight font-display">
            <span className="text-[#E30613]">Optima</span>{' '}
            <span className="text-[#0F172A]">Secure+</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] font-semibold mt-0.5">
            HDFC ERGO Health Insurance Policy
          </p>
        </div>
      </motion.div>


      {/* ========================================================================= */}
      {/* SECTION 1 — MOST IMPORTANT FEATURES                                      */}
      {/* ========================================================================= */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MainSectionContainer
          title="MOST IMPORTANT FEATURES"
          subtitle="Essential hospitalisation coverage offered under Optima Secure+"
        >
          {/* DESKTOP LAYOUT (768px & ABOVE) */}
          <div className="hidden md:block space-y-6">
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-3 gap-6 items-stretch">
              {/* Card 1 */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FaHospital />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Any Room Category
                      <VideoButton featureTitle="Any Room Category" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="min-h-[28px] mt-2 flex items-center">
                    <span className="inline-block text-xs font-bold text-[#E30613] bg-[#FFF5F5] px-2.5 py-0.5 rounded-md border border-[#E30613]/20">
                      100% Cashless Policy
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed font-normal">
                    Choose any room category in cashless network hospitals with zero room rent capping.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FiActivity />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      No Limit on ICU
                      <VideoButton featureTitle="No Limit on ICU" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="min-h-[28px] mt-2 flex items-center">
                    <span className="inline-block text-xs font-bold text-[#E30613] bg-[#FFF5F5] px-2.5 py-0.5 rounded-md border border-[#E30613]/20">
                      No ICU room category limit.
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed font-normal">
                    Full coverage for intensive care unit charges with zero daily sub-limits.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FiClock />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Pre & Post Hospitalisation
                      <VideoButton featureTitle="Pre & Post Hospitalisation" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="min-h-[28px] mt-2 flex items-center">
                    <span className="inline-block text-xs font-bold text-[#E30613] bg-[#FFF5F5] px-2.5 py-0.5 rounded-md border border-[#E30613]/20">
                      60 & 180 Days
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed font-normal">
                    Covers medical expenses incurred 60 days before hospital admission and 180 days after discharge.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Cards */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              {/* Card 4 */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FaUserMd />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      All Day Care Diseases Covered
                      <VideoButton featureTitle="All Day Care Diseases Covered" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed font-normal">
                    Covers all medical procedures and daycare treatments requiring less than 24 hours of hospital stay due to technological advancement.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FaStethoscope />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Modern Treatment & Robotic Surgery
                      <VideoButton featureTitle="Modern Treatment & Robotic Surgery" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed font-normal">
                    Advanced surgical technology, robotic surgeries, stem cell therapy, and modern treatments covered up to full Sum Insured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE INTERACTIVE FEATURE BOXES (BELOW 768px) */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {[
              {
                id: 0,
                title: "Any Room Category",
                highlight: "100% Cashless Policy",
                description: "Choose any room category in cashless network hospitals with zero room rent capping.",
                icon: FaHospital
              },
              {
                id: 1,
                title: "No Limit on ICU",
                highlight: "No ICU room category limit.",
                description: "Full coverage for intensive care unit charges with zero daily sub-limits.",
                icon: FiActivity
              },
              {
                id: 2,
                title: "Pre & Post Hospitalisation",
                highlight: "60 & 180 Days",
                description: "Covers medical expenses incurred 60 days before hospital admission and 180 days after discharge.",
                icon: FiClock
              },
              {
                id: 3,
                title: "All Day Care Diseases Covered",
                highlight: "Less than 24 hours stay",
                description: "Covers all medical procedures and daycare treatments requiring less than 24 hours of hospital stay due to technological advancement.",
                icon: FaUserMd
              },
              {
                id: 4,
                title: "Modern Treatment & Robotic Surgery",
                highlight: "Advanced Surgical Tech",
                description: "Advanced surgical technology, robotic surgeries, stem cell therapy, and modern treatments covered up to full Sum Insured.",
                icon: FaStethoscope
              }
            ].map((feat, idx) => {
              const isExpanded = mobileActiveSec1 === idx;
              const IconComp = feat.icon;

              return (
                <DualAccentCard
                  key={feat.id}
                  onClick={() => setMobileActiveSec1(isExpanded ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                        <IconComp />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                            {feat.title}
                          </h3>
                          <VideoButton featureTitle={feat.title} onOpenVideo={handleOpenVideo} />
                        </div>
                        {feat.highlight && (
                          <p className="text-[11px] font-bold text-[#E30613] mt-0.5">
                            {feat.highlight}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isExpanded ? 'bg-[#E30613] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isExpanded ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-[#E2E8F0]">
                          <p className="text-xs text-[#475569] leading-relaxed font-normal">
                            {feat.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DualAccentCard>
              );
            })}
          </div>
        </MainSectionContainer>
      </motion.section>


      {/* ========================================================================= */}
      {/* SECTION 2 — VALUE ADDED FEATURES                                         */}
      {/* ========================================================================= */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MainSectionContainer
          title="VALUE ADDED FEATURES"
          subtitle="Automatic multipliers and restoring coverage benefits"
        >
          {/* DESKTOP LAYOUT (768px & ABOVE) */}
          <div className="hidden md:block space-y-6">
            <div className="grid grid-cols-2 gap-6 items-stretch">
              {/* Unlimited Restoration */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FiRefreshCw />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Unlimited Restoration
                      <VideoButton featureTitle="Unlimited Restoration" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="bg-[#FFF5F5] border border-[#E2E8F0] rounded-xl p-3 my-3 text-xs sm:text-sm font-semibold text-[#0F172A] font-mono leading-relaxed min-h-[56px] flex items-center">
                    Base SI → 100% restored again → 100% restored → Unlimited...
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    Restores 100% Base Sum Insured automatically for subsequent unrelated or related claims within the policy year.
                  </p>
                </div>
              </div>

              {/* Infinite Benefit */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FiTrendingUp />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Infinite Benefit
                      <VideoButton featureTitle="Infinite Benefit" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="bg-[#FFF5F5] border border-[#E2E8F0] rounded-xl p-3 my-3 text-xs sm:text-sm font-semibold text-[#0F172A] font-mono leading-relaxed min-h-[56px] flex items-center">
                    Base Cover → +100% (Yr 1) → +100% (Yr 2) → ∞
                  </div>
                  <p className="text-xs text-[#475569] font-semibold mb-1">
                    Irrespective of claims.
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    100% of your Base Sum Insured is added automatically every policy year regardless of whether claims were made.
                  </p>
                </div>
              </div>

              {/* Secure Benefit */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FaShieldAlt />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Secure Benefit
                      <VideoButton featureTitle="Secure Benefit" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="bg-[#FFF5F5] border border-[#E2E8F0] rounded-xl p-3 my-3 text-xs sm:text-sm font-semibold text-[#0F172A] min-h-[56px] flex flex-col justify-center">
                    <span className="text-[#475569] font-mono text-[11px] block uppercase">Coverage Benefit:</span>
                    2X Base Cover from Day 1
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    Instantly doubles your sum insured right from day 1 without paying extra premium.
                  </p>
                </div>
              </div>

              {/* Protect Benefit */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0 mb-4">
                    <FaSyringe />
                  </div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Protect Benefit
                      <VideoButton featureTitle="Protect Benefit" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <div className="bg-[#FFF5F5] border border-[#E2E8F0] rounded-xl p-3 my-3 text-xs sm:text-sm font-semibold text-[#0F172A] min-h-[56px] flex items-center">
                    Gloves, PPE Kits, Masks & Syringes 100% Covered
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    Covers eligible non-medical expenses such as gloves, cotton, syringes, masks, PPE kits, and other essential medical consumables.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Card */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0">
                  <FiCheckSquare />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Preventive Health Check-up
                    <VideoButton featureTitle="Preventive Health Check-up" onOpenVideo={handleOpenVideo} />
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-normal mt-0.5">
                    Covered every policy year for all insured members upon renewal.
                  </p>
                </div>
              </div>
              <span className="bg-[#FFF5F5] text-[#E30613] text-xs font-bold px-3.5 py-1 rounded-full shrink-0 border border-[#E30613]/20">
                Annual Benefit
              </span>
            </div>
          </div>

          {/* MOBILE INTERACTIVE FEATURE BOXES (BELOW 768px) */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {[
              {
                id: 0,
                title: "Unlimited Restoration",
                highlight: "Auto 100% SI Restored",
                calcText: "Base SI → 100% restored again → 100% restored → Unlimited...",
                description: "Restores 100% Base Sum Insured automatically for subsequent unrelated or related claims within the policy year.",
                icon: FiRefreshCw
              },
              {
                id: 1,
                title: "Secure Benefit",
                highlight: "2X coverage from Day 1.",
                calcText: "2X Base Cover from Day 1",
                description: "Instantly doubles your sum insured right from day 1 without paying extra premium.",
                icon: FaShieldAlt
              },
              {
                id: 2,
                title: "Infinite Benefit",
                highlight: "100% Base SI Added Every Year.",
                calcText: "Base Cover → +100% (Yr 1) → +100% (Yr 2) → ∞",
                noteText: "Irrespective of claims.",
                description: "100% of your Base Sum Insured is added automatically every policy year regardless of whether claims were made.",
                icon: FiTrendingUp
              },
              {
                id: 3,
                title: "Protect Benefit",
                highlight: "Non-Medical Consumables Covered",
                description: "Covers eligible non-medical expenses such as gloves, cotton, syringes, masks, PPE kits, and other essential medical consumables.",
                icon: FaSyringe
              },
              {
                id: 4,
                title: "Preventive Health Check-up",
                highlight: "Covered every policy year",
                description: "Covered every policy year for all insured members upon renewal.",
                icon: FiCheckSquare
              }
            ].map((feat, idx) => {
              const isExpanded = mobileActiveSec2 === idx;
              const IconComp = feat.icon;

              return (
                <DualAccentCard
                  key={feat.id}
                  onClick={() => setMobileActiveSec2(isExpanded ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                        <IconComp />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                            {feat.title}
                          </h3>
                          <VideoButton featureTitle={feat.title} onOpenVideo={handleOpenVideo} />
                        </div>
                        {feat.highlight && (
                          <p className="text-[11px] font-bold text-[#E30613] mt-0.5">
                            {feat.highlight}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isExpanded ? 'bg-[#E30613] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isExpanded ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-[#E2E8F0]">
                          {feat.calcText && (
                            <div className="bg-[#FFF5F5] border border-[#E2E8F0] rounded-xl p-2.5 mb-2 text-xs font-semibold text-[#0F172A] font-mono leading-relaxed">
                              {feat.calcText}
                              {feat.noteText && (
                                <span className="text-[10px] text-[#475569] font-sans font-medium block mt-0.5">
                                  {feat.noteText}
                                </span>
                              )}
                            </div>
                          )}
                          <p className="text-xs text-[#475569] leading-relaxed font-normal">
                            {feat.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DualAccentCard>
              );
            })}
          </div>
        </MainSectionContainer>
      </motion.section>


      {/* ========================================================================= */}
      {/* SECTION 3 — ADDITIONAL FEATURES                                          */}
      {/* ========================================================================= */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MainSectionContainer
          title="ADDITIONAL FEATURES"
          subtitle="Comprehensive healthcare allowances and emergency services"
        >
          {/* DESKTOP LAYOUT (768px & ABOVE) */}
          <div className="hidden md:grid grid-cols-2 gap-6 items-stretch">
            {/* Daily Cash For Shared Room */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0">
                <FiDollarSign />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Daily Cash For Shared Room
                      <VideoButton featureTitle="Daily Cash For Shared Room" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#E30613] mt-1">
                    Daily cash allowance for shared room
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed font-normal">
                    Receive daily cash allowance when opting for shared room accommodation during hospitalisation.
                  </p>
                </div>
              </div>
            </div>

            {/* Domiciliary, Organ & AYUSH Treatment */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0">
                <FaMedkit />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Domiciliary, Organ & AYUSH Treatment
                      <VideoButton featureTitle="Domiciliary, Organ & AYUSH Treatment" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#E30613] mt-1">
                    Full Coverage Included
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed font-normal">
                    Complete coverage for home hospitalisation treatment, medical expenses of organ donors, and alternative AYUSH therapies.
                  </p>
                </div>
              </div>
            </div>

            {/* Road Ambulance Cover Available */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0">
                <FaAmbulance />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      Road Ambulance Cover Available
                      <VideoButton featureTitle="Road Ambulance Cover Available" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#E30613] mt-1">
                    Emergency Transport
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed font-normal">
                    Coverage for emergency road transportation expenses to transfer the insured to the nearest hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* All Day Care Treatment */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-lg shrink-0">
                <FiCheckCircle />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="min-h-[44px] flex items-start">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      All Day Care Treatment
                      <VideoButton featureTitle="All Day Care Treatment" onOpenVideo={handleOpenVideo} />
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#E30613] mt-1">
                    Less than 24 hours admission
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed font-normal">
                    All medical procedures and treatments requiring hospitalization of less than 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE INTERACTIVE FEATURE BOXES (BELOW 768px) */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {[
              {
                id: 0,
                title: "Daily Cash For Shared Room",
                highlight: "Daily cash allowance",
                description: "Receive daily cash allowance when opting for shared room accommodation during hospitalisation.",
                icon: FiDollarSign
              },
              {
                id: 1,
                title: "Domiciliary, Organ & AYUSH Treatment",
                highlight: "Home & Organ Donor Cover",
                description: "Complete coverage for home hospitalisation treatment, medical expenses of organ donors, and alternative AYUSH therapies.",
                icon: FaMedkit
              },
              {
                id: 2,
                title: "Road Ambulance Cover Available",
                highlight: "Emergency Ambulance Transportation",
                description: "Coverage for emergency road transportation expenses to transfer the insured to the nearest hospital.",
                icon: FaAmbulance
              },
              {
                id: 3,
                title: "All Day Care Treatment",
                highlight: "Less than 24 hours admission",
                description: "All medical procedures and treatments requiring hospitalization of less than 24 hours.",
                icon: FiCheckCircle
              }
            ].map((feat, idx) => {
              const isExpanded = mobileActiveSec3 === idx;
              const IconComp = feat.icon;

              return (
                <DualAccentCard
                  key={feat.id}
                  onClick={() => setMobileActiveSec3(isExpanded ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                        <IconComp />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                            {feat.title}
                          </h3>
                          <VideoButton featureTitle={feat.title} onOpenVideo={handleOpenVideo} />
                        </div>
                        {feat.highlight && (
                          <p className="text-[11px] font-bold text-[#E30613] mt-0.5">
                            {feat.highlight}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isExpanded ? 'bg-[#E30613] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isExpanded ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-[#E2E8F0]">
                          <p className="text-xs text-[#475569] leading-relaxed font-normal">
                            {feat.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DualAccentCard>
              );
            })}
          </div>
        </MainSectionContainer>
      </motion.section>


      {/* ========================================================================= */}
      {/* SECTION 4 — OPTIONAL RIDERS (ADD-ONS)                                    */}
      {/* ========================================================================= */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MainSectionContainer
          title="OPTIONAL RIDERS (ADD-ONS)"
          subtitle="Customize your policy with specialized optional add-on covers"
        >
          {/* DESKTOP LAYOUT (768px & ABOVE) */}
          <div className="hidden md:grid grid-cols-3 gap-6 items-stretch">
            {/* Rider 1 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    DAY 31 COVERAGE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiPlusCircle />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    ABCD Chronic Care
                    <VideoButton featureTitle="ABCD Chronic Care" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  Pre-existing Asthma, BP, Cholesterol and Diabetes covered from the 31st day.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>31st Day Chronic Cover</span>
              </div>
            </div>

            {/* Rider 2 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    LIFETIME UNLIMITED
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiZap />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Limitless
                    <VideoButton featureTitle="Limitless" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  One unlimited claim in a lifetime — No Sum Insured limit.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>No Sum Insured Limit</span>
              </div>
            </div>

            {/* Rider 3 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    OUTPATIENT COVER
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiUserCheck />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Optima Wellbeing
                    <VideoButton featureTitle="Optima Wellbeing" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  Covers outpatient benefits including OPD doctor consultations and diagnostic tests.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>OPD Consultations & Diagnostics</span>
              </div>
            </div>

            {/* Rider 4 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    MATERNITY COVER
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiHeart />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Parenthood
                    <VideoButton featureTitle="Parenthood" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  Covers maternity expenses including delivery and newborn care coverage.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>Delivery & Newborn Expenses</span>
              </div>
            </div>

            {/* Rider 5 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    DAILY ALLOWANCE
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiDollarSign />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Hospital Cash Benefit
                    <VideoButton featureTitle="Hospital Cash Benefit" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  Get a daily cash amount for each completed day of hospitalisation.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>Fixed Daily Cash Allowance</span>
              </div>
            </div>

            {/* Rider 6 */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#E30613]/40 rounded-2xl p-6 shadow-xs transition-all duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 min-h-[32px]">
                  <span className="bg-[#E30613] text-[#FFFFFF] text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    2X CRITICAL BOOSTER
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                    <FiAward />
                  </div>
                </div>
                <div className="min-h-[44px] flex items-start mt-4">
                  <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                    Serious Illness Booster
                    <VideoButton featureTitle="Serious Illness Booster" onOpenVideo={handleOpenVideo} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed font-normal">
                  2X Sum Insured for listed critical illnesses.
                </p>
              </div>
              <div className="pt-3 mt-5 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                <FiCheckCircle className="shrink-0" />
                <span>2X Critical Sum Insured</span>
              </div>
            </div>
          </div>

          {/* MOBILE OPTIONAL RIDERS (BELOW 768px) */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {[
              {
                id: 0,
                badge: "DAY 31 COVERAGE",
                title: "ABCD Chronic Care",
                description: "Pre-existing Asthma, BP, Cholesterol and Diabetes covered from the 31st day.",
                tag: "31st Day Chronic Cover",
                icon: FiPlusCircle
              },
              {
                id: 1,
                badge: "LIFETIME UNLIMITED",
                title: "Limitless",
                description: "One unlimited claim in a lifetime — No Sum Insured limit.",
                tag: "No Sum Insured Limit",
                icon: FiZap
              },
              {
                id: 2,
                badge: "OUTPATIENT COVER",
                title: "Optima Wellbeing",
                description: "Covers outpatient benefits including OPD doctor consultations and diagnostic tests.",
                tag: "OPD Consultations & Diagnostics",
                icon: FiUserCheck
              },
              {
                id: 3,
                badge: "MATERNITY COVER",
                title: "Parenthood",
                description: "Covers maternity expenses including delivery and newborn care coverage.",
                tag: "Delivery & Newborn Expenses",
                icon: FiHeart
              },
              {
                id: 4,
                badge: "DAILY ALLOWANCE",
                title: "Hospital Cash Benefit",
                description: "Get a daily cash amount for each completed day of hospitalisation.",
                tag: "Fixed Daily Cash Allowance",
                icon: FiDollarSign
              },
              {
                id: 5,
                badge: "2X CRITICAL BOOSTER",
                title: "Serious Illness Booster",
                description: "2X Sum Insured for listed critical illnesses.",
                tag: "2X Critical Sum Insured",
                icon: FiAward
              }
            ].map((rider, idx) => {
              const isExpanded = mobileActiveSec4 === idx;
              const IconComp = rider.icon;

              return (
                <DualAccentCard
                  key={rider.id}
                  onClick={() => setMobileActiveSec4(isExpanded ? null : idx)}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-[#E30613] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                        {rider.badge}
                      </span>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${
                        isExpanded ? 'bg-[#E30613] text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {isExpanded ? <FiMinus /> : <FiPlus />}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF5F5] text-[#E30613] border border-[#E30613]/10 flex items-center justify-center text-sm shrink-0">
                        <IconComp />
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                        <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                          {rider.title}
                        </h3>
                        <VideoButton featureTitle={rider.title} onOpenVideo={handleOpenVideo} />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-[#E2E8F0] space-y-2">
                          <p className="text-xs text-[#475569] leading-relaxed font-normal">
                            {rider.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E30613]">
                            <FiCheckCircle className="shrink-0" />
                            <span>{rider.tag}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DualAccentCard>
              );
            })}
          </div>
        </MainSectionContainer>
      </motion.section>

      {/* ========================================================================= */}
      {/* T&C FOOTER DISCLAIMER                                                     */}
      {/* ========================================================================= */}
      <div className="text-center text-xs text-[#475569] font-medium pt-2 pb-4">
        *T&C Apply. Please refer to official policy brochure for complete terms & conditions.
      </div>

      {/* ========================================================================= */}
      {/* IN-PAGE VIDEO LIGHTBOX MODAL                                              */}
      {/* ========================================================================= */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoTitle={videoModal.title}
        videoUrl={videoModal.url}
      />

    </div>
  );
}
