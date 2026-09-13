// =============================================================================
// TATA AIG MEDICARE SELECT — 3 VARIANTS COMPREHENSIVE DATA
// Variants: MediCare Select, MediCare Select Smart, MediCare Select Elite
// =============================================================================

export const TATA_AIG_SHARED_REPORT_CARD = {
  heading: 'REPORT CARD',
  subheading: 'Tata AIG Performance',
  description: 'Official claim settlement and financial strength metrics.',
  csr: {
    title: 'Claim Settlement Ratio',
    summaryValue: '89.5%',
    subtitle: 'Claim Settlement Ratio',
    explanation: 'On average, Tata AIG settled around 89.5% of claims over the last 3 years.',
    singleYear: '89.5%',
    singleYearLabel: 'Recent Single Year',
    threeYearAvg: '89.5%',
    threeYearAvgLabel: '3 Years Avg Ratio'
  },
  icr: {
    title: 'Incurred Claim Ratio',
    summaryValue: '77.50%',
    subtitle: 'Incurred Claim Ratio',
    explanation: 'For every ₹100 collected in premiums, Tata AIG spends about ₹77.50 on settling claims.',
    range: '77.50%',
    rangeLabel: 'Incurred Claim Ratio'
  },
  complaintVolume: {
    title: 'Complaints/10K',
    summaryValue: '11.6',
    subtitle: 'Complaints/10K',
    explanation: 'Around 11.6 complaints per 10,000 claims settled,    showing a low number of complaints.',
    value: '11.6',
    label: 'Complaints/10K — 11.6'
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

export const TATA_AIG_SHARED_BEST_SUITED_FOR = {
  heading: 'BEST SUITED FOR',
  subheading: 'Who should choose this plan?',
  description: 'Target customer profiles and ideal family scenarios for Tata AIG MediCare Select.',
  tagline: 'Ideal recommendation based on coverage, hospital network, and healthcare needs.',
  profiles: [
    {
      title: 'Families Seeking Private Room Hospitalization',
      icon: '🏥',
      summary: 'Families and individuals who want guaranteed Single Private Room accommodation with zero proportionate deduction and no room rent sub-limits.',
      badge: 'Zero Room Cap',
      highlights: [
        'Single Private Room without proportionate deductions',
        'No fixed rupee limit on room rent',
        '100% cashless settlement across network hospitals'
      ]
    },
    {
      title: 'Individuals Wanting Unlimited Restoration',
      icon: '🔄',
      summary: 'Buyers looking for unlimited restore benefits for related and unrelated illnesses during the policy year upon Sum Insured exhaustion.',
      badge: 'Restore Plus',
      highlights: [
        'Automatic unlimited refill of basic Sum Insured',
        'Covers subsequent hospitalizations for family members',
        'No exhaustion worry during critical medical episodes'
      ]
    },
    {
      title: 'Working Professionals & Middle-Income Families',
      icon: '👨‍💼',
      summary: 'Individuals looking for balanced, premium healthcare protection with sum insured from ₹5 Lakhs to ₹3 Crore and 0% mandatory co-payment.',
      badge: 'Comprehensive',
      highlights: [
        'Zero mandatory co-payment across network hospitals',
        'Flexible sum insured options from ₹5L up to ₹3 Crore',
        'Includes pre and post hospitalization expenses'
      ]
    },
    {
      title: 'Cost-Conscious Quality Seekers',
      icon: '🛡️',
      summary: 'Policyholders wanting Tata AIG brand trust, top-tier solvency, and nationwide cashless hospital access without excessive premiums.',
      badge: 'High Value',
      highlights: [
        'Backed by Tata Group & AIG global underwriting',
        'Access to 10,000+ cashless hospitals nationwide',
        'Optional consumable protection and cumulative bonus booster'
      ]
    }
  ]
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

    bestSuitedFor: {
      heading: 'BEST SUITED FOR',
      subheading: 'Who should choose MediCare Select Smart?',
      description: 'Ideal customer profiles and value-focused healthcare scenarios.',
      profiles: [
        {
          title: 'Budget-Conscious Individuals & Young Families',
          icon: '💰',
          summary: 'Young professionals and nuclear families seeking reliable Tata AIG health coverage at heavily discounted premiums.',
          badge: 'Smart Savings',
          highlights: [
            'Lower premium structure with Twin Sharing accommodation',
            'Full restore benefit on basic sum insured',
            '100% cashless treatment at VPN network hospitals'
          ]
        },
        {
          title: 'Tier-2 & Tier-3 City Residents',
          icon: '🏙️',
          summary: 'Residents in non-metro locations who primarily visit local partner network hospitals and want affordable protection.',
          badge: 'Regional Network',
          highlights: [
            'Optimized for Value Provider Network (VPN) hospital list',
            'Sum insured range from ₹5 Lakhs to ₹25 Lakhs',
            'Zero co-payment across eligible network centers'
          ]
        },
        {
          title: 'First-Time Insurance Buyers',
          icon: '🌱',
          summary: 'Individuals starting their healthcare financial planning with essential hospital protection and emergency safety net.',
          badge: 'Essential Starter',
          highlights: [
            'Comprehensive day care surgeries included',
            'Pre & post hospitalization medical cover',
            'Automatic recharge with Restore Infinity Plus'
          ]
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
        title: 'valueAdded',
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
        title: 'optional',
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
    subtitle: 'Single Private Room | No Copay | Unlimited Restore',
    tagline: 'Standard essential coverage with Single Private Room and Restore Infinity Plus.',
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
        }
      ]
    },

    bestSuitedFor: TATA_AIG_SHARED_BEST_SUITED_FOR,

    featuresSections: [
      // -----------------------------------------------------------------------
      // CATEGORY 1: MOST IMPORTANT FEATURES
      // -----------------------------------------------------------------------
      {
        id: 'most-important-features',
        title: 'MOST IMPORTANT FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
        items: [
          {
            id: 'select-room-category',
            title: 'Room Category',
            subtitle: 'Single Private Room',
            badge: 'SINGLE PRIVATE ROOM',
            iconType: 'home',
            summary: 'You can stay in a private room meant for one patient with no room rent limit and no extra deductions.',
            points: [
              'Single Private Room — A private room for one patient.',
              'No Room Rent Limit — No fixed limit on the room rent.',
              'No Extra Deduction — No extra amount is cut from your eligible hospital bill because of the room.'
            ],
            sharedRoomBenefit: {
              title: 'Shared Room Option',
              badge: 'Lower Premium',
              description: 'You can choose a Shared Room if you want a lower premium.'
            }
          },
          {
            id: 'select-day-care',
            title: 'Day Care Procedures',
            subtitle: 'All Day Care Procedures Covered',
            badge: 'ALL PROCEDURES COVERED',
            iconType: 'activity',
            summary: 'All advanced medical surgeries and day care procedures requiring less than 24 hours of hospital stay are fully covered.',
            points: [
              'Covers all modern surgeries requiring less than 24 hours hospitalization',
              'Chemotherapy, dialysis, radiotherapy, cataract, and minor surgeries included',
              '100% coverage up to basic Sum Insured'
            ]
          },
          {
            id: 'select-pre-post',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 90 Days Post',
            badge: '60 & 90 DAYS',
            iconType: 'calendar',
            summary: 'Medical expenses such as doctor consultations, diagnostic tests, and prescribed medicines covered 60 days before hospital admission and 90 days after discharge.',
            points: [
              '60 Days Pre-Hospitalisation medical and diagnostic expenses covered',
              '90 Days Post-Hospitalisation follow-up consultations and recovery medicines covered',
              'Full coverage for diagnostic tests, scans, and specialist visits'
            ]
          },
          {
            id: 'select-cashless-policy',
            title: '100% Cashless Policy',
            subtitle: 'Cashless across 10,000+ Network Hospitals',
            badge: '100% CASHLESS',
            iconType: 'credit',
            summary: 'Seamless 100% cashless hospitalization across all Tata AIG network hospitals with zero proportionate deductions on eligible claims.',
            points: [
              'Cashless treatment across 10,000+ partner network hospitals nationwide',
              'Direct settlement between insurance provider and hospital',
              'Zero proportionate deductions on eligible medical expenses'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 2: VALUE ADDED BENEFITS
      // -----------------------------------------------------------------------
      {
        id: 'value-added-benefits',
        title: 'VALUE ADDED BENEFITS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-restoration',
            title: 'Restoration',
            subtitle: 'Restore Infinity Plus (Unlimited Restore)',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Unlimited automatic restoration of 100% Sum Insured upon partial or full exhaustion for subsequent hospitalizations in the policy year.',
            points: [
              'Unlimited restoration of basic Sum Insured in a single policy year',
              'Instant automatic recharge for subsequent related and unrelated claims',
              'Ensures continuous financial safety for all covered family members'
            ]
          },
          {
            id: 'select-ncb-discount',
            title: 'No Claim Bonus or 1% Discount in Renewal Premium',
            subtitle: 'Cumulative Bonus / 1% Renewal Discount',
            badge: 'BONUS OR DISCOUNT',
            iconType: 'trending',
            summary: 'Earn cumulative bonus for every claim-free year or choose a 1% discount on renewal premium as an incentive for maintaining good health.',
            points: [
              'Increase in basic Sum Insured without extra premium for claim-free years',
              'Option to avail 1% direct discount on policy renewal premium',
              'Protects and rewards long-term policyholders'
            ]
          },
          {
            id: 'select-ayush',
            title: 'AYUSH Benefit',
            subtitle: 'Alternative AYUSH Hospitalization Covered',
            badge: 'AYUSH COVERED',
            iconType: 'shield',
            summary: 'Inpatient hospitalization expenses incurred under AYUSH treatment systems (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) at recognized accredited medical centers are fully covered.',
            points: [
              'Inpatient AYUSH treatments covered up to Sum Insured',
              'Available at government and NABH/QCI accredited centers',
              'Holistic traditional wellness and medical treatment coverage'
            ]
          },
          {
            id: 'select-organ-donor',
            title: 'Organ Donor',
            subtitle: 'Inpatient Harvesting Expenses Covered',
            badge: 'ORGAN DONOR',
            iconType: 'heart',
            summary: 'In-patient medical expenses incurred by the organ donor for harvesting the organ during an authorized transplant surgery are fully covered.',
            points: [
              'Organ harvesting hospitalization expenses for living donor covered',
              'Does not reduce the insured primary medical Sum Insured',
              'Full protection for vital organ transplant operations'
            ]
          },
          {
            id: 'select-professional-discount',
            title: 'Professional Discount (7.5% Discount on Premium)',
            subtitle: '7.5% Special Discount for Qualified Professionals',
            badge: '7.5% DISCOUNT',
            iconType: 'award',
            summary: 'Enjoy an exclusive 7.5% discount on policy premium for qualified professionals such as Doctors, Chartered Accountants, Lawyers, and corporate executives.',
            points: [
              '7.5% discount on annual policy premium',
              'Applicable for certified doctors, CAs, lawyers, engineers, and professionals',
              'Direct savings at policy purchase and renewal'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 3: ADDITIONAL BENEFITS
      // -----------------------------------------------------------------------
      {
        id: 'additional-benefits',
        title: 'ADDITIONAL BENEFITS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-domiciliary',
            title: 'Domiciliary Treatment',
            subtitle: 'Home Hospitalization Covered',
            badge: 'HOME HOSPITALIZATION',
            iconType: 'home',
            summary: 'Medical treatment administered at home when hospital accommodation is unavailable or the patient cannot be moved due to severe medical conditions.',
            points: [
              'Home hospitalization covered up to Sum Insured',
              'Applicable on medical practitioner advice when hospital beds are full',
              'Full coverage for prescribed medications, nursing, and medical care'
            ]
          },
          {
            id: 'select-ambulance',
            title: 'Ambulance Cover',
            subtitle: 'Emergency Road Ambulance',
            badge: 'ROAD AMBULANCE',
            iconType: 'truck',
            summary: 'Emergency road ambulance expenses covered for safe transfer to the nearest medical facility during an acute emergency.',
            points: [
              'Surface road ambulance transit to nearest hospital covered',
              'Cashless or reimbursement claim facility',
              'Rapid emergency transportation assistance'
            ]
          },
          {
            id: 'select-daily-cash',
            title: 'Daily Cash',
            subtitle: '₹1,200 (Twin) / ₹1,500 (Multi) Daily Allowance',
            badge: 'DAILY CASH ALLOWANCE',
            iconType: 'dollar',
            summary: 'Daily cash allowance paid directly to you for incidental expenses when you choose shared hospital accommodation.',
            points: [
              'Choosing Twin Sharing — ₹1,200/-',
              'Choosing Multi Sharing Accommodation — ₹1,500/-'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 4: OPTIONAL ADD-ONS
      // -----------------------------------------------------------------------
      {
        id: 'optional-add-ons',
        title: 'OPTIONAL ADD-ONS',
        subtitle: 'Extra Benefits With Extra Premium',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-opt-consumables',
            title: 'Consumables Benefit',
            subtitle: 'Non-Payable Medical Items & Disposables',
            badge: 'RIDER',
            isRider: true,
            iconType: 'shield',
            summary: 'Full coverage for non-medical consumable items such as surgical gloves, PPE kits, masks, syringes, and cotton without out-of-pocket deductions.',
            points: [
              '100% coverage for non-payable List I consumable items',
              'Zero out-of-pocket hospital discharge billing deductions',
              'Enhanced protection against unforeseen hospital consumable costs'
            ]
          },
          {
            id: 'select-opt-supercharge',
            title: 'Supercharge Bonus Rider',
            subtitle: 'Up to 500% Cumulative Bonus Accelerator',
            badge: 'RIDER',
            isRider: true,
            iconType: 'trending',
            summary: 'Accelerates cumulative bonus growth from 100% up to 500%—even if you make a claim during the policy year!',
            points: [
              'Cumulative bonus accelerates up to 500% of basic Sum Insured',
              'Bonus growth continues even when claims are made during the year',
              'Significant long-term healthcare fund builder'
            ]
          },
          {
            id: 'select-opt-infinite-advantage',
            title: 'Infinite Advantage',
            subtitle: 'One Unlimited Claim in Lifetime',
            badge: 'RIDER',
            isRider: true,
            iconType: 'heart',
            summary: 'Provides one unlimited claim in a lifetime with zero Sum Insured capping during major catastrophic medical emergencies.',
            points: [
              'One-time unlimited claim amount with zero Sum Insured restriction',
              'Protects family savings against high-cost critical illnesses',
              'Ultimate financial safety buffer for lifetime care'
            ]
          },
          {
            id: 'select-opt-early-access',
            title: 'Early Access',
            subtitle: 'Faster Claim & Approval Processing',
            badge: 'RIDER',
            isRider: true,
            iconType: 'zap',
            summary: 'Priority access and expedited approvals for cashless admissions and claim processing across top-tier network hospitals.',
            points: [
              'Priority cashless authorization process',
              'Dedicated concierge assistance for planned hospitalizations',
              'Minimizes waiting times during hospital admission & discharge'
            ]
          },
          {
            id: 'select-opt-accidental-death',
            title: 'Accidental Death Benefit Rider',
            subtitle: 'Lump Sum Payout on Accidental Death',
            badge: 'RIDER',
            isRider: true,
            iconType: 'shield',
            summary: '100% lump sum payout of the rider Sum Insured to the nominee in the unfortunate event of accidental demise.',
            points: [
              '100% lump sum compensation paid to nominee',
              'Additional financial protection over and above base health cover',
              '24x7 worldwide accident coverage'
            ]
          },
          {
            id: 'select-opt-cancer-benefit',
            title: 'Cancer Benefit',
            subtitle: 'Dedicated Cancer Care & Treatment Shield',
            badge: 'RIDER',
            isRider: true,
            iconType: 'activity',
            summary: 'Comprehensive financial support and enhanced coverage limits dedicated specifically to early and advanced stage cancer treatments.',
            points: [
              'Covers chemotherapy, immunotherapy, targeted therapy, and radiation',
              'Dedicated cancer diagnostic evaluations and specialist consultations',
              'Financial cushion against prolonged oncology procedures'
            ]
          },
          {
            id: 'select-opt-women-suraksha',
            title: 'Women Suraksha',
            subtitle: 'Dedicated Health & Wellness Cover for Women',
            badge: 'RIDER',
            isRider: true,
            iconType: 'heart',
            summary: 'Comprehensive women-specific health coverage including breast & cervical screening, specialized consultations, and maternity wellness.',
            points: [
              'Tailored for women healthcare needs and critical female illnesses',
              'Includes specialized preventive screenings and wellness care',
              'Dedicated care support for female policyholders'
            ]
          },
          {
            id: 'select-opt-air-ambulance',
            title: 'Emergency AIR Ambulance Rider',
            subtitle: 'Aero-Medical Evacuation Coverage',
            badge: 'RIDER',
            isRider: true,
            iconType: 'truck',
            summary: 'Covers emergency air ambulance aircraft transportation for rapid transfer to advanced multi-specialty medical centers during life-threatening conditions.',
            points: [
              'Domestic air ambulance evacuation expenses covered',
              'Immediate aero-medical transit to advanced tertiary facilities',
              'Lifesaving transportation during critical emergencies'
            ]
          },
          {
            id: 'select-opt-hcmp',
            title: 'Health Condition Management Program',
            subtitle: 'Chronic Disease Monitoring & Wellness Coach',
            badge: 'RIDER',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Dedicated digital health management, chronic condition monitoring (diabetes, hypertension), and personalized health coaching.',
            points: [
              'Personalized health monitoring for lifestyle conditions',
              'Dedicated dieticians, fitness coaches, and wellness trackers',
              'Rewards and premium discounts on achieving health milestones'
            ]
          },
          {
            id: 'select-opt-domestic-second-opinion',
            title: 'Domestic Second Opinion',
            subtitle: 'Expert Consultation from Leading Indian Specialists',
            badge: 'RIDER',
            isRider: true,
            iconType: 'users',
            summary: 'Obtain an independent second medical opinion from top-tier medical experts and super-specialists across premier hospitals in India.',
            points: [
              'E-consultations with leading domestic medical specialists',
              'Covers major critical illnesses, scheduled surgeries, and oncology',
              'Helps make informed, confident treatment decisions'
            ]
          },
          {
            id: 'select-opt-international-second-opinion',
            title: 'International Second Opinion',
            subtitle: 'Global Medical Expert Panel Consultation',
            badge: 'RIDER',
            isRider: true,
            iconType: 'globe',
            summary: 'Second opinion from globally renowned international medical centers and specialists for diagnosed critical illnesses.',
            points: [
              'Consultations from world-class international hospitals',
              'Comprehensive review of medical records and diagnostics',
              'Access to cutting-edge global clinical perspectives'
            ]
          },
          {
            id: 'select-opt-accidental-si',
            title: 'Additional Sum Insured For Accidental Hospitalisation',
            subtitle: 'Extra Financial Cushion for Accident Hospitalization',
            badge: 'RIDER',
            isRider: true,
            iconType: 'shield',
            summary: 'Provides an additional buffer of Sum Insured exclusively dedicated to inpatient hospitalization expenses resulting from accidents.',
            points: [
              'Extra Sum Insured activated for accidental medical emergencies',
              'Preserves base Sum Insured for regular illnesses',
              'Zero waiting period for accidental hospitalization claims'
            ]
          },
          {
            id: 'select-opt-pocket-saver',
            title: 'Pocket Saver (OPD)',
            subtitle: 'Outpatient Consultation & Diagnostic Wallet',
            badge: 'RIDER',
            isRider: true,
            iconType: 'dollar',
            summary: 'Cashless OPD coverage and wallet support for everyday doctor visits, minor diagnostics, and pharmacy expenses.',
            points: [
              'Covers outpatient clinic visits and general physician fees',
              'Reimbursement / cashless discount for prescribed pharmacy bills',
              'Reduces daily out-of-pocket outpatient healthcare costs'
            ]
          },
          {
            id: 'select-opt-maternity-care',
            title: 'Maternity Care',
            subtitle: 'Delivery & Newborn Medical Protection',
            badge: 'RIDER',
            isRider: true,
            iconType: 'smile',
            summary: 'Comprehensive maternity coverage for normal and caesarean deliveries, pre & post-natal expenses, and newborn baby care.',
            points: [
              'Covers normal and caesarean delivery hospitalization expenses',
              'Pre-natal and post-natal care consultations covered',
              'Newborn baby hospitalization and first-year medical support'
            ]
          },
          {
            id: 'select-opt-maternity-waiting-reduction',
            title: 'Reduction of Maternity Care Waiting Period',
            subtitle: 'Shortened Maternity Waiting Period',
            badge: 'RIDER',
            isRider: true,
            iconType: 'clock',
            summary: 'Option to significantly reduce the standard maternity waiting period from 3–4 years to 1–2 years for faster benefit eligibility.',
            points: [
              'Reduces waiting timeline for maternity benefit eligibility',
              'Ideal for newly married couples and planning families',
              'Early access to comprehensive maternity & newborn coverage'
            ]
          },
          {
            id: 'select-opt-preventive-checkup',
            title: 'Preventive Annual Health Checkup Rider',
            subtitle: '100% Cashless Full-Body Health Check',
            badge: 'RIDER',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Annual comprehensive preventive health checkup on a 100% cashless basis across certified diagnostic centers nationwide.',
            points: [
              '100% cashless annual preventive health screening',
              'Comprehensive blood profiles, lipid panel, kidney & liver markers',
              'Early risk detection and health maintenance'
            ]
          },
          {
            id: 'select-opt-advance-ped-waiver',
            title: 'Advance Cover Rider (For PED Waiver)',
            subtitle: 'Reduction / Waiver of Pre-Existing Disease Waiting',
            badge: 'RIDER',
            isRider: true,
            iconType: 'clock',
            summary: 'Reduces or waives the standard pre-existing disease (PED) waiting period from 48 months to as low as 12–24 months.',
            points: [
              'Shortens waiting period for declared pre-existing conditions',
              'Early claim eligibility for hypertension, diabetes, and thyroid',
              'Faster full-fledged medical protection'
            ]
          },
          {
            id: 'select-opt-opd-care',
            title: 'OPD Care',
            subtitle: 'Comprehensive Outpatient & Specialist Care',
            badge: 'RIDER',
            isRider: true,
            iconType: 'activity',
            summary: 'Extensive outpatient cover including specialist consultations, dental & optical care, diagnostic investigations, and physiotherapy.',
            points: [
              'Specialist and super-specialist OPD consultations covered',
              'Prescribed diagnostic tests, scans, and minor procedures',
              'Cashless OPD network access across partner clinics'
            ]
          },
          {
            id: 'select-opt-empower-her',
            title: 'EmpowerHer',
            subtitle: 'Holistic Female Health, Fertility & Wellness',
            badge: 'RIDER',
            isRider: true,
            iconType: 'heart',
            summary: 'Holistic female wellness program covering fertility consultations, hormonal evaluations, mental health, and specialized female surgeries.',
            points: [
              'Dedicated female health screening and fertility counseling',
              'Comprehensive support for PCOS, endometriosis, and thyroid care',
              'Empowering women with comprehensive health security'
            ]
          },
          {
            id: 'select-opt-mental-wellbeing',
            title: 'Mental Wellbeing',
            subtitle: 'Psychological Consultations & Therapy Sessions',
            badge: 'RIDER',
            isRider: true,
            iconType: 'smile',
            summary: 'Confidential mental health consultations, psychiatric sessions, psychological counseling, and wellness therapy support.',
            points: [
              'Inpatient and outpatient psychiatric consultations covered',
              'Confidential e-sessions with certified clinical psychologists',
              'Comprehensive support for stress, anxiety, and depression management'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 5: PREMIUM SAVER
      // -----------------------------------------------------------------------
      {
        id: 'premium-saver',
        title: 'PREMIUM SAVER',
        subtitle: 'Optional Add-ons',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'select-saver-deductible',
            title: 'Aggregate Deductible Option',
            subtitle: 'Save up to 40% on Policy Premium',
            badge: 'DEDUCTIBLE SAVER',
            iconType: 'dollar',
            summary: 'Choose an annual aggregate deductible to significantly reduce your policy premium while keeping high sum insured intact.',
            points: [
              'Available deductible options: ₹10,000, ₹25,000, ₹50,000, ₹1,00,000',
              'Aggregate deductible applies across all hospitalizations in a policy year',
              'Ideal for policyholders with existing corporate group health insurance'
            ],
            tierData: {
              title: 'Available Deductible Options',
              tiers: [
                { tier: 'Tier 1', value: '₹10,000' },
                { tier: 'Tier 2', value: '₹25,000' },
                { tier: 'Tier 3', value: '₹50,000' },
                { tier: 'Tier 4', value: '₹1,00,000' }
              ]
            }
          },
          {
            id: 'select-saver-vpn',
            title: 'Valued Provider Network',
            subtitle: 'Discounted Premium for Preferential Network',
            badge: 'VPN DISCOUNT',
            iconType: 'activity',
            summary: 'Opt for treatment exclusively within the Tata AIG Valued Provider Network (VPN) hospitals to unlock discounted premium rates.',
            points: [
              'Special premium discount for choosing Valued Provider Network (VPN)',
              '100% cashless treatment at high-quality partner network hospitals',
              'Seamless admission and fast claim settlements'
            ]
          },
          {
            id: 'select-saver-twin-sharing',
            title: 'Room Category (Twin Sharing)',
            subtitle: 'Twin Sharing Accommodation for Lower Premium',
            badge: 'LOWER PREMIUM',
            iconType: 'home',
            summary: 'Choose Twin Sharing hospital accommodation instead of Single Private Room to enjoy a substantial reduction in your annual policy premium.',
            points: [
              'Opt for Twin Sharing room category for lower premium',
              'All medical procedures, surgeries, and ICU covered up to Sum Insured',
              'Smart choice for budget-conscious individuals and families'
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

    bestSuitedFor: {
      heading: 'BEST SUITED FOR',
      subheading: 'Who should choose MediCare Select Elite?',
      description: 'Ideal customer profiles and luxury healthcare scenarios for Tata AIG MediCare Select Elite.',
      profiles: [
        {
          title: 'Luxury & Premium Healthcare Seekers',
          icon: '👑',
          summary: 'Individuals and families who want Any Room category accommodation including executive suites without room rent restrictions.',
          badge: 'Any Room',
          highlights: [
            'Any room category without proportionate deductions',
            'Zero co-payment and unlimited restoration',
            'Inbuilt 100% consumables coverage included'
          ]
        },
        {
          title: 'High-Net-Worth Individuals & Executives',
          icon: '💼',
          summary: 'Professionals seeking high sum insured options from ₹25 Lakhs to ₹3 Crore with inbuilt 5X Super Charge cumulative bonus multiplier.',
          badge: 'High Sum Insured',
          highlights: [
            'High sum insured options from ₹25 Lakhs to ₹3 Crore',
            'Inbuilt 5X Super Charge Bonus protection',
            'Cashless access across 10,000+ top-tier hospitals nationwide'
          ]
        },
        {
          title: 'Fresh Health Insurance Applicants',
          icon: '🌟',
          summary: 'New buyers seeking flagship tier protection with comprehensive pre & post hospitalization and complete peace of mind.',
          badge: 'Exclusive Fresh',
          highlights: [
            'Tailored premium benefits for new applicants',
            'Comprehensive day care and modern treatments covered',
            'Zero out-of-pocket payment for medical non-payables'
          ]
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
        title: 'valueAdded',
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
        title: 'optional',
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
