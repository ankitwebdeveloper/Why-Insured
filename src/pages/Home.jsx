import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
import RealInsuranceSearchResultPanel from '../components/RealInsuranceSearchResultPanel';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchContainerRef = useRef(null);

  // Initialize query from URL search params or sessionStorage
  const [searchQuery, setSearchQuery] = useState(() => {
    const urlQ = searchParams.get('q');
    if (urlQ) return urlQ;
    const storedQ = sessionStorage.getItem('whyinsured_last_search_query');
    return storedQ || '';
  });

  const [showMobileInsurance, setShowMobileInsurance] = useState(false);
  const [selectedContentItem, setSelectedContentItem] = useState(null);

  // Synchronize state when URL query param changes (e.g. browser Back / Forward navigation)
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery !== null && urlQuery !== searchQuery) {
      setSearchQuery(urlQuery);
      if (urlQuery) {
        sessionStorage.setItem('whyinsured_last_search_query', urlQuery);
      } else {
        sessionStorage.removeItem('whyinsured_last_search_query');
      }
    }
  }, [searchParams]);

  // Update query state, URL parameters, and session storage
  const handleSearchChange = (val) => {
    setSearchQuery(val);
    if (val && val.trim()) {
      sessionStorage.setItem('whyinsured_last_search_query', val);
      setSearchParams({ q: val }, { replace: true });
    } else {
      sessionStorage.removeItem('whyinsured_last_search_query');
      setSearchParams({}, { replace: true });
    }
  };

  // Close search results ONLY when user explicitly clicks/taps outside search area
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If modal is currently open or click was inside a modal/dialog overlay, do NOT close
      if (selectedContentItem) return;
      if (
        event.target.closest &&
        (event.target.closest('[role="dialog"]') || event.target.closest('.fixed') || event.target.closest('.modal'))
      ) {
        return;
      }

      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        handleSearchChange('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [selectedContentItem]);

  // Evaluate real database content search across all companies, plans, and features
  const searchResults = useMemo(() => {
    return searchGlobalInsurance(searchQuery);
  }, [searchQuery]);

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

  // Curated beginner-friendly suggestions
  const popularSuggestions = [
    '2x benefits',
    'consumables',
    'room rent',
    'restoration',
    'cashless',
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
          ref={searchContainerRef}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="relative max-w-2xl mx-auto px-1"
        >
          {/* Elevated Search Input Wrapper */}
          <div className="relative flex items-center w-full h-16 rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-slate-300 focus-within:border-emerald-500 focus-within:shadow-2xl focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all duration-300 px-5 group">
            <FiSearch className="text-2xl text-slate-400 group-focus-within:text-emerald-600 transition-colors mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Ask anything about your health insurance…"
              className="w-full h-full bg-transparent text-[#0F172A] text-sm sm:text-base font-semibold placeholder-slate-400 focus:outline-none font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
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
                  onClick={() => handleSearchChange(sug)}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 hover:bg-white text-slate-600 hover:text-emerald-600 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                  “{sug}”
                </button>
              ))}
            </motion.div>
          )}

          {/* Real Insurance Content Search Results Panel */}
          <AnimatePresence>
            {searchQuery.trim() && (
              <RealInsuranceSearchResultPanel
                searchQuery={searchQuery}
                searchResults={searchResults}
                onSelectFeature={(featureItem) => setSelectedContentItem(featureItem)}
                onClose={() => handleSearchChange('')}
                onSelectSuggestion={(sug) => handleSearchChange(sug)}
              />
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
