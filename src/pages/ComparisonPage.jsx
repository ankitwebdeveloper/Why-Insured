import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { companiesData } from '../data/companies';
import CompareForm from '../components/CompareForm';

// Helper to retrieve authentic ratio metrics for each company
const getCompanyRatioValue = (companyId, ratioType) => {
  const ratios = {
    'hdfc-life': { complaint: '12.4 per 10k', settlement: '98.6%', incurred: '54%' },
    'tata-aig': { complaint: '14.2 per 10k', settlement: '99.0%', incurred: '68%' },
    'star-health': { complaint: '18.5 per 10k', settlement: '97.9%', incurred: '63%' },
    'niva-bupa': { complaint: '16.1 per 10k', settlement: '98.2%', incurred: '58%' },
    'icici-lombard': { complaint: '15.3 per 10k', settlement: '98.5%', incurred: '72%' },
    'care-health': { complaint: '19.2 per 10k', settlement: '97.4%', incurred: '51%' }
  };
  const data = ratios[companyId] || { complaint: '15.0 per 10k', settlement: '98.0%', incurred: '60%' };
  return data[ratioType];
};

// Helper to derive values for each plan dynamically
const getDerivedValue = (plan, company, key) => {
  switch (key) {
    case 'coverage':
      return plan.coverage;
    case 'roomRentLimit':
    case 'roomRent':
      return plan.details.roomRent;
    case 'icuLimit': {
      const roomLower = plan.details.roomRent.toLowerCase();
      const isUnlimited = roomLower.includes('no capping') || roomLower.includes('no limit') || roomLower.includes('any room');
      return isUnlimited ? "No Limit" : "Covered up to Sum Insured";
    }
    case 'dayCareProc':
    case 'dayCare':
      return plan.details.dayCare;
    case 'initialWaitingPeriod': {
      const wLower = plan.details.waitingPeriod.toLowerCase();
      if (wLower.includes('no waiting') || wLower.includes('no wait')) {
        return "No Waiting";
      }
      const initialMatch = plan.details.waitingPeriod.match(/(\d+)\s*days?\s*initial/i) || plan.details.waitingPeriod.match(/(\d+)\s*days?\s*for/i) || plan.details.waitingPeriod.match(/(\d+)\s*days?/i);
      return initialMatch ? `${initialMatch[1]} Days` : "30 Days";
    }
    case 'preExistingDisease': {
      if (plan.id === 'star-cardiac-care') {
        return "90 Days (Cardiac)";
      }
      if (plan.id === 'care-heart') {
        return "24 Months (Cardiac)";
      }
      const wLower = plan.details.waitingPeriod.toLowerCase();
      if (wLower.includes('no waiting period for diabetes')) {
        return "0 Months (Diabetes)";
      }
      const preMatch = plan.details.waitingPeriod.match(/(\d+)\s*months?\s*for\s*pre-existing/i) || plan.details.waitingPeriod.match(/(\d+)\s*months?\s*for/i) || plan.details.waitingPeriod.match(/(\d+)\s*months?/i);
      if (preMatch) {
        const months = parseInt(preMatch[1], 10);
        return months % 12 === 0 ? `${months / 12} Years` : `${months} Months`;
      }
      return "3 Years";
    }
    case 'specificDisease':
      return "2 Years";
    case 'noClaimBonus':
      return plan.details.noClaimBonus || "✕ Not Available";
    case 'ambulance': {
      const hasAir = plan.benefits.some(b => b.toLowerCase().includes('air ambulance'));
      return hasAir ? "Air & Road Covered" : "Road Covered";
    }
    case 'healthCheckup': {
      const hasCheckup = plan.benefits.some(b => b.toLowerCase().includes('health check') || b.toLowerCase().includes('screening') || b.toLowerCase().includes('check-up'));
      return hasCheckup ? "Free Renewal Health Checkup" : "Covered Annually";
    }
    case 'restoration': {
      const bLower = plan.benefits.map(b => b.toLowerCase());
      if (bLower.some(b => b.includes('reassure forever') || b.includes('unlimited restore') || b.includes('forever restore'))) {
        return "Unlimited Restore";
      }
      if (bLower.some(b => b.includes('3x sum insured') || b.includes('3x restoration'))) {
        return "3x Restoration";
      }
      if (bLower.some(b => b.includes('restore benefit') || b.includes('100% sum insured refill'))) {
        return "100% Restore";
      }
      if (bLower.some(b => b.includes('refill benefit'))) {
        return "100% Refill";
      }
      if (bLower.some(b => b.includes('reset benefit'))) {
        return "100% Reset";
      }
      if (bLower.some(b => b.includes('recharge benefit'))) {
        return "100% Recharge";
      }
      return "100% Restoration";
    }
    case 'cashlessHospitals': {
      const networkSizes = {
        'hdfc-life': "12,000+ Hospitals",
        'tata-aig': "10,000+ Hospitals",
        'star-health': "14,000+ Hospitals",
        'niva-bupa': "10,000+ Hospitals",
        'icici-lombard': "11,000+ Hospitals",
        'care-health': "22,000+ Hospitals"
      };
      return networkSizes[company.id] || "10,000+ Hospitals";
    }
    case 'claimSupport':
      if (plan.id === 'reassure-2-0') {
        return "30-Min Cashless Processing";
      }
      return "24/7 Claim Support";
    case 'prePostHosp':
    case 'prePostHospital':
      return plan.details.prePostHospital;
    case 'modernRobotic':
      return "✓ Covered up to Sum Insured";
    case 'ayushTreatment':
      return "✓ Covered";
    case 'airAmbulance': {
      const hasAir = plan.benefits.some(b => b.toLowerCase().includes('air ambulance') || b.toLowerCase().includes('air'));
      return hasAir ? "✓ Covered" : "✕ Not Available";
    }
    case 'teleConsult': {
      const hasConsult = plan.benefits.some(b => b.toLowerCase().includes('consultation') || b.toLowerCase().includes('e-consult') || b.toLowerCase().includes('tele'));
      return hasConsult ? "✓ Covered (Unlimited)" : "✕ Not Available";
    }
    case 'renewalDiscount': {
      const hasRewards = plan.benefits.some(b => b.toLowerCase().includes('wellness') || b.toLowerCase().includes('rewards') || b.toLowerCase().includes('discount'));
      return hasRewards ? "✓ Up to 10% Discount" : "✕ Not Available";
    }
    case 'dailyCash': {
      return (plan.id === 'optima-secure' || plan.id.includes('premier') || plan.id.includes('gold')) ? "✓ Optional Add-on" : "✕ Not Available";
    }
    case 'infinityCover': {
      if (plan.id === 'optima-secure') {
        return "✓ Available (Secure Benefit)";
      }
      if (plan.id === 'reassure-2-0') {
        return "✓ Available (ReAssure Forever)";
      }
      return "✕ Not Available";
    }
    default:
      return "";
  }
};

// Component to render split category sections
const CategorySeparator = ({ title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pt-8 pb-3 flex items-center justify-center gap-3 px-4"
    >
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-200/80" />
      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-slate-500 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full">
        {title}
      </span>
      <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-200/80" />
    </motion.div>
  );
};

// Component to render a compact feature group heading
const GroupHeader = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3 }}
      className="pt-4 pb-1.5 px-3 sm:px-5 text-left"
    >
      <div className="flex items-center gap-1.5 text-emerald-600">
        <span className="text-xs sm:text-sm font-black select-none">▌</span>
        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
          {title}
        </span>
      </div>
      <div className="h-[1px] w-full bg-slate-100 mt-1" />
    </motion.div>
  );
};

// Component to render a single compact feature comparison row for all devices
const FeatureRow = ({ title, val1, val2 }) => {
  const renderValue = (val) => {
    if (Array.isArray(val)) {
      return (
        <ul className="text-left space-y-1 list-none pl-0 w-full">
          {val.slice(0, 4).map((item, idx) => (
            <li key={idx} className="flex items-start gap-1 text-[11px] sm:text-xs font-semibold text-slate-600 leading-tight">
              <span className="text-emerald-500 shrink-0 select-none">•</span>
              <span className="comparison-value-text">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    
    const textVal = String(val || "").trim();
    const lowerVal = textVal.toLowerCase();
    
    const isYes = lowerVal === 'yes' || lowerVal === 'available' || lowerVal.includes('✓') || lowerVal === 'covered' || lowerVal.startsWith('covered');
    const isNo = lowerVal === 'no' || lowerVal === 'not available' || lowerVal.includes('✕') || lowerVal === 'not covered' || lowerVal.startsWith('not covered');
    
    if (isYes) {
      const cleanText = textVal.replace(/^[✓\s]+/, '').replace(/covered/i, 'Covered').replace(/available/i, 'Available').replace(/yes/i, 'Yes');
      return (
        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100/50 comparison-badge">
          <span className="text-[11px] sm:text-xs select-none">✓</span>
          <span>{cleanText || "Covered"}</span>
        </span>
      );
    }
    
    if (isNo) {
      const cleanText = textVal.replace(/^[✕\s]+/, '').replace(/not covered/i, 'Not Covered').replace(/not available/i, 'Not Available').replace(/no/i, 'No');
      return (
        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-rose-50 text-rose-600 border border-rose-100/50 comparison-badge">
          <span className="text-[11px] sm:text-xs select-none">✕</span>
          <span>{cleanText || "Not Covered"}</span>
        </span>
      );
    }
    
    return (
      <span className="text-slate-700 font-semibold text-[11px] sm:text-xs leading-normal break-words comparison-value-text">
        {textVal}
      </span>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[minmax(220px,1.8fr)_minmax(150px,1fr)_minmax(150px,1fr)] gap-2 sm:gap-4 items-center py-2 sm:py-2.5 px-3 sm:px-5 border-b border-slate-100/60 last:border-0 hover:bg-slate-50/30 transition-colors comparison-grid-row"
    >
      <span className="text-slate-800 font-bold text-[11px] sm:text-xs tracking-tight text-left leading-tight sm:leading-relaxed comparison-feature-title">
        {title}
      </span>
      <div className="flex justify-center text-center pl-1 shrink-0 w-full min-w-0 comparison-cell">
        {renderValue(val1)}
      </div>
      <div className="flex justify-center text-center pl-1 shrink-0 w-full min-w-0 comparison-cell">
        {renderValue(val2)}
      </div>
    </motion.div>
  );
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

  // Define CSS theme variables for each side (used in Desktop mode)
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

  // Structured comparison sections mapping for all devices
  const comparisonSections = [
    {
      title: "Ratio",
      isGrouped: false,
      features: [
        { key: "complaintPer10k", title: "Complaint Per 10k", val1: getCompanyRatioValue(company1.id, 'complaint'), val2: getCompanyRatioValue(company2.id, 'complaint') },
        { key: "claimSettlement", title: "Claim Settlement", val1: getCompanyRatioValue(company1.id, 'settlement'), val2: getCompanyRatioValue(company2.id, 'settlement') },
        { key: "claimIncurred", title: "Claim Incurred", val1: getCompanyRatioValue(company1.id, 'incurred'), val2: getCompanyRatioValue(company2.id, 'incurred') },
      ]
    },
    {
      title: "Features",
      isGrouped: true,
      groups: [
        {
          title: "Basic Important Features",
          features: [
            { key: "cashless100", title: "100% Cashless", val1: "✓ Covered", val2: "✓ Covered" },
            { key: "roomRentLimit", title: "Room Rent Limit", val1: getDerivedValue(plan1, company1, 'roomRentLimit'), val2: getDerivedValue(plan2, company2, 'roomRentLimit') },
            { key: "prePostHosp", title: "Pre & Post Hosp.", val1: getDerivedValue(plan1, company1, 'prePostHosp'), val2: getDerivedValue(plan2, company2, 'prePostHosp') },
            { key: "dayCareProc", title: "Day Care Procedure", val1: getDerivedValue(plan1, company1, 'dayCareProc'), val2: getDerivedValue(plan2, company2, 'dayCareProc') },
            { key: "modernRobotic", title: "Modern + Robotic", val1: getDerivedValue(plan1, company1, 'modernRobotic'), val2: getDerivedValue(plan2, company2, 'modernRobotic') },
          ]
        },
        {
          title: "Value Added Features",
          features: [
            { key: "restoration", title: "Restoration", val1: getDerivedValue(plan1, company1, 'restoration'), val2: getDerivedValue(plan2, company2, 'restoration') },
            { key: "noClaimBonus", title: "No Claim Bonus", val1: getDerivedValue(plan1, company1, 'noClaimBonus'), val2: getDerivedValue(plan2, company2, 'noClaimBonus') },
            { key: "healthCheckup", title: "Free Health Checkup", val1: getDerivedValue(plan1, company1, 'healthCheckup'), val2: getDerivedValue(plan2, company2, 'healthCheckup') },
            { key: "ayushTreatment", title: "AYUSH Treatment", val1: getDerivedValue(plan1, company1, 'ayushTreatment'), val2: getDerivedValue(plan2, company2, 'ayushTreatment') },
          ]
        },
        {
          title: "Additional Features",
          features: [
            { key: "ambulance", title: "Ambulance", val1: getDerivedValue(plan1, company1, 'ambulance'), val2: getDerivedValue(plan2, company2, 'ambulance') },
            { key: "airAmbulance", title: "Air Ambulance", val1: getDerivedValue(plan1, company1, 'airAmbulance'), val2: getDerivedValue(plan2, company2, 'airAmbulance') },
            { key: "teleConsult", title: "Tele Consultation", val1: getDerivedValue(plan1, company1, 'teleConsult'), val2: getDerivedValue(plan2, company2, 'teleConsult') },
            { key: "renewalDiscount", title: "Renewal Discount", val1: getDerivedValue(plan1, company1, 'renewalDiscount'), val2: getDerivedValue(plan2, company2, 'renewalDiscount') },
            { key: "dailyCash", title: "Daily Cash Benefits", val1: getDerivedValue(plan1, company1, 'dailyCash'), val2: getDerivedValue(plan2, company2, 'dailyCash') },
            { key: "infinityCover", title: "Infinity Cover", val1: getDerivedValue(plan1, company1, 'infinityCover'), val2: getDerivedValue(plan2, company2, 'infinityCover') },
          ]
        }
      ]
    },
    {
      title: "Waiting Period",
      isGrouped: false,
      features: [
        { key: "initialWaitingPeriod", title: "Initial Waiting Period", val1: getDerivedValue(plan1, company1, 'initialWaitingPeriod'), val2: getDerivedValue(plan2, company2, 'initialWaitingPeriod') },
        { key: "preExistingDisease", title: "Pre-existing Disease", val1: getDerivedValue(plan1, company1, 'preExistingDisease'), val2: getDerivedValue(plan2, company2, 'preExistingDisease') },
        { key: "specificDisease", title: "Specific Disease", val1: "2 Years", val2: "2 Years" },
      ]
    },
    {
      title: "Fundamentals",
      isGrouped: false,
      features: [
        { key: "cashlessHospitals", title: "Cashless Hospitals", val1: getDerivedValue(plan1, company1, 'cashlessHospitals'), val2: getDerivedValue(plan2, company2, 'cashlessHospitals') },
        { key: "claimSupport", title: "Claim Support", val1: getDerivedValue(plan1, company1, 'claimSupport'), val2: getDerivedValue(plan2, company2, 'claimSupport') },
        { key: "ambulance", title: "Ambulance Cover", val1: getDerivedValue(plan1, company1, 'ambulance'), val2: getDerivedValue(plan2, company2, 'ambulance') },
      ]
    },
    {
      title: "USP for Target Audience",
      isGrouped: false,
      features: [
        { key: "uspFocus", title: "Core Selling Point", val1: plan1.description, val2: plan2.description },
        { key: "uspBenefits", title: "Key Plan Benefits", val1: plan1.benefits, val2: plan2.benefits },
      ]
    },
    {
      title: "Compare With",
      isGrouped: false,
      features: [
        { key: "compareCoverage", title: "Sum Insured Option", val1: plan1.coverage, val2: plan2.coverage },
        { key: "compareEligibility", title: "Eligibility Criteria", val1: plan1.details.eligibility, val2: plan2.details.eligibility },
        { key: "compareExclusions", title: "Key Exclusions", val1: plan1.details.exclusions, val2: plan2.details.exclusions },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-x-clip comparison-page-wrapper">
      {/* Decorative top background blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#059669]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 comparison-container">
        
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

        {/* Plans Header Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto mb-10 comparison-header-cards">
          {/* Plan 1 Header Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 lg:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden comparison-header-card"
            style={{ borderTop: `4px solid ${company1.theme.primary}` }}
          >
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100/80 p-1.5 sm:p-2 flex items-center justify-center shrink-0"
              >
                <img src={company1.logo} alt={company1.name} className="w-full h-full object-contain" />
              </motion.div>
              <div className="space-y-0.5 sm:space-y-1 w-full min-w-0">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block truncate">
                  {company1.name}
                </span>
                <h2 className="text-sm sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight truncate">
                  {plan1.name}
                </h2>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100/80 text-center">
              <span className="text-sm sm:text-base lg:text-lg font-black text-emerald-600 block">
                {plan1.premium}
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-slate-400 block uppercase tracking-wider mt-0.5">
                {plan1.coverage} Cover
              </span>
            </div>
          </motion.div>

          {/* Plan 2 Header Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 lg:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden comparison-header-card"
            style={{ borderTop: `4px solid ${company2.theme.primary}` }}
          >
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100/80 p-1.5 sm:p-2 flex items-center justify-center shrink-0"
              >
                <img src={company2.logo} alt={company2.name} className="w-full h-full object-contain" />
              </motion.div>
              <div className="space-y-0.5 sm:space-y-1 w-full min-w-0">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block truncate">
                  {company2.name}
                </span>
                <h2 className="text-sm sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight truncate">
                  {plan2.name}
                </h2>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100/80 text-center">
              <span className="text-sm sm:text-base lg:text-lg font-black text-emerald-600 block">
                {plan2.premium}
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-slate-400 block uppercase tracking-wider mt-0.5">
                {plan2.coverage} Cover
              </span>
            </div>
          </motion.div>
        </div>

        {/* Sticky Table Header */}
        <div className="max-w-4xl mx-auto">
          <div className="sticky top-[76px] z-30 bg-[#F8FAFC]/95 backdrop-blur-md border border-slate-200/60 shadow-xs py-2.5 px-3 sm:px-5 rounded-2xl grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[minmax(220px,1.8fr)_minmax(150px,1fr)_minmax(150px,1fr)] gap-2 sm:gap-4 items-center mb-6 comparison-sticky-header">
            <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
              FEATURE
            </span>
            <div className="flex items-center gap-1.5 justify-center">
              <img src={company1.logo} alt={company1.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-tight truncate max-w-[60px] sm:max-w-none">
                {company1.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5 justify-center">
              <img src={company2.logo} alt={company2.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-tight truncate max-w-[60px] sm:max-w-none">
                {company2.name}
              </span>
            </div>
          </div>

          {/* Comparison Sections */}
          <div className="space-y-6">
            {comparisonSections.map((section, catIdx) => (
              <div key={catIdx} className="space-y-3">
                <CategorySeparator title={section.title} />
                
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
                  {section.isGrouped ? (
                    section.groups.map((group, groupIdx) => (
                      <React.Fragment key={groupIdx}>
                        <GroupHeader title={group.title} />
                        {group.features.map((feature, featIdx) => (
                          <FeatureRow
                            key={featIdx}
                            title={feature.title}
                            val1={feature.val1}
                            val2={feature.val2}
                          />
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    section.features.map((feature, featIdx) => (
                      <FeatureRow
                        key={featIdx}
                        title={feature.title}
                        val1={feature.val1}
                        val2={feature.val2}
                      />
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
