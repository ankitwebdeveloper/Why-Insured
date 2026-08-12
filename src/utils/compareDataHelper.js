// Shared compare data calculation and construction functions.
// This is the single source of truth for both Compare page and Plan Detail page.

export const getCompanyRatioValue = (companyId, ratioType) => {
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

export const getDerivedValue = (plan, company, key) => {
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

export const getPlanDetailData = (plan, company) => {
  if (!plan || !company) return [];
  return [
    {
      title: "Ratio",
      isGrouped: false,
      features: [
        { key: "complaintPer10k", title: "Complaint Per 10k", value: getCompanyRatioValue(company.id, 'complaint') },
        { key: "claimSettlement", title: "Claim Settlement", value: getCompanyRatioValue(company.id, 'settlement') },
        { key: "claimIncurred", title: "Claim Incurred", value: getCompanyRatioValue(company.id, 'incurred') },
      ]
    },
    {
      title: "Features",
      isGrouped: true,
      groups: [
        {
          title: "Basic Important Features",
          features: [
            { key: "cashless100", title: "100% Cashless", value: "✓ Covered" },
            { key: "roomRentLimit", title: "Room Rent Limit", value: getDerivedValue(plan, company, 'roomRentLimit') },
            { key: "prePostHosp", title: "Pre & Post Hosp.", value: getDerivedValue(plan, company, 'prePostHosp') },
            { key: "dayCareProc", title: "Day Care Procedure", value: getDerivedValue(plan, company, 'dayCareProc') },
            { key: "modernRobotic", title: "Modern + Robotic", value: getDerivedValue(plan, company, 'modernRobotic') },
          ]
        },
        {
          title: "Value Added Features",
          features: [
            { key: "restoration", title: "Restoration", value: getDerivedValue(plan, company, 'restoration') },
            { key: "noClaimBonus", title: "No Claim Bonus", value: getDerivedValue(plan, company, 'noClaimBonus') },
            { key: "healthCheckup", title: "Free Health Checkup", value: getDerivedValue(plan, company, 'healthCheckup') },
            { key: "ayushTreatment", title: "AYUSH Treatment", value: getDerivedValue(plan, company, 'ayushTreatment') },
          ]
        },
        {
          title: "Additional Features",
          features: [
            { key: "ambulance", title: "Ambulance", value: getDerivedValue(plan, company, 'ambulance') },
            { key: "airAmbulance", title: "Air Ambulance", value: getDerivedValue(plan, company, 'airAmbulance') },
            { key: "teleConsult", title: "Tele Consultation", value: getDerivedValue(plan, company, 'teleConsult') },
            { key: "renewalDiscount", title: "Renewal Discount", value: getDerivedValue(plan, company, 'renewalDiscount') },
            { key: "dailyCash", title: "Daily Cash Benefits", value: getDerivedValue(plan, company, 'dailyCash') },
            { key: "infinityCover", title: "Infinity Cover", value: getDerivedValue(plan, company, 'infinityCover') },
          ]
        }
      ]
    },
    {
      title: "Waiting Period",
      isGrouped: false,
      features: [
        { key: "initialWaitingPeriod", title: "Initial Waiting Period", value: getDerivedValue(plan, company, 'initialWaitingPeriod') },
        { key: "preExistingDisease", title: "Pre-existing Disease", value: getDerivedValue(plan, company, 'preExistingDisease') },
        { key: "specificDisease", title: "Specific Disease", value: "2 Years" },
      ]
    },
    {
      title: "Fundamentals",
      isGrouped: false,
      features: [
        { key: "cashlessHospitals", title: "Cashless Hospitals", value: getDerivedValue(plan, company, 'cashlessHospitals') },
        { key: "claimSupport", title: "Claim Support", value: getDerivedValue(plan, company, 'claimSupport') },
        { key: "ambulance", title: "Ambulance Cover", value: getDerivedValue(plan, company, 'ambulance') },
      ]
    },
    {
      title: "USP for Target Audience",
      isGrouped: false,
      features: [
        { key: "uspFocus", title: "Core Selling Point", value: plan.description },
        { key: "uspBenefits", title: "Key Plan Benefits", value: plan.benefits },
      ]
    },
    {
      title: "Compare With",
      isGrouped: false,
      features: [
        { key: "compareCoverage", title: "Sum Insured Option", value: plan.coverage },
        { key: "compareEligibility", title: "Eligibility Criteria", value: plan.details.eligibility },
        { key: "compareExclusions", title: "Key Exclusions", value: plan.details.exclusions },
      ]
    }
  ];
};

export const getComparisonSections = (plan1, company1, plan2, company2) => {
  const p1Data = getPlanDetailData(plan1, company1);
  const p2Data = getPlanDetailData(plan2, company2);
  
  return p1Data.map((section, secIdx) => {
    const sec2 = p2Data[secIdx];
    if (section.isGrouped) {
      return {
        title: section.title,
        isGrouped: true,
        groups: section.groups.map((group, groupIdx) => {
          const group2 = sec2.groups[groupIdx];
          return {
            title: group.title,
            features: group.features.map((feat, featIdx) => {
              const feat2 = group2.features[featIdx];
              return {
                key: feat.key,
                title: feat.title,
                val1: feat.value,
                val2: feat2.value
              };
            })
          };
        })
      };
    } else {
      return {
        title: section.title,
        isGrouped: false,
        features: section.features.map((feat, featIdx) => {
          const feat2 = sec2.features[featIdx];
          return {
            key: feat.key,
            title: feat.title,
            val1: feat.value,
            val2: feat2.value
          };
        })
      };
    }
  });
};
