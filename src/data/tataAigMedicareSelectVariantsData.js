// =============================================================================
// TATA AIG MEDICARE SELECT — COMPREHENSIVE DATA & VARIANTS
// Exact Policy Benefit Sequence & Official Content
// Sections:
//   1. Most Important Features
//   2. Value Added Features
//   3. Additional Features
//   4. Optional Add-ons (Extra Benefits With Extra Premium)
//   5. Premium Saver (Optional Add-ons)
//   6. LIMITATIONS & WAITING PERIODS
// =============================================================================

export const TATA_AIG_SHARED_REPORT_CARD = {
  heading: 'REPORT CARD',
  subheading: 'Tata AIG Performance',
  description: 'Official claim settlement and financial strength metrics.',
  csr: {
    title: 'Claim Settlement Ratio',
    summaryValue: '89.5%',
    subtitle: 'Claim Settlement Ratio',
    explanation: 'On average, Tata AIG settled around 89.5% of claims over the last 3 years.',
    singleYear: '89.5%',
    singleYearLabel: 'Recent Single Year',
    threeYearAvg: '89.5%',
    threeYearAvgLabel: '3 Years Avg Ratio'
  },
  icr: {
    title: 'Incurred Claim Ratio',
    summaryValue: '77.50%',
    subtitle: 'Incurred Claim Ratio',
    explanation: 'For every ₹100 collected in premiums, Tata AIG spends about ₹77.50 on settling claims.',
    range: '77.50%',
    rangeLabel: 'Incurred Claim Ratio'
  },
  complaintVolume: {
    title: 'Complaints/10K',
    summaryValue: '11.6',
    subtitle: 'Complaints/10K',
    explanation: 'Around 11.6 complaints per 10,000 claims settled, showing a low number of complaints.',
    value: '11.6',
    label: 'Complaints/10K — 11.6'
  }
};

export const TATA_AIG_SHARED_COMPANY_STRENGTH = {
  heading: 'COMPANY STRENGTH',
  subheading: 'How reliable/strong is the insurer?',
  description: 'How reliable/strong is the insurer?',
  ownership: {
    title: 'OWNERSHIP / PERCENTAGE',
    summaryValue: '74% / 26%',
    explanation: 'Tata AIG General Insurance is a trusted joint venture combining the legacy of Tata Group with the global underwriting expertise of American International Group (AIG).',
    items: [
      { name: 'Tata Group (Tata Sons)', value: '74%', label: 'Ownership' },
      { name: 'American International Group (AIG)', value: '26%', label: 'Ownership' }
    ]
  },
  creditRating: {
    title: 'CREDIT RATING',
    summaryValue: 'AAA',
    explanation: 'Top-tier credit ratings signify the highest level of financial security and outstanding capability to honor policyholder commitments.',
    items: [
      { agency: 'CRISIL', rating: 'AAA / Stable' },
      { agency: 'ICRA', rating: 'AAA / Stable' }
    ]
  },
  capitalStrength: {
    title: 'CAPITAL STRENGTH',
    summaryValue: '1.95×',
    explanation: "Solvency ratio measures the insurer's financial buffer to pay claims under stress conditions, well above the IRDAI mandatory minimum of 1.50×.",
    value: '1.95×',
    label: 'Solvency Ratio (as of March 2025)'
  },
  financialBase: {
    title: 'FINANCIAL BASE',
    summaryValue: '₹22,000+ Cr',
    explanation: 'Substantial investment assets and capital reserves ensuring long-term claim-paying liquidity across India.',
    value: '₹22,000+ Cr',
    label: 'Investment Assets under Management'
  },
  reinsuranceStrength: {
    title: 'REINSURANCE STRENGTH',
    summaryValue: '90%+',
    explanation: 'Over 90% of reinsurance treaties placed with world-class A+ and AAA rated global reinsurers to absorb catastrophic risks.',
    value: '90%+',
    label: 'Backed by Munich Re, Swiss Re & GIC Re'
  },
  marketPosition: {
    title: 'MARKET POSITION',
    summaryValue: 'Top 5',
    explanation: "Ranked among India's top 5 private general insurers with a comprehensive network of over 10,000+ cashless hospitals nationwide.",
    value: 'Top 5 Private Insurer',
    label: 'Over 2 Crore+ Policies Serviced'
  }
};

export const TATA_AIG_SHARED_BEST_SUITED_FOR = {
  heading: 'BEST SUITED FOR',
  subheading: 'Who should choose this plan?',
  description: 'Target customer profiles and ideal family scenarios for Tata AIG MediCare Select.',
  tagline: 'Ideal recommendation based on coverage, hospital network, and healthcare needs.',
  profiles: [
    {
      title: 'Families Seeking Private Room Hospitalization',
      icon: '🏥',
      summary: 'Families and individuals who want guaranteed Single Private Room accommodation with zero proportionate deduction and no room rent sub-limits.',
      badge: 'Zero Room Cap',
      highlights: [
        'Single Private Room without proportionate deductions',
        'No fixed rupee limit on room rent',
        '100% cashless settlement across network hospitals'
      ]
    },
    {
      title: 'Individuals Wanting Unlimited Restoration',
      icon: '🔄',
      summary: 'Buyers looking for unlimited restore benefits for related and unrelated illnesses during the policy year upon Sum Insured exhaustion.',
      badge: 'Restore Plus',
      highlights: [
        'Automatic unlimited refill of basic Sum Insured',
        'Covers subsequent hospitalizations for family members',
        'No exhaustion worry during critical medical episodes'
      ]
    },
    {
      title: 'Working Professionals & Salaried Employees',
      icon: '👨‍💼',
      summary: 'Salaried customers who can avail an exclusive 7.5% professional discount on premium with corporate email verification.',
      badge: '7.5% Discount',
      highlights: [
        '7.5% direct discount on annual policy premium',
        'Zero mandatory co-payment across network hospitals',
        'Includes pre and post hospitalization expenses'
      ]
    },
    {
      title: 'Cost-Conscious Quality Seekers',
      icon: '🛡️',
      summary: 'Policyholders wanting Tata AIG brand trust, top-tier solvency, and nationwide cashless hospital access with flexible Shared Room / Deductible premium savers.',
      badge: 'High Value',
      highlights: [
        'Backed by Tata Group & AIG global underwriting',
        'Access to 10,000+ cashless hospitals nationwide',
        'Optional consumable protection and cumulative bonus booster'
      ]
    }
  ]
};

// =============================================================================
// METADATA FOR MEDICARE SELECT VARIANTS
// =============================================================================
export const MEDICARE_SELECT_VARIANTS_META = [
  {
    id: 'medicare-select-standard',
    variantKey: 'select',
    name: 'MediCare Select',
    fullName: 'Tata AIG MediCare Select',
    tagline: 'Comprehensive coverage across all network hospitals with Single Private Room, Restore Infinity Plus and unlimited refill.',
    coverage: '5 Lakhs – 3 Crore',
    badge: 'POPULAR CHOICE',
    popular: true,
    highlights: [
      'Room Category: Single Private Room',
      'Restore Infinity Plus: Unlimited Restore',
      'Sub-Limit | Co-Pay: No Copay | No Sublimit',
      'Supercharge Bonus & Consumables: Available as Rider'
    ]
  },
  {
    id: 'medicare-select-smart',
    variantKey: 'smart',
    name: 'MediCare Select Smart',
    fullName: 'Tata AIG MediCare Select Smart',
    tagline: 'Value-optimized healthcare with Twin Sharing room category across dedicated VPN network hospitals.',
    coverage: '5 Lakhs – 25 Lakhs',
    badge: 'SMART VALUE',
    popular: false,
    highlights: [
      'Available Sum Insured: 5 Lakhs – 25 Lakhs',
      'Hospital Type: VPN Only*',
      'Room Category: Twin Sharing',
      'Restore Infinity Plus: Unlimited Restore',
      'Sub-Limit | Co-Pay: No Copay | No Sublimit'
    ]
  },
  {
    id: 'medicare-select-elite',
    variantKey: 'elite',
    name: 'MediCare Select Elite',
    fullName: 'Tata AIG MediCare Select Elite',
    tagline: 'Elite healthcare coverage with Any Room category, Inbuilt Consumables and Inbuilt 5X Super Charge Bonus.',
    coverage: '25 Lakhs – 3 Crore',
    badge: 'ELITE LUXURY',
    popular: false,
    highlights: [
      'Available Sum Insured: 25 Lakhs – 3 Crore',
      'Hospital Type: All Network Hospitals',
      'Room Category: Any Room',
      'Supercharge Bonus: Inbuilt up to 5X',
      'Consumables: Inbuilt'
    ]
  }
];

// =============================================================================
// CORE BENEFIT SECTIONS FOR TATA AIG MEDICARE SELECT (STANDARD / FLAGSHIP)
// Exact 5-Section Architecture:
// 1. Most Important Features
// 2. Value Added Features
// 3. Additional Features
// 4. Optional Add-ons (Extra Benefits With Extra Premium)
// 5. Premium Saver (Optional Add-ons)
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_FEATURES_SECTIONS = [
  // ---------------------------------------------------------------------------
  // 1. MOST IMPORTANT FEATURES
  // ---------------------------------------------------------------------------
  {
    id: 'most-important-features',
    title: 'MOST IMPORTANT FEATURES',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
    items: [
      {
        id: 'select-cashless-policy',
        title: '100% Cashless Policy',
        iconType: 'credit',
        summary: 'Enjoy cashless treatments at network hospitals for eligible hospitalization expenses. It features No Co-pay (no fixed percentage of the bill to pay) and No Sublimits (no separate fixed limits on specific surgeries or treatments).',
        points: []
      },
      {
        id: 'select-room-category',
        title: 'Room Category',
        iconType: 'home',
        subtitle: 'Features specific room choices as outlined in the policy terms.',
        summary: 'Features specific room choices as outlined in the policy terms.',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-pre-post',
        title: 'Pre & Post Hospitalization Expenses',
        iconType: 'calendar',
        summary: 'Covers eligible medical costs like consultations, pharmacy, and lab tests up to 90 days before admission and up to 90 days after discharge (only applicable if the hospitalization claim is covered).',
        points: []
      },
      {
        id: 'select-day-care',
        title: 'Day Care Procedures',
        iconType: 'activity',
        summary: 'Covers eligible treatments and surgeries that require less than 24 hours of hospitalization.',
        points: []
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 2. VALUE ADDED FEATURES
  // ---------------------------------------------------------------------------
  {
    id: 'value-added-features',
    title: 'VALUE ADDED FEATURES',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-restore-infinity-plus',
        title: 'Restore Infinity Plus',
        iconType: 'refresh',
        summary: 'Provides unlimited 100% restorations of the Base Sum Insured for subsequent related or unrelated claims within the same policy year for future hospitalizations.',
        points: []
      },
      {
        id: 'select-no-claim-bonus',
        title: 'No Claim Bonus',
        iconType: 'trending',
        summary: 'Choose between a Cumulative Bonus (50% to 100% increase in Base Sum Insured for every claim-free year) OR a 1% Renewal Premium Discount per claim-free year.',
        points: []
      },
      {
        id: 'select-ayush-benefit',
        title: 'AYUSH Benefit',
        iconType: 'shield',
        summary: 'Covers eligible Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy treatments taken as In-Patient or Day Care up to the Sum Insured.',
        points: []
      },
      {
        id: 'select-organ-donor',
        title: 'Organ Donor',
        iconType: 'heart',
        summary: 'Covers medical expenses for the organ donor to harvest the donated organ up to the Sum Insured.',
        points: []
      },
      {
        id: 'select-professional-discount',
        title: 'Professional Discount',
        iconType: 'award',
        summary: 'Salaried customers can receive a 7.5% discount by verifying a valid corporate email ID via OTP (personal emails like Gmail are ineligible).',
        points: []
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3. ADDITIONAL FEATURES
  // ---------------------------------------------------------------------------
  {
    id: 'additional-features',
    title: 'ADDITIONAL FEATURES',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-domiciliary-treatment',
        title: 'Domiciliary Treatment',
        iconType: 'home',
        summary: 'Covers eligible home treatments lasting more than 3 days when a patient cannot be shifted to a hospital or beds are unavailable.',
        points: []
      },
      {
        id: 'select-ambulance-cover',
        title: 'Ambulance Cover',
        iconType: 'truck',
        summary: 'Reimburses ambulance transportation expenses within a 50 km radius up to the Sum Insured.',
        points: []
      },
      {
        id: 'select-daily-cash',
        title: 'Daily Cash',
        iconType: 'dollar',
        summary: 'Provides a fixed daily cash benefit for shared hospital accommodations (₹1,200/day for Twin Sharing and ₹1,500/day for Multi-Sharing) over and above the Base Sum Insured.',
        points: []
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. OPTIONAL ADD-ONS (EXTRA BENEFITS WITH EXTRA PREMIUM)
  // ---------------------------------------------------------------------------
  {
    id: 'optional-add-ons',
    title: 'OPTIONAL ADD-ONS (EXTRA BENEFITS WITH EXTRA PREMIUM)',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-consumables-benefit',
        title: 'Consumables Benefit',
        iconType: 'shield',
        summary: 'Covers non-medical expenses like gloves, syringes, and cotton to lower out-of-pocket costs.',
        points: []
      },
      {
        id: 'select-supercharge-bonus-rider',
        title: 'Supercharge Bonus Rider',
        iconType: 'trending',
        summary: 'Increases the bonus by 100% to 500% of the Base Sum Insured irrespective of claims.',
        points: []
      },
      {
        id: 'select-infinite-advantage',
        title: 'Infinite Advantage',
        iconType: 'heart',
        summary: 'Provides one unlimited claim in a lifetime for amounts exceeding the available Sum Insured.',
        points: []
      },
      {
        id: 'select-preventive-annual-health-checkup-rider',
        title: 'Preventive Annual Health Checkup Rider',
        iconType: 'clipboard',
        summary: 'Offers a cashless home visit once per policy year for listed tests (e.g., CBC, Lipid Profile, Liver Function Test, HbA1c, Urine Analysis).',
        points: []
      },
      {
        id: 'select-advanced-cover-rider',
        title: 'Advanced Cover Rider',
        iconType: 'clock',
        summary: 'Reduces the pre-existing disease waiting period from 36 months to 30 days specifically for Type 2 Diabetes Mellitus, Hypertension, Hyperlipidemia, and Asthma.',
        points: []
      },
      {
        id: 'select-maternity-care',
        title: 'Maternity Care',
        iconType: 'heart',
        badge: 'OPTIONAL ADD-ON',
        isRider: true,
        summary: 'Provides up to ₹1,00,000 per Policy Year (over and above the Base Sum Insured) for maternity expenses, delivery complications, and first-year newborn vaccinations. An add-on is also available to reduce its waiting period from 24 months to 12 months.',
        points: []
      },
      {
        id: 'select-accidental-death-benefit-rider',
        title: 'Accidental Death Benefit Rider',
        iconType: 'shield',
        summary: 'Pays 100% of the Sum Insured or ₹50,00,000 (whichever is lower) if death occurs directly from an accident within 365 days.',
        points: []
      },
      {
        id: 'select-additional-si-accidental',
        title: 'Additional Sum Insured for Accidental Hospitalization',
        iconType: 'shield',
        summary: 'Provides an extra limit of up to the Base Sum Insured specifically for in-patient accidental hospitalizations.',
        points: []
      },
      {
        id: 'select-cancer-benefit',
        title: 'Cancer Benefit',
        iconType: 'activity',
        summary: 'Pays up to the selected Sum Insured (as a separate individual limit) upon a first-time diagnosis of specified severity cancer after a 30-day initial waiting and survival period.',
        points: []
      },
      {
        id: 'select-domestic-second-opinion',
        title: 'Domestic Second Opinion',
        iconType: 'users',
        summary: 'Allows easy access to medical opinions in India from network providers via digital modes based on your documents.',
        points: []
      },
      {
        id: 'select-early-access',
        title: 'Early Access',
        iconType: 'zap',
        summary: 'Lets you use your next 3 years of coverage in a single year if needed.',
        points: []
      },
      {
        id: 'select-women-suraksha',
        title: 'Women Suraksha (EmpowerHer)',
        iconType: 'heart',
        summary: 'Includes consultation support (She Care+), Polycystic Ovarian Cover (evaluation and treatment limits based on slab), and Women+ Screening & Vaccination Cover for specific cancers and cervical cancer vaccination.',
        points: []
      },
      {
        id: 'select-health-condition-management-program',
        title: 'Health Condition Management Program',
        iconType: 'clipboard',
        summary: 'Offers support for nutrition, weight, chronic conditions, stress, and cancer care assistance.',
        points: []
      },
      {
        id: 'select-mental-wellbeing',
        title: 'Mental Wellbeing',
        iconType: 'smile',
        summary: 'Includes annual mental health screenings (with psychiatrist evaluations and diagnostic tests), psychological therapy/talking therapy sessions (up to 10 sessions), a diet consultation rider (up to 4 sessions), vocational rehabilitation, a stress management rider, and an addiction cessation program.',
        points: []
      },
      {
        id: 'select-emergency-air-ambulance-rider',
        title: 'Emergency Air Ambulance Rider',
        iconType: 'truck',
        summary: 'Reimburses airplane or helicopter emergency air ambulance expenses within India when advised by a doctor.',
        points: []
      },
      {
        id: 'select-international-second-opinion',
        title: 'International Second Opinion',
        iconType: 'globe',
        summary: 'Offers second opinions from empanelled service providers for listed major illnesses (e.g., Cancer, Kidney Failure, Myocardial Infarction, Bone Marrow Transplant).',
        points: []
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. PREMIUM SAVER (OPTIONAL ADD-ONS)
  // ---------------------------------------------------------------------------
  {
    id: 'premium-saver',
    title: 'PREMIUM SAVER (OPTIONAL ADD-ONS)',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-room-category-select',
        title: 'Room Category Select',
        iconType: 'home',
        summary: 'Choose a Twin Sharing Room option for a lower premium.',
        points: []
      },
      {
        id: 'select-introduction-vpn',
        title: 'Valued Provider Network',
        iconType: 'activity',
        summary: 'Opting for a Valued Provider Network lowers premiums, but taking treatments outside this network incurs a 30% co-payment.',
        points: []
      },
      {
        id: 'select-aggregate-deductible-discount',
        title: 'Aggregate Deductible Discount',
        iconType: 'dollar',
        summary: 'Choose a deductible tier (₹10,000, ₹25,000, ₹50,000, or ₹1,00,000) to receive a higher premium discount, applicable once per policy year.',
        points: []
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. LIMITATIONS & WAITING PERIODS
  // ---------------------------------------------------------------------------
  {
    id: 'limitations-waiting-periods',
    title: 'LIMITATIONS & WAITING PERIODS',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
    items: [
      {
        id: 'select-initial-waiting-period',
        title: 'Initial Waiting Period',
        iconType: 'clock',
        summary: '30 days for illness-related claims (accidents are covered as per policy terms).',
        points: []
      },
      {
        id: 'select-pre-existing-diseases-waiting-period',
        title: 'Pre-Existing Diseases Waiting Period',
        iconType: 'heart',
        summary: '36 months.',
        points: []
      },
      {
        id: 'select-specified-disease-waiting-period',
        title: 'Specified Disease/Procedure Waiting Period',
        iconType: 'activity',
        summary: '24 months for listed diseases and procedures.',
        points: []
      },
      {
        id: 'select-permanent-exclusions',
        title: 'Permanent Exclusions',
        iconType: 'shield',
        summary: 'Any existing diseases specifically outlined as permanent exclusions in the policy schedule are not covered.',
        points: []
      }
    ]
  }
];

// =============================================================================
// LIMITATIONS & WAITING PERIODS FOR MEDICARE SELECT
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_LIMITATIONS = {
  heading: 'LIMITATIONS & WAITING PERIODS',
  subheading: 'Terms, Waiting Periods & Exclusions',
  description: 'Terms, Waiting Periods & Exclusions',
  items: [
    {
      id: 'initial',
      title: 'Initial Waiting Period',
      summary: '30 days for illness-related claims (accidents are covered as per policy terms).',
      policyRef: 'Tata AIG MediCare Select Policy Terms',
      durationTag: '30 Days'
    },
    {
      id: 'ped',
      title: 'Pre-Existing Diseases Waiting Period',
      summary: '36 months.',
      policyRef: 'Tata AIG MediCare Select Terms',
      durationTag: '36 Months'
    },
    {
      id: 'specific',
      title: 'Specified Disease/Procedure Waiting Period',
      summary: '24 months for listed diseases and procedures.',
      policyRef: 'Tata AIG Specific Illness Schedule',
      durationTag: '24 Months'
    },
    {
      id: 'permanent',
      title: 'Permanent Exclusions',
      summary: 'Any existing diseases specifically outlined as permanent exclusions in the policy schedule are not covered.',
      policyRef: 'Standard IRDAI & Tata AIG Guidelines',
      durationTag: 'Never Covered'
    }
  ]
};

// =============================================================================
// MUST KNOW DETAILS FOR MEDICARE SELECT
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_MUST_KNOW = {
  heading: 'MUST-KNOW DETAILS',
  subheading: 'Important MediCare Select terms that policyholders should keep in mind',
  buttonLabel: 'MUST KNOW DETAILS',
  layout: 'details-modal',
  items: [
    {
      id: 'cashless-network',
      icon: '💳',
      title: '100% CASHLESS POLICY',
      summary: 'Enjoy cashless treatments at network hospitals for eligible hospitalization expenses. It features No Co-pay (no fixed percentage of the bill to pay) and No Sublimits (no separate fixed limits on specific surgeries or treatments).'
    },
    {
      id: 'room-rent',
      icon: '🏥',
      title: 'ROOM CATEGORY',
      summary: 'Features specific room choices as outlined in the policy terms.'
    },
    {
      id: 'restore-infinity',
      icon: '🔄',
      title: 'RESTORE INFINITY PLUS',
      summary: 'Provides unlimited 100% restorations of the Base Sum Insured for subsequent related or unrelated claims within the same policy year for future hospitalizations.'
    },
    {
      id: 'pre-post',
      icon: '📅',
      title: 'PRE & POST HOSPITALIZATION EXPENSES',
      summary: 'Covers eligible medical costs like consultations, pharmacy, and lab tests up to 90 days before admission and up to 90 days after discharge (only applicable if the hospitalization claim is covered).'
    }
  ]
};

// Standard MediCare Select Object
const MEDICARE_SELECT_STANDARD_CONFIG = {
  planId: 'medicare-select-standard',
  planName: 'MediCare Select',
  fullName: 'Tata AIG MediCare Select',
  companyName: 'Tata AIG',
  subtitle: 'Single Private Room | No Copay | Unlimited Restore',
  tagline: 'Standard essential coverage with Single Private Room and Restore Infinity Plus.',
  coverage: '5 Lakhs – 3 Crore',
  premium: '₹8,200/year',

  uiConfig: {
    primaryColor: '#0038A8',
    accentColor: '#0038A8',
    lightBg: '#F0F4FF',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },

  reportCard: TATA_AIG_SHARED_REPORT_CARD,
  companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,
  limitationsWaitingPeriods: TATA_AIG_MEDICARE_SELECT_LIMITATIONS,
  mustKnow: TATA_AIG_MEDICARE_SELECT_MUST_KNOW,
  bestSuitedFor: TATA_AIG_SHARED_BEST_SUITED_FOR,
  featuresSections: TATA_AIG_MEDICARE_SELECT_FEATURES_SECTIONS
};

// =============================================================================
// COMPLETE DATA CONFIGURATION FOR EACH VARIANT
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_VARIANTS_DATA = {
  'medicare-select': MEDICARE_SELECT_STANDARD_CONFIG,
  'medicare-select-standard': MEDICARE_SELECT_STANDARD_CONFIG,

  // ---------------------------------------------------------------------------
  // VARIANT 1: MEDICARE SELECT SMART
  // ---------------------------------------------------------------------------
  'medicare-select-smart': {
    planId: 'medicare-select-smart',
    planName: 'MediCare Select Smart',
    fullName: 'Tata AIG MediCare Select Smart',
    companyName: 'Tata AIG',
    subtitle: '5 Lakhs – 25 Lakhs | Twin Sharing | VPN Network | Unlimited Restore',
    tagline: 'Value-optimized health insurance with Twin Sharing room category across dedicated VPN hospitals.',
    coverage: '5 Lakhs – 25 Lakhs',
    premium: '₹6,800/year',

    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: TATA_AIG_SHARED_REPORT_CARD,
    companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,
    limitationsWaitingPeriods: TATA_AIG_MEDICARE_SELECT_LIMITATIONS,
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important MediCare Select Smart terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'sum-insured',
          icon: '🛡️',
          title: 'AVAILABLE SUM INSURED: 5 LAKHS – 25 LAKHS',
          summary: 'Sum insured range spanning 5 Lakhs up to 25 Lakhs suited for individual and nuclear family coverage.'
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'TWIN SHARING ROOM CATEGORY',
          summary: 'Hospital room accommodation covered under Twin Sharing category with zero room rent deductions within eligible room type.'
        },
        {
          id: 'restore-copay',
          icon: '🔄',
          title: 'RESTORE INFINITY PLUS & ZERO CO-PAY',
          summary: 'Unlimited Restore on base sum insured for subsequent claims with 0% co-payment and no disease sub-limits.'
        },
        {
          id: 'hospital-type',
          icon: '📍',
          title: 'HOSPITAL TYPE: VPN ONLY*',
          summary: 'Cashless treatment accessible at designated Tata AIG Value Provider Network (VPN) hospitals.'
        }
      ]
    },
    bestSuitedFor: TATA_AIG_SHARED_BEST_SUITED_FOR,
    featuresSections: TATA_AIG_MEDICARE_SELECT_FEATURES_SECTIONS
  },

  // ---------------------------------------------------------------------------
  // VARIANT 3: MEDICARE SELECT ELITE
  // ---------------------------------------------------------------------------
  'medicare-select-elite': {
    planId: 'medicare-select-elite',
    planName: 'MediCare Select Elite',
    fullName: 'Tata AIG MediCare Select Elite',
    companyName: 'Tata AIG',
    subtitle: '25 Lakhs – 3 Crore | Any Room | Inbuilt Consumables & 5X Super Charge | Unlimited Restore',
    tagline: 'Elite health insurance with Any Room category, Inbuilt Consumables and Inbuilt 5X Super Charge Bonus.',
    coverage: '25 Lakhs – 3 Crore',
    premium: '₹14,500/year',

    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: TATA_AIG_SHARED_REPORT_CARD,
    companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,
    limitationsWaitingPeriods: TATA_AIG_MEDICARE_SELECT_LIMITATIONS,
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important MediCare Select Elite terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'sum-insured',
          icon: '🛡️',
          title: 'AVAILABLE SUM INSURED: 25 LAKHS – 3 CRORE',
          summary: 'Premium high sum insured options from 25 Lakhs up to 3 Crore for complete healthcare security.'
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ANY ROOM CATEGORY',
          summary: 'Any Room category covered with zero room rent capping, zero proportionate deduction, including suites and deluxe rooms.'
        },
        {
          id: 'inbuilt-benefits',
          icon: '⭐',
          title: 'INBUILT 5X BONUS & INBUILT CONSUMABLES',
          summary: 'Inbuilt Super Charge Bonus up to 5X and 100% Inbuilt Consumables cover included with zero extra rider cost.'
        },
        {
          id: 'product-offering',
          icon: '✨',
          title: 'PRODUCT OFFERINGS: ONLY FRESH',
          summary: 'Exclusive premium offering tailored for fresh new policy applicants.'
        }
      ]
    },
    bestSuitedFor: TATA_AIG_SHARED_BEST_SUITED_FOR,
    featuresSections: TATA_AIG_MEDICARE_SELECT_FEATURES_SECTIONS
  }
};
