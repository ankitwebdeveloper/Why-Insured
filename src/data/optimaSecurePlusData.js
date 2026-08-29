// =============================================================================
// HDFC ERGO OPTIMA SECURE+ — SINGLE SOURCE OF TRUTH (DATA & CONTENT FILE)
//
// 🎯 MAIN REQUIREMENT:
// Edit any text, title, description, badge, metric, step, video, or rider in
// this file, save it, and immediately see the changes on localhost.
// =============================================================================

import unlimitedVideo from '../assets/unlimited.mp4';
import secureBenefitVideo from '../assets/2x coverage.mp4';
import preventiveVideo from '../assets/Preventive.mp4';

// Default demo video URL — used when a custom asset is not provided
export const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export const optimaSecurePlusData = {
  // --- CORE PLAN IDENTIFIERS & METADATA ---
  planId: 'hdfc-optima-secure-plus',
  planName: 'Optima Secure+',
  tagline: 'Unlimited Protection. Added Every Year.',
  coverage: '₹10 Lakh - ₹2 Crore',
  premium: '',
  categoryBadge: 'Health Policy',
  policySubtitle: 'HDFC ERGO Health Insurance Policy',

  // --- NAVIGATION, HEADINGS & BUTTON LABELS ---
  backToPlansLabel: 'Back to HDFC ERGO Plans',
  backToPlanLabel: 'Back to Optima Secure+',
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
    'Any Room Category (100% Cashless Policy)',
    'No Limit on ICU, etc.',
    'Pre & Post Hospitalisation (60 & 180 Days)',
    'All Day Care Diseases Covered',
    'Unlimited Restoration of Sum Insured',
    'Infinite Benefit: 100% Base SI Added Every Year',
    'Secure Benefit: 2X Coverage from Day 1',
    'Protect Benefit (Consumables / Non-Medical Covered)'
  ],
  details: {
    eligibility: '18 to 65 Years (Children: 91 days to 25 years)',
    waitingPeriod: '30 Days initial, 36 Months for Pre-existing diseases (Day 31 for ABCD Chronic Care)',
    roomRent: 'Any Room Category (100% Cashless Policy) - Zero sub-limits',
    hospitalization: 'No Limit on ICU, etc. (Covered up to Sum Insured)',
    prePostHospital: 'Pre & Post Hospitalisation: 60 & 180 Days',
    dayCare: 'All Day Care Diseases & Treatments (< 24 hrs Admission)',
    noClaimBonus: 'Infinite Benefit: 100% Base SI Added Every Year (Irrespective of claims)',
    exclusions: 'Cosmetic surgery, intentional self-injury, drug/alcohol abuse'
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
    description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',

    items: [
      {
        id: 'initial',
        title: 'Initial Waiting Period (30 Days)',
        summary: 'An initial waiting period of 30 days applies from the policy inception date for any illness or medical hospitalisation.',
        highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
        highlightType: 'success',
        policyRef: 'HDFC ERGO Optima Secure Policy Terms',
        durationTag: '30 Days',
        videoTitle: 'Initial Waiting Period (30 Days)',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'specific',
        title: '2 Years Waiting Period on Specific Diseases',
        summary: 'A continuous waiting period of 24 months (2 Years) is applicable for medical/surgical treatment of the following specified illnesses/procedures:',
        diseaseListHeader: 'Covered after 24 Months Continuous Coverage',
        diseaseList: [
          'Cataract & eye surgeries',
          'Benign Prostatic Hypertrophy (BPH)',
          'Hernia (all types) & Hydrocele',
          'Piles, Fistula & Fissure in ano',
          'Stones in Urinary & Biliary systems',
          'Hysterectomy / Uterine Fibroids',
          'Joint replacements (non-accidental)',
          'Osteoarthritis & Osteoporosis',
          'Sinusitis, DNS, Tonsillectomy',
          'Benign cysts, polyps & tumors',
          'Varicose veins & varicose ulcers',
          'Spondylosis & Disc disorders'
        ],
        policyRef: 'HDFC ERGO Optima Secure Policy Terms (Code: Excl02)',
        durationTag: '24 Months',
        videoTitle: '2 Years Waiting Period on Specific Diseases',
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: 'permanent',
        title: 'Permanent Exclusion',
        summary: 'The policy will not cover expenses incurred towards hospitalisation or treatment arising from the following permanent exclusions:',
        exclusionsListHeader: 'Permanently Excluded from Coverage',
        exclusionsList: [
          'Cosmetic, aesthetic & plastic surgery',
          'Intentional self-injury & suicide attempt',
          'Alcohol, drug or substance abuse',
          'Obesity & weight control surgeries',
          'Investigation & evaluation admissions',
          'Rest cure, rehabilitation & respite care',
          'Unproven / experimental treatments',
          'Participation in hazardous adventure sports',
          'Expenses arising from breach of law',
          'War, nuclear or chemical contamination'
        ],
        policyRef: 'Standard IRDAI & HDFC ERGO Policy Terms (Code: Excl01–Excl18)',
        durationTag: 'Never Covered',
        videoTitle: 'Permanent Exclusion',
        videoUrl: DEMO_VIDEO_URL
      }
    ]
  },

  // ===========================================================================
  // 4. MUST KNOW DETAILS (DETAILS MODAL LAYOUT)
  // ===========================================================================
  mustKnow: {
    heading: 'MUST-KNOW DETAILS',
    subheading: 'things a customer could easily miss or misunderstand',
    buttonLabel: 'MUST KNOW DETAILS',
    layout: 'details-modal',

    items: [
      {
        id: 'discount-premium',
        icon: '💰',
        title: 'DISCOUNT & PREMIUM',
        paragraphs: [
          "Today's premium may not be tomorrow's premium.",
          'Discounts may change or be removed as per the policy terms.'
        ]
      },
      {
        id: 'room-category',
        icon: '🏥',
        title: 'ROOM CATEGORY',
        paragraphs: [
          'Check your eligible room category before buying.',
          'Don’t assume “Any Room” means every room category is available without conditions.'
        ]
      },
      {
        id: 'health-checkup',
        icon: '🩺',
        title: 'HEALTH CHECK-UP',
        paragraphs: [
          "Free doesn't always mean anytime.",
          'The benefit is available at renewal, subject to the policy terms.'
        ]
      },
      {
        id: 'cataract',
        icon: '👁️',
        title: 'CATARACT',
        paragraphs: [
          "No amount limit doesn't necessarily mean every lens is covered.",
          'Check the eligible lens category before relying on this benefit.'
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. FEATURES SECTIONS / POLICY BENEFITS (MAIN FEATURES, VALUE ADDED, RIDERS)
  // ===========================================================================
  featuresSections: [
    // --- SECTION 1: MOST IMPORTANT FEATURES ---
    {
      id: 'sec-1',
      title: 'MOST IMPORTANT FEATURES',
      subtitle: 'Essential hospitalisation coverage offered under Optima Secure+',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's1-1',
          title: 'Any Room Category',
          subtitle: '100% Cashless Policy with zero room rent capping',
          summary: 'Any Room Category (Single, Twin, Suite, etc.) is covered under 100% Cashless Policy with no proportionate deductions or sub-limits.',
          badge: '100% CASHLESS',
          iconType: 'home',
          videoTitle: 'Any Room Category',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-2',
          title: 'No Limit on ICU, etc.',
          subtitle: 'Zero capping on Intensive Care Unit (ICU) charges',
          summary: 'No limit on ICU charges, monitoring equipment, specialist consultations, and associated critical care expenses.',
          badge: 'NO ICU LIMIT',
          iconType: 'activity',
          videoTitle: 'No Limit on ICU, etc.',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-3',
          title: 'Pre & Post Hospitalization',
          subtitle: 'Up to 60 days before admission & 180 days after discharge',
          summary: 'Covers medical expenses such as doctor consultations, pharmacy/medicine expenses, lab tests, etc. Pre-hospitalization covers up to 60 days before admission and post-hospitalization covers up to 180 days after discharge.',
          points: [
            '**Covers medical expenses:** Covers medical expenses such as doctor consultations, pharmacy/medicine expenses, lab tests, etc.',
            '**Pre-Hospitalisation:** Up to **60 days before admission**',
            '**Post-Hospitalisation:** Up to **180 days after discharge**'
          ],
          badge: '60 & 180 DAYS',
          iconType: 'calendar',
          videoTitle: 'Pre & Post Hospitalization',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-4',
          title: 'All Day Care Diseases covered',
          subtitle: 'All Day Care Treatments Covered ',
          summary: 'Covers all day care treatments that require less than 24 hours of hospitalization.',
          badge: 'ALL DAY CARE',
          iconType: 'check',
          videoTitle: 'All Day Care Diseases covered',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's1-5',
          title: 'Modern Treatment & Robotic Surgery',
          subtitle: 'Modern & Robotic Treatments',
          summary: 'Modern treatments and robotic surgeries are covered as per policy terms.',
          badge: 'ROBOTIC SURGERY',
          iconType: 'cpu',
          videoTitle: 'Modern Treatment & Robotic Surgery',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 2: VALUE ADDED FEATURES ---
    {
      id: 'sec-2',
      title: 'VALUE ADDED FEATURES',
      subtitle: 'Unique value-added benefits and multipliers',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's2-1',
          title: 'Unlimited Restoration',
          subtitle: '100% Base Sum Insured Restored Automatically',
          summary: '100% Base Sum Insured restored automatically unlimited times for subsequent related or unrelated claims within the policy year.',
          steps: ['10 Lakh Base SI', '10 Lakh Restored', '10 Lakh Restored Again', 'Unlimited Times'],
          badge: 'UNLIMITED TIMES',
          iconType: 'refresh',
          videoTitle: 'Unlimited Restoration',
          videoUrl: unlimitedVideo
        },
        {
          id: 's2-2',
          title: 'Infinite Benefit*',
          subtitle: '100% Base SI Added Every Year (Irrespective of claims)',
          summary: '100% Base Sum Insured is added every year irrespective of claims: 20 Lakh → 40 Lakh → 60 Lakh → ...... infinite times.',
          steps: ['20 Lakh', '40 Lakh', '60 Lakh', '...... infinite times'],
          badge: '100% BASE SI EVERY YEAR',
          iconType: 'trending',
          videoTitle: 'Infinite Benefit*',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-3',
          title: 'Secure Benefit: 2X',
          subtitle: '2X cover from Day 1',
          summary: 'Instantly doubles your sum insured from day 1 without paying any extra premium.',
          steps: ['Base SI: 20 Lac', '20 Lac + 20 Lac = 40 Lac', '2X cover from Day 1'],
          badge: '2X FROM DAY 1',
          iconType: 'shield',
          videoTitle: 'Secure Benefit: 2X',
          videoUrl: secureBenefitVideo
        },
        {
          id: 's2-4',
          title: 'Protect Benefit',
          subtitle: 'Cover non-medical expenses (Consumables)',
          summary: 'Covers non-medical expenses and consumables like gloves, cotton, syringes, masks, and other listed medical consumables.',
          badge: 'NON-MEDICAL COVER',
          iconType: 'clipboard',
          videoTitle: 'Protect Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's2-5',
          title: 'Preventive Health Check-up',
          subtitle: 'Covered once in every policy year',
          summary: 'Covered once in every policy year for all insured members on a reimbursement basis, subject to policy terms.',
          points: [
            '**Covered once** in every policy year',
            '**Available for all insured members**, subject to policy terms',
            '**Health check-up is available** on a reimbursement basis',
            '**The applicable limit** depends on the Sum Insured selected'
          ],
          badge: 'ANNUAL BENEFIT',
          iconType: 'smile',
          hasHealthCheckupTable: true,
          tableButtonLabel: 'View Health Check-up Limits',
          healthCheckupLimits: [
            { baseSI: '₹10 Lakh', floater: '₹5,000', individual: '₹2,000' },
            { baseSI: '₹15 Lakh', floater: '₹8,000', individual: '₹4,000' },
            { baseSI: '₹20–50 Lakh', floater: '₹10,000', individual: '₹5,000' },
            { baseSI: '₹100–200 Lakh', floater: '₹15,000', individual: '₹8,000' }
          ],
          videoTitle: 'Preventive Health Check-up',
          videoUrl: preventiveVideo
        }
      ]
    },

    // --- SECTION 3: ADDITIONAL FEATURES ---
    {
      id: 'sec-3',
      title: 'ADDITIONAL FEATURES',
      subtitle: 'Daily allowances, ambulance, and specialized treatments',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's3-1',
          title: 'Daily Cash for Shared Room',
          subtitle: '₹800 per day up to a maximum of ₹4,800',
          summary: 'Receive daily cash allowance of ₹800 per day up to a maximum of ₹4,800 when you choose shared accommodation in a network hospital and hospitalization exceeds 48 hours.',
          intro: 'Receive daily cash allowance of **₹800 per day** up to a maximum of **₹4,800** when:',
          points: [
            '**You choose shared accommodation in a network hospital**',
            '**Hospitalisation exceeds 48 hours**'
          ],
          steps: ['₹800/day × maximum 6 days = ₹4,800 maximum'],
          badge: 'DAILY CASH',
          iconType: 'dollar',
          videoTitle: 'Daily Cash for Shared Room',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-2',
          title: 'Domiciliary, Organ & AYUSH Treatment',
          subtitle: 'Home, Organ Donor & AYUSH Care',
          summary: 'Domiciliary Hospitalisation: Treatment at home is covered as per policy terms. Organ Donor Expenses: Covers hospitalization expenses of the organ donor for organ harvesting, up to the Sum Insured. AYUSH Treatment: In-patient treatment under AYUSH systems like Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy is covered, up to the Sum Insured.',
          points: [
            '**Domiciliary Hospitalisation:** Treatment at home is covered as per policy terms.',
            '**Organ Donor Expenses:** Covers hospitalization expenses of the organ donor for organ harvesting, up to the Sum Insured.',
            '**AYUSH Treatment:** In-patient treatment under AYUSH systems like Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy is covered, up to the Sum Insured.'
          ],
          badge: 'AYUSH & ORGAN',
          iconType: 'activity',
          videoTitle: 'Domiciliary, Organ & AYUSH Treatment',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's3-3',
          title: 'Emergency Ambulance Cover',
          subtitle: 'Road & Air Ambulance',
          summary: 'Emergency ambulance transportation is covered. Road: Up to Sum Insured. Air: Up to INR 5,00,000.',
          points: [
            '**Emergency ambulance transportation is covered**',
            '**Road:** Up to Sum Insured',
            '**Air:** Up to INR 5,00,000'
          ],
          badge: 'ROAD & AIR AMBULANCE',
          iconType: 'truck',
          videoTitle: 'Emergency Ambulance Cover',
          videoUrl: DEMO_VIDEO_URL
        },

      ]
    },

    // --- SECTION 4: OPTIONAL RIDERS (ADD-ONS) ---
    {
      id: 'sec-4',
      title: 'OPTIONAL RIDERS (ADD-ONS)',
      subtitle: 'Customizable add-ons to enhance your protection',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 's4-1',
          title: 'ABCD Chronic Care',
          subtitle: 'Pre-existing diseases covered from 31st day',
          summary: 'Covers hospitalisation expenses for Asthma, Blood pressure, Cholesterol and Diabetes from the 31st day',
          isRider: true,
          badge: 'CHRONIC CARE',
          iconType: 'heart',
          videoTitle: 'ABCD Chronic Care',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-2',
          title: 'Optima Wellbeing',
          subtitle: 'Information abhi mentioned karni hai with limits ke sath',
          summary: 'Information abhi mentioned karni hai with limits ke sath.',
          isRider: true,
          badge: 'WELLBEING',
          iconType: 'smile',
          videoTitle: 'Optima Wellbeing',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-3',
          title: 'Limitless',
          subtitle: 'One unlimited claim in a lifetime',
          summary: 'Get one unlimited claim in a lifetime, with no Sum Insured limit.',
          isRider: true,
          badge: 'LIMITLESS',
          iconType: 'zap',
          videoTitle: 'Limitless',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-4',
          title: 'Parenthood',
          subtitle: 'Maternity, Embryo Storage & IVF',
          summary: 'Covers maternity expenses, embryo storage costs and IVF treatments',
          isRider: true,
          badge: 'MATERNITY',
          iconType: 'users',
          videoTitle: 'Parenthood',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 's4-5',
          title: 'Serious Illness Booster',
          subtitle: '9 Critical Illnesses Covered',
          summary: 'Covers 9 listed critical illnesses',
          isRider: true,
          badge: '9 CRITICAL ILLNESSES',
          iconType: 'shield',
          videoTitle: 'Serious Illness Booster',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    }
  ]
};

export default optimaSecurePlusData;
