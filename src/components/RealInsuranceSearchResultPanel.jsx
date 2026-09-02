import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCheck,
  FiArrowRight,
  FiX,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiPlay
} from 'react-icons/fi';

export default function RealInsuranceSearchResultPanel({
  searchQuery,
  searchResults,
  onSelectFeature,
  onClose,
  onSelectSuggestion
}) {
  const { companies = [], plans = [], contentItems = [], queryConceptTitle } = searchResults;

  // Single expanded card state — only ONE card expanded at a time
  const [expandedPlanKey, setExpandedPlanKey] = useState(null);

  const totalResultsCount = companies.length + plans.length + contentItems.length;

  // Deduplicate and group features by company + plan
  const planFeatureGroups = [];
  const seenPlanKeys = new Set();

  contentItems.forEach((item) => {
    const planKey = `${item.companyId}__${item.planId}`;
    if (!seenPlanKeys.has(planKey)) {
      seenPlanKeys.add(planKey);
      planFeatureGroups.push(item);
    }
  });

  const popularSuggestions = [
    '2x',
    '2x benefits',
    'gloves',
    'consumables',
    'room rent',
    'cashless',
    'restoration'
  ];

  const totalCount = planFeatureGroups.length > 0
    ? planFeatureGroups.length
    : (plans.length > 0 ? plans.length : companies.length);

  const toggleExpand = (planKey) => {
    setExpandedPlanKey((prev) => (prev === planKey ? null : planKey));
  };

  const headerTitle = queryConceptTitle || searchQuery;

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
      {totalResultsCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-50/70 border-b border-slate-100 flex items-start justify-between gap-3"
        >
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-base sm:text-lg font-black text-[#0F172A] font-display tracking-tight leading-tight">
                {headerTitle}
              </h2>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-full">
                {totalCount} {totalCount === 1 ? 'plan' : 'plans'} found
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Compare where this benefit is available.
            </p>
          </div>

          {/* Close / Dismiss Button */}
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 mt-0.5"
            title="Close search results"
          >
            <FiX className="text-base" />
          </button>
        </motion.div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. RESULTS CONTAINER (AUTO NATURAL PAGE SCROLL)                */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div>
        {totalResultsCount > 0 ? (
          <>
            {/* DIRECT MATCHED COMPANIES (If user typed company name) */}
            {companies.length > 0 && (
              <div className="p-3.5 sm:p-5 space-y-2.5 bg-slate-50/40 border-b border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                  Matching Providers
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {companies.map((comp, cIdx) => (
                    <motion.div
                      key={comp.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: cIdx * 0.03 }}
                    >
                      <Link
                        to={`/insurance/${comp.id}`}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3 group hover:-translate-y-0.5"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {comp.logo && (
                            <img
                              src={comp.logo}
                              alt={comp.name}
                              className="w-9 h-9 object-contain p-1 border border-slate-100 rounded-lg bg-slate-50 shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#0038A8] transition-colors block truncate">
                              {comp.name}
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium block truncate">
                              {comp.plans?.length || 0} Available Plans • Explore
                            </span>
                          </div>
                        </div>
                        <FiArrowRight className="text-slate-400 group-hover:text-[#0038A8] group-hover:translate-x-1 transition-all duration-200 shrink-0 text-sm" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* DIRECT MATCHED PLANS (If user searched specifically for a plan name) */}
            {plans.length > 0 && planFeatureGroups.length === 0 && (
              <div className="p-3.5 sm:p-5 space-y-2.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                  Matching Plans
                </span>
                <div className="space-y-2.5">
                  {plans.map((plan, pIdx) => (
                    <motion.div
                      key={`plan-item-${pIdx}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: pIdx * 0.04 }}
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
                        <div className="min-w-0">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                            {plan.companyName}
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-display block truncate">
                            {plan.name}
                          </h3>
                          {plan.description && (
                            <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                              {plan.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <Link
                        to={plan.planUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#0038A8] text-white text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 shadow-2xs group-hover:shadow-xs"
                      >
                        <span>Explore</span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ───────────────────────────────────────────────────────── */}
            {/* 3. PREMIUM PLAN CARDS WITH IN-CARD ACCORDION EXPANSION     */}
            {/* ───────────────────────────────────────────────────────── */}
            {planFeatureGroups.length > 0 && (
              <div className="p-3.5 sm:p-5 space-y-3">
                {planFeatureGroups.map((item, idx) => {
                  const planKey = `${item.companyId}__${item.planId}`;
                  const isExpanded = expandedPlanKey === planKey;

                  return (
                    <motion.div
                      layout
                      key={`feat-plan-${item.id}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden group select-none ${
                        isExpanded
                          ? 'bg-[#F8FAFC] border-slate-300 shadow-md ring-1 ring-slate-900/5'
                          : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 sm:hover:-translate-y-1'
                      }`}
                    >
                      {/* CARD SUMMARY ROW — Click to smoothly expand/collapse */}
                      <div
                        onClick={() => toggleExpand(planKey)}
                        className="p-4 sm:p-5 cursor-pointer space-y-2.5"
                      >
                        {/* Top Row: Company Name, Plan Name & Explore Button */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {item.companyLogo && (
                              <img
                                src={item.companyLogo}
                                alt={item.companyName}
                                className="w-9 h-9 sm:w-10 sm:h-10 object-contain p-1 border border-slate-100 rounded-xl bg-white shadow-2xs shrink-0"
                              />
                            )}
                            <div className="min-w-0">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                {item.companyName}
                              </span>
                              <h3 className="text-base sm:text-lg font-black text-[#0F172A] font-display leading-tight block truncate">
                                {item.planName}
                              </h3>
                            </div>
                          </div>

                          {/* Explore / Expand Trigger Button */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(planKey);
                              }}
                              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                                isExpanded
                                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                  : 'bg-slate-900 text-white hover:bg-[#0038A8]'
                              }`}
                            >
                              <span>{isExpanded ? 'Close' : 'Explore'}</span>
                              <span className={`inline-block transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : 'group-hover:translate-x-0.5'
                              }`}>
                                {isExpanded ? <FiChevronUp className="text-xs" /> : '→'}
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* Matched Feature Highlight Pill */}
                        <div className="flex items-center gap-2 flex-wrap pt-0.5">
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                            <FiCheck className="text-emerald-600 shrink-0 text-xs stroke-[3]" />
                            <span className="font-extrabold">{item.title}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/70">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* ───────────────────────────────────────────────────── */}
                      {/* 4. EXPANDABLE IN-CARD DETAIL PREVIEW                   */}
                      {/* ───────────────────────────────────────────────────── */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="expanded-preview"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden border-t border-slate-100 bg-white"
                          >
                            <div className="p-4 sm:p-5 space-y-3.5 text-left">
                              {/* Feature Title & 2-3 Line Explanation from Plan Content */}
                              <div className="space-y-1">
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                                  {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                                  {item.summary || item.description || item.subtitle || (
                                    'This benefit provides enhanced financial protection under eligible hospitalization conditions as defined in the policy schedule.'
                                  )}
                                </p>
                              </div>

                              {/* Key Highlights / Points if present */}
                              {item.points && item.points.length > 0 && (
                                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                                    Coverage Highlights
                                  </span>
                                  <ul className="space-y-1">
                                    {item.points.slice(0, 2).map((pt, pIdx) => (
                                      <li key={pIdx} className="text-xs text-slate-600 font-medium flex items-start gap-1.5">
                                        <FiCheck className="text-emerald-500 mt-0.5 shrink-0 text-xs" />
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Action Row: View Full Details → & Video Option */}
                              <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 flex-wrap gap-2.5">
                                <Link
                                  to={item.planUrl}
                                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-[#0038A8] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group/link"
                                >
                                  <span>View Full Details</span>
                                  <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">→</span>
                                </Link>

                                {onSelectFeature && item.hasVideo && (
                                  <button
                                    type="button"
                                    onClick={() => onSelectFeature(item)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200/80 transition-colors cursor-pointer"
                                  >
                                    <FiPlay className="text-xs fill-current" />
                                    <span>Watch Video</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          /* ───────────────────────────────────────────────────────── */
          /* CLEAN EMPTY STATE                                         */
          /* ───────────────────────────────────────────────────────── */
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Search
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors cursor-pointer"
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
                We couldn't find "<span className="font-semibold text-slate-700">{searchQuery}</span>" in the available WHYINSURED insurance content.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Try searching for:
              </span>
              <div className="flex items-center justify-center flex-wrap gap-1.5">
                {popularSuggestions.map((sug, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => onSelectSuggestion(sug)}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 transition-all cursor-pointer"
                  >
                    "{sug}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
