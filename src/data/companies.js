import hdfcLogo from '../assets/hdfc-ergo-logo.png';
import tataLogo from '../assets/tata-aig.png';
import starLogo from '../assets/star-health.png';
import nivaLogo from '../assets/niva-bupa.png';
import iciciLogo from '../assets/icici-lombard.png';
import careLogo from '../assets/care-health.png';
import relianceLogo from '../assets/Reliance General Insurance.png';
import magmaLogo from '../assets/Magma HDI General Insurance.png';
import indusindLogo from '../assets/IndusInd General Insurance.png';
import manipalLogo from '../assets/manipal cigna .png';
import { optimaSecurePlusData } from './optimaSecurePlusData';
import { hdfcEnergyPlanData } from './hdfcEnergyPlanData';
import { hdfcMedisureSuperTopUpData } from './hdfcMedisureSuperTopUpData';
import { getMagmaPlanData } from './magmaPlansData';
import { getReliancePlanData } from './reliancePlansData';
import { getCarePlanData } from './careHealthPlansData';
import { getTataAigPlanData } from './tataAigPlansData';
import { getStarHealthPlanData } from './starHealthPlansData';
import { getNivaBupaPlanData } from './nivaBupaPlansData';
import { getIciciPlanData } from './iciciLombardPlansData';
import { getManipalCignaPlanData } from './manipalCignaPlansData';

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
        details: optimaSecurePlusData.details,
        planData: optimaSecurePlusData
      },
      {
        id: hdfcEnergyPlanData.planId,
        name: hdfcEnergyPlanData.planName,
        description: hdfcEnergyPlanData.tagline,
        coverage: hdfcEnergyPlanData.coverage,
        premium: hdfcEnergyPlanData.premium,
        benefits: hdfcEnergyPlanData.benefits,
        details: hdfcEnergyPlanData.details,
        planData: hdfcEnergyPlanData
      },
      {
        id: hdfcMedisureSuperTopUpData.planId,
        name: hdfcMedisureSuperTopUpData.planName,
        description: hdfcMedisureSuperTopUpData.tagline,
        coverage: hdfcMedisureSuperTopUpData.coverage,
        premium: hdfcMedisureSuperTopUpData.premium,
        benefits: hdfcMedisureSuperTopUpData.benefits,
        details: hdfcMedisureSuperTopUpData.details,
        planData: hdfcMedisureSuperTopUpData
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
        },
        planData: getTataAigPlanData("medicare-premier")
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
        },
        planData: getTataAigPlanData("medicare-select")
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
        },
        planData: getTataAigPlanData("medicare-reserve")
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
        },
        planData: getStarHealthPlanData("star-women-care")
      },
      {
        id: "star-young-star",
        name: "Young Star Insurance Policy",
        subtitle: "Start Young, Stay Covered",
        description: "Tailored health protection for individuals aged 18–40 with 100% automatic restoration, additional RTA cover, single private AC room, and 12-month waiting periods.",
        coverage: "₹3 Lakh - ₹1 Crore",
        premium: "₹8,500/year",
        benefits: [
          "Single Private A/C Room & All Day Care Procedures Covered",
          "100% Restoration of SI once a year & 20% to 100% Cumulative Bonus",
          "Additional RTA Cover: +25% of Sum Insured (max ₹10 Lakh)",
          "Pre-Existing Disease & Specific Illness Waiting Period: Only 12 Months"
        ],
        details: {
          eligibility: "Individual / Floater: 18 to 40 years | Dependent Children: 91 days to 25 years (up to 3 children)",
          waitingPeriod: "30 Days initial, 12 Months for Specific Illnesses & PED",
          roomRent: "Single Private A/C Room",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization covered",
          dayCare: "All day-care procedures covered",
          noClaimBonus: "20% per claim-free year up to 100%",
          exclusions: "Breach of law, self-inflicted injuries, hazardous adventure sports, cosmetic surgery"
        },
        planData: getStarHealthPlanData("star-young-star")
      },
      {
        id: "star-health-assure",
        name: "HealthAssure",
        subtitle: "Star Health Insurance Policy",
        description: "Comprehensive assurance with unlimited automatic restoration, any room category, and listed consumables coverage.",
        coverage: "₹5 Lakh - ₹2 Crore",
        premium: "₹12,500/year",
        benefits: [
          "Unlimited Automatic Restoration of Sum Insured",
          "Any Room (except Suite or above category)",
          "60 Days Pre & 180 Days Post Hospitalisation",
          "Cumulative Bonus 25% per claim-free year (max 100%)",
          "Listed Consumables Covered & Modern Treatments up to Sum Insured"
        ],
        details: {
          eligibility: "Individual / Floater: 18 years to Any Age | Dependent Children: 91 days to 25 years",
          waitingPeriod: "30 Days initial, 2 Years Specific Diseases, 3 / 2.5 Years PED",
          roomRent: "Any Room, except Suite or above category",
          hospitalization: "Covered as per policy terms",
          prePostHospital: "60 Days Pre & 180 Days Post Hospitalisation covered",
          dayCare: "All day-care treatments covered up to Sum Insured",
          noClaimBonus: "25% per claim-free year, maximum 100%",
          exclusions: "Cosmetic surgery, intentional self-injury, substance abuse, breach of law"
        },
        planData: getStarHealthPlanData("star-health-assure")
      },
      {
        id: "star-super-star",
        name: "Super Star",
        description: "Star Health's flagship comprehensive cover offering 5 tailored variants: Classic, Secure, Preferred, Essential, and Value Plus.",
        coverage: "₹5 Lakh - Unlimited",
        hasVariants: true,
        variants: [
          "star-super-star-classic",
          "star-super-star-secure",
          "star-super-star-preferred",
          "star-super-star-essential",
          "star-super-star-value-plus"
        ],
        benefits: [
          "5 Tailored Variants: Classic, Secure, Preferred, Essential & Value Plus",
          "Unlimited Automatic Restoration & Cumulative Bonus up to 100%",
          "Room Rent: Any Room or Single Private AC Room based on variant",
          "Modern Treatments, AYUSH, Road & Air Ambulance Covered"
        ],
        details: {
          eligibility: "Individual: 18 yrs to Any Age | Floater: Adults 18 yrs to Any Age, Dependent Children 91 days to 25 yrs",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "Any Room / Single Private AC Room depending on variant",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "30-90 Days Pre & 60-180 Days Post depending on variant",
          dayCare: "All Day Care Treatments covered up to Sum Insured",
          noClaimBonus: "50% per claim-free renewal, maximum 100%",
          exclusions: "Breach of law, self-inflicted injuries, hazardous adventure sports, cosmetic surgery"
        },
        planData: getStarHealthPlanData("star-super-star")
      },
      {
        id: "star-super-star-classic",
        name: "Super Star Classic",
        parentPlanId: "star-super-star",
        variantName: "Classic",
        description: "Comprehensive classic protection with 90/180 days pre/post hospitalization, Limitless Care, and Freeze Your Age up to 50 years.",
        coverage: "₹5 Lakh - ₹1 Crore",
        benefits: [
          "Room Rent: Any Room for SI ₹7.5L & above (Single Private AC Room for ₹5L)",
          "Pre/Post Hospitalization: 90 Days Pre & 180 Days Post covered",
          "Limitless Care: One unlimited claim cover in lifetime (from ₹10L SI)",
          "Automatic Restoration: Up to 100% SI, unlimited times in a policy year",
          "Cumulative Bonus: 50% per claim-free renewal, max 100%",
          "Freeze Your Age up to 50 years & STAR Wellness renewal discount up to 20%"
        ],
        details: {
          eligibility: "Individual: 18 yrs to Any Age | Floater: Adults 18 to Any Age, Dependent Children 91 days-25 yrs (Max 2A + 4C)",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "SI 7.5L & above: Any Room | SI 5L: Single Private AC Room",
          hospitalization: "In-patient hospitalization covered up to Sum Insured",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care Treatments covered up to Sum Insured",
          noClaimBonus: "50% after each claim-free renewal, max 100% of Sum Insured",
          exclusions: "Cosmetic surgery, intentional self-harm, rest cure, unproven treatments"
        },
        planData: getStarHealthPlanData("star-super-star-classic")
      },
      {
        id: "star-super-star-secure",
        name: "Super Star Secure",
        parentPlanId: "star-super-star",
        variantName: "Secure",
        description: "High-tier security cover with Any Room, Unlimited Sum Insured option, Limitless Loyalty Bonus, and Durable Medical Equipment.",
        coverage: "₹7.5 Lakh - Unlimited",
        benefits: [
          "Room Rent: Any Room with zero restriction across all Sum Insured options",
          "Limitless Loyalty Bonus: 100% additional SI every renewal irrespective of claims",
          "Sum Insured Multiplier & Health Booster (100% base SI every 7 claim-free years)",
          "Durable Medical Equipment up to ₹1 Lakh & Nursing at Home ₹1,000/day (max 10 days)",
          "Air Ambulance up to ₹5 Lakh/yr & Inbuilt Consumables (68 non-payable items)",
          "Automatic Restoration: Up to 100%, unlimited times in a policy year"
        ],
        details: {
          eligibility: "Individual: 18 yrs to Any Age | Floater: Adults 18 to Any Age, Dependent Children 91 days-25 yrs (Max 2A + 4C)",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "Any Room (No room rent restriction)",
          hospitalization: "In-patient hospitalization covered up to Sum Insured",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered up to Sum Insured",
          noClaimBonus: "Limitless Loyalty Bonus: 100% SI every renewal irrespective of claims (plus 50% Cumulative Bonus)",
          exclusions: "Above 60 yrs entry: Premium Return & SI Multiplier unavailable; Unlimited SI: Loyalty Bonus & Health Booster unavailable"
        },
        planData: getStarHealthPlanData("star-super-star-secure")
      },
      {
        id: "star-super-star-preferred",
        name: "Super Star Preferred",
        parentPlanId: "star-super-star",
        variantName: "Preferred",
        description: "Elite coverage combining Limitless Loyalty Bonus, Premium Return (first-year refund on 5 claim-free years), and Health Booster.",
        coverage: "₹7.5 Lakh - Unlimited",
        benefits: [
          "Room Rent: Any Room with zero capping",
          "Premium Return: First-year base premium refunded if no in-patient claim for 5 years",
          "Limitless Loyalty Bonus: 100% additional SI every renewal irrespective of claims",
          "Sum Insured Multiplier for long-term policies & Health Booster every 7 claim-free years",
          "Durable Medical Equipment up to ₹1 Lakh & E-Connect virtual sessions",
          "Grace Period Cover & Automatic Restoration unlimited times"
        ],
        details: {
          eligibility: "Individual: 18 yrs to Any Age | Floater: Adults 18 to Any Age, Dependent Children 91 days-25 yrs (Max 2A + 4C)",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "Any Room (No room rent restriction)",
          hospitalization: "In-patient hospitalization covered up to Sum Insured",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered up to Sum Insured",
          noClaimBonus: "100% Limitless Loyalty Bonus per renewal + Premium Return after 5 claim-free years",
          exclusions: "Cosmetic surgery, rest cure, unproven treatments, standard IRDAI exclusions"
        },
        planData: getStarHealthPlanData("star-super-star-preferred")
      },
      {
        id: "star-super-star-essential",
        name: "Super Star Essential",
        parentPlanId: "star-super-star",
        variantName: "Essential",
        description: "Cost-optimized coverage for Zones B & C with Single Private AC room, Premium Return, and loyalty enhancements from ₹7.5 Lakh.",
        coverage: "₹5 Lakh - ₹10 Lakh",
        benefits: [
          "Room Rent: Single Private AC Room",
          "Premium Return: First-year base premium refunded if no claim for 5 years",
          "Limitless Loyalty Bonus & SI Multiplier available from ₹7.5 Lakh SI",
          "Pre/Post Hospitalization: 30 Days Pre & 60 Days Post covered",
          "Health Booster: 100% additional base SI every 7 claim-free years",
          "Available exclusively in Zone B & C (excludes HR, Indore, MH, TG, KL)"
        ],
        details: {
          eligibility: "Individual: 18 yrs to Any Age | Floater: Adults 18 to Any Age, Children 91 days-25 yrs (Max 2A + 4C)",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "Single Private AC Room",
          hospitalization: "In-patient hospitalization covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization covered",
          dayCare: "All Day Care Treatments covered up to Sum Insured",
          noClaimBonus: "50% per claim-free renewal, max 100% (+ 100% Loyalty Bonus from ₹7.5L SI)",
          exclusions: "Geographic exclusion: Excludes Haryana, Indore City, Maharashtra, Telangana, Kerala"
        },
        planData: getStarHealthPlanData("star-super-star-essential")
      },
      {
        id: "star-super-star-value-plus",
        name: "Super Star Value Plus",
        parentPlanId: "star-super-star",
        variantName: "Value Plus",
        description: "Balanced healthcare with up to ₹5,000/day boarding, Premium Return, Inbuilt Consumables, and long-term discounts up to 12.5%.",
        coverage: "₹7.5 Lakh - ₹25 Lakh",
        benefits: [
          "In-Patient Hospitalisation up to Sum Insured (Up to ₹5,000/day Room Rent)",
          "Premium Return: First-year base premium refunded after 5 claim-free years",
          "Inbuilt Consumables Cover & All Day Care Procedures Covered",
          "Health Booster (100% additional SI every 7 claim-free years) & DME up to ₹1 Lakh",
          "Long-term discount: 2-year (10% on 2nd yr), 3-year (12.5% on 3rd yr)",
          "Value Network: 15% co-pay outside listed network hospitals (zero co-pay in network)"
        ],
        details: {
          eligibility: "Individual: Adults 18 yrs to Any Age | Floater: 18 to Any Age, Children 91 days-25 yrs (Max 2A + 4C)",
          waitingPeriod: "30 Days initial, 24 Months Specified Diseases, 36 Months PED",
          roomRent: "Up to ₹5,000/day (Room Rent Modification to Single Private AC Room optional)",
          hospitalization: "In-patient hospitalization expenses covered up to Sum Insured",
          prePostHospital: "30 Days Pre & 60 Days Post Hospitalization covered",
          dayCare: "All Day Care procedures covered up to Sum Insured",
          noClaimBonus: "50% per claim-free year, maximum 100% + Premium Return after 5 claim-free years",
          exclusions: "15% co-payment outside listed network hospitals. Voluntary co-pay & deductible cannot be combined."
        },
        planData: getStarHealthPlanData("star-super-star-value-plus")
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
        },
        planData: getNivaBupaPlanData("aspire")
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
        },
        planData: getNivaBupaPlanData("reassure-2-0")
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
        },
        planData: getNivaBupaPlanData("health-recharge")
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
        },
        planData: getNivaBupaPlanData("reassure-3-0")
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
        },
        planData: getIciciPlanData("elevate")
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
        },
        planData: getIciciPlanData("activate-booster")
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
        },
        planData: getCarePlanData("care-supreme")
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
        },
        planData: getCarePlanData("ultimate-care")
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
        },
        planData: getCarePlanData("ultimate-joy")
      },
      {
        id: "care-advantage",
        name: "Care Advantage",
        description: "High-value health insurance policy providing ₹25 Lakh to ₹1 Crore coverage with zero sub-limits on room rent and ICU charges.",
        coverage: "₹25 Lakh - ₹1 Crore",
        premium: "₹15,800/year",
        benefits: [
          "High Sum Insured options: ₹25 Lacs, ₹50 Lacs & ₹1 Crore",
          "No Sub-Limit on Room Rent & No Sub-Limit on ICU Charges",
          "Automatic Recharge once in a Policy Year",
          "10% to 50% No Claim Bonus (NCB)",
          "Smart Select Network Coverage up to Sum Insured"
        ],
        details: {
          eligibility: "Minimum: Individual 5 yrs; Floater 91 days with 1 adult (18+ yrs) | Maximum: Lifelong",
          waitingPeriod: "30 Days initial, 24 Months Named Ailments, 36 Months PED",
          roomRent: "No Sub-Limit (Single private room modification optional)",
          hospitalization: "In Patient & Day Care treatment expenses covered up to Sum Insured",
          prePostHospital: "30 days pre-hospitalisation & 60 days post-hospitalisation",
          dayCare: "All day-care treatments covered up to Sum Insured",
          noClaimBonus: "10% per claim-free year, maximum up to 50% of SI",
          exclusions: "Cosmetic surgery, intentional self-injury, breach of law, substance abuse"
        },
        planData: getCarePlanData("care-advantage")
      },
      {
        id: "care-freedom",
        name: "Care Freedom",
        description: "Specialized health protection with zero pre-policy medical check-up, in-patient care, 540+ day care procedures, and annual health check-ups.",
        coverage: "₹3 Lakh - ₹10 Lakh",
        premium: "₹11,800/year",
        benefits: [
          "In-Patient Care for minimum 24 consecutive hours",
          "540+ Specified Day Care Treatments Covered",
          "100% Recharge of Sum Insured upon exhaustion",
          "Annual Health Check-up for all adult members",
          "Home Care nursing and optional Health Check+ upgrade"
        ],
        details: {
          eligibility: "Adults: 18 to Lifelong | Children: 91 days to 24 years",
          waitingPeriod: "30 Days initial, 24 Months Named Ailments & PED",
          roomRent: "Covered as per policy terms and chosen sum insured",
          hospitalization: "Inpatient treatment expenses covered for min 24 hours stay",
          prePostHospital: "Pre-hospitalisation and Post-hospitalisation up to 30 days beyond policy end date",
          dayCare: "More than 540 day-care procedures covered",
          noClaimBonus: "Available as per applicable policy schedule",
          exclusions: "Cosmetic surgery, intentional self-injury, breach of law"
        },
        planData: getCarePlanData("care-freedom")
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
        benefits: getReliancePlanData("reliance-health-infinity").featuresSections?.[0]?.items?.map(item => item.title) || [],
        details: {
          eligibility: "Adults 18+ to Lifelong | Children 91 days to 25 years",
          waitingPeriod: "30 Days initial, 24 Months specified diseases, 36 Months PED",
          roomRent: "Any room category without capping",
          hospitalization: "Covered up to Sum Insured with no sub-limits",
          prePostHospital: "90 Days Pre & 180 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "Cumulative Bonus up to 100%",
          exclusions: "Cosmetic treatments, intentional self-harm, unproven treatments"
        },
        planData: getReliancePlanData("reliance-health-infinity")
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
        benefits: getMagmaPlanData("magma-one-health-secure").featuresSections?.[0]?.items?.map(item => item.title) || [],
        details: {
          eligibility: "Adults 18 to 65 Years | Children 91 days to 25 years",
          waitingPeriod: "30 Days initial, 24 Months specified ailments, 36 Months PED",
          roomRent: "Single Private Room or Any Room based on variant",
          hospitalization: "Covered up to Sum Insured",
          prePostHospital: "60 Days Pre & 90 Days Post Hospitalization",
          dayCare: "All Day Care procedures covered",
          noClaimBonus: "Up to 50% Cumulative Bonus",
          exclusions: "Cosmetic surgery, adventure sports, breach of law"
        },
        planData: getMagmaPlanData("magma-one-health-secure")
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
  },
  {
    id: "manipal-cigna",
    name: "ManipalCigna",
    fullName: "ManipalCigna Health Insurance Company Limited",
    slug: "manipal-cigna",
    category: "Health Insurance",
    logo: manipalLogo,
    description: "A joint venture between Manipal Group and Cigna Corporation, delivering comprehensive health insurance, global wellness solutions, and quick cashless claims.",
    theme: {
      primary: "#F8971F",      // ManipalCigna Warm Orange
      secondary: "#0982C6",    // ManipalCigna Blue
      accent: "#56B948",       // ManipalCigna Green
      background: "#FFFBF7",   // Warm Soft Light Background
      text: "#0F172A"
    },
    plans: [
      {
        id: "lifetime-health",
        name: "Lifetime Health",
        companyName: "ManipalCigna",
        insurer: "ManipalCigna",
        description: getManipalCignaPlanData("lifetime-health").tagline,
        coverage: getManipalCignaPlanData("lifetime-health").coverage,
        premium: getManipalCignaPlanData("lifetime-health").premium,
        benefits: getManipalCignaPlanData("lifetime-health").benefits,
        details: getManipalCignaPlanData("lifetime-health").details,
        planData: getManipalCignaPlanData("lifetime-health")
      },
      {
        id: "sarvah-uttam",
        name: "Sarvah Uttam",
        companyName: "ManipalCigna Sarvah",
        insurer: "ManipalCigna",
        description: getManipalCignaPlanData("sarvah-uttam").tagline,
        coverage: getManipalCignaPlanData("sarvah-uttam").coverage,
        premium: getManipalCignaPlanData("sarvah-uttam").premium,
        benefits: getManipalCignaPlanData("sarvah-uttam").benefits,
        details: getManipalCignaPlanData("sarvah-uttam").details,
        planData: getManipalCignaPlanData("sarvah-uttam")
      },
      {
        id: "sarvah-param",
        name: "Sarvah Param",
        companyName: "ManipalCigna Sarvah",
        insurer: "ManipalCigna",
        description: getManipalCignaPlanData("sarvah-param").tagline,
        coverage: getManipalCignaPlanData("sarvah-param").coverage,
        premium: getManipalCignaPlanData("sarvah-param").premium,
        benefits: getManipalCignaPlanData("sarvah-param").benefits,
        details: getManipalCignaPlanData("sarvah-param").details,
        planData: getManipalCignaPlanData("sarvah-param")
      }
    ]
  }
];
