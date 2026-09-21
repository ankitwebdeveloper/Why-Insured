import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiX, FiFileText, FiBookOpen, FiExternalLink, FiShield } from 'react-icons/fi';

/**
 * Premium Documents Modal for Tata AIG MediCare Select
 * Displays official Brochure and Policy Wording links with direct browser viewing in a new tab.
 */
export default function MedicareSelectDocumentsModal({
  isOpen,
  onClose,
  primaryColor = '#0038A8'
}) {
  const shouldReduceMotion = useReducedMotion();

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const documents = [
    {
      id: 'brochure',
      label: 'Brochure',
      description: 'Basic features, key highlights & benefits',
      action: 'View Brochure',
      url: 'https://www.tataaig.com/s3/medicare_select_brochure_eefe5cd661.pdf',
      icon: FiFileText,
      badge: 'Product Overview'
    },
    {
      id: 'policy-wording',
      label: 'Policy Wording',
      description: 'Detailed coverage, terms, conditions & exclusions',
      action: 'View Policy Wording',
      url: 'https://www.tataaig.com/s3/medicare_select_policy_wording_0faeeb61c5.pdf',
      icon: FiBookOpen,
      badge: 'Legal Terms & Clauses'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Box */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-2xl w-[calc(100%-16px)] max-w-md overflow-hidden z-10 text-left flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0038A8] shadow-xs" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0038A8] block">
                  Tata AIG
                </span>
                <h2 className="text-sm sm:text-base font-black text-[#0F172A] tracking-tight font-display">
                  MediCare Select Documents
                </h2>
              </div>
            </div>

            {/* Clear Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <FiX className="text-sm sm:text-base stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Body - 2 Document Option Cards */}
          <div className="p-4 sm:p-5 space-y-3">
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed px-0.5">
              Access the official documentation directly from Tata AIG General Insurance.
            </p>

            <div className="space-y-2.5">
              {documents.map((doc) => {
                const IconComponent = doc.icon;
                return (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white hover:bg-[#F0F4FF]/40 hover:border-[#0038A8]/40 hover:shadow-md transition-all duration-200 cursor-pointer text-left relative overflow-hidden"
                  >
                    {/* Left Accent Bar on Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#0038A8] transition-colors duration-200" />

                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3 min-w-0">
                        {/* Icon Container */}
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0F4FF] text-[#0038A8] group-hover:bg-[#0038A8] group-hover:text-white flex items-center justify-center shrink-0 border border-[#0038A8]/15 transition-all duration-200 shadow-2xs">
                          <IconComponent className="text-base sm:text-lg" />
                        </div>

                        {/* Title & Description */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h3 className="text-xs sm:text-sm font-extrabold text-[#0F172A] group-hover:text-[#0038A8] transition-colors font-display">
                              {doc.label}
                            </h3>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block">
                              • {doc.badge}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-snug mt-0.5">
                            {doc.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Button Badge */}
                      <div className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 group-hover:bg-[#0038A8] text-slate-700 group-hover:text-white text-[10px] sm:text-xs font-bold transition-all duration-200 self-center">
                        <span className="whitespace-nowrap">{doc.action}</span>
                        <FiExternalLink className="text-[10px] sm:text-xs shrink-0" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Note */}
          <div className="px-5 py-2.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
            <span className="flex items-center gap-1">
              <FiShield className="text-[#0038A8] text-xs" /> Official Tata AIG PDFs
            </span>
            <span>Opens in new tab</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
