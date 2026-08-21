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

// Feature Icons Dictionary for Star Health
const FEATURE_ICONS = {
  "s1-1": FiHome,        // Room Rent / Hospitalisation
  "s1-2": FiHeart,       // Inpatient Treatment
  "s1-3": FiCalendar,    // Pre & Post Hospitalisation
  "s1-4": FiCheckSquare, // All Day Care Procedures
  "s1-5": FiCpu,         // Modern Treatments / Robotic Surgery

  "s2-1": FiRefreshCw,   // Auto-Restoration / Refill
  "s2-2": FiTrendingUp,  // Cumulative Bonus / Recharge
  "s2-3": FiClipboard,   // Preventive Health Check-up
  "s2-4": FiHeart,       // Maternity & Newborn / Cardiac short wait
  "s2-5": FiShield,      // Air Ambulance / Specialized Cover

  "s3-1": FiTruck,       // Road Ambulance / Compassionate Travel
  "s3-2": FiHome,        // Organ Donor / Domiciliary Treatment
  "s3-3": FiClock,       // Second Medical Opinion
  "s3-4": FiDollarSign,  // Tax Savings under Sec 80D / Dental Care

  "s4-1": FiSmile,       // Hospital Cash Rider
  "s4-2": FiZap,         // Star Critical Illness / Accident Rider
  "s4-3": FiShield       // Personal Accident / Consumables Shield
};

// Badges Dictionary
const FEATURE_BADGES = {
  "s1-1": "NO SUB-LIMIT",
  "s1-2": "100% COVERAGE",
  "s1-3": "60 & 90 DAYS",
  "s1-4": "400+ PROCEDURES",
  "s1-5": "ROBOTIC TECH",

  "s2-1": "AUTO-REFILL",
  "s2-2": "UP TO 100%",
  "s2-3": "ANNUAL BENEFIT",
  "s2-4": "FAMILY CARE",
  "s2-5": "AIR EVACUATION",

  "s3-1": "ROAD TRANSIT",
  "s3-2": "HOME & DONOR",
  "s3-3": "WORLD EXPERTS",
  "s3-4": "TAX BENEFIT",

  "s4-1": "DAILY CASH",
  "s4-2": "CRITICAL SHIELD",
  "s4-3": "ACCIDENT COVER"
};

// Visual Step Progression Dictionary
const FEATURE_STEPS = {
  "s1-1": ["Hospital Admission", "Single Private Room", "100% Cashless Settle"],
  "s1-2": ["Doctor Consultation", "Inpatient Care", "Direct Hospital Settlement"],
  "s1-3": ["60 Days Pre-Care", "Inpatient Stay", "90 Days Post Diagnostics"],
  "s1-4": ["Daycare Booking", "Day Care Procedure", "Same-Day Return Home"],
  "s1-5": ["Specialist Evaluation", "Precision Robotics", "Advanced Treatment Cover"],

  "s2-1": ["Base SI Exhausted", "Instant Auto-Restore", "Available for Next Claim"],
  "s2-2": ["Claim-Free Year 1", "Cumulative Bonus Accrued", "100% Doubled Protection"],
  "s2-3": ["Policy Renewal", "Schedule Health Check", "Complimentary Tests"],
  "s2-4": ["24 Months Waiting", "Hospital Delivery Care", "Day 1 Newborn Protection"],
  "s2-5": ["Critical Condition", "Emergency Air Call", "Direct Hospital Transport"],

  "s3-1": ["Emergency Transit", "Nearest Hospital", "Full Road Cover"],
  "s3-2": ["Home Recommendation", "3+ Days Treatment", "Full Domiciliary Cover"],
  "s3-3": ["Upload Reports", "Expert Panel Review", "Second Opinion Report"],
  "s3-4": ["Annual Premium Paid", "Section 80D Receipt", "Claim Tax Deduction"],

  "s4-1": ["24-hr Inpatient Stay", "Daily Cash Verified", "Direct Payout"],
  "s4-2": ["Diagnosis Confirmed", "Survival Period", "100% Lump Sum Transfer"],
  "s4-3": ["Accident Incident", "Document Submission", "Financial Shield Payout"]
};

// Comprehensive Datasets for all 3 Star Health plans
const STAR_HEALTH_FEATURES_BY_PLAN = {
  "star-comprehensive": {
    mostImportant: [
      {
        id: "s1-1",
        title: "Any Room Category (Zero Capping)",
        subtitle: "Single Private A/C Room Covered",
        summary: "Zero sub-limits on room rent or ICU charges. Choose single private A/C room with 100% cashless claims across 14,000+ network hospitals."
      },
      {
        id: "s1-2",
        title: "Inpatient Hospitalisation",
        subtitle: "100% Actual Medical Expenses",
        summary: "Comprehensive in-patient hospitalisation expenses covered including nursing fees, surgeon fees, operation theatre, and in-hospital medications."
      },
      {
        id: "s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "60 Days Pre & 90 Days Post",
        summary: "Covers medical consultations, diagnostic tests, and prescribed pharmacy bills 60 days before hospitalisation and 90 days after discharge."
      },
      {
        id: "s1-4",
        title: "All Day Care Procedures",
        subtitle: "Day Care Surgeries Covered",
        summary: "All medical day care procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are fully covered."
      },
      {
        id: "s1-5",
        title: "Modern Treatments & Robotic Surgery",
        subtitle: "Advanced Precision Tech Covered",
        summary: "Coverage for robotic surgeries, stem cell therapy, oral chemotherapy, deep brain stimulation, balloon sinuplasty, and stereotactic radio surgery."
      }
    ],
    valueAdded: [
      {
        id: "s2-1",
        title: "Automatic Restoration Benefit",
        subtitle: "100% Automatic Sum Insured Refill",
        summary: "Automatically restores 100% of Base Sum Insured once in a policy year upon complete exhaustion of cover for subsequent unrelated illnesses."
      },
      {
        id: "s2-2",
        title: "Cumulative Bonus (Up to 100%)",
        subtitle: "50% Bonus in Year 1 & 50% in Year 2",
        summary: "Increases basic Sum Insured by 50% for the first claim-free year, and 50% for the second claim-free year, reaching 100% maximum bonus without extra premium."
      },
      {
        id: "s2-3",
        title: "Preventive Health Check-up",
        subtitle: "Complimentary Annual Health Check",
        summary: "Complimentary comprehensive health check-up package covered for insured members every claim-free year across network diagnostic centers."
      },
      {
        id: "s2-4",
        title: "Maternity & Newborn Cover",
        subtitle: "Delivery & Baby Care from Day 1",
        summary: "Comprehensive maternity coverage for normal and caesarean delivery after 24 months, plus newborn baby medical cover up to ₹1,00,000 from day 1."
      },
      {
        id: "s2-5",
        title: "Air Ambulance Cover",
        subtitle: "Up to ₹5 Lakh per Policy Year",
        summary: "Emergency air ambulance charges covered up to ₹5,00,000 per policy year for emergency evacuation and transport to the nearest multi-speciality hospital."
      }
    ],
    additional: [
      {
        id: "s3-1",
        title: "Emergency Road Ambulance",
        subtitle: "Surface Ambulance Charges Covered",
        summary: "Emergency surface road ambulance charges to the nearest hospital for inpatient hospitalisation are fully covered."
      },
      {
        id: "s3-2",
        title: "Dental & Ophthalmic Outpatient Cover",
        subtitle: "Outpatient Dental & Vision Care",
        summary: "Outpatient dental and ophthalmic consultations, treatments, and procedures covered after 3 continuous claim-free policy years."
      },
      {
        id: "s3-3",
        title: "Second Medical Opinion",
        subtitle: "Worldwide Expert Specialists",
        summary: "Free access to second medical opinions from world-class doctors and specialists for critical or complex medical diagnoses."
      },
      {
        id: "s3-4",
        title: "Tax Savings under Sec 80D",
        subtitle: "Deductions up to ₹75,000 Annually",
        summary: "Avail tax deductions up to ₹75,000 on health insurance premiums paid under Section 80D of the Income Tax Act."
      }
    ],
    riders: [
      {
        id: "s4-1",
        title: "Hospital Cash Benefit",
        subtitle: "Daily Cash Allowance per Day",
        summary: "Provides a fixed daily cash allowance for every 24 hours of continuous hospitalisation to manage non-medical incidental expenses."
      },
      {
        id: "s4-2",
        title: "Star Critical Illness Cover",
        subtitle: "Lump Sum Payout on 37 Critical Illnesses",
        summary: "Provides an additional lump sum cash payout upon first diagnosis of any of 37 listed critical illnesses including cancer, heart attack, and stroke."
      },
      {
        id: "s4-3",
        title: "Personal Accident Rider",
        subtitle: "24/7 Worldwide Accident Protection",
        summary: "Round-the-clock worldwide accident shield providing financial compensation in case of accidental death or permanent total disablement."
      }
    ]
  },
  "family-health-optima": {
    mostImportant: [
      {
        id: "s1-1",
        title: "Single Private Room Cover",
        subtitle: "Room Rent up to Single Private Room",
        summary: "Inpatient room rent covered up to Single Private A/C Room limit across all 14,000+ network hospitals for all covered family members."
      },
      {
        id: "s1-2",
        title: "Inpatient Hospitalisation",
        subtitle: "Complete Family Medical Care",
        summary: "Full coverage for doctor consultation, surgeon fees, operation theatre, specialist care, and in-hospital medications for entire family."
      },
      {
        id: "s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "60 Days Pre & 90 Days Post",
        summary: "Covers pre-hospitalisation diagnostic and consultation expenses for 60 days and post-hospitalisation follow-up expenses for 90 days."
      },
      {
        id: "s1-4",
        title: "400+ Day Care Procedures Covered",
        subtitle: "Comprehensive Day Care Cover",
        summary: "Over 400 advanced daycare medical and surgical procedures requiring less than 24 hours of hospital stay are fully covered."
      },
      {
        id: "s1-5",
        title: "Advanced Technology Cover",
        subtitle: "Modern Medical Innovations Covered",
        summary: "Comprehensive coverage for advanced medical innovations, robotic surgery, and modern precision procedures up to sub-limits."
      }
    ],
    valueAdded: [
      {
        id: "s2-1",
        title: "Auto Restoration (3 Times / 300%)",
        subtitle: "100% Refill up to 3 Times per Year",
        summary: "Automatically restores 100% of Basic Sum Insured up to 3 times in a single policy year upon complete exhaustion of base sum insured."
      },
      {
        id: "s2-2",
        title: "Recharge Benefit",
        subtitle: "Additional Buffer up to ₹1,50,000",
        summary: "Provides an additional sum insured recharge of up to ₹1,50,000 when the base sum insured is exhausted, at zero extra cost."
      },
      {
        id: "s2-3",
        title: "Cumulative Bonus",
        subtitle: "25% in Year 1, 10% Afterwards (Max 100%)",
        summary: "Increases basic Sum Insured by 25% for the first claim-free year and 10% for each subsequent claim-free year up to a maximum 100%."
      },
      {
        id: "s2-4",
        title: "Health Check-up Benefit",
        subtitle: "Annual Preventive Family Screening",
        summary: "Free comprehensive health check-up for every claim-free year for all adult family members across Star Health diagnostic partners."
      },
      {
        id: "s2-5",
        title: "Newborn Baby Cover (from 16th Day)",
        subtitle: "Medical Cover for Newborn from 16th Day",
        summary: "Medical coverage for newborn baby automatically included from the 16th day of birth up to 10% of sum insured without additional premium."
      }
    ],
    additional: [
      {
        id: "s3-1",
        title: "Emergency Road Ambulance",
        subtitle: "Covered up to ₹1,500 per Year",
        summary: "Emergency surface road ambulance charges to the hospital covered up to ₹750 per hospitalisation and ₹1,500 per policy year."
      },
      {
        id: "s3-2",
        title: "Compassionate Travel Assistance",
        subtitle: "Airfare / Rail Ticket for Family Member",
        summary: "Reimburses economy airfare or railway ticket expenses for an immediate family member to travel to the hospital during critical hospitalisation."
      },
      {
        id: "s3-3",
        title: "Assisted Reproduction Treatment",
        subtitle: "Infertility & Reproductive Health Cover",
        summary: "Covers subfertility and assisted reproduction treatment hospitalisation expenses after 36 months of continuous policy coverage."
      },
      {
        id: "s3-4",
        title: "Domiciliary Treatment",
        subtitle: "Home Hospitalisation Coverage",
        summary: "In-home medical treatment covered for illnesses where hospital stay exceeds 3 days and patient cannot be safely moved to a hospital."
      }
    ],
    riders: [
      {
        id: "s4-1",
        title: "Hospital Daily Cash",
        subtitle: "Fixed Daily Allowance during Stay",
        summary: "Provides a fixed per-day cash support during hospitalisation to manage indirect household and non-medical expenses."
      },
      {
        id: "s4-2",
        title: "Star Accident Care Rider",
        subtitle: "Accidental Death & Disablement Cover",
        summary: "Dedicated accidental death and permanent total disability protection for the primary earning member of the family."
      },
      {
        id: "s4-3",
        title: "Non-Medical Consumables Shield",
        subtitle: "Covers Gloves, Masks & PPE Kits",
        summary: "Covers eligible non-medical consumables including surgical gloves, syringes, gowns, and PPE kits used during hospitalisation."
      }
    ]
  },
  "star-cardiac-care": {
    mostImportant: [
      {
        id: "s1-1",
        title: "Pre-Existing Cardiac Coverage",
        subtitle: "Heart Patients Covered after 90 Days",
        summary: "Specialized health protection specifically covering pre-existing cardiac conditions and prior cardiac interventions after a short 90-day waiting period."
      },
      {
        id: "s1-2",
        title: "Inpatient Cardiac & Surgical Care",
        subtitle: "100% Hospitalisation Expenses Covered",
        summary: "Full in-patient hospitalisation expenses for open-heart surgery, bypass surgery (CABG), angioplasty, pacemaker implants, and ICU care."
      },
      {
        id: "s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post",
        summary: "Covers cardiac diagnostics (ECG, Echo, Angiography) 30 days before admission and 60 days of cardiac follow-up consultations post-discharge."
      },
      {
        id: "s1-4",
        title: "Cardiac Day Care Surgeries",
        subtitle: "Same-Day Cardiac Procedures Covered",
        summary: "All daycare cardiac procedures and interventional surgeries requiring less than 24 hours of hospital stay are fully covered."
      },
      {
        id: "s1-5",
        title: "Advanced Cardiac Interventions",
        subtitle: "Stents, Pacemakers & Robotic Interventions",
        summary: "Coverage for advanced stent placements, heart valve repairs, AICDs, and robotic cardiothoracic surgical procedures."
      }
    ],
    valueAdded: [
      {
        id: "s2-1",
        title: "Short 90-Day Waiting for Cardiac Surgeries",
        subtitle: "Rapid Coverage for Heart Patients",
        summary: "Cardiac interventional surgeries and surgical hospitalisation covered after just 90 days from policy inception (vs standard 3-4 years in normal policies)."
      },
      {
        id: "s2-2",
        title: "Outpatient Cardiac Consultation",
        subtitle: "Doctor Visits & Prescriptions Covered",
        summary: "Outpatient consultations with cardiologists and prescribed cardiac diagnostic investigations covered up to specified policy limits."
      },
      {
        id: "s2-3",
        title: "Cardiac Device & Implant Coverage",
        subtitle: "Stents & Pacemakers Covered",
        summary: "Covers surgical costs and implantation of drug-eluting stents, pacemakers, and artificial heart valves up to sum insured limits."
      },
      {
        id: "s2-4",
        title: "Preventive Cardiac Health Check-up",
        subtitle: "Annual ECG, Echo & Lipid Screening",
        summary: "Comprehensive annual cardiac check-up package including ECG, Lipid profile, and 2D-Echo after each claim-free policy year."
      },
      {
        id: "s2-5",
        title: "Emergency Road Ambulance",
        subtitle: "Rapid Transit up to ₹2,000 per Event",
        summary: "Emergency surface road ambulance charges to the nearest hospital for critical cardiac events covered up to ₹2,000 per hospitalisation."
      }
    ],
    additional: [
      {
        id: "s3-1",
        title: "Second Medical Opinion (World Specialists)",
        subtitle: "Direct Access to Leading Cardiologists",
        summary: "Free access to second medical opinions from top cardiologists and cardiac surgeons globally for major heart surgical procedures."
      },
      {
        id: "s3-2",
        title: "Inpatient AYUSH Treatment",
        subtitle: "100% Inpatient Alternative Care",
        summary: "Covers inpatient medical treatments taken under recognized Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy hospitals."
      },
      {
        id: "s3-3",
        title: "Domiciliary Hospitalisation",
        subtitle: "In-Home Medical Care Covered",
        summary: "Covers in-home medical treatment for cardiac conditions where patient cannot be moved to a hospital or hospital beds are unavailable."
      },
      {
        id: "s3-4",
        title: "Tax Savings under Sec 80D",
        subtitle: "Deductions up to ₹75,000 Annually",
        summary: "Avail tax deductions up to ₹75,000 on health insurance premiums paid under Section 80D of the Income Tax Act."
      }
    ],
    riders: [
      {
        id: "s4-1",
        title: "Cardiac Hospital Cash",
        subtitle: "Fixed Daily Allowance per Day",
        summary: "Per-day daily cash allowance for every 24 hours of hospitalisation to manage incidental family and travel expenses."
      },
      {
        id: "s4-2",
        title: "Personal Accident Shield",
        subtitle: "24/7 Worldwide Accident Protection",
        summary: "Round-the-clock worldwide accidental death and permanent disablement protection for primary earning members."
      },
      {
        id: "s4-3",
        title: "Critical Care Booster",
        subtitle: "Extra Shield against Non-Cardiac Illnesses",
        summary: "Extra financial protection providing lump-sum support against non-cardiac critical illnesses such as kidney failure and stroke."
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
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 hover:bg-[#003087] text-slate-600 hover:text-white border border-slate-200/80 text-[9.5px] sm:text-[10px] font-bold transition-all duration-150 active:scale-95 shrink-0"
      title={`Watch video demo for ${featureTitle}`}
    >
      <FiPlay className="text-[8px] fill-current" />
      <span>Video</span>
    </button>
  );
};

// Feature Accordion Item Component (Identical to approved design)
function StarFeatureAccordionItem({
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
          ? 'bg-[#F0F4FF]/80 border-[#003087]/60 shadow-md ring-1 ring-[#003087]/20'
          : 'bg-white border-slate-200/80 hover:border-[#003087]/40 shadow-2xs'
      }`}
    >
      {/* Header Row */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          {IconComponent && (
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isExpanded ? 'bg-[#003087] text-white shadow-xs' : 'bg-[#F0F4FF] text-[#003087]'
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
                <span className="text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#003087]/10 text-[#003087] tracking-wide shrink-0">
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
          isExpanded ? 'bg-[#003087] text-white rotate-180' : 'bg-[#F0F4FF] text-[#003087]'
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
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-[#F0F4FF] text-[#003087] border border-[#003087]/20 tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#003087]" />
                    {badgeText}
                  </span>
                )}
                {subtitle && (
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-700">
                    <FiCheck className="text-[#003087] text-xs shrink-0" /> {subtitle}
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
                          <span className="text-xs font-extrabold text-[#003087] px-0.5">
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

export default function StarHealthPlanDetailSection({ plan, company }) {
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
  const settlementRatio = getCompanyRatioValue(company.id, 'settlement') || '97.9%';
  const incurredRatio = getCompanyRatioValue(company.id, 'incurred') || '63%';
  const solvencyRatio = getCompanyRatioValue(company.id, 'solvency') || '1.72';
  const complaintRatio = getCompanyRatioValue(company.id, 'complaint') || '18.5 per 10k';

  // Fundamental values
  const restoration = getDerivedValue(plan, company, 'restoration') || '100% Restoration (Up to 3x Floater / Auto-Restore)';
  const roomRent = plan.details.roomRent || 'Single Private A/C Room';
  const prePostHosp = plan.details.prePostHospital || '60 Days Pre & 90 Days Post';
  const cashlessNetwork = getDerivedValue(plan, company, 'cashlessHospitals') || '14,000+ Hospitals';

  // Feature dataset for the active plan
  const planFeatureData = STAR_HEALTH_FEATURES_BY_PLAN[plan.id] || STAR_HEALTH_FEATURES_BY_PLAN["star-comprehensive"];

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
      <div className="w-full pb-20 bg-[#F0F4FF] min-h-screen overflow-x-hidden relative">
        {/* Subtle Ambient Blue Glow matching Star Health theme */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-[#003087]" />

        {/* Page Container — Star Health Theme */}
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
                {plan.name} <span className="text-[#003087]">—</span> FEATURES
              </h1>
              <div className="w-8 sm:w-12 h-1 bg-[#003087] mx-auto mt-1.5 rounded-full" />
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
                <StarFeatureAccordionItem
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
                <StarFeatureAccordionItem
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
                <StarFeatureAccordionItem
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
                <StarFeatureAccordionItem
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
  // MAIN STAR HEALTH PLAN DETAIL PAGE (SINGLE VIEWPORT — MOBILE & DESKTOP PERFECT)
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
            <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to Star Health Plans</span><span className="sm:hidden">Back to Plans</span>
          </Link>
        </div>

        {/* 1. STAR HEALTH LOGO */}
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
          <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#003087] mx-auto mt-1 sm:mt-1.5 rounded-full" />
        </div>

        {/* 3. 2-COLUMN BUTTON GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
          {/* Card 1: Ratio (Marksheet) */}
          <button
            onClick={() => setActiveModal('ratio')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#003087]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#003087]/30 group-hover:bg-[#003087] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#003087] transition-colors duration-200 font-display leading-tight pr-1">
              Ratio (Marksheet)
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#003087] group-hover:bg-[#F0F4FF] group-hover:border-[#003087]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Fundamental / Family Background */}
          <button
            onClick={() => setActiveModal('fundamental')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#003087]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#003087]/30 group-hover:bg-[#003087] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#003087] transition-colors duration-200 font-display leading-tight pr-1">
              Fundamental / Family Background
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#003087] group-hover:bg-[#F0F4FF] group-hover:border-[#003087]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Features */}
          <Link
            to={`/insurance/star-health/${plan.id}/features`}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#003087]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#003087]/30 group-hover:bg-[#003087] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#003087] transition-colors duration-200 font-display leading-tight pr-1">
              Features
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#003087] group-hover:bg-[#F0F4FF] group-hover:border-[#003087]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* Card 4: Condition */}
          <button
            onClick={() => setActiveModal('condition')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#003087]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#003087]/30 group-hover:bg-[#003087] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#003087] transition-colors duration-200 font-display leading-tight pr-1">
              Condition
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#003087] group-hover:bg-[#F0F4FF] group-hover:border-[#003087]/20 transition-all duration-200 shrink-0">
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
                  <div className="w-2 h-2 rounded-full bg-[#003087]" />
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
                    <div className="bg-[#F0F4FF] rounded-xl p-3 border border-[#003087]/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Claim Settlement Ratio
                        </span>
                        <span className="text-lg sm:text-2xl font-black text-[#003087]">
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
                        One of the lowest grievance metrics among standalone health insurers with 14,000+ cashless network hospitals.
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
                        {cashlessNetwork} (Largest standalone health network in India)
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
                          <span className="w-1.5 h-1.5 rounded-full bg-[#003087]" />
                          <span><strong>Initial Waiting Period:</strong> 30 Days</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#003087]" />
                          <span><strong>Specific Illnesses:</strong> 24 Months</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#003087]" />
                          <span><strong>Pre-Existing Diseases (PED):</strong> {plan.details.waitingPeriod.split(',')[1] || '36 - 48 Months'}</span>
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
                        {plan.details.eligibility || 'Adults 18 to 65 Years (Dependent children from 91 days to 25 years)'}
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
