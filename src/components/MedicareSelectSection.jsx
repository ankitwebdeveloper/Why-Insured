import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiCheckCircle, 
  FiZap, 
  FiActivity, 
  FiHeart, 
  FiClock, 
  FiFileText, 
  FiAward, 
  FiPlusCircle,
  FiTrendingUp,
  FiCheckSquare,
  FiInfo,
  FiPercent
} from 'react-icons/fi';
import { FaHospital, FaUserMd, FaAmbulance, FaMedkit, FaStethoscope } from 'react-icons/fa';
import tataLogo from '../assets/tata-aig.png';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

export default function MedicareSelectSection({ plan, company }) {
  // Motion Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut', staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } }
  };

  // Shared Tata AIG Branded Section Header
  const SectionHeader = ({ title, subtitle, badgeText }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#E2E8F0] pb-2.5 mb-4 sm:mb-6">
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-5 rounded-full bg-[#0038A8] shrink-0" />
        <div>
          <h2 className="text-sm sm:text-xl font-black text-[#0F172A] tracking-tight font-display uppercase leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badgeText && (
        <span className="bg-[#F0F4FF] text-[#0038A8] border border-[#BFDBFE] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full self-start sm:self-center">
          {badgeText}
        </span>
      )}
    </div>
  );

  // Financial ratios from comparison helper
  const settlementRatio = getCompanyRatioValue('tata-aig', 'settlement') || '99.0%';
  const incurredRatio = getCompanyRatioValue('tata-aig', 'incurred') || '68%';
  const solvencyRatio = getCompanyRatioValue('tata-aig', 'solvency') || '1.85';
  const networkHospitals = getDerivedValue(plan, company, 'cashlessHospitals') || '10,000+ Hospitals';

  return (
    <div className="space-y-4 sm:space-y-7 font-sans w-full max-w-full overflow-x-hidden text-[#0F172A] bg-[#FFFFFF] p-2 sm:p-4 rounded-2xl sm:rounded-3xl">

      {/* ========================================================================= */}
      {/* 1. HEADER: TATA AIG MEDICARE SELECT PRODUCT BANNER                        */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E2E8F0] relative overflow-hidden"
      >
        {/* Top Accent Line (Tata AIG Deep Blue) */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0038A8]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* LEFT: Tata AIG Official Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-2 shrink-0 shadow-sm">
              <img
                src={tataLogo}
                alt="Tata AIG"
                className="w-24 sm:w-36 h-auto max-h-9 sm:max-h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#E2E8F0]" />
          </div>

          {/* CENTER / RIGHT: Title & Subtitle */}
          <div className="space-y-1 text-left sm:text-right">
            <div className="inline-flex items-center gap-1.5 bg-[#F0F4FF] border border-[#BFDBFE] text-[#0038A8] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0038A8] animate-pulse" />
              Tata Trust Guaranteed • Official Policy
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-[#0F172A] tracking-tight font-display">
              Tata AIG <span className="text-[#0038A8]">MediCare Select</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] font-semibold">
              Comprehensive Health Protection with 100% Restoration & AYUSH Cover
            </p>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 pt-4 border-t border-[#E2E8F0]">
          <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2">
            <FiCheckCircle className="text-[#0038A8] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#475569] font-bold uppercase">Restoration</div>
              <div className="text-xs font-black text-[#0F172A]">100% Base SI</div>
            </div>
          </div>
          <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2">
            <FiTrendingUp className="text-[#0038A8] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#475569] font-bold uppercase">No Claim Bonus</div>
              <div className="text-xs font-black text-[#0F172A]">10% / Year (Max 50%)</div>
            </div>
          </div>
          <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2">
            <FaHospital className="text-[#0038A8] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#475569] font-bold uppercase">Cashless Network</div>
              <div className="text-xs font-black text-[#0F172A]">{networkHospitals}</div>
            </div>
          </div>
          <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] flex items-center gap-2">
            <FiShield className="text-[#0038A8] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#475569] font-bold uppercase">Settlement Ratio</div>
              <div className="text-xs font-black text-[#0038A8]">{settlementRatio}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. KEY BENEFITS: ASYMMETRIC FEATURED + SUPPORTING CARDS                   */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Key Benefits"
          subtitle="Core highlights engineered into Tata AIG MediCare Select."
          badgeText="Featured Highlights"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* FEATURED CARD (Spans 1 col on mobile, 1 col on lg or full featured height) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="lg:col-span-1 bg-gradient-to-br from-[#0038A8] to-[#002575] text-[#FFFFFF] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFFFFF]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-[#FFFFFF]/15 border border-[#FFFFFF]/20 text-[#FFFFFF] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                <FiZap className="text-amber-300 text-xs" />
                Featured Feature
              </div>
              
              <h3 className="text-lg sm:text-2xl font-black font-display leading-tight text-[#FFFFFF]">
                100% Restoration Benefit
              </h3>

              <p className="text-xs sm:text-sm text-[#E2E8F0] font-medium leading-relaxed">
                Automatically refills 100% of your Base Sum Insured once per policy year upon partial or complete exhaustion, covering unrelated illnesses.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FFFFFF]/20 flex items-center justify-between relative z-10">
              <div>
                <span className="text-[10px] text-[#BFDBFE] uppercase font-bold block">Refill Rate</span>
                <span className="text-lg font-black text-[#FFFFFF]">100% Base SI</span>
              </div>
              <span className="px-3 py-1 bg-[#FFFFFF] text-[#0038A8] rounded-full text-xs font-black">
                Auto-Activated
              </span>
            </div>
          </motion.div>

          {/* SUPPORTING CARDS GRID (2 cols on lg) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Supporting Card 1: Cumulative Bonus */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#BFDBFE] transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-lg font-bold">
                  <FiTrendingUp />
                </div>
                <h4 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Cumulative Bonus Growth
                </h4>
                <p className="text-xs text-[#475569] font-medium leading-relaxed">
                  Earn a 10% increase in your Sum Insured for every claim-free year, up to a maximum cap of 50% of base SI.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#0038A8]">10% Per Year</span>
                <span className="text-[10px] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-md font-bold text-[#475569]">
                  Max 50% Cap
                </span>
              </div>
            </motion.div>

            {/* Supporting Card 2: AYUSH & Day Care */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#BFDBFE] transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-lg font-bold">
                  <FaStethoscope />
                </div>
                <h4 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  AYUSH & Day Care Cover
                </h4>
                <p className="text-xs text-[#475569] font-medium leading-relaxed">
                  Full inpatient coverage for AYUSH treatments (Ayurveda, Unani, Siddha, Homeopathy) and all 540+ day-care procedures.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#0038A8]">540+ Procedures</span>
                <span className="text-[10px] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded-md font-bold text-[#475569]">
                  100% Up to SI
                </span>
              </div>
            </motion.div>

            {/* Supporting Card 3: In-Patient & Consumables */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#BFDBFE] transition-all sm:col-span-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-sm font-bold">
                      <FaHospital />
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                      Comprehensive Hospitalisation Coverage
                    </h4>
                  </div>
                  <p className="text-xs text-[#475569] font-medium leading-relaxed">
                    Covers room rent, ICU charges, medical practitioner fees, anesthesia, blood, oxygen, operation theatre expenses, and surgical appliances.
                  </p>
                </div>
                <span className="bg-[#F0F4FF] text-[#0038A8] border border-[#BFDBFE] text-xs font-black px-3 py-1.5 rounded-xl shrink-0 text-center">
                  Zero Sub-Limits on Inpatient
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. CORE BENEFITS SECTION: 2-COLUMN PREMIUM GRID                           */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Core Benefits"
          subtitle="Hospitalisation and medical protection breakdown."
          badgeText="Verified Features"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Card 1: In-Patient Hospitalisation */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FaHospital className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  In-Patient Hospitalisation
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                100% Covered
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              Covers room rent, nursing expenses, ICU charges, surgeon fees, and medicines incurred during hospital admission exceeding 24 hours.
            </p>
          </motion.div>

          {/* Card 2: Pre & Post Hospitalisation */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FiClock className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Pre & Post Hospitalisation
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                30 & 60 Days
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              Medical consultations, diagnostic tests, and prescribed medicines covered for 30 days prior to admission and 60 days post-discharge.
            </p>
          </motion.div>

          {/* Card 3: Day Care Procedures */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FaMedkit className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Day Care Treatments
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                All Procedures
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              Covers medical procedures and surgeries requiring less than 24 hours of hospital stay due to advanced technological developments.
            </p>
          </motion.div>

          {/* Card 4: Emergency Ambulance Cover */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FaAmbulance className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Emergency Ambulance Cover
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                Up to ₹2,000
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              Road ambulance expenses reimbursed up to ₹2,000 per hospitalization event for transferring the insured patient to a network hospital.
            </p>
          </motion.div>

          {/* Card 5: Organ Donor Expenses */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FiHeart className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Organ Donor Expenses
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                Up to Sum Insured
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              In-patient medical expenses incurred for harvesting the organ from the donor during organ transplant surgery are fully covered.
            </p>
          </motion.div>

          {/* Card 6: Room Rent & Accommodation */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-2 hover:border-[#BFDBFE] transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#F0F4FF] text-[#0038A8] rounded-xl">
                  <FaUserMd className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#0F172A] font-display">
                  Room Category & ICU
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#0038A8] bg-[#F0F4FF] px-2.5 py-0.5 rounded-md">
                Single Private Room
              </span>
            </div>
            <p className="text-xs text-[#475569] font-semibold leading-relaxed">
              Provides coverage up to Single Private Room or Shared Room category without proportion deductions on medical procedures.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4. ADDITIONAL BENEFITS: CLEAN ROW LIST STRUCTURE                         */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Additional Benefits"
          subtitle="Value-added coverage features built into the MediCare Select plan."
          badgeText="Value Adds"
        />

        <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl sm:rounded-3xl p-3 sm:p-6 divide-y divide-[#E2E8F0] shadow-xs">
          
          {/* Row 1: Second Medical Opinion */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#F0F4FF] text-[#0038A8] rounded-lg mt-0.5 shrink-0">
                <FiFileText className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Second Medical Opinion
                </h4>
                <p className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5">
                  Avail expert second opinion consultations from empaneled specialists for major critical illness diagnoses.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#0038A8] bg-[#F0F4FF] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              1 Per Policy Year
            </span>
          </div>

          {/* Row 2: Free Health Check-up */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#F0F4FF] text-[#0038A8] rounded-lg mt-0.5 shrink-0">
                <FiActivity className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Annual Health Check-Up
                </h4>
                <p className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5">
                  Complimentary preventive health check-up vouchers provided for all insured members after continuous renewals.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#0038A8] bg-[#F0F4FF] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              Free at Renewal
            </span>
          </div>

          {/* Row 3: Tax Savings 80D */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#F0F4FF] text-[#0038A8] rounded-lg mt-0.5 shrink-0">
                <FiAward className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                  Tax Savings under Section 80D
                </h4>
                <p className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5">
                  Premiums paid qualify for income tax deductions up to ₹25,000 for self/family and up to ₹50,000 for senior citizen parents.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#0038A8] bg-[#F0F4FF] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              Sec 80D Exempt
            </span>
          </div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 5. OPTIONAL ADD-ONS / RIDERS: 3 CARDS DESKTOP / 1 CARD MOBILE             */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Optional Riders & Add-ons"
          subtitle="Tailor your coverage with optional policy add-ons."
          badgeText="Optional Protection"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Rider 1: Maternity Benefit Rider */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#BFDBFE] transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-base font-bold">
                <FiPlusCircle />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                Maternity & Newborn Cover
              </h4>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Optional rider covering normal and C-section delivery expenses, along with newborn vaccination coverage up to 90 days.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-extrabold text-[#0038A8]">
              <span>Optional Rider</span>
              <span className="bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded text-[10px] text-[#475569]">
                Add-on
              </span>
            </div>
          </motion.div>

          {/* Rider 2: Hospital Daily Cash */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#BFDBFE] transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-base font-bold">
                <FiClock />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                Hospital Daily Cash Allowance
              </h4>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Pays a fixed daily cash benefit for every 24 hours of continuous hospitalization to manage non-medical incidental expenses.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-extrabold text-[#0038A8]">
              <span>Optional Rider</span>
              <span className="bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded text-[10px] text-[#475569]">
                Add-on
              </span>
            </div>
          </motion.div>

          {/* Rider 3: Global Emergency Cover */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#BFDBFE] transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#F0F4FF] text-[#0038A8] flex items-center justify-center text-base font-bold">
                <FiShield />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                Global Emergency Cover
              </h4>
              <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-relaxed">
                Extends emergency inpatient hospitalization coverage outside India for sudden medical emergencies during travel.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-extrabold text-[#0038A8]">
              <span>Optional Rider</span>
              <span className="bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded text-[10px] text-[#475569]">
                Add-on
              </span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 6. FINANCIAL RATIOS & PLAN FUNDAMENTALS SNAPSHOT                         */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#F0F4FF]/60 border border-[#BFDBFE] rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-[#0038A8]" />
          <h3 className="text-sm sm:text-lg font-black text-[#0F172A] uppercase tracking-tight font-display">
            Tata AIG Performance Indicators
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E2E8F0]">
            <div className="text-[10px] font-bold text-[#475569] uppercase">Claim Settlement</div>
            <div className="text-base sm:text-xl font-black text-[#0038A8] mt-0.5">{settlementRatio}</div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">Top-tier track record</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E2E8F0]">
            <div className="text-[10px] font-bold text-[#475569] uppercase">Solvency Ratio</div>
            <div className="text-base sm:text-xl font-black text-[#0F172A] mt-0.5">{solvencyRatio}</div>
            <div className="text-[9px] text-[#0038A8] font-bold mt-0.5">Target &gt; 1.50</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E2E8F0]">
            <div className="text-[10px] font-bold text-[#475569] uppercase">Incurred Claim</div>
            <div className="text-base sm:text-xl font-black text-[#0F172A] mt-0.5">{incurredRatio}</div>
            <div className="text-[9px] text-slate-500 font-bold mt-0.5">Balanced payout</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E2E8F0]">
            <div className="text-[10px] font-bold text-[#475569] uppercase">Network Hospitals</div>
            <div className="text-base sm:text-xl font-black text-[#0038A8] mt-0.5">{networkHospitals}</div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">Pan-India Cashless</div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 7. IMPORTANT TERMS & EXCLUSIONS FOOTER NOTE                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 space-y-2 text-left">
        <div className="flex items-center gap-1.5 text-xs font-black text-[#0F172A] uppercase tracking-wider">
          <FiInfo className="text-[#0038A8]" />
          <span>Standard Policy Terms & Exclusions</span>
        </div>
        <p className="text-[11px] text-[#475569] font-medium leading-relaxed">
          Initial 30-day waiting period applies for all illnesses except accidental injuries. Specified procedures (such as joint replacements, cataract, hernia) carry a 24-month waiting period. Pre-existing diseases (PED) have a 36-month waiting period. Excludes cosmetic surgeries, self-inflicted injuries, and non-prescription treatments. *Terms & Conditions Apply as per official IRDAI filed policy wordings.
        </p>
      </div>

    </div>
  );
}
