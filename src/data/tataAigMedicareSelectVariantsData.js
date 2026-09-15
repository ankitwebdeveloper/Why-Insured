// =============================================================================
// TATA AIG MEDICARE SELECT — COMPREHENSIVE DATA & VARIANTS
// Exact Policy Benefit Sequence & Official Content
// Sections:
//   1. MOST IMPORTANT (100% Cashless Policy, Room Category, Pre & Post, Day Care)
//   2. VALUE ADDED (Restore Infinity Plus, No Claim Bonus, AYUSH, Organ Donor, Professional Discount)
//   3. ADDITIONAL (Domiciliary Treatment, Ambulance Cover, Daily Cash)
//   4. OPTIONAL ADD-ONS (Consumables, Supercharge Bonus, Infinite Advantage, Preventive Checkup, Advance Cover, Maternity Care, Accidental Death & Riders)
//   5. PREMIUM SAVER / POLICY OPTIONS (Room Category Select, Valued Provider Network, Aggregate Deductible Discount)
//   6. LIMITATIONS & WAITING PERIODS (30 Days, 36 Months PED, 24 Months Specified, Permanent Exclusions)
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
// Exact 4-Section Architecture:
// 1. MOST IMPORTANT
// 2. VALUE ADDED
// 3. ADDITIONAL
// 4. OPTIONAL ADD-ONS
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_FEATURES_SECTIONS = [
  // ---------------------------------------------------------------------------
  // 1. MOST IMPORTANT
  // ---------------------------------------------------------------------------
  {
    id: 'most-important-features',
    title: 'MOST IMPORTANT',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
    items: [
      {
        id: 'select-cashless-policy',
        title: '100% Cashless Policy',
        subtitle: 'Cashless Treatment Across Network Hospitals',
        badge: '100% CASHLESS',
        iconType: 'credit',
        summary: 'Get cashless treatment at network hospitals for eligible hospitalisation expenses covered under the policy with zero co-pay and zero sublimits.',
        points: [
          'Get cashless treatment at network hospitals for eligible hospitalisation expenses covered under the policy.',
          "No Co-pay: You don't have to pay a fixed percentage of the eligible hospital bill.",
          'No Sublimits: There is no separate fixed limit on eligible surgeries or treatments, as per policy terms.'
        ]
      },
      {
        id: 'select-room-category',
        title: 'Room Category — MUST READ',
        subtitle: 'Single Private Room | Shared Room Option',
        badge: 'SINGLE PRIVATE ROOM',
        iconType: 'home',
        summary: 'Single Private Room covered with zero room rent capping. You can also choose a shared room instead of a Single Private Room and get a lower premium.',
        points: [
          'Single Private Room — Covered for one patient with no room rent limit and no extra deductions.',
          'Shared Room Option — Choose a shared room instead of a Single Private Room and get a lower premium.',
          'No Proportionate Deduction — No deduction on overall hospital bill when staying in eligible room.'
        ],
        sharedRoomBenefit: {
          title: 'Shared Room Option',
          badge: 'Lower Premium',
          description: 'Choose a shared room instead of a Single Private Room and get a lower premium.'
        }
      },
      {
        id: 'select-pre-post',
        title: 'Pre & Post Hospitalization Expenses',
        subtitle: 'Up to 90 Days Pre & 90 Days Post',
        badge: '90 & 90 DAYS',
        iconType: 'calendar',
        summary: 'Pre-Hospitalisation is covered up to 90 days before admission and Post-Hospitalisation is covered up to 90 days after discharge for eligible medical expenses.',
        points: [
          'Pre-Hospitalisation: Up to 90 days before admission.',
          'Post-Hospitalisation: Up to 90 days after discharge.',
          'Covered eligible expenses may include: Doctor consultations, Medicines/pharmacy expenses, Lab tests.',
          'Important: These may look like OPD expenses, but they are not standalone OPD expenses. If the hospitalization claim is covered, eligible pre and post hospitalization expenses are also covered as per policy terms. If the hospitalization claim is not covered, these expenses will not be covered.'
        ]
      },
      {
        id: 'select-day-care',
        title: 'Day Care Procedures',
        subtitle: 'Treatments Requiring Less Than 24 Hours',
        badge: 'ALL DAY CARE',
        iconType: 'activity',
        summary: 'Covers eligible medical treatments and surgeries that require less than 24 hours of hospitalisation.',
        points: [
          'Covers eligible treatments that require less than 24 hours of hospitalisation.',
          'Examples include eligible surgeries or medical procedures that can be completed in less than 24 hours.',
          '100% coverage up to Base Sum Insured.'
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 2. VALUE ADDED
  // ---------------------------------------------------------------------------
  {
    id: 'value-added-benefits',
    title: 'VALUE ADDED',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-restoration',
        title: 'Restore Infinity Plus (Restoration)',
        subtitle: 'Unlimited Restorations in a Policy Year',
        badge: 'UNLIMITED RESTORE',
        iconType: 'refresh',
        summary: 'Unlimited restorations during a policy year, restoring 100% of the Base Sum Insured for subsequent related or unrelated claims.',
        points: [
          'Unlimited restorations during a policy year.',
          'Restores 100% of the Base Sum Insured for subsequent related or unrelated claims within the policy year.',
          'Available for the next hospitalisation, not the same hospitalisation.',
          'Example: ₹10 Lakh Base SI → ₹10 Lakh Restored → ₹10 Lakh Restored Again → Unlimited Times.'
        ],
        steps: [
          '₹10 Lakh Base SI',
          '₹10 Lakh Restored',
          '₹10 Lakh Restored Again',
          'Unlimited Times'
        ]
      },
      {
        id: 'select-ncb-discount',
        title: 'No Claim Bonus',
        subtitle: 'Cumulative Bonus or 1% Renewal Discount',
        badge: 'BONUS OR DISCOUNT',
        iconType: 'trending',
        summary: '50% to 100% Cumulative Bonus for every claim-free year, or 1% Discount on Renewal Premium.',
        points: [
          'Cumulative Bonus: 50% to 100% for every claim-free year.',
          'Example: ₹20 Lakh Base SI → ₹30 Lakh → ₹40 Lakh (The bonus increases by 50% of Base SI each claim-free year, up to 100%).',
          'OR 1% Discount on Renewal Premium for every claim-free year.',
          'Important: The customer can choose either Cumulative Bonus or Renewal Premium Discount. Cumulative Bonus applies only when Renewal Premium Discount is not availed.'
        ]
      },
      {
        id: 'select-ayush',
        title: 'AYUSH Benefit',
        subtitle: 'In-Patient & Day Care Alternative Treatments',
        badge: 'AYUSH COVERED',
        iconType: 'shield',
        summary: 'Covers eligible AYUSH treatments taken as In-Patient or Day Care up to the Sum Insured, subject to policy terms.',
        points: [
          'Covers eligible AYUSH treatments taken as In-Patient or Day Care, including:',
          '• Ayurveda',
          '• Yoga & Naturopathy',
          '• Unani',
          '• Siddha',
          '• Homeopathy',
          'Up to the Sum Insured, subject to policy terms.'
        ]
      },
      {
        id: 'select-organ-donor',
        title: 'Organ Donor',
        subtitle: 'Harvesting Expenses Covered Up to Sum Insured',
        badge: 'ORGAN DONOR',
        iconType: 'heart',
        summary: 'Covers eligible medical expenses of the organ donor for harvesting the donated organ, up to the Sum Insured.',
        points: [
          'Covers eligible medical expenses of the organ donor for harvesting the donated organ, up to the Sum Insured.',
          "Does not reduce the primary insured's base Sum Insured.",
          'Protects living organ donors during authorized transplant procedures.'
        ]
      },
      {
        id: 'select-professional-discount',
        title: 'Professional Discount — 7.5%',
        subtitle: '7.5% Discount on Premium for Salaried Customers',
        badge: '7.5% DISCOUNT',
        iconType: 'award',
        summary: 'Exclusive 7.5% discount on premium applicable for salaried customers with valid corporate email verification.',
        points: [
          'Applicable for salaried customers.',
          'Important: Valid corporate email ID required.',
          'Email verification through OTP required.',
          'Personal email IDs such as Gmail are not eligible.'
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3. ADDITIONAL
  // ---------------------------------------------------------------------------
  {
    id: 'additional-benefits',
    title: 'ADDITIONAL',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-domiciliary',
        title: 'Domiciliary Treatment',
        subtitle: 'Treatment at Home Covered',
        badge: 'HOME TREATMENT',
        iconType: 'home',
        summary: 'Treatment at home for more than 3 days is covered when the patient cannot be moved or hospital beds are full, subject to policy terms.',
        points: [
          'Treatment at home is covered as per policy terms.',
          'Important: Eligible treatment taken at home for more than 3 days may be covered when:',
          '• Patient cannot be shifted to a hospital, OR',
          '• Hospital bed/room is not available, subject to policy terms.'
        ]
      },
      {
        id: 'select-ambulance',
        title: 'Ambulance Cover',
        subtitle: 'Emergency Road Ambulance within 50 km Radius',
        badge: 'ROAD AMBULANCE',
        iconType: 'truck',
        summary: 'Covers ambulance expenses up to the Sum Insured for transportation within a 50 km radius.',
        points: [
          'Covers ambulance expenses up to the Sum Insured for transportation within a 50 km radius.',
          'Cashless or reimbursement claim facility available.',
          'Emergency transportation support to the nearest equipped network hospital.'
        ]
      },
      {
        id: 'select-daily-cash',
        title: 'Daily Cash',
        subtitle: 'Fixed Daily Allowance for Shared Accommodation',
        badge: 'DAILY CASH',
        iconType: 'dollar',
        summary: 'Fixed daily cash benefit when choosing shared hospital accommodation: Twin Sharing (₹1,200/day) & Multi-Sharing (₹1,500/day), over and above Base SI.',
        points: [
          'Fixed daily cash benefit when choosing shared hospital accommodation:',
          '• Twin Sharing: ₹1,200 per day',
          '• Multi-Sharing: ₹1,500 per day',
          'This is over and above the Base Sum Insured.'
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. OPTIONAL ADD-ONS (Extra Benefits With Extra Premium)
  // ---------------------------------------------------------------------------
  {
    id: 'optional-add-ons',
    title: 'OPTIONAL ADD-ONS',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    items: [
      {
        id: 'select-opt-consumables',
        title: 'Consumables Benefit',
        subtitle: 'Non-Medical Items & Disposables Covered',
        badge: 'RIDER',
        isRider: true,
        iconType: 'shield',
        summary: 'Covers eligible non-medical expenses such as gloves, syringes, cotton, and other consumables to reduce out-of-pocket expenses.',
        points: [
          'Covers eligible non-medical expenses such as: Gloves, Syringes, Cotton, Other eligible consumables.',
          'Helps reduce out-of-pocket expenses, subject to policy terms.'
        ]
      },
      {
        id: 'select-opt-supercharge',
        title: 'Supercharge Bonus Rider',
        subtitle: '100% to 500% Bonus Irrespective of Claims',
        badge: 'RIDER',
        isRider: true,
        iconType: 'trending',
        summary: '100% to 500% Bonus added every year irrespective of claims: ₹20L → ₹40L → ₹60L → ₹80L → ₹1Cr → ₹1.20Cr (increases by 100% of Base SI up to 500%).',
        points: [
          '100% to 500% Bonus irrespective of claims.',
          'Example: ₹20 Lakh Base SI → ₹40 Lakh → ₹60 Lakh → ₹80 Lakh → ₹1 Crore → ₹1.20 Crore.',
          'Bonus increases by 100% of Base SI, up to 500%.'
        ]
      },
      {
        id: 'select-opt-infinite-advantage',
        title: 'Infinite Advantage',
        subtitle: 'One Unlimited Claim in a Lifetime',
        badge: 'RIDER',
        isRider: true,
        iconType: 'heart',
        summary: 'One unlimited claim in a lifetime beyond the available Sum Insured. Example: ₹10L Base SI → eligible future claim of ₹70L.',
        points: [
          'One unlimited claim in a lifetime.',
          'Example: ₹10 Lakh Base SI → eligible future claim of ₹70 Lakh. Infinite Advantage can cover the amount beyond the available Sum Insured, subject to policy terms.',
          'Important: Can be used only once during the lifetime of the policy. Once used, it ceases. Cannot be opted again on renewal.'
        ]
      },
      {
        id: 'select-opt-preventive-checkup',
        title: 'Preventive Annual Health Checkup Rider',
        subtitle: 'Cashless Home Visit with 10 Comprehensive Tests',
        badge: 'RIDER',
        isRider: true,
        iconType: 'clipboard',
        summary: 'Available once in a Policy Year on a cashless basis with home visit, covering 10 essential diagnostic screenings.',
        points: [
          'Available once in a Policy Year on a cashless basis with home visit.',
          'Tests:',
          '• Liver Function Test, Calcium, KFT with Electrolytes, Complete Blood Count (CBC)',
          '• ESR, HbA1c, Lipid Profile, Phosphorus, Urine Analysis, Fasting Blood Sugar'
        ]
      },
      {
        id: 'select-opt-advance-cover',
        title: 'Advanced Cover Rider',
        subtitle: 'Reduces PED Waiting Period to 30 Days',
        badge: 'RIDER',
        isRider: true,
        iconType: 'clock',
        summary: 'Reduces the Pre-Existing Disease waiting period from 36 months to 30 days for Diabetes (Type 2), Hypertension, Hyperlipidemia, and Asthma.',
        points: [
          'Reduces the Pre-Existing Disease waiting period from 36 months to 30 days for:',
          '• Diabetes Mellitus (Type 2)',
          '• Hypertension',
          '• Hyperlipidemia',
          '• Asthma'
        ]
      },
      {
        id: 'select-opt-maternity-care',
        title: 'Maternity Care',
        subtitle: 'Maternity Care — Ask Questions from the RM',
        badge: 'RIDER',
        isRider: true,
        iconType: 'smile',
        summary: 'Maternity Care — Ask Questions from the RM for available options and eligibility terms.',
        points: [
          'Maternity Care — Ask Questions from the RM.',
          'Do not invent additional maternity coverage details.'
        ]
      },
      {
        id: 'select-opt-accidental-death',
        title: 'Accidental Death Benefit Rider',
        subtitle: '100% of Sum Insured OR ₹50,00,000 Payout',
        badge: 'RIDER',
        isRider: true,
        iconType: 'shield',
        summary: 'If an Insured Person dies due to an accident during the Policy Period: 100% of Sum Insured OR ₹50,00,000 (whichever is lower) will be paid.',
        points: [
          'If an Insured Person dies due to an accident during the Policy Period: 100% of Sum Insured OR ₹50,00,000, whichever is lower, will be paid.',
          'Examples: ₹20 Lakh SI → ₹20 Lakh payout; ₹75 Lakh SI → ₹50 Lakh payout.',
          'Important: Death must occur within 365 days of the accident and be directly caused by the accident.'
        ]
      },
      {
        id: 'select-opt-pocket-saver',
        title: 'Pocket Saver',
        subtitle: 'Outpatient & Incidental Expense Protection',
        badge: 'RIDER',
        isRider: true,
        iconType: 'dollar',
        summary: 'Optional benefit designed to assist with routine out-of-pocket healthcare expenses and minor clinic visits.',
        points: [
          'Provides financial assistance for outpatient medical costs',
          'Helps minimize daily medical expenditures',
          'Subject to policy schedule and applicable variant limits'
        ]
      },
      {
        id: 'select-opt-accidental-si',
        title: 'Additional Sum Insured for Accidental Hospitalization',
        subtitle: 'Extra Financial Cushion for Accidental Inpatient Care',
        badge: 'RIDER',
        isRider: true,
        iconType: 'shield',
        summary: 'Provides an additional buffer of Sum Insured dedicated specifically to accidental hospitalization claims.',
        points: [
          'Additional Sum Insured activated exclusively for accidental inpatient admissions',
          'Preserves base Sum Insured for non-accidental illness claims',
          'Zero waiting period for accidental hospitalization'
        ]
      },
      {
        id: 'select-opt-cancer-benefit',
        title: 'Cancer Benefit',
        subtitle: 'Dedicated Cancer Care & Oncology Coverage',
        badge: 'RIDER',
        isRider: true,
        iconType: 'activity',
        summary: 'Comprehensive financial support and enhanced coverage dedicated to oncology diagnostics, chemotherapy, and radiation.',
        points: [
          'Covers chemotherapy, radiotherapy, and targeted oncology treatments',
          'Specialist consultations and specialized diagnostic investigations',
          'Financial cushion against prolonged oncology procedures'
        ]
      },
      {
        id: 'select-opt-domestic-second-opinion',
        title: 'Domestic Second Opinion',
        subtitle: 'Consultation with Leading Indian Specialists',
        badge: 'RIDER',
        isRider: true,
        iconType: 'users',
        summary: 'Access independent second medical opinions from premier medical specialists and experts across India.',
        points: [
          'E-consultations with leading domestic medical specialists',
          'Covers major critical illnesses, scheduled surgeries, and oncology',
          'Helps make informed, confident treatment decisions'
        ]
      },
      {
        id: 'select-opt-early-access',
        title: 'Early Access',
        subtitle: 'Priority Claim & Admission Coordination',
        badge: 'RIDER',
        isRider: true,
        iconType: 'zap',
        summary: 'Priority processing and dedicated assistance for planned admissions and cashless claim approvals.',
        points: [
          'Priority cashless authorization coordination',
          'Dedicated assistance for planned hospitalizations',
          'Minimizes waiting times during hospital admission & discharge'
        ]
      },
      {
        id: 'select-opt-women-suraksha',
        title: 'Women Suraksha',
        subtitle: 'Dedicated Female Health & Wellness Cover',
        badge: 'RIDER',
        isRider: true,
        iconType: 'heart',
        summary: 'Comprehensive women-specific health coverage including specialized preventive screenings and critical illness protection.',
        points: [
          'Tailored for women healthcare needs and critical female illnesses',
          'Includes specialized preventive screenings and wellness care',
          'Dedicated care support for female policyholders'
        ]
      },
      {
        id: 'select-opt-hcmp',
        title: 'Health Condition Management Program',
        subtitle: 'Chronic Disease Monitoring & Wellness Coach',
        badge: 'RIDER',
        isRider: true,
        iconType: 'clipboard',
        summary: 'Digital chronic disease monitoring and personalized health coaching for lifestyle conditions.',
        points: [
          'Personalized health monitoring for lifestyle conditions',
          'Dedicated dieticians, fitness coaches, and wellness trackers',
          'Rewards and premium discounts on achieving health milestones'
        ]
      },
      {
        id: 'select-opt-empower-her',
        title: 'EmpowerHer',
        subtitle: 'Holistic Female Health & Fertility Wellness',
        badge: 'RIDER',
        isRider: true,
        iconType: 'heart',
        summary: 'Female wellness program covering fertility consultations, hormonal evaluations, and specialized care.',
        points: [
          'Dedicated female health screening and fertility counseling',
          'Comprehensive support for PCOS, endometriosis, and hormonal care',
          'Empowering women with comprehensive health security'
        ]
      },
      {
        id: 'select-opt-mental-wellbeing',
        title: 'Mental Wellbeing',
        subtitle: 'Psychological Consultations & Therapy Sessions',
        badge: 'RIDER',
        isRider: true,
        iconType: 'smile',
        summary: 'Confidential mental health consultations, psychiatric sessions, and wellness therapy support.',
        points: [
          'Inpatient and outpatient psychiatric consultations covered',
          'Confidential e-sessions with certified clinical psychologists',
          'Comprehensive support for stress, anxiety, and depression management'
        ]
      },
      {
        id: 'select-opt-air-ambulance',
        title: 'Emergency Air Ambulance Rider',
        subtitle: 'Aero-Medical Evacuation Coverage',
        badge: 'RIDER',
        isRider: true,
        iconType: 'truck',
        summary: 'Covers emergency air ambulance aircraft transportation for rapid transfer to advanced multi-specialty medical centers.',
        points: [
          'Domestic air ambulance evacuation expenses covered',
          'Immediate aero-medical transit to advanced tertiary facilities',
          'Lifesaving transportation during critical emergencies'
        ]
      },
      {
        id: 'select-opt-international-second-opinion',
        title: 'International Second Opinion',
        subtitle: 'Global Medical Expert Panel Consultation',
        badge: 'RIDER',
        isRider: true,
        iconType: 'globe',
        summary: 'Second opinion from globally renowned international medical centers for diagnosed critical conditions.',
        points: [
          'Consultations from world-class international hospitals',
          'Comprehensive review of medical records and diagnostics',
          'Access to cutting-edge global clinical perspectives'
        ]
      },
      {
        id: 'select-opt-premium-saver',
        title: 'Premium Saver',
        subtitle: 'Flexible Cost-Optimization Features',
        badge: 'RIDER',
        isRider: true,
        iconType: 'dollar',
        summary: 'Customizable premium-reduction options designed to optimize your annual health insurance premium.',
        points: [
          'Enables policy customization for cost savings',
          'Pair with deductibles or network options for lower premiums',
          'Flexible healthcare budget optimization'
        ]
      },
      {
        id: 'select-saver-twin-sharing',
        title: 'Room Category Select',
        subtitle: 'Twin Sharing Room — Lower Premium Option',
        badge: 'LOWER PREMIUM',
        isRider: true,
        iconType: 'home',
        summary: 'Twin Sharing Room — Lower Premium Option. Choose a shared room instead of a Single Private Room and get a lower premium.',
        points: [
          'Twin Sharing Room — Lower Premium Option',
          'Choose a shared room instead of a Single Private Room and get a lower premium.',
          'All eligible surgeries, procedures, and ICU care covered up to Sum Insured.'
        ]
      },
      {
        id: 'select-saver-vpn',
        title: 'Valued Provider Network',
        subtitle: 'Pan-India Discounted Network Option',
        badge: 'VPN DISCOUNT',
        isRider: true,
        iconType: 'activity',
        summary: 'Choose Valued Provider Network if you want a lower premium. Treatment outside the network incurs a 30% co-payment.',
        points: [
          'Choose Valued Provider Network if you want a lower premium.',
          'Important: If treatment is taken outside the Valued Provider — Pan India network, a 30% co-payment applies to the respective claim, subject to policy terms.',
          'Applicable to: Hospital, Day Care Centre, AYUSH Hospital.',
          'Example: Inside Valued Provider Network: Eligible Claim ₹1,00,000 → Insurance Company ₹1,00,000 → Co-payment ₹0.',
          'Outside Valued Provider Network: Eligible Claim ₹1,00,000 → Insurance Company ₹70,000 → You Pay ₹30,000.'
        ]
      },
      {
        id: 'select-saver-deductible',
        title: 'Aggregate Deductible Discount',
        subtitle: 'Available: ₹10K, ₹25K, ₹50K, ₹1 Lakh',
        badge: 'DEDUCTIBLE DISCOUNT',
        isRider: true,
        iconType: 'dollar',
        summary: 'Higher Deductible → Higher Premium Discount. The selected deductible applies once during a Policy Year.',
        points: [
          'Available deductible options: ₹10,000, ₹25,000, ₹50,000, ₹1,00,000.',
          'Display: Higher Deductible → Higher Premium Discount.',
          'The selected deductible applies once during a Policy Year. Once the selected deductible amount has been paid through claims, the same deductible does not need to be paid again for eligible claims during that policy year.',
          'Example: ₹10 Lakh Base SI + ₹1 Lakh Deductible:',
          '• 1st Claim: ₹60,000 → You Pay ₹60,000',
          '• 2nd Claim: ₹70,000 → You Pay ₹40,000 + Insurance covers ₹30,000 (Deductible completed: ₹1,00,000)',
          '• 3rd Claim: ₹2,00,000 → No further ₹1,00,000 deductible → eligible claim covered as per policy terms.',
          '• Next Policy Year → Deductible starts again.'
        ],
        tierData: {
          title: 'Available Deductible Options',
          tiers: [
            { tier: 'Option 1', value: '₹10,000' },
            { tier: 'Option 2', value: '₹25,000' },
            { tier: 'Option 3', value: '₹50,000' },
            { tier: 'Option 4', value: '₹1,00,000' }
          ]
        }
      }
    ]
  }
];

// =============================================================================
// LIMITATIONS & WAITING PERIODS FOR MEDICARE SELECT
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_LIMITATIONS = {
  heading: 'LIMITATIONS & WAITING PERIODS',
  subheading: 'Terms & Waiting Periods',
  description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',
  items: [
    {
      id: 'initial',
      title: 'Initial Waiting Period — 30 Days',
      summary: 'Except for accidents. Generally, illness-related claims are not covered during the first 30 days of the policy. Accidental claims are covered as per policy terms.',
      highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
      policyRef: 'Tata AIG MediCare Select Policy Terms',
      durationTag: '30 Days'
    },
    {
      id: 'ped',
      title: 'Pre-Existing Diseases Waiting Period — 36 Months',
      summary: 'Pre-existing diseases are covered after completion of the 36-month waiting period, subject to policy terms.',
      highlight: 'Can be reduced to 30 days with the optional Advanced Cover Rider.',
      policyRef: 'Tata AIG MediCare Select Terms',
      durationTag: '36 Months'
    },
    {
      id: 'specific',
      title: 'Specified Disease / Procedure Waiting Period — 24 Months',
      summary: 'A 24-month waiting period applies to specified diseases and procedures listed under the policy.',
      diseaseList: [
        'Cataract & eye surgeries',
        'Benign Prostatic Hypertrophy (BPH)',
        'Hernia (all types) & Hydrocele',
        'Piles, Fistula & Fissure in ano',
        'Stones in Urinary, Biliary & Renal systems',
        'Hysterectomy for Menorrhagia / Fibroids',
        'Joint replacements (non-accidental)',
        'Osteoarthritis & Osteoporosis',
        'Sinusitis, DNS, Tonsillectomy & Adenoidectomy',
        'Benign cysts, nodules, polyps & tumors',
        'Varicose veins & varicose ulcers',
        'Spondylosis, Spondylitis & Disc disorders'
      ],
      policyRef: 'Tata AIG Specific Illness Schedule',
      durationTag: '24 Months'
    },
    {
      id: 'permanent',
      title: 'Permanent Exclusions',
      summary: 'Any existing disease specifically mentioned as a Permanent Exclusion in the Policy Schedule is not covered.',
      exclusionsList: [
        'Cosmetic, aesthetic & plastic surgery',
        'Intentional self-injury & suicide attempt',
        'Alcohol, drug or substance abuse treatments',
        'Obesity & weight control procedures',
        'Investigation & diagnostic-only admissions',
        'Rest cure, rehabilitation & respite care',
        'Unproven / experimental treatments',
        'Participation in hazardous adventure sports',
        'War, nuclear or chemical contamination'
      ],
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
