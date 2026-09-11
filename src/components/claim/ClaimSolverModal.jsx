import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

export default function ClaimSolverModal({ isOpen, onClose }) {
  // Auto-close modal after 3.5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-sm w-full p-6 sm:p-7 text-center z-10 space-y-4"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <FiX />
            </button>

            {/* Small Check/Success Icon */}
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-xl mx-auto shadow-xs">
              <FiCheck className="stroke-[2.5]" />
            </div>

            {/* Heading & Content */}
            <div className="space-y-1.5 text-center">
              <h3 className="text-lg font-black text-slate-900 font-display">
                We’ll Contact You Soon
              </h3>
              <p className="text-xs sm:text-sm font-bold text-emerald-800">
                Our Claim Solver will contact you within 2 hours.
              </p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                Your request has been received. Please keep your phone available.
              </p>
            </div>

            {/* Done Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
