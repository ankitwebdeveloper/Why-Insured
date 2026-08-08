import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiClock, FiAward, FiInfo } from 'react-icons/fi';
import { companiesData } from '../data/companies';
import CompareForm from '../components/CompareForm';

// Helper mapper for custom-curated, neutral opinions based on plan features
const getPlanOpinion = (companyId, planId) => {
  const opinions = {
    "hdfc-life": {
      "optima-secure": "Excellent plan for individuals and families wanting high cover and zero non-medical deductions, providing double cover from day one.",
      "my-health-suraksha": "A well-rounded, cost-effective plan with strong recovery benefits and wellness check-ups.",
      "energy-plan": "Highly specialized and beneficial choice for individuals seeking immediate coverage for pre-existing conditions like diabetes and hypertension."
    },
    "tata-aig": {
      "medicare-premier": "Top-tier premium plan suited for global travelers and those desiring suite room privileges with high sum insured options.",
      "medicare-protect": "A great value-for-money, entry-level plan covering basic hospitalization and organic donor treatments.",
      "medicare-plus": "Excellent super top-up choice to boost existing coverage thresholds at a fraction of standard plan costs."
    },
    "star-health": {
      "star-comprehensive": "Premium family coverage offering zero capping on room rent and robust newborn/maternity benefits.",
      "family-health-optima": "Highly flexible and cost-effective family floater with automatic restoration features.",
      "star-cardiac-care": "Crucial specialized coverage for heart patients, offering heart surgical protection with reduced waiting periods."
    },
    "niva-bupa": {
      "reassure-2-0": "A highly competitive policy featuring lock-in premium rates and unlimited restore benefits for complete peace of mind.",
      "health-companion": "A solid, no-copay budget option for families prioritizing alternative treatments and renewal bonuses.",
      "seniors-first": "Tailor-made coverage for seniors that integrates pre-existing condition cover and copay waiver options."
    },
    "icici-lombard": {
      "complete-health-insurance": "Comprehensive security with high wellness incentives, reset benefits, and unlimited room options.",
      "health-shield": "Affordable, entry-level policy with additional diagnostic/OPD benefits and cashless convenience.",
      "golden-shield": "Designed specifically for older adults, prioritizing home hospitalization and senior care support."
    },
    "care-health": {
      "care-plan": "A reliable flagship plan providing full restoration of sum insured and zero copayments for all age groups.",
      "care-freedom": "Simplified, hassle-free policy that eliminates pre-policy medical checkups for all ages.",
      "care-heart": "Focused medical plan offering specialized cardiac support and doctor consultations for heart patients."
    }
  };

  return opinions[companyId]?.[planId] || "A strong choice tailored to offer high cashless network access and balanced medical protection.";
};

export default function ComparisonPage() {
  const [searchParams] = useSearchParams();
  const c1 = searchParams.get('c1');
  const c2 = searchParams.get('c2');
  const p1 = searchParams.get('p1');
  const p2 = searchParams.get('p2');

  // Resolve companies and plans from data
  const company1 = companiesData.find(c => c.id === c1 || c.slug === c1);
  const company2 = companiesData.find(c => c.id === c2 || c.slug === c2);
  const plan1 = company1?.plans.find(p => p.id === p1);
  const plan2 = company2?.plans.find(p => p.id === p2);

  const hasValidParams = company1 && company2 && plan1 && plan2;

  // Render Fallback Selection Page if params are missing/invalid
  if (!hasValidParams) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#059669]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full relative z-10">
          
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <FiArrowLeft className="text-sm" /> Return to Home
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100/60 px-3 py-1 rounded-full">
                Compare Health Policies
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight font-display">
                Plan Comparison Suite
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
                Select two different health insurance providers and their specific plans below to analyze and compare features, ratios, and waiting periods side-by-side.
              </p>
            </div>
            
            <CompareForm />
          </div>
        </div>
      </div>
    );
  }

  // Define CSS theme variables for each side
  const themeStyles1 = {
    '--primary': company1.theme.primary,
    '--secondary': company1.theme.secondary,
    '--accent': company1.theme.accent || company1.theme.primary,
    '--bg': company1.theme.background,
    '--text': company1.theme.text,
  };

  const themeStyles2 = {
    '--primary': company2.theme.primary,
    '--secondary': company2.theme.secondary,
    '--accent': company2.theme.accent || company2.theme.primary,
    '--bg': company2.theme.background,
    '--text': company2.theme.text,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden">
      {/* Decorative top background blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#059669]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="text-sm" /> Back to Search
          </Link>
        </div>

        {/* Header Title Grid */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100/60 px-3 py-1 rounded-full">
            Side-By-Side Evaluation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight font-display">
            Compare Plans
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-lg mx-auto">
            Reviewing details for {company1.name} — {plan1.name} VS {company2.name} — {plan2.name}.
          </p>
        </div>

        {/* Split Comparison Columns with Center Divider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">
          
          {/* ==================== LEFT COLUMN (COMPANY 1) ==================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ ...themeStyles1, backgroundColor: 'var(--bg)' }}
            className="rounded-[32px] border border-slate-200/50 shadow-md p-6 sm:p-8 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Column Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                    Insurer 1
                  </span>
                  <h2 className="text-lg font-black text-slate-900 font-display">
                    {company1.name}
                  </h2>
                  <h3 className="text-base font-black tracking-tight" style={{ color: 'var(--primary)' }}>
                    {plan1.name}
                  </h3>
                </div>
                <div className="shrink-0 flex sm:flex-col sm:items-end justify-between items-center bg-white px-3 py-2 rounded-2xl border border-slate-100 shadow-sm sm:bg-transparent sm:border-0 sm:shadow-none sm:p-0">
                  <img src={company1.logo} alt={company1.name} className="h-10 w-auto max-w-[120px] object-contain select-none" />
                  <span className="text-xs font-bold text-slate-500 sm:mt-1.5">{plan1.premium}</span>
                </div>
              </div>

              {/* 1. RATIO SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  1. Ratio
                </h4>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <FiInfo className="text-base text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Claim Ratio
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                      Not available
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. FEATURES SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  2. Features
                </h4>
                <div className="space-y-3">
                  {plan1.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-600 leading-relaxed">
                      <FiCheck className="text-base shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. WAITING PERIOD SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  3. Waiting Period
                </h4>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl shrink-0" style={{ backgroundColor: 'var(--bg)' }}>
                    <FiClock className="text-base" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Disease Wait Times
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
                      {plan1.details.waitingPeriod}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. OUR OPINION SECTION */}
            <div className="mt-6 pt-6 border-t border-slate-100/60">
              <div className="bg-white/80 backdrop-blur border border-slate-100 rounded-2xl p-5 flex gap-4">
                <FiAward className="text-xl shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                <div className="space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    4. Our Opinion
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    {getPlanOpinion(company1.id, plan1.id)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================== CENTER VS DIVIDER ==================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-xs font-black text-slate-500 font-display">
              VS
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center py-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-xs font-black text-slate-500 font-display">
              VS
            </div>
          </div>

          {/* ==================== RIGHT COLUMN (COMPANY 2) ==================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ ...themeStyles2, backgroundColor: 'var(--bg)' }}
            className="rounded-[32px] border border-slate-200/50 shadow-md p-6 sm:p-8 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Column Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                    Insurer 2
                  </span>
                  <h2 className="text-lg font-black text-slate-900 font-display">
                    {company2.name}
                  </h2>
                  <h3 className="text-base font-black tracking-tight" style={{ color: 'var(--primary)' }}>
                    {plan2.name}
                  </h3>
                </div>
                <div className="shrink-0 flex sm:flex-col sm:items-end justify-between items-center bg-white px-3 py-2 rounded-2xl border border-slate-100 shadow-sm sm:bg-transparent sm:border-0 sm:shadow-none sm:p-0">
                  <img src={company2.logo} alt={company2.name} className="h-10 w-auto max-w-[120px] object-contain select-none" />
                  <span className="text-xs font-bold text-slate-500 sm:mt-1.5">{plan2.premium}</span>
                </div>
              </div>

              {/* 1. RATIO SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  1. Ratio
                </h4>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <FiInfo className="text-base text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Claim Ratio
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                      Not available
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. FEATURES SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  2. Features
                </h4>
                <div className="space-y-3">
                  {plan2.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-600 leading-relaxed">
                      <FiCheck className="text-base shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. WAITING PERIOD SECTION */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  3. Waiting Period
                </h4>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl shrink-0" style={{ backgroundColor: 'var(--bg)' }}>
                    <FiClock className="text-base" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Disease Wait Times
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
                      {plan2.details.waitingPeriod}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. OUR OPINION SECTION */}
            <div className="mt-6 pt-6 border-t border-slate-100/60">
              <div className="bg-white/80 backdrop-blur border border-slate-100 rounded-2xl p-5 flex gap-4">
                <FiAward className="text-xl shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                <div className="space-y-1">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    4. Our Opinion
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    {getPlanOpinion(company2.id, plan2.id)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
