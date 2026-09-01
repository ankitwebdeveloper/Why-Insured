import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiX,
  FiPlay,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiShield,
  FiInfo,
  FiFileText,
  FiVolume2
} from 'react-icons/fi';
import { hasValidVideo } from '../utils/globalSearchHelper.js';

export default function GlobalSearchContentModal({ item, onClose }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!item) return null;

  const brandColor = item.companyTheme?.primary || '#059669';
  const brandBg = item.companyTheme?.background || '#F0FDF4';

  const isVideoAvailable = hasValidVideo(item.videoUrl);
  const isAudioAvailable = Boolean(item.audioUrl && typeof item.audioUrl === 'string' && item.audioUrl.trim() !== '');
  const isPdfAvailable = Boolean(item.pdfUrl && typeof item.pdfUrl === 'string' && item.pdfUrl.trim() !== '');

  const formatVideoUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
    }
    return url;
  };

  const isDirectVideoFile = (url) => {
    if (!url || typeof url !== 'string') return false;
    return (
      url.endsWith('.mp4') ||
      url.includes('.mp4?') ||
      url.includes('.mp4') ||
      url.startsWith('data:video') ||
      url.startsWith('blob:') ||
      url.includes('/assets/')
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-2xl w-[calc(100%-16px)] sm:w-full max-w-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[88vh]"
        >
          {/* Top Brand Stripe */}
          <div
            className="h-1.5 w-full shrink-0"
            style={{ backgroundColor: brandColor }}
          />

          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 shrink-0 bg-slate-50/50">
            <div className="flex items-center gap-3 min-w-0">
              {item.companyLogo && (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src={item.companyLogo}
                    alt={item.companyName}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-xs font-black text-slate-800 font-sans tracking-tight">
                    {item.companyName}
                  </span>
                  {item.planName && (
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                      {item.planName}
                    </span>
                  )}
                </div>
                <span
                  className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest block mt-0.5"
                  style={{ color: brandColor }}
                >
                  {item.category || 'INSURANCE KNOWLEDGE'}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-2xs"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-left font-sans">
            {/* Title & Badge Header */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
                {item.badge && (
                  <span
                    className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs"
                    style={{
                      backgroundColor: brandBg,
                      color: brandColor,
                      borderColor: `${brandColor}30`
                    }}
                  >
                    ★ {item.badge}
                  </span>
                )}
                {isVideoAvailable && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                    <FiPlay className="text-[9px] fill-current" />
                    Video Explanation Available
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </h2>

              {item.subtitle && (
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              )}
            </div>

            {/* Video Player (If Active & Available) */}
            {isPlayingVideo && isVideoAvailable && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video relative shadow-xl">
                {isDirectVideoFile(item.videoUrl) ? (
                  <video
                    src={item.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <iframe
                    src={formatVideoUrl(item.videoUrl)}
                    title={item.videoTitle || item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            )}

            {/* Main Summary Description Card */}
            {item.summary && (
              <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-100 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <FiInfo className="text-slate-400" />
                  <span>Overview & Details</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-normal sm:font-medium leading-relaxed">
                  {item.summary}
                </p>
              </div>
            )}

            {/* Step-by-Step Breakdown (For Multipliers, Restores, 2X Covers) */}
            {item.steps && Array.isArray(item.steps) && item.steps.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Calculation / Progression Flow
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl border bg-white shadow-2xs flex flex-col justify-between"
                      style={{ borderColor: `${brandColor}25` }}
                    >
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        Step 0{sIdx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-slate-900 mt-1 font-display">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bullet Points / Paragraphs List */}
            {item.points && Array.isArray(item.points) && item.points.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Key Specifications
                </span>
                <div className="space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs flex items-start gap-2.5"
                    >
                      <FiCheckCircle
                        className="text-sm shrink-0 mt-0.5"
                        style={{ color: brandColor }}
                      />
                      <span className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {pt.replace(/\*\*/g, '')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Must Know Paragraphs */}
            {item.paragraphs && Array.isArray(item.paragraphs) && item.paragraphs.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Important Notes & Guidelines
                </span>
                <div className="space-y-2">
                  {item.paragraphs.map((para, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-amber-50/50 border border-amber-100/80 flex items-start gap-2.5"
                    >
                      <span className="text-amber-500 font-bold text-sm shrink-0">•</span>
                      <span className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                        {para}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Health Checkup Limits Table */}
            {item.hasHealthCheckupTable && item.healthCheckupLimits && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Health Check-up Limits by Sum Insured
                </span>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600">
                      <tr>
                        <th className="p-2.5">Base Sum Insured</th>
                        <th className="p-2.5">Floater Limit</th>
                        <th className="p-2.5">Individual Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {item.healthCheckupLimits.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50">
                          <td className="p-2.5 font-bold text-slate-800">{row.baseSI}</td>
                          <td className="p-2.5 font-semibold text-emerald-600">{row.floater}</td>
                          <td className="p-2.5 text-slate-600">{row.individual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Disease List (for 2 Years Specific Diseases) */}
            {item.diseaseList && Array.isArray(item.diseaseList) && (
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Covered / Waiting Conditions List
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 max-h-48 overflow-y-auto">
                  {item.diseaseList.map((disease, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{disease}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Breakdown (For Report Card / Company Strength) */}
            {(item.singleYear || item.threeYearAvg || item.range || item.value) && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {item.value && (
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Score / Value
                    </span>
                    <span className="text-base sm:text-lg font-black text-amber-600 font-display">
                      {item.value}
                    </span>
                  </div>
                )}
                {item.singleYear && (
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Recent Year
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 font-display">
                      {item.singleYear}
                    </span>
                  </div>
                )}
                {item.threeYearAvg && (
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      3-Year Average
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 font-display">
                      {item.threeYearAvg}
                    </span>
                  </div>
                )}
                {item.range && (
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Range
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900 font-display">
                      {item.range}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Action Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between flex-wrap gap-3 shrink-0">
            {/* Left Dynamic Media Actions: Video / Audio / PDF ONLY IF ACTUALLY AVAILABLE */}
            <div className="flex items-center gap-2">
              {isVideoAvailable && (
                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-sm transition-all cursor-pointer hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: isPlayingVideo ? '#475569' : '#DC2626' }}
                >
                  <FiPlay className={`text-xs ${isPlayingVideo ? '' : 'fill-current'}`} />
                  <span>{isPlayingVideo ? 'Hide Video' : 'Watch Video Explanation'}</span>
                </button>
              )}

              {isAudioAvailable && (
                <a
                  href={item.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <FiVolume2 className="text-xs text-emerald-600" />
                  <span>Listen Audio</span>
                </a>
              )}

              {isPdfAvailable && (
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <FiFileText className="text-xs text-rose-600" />
                  <span>View PDF</span>
                </a>
              )}

              {!isVideoAvailable && !isAudioAvailable && !isPdfAvailable && (
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <FiShield className="text-slate-400" />
                  <span>Verified Policy Data</span>
                </div>
              )}
            </div>

            {/* Right actions: Compare & Open Plan Page */}
            <div className="flex items-center gap-2">
              <Link
                to="/compare"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                <FiLayers className="text-xs" />
                <span>Compare</span>
              </Link>

              {item.planUrl && (
                <Link
                  to={item.planUrl}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-white shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                  style={{ backgroundColor: brandColor }}
                >
                  <span>Open Full Plan</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
