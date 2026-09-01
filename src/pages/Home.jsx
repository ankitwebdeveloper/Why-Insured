import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiArrowRight,
  FiShield,
  FiLayers,
  FiActivity,
  FiPlay,
  FiZap,
  FiX
} from 'react-icons/fi';
import { companiesData } from '../data/companies';
import { searchGlobalInsurance } from '../utils/globalSearchHelper';
import GlobalSearchContentModal from '../components/GlobalSearchContentModal';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileInsurance, setShowMobileInsurance] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);

  // Evaluate search query across companies, plans, and global insurance content
  const searchResults = useMemo(() => {
    return searchGlobalInsurance(searchQuery);
  }, [searchQuery]);

  const { companies: filteredCompanies, plans: filteredPlans, contentItems: filteredContent, detectedCompany } = searchResults;

  const totalResultsCount = filteredCompanies.length + filteredPlans.length + filteredContent.length;

  // Setup word-by-word animation variants
  const headingText = "Let’s Get the Reality of Insurance";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Popular search suggestion keywords
  const popularSuggestions = [
    '2x benefits',
    'restoration',
    'consumables',
    'room rent',
    'ICICI BeFit',
    'maternity'
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] pt-32 pb-44 overflow-visible flex flex-col justify-center">
      
      {/* Subtle Premium Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-45 pointer-events-none -z-10" />

      {/* Premium Backdrop Glows - Soft and Elegant */}
      <div className="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-teal-500/5 blur-[120px]" />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center relative z-20">
        
        {/* Main Heading with Word-by-word Stagger Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[26px] sm:text-[38px] md:text-[50px] lg:text-[56px] font-black tracking-tight text-[#0F172A] mb-8 sm:mb-10 font-display leading-[1.12] text-center"
        >
          {words.map((word, idx) => {
            const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            const isReality = cleanWord === "Reality";
            return (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={`inline-block whitespace-nowrap mr-[0.22em] ${
                  isReality 
                    ? 'text-emerald-600 bg-gradient-to-r from-emerald-600 to-[#10B981] bg-clip-text text-transparent font-black relative' 
                    : 'text-[#0F172A]'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Global Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="relative max-w-xl mx-auto px-1"
        >
          {/* Elevated Search Input Wrapper */}
          <div className="relative flex items-center w-full h-16 rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-slate-300 focus-within:border-emerald-500 focus-within:shadow-2xl focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all duration-300 px-5 group">
            <FiSearch className="text-2xl text-slate-400 group-focus-within:text-emerald-600 transition-colors mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, plans, benefits (e.g. '2x benefits', 'HDFC 2x')..."
              className="w-full h-full bg-transparent text-[#0F172A] text-sm sm:text-base font-semibold placeholder-slate-400 focus:outline-none font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2.5 py-1 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors shrink-0"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Suggestion Chips under Search Bar */}
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mt-3.5 px-2 text-left"
            >
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <FiZap className="text-emerald-500 text-xs" />
                <span>Try:</span>
              </span>
              {popularSuggestions.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => setSearchQuery(sug)}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-slate-600 hover:text-emerald-600 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </motion.div>
          )}

          {/* Simple Clean Search Dropdown Overlay */}
          <AnimatePresence>
            {searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-1 right-1 mt-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden z-30 divide-y divide-slate-100 max-h-[70vh] flex flex-col text-left"
              >
                {/* Active Company Filter Notice (If Detected) */}
                {detectedCompany && (
                  <div className="bg-emerald-50/80 px-4 py-2 border-b border-emerald-100 flex items-center justify-between gap-2 shrink-0">
                    <span className="text-xs font-bold text-emerald-800">
                      Showing results for <span className="font-extrabold underline">{detectedCompany.name}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSearchQuery(searchResults.cleanedKeywords || '')}
                      className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-200 cursor-pointer"
                    >
                      All Companies
                    </button>
                  </div>
                )}

                {/* Unified Clean Results List */}
                <div className="overflow-y-auto flex-1 divide-y divide-slate-100/80">
                  {totalResultsCount > 0 ? (
                    <>
                      {/* 1. Companies (Existing Search Feature) */}
                      {filteredCompanies.map((company) => (
                        <Link
                          key={`comp-${company.id}`}
                          to={`/insurance/${company.id}`}
                          className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="w-8 h-8 object-contain p-1 border border-slate-100 rounded-lg bg-slate-50 shrink-0"
                            />
                            <div className="flex flex-col min-w-0">
                              <span className="font-bold text-[#0F172A] text-sm group-hover:text-emerald-600 transition-colors font-sans truncate">
                                {company.name}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                {company.category} • View Plans
                              </span>
                            </div>
                          </div>
                          <FiArrowRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all text-base shrink-0 ml-2" />
                        </Link>
                      ))}

                      {/* 2. Plans (Existing Search Feature) */}
                      {filteredPlans.map((plan, pIdx) => (
                        <Link
                          key={`plan-${plan.companyId}-${plan.id}-${pIdx}`}
                          to={plan.planUrl}
                          className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            {plan.companyLogo && (
                              <img
                                src={plan.companyLogo}
                                alt={plan.companyName}
                                className="w-8 h-8 object-contain p-1 border border-slate-100 rounded-lg bg-slate-50 shrink-0"
                              />
                            )}
                            <div className="flex flex-col min-w-0">
                              <span className="font-bold text-[#0F172A] text-sm group-hover:text-emerald-600 transition-colors font-sans truncate">
                                {plan.name}
                              </span>
                              <span className="text-xs text-slate-500 font-medium">
                                {plan.companyName}
                              </span>
                            </div>
                          </div>
                          <FiArrowRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all text-base shrink-0 ml-2" />
                        </Link>
                      ))}

                      {/* 3. Features & Benefits (Clean, Simple Layout) */}
                      {filteredContent.map((item) => (
                        <div
                          key={`content-${item.id}`}
                          onClick={() => setSelectedContentItem(item)}
                          className="flex items-center justify-between p-3.5 hover:bg-slate-50/90 transition-colors group cursor-pointer"
                        >
                          <div className="flex flex-col min-w-0 pr-3">
                            {/* Feature Name */}
                            <span className="font-bold text-[#0F172A] text-sm sm:text-[14.5px] group-hover:text-emerald-600 transition-colors font-sans truncate">
                              {item.title}
                            </span>
                            {/* Company Name & Plan Name */}
                            <span className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                              {item.companyName} {item.planName ? `• ${item.planName}` : ''}
                            </span>
                          </div>
                          
                          <FiArrowRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all text-base shrink-0" />
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="p-8 text-center text-slate-400 text-sm font-semibold font-sans">
                      No results found for "{searchQuery}".
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Hero Navigation Buttons (Insurance, Compare, Hospital, Claim) - Visible ONLY on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="md:hidden flex flex-col items-center justify-center gap-2.5 mt-8 px-1 w-full max-w-sm mx-auto"
        >
          {/* ROW 1: [ Insurance ] [ Compare ] */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              type="button"
              onClick={() => setShowMobileInsurance(!showMobileInsurance)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all duration-200 cursor-pointer w-full ${
                showMobileInsurance
                  ? 'border-emerald-500 bg-emerald-100/90 text-emerald-800 shadow-sm'
                  : 'border-slate-200/80 bg-white text-slate-700 hover:text-emerald-600 shadow-sm hover:shadow-md'
              }`}
            >
              <FiShield className="text-[#059669] text-sm shrink-0" />
              <span>Insurance</span>
            </button>

            <Link
              to="/compare"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer w-full"
            >
              <FiLayers className="text-[#059669] text-sm shrink-0" />
              <span>Compare</span>
            </Link>
          </div>

          {/* ROW 2: [ Hospital ] [ Claim ] */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <a
              href="https://panel-hospital.vercel.app/"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer w-full"
            >
              <FiActivity className="text-[#059669] text-sm shrink-0" />
              <span>Hospital</span>
            </a>

            <Link
              to="/claim"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer w-full"
            >
              <FiShield className="text-[#059669] text-sm shrink-0" />
              <span>Claim</span>
            </Link>
          </div>

          {/* Supported Providers Grid for Mobile Insurance Button */}
          <AnimatePresence>
            {showMobileInsurance && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-full bg-white border border-slate-100 rounded-2xl p-4 shadow-xl overflow-hidden text-left mt-1"
              >
                <div className="mb-3 pl-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                    Supported Providers
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {companiesData.map((company) => (
                    <Link
                      key={company.id}
                      to={`/insurance/${company.id}`}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50/80 rounded-xl border border-slate-50 hover:border-slate-100 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-lg p-1 shrink-0 transition-transform duration-200 group-hover:scale-105">
                        <img 
                          src={company.logo} 
                          alt={company.name} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-600 group-hover:text-emerald-600 transition-colors font-sans">
                        {company.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Clean Feature Content Modal */}
      {selectedContentItem && (
        <GlobalSearchContentModal
          item={selectedContentItem}
          onClose={() => setSelectedContentItem(null)}
        />
      )}
    </div>
  );
}
