import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

/**
 * UploadPolicyButton Component
 * 
 * An independent, modular floating button that navigates to the dedicated
 * "/upload-policy" page when clicked.
 * 
 * Replicates the exact visual language of the "Chat with WHYINSURED" button:
 * - Shape & Border Radius (rounded-2xl)
 * - Dimensions & Padding (px-3.5 py-1.5)
 * - Typography (text-xs font-bold tracking-tight text-white)
 * - Shadows & Borders (shadow-xl border-slate-700/60)
 * - Gradient Background (#0F172A to #1E293B)
 * - Emerald (#00A86B) Accents & Hover Micro-interactions
 * - Circular PDF icon container on the left
 */
export default function UploadPolicyButton() {
  const location = useLocation();

  // If user is already on the dedicated Upload Policy page, hide the floating button
  if (location.pathname === '/upload-policy') {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[90] flex flex-col items-end pointer-events-none select-none">
      <Link
        to="/upload-policy"
        className="pointer-events-auto cursor-pointer group block"
        aria-label="Upload Your Policy"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-3.5 py-1.5 rounded-2xl shadow-xl border border-slate-700/60 flex items-center gap-2 hover:border-[#00A86B]/80 transition-all"
        >
          {/* Circular PDF Icon Container matching WHYINSURED theme */}
          <div className="relative w-5 h-5 rounded-full p-0.5 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-slate-900 border border-slate-700/50 flex items-center justify-center text-[#00A86B]">
              <FiFileText className="text-[10px]" />
            </div>
          </div>

          {/* Button Label */}
          <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
            <span>Upload Your Policy</span>
          </span>
        </motion.div>
      </Link>
    </div>
  );
}
