import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiShield, FiBookOpen, FiLayers, FiActivity } from 'react-icons/fi';
import { companiesData } from '../data/companies';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileInsurance, setShowMobileInsurance] = useState(false);

  // Filter companies based on case-insensitive query match
  const filteredCompanies = searchQuery.trim()
    ? companiesData.filter((company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
        ease: [0.16, 1, 0.3, 1] // Custom elegant easeOut
      }
    }
  };

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
          className="text-[26px] sm:text-[38px] md:text-[50px] lg:text-[56px] font-black tracking-tight text-[#0F172A] mb-12 font-display leading-[1.12] text-center"
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

        {/* Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="relative max-w-xl mx-auto px-1"
        >
          {/* Glassmorphic Elevated Input Wrapper */}
          <div className="relative flex items-center w-full h-16 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-lg hover:border-slate-300 focus-within:border-emerald-500/80 focus-within:shadow-xl focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all duration-300 px-5 group">
            <FiSearch className="text-2xl text-slate-400 group-focus-within:text-emerald-600 transition-colors mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insurance company..."
              className="w-full h-full bg-transparent text-[#0F172A] text-sm sm:text-base font-semibold placeholder-slate-400 focus:outline-none font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2 cursor-pointer transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Search Dropdown overlay with Logos */}
          <AnimatePresence>
            {searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute left-1 right-1 mt-3 bg-white border border-slate-200/80 rounded-2xl shadow-2xl overflow-hidden z-30 divide-y divide-slate-100"
              >
                {filteredCompanies.length > 0 ? (
                  <div className="max-h-80 overflow-y-auto">
                    {filteredCompanies.map((company) => (
                      <Link
                        key={company.id}
                        to={`/insurance/${company.id}`}
                        className="flex items-center justify-between p-4 hover:bg-slate-50/80 transition-colors group cursor-pointer text-left"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-10 h-10 object-contain p-1.5 border border-slate-100 rounded-xl bg-slate-50 shrink-0"
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-[#0F172A] text-sm sm:text-base group-hover:text-emerald-600 transition-colors font-sans">
                              {company.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-0.5 font-sans">
                              {company.category}
                            </span>
                          </div>
                        </div>
                        <FiArrowRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all text-lg shrink-0" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-400 text-sm font-semibold font-sans">
                    No insurance company found.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Mobile Navigation Buttons (Insurance, Compare, Claim) - Visible only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="md:hidden flex flex-col items-center justify-center gap-4 mt-6 px-1 max-w-xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
            <button
              onClick={() => setShowMobileInsurance(!showMobileInsurance)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold transition-all duration-200 cursor-pointer ${
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
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <FiLayers className="text-[#059669] text-sm shrink-0" />
              <span>Compare</span>
            </Link>
            <Link
              to="/claim"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <FiShield className="text-[#059669] text-sm shrink-0" />
              <span>Claim</span>
            </Link>
            <a
              href="https://panel-hospital.vercel.app/"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 text-slate-700 hover:text-emerald-600 text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <FiActivity className="text-[#059669] text-sm shrink-0" />
              <span>Hospital</span>
            </a>
          </div>

          {/* Supported Providers Grid for Mobile Insurance Button */}
          <AnimatePresence>
            {showMobileInsurance && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-full bg-white border border-slate-100 rounded-2xl p-4 shadow-xl overflow-hidden text-left"
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
    </div>
  );
}
