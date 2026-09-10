// =============================================================================
// HDFC ERGO OPTIMA SECURE — SINGLE SOURCE OF TRUTH (DATA & CONTENT FILE)
//
// 🎯 INDEPENDENT PLAN: Optima Secure (NOT Optima Secure+)
// This file contains ONLY Optima Secure benefits as supplied.
// Do NOT import or mix benefits from Optima Secure+ or any other plan.
// =============================================================================

// Default demo video URL — used when a custom asset is not provided
export const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export const optimaSecureData = {
  // --- CORE PLAN IDENTIFIERS & METADATA ---
  planId: 'hdfc-optima-secure',
  planName: 'Optima Secure',
  tagline: '2X Coverage from Day 1 with Zero Non-Medical Deductions',
  coverage: '₹5 Lakh - ₹2 Crore',
  premium: '',
  categoryBadge: 'Health Policy',
  policySubtitle: 'HDFC ERGO Health Insurance Policy',

  // --- NAVIGATION, HEADINGS & BUTTON LABELS ---
  backToPlansLabel: 'Back to HDFC ERGO Plans',
  backToPlanLabel: 'Back to Optima Secure',
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
    'Hospitalisation Expenses — Up to Sum Insured',
    'Room Rent — At Actuals',
    'Secure Benefit: 2X Coverage from Day 1',
    'Protect Benefit: Zero Deduction on Non-Medical Expenses',
    'Plus Benefit: 100% Increase in Coverage After 2 Years',
    'Restore Benefit: Up to 100% of Base Sum Insured',
    'Emergency Ambulance: Road & Air',
    'Pre & Post Hospitalisation (60 & 180 Days)'
  ],
  details: {
    eligibility: '',
    waitingPeriod: '',
    roomRent: 'At Actuals',
    hospitalization: 'Up to Sum Insured',
    prePostHospital: 'Pre-Hospitalisation: 60 Days / Post-Hospitalisation: 180 Days',
    dayCare: '',
    noClaimBonus: 'Plus Benefit: 50% of Base SI per year, max 100%',
    exclusions: ''
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
  // 3. LIMITATIONS & WAITING PERIODS
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
  // 4. MUST KNOW DETAILS
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
          'Don\'t assume "At Actuals" means every room category is available without conditions.'
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
        id: 'restore-benefit',
        icon: '🔄',
        title: 'RESTORE BENEFIT',
        paragraphs: [
          'Restore Benefit restores up to 100% of Base Sum Insured.',
          'Check the specific conditions under which the restore benefit applies.'
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. FEATURES SECTIONS / POLICY BENEFITS
  // ===========================================================================
  featuresSections: [
    // --- SECTION 1: MOST IMPORTANT ---
    {
      id: 'sec-most-important',
      title: 'MOST IMPORTANT',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 'os-hospitalisation',
          title: 'Hospitalisation Expenses',
          subtitle: 'Up to Sum Insured',
          summary: 'Hospitalisation expenses are covered up to the Sum Insured selected under the policy.',
          badge: 'UP TO SI',
          iconType: 'home',
          videoTitle: 'Hospitalisation Expenses',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-room-rent',
          title: 'Room Rent',
          subtitle: 'At Actuals',
          summary: 'Room rent is covered at actuals with no sub-limits or proportionate deductions.',
          badge: 'AT ACTUALS',
          iconType: 'home',
          videoTitle: 'Room Rent',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-secure-benefit',
          title: 'Secure Benefit',
          subtitle: '2X coverage from day 1',
          summary: '100% of Base Sum Insured — 2X coverage from day 1. Your Sum Insured is doubled from the very first day of the policy.',
          steps: ['Base SI', '+ 100% of Base SI', '= 2X Coverage from Day 1'],
          badge: '2X FROM DAY 1',
          iconType: 'shield',
          videoTitle: 'Secure Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-protect-benefit',
          title: 'Protect Benefit',
          subtitle: 'Zero deduction on non-medical expenses',
          summary: 'Up to Sum Insured — Zero deduction on non-medical expenses. Covers listed non-medical expenses/consumables such as gloves, masks, nebulizer kits and other applicable consumables. Built-in benefit with no extra charge.',
          points: [
            '**Up to Sum Insured**',
            '**Zero deduction** on non-medical expenses',
            '**Covers listed non-medical expenses/consumables** such as gloves, masks, nebulizer kits and other applicable consumables',
            '**Built-in benefit** with no extra charge'
          ],
          badge: 'NON-MEDICAL COVER',
          iconType: 'clipboard',
          videoTitle: 'Protect Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-plus-benefit',
          title: 'Plus Benefit',
          subtitle: '100% increase in coverage after 2 years',
          summary: 'Irrespective of claim status, increase of 50% of Base Sum Insured in a policy year, maximum up to 100%.',
          points: [
            '**Irrespective of claim status**',
            '**Increase of 50%** of Base Sum Insured in a policy year',
            '**Maximum up to 100%**',
            '**100% increase in coverage after 2 years**'
          ],
          steps: ['Year 1: Base SI', 'Year 2: +50%', 'Year 3: +100%'],
          badge: '100% INCREASE',
          iconType: 'trending',
          videoTitle: 'Plus Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-restore-benefit',
          title: 'Restore Benefit',
          subtitle: 'Up to 100% of Base Sum Insured',
          summary: 'Up to 100% of Base Sum Insured is restored for any illness for any insured person.',
          points: [
            '**Up to 100%** of Base Sum Insured',
            '**For any illness**',
            '**Any insured person**'
          ],
          badge: 'RESTORE 100%',
          iconType: 'refresh',
          videoTitle: 'Restore Benefit',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-emergency-ambulance',
          title: 'Emergency Ambulance',
          subtitle: 'Road & Air Ambulance',
          summary: 'Emergency ambulance transportation is covered. Road: Up to Sum Insured. Air: Up to ₹5,00,000.',
          points: [
            '**Road:** Up to Sum Insured',
            '**Air:** Up to ₹5,00,000'
          ],
          badge: 'ROAD & AIR',
          iconType: 'truck',
          videoTitle: 'Emergency Ambulance',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-pre-hospitalisation',
          title: 'Pre-Hospitalisation',
          subtitle: '60 Days — Up to Sum Insured',
          summary: 'Medical expenses incurred up to 60 days before hospitalisation are covered up to Sum Insured.',
          points: [
            '**60 Days** before admission',
            '**Up to Sum Insured**'
          ],
          badge: '60 DAYS',
          iconType: 'calendar',
          videoTitle: 'Pre-Hospitalisation',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-post-hospitalisation',
          title: 'Post-Hospitalisation',
          subtitle: '180 Days — Up to Sum Insured',
          summary: 'Medical expenses incurred up to 180 days after discharge from the hospital are covered up to Sum Insured.',
          points: [
            '**180 Days** after discharge',
            '**Up to Sum Insured**'
          ],
          badge: '180 DAYS',
          iconType: 'calendar',
          videoTitle: 'Post-Hospitalisation',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-ayush-treatment',
          title: 'AYUSH Treatment',
          subtitle: 'Up to Sum Insured',
          summary: 'In-patient treatment under AYUSH systems (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) is covered up to the Sum Insured.',
          badge: 'AYUSH',
          iconType: 'heart',
          videoTitle: 'AYUSH Treatment',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-home-healthcare',
          title: 'Home Healthcare',
          subtitle: 'Up to Sum Insured',
          summary: 'Home healthcare treatment is covered up to Sum Insured as per policy terms.',
          badge: 'HOME CARE',
          iconType: 'home',
          videoTitle: 'Home Healthcare',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-organ-donor',
          title: 'Organ Donor Expenses',
          subtitle: 'Up to Sum Insured',
          summary: 'Covers hospitalization expenses of the organ donor for organ harvesting, up to the Sum Insured.',
          badge: 'ORGAN DONOR',
          iconType: 'activity',
          videoTitle: 'Organ Donor Expenses',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 2: VALUE ADDED ---
    {
      id: 'sec-value-added',
      title: 'VALUE ADDED',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 'os-preventive-checkup',
          title: 'Preventive Health Check-up',
          subtitle: 'Available after every policy year, irrespective of claim status',
          summary: 'Available after completion of every policy year. Applicable irrespective of claim status. Available for any insured person, including children.',
          points: [
            '**Available after completion** of every policy year',
            '**Applicable irrespective** of claim status',
            '**Available for any insured person**, including children'
          ],
          badge: 'ANNUAL BENEFIT',
          iconType: 'smile',
          hasHealthCheckupTable: true,
          tableButtonLabel: 'Health Check-up Table',
          healthCheckupTable: {
            title: 'Health Check-up Table',
            subtitle: 'Reimbursement limits applicable per policy year',
            headers: [
              'Sum Insured (in INR)',
              '5 L',
              '10 L',
              '15 L',
              '20 L',
              '25 L & 50 L',
              '100 L & 200 L'
            ],
            rows: [
              [
                'Individual policy (per insured)',
                '1,500',
                '2,000',
                '4,000',
                '5,000',
                '8,000',
                '8,000'
              ],
              [
                'Floater policy (per policy)',
                '2,500',
                '5,000',
                '8,000',
                '10,000',
                '15,000',
                '15,000'
              ]
            ]
          },
          videoTitle: 'Preventive Health Check-up',
          videoUrl: DEMO_VIDEO_URL
        },
        {
          id: 'os-e-opinion',
          title: 'E-Opinion for Critical Illness',
          subtitle: 'Once per insured person for 51 defined major illnesses',
          summary: 'E-Opinion for Critical Illness is available once per insured person for 51 defined major illnesses.',
          points: [
            '**Once** per insured person',
            '**For 51 defined major illnesses**'
          ],
          badge: 'CRITICAL ILLNESS',
          iconType: 'activity',
          videoTitle: 'E-Opinion for Critical Illness',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 3: ADDITIONAL ---
    {
      id: 'sec-additional',
      title: 'ADDITIONAL',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: [
        {
          id: 'os-daily-cash',
          title: 'Daily Cash for Choosing Shared Accommodation',
          subtitle: '₹800 per day, maximum up to ₹4,800',
          summary: 'Receive daily cash allowance of ₹800 per day up to a maximum of ₹4,800 when you choose shared accommodation.',
          points: [
            '**₹800 per day**',
            '**Maximum up to ₹4,800**'
          ],
          steps: ['₹800/day × max 6 days = ₹4,800'],
          badge: 'DAILY CASH',
          iconType: 'dollar',
          videoTitle: 'Daily Cash for Choosing Shared Accommodation',
          videoUrl: DEMO_VIDEO_URL
        }
      ]
    },

    // --- SECTION 4: OPTIONAL ---
    {
      id: 'sec-optional',
      title: 'OPTIONAL',
      gridCols: 'grid-cols-2 lg:grid-cols-3',
      items: []
    }
  ]
};

export default optimaSecureData;
