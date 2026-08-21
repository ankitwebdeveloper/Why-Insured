import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowLeft,
  FiX,
  FiCheck,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiPlay,
  FiHome,
  FiHeart,
  FiCalendar,
  FiCheckSquare,
  FiCpu,
  FiRefreshCw,
  FiShield,
  FiClipboard,
  FiTrendingUp,
  FiCreditCard,
  FiTruck,
  FiClock,
  FiSmile,
  FiDollarSign,
  FiZap,
  FiUsers,
  FiActivity
} from 'react-icons/fi';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

// =============================================================================
// DEMO VIDEO CONFIGURATION
// Replace DEMO_VIDEO_URL below with your actual video link whenever needed.
// =============================================================================
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

// Feature Icons Dictionary for Care Health
const FEATURE_ICONS = {
  "c1-1": FiHome,        // Room Rent / Hospitalisation
  "c1-2": FiHeart,       // Inpatient Treatment
  "c1-3": FiCalendar,    // Pre & Post Hospitalisation
  "c1-4": FiCheckSquare, // All Day Care Procedures
  "c1-5": FiCpu,         // Modern Treatments / Robotic Surgery

  "c2-1": FiRefreshCw,   // Auto-Restoration / Recharge
  "c2-2": FiTrendingUp,  // Cumulative Bonus / Super NCB
  "c2-3": FiClipboard,   // Preventive Health Check-up
  "c2-4": FiHeart,       // Alternative AYUSH / Heart Cover
  "c2-5": FiShield,      // Wellness / Digital Support

  "c3-1": FiTruck,       // Emergency Road Ambulance
  "c3-2": FiHome,        // Organ Donor / Domiciliary Treatment
  "c3-3": FiClock,       // Second Medical Opinion
  "c3-4": FiDollarSign,  // Tax Savings under Sec 80D

  "c4-1": FiSmile,       // Care Shield / Consumables Cover
  "c4-2": FiZap,         // Hospital Daily Cash+
  "c4-3": FiShield       // Care OPD Consult / Personal Accident
};

// Badges Dictionary
const FEATURE_BADGES = {
  "c1-1": "ZERO CO-PAY",
  "c1-2": "100% INPATIENT",
  "c1-3": "30 & 60 DAYS",
  "c1-4": "ALL DAY CARE",
  "c1-5": "ROBOTIC TECH",

  "c2-1": "AUTO-RECHARGE",
  "c2-2": "UP TO 150%",
  "c2-3": "ANNUAL CHECKUP",
  "c2-4": "AYUSH CARE",
  "c2-5": "24/7 WELLNESS",

  "c3-1": "ROAD TRANSIT",
  "c3-2": "ORGAN & HOME",
  "c3-3": "GLOBAL EXPERTS",
  "c3-4": "SEC 80D BENEFIT",

  "c4-1": "ZERO CONSUMABLES",
  "c4-2": "DAILY ALLOWANCE",
  "c4-3": "OPD & ACCIDENT"
};

// Visual Step Progression Dictionary
const FEATURE_STEPS = {
  "c1-1": ["Hospital Admission", "Single Private Room", "100% Cashless Settle"],
  "c1-2": ["Doctor Consultation", "Inpatient Care", "Direct Hospital Settlement"],
  "c1-3": ["30 Days Pre-Care", "Inpatient Stay", "60 Days Post Care"],
  "c1-4": ["Daycare Booking", "Day Care Procedure", "Same-Day Return Home"],
  "c1-5": ["Specialist Evaluation", "Precision Robotics", "Advanced Treatment Cover"],

  "c2-1": ["Base SI Exhausted", "Instant Auto-Recharge", "Available for Next Claim"],
  "c2-2": ["Claim-Free Year 1", "No Claim Bonus Accrued", "Super NCB Up to 150%"],
  "c2-3": ["Policy Renewal", "Schedule Health Check", "Complimentary Diagnostics"],
  "c2-4": ["Doctor Inpatient Care", "AYUSH Hospital", "Direct Cashless Claim"],
  "c2-5": ["Digital Portal", "Tele-Consultation", "Wellness Rewards"],

  "c3-1": ["Emergency Transit", "Nearest Hospital", "Full Road Cover"],
  "c3-2": ["Organ Harvesting", "Inpatient Admission", "100% Donor Cover"],
  "c3-3": ["Upload Reports", "Expert Panel Review", "Second Opinion Report"],
  "c3-4": ["Annual Premium Paid", "Section 80D Receipt", "Claim Tax Deduction"],

  "c4-1": ["Inpatient Treatment", "Zero Consumable Deductions", "100% Hospital Bill Cover"],
  "c4-2": ["24-hr Inpatient Stay", "Daily Cash Verified", "Direct Payout"],
  "c4-3": ["Outpatient Visit", "Doctor Consultation", "Cashless / OPD Claim"]
};

// Comprehensive Datasets for all 3 Care Health plans
const CARE_HEALTH_FEATURES_BY_PLAN = {
  "care-plan": {
    mostImportant: [
      {
        id: "c1-1",
        title: "Single Private Room (Zero Co-Pay)",
        subtitle: "Private Single A/C Room Covered",
        summary: "Zero co-payment across all age groups and full coverage for Single Private A/C Room without daily capping across 21,000+ healthcare network providers."
      },
      {
        id: "c1-2",
        title: "Inpatient Hospitalisation",
        subtitle: "100% Inpatient Medical Expenses",
        summary: "Full coverage for doctor consultation, nursing charges, surgeon fees, operation theatre, ICU charges, and in-hospital medications."
      },
      {
        id: "c1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post",
        summary: "Medical consultations, diagnostic investigations, and prescribed pharmacy expenses covered 30 days before admission and 60 days post-discharge."
      },
      {
        id: "c1-4",
        title: "All Day Care Treatments",
        subtitle: "Comprehensive Day Care Surgeries",
        summary: "All modern daycare surgeries and medical procedures requiring less than 24 hours of hospitalisation due to advanced medical technology are fully covered."
      },
      {
        id: "c1-5",
        title: "Advanced Technology & Robotic Surgery",
        subtitle: "Precision Modern Treatments Covered",
        summary: "Coverage for robotic surgeries, stem cell therapy, oral chemotherapy, deep brain stimulation, balloon sinuplasty, and specialized precision procedures."
      }
    ],
    valueAdded: [
      {
        id: "c2-1",
        title: "Auto Recharge Benefit",
        subtitle: "100% Reinstatement of Sum Insured",
        summary: "Automatically reinstates 100% of Base Sum Insured once in a policy year upon complete exhaustion of base cover for subsequent hospitalisations."
      },
      {
        id: "c2-2",
        title: "No Claim Bonus (Super NCB Option)",
        subtitle: "Up to 50% Standard & 150% Super NCB",
        summary: "Increases basic Sum Insured by 10% per claim-free year up to 50% max (or up to 150% with optional Super NCB booster) at zero extra premium cost."
      },
      {
        id: "c2-3",
        title: "Annual Health Check-up",
        subtitle: "Complimentary Annual Preventive Check",
        summary: "Free annual preventive health check-up package for all insured adult members regardless of claim history across Care Health partner diagnostic labs."
      },
      {
        id: "c2-4",
        title: "Alternative AYUSH Inpatient Treatment",
        subtitle: "100% Inpatient AYUSH Coverage",
        summary: "Covers inpatient medical treatment taken under recognized Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy hospitals up to sum insured."
      },
      {
        id: "c2-5",
        title: "Unlimited Automatic Recharge",
        subtitle: "Refill for Subsequent Hospitalisations",
        summary: "Seamless automatic sum insured reinstatement for subsequent unrelated illnesses during the policy year without waiting for renewal."
      }
    ],
    additional: [
      {
        id: "c3-1",
        title: "Emergency Road Ambulance",
        subtitle: "Covered up to ₹3,000 per Hospitalisation",
        summary: "Emergency surface road ambulance charges to the nearest hospital for inpatient hospitalisation are fully covered up to specified policy limits."
      },
      {
        id: "c3-2",
        title: "Organ Donor Hospitalisation",
        subtitle: "Inpatient Expenses for Organ Donor",
        summary: "Covers inpatient hospitalisation medical expenses incurred by the organ donor during organ harvesting for transplantation to the insured."
      },
      {
        id: "c3-3",
        title: "Second Medical Opinion",
        subtitle: "Worldwide Expert Specialist Panel",
        summary: "Complimentary access to expert second medical opinions from world-class doctors and specialists for critical and major medical conditions."
      },
      {
        id: "c3-4",
        title: "Tax Savings under Sec 80D",
        subtitle: "Deductions up to ₹75,000 Annually",
        summary: "Avail tax deductions up to ₹75,000 on health insurance premiums paid under Section 80D of the Income Tax Act for family and senior parents."
      }
    ],
    riders: [
      {
        id: "c4-1",
        title: "Care Shield (Zero Consumables)",
        subtitle: "Covers Gloves, Masks & PPE Kits",
        summary: "Covers eligible non-medical expenses like gloves, syringes, masks, PPE kits, and administrative charges with CPI inflation shield."
      },
      {
        id: "c4-2",
        title: "Hospital Daily Cash+",
        subtitle: "Fixed Daily Allowance per Day",
        summary: "Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage indirect household and non-medical expenses."
      },
      {
        id: "c4-3",
        title: "Care OPD Consult Rider",
        subtitle: "Outpatient Doctor Visits & Diagnostics",
        summary: "Dedicated outpatient doctor consultations and prescribed diagnostic investigations covered across network clinics and diagnostics."
      }
    ]
  },
  "care-freedom": {
    mostImportant: [
      {
        id: "c1-1",
        title: "No Pre-Policy Medical Tests",
        subtitle: "Guaranteed Issue without Medical Tests",
        summary: "Enjoys hassle-free enrolment with zero mandatory pre-policy medical checkups required for any age group across all sum insured options."
      },
      {
        id: "c1-2",
        title: "Twin Sharing & Standard Room",
        subtitle: "Standard Twin Sharing Room Covered",
        summary: "Inpatient room rent covered up to standard twin sharing room across 21,000+ network healthcare providers without burdensome deductions."
      },
      {
        id: "c1-3",
        title: "Inpatient Hospitalisation",
        subtitle: "Complete Inpatient Treatment Cover",
        summary: "Full coverage for doctor consultation, surgeon fees, operation theatre, specialist care, and in-hospital medications up to Sum Insured."
      },
      {
        id: "c1-4",
        title: "170+ Day Care Procedures",
        subtitle: "Modern Daycare Surgeries Covered",
        summary: "Over 170 advanced daycare medical and surgical procedures requiring less than 24 hours of hospital stay are fully covered."
      },
      {
        id: "c1-5",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post",
        summary: "Covers pre-hospitalisation diagnostic and consultation expenses for 30 days and post-hospitalisation follow-up expenses for 60 days."
      }
    ],
    valueAdded: [
      {
        id: "c2-1",
        title: "Short 24-Month PED Waiting",
        subtitle: "Rapid Coverage for Pre-Existing Diseases",
        summary: "Pre-existing disease waiting period capped at just 24 months (compared to 36-48 months in typical senior insurance plans)."
      },
      {
        id: "c2-2",
        title: "Cumulative Bonus",
        subtitle: "10% per Year up to 50% Maximum",
        summary: "Increases basic Sum Insured by 10% for every claim-free year up to a maximum 50% without requiring any additional premium."
      },
      {
        id: "c2-3",
        title: "Annual Health Screening",
        subtitle: "Complimentary Annual Preventive Check",
        summary: "Free annual preventive health check-up for all insured members across Care Health diagnostic partner labs."
      },
      {
        id: "c2-4",
        title: "Consumables Shield Protection",
        subtitle: "Covers Eligible Disposable Medical Items",
        summary: "Coverage for eligible disposable non-medical consumables used during inpatient hospital stays to minimize out-of-pocket bills."
      },
      {
        id: "c2-5",
        title: "Free Health Portal & Wellness",
        subtitle: "24/7 Digital Health Support & Telemedicine",
        summary: "Round-the-clock digital access to expert health coaches, diet consultations, telemedicine, and wellness discounts."
      }
    ],
    additional: [
      {
        id: "c3-1",
        title: "Emergency Road Ambulance",
        subtitle: "Covered up to ₹1,000 per Hospitalisation",
        summary: "Emergency surface road ambulance charges to the nearest hospital covered up to ₹1,000 per hospitalisation."
      },
      {
        id: "c3-2",
        title: "Durable Medical Equipment Cover",
        subtitle: "Coverage for Assistive Post-Op Appliances",
        summary: "Coverage for eligible medical assistive appliances such as wheelchairs, walkers, and braces prescribed post-surgery."
      },
      {
        id: "c3-3",
        title: "Dialysis Cover Benefit",
        subtitle: "Support Allowance for Regular Dialysis",
        summary: "Dedicated financial support allowance for regular dialysis cycles and related outpatient treatments."
      },
      {
        id: "c3-4",
        title: "Tax Savings under Sec 80D",
        subtitle: "Deductions up to ₹75,000 Annually",
        summary: "Avail annual income tax deductions up to ₹75,000 on health insurance premiums paid under Section 80D."
      }
    ],
    riders: [
      {
        id: "c4-1",
        title: "Daily Hospital Allowance",
        subtitle: "Fixed Daily Cash Support during Stay",
        summary: "Provides a fixed per-day cash support during hospitalisation to manage indirect household and non-medical expenses."
      },
      {
        id: "c4-2",
        title: "Home Care Assistance",
        subtitle: "In-Home Nursing Support Post-Discharge",
        summary: "Professional in-home nursing support and rehabilitation assistance following hospital discharge for senior members."
      },
      {
        id: "c4-3",
        title: "Care Accident Shield",
        subtitle: "24/7 Worldwide Accident Protection",
        summary: "Dedicated accidental death and permanent total disability financial protection available 24/7 worldwide."
      }
    ]
  },
  "care-heart": {
    mostImportant: [
      {
        id: "c1-1",
        title: "Pre-Existing Heart Protection",
        subtitle: "Cardiac Patients Covered after 24 Months",
        summary: "Specialized cardiac protection covering pre-existing heart conditions, prior stent procedures, and coronary bypass interventions."
      },
      {
        id: "c1-2",
        title: "Inpatient Cardiac & Surgical Care",
        subtitle: "100% Inpatient Heart Surgeries Covered",
        summary: "Full in-patient hospitalisation expenses for open-heart surgery, bypass (CABG), angioplasty, pacemaker implants, and ICU care."
      },
      {
        id: "c1-3",
        title: "Short 24-Month Cardiac Waiting",
        subtitle: "Heart Surgeries Covered after 24 Months",
        summary: "Cardiac interventional surgeries and treatments covered after just 24 months from policy inception."
      },
      {
        id: "c1-4",
        title: "Cardiac Day Care Procedures",
        subtitle: "Same-Day Cardiac Interventions Covered",
        summary: "All daycare cardiac procedures and diagnostic angiographies requiring less than 24 hours of hospital stay are fully covered."
      },
      {
        id: "c1-5",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post",
        summary: "Covers cardiac diagnostics (ECG, Echo, Angiography) 30 days before admission and 60 days of cardiac follow-up consultations."
      }
    ],
    valueAdded: [
      {
        id: "c2-1",
        title: "Outpatient Cardiac Consultation",
        subtitle: "Doctor Visits & Diagnostics Covered",
        summary: "Outpatient consultations with cardiologists and prescribed cardiac diagnostic investigations covered up to specified policy limits."
      },
      {
        id: "c2-2",
        title: "Annual Cardiac Health Checkup",
        subtitle: "Annual ECG, Echo & Lipid Screening",
        summary: "Comprehensive annual cardiac check-up package including ECG, Lipid profile, and 2D-Echo after each claim-free policy year."
      },
      {
        id: "c2-3",
        title: "Cardiac Device & Implant Cover",
        subtitle: "Stents, Pacemakers & Valves Covered",
        summary: "Covers surgical costs and implantation of drug-eluting stents, pacemakers, and artificial heart valves up to sum insured limits."
      },
      {
        id: "c2-4",
        title: "Alternative AYUSH Inpatient",
        subtitle: "100% Inpatient Alternative Care",
        summary: "Covers inpatient medical treatments taken under recognized Ayurveda, Yoga, Unani, Siddha, and Homeopathy hospitals."
      },
      {
        id: "c2-5",
        title: "Emergency Road Ambulance",
        subtitle: "Covered up to ₹2,000 per Hospitalisation",
        summary: "Emergency surface road ambulance charges to the nearest hospital for critical cardiac events covered up to ₹2,000 per hospitalisation."
      }
    ],
    additional: [
      {
        id: "c3-1",
        title: "Second Medical Opinion (Global Panel)",
        subtitle: "Direct Access to Leading Cardiologists",
        summary: "Free access to second medical opinions from top cardiologists and cardiac surgeons globally for major heart surgical procedures."
      },
      {
        id: "c3-2",
        title: "Organ Donor Coverage",
        subtitle: "Inpatient Donor Expenses Covered",
        summary: "Covers inpatient hospitalisation expenses for the organ donor during heart or major organ transplant surgery."
      },
      {
        id: "c3-3",
        title: "Domiciliary Treatment",
        subtitle: "In-Home Medical Care Covered",
        summary: "Covers in-home medical treatment for cardiac conditions where patient cannot be moved to a hospital or hospital beds are unavailable."
      },
      {
        id: "c3-4",
        title: "Tax Savings under Sec 80D",
        subtitle: "Deductions up to ₹75,000 Annually",
        summary: "Avail tax deductions up to ₹75,000 on health insurance premiums paid under Section 80D of the Income Tax Act."
      }
    ],
    riders: [
      {
        id: "c4-1",
        title: "Cardiac Hospital Cash",
        subtitle: "Fixed Daily Allowance per Day",
        summary: "Per-day daily cash allowance for every 24 hours of hospitalisation to manage incidental family and travel expenses."
      },
      {
        id: "c4-2",
        title: "Care Critical Illness Booster",
        subtitle: "Extra Shield against Non-Cardiac Illnesses",
        summary: "Extra financial protection providing lump-sum support against non-cardiac critical illnesses such as kidney failure and stroke."
      },
      {
        id: "c4-3",
        title: "Accidental Death & Disability Shield",
        subtitle: "24/7 Worldwide Accident Protection",
        summary: "Round-the-clock worldwide accidental death and permanent disablement protection for primary earning members."
      }
    ]
  }
};

// Video Button Component
const VideoButton = ({ featureTitle, onOpenVideo }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpenVideo(featureTitle, DEMO_VIDEO_URL);
      }}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 hover:bg-[#1E3A8A] text-slate-600 hover:text-white border border-slate-200/80 text-[9.5px] sm:text-[10px] font-bold transition-all duration-150 active:scale-95 shrink-0"
      title={`Watch video demo for ${featureTitle}`}
    >
      <FiPlay className="text-[8px] fill-current" />
      <span>Video</span>
    </button>
  );
};

// Feature Accordion Item Component (Identical to approved design)
function CareFeatureAccordionItem({
  id,
  title,
  subtitle,
  summary,
  isExpanded,
  onToggle,
  isRider = false,
  index = 0,
  onOpenVideo
}) {
  const itemRef = React.useRef(null);
  const IconComponent = FEATURE_ICONS[id] || (isRider ? FiShield : FiCheckSquare);
  const badgeText = FEATURE_BADGES[id];
  const visualSteps = FEATURE_STEPS[id];

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
      onClick={() => onToggle(id, itemRef)}
      className={`transition-all duration-200 cursor-pointer rounded-xl sm:rounded-2xl border overflow-hidden select-none flex flex-col justify-between ${
        isExpanded
          ? 'bg-[#FEFCE8]/80 border-[#1E3A8A]/60 shadow-md ring-1 ring-[#1E3A8A]/20'
          : 'bg-white border-slate-200/80 hover:border-[#1E3A8A]/40 shadow-2xs'
      }`}
    >
      {/* Header Row */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          {IconComponent && (
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isExpanded ? 'bg-[#1E3A8A] text-white shadow-xs' : 'bg-[#FEFCE8] text-[#1E3A8A]'
            }`}>
              <IconComponent className="text-xs sm:text-base" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-xs sm:text-base font-extrabold font-display leading-snug text-[#0F172A]">
                {title}
              </h3>
              {onOpenVideo && (
                <VideoButton featureTitle={title} onOpenVideo={onOpenVideo} />
              )}
              {isRider && (
                <span className="text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#1E3A8A]/10 text-[#1E3A8A] tracking-wide shrink-0">
                  Rider
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-[10px] sm:text-xs font-semibold mt-0.5 leading-snug text-slate-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Plus / Minus Button */}
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
          isExpanded ? 'bg-[#1E3A8A] text-white rotate-180' : 'bg-[#FEFCE8] text-[#1E3A8A]'
        }`}>
          {isExpanded ? (
            <FiMinus className="text-xs sm:text-sm stroke-[2.5]" />
          ) : (
            <FiPlus className="text-xs sm:text-sm stroke-[2.5]" />
          )}
        </div>
      </div>

      {/* Expanded Summary & Contextual Badges */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-3.5 pb-3.5 sm:px-4.5 sm:pb-4.5 border-t border-slate-100/80 text-slate-600 space-y-2.5">
              {/* Contextual Badge & Subtitle Checkmark */}
              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-2">
                {badgeText && (
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-[#FEFCE8] text-[#1E3A8A] border border-[#1E3A8A]/20 tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                    {badgeText}
                  </span>
                )}
                {subtitle && (
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-700">
                    <FiCheck className="text-[#1E3A8A] text-xs shrink-0" /> {subtitle}
                  </span>
                )}
              </div>

              {/* Short explanation / Details */}
              <div className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                {summary}
              </div>

              {/* Visual Number Step Progression */}
              {visualSteps && visualSteps.length > 0 && (
                <div className="mt-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Coverage Progression Example
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {visualSteps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[11px] sm:text-xs font-black text-[#0F172A] flex items-center gap-1">
                          {step}
                        </div>
                        {sIdx < visualSteps.length - 1 && (
                          <span className="text-xs font-extrabold text-[#1E3A8A] px-0.5">
                            →
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Video Lightbox Modal Component
const FeatureVideoModal = ({ isOpen, onClose, videoTitle, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs cursor-pointer"
        />

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-slate-950 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-800/80 bg-slate-900/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {videoTitle || "Feature Explainer Video"}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <FiX className="text-sm sm:text-base" />
            </button>
          </div>

          {/* Embed Container (16:9 Aspect Ratio) */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <iframe
              src={videoUrl || DEMO_VIDEO_URL}
              title={videoTitle || "Demo Video"}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function CareHealthPlanDetailSection({ plan, company }) {
  const [activeModal, setActiveModal] = useState(null);
  const [videoModalState, setVideoModalState] = useState({
    isOpen: false,
    title: '',
    url: ''
  });
  const location = useLocation();
  const isFeaturesPage = location.pathname.endsWith('/features');

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (activeModal || videoModalState.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal, videoModalState.isOpen]);

  const { name, logo } = company;

  // Single source of truth helper values
  const settlementRatio = getCompanyRatioValue(company.id, 'settlement') || '97.4%';
  const incurredRatio = getCompanyRatioValue(company.id, 'incurred') || '51%';
  const solvencyRatio = getCompanyRatioValue(company.id, 'solvency') || '1.82';
  const complaintRatio = getCompanyRatioValue(company.id, 'complaint') || '19.2 per 10k';

  // Fundamental values
  const restoration = getDerivedValue(plan, company, 'restoration') || '100% Recharge Benefit (Auto Restores Sum Insured)';
  const roomRent = plan.details.roomRent || 'Single Private Room';
  const prePostHosp = plan.details.prePostHospital || '30 Days Pre & 60 Days Post';
  const cashlessNetwork = getDerivedValue(plan, company, 'cashlessHospitals') || '21,000+ Healthcare Providers';

  // Feature dataset for the active plan
  const planFeatureData = CARE_HEALTH_FEATURES_BY_PLAN[plan.id] || CARE_HEALTH_FEATURES_BY_PLAN["care-plan"];

  // Accordion open/close state
  const [expandedFeatureId, setExpandedFeatureId] = useState(null);

  const toggleAccordionItem = (id, ref) => {
    if (expandedFeatureId === id) {
      setExpandedFeatureId(null);
    } else {
      setExpandedFeatureId(id);
      // Smart Scroll: Smoothly scroll the opened item into view with top offset for header clearance
      setTimeout(() => {
        if (ref && ref.current) {
          const yOffset = -110;
          const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleOpenVideo = (title, url) => {
    setVideoModalState({
      isOpen: true,
      title,
      url: url || DEMO_VIDEO_URL
    });
  };

  const handleCloseVideo = () => {
    setVideoModalState({
      isOpen: false,
      title: '',
      url: ''
    });
  };

  // =========================================================================
  // DEDICATED FEATURES PAGE (MATCHING APPROVED DESIGN SYSTEM EXACTLY)
  // =========================================================================
  if (isFeaturesPage) {
    return (
      <div className="w-full pb-20 bg-[#FEFCE8] min-h-screen overflow-x-hidden relative">
        {/* Subtle Ambient Blue Glow matching Care Health primary theme */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-[#1E3A8A]" />

        {/* Page Container — Care Health Theme */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 space-y-10 sm:space-y-12 relative z-10">
          
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center pt-2"
          >
            <div className="text-left mb-3 sm:mb-4">
              <Link
                to={`/insurance/${company.id}/${plan.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to {plan.name}</span><span className="sm:hidden">Back to Plan</span>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={logo}
                alt={name}
                className="w-24 sm:w-44 h-auto max-h-9 sm:max-h-16 object-contain select-none mb-3.5 sm:mb-5"
              />
              <h1 className="text-base sm:text-2xl font-black text-[#0F172A] tracking-tight font-display">
                {plan.name} <span className="text-[#1E3A8A]">—</span> FEATURES
              </h1>
              <div className="w-8 sm:w-12 h-1 bg-[#1E3A8A] mx-auto mt-1.5 rounded-full" />
            </div>
          </motion.div>

          {/* SECTION 1: MOST IMPORTANT FEATURES (2-3 columns on desktop, 1 col on mobile) */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                MOST IMPORTANT FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {planFeatureData.mostImportant.map((feat, idx) => (
                <CareFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  summary={feat.summary}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 2: VALUE ADDED FEATURES (2 columns on desktop, 1 col on mobile) */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                VALUE ADDED FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {planFeatureData.valueAdded.map((feat, idx) => (
                <CareFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  summary={feat.summary}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 3: ADDITIONAL FEATURES (2 columns on desktop, 1 col on mobile) */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                ADDITIONAL FEATURES
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {planFeatureData.additional.map((feat, idx) => (
                <CareFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  summary={feat.summary}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 4: OPTIONAL RIDERS (2-3 columns on desktop, 1 col on mobile) */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full mb-3.5 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#14532D] via-[#052E16] to-[#14532D] px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-emerald-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-display flex items-center gap-2.5 relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-xs shrink-0" />
                OPTIONAL RIDERS (ADD-ONS)
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {planFeatureData.riders.map((feat, idx) => (
                <CareFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  summary={feat.summary}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  isRider={true}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className="text-right pt-1">
            <span className="text-xs font-bold text-slate-400">
              *T&C Apply
            </span>
          </div>

        </div>

        {/* IN-PAGE VIDEO LIGHTBOX MODAL */}
        <FeatureVideoModal
          isOpen={videoModalState.isOpen}
          onClose={handleCloseVideo}
          videoTitle={videoModalState.title}
          videoUrl={videoModalState.url}
        />
      </div>
    );
  }

  // =========================================================================
  // MAIN CARE HEALTH PLAN DETAIL PAGE (SINGLE VIEWPORT — MOBILE & DESKTOP PERFECT)
  // =========================================================================
  return (
    <div className="w-full">
      {/* Single Viewport Container - Compact Mobile Packing & Balanced Desktop Layout */}
      <div className="max-w-3xl mx-auto flex flex-col justify-start sm:justify-center items-stretch sm:min-h-[calc(100vh-220px)] py-1 sm:py-4 space-y-0">
        {/* Navigation Breadcrumb - Back to Plans */}
        <div className="shrink-0 text-left mb-3.5 sm:mb-5">
          <Link
            to={`/insurance/${company.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to Care Health Plans</span><span className="sm:hidden">Back to Plans</span>
          </Link>
        </div>

        {/* 1. CARE HEALTH LOGO */}
        <div className="flex flex-col items-center justify-center shrink-0 mb-2.5 sm:mb-4">
          <img
            src={logo}
            alt={name}
            className="w-24 sm:w-48 h-auto max-h-9 sm:max-h-20 object-contain select-none"
          />
        </div>

        {/* 2. PLAN NAME HEADING */}
        <div className="text-center shrink-0 mb-3.5 sm:mb-6">
          <h1 className="text-sm sm:text-2xl font-black text-slate-900 tracking-tight font-display">
            {plan.name}
          </h1>
          <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#1E3A8A] mx-auto mt-1 sm:mt-1.5 rounded-full" />
        </div>

        {/* 3. 2-COLUMN BUTTON GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
          {/* Card 1: Ratio (Marksheet) */}
          <button
            onClick={() => setActiveModal('ratio')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#1E3A8A]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E3A8A]/30 group-hover:bg-[#1E3A8A] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors duration-200 font-display leading-tight pr-1">
              Ratio (Marksheet)
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1E3A8A] group-hover:bg-[#FEFCE8] group-hover:border-[#1E3A8A]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Fundamental / Family Background */}
          <button
            onClick={() => setActiveModal('fundamental')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#1E3A8A]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E3A8A]/30 group-hover:bg-[#1E3A8A] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors duration-200 font-display leading-tight pr-1">
              Fundamental / Family Background
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1E3A8A] group-hover:bg-[#FEFCE8] group-hover:border-[#1E3A8A]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Features */}
          <Link
            to={`/insurance/care-health/${plan.id}/features`}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#1E3A8A]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E3A8A]/30 group-hover:bg-[#1E3A8A] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors duration-200 font-display leading-tight pr-1">
              Features
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1E3A8A] group-hover:bg-[#FEFCE8] group-hover:border-[#1E3A8A]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* Card 4: Condition */}
          <button
            onClick={() => setActiveModal('condition')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#1E3A8A]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#1E3A8A]/30 group-hover:bg-[#1E3A8A] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors duration-200 font-display leading-tight pr-1">
              Condition
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1E3A8A] group-hover:bg-[#FEFCE8] group-hover:border-[#1E3A8A]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL OVERLAYS (RATIO, FUNDAMENTAL, CONDITION)                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Dialog Body - Single Viewport Constraint */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg max-h-[85vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                  <h3 className="text-xs sm:text-base font-black text-slate-900 font-display">
                    {activeModal === 'ratio' && 'Ratio (Marksheet)'}
                    {activeModal === 'fundamental' && 'Fundamental / Family Background'}
                    {activeModal === 'condition' && 'Policy Conditions & Waiting Periods'}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                >
                  <FiX className="text-sm sm:text-base" />
                </button>
              </div>

              {/* Modal Scrollable Content Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-left">
                
                {/* 1. RATIO MODAL VIEW */}
                {activeModal === 'ratio' && (
                  <div className="space-y-3.5">
                    <div className="bg-[#FEFCE8] rounded-xl p-3 border border-[#1E3A8A]/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Claim Settlement Ratio
                        </span>
                        <span className="text-lg sm:text-2xl font-black text-[#1E3A8A]">
                          {settlementRatio}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200">
                        Excellent
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Incurred Claim Ratio
                        </span>
                        <span className="text-sm sm:text-lg font-black text-slate-800">
                          {incurredRatio}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                          Ideal: 50% - 90%
                        </span>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Solvency Ratio
                        </span>
                        <span className="text-sm sm:text-lg font-black text-slate-800">
                          {solvencyRatio}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                          IRDAI Norm &gt; 1.50
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Complaints per 10,000 Claims
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-800">
                        {complaintRatio}
                      </span>
                      <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">
                        Industry-leading specialized cashless claims settlement with over 21,000+ healthcare network providers nationwide.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. FUNDAMENTAL / FAMILY BACKGROUND MODAL VIEW */}
                {activeModal === 'fundamental' && (
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Room Rent Category
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 block">
                        {roomRent}
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Restoration Benefit
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 block">
                        {restoration}
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Pre & Post Hospitalisation
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 block">
                        {prePostHosp}
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Cashless Network Strength
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 block">
                        {cashlessNetwork} nationwide
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. CONDITION MODAL VIEW */}
                {activeModal === 'condition' && (
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                        Waiting Periods
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700 font-medium">
                        <li className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                          <span><strong>Initial Waiting Period:</strong> 30 Days</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                          <span><strong>Specific Illnesses:</strong> 24 Months</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                          <span><strong>Pre-Existing Diseases (PED):</strong> {plan.details.waitingPeriod.split(',')[1] || '24 - 36 Months'}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                        Key Policy Exclusions
                      </span>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {plan.details.exclusions || 'Cosmetic surgeries, non-prescribed health supplements, experimental treatments, self-inflicted injuries, and adventure sports.'}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                        Eligibility
                      </span>
                      <p className="text-xs text-slate-700 font-bold">
                        {plan.details.eligibility || 'Adults 18 to 65 Years (Dependent children from 91 days)'}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
