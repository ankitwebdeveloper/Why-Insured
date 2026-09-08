import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheck, FiShield, FiStar, FiSliders, FiAward } from 'react-icons/fi';
import { SUPER_STAR_VARIANTS_META } from '../data/starHealthSuperStarVariantsData';

export default function StarSuperStarVariantSelector({ company }) {
  const logo = company?.logo || '/logos/star-health.png';
  const companyName = company?.name || 'Star Health';

  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-start items-stretch py-2 sm:py-6 px-4">
      {/* Navigation Breadcrumb - Back to Star Health Plans */}
      <div className="shrink-0 text-left mb-4 sm:mb-6">
        <Link
          to="/insurance/star-health"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#003087] transition-colors cursor-pointer"
        >
          <FiArrowLeft className="text-sm" /> Back to Star Health Plans
        </Link>
      </div>

      {/* 1. STAR HEALTH LOGO */}
      <div className="flex flex-col items-center justify-center shrink-0 mb-3 sm:mb-5">
        <img
          src={logo}
          alt={companyName}
          className="w-24 sm:w-44 h-auto max-h-10 sm:max-h-18 object-contain select-none"
        />
      </div>

      {/* 2. HEADING & INTRO */}
      <div className="text-center shrink-0 mb-6 sm:mb-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F4FF] border border-[#003087]/20 text-[#003087] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2 sm:mb-3">
          <FiStar className="text-xs fill-[#003087]" />
          <span>Star Health Super Star</span>
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-display">
          Choose Your Variant
        </h1>
        <div className="w-10 sm:w-14 h-1 bg-[#003087] mx-auto mt-2 mb-3 rounded-full" />
        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
          Super Star offers 5 distinct variants crafted for different healthcare priorities, room categories, and budget requirements. Select a variant to view full coverage details or compare side-by-side.
        </p>
      </div>

      {/* 3. 5 VARIANTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {SUPER_STAR_VARIANTS_META.map((variant, index) => {
          const isPopular = variant.popular;
          return (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className={`bg-white rounded-2xl border ${
                isPopular
                  ? 'border-[#003087] ring-2 ring-[#003087]/20 shadow-md'
                  : 'border-slate-200/80 shadow-2xs hover:border-[#003087]/40 hover:shadow-md'
              } p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 relative overflow-hidden group`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3.5px] ${
                  isPopular ? 'bg-[#003087]' : 'bg-slate-200 group-hover:bg-[#003087]'
                } transition-colors duration-200`}
              />

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] sm:text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-[#F0F4FF] text-[#003087] border border-[#003087]/20 tracking-wider">
                    {variant.badge}
                  </span>
                  {isPopular && (
                    <span className="text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#003087] text-white tracking-wider flex items-center gap-1">
                      <FiAward className="text-xs" /> Most Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#003087] transition-colors duration-200 font-display">
                  {variant.name}
                </h3>

                <div className="text-xs font-extrabold text-[#003087] mt-0.5 mb-2 flex items-center gap-1.5">
                  <FiShield className="text-xs" />
                  <span>Sum Insured: {variant.coverage}</span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 min-h-[36px]">
                  {variant.tagline}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 py-3 border-t border-slate-100 mb-5">
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    Variant Highlights
                  </div>
                  {variant.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 leading-snug">
                      <FiCheck className="text-[#003087] text-sm shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100/80 flex flex-col sm:flex-row gap-2">
                <Link
                  to={`/insurance/star-health/${variant.id}`}
                  className="flex-1 bg-[#003087] hover:bg-[#002266] text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-2xs hover:shadow transition-all cursor-pointer select-none text-center"
                >
                  <span>View Details</span>
                  <FiArrowRight className="text-xs" />
                </Link>
                <Link
                  to={`/compare?c1=star-health&p1=${variant.id}`}
                  className="bg-[#F0F4FF] hover:bg-[#E0EAFF] text-[#003087] border border-[#003087]/25 text-xs sm:text-sm font-bold py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none text-center"
                >
                  <FiSliders className="text-xs" />
                  <span>Compare</span>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. BOTTOM COMPARISON HELPER BANNER */}
      <div className="mt-8 sm:mt-12 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A] font-display">
            Compare Super Star Variants Head-to-Head
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Compare Classic vs Secure or any other pair to evaluate room rent limits, pre/post days, and loyalty bonuses.
          </p>
        </div>
        <Link
          to="/compare?c1=star-health&p1=star-super-star-classic&c2=star-health&p2=star-super-star-secure"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#003087] text-white text-xs font-bold transition-colors cursor-pointer select-none shadow-xs"
        >
          <FiSliders className="text-xs" />
          <span>Compare Classic vs Secure</span>
        </Link>
      </div>
    </div>
  );
}
