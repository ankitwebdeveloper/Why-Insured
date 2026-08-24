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
  FiActivity,
  FiLock,
  FiAward,
  FiPhoneCall
} from 'react-icons/fi';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

// =============================================================================
// DEMO VIDEO CONFIGURATION
// Replace DEMO_VIDEO_URL below with your actual video link whenever needed.
// =============================================================================
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

// Feature Icons Dictionary for Niva Bupa
const FEATURE_ICONS = {
  // ReAssure 2.0
  "r2-s1-1": FiHome,        // Any Room Category (No Room Rent Capping)
  "r2-s1-2": FiHeart,       // No Limit on ICU
  "r2-s1-3": FiCalendar,    // Pre & Post Hospitalisation (60/180 Days)
  "r2-s1-4": FiCheckSquare, // All Day Care Procedures Covered
  "r2-s1-5": FiCpu,         // Modern Treatment & Robotic Surgery

  "r2-s2-1": FiRefreshCw,   // ReAssure Forever (Unlimited Restoration)
  "r2-s2-2": FiLock,        // Lock the Clock (Entry Age Premium Lock-in)
  "r2-s2-3": FiTrendingUp,  // Booster+ (Carry Forward Unused Sum Insured)
  "r2-s2-4": FiClipboard,   // Annual Health Check-up from Day 1
  "r2-s2-5": FiShield,      // Safeguard+ (Non-Medical Items & Inflation Cover)

  "r2-s3-1": FiSmile,       // Live Healthy (Up to 30% Renewal Discount)
  "r2-s3-2": FiHome,        // AYUSH & Domiciliary Hospitalisation
  "r2-s3-3": FiTruck,       // Emergency Road & Air Ambulance Cover
  "r2-s3-4": FiActivity,    // Organ Donor Hospitalisation Expenses

  "r2-s4-1": FiShield,      // Personal Accident Add-on
  "r2-s4-2": FiDollarSign,  // Hospital Cash Benefit
  "r2-s4-3": FiZap,         // Critical Illness Rider
  "r2-s4-4": FiUsers,       // Global Emergency Health Cover
  "r2-s4-5": FiPhoneCall,   // OPD Care Consultation Add-on

  // Health Companion
  "hc-s1-1": FiHome,        // Single Private Room Coverage
  "hc-s1-2": FiHeart,       // No Capping on ICU Charges
  "hc-s1-3": FiCalendar,    // Pre & Post Hospitalisation (30/60 Days)
  "hc-s1-4": FiCheckSquare, // Over 500+ Day Care Procedures
  "hc-s1-5": FiCpu,         // Modern Medical Technologies Covered

  "hc-s2-1": FiRefreshCw,   // Refill Benefit (100% Reinstatement)
  "hc-s2-2": FiTrendingUp,  // Cumulative Bonus (20% per Year up to 100%)
  "hc-s2-3": FiClipboard,   // Free Annual Health Check-up
  "hc-s2-4": FiShield,      // Zero Mandatory Co-Payment Across All Ages
  "hc-s2-5": FiAward,       // Direct 30-Min Cashless Desk

  "hc-s3-1": FiHome,        // Inpatient AYUSH Alternative Treatment
  "hc-s3-2": FiTruck,       // Emergency Road Ambulance
  "hc-s3-3": FiCreditCard,  // Domiciliary Treatment Coverage
  "hc-s3-4": FiActivity,    // Organ Donor Inpatient Cover

  "hc-s4-1": FiDollarSign,  // Hospital Cash Allowance
  "hc-s4-2": FiShield,      // Safeguard Add-on (Consumables Covered)
  "hc-s4-3": FiZap,         // Critical Advantage Rider (Overseas Cover)
  "hc-s4-4": FiUsers,       // Individual Personal Accident Cover

  // Seniors First
  "sf-s1-1": FiHome,        // Room Rent Coverage (Single Standard Room)
  "sf-s1-2": FiHeart,       // ICU Charges Covered (2% per Day)
  "sf-s1-3": FiCalendar,    // Pre & Post Hospitalisation (30/60 Days)
  "sf-s1-4": FiCheckSquare, // Day Care Surgeries (Cataract, Dialysis, etc.)
  "sf-s1-5": FiClock,       // Pre-Existing Disease Cover (Short 2-Year Waiting)

  "sf-s2-1": FiRefreshCw,   // ReAssure Senior Benefit (Unlimited Restoration)
  "sf-s2-2": FiLock,        // Hassle-Free No Pre-Policy Medical Test
  "sf-s2-3": FiTrendingUp,  // Cumulative Bonus (10% per Year up to 50%)
  "sf-s2-4": FiClipboard,   // Annual Geriatric Health Screening
  "sf-s2-5": FiAward,       // Co-Pay Waiver / Deductible Options

  "sf-s3-1": FiHome,        // Inpatient AYUSH Care
  "sf-s3-2": FiTruck,       // Emergency Road Ambulance Support
  "sf-s3-3": FiCreditCard,  // Domiciliary Home Care Treatment
  "sf-s3-4": FiActivity,    // Organ Donor Medical Cover

  "sf-s4-1": FiDollarSign,  // Senior Daily Hospital Cash
  "sf-s4-2": FiShield,      // Safeguard Senior Rider (Consumables Cover)
  "sf-s4-3": FiZap,         // Senior Critical Illness Booster
  "sf-s4-4": FiUsers        // Senior Personal Accident Shield
};

// Plan-specific feature datasets for all 3 Niva Bupa plans
const NIVA_BUPA_FEATURES_BY_PLAN = {
  "reassure-2-0": {
    mostImportant: [
      {
        id: "r2-s1-1",
        title: "Any Room Category",
        subtitle: "No Room Rent Capping — Private Suite Covered",
        badge: "ROOM RENT COVER",
        summary: "Zero room rent limit or proportional deductions. Stay in any room category from Single Private Room to Luxury Suite with 100% cashless support.",
        steps: null
      },
      {
        id: "r2-s1-2",
        title: "No Limit on ICU",
        subtitle: "100% ICU & ICCU Charges Covered",
        badge: "ICU COVER",
        summary: "Comprehensive coverage for Intensive Care Unit (ICU), ICCU, and monitoring charges without any daily sub-limits or caps.",
        steps: null
      },
      {
        id: "r2-s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "60 Days Pre & 180 Days Post Hospitalisation",
        badge: "PRE & POST COVER",
        summary: "Medical consultations, diagnostics, pharmacy, and investigation expenses incurred 60 days before hospital admission and 180 days post-discharge are fully reimbursed.",
        steps: ["60 Days Pre-Hosp", "Hospitalisation Stay", "180 Days Post-Hosp"]
      },
      {
        id: "r2-s1-4",
        title: "All Day Care Procedures Covered",
        subtitle: "Advanced Day Care Procedures (<24 hrs admission)",
        badge: "DAY CARE PROCEDURES",
        summary: "All medical procedures and surgeries requiring less than 24 hours of hospital stay due to modern technological advancements are covered up to Sum Insured.",
        steps: null
      },
      {
        id: "r2-s1-5",
        title: "Modern Treatment & Robotic Surgery",
        subtitle: "Cutting-Edge Surgical Advancements Covered",
        badge: "ADVANCED SURGERY",
        summary: "Covers robotic surgeries, stem cell therapy, oral chemotherapy, cyberknife, and precision surgeries up to 100% of the Sum Insured.",
        steps: null
      }
    ],
    valueAdded: [
      {
        id: "r2-s2-1",
        title: "ReAssure Forever",
        subtitle: "Unlimited Automatic Restoration for Lifetime",
        badge: "RESTORATION BENEFIT",
        summary: "Restores 100% Sum Insured unlimited times from the 1st claim itself for the same or different illnesses across your entire lifetime.",
        steps: ["Base Sum Insured", "1st Claim Triggered", "100% Restored", "∞ Unlimited Forever"]
      },
      {
        id: "r2-s2-2",
        title: "Lock the Clock",
        subtitle: "Entry Age Premium Locked until 1st Claim",
        badge: "PREMIUM LOCK-IN",
        summary: "Your premium remains fixed at your age of entry until you make your very first claim, shielding you from age-based premium hikes.",
        steps: ["Joined at Entry Age", "Locked Premium Rate", "Pays Entry Rate until Claim #1"]
      },
      {
        id: "r2-s2-3",
        title: "Booster+ Benefit",
        subtitle: "Carry Forward Unused Cover up to 10X (1000%)",
        badge: "BOOSTER BENEFIT",
        summary: "Unused Sum Insured carries forward to the following policy year, accumulating up to 5X to 10X of Base Sum Insured.",
        steps: ["Base Sum Insured", "Yr 1: +100%", "Yr 2: +100%", "Max 10X Carry Forward"]
      },
      {
        id: "r2-s2-4",
        title: "Preventive Health Check-up",
        subtitle: "Cashless Annual Check-up from Day 1",
        badge: "ANNUAL CHECKUP",
        summary: "Complimentary comprehensive health check-ups covered from Day 1 for all adult insured members on a cashless basis at network diagnostics.",
        steps: null
      },
      {
        id: "r2-s2-5",
        title: "Safeguard+ Benefit",
        subtitle: "Non-Medical Items Covered + Inflation Protection",
        badge: "NON-MEDICAL ITEMS",
        summary: "Covers non-medical items (gloves, PPE kits, syringes, masks) and adds CPI inflation-linked increase to your Sum Insured every renewal.",
        steps: null
      }
    ],
    additional: [
      {
        id: "r2-s3-1",
        title: "Live Healthy Discount",
        subtitle: "Up to 30% Renewal Premium Discount",
        badge: "WELLNESS DISCOUNT",
        summary: "Track your daily step counts and health metrics through the Niva Bupa app to earn wellness reward points and get up to 30% discount on renewal.",
        steps: ["Track Daily Steps", "Earn Health Points", "Up to 30% Discount"]
      },
      {
        id: "r2-s3-2",
        title: "AYUSH & Domiciliary Treatment",
        subtitle: "Complete Alternative & Home Healthcare Covered",
        badge: "HOME & AYUSH",
        summary: "100% inpatient coverage for Ayurveda, Yoga, Unani, Siddha, Homeopathy, and doctor-prescribed home hospitalisation.",
        steps: null
      },
      {
        id: "r2-s3-3",
        title: "Emergency Road & Air Ambulance",
        subtitle: "Road Ambulance Covered at Actuals, Air Ambulance to SI",
        badge: "AMBULANCE COVER",
        summary: "Emergency road ambulance expenses covered up to actual costs, and air ambulance transportation covered up to the Sum Insured limit.",
        steps: null
      },
      {
        id: "r2-s3-4",
        title: "Organ Donor Hospitalisation",
        subtitle: "Full Inpatient Donor Medical Costs Covered",
        badge: "ORGAN DONOR",
        summary: "Covers in-patient medical expenses incurred by the organ donor for harvesting organs during transplant surgery.",
        steps: null
      }
    ],
    riders: [
      {
        id: "r2-s4-1",
        title: "Personal Accident Add-on",
        subtitle: "Lump sum payout up to 5X Sum Insured",
        badge: "ACCIDENT SHIELD",
        summary: "Financial security with lump sum compensation in case of accidental death or permanent total disability.",
        steps: null
      },
      {
        id: "r2-s4-2",
        title: "Hospital Cash Benefit",
        subtitle: "Daily Cash Allowance for Hospital Stay",
        badge: "DAILY ALLOWANCE",
        summary: "Provides fixed daily cash allowance for every completed 24 hours of hospitalisation to take care of ancillary expenses.",
        steps: ["Daily Allowance", "Up to 30 Days / Year"]
      },
      {
        id: "r2-s4-3",
        title: "Critical Illness Rider",
        subtitle: "Lump sum cover on diagnosis of 20+ Critical Illnesses",
        badge: "CRITICAL ILLNESS",
        summary: "Lump sum payout on first diagnosis of major critical illnesses like cancer, heart attack, kidney failure, or stroke.",
        steps: null
      },
      {
        id: "r2-s4-4",
        title: "International Health Cover",
        subtitle: "Worldwide emergency and planned treatment cover",
        badge: "GLOBAL COVER",
        summary: "Extends medical protection worldwide for emergency treatments and planned care abroad at leading healthcare facilities.",
        steps: null
      },
      {
        id: "r2-s4-5",
        title: "OPD Care Consultation Rider",
        subtitle: "Doctor consultations, pharmacy & lab tests covered",
        badge: "OPD BENEFIT",
        summary: "Covers outpatient medical visits, physical & tele-consultations, diagnostics, and prescribed medicines.",
        steps: null
      }
    ]
  },

  "health-companion": {
    mostImportant: [
      {
        id: "hc-s1-1",
        title: "Single Private Room",
        subtitle: "Private A/C Room with Zero Co-Pay",
        badge: "ROOM RENT COVER",
        summary: "Coverage for Single Private A/C Room accommodation with zero co-payment and no proportional deduction across network hospitals.",
        steps: null
      },
      {
        id: "hc-s1-2",
        title: "No Limit on ICU",
        subtitle: "Full Intensive Care Unit Coverage",
        badge: "ICU COVER",
        summary: "Intensive care unit charges and ICU nursing expenses are fully covered up to the Sum Insured limit.",
        steps: null
      },
      {
        id: "hc-s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post Hospitalisation",
        badge: "PRE & POST COVER",
        summary: "Covers medical expenses, diagnostic tests, and consultations 30 days prior to hospital admission and 60 days following discharge.",
        steps: ["30 Days Pre-Hosp", "Hospitalisation Stay", "60 Days Post-Hosp"]
      },
      {
        id: "hc-s1-4",
        title: "Over 500+ Day Care Procedures",
        subtitle: "All advanced procedures requiring <24 hrs admission",
        badge: "DAY CARE PROCEDURES",
        summary: "Comprehensive coverage for over 500 medical day care procedures requiring less than 24 hours of hospital stay.",
        steps: null
      },
      {
        id: "hc-s1-5",
        title: "Modern Medical Treatments",
        subtitle: "Robotic surgeries and precision treatments covered",
        badge: "ADVANCED SURGERY",
        summary: "Covers advanced medical treatments including robotic surgery, balloon sinuplasty, and immunotherapy up to Sum Insured.",
        steps: null
      }
    ],
    valueAdded: [
      {
        id: "hc-s2-1",
        title: "Refill Benefit",
        subtitle: "100% Automatic Refill of Sum Insured",
        badge: "RESTORATION BENEFIT",
        summary: "Reinstates 100% Base Sum Insured once in a policy year if the base cover gets exhausted due to claims for unrelated illnesses.",
        steps: ["Base Sum Insured", "Base SI Exhausted", "100% Reinstated"]
      },
      {
        id: "hc-s2-2",
        title: "No Claim Bonus (NCB)",
        subtitle: "20% increase in Sum Insured per claim-free year (Max 100%)",
        badge: "BONUS GROWTH",
        summary: "Increases your Base Sum Insured by 20% for every claim-free policy year, doubling your total coverage up to 100% without extra cost.",
        steps: ["Base Sum Insured", "Yr 1: +20%", "Yr 2: +20%", "Max 100% Bonus"]
      },
      {
        id: "hc-s2-3",
        title: "Annual Health Check-up",
        subtitle: "Complimentary annual health screening from Day 1",
        badge: "ANNUAL CHECKUP",
        summary: "Free comprehensive health check-up package available for all insured adults every policy year upon renewal.",
        steps: null
      },
      {
        id: "hc-s2-4",
        title: "No Co-Payment",
        subtitle: "Zero mandatory co-pay across all age groups",
        badge: "ZERO CO-PAY",
        summary: "Zero mandatory co-payment across any age group, ensuring full claim settlement without deductions.",
        steps: null
      },
      {
        id: "hc-s2-5",
        title: "Direct 30-Min Cashless Desk",
        subtitle: "Speedy cashless authorization at 10,000+ hospitals",
        badge: "DIRECT CASHLESS",
        summary: "Pre-authorized cashless medical claims processed within 30 minutes at 10,000+ network hospitals across India.",
        steps: null
      }
    ],
    additional: [
      {
        id: "hc-s3-1",
        title: "AYUSH Treatment Covered",
        subtitle: "Inpatient Ayurveda, Unani, Siddha & Homeopathy",
        badge: "AYUSH COVER",
        summary: "Full coverage for alternative inpatient medical care in government recognized or NABH accredited AYUSH healthcare centers.",
        steps: null
      },
      {
        id: "hc-s3-2",
        title: "Emergency Road Ambulance",
        subtitle: "Emergency Road Ambulance Covered",
        badge: "AMBULANCE COVER",
        summary: "Emergency surface road ambulance charges to the nearest hospital are reimbursed as per policy limits per admission.",
        steps: null
      },
      {
        id: "hc-s3-3",
        title: "Domiciliary Treatment",
        subtitle: "At-home medical care when hospital bed is unavailable",
        badge: "HOME TREATMENT",
        summary: "Covers medical expenses for at-home medical treatment when the patient is in non-movable condition or hospital beds are unavailable.",
        steps: null
      },
      {
        id: "hc-s3-4",
        title: "Organ Donor Hospitalisation",
        subtitle: "Inpatient donor medical costs covered to Sum Insured",
        badge: "ORGAN DONOR",
        summary: "Inpatient hospitalisation expenses incurred by the organ donor during organ harvesting are covered up to the Base Sum Insured.",
        steps: null
      }
    ],
    riders: [
      {
        id: "hc-s4-1",
        title: "Hospital Cash Allowance",
        subtitle: "Daily cash payout during hospitalisation",
        badge: "DAILY CASH",
        summary: "Provides fixed daily cash allowance for every completed 24 hours of hospital stay to offset non-medical expenses.",
        steps: ["Daily Payout", "Up to 30 Days / Year"]
      },
      {
        id: "hc-s4-2",
        title: "Safeguard Add-on",
        subtitle: "Non-medical consumables cover + NCB Protection",
        badge: "CONSUMABLES COVER",
        summary: "Covers 68+ non-medical consumables (gloves, masks, kits) and protects your cumulative bonus during smaller claims.",
        steps: null
      },
      {
        id: "hc-s4-3",
        title: "Critical Advantage Rider",
        subtitle: "Worldwide coverage for 9 major critical illnesses",
        badge: "CRITICAL COVER",
        summary: "Covers international treatment for 9 major critical illnesses including cancer, heart valve surgery, and organ transplants.",
        steps: null
      },
      {
        id: "hc-s4-4",
        title: "Personal Accident Cover",
        subtitle: "Financial protection against death & disability",
        badge: "ACCIDENT SHIELD",
        summary: "Lump sum financial compensation up to 5X Sum Insured in case of accidental death or permanent total disability.",
        steps: null
      }
    ]
  },

  "seniors-first": {
    mostImportant: [
      {
        id: "sf-s1-1",
        title: "Single Standard Room",
        subtitle: "Room Rent covered up to 1% of Sum Insured per day",
        badge: "ROOM RENT COVER",
        summary: "Standard single room accommodation covered up to 1% of Sum Insured per day for senior citizen policyholders.",
        steps: null
      },
      {
        id: "sf-s1-2",
        title: "ICU Charges Covered",
        subtitle: "ICU charges covered up to 2% of Sum Insured per day",
        badge: "ICU COVER",
        summary: "Intensive care unit (ICU) and ICCU expenses covered up to 2% of Sum Insured per day.",
        steps: null
      },
      {
        id: "sf-s1-3",
        title: "Pre & Post Hospitalisation",
        subtitle: "30 Days Pre & 60 Days Post Hospitalisation",
        badge: "PRE & POST COVER",
        summary: "Covers doctor consultations, prescription medicines, and diagnostic lab investigations 30 days before and 60 days after hospital discharge.",
        steps: ["30 Days Pre-Hosp", "Hospitalisation Stay", "60 Days Post-Hosp"]
      },
      {
        id: "sf-s1-4",
        title: "All Senior Day Care Surgeries",
        subtitle: "Cataract, Dialysis, Chemotherapy & Day Procedures",
        badge: "DAY CARE PROCEDURES",
        summary: "Full coverage for senior-specific daycare treatments including cataract surgery, dialysis, radiotherapy, and minor surgeries (<24 hrs).",
        steps: null
      },
      {
        id: "sf-s1-5",
        title: "Pre-Existing Disease Cover",
        subtitle: "Short 2-Year Waiting Period for Pre-Existing Conditions",
        badge: "SHORT WAITING",
        summary: "Pre-existing ailments like hypertension, diabetes, and joint conditions covered after just 24 months of continuous coverage.",
        steps: ["Day 1: Accidents", "Month 24: Pre-Existing Covered", "Full Comprehensive Care"]
      }
    ],
    valueAdded: [
      {
        id: "sf-s2-1",
        title: "ReAssure Senior Benefit",
        subtitle: "Unlimited Restoration of Sum Insured for Seniors",
        badge: "RESTORATION BENEFIT",
        summary: "Restores 100% Sum Insured unlimited times for subsequent hospital admissions within the same policy year.",
        steps: ["Base Sum Insured", "Claim Paid", "100% Restored", "∞ Unlimited"]
      },
      {
        id: "sf-s2-2",
        title: "No Pre-Policy Medical Test",
        subtitle: "Hassle-Free Enrollment up to 75 Years",
        badge: "EASY ENROLLMENT",
        summary: "No mandatory pre-policy medical tests required for enrollment based on good medical declaration up to 75 years.",
        steps: null
      },
      {
        id: "sf-s2-3",
        title: "Cumulative Bonus for Seniors",
        subtitle: "10% increase in Sum Insured per year (Max 50%)",
        badge: "BONUS GROWTH",
        summary: "10% bonus added to Sum Insured for each claim-free year, providing up to 50% extra financial protection.",
        steps: ["Base Sum Insured", "Yr 1: +10%", "Yr 2: +10%", "Max 50% Bonus"]
      },
      {
        id: "sf-s2-4",
        title: "Annual Geriatric Health Screening",
        subtitle: "Complimentary specialized health checks every year",
        badge: "ANNUAL CHECKUP",
        summary: "Comprehensive annual health check-up package specially curated for senior citizens from the very first policy year.",
        steps: null
      },
      {
        id: "sf-s2-5",
        title: "Co-Pay Waiver & Deductible Options",
        subtitle: "Flexible co-pay options to optimize renewal premium",
        badge: "CO-PAY WAIVER",
        summary: "Choose from customized deductible and co-payment options to make senior health coverage highly affordable.",
        steps: null
      }
    ],
    additional: [
      {
        id: "sf-s3-1",
        title: "Inpatient AYUSH Treatment",
        subtitle: "100% Ayurveda, Yoga, Unani & Homeopathy Covered",
        badge: "AYUSH COVER",
        summary: "Covers inpatient alternative healthcare treatments for senior citizens in recognized AYUSH hospitals.",
        steps: null
      },
      {
        id: "sf-s3-2",
        title: "Emergency Road Ambulance Support",
        subtitle: "Emergency Road Ambulance Reimbursed",
        badge: "AMBULANCE COVER",
        summary: "Emergency surface road ambulance charges to the nearest hospital reimbursed as per policy limits per admission.",
        steps: null
      },
      {
        id: "sf-s3-3",
        title: "Domiciliary Home Care Treatment",
        subtitle: "Doctor-prescribed home hospitalisation covered",
        badge: "HOME TREATMENT",
        summary: "Covers medical expenses for at-home medical care when the senior patient cannot be safely moved to a hospital.",
        steps: null
      },
      {
        id: "sf-s3-4",
        title: "Organ Donor Medical Cover",
        subtitle: "Inpatient donor expenses covered up to Sum Insured",
        badge: "ORGAN DONOR",
        summary: "Medical expenses for organ harvesting and donor hospitalisation covered up to the full Base Sum Insured.",
        steps: null
      }
    ],
    riders: [
      {
        id: "sf-s4-1",
        title: "Senior Daily Hospital Cash",
        subtitle: "Daily cash allowance per day of hospital stay",
        badge: "DAILY CASH",
        summary: "Fixed cash payout for each 24-hour day of hospitalisation to support incidental and attendee expenses.",
        steps: ["Daily Cash Payout", "Up to 30 Days / Year"]
      },
      {
        id: "sf-s4-2",
        title: "Safeguard Senior Rider",
        subtitle: "Non-medical consumables covered + CPI booster",
        badge: "CONSUMABLES COVER",
        summary: "Covers non-medical items (gloves, PPE kits, masks, syringes) and adds inflation-linked growth to your Sum Insured.",
        steps: null
      },
      {
        id: "sf-s4-3",
        title: "Senior Critical Illness Booster",
        subtitle: "Lump sum payout for age-related critical illnesses",
        badge: "CRITICAL ILLNESS",
        summary: "Additional financial cover offering lump sum payout on first diagnosis of major critical illnesses.",
        steps: null
      },
      {
        id: "sf-s4-4",
        title: "Senior Personal Accident Shield",
        subtitle: "Comprehensive protection against accidental injuries",
        badge: "ACCIDENT SHIELD",
        summary: "Lump sum benefit in case of accidental death or permanent total disablement.",
        steps: null
      }
    ]
  }
};

// Helper to format YouTube or Direct MP4 URLs
const getVideoEmbedUrl = (url) => {
  if (!url) return { type: 'none', url: '' };
  if (url.includes('youtube.com/embed/')) return { type: 'youtube', url };
  
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return { type: 'youtube', url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1` };
  }
  
  if (url.endsWith('.mp4') || url.includes('.mp4?')) {
    return { type: 'mp4', url };
  }

  return { type: 'iframe', url };
};

// Compact Feature-Wise Inline Video Button Component (Niva Bupa Theme)
const VideoButton = ({ featureTitle, onOpenVideo }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpenVideo(featureTitle, DEMO_VIDEO_URL);
      }}
      className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#F0F9FF] text-[#0284C7] border border-[#0EA5E9]/30 hover:bg-[#0EA5E9] hover:text-white transition-all cursor-pointer select-none shrink-0 shadow-2xs group align-middle ml-0.5 sm:ml-1"
      title={`Watch demo video for ${featureTitle}`}
    >
      <FiPlay className="text-[8px] sm:text-[10px] fill-current text-[#0284C7] group-hover:text-white transition-colors" />
      <span>Video</span>
    </button>
  );
};

// Premium In-Page Video Lightbox Modal (Niva Bupa Cyan Theme)
const FeatureVideoModal = ({ isOpen, onClose, videoTitle, videoUrl }) => {
  if (!isOpen || !videoUrl) return null;

  const embedData = getVideoEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
        style={{ width: 'calc(100vw - 32px)', maxWidth: '900px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-950 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
            <span className="truncate">{videoTitle} — Feature Demo</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0EA5E9] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <FiX />
          </button>
        </div>

        {/* Video Player Container (16:9) */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {embedData.type === 'mp4' ? (
            <video
              src={embedData.url}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={embedData.url}
              title={videoTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-component for Niva Bupa Features Accordion Items with Scroll Reveal & Stagger
function NivaBupaFeatureAccordionItem({
  id,
  title,
  subtitle,
  badge,
  summary,
  steps,
  isExpanded,
  onToggle,
  isRider = false,
  index = 0,
  onOpenVideo
}) {
  const itemRef = React.useRef(null);
  const IconComponent = FEATURE_ICONS[id] || FiShield;

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
          ? 'bg-[#F0F9FF]/90 border-[#0EA5E9]/60 shadow-md ring-1 ring-[#0EA5E9]/20'
          : 'bg-white border-slate-200/80 hover:border-[#0EA5E9]/50 shadow-2xs'
      }`}
    >
      {/* Header Row */}
      <div className="p-2.5 sm:p-4 flex items-start sm:items-center justify-between gap-1.5 sm:gap-3">
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isExpanded ? 'bg-[#0EA5E9] text-white shadow-xs' : 'bg-[#F0F9FF] text-[#0284C7]'
          }`}>
            <IconComponent className="text-xs sm:text-base" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
              <h3 className="text-xs sm:text-base font-extrabold font-display leading-tight sm:leading-snug text-[#0F172A]">
                {title}
              </h3>
              {onOpenVideo && (
                <VideoButton featureTitle={title} onOpenVideo={onOpenVideo} />
              )}
              {isRider && (
                <span className="text-[7px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-[#0EA5E9]/10 text-[#0284C7] tracking-wide shrink-0">
                  Rider
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-[9px] sm:text-xs font-semibold mt-0.5 leading-tight sm:leading-snug text-slate-500 line-clamp-2 sm:line-clamp-none">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Plus / Minus Button */}
        <div className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 mt-0.5 sm:mt-0 ${
          isExpanded ? 'bg-[#0EA5E9] text-white rotate-180' : 'bg-[#F0F9FF] text-[#0284C7]'
        }`}>
          {isExpanded ? (
            <FiMinus className="text-[10px] sm:text-sm stroke-[2.5]" />
          ) : (
            <FiPlus className="text-[10px] sm:text-sm stroke-[2.5]" />
          )}
        </div>
      </div>

      {/* Expanded Summary & Contextual Badges */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-2.5 pb-2.5 sm:px-4.5 sm:pb-4.5 border-t border-slate-100/80 text-slate-600 space-y-2 sm:space-y-2.5">
              {/* Contextual Badge & Subtitle Checkmark */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {badge && (
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-black uppercase px-1.5 sm:px-2.5 py-0.5 rounded-md bg-[#F0F9FF] text-[#0284C7] border border-[#0EA5E9]/20 tracking-wider">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0EA5E9]" />
                    {badge}
                  </span>
                )}
                {subtitle && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-slate-700">
                    <FiCheck className="text-[#0EA5E9] text-[10px] sm:text-xs shrink-0" /> {subtitle}
                  </span>
                )}
              </div>

              {/* Short explanation / Details */}
              <div className="text-[11px] sm:text-sm font-medium leading-relaxed text-slate-600">
                {summary}
              </div>

              {/* Visual Number Step Progression */}
              {steps && steps.length > 0 && (
                <div className="mt-2 sm:mt-2.5 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Coverage Progression Example
                  </div>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    {steps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white border border-slate-200 shadow-2xs text-[10px] sm:text-xs font-black text-[#0F172A] flex items-center gap-1">
                          {step}
                        </div>
                        {sIdx < steps.length - 1 && (
                          <span className="text-[10px] sm:text-xs font-extrabold text-[#0EA5E9] px-0.5">
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


export default function NivaBupaPlanDetailSection({ plan, company }) {
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

  const handleOpenVideo = (title, url) => {
    setVideoModalState({
      isOpen: true,
      title: title || 'Feature Video',
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

  const { logo, name } = company;

  // Key ratios for Niva Bupa
  const settlementRatio = getCompanyRatioValue('niva-bupa', 'settlement') || '98.1%';
  const incurredRatio = getCompanyRatioValue('niva-bupa', 'incurred') || '64%';
  const solvencyRatio = getCompanyRatioValue('niva-bupa', 'solvency') || '1.75';
  const complaintRatio = getCompanyRatioValue('niva-bupa', 'complaint') || '18.4 per 10k';

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

  // Resolve plan-specific features dataset
  const planFeatureData = NIVA_BUPA_FEATURES_BY_PLAN[plan.id] || NIVA_BUPA_FEATURES_BY_PLAN['reassure-2-0'];

  // =========================================================================
  // DEDICATED FEATURES PAGE (MATCHING NIVA BUPA THEME + DARK GREEN GRADIENT HEADINGS)
  // =========================================================================
  if (isFeaturesPage) {
    return (
      <div className="w-full pb-20 bg-[#F0F9FF] min-h-screen overflow-x-hidden relative">
        {/* Ambient Cyan Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none bg-[#0EA5E9]" />

        {/* Page Container — Niva Bupa Theme */}
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
                {plan.name} <span className="text-[#0EA5E9]">—</span> FEATURES
              </h1>
              <div className="w-8 sm:w-12 h-1 bg-[#0EA5E9] mx-auto mt-1.5 rounded-full" />
            </div>
          </motion.div>

          {/* SECTION 1: MOST IMPORTANT FEATURES (APPROVED DARK GREEN GRADIENT HEADING) */}
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {planFeatureData.mostImportant.map((feat, idx) => (
                <NivaBupaFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  badge={feat.badge}
                  summary={feat.summary}
                  steps={feat.steps}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 2: VALUE ADDED FEATURES (APPROVED DARK GREEN GRADIENT HEADING) */}
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
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {planFeatureData.valueAdded.map((feat, idx) => (
                <NivaBupaFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  badge={feat.badge}
                  summary={feat.summary}
                  steps={feat.steps}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 3: ADDITIONAL FEATURES (APPROVED DARK GREEN GRADIENT HEADING) */}
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
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {planFeatureData.additional.map((feat, idx) => (
                <NivaBupaFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  badge={feat.badge}
                  summary={feat.summary}
                  steps={feat.steps}
                  isExpanded={expandedFeatureId === feat.id}
                  onToggle={toggleAccordionItem}
                  onOpenVideo={handleOpenVideo}
                />
              ))}
            </div>
          </div>

          {/* SECTION 4: OPTIONAL RIDERS (ADD-ONS) (APPROVED DARK GREEN GRADIENT HEADING) */}
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {planFeatureData.riders.map((feat, idx) => (
                <NivaBupaFeatureAccordionItem
                  key={feat.id}
                  id={feat.id}
                  index={idx}
                  title={feat.title}
                  subtitle={feat.subtitle}
                  badge={feat.badge}
                  summary={feat.summary}
                  steps={feat.steps}
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
  // MAIN NIVA BUPA PLAN DETAIL PAGE (SINGLE VIEWPORT — MOBILE & DESKTOP PERFECT)
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
            <FiArrowLeft className="text-sm" /> <span className="hidden sm:inline">Back to Niva Bupa Plans</span><span className="sm:hidden">Back to Plans</span>
          </Link>
        </div>

        {/* 1. NIVA BUPA LOGO */}
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
          <div className="w-7 sm:w-10 h-0.5 sm:h-1 bg-[#0EA5E9] mx-auto mt-1 sm:mt-1.5 rounded-full" />
        </div>

        {/* 3. 2-COLUMN BUTTON GRID */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 w-full">
          {/* Card 1: Ratio (Marksheet) */}
          <button
            onClick={() => setActiveModal('ratio')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0EA5E9]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0284C7] transition-colors duration-200 font-display leading-tight pr-1">
              Ratio (Marksheet)
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0284C7] group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 2: Fundamental / Family Background */}
          <button
            onClick={() => setActiveModal('fundamental')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0EA5E9]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0284C7] transition-colors duration-200 font-display leading-tight pr-1">
              Fundamental / Family Background
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0284C7] group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Card 3: Features */}
          <Link
            to={`/insurance/niva-bupa/${plan.id}/features`}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0EA5E9]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0284C7] transition-colors duration-200 font-display leading-tight pr-1">
              Features
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0284C7] group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </Link>

          {/* Card 4: Condition */}
          <button
            onClick={() => setActiveModal('condition')}
            className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-2.5 sm:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:border-[#0EA5E9]/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9] transition-colors duration-200" />
            <h3 className="text-xs sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#0284C7] transition-colors duration-200 font-display leading-tight pr-1">
              Condition
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0284C7] group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9]/20 transition-all duration-200 shrink-0">
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

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-2xl w-[calc(100%-20px)] max-w-lg overflow-hidden z-10 p-4 sm:p-8 max-h-[88dvh] sm:max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[#0F172A] hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <FiX className="text-base sm:text-lg" />
              </button>

              {/* MODAL 1: RATIO (MARKSHEET) */}
              {activeModal === 'ratio' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7] block">
                      Niva Bupa Performance
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      RATIO (MARKSHEET)
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Official claim settlement and financial strength metrics.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-[#F0F9FF] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#0EA5E9]/20 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Claim Settlement Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Verified IRDAI Report</span>
                      </div>
                      <span className="text-base sm:text-lg font-black text-[#0284C7]">{settlementRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Incurred Claim Ratio (ICR)</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Claims Paid vs Premium</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{incurredRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Solvency Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">IRDAI Requirement: 1.50</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{solvencyRatio}</span>
                    </div>

                    <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Complaints Ratio</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Per 10,000 Claims</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">{complaintRatio}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 2: FUNDAMENTAL / FAMILY BACKGROUND */}
              {activeModal === 'fundamental' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7] block">
                      Core Policy Details
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      FUNDAMENTAL / FAMILY BACKGROUND
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Eligibility criteria and essential plan architecture.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Eligibility Criteria
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details?.eligibility || '18 to 65 Years'}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Cashless Network Size
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        10,000+ Cashless Hospitals across India
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Claim Support System
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        30-Minute Cashless Claim Processing Desk & 24/7 Support
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Ambulance Cover
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {getDerivedValue(plan, company, 'ambulance')} (Road & Air Ambulance Available)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* MODAL 3: CONDITION */}
              {activeModal === 'condition' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7] block">
                      Terms & Exclusions
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mt-0.5">
                      CONDITION
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Waiting periods, room rent restrictions, and exclusions.
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Initial Waiting Period
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        30 Days Initial Waiting Period (accidents covered from Day 1)
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Pre-Existing Diseases Waiting
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details?.waitingPeriod || '36 Months'}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Room Rent & ICU Capping
                      </span>
                      <p className="text-xs font-bold text-[#0F172A]">
                        {plan.details?.roomRent || 'No Capping - Private Room Covered'}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-[#F0F9FF]/80 rounded-xl sm:rounded-2xl border border-[#0EA5E9]/20 space-y-0.5 sm:space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0284C7]">
                        Important Policy Exclusions
                      </span>
                      <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                        {plan.details?.exclusions || 'Cosmetic treatments, experimental treatments, intentional self-harm.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
