// =============================================================================
// STAR HEALTH PLANS INDEPENDENT DATA CONFIGURATION
// 1. Star Comprehensive    → star-comprehensive
// 2. Family Health Optima   → family-health-optima
// 3. Star Cardiac Care      → star-cardiac-care
//
// Each plan has completely separate, independent data, UI config, and content.
// Editing one plan will NOT affect any other plan.
// =============================================================================

export const STAR_HEALTH_CANONICAL_PLAN_IDS = [
  'star-comprehensive',
  'family-health-optima',
  'star-cardiac-care'
];

export const resolveStarHealthPlanId = (planId) => {
  if (!planId) return 'star-comprehensive';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'star-comprehensive' || cleanId === 'comprehensive' || cleanId === 'star-comprehensive-insurance') {
    return 'star-comprehensive';
  }
  if (cleanId === 'family-health-optima' || cleanId === 'fho' || cleanId === 'star-fho') {
    return 'family-health-optima';
  }
  if (cleanId === 'star-cardiac-care' || cleanId === 'cardiac-care' || cleanId === 'star-cardiac') {
    return 'star-cardiac-care';
  }
  return cleanId;
};

export const STAR_HEALTH_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: STAR COMPREHENSIVE
  // ===========================================================================
  'star-comprehensive': {
    planId: 'star-comprehensive',
    planName: 'Star Comprehensive',
    tagline: 'Premium Health Cover with Zero Room Rent Sub-Limits & Maternity',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹22,400/year',

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
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any illness or medical hospitalisation.',
          highlight: 'Accidental hospitalisation is covered from Day 1 with zero waiting period.',
          policyRef: 'Star Comprehensive Policy Terms (Section 4.1)',
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
          policyRef: 'Star Comprehensive Specific Disease Exclusions (Section 4.2)',
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
          policyRef: 'Standard IRDAI & Star Health Guidelines (Section 5)',
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
            'No daily limits on room rent or ICU charges in network hospitals.'
          ]
        },
        {
          id: 'maternity-waiting',
          icon: '👶',
          title: 'MATERNITY & NEWBORN COVER',
          paragraphs: [
            'Maternity expenses covered after 24 months of continuous coverage.',
            'Newborn baby covered automatically from Day 1 for medical treatments and vaccinations as per limits.'
          ]
        },
        {
          id: 'auto-restoration',
          icon: '🔄',
          title: 'AUTOMATIC RESTORATION BENEFIT',
          paragraphs: [
            '100% of Base Sum Insured restored automatically once in a policy year upon exhaustion.',
            'Applicable for subsequent unrelated illnesses during the policy tenure.'
          ]
        },
        {
          id: 'dental-ophthalmic',
          icon: '👁️',
          title: 'OUTPATIENT DENTAL & OPHTHALMIC',
          paragraphs: [
            'Outpatient dental and ophthalmic treatments covered after 3 continuous claim-free policy years.',
            'Subject to defined annual sub-limits as mentioned in the policy schedule.'
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
            title: 'Any Room Category (Zero Capping)',
            subtitle: 'Single Private A/C Room Covered',
            summary: 'Zero sub-limits on room rent or ICU charges. Choose single private A/C room with 100% cashless claims across 14,000+ network hospitals.',
            badge: 'NO SUB-LIMIT',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: '100% Actual Medical Expenses',
            summary: 'Comprehensive in-patient hospitalisation expenses covered including nursing fees, surgeon fees, operation theatre, and in-hospital medications.',
            badge: '100% COVERAGE',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 90 Days Post',
            summary: 'Covers medical consultations, diagnostic tests, and prescribed pharmacy bills 60 days before hospitalisation and 90 days after discharge.',
            badge: '60 & 90 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures',
            subtitle: 'Day Care Surgeries Covered',
            summary: 'All medical day care procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are fully covered.',
            badge: '400+ PROCEDURES',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Treatments & Robotic Surgery',
            subtitle: 'Advanced Precision Tech Covered',
            summary: 'Coverage for robotic surgeries, stem cell therapy, oral chemotherapy, deep brain stimulation, balloon sinuplasty, and stereotactic radio surgery.',
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
            title: 'Automatic Restoration Benefit',
            subtitle: '100% Automatic Sum Insured Refill',
            summary: 'Automatically restores 100% of Base Sum Insured once in a policy year upon complete exhaustion of cover for subsequent unrelated illnesses.',
            steps: ['Base SI Exhausted', 'Instant Auto-Restore', 'Available for Next Claim'],
            badge: 'AUTO-REFILL',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Cumulative Bonus (Up to 100%)',
            subtitle: '50% Bonus in Year 1 & 50% in Year 2',
            summary: 'Increases basic Sum Insured by 50% for the first claim-free year, and 50% for the second claim-free year, reaching 100% maximum bonus without extra premium.',
            steps: ['Claim-Free Year 1', 'Cumulative Bonus Accrued', '100% Doubled Protection'],
            badge: 'UP TO 100%',
            iconType: 'trending'
          },
          {
            id: 's2-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Complimentary Annual Health Check',
            summary: 'Complimentary comprehensive health check-up package covered for insured members every claim-free year across network diagnostic centers.',
            badge: 'ANNUAL BENEFIT',
            iconType: 'clipboard'
          },
          {
            id: 's2-4',
            title: 'Maternity & Newborn Cover',
            subtitle: 'Delivery & Baby Care from Day 1',
            summary: 'Comprehensive maternity coverage for normal and caesarean delivery after 24 months, plus newborn baby medical cover included from day 1.',
            steps: ['24 Months Waiting', 'Hospital Delivery Care', 'Day 1 Newborn Protection'],
            badge: 'FAMILY CARE',
            iconType: 'heart'
          },
          {
            id: 's2-5',
            title: 'Air Ambulance Cover',
            subtitle: 'Emergency Aeromedical Evacuation',
            summary: 'Emergency air ambulance charges covered for emergency evacuation and transport to the nearest multi-speciality hospital.',
            badge: 'AIR EVACUATION',
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
            subtitle: 'Surface Ambulance Charges Covered',
            summary: 'Emergency surface road ambulance charges to the nearest hospital for inpatient hospitalisation are fully covered.',
            badge: 'ROAD TRANSIT',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Dental & Ophthalmic Outpatient Cover',
            subtitle: 'Outpatient Dental & Vision Care',
            summary: 'Outpatient dental and ophthalmic consultations, treatments, and procedures covered after 3 continuous claim-free policy years.',
            badge: 'HOME & DONOR',
            iconType: 'home'
          },
          {
            id: 's3-3',
            title: 'Second Medical Opinion',
            subtitle: 'Worldwide Expert Specialists',
            summary: 'Free access to second medical opinions from world-class doctors and specialists for critical or complex medical diagnoses.',
            badge: 'WORLD EXPERTS',
            iconType: 'clock'
          },
          {
            id: 's3-4',
            title: 'Tax Savings under Sec 80D',
            subtitle: 'Tax Deductions under Sec 80D',
            summary: 'Avail tax deductions on health insurance premiums paid under Section 80D of the Income Tax Act for self, spouse, children, and parents.',
            badge: 'TAX BENEFIT',
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
            title: 'Hospital Cash Benefit',
            subtitle: 'Daily Cash Allowance per Day',
            summary: 'Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage non-medical incidental expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'smile'
          },
          {
            id: 's4-2',
            title: 'Star Critical Illness Cover',
            subtitle: 'Lump Sum Payout on 37 Critical Illnesses',
            summary: 'Provides an additional lump sum cash payout upon first diagnosis of any of 37 listed critical illnesses including cancer, heart attack, and stroke.',
            isRider: true,
            badge: 'CRITICAL SHIELD',
            iconType: 'zap'
          },
          {
            id: 's4-3',
            title: 'Personal Accident Rider',
            subtitle: '24/7 Worldwide Accident Protection',
            summary: 'Round-the-clock worldwide accident shield providing financial compensation in case of accidental death or permanent total disablement.',
            isRider: true,
            badge: 'ACCIDENT COVER',
            iconType: 'shield'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 2: FAMILY HEALTH OPTIMA
  // ===========================================================================
  'family-health-optima': {
    planId: 'family-health-optima',
    planName: 'Family Health Optima',
    tagline: 'Value-Packed Family Floater Cover with 3x Auto Restoration',
    coverage: '₹3 Lakh - ₹25 Lakh',
    premium: '₹16,800/year',

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
        explanation: 'CSR shows the percentage of claims settled by Star Health within the financial year.',
        singleYear: '97.9%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '63%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Star Health maintains a healthy 63% ICR ensuring reliable family claim settlements.',
        range: '63% → 66%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '18.5',
        explanation: 'In-house claim processing ensuring quick turnaround for family floaters.',
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
        explanation: "India's premier standalone health insurer, backed by Safecrop Investments and Rakesh Jhunjhunwala Estate.",
        items: [
          { name: 'Safecrop Investments & Promoters', value: '47.8%', label: 'Shareholding' },
          { name: 'Rakesh Jhunjhunwala Estate & Family', value: '17.3%', label: 'Shareholding' },
          { name: 'Institutional & Public Investors', value: '34.9%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA-',
        explanation: 'High credit ratings indicating superior claims-servicing capability.',
        items: [
          { agency: 'CRISIL', rating: 'AA- / Stable' },
          { agency: 'ICRA', rating: 'AA- / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.72×',
        explanation: 'Solvency buffer well above the IRDAI mandatory minimum of 1.50×.',
        value: '1.72×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹14,200+ Cr',
        explanation: 'Substantial investment assets supporting nationwide cashless operations.',
        value: '₹14,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Munich Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Munich Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '#1 SAHI',
        explanation: "Over 14,000+ cashless network hospitals across all Indian cities.",
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
          summary: '30-day initial waiting period applies from inception for any non-accidental hospitalisation.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Family Health Optima Policy Terms (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: '24 months waiting period applicable for specified medical/surgical illnesses such as Cataract, Hernia, Hydrocele, Piles, Stones, Joint Replacements, and ENT procedures.',
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
          policyRef: 'Family Health Optima Specific Illness Exclusions (Section 4.2)',
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
          policyRef: 'Star Health Standard Exclusions (Section 5)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key policy nuances for Family Health Optima',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'floater-cover',
          icon: '👨‍👩‍👧‍👦',
          title: 'FAMILY FLOATER SHARING',
          paragraphs: [
            'Sum insured is shared across all covered family members (Self, Spouse, up to 3 dependent children).',
            'Any individual member can utilise up to the entire sum insured if required.'
          ]
        },
        {
          id: 'auto-restoration-3x',
          icon: '🔄',
          title: '3X AUTOMATIC RESTORATION',
          paragraphs: [
            'Sum insured is restored 100% up to 3 times in a single policy year upon exhaustion.',
            'Each restoration is available for subsequent hospitalisations.'
          ]
        },
        {
          id: 'newborn-cover-16th',
          icon: '👶',
          title: 'NEWBORN COVER FROM 16TH DAY',
          paragraphs: [
            'Newborn baby is automatically covered from the 16th day of birth up to 10% of sum insured.'
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
            title: 'Single Private Room Cover',
            subtitle: 'Room Rent up to Single Private Room',
            summary: 'Inpatient room rent covered up to Single Private A/C Room limit across all 14,000+ network hospitals for all covered family members.',
            badge: 'PRIVATE ROOM',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: 'Complete Family Medical Care',
            summary: 'Full coverage for doctor consultation, surgeon fees, operation theatre, specialist care, and in-hospital medications for entire family.',
            badge: '100% COVERED',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 90 Days Post',
            summary: 'Covers pre-hospitalisation diagnostic and consultation expenses for 60 days and post-hospitalisation follow-up expenses for 90 days.',
            badge: '60 & 90 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: '400+ Day Care Procedures Covered',
            subtitle: 'Comprehensive Day Care Cover',
            summary: 'Over 400 advanced daycare medical and surgical procedures requiring less than 24 hours of hospital stay are fully covered.',
            badge: '400+ DAYCARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Advanced Technology Cover',
            subtitle: 'Modern Medical Innovations Covered',
            summary: 'Comprehensive coverage for advanced medical innovations, robotic surgery, and modern precision procedures up to sub-limits.',
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
            title: 'Auto Restoration (3 Times / 300%)',
            subtitle: '100% Refill up to 3 Times per Year',
            summary: 'Automatically restores 100% of Basic Sum Insured up to 3 times in a single policy year upon complete exhaustion of base sum insured.',
            steps: ['Base SI Exhausted', '1st 100% Restore', '2nd 100% Restore', '3rd 100% Restore'],
            badge: '3X RESTORE',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Cumulative Bonus',
            subtitle: '25% in Year 1, 10% Afterwards (Max 100%)',
            summary: 'Increases basic Sum Insured by 25% for the first claim-free year and 10% for each subsequent claim-free year up to a maximum 100%.',
            steps: ['Yr 1 (+25%)', 'Yr 2 (+10%)', 'Yr 3 (+10%)', 'Max 100% Bonus'],
            badge: 'UP TO 100%',
            iconType: 'trending'
          },
          {
            id: 's2-3',
            title: 'Health Check-up Benefit',
            subtitle: 'Annual Preventive Family Screening',
            summary: 'Free comprehensive health check-up for every claim-free year for all adult family members across Star Health diagnostic partners.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          },
          {
            id: 's2-4',
            title: 'Newborn Baby Cover (from 16th Day)',
            subtitle: 'Medical Cover for Newborn from 16th Day',
            summary: 'Medical coverage for newborn baby automatically included from the 16th day of birth up to 10% of sum insured without additional premium.',
            badge: 'NEWBORN CARE',
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
            id: 's3-1',
            title: 'Emergency Road Ambulance',
            subtitle: 'Emergency Transit Covered',
            summary: 'Emergency surface road ambulance charges to the hospital covered per hospitalisation as per policy limits.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Compassionate Travel Assistance',
            subtitle: 'Airfare / Rail Ticket for Family Member',
            summary: 'Reimburses economy airfare or railway ticket expenses for an immediate family member to travel to the hospital during critical hospitalisation.',
            badge: 'TRAVEL COVER',
            iconType: 'users'
          },
          {
            id: 's3-3',
            title: 'Organ Donor Hospitalisation',
            subtitle: 'Donor Complications Covered',
            summary: 'Inpatient medical expenses for harvesting organ from donor during kidney, liver, or heart transplant covered up to SI.',
            badge: 'ORGAN DONOR',
            iconType: 'home'
          },
          {
            id: 's3-4',
            title: 'Assisted Reproduction Treatment',
            subtitle: 'Infertility Treatment Cover',
            summary: 'Specified inpatient fertility treatment procedures covered after 36 months of continuous coverage up to defined limits.',
            badge: 'FERTILITY CARE',
            iconType: 'smile'
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
            title: 'Hospital Cash Rider',
            subtitle: 'Daily Cash for Inpatient Stay',
            summary: 'Daily cash allowance for every completed 24 hours of hospital stay to meet extra personal expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'Star Super Surplus Add-on',
            subtitle: 'Top-up Cover Multiplier',
            summary: 'Extends protection above deductible at highly discounted premium rates.',
            isRider: true,
            badge: 'TOP-UP COVER',
            iconType: 'zap'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // PLAN 3: STAR CARDIAC CARE
  // ===========================================================================
  'star-cardiac-care': {
    planId: 'star-cardiac-care',
    planName: 'Star Cardiac Care',
    tagline: 'Specialized Medical Protection for Heart Patients & Cardiac Surgeries',
    coverage: '₹3 Lakh - ₹10 Lakh',
    premium: '₹24,000/year',

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
        explanation: 'CSR shows the percentage of eligible cardiac and medical claims settled by Star Health within the financial year.',
        singleYear: '97.9%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.1%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '63%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Healthy claims ratio ensuring high solvency and prompt processing for critical cardiac claims.',
        range: '63% → 66%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '18.5',
        explanation: 'Fast-track claim desks with specialist medical reviewers for cardiac procedures.',
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
        explanation: "Pioneering specialized disease health insurance in India with dedicated medical panels.",
        items: [
          { name: 'Safecrop Investments & Promoters', value: '47.8%', label: 'Shareholding' },
          { name: 'Rakesh Jhunjhunwala Estate & Family', value: '17.3%', label: 'Shareholding' },
          { name: 'Institutional & Public Investors', value: '34.9%', label: 'Shareholding' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA-',
        explanation: 'CRISIL AA- / Stable rating certifying strong financial capability.',
        items: [
          { agency: 'CRISIL', rating: 'AA- / Stable' },
          { agency: 'ICRA', rating: 'AA- / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.72×',
        explanation: 'Solvency buffer well above the IRDAI mandatory minimum of 1.50×.',
        value: '1.72×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹14,200+ Cr',
        explanation: 'Substantial investment assets supporting heavy cardiac hospitalisation payouts.',
        value: '₹14,200+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Munich Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Munich Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: '#1 SAHI',
        explanation: "14,000+ cashless network hospitals with leading cardiac centres (Fortis, Apollo, Max, Narayana Health).",
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
          title: 'Short 90 Days Waiting for Heart Surgeries',
          summary: 'Special short waiting period of only 90 days applies for pre-existing cardiac conditions and heart surgeries.',
          highlight: 'Accidental hospitalisation covered from Day 1.',
          policyRef: 'Star Cardiac Care Policy Terms (Section 4.1)',
          durationTag: '90 Days'
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
          policyRef: 'Star Cardiac Care Specific Illness Terms (Section 4.2)',
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
          policyRef: 'Star Cardiac Care Exclusions (Section 5)',
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
          id: 'cardiac-history',
          icon: '❤️',
          title: 'PRIOR CARDIAC HISTORY ACCEPTANCE',
          paragraphs: [
            'Specially designed for individuals with past history of heart surgery, angioplasty, stenting, or bypass (CABG).',
            'Medical records and angiography reports are verified at the time of proposal.'
          ]
        },
        {
          id: 'short-waiting',
          icon: '⏱️',
          title: '90 DAYS CARDIAC WAITING',
          paragraphs: [
            'Pre-existing cardiac conditions become payable after completing just 90 days from policy commencement.'
          ]
        },
        {
          id: 'cardiac-devices',
          icon: '🩺',
          title: 'PACEMAKER & STENTS COVER',
          paragraphs: [
            'Covers cardiac device implantations (Pacemaker, ICD, artificial heart valves) up to policy limits.'
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
            title: 'Pre-Existing Heart Conditions Covered',
            subtitle: 'Short 90-Day Waiting Period',
            summary: 'Covers pre-existing cardiac conditions, heart bypass (CABG), angioplasty, and pacemaker implantations after only 90 days.',
            badge: '90 DAYS WAITING',
            iconType: 'heart'
          },
          {
            id: 's1-2',
            title: 'Inpatient Hospitalisation',
            subtitle: 'Full Inpatient Medical Care',
            summary: 'Comprehensive in-patient hospitalisation expenses for cardiac and non-cardiac ailments covered up to sum insured.',
            badge: 'INPATIENT CARE',
            iconType: 'home'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Covers diagnostic tests, angiography, cardiac consultations, and pharmacy bills 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Day Care Procedures Covered',
            subtitle: 'Advanced Cardiac Day Care Surgeries',
            summary: 'Covers day care cardiac procedures and angiograms requiring less than 24 hours of hospital stay.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
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
            id: 's2-1',
            title: 'Outpatient Cardiac Consultations',
            subtitle: 'Regular Cardiologist Visits Covered',
            summary: 'Outpatient medical consultations and ECG tests with specialist cardiologists covered up to policy sub-limits.',
            badge: 'OPD CONSULT',
            iconType: 'clipboard'
          },
          {
            id: 's2-2',
            title: 'Cardiac Device Implants Cover',
            subtitle: 'Pacemaker, ICD & Valve Implants',
            summary: 'Inpatient costs for cardiac device implantations such as Pacemakers, ICDs, and Artificial Heart Valves covered.',
            badge: 'DEVICE IMPLANTS',
            iconType: 'shield'
          },
          {
            id: 's2-3',
            title: 'Preventive Health Check-up',
            subtitle: 'Annual Lipid & Cardiac Screenings',
            summary: 'Free annual preventive health check-up package including Lipid Profile, ECG, and blood sugar tests on renewal.',
            badge: 'HEALTH CHECK',
            iconType: 'trending'
          },
          {
            id: 's2-4',
            title: 'AYUSH Treatment Inpatient Cover',
            subtitle: 'Alternative medicine covered',
            summary: 'Inpatient treatment taken at recognized government AYUSH hospitals covered up to sum insured.',
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
            title: 'Emergency Road Ambulance',
            subtitle: 'Cardiac Emergency Transit',
            summary: 'Emergency road ambulance charges to the nearest hospital for acute cardiac emergencies fully covered.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-2',
            title: 'Second Medical Opinion',
            subtitle: 'Expert Cardiologist Panel',
            summary: 'Free second opinions from leading heart specialists before undergoing major surgical interventions.',
            badge: '2ND OPINION',
            iconType: 'clock'
          },
          {
            id: 's3-3',
            title: 'Tax Savings under Section 80D',
            subtitle: 'Tax Deduction Benefit',
            summary: 'Premiums paid qualify for maximum tax deductions under Section 80D of the Income Tax Act.',
            badge: 'TAX SAVER 80D',
            iconType: 'dollar'
          },
          {
            id: 's3-4',
            title: '24/7 Medical Hotline Support',
            subtitle: 'Dedicated Doctor Tele-Support',
            summary: 'Round-the-clock tele-consultation and guidance from qualified doctors for cardiac emergencies.',
            badge: '24/7 SUPPORT',
            iconType: 'smile'
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
            subtitle: 'Fixed Daily Cash Allowance',
            summary: 'Fixed daily cash payout for each day of continuous hospital admission to handle incidental expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'Personal Accident Cover',
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

export const getStarHealthPlanData = (planId) => {
  const canonicalId = resolveStarHealthPlanId(planId);
  return STAR_HEALTH_PLANS_DATA[canonicalId] || STAR_HEALTH_PLANS_DATA['star-comprehensive'];
};
