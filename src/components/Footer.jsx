import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhoneCall, 
  FiArrowRight, 
  FiShield, 
  FiCheckCircle, 
  FiX, 
  FiExternalLink,
  FiFileText,
  FiHelpCircle
} from 'react-icons/fi';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'advisor' | 'privacy' | 'terms' | 'disclaimer'

  const quickLinks = [
    { name: 'Health Insurance', path: '/' },
    { name: 'Compare Plans', path: '/compare' },
    { name: 'Claims', path: '/claim' },
    { name: 'Panel Hospitals', path: 'https://panel-hospital.vercel.app/', isExternal: true },
    { name: 'Insurance Academy', path: '/academy' }
  ];

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <footer className="relative bg-[#0A0F1D] text-slate-300 border-t border-slate-800/80 font-sans select-none z-10 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute left-1/4 top-0 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute right-10 bottom-0 w-80 h-80 rounded-full bg-blue-500/[0.02] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          
          {/* Main Footer Row (3 Compact Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start pb-8">
            
            {/* 1. LEFT COLUMN: Brand + Tagline (md: col-span-4) */}
            <div className="md:col-span-4 space-y-3 text-left">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <div className="bg-white/95 rounded-xl p-1.5 shadow-sm border border-slate-700/40 inline-flex items-center justify-center">
                  <img
                    src={logoImg}
                    alt="WHYINSURED"
                    className="h-6 sm:h-7 w-auto object-contain select-none"
                  />
                </div>
              </Link>

              <div>
                <p className="text-sm font-bold text-white tracking-tight">
                  Your Health Insurance, Simplified.
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-xs">
                  Unbiased policy comparison, transparent metrics, and verified health intelligence.
                </p>
              </div>

              {/* Trust Micro-Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-emerald-400">
                <FiShield className="text-xs" />
                <span>100% Unbiased & Transparent</span>
              </div>
            </div>

            {/* 2. MIDDLE COLUMN: Quick Links (md: col-span-4) */}
            <div className="md:col-span-4 text-left">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 mb-3.5 font-display flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Quick Links
              </h4>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-medium">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1 group cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <FiExternalLink className="text-[10px] opacity-60 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-400 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1 group cursor-pointer"
                      >
                        <span className="text-slate-600 group-hover:text-emerald-400 transition-colors">•</span>
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. RIGHT COLUMN: Contact / Support + CTA (md: col-span-4) */}
            <div className="md:col-span-4 text-left space-y-3.5">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 mb-3.5 font-display flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Contact / Support
              </h4>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <FiMail className="text-xs" />
                </div>
                <a
                  href="mailto:whyinsured3@gmail.com"
                  className="text-slate-300 hover:text-white font-medium hover:underline transition-colors"
                >
                  whyinsured3@gmail.com
                </a>
              </div>

              {/* "Talk to an Advisor" CTA Button */}
              <button
                type="button"
                onClick={() => handleOpenModal('advisor')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer group"
              >
                <FiPhoneCall className="text-xs group-hover:rotate-12 transition-transform" />
                <span>Talk to an Advisor</span>
                <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Bottom Bar Divider */}
          <div className="border-t border-slate-800/80 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <p>© 2026 WHYINSURED. All Rights Reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <button
                type="button"
                onClick={() => handleOpenModal('privacy')}
                className="text-slate-400 hover:text-slate-200 hover:underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">|</span>
              <button
                type="button"
                onClick={() => handleOpenModal('terms')}
                className="text-slate-400 hover:text-slate-200 hover:underline transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span className="text-slate-700">|</span>
              <button
                type="button"
                onClick={() => handleOpenModal('disclaimer')}
                className="text-slate-400 hover:text-slate-200 hover:underline transition-colors cursor-pointer"
              >
                Disclaimer
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Modal for Advisor & Legal Pages */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-left text-slate-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <FiX />
              </button>

              {/* Modal Content: Advisor */}
              {activeModal === 'advisor' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <FiPhoneCall className="text-sm" />
                    </div>
                    <span>Talk to an Insurance Advisor</span>
                  </div>

                  <h3 className="text-lg font-black text-white font-display">
                    Get Unbiased Health Insurance Guidance
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have questions about room rent capping, restoration benefits, or waiting periods? Connect directly with our insurance experts for 100% unbiased assistance.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Direct Email Consultation:</span>
                      <a 
                        href="mailto:whyinsured3@gmail.com?subject=Health%20Insurance%20Advisor%20Inquiry" 
                        className="font-bold text-emerald-400 hover:underline"
                      >
                        whyinsured3@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Response Time:</span>
                      <span className="font-semibold text-slate-200">Within 2 business hours</span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <a
                      href="mailto:whyinsured3@gmail.com?subject=Need%20Health%20Insurance%20Advisor%20Assistance"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors text-center"
                    >
                      <FiMail />
                      <span>Email Advisor Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Content: Privacy Policy */}
              {activeModal === 'privacy' && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <FiFileText />
                    <span>Privacy Policy</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Your Privacy is Paramount</h3>
                  <div className="text-xs text-slate-300 space-y-2 max-h-60 overflow-y-auto pr-1">
                    <p>
                      WHYINSURED does not sell, trade, or share your personal information with third-party insurance telemarketers without your explicit consent.
                    </p>
                    <p>
                      All comparison queries and health insurance report views on this platform are completely anonymous and encrypted.
                    </p>
                    <p>
                      We strictly adhere to data protection norms to provide an advertisement-free, transparent insurance evaluation experience.
                    </p>
                  </div>
                  <div className="pt-2 text-right">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Content: Terms & Conditions */}
              {activeModal === 'terms' && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <FiFileText />
                    <span>Terms & Conditions</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Terms of Use</h3>
                  <div className="text-xs text-slate-300 space-y-2 max-h-60 overflow-y-auto pr-1">
                    <p>
                      WHYINSURED provides comparative health insurance metrics, claim settlement ratios, and feature summaries for educational and informational purposes.
                    </p>
                    <p>
                      While we make every effort to ensure information is updated, insurance underwriting, terms, premiums, and policy guidelines are determined solely by the respective insurance companies.
                    </p>
                    <p>
                      Users are advised to review the official policy wording and schedule issued by the insurer before final purchase.
                    </p>
                  </div>
                  <div className="pt-2 text-right">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Content: Disclaimer */}
              {activeModal === 'disclaimer' && (
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <FiHelpCircle />
                    <span>Regulatory Disclaimer</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Advisory & IRDAI Guidelines</h3>
                  <div className="text-xs text-slate-300 space-y-2 max-h-60 overflow-y-auto pr-1">
                    <p>
                      Health insurance is subject to market risks, medical underwriting, and regulatory guidelines set by IRDAI.
                    </p>
                    <p>
                      Claim settlement ratios (CSR), incurred claim ratios (ICR), and solvency metrics shown on WHYINSURED are sourced from official IRDAI annual reports and public company disclosures.
                    </p>
                    <p>
                      *T&C Apply across all mentioned policies.
                    </p>
                  </div>
                  <div className="pt-2 text-right">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
