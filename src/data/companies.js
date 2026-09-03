import hdfcLogo from '../assets/hdfc-ergo-logo.png';
import tataLogo from '../assets/tata-aig.png';
import starLogo from '../assets/star-health.png';
import nivaLogo from '../assets/niva-bupa.png';
import iciciLogo from '../assets/icici-lombard.png';
import careLogo from '../assets/care-health.png';
import { optimaSecurePlusData } from './optimaSecurePlusData';

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
        id: "star-comprehensive",
        name: "Star Comprehensive",
        description: "Premium cover with zero capping on room rent, covering maternity and neonatal care.",
        coverage: "₹20 Lakh",
        premium: "₹22,400/year",
        benefits: [
          "No capping on room rent",
          "Maternity & Newborn baby cover from day 1",
          "Ophthalmic & Dental treatments covered",
          "Air Ambulance coverage included"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Private Single A/C Room",
          hospitalization: "Actual expenses covered",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "100% cumulative bonus after 1 claim-free year",
          exclusions: "Sexually transmitted diseases, rehabilitation therapies, external implants"
        }
      },
      {
        id: "family-health-optima",
        name: "Family Health Optima",
        description: "Value-packed family floater plan with automatic sum insured restoration features.",
        coverage: "₹10 Lakh",
        premium: "₹16,800/year",
        benefits: [
          "Automatic 3x Sum Insured Restoration",
          "Compassionate travel assistance",
          "Newborn cover from 16th day",
          "Assisted reproduction treatment cover"
        ],
        details: {
          eligibility: "18 to 65 Years (Floater covers up to 3 dependent children)",
          waitingPeriod: "30 Days initial, 48 Months for Pre-existing conditions",
          roomRent: "Covered up to Single Private Room limit",
          hospitalization: "Floater sum insured coverage",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization",
          dayCare: "Over 400 Day Care procedures covered",
          noClaimBonus: "25% in the first year, 10% subsequently (Max 100%)",
          exclusions: "Weight control surgeries, cosmetic or plastic treatment"
        }
      },
      {
        id: "star-cardiac-care",
        name: "Star Cardiac Care",
        description: "Specialized protection for cardiac patients, including coverage for heart surgeries.",
        coverage: "₹7.5 Lakh",
        premium: "₹24,000/year",
        benefits: [
          "Covers pre-existing cardiac conditions",
          "Outpatient medical consultation included",
          "Covers cardiac device implantations",
          "Short 90-day waiting period for heart treatments"
        ],
        details: {
          eligibility: "30 to 70 Years",
          waitingPeriod: "90 Days for cardiac procedures, 30 days initial for other diseases",
          roomRent: "Single Standard Room covered",
          hospitalization: "Hospitalization expenses covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Day Care surgeries covered",
          noClaimBonus: "Cumulative bonus not applicable",
          exclusions: "Genetic disorders, cosmetic treatment, mental illness"
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
    description: "Pioneering highly flexible policies like ReAssure with lock-in premiums and comprehensive diagnostic benefits.",
    theme: {
      primary: "#0EA5E9",      // Cyan / Sky Blue
      secondary: "#FFFFFF",    // White
      accent: "#F97316",       // Orange Accent Dot/Icons
      background: "#F0F9FF",   // Soft Cyan-White
      text: "#0F172A"
    },
    plans: [
      {
        id: "reassure-2-0",
        name: "ReAssure 2.0",
        description: "Never run out of cover with forever restore benefit and lock-in premium rates.",
        coverage: "₹10 Lakh",
        premium: "₹13,900/year",
        benefits: [
          "ReAssure Forever Benefit",
          "Lock-in premium rate until first claim",
          "Booster Benefit (Carry forward unused cover)",
          "100% cashless claims processed in 30 minutes"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions",
          roomRent: "No capping - Private Suite covered",
          hospitalization: "Covers medical costs up to Sum Insured",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care treatments covered",
          noClaimBonus: "Booster benefit doubles sum insured if no claim in 2 years",
          exclusions: "Alternative therapy unless pre-approved, birth control, hormone replacement"
        }
      },
      {
        id: "health-companion",
        name: "Health Companion",
        description: "Affordable family cover with alternative treatment benefits and no co-pay.",
        coverage: "₹5 Lakh",
        premium: "₹9,200/year",
        benefits: [
          "No co-payment across any age group",
          "Alternative Ayush treatment covered up to 100%",
          "Refill Benefit (refills sum insured if exhausted)",
          "Free health checks annually"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 48 Months for Pre-existing conditions",
          roomRent: "Private Room covered",
          hospitalization: "Actual inpatient costs covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Day Care procedures covered",
          noClaimBonus: "20% increase in sum insured per claim-free year (Max 100%)",
          exclusions: "Self-medication, cosmetic therapy, dental check-up costs"
        }
      },
      {
        id: "seniors-first",
        name: "Seniors First",
        description: "Tailor-made seniors policy with co-pay waiver options and pre-existing illness coverage.",
        coverage: "₹7.5 Lakh",
        premium: "₹21,500/year",
        benefits: [
          "Co-pay waiver options available",
          "Covers pre-existing conditions from 2nd year",
          "Regular health screenings included",
          "Hospital daily cash allowance"
        ],
        details: {
          eligibility: "61 to 75 Years",
          waitingPeriod: "30 Days initial, 24 Months for Pre-existing diseases",
          roomRent: "Single Room up to 1% of Sum Insured per day",
          hospitalization: "Inpatient care covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Day Care procedures covered",
          noClaimBonus: "10% sum insured bonus per year (Max 50%)",
          exclusions: "Rest cures, cosmetic surgery, non-prescription medicines"
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
      }
    ]
  }
];
