// =============================================================================
// STAR HEALTH SUPER STAR — 5 VARIANTS COMPREHENSIVE DATA
// Variants: Classic, Secure, Preferred, Essential, Value Plus
// =============================================================================

export const STAR_HEALTH_SHARED_REPORT_CARD = {
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
};

export const STAR_HEALTH_SHARED_COMPANY_STRENGTH = {
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
};

// =============================================================================
// METADATA FOR 5 SUPER STAR VARIANTS
// =============================================================================
export const SUPER_STAR_VARIANTS_META = [
  {
    id: 'star-super-star-classic',
    variantKey: 'classic',
    name: 'Classic',
    fullName: 'Star Health Super Star — Classic',
    tagline: 'Timeless comprehensive protection with 90/180 pre & post hospitalization, Limitless Care and Freeze Your Age.',
    coverage: '₹5 Lakh - ₹1 Crore',
    badge: 'CLASSIC COVER',
    popular: false,
    highlights: [
      'Room Rent: Any Room (SI ≥ ₹7.5L) | Single Private AC Room (SI ₹5L)',
      'Pre & Post Hospitalization: 90 Days Pre & 180 Days Post covered',
      'Limitless Care: One unlimited claim in lifetime (from ₹10L SI)',
      'Freeze Your Age up to 50 years & Automatic Restoration 100% unlimited times'
    ]
  },
  {
    id: 'star-super-star-secure',
    variantKey: 'secure',
    name: 'Secure',
    fullName: 'Star Health Super Star — Secure',
    tagline: 'High-security coverage with Any Room, Unlimited Sum Insured option, Limitless Loyalty Bonus & DME.',
    coverage: '₹7.5 Lakh - Unlimited',
    badge: 'HIGH SECURITY',
    popular: true,
    highlights: [
      'Room Rent: Any Room across all Sum Insured tiers with zero restriction',
      'Limitless Loyalty Bonus: 100% additional SI every renewal irrespective of claims',
      'Unlimited Sum Insured tier available (up to age 60)',
      'Durable Medical Equipment (up to ₹1 Lakh) & Inbuilt Consumables (68 items)'
    ]
  },
  {
    id: 'star-super-star-preferred',
    variantKey: 'preferred',
    name: 'Preferred',
    fullName: 'Star Health Super Star — Preferred',
    tagline: 'Elite coverage with Limitless Loyalty Bonus, first-year base Premium Return after 5 claim-free years & Health Booster.',
    coverage: '₹7.5 Lakh - Unlimited',
    badge: 'PREMIUM RETURN',
    popular: false,
    highlights: [
      'Premium Return: 1st year base premium refunded after 5 claim-free years',
      'Room Rent: Any Room with zero restriction across all Sum Insured tiers',
      'Limitless Loyalty Bonus: 100% additional SI every renewal irrespective of claims',
      'Health Booster: 100% base SI additionally for every 7 claim-free years'
    ]
  },
  {
    id: 'star-super-star-essential',
    variantKey: 'essential',
    name: 'Essential',
    fullName: 'Star Health Super Star — Essential',
    tagline: 'Cost-effective coverage tailored for Zones B & C with Single Private AC room, Premium Return & DME.',
    coverage: '₹5 Lakh - ₹10 Lakh',
    badge: 'ZONES B & C',
    popular: false,
    highlights: [
      'Room Rent: Single Private AC Room',
      'Zone-specific pricing for Zones B & C (Excludes HR, Indore, MH, TG, KL)',
      'Premium Return: 1st year base premium refunded after 5 claim-free years',
      'Pre & Post Hospitalization: 30 Days Pre & 60 Days Post covered'
    ]
  },
  {
    id: 'star-super-star-value-plus',
    variantKey: 'value-plus',
    name: 'Value Plus',
    fullName: 'Star Health Super Star — Value Plus',
    tagline: 'High-value smart coverage with boarding up to ₹5,000/day, Premium Return, Consumables & up to 12.5% long-term discount.',
    coverage: '₹7.5 Lakh - ₹25 Lakh',
    badge: 'SMART VALUE',
    popular: false,
    highlights: [
      'Boarding up to ₹5,000/day (Optional single private room modification)',
      'Premium Return: 1st year base premium refunded after 5 claim-free years',
      'Inbuilt Consumables Cover & Durable Medical Equipment up to ₹1 Lakh',
      'Value Network co-pay: 0% in network, 15% outside network'
    ]
  }
];

// =============================================================================
// SUPER STAR VARIANTS INDEPENDENT DATA DICTIONARY
// =============================================================================
export const SUPER_STAR_VARIANTS_DATA = {
  // ===========================================================================
  // 1. CLASSIC
  // ===========================================================================
  'star-super-star-classic': {
    planId: 'star-super-star-classic',
    parentPlanId: 'star-super-star',
    variantName: 'Classic',
    planName: 'Super Star Classic',
    fullName: 'Star Health Super Star — Classic',
    companyName: 'Star Health',
    tagline: 'Comprehensive Classic Coverage with 90/180 Days Pre & Post Hospitalization, Limitless Care & Freeze Your Age',
    coverage: '₹5 Lakh - ₹1 Crore',
    premium: '₹12,800/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
    companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Super Star Classic Policy Timelines',
      description: 'Waiting periods, eligibility limits and exclusions for Classic variant.',
      items: [
        {
          id: 'initial-waiting',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalizations are covered from Day 1 with zero waiting period.',
          policyRef: 'Super Star Classic Policy Schedule (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific-diseases',
          title: '24 Months Specified Diseases Waiting Period',
          summary: 'A continuous waiting period of 24 months applies for medical or surgical treatment of specified conditions including cataract, hernia, joint replacements, and benign tumors.',
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
            'Benign cysts, nodules, polyps & tumors'
          ],
          policyRef: 'Super Star Classic Policy Terms (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped-waiting',
          title: '36 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 36 months of continuous coverage applies for pre-existing medical conditions declared at inception (unless covered earlier via Quick Shield optional cover).',
          highlight: 'Quick Shield optional cover allows specified PEDs (Diabetes II, Hypertension, Hyperlipidemia, Asthma, CAD with PTCA >1 yr) to be covered from 31st day.',
          policyRef: 'Super Star Classic Policy Terms (Section 4.3)',
          durationTag: '36 Months'
        },
        {
          id: 'si-age-limit',
          title: '100 Lakh Sum Insured Entry Age Limit',
          summary: '₹100 Lakh (1 Crore) Sum Insured can be offered only up to 60 years of entry age.',
          highlight: 'Entry age beyond 60 years is eligible for Sum Insured up to ₹50 Lakh.',
          policyRef: 'Super Star Classic Underwriting Terms (Section 2.3)',
          durationTag: 'Entry ≤ 60 Yrs'
        },
        {
          id: 'permanent-exclusions',
          title: 'Permanent Exclusions',
          summary: 'Medical expenses incurred towards hospitalisation or treatment of the following are permanently excluded:',
          exclusionsList: [
            'Cosmetic, aesthetic & plastic surgery',
            'Intentional self-injury & suicide attempt',
            'Alcohol, drug or substance abuse treatments',
            'Investigation & diagnostic-only admissions',
            'Rest cure, rehabilitation & respite care',
            'Unproven / experimental treatments',
            'Participation in hazardous adventure sports',
            'Expenses arising from breach of law'
          ],
          policyRef: 'Standard IRDAI Guidelines & Policy Schedule',
          durationTag: 'Never Covered'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important Super Star Classic policy conditions and benefits',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'eligibility-classic',
          icon: '👥',
          title: 'ELIGIBILITY & FAMILY DEFINITION',
          paragraphs: [
            'Individual Sum Insured: 18 years to Any Age.',
            'Floater: Adults 18 years to Any Age; Dependent Children 91 days to 25 years.',
            'Family Size: Up to 2 Adults + 4 Children (Self, Spouse & Dependent Children).'
          ]
        },
        {
          id: 'sum-insured-zones',
          icon: '📍',
          title: 'SUM INSURED & ZONE OPTIONS',
          paragraphs: [
            'Zone A: 7.5L, 10L, 15L, 20L, 25L, 50L, 1 Cr.',
            'Zone B & C: 5L, 7.5L, 10L, 15L, 20L, 25L, 50L, 1 Cr.',
            'Note: 100 Lakh SI can be offered only up to 60 years of entry age.'
          ]
        },
        {
          id: 'room-rent-rules',
          icon: '🏥',
          title: 'ROOM RENT RULES',
          paragraphs: [
            'Sum Insured ₹7.5 Lakh and above: Any Room with zero room rent capping.',
            'Sum Insured ₹5 Lakh: Single Private AC Room.'
          ]
        },
        {
          id: 'limitless-care-freeze',
          icon: '⭐',
          title: 'LIMITLESS CARE & FREEZE YOUR AGE',
          paragraphs: [
            'Limitless Care: One unlimited claim cover in lifetime of policy for in-patient/day-care treatment (available from ₹10L SI).',
            'Freeze Your Age: Premium fixed based on entry age until first hospitalization/day-care claim (available up to 50 years).'
          ]
        }
      ]
    },

    featuresSections: [
      {
        id: 'base-covers',
        title: 'BASE COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'classic-room-rent',
            title: 'Room Rent',
            subtitle: 'Any Room (≥₹7.5L SI) / Single Private AC Room (₹5L SI)',
            badge: 'ANY ROOM / SINGLE AC',
            iconType: 'home',
            summary: 'Sum Insured ₹7.5 Lakh and above provides Any Room with no capping. Sum Insured ₹5 Lakh provides Single Private AC Room.',
            points: [
              'SI ₹7.5L and above: Any Room with no proportionate deductions',
              'SI ₹5L: Single Private AC Room',
              'Boarding, nursing, ICU and specialist fees covered up to Sum Insured'
            ]
          },
          {
            id: 'classic-pre-post',
            title: 'Pre & Post Hospitalization: 90 & 180 Days',
            subtitle: 'Extended 90 Days Pre & 180 Days Post Cover',
            badge: '90 & 180 DAYS',
            iconType: 'calendar',
            summary: 'Pre-hospitalization medical expenses incurred 90 days before admission and post-hospitalization recovery expenses incurred 180 days after discharge are covered.',
            points: [
              'Pre-hospitalization: 90 days covered',
              'Post-hospitalization: 180 days covered',
              'Covers diagnostic tests, specialist consultations, and medications'
            ]
          },
          {
            id: 'classic-day-care',
            title: 'All Day Care Treatments',
            subtitle: 'Covered up to Sum Insured',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All Day Care procedures and surgeries requiring less than 24 hours of hospital stay are fully covered up to Sum Insured.',
            points: [
              'All Day Care Treatments covered up to Sum Insured',
              'Technologically advanced daycare surgeries included with zero 24-hr stay restriction'
            ]
          },
          {
            id: 'classic-modern-ayush',
            title: 'Modern Treatments & AYUSH',
            subtitle: 'Robotic Surgeries & AYUSH Inpatient Covered',
            badge: 'COVERED UP TO SI',
            iconType: 'cpu',
            summary: 'Advanced modern treatments (robotic surgeries, stem cell therapy, immunotherapy) and AYUSH inpatient treatments are covered up to Sum Insured.',
            points: [
              'Modern Treatments: Covered up to Sum Insured',
              'AYUSH Treatments (Ayurveda, Unani, Siddha, Homeopathy): Covered up to Sum Insured'
            ]
          },
          {
            id: 'classic-ambulance',
            title: 'Road & Air Ambulance',
            subtitle: 'Road Covered up to SI, Air up to ₹5 Lakh/yr',
            badge: 'AIR & ROAD',
            iconType: 'truck',
            summary: 'Road ambulance is covered up to Sum Insured. Air ambulance is covered up to ₹5 Lakh per policy year for emergency life-threatening transport.',
            points: [
              'Road Ambulance: Covered up to Sum Insured',
              'Air Ambulance: Up to ₹5 Lakh in a policy year'
            ]
          },
          {
            id: 'classic-organ-donor',
            title: 'Organ Donor Expenses',
            subtitle: 'Including Post-Donation Complications',
            badge: 'DONOR COVERED',
            iconType: 'heart',
            summary: 'In-patient hospitalisation expenses incurred for harvesting the organ from a living donor are covered up to Sum Insured, including donor post-donation complications.',
            points: [
              'Organ harvesting expenses covered up to Sum Insured',
              'Includes donor post-donation complications cover'
            ]
          },
          {
            id: 'classic-home-domiciliary',
            title: 'Home Care & Domiciliary Hospitalization',
            subtitle: 'Covered up to Sum Insured',
            badge: 'HOME CARE',
            iconType: 'home',
            summary: 'Home Care treatment for designated illnesses and domiciliary hospitalization exceeding 3 days are covered up to Sum Insured.',
            points: [
              'Home Care Treatment: Covered up to Sum Insured',
              'Domiciliary Hospitalization: Covered up to Sum Insured'
            ]
          },
          {
            id: 'classic-restoration',
            title: 'Automatic Restoration: 100% Unlimited Times',
            subtitle: 'Unlimited Restorations for Related & Unrelated Illnesses',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Automatic restoration of up to 100% Sum Insured triggers unlimited times in a policy year for both related and unrelated illnesses upon exhaustion.',
            points: [
              'Restores 100% Sum Insured unlimited times in a policy year',
              'Available for both related and unrelated illnesses'
            ]
          },
          {
            id: 'classic-cumulative-bonus',
            title: 'Cumulative Bonus: 50% per year, max 100%',
            subtitle: 'Doubles Sum Insured in 2 Claim-Free Years',
            badge: '50% TO 100%',
            iconType: 'trending',
            summary: 'Cumulative Bonus increases your base Sum Insured by 50% after each claim-free renewal, scaling up to a maximum of 100% of Sum Insured.',
            points: [
              '50% cumulative bonus after each claim-free year',
              'Reaches maximum 100% bonus in just 2 claim-free renewals'
            ]
          },
          {
            id: 'classic-premium-waiver',
            title: 'Premium Waiver Benefit',
            subtitle: '1 Year Premium Waived on Critical Illness / Accidental Death',
            badge: 'PREMIUM WAIVER',
            iconType: 'shield',
            summary: 'One year policy premium is waived if the proposer (who is also an insured person) is diagnosed with a listed critical illness or passes away due to an accident.',
            points: [
              'One year premium waived for entire policy',
              'Triggers on diagnosis of listed critical illness or accidental death of proposer'
            ]
          },
          {
            id: 'classic-second-opinion',
            title: 'E-Domestic Second Medical Opinion',
            subtitle: 'Available Through Star Health Network Doctors',
            badge: 'SECOND OPINION',
            iconType: 'clipboard',
            summary: 'E-Domestic Second Medical Opinion is available through network medical experts based on submitted medical history and diagnostics.',
            points: [
              'Domestic second opinion through network specialists',
              'Available digitally through Star Health tele-health platform'
            ]
          },
          {
            id: 'classic-dental',
            title: 'Dental Check-up & Cleaning',
            subtitle: 'Covered in 2nd & 3rd Policy Years (Cashless)',
            badge: 'DENTAL CARE',
            iconType: 'smile',
            summary: 'Consultation, IOPA X-Ray, and Scaling for one person under each policy in the 2nd and 3rd policy years on a cashless basis.',
            points: [
              'Includes consultation, IOPA X-Ray, and scaling',
              'Available in 2nd and 3rd policy years on cashless basis'
            ]
          }
        ]
      },
      {
        id: 'additional-covers',
        title: 'ADDITIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'classic-limitless-care',
            title: 'Limitless Care',
            subtitle: 'One Unlimited Claim Cover in Policy Lifetime (from ₹10L SI)',
            badge: 'LIMITLESS CARE',
            iconType: 'zap',
            summary: 'Provides one unlimited claim cover in the entire lifetime of the policy for in-patient or day-care treatment. Available for Sum Insured options from ₹10 Lakh onwards.',
            points: [
              'One unlimited claim in lifetime of policy for inpatient/daycare',
              'Available from ₹10 Lakh Sum Insured'
            ]
          },
          {
            id: 'classic-freeze-age',
            title: 'Freeze Your Age',
            subtitle: 'Lock Premium to Entry Age until First Claim (up to age 50)',
            badge: 'FREEZE AGE',
            iconType: 'clock',
            summary: 'Premium is calculated based on entry age until the first hospitalization or day-care claim is made. Available for entry age up to 50 years.',
            points: [
              'Fixes renewal premium at entry age bracket',
              'Remains locked until first hospitalization/daycare claim occurs',
              'Available for customers entering up to 50 years'
            ]
          },
          {
            id: 'classic-consumables',
            title: 'Consumables Cover',
            subtitle: '68 Non-Payable Listed Items Covered',
            badge: 'CONSUMABLES',
            iconType: 'shield',
            summary: 'Covers 68 non-payable medical items, surgical disposables, gloves, and PPE kits under admissible claims.',
            points: [
              '68 non-payable consumable items covered',
              'Eliminates common hospital deduction charges'
            ]
          },
          {
            id: 'classic-wellness-healthcheck',
            title: 'Annual Health Check-up & STAR Wellness',
            subtitle: 'Health Check-up up to 1% or ₹25k & up to 20% Discount',
            badge: 'WELLNESS & CHECK-UP',
            iconType: 'heart',
            summary: 'Annual health check-up up to 1% of Sum Insured or ₹25,000, whichever is lower, in a policy year including vaccinations (if chosen within 3 yrs). Earn 1,000+ points on Star Wellness for up to 20% renewal discount.',
            points: [
              'Health check-up up to 1% of SI or ₹25,000 max per year',
              'Includes vaccinations if chosen within the first 3 years',
              'Star Wellness Program: Over 1,000 points annually for up to 20% renewal premium discount',
              'E-International Second Opinion: Once per policy year for each insured person'
            ]
          }
        ]
      },
      {
        id: 'optional-covers',
        title: 'OPTIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'classic-quick-shield',
            title: 'Quick Shield',
            subtitle: 'Specified PEDs Covered from Day 31',
            badge: 'PED FROM DAY 31',
            isRider: true,
            iconType: 'shield',
            summary: 'Reduces waiting period for specified pre-existing diseases from 36 months to just 30 days. Covered from 31st day: Diabetes II, Hypertension, Hyperlipidemia, Asthma, and CAD with PTCA done > 1 year ago.',
            points: [
              'Diabetes II, Hypertension, Hyperlipidemia & Asthma covered from 31st day',
              'Coronary Artery Disease (CAD) with PTCA done prior to 1 year covered from 31st day',
              'Waives standard 36-month PED waiting period for listed conditions'
            ]
          },
          {
            id: 'classic-maternity',
            title: 'Maternity Expenses',
            subtitle: '₹50,000 / ₹1 Lakh with 24-Month Waiting Period',
            badge: 'MATERNITY RIDER',
            isRider: true,
            iconType: 'heart',
            summary: 'Optional maternity coverage of ₹50,000 or ₹1 Lakh as opted, with a 24-month waiting period.',
            points: [
              'Coverage options: ₹50,000 / ₹1 Lakh',
              'Waiting period: 24 months'
            ]
          },
          {
            id: 'classic-compassionate-visit',
            title: 'Compassionate Visit',
            subtitle: 'Up to ₹10,000 for Immediate Family Travel',
            badge: 'OPTIONAL',
            isRider: true,
            iconType: 'users',
            summary: 'Up to ₹10,000 for immediate family travel during life-threatening emergency away from home, subject to admissible hospitalization claim.',
            points: [
              'Up to ₹10,000 travel expense reimbursement for immediate family',
              'Applicable for emergency hospitalization away from home city'
            ]
          },
          {
            id: 'classic-future-shield',
            title: 'Future Shield',
            subtitle: 'Guaranteed Insurability & Coverage Expansion',
            badge: 'FUTURE SHIELD',
            isRider: true,
            iconType: 'zap',
            summary: 'Protects future insurability with options to enhance coverage at milestones without medical underwriting.',
            points: [
              'Guaranteed insurability protection',
              'Seamless upgrade options at major life milestones'
            ]
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 2. SECURE
  // ===========================================================================
  'star-super-star-secure': {
    planId: 'star-super-star-secure',
    parentPlanId: 'star-super-star',
    variantName: 'Secure',
    planName: 'Super Star Secure',
    fullName: 'Star Health Super Star — Secure',
    companyName: 'Star Health',
    tagline: 'Premium High-Security Cover with Any Room, Unlimited Sum Insured Option, Limitless Loyalty Bonus & DME',
    coverage: '₹7.5 Lakh - Unlimited',
    premium: '₹14,900/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
    companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Super Star Secure Policy Terms',
      description: 'Waiting periods and variant-specific limitations for Secure variant.',
      items: [
        {
          id: 'initial-waiting',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalizations are covered from Day 1.',
          policyRef: 'Super Star Secure Policy Terms (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific-diseases',
          title: '24 Months Specified Diseases Waiting Period',
          summary: 'A continuous waiting period of 24 months applies for specified surgical and medical procedures.',
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
            'Benign cysts, nodules, polyps & tumors'
          ],
          policyRef: 'Super Star Secure Policy Terms (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped-waiting',
          title: '36 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 36 months of continuous coverage applies for pre-existing medical conditions (reducible via Quick Shield).',
          policyRef: 'Super Star Secure Policy Terms (Section 4.3)',
          durationTag: '36 Months'
        },
        {
          id: 'age-60-limitations',
          title: 'Limitations Above 60 Years Entry Age',
          summary: 'For insured members entering above 60 years of age, the following covers are unavailable:',
          diseaseList: [
            'Premium Return is unavailable',
            'Limitless Loyalty Bonus is unavailable',
            'Sum Insured Multiplier is unavailable'
          ],
          policyRef: 'Super Star Secure Underwriting Limitations (Section 2.4)',
          durationTag: 'Entry > 60 Yrs'
        },
        {
          id: 'unlimited-si-limitations',
          title: 'Limitations for Unlimited Sum Insured Option',
          summary: 'When the Unlimited Sum Insured tier is selected, the following benefits are not applicable:',
          diseaseList: [
            'Limitless Loyalty Bonus is unavailable',
            'Sum Insured Multiplier is unavailable',
            'Health Booster is unavailable',
            'Limitless Care is unavailable'
          ],
          policyRef: 'Super Star Secure Unlimited Tier Rules (Section 2.5)',
          durationTag: 'Unlimited SI Tier'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Crucial features and eligibility of Super Star Secure',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'secure-eligibility',
          icon: '👥',
          title: 'ELIGIBILITY & FAMILY DEFINITION',
          paragraphs: [
            'Individual Sum Insured: 18 years to Any Age.',
            'Floater: Adults 18 years to Any Age; Dependent Children 91 days to 25 years.',
            'Family Size: 2 Adults + 4 Children.'
          ]
        },
        {
          id: 'secure-si-tiers',
          icon: '💎',
          title: 'SUM INSURED TIERS (ZONES A / B / C)',
          paragraphs: [
            'Sum Insured: ₹7.5 Lakh, ₹10 Lakh, ₹15 Lakh, ₹20 Lakh, ₹25 Lakh, ₹50 Lakh, ₹100 Lakh, and Unlimited.',
            'Policy Term: 1, 2, or 3 Years.'
          ]
        },
        {
          id: 'secure-room-rent',
          icon: '🏥',
          title: 'ROOM RENT: ANY ROOM',
          paragraphs: [
            'Any Room without any capping or proportionate deduction across all Sum Insured options.'
          ]
        },
        {
          id: 'secure-loyalty-dme',
          icon: '🛡️',
          title: 'LIMITLESS LOYALTY BONUS & DME',
          paragraphs: [
            'Limitless Loyalty Bonus: 100% additional Sum Insured every renewal irrespective of claims, without upper limit.',
            'Durable Medical Equipment (DME): Covered up to ₹1 Lakh per policy year.',
            'Nursing at Home: ₹1,000/day up to 10 days per policy year.'
          ]
        }
      ]
    },

    featuresSections: [
      {
        id: 'base-covers',
        title: 'BASE COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'secure-room-rent',
            title: 'Room Rent: Any Room',
            subtitle: 'Zero Capping Across All Sum Insured Options',
            badge: 'ANY ROOM',
            iconType: 'home',
            summary: 'Any Room accommodation is covered with zero room rent capping across all Sum Insured options.',
            points: [
              'Any Room with zero sub-limit',
              'Boarding, nursing, ICU fees covered up to Sum Insured'
            ]
          },
          {
            id: 'secure-day-care',
            title: 'All Day Care Treatments',
            subtitle: 'Covered up to Sum Insured',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All Day Care procedures and surgeries requiring less than 24 hours of hospital stay are fully covered up to Sum Insured.',
            points: [
              'All daycare treatments covered up to Sum Insured',
              'No minimum 24-hr stay required'
            ]
          },
          {
            id: 'secure-pre-post',
            title: 'Pre & Post Hospitalization: 90 & 180 Days',
            subtitle: '90 Days Pre & 180 Days Post Cover',
            badge: '90 & 180 DAYS',
            iconType: 'calendar',
            summary: 'Medical expenses 90 days before admission and 180 days after discharge are covered up to Sum Insured.',
            points: [
              '90 days pre-hospitalization diagnostic & doctor fees',
              '180 days post-hospitalization recovery expenses'
            ]
          },
          {
            id: 'secure-modern-ayush',
            title: 'Modern Treatments & AYUSH',
            subtitle: 'Covered up to Sum Insured',
            badge: 'COVERED UP TO SI',
            iconType: 'cpu',
            summary: 'Robotic surgeries, modern technological treatments, and AYUSH inpatient hospitalisations are covered up to Sum Insured.',
            points: [
              'Modern advanced treatments covered up to Sum Insured',
              'AYUSH inpatient treatments covered up to Sum Insured'
            ]
          },
          {
            id: 'secure-air-road-ambulance',
            title: 'Road & Air Ambulance',
            subtitle: 'Road Covered up to SI, Air up to ₹5 Lakh/yr',
            badge: 'AMBULANCE',
            iconType: 'truck',
            summary: 'Road ambulance covered up to Sum Insured. Air ambulance covered up to ₹5 Lakh per policy year.',
            points: [
              'Road ambulance covered up to Sum Insured',
              'Air ambulance up to ₹5 Lakh per policy year'
            ]
          },
          {
            id: 'secure-organ-donor',
            title: 'Organ Donor Cover',
            subtitle: 'Covered Including Donor Complications',
            badge: 'DONOR COVERED',
            iconType: 'heart',
            summary: 'In-patient organ donor harvesting expenses covered up to Sum Insured including complications.',
            points: [
              'Donor harvesting expenses covered up to Sum Insured',
              'Includes donor post-donation complications cover'
            ]
          },
          {
            id: 'secure-home-domiciliary',
            title: 'Home Care & Domiciliary Hospitalization',
            subtitle: 'Covered up to Sum Insured',
            badge: 'HOME CARE',
            iconType: 'home',
            summary: 'Home care treatments for listed conditions and domiciliary hospitalisation covered up to Sum Insured.',
            points: [
              'Home Care covered up to Sum Insured',
              'Domiciliary hospitalisation covered up to Sum Insured'
            ]
          },
          {
            id: 'secure-restoration',
            title: 'Automatic Restoration: 100% Unlimited Times',
            subtitle: 'Unlimited Restorations in Policy Year',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Automatic restoration of up to 100% Sum Insured triggers unlimited times in a policy year.',
            points: [
              '100% restoration unlimited times in a policy year',
              'Available for related and unrelated conditions'
            ]
          },
          {
            id: 'secure-bonus-waiver',
            title: 'Cumulative Bonus & Premium Waiver',
            subtitle: '50% Bonus (max 100%) + 1 Year Premium Waiver',
            badge: 'BONUS & WAIVER',
            iconType: 'shield',
            summary: '50% cumulative bonus per claim-free renewal (max 100%). Plus one year premium waiver on listed critical illness or accidental death.',
            points: [
              '50% cumulative bonus per claim-free renewal, max 100%',
              'One year premium waiver on listed critical illness/accidental death condition'
            ]
          },
          {
            id: 'secure-freeze-age-wellness',
            title: 'Freeze Your Age & STAR Wellness',
            subtitle: 'Freeze Age up to 50 & 20% Renewal Discount',
            badge: 'FREEZE AGE & WELLNESS',
            iconType: 'clock',
            summary: 'Freeze Your Age locks premium at entry age until first claim (up to age 50). STAR Wellness yields up to 20% renewal discount.',
            points: [
              'Freeze Your Age available up to age 50',
              'STAR Wellness: Earn 1,000+ points annually for up to 20% renewal discount',
              'Dental check-up & cleaning in 2nd and 3rd policy years'
            ]
          }
        ]
      },
      {
        id: 'additional-covers',
        title: 'ADDITIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'secure-loyalty-bonus',
            title: 'Limitless Loyalty Bonus',
            subtitle: '100% Additional Sum Insured Every Renewal Irrespective of Claims',
            badge: '100% LOYALTY BONUS',
            iconType: 'trending',
            summary: 'Adds 100% additional Sum Insured upon every renewal, completely irrespective of claims, without any upper ceiling.',
            points: [
              '100% additional Sum Insured every renewal irrespective of claim',
              'No upper limit on accumulation (entry age ≤ 60 yrs, non-unlimited SI tiers)'
            ]
          },
          {
            id: 'secure-si-multiplier-booster',
            title: 'Sum Insured Multiplier & Health Booster',
            subtitle: 'Utilize SI across Policy Term & 100% Booster every 7 Years',
            badge: 'MULTIPLIER & BOOSTER',
            iconType: 'zap',
            summary: 'Sum Insured Multiplier combines/utilizes annual Sum Insured across long-term policy periods. Health Booster adds 100% base Sum Insured for every block of 7 claim-free years.',
            points: [
              'Sum Insured Multiplier: Combine/utilize annual SI across long-term policy term',
              'Health Booster: 100% base SI additionally provided for every block of 7 claim-free years'
            ]
          },
          {
            id: 'secure-dme-nursing',
            title: 'Durable Medical Equipment & Nursing at Home',
            subtitle: 'Up to ₹1 Lakh DME & ₹1,000/day Nursing',
            badge: 'DME & NURSING',
            iconType: 'heart',
            summary: 'Durable Medical Equipment (wheelchairs, CPAP, oxygen concentrators) covered up to ₹1 Lakh/yr. Nursing at Home covered ₹1,000/day up to 10 days.',
            points: [
              'Durable Medical Equipment: Up to ₹1 Lakh per policy year',
              'Nursing at Home: ₹1,000/day up to 10 days per policy year'
            ]
          },
          {
            id: 'secure-consumables-econnect',
            title: 'Consumables, E-Connect & Grace Period Cover',
            subtitle: '68 Non-Payables Covered & Virtual Expert Sessions',
            badge: 'INBUILT CONSUMABLES',
            iconType: 'shield',
            summary: '68 non-payable medical items covered. E-Connect provides virtual fitness sessions, nutritionist advice, and international second opinion twice a year. Grace period protection included.',
            points: [
              'Consumables: 68 non-payable items covered',
              'E-Connect: Virtual fitness sessions, nutritionist and E-International second opinion twice per policy year',
              'Grace Period Cover: Coverage available during grace period'
            ]
          }
        ]
      },
      {
        id: 'optional-covers',
        title: 'OPTIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'secure-limitless-care',
            title: 'Limitless Care',
            subtitle: 'One Lifetime Unlimited Claim Cover',
            badge: 'OPTIONAL RIDER',
            isRider: true,
            iconType: 'zap',
            summary: 'One lifetime unlimited claim cover for in-patient/day-care treatment.',
            points: ['One unlimited claim cover in lifetime of policy']
          },
          {
            id: 'secure-quick-future-shield',
            title: 'Quick Shield & Future Shield',
            subtitle: 'PED from Day 31 & Guaranteed Insurability',
            badge: 'OPTIONAL RIDER',
            isRider: true,
            iconType: 'shield',
            summary: 'Quick Shield covers specified PEDs from 31st day. Future Shield locks future insurability.',
            points: [
              'Quick Shield: Diabetes II, Hypertension, Asthma, CAD covered from Day 31',
              'Future Shield: Guaranteed coverage enhancements'
            ]
          },
          {
            id: 'secure-maternity-wellness',
            title: 'Maternity Expenses & Stay Fit',
            subtitle: 'Maternity up to ₹1 Lakh & Fitness Center Access',
            badge: 'OPTIONAL RIDER',
            isRider: true,
            iconType: 'heart',
            summary: 'Optional maternity expenses and Stay Fit gym/fitness access programs.',
            points: [
              'Maternity Expenses: ₹50,000 / ₹1 Lakh with 24-month waiting period',
              'Stay Fit: Active fitness center access sessions'
            ]
          },
          {
            id: 'secure-mamta-param-seva',
            title: 'Mamta & Param Seva',
            subtitle: 'Targeted Geriatric & Family Care Add-ons',
            badge: 'OPTIONAL RIDER',
            isRider: true,
            iconType: 'users',
            summary: 'Specialized healthcare add-ons for family and senior support.',
            points: ['Mamta & Param Seva specialized care add-ons']
          },
          {
            id: 'secure-deductibles-copay',
            title: 'Voluntary Deductible & Co-pay Options',
            subtitle: 'Voluntary & Long Term Deductible / Co-pay',
            badge: 'DEDUCTIBLES',
            isRider: true,
            iconType: 'dollar',
            summary: 'Choose voluntary deductible or co-pay options to optimize policy premium.',
            points: [
              'Voluntary Deductible & Long Term Deductible options',
              'Voluntary Co-pay options & Value Network discounts'
            ]
          },
          {
            id: 'secure-inclinic-room-rent-mod',
            title: 'In-Clinic Consultation & Room Rent Mod',
            subtitle: 'OPD Consultations & Suite Room Modification',
            badge: 'OPTIONAL',
            isRider: true,
            iconType: 'clipboard',
            summary: 'In-clinic doctor consultations and room rent modification options.',
            points: [
              'In-Clinic Consultation cover',
              'Room Rent Modification options'
            ]
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 3. PREFERRED
  // ===========================================================================
  'star-super-star-preferred': {
    planId: 'star-super-star-preferred',
    parentPlanId: 'star-super-star',
    variantName: 'Preferred',
    planName: 'Super Star Preferred',
    fullName: 'Star Health Super Star — Preferred',
    companyName: 'Star Health',
    tagline: 'Elite Coverage with Any Room, Limitless Loyalty Bonus, 1st Year Premium Return & Health Booster',
    coverage: '₹7.5 Lakh - Unlimited',
    premium: '₹16,500/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
    companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Super Star Preferred Policy Terms',
      description: 'Waiting periods, Premium Return criteria and coverage rules for Preferred variant.',
      items: [
        {
          id: 'initial-waiting',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalizations are covered from Day 1.',
          policyRef: 'Super Star Preferred Policy Schedule (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific-diseases',
          title: '24 Months Specified Diseases Waiting Period',
          summary: 'A continuous waiting period of 24 months applies for specified surgical and medical procedures.',
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
            'Benign cysts, nodules, polyps & tumors'
          ],
          policyRef: 'Super Star Preferred Policy Terms (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped-waiting',
          title: '36 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 36 months applies for pre-existing medical conditions (reducible to 30 days via Quick Shield).',
          policyRef: 'Super Star Preferred Policy Terms (Section 4.3)',
          durationTag: '36 Months'
        },
        {
          id: 'premium-return-rules',
          title: 'Premium Return Qualification Rules',
          summary: 'If no in-patient claim is registered under the policy for a continuous block of 5 years, the entire first-year base premium is refunded.',
          highlight: 'Applies to base premium excluding tax and optional rider loadings.',
          policyRef: 'Super Star Preferred Endorsement (Section 3.6)',
          durationTag: '5 Claim-Free Yrs'
        },
        {
          id: 'age-60-limitations',
          title: 'Limitations Above 60 Years Entry Age',
          summary: 'For insured members entering above 60 years of age, Premium Return, Limitless Loyalty Bonus, and Sum Insured Multiplier are unavailable.',
          policyRef: 'Super Star Preferred Underwriting Rules (Section 2.4)',
          durationTag: 'Entry > 60 Yrs'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Crucial features and eligibility of Super Star Preferred',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'preferred-eligibility',
          icon: '👥',
          title: 'ELIGIBILITY & FAMILY DEFINITION',
          paragraphs: [
            'Individual Sum Insured: 18 years to Any Age.',
            'Floater: Adults 18 years to Any Age; Dependent Children 91 days to 25 years.',
            'Family Size: 2 Adults + 4 Children.'
          ]
        },
        {
          id: 'preferred-premium-return',
          icon: '💰',
          title: 'FIRST-YEAR BASE PREMIUM RETURN',
          paragraphs: [
            'If no in-patient claim occurs for 5 consecutive years, 100% of your first-year base premium is refunded.',
            'Rewards long-term healthy policyholders with direct financial returns.'
          ]
        },
        {
          id: 'preferred-room-rent',
          icon: '🏥',
          title: 'ROOM RENT: ANY ROOM',
          paragraphs: [
            'Any Room accommodation covered across all Sum Insured options with zero restriction.'
          ]
        },
        {
          id: 'preferred-loyalty-booster',
          icon: '⭐',
          title: 'LIMITLESS LOYALTY BONUS & HEALTH BOOSTER',
          paragraphs: [
            'Limitless Loyalty Bonus: 100% additional Sum Insured every renewal irrespective of claims.',
            'Health Booster: 100% base Sum Insured additionally provided for every block of 7 claim-free years.',
            'Durable Medical Equipment (DME): Covered up to ₹1 Lakh per policy year.'
          ]
        }
      ]
    },

    featuresSections: [
      {
        id: 'base-covers',
        title: 'BASE COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'pref-room-rent',
            title: 'Room Rent: Any Room',
            subtitle: 'Any Room Across All Sum Insured Options',
            badge: 'ANY ROOM',
            iconType: 'home',
            summary: 'Any Room accommodation is covered with zero capping across all Sum Insured options.',
            points: [
              'Any Room with zero sub-limit',
              'Boarding, nursing, ICU fees covered up to Sum Insured'
            ]
          },
          {
            id: 'pref-day-care',
            title: 'All Day Care Treatments',
            subtitle: 'Covered up to Sum Insured',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All Day Care procedures and surgeries requiring less than 24 hours of hospital stay are covered up to Sum Insured.',
            points: [
              'All daycare treatments covered up to Sum Insured',
              'Zero minimum 24-hr stay requirement'
            ]
          },
          {
            id: 'pref-pre-post',
            title: 'Pre & Post Hospitalization: 90 & 180 Days',
            subtitle: '90 Days Pre & 180 Days Post Cover',
            badge: '90 & 180 DAYS',
            iconType: 'calendar',
            summary: 'Medical expenses 90 days before admission and 180 days after discharge are covered up to Sum Insured.',
            points: [
              '90 days pre-hospitalization covered',
              '180 days post-hospitalization covered'
            ]
          },
          {
            id: 'pref-modern-ayush',
            title: 'Modern Treatments & AYUSH',
            subtitle: 'Covered up to Sum Insured',
            badge: 'COVERED UP TO SI',
            iconType: 'cpu',
            summary: 'Robotic surgeries, advanced technological treatments, and AYUSH inpatient hospitalisations are covered up to Sum Insured.',
            points: [
              'Modern advanced treatments covered up to Sum Insured',
              'AYUSH inpatient treatments covered up to Sum Insured'
            ]
          },
          {
            id: 'pref-ambulance',
            title: 'Road & Air Ambulance',
            subtitle: 'Road Covered up to SI, Air up to ₹5 Lakh/yr',
            badge: 'AMBULANCE',
            iconType: 'truck',
            summary: 'Road ambulance covered up to Sum Insured. Air ambulance covered up to ₹5 Lakh per policy year.',
            points: [
              'Road ambulance covered up to Sum Insured',
              'Air ambulance up to ₹5 Lakh per policy year'
            ]
          },
          {
            id: 'pref-organ-donor',
            title: 'Organ Donor Cover',
            subtitle: 'Covered Including Donor Complications',
            badge: 'DONOR COVERED',
            iconType: 'heart',
            summary: 'In-patient organ donor harvesting expenses covered up to Sum Insured including donor complications.',
            points: [
              'Donor harvesting expenses covered up to Sum Insured',
              'Includes donor post-donation complications'
            ]
          },
          {
            id: 'pref-home-domiciliary',
            title: 'Home Care & Domiciliary Hospitalization',
            subtitle: 'Covered up to Sum Insured',
            badge: 'HOME CARE',
            iconType: 'home',
            summary: 'Home care treatments for designated conditions and domiciliary hospitalisation covered up to Sum Insured.',
            points: [
              'Home Care covered up to Sum Insured',
              'Domiciliary hospitalisation covered up to Sum Insured'
            ]
          },
          {
            id: 'pref-restoration',
            title: 'Automatic Restoration: 100% Unlimited Times',
            subtitle: 'Unlimited Restorations in Policy Year',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Automatic restoration of up to 100% Sum Insured triggers unlimited times in a policy year.',
            points: [
              '100% restoration unlimited times in a policy year',
              'Available for related and unrelated conditions'
            ]
          },
          {
            id: 'pref-bonus-waiver',
            title: 'Cumulative Bonus & Premium Waiver',
            subtitle: '50% Bonus (max 100%) + 1 Year Premium Waiver',
            badge: 'BONUS & WAIVER',
            iconType: 'shield',
            summary: '50% cumulative bonus per claim-free renewal (max 100%). Plus one year premium waiver on listed critical illness or accidental death.',
            points: [
              '50% cumulative bonus per claim-free renewal, max 100%',
              'One year premium waiver on listed critical illness/accidental death condition'
            ]
          },
          {
            id: 'pref-freeze-age-wellness',
            title: 'Freeze Your Age & STAR Wellness',
            subtitle: 'Freeze Age up to 50 & 20% Renewal Discount',
            badge: 'FREEZE AGE & WELLNESS',
            iconType: 'clock',
            summary: 'Freeze Your Age locks premium at entry age until first claim (up to age 50). STAR Wellness yields up to 20% renewal discount.',
            points: [
              'Freeze Your Age available up to age 50',
              'STAR Wellness: Earn 1,000+ points annually for up to 20% renewal discount',
              'Dental check-up & cleaning in 2nd and 3rd policy years'
            ]
          }
        ]
      },
      {
        id: 'additional-covers',
        title: 'ADDITIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'pref-premium-return',
            title: 'Premium Return',
            subtitle: '1st Year Base Premium Refunded if No Claim for 5 Years',
            badge: 'PREMIUM RETURN',
            iconType: 'dollar',
            summary: 'If no in-patient claim is registered for a continuous block of 5 years, the entire first-year base premium is refunded to the policyholder.',
            points: [
              'First-year base premium refunded after 5 continuous claim-free years',
              'Unique financial return benefit exclusive to Preferred & Select variants'
            ]
          },
          {
            id: 'pref-loyalty-bonus',
            title: 'Limitless Loyalty Bonus',
            subtitle: '100% Additional Sum Insured Every Renewal Irrespective of Claims',
            badge: '100% LOYALTY BONUS',
            iconType: 'trending',
            summary: '100% additional Sum Insured granted upon every renewal, completely irrespective of claims.',
            points: [
              '100% additional Sum Insured every renewal irrespective of claim',
              'No upper limit on accumulation'
            ]
          },
          {
            id: 'pref-si-multiplier-booster',
            title: 'Sum Insured Multiplier & Health Booster',
            subtitle: 'Term-wide SI Utilization & 100% Base SI every 7 Claim-Free Years',
            badge: 'MULTIPLIER & BOOSTER',
            iconType: 'zap',
            summary: 'Sum Insured Multiplier for long-term policies and 100% base Sum Insured booster for every block of 7 claim-free years.',
            points: [
              'Sum Insured Multiplier applicable to long-term policies',
              'Health Booster: 100% of base Sum Insured for every block of 7 claim-free years'
            ]
          },
          {
            id: 'pref-dme-econnect',
            title: 'Durable Medical Equipment & E-Connect',
            subtitle: 'Up to ₹1 Lakh DME, E-Connect Virtual Sessions & Grace Period Cover',
            badge: 'DME & E-CONNECT',
            iconType: 'heart',
            summary: 'Durable Medical Equipment covered up to ₹1 Lakh/yr. E-Connect gives virtual fitness, nutritionist sessions and international second opinion twice a year. Grace period protection included.',
            points: [
              'Durable Medical Equipment: Up to ₹1 Lakh per policy year',
              'E-Connect: Virtual fitness, nutritionist and E-International second opinion twice per policy year',
              'Grace Period Cover: Available during grace period'
            ]
          }
        ]
      },
      {
        id: 'optional-covers',
        title: 'OPTIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'pref-limitless-care',
            title: 'Limitless Care',
            subtitle: 'One Lifetime Unlimited Claim Cover',
            badge: 'OPTIONAL RIDER',
            isRider: true,
            iconType: 'zap',
            summary: 'One lifetime unlimited claim cover for in-patient/day-care treatment.',
            points: ['One unlimited claim cover in lifetime of policy']
          },
          {
            id: 'pref-nursing-home',
            title: 'Nursing at Home',
            subtitle: '₹1,000/day up to 10 Days per Year',
            badge: 'NURSING CARE',
            isRider: true,
            iconType: 'home',
            summary: 'Professional nursing care expenses at home covered up to ₹1,000/day for maximum 10 days.',
            points: ['₹1,000/day up to 10 days per policy year']
          },
          {
            id: 'pref-preventive-checkup',
            title: 'Preventive Health Check-Up',
            subtitle: 'Annual Health Check-Up as Applicable',
            badge: 'HEALTH CHECK',
            isRider: true,
            iconType: 'heart',
            summary: 'Comprehensive preventive annual health check-up once per policy year.',
            points: ['Preventive health check-up once per policy year']
          },
          {
            id: 'pref-consumables-rider',
            title: 'Consumables Cover',
            subtitle: '68 Non-Payable Hospital Items',
            badge: 'CONSUMABLES',
            isRider: true,
            iconType: 'shield',
            summary: 'Coverage for 68 non-payable medical disposable items.',
            points: ['Consumables cover for non-payable items']
          },
          {
            id: 'pref-quick-future-shield',
            title: 'Quick Shield & Future Shield',
            subtitle: 'PED from Day 31 & Future Insurability',
            badge: 'SHIELD RIDERS',
            isRider: true,
            iconType: 'shield',
            summary: 'Quick Shield covers specified PEDs from 31st day. Future Shield ensures seamless milestone upgrades.',
            points: [
              'Quick Shield covers Diabetes II, Hypertension, Asthma, CAD from Day 31',
              'Future Shield guaranteed milestone upgrades'
            ]
          },
          {
            id: 'pref-maternity-deductible',
            title: 'Maternity, Deductibles & Co-pay',
            subtitle: 'Maternity ₹50k/₹1L, Voluntary Deductible / Co-pay',
            badge: 'CUSTOM OPTIONS',
            isRider: true,
            iconType: 'dollar',
            summary: 'Optional maternity expenses, voluntary and long-term deductible or co-payment options.',
            points: [
              'Maternity Expenses: ₹50,000 / ₹1 Lakh with 24-month waiting period',
              'Voluntary Deductible & Long Term Deductible options',
              'Voluntary Co-pay & Value Network options',
              'Room Rent Modification option'
            ]
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 4. ESSENTIAL
  // ===========================================================================
  'star-super-star-essential': {
    planId: 'star-super-star-essential',
    parentPlanId: 'star-super-star',
    variantName: 'Essential',
    planName: 'Super Star Essential',
    fullName: 'Star Health Super Star — Essential',
    companyName: 'Star Health',
    tagline: 'Cost-Effective Coverage for Zones B & C with Single Private AC Room, Premium Return & DME',
    coverage: '₹5 Lakh - ₹10 Lakh',
    premium: '₹9,800/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
    companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Super Star Essential Zone & Coverage Limits',
      description: 'Geographic availability, waiting periods, and limitations for Essential variant.',
      items: [
        {
          id: 'zone-exclusions',
          title: 'Geographic Zone Restrictions (Zones B & C Only)',
          summary: 'Super Star Essential is available strictly in Zone B and Zone C locations.',
          highlight: 'Geographically excluded areas: Haryana, Indore City, Maharashtra, Telangana, and Kerala.',
          diseaseList: [
            'Haryana (Excluded)',
            'Indore City (Excluded)',
            'Maharashtra (Excluded)',
            'Telangana (Excluded)',
            'Kerala (Excluded)'
          ],
          policyRef: 'Super Star Essential Geographic Schedule (Section 2.1)',
          durationTag: 'Zone B & C Only'
        },
        {
          id: 'initial-waiting',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalization is covered from Day 1.',
          policyRef: 'Super Star Essential Policy Terms (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific-diseases',
          title: '24 Months Specified Diseases Waiting Period',
          summary: 'A continuous waiting period of 24 months applies for specified surgical and medical procedures.',
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
            'Benign cysts, nodules, polyps & tumors'
          ],
          policyRef: 'Super Star Essential Policy Terms (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped-waiting',
          title: '36 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 36 months applies for pre-existing medical conditions (reducible via Quick Shield).',
          policyRef: 'Super Star Essential Policy Terms (Section 4.3)',
          durationTag: '36 Months'
        },
        {
          id: 'sum-insured-cap',
          title: 'Sum Insured Capping',
          summary: 'Available Sum Insured options are strictly limited to ₹5 Lakh, ₹7.5 Lakh, and ₹10 Lakh.',
          policyRef: 'Super Star Essential Schedule (Section 2.2)',
          durationTag: 'Max ₹10 Lakh'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Important eligibility and restrictions of Super Star Essential',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'essential-eligibility',
          icon: '👥',
          title: 'ELIGIBILITY & FAMILY DEFINITION',
          paragraphs: [
            'Individual: 18 years to Any Age.',
            'Floater: Adults 18 years to Any Age; Dependent Children 91 days to 25 years.',
            'Family Size: 2 Adults + 4 Children.'
          ]
        },
        {
          id: 'essential-zones',
          icon: '📍',
          title: 'ZONE AVAILABILITY & RESTRICTIONS',
          paragraphs: [
            'Available strictly in Zone B & C.',
            'Excludes Haryana, Indore City, Maharashtra, Telangana, and Kerala.',
            'Sum Insured Options: ₹5 Lakh, ₹7.5 Lakh, ₹10 Lakh.'
          ]
        },
        {
          id: 'essential-room-rent',
          icon: '🏥',
          title: 'ROOM RENT: SINGLE PRIVATE AC ROOM',
          paragraphs: [
            'Room Rent covered for Single Private AC Room.',
            'Pre-Hospitalization: 30 days | Post-Hospitalization: 60 days.'
          ]
        },
        {
          id: 'essential-loyalty-return',
          icon: '💰',
          title: 'LOYALTY BONUS & PREMIUM RETURN',
          paragraphs: [
            'Limitless Loyalty Bonus (100% additional SI per renewal) available from ₹7.5 Lakh Sum Insured.',
            'Premium Return: First-year base premium refunded if no in-patient claim for 5 years.',
            'Health Booster: 100% additional base Sum Insured every 7 claim-free years.'
          ]
        }
      ]
    },

    featuresSections: [
      {
        id: 'base-covers',
        title: 'BASE COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'essential-room-rent',
            title: 'Room Rent: Single Private AC Room',
            subtitle: 'Single Private AC Room Covered',
            badge: 'SINGLE PRIVATE AC',
            iconType: 'home',
            summary: 'Single Private AC Room accommodation is covered up to Sum Insured with no proportionate deductions.',
            points: [
              'Single Private AC Room covered',
              'Boarding, nursing, ICU charges covered up to Sum Insured'
            ]
          },
          {
            id: 'essential-pre-post',
            title: 'Pre & Post Hospitalization: 30 & 60 Days',
            subtitle: '30 Days Pre & 60 Days Post Cover',
            badge: '30 & 60 DAYS',
            iconType: 'calendar',
            summary: 'Pre-hospitalization medical expenses for 30 days and post-hospitalization medical expenses for 60 days are covered.',
            points: [
              'Pre-hospitalization: 30 days covered',
              'Post-hospitalization: 60 days covered'
            ]
          },
          {
            id: 'essential-day-care',
            title: 'All Day Care Treatments',
            subtitle: 'Covered up to Sum Insured',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All Day Care procedures and surgeries are fully covered up to Sum Insured.',
            points: [
              'All Day Care Treatments covered up to Sum Insured',
              'No minimum 24-hour hospitalization required'
            ]
          },
          {
            id: 'essential-modern-ayush',
            title: 'Modern Treatments & AYUSH',
            subtitle: 'Covered up to Sum Insured',
            badge: 'COVERED UP TO SI',
            iconType: 'cpu',
            summary: 'Robotic surgeries, advanced technological procedures, and AYUSH inpatient hospitalisations are covered up to Sum Insured.',
            points: [
              'Modern advanced treatments covered up to Sum Insured',
              'AYUSH inpatient treatments covered up to Sum Insured'
            ]
          },
          {
            id: 'essential-ambulance',
            title: 'Road & Air Ambulance',
            subtitle: 'Road Covered up to SI, Air up to ₹5 Lakh/yr',
            badge: 'AMBULANCE',
            iconType: 'truck',
            summary: 'Road ambulance covered up to Sum Insured. Air ambulance covered up to ₹5 Lakh per policy year.',
            points: [
              'Road ambulance covered up to Sum Insured',
              'Air ambulance up to ₹5 Lakh per policy year'
            ]
          },
          {
            id: 'essential-organ-donor',
            title: 'Organ Donor Cover',
            subtitle: 'Covered Including Donor Complications',
            badge: 'DONOR COVERED',
            iconType: 'heart',
            summary: 'Inpatient harvesting expenses for living donor covered up to Sum Insured including complications.',
            points: [
              'Donor harvesting expenses covered up to Sum Insured',
              'Includes donor post-donation complications cover'
            ]
          },
          {
            id: 'essential-home-domiciliary',
            title: 'Home Care & Domiciliary Hospitalization',
            subtitle: 'Covered up to Sum Insured',
            badge: 'HOME CARE',
            iconType: 'home',
            summary: 'Home Care treatment and domiciliary hospitalisation covered up to Sum Insured.',
            points: [
              'Home Care treatment covered up to Sum Insured',
              'Domiciliary hospitalization covered up to Sum Insured'
            ]
          },
          {
            id: 'essential-restoration',
            title: 'Automatic Restoration: 100% Unlimited Times',
            subtitle: 'Unlimited Restorations in Policy Year',
            badge: 'UNLIMITED RESTORE',
            iconType: 'refresh',
            summary: 'Automatic restoration of up to 100% Sum Insured triggers unlimited times in a policy year.',
            points: [
              '100% restoration unlimited times in a policy year',
              'Available for related and unrelated conditions'
            ]
          },
          {
            id: 'essential-bonus-waiver',
            title: 'Cumulative Bonus & Premium Waiver',
            subtitle: '50% Bonus (max 100%) + 1 Year Premium Waiver',
            badge: 'BONUS & WAIVER',
            iconType: 'shield',
            summary: '50% cumulative bonus per claim-free renewal, max 100%. One-year premium waiver on applicable critical illness or accidental death.',
            points: [
              '50% cumulative bonus per claim-free renewal, max 100%',
              'One-year premium waiver subject to applicable condition'
            ]
          },
          {
            id: 'essential-freeze-age-wellness',
            title: 'Freeze Your Age & STAR Wellness',
            subtitle: 'Freeze Age up to 50 & 20% Renewal Discount',
            badge: 'FREEZE AGE & WELLNESS',
            iconType: 'clock',
            summary: 'Freeze Your Age locks premium at entry age until first claim (up to age 50). STAR Wellness yields up to 20% renewal discount.',
            points: [
              'Freeze Your Age available up to 50 years',
              'STAR Wellness: Over 1,000 points annually with up to 20% renewal discount',
              'Dental check-up & cleaning in 2nd and 3rd policy years'
            ]
          }
        ]
      },
      {
        id: 'additional-covers',
        title: 'ADDITIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'essential-loyalty-multiplier',
            title: 'Limitless Loyalty Bonus & SI Multiplier',
            subtitle: 'Available from ₹7.5 Lakh Sum Insured',
            badge: 'FROM ₹7.5L SI',
            iconType: 'trending',
            summary: '100% additional Sum Insured per renewal and Sum Insured Multiplier across long-term policies, available for Sum Insured of ₹7.5 Lakh and above.',
            points: [
              'Limitless Loyalty Bonus: 100% additional SI per renewal, available from ₹7.5 Lakh SI',
              'Sum Insured Multiplier: Available from ₹7.5 Lakh, long-term policies only'
            ]
          },
          {
            id: 'essential-premium-return',
            title: 'Premium Return',
            subtitle: '1st Year Base Premium Refunded after 5 Claim-Free Years',
            badge: 'PREMIUM RETURN',
            iconType: 'dollar',
            summary: 'No in-patient claim for 5 consecutive years triggers full refund of the first-year base premium.',
            points: [
              'First-year base premium refunded if no in-patient claim for 5 years',
              'Health Booster: 100% additional base Sum Insured every 7 claim-free years'
            ]
          },
          {
            id: 'essential-dme-nursing',
            title: 'Durable Medical Equipment & Nursing at Home',
            subtitle: 'Up to ₹1 Lakh DME & ₹1,000/day Nursing',
            badge: 'DME & NURSING',
            iconType: 'heart',
            summary: 'Durable Medical Equipment covered up to ₹1 Lakh. Professional nursing at home covered ₹1,000/day up to 10 days.',
            points: [
              'Durable Medical Equipment: Up to ₹1 Lakh',
              'Nursing at Home: ₹1,000/day up to 10 days'
            ]
          },
          {
            id: 'essential-econnect-grace',
            title: 'E-Connect & Grace Period Cover',
            subtitle: 'Virtual Sessions, Second Opinion & Grace Cover',
            badge: 'E-CONNECT',
            iconType: 'shield',
            summary: 'Virtual fitness, nutritionist consultations and international second opinion. Coverage active during grace period.',
            points: [
              'E-Connect: Virtual fitness, nutritionist and E-International second opinion',
              'Grace Period Cover: Available during grace period'
            ]
          }
        ]
      },
      {
        id: 'optional-covers',
        title: 'OPTIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'essential-preventive-checkup',
            title: 'Preventive Health Check-Up',
            subtitle: 'Annual Check-Up as Applicable',
            badge: 'HEALTH CHECK',
            isRider: true,
            iconType: 'heart',
            summary: 'Preventive health check-up once per policy year as opted.',
            points: ['Preventive health check-up once per policy year']
          },
          {
            id: 'essential-consumables',
            title: 'Consumables Cover',
            subtitle: '68 Non-Payable Hospital Items',
            badge: 'CONSUMABLES',
            isRider: true,
            iconType: 'shield',
            summary: 'Coverage for non-payable hospital consumable items under admissible claims.',
            points: ['Consumables cover for listed non-payables']
          },
          {
            id: 'essential-quick-future-shield',
            title: 'Quick Shield & Future Shield',
            subtitle: 'PED from Day 31 & Future Insurability',
            badge: 'SHIELD RIDERS',
            isRider: true,
            iconType: 'shield',
            summary: 'Quick Shield covers specified PEDs from 31st day. Future Shield ensures milestone enhancements.',
            points: [
              'Quick Shield covers specified PEDs from Day 31',
              'Future Shield coverage expansion'
            ]
          },
          {
            id: 'essential-maternity',
            title: 'Maternity Expenses',
            subtitle: '₹50,000 / ₹1 Lakh with 24-Month Waiting Period',
            badge: 'MATERNITY',
            isRider: true,
            iconType: 'heart',
            summary: 'Maternity coverage with 24-month waiting period.',
            points: ['Maternity expenses covered as opted']
          },
          {
            id: 'essential-stayfit-mamta',
            title: 'Stay Fit, Mamta & Param Seva',
            subtitle: 'Fitness Sessions & Specialized Family Care',
            badge: 'CARE RIDERS',
            isRider: true,
            iconType: 'users',
            summary: 'Stay Fit fitness sessions, Mamta and Param Seva specialized care add-ons.',
            points: ['Stay Fit, Mamta & Param Seva options']
          },
          {
            id: 'essential-deductibles-copay',
            title: 'Voluntary Deductible & Co-pay',
            subtitle: 'Optimize Premium with Deductibles or Co-pay',
            badge: 'DEDUCTIBLES',
            isRider: true,
            iconType: 'dollar',
            summary: 'Voluntary Deductible, Long Term Deductible, Voluntary Co-pay and In-Clinic Consultation.',
            points: [
              'Voluntary Deductible & Long Term Deductible',
              'Voluntary Co-pay',
              'In-Clinic Consultation'
            ]
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 5. VALUE PLUS
  // ===========================================================================
  'star-super-star-value-plus': {
    planId: 'star-super-star-value-plus',
    parentPlanId: 'star-super-star',
    variantName: 'Value Plus',
    planName: 'Super Star Value Plus',
    fullName: 'Star Health Super Star — Value Plus',
    companyName: 'Star Health',
    tagline: 'High-Value Smart Healthcare with Up to ₹5,000/day Boarding, Premium Return, Consumables & Long-Term Discounts',
    coverage: '₹7.5 Lakh - ₹25 Lakh',
    premium: '₹11,400/year',

    uiConfig: {
      primaryColor: '#003087',
      demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
    companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH,

    limitationsWaitingPeriods: {
      heading: 'LIMITATIONS & WAITING PERIODS',
      subheading: 'Super Star Value Plus Rules & Network Terms',
      description: 'Waiting periods, network hospital co-pay, and policy rules for Value Plus variant.',
      items: [
        {
          id: 'initial-waiting',
          title: 'Initial Waiting Period (30 Days)',
          summary: 'A mandatory waiting period of 30 days applies from policy inception for any non-accidental illness or disease hospitalization.',
          highlight: 'Accidental hospitalizations are covered from Day 1.',
          policyRef: 'Super Star Value Plus Policy Terms (Section 4.1)',
          durationTag: '30 Days'
        },
        {
          id: 'specific-diseases',
          title: '24 Months Specified Diseases Waiting Period',
          summary: 'A continuous waiting period of 24 months applies for specified surgical and medical procedures.',
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
            'Benign cysts, nodules, polyps & tumors'
          ],
          policyRef: 'Super Star Value Plus Policy Terms (Section 4.2)',
          durationTag: '24 Months'
        },
        {
          id: 'ped-waiting',
          title: '36 Months Pre-Existing Disease (PED) Waiting',
          summary: 'A waiting period of 36 months applies for pre-existing medical conditions (reducible via Quick Shield).',
          policyRef: 'Super Star Value Plus Policy Terms (Section 4.3)',
          durationTag: '36 Months'
        },
        {
          id: 'value-network-copay',
          title: 'Value Network 15% Co-Payment Outside Network',
          summary: '15% co-payment applies on admissible claims if treatment is availed outside the designated Value Network hospitals.',
          highlight: 'Zero co-payment when treated inside Star Health listed network hospitals.',
          policyRef: 'Super Star Value Plus Network Schedule (Section 3.2)',
          durationTag: '15% Non-Network'
        },
        {
          id: 'deductible-copay-exclusive',
          title: 'Co-pay & Deductible Mutual Exclusivity',
          summary: 'Important: Voluntary Co-payment and Voluntary Deductible cannot be selected together.',
          policyRef: 'Super Star Value Plus Endorsement Rules (Section 5.3)',
          durationTag: 'Mutually Exclusive'
        }
      ]
    },

    mustKnow: {
      heading: 'MUST-KNOW DETAILS',
      subheading: 'Key policy terms and terms of Super Star Value Plus',
      buttonLabel: 'MUST KNOW DETAILS',
      layout: 'details-modal',
      items: [
        {
          id: 'value-plus-eligibility',
          icon: '👥',
          title: 'ELIGIBILITY & POLICY TERMS',
          paragraphs: [
            'Individual: Adults 18 years to any age.',
            'Floater: Adults 18 years to any age; Dependent children 91 days to 25 years.',
            'Floater Family: Self + Spouse / Live-in Partner + Dependent Children (Max 2 Adults + 4 Children).',
            'Policy Term: 1, 2, or 3 Years.'
          ]
        },
        {
          id: 'value-plus-discounts',
          icon: '🏷️',
          title: 'LONG-TERM PREMIUM DISCOUNTS',
          paragraphs: [
            '2-year policy term: 10% discount on second-year premium.',
            '3-year policy term: 12.5% discount on third-year premium.',
            'Mandatory Co-pay: Not applicable (except Value Network 15% outside network).'
          ]
        },
        {
          id: 'value-plus-si',
          icon: '💎',
          title: 'SUM INSURED OPTIONS',
          paragraphs: [
            'Sum Insured: ₹7.5 Lakh, ₹10 Lakh, ₹15 Lakh, ₹20 Lakh, ₹25 Lakh.',
            'In-Patient Hospitalisation includes boarding/nursing up to ₹5,000/day.',
            'Room Rent Modification to Single Private AC Room is optionally available.'
          ]
        },
        {
          id: 'value-plus-return-consumables',
          icon: '🛡️',
          title: 'PREMIUM RETURN & CONSUMABLES',
          paragraphs: [
            'No in-patient claim for 5 years → first-year base premium refunded.',
            'Inbuilt Consumables cover under admissible inpatient/day-care claims.',
            'Durable Medical Equipment (DME) covered up to ₹1 Lakh per policy year.'
          ]
        }
      ]
    },

    featuresSections: [
      {
        id: 'basic-covers',
        title: 'BASIC COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'vp-inpatient-boarding',
            title: 'In-Patient Hospitalisation (Up to ₹5,000/day)',
            subtitle: 'Boarding, Nursing & ICU Charges up to ₹5,000/day',
            badge: 'UP TO ₹5,000/DAY',
            iconType: 'home',
            summary: 'Coverage up to Sum Insured including boarding and nursing up to ₹5,000/day, ICU charges, surgeon, anaesthetist fees, blood, oxygen, surgical appliances, medicines, diagnostics, dialysis, chemotherapy, radiotherapy, pacemakers, stents and related expenses.',
            points: [
              'Boarding and nursing expenses up to ₹5,000/day',
              'ICU charges, surgeon, anaesthetist and specialist fees covered',
              'Dialysis, chemotherapy, radiotherapy, pacemakers, stents covered up to Sum Insured'
            ]
          },
          {
            id: 'vp-pre-post',
            title: 'Pre & Post Hospitalization: 30 & 60 Days',
            subtitle: '30 Days Pre & 60 Days Post Cover',
            badge: '30 & 60 DAYS',
            iconType: 'calendar',
            summary: 'Pre-hospitalization expenses for 30 days and post-hospitalization recovery expenses for 60 days covered.',
            points: [
              'Pre-hospitalization: 30 days covered',
              'Post-hospitalization: 60 days covered'
            ]
          },
          {
            id: 'vp-day-care',
            title: 'All Day Care Procedures',
            subtitle: 'Covered up to Sum Insured',
            badge: 'ALL DAY CARE',
            iconType: 'activity',
            summary: 'All Day Care Procedures covered up to Sum Insured with zero 24-hour minimum hospitalization restriction.',
            points: [
              'All Day Care Procedures covered up to Sum Insured',
              'Modern Day Care treatments included'
            ]
          },
          {
            id: 'vp-modern-treatments',
            title: 'Modern Treatments',
            subtitle: 'Advanced Robotic, Immunotherapy & Laser',
            badge: 'MODERN SURGERIES',
            iconType: 'cpu',
            summary: 'Advanced modern treatments covered: Stem Cell Therapy for Bone Marrow Transplant, Uterine Artery Embolisation, Balloon Sinuplasty, Deep Brain Stimulation, Oral Chemotherapy, Immunotherapy, Intravitreal injections, Robotic Surgeries, Stereotactic Radiosurgeries, Bronchial Thermoplasty, Holmium Laser Treatment, and IONM.',
            points: [
              'Robotic Surgeries, Stem Cell Therapy, Deep Brain Stimulation',
              'Oral Chemotherapy, Immunotherapy & Intravitreal injections',
              'Stereotactic Radiosurgeries, Bronchial Thermoplasty, Holmium Laser & IONM'
            ]
          },
          {
            id: 'vp-ayush-ambulance',
            title: 'AYUSH, Road & Air Ambulance',
            subtitle: 'AYUSH & Road up to SI, Air up to ₹5 Lakh/yr',
            badge: 'AMBULANCE & AYUSH',
            iconType: 'truck',
            summary: 'AYUSH inpatient hospitalisation and road ambulance covered up to Sum Insured. Air ambulance covered up to ₹5 Lakh per policy year.',
            points: [
              'AYUSH treatments covered up to Sum Insured',
              'Road Ambulance covered up to Sum Insured',
              'Air Ambulance up to ₹5 Lakh per policy year'
            ]
          },
          {
            id: 'vp-organ-donor-homecare',
            title: 'Organ Donor & Home Care',
            subtitle: 'Donor Complications & Domiciliary Covered',
            badge: 'DONOR & HOME CARE',
            iconType: 'heart',
            summary: 'Organ donor expenses covered including donor post-donation complications. Home Care covered for specified conditions. Domiciliary hospitalization covered.',
            points: [
              'Organ donor covered including post-donation complications',
              'Home Care covered for applicable specified conditions',
              'Domiciliary hospitalization covered where applicable',
              'E-Domestic Second Medical Opinion available'
            ]
          },
          {
            id: 'vp-restoration-bonus',
            title: 'Restoration & Cumulative Bonus',
            subtitle: '100% Unlimited Restorations & 50% Bonus (max 100%)',
            badge: 'RESTORE & BONUS',
            iconType: 'refresh',
            summary: 'Automatic restoration up to 100% Sum Insured unlimited times in a policy year. Cumulative Bonus of 50% per claim-free year up to maximum 100%.',
            points: [
              'Automatic restoration up to 100%, unlimited times',
              'Cumulative Bonus: 50% per claim-free year, maximum 100%'
            ]
          },
          {
            id: 'vp-teleconsult-face-scan',
            title: 'Tele-Consultation + AI Face Scan',
            subtitle: 'Unlimited Tele-Consultation & AI Face Scan',
            badge: 'AI FACE SCAN',
            iconType: 'zap',
            summary: 'Unlimited tele-consultation through Star Health App featuring AI-powered face scan health assessment.',
            points: [
              'Unlimited tele-consultation through Star Health App',
              'AI-driven Face Scan vital signs monitoring',
              'Discounts on Pharmacy, Diagnostics and Consultations'
            ]
          },
          {
            id: 'vp-freeze-age-wellness',
            title: 'Freeze Your Age & STAR Wellness',
            subtitle: 'Freeze Age until Claim & 20% Renewal Discount',
            badge: 'FREEZE AGE',
            iconType: 'clock',
            summary: 'Premium based on entry age until applicable claim. STAR Wellness yields 1,000+ points and up to 20% renewal discount.',
            points: [
              'Freeze Your Age: Premium based on entry age until applicable claim',
              'STAR Wellness: Over 1,000 points annually and up to 20% renewal discount',
              'Dental check-up & cleaning in 2nd and 3rd policy years'
            ]
          },
          {
            id: 'vp-value-network',
            title: 'Value Network Co-Pay',
            subtitle: '0% in Network, 15% Co-Pay Outside Network',
            badge: 'VALUE NETWORK',
            iconType: 'shield',
            summary: 'Zero co-payment at designated network hospitals. 15% co-payment outside listed network hospitals.',
            points: [
              'Zero co-payment in network hospitals',
              '15% co-payment outside listed network hospitals'
            ]
          }
        ]
      },
      {
        id: 'additional-covers',
        title: 'ADDITIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2',
        items: [
          {
            id: 'vp-premium-return-booster',
            title: 'Premium Return & Health Booster',
            subtitle: '1st Year Premium Refunded after 5 Yrs & 100% Booster every 7 Yrs',
            badge: 'PREMIUM RETURN',
            iconType: 'dollar',
            summary: 'No in-patient claim for 5 years triggers first-year base premium refund. Health Booster adds 100% base Sum Insured every 7 claim-free years.',
            points: [
              'Premium Return: No in-patient claim for 5 years → first-year base premium refunded',
              'Health Booster: 100% additional base Sum Insured every 7 claim-free years'
            ]
          },
          {
            id: 'vp-consumables-grace',
            title: 'Consumables & Grace Period Cover',
            subtitle: 'Inbuilt Non-Payables & Coverage in Grace Period',
            badge: 'CONSUMABLES',
            iconType: 'shield',
            summary: 'Consumables covered under admissible inpatient/day-care claims. Active protection during policy grace period.',
            points: [
              'Consumables: Covered under admissible inpatient/day-care claim',
              'Grace Period Cover: Available during grace period'
            ]
          },
          {
            id: 'vp-econnect-nursing',
            title: 'E-Connect & Nursing at Home',
            subtitle: 'Virtual Fitness, Nutritionist & ₹1,000/day Nursing',
            badge: 'E-CONNECT & NURSING',
            iconType: 'heart',
            summary: 'Virtual fitness sessions, nutritionist advice, and international second opinion twice a year. Nursing at home ₹1,000/day up to 10 days.',
            points: [
              'E-Connect: Virtual fitness, nutritionist and E-International second opinion twice per policy year',
              'Nursing at Home: ₹1,000/day up to 10 days per policy year'
            ]
          },
          {
            id: 'vp-dme-multiplier',
            title: 'Durable Medical Equipment & SI Multiplier',
            subtitle: 'Up to ₹1 Lakh DME & Multiplier across Term',
            badge: 'DME & MULTIPLIER',
            iconType: 'zap',
            summary: 'Durable Medical Equipment covered up to ₹1 Lakh per policy year. Annual Sum Insured can be combined across long-term policy periods.',
            points: [
              'Durable Medical Equipment: Up to ₹1 Lakh per policy year',
              'Sum Insured Multiplier: Combine/utilize annual SI across long-term policy term'
            ]
          }
        ]
      },
      {
        id: 'optional-covers',
        title: 'OPTIONAL COVERS',
        gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        items: [
          {
            id: 'vp-room-rent-mod',
            title: 'Room Rent Modification',
            subtitle: 'Upgrade to Single Private AC Room',
            badge: 'ROOM MODIFICATION',
            isRider: true,
            iconType: 'home',
            summary: 'Option to modify boarding limit to Single Private AC Room without ₹5,000/day cap.',
            points: ['Option for Single Private AC Room modification']
          },
          {
            id: 'vp-voluntary-copay',
            title: 'Voluntary Co-payment',
            subtitle: '10% or 20% Co-Payment',
            badge: 'VOLUNTARY CO-PAY',
            isRider: true,
            iconType: 'dollar',
            summary: 'Choose 10% or 20% voluntary co-payment to reduce policy premium. Note: Cannot be selected together with Voluntary Deductible.',
            points: [
              '10% / 20% Voluntary Co-payment option',
              'Important: Cannot be selected together with Voluntary Deductible'
            ]
          },
          {
            id: 'vp-voluntary-deductible',
            title: 'Voluntary Deductible',
            subtitle: '₹25,000 / ₹50,000 Deductible',
            badge: 'DEDUCTIBLE',
            isRider: true,
            iconType: 'dollar',
            summary: 'Choose ₹25,000 or ₹50,000 voluntary deductible. Note: Cannot be selected together with Voluntary Co-payment.',
            points: [
              '₹25,000 / ₹50,000 Voluntary Deductible option',
              'Important: Cannot be selected together with Voluntary Co-payment'
            ]
          },
          {
            id: 'vp-inclinic-consult',
            title: 'In-Clinic Consultation',
            subtitle: 'Up to 4 In-Clinic Doctor Consultations/yr',
            badge: 'OPD CONSULT',
            isRider: true,
            iconType: 'clipboard',
            summary: 'Covers up to 4 outpatient in-clinic doctor consultations per policy year.',
            points: ['Up to 4 consultations per policy year']
          },
          {
            id: 'vp-param-seva-mamta',
            title: 'Param Seva & Mamta',
            subtitle: 'Plan C Options for Seniors & Maternity',
            badge: 'CARE RIDERS',
            isRider: true,
            iconType: 'users',
            summary: 'Param Seva (Plan C, entry age 56+) and Mamta (Plan C, entry age 12+).',
            points: [
              'Param Seva: Plan C, entry age 56+',
              'Mamta: Plan C, entry age 12+'
            ]
          },
          {
            id: 'vp-stay-fit',
            title: 'Stay Fit',
            subtitle: 'Up to 7 Fitness-Centre Sessions/Week (Age 18–60)',
            badge: 'FITNESS RIDER',
            isRider: true,
            iconType: 'activity',
            summary: 'Up to 7 fitness-centre sessions per week for entry age 18–60.',
            points: ['Up to 7 fitness-centre sessions per week, entry age 18–60']
          }
        ]
      }
    ]
  }
};

// Parent Super Star container (acts as parent plan metadata)
export const SUPER_STAR_PARENT_PLAN = {
  planId: 'star-super-star',
  planName: 'Super Star',
  fullName: 'Star Health Super Star',
  companyName: 'Star Health',
  tagline: 'Choose from 5 Tailored Variants: Classic, Secure, Preferred, Essential, and Value Plus',
  coverage: '₹5 Lakh - Unlimited',
  hasVariants: true,
  variants: SUPER_STAR_VARIANTS_META,
  uiConfig: {
    primaryColor: '#003087',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  reportCard: STAR_HEALTH_SHARED_REPORT_CARD,
  companyStrength: STAR_HEALTH_SHARED_COMPANY_STRENGTH
};
