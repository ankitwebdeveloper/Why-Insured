import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiSearch, FiShield, FiLayers, FiBookOpen } from 'react-icons/fi';
import Logo from './Logo';
import { companiesData } from '../data/companies';
import CompareForm from './CompareForm';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop hover open
  const [compareDropdownOpen, setCompareDropdownOpen] = useState(false); // Desktop compare hover open
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isHoveringCompare, setIsHoveringCompare] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isSubmenuOpen && !isHoveringCompare) {
      setCompareDropdownOpen(false);
    }
  }, [isSubmenuOpen, isHoveringCompare]);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/insurance') {
      return location.pathname.startsWith('/insurance') && !location.pathname.includes('/academy');
    }
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 font-sans transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-[24px] border border-slate-900/10 shadow-lg py-2.5 rounded-[22px]' 
          : 'bg-white/75 backdrop-blur-[18px] border border-slate-900/05 shadow-md py-3 rounded-[22px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Desktop Layout - EXACTLY as it currently is */}
        <div className="hidden md:flex items-center justify-between h-12">
          {/* Left Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              setDropdownOpen(false);
            }}
            className="flex items-center shrink-0 cursor-pointer"
          >
            <Logo className="h-8 sm:h-9" />
          </Link>

          {/* Desktop Main Navigation */}
          <div className="flex items-center gap-8">
            {/* Insurance (Hover menu, no arrow) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className={`relative py-1 text-sm font-semibold transition-colors duration-250 cursor-pointer ${
                  isActive('/insurance') ? 'text-[#0F172A]' : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                <span>Insurance</span>
                {isActive('/insurance') && (
                  <motion.span 
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600"
                  />
                )}
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 pt-4 w-72 z-50"
                  >
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden py-4">
                      <div className="px-5 mb-2.5">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 pl-1">
                          Supported Providers
                        </span>
                      </div>
                      
                      <div className="px-2 space-y-1">
                        {companiesData.map((company) => (
                          <Link
                            key={company.id}
                            to={`/insurance/${company.id}`}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3.5 px-3 py-2.5 hover:bg-slate-50 rounded-2xl transition-colors duration-200 cursor-pointer group text-left"
                          >
                            <div className="w-8 h-8 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl p-1.5 shrink-0 transition-transform duration-200 group-hover:scale-105">
                              <img 
                                src={company.logo} 
                                alt={company.name} 
                                className="w-full h-full object-contain" 
                              />
                            </div>
                            <span className="text-xs font-bold text-slate-600 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200">
                              {company.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compare (Hover menu) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => {
                setIsHoveringCompare(true);
                setCompareDropdownOpen(true);
              }}
              onMouseLeave={() => {
                setIsHoveringCompare(false);
                if (!isSubmenuOpen) {
                  setCompareDropdownOpen(false);
                }
              }}
            >
              <button 
                className={`relative py-1 text-sm font-semibold transition-colors duration-250 cursor-pointer ${
                  isActive('/compare') ? 'text-[#0F172A]' : 'text-slate-500 hover:text-[#0F172A]'
                }`}
              >
                <span>Compare</span>
                {isActive('/compare') && (
                  <motion.span 
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600"
                  />
                )}
              </button>
              
              <AnimatePresence>
                {compareDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 pt-4 w-[520px] z-55 pointer-events-auto"
                  >
                    <div 
                      className="bg-white/95 backdrop-blur-xl rounded-[24px] border border-slate-900/10 shadow-2xl p-6 text-left"
                      style={{
                        maxHeight: 'calc(100dvh - 120px)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        scrollbarWidth: 'thin'
                      }}
                    >
                      <div className="mb-4">
                        <h3 className="text-sm font-black text-slate-800 font-display">
                          Compare Health Plans
                        </h3>
                        <p className="text-[10px] text-slate-400 font-semibold">
                          Choose providers and policies to analyze core criteria side-by-side.
                        </p>
                      </div>
                      <CompareForm 
                        onClose={() => {
                          setCompareDropdownOpen(false);
                          setIsHoveringCompare(false);
                        }} 
                        onSubmenuStateChange={(isOpen) => setIsSubmenuOpen(isOpen)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Claim Link */}
            <Link
              to="/claim"
              className={`relative py-1 text-sm font-semibold transition-colors duration-250 cursor-pointer ${
                isActive('/claim') ? 'text-[#0F172A]' : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              <span>Claim</span>
              {isActive('/claim') && (
                <motion.span 
                  layoutId="nav-active-dot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600"
                />
              )}
            </Link>

          </div>

          {/* Right Side: Insurance Academy Pill */}
          <div className="hidden md:block">
            <Link
              to="/academy"
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer inline-block ${
                isActive('/academy')
                  ? 'border-emerald-500 bg-emerald-100/90 text-emerald-800 shadow-sm'
                  : 'border-emerald-500/25 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:-translate-y-0.5 hover:shadow-sm'
              }`}
            >
              Insurance Academy
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Restructured */}
        <div className="md:hidden flex flex-col w-full py-1">
          {/* Row 1: Logo & Insurance Academy */}
          <div className="flex items-center justify-between h-10">
            <Link to="/" className="flex items-center shrink-0 cursor-pointer">
              <Logo className="h-7" />
            </Link>
            <Link
              to="/academy"
              className="text-[10px] font-bold px-3.5 py-1.5 rounded-full border border-emerald-500 bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-[#064e3b] hover:from-emerald-100 hover:to-emerald-200/50 hover:shadow-xs transition-all duration-200 cursor-pointer shadow-xs"
            >
              Insurance Academy
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
