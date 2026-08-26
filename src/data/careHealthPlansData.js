// =============================================================================
// CARE HEALTH PLANS INDEPENDENT DATA CONFIGURATION
// 1. Care Plan       → care-plan
// 2. Care Freedom    → care-freedom
// 3. Care Heart      → care-heart
//
// Each plan has completely separate, independent data, UI config, and content.
// Editing one plan will NOT affect any other plan.
// =============================================================================

export const CARE_HEALTH_CANONICAL_PLAN_IDS = [
  'care-plan',
  'care-freedom',
  'care-heart'
];

export const resolveCarePlanId = (planId) => {
  if (!planId) return 'care-plan';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'care-plan' || cleanId === 'care' || cleanId === 'care-supreme' || cleanId === 'care-health-plan') {
    return 'care-plan';
  }
  if (cleanId === 'care-freedom' || cleanId === 'freedom' || cleanId === 'care-health-freedom') {
    return 'care-freedom';
  }
  if (cleanId === 'care-heart' || cleanId === 'heart' || cleanId === 'care-health-heart' || cleanId === 'care-advantage') {
    return 'care-heart';
  }
  return cleanId;
};

export const CARE_HEALTH_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: CARE PLAN (FLAGSHIP)
  // ===========================================================================
  'care-plan': {
    planId: 'care-plan',
    planName: 'Care Plan',
    tagline: 'Comprehensive Family Protection with Zero Co-Payment, Auto-Recharge & NCB Super',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹12,800/year',

    uiConfig: {
      primaryColor: '#003366',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Care Health Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.3%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR represents the percentage of eligible claims settled by Care Health through its wide network of 24,800+ cashless healthcare providers.',
        singleYear: '98.3%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.2%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '57%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR shows the proportion of earned premium spent on honoring claims. A healthy ICR of 57% reflects disciplined risk management and reliable claims liquidity.",
        range: '57% → 61%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '15.4',
        explanation: 'Low grievance volume per 10,000 settled claims with dedicated digital claim settlement desks.',
        value: '15.4',
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
        summaryValue: 'Religare 68.4%',
        explanation: 'Promoted by Religare Enterprises Limited alongside Union Bank of India and marquee institutional investors.',
        items: [
          { name: 'Religare Enterprises Limited', value: '68.4%', label: 'Shareholding' },
          { name: 'Union Bank of India', value: '5.6%', label: 'Shareholding' },
          { name: 'Corporation Bank & Institutional Investors', value: '26.0%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'A+',
        explanation: 'CRISIL A+ / Positive and CARE A+ ratings reflect robust balance sheet, high solvency, and underwriting strength.',
        items: [
          { agency: 'CRISIL', rating: 'A+ / Positive' },
          { agency: 'CARE', rating: 'A+ / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.82×',
        explanation: "Strong solvency ratio of 1.82×, comfortably above the IRDAI mandatory minimum threshold of 1.50×.",
        value: '1.82×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹7,200+ Cr',
        explanation: 'Substantial investment assets under management ensuring high liquidity for seamless hospital claim payouts.',
        value: '₹7,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by globally acclaimed reinsurers including Hannover Re, Swiss Re, and GIC Re.',
        value: '85%+',
        label: 'Backed by Hannover Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Leading SAHI',
        explanation: 'Over 24,800+ cashless healthcare network providers across India with specialized products.',
        value: 'Top Tier Standalone Health Insurer',
        label: 'Over 3 Crore+ Total Lives Protected'
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
          highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
          policyRef: 'Care Health Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical or surgical treatment of the following specified conditions:',
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
          policyRef: 'Care Health Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover expenses incurred towards hospitalisation or treatment arising from the following permanent exclusions:',
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
          policyRef: 'Standard IRDAI & Care Health Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important policy terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'zero-copay',
          icon: '✅',
          title: 'ZERO CO-PAYMENT ACROSS AGES',
          paragraphs: [
            'Zero co-payment across all age groups at any network hospital nationwide.',
            'No mandatory deductions on hospital bills.'
          ]
        },
        {
          id: 'auto-recharge',
          icon: '🔄',
          title: 'AUTOMATIC RECHARGE BENEFIT',
          paragraphs: [
            '100% automatic recharge of base sum insured upon complete or partial exhaustion.',
            'Available for subsequent claims for any insured family member.'
          ]
        },
        {
          id: 'no-medical-test',
          icon: '🩺',
          title: 'NO PRE-POLICY MEDICAL TEST',
          paragraphs: [
            'No pre-policy medical check-up required up to 45 years of age (subject to clean declaration).'
          ]
        },
        {
          id: 'ncb-super',
          icon: '📈',
          title: 'NO CLAIM BONUS SUPER (UP TO 150%)',
          paragraphs: [
            'Increases sum insured by 50% for every claim-free year up to a massive 150% maximum bonus with NCB Super add-on.'
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
            id: 'c1-1',
            title: 'Any Room Category (Single Private Room)',
            subtitle: 'Single Private Room Covered with Zero Capping',
            summary: 'Zero room rent capping or proportionate deductions. Stay in a Single Private A/C Room with 100% cashless claims across 24,800+ network providers.',
            badge: 'ZERO CO-PAY',
            iconType: 'home'
          },
          {
            id: 'c1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: '100% Inpatient Medical Expenses Covered',
            summary: 'Comprehensive inpatient hospitalisation expenses covered including nursing fees, surgeon fees, operation theatre, and in-hospital medications.',
            badge: '100% INPATIENT',
            iconType: 'heart'
          },
          {
            id: 'c1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Medical consultations, diagnostic tests, and prescribed pharmacy bills incurred 30 days before hospital admission and 60 days post-discharge are fully reimbursed.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 'c1-4',
            title: 'All Day Care Procedures Covered',
            subtitle: 'Advanced Day Care Surgeries (<24 hrs)',
            summary: 'All medical day care procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are covered up to Sum Insured.',
            badge: 'ALL DAY CARE',
            iconType: 'check'
          },
          {
            id: 'c1-5',
            title: 'Modern Treatment & Robotic Surgery',
            subtitle: 'Precision Tech Covered up to SI',
            summary: 'Precision robotic surgery, stem cell therapy, oral chemotherapy, deep brain stimulation, and stereotactic radio surgery covered up to sum insured.',
            badge: 'ROBOTIC TECH',
            iconType: 'cpu'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'VALUE ADDED FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c2-1',
            title: 'Auto-Recharge Benefit',
            subtitle: '100% Automatic Sum Insured Refill',
            summary: 'Automatically restores 100% of Base Sum Insured upon exhaustion for subsequent claims for any insured family member.',
            steps: ['Base SI Exhausted', 'Instant Auto-Recharge', 'Available for Next Claim'],
            badge: 'AUTO-RECHARGE',
            iconType: 'refresh'
          },
          {
            id: 'c2-2',
            title: 'No Claim Bonus (Up to 150%)',
            subtitle: '50% per year up to 150% max with Super NCB',
            summary: 'Increases basic Sum Insured by 50% for every claim-free year up to a massive 150% maximum bonus with the NCB Super option.',
            steps: ['Claim-Free Year 1', 'No Claim Bonus Accrued', 'Super NCB Up to 150%'],
            badge: 'UP TO 150%',
            iconType: 'trending'
          },
          {
            id: 'c2-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Annual Health Screening Vouchers',
            summary: 'Complimentary comprehensive preventive health check-up package for all insured members every year regardless of claims.',
            badge: 'ANNUAL CHECKUP',
            iconType: 'clipboard'
          },
          {
            id: 'c2-4',
            title: 'Alternative AYUSH Hospitalisation',
            subtitle: '100% Inpatient AYUSH Covered',
            summary: 'Inpatient treatment taken at recognized government AYUSH hospitals (Ayurveda, Yoga, Unani, Siddha, Homeopathy) covered up to sum insured.',
            badge: 'AYUSH CARE',
            iconType: 'heart'
          },
          {
            id: 'c2-5',
            title: '24/7 Digital Health Portal & Wellness',
            subtitle: 'Doctor Consults & Wellness Points',
            summary: 'Access to 24/7 tele-consultations, health risk assessments, and wellness reward vouchers through the Care Health App.',
            badge: '24/7 WELLNESS',
            iconType: 'shield'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Surface Ambulance Charges Covered',
            summary: 'Emergency road surface ambulance transportation charges covered to the nearest hospital per hospitalisation.',
            badge: 'ROAD TRANSIT',
            iconType: 'truck'
          },
          {
            id: 'c3-2',
            title: 'Organ Donor & Domiciliary Hospitalisation',
            subtitle: 'Donor Expenses & Home Care Covered',
            summary: 'Covers inpatient organ harvesting costs and home hospitalisation exceeding 3 days when hospital beds are unavailable.',
            badge: 'ORGAN & HOME',
            iconType: 'home'
          },
          {
            id: 'c3-3',
            title: 'Second Medical Opinion',
            subtitle: 'Leading Global Specialists',
            summary: 'Free access to expert second medical opinions from world-class doctors for major critical illness diagnoses.',
            badge: 'GLOBAL EXPERTS',
            iconType: 'clock'
          },
          {
            id: 'c3-4',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Income Tax Savings under Sec 80D',
            summary: 'Premiums paid qualify for maximum tax deductions under Section 80D of the Income Tax Act for self, family, and parents.',
            badge: 'SEC 80D BENEFIT',
            iconType: 'dollar'
          }
        ]
      },
      {
        id: 'sec-4',
        title: 'OPTIONAL RIDERS (ADD-ONS)',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'c4-1',
            title: 'Care Shield (Consumables Cover)',
            subtitle: 'Non-Medical Consumables & CPI Inflation',
            summary: 'Covers non-payable medical items (gloves, syringes, PPE kits) along with CPI inflation indexation on base sum insured.',
            isRider: true,
            badge: 'ZERO CONSUMABLES',
            iconType: 'smile'
          },
          {
            id: 'c4-2',
            title: 'Hospital Daily Cash+',
            subtitle: 'Fixed Daily Cash Allowance',
            summary: 'Provides a fixed daily cash payout for every 24 hours of hospital stay to manage incidental out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY ALLOWANCE',
            iconType: 'zap'
          },
          {
            id: 'c4-3',
            title: 'Care OPD Consult Rider',
            subtitle: 'Outpatient Doctor Fees & Diagnostics',
            summary: 'Covers outpatient doctor consultation fees and routine diagnostic tests up to defined annual limits.',
            isRider: true,
            badge: 'OPD & ACCIDENT',
            iconType: 'shield'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 2: CARE FREEDOM
  // ===========================================================================
  'care-freedom': {
    planId: 'care-freedom',
    planName: 'Care Freedom',
    tagline: 'Simplified Health Insurance with No Pre-Policy Medical Tests Required',
    coverage: '₹3 Lakh - ₹10 Lakh',
    premium: '₹11,400/year',

    uiConfig: {
      primaryColor: '#003366',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Care Health Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.3%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of claims settled by Care Health within the financial year.',
        singleYear: '98.3%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.2%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '57%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Healthy claims ratio ensuring high solvency and fast claim processing.',
        range: '57% → 61%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '15.4',
        explanation: 'Digital claims assistance ensuring prompt turnaround.',
        value: '15.4',
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
        summaryValue: 'Religare 68.4%',
        explanation: 'Backed by Religare Enterprises Limited and Union Bank of India.',
        items: [
          { name: 'Religare Enterprises Limited', value: '68.4%', label: 'Shareholding' },
          { name: 'Union Bank of India & Institutions', value: '31.6%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'A+',
        explanation: 'CRISIL A+ rating indicating high financial capability.',
        items: [
          { agency: 'CRISIL', rating: 'A+ / Positive' },
          { agency: 'CARE', rating: 'A+ / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.82×',
        explanation: 'Solvency ratio comfortably exceeding the IRDAI mandatory minimum of 1.50×.',
        value: '1.82×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹7,200+ Cr',
        explanation: 'Substantial investment assets supporting rapid hospitalisation payouts.',
        value: '₹7,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Hannover Re, Swiss Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Hannover Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Leading SAHI',
        explanation: 'Over 24,800+ cashless healthcare network providers across India.',
        value: 'Top Tier Standalone Health Insurer',
        label: 'Over 3 Crore+ Total Lives Protected'
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
          summary: '30-day initial waiting period applies from inception for any non-accidental hospitalisation.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Care Freedom Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Pre-Existing & Specific Diseases',
          summary: 'Short 24-month waiting period for pre-existing ailments (Diabetes, Hypertension) and specific medical illnesses (Cataract, Hernia, Joint Replacements).',
          diseaseList: [
            'Pre-existing Diabetes & Hypertension',
            'Cataract & eye surgeries',
            'Joint replacements (non-accidental)',
            'Hernia (all types) & Hydrocele',
            'Benign Prostatic Hypertrophy (BPH)',
            'Piles, Fistula & Fissure in ano',
            'Stones in Urinary & Biliary systems',
            'Varicose veins & ulcers'
          ],
          policyRef: 'Care Freedom Specific Illness Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic surgeries, self-inflicted injuries, drug/alcohol abuse, investigation admissions, and unproven experimental therapies.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance abuse treatments',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'Care Health Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key policy terms for Care Freedom',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'no-medical-test-any-age',
          icon: '🩺',
          title: 'ZERO MEDICAL TESTS REQUIRED',
          paragraphs: [
            'No pre-policy medical check-up required for any age group prior to policy issuance.'
          ]
        },
        {
          id: 'short-pre-existing-wait',
          icon: '⏱️',
          title: 'SHORT 2-YEAR PRE-EXISTING WAITING',
          paragraphs: [
            'Covers declared pre-existing diseases after completing only 24 months of continuous policy coverage.'
          ]
        },
        {
          id: 'twin-sharing-room',
          icon: '🛏️',
          title: 'TWIN SHARING ROOM COVER',
          paragraphs: [
            'Standard Twin Sharing Room covered with zero capping on ICU charges.'
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
            id: 'c1-1',
            title: 'Twin Sharing Room Covered',
            subtitle: 'Standard Twin Sharing Room Covered',
            summary: 'Inpatient room rent covered for Standard Twin Sharing Room across 24,800+ cashless network providers.',
            badge: 'TWIN SHARING',
            iconType: 'home'
          },
          {
            id: 'c1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: 'Comprehensive Inpatient Medical Costs',
            summary: 'Full coverage for doctor consultation, surgeon fees, operation theatre, and in-hospital medications.',
            badge: 'INPATIENT CARE',
            iconType: 'heart'
          },
          {
            id: 'c1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Diagnostic tests, consultations, and pharmacy bills 30 days before and 60 days after discharge covered.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 'c1-4',
            title: 'Over 170+ Day Care Procedures',
            subtitle: 'Advanced Daycare Surgeries Covered',
            summary: 'Over 170 day care surgical procedures requiring less than 24 hours of hospital stay covered.',
            badge: '170+ DAY CARE',
            iconType: 'check'
          },
          {
            id: 'c1-5',
            title: 'Pre-Existing Disease Cover (Short 2-Year)',
            subtitle: '24 Months Pre-Existing Waiting Period',
            summary: 'Covers declared pre-existing conditions after completing just 24 months of coverage.',
            badge: '2-YEAR WAITING',
            iconType: 'clock'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'VALUE ADDED FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c2-1',
            title: 'Recharge Benefit',
            subtitle: '100% Recharge upon SI Exhaustion',
            summary: 'Automatically restores 100% of Base Sum Insured once in a policy year upon exhaustion.',
            steps: ['Base SI Exhausted', '100% Recharge Triggered', 'Available for Next Claim'],
            badge: 'RECHARGE BENEFIT',
            iconType: 'refresh'
          },
          {
            id: 'c2-2',
            title: 'Cumulative Bonus',
            subtitle: '10% per year up to 50%',
            summary: 'Increases basic Sum Insured by 10% for every claim-free year up to a maximum 50%.',
            badge: 'BONUS GROWTH',
            iconType: 'trending'
          },
          {
            id: 'c2-3',
            title: 'Annual Health Check-up',
            subtitle: 'Preventive Health Vouchers',
            summary: 'Complimentary annual health screening check-up vouchers on policy renewal.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          },
          {
            id: 'c2-4',
            title: 'Durable Medical Equipment Cover',
            subtitle: 'Home Support Equipment Covered',
            summary: 'Covers durable medical equipment prescribed by doctor for post-hospital recovery.',
            badge: 'MEDICAL EQUIPMENT',
            iconType: 'shield'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Ambulance Charges Covered',
            summary: 'Emergency road surface ambulance transportation covered per hospitalisation.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 'c3-2',
            title: 'Tax Deductions under Sec 80D',
            subtitle: 'Tax Savings under Sec 80D',
            summary: 'Premiums qualify for tax deductions under Section 80D of the Income Tax Act.',
            badge: 'TAX SAVER 80D',
            iconType: 'dollar'
          }
        ]
      },
      {
        id: 'sec-4',
        title: 'OPTIONAL RIDERS (ADD-ONS)',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'c4-1',
            title: 'Hospital Daily Cash Allowance',
            subtitle: 'Daily Cash Allowance',
            summary: 'Fixed daily cash payout for each day of hospital admission to manage out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 'c4-2',
            title: 'Consumables Cover Add-on',
            subtitle: 'Non-Medical Consumables Covered',
            summary: 'Covers non-payable medical items such as gloves, syringes, and PPE kits.',
            isRider: true,
            badge: 'CONSUMABLES',
            iconType: 'shield'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 3: CARE HEART
  // ===========================================================================
  'care-heart': {
    planId: 'care-heart',
    planName: 'Care Heart',
    tagline: 'Specialized Medical Protection for Pre-Existing Cardiac Patients',
    coverage: '₹3 Lakh - ₹10 Lakh',
    premium: '₹19,800/year',

    uiConfig: {
      primaryColor: '#003366',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Care Health Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.3%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of cardiac and medical claims settled by Care Health within the financial year.',
        singleYear: '98.3%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.2%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '57%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Healthy claims ratio ensuring high solvency and prompt cardiac claim honoring.',
        range: '57% → 61%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '15.4',
        explanation: 'Fast-track claim desk with dedicated medical reviewers for cardiac procedures.',
        value: '15.4',
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
        summaryValue: 'Religare 68.4%',
        explanation: 'Backed by Religare Enterprises Limited and Union Bank of India.',
        items: [
          { name: 'Religare Enterprises Limited', value: '68.4%', label: 'Shareholding' },
          { name: 'Union Bank of India & Institutions', value: '31.6%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'A+',
        explanation: 'CRISIL A+ rating certifying strong claims-servicing capability.',
        items: [
          { agency: 'CRISIL', rating: 'A+ / Positive' },
          { agency: 'CARE', rating: 'A+ / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.82×',
        explanation: 'Solvency ratio comfortably exceeding the IRDAI mandatory minimum of 1.50×.',
        value: '1.82×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹7,200+ Cr',
        explanation: 'Substantial investment assets supporting critical cardiac hospitalisation payouts.',
        value: '₹7,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Hannover Re, Swiss Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Hannover Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Leading SAHI',
        explanation: 'Over 24,800+ cashless network healthcare providers nationwide.',
        value: 'Top Tier Standalone Health Insurer',
        label: 'Over 3 Crore+ Total Lives Protected'
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
          title: 'Short 24 Months Waiting for Heart Surgeries',
          summary: 'Special short waiting period of 24 months applies for pre-existing cardiac conditions, bypass (CABG), and heart surgeries.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Care Heart Policy Terms (Section 3.1)',
          durationTag: '24 Months'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Non-Cardiac Specific Diseases',
          summary: '24 months waiting period applies for specified non-cardiac conditions such as Cataract, Hernia, Joint Replacements, and ENT procedures.',
          diseaseList: [
            'Cataract & eye surgeries',
            'Hernia (all types) & Hydrocele',
            'Piles, Fistula & Fissure in ano',
            'Stones in Urinary & Biliary systems',
            'Benign Prostatic Hypertrophy (BPH)',
            'Joint replacements (non-accidental)',
            'Sinusitis, DNS, Tonsillectomy',
            'Varicose veins & ulcers'
          ],
          policyRef: 'Care Heart Specific Illness Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic surgeries, self-inflicted injuries, drug/alcohol abuse, investigation admissions, and non-prescribed experimental devices.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance abuse treatments',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'Care Health Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key cardiac policy nuances to keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'cardiac-acceptance',
          icon: '❤️',
          title: 'PRIOR CARDIAC HISTORY COVER',
          paragraphs: [
            'Specially tailored for individuals who have undergone coronary angioplasty, stenting, or heart surgeries.',
            'Medical records and angiography reports are reviewed at proposal stage.'
          ]
        },
        {
          id: 'cardiac-opd',
          icon: '🩺',
          title: 'CARDIOLOGIST OPD CONSULTATIONS',
          paragraphs: [
            'Outpatient visits with specialist cardiologists and routine ECG tests covered up to defined limits.'
          ]
        },
        {
          id: 'cardiac-checkup',
          icon: '🫀',
          title: 'ANNUAL CARDIAC SCREENING',
          paragraphs: [
            'Complimentary cardiac screening health checkup package on every policy renewal.'
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
            id: 'c1-1',
            title: 'Pre-Existing Cardiac Ailments Covered',
            subtitle: 'Short 24-Month Waiting Period',
            summary: 'Covers pre-existing cardiac conditions, heart bypass (CABG), angioplasty, and pacemaker implantations after 24 months.',
            badge: '24 MONTHS WAITING',
            iconType: 'heart'
          },
          {
            id: 'c1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: 'Full Inpatient Medical Care',
            summary: 'Comprehensive in-patient hospitalisation expenses for cardiac and non-cardiac ailments covered up to sum insured.',
            badge: 'INPATIENT CARE',
            iconType: 'home'
          },
          {
            id: 'c1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Diagnostic tests, angiography, cardiac consultations, and pharmacy bills 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 'c1-4',
            title: 'Cardiac Day Care Procedures Covered',
            subtitle: 'Day Care Surgeries & Angiograms',
            summary: 'Covers day care cardiac procedures and angiograms requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 'c1-5',
            title: 'Modern Cardiac Treatments & Robotics',
            subtitle: 'Minimally Invasive Cardiac Surgeries',
            summary: 'Covers precision robotic cardiac surgeries, TAVI, and advanced modern medical procedures.',
            badge: 'ROBOTIC TECH',
            iconType: 'cpu'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'VALUE ADDED FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c2-1',
            title: 'Outpatient Cardiac Consultations',
            subtitle: 'Regular Cardiologist Visits Covered',
            summary: 'Outpatient medical consultations and ECG tests with specialist cardiologists covered up to policy sub-limits.',
            badge: 'OPD CONSULT',
            iconType: 'clipboard'
          },
          {
            id: 'c2-2',
            title: 'Cardiac Device Implants Cover',
            subtitle: 'Pacemaker, ICD & Valve Implants',
            summary: 'Inpatient costs for cardiac device implantations such as Pacemakers, ICDs, and Artificial Heart Valves covered.',
            badge: 'DEVICE IMPLANTS',
            iconType: 'shield'
          },
          {
            id: 'c2-3',
            title: 'Annual Cardiac Health Screening',
            subtitle: 'Lipid Profile, ECG & Sugar Tests',
            summary: 'Complimentary annual preventive health check-up package including Lipid Profile, ECG, and blood sugar tests on renewal.',
            badge: 'HEALTH CHECK',
            iconType: 'trending'
          },
          {
            id: 'c2-4',
            title: 'AYUSH Treatment Inpatient Cover',
            subtitle: '100% Inpatient AYUSH Covered',
            summary: 'Inpatient treatment taken at recognized government AYUSH hospitals covered up to sum insured.',
            badge: 'AYUSH COVER',
            iconType: 'heart'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 'c3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Cardiac Emergency Transit',
            summary: 'Emergency road ambulance charges to the nearest hospital for acute cardiac emergencies fully covered.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 'c3-2',
            title: 'Second Medical Opinion',
            subtitle: 'Expert Cardiologist Panel',
            summary: 'Free second opinions from leading heart specialists before undergoing major surgical interventions.',
            badge: '2ND OPINION',
            iconType: 'clock'
          },
          {
            id: 'c3-3',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Tax Deduction Benefit',
            summary: 'Premiums paid qualify for maximum tax deductions under Section 80D of the Income Tax Act.',
            badge: 'TAX SAVER 80D',
            iconType: 'dollar'
          }
        ]
      },
      {
        id: 'sec-4',
        title: 'OPTIONAL RIDERS (ADD-ONS)',
        gridCols: 'grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'c4-1',
            title: 'Hospital Daily Cash Rider',
            subtitle: 'Fixed Daily Cash Allowance',
            summary: 'Fixed daily cash payout for each day of continuous hospital admission to handle incidental expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 'c4-2',
            title: 'Personal Accident Shield',
            subtitle: '24/7 Worldwide Accident Cover',
            summary: 'Comprehensive accidental death and permanent disability financial protection.',
            isRider: true,
            badge: 'ACCIDENT SHIELD',
            iconType: 'shield'
          }
        ]
      }
    ]
  }
};

export const getCarePlanData = (planId) => {
  const canonicalId = resolveCarePlanId(planId);
  return CARE_HEALTH_PLANS_DATA[canonicalId] || CARE_HEALTH_PLANS_DATA['care-plan'];
};
