// =============================================================================
// HDFC ERGO MEDISURE SUPER TOP-UP — SINGLE SOURCE OF TRUTH (DATA & CONTENT FILE)
// Independent plan configuration for HDFC ERGO General Insurance
// =============================================================================

export const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export const hdfcMedisureSuperTopUpData = {
  // --- CORE PLAN IDENTIFIERS & METADATA ---
  planId: 'hdfc-medisure-super-topup',
  planName: 'MediSure Super Top-Up',
  tagline: 'High-Deductible Health Cover with Expansive Sum Insured & Zero Room Rent Capping',
  coverage: '₹5 Lakh - ₹20 Lakh',
  deductible: '₹2 Lakh - ₹5 Lakh',
  premium: '',
  categoryBadge: 'Super Top-Up',
  policySubtitle: 'HDFC ERGO Health Insurance Policy',

  // --- NAVIGATION, HEADINGS & BUTTON LABELS ---
  backToPlansLabel: 'Back to HDFC ERGO Plans',
  backToPlanLabel: 'Back to MediSure Super Top-Up',
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
    'Available Sum Insured: ₹5 Lakh to ₹20 Lakh',
    'Deductible Options: ₹2 Lakh to ₹5 Lakh',
    'No Co-Pay (10% Co-Pay applicable on all claims after age 80)',
    'No Disease-wise Sub-limits',
    'No Room Rent Restriction – Any Room Category',
    'Pre-Hospitalisation: 30 Days covered',
    'Post-Hospitalisation: 60 Days covered',
    'Day Care Treatment covered up to Sum Insured',
    'AYUSH Treatment covered up to Sum Insured',
    'Initial Waiting Period: 30 Days',
    'Specific Illness Waiting Period: 2 Years',
    'Pre-Existing Disease (PED) Waiting Period: 3 Years',
    'Optional Critical Illness Add-on: Covers 51 Major Critical Illnesses (₹1 Lakh to ₹5 Crore)',
    'Optional Hospital Cash Benefit Add-on: ₹500 to ₹10,000 per day'
  ],
  details: {
    eligibility: 'Available for Individuals & Families as per policy terms',
    waitingPeriod: '30 Days initial, 2 Years specific illness, 3 Years PED',
    roomRent: 'No Room Rent Restriction – Any Room Category',
    hospitalization: 'Covered up to Sum Insured above chosen Deductible',
    prePostHospital: '30 Days Pre & 60 Days Post Hospitalisation covered',
    dayCare: 'Covered up to Sum Insured',
    noClaimBonus: 'Available as per applicable policy schedule',
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
        'HDFC Bank Limited: 50.5%',
        'ERGO International AG: 49%',
        'Established joint venture providing world-class insurance governance.'
      ],
      videoTitle: 'Ownership Structure',
      videoUrl: DEMO_VIDEO_URL
    },

    creditRating: {
      title: 'CREDIT RATING',
      summaryValue: 'iAAA / AAA',
      explanation: 'Credit rating reflects the financial stability and ability of the insurer to honor long-term policyholder commitments.',
      items: [
        'CRISIL: AAA (Highest Financial Strength)',
        'ICRA: AAA (Stable Outlook)'
      ],
      videoTitle: 'Credit Rating Metrics',
      videoUrl: DEMO_VIDEO_URL
    },

    capitalStrength: {
      title: 'CAPITAL STRENGTH',
      summaryValue: '1.90',
      label: 'Solvency Ratio (Regulatory Minimum: 1.50)',
      explanation: 'Solvency ratio indicates whether the insurer holds adequate capital buffer to settle unexpected surges in claim volumes.',
      videoTitle: 'Capital Strength & Solvency',
      videoUrl: DEMO_VIDEO_URL
    },

    financialBase: {
      title: 'FINANCIAL BASE',
      summaryValue: '₹16,000+ Cr',
      label: 'Gross Written Premium Base',
      explanation: 'Financial base indicates the scale of insurance operations and policyholder trust across India.',
      videoTitle: 'Financial Base & Premiums',
      videoUrl: DEMO_VIDEO_URL
    },

    reinsuranceStrength: {
      title: 'REINSURANCE STRENGTH',
      summaryValue: 'Tier 1 Global',
      label: 'Global Reinsurer Backing',
      explanation: 'Partnerships with Munich Re, Swiss Re, and leading global reinsurance institutions ensure high-value claim security.',
      videoTitle: 'Reinsurance Capabilities',
      videoUrl: DEMO_VIDEO_URL
    },

    marketPosition: {
      title: 'MARKET POSITION',
      summaryValue: 'Top 2 Private',
      label: 'Leading Indian General Insurer',
      explanation: 'Consistently ranks among the top private health & general insurers in customer satisfaction and network size.',
      videoTitle: 'Market Position Metrics',
      videoUrl: DEMO_VIDEO_URL
    }
  },

  // ===========================================================================
  // 3. LIMITATIONS & WAITING PERIODS
  // ===========================================================================
  limitationsWaitingPeriods: {
    heading: 'LIMITATIONS & WAITING PERIODS',
    subheading: 'TERMS & WAITING PERIODS',
    description: 'Mandatory waiting periods and policy terms governing claims.',

    items: [
      {
        id: 'initial',
        title: 'Initial Waiting Period (30 Days)',
        summary: 'A standard initial waiting period of 30 Days from policy inception applies for all hospitalisations, except for accidental injuries.',
        highlight: 'Accidental injuries covered from Day 1.',
        durationTag: '30 Days',
        videoTitle: 'Initial Waiting Period',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'specific',
        title: 'Specific Illness Waiting Period (2 Years)',
        summary: 'A continuous waiting period of 2 Years (24 months) applies for medical or surgical treatment of specified illnesses and named ailments as per policy schedule.',
        durationTag: '2 Years',
        videoTitle: 'Specific Illness Waiting Period',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'ped',
        title: 'Pre-existing Diseases (PED) Waiting Period (3 Years)',
        summary: 'Pre-existing diseases require 3 Years (36 months) of continuous coverage before claims arising from them are admissible.',
        durationTag: '3 Years',
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
        id: 'sum-insured',
        icon: '🛡️',
        title: 'AVAILABLE SUM INSURED',
        label: 'Sum Insured Options',
        value: '₹5 Lakh to ₹20 Lakh',
        paragraphs: [
          'Choose from multiple Sum Insured options ranging from ₹5 Lakh to ₹20 Lakh.',
          'Provides comprehensive high-deductible financial protection.'
        ]
      },
      {
        id: 'deductible',
        icon: '💳',
        title: 'DEDUCTIBLE OPTIONS',
        label: 'Deductible Range',
        value: '₹2 Lakh to ₹5 Lakh',
        paragraphs: [
          'Flexible aggregate deductible options from ₹2 Lakh to ₹5 Lakh.',
          'Claims exceeding the chosen deductible threshold are settled by the policy.'
        ]
      },
      {
        id: 'co-pay',
        icon: '📋',
        title: 'CO-PAY TERMS',
        label: 'Co-Payment',
        value: 'No Co-Pay (10% Co-Pay >80 Yrs)',
        paragraphs: [
          'No Co-Pay applies across standard age groups.',
          '10% Co-Pay applicable on all claims after age 80.'
        ]
      },
      {
        id: 'room-rent',
        icon: '🏥',
        title: 'ROOM RENT RESTRICTION',
        label: 'Room Category',
        value: 'Any Room Category (No Restriction)',
        paragraphs: [
          'No Room Rent Restriction – Any Room Category.',
          'Zero capping on hospital room categories or ICU charges.'
        ]
      },
      {
        id: 'disease-limits',
        icon: '⚖️',
        title: 'DISEASE-WISE SUB-LIMITS',
        label: 'Sub-Limits',
        value: 'None (No Disease-wise Limits)',
        paragraphs: [
          'No Disease-wise Sub-limits apply under this plan.',
          'Expenses covered up to the full Sum Insured above the chosen deductible.'
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. FEATURES SECTIONS / POLICY BENEFITS (EXACT FOUR MAIN CATEGORIES)
  // ===========================================================================
  featuresSections: [
    // --- SECTION 1: MOST IMPORTANT ---
    {
      id: 'sec-most-important',
      title: 'MOST IMPORTANT',
      subtitle: 'Core coverage terms, deductibles, and in-patient provisions',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's1-1',
          title: 'Available Sum Insured',
          subtitle: '₹5 Lakh to ₹20 Lakh',
          summary: 'Available Sum Insured options range from ₹5 Lakh to ₹20 Lakh.',
          badge: '₹5L - ₹20L',
          iconType: 'shield',
          videoTitle: 'Available Sum Insured',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-2',
          title: 'Deductible Options',
          subtitle: '₹2 Lakh to ₹5 Lakh',
          summary: 'Deductible options range from ₹2 Lakh to ₹5 Lakh.',
          badge: '₹2L - ₹5L',
          iconType: 'dollar',
          videoTitle: 'Deductible Options',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-3',
          title: 'Co-Pay',
          subtitle: 'No Co-Pay. 10% Co-Pay applicable on all claims after age 80.',
          summary: 'No Co-Pay. 10% Co-Pay applicable on all claims after age 80.',
          badge: 'NO CO-PAY',
          iconType: 'clipboard',
          videoTitle: 'Co-Pay Terms',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-4',
          title: 'Disease-wise Sub-limits',
          subtitle: 'No Disease-wise Sub-limits.',
          summary: 'No Disease-wise Sub-limits.',
          badge: 'NO SUB-LIMITS',
          iconType: 'shield',
          videoTitle: 'Disease-wise Sub-limits',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-5',
          title: 'Room Rent',
          subtitle: 'No Room Rent Restriction – Any Room Category.',
          summary: 'No Room Rent Restriction – Any Room Category.',
          badge: 'ANY ROOM CATEGORY',
          iconType: 'home',
          videoTitle: 'Room Rent Category',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-6',
          title: 'Pre-Hospitalisation',
          subtitle: '30 Days.',
          summary: 'Pre-hospitalisation medical expenses covered for 30 Days.',
          badge: '30 DAYS',
          iconType: 'calendar',
          videoTitle: 'Pre-Hospitalisation',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-7',
          title: 'Post-Hospitalisation',
          subtitle: '60 Days.',
          summary: 'Post-hospitalisation medical expenses covered for 60 Days.',
          badge: '60 DAYS',
          iconType: 'calendar',
          videoTitle: 'Post-Hospitalisation',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-8',
          title: 'Day Care Treatment',
          subtitle: 'Up to Sum Insured.',
          summary: 'Day Care Treatment covered up to Sum Insured.',
          badge: 'UP TO SUM INSURED',
          iconType: 'check',
          videoTitle: 'Day Care Treatment',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-9',
          title: 'AYUSH Treatment',
          subtitle: 'Up to Sum Insured.',
          summary: 'In-patient treatment taken under Ayurveda, Yoga, Unani, Siddha and Homeopathy covered up to Sum Insured.',
          badge: 'UP TO SUM INSURED',
          iconType: 'heart',
          videoTitle: 'AYUSH Treatment',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 2: VALUE ADDED ---
    {
      id: 'sec-value-added',
      title: 'VALUE ADDED',
      subtitle: 'Policy waiting periods and disease-specific timelines',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's2-1',
          title: 'Initial Waiting Period',
          subtitle: '30 Days.',
          summary: '30 Days.',
          badge: '30 DAYS',
          iconType: 'clock',
          videoTitle: 'Initial Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-2',
          title: 'Specific Illness Waiting Period',
          subtitle: '2 Years.',
          summary: '2 Years.',
          badge: '2 YEARS',
          iconType: 'clock',
          videoTitle: 'Specific Illness Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-3',
          title: 'Pre-Existing Disease (PED)',
          subtitle: '3 Years.',
          summary: '3 Years.',
          badge: '3 YEARS',
          iconType: 'clock',
          videoTitle: 'Pre-Existing Disease Waiting Period',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 3: ADDITIONAL ---
    {
      id: 'sec-additional',
      title: 'ADDITIONAL',
      subtitle: 'Additional policy benefits',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      items: []
    },

    // --- SECTION 4: OPTIONAL (ADD-ONS) ---
    {
      id: 'sec-optional',
      title: 'OPTIONAL',
      subtitle: 'Optional add-on covers to customize your protection',
      gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
      items: [
        {
          id: 's4-1',
          title: 'Critical Illness',
          subtitle: 'Covers 51 Major Critical Illnesses.',
          summary: 'Covers 51 Major Critical Illnesses.\n\nCoverage: ₹1 Lakh to ₹5 Crore.',
          isRider: true,
          badge: '₹1L - ₹5CR',
          iconType: 'activity',
          videoTitle: 'Critical Illness Add-on',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-2',
          title: 'Hospital Cash Benefit',
          subtitle: 'Fixed daily cash benefit during hospitalisation.',
          summary: 'Fixed daily cash benefit during hospitalisation.\n\nBenefit: ₹500 to ₹10,000 per day.',
          isRider: true,
          badge: '₹500 - ₹10,000/DAY',
          iconType: 'dollar',
          videoTitle: 'Hospital Cash Benefit Add-on',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    }
  ]
};
