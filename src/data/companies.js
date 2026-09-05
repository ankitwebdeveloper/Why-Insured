import hdfcLogo from '../assets/hdfc-ergo-logo.png';
import tataLogo from '../assets/tata-aig.png';
import starLogo from '../assets/star-health.png';
import nivaLogo from '../assets/niva-bupa.png';
import iciciLogo from '../assets/icici-lombard.png';
import careLogo from '../assets/care-health.png';
import relianceLogo from '../assets/Reliance General Insurance.png';
import magmaLogo from '../assets/Magma HDI General Insurance.png';
import indusindLogo from '../assets/IndusInd General Insurance.png';
import { optimaSecurePlusData } from './optimaSecurePlusData';
import { getMagmaPlanData } from './magmaPlansData';
import { getReliancePlanData } from './reliancePlansData';

export const companiesData = [
  {
    id: "hdfc-ergo",
    name: "HDFC ERGO",
    fullName: "HDFC ERGO General Insurance Company",
    slug: "hdfc-ergo",
    category: "Health Insurance",
    logo: hdfcLogo,
    description: "One of India's leading health insurance providers, delivering comprehensive coverage, instant cashless claims, and digital-first support.",
    theme: {
      primary: "#DC2626",      // HDFC Red
      secondary: "#0A1128",    // Navy Blue
      accent: "#DC2626",
      background: "#FFF5F5",   // Light Red-White
      text: "#0F172A"
    },
    plans: [
      {
        id: optimaSecurePlusData.planId,
        name: optimaSecurePlusData.planName,
        description: optimaSecurePlusData.tagline,
        coverage: optimaSecurePlusData.coverage,
        premium: optimaSecurePlusData.premium,
        benefits: optimaSecurePlusData.benefits,
        details: optimaSecurePlusData.details
      }
    ]
  },
  {
    id: "tata-aig",
    name: "Tata AIG",
    fullName: "Tata AIG General Insurance Company",
    slug: "tata-aig",
    category: "Health Insurance",
    logo: tataLogo,
    description: "Bringing the trust of Tata to health insurance, featuring global covers and robust maternity add-ons.",
    theme: {
      primary: "#0038A8",      // Deep Royal Blue
      secondary: "#FFFFFF",    // White
      accent: "#0038A8",
      background: "#F0F4FF",   // Soft Royal Blue-White
      text: "#0F172A"
    },
    plans: [
      {
        id: "medicare-premier",
        name: "MediCare Premier",
        description: "Comprehensive Health Insurance with Enhanced Medical & Wellness Benefits.",
        coverage: "₹50 Lakh - ₹3 Crore",
        benefits: [
          "In-Patient Treatment & Consumables covered up to Sum Insured",
          "100% Automatic Restore Benefit on base sum insured",
          "Tier-wise coverage options from ₹50 Lakh up to ₹3 Crore",
          "Maternity, OPD, Dental & Global Planned Hospitalization covered"
        ],
        details: {
          eligibility: "18 to 65 Years (Children: 91 days to 25 years)",
          waitingPeriod: "30 Days initial, 24 Months for Specified Diseases, as per policy terms for pre-existing diseases",
          roomRent: "Single Private Room / No Room Rent Capping",
          hospitalization: "Actual inpatient hospitalization expenses covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 90 to 200 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered (<24 hours admission)",
          noClaimBonus: "50% increase in sum insured per claim-free year (Max 100%)",
          exclusions: "Cosmetic surgery, self-inflicted injuries, substance abuse, rest cures"
        }
      },
      {
        id: "medicare-select",
        name: "MediCare Select",
        description: "Standard essential coverage covering hospitalization and recovery benefits.",
        coverage: "₹5 Lakh",
        premium: "₹8,200/year",
        benefits: [
          "In-patient hospitalization covered",
          "Organ Donor expenses covered",
          "Ayush treatment covered up to 100%",
          "Daily cash benefit option"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 48 Months for Pre-existing diseases",
          roomRent: "Single Private Room covered",
          hospitalization: "Inpatient expenses covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization covered",
          dayCare: "Day Care procedures covered",
          noClaimBonus: "10% of sum insured per year (Max 100%)",
          exclusions: "Intentional self-injury, war, dental surgeries unless accidental"
        }
      },
      {
        id: "medicare-reserve",
        name: "MediCare Reserve",
        description: "Super Top-Up Health Insurance with flexible deductible options and restoration benefit.",
        coverage: "₹5 Lakh - ₹1 Crore",
        premium: "₹3,500/year",
        benefits: [
          "Inpatient Hospitalization up to Sum Insured with Single Private Room",
          "Pre & Post Hospitalization covered for 90 & 90 days",
          "Waiver of Aggregate Deductible option after 5 consecutive years",
          "No Claim Bonus (50% to 100%) and Restore Benefit available"
        ],
        details: {
          eligibility: "18 to 65 Years (Dependent children: 91 days to 25 years)",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases & Specified surgeries",
          roomRent: "Single Private Room covered",
          hospitalization: "Inpatient hospitalization covered up to Sum Insured",
          prePostHospital: "90 Days Pre & 90 Days Post Hospitalization covered",
          dayCare: "All Day Care treatments covered",
          noClaimBonus: "50% to 100% bonus per claim-free year (after opting waiver of aggregate deductible)",
          exclusions: "Permanent exclusions as per IRDAI & Tata AIG policy terms"
        }
      }
    ]
  },
  {
    id: "star-health",
    name: "Star Health",
    fullName: "Star Health & Allied Insurance Company",
    slug: "star-health",
    category: "Health Insurance",
    logo: starLogo,
    description: "India's first standalone health insurance firm, famous for its massive network of cashless hospitals and specialized medical covers.",
    theme: {
      primary: "#003087",      // Deep Blue
      secondary: "#FFFFFF",    // White
      accent: "#003087",
      background: "#F0F4FF",   // Light Deep Blue-White
      text: "#0F172A"
    },
    plans: [
      {
        id: "star-women-care",
        name: "Women Care",
        description: "Specialized health insurance designed for women with mother ICU cover, inbuilt consumables, and maternity benefits.",
        coverage: "₹5 Lakh - ₹1 Crore",
        premium: "₹14,500/year",
        benefits: [
          "Room Rent: Any Room for ₹50L-₹1Cr (1% for ₹5L, Any Room except Suite for ₹10L-₹25L)",
          "Inbuilt Consumables Cover & All Day Care Procedures Covered",
          "Star Mother Cover: Hospital/Hotel stay for mother if child (<12 yrs) in ICU",
          "100% Restoration of SI once a year & 20% to 100% Cumulative Bonus"
        ],
        details: {
          eligibility: "Individual: Females 18-75 yrs | Floater: Males allowed if 1 adult female covered | Children: 91 days-25 yrs (Daughter up to 30 yrs)",
          waitingPeriod: "30 Days initial, 24 Months for Specific diseases & PED, 180 Days for Cancer Rider",
          roomRent: "₹5L: 1% SI/day | ₹10L-₹25L: Any room (except suite) | ₹50L-₹1Cr: Any room",
          hospitalization: "Inpatient hospitalization expenses covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "20% per claim-free year up to 100%",
          exclusions: "Yoga & Naturopathy, self-inflicted injuries, breach of law, cosmetic surgery"
        }
      }
    ]
  },
  {
    id: "niva-bupa",
    name: "Niva Bupa",
    fullName: "Niva Bupa Health Insurance Company",
    slug: "niva-bupa",
    category: "Health Insurance",
    logo: nivaLogo,
    description: "Next-generation health protection with flexible coverage and comprehensive diagnostic benefits.",
    theme: {
      primary: "#0EA5E9",      // Cyan / Sky Blue
      secondary: "#FFFFFF",    // White
      accent: "#F97316",       // Orange Accent Dot/Icons
      background: "#F0F9FF",   // Soft Cyan-White
      text: "#0F172A"
    },
    plans: [
      {
        id: "aspire",
        name: "Aspire",
        description: "Next-gen protection with Booster+ cumulative coverage, Lock the Clock premium freezing, and unlimited restoration.",
        coverage: "₹5 Lakh - ₹1 Crore",
        premium: "₹12,800/year",
        benefits: [
          "100% Cashless Policy across network hospitals",
          "Any Room Category & No Limit on ICU charges",
          "Pre & Post Hospitalization: 60 & 180 Days",
          "Unlimited Restoration (10+10+10.....10 Lac)",
          "Bonus / Booster+ up to 10X based on entry age",
          "Health Check-up: ₹5,000 from Day 1"
        ],
        details: {
          eligibility: "18 to Lifetime",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions",
          roomRent: "Any Room Category with no sub-limits",
          hospitalization: "Inpatient expenses covered up to Sum Insured with no limit on ICU",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "Booster+ unutilised Sum Insured carry forward up to 10X",
          exclusions: "Cosmetic surgery, intentional self-injury, substance abuse"
        }
      },
      {
        id: "reassure-2-0",
        name: "ReAssure 2.0",
        description: "Smart health cover with Unlimited Restoration, Booster bonus up to 10X, Day 1 Health Check-up, and Safeguard+ rider.",
        coverage: "₹5 Lakh - ₹1 Crore",
        premium: "₹11,500/year",
        benefits: [
          "100% Cashless Policy across network hospitals",
          "Any Room Category & No Limit on ICU Charges",
          "Pre & Post Hospitalization: 60 & 180 Days",
          "Unlimited Restoration (10+10+10.....10 Lac)",
          "Booster (Bonus): Bronze+ 3x, Platinum+ 5x, Titanium+ 10x",
          "Health Check-up: ₹5,000 from Day 1",
          "Unlimited Tele-consultation",
          "Safeguard+ (Optional Rider)"
        ],
        details: {
          eligibility: "18 to Lifetime",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions, 24 Months for specific illnesses",
          roomRent: "Any Room Category with no sub-limits",
          hospitalization: "Inpatient expenses covered up to Sum Insured with no limit on ICU charges",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered (also covered if admission > 2 hrs)",
          noClaimBonus: "Booster (Bonus) Bronze+ 3x, Platinum+ 5x, Titanium+ 10x carry forward",
          exclusions: "Cosmetic surgery, intentional self-injury, substance abuse, investigation-only admissions"
        }
      },
      {
        id: "health-recharge",
        name: "Health Recharge",
        description: "Flexible Sum Insured, deductible and customer-level optional add-ons.",
        coverage: "₹2 Lakh - ₹95 Lakh",
        premium: "Available on request",
        benefits: [
          "Base Sum Insured options from ₹2 Lakh to ₹95 Lakh",
          "E-Saver and Super Top-up deductible options",
          "Unlimited e-Consultation",
          "Optional Personal Accident and Critical Illness Covers"
        ],
        details: {
          eligibility: "As stated in the policy wording",
          waitingPeriod: "As stated in the policy wording",
          roomRent: "Tier-based room rent coverage",
          hospitalization: "In-patient Treatment covered up to Sum Insured",
          prePostHospital: "60 days pre-hospitalization and 90 days post-hospitalization",
          dayCare: "Covered up to Sum Insured",
          noClaimBonus: "Loyalty Additions subject to applicable conditions",
          exclusions: "As stated in the policy wording"
        }
      },
      {
        id: "reassure-3-0",
        name: "ReAssure 3.0",
        description: "Four Niva Bupa variants with Booster+, ReAssure Forever, and flexible worldwide treatment options.",
        coverage: "₹5 Lakh / ₹10 Lakh / Unlimited",
        premium: "Available on request",
        benefits: [
          "Classic, Select, Elite and Black variants",
          "Booster+ carried forward up to 10×",
          "ReAssure Forever unlimited restorations",
          "Optional worldwide treatment and add-on benefits"
        ],
        details: {
          eligibility: "As stated in the policy wording",
          waitingPeriod: "Specific Diseases: 24 Months; PED: 36 Months, with optional reductions",
          roomRent: "General Room, Twin Sharing, Single Private Room or Any Room by variant",
          hospitalization: "2+ hours; 24+ hours for AYUSH",
          prePostHospital: "60 / 180 Days",
          dayCare: "As stated in the policy wording",
          noClaimBonus: "Booster+ carried forward up to 10×",
          exclusions: "As stated in the policy wording"
        }
      }
    ]
  },
  {
    id: "icici-lombard",
    name: "ICICI Lombard",
    fullName: "ICICI Lombard General Insurance Company",
    slug: "icici-lombard",
    category: "Health Insurance",
    logo: iciciLogo,
    description: "A financial giant in health care, providing rich reward structures, OPD consultations, and donor protection plans.",
    theme: {
      primary: "#F58220",      // ICICI Lombard Primary Orange
      secondary: "#D94A0B",    // Deep Orange
      accent: "#F58220",
      background: "#FFF4E8",   // Soft Light Orange Tint
      text: "#1F2937"
    },
    plans: [
      {
        id: "elevate",
        name: "Elevate",
        description: "Infinite Care, Power Booster, Unlimited Restoration & Customizable Healthcare Protection.",
        coverage: "₹5 Lakh - ₹3 Crore",
        premium: "₹16,500/year",
        benefits: [
          "Single Private A/c Room (100% Cashless)",
          "Pre & Post Hospitalization: 90 & 180 Days",
          "No Limit on ICU & Unlimited Restoration",
          "Power Booster & Infinite Care Riders Available"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, Day 31 with Jumpstart",
          roomRent: "Single Private A/C Room (100% Cashless)",
          hospitalization: "Covered up to Sum Insured with No Limit on ICU",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered (<24 hrs admission)",
          noClaimBonus: "20% to 100% Cumulative Bonus / 100% yearly with Power Booster",
          exclusions: "Cosmetic surgery, intentional self-injury, breach of law"
        }
      },
      {
        id: "activate-booster",
        name: "Activate Booster",
        planType: "Super Top-Up Policy",
        description: "Super Top-Up Health Protection with High Sum Insured (up to ₹3 Cr), flexible deductibles, Guaranteed Deductible Reduction, and Plan A & Plan B variants.",
        coverage: "₹10 Lakh - ₹3 Crore",
        premium: "₹4,200/year",
        benefits: [
          "Super Top-Up with Sum Insured up to ₹3 Crore",
          "Flexible Deductibles from ₹3 Lakh to ₹20 Lakh",
          "Guaranteed Deductible Reduction (up to 50%)",
          "Pre & Post Hospitalization: 90/180 Days (Plan A) & 60/90 Days (Plan B)",
          "Room Modifier & Waiver of Deductible options",
          "Unlimited Teleconsultation & AYUSH Treatment"
        ],
        details: {
          eligibility: "18 to 65 Years (Lifelong Renewal)",
          waitingPeriod: "30 Days initial, 2 Years specific, 3 Years PED (reduced with Jumpstart)",
          roomRent: "Room Modifier option to upgrade/downgrade room category",
          hospitalization: "Covered up to Sum Insured above chosen deductible",
          prePostHospital: "Plan A: 90/180 Days | Plan B: 60/90 Days",
          dayCare: "All Day Care procedures covered up to Sum Insured",
          deductible: "₹3L, 4L, 5L, 7.5L, 10L, 15L, 20L",
          exclusions: "Cosmetic surgery, intentional self-injury, unproven treatments"
        }
      }
    ]
  },
  {
    id: "care-health",
    name: "Care Health",
    fullName: "Care Health Insurance Company",
    slug: "care-health",
    category: "Health Insurance",
    logo: careLogo,
    description: "Specialized insurer offering plans with zero co-payment options, high renewal bonuses, and wellness perks.",
    theme: {
      primary: "#1E3A8A",      // Blue (Structure/readability)
      secondary: "#FACC15",    // Bright Yellow (Accent highlights)
      accent: "#FACC15",
      background: "#FEFCE8",   // Soft Yellow-White
      text: "#0F172A"
    },
    plans: [
      {
        id: "care-supreme",
        name: "Care Supreme",
        description: "Comprehensive health insurance with unlimited automatic recharge, cumulative bonus super, and premium healthcare privileges.",
        coverage: "₹7 Lakh - ₹1 Crore",
        premium: "₹14,200/year",
        benefits: [
          "Unlimited Automatic Recharge of Sum Insured",
          "Cumulative Bonus Super up to 500%",
          "No Room Rent Capping (Single Private Room)",
          "Annual Health Check-up for all insured members"
        ],
        details: {
          eligibility: "18 to Lifetime (Children: 91 days to 24 years)",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions",
          roomRent: "Single Private Room with no sub-limits",
          hospitalization: "Actual inpatient expenses covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "Up to 500% Cumulative Bonus Super",
          exclusions: "Cosmetic surgery, self-inflicted injuries, substance abuse"
        }
      },
      {
        id: "ultimate-care",
        name: "Ultimate Care",
        description: "Next-generation health insurance providing high-value coverage with global treatments, wellness rewards, and inflation shield.",
        coverage: "₹10 Lakh - ₹2 Crore",
        premium: "₹18,500/year",
        benefits: [
          "Global inpatient hospitalization coverage",
          "Instant restore benefit on sum insured",
          "Zero co-pay and zero room sub-limits",
          "Comprehensive health & wellness perks"
        ],
        details: {
          eligibility: "18 to Lifetime",
          waitingPeriod: "30 Days initial, 24 Months for Pre-existing conditions",
          roomRent: "Any room category without capping",
          hospitalization: "Inpatient expenses covered up to Sum Insured",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "100% Cumulative Bonus",
          exclusions: "Intentional self-injury, non-medical experimental treatments"
        }
      },
      {
        id: "ultimate-joy",
        name: "Ultimate Joy",
        description: "Comprehensive family & maternity-focused health coverage with unlimited automatic recharge, 500% cumulative bonus, all room categories covered, and extensive mother & newborn benefits.",
        coverage: "₹5 Lakh - ₹1 Crore",
        premium: "₹16,800/year",
        benefits: [
          "Unlimited Automatic Recharge of Sum Insured",
          "Cumulative Bonus up to 500% (No reduction on claim)",
          "All Room Categories Covered & No Limit on ICU Charges",
          "Comprehensive Mother & New Born Baby Care Worldwide",
          "Oocyte & Surrogacy Care up to ₹1 Lac",
          "Advance Technology Methods & Ambulance Any Mode"
        ],
        details: {
          eligibility: "Adult: 18 to Lifelong | Child: 91 Days to 24/25 Years",
          waitingPeriod: "30 Days initial, 24 Months named ailments, 36 Months PED, 48 Months maternity",
          roomRent: "All Room Categories Covered with zero capping",
          hospitalization: "In-patient care covered up to Sum Insured with no limit on ICU",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered up to Sum Insured",
          noClaimBonus: "50% increase per year up to 500% SI",
          exclusions: "Cosmetic surgery, self-inflicted injuries, unproven treatments"
        }
      }
    ]
  },
  {
    id: "reliance-general",
    name: "Reliance General Insurance",
    fullName: "Reliance General Insurance Company Limited",
    slug: "reliance-general",
    category: "Health Insurance",
    logo: relianceLogo,
    description: "One of India's leading private general insurance providers, delivering comprehensive health coverage, instant cashless claims, and digital-first support.",
    theme: {
      primary: "#205398",      // Reliance Royal Blue
      secondary: "#ED1C24",    // Reliance Vibrant Red
      accent: "#ED1C24",
      background: "#FFFFFF",
      text: "#0F172A"
    },
    plans: [
      {
        id: "reliance-health-infinity",
        name: "Reliance Health Infinity Insurance",
        description: getReliancePlanData("reliance-health-infinity").tagline,
        coverage: getReliancePlanData("reliance-health-infinity").coverage,
        premium: getReliancePlanData("reliance-health-infinity").premium,
        benefits: getReliancePlanData("reliance-health-infinity").featuresSections?.[0]?.items?.slice(0, 4)?.map(item => item.title) || []
      }
    ]
  },
  {
    id: "magma-hdi",
    name: "Magma General Insurance",
    fullName: "Magma General Insurance Limited",
    slug: "magma-hdi",
    category: "Health Insurance",
    logo: magmaLogo,
    description: "Magma General Insurance health cover with flexible benefits, transparent claims, and expansive cashless network support.",
    theme: {
      primary: "#ED1B24",
      secondary: "#000000",
      accent: "#ED1B24",
      background: "#FFFFFF",
      text: "#000000"
    },
    plans: [
      {
        id: "magma-one-health-secure",
        name: "One Health Secure",
        description: getMagmaPlanData("magma-one-health-secure").tagline,
        coverage: getMagmaPlanData("magma-one-health-secure").coverage,
        premium: getMagmaPlanData("magma-one-health-secure").premium,
        benefits: getMagmaPlanData("magma-one-health-secure").featuresSections?.[0]?.items?.slice(0, 4)?.map(item => item.title) || []
      }
    ]
  },
  {
    id: "indusind-general",
    name: "IndusInd General Insurance",
    fullName: "IndusInd General Insurance Company Limited",
    slug: "indusind-general",
    category: "Health Insurance",
    logo: indusindLogo,
    description: "Part of the Hinduja Group & IndusInd ecosystem, delivering customized health policies, rapid claims settlement, and seamless digital service.",
    theme: {
      primary: "#800000",      // IndusInd Maroon / Crimson
      secondary: "#A51C30",    // Deep Crimson
      accent: "#800000",
      background: "#FFF5F5",   // Soft Crimson-White
      text: "#0F172A"
    },
    plans: []
  }
];
