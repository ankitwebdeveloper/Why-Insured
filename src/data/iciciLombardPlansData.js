// =============================================================================
// ICICI LOMBARD PLANS INDEPENDENT DATA CONFIGURATION
// 1. Complete Health Insurance  → complete-health-insurance
// 2. Health Shield              → health-shield
// 3. Golden Shield              → golden-shield
//
// Each plan has completely separate, independent data, UI config, and content.
// Editing one plan will NOT affect any other plan.
// =============================================================================

export const ICICI_LOMBARD_CANONICAL_PLAN_IDS = [
  'elevate'
];

export const resolveIciciPlanId = (planId) => {
  if (!planId) return 'elevate';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'elevate' || cleanId === 'icici-elevate' || cleanId === 'icici-lombard-elevate' || cleanId === 'elevate-plan') {
    return 'elevate';
  }
  return 'elevate';
};

export const ICICI_LOMBARD_PLANS_DATA = {
  // ===========================================================================
  // PLAN: ELEVATE (ICICI LOMBARD — ELEVATE)
  // ===========================================================================
  'elevate': {
    planId: 'elevate',
    planName: 'Elevate',
    tagline: 'Infinite Care, Power Booster, Unlimited Restoration & Customizable Healthcare Protection',
    coverage: '₹5 Lakh - ₹3 Crore',
    premium: '₹16,500/year',

    uiConfig: {
      primaryColor: '#F58220',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'ICICI Lombard Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.0%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR represents the percentage of eligible claims settled by ICICI Lombard with instant cashless processing across 10,000+ network hospitals.',
        singleYear: '98.0%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '71%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'ICR measures the percentage of earned premium paid back to policyholders as claims. A stable ICR of 71% reflects balanced underwriting and high financial security.',
        range: '71% → 74%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '13.8',
        explanation: 'Lowest complaint ratios in the general insurance industry per 10,000 claims with AI-backed cashless desk.',
        value: '13.8',
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
        summaryValue: 'ICICI Bank 51.2%',
        explanation: 'Backed by banking giant ICICI Bank Limited with strong corporate governance and institutional shareholders.',
        items: [
          { name: 'ICICI Bank Limited (Promoter)', value: '51.2%', label: 'Shareholding' },
          { name: 'Foreign & Domestic Institutional Investors', value: '38.4%', label: 'Shareholding' },
          { name: 'Public & Retail Shareholders', value: '10.4%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'CRISIL AAA / Stable and ICRA AAA ratings signify highest safety regarding timely servicing of financial obligations.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.62×',
        explanation: 'Exceptional solvency ratio of 2.62× providing an immense capital cushion well above the IRDAI mandatory minimum of 1.50×.',
        value: '2.62×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹48,000+ Cr',
        explanation: 'One of the largest investment asset portfolios in India, assuring prompt hospitalisation settlements.',
        value: '₹48,000+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '90%+',
        explanation: 'Over 90% of reinsurance treaties placed with top tier AAA-rated global reinsurers (Munich Re, Swiss Re, GIC Re).',
        value: '90%+',
        label: 'Backed by Munich Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '#1 Private Non-Life',
        explanation: 'Largest private sector non-life insurer in India with over 10,000+ cashless network hospitals nationwide.',
        value: '#1 Private General Insurer',
        label: 'Over 3.5 Crore+ Policies Issued'
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
          summary: 'A mandatory waiting period of 30 days applies from policy inception date for any non-accidental illness or hospitalisation.',
          highlight: 'Accidental hospitalisation covered from Day 1. Pre-existing diseases covered from Day 31 with Jumpstart Rider.',
          policyRef: 'ICICI Lombard Elevate Policy Terms (Section 3.1)',
          durationTag: '30 Days / Day 31 (Jumpstart)'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical or surgical treatment of specified conditions:',
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
          policyRef: 'ICICI Lombard Elevate Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover expenses incurred towards hospitalisation or treatment arising from standard permanent exclusions:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Obesity & weight control procedures',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'Expenses arising from breach of law',
            'War, nuclear or chemical contamination'
          ],
          policyRef: 'Standard IRDAI & ICICI Lombard Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key Elevate policy terms and highlights that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'room-category',
          icon: '🏥',
          title: 'SINGLE PRIVATE A/C ROOM (100% CASHLESS)',
          paragraphs: [
            'Single Private A/c Room is covered with zero capping and 100% cashless claims.',
            'No daily sub-limits on room rent or ICU charges in network hospitals.'
          ]
        },
        {
          id: 'unlimited-restoration',
          icon: '🔄',
          title: 'UNLIMITED RESTORATION (10+10+10...10 LAC)',
          paragraphs: [
            'Infinite restore feature refills 100% of the Sum Insured unlimited times in a policy year.',
            'Ensures your family never runs out of coverage even with multiple hospitalizations.'
          ]
        },
        {
          id: 'power-booster',
          icon: '⚡',
          title: 'POWER BOOSTER & INFINITE CARE RIDERS',
          paragraphs: [
            'Power Booster provides 100% bonus every year irrespective of claims for an indefinite period.',
            'Infinite Care gives a one-time infinite claim amount during catastrophic emergencies.'
          ]
        },
        {
          id: 'discounts-perks',
          icon: '🏷️',
          title: 'COMPREHENSIVE DISCOUNT STRUCTURE',
          paragraphs: [
            'Up to 15% Credit Score discount, up to 30% Wellness discount on renewal, 2.5% Early Renewal discount, and up to 15% Long Tenure discount.'
          ]
        }
      ]
    },

    // --- 5. POLICY BENEFITS (4 CLEAN CATEGORIES) ---
    featuresSections: [
      // ───────────────────────────────────────────────────────────────────────
      // CATEGORY 1: MOST IMPORTANT FEATURES (VISUALLY PROMINENT)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'sec-most-important',
        title: 'MOST IMPORTANT FEATURES',
        isProminent: true,
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elevate-room-rent',
            title: 'Single Private A/c Room',
            subtitle: '100% Cashless Inpatient Hospitalisation',
            summary: 'Full coverage for Single Private A/C Room with zero room rent sub-limits, zero proportionate deductions, and 100% cashless claim settlements across 10,000+ network hospitals.',
            points: [
              'Single Private A/c Room covered with 100% Cashless facility',
              'No daily room rent capping or proportionate deductions',
              'Smooth admission and hassle-free discharge process'
            ],
            badge: '100% CASHLESS',
            isProminent: true,
            iconType: 'home'
          },
          {
            id: 'elevate-pre-post',
            title: 'Pre & Post Hospitalization',
            subtitle: '90 Days Pre & 180 Days Post Hospitalization',
            summary: 'Comprehensive coverage for medical consultations, specialist visits, diagnostic scans, lab tests, and prescribed pharmacy expenses for 90 days before hospitalisation and 180 days after discharge.',
            points: [
              'Pre-hospitalization covered up to 90 days prior to admission',
              'Post-hospitalization covered up to 180 days after discharge',
              'Covers doctor follow-ups, diagnostic scans, and recovery medicines'
            ],
            badge: '90 & 180 DAYS',
            isProminent: true,
            iconType: 'calendar'
          },
          {
            id: 'elevate-icu-limit',
            title: 'No Limit on ICU',
            subtitle: 'Zero ICU Capping & Full Inpatient Care',
            summary: 'Zero sub-limits or daily capping on Intensive Care Unit (ICU), Intensive Cardiac Care Unit (ICCU), nursing charges, doctor consultations, and surgeon fees up to the full Sum Insured limit.',
            points: [
              'No capping or daily limit on ICU / ICCU room charges',
              'Surgeon, specialist, and nursing expenses covered up to Sum Insured',
              'Complete inpatient medical and surgical procedure protection'
            ],
            badge: 'NO ICU LIMIT',
            isProminent: true,
            iconType: 'shield'
          }
        ]
      },

      // ───────────────────────────────────────────────────────────────────────
      // CATEGORY 2: ADDITIONAL FEATURES
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'sec-additional-features',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elevate-unlimited-restoration',
            title: 'Unlimited Restoration',
            subtitle: '10+10+10...10 Lac Infinite Refill',
            summary: 'Automatic 100% restoration of Sum Insured unlimited times in a policy year upon partial or complete exhaustion (e.g., 10+10+10...10 Lac), ensuring your coverage never runs out.',
            steps: ['Base Sum Insured (10L)', '1st Restore (+10L)', '2nd Restore (+10L)', 'Unlimited Restorations'],
            points: [
              '100% Sum Insured restoration unlimited times in a year',
              'Applies to both unrelated and related illnesses as per terms',
              'Continuous financial shield for all insured family members'
            ],
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh'
          },
          {
            id: 'elevate-bonus',
            title: 'Bonus: 20% to 100%',
            subtitle: 'Eg: 20 Lac → 40 Lac Coverage Growth',
            summary: 'Cumulative bonus ranging from 20% to 100% of Sum Insured for claim-free years. For example, a ₹20 Lac base cover doubles to ₹40 Lac without paying any extra premium.',
            steps: ['Base ₹20 Lac', '20% Annual Bonus', 'Up to 100% Bonus', 'Total ₹40 Lac Cover'],
            points: [
              'Cumulative bonus increases Sum Insured from 20% up to 100%',
              'Example: 20 Lac coverage grows up to 40 Lac',
              'Zero increase in base premium for earned bonus'
            ],
            badge: '20% TO 100% BONUS',
            iconType: 'trending'
          },
          {
            id: 'elevate-road-ambulance',
            title: 'Road Ambulance Cover Available',
            subtitle: 'Emergency Road Surface Ambulance Charges',
            summary: 'Emergency road surface ambulance transportation charges covered for shifting the insured patient to the nearest hospital per hospitalisation event.',
            points: [
              'Emergency road surface ambulance expenses covered',
              'Quick hospital transit support during medical emergencies',
              'Cashless / reimbursement claim facility available'
            ],
            badge: 'AMBULANCE COVER',
            iconType: 'truck'
          },
          {
            id: 'elevate-day-care',
            title: 'All Day Care Treatment',
            subtitle: 'Less Than 24 Hrs Admission Covered',
            summary: 'All advanced day care procedures and surgical treatments requiring less than 24 hours of hospital admission due to modern medical advancements are fully covered.',
            points: [
              'All day care procedures requiring <24 hrs admission covered',
              'Covers dialysis, chemotherapy, radiotherapy, cataract, and minor surgeries',
              'Covered up to the full Sum Insured limit'
            ],
            badge: 'ALL DAY CARE',
            iconType: 'check'
          },
          {
            id: 'elevate-domiciliary-ayush',
            title: 'Domiciliary, Organ & AYUSH Treatment',
            subtitle: 'Ayurvedic, Unani, Organ Donor & Home Care',
            summary: 'Comprehensive coverage including doctor-prescribed home hospitalization (Domiciliary), organ donor harvesting inpatient expenses, and alternative treatments under AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy).',
            points: [
              'Domiciliary treatment covered when hospital beds are unavailable',
              'Inpatient organ donor harvesting medical expenses covered up to Sum Insured',
              'AYUSH inpatient alternative treatments (Ayurvedic, Unani, etc.) covered'
            ],
            badge: 'AYUSH & ORGAN COVER',
            iconType: 'heart'
          }
        ]
      },

      // ───────────────────────────────────────────────────────────────────────
      // CATEGORY 3: OPTIONAL RIDERS
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'sec-optional-riders',
        title: 'OPTIONAL RIDERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elevate-rider-infinite-care',
            title: 'Infinite Care',
            subtitle: 'Get One-Time Infinite Claim Amount',
            summary: 'Get a one-time infinite claim amount during critical emergencies, removing standard Sum Insured caps for catastrophic medical situations.',
            points: [
              'One-time uncapped / infinite claim amount available',
              'Ultimate financial protection against catastrophic healthcare events',
              'Optional add-on rider selected at policy inception'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'zap'
          },
          {
            id: 'elevate-rider-power-booster',
            title: 'Power Booster',
            subtitle: '100% Bonus Every Year Irrespective of Claim',
            summary: 'Get a bonus of 100% every single year irrespective of whether a claim was filed, guaranteed for an indefinite period.',
            points: [
              '100% Sum Insured bonus added every single year',
              'Applies irrespective of claim history throughout the tenure',
              'Continuous compounding coverage protection'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'trending'
          },
          {
            id: 'elevate-rider-claim-protector',
            title: 'Claim Protector',
            subtitle: 'Non-Payable Items (Gloves, Syringes, Masks)',
            summary: 'Covers non-payable and consumable hospital items like surgical gloves, cotton, syringes, PPE kits, and masks during inpatient hospitalisation.',
            points: [
              'Full cover for non-payable hospital consumables',
              'Includes gloves, cotton, syringes, masks, and administrative items',
              'Minimizes out-of-pocket expenses at hospital discharge'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'shield'
          },
          {
            id: 'elevate-rider-inflation-protector',
            title: 'Inflation Protector',
            subtitle: 'Sum Insured Increases Based on Annual Inflation',
            summary: 'Sum insured will increase automatically at each policy renewal based on the previous year’s official inflation rate.',
            points: [
              'Sum Insured automatically adjusted upwards at renewal',
              'Indexed to the previous year’s consumer price inflation rate',
              'Protects your medical coverage from rising healthcare inflation'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'trending'
          },
          {
            id: 'elevate-rider-annual-health-checkup',
            title: 'Annual Health Check-up',
            subtitle: 'Available on Cashless Basis Every Year',
            summary: 'Comprehensive preventive annual health check-up available on a 100% cashless basis every policy year for all enrolled members.',
            points: [
              '100% cashless annual health screening every year',
              'Available across certified diagnostic partner networks',
              'Helps track vital health parameters and early detection'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'clipboard'
          },
          {
            id: 'elevate-rider-tele-consultation',
            title: 'Tele-consultation',
            subtitle: 'Unlimited 24/7 Digital Consultations',
            summary: 'Unlimited 24/7 digital tele-consultations with certified general physicians and medical specialists across multiple specialties.',
            points: [
              'Unlimited digital tele-consultations via app/portal',
              'Instant access to general practitioners and specialists',
              'Zero out-of-pocket fees per consultation session'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'phone'
          },
          {
            id: 'elevate-rider-room-modifier',
            title: 'Room Modifier',
            subtitle: 'Upgrade or Downgrade Room Category Freely',
            summary: 'Provides policyholders the freedom to upgrade or downgrade their hospital room category as per their personal choice without proportionate deductions.',
            points: [
              'Flexibility to upgrade or downgrade hospital room category',
              'Eliminates proportionate deductions on room category change',
              'Personalized comfort during planned or emergency hospitalisation'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'home'
          },
          {
            id: 'elevate-rider-worldwide-cover',
            title: 'Worldwide Cover',
            subtitle: 'Global Healthcare with Cashless up to ₹3 Crore',
            summary: 'Global healthcare protection offering cashless coverage of up to ₹3 Crore across top-rated international hospitals worldwide for planned and emergency treatments.',
            points: [
              'Cashless overseas healthcare coverage up to ₹3 Crore',
              'Access to leading international medical centers and specialists',
              'Covers critical planned and emergency medical procedures globally'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'shield'
          },
          {
            id: 'elevate-rider-nri-advantage',
            title: 'NRI Advantage',
            subtitle: 'Get a 25% Discount on Base Premium',
            summary: 'Get a flat 25% discount on the base policy premium for Non-Resident Indians (NRIs) purchasing healthcare coverage in India.',
            points: [
              'Flat 25% discount on base premium for NRIs',
              'Comprehensive healthcare coverage during visits to India',
              'Cashless hospitalization across 10,000+ network hospitals'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'dollar'
          },
          {
            id: 'elevate-rider-jumpstart',
            title: 'Jumpstart',
            subtitle: 'PED (Asthma, Diabetes, BP, etc.) Covered from Day 31',
            summary: 'Pre-existing diseases (PED) such as asthma, diabetes, hypertension/BP, and other declared conditions covered from Day 31 instead of waiting years.',
            points: [
              'Pre-existing disease waiting reduced to just 30 days',
              'Asthma, diabetes, hypertension & BP covered from Day 31',
              'Immediate peace of mind for individuals with existing conditions'
            ],
            isRider: true,
            badge: 'OPTIONAL RIDER',
            iconType: 'activity'
          }
        ]
      },

      // ───────────────────────────────────────────────────────────────────────
      // CATEGORY 4: DISCOUNTS (DEDICATED SUBSECTION WITHIN POLICY BENEFITS)
      // ───────────────────────────────────────────────────────────────────────
      {
        id: 'sec-discounts',
        title: 'DISCOUNTS',
        isDiscountSection: true,
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        items: [
          {
            id: 'elevate-disc-credit-score',
            title: 'Credit Score Based Discount',
            subtitle: 'Up to 15% in Premium+ Based on Score',
            summary: 'Get up to a 15% discount in Premium+ based on maintaining a good credit score / financial track record.',
            points: [
              'Up to 15% discount based on healthy credit score',
              'Applies directly to the Premium+ policy tier',
              'Rewards financially disciplined policyholders'
            ],
            badge: 'UP TO 15% OFF',
            iconType: 'credit'
          },
          {
            id: 'elevate-disc-wellness',
            title: 'Wellness Discount',
            subtitle: 'Up to 30% on Renewal by Redeeming Points',
            summary: 'Get up to 30% discount on renewal premium by tracking healthy activities, logging steps, and redeeming wellness points in the subsequent year.',
            points: [
              'Up to 30% discount on subsequent year renewal premium',
              'Earn points via daily step tracking and health assessments',
              'Direct financial rewards for maintaining an active lifestyle'
            ],
            badge: 'UP TO 30% OFF',
            iconType: 'award'
          },
          {
            id: 'elevate-disc-early-renewal',
            title: 'Early Renewal Discount',
            subtitle: '2.5% Discount for Renewal >30 Days Early',
            summary: 'Get a 2.5% discount on policy renewal premium by completing the renewal process 30 days before policy expiry.',
            points: [
              '2.5% discount on renewal premium',
              'Valid for policy renewals initiated 30+ days in advance',
              'Instant discount applied at time of renewal checkout'
            ],
            badge: '2.5% EARLY OFF',
            iconType: 'clock'
          },
          {
            id: 'elevate-disc-long-tenure',
            title: 'Long Tenure Discount (2/3/4/5 yrs)',
            subtitle: 'Up to 10% on 2nd Year & 15% on 3rd-5th Years',
            summary: 'Multi-year policy discount offering up to 10% discount for the 2nd year and 15% discount on the 3rd, 4th & 5th years’ premium.',
            steps: ['1-Year: Standard', '2-Year: 10% Off 2nd Yr', '3-Year: 15% Off 3rd Yr', '4-5 Year: 15% Off'],
            points: [
              'Up to 10% discount on the 2nd year’s premium',
              '15% discount on the 3rd, 4th & 5th years’ premium',
              'Locks in coverage and protects against annual premium hikes'
            ],
            badge: 'UP TO 15% TENURE OFF',
            iconType: 'dollar'
          }
        ]
      }
    ]
  }
};

export const getIciciPlanData = (planId) => {
  const canonicalId = resolveIciciPlanId(planId);
  return ICICI_LOMBARD_PLANS_DATA[canonicalId] || ICICI_LOMBARD_PLANS_DATA['elevate'];
};
