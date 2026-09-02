// =============================================================================
// TATA AIG PLANS INDEPENDENT DATA CONFIGURATION
// Flagship Plan: Tata AIG MediCare Premier
// Canonical Plan IDs: medicare-premier, medicare-select, medicare-protect, medicare-plus
// =============================================================================

export const TATA_AIG_CANONICAL_PLAN_IDS = [
  'medicare-premier',
  'medicare-select',
  'medicare-protect',
  'medicare-plus'
];

export const resolveTataAigPlanId = (planId) => {
  if (!planId) return 'medicare-premier';
  const cleanId = String(planId).toLowerCase().trim();
  if (
    cleanId === 'medicare-premier' ||
    cleanId === 'tata-medicare-premier' ||
    cleanId === 'medicare-select' ||
    cleanId === 'tata-medicare-select'
  ) {
    return 'medicare-premier';
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
  // FLAGSHIP PLAN: TATA AIG MEDICARE PREMIER
  // ===========================================================================
  'medicare-premier': {
    planId: 'medicare-premier',
    planName: 'MediCare Premier',
    fullName: 'Tata AIG MediCare Premier',
    companyName: 'Tata AIG',
    subtitle: 'Comprehensive Health Insurance with Enhanced Medical & Wellness Benefits',
    tagline: 'Comprehensive Health Insurance with Enhanced Medical & Wellness Benefits',
    coverage: '₹50 Lakh - ₹3 Crore',

    // --- PLAN-SPECIFIC UI CONFIG (TATA AIG ROYAL BLUE THEME) ---
    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
    },

    // --- 3. LIMITATIONS & WAITING PERIODS ---
    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Terms & Waiting Periods',
      description: 'Interactive policy timelines, specific disease waiting, and permanent exclusions.',
      items: [
        {
          id: 'initial',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from the policy inception date for any medical illness or hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1 with zero waiting period.',
          policyRef: 'Tata AIG MediCare Premier Policy Terms (Section 3.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific',
          title: '2 Years Waiting Period on Specific Diseases',
          summary: 'A continuous waiting period of 24 months (2 Years) applies for medical/surgical treatment of specified conditions including cataract, hernia, piles, joint replacement, stones, and sinusitis.',
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
          policyRef: 'Tata AIG MediCare Premier Policy Terms (Section 3.2)',
          durationTag: '24 Months'
        },
        {
          id: 'global-terms',
          title: 'Global Cover for Planned Hospitalization Special Condition',
          summary: 'Worldwide planned treatment cover outside India for specified critical illnesses on applicable higher tiers.',
          diseaseList: [
            'Applicable for planned hospitalization outside India',
            'Prior written intimation and approval required from insurer',
            'Applicable for critical illnesses defined in policy wording',
            'Cashless/reimbursement as per international network partner terms'
          ],
          policyRef: 'Special Condition under Global Cover for Planned Hospitalization',
          durationTag: 'Special Terms'
        },
        {
          id: 'permanent',
          title: 'Permanent Exclusions',
          summary: 'The policy does not cover expenses incurred towards treatment arising from standard permanent exclusions:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery (unless reconstructive post-accident)',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'War, nuclear or chemical contamination'
          ],
          policyRef: 'Standard IRDAI & Tata AIG Exclusion Guidelines (Section 4)',
          durationTag: 'Never Covered'
        }
      ]
    },

    // --- 4. MUST KNOW (INDEPENDENT) ---
    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key product highlights that policyholders should keep in mind',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'tier-coverage',
          icon: '🛡️',
          title: 'Coverage Tiers ₹50 Lakh to ₹3 Crore',
          summary: 'High sum insured coverage options starting from ₹50 Lakh up to ₹3 Crore for complete financial security.',
          points: [
            '₹50 Lakh base cover for extensive domestic protection',
            '₹75 Lakh, ₹1 Crore, ₹2 Crore & ₹3 Crore high-value tiers',
            'Enhanced post-hospitalization up to 200 days on ₹75L+ tiers'
          ]
        },
        {
          id: 'consumables-restoration',
          icon: '🔄',
          title: 'Consumables & Unlimited Restore',
          summary: '100% consumables coverage included up to Sum Insured with instant automatic Restore Benefit upon exhaustion.',
          points: [
            'Zero out-of-pocket payment for gloves, PPE kits, cotton & syringes',
            'Automatic 100% refill of base Sum Insured once during the policy year',
            'Applicable for unrelated illnesses during the active policy period'
          ]
        },
        {
          id: 'global-maternity',
          icon: '🌍',
          title: 'Global Cover & Enhanced Girl Child Benefits',
          summary: 'Planned worldwide treatment coverage and higher maternity & vaccination limits for birth of a girl child.',
          points: [
            'Planned overseas hospitalization up to Sum Insured as per special conditions',
            'Enhanced maternity cover up to ₹1,20,000 for a girl child',
            'Enhanced first-year vaccination limit up to ₹15,000 for a girl child'
          ]
        }
      ]
    },

    // --- 5. 4 COMPACT POLICY BENEFITS CATEGORIES (EXACT DESIGN REFERENCE) ---
    featuresSections: [
      // -----------------------------------------------------------------------
      // CATEGORY 1: MOST IMPORTANT FEATURES
      // -----------------------------------------------------------------------
      {
        id: 'most-important-features',
        title: 'MOST IMPORTANT FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'inpatient',
            title: 'In-Patient Treatment',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Full coverage for room rent, boarding expenses, nursing, ICU, medical practitioner fees, surgeon fees, operations, and medicines during hospital admission.',
            points: [
              'No sub-limit on hospital room rent category',
              'ICU charges covered up to full Sum Insured',
              'Covers all essential in-hospital medical and surgical procedures'
            ]
          },
          {
            id: 'pre-hosp',
            title: 'Pre-Hospitalization',
            subtitle: 'Up to 60 days',
            badge: 'UP TO 60 DAYS',
            iconType: 'calendar',
            summary: 'Medical expenses such as doctor consultations, diagnostic tests, and prescribed medicines incurred up to 60 days prior to hospital admission.',
            points: [
              'Doctor consultation evaluations and specialist checkups',
              'Pre-admission diagnostic scans, blood tests, and imaging',
              'Prescribed medications leading directly to hospitalization'
            ]
          },
          {
            id: 'post-hosp',
            title: 'Post-Hospitalization',
            subtitle: 'Up to 90 days (₹50L) | Up to 200 days (₹75L - ₹3Cr)',
            badge: '90 TO 200 DAYS',
            iconType: 'clock',
            summary: 'Follow-up consultations, diagnostics, physiotherapy, and recovery medicines. Covered up to 90 days for ₹50 Lakh; up to 200 days for ₹75 Lakh, ₹1 Crore, ₹2 Crore, and ₹3 Crore tiers.',
            points: [
              'Up to ₹50 Lakh tier: Up to 90 days coverage',
              '₹75 Lakh / ₹1 Crore / ₹2 Crore / ₹3 Crore tiers: Up to 200 days coverage',
              'Covers post-discharge rehabilitation and prescribed recovery medicines'
            ],
            tierData: {
              title: 'Post-Hospitalization Limits by Tier',
              tiers: [
                { tier: 'Up to ₹50 Lakh', value: 'Up to 90 days' },
                { tier: '₹75 Lakh', value: 'Up to 200 days' },
                { tier: '₹1 Crore', value: 'Up to 200 days' },
                { tier: '₹2 Crore', value: 'Up to 200 days' },
                { tier: '₹3 Crore', value: 'Up to 200 days' }
              ]
            }
          },
          {
            id: 'day-care',
            title: 'Day Care Procedures',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'activity',
            summary: 'Covers all medical surgeries and treatments that require less than 24 hours of hospital stay due to modern technological advancements.',
            points: [
              'Cataract, chemotherapy, radiotherapy, and dialysis',
              'Minor surgeries, lithotripsy, and endoscopic procedures',
              '100% coverage up to base Sum Insured'
            ]
          },
          {
            id: 'organ-donor',
            title: 'Organ Donor',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'heart',
            summary: 'In-patient medical expenses incurred by the organ donor for harvesting the organ during an authorized organ transplant surgery for the insured.',
            points: [
              'Inpatient harvesting surgery costs covered up to Sum Insured',
              'Does not reduce donor screening / medical allowances',
              'Operates seamlessly alongside the insured’s primary treatment'
            ]
          },
          {
            id: 'domiciliary',
            title: 'Domiciliary Treatment',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'home',
            summary: 'Medical treatment taken at home on doctor’s advice when the patient cannot be moved to a hospital or hospital beds are unavailable.',
            points: [
              'Home hospitalization covered up to full Sum Insured',
              'Valid when attending doctor certifies patient cannot be moved',
              'Pre and post-treatment protocols apply as per policy terms'
            ]
          },
          {
            id: 'restore',
            title: 'Restore Benefit',
            subtitle: 'Up to Sum Insured',
            badge: '100% AUTOMATIC REFILL',
            iconType: 'refresh',
            summary: 'Automatically refills 100% of the base Sum Insured once during the policy year when the base sum insured is exhausted due to previous claims.',
            points: [
              'Instant automatic restoration upon complete or partial exhaustion',
              'Available for subsequent unrelated medical hospitalizations',
              'Ensures continuous financial protection for family members'
            ]
          },
          {
            id: 'ayush',
            title: 'AYUSH Benefit',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Inpatient medical treatments taken in recognized government or NABH/QCI accredited Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy hospitals.',
            points: [
              '100% coverage up to base Sum Insured without sub-limits',
              'Must be undertaken in authorized AYUSH healthcare centers',
              'Includes holistic treatments and prescribed herbal/ayurvedic medicines'
            ]
          },
          {
            id: 'consumables',
            title: 'Consumables Benefit',
            subtitle: 'Up to Sum Insured',
            badge: '100% NON-MEDICAL ITEMS',
            iconType: 'check',
            summary: 'Covers 100% of non-medical itemized hospital expenses such as gloves, syringes, cotton, PPE kits, masks, and administrative charges without out-of-pocket deductions.',
            points: [
              'Full waiver of non-payable List I consumable items',
              'Prevents unexpected out-of-pocket bills during hospital discharge',
              'Automatically covered up to the base Sum Insured'
            ]
          },
          {
            id: 'global-cover',
            title: 'Global Cover for Planned Hospitalization',
            subtitle: 'Up to Sum Insured (View Details)',
            badge: 'WORLDWIDE COVERAGE',
            iconType: 'globe',
            hasDetailsModal: true,
            detailsModalTitle: 'Special Applicability Condition for Global Cover',
            detailsModalContent: 'Applicability subject to the special condition for Global Cover for Planned Hospitalization. Covers planned overseas medical treatments outside India for specified life-threatening critical illnesses on applicable higher sum insured tiers with prior insurer approval.',
            summary: 'Worldwide coverage for planned medical treatment outside India for specified life-threatening illnesses. Applicability subject to the special condition for Global Cover for Planned Hospitalization.',
            points: [
              'Planned overseas hospitalization covered up to full Sum Insured',
              'Applicable on eligible sum insured tiers as per policy schedule',
              'Requires prior approval from insurer as per special terms'
            ]
          },
          {
            id: 'ambulance',
            title: 'Ambulance Cover',
            subtitle: '₹5k / ₹7.5k / ₹10k / ₹20k / ₹30k according to tier',
            badge: 'TIER BASED COVERAGE',
            iconType: 'truck',
            summary: 'Road ambulance charges for emergency transfer to the nearest hospital per hospitalization according to ₹50L / ₹75L / ₹1Cr / ₹2Cr / ₹3Cr tier.',
            points: [
              '₹50 Lakh tier → Up to ₹5,000',
              '₹75 Lakh tier → Up to ₹7,500',
              '₹1 Crore tier → Up to ₹10,000',
              '₹2 Crore tier → Up to ₹20,000',
              '₹3 Crore tier → Up to ₹30,000'
            ],
            tierData: {
              title: 'Ambulance Cover Limits by Tier',
              tiers: [
                { tier: '₹50 Lakh', value: 'Up to ₹5,000' },
                { tier: '₹75 Lakh', value: 'Up to ₹7,500' },
                { tier: '₹1 Crore', value: 'Up to ₹10,000' },
                { tier: '₹2 Crore', value: 'Up to ₹20,000' },
                { tier: '₹3 Crore', value: 'Up to ₹30,000' }
              ]
            }
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 2: VALUE ADDED FEATURES
      // -----------------------------------------------------------------------
      {
        id: 'value-added-features',
        title: 'VALUE ADDED FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'maternity',
            title: 'Maternity Cover',
            subtitle: '₹50,000 – ₹1,00,000 | Girl child: ₹60,000 – ₹1,20,000',
            badge: 'GIRL CHILD ENHANCEMENT',
            iconType: 'heart',
            summary: 'Covers medical expenses incurred for normal delivery or Caesarean section hospitalization. ₹50,000 – ₹1,00,000 depending on tier; enhanced to ₹60,000 – ₹1,20,000 for birth of a girl child.',
            points: [
              'Standard tier range: ₹50,000 to ₹1,00,000 depending on tier',
              'Enhanced girl child limit: ₹60,000 to ₹1,20,000 depending on tier',
              'Covers pre and post-natal hospitalization expenses'
            ],
            tierData: {
              title: 'Maternity Limits by Tier',
              tiers: [
                { tier: '₹50 Lakh', value: '₹50,000 (Girl Child: ₹60,000)' },
                { tier: '₹75 Lakh', value: '₹75,000 (Girl Child: ₹90,000)' },
                { tier: '₹1 Crore', value: '₹1,00,000 (Girl Child: ₹1,20,000)' },
                { tier: '₹2 Crore', value: '₹1,00,000 (Girl Child: ₹1,20,000)' },
                { tier: '₹3 Crore', value: '₹1,00,000 (Girl Child: ₹1,20,000)' }
              ]
            }
          },
          {
            id: 'delivery-complications',
            title: 'Delivery Complications',
            subtitle: 'Up to ₹10,000 or ₹25,000 depending on applicable tier',
            badge: 'TIER BASED PROTECTION',
            iconType: 'shield',
            summary: 'Additional emergency coverage for medical complications arising during obstetric delivery.',
            points: [
              'Up to ₹10,000 for applicable lower tiers',
              'Up to ₹25,000 for other higher applicable tiers',
              'Covers unexpected clinical interventions during child birth'
            ]
          },
          {
            id: 'first-year-vaccination',
            title: 'First Year Vaccinations',
            subtitle: 'Up to ₹10,000 | Girl child: up to ₹15,000',
            badge: 'LIFETIME LIMIT PER CHILD',
            iconType: 'activity',
            summary: 'Covers essential infant immunization vaccines during the first year of life. Standard limit up to ₹10,000; girl child up to ₹15,000. Important: Lifetime limit per child.',
            points: [
              'Standard vaccine limit: Up to ₹10,000',
              'Enhanced girl child limit: Up to ₹15,000',
              'Lifetime limit per child, NOT per policy'
            ]
          },
          {
            id: 'second-opinion',
            title: 'Second Opinion',
            subtitle: 'Included under policy coverage',
            badge: 'INCLUDED COVERAGE',
            iconType: 'users',
            summary: 'Access to an independent second medical opinion from a global panel of leading medical specialists for major illnesses and planned surgeries.',
            points: [
              'Expert opinion from top-tier national & international specialists',
              'Zero impact on the base sum insured or no claim bonus',
              'Convenient digital review of medical records and reports'
            ]
          },
          {
            id: 'high-end-diagnostics',
            title: 'High End Diagnostics',
            subtitle: 'Up to ₹25,000 / ₹50,000 per policy year',
            badge: 'PER POLICY YEAR',
            iconType: 'cpu',
            summary: 'Outpatient coverage for high-end diagnostic tests including MRI scans, CT scans, PET scans, angiography, and specialized molecular diagnostics.',
            points: [
              'Up to ₹25,000 or ₹50,000 per policy year depending on plan/tier',
              'Covers advanced imaging and specialized molecular diagnostics',
              'No 24-hour hospitalization required for diagnostic reimbursement'
            ]
          },
          {
            id: 'opd-treatment',
            title: 'OPD Treatment',
            subtitle: 'Up to ₹5,000 / ₹7,500 / ₹10,000 / ₹15,000 / ₹20,000 per year',
            badge: 'TIER BASED OPTIONS',
            iconType: 'users',
            summary: 'Outpatient consultation and pharmacy reimbursement covering routine doctor visits, diagnostics, and prescribed medicines on annual policy year basis.',
            points: [
              'Coverage options: Up to ₹5,000 / ₹7,500 / ₹10,000 / ₹15,000 / ₹20,000',
              'Reimburses routine clinic consultations and pharmacy bills',
              'Available on an annual policy year basis depending on tier'
            ],
            tierData: {
              title: 'OPD Treatment Limits by Tier',
              tiers: [
                { tier: 'Option 1', value: 'Up to ₹5,000' },
                { tier: 'Option 2', value: 'Up to ₹7,500' },
                { tier: 'Option 3', value: 'Up to ₹10,000' },
                { tier: 'Option 4', value: 'Up to ₹15,000' },
                { tier: 'Option 5', value: 'Up to ₹20,000' }
              ]
            }
          },
          {
            id: 'opd-dental',
            title: 'OPD Dental',
            subtitle: 'Up to ₹10,000 / ₹12,500 / ₹15,000 / ₹20,000 / ₹25,000 per year',
            badge: 'DENTAL OPD OPTIONS',
            iconType: 'smile',
            summary: 'Dedicated dental OPD cover for routine and specialized oral treatments including root canal treatments, fillings, extractions, and crown fittings.',
            points: [
              'Coverage options: Up to ₹10,000 / ₹12,500 / ₹15,000 / ₹20,000 / ₹25,000',
              'Covers dental consultations, X-rays, and routine procedures',
              'Per policy year benefit limit depending on tier'
            ],
            tierData: {
              title: 'OPD Dental Limits by Tier',
              tiers: [
                { tier: 'Option 1', value: 'Up to ₹10,000' },
                { tier: 'Option 2', value: 'Up to ₹12,500' },
                { tier: 'Option 3', value: 'Up to ₹15,000' },
                { tier: 'Option 4', value: 'Up to ₹20,000' },
                { tier: 'Option 5', value: 'Up to ₹25,000' }
              ]
            }
          },
          {
            id: 'prolonged-hosp',
            title: 'Prolonged Hospitalization',
            subtitle: '1% of Total Sum Insured',
            badge: '1% OF SUM INSURED',
            iconType: 'clock',
            summary: 'Fixed financial lump-sum compensation paid when the insured undergoes continuous hospital stay exceeding the minimum prescribed policy duration.',
            points: [
              '1% of total base Sum Insured paid out',
              'Helps offset ancillary non-medical and recovery expenses',
              'Paid in addition to all eligible hospital claim settlements'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 3: ADDITIONAL FEATURES
      // -----------------------------------------------------------------------
      {
        id: 'additional-features',
        title: 'ADDITIONAL FEATURES',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'air-ambulance',
            title: 'Emergency Air Ambulance',
            subtitle: 'Out-of-network: Up to ₹5,00,000 | Network: Up to Sum Insured',
            badge: 'HIGH VALUE RESCUE',
            iconType: 'truck',
            summary: 'Emergency aero-medical evacuation services to transport the critically ill or injured patient to the nearest specialized tertiary care center.',
            points: [
              'Out-of-network providers → Up to ₹5,00,000',
              'Network provider → Up to full Sum Insured',
              'Includes emergency aircraft and chartered medical helicopter transfer'
            ]
          },
          {
            id: 'accidental-death',
            title: 'Accidental Death Benefit',
            subtitle: '100% of Base Sum Insured OR ₹50,00,000',
            badge: '100% BASE SI OR ₹50L',
            iconType: 'shield',
            summary: 'Lump sum compensation provided to designated nominees in the unfortunate event of accidental demise of the primary policyholder.',
            points: [
              '100% of Base Sum Insured or flat ₹50,00,000 depending on plan structure',
              'Provides essential financial security to the bereaved family',
              'Operates alongside all existing health hospitalization covers'
            ]
          },
          {
            id: 'home-care',
            title: 'Home Care Treatment',
            subtitle: 'Dialysis & Chemo: Up to SI | Pandemic: Up to 25% SI',
            badge: 'HIGHER TIERS',
            iconType: 'home',
            summary: 'Specialized at-home medical treatments for higher applicable tiers: Home Dialysis up to SI, Home Chemotherapy up to SI, Pandemic Care at Home up to 25% of SI (max 15 days/year).',
            points: [
              'Home Dialysis → Up to Sum Insured',
              'Home Chemotherapy → Up to Sum Insured',
              'Pandemic Care at Home → Up to 25% of Sum Insured (max 15 days/year)',
              'Available on higher applicable tiers'
            ]
          },
          {
            id: 'no-claim-bonus',
            title: 'No Claim Bonus',
            subtitle: '50% of Base SI per year (Max 100%) OR 1% Renewal Discount',
            badge: 'UP TO 100% BONUS',
            iconType: 'trending',
            summary: '50% of Base Sum Insured for every claim-free year up to maximum 100%. 50% reduction after claim as applicable, OR 1% renewal premium discount.',
            points: [
              '50% increase in base Sum Insured for each claim-free year',
              'Maximum cumulative bonus capped at 100% (doubles your base cover)',
              '50% reduction after claim as applicable',
              'Alternative option: 1% discount on renewal premium (no pricing shown)'
            ]
          },
          {
            id: 'hearing-aid',
            title: 'Hearing Aid',
            subtitle: '50% of actuals, Maximum ₹10,000 per policy',
            badge: '50% OF ACTUALS',
            iconType: 'activity',
            summary: 'Covers the cost of hearing aid devices up to 50% of actual expenses, subject to a maximum limit of ₹10,000 per policy.',
            points: [
              '50% of actual hearing aid purchase expenses covered',
              'Maximum limit: ₹10,000 per policy',
              'Payable once during the policy period as per doctor prescription'
            ]
          },
          {
            id: 'shared-room-cash',
            title: 'Daily Cash — Shared Accommodation',
            subtitle: '0.25% of Base Sum Insured, Maximum ₹2,000/day',
            badge: '0.25% OF BASE SI',
            iconType: 'dollar',
            summary: 'Daily cash allowance paid directly to the insured when opting for a shared hospital accommodation instead of a private room.',
            points: [
              '0.25% of Base Sum Insured per day of hospitalization',
              'Maximum cap: ₹2,000 per day',
              'Direct cash benefit paid in addition to hospitalization claim'
            ]
          },
          {
            id: 'child-accompany-cash',
            title: 'Daily Cash — Accompanying Insured Child',
            subtitle: '0.25% of Base Sum Insured, Maximum ₹2,000/day',
            badge: '0.25% OF BASE SI',
            iconType: 'dollar',
            summary: 'Daily cash allowance to support a parent or legal guardian staying alongside an insured child undergoing hospital admission.',
            points: [
              '0.25% of Base Sum Insured per day',
              'Maximum cap: ₹2,000 per day',
              'Financial assistance for parents during pediatric hospital stay'
            ]
          },
          {
            id: 'bariatric',
            title: 'Bariatric Surgery',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'activity',
            summary: 'Covers bariatric metabolic surgery expenses for severe life-threatening obesity when prescribed by a medical practitioner as per clinical guidelines.',
            points: [
              'Covers surgical costs up to the full Sum Insured',
              'Subject to policy BMI and medical necessity criteria',
              'Helps treat severe obesity-related co-morbidities'
            ]
          },
          {
            id: 'dental-inpatient',
            title: 'In-patient Dental',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'smile',
            summary: 'Inpatient dental treatments and surgeries required under general anesthesia arising from accidental physical injuries.',
            points: [
              'Inpatient dental surgery covered up to Sum Insured',
              'Arising from accidental trauma or medically necessary hospital stay',
              'Covers surgeon, anesthesia, and medication charges'
            ]
          },
          {
            id: 'vaccination-cover',
            title: 'Vaccination Cover',
            subtitle: 'Up to Sum Insured',
            badge: 'UP TO SUM INSURED',
            iconType: 'shield',
            summary: 'Essential preventive vaccination coverage covered under policy guidelines to safeguard insured family members against critical infectious diseases.',
            points: [
              'Covers standard preventive pediatric and adult vaccines',
              'Subject to policy terms and approved clinical schedules',
              'Helps build long-term immunization protection'
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CATEGORY 4: WELLNESS & LIFESTYLE
      // -----------------------------------------------------------------------
      {
        id: 'wellness-lifestyle',
        title: 'WELLNESS & LIFESTYLE',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        items: [
          {
            id: 'teleconsult-gen',
            title: 'General Teleconsultation',
            subtitle: 'Unlimited',
            badge: 'UNLIMITED 24/7',
            iconType: 'activity',
            summary: 'Instant 24/7 access to qualified general physicians via video/audio calls.',
            points: [
              'Unlimited consultations anytime from home',
              'Instant prescription and medical advice',
              'Zero out-of-pocket charges'
            ]
          },
          {
            id: 'teleconsult-spec',
            title: 'Specialist Teleconsultation',
            subtitle: 'Unlimited',
            badge: 'UNLIMITED SPECIALISTS',
            iconType: 'users',
            summary: 'Direct digital consultations with certified medical specialists across domains.',
            points: [
              'Cardiologists, dermatologists, pediatricians & more',
              'Convenient appointment scheduling',
              'Digital record sharing and review'
            ]
          },
          {
            id: 'condition-mgmt',
            title: 'Health Condition Management',
            subtitle: 'Diet, weight and stress management programs',
            badge: 'PROGRAMS INCLUDED',
            iconType: 'clipboard',
            summary: 'Structured programs for diet, weight, stress, and chronic condition management.',
            points: [
              'Tailored nutrition coaching with dieticians',
              'Weight and metabolic fitness tracking',
              'Mindfulness and stress alleviation modules'
            ]
          },
          {
            id: 'wellness-rewards',
            title: 'Wellness Rewards',
            subtitle: 'Earn and utilize rewards',
            badge: 'REWARD PROGRAM',
            iconType: 'award',
            summary: 'Earn and utilize reward points through active health habits, steps, and checkups.',
            points: [
              'Step tracking and fitness goals incentives',
              'Annual preventive check-up bonus points',
              'Seamless digital redemption wallet'
            ]
          },
          {
            id: 'reward-utilization',
            title: 'Reward Utilization',
            subtitle: 'OPD, treatments, pharma, check-ups & diagnostics',
            badge: 'MULTI-CATEGORY',
            iconType: 'credit',
            summary: 'Reward utilization for OPD consultations, treatments, pharmaceuticals, health check-ups, and diagnostics.',
            points: [
              'OPD doctor consultations and specialist fees',
              'Prescribed treatments and clinical therapies',
              'Doorstep pharmacy orders & diagnostic scans'
            ]
          },
          {
            id: 'hra',
            title: 'Health Risk Assessment',
            subtitle: 'Included under Wellness Program',
            badge: 'INCLUDED',
            iconType: 'check',
            summary: 'Comprehensive Health Risk Assessment to evaluate baseline wellness and biometric indicators.',
            points: [
              'Personalized health report card',
              'Actionable lifestyle recommendations',
              'Benchmarked annual health tracking'
            ]
          },
          {
            id: 'ambulance-booking',
            title: 'Ambulance Booking',
            subtitle: 'Facility available through Wellness Services',
            badge: 'CONCIERGE FACILITY',
            iconType: 'truck',
            summary: 'Priority ambulance booking facility available through Wellness Services.',
            points: [
              'Fast emergency ambulance coordination',
              'Network hospital routing support',
              '24/7 dedicated helpline'
            ]
          },
          {
            id: 'emergency-help',
            title: 'Emergency Help',
            subtitle: 'Emergency assistance feature',
            badge: 'ONE-TOUCH SOS',
            iconType: 'zap',
            summary: 'Dedicated emergency assistance feature for immediate hospital coordination.',
            points: [
              'One-touch SOS button in mobile app',
              'Instant emergency contact alert',
              'Cashless hospitalization guidance'
            ]
          }
        ]
      }
    ],

    // TIER-WISE COVERAGE MATRIX (FOR COMPACT POPUP/MODAL)
    coverageTierMatrix: {
      columns: ['Benefit', '₹50 Lakh', '₹75 Lakh', '₹1 Crore', '₹2 Crore', '₹3 Crore'],
      rows: [
        {
          benefit: 'Ambulance Cover (per hospitalization)',
          t50L: '₹5,000',
          t75L: '₹7,500',
          t1Cr: '₹10,000',
          t2Cr: '₹20,000',
          t3Cr: '₹30,000'
        },
        {
          benefit: 'Health Check-up (cashless basis)',
          t50L: '1% of SI, max ₹10,000',
          t75L: '1% of SI, max ₹15,000',
          t1Cr: '1% of SI, max ₹20,000',
          t2Cr: '1% of SI, max ₹25,000',
          t3Cr: '1% of SI, max ₹25,000'
        },
        {
          benefit: 'Compassionate Travel (per policy year)',
          t50L: '₹20,000',
          t75L: '₹50,000',
          t1Cr: '₹50,000',
          t2Cr: '₹50,000',
          t3Cr: '₹50,000'
        },
        {
          benefit: 'Post-Hospitalization Expenses',
          t50L: 'Up to 90 days',
          t75L: 'Up to 200 days',
          t1Cr: 'Up to 200 days',
          t2Cr: 'Up to 200 days',
          t3Cr: 'Up to 200 days'
        },
        {
          benefit: 'Maternity Cover (Standard / Girl Child)',
          t50L: '₹50,000 / ₹60,000',
          t75L: '₹75,000 / ₹90,000',
          t1Cr: '₹1,00,000 / ₹1,20,000',
          t2Cr: '₹1,00,000 / ₹1,20,000',
          t3Cr: '₹1,00,000 / ₹1,20,000'
        },
        {
          benefit: 'Delivery Complications Cover',
          t50L: 'Up to ₹10,000',
          t75L: 'Up to ₹10,000',
          t1Cr: 'Up to ₹25,000',
          t2Cr: 'Up to ₹25,000',
          t3Cr: 'Up to ₹25,000'
        },
        {
          benefit: 'High End Diagnostics',
          t50L: 'Up to ₹25,000',
          t75L: 'Up to ₹25,000',
          t1Cr: 'Up to ₹50,000',
          t2Cr: 'Up to ₹50,000',
          t3Cr: 'Up to ₹50,000'
        },
        {
          benefit: 'Hearing Aid',
          t50L: '50% (Max ₹10,000)',
          t75L: '50% (Max ₹10,000)',
          t1Cr: '50% (Max ₹10,000)',
          t2Cr: '50% (Max ₹10,000)',
          t3Cr: '50% (Max ₹10,000)'
        },
        {
          benefit: 'Daily Cash — Shared Accommodation',
          t50L: '0.25% of SI (Max ₹2,000/day)',
          t75L: '0.25% of SI (Max ₹2,000/day)',
          t1Cr: '0.25% of SI (Max ₹2,000/day)',
          t2Cr: '0.25% of SI (Max ₹2,000/day)',
          t3Cr: '0.25% of SI (Max ₹2,000/day)'
        },
        {
          benefit: 'Daily Cash — Accompanying Child',
          t50L: '0.25% of SI (Max ₹2,000/day)',
          t75L: '0.25% of SI (Max ₹2,000/day)',
          t1Cr: '0.25% of SI (Max ₹2,000/day)',
          t2Cr: '0.25% of SI (Max ₹2,000/day)',
          t3Cr: '0.25% of SI (Max ₹2,000/day)'
        }
      ]
    }
  },

  // ===========================================================================
  // PLAN 2: MEDICARE SELECT (LEGACY ALIAS)
  // ===========================================================================
  'medicare-select': {
    planId: 'medicare-select',
    planName: 'MediCare Select',
    fullName: 'Tata AIG MediCare Select',
    companyName: 'Tata AIG',
    subtitle: 'Comprehensive Inpatient Hospitalisation & Restoration',
    tagline: 'Comprehensive Inpatient Hospitalisation & Restoration',
    coverage: '₹5 Lakh - ₹50 Lakh',
    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },

  // ===========================================================================
  // PLAN 3: MEDICARE PROTECT
  // ===========================================================================
  'medicare-protect': {
    planId: 'medicare-protect',
    planName: 'MediCare Protect',
    fullName: 'Tata AIG MediCare Protect',
    companyName: 'Tata AIG',
    subtitle: 'Standard essential coverage covering hospitalization and recovery benefits',
    tagline: 'Standard essential coverage covering hospitalization and recovery benefits',
    coverage: '₹5 Lakh - ₹20 Lakh',
    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },

  // ===========================================================================
  // PLAN 4: MEDICARE PLUS (SUPER TOP-UP)
  // ===========================================================================
  'medicare-plus': {
    planId: 'medicare-plus',
    planName: 'MediCare Plus',
    fullName: 'Tata AIG MediCare Plus',
    companyName: 'Tata AIG',
    subtitle: 'High-value super top-up plan to secure extra coverage over your base policy',
    tagline: 'High-value super top-up plan to secure extra coverage over your base policy',
    coverage: '₹10 Lakh - ₹1 Crore',
    uiConfig: {
      primaryColor: '#0038A8',
      accentColor: '#0038A8',
      lightBg: '#F0F4FF',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  }
};

export const getTataAigPlanData = (planId) => {
  const canonicalId = resolveTataAigPlanId(planId);
  return TATA_AIG_PLANS_DATA[canonicalId] || TATA_AIG_PLANS_DATA['medicare-premier'];
};
