// =============================================================================
// HDFC ERGO ENERGY PLAN — SINGLE SOURCE OF TRUTH (DATA & CONTENT FILE)
// Independent plan configuration for HDFC ERGO General Insurance
// =============================================================================

export const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export const hdfcEnergyPlanData = {
  // --- CORE PLAN IDENTIFIERS & METADATA ---
  planId: 'hdfc-energy',
  planName: 'HDFC ERGO Energy Plan',
  tagline: 'Specialized Health Cover with Day 1 Protection for Hypertension & Diabetes',
  coverage: '₹10 Lakh - ₹50 Lakh',
  premium: '',
  categoryBadge: 'Health Policy',
  policySubtitle: 'HDFC ERGO Health Insurance Policy',

  // --- NAVIGATION, HEADINGS & BUTTON LABELS ---
  backToPlansLabel: 'Back to HDFC ERGO Plans',
  backToPlanLabel: 'Back to HDFC ERGO Energy Plan',
  featuresHeadingSuffix: 'POLICY BENEFITS',
  termsFootnote: '*T&C Apply',

  // Main 4-Card Navigation Grid + 5th Button Labels
  reportCardButtonLabel: 'REPORT CARD',
  companyStrengthButtonLabel: 'COMPANY STRENGTH',
  policyBenefitsButtonLabel: 'POLICY BENEFITS',
  limitationsButtonLabel: 'LIMITATIONS & WAITING PERIODS',
  mustKnowButtonLabel: 'MUST KNOW DETAILS',

  // --- PLAN-SPECIFIC UI CONFIG ---
  uiConfig: {
    primaryColor: '#E30613',
    demoVideoUrl: DEMO_VIDEO_URL,
  },

  // --- SUMMARY BENEFITS & DETAILS (USED IN COMPANY LISTINGS & COMPARISONS) ---
  benefits: [
    'No Limit on Room Rent & ICU Charges',
    'Disease-wise Limits: None',
    'Initial Waiting Period: 30 Days',
    'Pre-existing Diseases – Hypertension & Diabetes: Covered from Day 1',
    'Pre & Post Hospitalization: Covered for 30 & 60 days',
    'Restoration Benefit: 10+10, once in a year',
    'No Claim Bonus: Sum Insured enhanced by 10% to 100%',
    'Day Care Treatment Covered up to Sum Insured',
    'Free Annual Check-ups: Available',
    'Gold – Preventive Health Check-up: Free on Cashless Basis',
    'Specific Illness Waiting Period: 2 Years',
    'Pre-existing Diseases (PED) Waiting Period: 2 Years',
    'Co-payment Rider: Optional 20% co-payment available',
    'Plan Eligibility: Only Individual Plans are allowed'
  ],
  details: {
    eligibility: 'Only Individual Plans are allowed',
    waitingPeriod: '30 Days initial, 2 Years specific illness, 2 Years PED (Hypertension & Diabetes from Day 1)',
    roomRent: 'No limit on room rent and ICU charges',
    hospitalization: 'Covered up to Sum Insured with no limit on room rent & ICU charges',
    prePostHospital: 'Covered for 30 & 60 days',
    dayCare: 'Covered up to Sum Insured for treatments requiring less than 24 hours of hospitalization',
    noClaimBonus: 'Sum Insured enhanced by 10% to 100% (Example: ₹10 Lac → ₹20 Lac)',
    exclusions: 'Cosmetic surgery, intentional self-injury, breach of law'
  },

  // ===========================================================================
  // 1. REPORT CARD (HDFC ERGO PERFORMANCE & CLAIMS METRICS)
  // ===========================================================================
  reportCard: {
    heading: 'REPORT CARD',
    subheading: 'HDFC ERGO Performance',
    description: 'Official claim settlement and financial strength metrics.',

    csr: {
      title: 'CSR',
      summaryValue: '97.8%',
      subtitle: 'Claim Settlement Ratio',
      explanation: 'CSR shows the percentage of eligible claims that an insurer settles during a given period. A higher ratio generally indicates a strong claim settlement track record.',
      singleYear: '97.45% → 97.8%',
      singleYearLabel: 'Recent Single Year',
      threeYearAvg: '96.7% → 97.6%',
      threeYearAvgLabel: '3 Year Average',
      videoTitle: 'CSR Metrics',
      videoUrl: DEMO_VIDEO_URL
    },

    icr: {
      title: 'ICR',
      summaryValue: '86%',
      subtitle: 'Incurred Claim Ratio',
      explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
      range: '81% → 86%',
      rangeLabel: 'Incurred Claim Ratio',
      videoTitle: 'ICR Metrics',
      videoUrl: DEMO_VIDEO_URL
    },

    complaintVolume: {
      title: 'COMPLAINT VOLUME',
      summaryValue: '9.28',
      explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
      value: '4.99 → 9.28',
      label: 'Complaints per 10,000 Claims',
      videoTitle: 'Complaint Volume Metrics',
      videoUrl: DEMO_VIDEO_URL
    }
  },

  // ===========================================================================
  // 2. COMPANY STRENGTH (FINANCIAL METRICS & INSURER RELIABILITY)
  // ===========================================================================
  companyStrength: {
    heading: 'COMPANY STRENGTH',
    subheading: 'How reliable/strong is the insurer?',
    description: 'How reliable/strong is the insurer?',

    ownership: {
      title: 'OWNERSHIP / PERCENTAGE',
      summaryValue: '51% / 49%',
      explanation: 'Ownership represents the shareholding structure of HDFC ERGO General Insurance.',
      items: [
        { name: 'HDFC Bank', value: '51%', label: 'Ownership' },
        { name: 'ERGO International AG', value: '49%', label: 'Ownership' }
      ],
      videoTitle: 'Ownership & Shareholding',
      videoUrl: DEMO_VIDEO_URL
    },

    creditRating: {
      title: 'CREDIT RATING',
      summaryValue: 'AAA',
      explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
      items: [
        { agency: 'CRISIL', rating: 'AAA / Stable' },
        { agency: 'ICRA', rating: 'AAA / Stable' }
      ],
      videoTitle: 'Credit Ratings & Financial Strength',
      videoUrl: DEMO_VIDEO_URL
    },

    capitalStrength: {
      title: 'CAPITAL STRENGTH',
      summaryValue: '2.00×',
      explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
      value: '2.00×',
      label: 'Solvency (as of March 2025)',
      videoTitle: 'Capital Strength & Solvency',
      videoUrl: DEMO_VIDEO_URL
    },

    financialBase: {
      title: 'FINANCIAL BASE',
      summaryValue: '₹27,373 Cr',
      explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
      value: '₹27,373 Cr',
      label: 'Investment assets (as of March 2025)',
      videoTitle: 'Financial Base & Investments',
      videoUrl: DEMO_VIDEO_URL
    },

    reinsuranceStrength: {
      title: 'REINSURANCE STRENGTH',
      summaryValue: '85%+',
      explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
      value: '85%+',
      label: 'Placed with A+ or higher-rated reinsurers',
      videoTitle: 'Reinsurance Strength',
      videoUrl: DEMO_VIDEO_URL
    },

    marketPosition: {
      title: 'MARKET POSITION',
      summaryValue: '5.3%',
      explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
      value: '5.3%',
      label: 'GDPI market share (FY2025)',
      videoTitle: 'Market Position & Share',
      videoUrl: DEMO_VIDEO_URL
    }
  },

  // ===========================================================================
  // 3. LIMITATIONS & WAITING PERIODS (MODAL & DEDICATED PAGE CONTENT)
  // ===========================================================================
  limitationsWaitingPeriods: {
    heading: 'LIMITATIONS & WAITING PERIODS',
    subheading: 'Terms & Waiting Periods',
    description: 'Policy timelines, specific illness waiting periods, and pre-existing conditions.',

    items: [
      {
        id: 'initial',
        title: 'Initial Waiting Period (30 Days)',
        summary: '30 Days initial waiting period applies from the policy inception date for any illness or medical hospitalisation.',
        highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
        durationTag: '30 Days',
        videoTitle: 'Initial Waiting Period (30 Days)',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'specific',
        title: 'Specific Illness Waiting Period (2 Years)',
        summary: 'A continuous waiting period of 2 Years (24 months) is applicable for medical or surgical treatment of specified illnesses and named ailments.',
        durationTag: '2 Years',
        videoTitle: 'Specific Illness Waiting Period',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'ped',
        title: 'Pre-existing Diseases (PED) Waiting Period (2 Years)',
        summary: 'Pre-existing diseases require 2 Years of continuous coverage. Hypertension & Diabetes are covered from Day 1.',
        highlight: 'Pre-existing Diseases – Hypertension & Diabetes are covered from Day 1.',
        durationTag: '2 Years',
        videoTitle: 'Pre-existing Diseases Waiting Period',
        videoUrl: DEMO_VIDEO_URL
      }
    ]
  },

  // ===========================================================================
  // 4. MUST KNOW DETAILS
  // ===========================================================================
  mustKnow: {
    heading: 'MUST-KNOW DETAILS',
    subheading: 'Essential plan conditions and highlights',
    buttonLabel: 'MUST KNOW DETAILS',
    layout: 'details-modal',

    items: [
      {
        id: 'room-rent',
        icon: '🏥',
        title: 'ROOM RENT & ICU CHARGES',
        label: 'Room Rent',
        value: 'No Limit on Room Rent & ICU Charges',
        paragraphs: [
          'No limit on room rent and ICU charges.',
          'Zero capping applies on hospital room categories.'
        ]
      },
      {
        id: 'disease-limits',
        icon: '🛡️',
        title: 'DISEASE-WISE LIMITS',
        label: 'Disease-wise Limits',
        value: 'None',
        paragraphs: [
          'No disease-wise capping or sub-limits apply under this plan.'
        ]
      },
      {
        id: 'day1-cover',
        icon: '❤️',
        title: 'DAY 1 COVERAGE',
        label: 'Hypertension & Diabetes',
        value: 'Covered from Day 1',
        paragraphs: [
          'Pre-existing Diseases – Hypertension & Diabetes are covered from Day 1.'
        ]
      },
      {
        id: 'plan-eligibility',
        icon: '👤',
        title: 'PLAN ELIGIBILITY',
        label: 'Plan Eligibility',
        value: 'Only Individual Plans Allowed',
        paragraphs: [
          'Only Individual Plans are allowed under HDFC ERGO Energy Plan.'
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. FEATURES SECTIONS / POLICY BENEFITS (EXACT FOUR MAIN SECTIONS)
  // ===========================================================================
  featuresSections: [
    // --- SECTION 1: MOST IMPORTANT ---
    {
      id: 'sec-most-important',
      title: 'MOST IMPORTANT',
      subtitle: 'Core coverage terms and day-one protections',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
      items: [
        {
          id: 's1-1',
          title: 'No Limit on Room Rent & ICU Charges',
          subtitle: 'No limit on room rent and ICU charges',
          summary: 'No limit on room rent and ICU charges.',
          badge: 'NO LIMIT',
          iconType: 'home',
          videoTitle: 'No Limit on Room Rent & ICU Charges',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-2',
          title: 'Disease-wise Limits',
          subtitle: 'None',
          summary: 'None.',
          badge: 'NONE',
          iconType: 'shield',
          videoTitle: 'Disease-wise Limits',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-3',
          title: 'Initial Waiting Period',
          subtitle: '30 Days',
          summary: '30 Days.',
          badge: '30 DAYS',
          iconType: 'clock',
          videoTitle: 'Initial Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-4',
          title: 'Pre-existing Diseases – Hypertension & Diabetes',
          subtitle: 'Covered from Day 1',
          summary: 'Covered from Day 1.',
          badge: 'DAY 1 COVER',
          iconType: 'heart',
          videoTitle: 'Hypertension & Diabetes Day 1 Cover',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 2: VALUE ADDED ---
    {
      id: 'sec-value-added',
      title: 'VALUE ADDED',
      subtitle: 'Pre/post hospitalization, restoration and bonus multipliers',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's2-1',
          title: 'Pre & Post Hospitalization',
          subtitle: 'Covered for 30 & 60 days',
          summary: 'Covered for 30 & 60 days.',
          badge: '30 & 60 DAYS',
          iconType: 'calendar',
          videoTitle: 'Pre & Post Hospitalization',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-2',
          title: 'Restoration Benefit',
          subtitle: '10+10, once in a year',
          summary: '10+10, once in a year.',
          badge: '10+10 ONCE/YEAR',
          iconType: 'refresh',
          videoTitle: 'Restoration Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-3',
          title: 'No Claim Bonus',
          subtitle: 'Sum Insured enhanced by 10% to 100%',
          summary: 'Sum Insured enhanced by 10% to 100%. Example: ₹10 Lac → ₹20 Lac.',
          steps: ['₹10 Lac', '10% to 100% Enhanced', '₹20 Lac'],
          badge: '10% TO 100% NCB',
          iconType: 'trending',
          videoTitle: 'No Claim Bonus',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 3: ADDITIONAL ---
    {
      id: 'sec-additional',
      title: 'ADDITIONAL',
      subtitle: 'Day care treatments, annual check-ups & waiting periods',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's3-1',
          title: 'Day Care Treatment',
          subtitle: 'Covered up to Sum Insured for treatments requiring less than 24 hours of hospitalization',
          summary: 'Covered up to Sum Insured for treatments requiring less than 24 hours of hospitalization.',
          badge: 'DAY CARE COVERED',
          iconType: 'check',
          videoTitle: 'Day Care Treatment',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-2',
          title: 'Free Annual Check-ups',
          subtitle: 'Available',
          summary: 'Available.',
          badge: 'AVAILABLE',
          iconType: 'smile',
          videoTitle: 'Free Annual Check-ups',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-3',
          title: 'Gold – Preventive Health Check-up',
          subtitle: 'Free preventive health check-up available on a cashless basis',
          summary: 'Free preventive health check-up available on a cashless basis.',
          badge: 'CASHLESS BASIS',
          iconType: 'activity',
          videoTitle: 'Gold Preventive Health Check-up',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-4',
          title: 'Specific Illness Waiting Period',
          subtitle: '2 Years',
          summary: '2 Years.',
          badge: '2 YEARS',
          iconType: 'clock',
          videoTitle: 'Specific Illness Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-5',
          title: 'Pre-existing Diseases (PED) Waiting Period',
          subtitle: '2 Years',
          summary: '2 Years.',
          badge: '2 YEARS',
          iconType: 'clock',
          videoTitle: 'PED Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 4: OPTIONAL ---
    {
      id: 'sec-optional',
      title: 'OPTIONAL',
      subtitle: 'Optional riders, eligibility rules and health check-up tiers',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
      items: [
        {
          id: 's4-1',
          title: 'Co-payment Rider',
          subtitle: 'Optional 20% co-payment available',
          summary: 'Optional 20% co-payment available.',
          isRider: true,
          badge: 'OPTIONAL 20% CO-PAY',
          iconType: 'clipboard',
          videoTitle: 'Co-payment Rider',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-2',
          title: 'Plan Eligibility',
          subtitle: 'Only Individual Plans are allowed',
          summary: 'Only Individual Plans are allowed.',
          badge: 'INDIVIDUAL ONLY',
          iconType: 'users',
          videoTitle: 'Plan Eligibility',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-3',
          title: 'Silver Health Check-up',
          subtitle: 'Not available',
          summary: 'Not available.',
          badge: 'NOT AVAILABLE',
          iconType: 'shield',
          videoTitle: 'Silver Health Check-up',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-4',
          title: 'Gold Health Check-up',
          subtitle: 'Free preventive health check-up available (cashless)',
          summary: 'Free preventive health check-up available (cashless).',
          badge: 'FREE CASHLESS',
          iconType: 'activity',
          videoTitle: 'Gold Health Check-up',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    }
  ]
};

export default hdfcEnergyPlanData;
