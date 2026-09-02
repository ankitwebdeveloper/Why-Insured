import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCheckCircle,
  FiArrowRight,
  FiX,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiPlay,
  FiExternalLink,
  FiCheck
} from 'react-icons/fi';

export default function RealInsuranceSearchResultPanel({
  searchQuery,
  searchResults,
  onSelectFeature,
  onClose,
  onSelectSuggestion
}) {
  const { companies = [], plans = [], contentItems = [], detectedCompany, queryConceptTitle } = searchResults;

  // Track which card is currently expanded (defaults to first item for instant discoverability if results exist)
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

  const totalCount = planFeatureGroups.length > 0 ? planFeatureGroups.length : totalResultsCount;

  const toggleExpand = (planKey) => {
    setExpandedPlanKey((prev) => (prev === planKey ? null : planKey));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-left font-sans mt-3 relative z-30 divide-y divide-slate-100"
    >
      {/* Search Header: Term Title + Found in X plans */}
      {totalResultsCount > 0 && (
        <div className="px-5 sm:px-6 py-4 bg-slate-50/80 flex items-center justify-between gap-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h2 className="text-base sm:text-lg font-black text-[#0F172A] font-display">
              {queryConceptTitle || searchQuery}
            </h2>
            <span className="text-xs text-slate-500 font-medium italic">
              Found in {totalCount} plan{totalCount > 1 ? 's' : ''}
            </span>
          </div>

          {/* Close / Clear Button */}
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold shrink-0"
            title="Close search"
          >
            <FiX className="text-base" />
          </button>
        </div>
      )}

      {/* Main Results Container - Expands naturally with full page scroll */}
      <div className="divide-y divide-slate-100/90">
        
        {totalResultsCount > 0 ? (
          <>
            {/* DIRECT MATCHED COMPANIES (If user typed company name) */}
            {companies.length > 0 && (
              <div className="p-4 sm:p-5 space-y-3 bg-slate-50/40">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                  Matching Providers
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {companies.map((comp) => (
                    <Link
                      key={comp.id}
                      to={`/insurance/${comp.id}`}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between gap-3 group"
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
                          <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-600 transition-colors block truncate">
                            {comp.name}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium block truncate">
                            {comp.plans?.length || 0} Available Plans • Explore
                          </span>
                        </div>
                      </div>
                      <FiArrowRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0 text-sm" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* DIRECT MATCHED PLANS (If user searched specifically for a plan name) */}
            {plans.length > 0 && planFeatureGroups.length === 0 && (
              <div className="p-4 sm:p-5 space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">
                  Matching Plans
                </span>
                <div className="space-y-2.5">
                  {plans.map((plan, pIdx) => (
                    <div
                      key={`plan-item-${pIdx}`}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all flex items-center justify-between flex-wrap gap-3"
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
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                            {plan.companyName}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-slate-900 block truncate">
                            {plan.name}
                          </span>
                          {plan.description && (
                            <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                              {plan.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <Link
                        to={plan.planUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                      >
                        <span>Explore →</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INTERACTIVE MATCHING PLAN CARDS WITH SMOOTH IN-CARD EXPANSION */}
            {planFeatureGroups.length > 0 && (
              <div className="p-4 sm:p-6 space-y-3.5">
                {planFeatureGroups.map((item, idx) => {
                  const planKey = `${item.companyId}__${item.planId}`;
                  const isExpanded = expandedPlanKey === planKey;

                  return (
                    <motion.div
                      layout
                      key={`feat-plan-${item.id}-${idx}`}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'bg-slate-50/70 border-emerald-400 shadow-md ring-2 ring-emerald-500/10'
                          : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-md'
                      }`}
                    >
                      {/* CARD HEADER / SUMMARY ROW - Clickable to toggle */}
                      <div
                        onClick={() => toggleExpand(planKey)}
                        className="p-4 sm:p-5 cursor-pointer select-none space-y-3"
                      >
                        {/* Top: Company & Plan Info + Action */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {item.companyLogo && (
                              <img
                                src={item.companyLogo}
                                alt={item.companyName}
                                className="w-10 h-10 object-contain p-1 border border-slate-100 rounded-xl bg-white shadow-2xs shrink-0"
                              />
                            )}
                            <div className="min-w-0">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                                {item.companyName}
                              </span>
                              <span className="text-sm sm:text-base font-black text-slate-900 font-sans block truncate">
                                {item.planName}
                              </span>
                            </div>
                          </div>

                          {/* Explore Toggle Button */}
                          <div className="flex items-center gap-2 shrink-0">
                            {item.hasVideo && (
                              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                                <FiPlay className="text-[8px] fill-current" />
                                <span>Video</span>
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(planKey);
                              }}
                              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                isExpanded
                                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs hover:shadow-md'
                              }`}
                            >
                              <span>{isExpanded ? 'Collapse' : 'Explore →'}</span>
                              {isExpanded ? (
                                <FiChevronUp className="text-xs" />
                              ) : (
                                <FiChevronDown className="text-xs" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Matched Feature Badge */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                            <FiCheckCircle className="text-emerald-600 shrink-0 text-sm" />
                            <span className="font-extrabold">{item.title}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* EXPANDABLE IN-CARD DETAIL PANEL */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="expanded-content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden border-t border-slate-200/80 bg-white"
                          >
                            <div className="p-4 sm:p-6 space-y-4 text-left">
                              {/* Feature Title & 2-3 Line Explanation */}
                              <div className="space-y-1.5">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                                  {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                                  {item.summary || item.description || item.subtitle || (
                                    'This benefit provides enhanced financial protection under eligible hospitalization conditions as defined in the policy schedule.'
                                  )}
                                </p>
                              </div>

                              {/* Key Highlights / Points if present in data */}
                              {item.points && item.points.length > 0 && (
                                <div className="space-y-2 pt-1 border-t border-slate-100">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                                    Key Takeaways
                                  </span>
                                  <ul className="space-y-1.5">
                                    {item.points.slice(0, 3).map((pt, pIdx) => (
                                      <li key={pIdx} className="text-xs text-slate-600 font-medium flex items-start gap-2">
                                        <FiCheck className="text-emerald-500 mt-0.5 shrink-0 text-xs" />
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Action Row: View Full Details → & Video */}
                              <div className="flex items-center justify-between pt-3 border-t border-slate-100 flex-wrap gap-2.5">
                                <Link
                                  to={item.planUrl}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                                >
                                  <span>View Full Details →</span>
                                  <FiExternalLink className="text-xs" />
                                </Link>

                                {onSelectFeature && item.hasVideo && (
                                  <button
                                    type="button"
                                    onClick={() => onSelectFeature(item)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200/80 transition-colors cursor-pointer"
                                  >
                                    <FiPlay className="text-xs fill-current" />
                                    <span>Watch Video Guide</span>
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
          /* CLEAN NO RESULTS FOUND STATE */
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
