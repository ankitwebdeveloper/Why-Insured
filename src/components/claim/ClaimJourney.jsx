import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiActivity, 
  FiBell, 
  FiFileText, 
  FiCpu, 
  FiCheckCircle, 
  FiDollarSign, 
  FiChevronRight, 
  FiChevronLeft,
  FiInfo,
  FiAlertCircle
} from 'react-icons/fi';

export const JOURNEY_STEPS = [
  {
    id: 1,
    number: "01",
    shortTitle: "Hospitalisation",
    title: "Hospitalisation & Admission",
    icon: FiActivity,
    summary: "Understand when and how you should inform the insurer or hospital insurance desk.",
    details: [
      {
        label: "Planned Hospitalisation",
        text: "For scheduled surgeries or treatments, visit the hospital's TPA / Insurance desk 48 to 72 hours in advance with your health card and doctor's prescription for pre-authorization."
      },
      {
        label: "Emergency Hospitalisation",
        text: "In sudden emergencies, prioritize medical care first. You or a family member can notify the hospital insurance desk and insurer within 24 hours of admission."
      },
      {
        label: "Key Tip",
        text: "Always check if the hospital is in your insurer's active network if you intend to use cashless facility."
      }
    ],
    alert: "Medical treatment should never be delayed for insurance paperwork. Get emergency care first."
  },
  {
    id: 2,
    number: "02",
    shortTitle: "Inform Insurer",
    title: "Inform the Insurer (Claim Intimation)",
    icon: FiBell,
    summary: "Explain the importance of claim intimation and why timing can matter.",
    details: [
      {
        label: "What is Intimation?",
        text: "Claim intimation is formally notifying your insurance company that a medical event or admission has occurred."
      },
      {
        label: "Why Timing Matters",
        text: "Most policies stipulate intimation windows (e.g., within 24–48 hours of emergency admission). Timely intimation generates a unique Claim Reference Number used to track all subsequent updates."
      },
      {
        label: "How to Intimate",
        text: "Can be initiated via insurer's mobile app, official website portal, 24x7 toll-free helpline, or through the hospital TPA desk."
      }
    ],
    alert: "Keep your policy number, patient name, hospital name, and tentative diagnosis ready when intimating."
  },
  {
    id: 3,
    number: "03",
    shortTitle: "Submit Documents",
    title: "Submit Required Documents",
    icon: FiFileText,
    summary: "Explain the common documents that may be required for claim evaluation.",
    details: [
      {
        label: "Core Paperwork",
        text: "Original discharge summary, detailed final hospital bill with itemized break-up, and numbered payment receipts with hospital stamps."
      },
      {
        label: "Medical Records",
        text: "Doctor prescription notes, diagnostic lab test reports, radiological scan reports (X-ray, MRI, CT), and pharmacy bills with doctor advice."
      },
      {
        label: "Reimbursement Submissions",
        text: "For reimbursement claims, submit all original physical bills and the duly completed claim form typically within 15 to 30 days of discharge."
      }
    ],
    alert: "Always retain high-resolution scanned copies and photocopies of every single document before submitting originals."
  },
  {
    id: 4,
    number: "04",
    shortTitle: "Claim Processing",
    title: "Claim Processing & Audit",
    icon: FiCpu,
    summary: "Explain that the insurer reviews documents, policy terms, and medical details.",
    details: [
      {
        label: "Medical Review",
        text: "In-house medical doctors and auditors review the diagnosis, line of treatment, active waiting periods, and room category eligibility."
      },
      {
        label: "Tariff & Non-Payables Audit",
        text: "Charges are assessed against standard reasonable and customary costs, policy sub-limits, and non-payable exclusions (like consumable items)."
      },
      {
        label: "Field / Hospital Verification",
        text: "In certain cases, the insurer may send a field investigator to verify hospital indoor case records."
      }
    ],
    alert: "Processing times vary between cashless desk approvals (few hours) and reimbursement reviews (typically 10-21 days)."
  },
  {
    id: 5,
    number: "05",
    shortTitle: "Approval / Query",
    title: "Approval or Query / Clarification",
    icon: FiCheckCircle,
    summary: "Explain the difference between approval and a request for additional information.",
    details: [
      {
        label: "Approval Decision",
        text: "If all documents meet policy guidelines, the insurer issues an approval letter (Cashless Pre-auth / Final authorization) specifying the approved sum."
      },
      {
        label: "Query / Deficiency Letter",
        text: "If information is missing (e.g., previous treatment history, detailed OT notes, or itemized pharmacy break-up), the insurer raises a query."
      },
      {
        label: "How to Handle a Query",
        text: "Do not panic. Coordinate with the treating doctor or hospital billing desk to obtain the specific clarifying document and submit it promptly within the deadline."
      }
    ],
    alert: "A query is NOT a rejection. It is simply a request for missing information to make an accurate claim assessment."
  },
  {
    id: 6,
    number: "06",
    shortTitle: "Settlement",
    title: "Settlement & Deductions",
    icon: FiDollarSign,
    summary: "Explain what happens after the claim is approved and how deductions may appear.",
    details: [
      {
        label: "Cashless Settlement",
        text: "The approved amount is paid directly by the insurer to the network hospital. The policyholder pays only non-payable items, co-pay, or room-rent difference."
      },
      {
        label: "Reimbursement Payout",
        text: "The approved settlement amount is transferred directly to the policyholder's bank account via NEFT."
      },
      {
        label: "Claim Settlement Summary",
        text: "The insurer provides an itemized Claim Settlement Voucher explaining approved heads and applicable deductions according to policy terms."
      }
    ],
    alert: "Carefully review the settlement summary voucher to verify that deductions align with your policy terms and conditions."
  }
];

export default function ClaimJourney() {
  const [activeStepId, setActiveStepId] = useState(1);
  const activeStep = JOURNEY_STEPS.find(s => s.id === activeStepId) || JOURNEY_STEPS[0];

  return (
    <section id="claim-journey" className="py-16 md:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-700 border border-slate-200/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Step-by-Step Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            The Health Insurance Claim Journey
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Click on any step below to explore what happens at each stage, what you need to do, and how to avoid delays.
          </p>
        </div>

        {/* Stepper Navigation Bar */}
        <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-xs mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex flex-col items-start text-left p-3 sm:p-3.5 rounded-2xl transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                      Step {step.number}
                    </span>
                    <Icon className={`text-base ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <span className={`text-xs font-bold font-display leading-tight truncate w-full ${isActive ? 'text-white' : 'text-slate-800'}`}>
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Expanded Step View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Top Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-display font-black text-xl shrink-0">
                  {activeStep.number}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 block">
                    Stage Details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  disabled={activeStepId === 1}
                  onClick={() => setActiveStepId(prev => Math.max(1, prev - 1))}
                  className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                >
                  <FiChevronLeft className="text-sm" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  type="button"
                  disabled={activeStepId === JOURNEY_STEPS.length}
                  onClick={() => setActiveStepId(prev => Math.min(JOURNEY_STEPS.length, prev + 1))}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-all"
                >
                  <span className="hidden sm:inline">Next</span>
                  <FiChevronRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Step Summary */}
            <p className="mt-6 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {activeStep.summary}
            </p>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {activeStep.details.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-display flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Step Alert / Note */}
            <div className="mt-6 bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4 flex items-start gap-3 text-amber-900">
              <FiAlertCircle className="text-amber-600 text-base shrink-0 mt-0.5" />
              <p className="text-xs font-semibold leading-relaxed">
                <span className="font-bold">Important Note: </span>
                {activeStep.alert}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
