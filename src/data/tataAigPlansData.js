// =============================================================================
// TATA AIG PLANS INDEPENDENT DATA CONFIGURATION
// 1. MediCare Select   → medicare-select (or medicare-premier)
// 2. MediCare Protect  → medicare-protect
// 3. MediCare Plus     → medicare-plus (Super Top-Up)
//
// Each plan has completely separate, independent data, UI config, and content.
// Editing one plan will NOT affect any other plan.
// =============================================================================

export const TATA_AIG_CANONICAL_PLAN_IDS = [
  'medicare-select',
  'medicare-protect',
  'medicare-plus'
];

export const resolveTataAigPlanId = (planId) => {
  if (!planId) return 'medicare-select';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'medicare-premier' || cleanId === 'medicare-select' || cleanId === 'tata-medicare-select') {
    return 'medicare-select';
  }
  if (cleanId === 'medicare-protect' || cleanId === 'tata-medicare-protect') {
    return 'medicare-protect';
  }
  if (cleanId === 'medicare-plus' || cleanId === 'tata-medicare-plus' || cleanId === 'medicare-topup') {
    return 'medicare-plus';
  }
  return cleanId;
};

export const TATA_AIG_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: MEDICARE SELECT
  // ===========================================================================
  'medicare-select': {
    planId: 'medicare-select',
    planName: 'MediCare Select',
    tagline: 'Comprehensive Inpatient Hospitalisation & Restoration',
    coverage: '₹5 Lakh - ₹50 Lakh',
    premium: '₹10,500/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#0038A8',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Tata AIG Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '99.0%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of eligible claims that Tata AIG settles during the financial year. A 99.0% ratio reflects a reliable, dependable claim settlement track record.',
        singleYear: '99.0%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.9%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '68%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR indicates the proportion of net earned premium that the insurer pays out for claims. Tata AIG's balanced ICR of 68% ensures robust financial sustainability and timely claim execution.",
        range: '68% → 72%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '14.2',
        explanation: 'Complaint volume measures customer grievances per 10,000 claims settled. Tata AIG maintains an efficient grievance resolution mechanism and prompt digital support.',
        value: '14.2',
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
        summaryValue: '1.85×',
        explanation: "Solvency ratio measures the insurer's financial buffer to pay claims under stress conditions, well above the IRDAI mandatory minimum of 1.50×.",
        value: '1.85×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹18,500+ Cr',
        explanation: "Substantial investment assets and capital reserves ensuring long-term claim-paying liquidity across India.",
        value: '₹18,500+ Cr',
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
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any illness or medical hospitalisation.',
          highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
          policyRef: 'Tata AIG MediCare Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical/surgical treatment of the following specified conditions:',
          diseaseList: [
            'Cataract & eye surgeries',
            'Benign Prostatic Hypertrophy (BPH)',
            'Hernia (all types) & Hydrocele',
            'Piles, Fistula & Fissure in ano',
            'Stones in Urinary, Biliary & Renal systems',
            'Hysterectomy for Menorrhagia / Fibroids',
            'Joint replacements (non-accidental)',
            'Osteoarthritis & Osteoporosis',
            'Sinusitis, DNS, Tonsillectomy',
            'Benign cysts, polyps & tumors',
            'Varicose veins & varicose ulcers',
            'Spondylosis, Spondylitis & Disc disorders'
          ],
          policyRef: 'Tata AIG MediCare Policy Terms (Section 3.2)',
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
          policyRef: 'Standard IRDAI & Tata AIG Exclusion Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) — Details modal layout ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important policy terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ROOM CATEGORY & CAPPING',
          paragraphs: [
            'Single Private A/C Room is covered with zero proportionate deduction.',
            'Opting for rooms higher than eligible category can attract proportionate deductions on associated surgeon and doctor fees.'
          ]
        },
        {
          id: 'restoration-benefit',
          icon: '🔄',
          title: 'RESTORATION BENEFIT RULES',
          paragraphs: [
            '100% Restoration of base sum insured is triggered automatically upon exhaustion once per policy year.',
            'Available for subsequent unrelated illnesses within the same policy year.'
          ]
        },
        {
          id: 'health-checkup',
          icon: '🩺',
          title: 'HEALTH CHECK-UP BENEFIT',
          paragraphs: [
            'Complimentary preventive health check-up is provided upon continuous policy renewal.',
            'Health check vouchers can be redeemed at cashless network diagnostic partner centers.'
          ]
        },
        {
          id: 'consumables',
          icon: '🛡️',
          title: 'CONSUMABLES & NON-MEDICAL COVER',
          paragraphs: [
            'Eligible non-medical items such as gloves, syringes, and PPE kits are covered under the policy terms.',
            'Check the non-payable schedule list prior to hospital discharge for any excluded administrative items.'
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
            title: '100% Inpatient Hospitalisation',
            subtitle: 'Full coverage up to Sum Insured',
            summary: 'Covers room rent, nursing expenses, ICU charges, surgeon fees, and medicines incurred during hospital admission exceeding 24 hours.',
            badge: '100% COVERED',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Room Category Capping',
            subtitle: 'Single Private Room Covered',
            summary: 'Eligible for Single Private Room with zero daily rent sub-limits and no proportionate deductions across cashless network hospitals.',
            badge: 'SINGLE PRIVATE ROOM',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Covers medical consultations, investigative tests, and prescribed medicines 30 days before admission and 60 days post discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures',
            subtitle: 'Day Care Surgeries Covered',
            summary: 'All advanced medical and surgical procedures requiring less than 24 hours of hospital stay due to technological advancements are fully covered.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Medical Treatments',
            subtitle: 'Robotic & Advanced Technology',
            summary: 'Full coverage for modern treatments including robotic surgery, stem cell therapy, oral chemotherapy, and deep brain stimulation up to sum insured.',
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
            id: 's2-1',
            title: '100% Restoration Benefit',
            subtitle: 'Automatic refill once per policy year',
            summary: 'Automatically refills 100% of your Base Sum Insured upon partial or complete exhaustion for subsequent unrelated claims.',
            steps: ['Base Sum Insured', '100% Restored once', '100% Additional Cover'],
            badge: 'RESTORATION',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Cumulative Bonus Growth',
            subtitle: '10% per claim-free year (Max 50%)',
            summary: 'Earn a 10% increase in your Sum Insured for every claim-free year, capped at a maximum bonus of 50% without extra premium.',
            steps: ['Base Cover', 'Yr 1 (+10%)', 'Yr 2 (+10%)', 'Max 50% Bonus'],
            badge: 'BONUS GROWTH',
            iconType: 'trending'
          },
          {
            id: 's2-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Covered at every renewal',
            summary: 'Complimentary comprehensive health check-up vouchers provided for all insured members upon continuous policy renewal.',
            badge: 'ANNUAL CHECKUP',
            iconType: 'clipboard'
          },
          {
            id: 's2-4',
            title: 'AYUSH Treatment Cover',
            subtitle: '100% AYUSH Inpatient Coverage',
            summary: 'Full inpatient coverage for alternative treatments taken under Ayurveda, Unani, Siddha, and Homeopathy at recognized government/NABH hospitals.',
            badge: 'AYUSH COVER',
            iconType: 'shield'
          },
          {
            id: 's2-5',
            title: 'Consumables Cover',
            subtitle: 'Eligible non-medical items covered',
            summary: 'Covers eligible non-medical items such as gloves, syringes, masks, PPE kits, and administrative charges during hospitalisation.',
            badge: 'CONSUMABLES',
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
            id: 's3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Reimbursed as per policy limits per admission',
            summary: 'Covers emergency road ambulance transportation charges to transfer the insured patient to the nearest multi-speciality hospital.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Organ Donor Expenses',
            subtitle: 'Inpatient harvesting cost covered',
            summary: 'Inpatient medical expenses incurred for organ donor harvesting surgery during transplant procedures are fully covered up to sum insured.',
            badge: 'ORGAN DONOR',
            iconType: 'home'
          },
          {
            id: 's3-3',
            title: 'Second Medical Opinion',
            subtitle: '1 Expert opinion per year',
            summary: 'Avail 1 complimentary expert second medical opinion consultation per policy year from leading specialists for major critical illnesses.',
            badge: '2ND OPINION',
            iconType: 'clock'
          },
          {
            id: 's3-4',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Tax deduction under Section 80D',
            summary: 'Premiums paid qualify for tax deductions under Section 80D of the Income Tax Act for self, family, and senior citizen parents.',
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
            id: 's4-1',
            title: 'Maternity & Newborn Cover',
            subtitle: 'Optional Rider',
            summary: 'Covers delivery expenses (Normal & C-Section) along with newborn baby medical care up to 90 days from birth.',
            isRider: true,
            badge: 'MATERNITY',
            iconType: 'heart'
          },
          {
            id: 's4-2',
            title: 'Hospital Daily Cash Allowance',
            subtitle: 'Optional Rider',
            summary: 'Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage non-medical out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'smile'
          },
          {
            id: 's4-3',
            title: 'Global Emergency Cover',
            subtitle: 'Optional Rider',
            summary: 'Extends emergency inpatient hospitalization coverage outside India for sudden medical emergencies during overseas travel.',
            isRider: true,
            badge: 'GLOBAL COVER',
            iconType: 'zap'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 2: MEDICARE PROTECT
  // ===========================================================================
  'medicare-protect': {
    planId: 'medicare-protect',
    planName: 'MediCare Protect',
    tagline: 'Essential Protection with High-Value Hospitalisation Cover',
    coverage: '₹3 Lakh - ₹20 Lakh',
    premium: '₹8,200/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#0038A8',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Tata AIG Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '99.0%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of eligible claims settled by Tata AIG during the financial year.',
        singleYear: '99.0%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.9%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '68%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "Tata AIG's balanced ICR of 68% demonstrates strong reserves and reliable claim execution.",
        range: '68% → 72%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '14.2',
        explanation: 'Low grievance rate reflecting efficient customer service across all touchpoints.',
        value: '14.2',
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
        summaryValue: '74% / 26%',
        explanation: 'Tata AIG General Insurance is a joint venture between Tata Sons (74%) and American International Group (AIG) (26%).',
        items: [
          { name: 'Tata Group (Tata Sons)', value: '74%', label: 'Ownership' },
          { name: 'American International Group (AIG)', value: '26%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Highest credit ratings indicating highest financial security.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.85×',
        explanation: "Solvency ratio comfortably exceeding the IRDAI mandatory minimum of 1.50×.",
        value: '1.85×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹18,500+ Cr',
        explanation: "Substantial investment assets ensuring reliable claim settlements.",
        value: '₹18,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '90%+',
        explanation: 'Reinsurance treaties backed by Munich Re, Swiss Re & GIC Re.',
        value: '90%+',
        label: 'Backed by Munich Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 5',
        explanation: "One of India's top 5 private general insurers with 10,000+ cashless network hospitals.",
        value: 'Top 5 Private Insurer',
        label: 'Over 2 Crore+ Policies Serviced'
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
          summary: 'A 30-day initial waiting period applies from inception for any non-accidental hospitalisation.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Tata AIG MediCare Protect Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: '24 months waiting period applicable for specified medical/surgical illnesses such as Cataract, Hernia, Hydrocele, Piles, Stones, Joint Replacements, and ENT surgeries.',
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
          policyRef: 'Tata AIG MediCare Protect Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic treatments, self-inflicted injuries, drug/alcohol abuse, weight control surgery, investigation admissions, and breach of law.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports'
          ],
          policyRef: 'Tata AIG Policy Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key policy nuances for MediCare Protect',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ROOM RENT ELIGIBILITY',
          paragraphs: [
            'Single Private Room is covered under the policy terms.',
            'Choose network cashless hospitals for seamless settlement.'
          ]
        },
        {
          id: 'bonus',
          icon: '📈',
          title: 'CUMULATIVE BONUS ACCRUAL',
          paragraphs: [
            '10% Cumulative Bonus awarded per claim-free year up to 100% of sum insured.',
            'Bonus is protected if claim is below specified limit.'
          ]
        },
        {
          id: 'ayush-cover',
          icon: '🌿',
          title: 'AYUSH INPATIENT GUIDELINES',
          paragraphs: [
            'Ayurveda, Yoga, Unani, Siddha, and Homeopathy inpatient treatments covered up to 100% at accredited centers.'
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
            title: 'Inpatient Hospitalisation',
            subtitle: '100% Covered up to Sum Insured',
            summary: 'Full coverage for doctor consultations, nursing, ICU, surgeon charges, and in-hospital medications.',
            badge: '100% COVERED',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Single Private Room',
            subtitle: 'Standard Private Room Covered',
            summary: 'Covers standard single private A/C room with zero daily rent sub-limits.',
            badge: 'PRIVATE ROOM',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Covers medical consultations and tests 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Day Care Procedures',
            subtitle: 'All Day Care Surgeries Covered',
            summary: 'Covers all day care treatments requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Medical Treatments',
            subtitle: 'Advanced Treatments Covered',
            summary: 'Covers advanced modern treatments including robotic surgery and stem cell therapy up to SI.',
            badge: 'MODERN TECH',
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
            id: 's2-1',
            title: 'Cumulative Bonus (Up to 100%)',
            subtitle: '10% per claim-free year',
            summary: 'Earn a 10% increase in your Sum Insured for every claim-free year, up to a maximum 100% bonus.',
            steps: ['Base Cover', 'Yr 1 (+10%)', 'Yr 2 (+10%)', 'Max 100% Bonus'],
            badge: 'BONUS ACCRUAL',
            iconType: 'trending'
          },
          {
            id: 's2-2',
            title: 'AYUSH Treatment Cover',
            subtitle: 'Alternative medicine covered',
            summary: 'Full coverage for AYUSH treatments in government-recognized medical centers.',
            badge: 'AYUSH COVER',
            iconType: 'shield'
          },
          {
            id: 's2-3',
            title: 'Organ Donor Expenses',
            subtitle: 'Harvesting costs covered',
            summary: 'Inpatient expenses incurred for organ harvesting during transplantation covered up to SI.',
            badge: 'ORGAN DONOR',
            iconType: 'home'
          },
          {
            id: 's2-4',
            title: 'Preventive Health Check-up',
            subtitle: 'Annual Health Check',
            summary: 'Complimentary annual health screening check-up vouchers on continuous renewal.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 's3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Reimbursed per admission',
            summary: 'Covers road ambulance transportation charges to transfer patient to hospital.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Tax deduction under 80D',
            summary: 'Premiums qualify for tax deductions under Section 80D of the Income Tax Act.',
            badge: 'TAX BENEFIT',
            iconType: 'dollar'
          },
          {
            id: 's3-3',
            title: 'Compassionate Travel Assistance',
            subtitle: 'Travel support for family',
            summary: 'Reimburses travel expenses for an immediate family member during prolonged hospitalisation.',
            badge: 'TRAVEL SUPPORT',
            iconType: 'users'
          },
          {
            id: 's3-4',
            title: '24/7 Claim Assistance',
            subtitle: 'Instant Cashless Network',
            summary: 'Round-the-clock claim guidance and pre-authorization across 10,000+ network hospitals.',
            badge: '24/7 SUPPORT',
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
            title: 'Hospital Daily Cash Rider',
            subtitle: 'Optional Add-on',
            summary: 'Fixed daily cash payout for each 24 hours of hospital stay to manage incidental expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'smile'
          },
          {
            id: 's4-2',
            title: 'Critical Illness Booster',
            subtitle: 'Optional Add-on',
            summary: 'Lump-sum cash payout upon diagnosis of listed critical illnesses.',
            isRider: true,
            badge: 'CRITICAL SHIELD',
            iconType: 'zap'
          },
          {
            id: 's4-3',
            title: 'Personal Accident Cover',
            subtitle: 'Optional Add-on',
            summary: '24/7 worldwide financial protection against accidental death and permanent disablement.',
            isRider: true,
            badge: 'ACCIDENT COVER',
            iconType: 'shield'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 3: MEDICARE PLUS (SUPER TOP-UP)
  // ===========================================================================
  'medicare-plus': {
    planId: 'medicare-plus',
    planName: 'MediCare Plus',
    tagline: 'High-Value Super Top-Up Coverage Over Your Base Policy',
    coverage: '₹10 Lakh - ₹1 Crore',
    premium: '₹6,500/year',

    // --- PLAN-SPECIFIC UI CONFIG (INDEPENDENT) ---
    uiConfig: {
      primaryColor: '#0038A8',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Tata AIG Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '99.0%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of eligible claims settled by Tata AIG during the financial year.',
        singleYear: '99.0%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.9%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '68%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "Tata AIG maintains an optimal ICR of 68% ensuring timely top-up claim payouts.",
        range: '68% → 72%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '14.2',
        explanation: 'Low grievance rate reflecting efficient customer servicing.',
        value: '14.2',
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
        summaryValue: '74% / 26%',
        explanation: 'Tata AIG General Insurance is a joint venture between Tata Sons (74%) and American International Group (AIG) (26%).',
        items: [
          { name: 'Tata Group (Tata Sons)', value: '74%', label: 'Ownership' },
          { name: 'American International Group (AIG)', value: '26%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'Highest credit ratings indicating highest financial security.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.85×',
        explanation: "Solvency ratio well above the IRDAI mandatory minimum of 1.50×.",
        value: '1.85×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹18,500+ Cr',
        explanation: "Substantial investment assets ensuring high-value top-up settlements.",
        value: '₹18,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '90%+',
        explanation: 'Reinsurance treaties backed by Munich Re, Swiss Re & GIC Re.',
        value: '90%+',
        label: 'Backed by Munich Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 5',
        explanation: "One of India's top 5 private general insurers with 10,000+ cashless network hospitals.",
        value: 'Top 5 Private Insurer',
        label: 'Over 2 Crore+ Policies Serviced'
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
          summary: '30 days initial waiting period applies for any illness-related claims exceeding chosen deductible.',
          highlight: 'Accidental hospitalisation covered from Day 1 above deductible.',
          policyRef: 'Tata AIG MediCare Plus Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: '24 months waiting period applicable for specified medical/surgical illnesses such as Cataract, Hernia, Joint Replacements, and ENT procedures.',
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
          policyRef: 'Tata AIG MediCare Plus Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes claims within deductible threshold, cosmetic treatments, self-inflicted injuries, drug/alcohol abuse, and breach of law.',
          exclusionsList: [
            'Expenses within the chosen aggregate deductible',
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance abuse treatments',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'Tata AIG Policy Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key super top-up terms to keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'deductible-rule',
          icon: '💳',
          title: 'AGGREGATE DEDUCTIBLE',
          paragraphs: [
            'The chosen deductible is aggregate across the full policy year, not per claim.',
            'Multiple hospitalisations across the year combine to cross the deductible threshold.'
          ]
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ROOM CATEGORY',
          paragraphs: [
            'Single Private Room is covered with zero capping above deductible.',
            'Enjoy full cashless access at 10,000+ network hospitals.'
          ]
        },
        {
          id: 'no-medical-test',
          icon: '🩺',
          title: 'ZERO PRE-POLICY TEST',
          paragraphs: [
            'No pre-policy medical check-up required up to 55 years of age (subject to clean health declaration).'
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
            title: 'High Sum Insured Super Top-Up',
            subtitle: 'Cover up to ₹1 Crore',
            summary: 'High-value health insurance protection kicking in once total annual medical bills exceed chosen deductible.',
            badge: 'SUPER TOP-UP',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Single Private Room',
            subtitle: 'Zero Sub-limit on Room Rent',
            summary: 'Covers Single Private A/C Room charges with zero room rent capping above the deductible threshold.',
            badge: 'PRIVATE ROOM',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 90 Days Post',
            summary: 'Covers pre and post hospitalisation consultations, tests, and pharmacy bills 60 days before and 90 days after discharge.',
            badge: '60 & 90 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures',
            subtitle: 'Day Care Surgeries Covered',
            summary: 'Day care procedures requiring less than 24 hours of hospital stay covered above the deductible.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Treatments & Robotic Tech',
            subtitle: 'Advanced Surgeries Covered',
            summary: 'Advanced robotic surgeries, stem cell therapies, and modern medical procedures fully covered.',
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
            id: 's2-1',
            title: 'Aggregate Deductible Feature',
            subtitle: 'Cumulative across policy year',
            summary: 'Deductible is calculated cumulatively across all claims in a policy year, rather than on each individual claim.',
            steps: ['Base Policy pays first', 'Deductible crossed', 'MediCare Plus pays 100%'],
            badge: 'AGGREGATE',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Zero Medical Test up to 55 Yrs',
            subtitle: 'No pre-policy screening',
            summary: 'No pre-policy medical check-up required up to 55 years of age for proposal approval.',
            badge: 'NO MEDICAL TEST',
            iconType: 'clipboard'
          },
          {
            id: 's2-3',
            title: 'AYUSH Treatment Inpatient Cover',
            subtitle: '100% AYUSH Inpatient Covered',
            summary: 'Inpatient treatment under Ayurveda, Yoga, Unani, Siddha, and Homeopathy fully covered above deductible.',
            badge: 'AYUSH COVER',
            iconType: 'shield'
          },
          {
            id: 's2-4',
            title: 'Lifelong Renewability',
            subtitle: 'Guaranteed lifetime renewal',
            summary: 'Lifelong renewability with zero co-payment irrespective of age at renewal.',
            badge: 'LIFELONG',
            iconType: 'trending'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-2 sm:grid-cols-2',
        items: [
          {
            id: 's3-1',
            title: 'Organ Donor Expenses',
            subtitle: 'Harvesting costs covered',
            summary: 'Inpatient harvesting surgery expenses for organ donor during transplantation covered above deductible.',
            badge: 'ORGAN DONOR',
            iconType: 'home'
          },
          {
            id: 's3-2',
            title: 'Emergency Road Ambulance',
            subtitle: 'Surface transit covered',
            summary: 'Road ambulance charges covered for emergency hospitalisation transfer as per policy limits.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-3',
            title: 'Second Medical Opinion',
            subtitle: 'Expert specialist panel',
            summary: 'Free access to expert second opinions from leading medical specialists for major critical illnesses.',
            badge: '2ND OPINION',
            iconType: 'clock'
          },
          {
            id: 's3-4',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Tax deduction under 80D',
            summary: 'Top-up premium paid qualifies for tax deductions under Section 80D of the Income Tax Act.',
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
            id: 's4-1',
            title: 'Hospital Daily Cash Rider',
            subtitle: 'Optional Rider',
            summary: 'Fixed daily cash payout for every 24 hours of hospitalisation above deductible threshold.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'smile'
          },
          {
            id: 's4-2',
            title: 'Personal Accident Cover',
            subtitle: 'Optional Rider',
            summary: 'Worldwide 24/7 accidental death and permanent disablement financial coverage.',
            isRider: true,
            badge: 'ACCIDENT SHIELD',
            iconType: 'shield'
          }
        ]
      }
    ]
  }
};

export const getTataAigPlanData = (planId) => {
  const canonicalId = resolveTataAigPlanId(planId);
  return TATA_AIG_PLANS_DATA[canonicalId] || TATA_AIG_PLANS_DATA['medicare-select'];
};
