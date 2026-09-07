import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiX,
  FiSearch
} from 'react-icons/fi';

export default function RealInsuranceSearchResultPanel({
  searchQuery,
  searchResults,
  onClose
}) {
  const {
    companyGroups = [],
    directPlans = [],
    totalCount = 0
  } = searchResults;

  const hasResults = totalCount > 0 || companyGroups.length > 0 || directPlans.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.995 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden text-left font-sans mt-3.5 relative z-30 divide-y divide-slate-100"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. CLEAN COMPACT HEADER                                       */}
      {/* ───────────────────────────────────────────────────────────── */}
      {hasResults && (
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50/95 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap min-w-0">
            <h2 className="text-sm sm:text-base font-black text-[#0F172A] font-display tracking-tight leading-tight truncate">
              Results for “{searchQuery}”
            </h2>
            <span className="text-[11px] sm:text-xs font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
              {totalCount} {totalCount === 1 ? 'item' : 'items'} found
            </span>
          </div>

          {/* Close / Dismiss Button */}
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
            title="Close search results"
          >
            <FiX className="text-base" />
          </button>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. RESULTS CONTENT                                            */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div>
        {hasResults ? (
          <div className="p-3.5 sm:p-5 space-y-6">
            
            {/* MATCHED COMPANY GROUPS (Company + ALL its plans) */}
            {companyGroups.map((group, gIdx) => (
              <motion.div
                key={`company-group-${group.companyId}-${gIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: gIdx * 0.04 }}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 sm:p-5 space-y-3.5 shadow-2xs"
              >
                {/* Company Header Card */}
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    {group.companyLogo && (
                      <img
                        src={group.companyLogo}
                        alt={group.companyName}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain p-1 border border-slate-100 rounded-xl bg-slate-50 shrink-0"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-display tracking-tight truncate">
                          {group.companyName}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md shrink-0">
                          {group.plans.length} {group.plans.length === 1 ? 'Plan' : 'Plans'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium truncate">
                        {group.companyFullName || 'Health Insurance Provider'}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={group.companyUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 group/comp"
                  >
                    <span>Company Page</span>
                    <FiArrowRight className="text-xs group-hover/comp:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Grouped Plans List for this Company */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                    Plans from {group.companyName} ({group.plans.length})
                  </span>

                  {group.plans.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2.5">
                      {group.plans.map((plan, pIdx) => (
                        <div
                          key={`group-plan-${plan.id}-${pIdx}`}
                          className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex items-center justify-between gap-3 group"
                        >
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A] font-display group-hover:text-emerald-700 transition-colors">
                                {plan.name}
                              </h4>
                              {plan.coverage && (
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                                  {plan.coverage}
                                </span>
                              )}
                            </div>
                            {plan.description && (
                              <p className="text-xs text-slate-500 font-medium line-clamp-1">
                                {plan.description}
                              </p>
                            )}
                          </div>

                          <Link
                            to={plan.planUrl}
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 shadow-2xs group-hover:shadow-xs"
                          >
                            <span>Explore</span>
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-white border border-slate-100 text-xs text-slate-400 font-medium text-center">
                      No standalone plans currently listed.
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* DIRECT PLAN MATCHES (When user searched specific plan names without company match) */}
            {directPlans.length > 0 && (
              <div className="space-y-2.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                  Matching Plans ({directPlans.length})
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {directPlans.map((plan, pIdx) => (
                    <motion.div
                      key={`direct-plan-${plan.id}-${pIdx}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: pIdx * 0.03 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between flex-wrap gap-3 group hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {plan.companyLogo && (
                          <img
                            src={plan.companyLogo}
                            alt={plan.companyName}
                            className="w-10 h-10 object-contain p-1 border border-slate-100 rounded-xl bg-slate-50 shrink-0"
                          />
                        )}
                        <div className="min-w-0 space-y-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            {plan.companyName}
                          </span>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-display">
                              {plan.name}
                            </h3>
                            {plan.coverage && (
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                                {plan.coverage}
                              </span>
                            )}
                          </div>
                          {plan.description && (
                            <p className="text-xs text-slate-500 font-medium line-clamp-1">
                              {plan.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <Link
                        to={plan.planUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 shadow-2xs group-hover:shadow-xs"
                      >
                        <span>Explore Plan</span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          /* ───────────────────────────────────────────────────────── */
          /* CLEAN EMPTY STATE                                         */
          /* ───────────────────────────────────────────────────────── */
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Search Results
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors cursor-pointer"
                title="Close"
              >
                <FiX className="text-base" />
              </button>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
              <FiSearch />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-slate-800 font-display">
                No results found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto">
                We couldn't find “<span className="font-semibold text-slate-700">{searchQuery}</span>” in company or plan names.
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
