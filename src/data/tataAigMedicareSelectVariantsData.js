// =============================================================================
// TATA AIG MEDICARE SELECT — 3 VARIANTS COMPREHENSIVE DATA
// Variants: MediCare Select, MediCare Select Smart, MediCare Select Elite
// =============================================================================

export const TATA_AIG_SHARED_REPORT_CARD = {
  heading: 'REPORT CARD',
  subheading: 'Tata AIG Performance',
  description: 'Official claim settlement and financial strength metrics.',
  csr: {
    title: 'CSR',
    summaryValue: '99.0%',
    subtitle: 'Claim Settlement Ratio',
    explanation: 'CSR shows the percentage of eligible claims that Tata AIG settles during the financial year. A 99.0% ratio reflects an outstanding, dependable claim settlement track record.',
    singleYear: '99.0%',
    singleYearLabel: 'Recent Single Year (FY2024-25)',
    threeYearAvg: '98.9%',
    threeYearAvgLabel: '3 Year Average (FY2022-25)'
  },
  icr: {
    title: 'ICR',
    summaryValue: '68%',
    subtitle: 'Incurred Claim Ratio',
    explanation: "ICR indicates the proportion of net earned premium that the insurer pays out for claims. Tata AIG's balanced ICR of 68% ensures robust financial sustainability and timely claim settlement.",
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
};

export const TATA_AIG_SHARED_COMPANY_STRENGTH = {
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
    summaryValue: '1.95×',
    explanation: "Solvency ratio measures the insurer's financial buffer to pay claims under stress conditions, well above the IRDAI mandatory minimum of 1.50×.",
    value: '1.95×',
    label: 'Solvency Ratio (as of March 2025)'
  },
  financialBase: {
    title: 'FINANCIAL BASE',
    summaryValue: '₹22,000+ Cr',
    explanation: 'Substantial investment assets and capital reserves ensuring long-term claim-paying liquidity across India.',
    value: '₹22,000+ Cr',
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
};

// =============================================================================
// METADATA FOR 3 MEDICARE SELECT VARIANTS
// =============================================================================
export const MEDICARE_SELECT_VARIANTS_META = [
  {
    id: 'medicare-select-standard',
    variantKey: 'select',
    name: 'MediCare Select',
    fullName: 'Tata AIG MediCare Select',
    tagline: 'Comprehensive coverage across all network hospitals with Single Private Room, Restore Infinity Plus and unlimited refill.',
    coverage: '5 Lakhs – 3 Crore',
    badge: 'POPULAR CHOICE',
    popular: true,
    highlights: [
      'Available Sum Insured: 5 Lakhs – 3 Crore',
      'Product Offerings: Fresh + Port',
      'Hospital Type: All Network Hospital',
      'Room Category: Single Private Room',
      'Restore Infinity Plus: Unlimited Restore',
      'Sub-Limit | Co-Pay: No Copay | No Sublimit',
      'Super Charge Bonus & Consumables: Available as Rider'
    ]
  },
  {
    id: 'medicare-select-smart',
    variantKey: 'smart',
    name: 'MediCare Select Smart',
    fullName: 'Tata AIG MediCare Select Smart',
    tagline: 'Value-optimized healthcare with Twin Sharing room category across dedicated VPN network hospitals.',
    coverage: '5 Lakhs – 25 Lakhs',
    badge: 'SMART VALUE',
    popular: false,
    highlights: [
      'Available Sum Insured: 5 Lakhs – 25 Lakhs',
      'Product Offerings: Fresh + Port',
      'Hospital Type: VPN Only*',
      'Room Category: Twin Sharing',
      'Restore Infinity Plus: Unlimited Restore',
      'Sub-Limit | Co-Pay: No Copay | No Sublimit',
      'Super Charge Bonus & Consumables: Available as Rider'
    ]
  },
  {
    id: 'medicare-select-elite',
    variantKey: 'elite',
    name: 'MediCare Select Elite',
    fullName: 'Tata AIG MediCare Select Elite',
    tagline: 'Elite healthcare coverage with Any Room category, Inbuilt Consumables and Inbuilt 5X Super Charge Bonus.',
    coverage: '25 Lakhs – 3 Crore',
    badge: 'ELITE LUXURY',
    popular: false,
    highlights: [
      'Available Sum Insured: 25 Lakhs – 3 Crore',
      'Product Offerings: Only Fresh',
      'Hospital Type: All Network Hospital',
      'Room Category: Any Room',
      'Restore Infinity Plus: Unlimited Restore',
      'Sub-Limit | Co-Pay: No Copay | No Sublimit',
      'Super Charge Bonus: Inbuilt up to 5X',
      'Consumables: Inbuilt'
    ]
  }
];

// =============================================================================
// COMPLETE DATA CONFIGURATION FOR EACH VARIANT
// =============================================================================
export const TATA_AIG_MEDICARE_SELECT_VARIANTS_DATA = {
  // ---------------------------------------------------------------------------
  // VARIANT 1: MEDICARE SELECT SMART
  // ---------------------------------------------------------------------------
  'medicare-select-smart': {
    planId: 'medicare-select-smart',
    planName: 'MediCare Select Smart',
    fullName: 'Tata AIG MediCare Select Smart',
    companyName: 'Tata AIG',
    subtitle: '5 Lakhs – 25 Lakhs | Twin Sharing | VPN Network | Unlimited Restore',
    tagline: 'Value-optimized health insurance with Twin Sharing room category across dedicated VPN hospitals.',
    coverage: '5 Lakhs – 25 Lakhs',
    premium: '₹6,800/year',

    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: TATA_AIG_SHARED_REPORT_CARD,
    companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any non-accidental illness or hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1 with zero waiting period.',
          policyRef: 'Tata AIG MediCare Select Smart Policy Terms (Section 3.1)',
          durationTag: '30 Days'
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
          policyRef: 'Tata AIG Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped',
          title: '48 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 48 months (4 Years) of continuous coverage applies for pre-existing diseases declared at inception.',
          highlight: 'Continuous coverage and timely renewal preserve cumulative waiting credits.',
          policyRef: 'Tata AIG MediCare Select Smart Terms (Section 3.3)',
          durationTag: '48 Months'
        },
        {
          id: 'vpn-condition',
          title: 'Hospital Network Special Condition (VPN Only*)',
          summary: 'Cashless hospitalization is eligible exclusively at designated Value Provider Network (VPN Only*) hospitals.',
          highlight: '*Subject to Tata AIG Value Provider Network hospital listings.',
          policyRef: 'VPN Network Hospital Condition',
          durationTag: 'Network Terms'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover medical expenses incurred towards treatment of the following permanent exclusions:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Obesity & weight control procedures',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'War, nuclear or chemical contamination'
          ],
          policyRef: 'Standard IRDAI & Tata AIG Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important MediCare Select Smart terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'sum-insured',
          icon: '🛡️',
          title: 'AVAILABLE SUM INSURED: 5 LAKHS – 25 LAKHS',
          summary: 'Sum insured range spanning 5 Lakhs up to 25 Lakhs suited for individual and nuclear family coverage.'
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'TWIN SHARING ROOM CATEGORY',
          summary: 'Hospital room accommodation covered under Twin Sharing category with zero room rent deductions within eligible room type.'
        },
        {
          id: 'restore-copay',
          icon: '🔄',
          title: 'RESTORE INFINITY PLUS & ZERO CO-PAY',
          summary: 'Unlimited Restore on base sum insured for subsequent claims with 0% co-payment and no disease sub-limits.'
        },
        {
          id: 'hospital-type',
          icon: '📍',
          title: 'HOSPITAL TYPE: VPN ONLY*',
          summary: 'Cashless treatment accessible at designated Tata AIG Value Provider Network (VPN) hospitals.'
        }
      ]
    },

    featuresSections: [
      // 1. MOST IMPORTANT
      {
        id: 'most-important-features',
        title: 'MOST IMPORTANT',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'smart-sum-insured',
            title: 'AVAILABLE SUM INSURED',
            subtitle: '5 Lakhs – 25 Lakhs',
            badge: '5L – 25L',
            iconType: 'shield',
            summary: 'Flexible sum insured options ranging from 5 Lakhs up to 25 Lakhs designed for comprehensive essential healthcare protection.',
            points: [
              'Available sum insured range: 5 Lakhs – 25 Lakhs',
              'Comprehensive hospitalization coverage for individual and floater options',
              'Substantial financial safety net for medical emergencies'
            ]
          },
          {
            id: 'smart-room-category',
            title: 'ROOM CATEGORY',
            subtitle: 'Twin Sharing',
            badge: 'TWIN SHARING',
            iconType: 'home',
            summary: 'Hospital accommodation covered under Twin Sharing room category with zero proportionate deductions within the category.',
            points: [
              'Twin Sharing room accommodation covered',
              'Zero proportionate deduction on twin sharing occupancy',
              'ICU charges covered up to full Sum Insured'
            ]
          },
          {
            id: 'smart-sublimit-copay',
            title: 'SUB-LIMIT | CO-PAY',
            subtitle: 'No Copay | No Sublimit',
            badge: 'NO COPAY | NO SUBLIMIT',
            iconType: 'check',
            summary: 'Enjoy complete financial protection with 0% mandatory co-payment and no disease-wise capping or sub-limits.',
            points: [
              'No Co-pay across all age groups and network hospitals',
              'No sub-limits on common medical procedures',
              '100% claim admissible up to eligible Sum Insured'
            ]
          },
          {
            id: 'smart-restore-infinity',
            title: 'RESTORE INFINITY PLUS',
            subtitle: 'Unlimited Restore',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Automatically refills 100% of the base Sum Insured unlimited times in a policy year upon exhaustion for subsequent claims.',
            points: [
              'Unlimited restoration of basic Sum Insured in a single policy year',
              'Recharges instantly upon partial or complete exhaustion',
              'Continuous financial safety net for family members and multiple claims'
            ]
          },
          {
            id: 'smart-hospital-type',
            title: 'HOSPITAL TYPE',
            subtitle: 'VPN Only*',
            badge: 'VPN ONLY*',
            iconType: 'activity',
            summary: '100% cashless hospitalization accessible across designated Value Provider Network (VPN Only*) hospitals nationwide.',
            points: [
              'Accessible at designated Value Provider Network (VPN) hospitals',
              'Seamless cashless admission and claim settlement',
              '*Applicable as per Tata AIG VPN hospital network directory'
            ]
          },
          {
            id: 'smart-inpatient',
            title: 'In-Patient Treatment',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Comprehensive coverage for hospitalization expenses including nursing, boarding, doctor visits, ICU, and surgeries.',
            points: [
              'Doctor, specialist, and surgeon fees covered',
              'Prescribed medicines and operational costs included',
              '100% covered up to base Sum Insured'
            ]
          }
        ]
      },

      // 2. VALUE ADDED
      {
        id: 'value-added-features',
        title: 'VALUE ADDED',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'smart-product-offerings',
            title: 'PRODUCT OFFERINGS',
            subtitle: 'Fresh + Port',
            badge: 'FRESH + PORT',
            iconType: 'users',
            summary: 'Available for fresh new policy enrollments as well as seamless porting from other insurers with continuity benefits.',
            points: [
              'Available for Fresh policy applications',
              'Porting allowed from other insurance companies with waiting period credits',
              'Preserves accumulated continuity benefits upon porting'
            ]
          },
          {
            id: 'smart-pre-post',
            title: 'Pre & Post Hospitalization',
            subtitle: '60 Days Pre & 90 Days Post',
            badge: '60 & 90 DAYS',
            iconType: 'calendar',
            summary: 'Coverage for medical consultations, diagnostic tests, and prescribed medicines 60 days before admission and 90 days after discharge.',
            points: [
              '60 Days Pre-Hospitalization medical and diagnostic expenses',
              '90 Days Post-Hospitalization follow-up consultations and recovery medicines',
              'Covers diagnostic evaluations and post-discharge therapies'
            ]
          },
          {
            id: 'smart-day-care',
            title: 'Day Care Procedures',
            subtitle: 'All Day Care Procedures Covered',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'Full coverage for modern medical surgeries and treatments requiring less than 24 hours of hospital stay.',
            points: [
              'Covers all advanced procedures requiring less than 24 hours admission',
              'Chemotherapy, dialysis, cataract, and minor surgeries included',
              '100% coverage up to base Sum Insured'
            ]
          }
        ]
      },

      // 3. ADDITIONAL
      {
        id: 'additional-features',
        title: 'ADDITIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'smart-ayush-domiciliary',
            title: 'AYUSH & Domiciliary Treatment',
            subtitle: 'Alternative & Home Care Covered',
            badge: 'AYUSH & DOMICILIARY',
            iconType: 'shield',
            summary: 'Full coverage for inpatient AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) and doctor-advised home hospitalization.',
            points: [
              'Inpatient AYUSH treatments covered at recognized accredited centers',
              'Domiciliary (home) hospitalization covered up to Sum Insured',
              'Doctor certified home medical care included'
            ]
          },
          {
            id: 'smart-ambulance',
            title: 'Ambulance Cover',
            subtitle: 'Emergency Road Ambulance Covered',
            badge: 'ROAD AMBULANCE',
            iconType: 'truck',
            summary: 'Emergency road ambulance expenses covered for prompt transportation to the nearest equipped network hospital.',
            points: [
              'Emergency road ambulance transit to nearest hospital',
              'Cashless or reimbursement claim facility',
              'Prompt emergency medical transportation support'
            ]
          },
          {
            id: 'smart-organ-donor',
            title: 'Organ Donor Expenses',
            subtitle: 'Inpatient Harvesting Covered',
            badge: 'ORGAN DONOR',
            iconType: 'heart',
            summary: 'In-patient medical expenses incurred by the organ donor for harvesting the organ during an authorized transplant surgery.',
            points: [
              'Donor harvesting surgery expenses covered',
              'Does not reduce the insured primary medical allowance',
              'Full protection for vital organ transplants'
            ]
          }
        ]
      },

      // 4. OPTIONAL
      {
        id: 'optional-add-ons',
        title: 'OPTIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'smart-supercharge-bonus',
            title: 'SUPER CHARGE BONUS',
            subtitle: 'Available as Rider',
            badge: 'AVAILABLE AS RIDER',
            isRider: true,
            iconType: 'trending',
            summary: 'Available as an optional rider to accelerate cumulative bonus growth at renewals, scaling up your protection to combat inflation.',
            points: [
              'Available as an optional add-on rider',
              'Accelerated cumulative bonus growth at each renewal',
              'Substantially scales up your coverage over time'
            ]
          },
          {
            id: 'smart-consumables',
            title: 'CONSUMABLES',
            subtitle: 'Available as Rider',
            badge: 'AVAILABLE AS RIDER',
            isRider: true,
            iconType: 'shield',
            summary: 'Available as an optional rider covering non-medical items such as PPE kits, surgical gloves, masks, and syringes with zero out-of-pocket bills.',
            points: [
              'Available as an optional add-on rider',
              'Covers List I non-payable medical consumables',
              'Zero out-of-pocket expenses for gloves, PPE kits, and cotton at discharge'
            ]
          },
          {
            id: 'smart-infinite-advantage',
            title: 'Infinite Advantage Rider',
            subtitle: 'One Unlimited Claim in Lifetime',
            badge: 'LIFETIME UNLIMITED',
            isRider: true,
            iconType: 'heart',
            summary: 'Optional rider providing one unlimited claim in a lifetime with zero Sum Insured cap during major catastrophic emergencies.',
            points: [
              'One-time unlimited claim amount in a lifetime with no Sum Insured limit',
              'Safeguards savings against high-cost critical illnesses',
              'Ultimate financial security for your family'
            ]
          },
          {
            id: 'smart-preventive-checkup',
            title: 'Preventive Health Check-up Rider',
            subtitle: 'Cashless Annual Health Screening',
            badge: 'HEALTH CHECK-UP',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Annual comprehensive preventive health check-up on a 100% cashless basis across certified diagnostic centers.',
            points: [
              '100% cashless annual preventive health check-up screening',
              'Includes comprehensive diagnostic blood profiles, lipid tests, and organ markers',
              'Early disease detection and active health monitoring'
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // VARIANT 2: MEDICARE SELECT (FLAGSHIP / STANDARD)
  // ---------------------------------------------------------------------------
  'medicare-select-standard': {
    planId: 'medicare-select-standard',
    planName: 'MediCare Select',
    fullName: 'Tata AIG MediCare Select',
    companyName: 'Tata AIG',
    subtitle: '5 Lakhs – 3 Crore | Single Private Room | All Network Hospitals | Unlimited Restore',
    tagline: 'Standard essential coverage covering hospitalization across all network hospitals with Single Private Room.',
    coverage: '5 Lakhs – 3 Crore',
    premium: '₹8,200/year',

    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: TATA_AIG_SHARED_REPORT_CARD,
    companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any non-accidental illness or hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1 with zero waiting period.',
          policyRef: 'Tata AIG MediCare Select Policy Terms (Section 3.1)',
          durationTag: '30 Days'
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
          policyRef: 'Tata AIG Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped',
          title: '48 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 48 months (4 Years) of continuous coverage applies for pre-existing diseases declared at inception.',
          highlight: 'Continuous coverage and timely renewal preserve cumulative waiting credits.',
          policyRef: 'Tata AIG MediCare Select Terms (Section 3.3)',
          durationTag: '48 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover medical expenses incurred towards treatment of the following permanent exclusions:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Obesity & weight control procedures',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'War, nuclear or chemical contamination'
          ],
          policyRef: 'Standard IRDAI & Tata AIG Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important MediCare Select terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'sum-insured',
          icon: '🛡️',
          title: 'AVAILABLE SUM INSURED: 5 LAKHS – 3 CRORE',
          summary: 'High-value sum insured options from 5 Lakhs up to 3 Crore for complete peace of mind.'
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'SINGLE PRIVATE ROOM COVERED',
          summary: 'Single Private Room covered with zero room rent capping and zero proportionate deduction.'
        },
        {
          id: 'restore-copay',
          icon: '🔄',
          title: 'RESTORE INFINITY PLUS & ZERO CO-PAY',
          summary: 'Unlimited Restore on base sum insured for subsequent claims with 0% co-payment and no disease sub-limits.'
        },
        {
          id: 'hospital-type',
          icon: '📍',
          title: 'ALL NETWORK HOSPITALS',
          summary: '100% cashless hospitalization across all 10,000+ Tata AIG network hospitals nationwide.'
        }
      ]
    },

    featuresSections: [
      // 1. MOST IMPORTANT
      {
        id: 'most-important-features',
        title: 'MOST IMPORTANT',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-sum-insured',
            title: 'AVAILABLE SUM INSURED',
            subtitle: '5 Lakhs – 3 Crore',
            badge: '5L – 3 CR',
            iconType: 'shield',
            summary: 'Comprehensive sum insured options starting from 5 Lakhs all the way up to 3 Crore for extensive financial security.',
            points: [
              'Available sum insured range: 5 Lakhs – 3 Crore',
              'High-value coverage suitable for individuals and families',
              'Expansive financial safety net against major illnesses'
            ]
          },
          {
            id: 'select-room-category',
            title: 'ROOM CATEGORY',
            subtitle: 'Single Private Room',
            badge: 'SINGLE PRIVATE ROOM',
            iconType: 'home',
            summary: 'Single Private Room covered with zero room rent capping and zero proportionate deductions across network hospitals.',
            points: [
              'Single Private Room covered with zero daily rent limit',
              'Zero proportionate deduction on room category',
              'ICU / ICCU charges covered up to full Sum Insured'
            ]
          },
          {
            id: 'select-sublimit-copay',
            title: 'SUB-LIMIT | CO-PAY',
            subtitle: 'No Copay | No Sublimit',
            badge: 'NO COPAY | NO SUBLIMIT',
            iconType: 'check',
            summary: 'Absolute peace of mind with 0% mandatory co-payment and zero disease-wise sub-limits across treatments.',
            points: [
              'No Co-payment on eligible claims across network hospitals',
              'No sub-limits on common medical procedures',
              '100% admissible claim payout up to Sum Insured'
            ]
          },
          {
            id: 'select-restore-infinity',
            title: 'RESTORE INFINITY PLUS',
            subtitle: 'Unlimited Restore',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Unlimited automatic restoration of 100% Sum Insured upon exhaustion for subsequent claims in a policy year.',
            points: [
              'Unlimited restoration of basic Sum Insured in the policy year',
              'Instant automatic recharge upon partial or complete exhaustion',
              'Continuous financial safety for family members'
            ]
          },
          {
            id: 'select-hospital-type',
            title: 'HOSPITAL TYPE',
            subtitle: 'All Network Hospital',
            badge: 'ALL NETWORK HOSPITALS',
            iconType: 'activity',
            summary: '100% cashless hospitalization across all 10,000+ Tata AIG network hospitals nationwide.',
            points: [
              'Accessible at all 10,000+ Tata AIG network hospitals across India',
              'Seamless cashless admission and hassle-free settlement',
              'Wide hospital accessibility in metro and tier-2/3 cities'
            ]
          },
          {
            id: 'select-inpatient',
            title: 'In-Patient Treatment',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Full coverage for room rent, ICU, nursing, doctor visits, surgeon fees, and medical procedures.',
            points: [
              'Doctor, specialist, and surgeon fees covered',
              'Prescribed medicines and operational costs included',
              '100% covered up to base Sum Insured'
            ]
          }
        ]
      },

      // 2. VALUE ADDED
      {
        id: 'value-added-features',
        title: 'VALUE ADDED',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-product-offerings',
            title: 'PRODUCT OFFERINGS',
            subtitle: 'Fresh + Port',
            badge: 'FRESH + PORT',
            iconType: 'users',
            summary: 'Available for both fresh new policy purchases as well as porting from existing insurance policies with continuity benefits.',
            points: [
              'Available for Fresh policy applications',
              'Porting allowed from other insurance companies with waiting period credits',
              'Preserves accumulated continuity benefits upon porting'
            ]
          },
          {
            id: 'select-pre-post',
            title: 'Pre & Post Hospitalization',
            subtitle: '90 Days Pre & 90 Days Post',
            badge: '90 & 90 DAYS',
            iconType: 'calendar',
            summary: 'Covers medical consultations, diagnostics, and recovery medicines 90 days before admission and 90 days after discharge.',
            points: [
              '90 Days Pre-Hospitalization medical and diagnostic expenses',
              '90 Days Post-Hospitalization follow-up consultations and recovery medicines',
              'Full coverage for diagnostic tests, scans, and specialist visits'
            ]
          },
          {
            id: 'select-day-care',
            title: 'Day Care Procedures',
            subtitle: 'All Day Care Procedures Covered',
            badge: 'ALL PROCEDURES',
            iconType: 'activity',
            summary: 'Full coverage for advanced medical treatments requiring less than 24 hours of hospital stay.',
            points: [
              'Covers all modern surgeries requiring less than 24 hours admission',
              'Chemotherapy, dialysis, cataract, and minor surgeries included',
              '100% coverage up to base Sum Insured'
            ]
          }
        ]
      },

      // 3. ADDITIONAL
      {
        id: 'additional-features',
        title: 'ADDITIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-ayush-domiciliary',
            title: 'AYUSH & Domiciliary Treatment',
            subtitle: 'Alternative & Home Care Covered',
            badge: 'AYUSH & DOMICILIARY',
            iconType: 'shield',
            summary: 'Full coverage for inpatient AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) and home hospitalization.',
            points: [
              'Inpatient AYUSH treatments covered at recognized accredited centers',
              'Domiciliary (home) hospitalization covered up to Sum Insured',
              'Doctor certified home medical care included'
            ]
          },
          {
            id: 'select-ambulance',
            title: 'Ambulance Cover',
            subtitle: 'Emergency Road Ambulance Covered',
            badge: 'ROAD AMBULANCE',
            iconType: 'truck',
            summary: 'Emergency surface road ambulance expenses covered for timely transfer to the nearest medical facility.',
            points: [
              'Emergency road ambulance transit to nearest hospital',
              'Cashless or reimbursement claim facility',
              'Prompt emergency medical transportation support'
            ]
          },
          {
            id: 'select-organ-donor',
            title: 'Organ Donor Expenses',
            subtitle: 'Inpatient Harvesting Covered',
            badge: 'ORGAN DONOR',
            iconType: 'heart',
            summary: 'In-patient medical expenses incurred by the organ donor for harvesting the organ during an authorized transplant surgery.',
            points: [
              'Donor harvesting surgery expenses covered',
              'Does not reduce the insured primary medical allowance',
              'Full protection for vital organ transplants'
            ]
          }
        ]
      },

      // 4. OPTIONAL
      {
        id: 'optional-add-ons',
        title: 'OPTIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'select-supercharge-bonus',
            title: 'SUPER CHARGE BONUS',
            subtitle: 'Available as Rider',
            badge: 'AVAILABLE AS RIDER',
            isRider: true,
            iconType: 'trending',
            summary: 'Available as an optional rider to accelerate cumulative bonus growth from 100% up to 500%—even if you make a claim during the year!',
            points: [
              'Available as an optional add-on rider',
              'Cumulative bonus growth from 100% up to 500%',
              'Bonus continues to grow even with claims during the policy year'
            ]
          },
          {
            id: 'select-consumables',
            title: 'CONSUMABLES',
            subtitle: 'Available as Rider',
            badge: 'AVAILABLE AS RIDER',
            isRider: true,
            iconType: 'shield',
            summary: 'Available as an optional rider covering non-medical items such as PPE kits, gloves, masks, and syringes without out-of-pocket deductions.',
            points: [
              'Available as an optional add-on rider',
              'Covers List I non-payable medical consumables',
              'Zero out-of-pocket expenses for gloves, PPE kits, and cotton at discharge'
            ]
          },
          {
            id: 'select-infinite-advantage',
            title: 'Infinite Advantage Rider',
            subtitle: 'One Unlimited Claim in Lifetime',
            badge: 'LIFETIME UNLIMITED',
            isRider: true,
            iconType: 'heart',
            summary: 'Optional rider providing one unlimited claim in a lifetime with zero Sum Insured cap during major critical illnesses.',
            points: [
              'One-time unlimited claim amount in a lifetime with no Sum Insured limit',
              'Safeguards savings against high-cost critical illnesses',
              'Ultimate financial security for your family'
            ]
          },
          {
            id: 'select-preventive-checkup',
            title: 'Preventive Health Check-up Rider',
            subtitle: 'Cashless Annual Health Screening',
            badge: 'HEALTH CHECK-UP',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Annual comprehensive preventive health check-up on a 100% cashless basis across certified diagnostic centers.',
            points: [
              '100% cashless annual preventive health check-up screening',
              'Comprehensive diagnostic blood profiles, lipid tests, and organ markers',
              'Early disease detection and active health monitoring'
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // VARIANT 3: MEDICARE SELECT ELITE
  // ---------------------------------------------------------------------------
  'medicare-select-elite': {
    planId: 'medicare-select-elite',
    planName: 'MediCare Select Elite',
    fullName: 'Tata AIG MediCare Select Elite',
    companyName: 'Tata AIG',
    subtitle: '25 Lakhs – 3 Crore | Any Room | Inbuilt Consumables & 5X Super Charge | Unlimited Restore',
    tagline: 'Elite health insurance with Any Room category, Inbuilt Consumables and Inbuilt 5X Super Charge Bonus.',
    coverage: '25 Lakhs – 3 Crore',
    premium: '₹14,500/year',

    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: TATA_AIG_SHARED_REPORT_CARD,
    companyStrength: TATA_AIG_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any non-accidental illness or hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1 with zero waiting period.',
          policyRef: 'Tata AIG MediCare Select Elite Policy Terms (Section 3.1)',
          durationTag: '30 Days'
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
          policyRef: 'Tata AIG Specific Illness Schedule (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped',
          title: '48 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 48 months (4 Years) of continuous coverage applies for pre-existing diseases declared at inception.',
          highlight: 'Continuous coverage and timely renewal preserve cumulative waiting credits.',
          policyRef: 'Tata AIG MediCare Select Elite Terms (Section 3.3)',
          durationTag: '48 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover medical expenses incurred towards treatment of the following permanent exclusions:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Obesity & weight control procedures',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'War, nuclear or chemical contamination'
          ],
          policyRef: 'Standard IRDAI & Tata AIG Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important MediCare Select Elite terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'sum-insured',
          icon: '🛡️',
          title: 'AVAILABLE SUM INSURED: 25 LAKHS – 3 CRORE',
          summary: 'Premium high sum insured options from 25 Lakhs up to 3 Crore for complete healthcare security.'
        },
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ANY ROOM CATEGORY',
          summary: 'Any Room category covered with zero room rent capping, zero proportionate deduction, including suites and deluxe rooms.'
        },
        {
          id: 'inbuilt-benefits',
          icon: '⭐',
          title: 'INBUILT 5X BONUS & INBUILT CONSUMABLES',
          summary: 'Inbuilt Super Charge Bonus up to 5X and 100% Inbuilt Consumables cover included with zero extra rider cost.'
        },
        {
          id: 'product-offering',
          icon: '✨',
          title: 'PRODUCT OFFERINGS: ONLY FRESH',
          summary: 'Exclusive premium offering tailored for fresh new policy applicants.'
        }
      ]
    },

    featuresSections: [
      // 1. MOST IMPORTANT
      {
        id: 'most-important-features',
        title: 'MOST IMPORTANT',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elite-sum-insured',
            title: 'AVAILABLE SUM INSURED',
            subtitle: '25 Lakhs – 3 Crore',
            badge: '25L – 3 CR',
            iconType: 'shield',
            summary: 'High-value sum insured options from 25 Lakhs up to 3 Crore designed for elite healthcare protection.',
            points: [
              'Available sum insured range: 25 Lakhs – 3 Crore',
              'High-tier protection designed for comprehensive healthcare',
              'Substantial coverage to handle complex medical treatments'
            ]
          },
          {
            id: 'elite-room-category',
            title: 'ROOM CATEGORY',
            subtitle: 'Any Room',
            badge: 'ANY ROOM',
            iconType: 'home',
            summary: 'Any Room category covered with zero restrictions, zero capping, and zero proportionate deductions.',
            points: [
              'Any Room category covered including private suites and single deluxe rooms',
              'Zero room rent capping and zero proportionate deduction',
              'ICU / ICCU charges covered up to full Sum Insured'
            ]
          },
          {
            id: 'elite-sublimit-copay',
            title: 'SUB-LIMIT | CO-PAY',
            subtitle: 'No Copay | No Sublimit',
            badge: 'NO COPAY | NO SUBLIMIT',
            iconType: 'check',
            summary: '0% mandatory co-payment across all network hospitals and zero disease-specific sub-limits.',
            points: [
              'No Co-pay across all age groups and network hospitals',
              'No sub-limits on common or major medical treatments',
              '100% admissible claim payout up to eligible Sum Insured'
            ]
          },
          {
            id: 'elite-restore-infinity',
            title: 'RESTORE INFINITY PLUS',
            subtitle: 'Unlimited Restore',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Unlimited automatic restoration of 100% Sum Insured upon exhaustion for subsequent claims in a policy year.',
            points: [
              'Unlimited restoration of basic Sum Insured in the policy year',
              'Instant automatic recharge upon partial or complete exhaustion',
              'Continuous financial safety for family members'
            ]
          },
          {
            id: 'elite-hospital-type',
            title: 'HOSPITAL TYPE',
            subtitle: 'All Network Hospital',
            badge: 'ALL NETWORK HOSPITALS',
            iconType: 'activity',
            summary: '100% cashless hospitalization across all 10,000+ Tata AIG network hospitals nationwide.',
            points: [
              'Accessible at all 10,000+ Tata AIG network hospitals across India',
              'Seamless cashless admission and hassle-free settlement',
              'Wide hospital accessibility in metro and tier-2/3 cities'
            ]
          },
          {
            id: 'elite-inpatient',
            title: 'In-Patient Treatment',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Full coverage for room rent, ICU, nursing, doctor visits, surgeon fees, and medical procedures.',
            points: [
              'Doctor, specialist, and surgeon fees covered',
              'Prescribed medicines and operational costs included',
              '100% covered up to base Sum Insured'
            ]
          }
        ]
      },

      // 2. VALUE ADDED
      {
        id: 'value-added-features',
        title: 'VALUE ADDED',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elite-product-offerings',
            title: 'PRODUCT OFFERINGS',
            subtitle: 'Only Fresh',
            badge: 'ONLY FRESH',
            iconType: 'users',
            summary: 'Exclusive premium offering available for fresh new policy enrollments.',
            points: [
              'Available exclusively for Fresh policy applications',
              'Dedicated underwriting and expedited onboarding',
              'Premium healthcare benefits tailored for new policyholders'
            ]
          },
          {
            id: 'elite-supercharge-bonus',
            title: 'SUPER CHARGE BONUS',
            subtitle: 'Inbuilt up to 5X',
            badge: 'INBUILT UP TO 5X',
            isRider: false,
            iconType: 'trending',
            summary: 'Inbuilt Super Charge Bonus feature that automatically multiplies your basic coverage up to 5X (500%) at renewals.',
            points: [
              'Inbuilt feature included with zero additional rider premium',
              'Multiplies base Sum Insured up to 5X (500%) over renewal years',
              'Bonus continues to accumulate even if claims are made'
            ]
          },
          {
            id: 'elite-consumables',
            title: 'CONSUMABLES',
            subtitle: 'Inbuilt',
            badge: 'INBUILT CONSUMABLES',
            isRider: false,
            iconType: 'shield',
            summary: '100% inbuilt coverage for non-medical consumable hospital items including PPE kits, surgical gloves, masks, and syringes.',
            points: [
              'Inbuilt cover with zero out-of-pocket expenses at hospital discharge',
              'Covers 100% of List I non-payable medical consumables',
              'Zero deductions on gloves, PPE kits, cotton, and syringes'
            ]
          }
        ]
      },

      // 3. ADDITIONAL
      {
        id: 'additional-features',
        title: 'ADDITIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'elite-pre-post',
            title: 'Pre & Post Hospitalization',
            subtitle: '90 Days Pre & 180 Days Post',
            badge: '90 & 180 DAYS',
            iconType: 'calendar',
            summary: 'Extended pre and post hospitalization coverage for 90 days before admission and 180 days post discharge.',
            points: [
              '90 Days Pre-Hospitalization diagnostic evaluations and doctor visits',
              '180 Days Post-Hospitalization recovery care, follow-up tests, and medicines',
              'Extensive rehabilitation and medical support'
            ]
          },
          {
            id: 'elite-day-care',
            title: 'Day Care Procedures',
            subtitle: 'All Day Care Procedures Covered',
            badge: 'ALL PROCEDURES',
            iconType: 'activity',
            summary: 'Full coverage for advanced medical treatments requiring less than 24 hours of hospital stay.',
            points: [
              'Covers all modern surgeries requiring less than 24 hours admission',
              'Chemotherapy, dialysis, cataract, and minor surgeries included',
              '100% coverage up to base Sum Insured'
            ]
          },
          {
            id: 'elite-ayush-domiciliary',
            title: 'AYUSH & Domiciliary Treatment',
            subtitle: 'Alternative & Home Care Covered',
            badge: 'AYUSH & DOMICILIARY',
            iconType: 'shield',
            summary: 'Inpatient alternative treatments under Ayurveda, Yoga, Unani, Siddha, Homeopathy, and home hospitalization.',
            points: [
              'Inpatient AYUSH treatments covered at recognized accredited centers',
              'Domiciliary (home) hospitalization covered up to Sum Insured',
              'Doctor certified home medical care included'
            ]
          },
          {
            id: 'elite-ambulance',
            title: 'Ambulance Cover',
            subtitle: 'Emergency Road Ambulance Covered',
            badge: 'ROAD AMBULANCE',
            iconType: 'truck',
            summary: 'Emergency surface road ambulance expenses covered for timely transfer to the nearest medical facility.',
            points: [
              'Emergency road ambulance transit to nearest hospital',
              'Cashless or reimbursement claim facility',
              'Prompt emergency medical transportation support'
            ]
          }
        ]
      },

      // 4. OPTIONAL
      {
        id: 'optional-add-ons',
        title: 'OPTIONAL',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'elite-infinite-advantage',
            title: 'Infinite Advantage Rider',
            subtitle: 'One Unlimited Claim in Lifetime',
            badge: 'LIFETIME UNLIMITED',
            isRider: true,
            iconType: 'heart',
            summary: 'Optional rider providing one unlimited claim in a lifetime with zero Sum Insured cap during major critical illnesses.',
            points: [
              'One-time unlimited claim amount in a lifetime with no Sum Insured limit',
              'Safeguards savings against high-cost critical illnesses',
              'Ultimate financial security for your family'
            ]
          },
          {
            id: 'elite-preventive-checkup',
            title: 'Preventive Health Check-up Rider',
            subtitle: 'Cashless Annual Health Screening',
            badge: 'HEALTH CHECK-UP',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Annual comprehensive preventive health check-up on a 100% cashless basis across certified diagnostic centers.',
            points: [
              '100% cashless annual preventive health check-up screening',
              'Includes comprehensive diagnostic blood profiles, lipid tests, and organ markers',
              'Early disease detection and active health monitoring'
            ]
          }
        ]
      }
    ]
  }
};
