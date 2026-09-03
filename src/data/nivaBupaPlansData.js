// =============================================================================
// NIVA BUPA PLANS INDEPENDENT DATA CONFIGURATION
// Aspire is the only Niva Bupa plan configured here.
// =============================================================================

export const NIVA_BUPA_CANONICAL_PLAN_IDS = [
  'aspire'
];

export const resolveNivaBupaPlanId = (planId) => {
  if (!planId) return 'aspire';
  const cleanId = String(planId).toLowerCase().trim();
  if (cleanId === 'aspire' || cleanId === 'niva-aspire' || cleanId === 'niva-bupa-aspire' || cleanId === 'aspire-plan') {
    return 'aspire';
  }
  return cleanId;
};

export const NIVA_BUPA_PLANS_DATA = {
  // ===========================================================================
  /*
    tagline: 'Never Run Out of Cover with Forever Restore & Lock the Clock',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹13,900/year',

    uiConfig: {
      primaryColor: '#0EA5E9',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Niva Bupa Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.2%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR reflects the percentage of eligible claims settled by Niva Bupa with ultra-fast 30-minute cashless processing across 10,000+ network hospitals.',
        singleYear: '98.2%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.0%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '58%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR shows the proportion of earned premium spent on honoring customer claims. Niva Bupa's 58% ratio ensures strong claims solvency and liquidity reserves.",
        range: '58% → 62%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '16.1',
        explanation: 'Complaints registered per 10,000 settled claims. Niva Bupa maintains automated digital claims desk and proactive customer grievance handling.',
        value: '16.1',
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
        summaryValue: '63% / 37%',
        explanation: 'Joint venture combining the international healthcare legacy of Bupa Group (UK) with private equity giant True North (India).',
        items: [
          { name: 'Bupa Group (UK)', value: '63%', label: 'Ownership' },
          { name: 'True North (India)', value: '37%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA',
        explanation: 'Crisil AA / Stable credit ratings reflect top-tier financial strength, high claim-paying solvency, and disciplined risk management.',
        items: [
          { agency: 'CRISIL', rating: 'AA / Stable' },
          { agency: 'ICRA', rating: 'AA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.65×',
        explanation: "Solvency ratio demonstrates financial capacity to honor all claims under extreme conditions, surpassing the IRDAI minimum mandate of 1.50×.",
        value: '1.65×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹8,500+ Cr',
        explanation: 'Robust investment assets and capital base supporting seamless cashless hospital claim settlements nationwide.',
        value: '₹8,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Over 85% of reinsurance capacity backed by Bupa Global Re, Swiss Re, and General Insurance Corporation of India (GIC Re).',
        value: '85%+',
        label: 'Backed by Bupa Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 3 SAHI',
        explanation: 'Pioneer of revolutionary features like ReAssure Lock-in with over 10,000+ cashless hospitals and 30-minute cashless approval speed.',
        value: 'Top 3 Standalone Health Insurer',
        label: 'Over 1 Crore+ Policies Issued'
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
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical or surgical treatment of the following specified conditions:',
          diseaseList: [
            'Cataract & eye procedures',
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
          policyRef: 'Niva Bupa Specific Illness Schedule (Section 3.2)',
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
          policyRef: 'Standard IRDAI & Niva Bupa Guidelines (Section 4)',
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
          id: 'lock-the-clock',
          icon: '⏰',
          title: 'LOCK THE CLOCK FEATURE',
          paragraphs: [
            'Your entry age is locked for premium calculation until you make your first claim under the base cover.',
            'Premiums do not increase with age slabs as long as no claim is filed.'
          ]
        },
        {
          id: 'reassure-forever',
          icon: '🔄',
          title: 'REASSURE FOREVER BENEFIT',
          paragraphs: [
            'Unlimited reinstatement of sum insured triggered from the first claim itself.',
            'Available for any illness, including related or unrelated conditions, for any insured member.'
          ]
        },
        {
          id: 'booster-plus',
          icon: '📈',
          title: 'BOOSTER+ CARRY FORWARD',
          paragraphs: [
            'Unused base sum insured carries forward to the next year upon renewal up to 10X (1000% bonus).',
            'Bonus is not reduced even if you file a claim under the policy.'
          ]
        },
        {
          id: 'safeguard-plus',
          icon: '🛡️',
          title: 'SAFEGUARD+ (CONSUMABLES & INFLATION)',
          paragraphs: [
            'Covers non-payable non-medical items (gloves, PPE kits, administrative items) during hospitalisation.',
            'Provides automatic annual inflation increase on base sum insured tied to CPI.'
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
            title: 'Any Room Category (No Capping)',
            subtitle: 'Single Private Room to Luxury Suite Covered',
            summary: 'Zero room rent limit or proportional deductions. Stay in any room category from Single Private Room to Suite with 100% cashless support.',
            badge: 'ANY ROOM CATEGORY',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'No Limit on ICU Charges',
            subtitle: '100% Actual ICU Costs Covered',
            summary: 'Comprehensive coverage for Intensive Care Unit (ICU), ICCU, and monitoring charges without any daily sub-limits or caps.',
            badge: 'NO ICU LIMIT',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '60 Days Pre & 180 Days Post',
            summary: 'Medical consultations, diagnostics, pharmacy, and investigation expenses incurred 60 days before hospital admission and 180 days post-discharge are fully reimbursed.',
            badge: '60 & 180 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'All Day Care Procedures Covered',
            subtitle: 'All Day Care Surgeries (<24 hrs)',
            summary: 'All medical procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are covered up to Sum Insured.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Treatment & Robotic Surgery',
            subtitle: 'Advanced Technology Covered up to SI',
            summary: 'Precision robotic surgery, stem cell therapy, oral chemotherapy, deep brain stimulation, and stereotactic radio surgery covered with zero sub-limits.',
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
            title: 'ReAssure Forever (Unlimited Restore)',
            subtitle: 'Unlimited Restorations for Same/Other Illness',
            summary: 'Triggers unlimited restorations of 100% Sum Insured from the very first claim. Covers the same or different illnesses for any insured family member forever.',
            steps: ['1st Claim Filed', 'Instant 100% Restore', 'Unlimited Times Refill'],
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Lock the Clock (Entry Age Premium)',
            subtitle: 'Pay entry age premium until first claim',
            summary: 'Your entry age is locked for premium calculation until you make your first claim under base cover, protecting against age-related premium hikes.',
            steps: ['Join at Age 25', 'Premium Locked at 25', 'Stays Locked till 1st Claim'],
            badge: 'AGE LOCK',
            iconType: 'clock'
          },
          {
            id: 's2-3',
            title: 'Booster+ (Carry Forward Unused Cover)',
            subtitle: 'Carry forward up to 10X (1000% SI)',
            summary: 'Unused base sum insured carries forward to the next policy year on renewal, accumulating up to a massive 10X (1000%) without reducing on claims.',
            steps: ['Yr 1 Base SI', 'Yr 2 Unused + Base', 'Accumulates up to 10X'],
            badge: 'BOOSTER 10X',
            iconType: 'trending'
          },
          {
            id: 's2-4',
            title: 'Annual Health Check-up from Day 1',
            subtitle: 'Available from Day 1 for all members',
            summary: 'Complimentary comprehensive preventive health check-up available from Day 1 of policy inception across network diagnostic laboratories.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          },
          {
            id: 's2-5',
            title: 'Safeguard+ (Non-Medical Consumables)',
            subtitle: 'Consumables & CPI Inflation Cover',
            summary: 'Full coverage for non-payable consumable items (gloves, PPE kits, syringes) along with CPI inflation indexation on base sum insured.',
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
            title: 'Live Healthy (Renewal Discount)',
            subtitle: 'Up to 30% Discount on Renewal',
            summary: 'Earn up to a 30% discount on renewal premiums by tracking daily health steps and wellness activities via Niva Bupa Health App.',
            badge: 'WELLNESS 30%',
            iconType: 'smile'
          },
          {
            id: 's3-2',
            title: 'AYUSH & Domiciliary Hospitalisation',
            subtitle: 'Alternative & Home Hospital Care',
            summary: '100% inpatient coverage for AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) and home hospitalisation prescribed by doctor.',
            badge: 'AYUSH & HOME',
            iconType: 'home'
          },
          {
            id: 's3-3',
            title: 'Emergency Road & Air Ambulance',
            subtitle: 'Full Surface & Aeromedical Cover',
            summary: 'Road ambulance charges covered up to actuals, and emergency air ambulance covered up to base sum insured per hospitalisation.',
            badge: 'AIR & ROAD',
            iconType: 'truck'
          },
          {
            id: 's3-4',
            title: 'Organ Donor Hospitalisation Expenses',
            subtitle: 'Donor Inpatient Harvesting Covered',
            summary: 'Inpatient harvesting medical expenses for organ donor during transplantation covered up to base sum insured.',
            badge: 'ORGAN DONOR',
            iconType: 'activity'
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
            title: 'Personal Accident Add-on',
            subtitle: 'Worldwide Accidental Cover',
            summary: '24/7 round-the-clock worldwide financial protection against accidental death and permanent total disability.',
            isRider: true,
            badge: 'ACCIDENT SHIELD',
            iconType: 'shield'
          },
          {
            id: 's4-2',
            title: 'Hospital Daily Cash Benefit',
            subtitle: 'Daily Cash Allowance',
            summary: 'Fixed daily cash payout for every 24 hours of continuous hospital stay to manage incidental out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-3',
            title: 'Critical Illness Rider',
            subtitle: 'Lump Sum Payout on 20 Critical Illnesses',
            summary: 'Additional lump-sum cash compensation upon first diagnosis of listed critical illnesses.',
            isRider: true,
            badge: 'CRITICAL SHIELD',
            iconType: 'zap'
          },
          {
            id: 's4-4',
            title: 'Global Emergency Health Cover',
            subtitle: 'International Emergency Inpatient Care',
            summary: 'Worldwide emergency inpatient hospitalisation coverage outside India during overseas travel.',
            isRider: true,
            badge: 'GLOBAL COVER',
            iconType: 'users'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // ===========================================================================
    tagline: 'Affordable Family Health Protection with Zero Co-Payment',
    coverage: '₹3 Lakh - ₹1 Crore',
    premium: '₹9,200/year',

    uiConfig: {
      primaryColor: '#0EA5E9',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Niva Bupa Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.2%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of claims settled by Niva Bupa within the financial year.',
        singleYear: '98.2%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.0%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '58%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Healthy claims ratio ensuring high solvency and prompt claim disbursements.',
        range: '58% → 62%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '16.1',
        explanation: 'Low grievance rate reflecting efficient digital servicing.',
        value: '16.1',
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
        summaryValue: '63% / 37%',
        explanation: 'Joint venture between Bupa Group (UK) and True North (India).',
        items: [
          { name: 'Bupa Group (UK)', value: '63%', label: 'Ownership' },
          { name: 'True North (India)', value: '37%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA',
        explanation: 'CRISIL AA rating indicating high financial capability.',
        items: [
          { agency: 'CRISIL', rating: 'AA / Stable' },
          { agency: 'ICRA', rating: 'AA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.65×',
        explanation: 'Solvency ratio comfortably exceeding IRDAI mandatory minimum of 1.50×.',
        value: '1.65×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹8,500+ Cr',
        explanation: 'Substantial investment assets supporting rapid cashless hospitalisation payouts.',
        value: '₹8,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Bupa Global Re, Swiss Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Bupa Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 3 SAHI',
        explanation: 'Over 10,000+ cashless network hospitals with 30-minute cashless processing.',
        value: 'Top 3 Standalone Health Insurer',
        label: 'Over 1 Crore+ Policies Issued'
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
          policyRef: 'Niva Bupa Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'zero-copay',
          icon: '✅',
          title: 'ZERO MANDATORY CO-PAYMENT',
          paragraphs: [
            'Zero co-payment across all age groups at any network hospital in India.'
          ]
        },
        {
          id: 'refill-benefit',
          icon: '🔄',
          title: 'REFILL BENEFIT',
          paragraphs: [
            '100% refill of base sum insured upon exhaustion once in a policy year for subsequent hospitalisations.'
          ]
        },
        {
          id: 'free-health-check',
          icon: '🩺',
          title: 'ANNUAL HEALTH CHECK-UP',
          paragraphs: [
            'Complimentary annual health screening check-up vouchers for all insured members.'
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
            title: 'Single Private Room Coverage',
            subtitle: 'No Sub-limit on Room Rent',
            summary: 'Full coverage for Single Private A/C Room without any daily sub-limits or proportionate deductions.',
            badge: 'PRIVATE ROOM',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'No Capping on ICU Charges',
            subtitle: '100% ICU Expenses Covered',
            summary: 'Comprehensive coverage for intensive care unit expenses up to sum insured.',
            badge: 'NO ICU LIMIT',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Covers consultations, diagnostic tests, and prescribed pharmacy bills 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Over 500+ Day Care Procedures',
            subtitle: 'All Day Care Surgeries Covered',
            summary: 'Covers over 500+ advanced day care surgeries requiring less than 24 hours of hospital stay.',
            badge: '500+ DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Modern Medical Technologies',
            subtitle: 'Advanced Precision Procedures',
            summary: 'Covers modern robotic surgeries, stem cell therapies, and advanced precision treatments.',
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
            title: 'Refill Benefit (100% Reinstatement)',
            subtitle: '100% Refill upon Base SI Exhaustion',
            summary: 'Reinstates 100% of Base Sum Insured upon complete exhaustion for subsequent hospitalisations.',
            steps: ['Base SI Exhausted', '100% Refill Triggered', 'Available for Next Claim'],
            badge: 'REFILL BENEFIT',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Cumulative Bonus (Up to 100%)',
            subtitle: '20% per claim-free year (Max 100%)',
            summary: 'Increases basic Sum Insured by 20% for every claim-free year up to a maximum 100% bonus.',
            steps: ['Yr 1 (+20%)', 'Yr 2 (+20%)', 'Max 100% Doubled Cover'],
            badge: 'UP TO 100%',
            iconType: 'trending'
          },
          {
            id: 's2-3',
            title: 'Free Annual Health Check-up',
            subtitle: 'Annual Preventive Health Screening',
            summary: 'Complimentary comprehensive preventive health check-up package for all insured adults every year.',
            badge: 'HEALTH CHECK',
            iconType: 'clipboard'
          },
          {
            id: 's2-4',
            title: 'Zero Mandatory Co-Payment',
            subtitle: 'No Co-Pay Across All Ages',
            summary: 'Zero co-payment across all age groups at any network hospital nationwide.',
            badge: 'ZERO CO-PAY',
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
            title: 'Inpatient AYUSH Alternative Treatment',
            subtitle: '100% AYUSH Inpatient Covered',
            summary: 'Inpatient alternative treatments under Ayurveda, Yoga, Unani, Siddha, and Homeopathy fully covered.',
            badge: 'AYUSH COVER',
            iconType: 'home'
          },
          {
            id: 's3-2',
            title: 'Emergency Road Ambulance',
            subtitle: 'Ambulance Charges Covered',
            summary: 'Surface road ambulance transportation charges covered per hospitalisation as per policy limits.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-3',
            title: 'Domiciliary Treatment Coverage',
            subtitle: 'Home Hospitalisation Covered',
            summary: 'Covers home medical treatment exceeding 3 days when hospital beds are unavailable or patient cannot be moved.',
            badge: 'HOME CARE',
            iconType: 'credit'
          },
          {
            id: 's3-4',
            title: 'Organ Donor Inpatient Cover',
            subtitle: 'Harvesting Expenses Covered',
            summary: 'Inpatient medical expenses for harvesting organ from donor during transplantation covered up to SI.',
            badge: 'ORGAN DONOR',
            iconType: 'activity'
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
            title: 'Hospital Cash Allowance',
            subtitle: 'Optional Daily Cash Rider',
            summary: 'Daily cash allowance for every 24 hours of hospital stay to manage incidental out-of-pocket expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'Safeguard Add-on (Consumables Covered)',
            subtitle: 'Non-Medical Consumables Covered',
            summary: 'Covers non-payable medical items such as gloves, syringes, PPE kits, and administrative charges.',
            isRider: true,
            badge: 'CONSUMABLES',
            iconType: 'shield'
          },
          {
            id: 's4-3',
            title: 'Individual Personal Accident Cover',
            subtitle: '24/7 Worldwide Accident Shield',
            summary: 'Round-the-clock accidental death and permanent disability financial protection.',
            isRider: true,
            badge: 'ACCIDENT SHIELD',
            iconType: 'users'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // ===========================================================================
    tagline: 'Tailor-Made Protection for Senior Citizens with Short Waiting Periods',
    coverage: '₹5 Lakh - ₹25 Lakh',
    premium: '₹21,500/year',

    uiConfig: {
      primaryColor: '#0EA5E9',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Niva Bupa Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.2%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR shows the percentage of senior citizen claims settled by Niva Bupa within the financial year.',
        singleYear: '98.2%',
        singleYearLabel: 'Recent Single Year',
        threeYearAvg: '98.0%',
        threeYearAvgLabel: '3 Year Average'
      },
      icr: {
        title: 'ICR',
        summaryValue: '58%',
        subtitle: 'Incurred Claim Ratio',
        explanation: 'Strong claims liquidity ensuring prompt senior citizen hospitalisation payouts.',
        range: '58% → 62%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '16.1',
        explanation: 'Dedicated senior citizen claim assistance desk with 30-minute cashless approvals.',
        value: '16.1',
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
        summaryValue: '63% / 37%',
        explanation: 'Backed by global healthcare leader Bupa Group (UK) and True North (India).',
        items: [
          { name: 'Bupa Group (UK)', value: '63%', label: 'Ownership' },
          { name: 'True North (India)', value: '37%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA',
        explanation: 'CRISIL AA rating indicating high financial capability.',
        items: [
          { agency: 'CRISIL', rating: 'AA / Stable' },
          { agency: 'ICRA', rating: 'AA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.65×',
        explanation: 'Solvency ratio comfortably exceeding IRDAI mandatory minimum of 1.50×.',
        value: '1.65×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹8,500+ Cr',
        explanation: 'Substantial investment assets supporting rapid cashless hospitalisation payouts.',
        value: '₹8,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Reinsurance treaties backed by Bupa Global Re, Swiss Re & GIC Re.',
        value: '85%+',
        label: 'Backed by Bupa Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 3 SAHI',
        explanation: 'Over 10,000+ cashless network hospitals with 30-minute cashless processing.',
        value: 'Top 3 Standalone Health Insurer',
        label: 'Over 1 Crore+ Policies Issued'
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
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Pre-Existing & Specific Diseases',
          summary: 'Special short waiting period of only 24 months for pre-existing conditions (Hypertension, Diabetes) and specific illnesses (Cataract, Joint Replacement, Hernia).',
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
          durationTag: '24 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'Excludes cosmetic surgeries, self-inflicted injuries, substance abuse, rest cures, and unproven experimental therapies.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance abuse treatments',
            'Investigation & evaluation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'Niva Bupa Standard Exclusions (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key senior policy terms to keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'short-pre-existing',
          icon: '⏱️',
          title: 'SHORT 2-YEAR PRE-EXISTING WAITING',
          paragraphs: [
            'Covers declared pre-existing diseases after only 24 months of continuous policy coverage.'
          ]
        },
        {
          id: 'no-medical-test',
          icon: '🩺',
          title: 'HASSLE-FREE NO PRE-POLICY TEST',
          paragraphs: [
            'No pre-policy medical check-up required prior to policy issuance (subject to clean declaration).'
          ]
        },
        {
          id: 'co-pay-deductible',
          icon: '💳',
          title: 'CO-PAY WAIVER / DEDUCTIBLE OPTIONS',
          paragraphs: [
            'Flexible deductible options available to reduce annual premium for senior citizens.'
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
            title: 'Single Standard Room Rent Cover',
            subtitle: 'Room Rent Covered up to Standard Room',
            summary: 'Covers standard single room rent across all 10,000+ cashless network hospitals nationwide.',
            badge: 'STANDARD ROOM',
            iconType: 'home'
          },
          {
            id: 's1-2',
            title: 'ICU Charges Covered (2% per Day)',
            subtitle: 'ICU Expenses Covered',
            summary: 'Comprehensive coverage for intensive care unit expenses up to policy limits.',
            badge: 'ICU COVER',
            iconType: 'heart'
          },
          {
            id: 's1-3',
            title: 'Pre & Post Hospitalisation',
            subtitle: '30 Days Pre & 60 Days Post',
            summary: 'Covers consultations, diagnostic tests, and pharmacy bills 30 days before and 60 days after discharge.',
            badge: '30 & 60 DAYS',
            iconType: 'calendar'
          },
          {
            id: 's1-4',
            title: 'Day Care Surgeries (Cataract, Dialysis)',
            subtitle: 'Advanced Day Care Surgeries Covered',
            summary: 'Covers day care procedures requiring less than 24 hours of hospital stay including chemotherapy, dialysis, and eye surgeries.',
            badge: 'DAY CARE',
            iconType: 'check'
          },
          {
            id: 's1-5',
            title: 'Pre-Existing Disease Cover (Short 2-Year)',
            subtitle: '24 Months Pre-Existing Waiting Period',
            summary: 'Covers pre-existing conditions like hypertension and diabetes after completing only 24 months of coverage.',
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
            id: 's2-1',
            title: 'ReAssure Senior Benefit (Unlimited)',
            subtitle: 'Unlimited Restorations for Any Illness',
            summary: 'Triggers unlimited restorations of 100% Sum Insured from the first claim for any illness for senior policyholders.',
            steps: ['1st Claim Made', 'Instant 100% Restore', 'Unlimited Reinstatements'],
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh'
          },
          {
            id: 's2-2',
            title: 'Hassle-Free No Pre-Policy Medical Test',
            subtitle: 'Zero pre-policy medical checkup',
            summary: 'No pre-policy medical check-up required up to defined entry limits for senior citizens.',
            badge: 'NO MEDICAL TEST',
            iconType: 'shield'
          },
          {
            id: 's2-3',
            title: 'Cumulative Bonus (Up to 50%)',
            subtitle: '10% per claim-free year (Max 50%)',
            summary: 'Increases basic Sum Insured by 10% for every claim-free year up to a maximum 50% bonus.',
            badge: 'BONUS GROWTH',
            iconType: 'trending'
          },
          {
            id: 's2-4',
            title: 'Annual Geriatric Health Screening',
            subtitle: 'Comprehensive Annual Check-up',
            summary: 'Complimentary annual health screening check-up package for senior citizens every policy year.',
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
            title: 'Inpatient AYUSH Care',
            subtitle: '100% AYUSH Inpatient Covered',
            summary: 'Inpatient treatment taken at recognized government AYUSH hospitals covered up to sum insured.',
            badge: 'AYUSH COVER',
            iconType: 'home'
          },
          {
            id: 's3-2',
            title: 'Emergency Road Ambulance Support',
            subtitle: 'Ambulance Charges Covered',
            summary: 'Emergency road ambulance transportation charges covered per hospitalisation as per policy limits.',
            badge: 'AMBULANCE',
            iconType: 'truck'
          },
          {
            id: 's3-3',
            title: 'Domiciliary Home Care Treatment',
            subtitle: 'Home Hospitalisation Covered',
            summary: 'Covers home medical treatment exceeding 3 days when hospital beds are unavailable.',
            badge: 'HOME CARE',
            iconType: 'credit'
          },
          {
            id: 's3-4',
            title: 'Organ Donor Medical Cover',
            subtitle: 'Harvesting Expenses Covered',
            summary: 'Inpatient harvesting medical expenses for organ donor during transplantation covered up to SI.',
            badge: 'ORGAN DONOR',
            iconType: 'activity'
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
            title: 'Senior Daily Hospital Cash',
            subtitle: 'Daily Cash Allowance',
            summary: 'Fixed daily cash payout for each day of hospital admission to handle incidental expenses.',
            isRider: true,
            badge: 'DAILY CASH',
            iconType: 'dollar'
          },
          {
            id: 's4-2',
            title: 'Safeguard Senior Rider (Consumables)',
            subtitle: 'Non-Medical Consumables Covered',
            summary: 'Covers non-payable medical items such as gloves, syringes, and PPE kits.',
            isRider: true,
            badge: 'CONSUMABLES',
            iconType: 'shield'
          },
          {
            id: 's4-3',
            title: 'Senior Personal Accident Shield',
            subtitle: '24/7 Worldwide Accident Shield',
            summary: 'Round-the-clock accidental death and permanent disability financial protection.',
            isRider: true,
            badge: 'ACCIDENT SHIELD',
            iconType: 'users'
          }
        ]
      }
    ]
  },

  // ===========================================================================
  */
  // PLAN 4: ASPIRE
  // ===========================================================================
  'aspire': {
    planId: 'aspire',
    planName: 'Aspire',
    fullName: 'Niva Bupa Aspire',
    companyName: 'Niva Bupa',
    tagline: 'Next-Gen Protection with Booster+ Cumulative Coverage, Lock the Clock & Unlimited Restoration',
    subtitle: 'Next-Gen Protection with Booster+ Cumulative Coverage, Lock the Clock & Unlimited Restoration',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹12,800/year',

    uiConfig: {
      primaryColor: '#0EA5E9',
      accentColor: '#F97316',
      lightBg: '#F0F9FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    // --- 1. REPORT CARD (INDEPENDENT) ---
    reportCard: {
      heading: 'REPORT CARD',
      subheading: 'Niva Bupa Performance',
      description: 'Official claim settlement and financial strength metrics.',
      csr: {
        title: 'CSR',
        summaryValue: '98.2%',
        subtitle: 'Claim Settlement Ratio',
        explanation: 'CSR reflects the percentage of eligible claims settled by Niva Bupa with ultra-fast 30-minute cashless processing across 10,000+ network hospitals.',
        singleYear: '98.2%',
        singleYearLabel: 'Recent Single Year (FY2024-25)',
        threeYearAvg: '98.0%',
        threeYearAvgLabel: '3 Year Average (FY2022-25)'
      },
      icr: {
        title: 'ICR',
        summaryValue: '58%',
        subtitle: 'Incurred Claim Ratio',
        explanation: "ICR shows the proportion of earned premium spent on honoring customer claims. Niva Bupa's 58% ratio ensures strong claims solvency and liquidity reserves.",
        range: '58% → 62%',
        rangeLabel: 'Incurred Claim Ratio'
      },
      complaintVolume: {
        title: 'COMPLAINT VOLUME',
        summaryValue: '16.1',
        explanation: 'Complaints registered per 10,000 settled claims. Niva Bupa maintains automated digital claims desk and proactive customer grievance handling.',
        value: '16.1',
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
        summaryValue: '63% / 37%',
        explanation: 'Joint venture combining the international healthcare legacy of Bupa Group (UK) with private equity giant True North (India).',
        items: [
          { name: 'Bupa Group (UK)', value: '63%', label: 'Ownership' },
          { name: 'True North (India)', value: '37%', label: 'Ownership' }
        ]
      },
      creditRating: {
        title: 'CREDIT RATING',
        summaryValue: 'AA',
        explanation: 'Crisil AA / Stable credit ratings reflect top-tier financial strength, high claim-paying solvency, and disciplined risk management.',
        items: [
          { agency: 'CRISIL', rating: 'AA / Stable' },
          { agency: 'ICRA', rating: 'AA / Stable' }
        ]
      },
      capitalStrength: {
        title: 'CAPITAL STRENGTH',
        summaryValue: '1.65×',
        explanation: "Solvency ratio demonstrates financial capacity to honor all claims under extreme conditions, surpassing the IRDAI minimum mandate of 1.50×.",
        value: '1.65×',
        label: 'Solvency Ratio (as of March 2025)'
      },
      financialBase: {
        title: 'FINANCIAL BASE',
        summaryValue: '₹8,500+ Cr',
        explanation: 'Robust investment assets and capital base supporting seamless cashless hospital claim settlements nationwide.',
        value: '₹8,500+ Cr',
        label: 'Investment Assets under Management'
      },
      reinsuranceStrength: {
        title: 'REINSURANCE STRENGTH',
        summaryValue: '85%+',
        explanation: 'Over 85% of reinsurance capacity backed by Bupa Global Re, Swiss Re, and General Insurance Corporation of India (GIC Re).',
        value: '85%+',
        label: 'Backed by Bupa Re, Swiss Re & GIC Re'
      },
      marketPosition: {
        title: 'MARKET POSITION',
        summaryValue: 'Top 3 SAHI',
        explanation: 'Pioneer of revolutionary features like ReAssure Lock-in with over 10,000+ cashless hospitals and 30-minute cashless approval speed.',
        value: 'Top 3 Standalone Health Insurer',
        label: 'Over 1 Crore+ Policies Issued'
      }
    },

    // --- 3. LIMITATIONS & WAITING PERIODS ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Standard waiting periods and statutory terms applied to this policy.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness.',
          highlight: 'Accidental hospitalization is covered from Day 1.',
          policyRef: 'Niva Bupa Aspire Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: 'Specific Illness Waiting Period (24 Months)',
          summary: 'A 24-month waiting duration applies for medical treatment of specified conditions such as cataract, hernia, joint replacements, and stones.',
          diseaseList: [
            'Cataract & eye surgeries',
            'Benign Prostatic Hypertrophy (BPH)',
            'Hernia (all types) & Hydrocele',
            'Piles, Fistula & Fissure in ano',
            'Stones in Urinary, Biliary & Renal systems',
            'Joint replacements (non-accidental)',
            'Osteoarthritis & Osteoporosis',
            'Sinusitis, DNS, Tonsillectomy & Adenoidectomy'
          ],
          policyRef: 'Niva Bupa Aspire Specific Illness Schedule',
          durationTag: '24 Months'
        },
        {
          id: 'ped',
          title: 'Pre-Existing Disease (PED) Waiting (36 Months)',
          summary: 'A waiting period of 36 months applies for pre-existing conditions declared at proposal.',
          highlight: 'Continuous policy renewals preserve PED waiting credits.',
          policyRef: 'Niva Bupa Aspire Policy Terms (Section 3.3)',
          durationTag: '36 Months'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy excludes expenses for cosmetic surgery, intentional self-injury, substance abuse, and unproven experimental treatments.',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Substance, alcohol & drug abuse rehabilitation',
            'Obesity & bariatric surgery unless life-threatening',
            'Diagnostic-only / investigation admissions',
            'Unproven / experimental treatments'
          ],
          policyRef: 'Standard IRDAI & Niva Bupa Guidelines',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important Aspire terms that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'room-rent',
          icon: '🏥',
          title: 'ANY ROOM CATEGORY & NO LIMIT ON ICU',
          paragraphs: [
            'Any room category covered with zero proportionate deduction penalties.',
            'No daily sub-limit or ceiling on ICU/ICCU charges.'
          ]
        },
        {
          id: 'pre-post',
          icon: '📅',
          title: '60 DAYS PRE & 180 DAYS POST HOSPITALIZATION',
          paragraphs: [
            'Medical expenses incurred 60 days before hospital admission and 180 days after discharge are covered.'
          ]
        },
        {
          id: 'restore',
          icon: '🔄',
          title: 'UNLIMITED RESTORATION (10+10+10.....10 LAC)',
          paragraphs: [
            'Automatically restores 100% Sum Insured unlimited times in a policy year upon exhaustion for subsequent claims.'
          ]
        },
        {
          id: 'lock-clock',
          icon: '⏰',
          title: 'LOCK THE CLOCK (PREMIUM FREEZING)',
          paragraphs: [
            'Freeze policy premium at entry age across Diamond, Platinum & Titanium+ variants until a claim is lodged.'
          ]
        }
      ]
    },

    // --- 5. POLICY BENEFITS ---
    featuresSections: [
      // -----------------------------------------------------------------------
      // CATEGORY 1: MOST IMPORTANT BENEFITS
      // -----------------------------------------------------------------------
      {
        id: 'most-important',
        title: 'MOST IMPORTANT BENEFITS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'asp-cashless',
            title: '100% Cashless Policy',
            subtitle: '100% Cashless Hospitalization Network',
            badge: '100% CASHLESS',
            iconType: 'shield',
            summary: 'Avail seamless 100% cashless hospitalization across 10,000+ top network hospitals nationwide.',
            points: [
              '100% Cashless Policy across network hospitals',
              'Direct settlement with hospital without out-of-pocket delays',
              '30-minute cashless approval speed'
            ]
          },
          {
            id: 'asp-room-icu',
            title: 'Any Room Category & No Limit ICU, Etc',
            subtitle: 'Any Room Category with No Limit on ICU Charges',
            badge: 'NO ROOM/ICU LIMIT',
            iconType: 'home',
            summary: 'Enjoy any hospital room category without daily rent capping, and complete coverage on ICU/ICCU charges up to Sum Insured.',
            points: [
              'Any Room Category covered with zero proportionate deductions',
              'No Limit on ICU, Etc charges',
              'Full coverage for doctor visits and nursing fees up to Sum Insured'
            ]
          },
          {
            id: 'asp-pre-post',
            title: 'Pre & Post Hospitalization (60 & 180 days)',
            subtitle: '60 Days Pre & 180 Days Post Hospitalization',
            badge: '60 & 180 DAYS',
            iconType: 'calendar',
            summary: 'Comprehensive coverage for medical expenses incurred 60 days before hospital admission and 180 days after hospital discharge.',
            points: [
              '60 Days Pre-Hospitalization medical expenses covered',
              '180 Days Post-Hospitalization follow-up and medicine expenses covered',
              'Diagnostic tests, consultations, and pharmacy bills included'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 2: VALUE ADDED SERVICES
      // -----------------------------------------------------------------------
      {
        id: 'value-added',
        title: 'VALUE ADDED SERVICES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'asp-unlimited-restore',
            title: 'Unlimited Restoration (10+10+10.....10 Lac)',
            subtitle: 'Unlimited Refill on Base Sum Insured',
            badge: 'UNLIMITED RESTORATION',
            iconType: 'refresh',
            summary: 'Automatically restores 100% Sum Insured unlimited times in a policy year (10+10+10.....10 Lac) upon exhaustion for subsequent claims.',
            points: [
              'Unlimited Restoration (10+10+10.....10 Lac)',
              'Recharges instantly upon partial or complete exhaustion',
              'Continuous financial security for multiple admissions in a policy year'
            ]
          },
          {
            id: 'asp-booster-plus',
            title: 'Bonus / Booster+',
            subtitle: 'Unutilised Base Sum Insured carries forward to next policy year',
            badge: 'UP TO 10X COVER',
            iconType: 'trending',
            summary: 'Unutilised Base Sum Insured carries forward to the next policy year.',
            tableData: {
              headers: ['Variant', 'Entry Age 18–35', 'Entry Age 36–45', 'Entry Age 46+'],
              rows: [
                ['Gold', 'up to 3X', 'up to 2X', 'up to 1X'],
                ['Diamond', 'up to 5X', 'up to 3X', 'up to 2X'],
                ['Platinum', 'up to 10X', 'up to 5X', 'up to 3X'],
                ['Titanium', 'up to 10X', 'up to 5X', 'up to 3X']
              ]
            },
            points: [
              'Bonus / Booster+: Unutilised Base Sum Insured carries forward to the next policy year.',
              'Gold: Entry Age 18–35 up to 3X, 36–45 up to 2X, 46+ up to 1X',
              'Diamond: Entry Age 18–35 up to 5X, 36–45 up to 3X, 46+ up to 2X',
              'Platinum & Titanium: Entry Age 18–35 up to 10X, 36–45 up to 5X, 46+ up to 3X'
            ]
          },
          {
            id: 'asp-health-checkup',
            title: 'Health Check-up: ₹5,000 from Day 1',
            subtitle: 'Comprehensive Health Check-up from Day 1',
            badge: 'DAY 1 CHECK-UP',
            iconType: 'clipboard',
            summary: 'Avail comprehensive health check-up worth ₹5,000 from Day 1 of policy inception across network diagnostic centers.',
            points: [
              'Health Check-up: ₹5,000 from Day 1',
              'Available from Day 1 across network diagnostic centers',
              'Comprehensive diagnostic screenings for preventive wellness'
            ]
          },
          {
            id: 'asp-lock-the-clock',
            title: 'Lock the Clock',
            subtitle: 'Diamond, Platinum & Titanium+: Available (Premium Freezing Option)',
            badge: 'PREMIUM FREEZE',
            iconType: 'clock',
            summary: 'Lock the Clock: Diamond, Platinum & Titanium+: Available (Premium Freezing Option), locking your premium at your entry age until first claim.',
            points: [
              'Lock the Clock: Diamond, Platinum & Titanium+: Available (Premium Freezing Option)',
              'Freezes premium rate at entry age until first claim is made',
              'Protects against age-bracket premium escalations'
            ]
          },
          {
            id: 'asp-tele-consultation',
            title: 'Tele-consultation: Unlimited',
            subtitle: 'Unlimited 24/7 Tele-Consultations',
            badge: 'UNLIMITED E-CONSULTS',
            iconType: 'phone',
            summary: 'Enjoy unlimited 24/7 digital tele-consultations and video consultations with qualified doctors.',
            points: [
              'Tele-consultation: Unlimited',
              '24/7 digital tele-consultations with general physicians and specialists',
              'Instant digital prescriptions and medical advice'
            ]
          },
          {
            id: 'asp-safeguard-plus',
            title: 'Safeguard+: Optional Rider',
            subtitle: 'Non-Payable Medical Consumables Covered',
            badge: 'OPTIONAL RIDER',
            iconType: 'shield',
            summary: 'Optional rider providing complete coverage for non-payable medical consumable items (gloves, PPE kits, syringes, etc.).',
            isRider: true,
            points: [
              'Safeguard+: Optional Rider',
              'Coverage for non-payable medical items such as gloves, syringes, and PPE kits',
              'Maximum out-of-pocket savings during hospitalisation'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 3: ADDITIONAL FEATURES
      // -----------------------------------------------------------------------
      {
        id: 'additional',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'asp-ayush',
            title: 'AYUSH Treatment (Inpatient, Pre & Post)',
            subtitle: 'Inpatient, Pre & Post AYUSH Covered',
            badge: 'AYUSH COVERED',
            iconType: 'heart',
            summary: 'Full coverage for inpatient AYUSH treatments (Ayurveda, Yoga, Unani, Siddha, Homeopathy) including pre and post hospitalization expenses.',
            points: [
              'AYUSH Treatment (Inpatient, Pre & Post) covered up to Sum Insured',
              'Ayurveda, Yoga, Unani, Siddha, and Homeopathy at recognized centers',
              'Includes pre and post hospitalization AYUSH medical expenses'
            ]
          },
          {
            id: 'asp-day-care',
            title: 'Day Care Treatment',
            subtitle: 'All Day Care Procedures Covered (<24 hrs admission)',
            badge: 'DAY CARE',
            iconType: 'activity',
            summary: 'Covers day care medical procedures requiring less than 24 hours of hospital stay.',
            points: [
              'Day Care Treatment covered up to Sum Insured',
              'All medical treatments requiring <24 hrs hospitalization',
              'Advanced procedures covered without overnight stay requirement'
            ]
          },
          {
            id: 'asp-domiciliary',
            title: 'Domiciliary Treatment',
            subtitle: 'Home Hospitalization Treatment Covered',
            badge: 'DOMICILIARY',
            iconType: 'home',
            summary: 'Medical treatment taken at home (Domiciliary Hospitalization) when hospital beds are unavailable or the patient cannot be safely moved.',
            points: [
              'Domiciliary Treatment covered up to Sum Insured',
              'Prescribed home care treatments when hospital beds are unavailable',
              'Continuous medical care under treating doctor supervision'
            ]
          },
          {
            id: 'asp-ambulance-donor',
            title: 'Ambulance & Organ Donor Expenses',
            subtitle: 'Road Ambulance & Organ Harvesting Costs Covered',
            badge: 'AMBULANCE & DONOR',
            iconType: 'truck',
            summary: 'Emergency road ambulance transportation and inpatient hospitalization expenses for organ donor during organ harvesting covered up to Sum Insured.',
            points: [
              'Ambulance & Organ Donor Expenses covered up to Sum Insured',
              'Emergency road ambulance transportation to nearest hospital',
              'Inpatient medical expenses for organ harvesting from donor covered'
            ]
          }
        ]
      }
    ]
  }
};

export const getNivaBupaPlanData = (planId) => {
  const canonicalId = resolveNivaBupaPlanId(planId);
  return NIVA_BUPA_PLANS_DATA[canonicalId] || NIVA_BUPA_PLANS_DATA.aspire;
};
