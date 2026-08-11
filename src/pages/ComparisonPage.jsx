import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

// Helper to derive values for each plan dynamically
const getDerivedValue = (plan, company, key) => {
  switch (key) {
    case 'coverage':
      return plan.coverage;
    case 'roomRent':
      return plan.details.roomRent;
    case 'icuLimit': {
      const roomLower = plan.details.roomRent.toLowerCase();
      const isUnlimited = roomLower.includes('no capping') || roomLower.includes('no limit') || roomLower.includes('any room');
      return isUnlimited ? "No Limit" : "Covered up to Sum Insured";
    }
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
      return plan.details.noClaimBonus;
    case 'ambulance': {
      const hasAir = plan.benefits.some(b => b.toLowerCase().includes('air ambulance'));
      return hasAir ? "Air & Road Covered" : "Road Covered";
    }
    case 'healthCheckup': {
      const hasCheckup = plan.benefits.some(b => b.toLowerCase().includes('health check') || b.toLowerCase().includes('screening'));
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
    case 'prePostHospital':
      return plan.details.prePostHospital;
    default:
      return "";
  }
};

// Reusable comparison difference logic engine
const generateDifferenceText = (featureKey, val1, val2, company1, company2) => {
  const name1 = company1.name;
  const name2 = company2.name;
  
  if (featureKey === 'coverage') {
    const num1 = parseFloat(val1.toString().replace(/[^\d.]/g, '')) || 0;
    const num2 = parseFloat(val2.toString().replace(/[^\d.]/g, '')) || 0;
    if (num1 > num2) {
      return `${name1} provides ₹${num1 - num2} Lakh more coverage.`;
    } else if (num2 > num1) {
      return `${name2} provides ₹${num2 - num1} Lakh more coverage.`;
    } else {
      return `Both ${name1} and ${name2} offer the same coverage.`;
    }
  }
  
  if (featureKey === 'premium') {
    const num1 = parseFloat(val1.toString().replace(/[^\d.]/g, '')) || 0;
    const num2 = parseFloat(val2.toString().replace(/[^\d.]/g, '')) || 0;
    const diff = Math.abs(num1 - num2);
    const formattedDiff = diff.toLocaleString('en-IN');
    if (num1 < num2) {
      return `${name1} costs ₹${formattedDiff} less annually.`;
    } else if (num2 < num1) {
      return `${name2} costs ₹${formattedDiff} less annually.`;
    } else {
      return `Both ${name1} and ${name2} cost the same.`;
    }
  }
  
  if (featureKey === 'waitingPeriod' || featureKey === 'preExistingDisease') {
    const getWaitScore = (val) => {
      const v = val.toString().toLowerCase();
      if (v.includes('no waiting') || v.includes('no wait') || v.includes('immediate') || v.includes('0 month')) return 0;
      const matchMonths = v.match(/(\d+)\s*month/);
      if (matchMonths) return parseInt(matchMonths[1], 10);
      const matchYears = v.match(/(\d+)\s*year/);
      if (matchYears) return parseInt(matchYears[1], 10) * 12;
      return 48;
    };
    const w1 = getWaitScore(val1);
    const w2 = getWaitScore(val2);
    if (w1 < w2) {
      return `${name1} has a shorter waiting period.`;
    } else if (w2 < w1) {
      return `${name2} has a shorter waiting period.`;
    } else {
      return `Both ${name1} and ${name2} have the same waiting period.`;
    }
  }

  if (featureKey === 'initialWaitingPeriod' || featureKey === 'specificDisease') {
    const getWaitDays = (val) => {
      const v = val.toString().toLowerCase();
      const matchDays = v.match(/(\d+)\s*day/);
      if (matchDays) return parseInt(matchDays[1], 10);
      const matchYears = v.match(/(\d+)\s*year/);
      if (matchYears) return parseInt(matchYears[1], 10) * 365;
      return 30;
    };
    const d1 = getWaitDays(val1);
    const d2 = getWaitDays(val2);
    if (d1 < d2) {
      return `${name1} has a shorter waiting period.`;
    } else if (d2 < d1) {
      return `${name2} has a shorter waiting period.`;
    } else {
      return `Both ${name1} and ${name2} have the same waiting period.`;
    }
  }
  
  if (featureKey === 'roomRent') {
    const getRoomRentScore = (val) => {
      const v = val.toString().toLowerCase();
      if (v.includes('no capping') || v.includes('no limit') || v.includes('suite')) return 3;
      if (v.includes('single private') || v.includes('private room') || v.includes('standard room')) return 2;
      if (v.includes('twin') || v.includes('sharing') || v.includes('1%')) return 1;
      return 1;
    };
    const s1 = getRoomRentScore(val1);
    const s2 = getRoomRentScore(val2);
    if (s1 > s2) {
      return `${name1} offers more room-rent flexibility.`;
    } else if (s2 > s1) {
      return `${name2} offers more room-rent flexibility.`;
    } else {
      return `Both ${name1} and ${name2} offer the same room-rent terms.`;
    }
  }
  
  if (featureKey === 'noClaimBonus') {
    const getNCBScore = (val) => {
      const v = val.toString().toLowerCase();
      const match = v.match(/(\d+)%/);
      return match ? parseInt(match[1], 10) : 0;
    };
    const s1 = getNCBScore(val1);
    const s2 = getNCBScore(val2);
    if (s1 > s2) {
      return `${name1} offers a higher No Claim Bonus.`;
    } else if (s2 > s1) {
      return `${name2} offers a higher No Claim Bonus.`;
    } else {
      return `Both ${name1} and ${name2} offer the same No Claim Bonus benefit.`;
    }
  }

  if (featureKey === 'prePostHospital') {
    const getDays = (val) => {
      const matches = val.toString().match(/(\d+)\s*days?/gi);
      if (matches && matches.length >= 2) {
        return parseInt(matches[0], 10) + parseInt(matches[1], 10);
      }
      return 0;
    };
    const d1 = getDays(val1);
    const d2 = getDays(val2);
    if (d1 > d2) {
      return `${name1} offers longer pre/post hospitalization coverage.`;
    } else if (d2 > d1) {
      return `${name2} offers longer pre/post hospitalization coverage.`;
    } else {
      return `Both ${name1} and ${name2} offer the same pre/post hospitalization coverage.`;
    }
  }

  if (featureKey === 'cashlessHospitals') {
    const getCount = (val) => {
      return parseInt(val.toString().replace(/[^\d]/g, ''), 10) || 0;
    };
    const c1 = getCount(val1);
    const c2 = getCount(val2);
    if (c1 > c2) {
      return `${name1} has a larger cashless network.`;
    } else if (c2 > c1) {
      return `${name2} has a larger cashless network.`;
    } else {
      return `Both ${name1} and ${name2} have extensive cashless networks.`;
    }
  }

  if (featureKey === 'restoration') {
    const getRestoreScore = (val) => {
      const v = val.toString().toLowerCase();
      if (v.includes('unlimited') || v.includes('forever')) return 3;
      if (v.includes('3x') || v.includes('300%')) return 2.5;
      if (v.includes('100%') || v.includes('restore') || v.includes('refill') || v.includes('reset') || v.includes('recharge')) return 2;
      return 1;
    };
    const s1 = getRestoreScore(val1);
    const s2 = getRestoreScore(val2);
    if (s1 > s2) {
      return `${name1} offers more restoration benefits.`;
    } else if (s2 > s1) {
      return `${name2} offers more restoration benefits.`;
    } else {
      return `Both ${name1} and ${name2} offer restoration benefits.`;
    }
  }

  if (featureKey === 'ambulance') {
    const hasAir = (val) => val.toString().toLowerCase().includes('air');
    const a1 = hasAir(val1);
    const a2 = hasAir(val2);
    if (a1 && !a2) {
      return `${name1} includes Air Ambulance coverage.`;
    } else if (a2 && !a1) {
      return `${name2} includes Air Ambulance coverage.`;
    } else {
      return `Both ${name1} and ${name2} offer ambulance coverage.`;
    }
  }

  // Boolean/Generic logic for other fields
  const isCovered = (val) => {
    const v = val.toString().toLowerCase();
    return v.includes('covered') || v === 'yes' || v === 'available' || v.includes('no capping') || v.includes('no limit');
  };
  const isNotCovered = (val) => {
    const v = val.toString().toLowerCase();
    return v.includes('not covered') || v === 'no' || v === 'not available';
  };

  const cov1 = isCovered(val1);
  const cov2 = isCovered(val2);
  const ncov1 = isNotCovered(val1);
  const ncov2 = isNotCovered(val2);

  if (cov1 && !cov2) {
    return `${name1} includes this benefit.`;
  } else if (cov2 && !cov1) {
    return `${name2} includes this benefit.`;
  } else if (cov1 && cov2) {
    return `Both ${name1} and ${name2} offer this benefit.`;
  } else if (ncov1 && ncov2) {
    return `Neither plan includes this benefit.`;
  }

  if (val1 === val2) {
    return `Both ${name1} and ${name2} offer the same benefit.`;
  }

  return `Compare values above to see details for each plan.`;
};

// Component to render a comparison card for a single company's value on mobile
const MobileValueCard = ({ value, company }) => {
  const isArray = Array.isArray(value);
  
  let isCovered = false;
  let isNotCovered = false;
  
  if (!isArray && value) {
    const lowerVal = value.toString().toLowerCase();
    isCovered = lowerVal.includes('covered') || lowerVal === 'yes' || lowerVal === 'available' || lowerVal.includes('no capping') || lowerVal.includes('no limit');
    isNotCovered = lowerVal.includes('not covered') || lowerVal === 'no' || lowerVal === 'not available';
  }

  return (
    <div 
      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between relative h-full min-h-[100px] transition-all"
      style={{ borderLeft: `3px solid ${company.theme.primary}` }}
    >
      <div className="flex flex-col justify-between h-full space-y-2">
        <div className="flex-grow flex items-center justify-center min-h-[36px]">
          {isArray ? (
            <div className="space-y-1 text-left w-full">
              {value.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-1 text-[10px] font-semibold text-slate-600 leading-tight">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span className="line-clamp-2">{item}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center w-full">
              {isCovered && (
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-emerald-50 text-emerald-600 border border-emerald-100/60">
                  ✓ Covered
                </span>
              )}
              {isNotCovered && (
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-red-50 text-red-600 border border-red-100/60">
                  ✕ Not Covered
                </span>
              )}
              {!isCovered && !isNotCovered && (
                <span className="text-xs sm:text-sm font-black text-slate-800 break-words leading-tight">
                  {value}
                </span>
              )}
              {isCovered && value && !['covered', 'yes', 'available'].includes(value.toString().toLowerCase()) && (
                <span className="block mt-1 text-[10px] font-semibold text-slate-500 line-clamp-2 leading-tight">
                  {value}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="text-center border-t border-slate-50 pt-2 shrink-0">
          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">
            {company.name}
          </span>
        </div>
      </div>
    </div>
  );
};

// Component to render a subtle, neutral Real Difference explanation below the value cards
const DifferenceInsight = ({ text }) => {
  return (
    <div className="mt-3 text-center px-4 space-y-1">
      <div className="flex items-center justify-center gap-1.5">
        <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">
          Real Difference
        </span>
      </div>
      <div className="w-12 h-[1px] bg-slate-100 mx-auto" />
      <p className="text-[11px] font-medium text-slate-500 leading-relaxed max-w-[280px] mx-auto mt-1">
        {text}
      </p>
    </div>
  );
};

// Component to render a feature comparison block on mobile
const MobileFeatureRow = ({ title, val1, val2, company1, company2, featureKey }) => {
  const diffText = generateDifferenceText(featureKey, val1, val2, company1, company2);
  
  return (
    <div className="space-y-2.5 pb-6 border-b border-slate-50 last:border-0">
      {/* Feature Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center px-4"
      >
        <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-widest block leading-tight">
          {title}
        </span>
      </motion.div>

      {/* Value Cards Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 w-full items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="h-full"
        >
          <MobileValueCard value={val1} company={company1} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-full"
        >
          <MobileValueCard value={val2} company={company2} />
        </motion.div>
      </div>

      {/* Difference Insight */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <DifferenceInsight text={diffText} />
      </motion.div>
    </div>
  );
};

// Component to split category sections in mobile view
const CategorySeparator = ({ title }) => {
  return (
    <div className="pt-8 pb-4 flex items-center justify-center gap-3 px-4">
      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-slate-200/80" />
      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full">
        {title}
      </span>
      <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-slate-200/80" />
    </div>
  );
};

// Component to render a feature comparison row for Desktop & Tablet
const DesktopFeatureRow = ({ title, val1, val2, company1, company2, featureKey }) => {
  const diffText = generateDifferenceText(featureKey, val1, val2, company1, company2);
  
  return (
    <div className="py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/20 transition-colors text-center px-4 sm:px-8">
      {/* Feature Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs font-black tracking-widest text-slate-800 uppercase mb-4"
      >
        {title}
      </motion.h3>
      
      {/* Side-by-Side Values Grid */}
      <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto items-stretch mb-3">
        {/* Left Value Card (Company 1) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="h-full"
        >
          <MobileValueCard value={val1} company={company1} />
        </motion.div>

        {/* Right Value Card (Company 2) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-full"
        >
          <MobileValueCard value={val2} company={company2} />
        </motion.div>
      </div>

      {/* Difference Insight */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="space-y-1 mt-2.5"
      >
        <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400 block">
          Real Difference
        </span>
        <div className="w-12 h-[1px] bg-slate-100 mx-auto" />
        <p className="text-xs font-semibold text-slate-500 max-w-md mx-auto mt-1 leading-relaxed">
          {diffText}
        </p>
      </motion.div>
    </div>
  );
};

export default function ComparisonPage() {
  const [searchParams] = useSearchParams();
  const c1 = searchParams.get('c1');
  const c2 = searchParams.get('c2');
  const p1 = searchParams.get('p1');
  const p2 = searchParams.get('p2');

  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Structured features categories mapping for mobile view
  const mobileCategories = [
    {
      category: "Coverage",
      features: [
        { key: "coverage", title: "Sum Insured", val1: getDerivedValue(plan1, company1, 'coverage'), val2: getDerivedValue(plan2, company2, 'coverage') },
        { key: "roomRent", title: "Room Rent", val1: getDerivedValue(plan1, company1, 'roomRent'), val2: getDerivedValue(plan2, company2, 'roomRent') },
        { key: "icuLimit", title: "ICU Limit", val1: getDerivedValue(plan1, company1, 'icuLimit'), val2: getDerivedValue(plan2, company2, 'icuLimit') },
        { key: "dayCare", title: "Day Care", val1: getDerivedValue(plan1, company1, 'dayCare'), val2: getDerivedValue(plan2, company2, 'dayCare') },
      ]
    },
    {
      category: "Waiting Period",
      features: [
        { key: "initialWaitingPeriod", title: "Initial Waiting Period", val1: getDerivedValue(plan1, company1, 'initialWaitingPeriod'), val2: getDerivedValue(plan2, company2, 'initialWaitingPeriod') },
        { key: "preExistingDisease", title: "Pre-existing Disease", val1: getDerivedValue(plan1, company1, 'preExistingDisease'), val2: getDerivedValue(plan2, company2, 'preExistingDisease') },
        { key: "specificDisease", title: "Specific Disease", val1: getDerivedValue(plan1, company1, 'specificDisease'), val2: getDerivedValue(plan2, company2, 'specificDisease') },
      ]
    },
    {
      category: "Benefits",
      features: [
        { key: "noClaimBonus", title: "No Claim Bonus", val1: getDerivedValue(plan1, company1, 'noClaimBonus'), val2: getDerivedValue(plan2, company2, 'noClaimBonus') },
        { key: "ambulance", title: "Ambulance", val1: getDerivedValue(plan1, company1, 'ambulance'), val2: getDerivedValue(plan2, company2, 'ambulance') },
        { key: "healthCheckup", title: "Health Checkup", val1: getDerivedValue(plan1, company1, 'healthCheckup'), val2: getDerivedValue(plan2, company2, 'healthCheckup') },
        { key: "restoration", title: "Restoration", val1: getDerivedValue(plan1, company1, 'restoration'), val2: getDerivedValue(plan2, company2, 'restoration') },
      ]
    },
    {
      category: "Claim & Services",
      features: [
        { key: "cashlessHospitals", title: "Cashless Hospitals", val1: getDerivedValue(plan1, company1, 'cashlessHospitals'), val2: getDerivedValue(plan2, company2, 'cashlessHospitals') },
        { key: "claimSupport", title: "Claim Support", val1: getDerivedValue(plan1, company1, 'claimSupport'), val2: getDerivedValue(plan2, company2, 'claimSupport') },
        { key: "prePostHospital", title: "Pre/Post Hospitalization", val1: getDerivedValue(plan1, company1, 'prePostHospital'), val2: getDerivedValue(plan2, company2, 'prePostHospital') },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden">
      {/* Decorative top background blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#059669]/5 blur-[120px] pointer-events-none" />
      
      {/* Mobile Sticky Comparison Header */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full pt-[88px] pb-3 px-4 border-b border-slate-100/80 bg-white/95 backdrop-blur-[16px] z-40 shadow-xs block md:hidden"
          >
            <div className="max-w-md mx-auto grid grid-cols-2 gap-4 items-center relative">
              {/* Plan 1 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                  <img src={company1.logo} alt={company1.name} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black text-slate-800 truncate leading-tight">
                    {company1.name}
                  </h4>
                  <span className="text-[9px] font-semibold text-slate-400 truncate block">
                    {plan1.name}
                  </span>
                </div>
              </div>

              {/* VS Divider in sticky header */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[8px] font-black text-slate-500 shadow-xs">
                VS
              </div>

              {/* Plan 2 */}
              <div className="flex items-center gap-2 justify-end text-right">
                <div className="min-w-0">
                  <h4 className="text-[10px] font-black text-slate-800 truncate leading-tight">
                    {company2.name}
                  </h4>
                  <span className="text-[9px] font-semibold text-slate-400 truncate block">
                    {plan2.name}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                  <img src={company2.logo} alt={company2.name} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

        {/* ==================== DESKTOP & TABLET COMPARISON VIEW ==================== */}
        <div className="hidden md:block space-y-8">
          {/* Header cards showing the two selected plans side-by-side */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
            {/* Plan 1 Header Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
              style={{ borderTop: `4px solid ${company1.theme.primary}` }}
            >
              <div className="space-y-4 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100/80 p-2 flex items-center justify-center shrink-0"
                >
                  <img src={company1.logo} alt={company1.name} className="w-full h-full object-contain" />
                </motion.div>
                <div className="space-y-1 w-full min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    {company1.name}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                    {plan1.name}
                  </h2>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100/80 text-center">
                <span className="text-base sm:text-lg font-black text-emerald-600 block">
                  {plan1.premium}
                </span>
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mt-1">
                  {plan1.coverage} Cover
                </span>
              </div>
            </motion.div>

            {/* Plan 2 Header Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
              style={{ borderTop: `4px solid ${company2.theme.primary}` }}
            >
              <div className="space-y-4 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100/80 p-2 flex items-center justify-center shrink-0"
                >
                  <img src={company2.logo} alt={company2.name} className="w-full h-full object-contain" />
                </motion.div>
                <div className="space-y-1 w-full min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    {company2.name}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                    {plan2.name}
                  </h2>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100/80 text-center">
                <span className="text-base sm:text-lg font-black text-emerald-600 block">
                  {plan2.premium}
                </span>
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mt-1">
                  {plan2.coverage} Cover
                </span>
              </div>
            </motion.div>
          </div>

          {/* Section Header: Real Difference */}
          <div className="text-center pt-6 pb-2 space-y-2">
            <h2 className="text-sm font-black tracking-widest text-slate-800 uppercase">
              REAL DIFFERENCE
            </h2>
            <p className="text-xs text-slate-400 font-semibold max-w-sm mx-auto leading-relaxed">
              See what actually changes between these two plans.
            </p>
            <div className="w-20 h-[2px] bg-slate-200 mx-auto rounded-full mt-3" />
          </div>

          {/* Features Comparison Area */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {mobileCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <CategorySeparator title={cat.category} />
                
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100/60">
                  {cat.features.map((feature, featIdx) => (
                    <DesktopFeatureRow
                      key={featIdx}
                      title={feature.title}
                      val1={feature.val1}
                      val2={feature.val2}
                      company1={company1}
                      company2={company2}
                      featureKey={feature.key}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== MOBILE COMPARISON VIEW ==================== */}
        <div className="block md:hidden space-y-6">
          {/* Mobile Comparison Header Cards */}
          <div className="grid grid-cols-2 gap-3 px-4 w-full items-stretch">
            {/* Plan 1 Header Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col justify-between relative overflow-hidden"
              style={{ borderTop: `4px solid ${company1.theme.primary}` }}
            >
              <div className="space-y-2 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100/80 p-1.5 flex items-center justify-center shrink-0"
                >
                  <img src={company1.logo} alt={company1.name} className="w-full h-full object-contain" />
                </motion.div>
                <div className="space-y-0.5 min-w-0 w-full">
                  <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 truncate w-full">
                    {company1.name}
                  </h3>
                  <h4 className="text-xs font-black text-slate-900 leading-tight truncate w-full">
                    {plan1.name}
                  </h4>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-50 text-center shrink-0">
                <span className="text-xs font-black text-emerald-600 block">
                  {plan1.premium}
                </span>
                <span className="text-[9px] font-extrabold text-slate-400 block uppercase tracking-wide mt-0.5 truncate">
                  {plan1.coverage} Cover
                </span>
              </div>
            </motion.div>

            {/* Plan 2 Header Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col justify-between relative overflow-hidden"
              style={{ borderTop: `4px solid ${company2.theme.primary}` }}
            >
              <div className="space-y-2 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100/80 p-1.5 flex items-center justify-center shrink-0"
                >
                  <img src={company2.logo} alt={company2.name} className="w-full h-full object-contain" />
                </motion.div>
                <div className="space-y-0.5 min-w-0 w-full">
                  <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 truncate w-full">
                    {company2.name}
                  </h3>
                  <h4 className="text-xs font-black text-slate-900 leading-tight truncate w-full">
                    {plan2.name}
                  </h4>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-50 text-center shrink-0">
                <span className="text-xs font-black text-emerald-600 block">
                  {plan2.premium}
                </span>
                <span className="text-[9px] font-extrabold text-slate-400 block uppercase tracking-wide mt-0.5 truncate">
                  {plan2.coverage} Cover
                </span>
              </div>
            </motion.div>
          </div>

          {/* Section Header: Real Difference */}
          <div className="text-center pt-6 pb-2 px-4 space-y-2">
            <h2 className="text-xs font-black tracking-widest text-slate-800 uppercase">
              REAL DIFFERENCE
            </h2>
            <p className="text-[10px] text-slate-400 font-semibold max-w-[280px] mx-auto leading-relaxed">
              See what actually changes between these two plans.
            </p>
            <div className="w-16 h-[2px] bg-slate-200 mx-auto rounded-full mt-3" />
          </div>

          {/* Feature Sections Mapping */}
          <div className="space-y-4">
            {mobileCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-5">
                <CategorySeparator title={cat.category} />
                
                <div className="space-y-6">
                  {cat.features.map((feature, featIdx) => (
                    <MobileFeatureRow
                      key={featIdx}
                      title={feature.title}
                      val1={feature.val1}
                      val2={feature.val2}
                      company1={company1}
                      company2={company2}
                      featureKey={feature.key}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
