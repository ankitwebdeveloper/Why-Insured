import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * UploadPolicyButton Component
 * 
 * An independent, modular floating action button that navigates to the dedicated
 * "/upload-policy" page when clicked.
 * 
 * Replicates the exact visual language of the "Chat with WHYINSURED" floating action:
 * - Floating position on bottom-right (stacked neatly below Chat with WHYINSURED)
 * - Matching speech bubble with dark gradient pill & downward pointer
 * - Matching circular button size (w-14 h-14 sm:w-16 sm:h-16)
 * - Matching emerald-navy gradient border, ambient pulsing glow ring, and status dot
 * - Polished, high-visibility circular PDF icon treatment
 */
export default function UploadPolicyButton() {
  const location = useLocation();

  // If user is already on the dedicated Upload Policy page, hide the floating button
  if (location.pathname === '/upload-policy') {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[88] flex flex-col items-end pointer-events-none select-none">
      
      {/* Speech Bubble "Upload Your Policy" */}
      <Link
        to="/upload-policy"
        className="pointer-events-auto mb-2 mr-1 cursor-pointer group block"
        aria-label="Upload Your Policy"
      >
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.9 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.35 }}
          className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-3.5 py-1.5 rounded-2xl shadow-xl border border-slate-700/60 flex items-center gap-2 hover:border-[#00A86B]/80 transition-all hover:scale-[1.03]"
        >
          {/* Subtle pulsing Emerald Dot */}
          <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse shrink-0 shadow-[0_0_8px_#00A86B]" />
          
          <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
            <span>Upload Your Policy</span>
          </span>

          {/* Speech Bubble Downward Arrow Pointer */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1E293B] rotate-45 border-r border-b border-slate-700/60" />
        </motion.div>
      </Link>

      {/* Circular PDF Action Button matching Chat Advisor Avatar Dimensions */}
      <Link
        to="/upload-policy"
        className="pointer-events-auto block cursor-pointer group"
        aria-label="Upload Your Policy Document"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl p-0.5 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] focus:outline-hidden transition-all duration-300"
        >
          {/* Ambient Pulsing Glow Ring in #00A86B */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A86B]/60 to-[#0fa26e]/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

          {/* Inner Circular Container with Polished PDF Symbol */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white flex flex-col items-center justify-center group-hover:bg-slate-800 transition-colors">
            {/* Center Radial Highlight */}
            <div className="absolute inset-0 bg-[#00A86B]/15 rounded-full blur-xs pointer-events-none" />

            {/* Crisp PDF Document Vector Icon */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>

                {/* PDF Red Badge Overlay */}
                <span className="absolute -bottom-1 -right-2.5 bg-gradient-to-r from-red-500 to-rose-600 text-white font-black text-[7.5px] sm:text-[8px] px-1 py-0.5 rounded tracking-tight shadow-sm border border-white/80 leading-none">
                  PDF
                </span>
              </div>
            </div>
          </div>

          {/* Status Dot Indicator */}
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#00A86B] border-2 border-white rounded-full shadow-sm">
            <span className="absolute inset-0 rounded-full bg-[#00A86B] animate-ping opacity-75" />
          </span>
        </motion.div>
      </Link>
    </div>
  );
}
