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
  FiInfo,
  FiPercent,
  FiPhoneCall
} from 'react-icons/fi';
import { FaHospital, FaUserMd, FaAmbulance, FaMedkit, FaStethoscope } from 'react-icons/fa';
import iciciLogo from '../assets/icici-lombard.png';
import { getCompanyRatioValue, getDerivedValue } from '../utils/compareDataHelper';

export default function IciciCompleteHealthSection({ plan, company }) {
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

  // Shared ICICI Lombard Orange & White Section Header
  const SectionHeader = ({ title, subtitle, badgeText }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#E5E7EB] pb-2.5 mb-4 sm:mb-6">
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-5 rounded-full bg-[#F58220] shrink-0" />
        <div>
          <h2 className="text-sm sm:text-xl font-black text-[#1F2937] tracking-tight font-display uppercase leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badgeText && (
        <span className="bg-[#FFF4E8] text-[#F58220] border border-[#FDBA74] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full self-start sm:self-center">
          {badgeText}
        </span>
      )}
    </div>
  );

  // Financial ratios from comparison helper
  const settlementRatio = getCompanyRatioValue('icici-lombard', 'settlement') || '98.0%';
  const incurredRatio = getCompanyRatioValue('icici-lombard', 'incurred') || '71%';
  const solvencyRatio = getCompanyRatioValue('icici-lombard', 'solvency') || '1.88';
  const networkHospitals = getDerivedValue(plan, company, 'cashlessHospitals') || '11,000+ Hospitals';

  return (
    <div className="space-y-4 sm:space-y-7 font-sans w-full max-w-full overflow-x-hidden text-[#1F2937] bg-[#FFFFFF] p-2 sm:p-4 rounded-2xl sm:rounded-3xl">

      {/* ========================================================================= */}
      {/* 1. HEADER / HERO: ICICI LOMBARD ORANGE & WHITE PRODUCT BANNER             */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-[#E5E7EB] relative overflow-hidden"
      >
        {/* Top Accent Line (ICICI Lombard Signature Orange #F58220) */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#F58220]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* LEFT: ICICI Lombard Official Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-2 shrink-0 shadow-sm">
              <img
                src={iciciLogo}
                alt="ICICI Lombard"
                className="w-24 sm:w-36 h-auto max-h-9 sm:max-h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#E5E7EB]" />
          </div>

          {/* CENTER / RIGHT: Title & Subtitle */}
          <div className="space-y-1 text-left sm:text-right">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF4E8] border border-[#FDBA74] text-[#F58220] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] animate-pulse" />
              Official Health Policy
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-[#1F2937] tracking-tight font-display">
              ICICI Lombard <span className="text-[#F58220]">{plan?.name || "Complete Health Insurance"}</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] font-semibold">
              Comprehensive Health Security featuring 100% Reset Benefit & Wellness Rewards
            </p>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 pt-4 border-t border-[#E5E7EB]">
          <div className="bg-[#FFF4E8]/60 p-2.5 rounded-xl border border-[#FED7AA] flex items-center gap-2">
            <FiZap className="text-[#F58220] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Reset Benefit</div>
              <div className="text-xs font-black text-[#1F2937]">100% Instant Reset</div>
            </div>
          </div>
          <div className="bg-[#FFF4E8]/60 p-2.5 rounded-xl border border-[#FED7AA] flex items-center gap-2">
            <FiAward className="text-[#F58220] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Wellness Rewards</div>
              <div className="text-xs font-black text-[#1F2937]">Up to 20% Discount</div>
            </div>
          </div>
          <div className="bg-[#FFF4E8]/60 p-2.5 rounded-xl border border-[#FED7AA] flex items-center gap-2">
            <FaHospital className="text-[#F58220] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Cashless Network</div>
              <div className="text-xs font-black text-[#1F2937]">{networkHospitals}</div>
            </div>
          </div>
          <div className="bg-[#FFF4E8]/60 p-2.5 rounded-xl border border-[#FED7AA] flex items-center gap-2">
            <FiShield className="text-[#F58220] text-base shrink-0" />
            <div>
              <div className="text-[10px] text-[#64748B] font-bold uppercase">Settlement Ratio</div>
              <div className="text-xs font-black text-[#F58220]">{settlementRatio}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. KEY FEATURES: ASYMMETRIC FEATURED + SUPPORTING CARDS                   */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Key Features"
          subtitle="Core highlights engineered into ICICI Lombard Complete Health Insurance."
          badgeText="Featured Highlights"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* FEATURED CARD (Soft Orange Tinted Background) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -2 }}
            className="lg:col-span-1 bg-gradient-to-br from-[#FFF4E8] via-[#FFEDD5] to-[#FFE4C4] border border-[#FDBA74] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xs relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#FDBA74] text-[#F58220] text-[9px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs">
                <FiZap className="text-[#F58220] text-xs" />
                Featured Advantage
              </div>
              
              <h3 className="text-lg sm:text-2xl font-black font-display leading-tight text-[#1F2937]">
                Reset Benefit (Auto-Restore)
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5563] font-semibold leading-relaxed">
                Instantly resets 100% of your Base Sum Insured upon partial or complete exhaustion, ensuring continuous hospitalisation protection for your family.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FDBA74]/50 flex items-center justify-between relative z-10">
              <div>
                <span className="text-[10px] text-[#64748B] uppercase font-bold block">Reset Frequency</span>
                <span className="text-lg font-black text-[#F58220]">100% Instant</span>
              </div>
              <span className="px-3 py-1 bg-[#F58220] text-[#FFFFFF] rounded-full text-xs font-black shadow-xs">
                Instant Auto-Reset
              </span>
            </div>
          </motion.div>

          {/* SUPPORTING CARDS GRID (White Cards with Orange Accents) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Supporting Card 1: Wellness Rewards */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-lg font-bold">
                  <FiAward />
                </div>
                <h4 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  Wellness Rewards Program
                </h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                  Earn wellness points by staying active, tracking health metrics, and completing health check-ups, redeemable for up to 20% premium discount.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#F58220]">Up to 20% Savings</span>
                <span className="text-[10px] bg-[#FFF4E8] border border-[#FED7AA] px-2 py-0.5 rounded-md font-bold text-[#D94A0B]">
                  Health Points
                </span>
              </div>
            </motion.div>

            {/* Supporting Card 2: No Room Rent Capping */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-lg font-bold">
                  <FaHospital />
                </div>
                <h4 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  No Capping on Room Rent
                </h4>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                  Freedom to select any Private A/C Room category without facing proportionate deductions on surgery, nursing, or doctor consultation fees.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#F58220]">Zero Sub-Limits</span>
                <span className="text-[10px] bg-[#FFF4E8] border border-[#FED7AA] px-2 py-0.5 rounded-md font-bold text-[#D94A0B]">
                  Private A/C Room
                </span>
              </div>
            </motion.div>

            {/* Supporting Card 3: Organ Donor Protection */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all sm:col-span-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-sm font-bold">
                      <FiHeart />
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                      Organ Donor Expenses Fully Covered
                    </h4>
                  </div>
                  <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                    Full coverage for in-patient hospitalisation expenses incurred during organ harvesting surgery for the donor.
                  </p>
                </div>
                <span className="bg-[#FFF4E8] text-[#F58220] border border-[#FDBA74] text-xs font-black px-3 py-1.5 rounded-xl shrink-0 text-center">
                  100% Up to Sum Insured
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
          subtitle="Hospitalisation and clinical coverage breakdown."
          badgeText="Verified Protection"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Card 1: In-Patient Hospitalisation */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FaHospital className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  In-Patient Hospitalisation
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                100% Covered
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Covers room rent, ICU expenses, surgeon fees, operating theatre charges, and medicines during hospital admission exceeding 24 hours.
            </p>
          </motion.div>

          {/* Card 2: Pre & Post Hospitalisation */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FiClock className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  Pre & Post Hospitalisation
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                60 & 90 Days
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Comprehensive diagnostic tests, doctor consultations, and prescribed medications covered for 60 days prior to admission and 90 days post-discharge.
            </p>
          </motion.div>

          {/* Card 3: Day Care Treatments */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FaMedkit className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  Day Care Procedures
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                All Procedures
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Full coverage for medical surgeries and diagnostic procedures that require less than 24 hours of hospital stay due to technological advances.
            </p>
          </motion.div>

          {/* Card 4: Organ Donor Expenses */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FiHeart className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  Organ Donor Protection
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                Full Coverage
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              In-patient medical and surgical expenses incurred during organ harvesting from the donor for transplant operations are covered up to Sum Insured.
            </p>
          </motion.div>

          {/* Card 5: AYUSH Inpatient Treatment */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FaStethoscope className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  AYUSH Hospitalisation
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                100% Up to SI
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Inpatient treatment expenses for Ayurveda, Unani, Siddha, and Homeopathy in government-recognized healthcare facilities covered fully.
            </p>
          </motion.div>

          {/* Card 6: Emergency Ambulance */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-2 hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-[#FFF4E8] text-[#F58220] rounded-xl">
                  <FaAmbulance className="text-base" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#1F2937] font-display">
                  Emergency Ambulance Cover
                </h3>
              </div>
              <span className="text-[11px] font-black text-[#F58220] bg-[#FFF4E8] px-2.5 py-0.5 rounded-md border border-[#FED7AA]">
                Up to ₹5,000
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-semibold leading-relaxed">
              Road ambulance expenses reimbursed up to ₹5,000 per hospitalisation event for emergency transport to the nearest network hospital.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 4. ADDITIONAL FEATURES: CLEAN HORIZONTAL LIST / CARD HYBRID              */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader
          title="Additional Benefits"
          subtitle="Value-added services and benefits built into the policy."
          badgeText="Value Adds"
        />

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-3 sm:p-6 divide-y divide-[#E5E7EB] shadow-xs">
          
          {/* Row 1: No Claim Bonus */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFF4E8]/20 transition-colors px-2 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FFF4E8] text-[#F58220] rounded-lg mt-0.5 shrink-0">
                <FiTrendingUp className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                  No Claim Bonus (NCB)
                </h4>
                <p className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-0.5">
                  10% increase in base Sum Insured for every claim-free policy year, up to a maximum cap of 50%.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#F58220] bg-[#FFF4E8] border border-[#FED7AA] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              10% Yearly (Max 50%)
            </span>
          </div>

          {/* Row 2: Free Online Tele-Consultations */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFF4E8]/20 transition-colors px-2 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FFF4E8] text-[#F58220] rounded-lg mt-0.5 shrink-0">
                <FiPhoneCall className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                  Free Online Medical E-Consultations
                </h4>
                <p className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-0.5">
                  Unlimited 24/7 digital tele-consultations with qualified general physicians through ICICI Lombard's IL TakeCare app.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#F58220] bg-[#FFF4E8] border border-[#FED7AA] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              Unlimited 24/7 Access
            </span>
          </div>

          {/* Row 3: Tax Savings Section 80D */}
          <div className="py-3 sm:py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFF4E8]/20 transition-colors px-2 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#FFF4E8] text-[#F58220] rounded-lg mt-0.5 shrink-0">
                <FiAward className="text-sm" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                  Tax Savings under Section 80D
                </h4>
                <p className="text-[11px] sm:text-xs text-[#64748B] font-medium mt-0.5">
                  Income tax deductions up to ₹25,000 for self/family and up to ₹50,000 for senior citizen parents under Section 80D.
                </p>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#F58220] bg-[#FFF4E8] border border-[#FED7AA] px-2.5 py-1 rounded-full self-start sm:self-center shrink-0">
              Sec 80D Tax Exempt
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
          subtitle="Customize your policy with optional coverage riders."
          badgeText="Optional Protection"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Rider 1: OPD Consultation Rider */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-base font-bold">
                <FaStethoscope />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                OPD & Outpatient Consultation Rider
              </h4>
              <p className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-relaxed">
                Reimbursement for outpatient doctor consultations, prescribed diagnostic tests, and pharmacy bills.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-extrabold text-[#F58220]">
              <span>Optional Add-on</span>
              <span className="bg-[#FFF4E8] border border-[#FED7AA] px-2 py-0.5 rounded text-[10px] text-[#D94A0B]">
                Rider
              </span>
            </div>
          </motion.div>

          {/* Rider 2: Hospital Daily Cash */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-base font-bold">
                <FiClock />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                Hospital Daily Cash Benefit
              </h4>
              <p className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-relaxed">
                Fixed daily cash payout for every 24 hours of continuous hospital stay to cover non-medical incidental expenses.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-extrabold text-[#F58220]">
              <span>Optional Add-on</span>
              <span className="bg-[#FFF4E8] border border-[#FED7AA] px-2 py-0.5 rounded text-[10px] text-[#D94A0B]">
                Rider
              </span>
            </div>
          </motion.div>

          {/* Rider 3: Compassionate Visit Cover */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3 flex flex-col justify-between hover:border-[#FDBA74] hover:bg-[#FFF4E8]/30 transition-all"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#FFF4E8] text-[#F58220] flex items-center justify-center text-base font-bold">
                <FiShield />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#1F2937] font-display">
                Compassionate Visit Benefit
              </h4>
              <p className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-relaxed">
                Covers economy airfare or travel expenses for an immediate family member to visit during prolonged hospitalisation.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-extrabold text-[#F58220]">
              <span>Optional Add-on</span>
              <span className="bg-[#FFF4E8] border border-[#FED7AA] px-2 py-0.5 rounded text-[10px] text-[#D94A0B]">
                Rider
              </span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 6. FINANCIAL RATIOS & PERFORMANCE SNAPSHOT                                */}
      {/* ========================================================================= */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-[#FFF4E8]/50 border border-[#FED7AA] rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-[#F58220]" />
          <h3 className="text-sm sm:text-lg font-black text-[#1F2937] uppercase tracking-tight font-display">
            ICICI Lombard Performance Indicators
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Claim Settlement</div>
            <div className="text-base sm:text-xl font-black text-[#F58220] mt-0.5">{settlementRatio}</div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">High settlement speed</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Solvency Ratio</div>
            <div className="text-base sm:text-xl font-black text-[#1F2937] mt-0.5">{solvencyRatio}</div>
            <div className="text-[9px] text-[#F58220] font-bold mt-0.5">Target &gt; 1.50</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Incurred Claim</div>
            <div className="text-base sm:text-xl font-black text-[#1F2937] mt-0.5">{incurredRatio}</div>
            <div className="text-[9px] text-slate-500 font-bold mt-0.5">Healthy ratio</div>
          </div>
          <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB]">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Cashless Network</div>
            <div className="text-base sm:text-xl font-black text-[#F58220] mt-0.5">{networkHospitals}</div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">Pan-India Network</div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 7. IMPORTANT TERMS & EXCLUSIONS FOOTER NOTE                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 space-y-2 text-left">
        <div className="flex items-center gap-1.5 text-xs font-black text-[#1F2937] uppercase tracking-wider">
          <FiInfo className="text-[#F58220]" />
          <span>Standard Policy Terms & Exclusions</span>
        </div>
        <p className="text-[11px] text-[#64748B] font-medium leading-relaxed">
          Initial 30-day waiting period applies for all illnesses except accidental injuries. Specified medical procedures carry a 24-month waiting period. Pre-existing diseases (PED) carry a 36-month waiting period. Excludes cosmetic or plastic surgeries, voluntary fertility procedures, and self-inflicted injuries. *Terms & Conditions Apply as per official IRDAI filed policy wordings.
        </p>
      </div>

    </div>
  );
}
