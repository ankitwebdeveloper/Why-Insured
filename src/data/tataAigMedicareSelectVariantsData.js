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
        summary: 'Get cashless treatment at network hospitals, for eligible hospitalisation expenses covered under the policy.',
        points: [
          "No Co-pay: You don't have to pay a fixed percentage of the eligible hospital bill.",
          'No Sublimits: There is no separate fixed limit on eligible surgeries or treatments, as per the policy terms.'
        ]
      },
      {
        id: 'select-room-category',
        title: 'Room Category (Must Read)',
        iconType: 'home',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-pre-post',
        title: 'Pre & Post Hospitalization expenses',
        iconType: 'calendar',
        summary: 'Covers eligible medical expenses such as doctor consultations, medicines/pharmacy expenses, lab tests, etc.',
        points: [
          'Pre-Hospitalisation: Up to 90 days before admission',
          'Post-Hospitalisation: Up to 90 days after discharge',
          'Important Note: These may look like OPD expenses, such as consultations, medicines and tests. However, they are not standalone OPD expenses. If the hospitalisation claim is covered, eligible Pre & Post Hospitalisation expenses will also be covered. If the hospitalisation claim is not covered, these expenses will not be covered'
        ]
      },
      {
        id: 'select-day-care',
        title: 'Day Care Procedures',
        iconType: 'activity',
        summary: 'Covers eligible treatments that require less than 24 hours of hospitalisation.',
        points: [
          'Example: Some surgeries or medical procedures can be completed in less than 24 hours and may still be covered under Day Care Treatment.'
        ]
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
        title: 'Restore Infinity Plus (Restoration)',
        iconType: 'refresh',
        summary: '',
        points: [
          'Unlimited restorations during a policy year.',
          'Restores 100% of the Base Sum Insured for subsequent related or unrelated claims within the policy year.',
          'Example: ₹10 Lakh Base SI → 10 Lakh Restored → 10 Lakh Restored Again → Unlimited Times',
          'Important Note: Restore Infinity Plus is available for your next hospitalisation, not the same hospitalisation.'
        ]
      },
      {
        id: 'select-no-claim-bonus',
        title: 'No Claim Bonus',
        iconType: 'trending',
        summary: '',
        points: [
          'Cumulative Bonus: 50% to 100% for every claim-free year.',
          'Example: ₹20 Lakh Base SI → ₹30 Lakh → ₹40 Lakh (Bonus increases by 50% of Base SI each claim-free year, up to 100%.)',
          'OR',
          '1% Discount on Renewal Premium for every claim-free year.',
          'Important Note: You can choose either Cumulative Bonus or Renewal Premium Discount. Cumulative Bonus applies only when the Renewal Premium Discount is not availed.'
        ]
      },
      {
        id: 'select-ayush-benefit',
        title: 'AYUSH Benefit',
        iconType: 'shield',
        summary: 'Covers eligible AYUSH treatments taken as In-Patient or Day Care, such as Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy, up to the Sum Insured.',
        points: []
      },
      {
        id: 'select-organ-donor',
        title: 'Organ Donor',
        iconType: 'heart',
        summary: 'Covers eligible medical expenses of the organ donor for harvesting the donated organ, up to the Sum Insured.',
        points: []
      },
      {
        id: 'select-professional-discount',
        title: 'Professional Discount (7.5%)',
        iconType: 'award',
        summary: '',
        points: [
          'This discount is applicable for salaried customers.',
          'Important Note: To avail the 7.5% discount, a valid corporate email ID is required. The email ID needs to be verified through OTP. Personal email IDs such as Gmail are not eligible for this discount.'
        ]
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
        summary: 'Treatment at home is covered as per policy terms.',
        points: [
          'Important Note: Domiciliary Treatment covers eligible treatment taken at home for more than 3 days. This benefit may be available when the patient cannot be shifted to a hospital or when a hospital bed/room is not available, as per policy terms.'
        ]
      },
      {
        id: 'select-ambulance-cover',
        title: 'Ambulance Cover',
        iconType: 'truck',
        summary: 'Covers ambulance expenses up to the Sum Insured for transportation within a 50 km radius.',
        points: []
      },
      {
        id: 'select-daily-cash',
        title: 'Daily Cash',
        iconType: 'dollar',
        summary: '',
        points: [
          'Get a fixed daily cash benefit when choosing shared hospital accommodation:',
          'Twin Sharing Accommodation: ₹1,200 per day',
          'Multi-Sharing Accommodation: ₹1,500 per day',
          'Over & Above the Base Sum Insured'
        ]
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
        summary: 'Covers eligible non-medical expenses like gloves, syringes, cotton, etc., helping reduce your expenses from your own pocket.',
        points: []
      },
      {
        id: 'select-supercharge-bonus-rider',
        title: 'Supercharge Bonus Rider',
        iconType: 'trending',
        summary: '',
        points: [
          '100% to 500% Bonus',
          'Example (Irrespective of Claims): 20 Lakh Base SI → ₹40 Lakh → ₹60 Lakh → ₹80 Lakh → ₹1 Crore → ₹1.20 Crore (Bonus increases by 100% of Base SI, up to 500%.)'
        ]
      },
      {
        id: 'select-infinite-advantage',
        title: 'Infinite Advantage',
        iconType: 'heart',
        summary: '',
        points: [
          'One unlimited claim in a lifetime.',
          'Example: ₹10 Lakh Base SI → If an eligible claim arises in future for ₹70 Lakh, Infinite Advantage can cover the amount beyond your available Sum Insured, subject to policy terms.',
          'Important Note: This benefit can be used only once in the lifetime of the policy. Once used, Infinite Advantage will cease and cannot be opted again on renewal.'
        ]
      },
      {
        id: 'select-preventive-annual-health-checkup-rider',
        title: 'Preventive Annual Health Checkup Rider',
        iconType: 'clipboard',
        summary: 'Covers the following listed medical tests, available once in a Policy Year on a cashless basis with home visit:',
        points: [
          'Liver Function Test',
          'Calcium',
          'KFT with Electrolytes',
          'Complete Blood Count (CBC)',
          'Erythrocyte Sedimentation Rate (ESR)',
          'HbA1c',
          'Lipid Profile',
          'Phosphorus',
          'Urine Analysis',
          'Fasting Blood Sugar'
        ]
      },
      {
        id: 'select-advanced-cover-rider',
        title: 'Advanced Cover Rider',
        iconType: 'clock',
        summary: 'Reduces the Pre-Existing Disease waiting period from 36 months to just 30 days for:',
        points: [
          'Diabetes Mellitus (Type 2)',
          'Hypertension',
          'Hyperlipidemia',
          'Asthma'
        ]
      },
      {
        id: 'select-maternity-care',
        title: 'Maternity Care',
        iconType: 'smile',
        summary: '(Ask Questions from the RM) Reduction of Maternity Care Waiting Period',
        points: []
      },
      {
        id: 'select-accidental-death-benefit-rider',
        title: 'Accidental Death Benefit Rider',
        iconType: 'shield',
        summary: '',
        points: [
          'If an Insured Person dies due to an accident during the Policy Period, 100% of the Sum Insured or ₹50,00,000, whichever is lower, will be paid.',
          'Example: 20 Lakh Sum Insured → ₹20 Lakh payout | 75 Lakh Sum Insured → 50 Lakh payout',
          'Important Note: The death must happen within 365 days of the accident and must be directly caused by the accident.'
        ]
      },
      {
        id: 'select-pocket-saver',
        title: 'Pocket saver',
        iconType: 'dollar',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-additional-si-accidental',
        title: 'Additional Sum Insured for Accidental Hospitalization',
        iconType: 'shield',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-cancer-benefit',
        title: 'Cancer benefit',
        iconType: 'activity',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-domestic-second-opinion',
        title: 'Domestic second opinion',
        iconType: 'users',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-early-access',
        title: 'Early Access',
        iconType: 'zap',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-women-suraksha',
        title: 'Women Suraksha',
        iconType: 'heart',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-health-condition-management-program',
        title: 'Health condition management program',
        iconType: 'clipboard',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-empowerher',
        title: 'EmpowerHer',
        iconType: 'heart',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-mental-wellbeing',
        title: 'Mental Wellbeing',
        iconType: 'smile',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-emergency-air-ambulance-rider',
        title: 'Emergency Air Ambulance rider',
        iconType: 'truck',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-international-second-opinion',
        title: 'International second opinion',
        iconType: 'globe',
        summary: '',
        points: [],
        hideExpandedBody: true
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
        summary: 'Choose Twin Sharing Room – A lower premium option.',
        points: []
      },
      {
        id: 'select-introduction-vpn',
        title: 'Introduction of Valued Provider Network',
        iconType: 'activity',
        summary: 'Choose Valued Provider Network – If you want a lower premium.',
        points: [
          'Important Note: If treatment is taken outside the Valued Provider - Pan India network, a 30% co-payment will apply to the respective claim. This applies to treatment at a Hospital, Day Care Centre or AYUSH Hospital.',
          'Example 1 - Valued Provider Network: If you take an eligible treatment at a Valued Provider - Pan India network hospital, no 30% co-payment will apply. (Eligible Claim ₹1,00,000 → Insurance Company: ₹1,00,000 | Co-payment: ₹0)',
          'Example 2 - Outside Valued Provider Network: If you take an eligible treatment outside the Valued Provider - Pan India network, 30% co-payment will apply. (Eligible Claim ₹1,00,000 → Insurance Company: ₹70,000 | You Pay: ₹30,000)'
        ]
      },
      {
        id: 'select-aggregate-deductible-discount',
        title: 'Aggregate Deductible Discount',
        iconType: 'dollar',
        summary: '',
        points: [
          'Choose your deductible: ₹10,000 | ₹25,000 | ₹50,000 | ₹1,00,000',
          'Higher Deductible = Higher Premium Discount',
          "The selected deductible is applicable once during a Policy Year. Once the selected amount is paid through your claims, you don't have to pay the same deductible again for eligible claims during that year.",
          'Example: 10 Lakh Base SI + ₹1 Lakh Deductible',
          '1st Claim: ₹60,000 → You Pay ₹60,000',
          '2nd Claim: ₹70,000 → You Pay ₹40,000 + Insurance covers ₹30,000 (Deductible Completed: ₹1,00,000)',
          '3rd Claim: ₹2,00,000 → No further ₹1,00,000 deductible → Eligible claim covered as per policy terms.',
          'Next Policy Year → Deductible starts again.'
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. LIMITATIONS & WAITING PERIODS
  // ---------------------------------------------------------------------------
  {
    id: 'limitations-waiting-periods',
    title: 'LIMITATIONS & WAITING PERIODS',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-terms-waiting-exclusions',
        title: 'Terms, Waiting Periods & Exclusions',
        iconType: 'clipboard',
        summary: '',
        points: [],
        hideExpandedBody: true
      },
      {
        id: 'select-initial-waiting-period',
        title: 'Initial Waiting Period (except accident) (30 days):',
        iconType: 'clock',
        summary: 'Generally, illness-related claims are not covered during the first 30 days of the policy; accidental claims are covered as per policy terms.',
        points: []
      },
      {
        id: 'select-pre-existing-diseases-waiting-period',
        title: 'Pre-Existing Diseases Waiting Period (36 Months):',
        iconType: 'heart',
        summary: 'Pre-existing diseases are covered after completion of the 36-month waiting period, subject to policy terms.',
        points: []
      },
      {
        id: 'select-specified-disease-waiting-period',
        title: 'Specified Disease/Procedure Waiting Period (24 Months):',
        iconType: 'activity',
        summary: 'A 24-month waiting period applies to the specified diseases and procedures listed under the policy.',
        points: []
      },
      {
        id: 'select-permanent-exclusions',
        title: 'Permanent Exclusions:',
        iconType: 'shield',
        summary: 'Any existing disease specifically mentioned as a Permanent Exclusion in the Policy Schedule is not covered.',
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
      id: 'terms-waiting-exclusions',
      title: 'Terms, Waiting Periods & Exclusions',
      summary: '',
      points: [],
      hideExpandedBody: true
    },
    {
      id: 'initial',
      title: 'Initial Waiting Period (except accident) (30 days)',
      summary: 'Generally, illness-related claims are not covered during the first 30 days of the policy; accidental claims are covered as per policy terms.',
      policyRef: 'Tata AIG MediCare Select Policy Terms',
      durationTag: '30 Days'
    },
    {
      id: 'ped',
      title: 'Pre-Existing Diseases Waiting Period (36 Months)',
      summary: 'Pre-existing diseases are covered after completion of the 36-month waiting period, subject to policy terms.',
      policyRef: 'Tata AIG MediCare Select Terms',
      durationTag: '36 Months'
    },
    {
      id: 'specific',
      title: 'Specified Disease/Procedure Waiting Period (24 Months)',
      summary: 'A 24-month waiting period applies to the specified diseases and procedures listed under the policy.',
      highlight: '[View List of Specified Diseases/Procedures → file:///C:/Users/xylo/Downloads/TATA%20AIG%20(Medicare%20Select)%20-%202%20Yrs%20waiting%20period%20list.pdf]',
      policyRef: 'Tata AIG Specific Illness Schedule',
      durationTag: '24 Months'
    },
    {
      id: 'permanent',
      title: 'Permanent Exclusions',
      summary: 'Any existing disease specifically mentioned as a Permanent Exclusion in the Policy Schedule is not covered.',
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
      summary: 'Cashless treatment at network hospitals for eligible hospitalisation expenses with 0% co-pay and no sub-limits on treatments.'
    },
    {
      id: 'room-rent',
      icon: '🏥',
      title: 'SINGLE PRIVATE ROOM & SHARED ROOM OPTION',
      summary: 'Single Private Room covered with zero room rent capping. You can also choose a Shared Room for lower premium rates.'
    },
    {
      id: 'restore-infinity',
      icon: '🔄',
      title: 'RESTORE INFINITY PLUS',
      summary: 'Unlimited 100% Base Sum Insured restoration for subsequent hospitalizations in a policy year.'
    },
    {
      id: 'pre-post',
      icon: '📅',
      title: 'PRE & POST HOSPITALIZATION (90 & 90 DAYS)',
      summary: 'Covers doctor consultations, pharmacy bills, and lab tests 90 days before admission and 90 days after discharge if hospitalization claim is admissible.'
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
