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
  'complete-health-insurance',
  'health-shield',
  'golden-shield'
];

export const resolveIciciPlanId = (planId) => {
  if (!planId) return 'complete-health-insurance';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'complete-health-insurance' || cleanId === 'complete-health' || cleanId === 'icici-complete-health') {
    return 'complete-health-insurance';
  }
  if (cleanId === 'health-shield' || cleanId === 'shield' || cleanId === 'icici-health-shield') {
    return 'health-shield';
  }
  if (cleanId === 'golden-shield' || cleanId === 'golden' || cleanId === 'icici-golden-shield') {
    return 'golden-shield';
  }
  return cleanId;
};

export const ICICI_LOMBARD_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: COMPLETE HEALTH INSURANCE
  // ===========================================================================
  'complete-health-insurance': {
    planId: 'complete-health-insurance',
    planName: 'Complete Health Insurance',
    tagline: 'Comprehensive Cover with Zero Room Capping, Reset Benefit & Wellness Rewards',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹15,200/year',

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
        explanation: "Exceptional solvency ratio of 2.62× providing an immense capital cushion well above the IRDAI mandatory minimum of 1.50×.",
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
          highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
          policyRef: 'ICICI Lombard Policy Terms (Section 3.1)',
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
          policyRef: 'ICICI Lombard Specific Illness Schedule (Section 3.2)',
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
          policyRef: 'Standard IRDAI & ICICI Lombard Guidelines (Section 4)',
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
          id: 'room-category',
          icon: '🏥',
          title: 'ROOM CATEGORY & ZERO SUB-LIMIT',
          paragraphs: [
            'Single Private A/C Room is covered with zero capping and zero proportionate deduction.',
            'No daily sub-limits on room rent or ICU charges in network hospitals.'
          ]
        },
        {
          id: 'reset-benefit',
          icon: '🔄',
          title: 'RESET BENEFIT (100% RECHARGE)',
          paragraphs: [
            'Instantly restores 100% of the Base Sum Insured upon complete exhaustion.',
            'Available for subsequent claims for same or different illnesses during the policy tenure.'
          ]
        },
        {
          id: 'wellness-rewards',
          icon: '🏆',
          title: 'WELLNESS REWARDS PROGRAM',
          paragraphs: [
            'Earn up to a 20% discount on renewal premium by tracking healthy step counts and completing health assessments via IL TakeCare App.'
          ]
        },
        {
          id: 'donor-expenses',
          icon: '🫀',
          title: 'ORGAN DONOR EXPENSES',
          paragraphs: [
            'Inpatient hospitalisation expenses for organ donor harvesting are covered up to the full sum insured limit.'
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
            title: 'No Capping on Room Rent',
            subtitle: 'Single Private A/C Room Covered',
            summary: 'Zero room rent sub-limits or proportionate deductions. Stay in a Single Private A/C Room with 100% cashless claims across 10,000+ network hospitals.',
            badge: 'ROOM RENT COVER',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'In-Patient Hospitalisation Cover',
            subtitle: '100% Actual Inpatient Medical Expenses',
            summary: 'Comprehensive inpatient hospitalisation expenses covered including nursing fees, surgeon fees, operation theatre, and in-hospital medications.',
            badge: 'IN-PATIENT COVER',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 90 Days Post',
            summary: 'Medical consultations, diagnostic tests, and prescribed pharmacy bills incurred 60 days before hospitalisation and 90 days after discharge are fully covered.',
            badge: 'PRE & POST',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures Covered',
            subtitle: 'Advanced Day Care Surgeries (<24 hrs)',
            summary: 'All medical day care procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are fully covered.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Treatment & Robotic Surgery',
            subtitle: 'Advanced Precision Tech Covered up to SI',
            summary: 'Coverage for robotic surgeries, stem cell therapy, oral chemotherapy, deep brain stimulation, balloon sinuplasty, and stereotactic radio surgery.',
            badge: 'ADVANCED SURGERY',
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
            title: 'Reset Benefit (Auto-Restore)',
            subtitle: '100% Instant Sum Insured Recharge',
            summary: 'Automatically resets 100% of Base Sum Insured upon complete exhaustion. Can be utilised for subsequent hospitalisations for the same or different illnesses.',
            steps: ['Base Sum Insured', '100% Instant Reset', '100% Restored Cover'],
            badge: 'RESET BENEFIT',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Wellness Rewards Program',
            subtitle: 'Up to 20% Renewal Premium Discount',
            summary: 'Earn wellness points by completing step challenges and health assessments on the IL TakeCare App to earn up to 20% discount on renewal premium.',
            steps: ['Track Health Metrics', 'Earn Wellness Points', 'Wellness Benefits'],
            badge: 'WELLNESS DISCOUNT',
            iconType: 'award'
          },
          {
            id: 's2-3',
            title: 'Free Online Tele-Consultations',
            subtitle: 'Unlimited Tele-Consults via App',
            summary: 'Unlimited complimentary digital 24/7 video consultations with qualified general physicians and specialists through IL TakeCare App.',
            badge: 'E-CONSULTATIONS',
            iconType: 'phone'
          },
          {
            id: 's2-4',
            title: 'Organ Donor Inpatient Cover',
            subtitle: 'Donor Medical Harvesting Covered',
            summary: 'Inpatient medical expenses for harvesting organ from donor during kidney, liver, or heart transplant covered up to base sum insured.',
            badge: 'ORGAN DONOR',
            iconType: 'shield'
          },
          {
            id: 's2-5',
            title: 'AYUSH Inpatient Hospitalisation',
            subtitle: 'Alternative Treatments Covered',
            summary: 'Inpatient treatment taken at recognized government AYUSH hospitals (Ayurveda, Yoga, Unani, Siddha, Homeopathy) covered up to sum insured.',
            badge: 'AYUSH COVER',
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
            title: 'Cumulative Bonus (NCB)',
            subtitle: '10% per year up to 50% max',
            summary: 'Increases basic Sum Insured by 10% for every claim-free year up to a maximum 50% cumulative bonus without extra premium.',
            steps: ['Base Cover', '10% Bonus (Yr 1)', '20% Bonus (Yr 2)', 'Max 50% Bonus'],
            badge: 'NO CLAIM BONUS',
            iconType: 'trending'
          },
          {
            id: 's3-2',
            title: 'Emergency Road Ambulance',
            subtitle: 'Ambulance Charges Covered',
            summary: 'Emergency road surface ambulance transportation charges covered to the nearest hospital per hospitalisation.',
            badge: 'AMBULANCE COVER',
            iconType: 'truck'
          },
          {
            id: 's3-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Annual Health Screening Vouchers',
            summary: 'Complimentary comprehensive preventive health check-up package for all insured adults every claim-free year.',
            badge: 'HEALTH CHECKUP',
            iconType: 'clipboard'
          },
          {
            id: 's3-4',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Income Tax Savings under Sec 80D',
            summary: 'Health insurance premiums paid qualify for tax deductions up to ₹75,000 under Section 80D of the Income Tax Act.',
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
            title: 'OPD Consultation Rider',
            subtitle: 'Outpatient Doctor Fees & Diagnostics',
            summary: 'Covers outpatient doctor consultation fees, specialist visits, routine lab tests, and prescribed pharmacy bills.',
            isRider: true,
            badge: 'OPD RIDER',
            iconType: 'heart'
          },
          {
            id: 's4-2',
            title: 'Hospital Daily Cash Benefit',
            subtitle: 'Fixed Daily Cash Allowance',
            summary: 'Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'clock'
          },
          {
            id: 's4-3',
            title: 'Compassionate Visit Benefit',
            subtitle: 'Family Member Travel Assistance',
            summary: 'Reimburses economy airfare or railway ticket expenses for an immediate family member to travel during critical hospitalisation.',
            isRider: true,
            badge: 'COMPASSIONATE VISIT',
            iconType: 'users'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 2: HEALTH SHIELD
  // ===========================================================================
  'health-shield': {
    planId: 'health-shield',
    planName: 'Health Shield',
    tagline: 'Value-Packed Essential Health Cover with OPD & Inpatient Care',
    coverage: '₹3 Lakh - ₹25 Lakh',
    premium: '₹8,900/year',

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
        explanation: 'CSR shows the percentage of claims settled by ICICI Lombard within the financial year.',
        singleYear: '98.0%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '71%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Sustainable claims payout ratio ensuring prompt claim settlement.',
        range: '71% → 74%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '13.8',
        explanation: 'Low customer grievance volume backed by digital claim desks.',
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
        explanation: 'Backed by ICICI Bank Limited and institutional investors.',
        items: [
          { name: 'ICICI Bank Limited (Promoter)', value: '51.2%', label: 'Shareholding' },
          { name: 'Institutional & Public Investors', value: '48.8%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'CRISIL AAA rating signifying utmost safety and claim solvency.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.62×',
        explanation: 'Solvency ratio of 2.62× well above the 1.50× regulatory threshold.',
        value: '2.62×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹48,000+ Cr',
        explanation: 'Massive investment assets supporting cashless claim settlements.',
        value: '₹48,000+ Cr',
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
        summaryValue: '#1 Private Non-Life',
        explanation: 'Over 10,000+ cashless network hospitals across India.',
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
          summary: '30-day initial waiting period applies from inception for any non-accidental illness.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Health Shield Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: '24 months waiting period applies for specified illnesses such as Cataract, Hernia, Hydrocele, Piles, Stones, Joint Replacements, and ENT procedures.',
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
          policyRef: 'Health Shield Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic surgeries, intentional self-injury, drug/alcohol abuse, weight control surgery, and unproven experimental treatments.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'ICICI Lombard Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key policy nuances for Health Shield',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'room-rent-capping',
          icon: '🏥',
          title: 'ROOM RENT CAPPING (1% SI)',
          paragraphs: [
            'Room rent covered up to 1% of Sum Insured per day for standard private rooms.',
            'ICU charges covered up to 2% of Sum Insured per day.'
          ]
        },
        {
          id: 'opd-consults',
          icon: '🩺',
          title: 'OPD TELE-CONSULTATIONS',
          paragraphs: [
            'Free online medical consultations available 24/7 via IL TakeCare App.'
          ]
        },
        {
          id: 'ayush-inpatient',
          icon: '🌿',
          title: 'AYUSH HOSPITALISATION',
          paragraphs: [
            'Inpatient alternative treatments under AYUSH covered up to policy limits.'
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
            title: 'Private Room Coverage',
            subtitle: 'Standard Private Room Covered',
            summary: 'Inpatient room rent covered up to 1% of Sum Insured per day across all 10,000+ network hospitals.',
            badge: 'PRIVATE ROOM',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: 'Complete Inpatient Medical Care',
            summary: 'Comprehensive coverage for surgeon fees, nursing, operation theatre, and in-hospital medications.',
            badge: 'INPATIENT CARE',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Diagnostic tests, consultations, and pharmacy bills 30 days before and 60 days after discharge covered.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Day Care Surgeries Covered',
            subtitle: 'Advanced Daycare Procedures',
            summary: 'Covers daycare surgical procedures requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Advanced Modern Treatments',
            subtitle: 'Robotic & Modern Tech Covered',
            summary: 'Coverage for modern medical procedures and robotic surgeries up to policy sub-limits.',
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
            title: 'Free Online Medical Consultations',
            subtitle: '24/7 Digital Consultations',
            summary: 'Complimentary online consultations with certified doctors via IL TakeCare App.',
            badge: 'ONLINE CONSULTS',
            iconType: 'phone'
          },
          {
            id: 's2-2',
            title: 'Cumulative Bonus',
            subtitle: '10% per year up to 50%',
            summary: 'Increases basic Sum Insured by 10% for every claim-free year up to a maximum 50%.',
            steps: ['Yr 1 (+10%)', 'Yr 2 (+10%)', 'Max 50% Bonus'],
            badge: 'BONUS GROWTH',
            iconType: 'trending'
          },
          {
            id: 's2-3',
            title: 'AYUSH Hospitalisation Cover',
            subtitle: 'Alternative medicine covered',
            summary: 'Inpatient AYUSH treatment covered at government recognized centres.',
            badge: 'AYUSH COVER',
            iconType: 'shield'
          },
          {
            id: 's2-4',
            title: 'Annual Health Check-up',
            subtitle: 'Preventive Health Vouchers',
            summary: 'Complimentary annual health screening check-up vouchers on policy renewal.',
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
            subtitle: 'Ambulance Charges Covered',
            summary: 'Surface road ambulance transportation covered per hospitalisation.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Tax Savings under Sec 80D',
            subtitle: 'Tax Deduction Benefit',
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
            id: 's4-1',
            title: 'Hospital Daily Cash Rider',
            subtitle: 'Daily Cash Allowance',
            summary: 'Daily cash payout for each completed 24 hours of hospital stay.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'OPD Consultation Add-on',
            subtitle: 'Outpatient Doctor Fees Covered',
            summary: 'Covers physical outpatient doctor visits and routine lab tests.',
            isRider: true,
            badge: 'OPD COVER',
            iconType: 'heart'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 3: GOLDEN SHIELD
  // ===========================================================================
  'golden-shield': {
    planId: 'golden-shield',
    planName: 'Golden Shield',
    tagline: 'Specialized Senior Citizen Health Protection with Home Care Support',
    coverage: '₹5 Lakh - ₹20 Lakh',
    premium: '₹23,500/year',

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
        explanation: 'CSR shows the percentage of senior citizen claims settled by ICICI Lombard within the financial year.',
        singleYear: '98.0%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '71%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Sustainable claims payout ratio ensuring high claims liquidity for senior hospitalisations.',
        range: '71% → 74%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '13.8',
        explanation: 'Dedicated senior citizen claim assistance desk with fast-track processing.',
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
        explanation: 'Promoted by ICICI Bank Limited with strong corporate governance.',
        items: [
          { name: 'ICICI Bank Limited (Promoter)', value: '51.2%', label: 'Shareholding' },
          { name: 'Institutional & Public Investors', value: '48.8%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AAA',
        explanation: 'CRISIL AAA rating certifying top-tier financial strength.',
        items: [
          { agency: 'CRISIL', rating: 'AAA / Stable' },
          { agency: 'ICRA', rating: 'AAA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '2.62×',
        explanation: 'Solvency ratio of 2.62× providing strong financial security.',
        value: '2.62×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹48,000+ Cr',
        explanation: 'Substantial investment assets supporting senior hospitalisation payouts.',
        value: '₹48,000+ Cr',
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
        summaryValue: '#1 Private Non-Life',
        explanation: 'Over 10,000+ cashless network hospitals with senior citizen priority desks.',
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
          summary: '30-day initial waiting period applies from inception for any non-accidental illness.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Golden Shield Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Senior Diseases',
          summary: 'Short 24-month waiting period applies for age-related specific illnesses such as Cataract, Joint Replacements, Hernia, and BPH.',
          diseaseList: [
            'Cataract & eye surgeries',
            'Joint replacements (non-accidental)',
            'Benign Prostatic Hypertrophy (BPH)',
            'Hernia (all types) & Hydrocele',
            'Piles, Fistula & Fissure in ano',
            'Stones in Urinary & Biliary systems',
            'Varicose veins & ulcers'
          ],
          policyRef: 'Golden Shield Specific Illness Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic surgeries, self-inflicted injuries, substance abuse, investigation admissions, and non-prescribed rest cures.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance abuse treatments',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'ICICI Lombard Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key senior citizen policy nuances to keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'home-care',
          icon: '🏡',
          title: 'HOME CARE HOSPITALISATION',
          paragraphs: [
            'Covers doctor-prescribed home nursing and treatment when hospitalisation is advised but bed is unavailable.'
          ]
        },
        {
          id: 'senior-room',
          icon: '🛏️',
          title: 'SINGLE PRIVATE ROOM',
          paragraphs: [
            'Covers Single Private Room with zero capping on room rent.'
          ]
        },
        {
          id: 'free-checkup',
          icon: '🩺',
          title: 'FREE ANNUAL GERIATRIC CHECK-UP',
          paragraphs: [
            'Comprehensive health check-up including ECG, blood sugar, and lipid profile on every renewal.'
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
            title: 'Single Private Room Covered',
            subtitle: 'No Sub-Limit on Room Rent',
            summary: 'Full coverage for Single Private Room across all 10,000+ cashless network hospitals.',
            badge: 'PRIVATE ROOM',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Senior Inpatient Hospitalisation',
            subtitle: 'Full Inpatient Medical Costs Covered',
            summary: 'Comprehensive coverage for surgeon fees, nursing, ICU, and in-hospital medications for seniors.',
            badge: 'INPATIENT CARE',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Diagnostic tests, consultations, and pharmacy bills 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Senior Day Care Surgeries Covered',
            subtitle: 'Daycare Surgeries (Cataract, Dialysis)',
            summary: 'Covers day care procedures requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Home Care Hospitalisation',
            subtitle: 'Doctor-Prescribed Home Care Covered',
            summary: 'Covers medical care taken at home when hospital beds are unavailable or patient cannot be moved.',
            badge: 'HOME CARE',
            iconType: 'home'
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
            title: 'Annual Senior Health Check-up',
            subtitle: 'Complimentary Geriatric Screening',
            summary: 'Comprehensive annual preventive health check-up package for seniors on renewal.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          },
          {
            id: 's2-2',
            title: 'AYUSH Alternative Inpatient Cover',
            subtitle: '100% Inpatient AYUSH Covered',
            summary: 'Inpatient alternative treatments at recognized government AYUSH hospitals covered.',
            badge: 'AYUSH COVER',
            iconType: 'shield'
          },
          {
            id: 's2-3',
            title: '24/7 Doctor Tele-Consultations',
            subtitle: 'Unlimited Tele-Consults via App',
            summary: 'Unlimited digital video consultations with qualified doctors on IL TakeCare App.',
            badge: 'TELE-DOCTOR',
            iconType: 'phone'
          },
          {
            id: 's2-4',
            title: 'Organ Donor Hospitalisation',
            subtitle: 'Donor Medical Harvesting Covered',
            summary: 'Inpatient harvesting medical expenses for organ donor during transplantation covered.',
            badge: 'ORGAN DONOR',
            iconType: 'activity'
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
            subtitle: 'Ambulance Charges Covered',
            summary: 'Surface road ambulance transportation covered per hospitalisation.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Tax Deductions under Sec 80D',
            subtitle: 'Up to ₹50,000 Tax Deduction',
            summary: 'Senior citizen premiums qualify for enhanced tax deductions under Section 80D.',
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
            title: 'Senior Hospital Daily Cash',
            subtitle: 'Daily Cash Allowance',
            summary: 'Fixed daily cash payout for each day of hospital admission to manage out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'Personal Accident Cover',
            subtitle: '24/7 Worldwide Accident Cover',
            summary: 'Round-the-clock accidental death and permanent disability financial protection.',
            isRider: true,
            badge: 'ACCIDENT COVER',
            iconType: 'shield'
          }
        ]
      }
    ]
  }
};

export const getIciciPlanData = (planId) => {
  const canonicalId = resolveIciciPlanId(planId);
  return ICICI_LOMBARD_PLANS_DATA[canonicalId] || ICICI_LOMBARD_PLANS_DATA['complete-health-insurance'];
};
