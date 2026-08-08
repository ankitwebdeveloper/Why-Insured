import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Footer() {
  // 5 exact companies to show in footer
  const footerCompanies = [
    { name: "HDFC ERGO", path: "/insurance/hdfc-life" },
    { name: "Tata AIG", path: "/insurance/tata-aig" },
    { name: "Star Health", path: "/insurance/star-health" },
    { name: "Niva Bupa", path: "/insurance/niva-bupa" },
    { name: "Care Health Insurance", path: "/insurance/care-health" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-[#0F172A] text-[#CBD5E1] pt-20 pb-12 border-t border-slate-800/40 overflow-hidden font-sans z-10"
    >
      
      {/* Subtle Corner Glow Detail - Extremely Low Opacity */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[380px] h-[380px] rounded-full bg-emerald-500/[0.03] blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20">
        
        {/* Main Grid: Brand Row + Column Lists */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-8 pb-16">
          
          {/* Brand Presentation Section */}
          <div className="flex flex-col space-y-3.5 max-w-sm text-center lg:text-left items-center lg:items-start self-center lg:self-start">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="WHYINSURED"
                className="h-10 w-auto object-contain select-none filter brightness-0 invert"
              />
            </Link>
            <span className="text-xs text-[#94A3B8] font-semibold tracking-wider pl-0.5">
              Smart Insurance Comparison
            </span>
          </div>

          {/* 3-Column Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full lg:max-w-3xl text-center md:text-left">
            
            {/* Quick Links Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 font-display">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link 
                    to="/" 
                    className="hover:text-white transition-all duration-200 hover:translate-x-[3px] inline-block cursor-pointer text-[#CBD5E1]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/" 
                    className="hover:text-white transition-all duration-200 hover:translate-x-[3px] inline-block cursor-pointer text-[#CBD5E1]"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/compare" 
                    className="hover:text-white transition-all duration-200 hover:translate-x-[3px] inline-block cursor-pointer text-[#CBD5E1]"
                  >
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/claim" 
                    className="hover:text-white transition-all duration-200 hover:translate-x-[3px] inline-block cursor-pointer text-[#CBD5E1]"
                  >
                    Claims
                  </Link>
                </li>
              </ul>
            </div>

            {/* Companies Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 font-display">
                Companies
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {footerCompanies.map((company, idx) => (
                  <li key={idx}>
                    <Link
                      to={company.path}
                      className="hover:text-white transition-all duration-200 hover:translate-x-[3px] inline-block cursor-pointer text-[#CBD5E1]"
                    >
                      {company.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Email Column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 font-display">
                Contact
              </h4>
              <div className="text-sm pt-1">
                <a
                  href="mailto:whyinsured3@gmail.com"
                  className="text-white font-semibold hover:text-emerald-500 hover:underline transition-colors duration-250 break-all cursor-pointer"
                >
                  whyinsured3@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Divider - Very Subtle (Low opacity white) */}
        <div className="border-t border-white/[0.08] my-4" />

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-medium text-[#94A3B8] text-center sm:text-left">
          <p>© 2026 WHYINSURED. All rights reserved.</p>
          <p className="tracking-wider text-[10px] uppercase font-bold text-slate-600">
            Smart Insurance Comparison
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
