import hdfcLogo from '../assets/hdfc-ergo-logo.png';
import tataLogo from '../assets/tata-aig.png';
import starLogo from '../assets/star-health.png';
import nivaLogo from '../assets/niva-bupa.png';
import iciciLogo from '../assets/icici-lombard.png';
import careLogo from '../assets/care-health.png';

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
        id: "optima-secure",
        name: "Optima Secure+",
        description: "Unlimited Protection. Added Every Year.",
        coverage: "₹10 Lakh",
        premium: "₹14,500/year",
        benefits: [
          "2X Secure Benefit Coverage from Day 1",
          "Infinite Benefit: 100% Base SI added every year",
          "Unlimited Restoration of Sum Insured",
          "Zero Deductions on Non-Medical Consumables"
        ],
        details: {
          eligibility: "18 to 65 Years (Children: 91 days to 25 years)",
          waitingPeriod: "30 Days initial, 36 Months for Pre-existing diseases",
          roomRent: "Any Room Category - 100% Cashless with Zero Restriction",
          hospitalization: "Covered up to 100% of sum insured",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered (<24 hours admission)",
          noClaimBonus: "100% Base SI added every year (Infinite Benefit)",
          exclusions: "Cosmetic surgery, self-inflicted injuries, drug/alcohol abuse"
        }
      },
      {
        id: "my-health-suraksha",
        name: "my:health Suraksha",
        description: "Flexible, high-value insurance with recovery benefits and health incentives.",
        coverage: "₹5 Lakh",
        premium: "₹9,800/year",
        benefits: [
          "Air Ambulance cover included",
          "Cumulative Bonus up to 100%",
          "Tax Savings under Section 80D",
          "Free health check-ups at renewals"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 48 Months for Pre-existing diseases",
          roomRent: "Covered up to Single Private Room",
          hospitalization: "Actual expenses covered",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization covered",
          dayCare: "Over 580 procedures covered",
          noClaimBonus: "10% of sum insured per year (Max 100%)",
          exclusions: "Pregnancy/maternity expenses (unless add-on purchased), dental treatments"
        }
      },
      {
        id: "energy-plan",
        name: "Energy Plan",
        description: "Specialized health insurance covering individuals with diabetes or hypertension from day one.",
        coverage: "₹7.5 Lakh",
        premium: "₹18,200/year",
        benefits: [
          "Covers Diabetes & Hypertension from Day 1",
          "Wellness coaching and rewards",
          "No pre-policy medical check-up required for select profiles",
          "E-consultations covered"
        ],
        details: {
          eligibility: "18 to 70 Years",
          waitingPeriod: "No waiting period for Diabetes/Hypertension; 30 days for others",
          roomRent: "Up to 1% of Sum Insured per day",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization covered",
          dayCare: "Day Care treatments covered up to Sum Insured",
          noClaimBonus: "Cumulative bonus not applicable for high-risk plans",
          exclusions: "Weight loss treatments, cosmetic therapies, congenital disorders"
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
        id: "medicare-premier",
        name: "MediCare Premier",
        description: "Elite cover featuring global emergency treatments and high-end room options.",
        coverage: "₹15 Lakh",
        premium: "₹18,500/year",
        benefits: [
          "Global emergency cover included",
          "Consumables cover included",
          "Maternity cover up to ₹50,000",
          "High Cumulative Bonus (50% per year)"
        ],
        details: {
          eligibility: "18 to 65 Years",
          waitingPeriod: "30 Days initial, 24 Months for Pre-existing diseases",
          roomRent: "No capping - Any room category up to Suite",
          hospitalization: "Actual hospitalization charges covered",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "50% increase in sum insured per claim-free year (Max 100%)",
          exclusions: "Adherence to experimental treatments, rest cures, obesity treatments"
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
          hospitalization: "Expenses above deductible covered up to ₹20 Lakh",
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
          "Air Ambulance coverage up to ₹5 Lakh"
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
          hospitalization: "Hospitalization expenses up to ₹7.5 Lakh",
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
      primary: "#F97316",      // Orange
      secondary: "#EF4444",    // Red
      accent: "#EF4444",
      gradient: "linear-gradient(135deg, #F97316, #EF4444)", // Orange-Red Gradient
      background: "#FFF7ED",   // Soft Orange-White
      text: "#0F172A"
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
          hospitalization: "Standard inpatient cover up to ₹5 Lakh",
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
