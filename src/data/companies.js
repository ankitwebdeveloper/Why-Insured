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
      },

      {
        id: "hdfc-optima-secure",
        name: "Optima Secure",
        description: "4X Coverage with Secure, Plus, Restore & Protect benefits.",
        coverage: "₹10 Lakh",
        premium: "₹13,200/year",
        benefits: [
          "2X Cover from Day 1 (Secure Benefit)",
          "100% Increase in 2 Years (Plus Benefit)",
          "Automatic Restoration up to 100%",
          "Consumables & Non-Medical items covered"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Any Room Category with no sub-limits",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "50% increase per claim-free year (Max 100%)",
          exclusions: "Cosmetic surgery, intentional self-injury, substance abuse"
        }
      },
      {
        id: "hdfc-optima-restore",
        name: "Optima Restore",
        description: "Instant 100% Restoration with Stay Active and Multiply benefits.",
        coverage: "₹5 Lakh - ₹50 Lakh",
        premium: "₹11,500/year",
        benefits: [
          "Instant 100% Restoration for unrelated illnesses",
          "Stay Active discount on premium up to 8%",
          "Multiply Benefit: 50% No Claim Bonus every year",
          "Zero co-payment across India"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Single Private Room",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "50% increase per claim-free year (Max 100%)",
          exclusions: "Cosmetic treatments, experimental treatments, maternity"
        }
      },
      {
        id: "hdfc-energy",
        name: "Energy",
        description: "Specialized health insurance covering Diabetes & Hypertension from Day 1.",
        coverage: "₹5 Lakh - ₹50 Lakh",
        premium: "₹18,200/year",
        benefits: [
          "Covers Diabetes Type 1, Type 2 & Hypertension from Day 1",
          "Personalized health coaching and rewards",
          "Annual comprehensive health check-ups",
          "E-consultations with specialists included"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "Day 1 for Diabetes & Hypertension; 30 days for others",
          roomRent: "Single Private A/C Room",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "Wellness incentive discount on renewals",
          exclusions: "Weight control surgeries, cosmetic procedures, congenital disorders"
        }
      },
      {
        id: "hdfc-myhealth-medisure-super-topup",
        name: "my:health Medisure (Super Top-Up)",
        description: "High-sum insured super top-up protection above deductible threshold.",
        coverage: "₹10 Lakh - ₹1 Crore",
        premium: "₹4,800/year",
        benefits: [
          "Aggregate deductible across the entire policy year",
          "No pre-policy medical checkup up to 55 years",
          "Cashless treatment at 12,000+ network hospitals",
          "Lifelong renewability with zero co-pay"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Up to Single Private Room",
          hospitalization: "Covered for claims exceeding chosen deductible",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization",
          dayCare: "Day Care procedures covered after deductible",
          noClaimBonus: "Not applicable on top-up plans",
          exclusions: "Claims within deductible threshold, cosmetic treatments, breach of law"
        }
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
        id: "medicare-select",
        name: "MediCare Select",
        description: "Comprehensive health insurance plan delivering full inpatient coverage, restoration, and cumulative bonus.",
        coverage: "₹5 Lakh",
        premium: "₹10,500/year",
        benefits: [
          "100% Restoration of Sum Insured for unrelated illnesses",
          "Consumables & In-patient Hospitalization Covered",
          "Cumulative Bonus of 10% per claim-free year (Max 50%)",
          "AYUSH & All Day Care Procedures Covered"
        ],
        details: {
          eligibility: "18 to 65 Years (Children: 91 days to 25 years)",
          waitingPeriod: "30 Days initial, 24 Months for Specified Diseases, 36 Months for Pre-existing diseases",
          roomRent: "Shared Room / Single Private Room Coverage",
          hospitalization: "Actual inpatient hospitalization expenses covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered (<24 hours admission)",
          noClaimBonus: "10% increase in sum insured per claim-free year (Max 50%)",
          exclusions: "Cosmetic surgery, self-inflicted injuries, substance abuse, rest cures"
        }
      },
      {
        id: "medicare-protect",
        name: "MediCare Protect",
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
        id: "medicare-plus",
        name: "MediCare Plus",
        description: "High-value super top-up plan to secure extra coverage over your base policy.",
        coverage: "₹20 Lakh",
        premium: "₹6,500/year",
        benefits: [
          "Super top-up format with deductible options",
          "No pre-policy medical check-up up to 55 years",
          "Aggregate deductible benefit",
          "Covers Ayush & daycare"
        ],
        details: {
          eligibility: "18 to 70 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Single Private A/C Room",
          hospitalization: "Expenses above deductible covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization",
          dayCare: "Covered above defined deductible",
          noClaimBonus: "No cumulative bonus on top-up policies",
          exclusions: "Congenital external anomalies, cosmetic treatment"
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
        id: "complete-health-insurance",
        name: "Complete Health Insurance",
        description: "Rich wellness rewards, donor expense covers, and reset benefits for maximum security.",
        coverage: "₹10 Lakh",
        premium: "₹15,200/year",
        benefits: [
          "Earn Wellness Rewards up to 20% discount",
          "Donor expenses covered fully",
          "Reset Benefit (instant restore upon exhaustion)",
          "No capping on room rent"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions",
          roomRent: "No capping - Private A/C Room",
          hospitalization: "Full cover up to sum insured",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization",
          dayCare: "All Day Care treatments covered",
          noClaimBonus: "10% of sum insured added yearly (Max 50%)",
          exclusions: "Aesthetic treatment, fertility treatments, voluntary rehabilitation"
        }
      },
      {
        id: "health-shield",
        name: "Health Shield",
        description: "Perfect budget coverage with OPD benefits and pre-hospitalization allowances.",
        coverage: "₹5 Lakh",
        premium: "₹8,900/year",
        benefits: [
          "Cashless medical treatments",
          "OPD consult benefits included",
          "Ayush hospitalization coverage",
          "Free online medical consultations"
        ],
        details: {
          eligibility: "18 to 60 Years",
          waitingPeriod: "30 Days initial, 48 Months for Pre-existing conditions",
          roomRent: "Private Room up to 1% of Sum Insured",
          hospitalization: "Standard hospitalization covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Common daycare surgeries covered",
          noClaimBonus: "10% increase in sum insured per claim-free year",
          exclusions: "Self-inflicted injuries, beauty surgery, drug addiction therapies"
        }
      },
      {
        id: "golden-shield",
        name: "Golden Shield",
        description: "Senior citizen protection covering age-related conditions and offering home care assistance.",
        coverage: "₹10 Lakh",
        premium: "₹23,500/year",
        benefits: [
          "Specifically covers senior citizen health concerns",
          "Home care hospitalization covered",
          "Free medical checkups every year",
          "Emergency ambulance fees covered"
        ],
        details: {
          eligibility: "60 to 80 Years",
          waitingPeriod: "30 Days initial, 24 Months for Pre-existing conditions",
          roomRent: "Private Single Room",
          hospitalization: "Senior in-patient treatment covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Common senior surgeries covered",
          noClaimBonus: "Cumulative bonus not applicable",
          exclusions: "Obesity surgeries, hair transplants, cosmetic dental fixes"
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
        id: "care-plan",
        name: "Care Plan",
        description: "The flagship comprehensive health policy covering hospitalization, day care, and ambulance costs.",
        coverage: "₹10 Lakh",
        premium: "₹12,800/year",
        benefits: [
          "No co-payment across any age group",
          "Alternative treatments covered up to 100%",
          "Recharge Benefit (auto restores sum insured)",
          "No pre-policy medical checkup up to 45 years"
        ],
        details: {
          eligibility: "18 to 65 Years (Floater options for children)",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing conditions",
          roomRent: "Single Private Room covered",
          hospitalization: "Actual inpatient expenses covered",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "10% of sum insured per year (Max 50%)",
          exclusions: "Sexually transmitted diseases, self-harm, beauty enhancement surgeries"
        }
      },
      {
        id: "care-freedom",
        name: "Care Freedom",
        description: "Simplified health insurance with no pre-policy medical tests required for any age.",
        coverage: "₹5 Lakh",
        premium: "₹11,400/year",
        benefits: [
          "No pre-policy medical check-up required",
          "Consumables cover included",
          "Durable medical equipment covered",
          "Free health portal access"
        ],
        details: {
          eligibility: "91 days to Lifetime",
          waitingPeriod: "30 Days initial, 24 Months for Pre-existing conditions",
          roomRent: "Standard Twin Sharing Room covered",
          hospitalization: "Standard inpatient cover up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Over 170 Day Care procedures covered",
          noClaimBonus: "10% of sum insured added annually (Max 50%)",
          exclusions: "Psychological disorders, hormone replacement therapy, cosmetic care"
        }
      },
      {
        id: "care-heart",
        name: "Care Heart",
        description: "Dedicated cardiac health cover designed specifically for pre-existing heart patients.",
        coverage: "₹7.5 Lakh",
        premium: "₹19,800/year",
        benefits: [
          "Covers cardiac pre-existing ailments",
          "OPD consultations for cardiologists included",
          "Annual cardiac screening checkups",
          "Short 24-month waiting period for heart treatments"
        ],
        details: {
          eligibility: "18 to 75 Years",
          waitingPeriod: "24 Months for cardiac treatments, 30 days initial for other diseases",
          roomRent: "Single Standard Room",
          hospitalization: "Hospitalization expenses covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization",
          dayCare: "Cardiac daycare treatments covered",
          noClaimBonus: "No cumulative bonus on specialized heart plans",
          exclusions: "Genetic disorders, dental cleanings, vanity surgeries"
        }
      }
    ]
  }
];
