import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiLayers,
  FiX,
  FiSearch,
  FiExternalLink,
  FiInfo,
  FiPlay
} from 'react-icons/fi';

/**
 * Generates a clean, simple 2-3 line explanation of the searched feature based on actual insurance content.
 */
function getFeatureBriefExplanation(query, contentItems = [], detectedCompany = null) {
  const lower = String(query || '').toLowerCase().trim();

  if (lower.includes('2x') || lower.includes('double') || lower.includes('doubling') || lower.includes('secure benefit') || lower.includes('booster')) {
    return '2X Benefits can increase the available coverage under eligible policy benefits, helping you get more coverage when you need it. The exact benefit and conditions depend on the plan.';
  }
  if (lower.includes('consumable') || lower.includes('glove') || lower.includes('syringe') || lower.includes('cotton') || lower.includes('non medical') || lower.includes('protect benefit') || lower.includes('care shield') || lower.includes('safeguard')) {
    return 'Consumables are small medical items used during hospital treatment (like gloves, syringes, cotton, and masks). Some plans cover these expenses through dedicated add-ons, while standard policies may exclude them.';
  }
  if (lower.includes('room') || lower.includes('capping') || lower.includes('single private') || lower.includes('icu')) {
    return 'Room rent refers to the daily hospital room cost covered by your policy. Having no room rent capping or single private room eligibility prevents proportionate deductions on doctor fees, surgery, and nursing charges.';
  }
  if (lower.includes('restor') || lower.includes('recharge') || lower.includes('reset') || lower.includes('refill')) {
    return 'Restoration automatically refills your sum insured when it gets exhausted by earlier hospitalizations during the policy year, ensuring you stay covered for subsequent treatments.';
  }
  if (lower.includes('cashless') || lower.includes('network hospital')) {
    return 'Cashless hospitalization allows the insurance company to settle eligible medical bills directly with network hospitals, saving you from paying large upfront sums during hospital discharge.';
  }
  if (lower.includes('waiting') || lower.includes('ped') || lower.includes('pre-existing') || lower.includes('sugar') || lower.includes('diabetes') || lower.includes('bp') || lower.includes('hypertension')) {
    return 'A waiting period is the duration you must wait after buying a policy before specific illnesses or pre-existing diseases are covered. Choosing plans with reduced waiting riders helps you get covered sooner.';
  }
  if (lower.includes('copay') || lower.includes('co-pay') || lower.includes('cost sharing')) {
    return 'Co-payment is a fixed percentage of the medical claim that you must pay from your own pocket, while the insurance company pays the rest. Policies with 0% co-pay cover the full eligible claim amount.';
  }
  if (lower.includes('maternity') || lower.includes('pregnancy') || lower.includes('delivery') || lower.includes('newborn')) {
    return 'Maternity cover pays for hospitalization expenses incurred during child delivery (normal or C-section) and newborn baby care, subject to plan waiting periods and limits.';
  }
  if (lower.includes('opd') || lower.includes('consultation') || lower.includes('doctor') || lower.includes('clinic')) {
    return 'OPD cover reimburses routine doctor consultations, diagnostic tests, and prescribed pharmacy medicines without requiring 24-hour hospital admission.';
  }
  if (lower.includes('bonus') || lower.includes('ncb') || lower.includes('cumulative')) {
    return 'No Claim Bonus increases your total health insurance cover for every claim-free year at zero extra cost, helping your protection grow over time.';
  }
  if (lower.includes('day care') || lower.includes('daycare') || lower.includes('cataract') || lower.includes('dialysis')) {
    return 'Day Care procedures cover advanced medical surgeries (like cataract, chemotherapy, dialysis) that require less than 24 hours of hospital stay due to technological advancements.';
  }
  if (lower.includes('ayush') || lower.includes('ayurveda') || lower.includes('homeopathy')) {
    return 'AYUSH coverage pays for inpatient medical treatments taken at recognized Ayurvedic, Homeopathic, Unani, or Siddha hospitals.';
  }
  if (lower.includes('pre') && lower.includes('post')) {
    return 'Pre & Post hospitalization covers doctor consultations, diagnostic tests, and pharmacy medicines incurred 60 days before hospital admission and up to 180 days after discharge.';
  }
  if (detectedCompany) {
    return `${detectedCompany.name} is a leading health insurer offering comprehensive coverage with cashless hospital networks and high claim settlement ratios across India.`;
  }
  if (contentItems.length > 0) {
    const first = contentItems[0];
    const text = first.summary || first.description || first.subtitle;
    if (text && text.length > 20) {
      return text.length > 200 ? text.slice(0, 195) + '...' : text;
    }
  }
  return null;
}

export default function RealInsuranceSearchResultPanel({
  searchQuery,
  searchResults,
  onSelectFeature,
  onClose,
  onSelectSuggestion
}) {
  const { companies = [], plans = [], contentItems = [], detectedCompany, queryConceptTitle } = searchResults;

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
    '2x benefits',
    'consumables',
    'room rent',
    'restoration',
    'cashless',
    'maternity'
  ];

  const featureExplanation = getFeatureBriefExplanation(searchQuery, contentItems, detectedCompany);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-left font-sans mt-3 relative z-30 divide-y divide-slate-100"
    >
      {/* 1. TOP HEADER & 2-3 LINE SIMPLE EXPLANATION */}
      {totalResultsCount > 0 && (
        <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-50/90 to-white space-y-2.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-xl font-black text-[#0F172A] font-display">
                {queryConceptTitle || searchQuery}
              </h2>
              {planFeatureGroups.length > 0 && (
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Available in {planFeatureGroups.length} plan{planFeatureGroups.length > 1 ? 's' : ''}
                </span>
              )}
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

          {/* 2-3 line simple explanation */}
          {featureExplanation && (
            <p className="text-xs sm:text-[13.5px] text-slate-600 font-medium leading-relaxed max-w-3xl">
              {featureExplanation}
            </p>
          )}
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
                      className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between gap-3 group"
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
                            {comp.plans?.length || 0} Available Plans • View Details
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
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all flex items-center justify-between flex-wrap gap-3"
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
                        <span>View Details →</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. AVAILABLE IN THESE PLANS */}
            {planFeatureGroups.length > 0 && (
              <div className="p-4 sm:p-6 space-y-3.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-600">
                    Available in these plans
                  </span>
                </div>

                <div className="space-y-3">
                  {planFeatureGroups.map((item, idx) => (
                    <div
                      key={`feat-plan-${item.id}-${idx}`}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all space-y-3"
                    >
                      {/* Top: Company & Plan Info */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          {item.companyLogo && (
                            <img
                              src={item.companyLogo}
                              alt={item.companyName}
                              className="w-9 h-9 object-contain p-1 border border-slate-100 rounded-xl bg-slate-50 shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                              {item.companyName}
                            </span>
                            <Link
                              to={item.planUrl}
                              className="text-sm sm:text-base font-black text-slate-900 hover:text-emerald-600 transition-colors font-sans block truncate"
                            >
                              {item.planName}
                            </Link>
                          </div>
                        </div>

                        {/* Video Available Indicator */}
                        {item.hasVideo && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100 shrink-0">
                            <FiPlay className="text-[8px] fill-current" />
                            <span>Video</span>
                          </span>
                        )}
                      </div>

                      {/* Matched Feature Badge & Description */}
                      <div className="bg-slate-50/80 rounded-xl p-3 sm:p-3.5 border border-slate-100/90 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 flex-wrap">
                          <FiCheckCircle className="text-emerald-600 shrink-0 text-sm" />
                          <span className="font-extrabold">{item.title}</span>
                          {item.badge && (
                            <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded bg-emerald-100/80 text-emerald-800">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        
                        {(item.summary || item.description || item.subtitle) && (
                          <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed line-clamp-2">
                            {item.summary || item.description || item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Action Links: View Details (opens modal) & View Full Plan */}
                      <div className="flex items-center justify-between pt-1 gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => onSelectFeature(item)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs hover:shadow-md transition-all cursor-pointer group"
                        >
                          <span>View Details</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                        </button>

                        <Link
                          to={item.planUrl}
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-slate-100"
                        >
                          <span>Full Plan Page</span>
                          <FiExternalLink className="text-xs" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
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

      {/* Footer helper */}
      {totalResultsCount > 0 && (
        <div className="px-5 py-3 bg-slate-50/60 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>Verified insurance policy data from official filings</span>
          <Link to="/compare" className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1">
            <FiLayers className="text-xs" />
            <span>Compare Plans Side-by-Side</span>
          </Link>
        </div>
      )}
    </motion.div>
  );
}
