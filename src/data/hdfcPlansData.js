// =============================================================================
// HDFC ERGO PLANS INDEPENDENT DATA CONFIGURATION (5 SEPARATE PLANS)
// 1. Optima Secure+          → hdfc-optima-secure-plus
// 2. Optima Secure            → hdfc-optima-secure
// 3. Optima Restore           → hdfc-optima-restore
// 4. Energy                   → hdfc-energy
// 5. my:health Medisure       → hdfc-myhealth-medisure-super-topup
//
// Each plan has completely separate, independent data, UI config, and content.
// Editing one plan will NOT affect any other plan.
// =============================================================================

import { resolveHdfcPlanId, HDFC_CANONICAL_PLAN_IDS } from './hdfcPlanRegistry.js';
import unlimitedVideo from '../assets/unlimited.mp4';
import secureBenefitVideo from '../assets/2x coverage.mp4';

export const HDFC_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: OPTIMA SECURE+
  // ===========================================================================
  'hdfc-optima-secure-plus': {
    planId: 'hdfc-optima-secure-plus',
    planName: 'Optima Secure+',
    tagline: 'Unlimited Protection. Added Every Year.',
    coverage: '₹10 Lakh - ₹2 Crore',
    premium: '₹14,500/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#E30613',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
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
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '86%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
        range: '81% → 86%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '9.28',
        explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
        value: '4.99 → 9.28',
        label: 'Complaints per 10,000 Claims'
      }
    },

    // --- 2. COMPANY STRENGTH (INDEPENDENT) ---
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
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.00×',
        explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
        value: '2.00×',
        label: 'Solvency (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹27,373 Cr',
        explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
        value: '₹27,373 Cr',
        label: 'Investment assets (as of March 2025)'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
        value: '85%+',
        label: 'Placed with A+ or higher-rated reinsurers'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '5.3%',
        explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
        value: '5.3%',
        label: 'GDPI market share (FY2025)'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS (INDEPENDENT) ---
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
          highlightType: 'success'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) is applicable for medical/surgical treatment of the following specified illnesses/procedures:',
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
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusion',
          summary: 'The policy will not cover expenses incurred towards hospitalisation or treatment arising from the following permanent exclusions:',
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
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) — Details modal layout ---
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
            'Don\u2019t assume \u201cAny Room\u201d means every room category is available without conditions.'
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

    // --- 5. FEATURES SECTIONS (INDEPENDENT) ---
    featuresSections: [
      {
        id: 'sec-1',
        title: 'MOST IMPORTANT FEATURES',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's1-1',
            title: 'Any Room Category',
            subtitle: '100% Cashless Policy',
            summary: 'Choose any room category in cashless network hospitals with zero room rent capping.',
            badge: '100% CASHLESS',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'No Limit on ICU, etc.',
            subtitle: 'No ICU room category limit',
            summary: 'Full coverage for intensive care unit charges with zero daily sub-limits.',
            badge: 'NO ICU LIMIT',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 & 180 Days',
            summary: 'Covers medical expenses incurred 60 days before hospital admission and 180 days after discharge.',
            badge: '60 & 180 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Diseases Covered',
            subtitle: 'Comprehensive Day Care Procedures',
            summary: 'Covers all medical procedures and daycare treatments requiring less than 24 hours of hospital stay due to technological advancement.',
            badge: 'ALL DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Treatment & Robotic Surgery',
            subtitle: 'Robotic & Advanced Surgeries',
            summary: 'Advanced surgical technology, robotic surgeries, stem cell therapy, and modern treatments covered up to full Sum Insured.',
            badge: 'ROBOTIC SURGERY',
            iconType: 'cpu'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'VALUE ADDED FEATURES',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's2-1',
            title: 'Unlimited Restoration',
            subtitle: 'Auto 100% SI Restored',
            summary: 'Restores 100% Base Sum Insured automatically for subsequent unrelated or related claims within the policy year.',
            steps: ['₹10 Lakh Base SI', '₹10 Lakh restored again', '₹10 Lakh', '₹10 Lakh...'],
            badge: 'UNLIMITED',
            iconType: 'refresh',
            videoUrl: unlimitedVideo
          },
          {
            id: 's2-2',
            title: 'Secure Benefit: 2x coverage from day 1',
            subtitle: 'Example: ₹20 Lakh Base Cover → ₹40 Lakh from Day 1',
            summary: 'Instantly doubles your sum insured right from day 1 without paying extra premium.',
            steps: ['₹20 Lakh Base Cover', '₹40 Lakh from Day 1'],
            badge: '2X FROM DAY 1',
            iconType: 'shield',
            videoUrl: secureBenefitVideo
          },
          {
            id: 's2-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Covered every policy year',
            summary: 'Covered every policy year for all insured members upon renewal.',
            badge: 'ANNUAL BENEFIT',
            iconType: 'smile'
          },
          {
            id: 's2-4',
            title: 'Infinite Benefit*',
            subtitle: '100% Base SI Added Every Year',
            summary: '100% of your Base Sum Insured is added automatically every policy year regardless of whether claims were made (irrespective of claims).',
            steps: ['₹20 Lakh', '₹40 Lakh', '₹60 Lakh...', '∞ infinite times'],
            badge: 'INFINITE',
            iconType: 'trending'
          },
          {
            id: 's2-5',
            title: 'Protect Benefit',
            subtitle: 'Cover non-medical expenses',
            summary: 'Cover non-medical expenses like: gloves, cotton, syringes, masks, etc.',
            badge: 'CONSUMABLES',
            iconType: 'clipboard'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 lg:grid-cols-2',
        items: [
          {
            id: 's3-1',
            title: 'Daily Cash For Shared Room',
            subtitle: '₹800 per day up to a maximum of ₹4,800',
            summary: 'Receive daily cash allowance of ₹800 per day up to a maximum of ₹4,800 when opting for shared room accommodation during hospitalisation.',
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's3-2',
            title: 'Domiciliary, Organ & AYUSH Treatment',
            subtitle: 'Home, Organ & Alternative Care',
            summary: 'Comprehensive coverage for home hospitalisation (domiciliary), organ donor expenses, and AYUSH treatments.',
            badge: 'AYUSH & ORGAN',
            iconType: 'activity'
          },
          {
            id: 's3-3',
            title: 'Road Ambulance Cover Available',
            subtitle: 'Emergency Transport',
            summary: 'Road ambulance cover available for emergency hospitalisation transportation.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-4',
            title: 'All Day Care Treatment',
            subtitle: 'Less than 24 hrs Admission',
            summary: 'All medical day care treatments and procedures requiring less than 24 hours of hospital stay covered.',
            badge: '< 24 HRS ADMISSION',
            iconType: 'clock'
          }
        ]
      },
      {
        id: 'sec-4',
        title: 'OPTIONAL RIDERS (ADD-ONS)',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's4-1',
            title: 'ABCD Chronic Care',
            subtitle: 'Pre-existing diseases covered from 31st day',
            summary: 'Pre-existing diseases (Asthma, BP, Cholesterol, Diabetes) covered from 31st day.',
            isRider: true,
            badge: 'CHRONIC CARE',
            iconType: 'heart'
          },
          {
            id: 's4-2',
            title: 'Optima Wellbeing',
            subtitle: 'Covers outpatient benefits',
            summary: 'Covers outpatient benefits and wellness consultations.',
            isRider: true,
            badge: 'WELLBEING',
            iconType: 'smile'
          },
          {
            id: 's4-3',
            title: 'Hospital Cash Benefit',
            subtitle: 'Get a per-day daily cash amount',
            summary: 'Get a per-day daily cash amount for each completed day of hospitalisation.',
            isRider: true,
            badge: 'HOSPITAL CASH',
            iconType: 'credit'
          },
          {
            id: 's4-4',
            title: 'Limitless',
            subtitle: 'One unlimited claim in a lifetime - No Sum Insured limit',
            summary: 'One unlimited claim in a lifetime - No Sum Insured limit.',
            isRider: true,
            badge: 'LIMITLESS',
            iconType: 'zap'
          },
          {
            id: 's4-5',
            title: 'Parenthood',
            subtitle: 'Covers maternity expenses',
            summary: 'Covers maternity expenses and new-born baby care as per policy terms.',
            isRider: true,
            badge: 'MATERNITY',
            iconType: 'users'
          },
          {
            id: 's4-6',
            title: 'Serious Illness Booster',
            subtitle: '2X Sum Insured for Listed Critical Illnesses',
            summary: '2X Sum Insured for Listed Critical Illnesses.',
            isRider: true,
            badge: '2X CRITICAL ILLNESS',
            iconType: 'shield'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 2: OPTIMA SECURE (STANDARD)
  // ===========================================================================
  'hdfc-optima-secure': {
    planId: 'hdfc-optima-secure',
    planName: 'Optima Secure',
    tagline: '4X Coverage with Secure, Plus, Restore & Protect.',
    coverage: '₹5 Lakh - ₹2 Crore',
    premium: '₹13,200/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#E30613',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
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
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '86%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
        range: '81% → 86%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '9.28',
        explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
        value: '4.99 → 9.28',
        label: 'Complaints per 10,000 Claims'
      }
    },

    // --- 2. COMPANY STRENGTH (INDEPENDENT) ---
    companyStrength: {
      heading: 'COMPANY STRENGTH',
      subheading: 'Corporate Standing & Financial Backbone',
      description: 'Institutional ownership, credit ratings, and capital solvency.',
      ownership: {
        title: 'OWNERSHIP / PERCENTAGE',
        summaryValue: '51% / 49%',
        explanation: 'Ownership represents the shareholding structure of HDFC ERGO General Insurance.',
        items: [
          { name: 'HDFC Bank', value: '51%', label: 'Ownership' },
          { name: 'ERGO International AG', value: '49%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.00×',
        explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
        value: '2.00×',
        label: 'Solvency (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹27,373 Cr',
        explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
        value: '₹27,373 Cr',
        label: 'Investment assets (as of March 2025)'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
        value: '85%+',
        label: 'Placed with A+ or higher-rated reinsurers'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '5.3%',
        explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
        value: '5.3%',
        label: 'GDPI market share (FY2025)'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS (INDEPENDENT) ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Standard waiting periods, listed procedure timelines, and exclusions for Optima Secure.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: '30-day initial waiting period applies from the inception date for all illnesses except accidental emergencies.',
          highlight: 'Accidental hospitalisation is covered from Day 1.',
          highlightType: 'success'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Ailments',
          summary: 'A 24-month waiting period applies for treatments of cataracts, hernia, hydrocele, joint replacement surgeries, kidney/gallbladder stones, and piles.',
          diseaseList: [
            'Cataract & eye procedures',
            'Hernia & Hydrocele',
            'Kidney & Gall bladder stones',
            'Joint replacement surgeries',
            'Benign Prostatic Hypertrophy (BPH)',
            'Piles, Fistula & Sinusitis'
          ],
          policyRef: 'Optima Secure Standard Terms (Code: W02)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusion',
          summary: 'The policy does not cover cosmetic therapies, intentional self-injury, substance abuse, obesity treatment, or unproven experimental medical procedures.',
          exclusionsList: [
            'Cosmetic & plastic surgery',
            'Self-inflicted harm or suicide attempts',
            'Drug/Alcohol dependency treatments',
            'Weight loss surgeries',
            'Experimental & unproven treatments'
          ],
          policyRef: 'Standard IRDAI Exclusions (Excl01–Excl18)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST KNOW',
      subheading: 'Optima Secure Highlights',
      description: 'Key highlights and unique features of the flagship Optima Secure plan.',
      highlights: [
        {
          badge: '2X from Day 1',
          tag: 'Secure Benefit',
          title: 'Instant 2X Doubling of Base Cover',
          description: 'Your base sum insured is doubled from day 1 automatically with no additional waiting period.',
          theme: 'primary'
        },
        {
          badge: '100% Increase in 2 Yrs',
          tag: 'Plus Benefit',
          title: 'Guaranteed 50% Bonus Per Year',
          description: 'Sum insured increases by 50% after year 1 and reaches 100% extra after year 2 irrespective of claims.',
          theme: 'neutral'
        },
        {
          badge: 'Automatic Restore',
          tag: 'Restore Benefit',
          title: '100% Restore on Depletion',
          description: 'Restores 100% base sum insured instantly upon partial or complete exhaustion during the policy year.',
          theme: 'neutral'
        },
        {
          badge: 'Zero Deductions',
          tag: 'Protect Benefit',
          title: 'Consumables & Non-Medical Coverage',
          description: 'Covers non-medical items like gloves, masks, syringes, and PPE kits without any out-of-pocket costs.',
          theme: 'neutral'
        }
      ]
    },

    // --- 5. FEATURES SECTIONS (INDEPENDENT) ---
    featuresSections: [
      {
        id: 'sec-1',
        title: 'KEY POLICY BENEFITS',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's1-1',
            title: 'Any Room Category',
            subtitle: 'No Room Rent Capping',
            summary: 'Freedom to choose any room category with zero room rent limits or proportionate deductions.',
            badge: 'ROOM RENT',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'ICU Without Daily Limits',
            subtitle: 'Full ICU Coverage',
            summary: 'Comprehensive coverage for ICU admissions without any daily sub-limits.',
            badge: 'ICU COVER',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 & 180 Days',
            summary: 'Complete coverage for medical expenses 60 days before hospitalisation and 180 days post-discharge.',
            badge: 'PRE & POST',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Day Care Treatments',
            subtitle: 'All Procedures Covered',
            summary: 'Covers all day care treatments requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 3: OPTIMA RESTORE
  // ===========================================================================
  'hdfc-optima-restore': {
    planId: 'hdfc-optima-restore',
    planName: 'Optima Restore',
    tagline: 'Instant 100% Restoration with Stay Active & Multiply Benefits.',
    coverage: '₹3 Lakh - ₹50 Lakh',
    premium: '₹11,500/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#E30613',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
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
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '86%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
        range: '81% → 86%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '9.28',
        explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
        value: '4.99 → 9.28',
        label: 'Complaints per 10,000 Claims'
      }
    },

    // --- 2. COMPANY STRENGTH (INDEPENDENT) ---
    companyStrength: {
      heading: 'COMPANY STRENGTH',
      subheading: 'Corporate Standing & Financial Backbone',
      description: 'Institutional ownership, credit ratings, and capital solvency.',
      ownership: {
        title: 'OWNERSHIP / PERCENTAGE',
        summaryValue: '51% / 49%',
        explanation: 'Ownership represents the shareholding structure of HDFC ERGO General Insurance.',
        items: [
          { name: 'HDFC Bank', value: '51%', label: 'Ownership' },
          { name: 'ERGO International AG', value: '49%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.00×',
        explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
        value: '2.00×',
        label: 'Solvency (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹27,373 Cr',
        explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
        value: '₹27,373 Cr',
        label: 'Investment assets (as of March 2025)'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
        value: '85%+',
        label: 'Placed with A+ or higher-rated reinsurers'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '5.3%',
        explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
        value: '5.3%',
        label: 'GDPI market share (FY2025)'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS (INDEPENDENT) ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Waiting periods and exclusions applicable to Optima Restore.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: '30-day initial waiting period applies from the inception date for all illnesses except accidental emergencies.',
          highlight: 'Accidents are covered from Day 1 with zero waiting period.',
          highlightType: 'success'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Illnesses',
          summary: '24-month waiting period applies for specified conditions like hernia, cataract, stones, hydrocele, joint replacement surgeries, and sinus treatment.',
          diseaseList: [
            'Cataract & eye surgeries',
            'Hernia & Hydrocele',
            'Kidney / urinary stones',
            'Joint replacement surgeries',
            'Piles, Fistula & Sinusitis'
          ],
          policyRef: 'Optima Restore Terms (Code: Excl-OR-02)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusion',
          summary: 'Expenses towards cosmetic treatments, deliberate self-injury, drug/alcohol abuse, maternity (unless opted), and experimental surgeries are permanently excluded.',
          exclusionsList: [
            'Cosmetic surgeries',
            'Self-inflicted injuries',
            'Substance abuse treatments',
            'Experimental therapies',
            'Maternity expenses'
          ],
          policyRef: 'Standard IRDAI Guidelines (Excl01–Excl18)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST KNOW',
      subheading: 'Optima Restore Highlights',
      description: 'Crucial features and distinctive benefits of Optima Restore.',
      highlights: [
        {
          badge: '100% Restoration',
          tag: 'Instant Restore',
          title: 'Instant Restore Benefit',
          description: 'Restores 100% of your sum insured immediately on partial or full exhaustion for subsequent unrelated illnesses.',
          theme: 'primary'
        },
        {
          badge: '50% Per Year',
          tag: 'Multiply Benefit',
          title: 'Multiply Benefit (No Claim Bonus)',
          description: 'Earn a 50% increase in basic Sum Insured for every claim-free year, doubling your cover in just 2 years.',
          theme: 'neutral'
        },
        {
          badge: 'Up to 8% Off',
          tag: 'Stay Active',
          title: 'Stay Active Wellness Discount',
          description: 'Get up to 8% discount on renewal premium simply by walking and tracking your daily step count.',
          theme: 'neutral'
        },
        {
          badge: 'Single Private Room',
          tag: 'Hospital Stay',
          title: 'Room Rent with No Sub-Limits',
          description: 'Full coverage for Single Private Room with AC without any proportionate deduction on doctor fees or surgery.',
          theme: 'neutral'
        }
      ]
    },

    // --- 5. FEATURES SECTIONS (INDEPENDENT) ---
    featuresSections: [
      {
        id: 'sec-1',
        title: 'KEY POLICY HIGHLIGHTS',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's1-1',
            title: 'Single Private Room',
            subtitle: 'No Proportionate Deductions',
            summary: 'Comfortable private room hospitalisation without daily room rent caps.',
            badge: 'ROOM COVER',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Restore Benefit',
            subtitle: '100% Instant Replenishment',
            summary: 'Instant 100% restoration of basic sum insured for unrelated medical conditions.',
            badge: 'RESTORE',
            iconType: 'refresh'
          },
          {
            id: 's1-3',
            title: 'Multiply Benefit',
            subtitle: '50% Bonus Per Claim-Free Year',
            summary: 'Double your base sum insured in 2 years with 50% cumulative bonus each year.',
            badge: 'MULTIPLY',
            iconType: 'trending'
          },
          {
            id: 's1-4',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 & 180 Days',
            summary: 'Coverage for medical expenses 60 days before hospitalisation and 180 days after discharge.',
            badge: 'PRE & POST',
            iconType: 'calendar'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 4: ENERGY
  // ===========================================================================
  'hdfc-energy': {
    planId: 'hdfc-energy',
    planName: 'Energy',
    tagline: 'Day 1 Coverage for Diabetes (Type 1 & 2) & Hypertension.',
    coverage: '₹2 Lakh - ₹50 Lakh',
    premium: '₹18,200/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#E30613',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
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
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '86%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
        range: '81% → 86%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '9.28',
        explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
        value: '4.99 → 9.28',
        label: 'Complaints per 10,000 Claims'
      }
    },

    // --- 2. COMPANY STRENGTH (INDEPENDENT) ---
    companyStrength: {
      heading: 'COMPANY STRENGTH',
      subheading: 'Corporate Standing & Financial Backbone',
      description: 'Institutional ownership, credit ratings, and capital solvency.',
      ownership: {
        title: 'OWNERSHIP / PERCENTAGE',
        summaryValue: '51% / 49%',
        explanation: 'Ownership represents the shareholding structure of HDFC ERGO General Insurance.',
        items: [
          { name: 'HDFC Bank', value: '51%', label: 'Ownership' },
          { name: 'ERGO International AG', value: '49%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.00×',
        explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
        value: '2.00×',
        label: 'Solvency (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹27,373 Cr',
        explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
        value: '₹27,373 Cr',
        label: 'Investment assets (as of March 2025)'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
        value: '85%+',
        label: 'Placed with A+ or higher-rated reinsurers'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '5.3%',
        explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
        value: '5.3%',
        label: 'GDPI market share (FY2025)'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS (INDEPENDENT) ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Specialized waiting period structure for Energy plan with Day 1 coverage for chronic conditions.',
      items: [
        {
          id: 'initial',
          title: 'Day 1 Coverage for Diabetes & Hypertension',
          summary: 'Zero waiting period for hospitalisation arising directly or indirectly from Diabetes Type 1, Type 2, or Hypertension from Day 1.',
          highlight: 'Immediate protection for chronic lifestyle conditions.',
          highlightType: 'success'
        },
        {
          id: 'general-waiting',
          title: '30 Days Initial Waiting Period for Other Illnesses',
          summary: 'A standard 30-day initial waiting period applies from the policy inception date for all illnesses other than diabetes, hypertension, or accidental emergencies.',
          policyRef: 'Energy Policy Terms (Clause 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusion',
          summary: 'The policy does not cover cosmetic treatments, self-injury, substance abuse, weight reduction surgeries, or unproven experimental treatments.',
          exclusionsList: [
            'Cosmetic surgeries',
            'Self-inflicted injuries',
            'Substance abuse treatments',
            'Bariatric & weight reduction surgeries',
            'Experimental therapies'
          ],
          policyRef: 'Standard IRDAI Exclusions (Excl01–Excl18)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST KNOW',
      subheading: 'Energy Plan Highlights',
      description: 'Specialized health management and Day 1 coverage highlights for diabetes and hypertension.',
      highlights: [
        {
          badge: 'Day 1 Active',
          tag: 'No Waiting',
          title: 'Diabetes & Hypertension Day 1 Cover',
          description: 'Immediate coverage for hospitalisation due to Diabetes Type 1, Type 2, and Hypertension from the first day.',
          theme: 'primary'
        },
        {
          badge: 'Health Coach',
          tag: 'Personalized',
          title: 'Dedicated Wellness & Diet Coaching',
          description: 'Access to dedicated nutritionists and wellness experts to help manage blood glucose and blood pressure levels.',
          theme: 'neutral'
        },
        {
          badge: 'Up to 25% Off',
          tag: 'Renewal Discount',
          title: 'Wellness Rewards on Renewal',
          description: 'Earn up to 25% discount on renewal premium by maintaining healthy HbA1c and fitness targets.',
          theme: 'neutral'
        },
        {
          badge: 'Free Diagnostics',
          tag: 'Annual Check-up',
          title: 'Free Annual Health Monitoring Tests',
          description: 'Complimentary annual comprehensive health check-ups and diagnostic test packages included.',
          theme: 'neutral'
        }
      ]
    },

    // --- 5. FEATURES SECTIONS (INDEPENDENT) ---
    featuresSections: [
      {
        id: 'sec-1',
        title: 'KEY CHRONIC CARE BENEFITS',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's1-1',
            title: 'Day 1 Chronic Care',
            subtitle: 'Diabetes & Hypertension Covered',
            summary: 'Comprehensive hospitalisation cover for diabetes and hypertension from day one without waiting period.',
            badge: 'DAY 1 COVER',
            iconType: 'heart'
          },
          {
            id: 's1-2',
            title: 'Single Private A/C Room',
            subtitle: 'Comfortable In-Patient Stay',
            summary: 'Full coverage for Single Private A/C room without daily room rent sub-limits.',
            badge: 'ROOM COVER',
            iconType: 'home'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 & 60 Days',
            summary: 'Covers diagnostic tests and medical expenses 30 days before and 60 days after hospitalisation.',
            badge: 'PRE & POST',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'E-Consultations Included',
            subtitle: 'Specialist Doctor Access',
            summary: 'Unlimited digital consultations with specialist physicians and endocrinologists.',
            badge: 'WELLNESS',
            iconType: 'users'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 5: MY:HEALTH MEDISURE (SUPER TOP-UP)
  // ===========================================================================
  'hdfc-myhealth-medisure-super-topup': {
    planId: 'hdfc-myhealth-medisure-super-topup',
    planName: 'my:health Medisure (Super Top-Up)',
    tagline: 'High-Sum Insured Super Top-Up Protection above Deductible.',
    coverage: '₹10 Lakh - ₹1 Crore',
    premium: '₹4,800/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#E30613',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
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
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '86%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of premium earned that an insurer spends on settling claims. It provides an overview of the insurer's claims experience.",
        range: '81% → 86%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '9.28',
        explanation: 'Complaint volume indicates the number of complaints received in relation to the number of claims handled. It helps provide context about the customer claim experience.',
        value: '4.99 → 9.28',
        label: 'Complaints per 10,000 Claims'
      }
    },

    // --- 2. COMPANY STRENGTH (INDEPENDENT) ---
    companyStrength: {
      heading: 'COMPANY STRENGTH',
      subheading: 'Corporate Standing & Financial Backbone',
      description: 'Institutional ownership, credit ratings, and capital solvency.',
      ownership: {
        title: 'OWNERSHIP / PERCENTAGE',
        summaryValue: '51% / 49%',
        explanation: 'Ownership represents the shareholding structure of HDFC ERGO General Insurance.',
        items: [
          { name: 'HDFC Bank', value: '51%', label: 'Ownership' },
          { name: 'ERGO International AG', value: '49%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Credit ratings indicate the financial strength and ability of an insurer to meet its financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.00×',
        explanation: "Solvency indicates the insurer's financial capacity to meet its obligations and support its business.",
        value: '2.00×',
        label: 'Solvency (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹27,373 Cr',
        explanation: "Investment assets provide an indication of the financial base supporting the insurer's operations.",
        value: '₹27,373 Cr',
        label: 'Investment assets (as of March 2025)'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance helps insurers manage large or unexpected claims and strengthens their risk-management capacity.',
        value: '85%+',
        label: 'Placed with A+ or higher-rated reinsurers'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '5.3%',
        explanation: "GDPI market share indicates the insurer's share of the general insurance premium market.",
        value: '5.3%',
        label: 'GDPI market share (FY2025)'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS (INDEPENDENT) ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Deductible criteria, waiting periods, and exclusions for my:health Medisure.',
      items: [
        {
          id: 'deductible',
          title: 'Annual Aggregate Deductible',
          summary: 'Claims up to the selected aggregate deductible amount must be borne by the base insurance or policyholder before super top-up coverage triggers.',
          highlight: 'Deductible is aggregated across the whole policy year, not per claim.',
          highlightType: 'success'
        },
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: '30-day initial waiting period applies from the policy start date for all new illnesses.',
          policyRef: 'my:health Medisure Policy Terms (Clause 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusion',
          summary: 'The policy does not cover cosmetic therapies, intentional self-injury, drug/alcohol abuse, or experimental procedures.',
          exclusionsList: [
            'Cosmetic surgeries',
            'Self-inflicted injuries',
            'Substance abuse treatments',
            'Experimental therapies',
            'Breach of law expenses'
          ],
          policyRef: 'Standard IRDAI Exclusions (Excl01–Excl18)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST KNOW',
      subheading: 'Super Top-Up Highlights',
      description: 'Essential information on deductible mechanics and high-sum insured coverage.',
      highlights: [
        {
          badge: 'Aggregate Deductible',
          tag: 'Yearly Aggregate',
          title: 'Yearly Cumulative Deductible',
          description: 'Unlike regular top-ups that apply deductibles on each claim, this super top-up aggregates all claims throughout the year.',
          theme: 'primary'
        },
        {
          badge: 'High Sum Insured',
          tag: 'Up to ₹1 Crore',
          title: 'Affordable Multi-Lakh Cover',
          description: 'Get extensive protection up to ₹1 Crore at a small fraction of a standard base policy premium.',
          theme: 'neutral'
        },
        {
          badge: 'Universal Compatibility',
          tag: 'Any Base Plan',
          title: 'Pairs with Any Base Policy',
          description: 'Can be used over any employer group health cover or individual base policy from any insurance company.',
          theme: 'neutral'
        },
        {
          badge: 'No Co-Payment',
          tag: '100% Cashless',
          title: 'Zero Co-Pay Across India',
          description: 'No co-payment applies on valid claims exceeding the deductible at 12,000+ cashless network hospitals.',
          theme: 'neutral'
        }
      ]
    },

    // --- 5. FEATURES SECTIONS (INDEPENDENT) ---
    featuresSections: [
      {
        id: 'sec-1',
        title: 'KEY SUPER TOP-UP BENEFITS',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 's1-1',
            title: 'Aggregate Deductible',
            subtitle: 'Multiple Claims Count Together',
            summary: 'Deductible is calculated on the cumulative sum of all claims in a policy year rather than each single admission.',
            badge: 'DEDUCTIBLE',
            iconType: 'shield'
          },
          {
            id: 's1-2',
            title: 'Up to Single Private Room',
            subtitle: 'Comfortable Hospital Stay',
            summary: 'Full coverage for Single Private Room without room rent capping after deductible is met.',
            badge: 'ROOM COVER',
            iconType: 'home'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 & 90 Days',
            summary: 'Pre-hospitalisation expenses for 60 days and post-discharge expenses for 90 days are covered.',
            badge: 'PRE & POST',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures',
            subtitle: 'Medical Day Care Included',
            summary: 'Covers day care procedures requiring less than 24 hours of hospitalisation once deductible is crossed.',
            badge: 'DAY CARE',
            iconType: 'check'
          }
        ]
      }
    ]
  }
};

/**
 * Retrieve plan-specific data for exactly one HDFC ERGO plan.
 * Uses strict canonical ID lookup — never falls back to another plan's data.
 */
export const getHdfcPlanData = (planId) => {
  const canonicalId = resolveHdfcPlanId(planId);
  if (!canonicalId) return null;
  return HDFC_PLANS_DATA[canonicalId] ?? null;
};

/** All registered canonical plan IDs (for validation & listing) */
export { HDFC_CANONICAL_PLAN_IDS };
