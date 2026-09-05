// =============================================================================
// STAR HEALTH PLANS INDEPENDENT DATA CONFIGURATION
// Flagship Plan: Star Health Women Care → star-women-care
// =============================================================================

export const STAR_HEALTH_CANONICAL_PLAN_IDS = [
  'star-women-care'
];

export const resolveStarHealthPlanId = (planId) => {
  if (!planId) return 'star-women-care';
  const cleanId = String(planId).toLowerCase().trim();
  if (
    cleanId === 'star-women-care' ||
    cleanId === 'women-care' ||
    cleanId === 'star-women' ||
    cleanId === 'womencare'
  ) {
    return 'star-women-care';
  }
  return 'star-women-care';
};

export const STAR_HEALTH_PLANS_DATA = {
  // ===========================================================================
  // PLAN: STAR HEALTH WOMEN CARE
  // ===========================================================================
  'star-women-care': {
    planId: 'star-women-care',
    planName: 'Women Care',
    fullName: 'Star Health Women Care',
    companyName: 'Star Health',
    tagline: 'Comprehensive Women-Centric Health Cover with Inbuilt Consumables & Mother ICU Cover',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹14,500/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Star Health Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '97.9%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of eligible claims settled by Star Health within the financial year through its massive network of 14,000+ cashless hospitals.',
        singleYear: '97.9%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '63%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR measures the percentage of net premium paid out as claims. Star Health's healthy ICR of 63% ensures financial viability and seamless claim honoring.",
        range: '63% → 66%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '18.5',
        explanation: 'Measures registered complaints per 10,000 settled claims with dedicated in-house claim processing and 24/7 doctor assistance.',
        value: '18.5',
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
        summaryValue: 'Public / Institutional',
        explanation: "India's first and largest Standalone Health Insurer (SAHI), backed by prominent institutional investors including the Rakesh Jhunjhunwala Estate, Safecrop Investments, and WestBridge Capital.",
        items: [
          { name: 'Safecrop Investments & Promoters', value: '47.8%', label: 'Shareholding' },
          { name: 'Rakesh Jhunjhunwala Estate & Family', value: '17.3%', label: 'Shareholding' },
          { name: 'Institutional & Public Investors', value: '34.9%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA-',
        explanation: 'Credit ratings reflect strong financial stability, high claims-paying ability, and disciplined underwriting fundamentals.',
        items: [
          { agency: 'CRISIL', rating: 'AA- / Stable' },
          { agency: 'ICRA', rating: 'AA- / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.72×',
        explanation: "Solvency ratio represents the financial strength buffer to honor claims under adverse conditions, comfortably above the IRDAI mandatory requirement of 1.50×.",
        value: '1.72×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹14,200+ Cr',
        explanation: 'Substantial investment assets and capital reserves backing prompt claim settlements across 14,000+ hospitals.',
        value: '₹14,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties placed with world-class global reinsurers including Munich Re and General Insurance Corporation of India (GIC Re).',
        value: '85%+',
        label: 'Backed by Munich Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '#1 SAHI',
        explanation: "India's #1 standalone health insurance company with over 14,000+ cashless network hospitals and 850+ branch offices pan-India.",
        value: '#1 Standalone Health Insurer',
        label: 'Over 17 Crore+ Lives Covered'
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
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1 with zero waiting period.',
          policyRef: 'Star Health Women Care Policy Terms (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical or surgical treatment of specified conditions including cataract, hernia, joint replacements, and benign tumors.',
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
          policyRef: 'Star Health Women Care Specific Disease Schedule (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped',
          title: '24 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 24 months of continuous coverage applies for pre-existing medical conditions declared at inception.',
          highlight: 'Continuous coverage and timely annual renewals preserve cumulative waiting credits.',
          policyRef: 'Star Health Women Care Policy Terms (Section 4.3)',
          durationTag: '24 Months'
        },
        {
          id: 'cancer-rider-waiting',
          title: '180 Days Waiting Period on Optional Cancer Cover',
          summary: 'A waiting period of 180 days applies from inception for lump sum payout on first diagnosis of female cancer (if opted).',
          policyRef: 'Star Health Women Care Optional Cancer Rider (Section 5.1)',
          durationTag: '180 Days'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover medical expenses incurred towards hospitalisation or treatment of the following permanent exclusions:',
          exclusionsList: [
            'Yoga & Naturopathy treatments',
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
          policyRef: 'Standard IRDAI & Star Health Guidelines (Section 6)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important Women Care policy terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'women-centric',
          icon: '👩',
          title: 'WOMEN-CENTRIC SPECIALIZED COVERAGE',
          paragraphs: [
            'Dedicated health insurance specifically tailored for female health requirements, maternity, and family floater structures.',
            'Surrogate mothers, oocyte donors, and pregnant women eligible with specific scan reports.'
          ]
        },
        {
          id: 'room-rent-tier',
          icon: '🏥',
          title: 'ROOM RENT BASED ON SUM INSURED',
          paragraphs: [
            '₹5 Lakh SI: 1% of Sum Insured per day.',
            '₹10 Lakh – ₹25 Lakh SI: Any room (except suite or above).',
            '₹50 Lakh – ₹1 Crore SI: Any room with zero room rent capping.'
          ]
        },
        {
          id: 'star-mother-cover-mustknow',
          icon: '👶',
          title: 'STAR MOTHER COVER (ICU STAY)',
          paragraphs: [
            'If an insured child (<12 yrs) is in ICU, the mother\'s hospital stay is covered in a single private room.',
            'If hospital room is unavailable, a hotel stay allowance of ₹2,500/day for up to 7 days is covered within 2 km.'
          ]
        },
        {
          id: 'inbuilt-consumables',
          icon: '🛡️',
          title: 'INBUILT CONSUMABLES COVER',
          paragraphs: [
            'Consumables cover is inbuilt into the policy, eliminating out-of-pocket costs for surgical gloves, masks, syringes, PPE kits, and cotton.'
          ]
        }
      ]
    },

    // --- 5. 4 POLICY BENEFITS CATEGORIES (EXACTLY 4 MAIN HEADINGS) ---
    featuresSections: [
      // -----------------------------------------------------------------------
      // CATEGORY 1: MOST IMPORTANT
      // -----------------------------------------------------------------------
      {
        id: 'most-important',
        title: 'MOST IMPORTANT',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'women-room-rent',
            title: 'Room Rent Limits',
            subtitle: 'Tier-wise Room Rent Coverage',
            badge: 'ROOM RENT LIMITS',
            iconType: 'home',
            summary: 'Room Rent Limits apply based on the chosen Sum Insured: ₹5L SI provides 1% of SI per day, ₹10L – ₹25L SI allows Any room (except suite or above), and ₹50L – ₹1 Cr SI covers Any room with zero capping.',
            points: [
              '₹5L SI: 1% of SI per day',
              '₹10L – ₹25L SI: Any room (except suite or above)',
              '₹50L – ₹1 Cr SI: Any room'
            ]
          },
          {
            id: 'women-ambulance',
            title: 'Ambulance',
            subtitle: 'Road & Air Ambulance Covered',
            badge: 'ROAD & AIR AMBULANCE',
            iconType: 'truck',
            summary: 'Surface road ambulance expenses are covered, and air ambulance is covered up to 10% of Sum Insured for Sum Insured of ₹10 Lakh & above.',
            points: [
              'Road: Covered',
              'Air Ambulance: Covered up to 10% of SI (for SI ₹10L & above)'
            ]
          },
          {
            id: 'women-day-care',
            title: 'All day care procedures covered',
            subtitle: 'All Day Care Surgeries & Medical Treatments',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All day care medical procedures and surgeries requiring less than 24 hours of hospital admission due to technological advancements are covered up to Sum Insured.',
            points: [
              'All day care procedures covered',
              'No minimum 24-hour hospitalization required for advanced day care surgeries',
              'Covers dialysis, chemotherapy, radiotherapy, and minor surgeries'
            ]
          },
          {
            id: 'women-consumables',
            title: 'Consumables: Covered (inbuilt)',
            subtitle: 'Inbuilt Non-Payable Medical Items Coverage',
            badge: 'INBUILT COVER',
            iconType: 'shield',
            summary: 'Consumables cover is inbuilt into the policy, covering non-medical disposable items like gloves, masks, PPE kits, and surgical disposables.',
            points: [
              'Consumables: Covered (inbuilt)',
              'Covers non-payable medical items, surgical gloves, PPE kits, and cotton',
              'Zero out-of-pocket deductions on listed consumables during discharge'
            ]
          },
          {
            id: 'women-pre-post',
            title: 'Pre & Post hospitalization: 60 days & 90 days',
            subtitle: '60 Days Pre & 90 Days Post Hospitalization',
            badge: '60 & 90 DAYS',
            iconType: 'calendar',
            summary: 'Medical expenses incurred 60 days prior to hospital admission and 90 days following hospital discharge are covered for consultations, diagnostic tests, and prescribed medicines.',
            points: [
              'Pre & Post hospitalization: 60 days & 90 days',
              '60 days pre-hospitalization diagnostic and consultation expenses covered',
              '90 days post-hospitalization recovery tests and medications covered'
            ]
          },
          {
            id: 'women-organ-donor',
            title: 'Organ Donor Expenses: Covered',
            subtitle: 'Organ Harvesting Expenses for Donor',
            badge: 'COVERED',
            iconType: 'heart',
            summary: 'Inpatient hospitalization expenses incurred towards harvesting the organ from a living donor for the insured recipient are covered.',
            points: [
              'Organ Donor Expenses: Covered',
              'Inpatient harvesting expenses for donor covered up to Sum Insured',
              'Protects financial stability during major organ transplantation surgeries'
            ]
          },
          {
            id: 'women-ayush',
            title: 'AYUSH Treatment: Covered (except Yoga & Naturopathy)',
            subtitle: 'Ayurveda, Unani, Siddha & Homeopathy Covered',
            badge: 'COVERED',
            iconType: 'shield',
            summary: 'Inpatient medical treatment taken under Ayurveda, Unani, Siddha, and Homeopathy at recognized government or accredited institutions is covered (except Yoga & Naturopathy).',
            points: [
              'AYUSH Treatment: Covered (except Yoga & Naturopathy)',
              'Inpatient treatments at recognized government AYUSH hospitals covered',
              'Yoga and Naturopathy treatments are excluded'
            ]
          },
          {
            id: 'women-modern-treatments',
            title: 'Modern Treatments: Covered (limits apply)',
            subtitle: 'Advanced Robotic & Technological Surgeries',
            badge: 'COVERED (LIMITS APPLY)',
            iconType: 'cpu',
            summary: 'Modern advanced treatments including robotic surgeries, immunotherapy, stem cell therapy, and precision radiotherapy are covered (sub-limits apply as per policy terms).',
            points: [
              'Modern Treatments: Covered (limits apply)',
              'Covers robotic surgeries, oral chemotherapy, and deep brain stimulation',
              'Sub-limits apply as per policy schedule'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 2: VALUE ADDED
      // -----------------------------------------------------------------------
      {
        id: 'value-added',
        title: 'VALUE ADDED',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'women-star-mother-cover',
            title: 'Star Mother Cover',
            subtitle: 'Hospital Stay / Hotel Allowance for Mother of Insured Child in ICU',
            badge: 'MOTHER COVER',
            iconType: 'heart',
            summary: 'If an insured child (<12 yrs) is admitted in the ICU, the mother\'s hospital stay is covered in a single private room; if unavailable, a hotel stay allowance of ₹2,500/day for up to 7 days is provided (within 2 km of hospital).',
            points: [
              'If insured child (<12 yrs) is in ICU:',
              'Mother\'s hospital stay: Covered in a single private room',
              'If not available: ₹2,500/day for max 7 days for hotel stay (within 2 km)'
            ]
          },
          {
            id: 'women-restoration-si',
            title: 'Restoration of SI: 100% once a year',
            subtitle: '100% Automatic Sum Insured Refill',
            badge: '100% ONCE / YEAR',
            iconType: 'refresh',
            summary: 'Automatic restoration of 100% basic Sum Insured is triggered once in a policy year upon partial or full exhaustion of the sum insured.',
            points: [
              'Restoration of SI: 100% once a year',
              'Recharges base Sum Insured automatically for subsequent hospitalizations',
              'Available for unrelated and subsequent medical conditions in the policy year'
            ]
          },
          {
            id: 'women-cumulative-bonus',
            title: 'Cumulative Bonus: 20% per claim-free year, up to 100%',
            subtitle: '20% Bonus Growth on Claim-Free Renewals',
            badge: '20% TO 100% BONUS',
            iconType: 'trending',
            summary: 'A cumulative bonus of 20% of basic Sum Insured is provided for each claim-free policy year, scaling up to a maximum of 100% of Sum Insured with zero extra premium.',
            steps: [
              'Year 1 Claim-Free: +20% Bonus',
              'Year 2 Claim-Free: +40% Bonus',
              'Year 3 Claim-Free: +60% Bonus',
              'Year 4 Claim-Free: +80% Bonus',
              'Year 5 (Max): 100% Bonus (Coverage Doubled)'
            ],
            points: [
              'Cumulative Bonus: 20% per claim-free year, up to 100%',
              'Increases base Sum Insured by 20% for every claim-free renewal',
              'Doubles your health coverage up to a maximum 100% cumulative bonus'
            ]
          },
          {
            id: 'women-shared-room',
            title: 'Shared Room Benefit: ₹2,000/day, max 7 days (24 hrs mandatory stay)',
            subtitle: 'Daily Cash for Choosing Shared Accommodation',
            badge: '₹2,000 / DAY',
            iconType: 'dollar',
            summary: 'If the insured opts for a shared room accommodation instead of an eligible private room, a daily allowance of ₹2,000 per day is paid for a maximum of 7 days (minimum 24 hours mandatory stay required).',
            points: [
              'Shared Room Benefit: ₹2,000/day, max 7 days (24 hrs mandatory stay)',
              'Daily cash incentive for opting shared room accommodation',
              'Requires a minimum continuous 24 hours hospitalization stay'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 3: ADDITIONAL
      // -----------------------------------------------------------------------
      {
        id: 'additional',
        title: 'ADDITIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'women-eligibility',
            title: 'Eligibility',
            subtitle: 'Age & Female-Centric Membership Criteria',
            badge: 'ELIGIBILITY CRITERIA',
            iconType: 'users',
            summary: 'Special eligibility criteria designed for women and families: Individual Plan is for female members (18–75 years), Family Floater permits males if at least one adult female is covered, children covered 91 days to 25 years, unmarried/unemployed daughters up to 30 years, surrogate mothers & oocyte donors (25–35 yrs), and pregnant women (with 12 & 20 week scans).',
            points: [
              'Individual Plan: Only female members (age 18–75 years)',
              'Family Floater: Male members allowed if at least one adult female is covered',
              'Children: 91 days to 25 years',
              'Daughter: Can stay as a dependent if unmarried and/or unemployed up to 30 years',
              'Surrogate Mother & Oocyte Donor: Covered (age 25–35, conditions apply)',
              'Pregnant Woman: Eligible to buy (must submit 12 & 20 week pregnancy scans from approved centres)'
            ]
          },
          {
            id: 'women-mid-term',
            title: 'Mid-Term Inclusion',
            subtitle: 'Mid-Term Addition Guidelines for Spouse & Children',
            badge: 'MID-TERM INCLUSION',
            iconType: 'calendar',
            summary: 'Mid-term inclusion guidelines allow adding a newly married spouse or legally adopted child within 45 days, and newborn babies within 90 days with coverage starting from the 91st day.',
            points: [
              'Spouse / Adopted Child: Inform within 45 days of marriage/adoption',
              'Newborn Baby: Inform within 90 days; coverage starts from 91st day'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 4: OPTIONAL
      // -----------------------------------------------------------------------
      {
        id: 'optional',
        title: 'OPTIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'women-cancer-diagnosis',
            title: 'Lump Sum on Cancer Diagnosis (Female Only)',
            subtitle: '₹5L–₹25L Lump Sum Payout on Female Cancer Diagnosis',
            badge: 'OPTIONAL COVER',
            isRider: true,
            iconType: 'shield',
            summary: 'Provides an optional lump sum payout of ₹5 Lakh to ₹25 Lakh upon first diagnosis of female-specific cancer, subject to an initial waiting period of 180 days.',
            points: [
              'Lump Sum on Cancer Diagnosis (Female Only)',
              '₹5L–₹25L depending on plan',
              'Waiting period: 180 days'
            ]
          }
        ]
      }
    ]
  }
};

export const getStarHealthPlanData = (planId) => {
  const canonicalId = resolveStarHealthPlanId(planId);
  return STAR_HEALTH_PLANS_DATA[canonicalId] || STAR_HEALTH_PLANS_DATA['star-women-care'];
};
