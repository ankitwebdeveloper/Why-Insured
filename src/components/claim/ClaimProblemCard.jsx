import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiClock, 
  FiHelpCircle, 
  FiPercent, 
  FiXCircle, 
  FiArrowRight, 
  FiX, 
  FiCheckCircle, 
  FiAlertCircle,
  FiFilePlus
} from 'react-icons/fi';
import ClaimSolverModal from './ClaimSolverModal';

export const CLAIM_HELP_PROBLEMS = [
  {
    id: "delay",
    title: "Claim Delayed",
    badge: "Processing & Status",
    icon: FiClock,
    color: "amber",
    shortDesc: "It has been several days since claim submission, but the decision or settlement remains pending.",
    reasons: [
      "The hospital insurance desk has not responded to the insurer's clarification queries.",
      "Indoor Case Papers (ICP) or specific diagnostic test reports are missing from the submission.",
      "The insurer's medical audit team is conducting routine verification or field investigation.",
      "High claim volume or public holidays have caused a temporary processing queue."
    ],
    basicSteps: [
      {
        title: "1. Check exact status on the insurer's portal/app",
        desc: "Log in using your Claim Number and Policy Number to see if any specific document requirement is marked pending."
      },
      {
        title: "2. Coordinate with the hospital insurance desk",
        desc: "Confirm with the hospital TPA desk whether the insurer requested clinical clarification from the treating doctor."
      },
      {
        title: "3. Review standard turnaround times (TAT)",
        desc: "Standard claim processing timelines typically range between 15 to 21 days after full document submission."
      }
    ],
    unresolvedTip: "If the turnaround time has passed without a clear reason, you can raise a formal grievance ticket with your insurer."
  },
  {
    id: "amount-kam",
    title: "Claim Amount Reduced",
    badge: "Settlement Issue",
    icon: FiPercent,
    color: "indigo",
    shortDesc: "The hospital bill was higher, but the insurer approved or settled a lower amount.",
    reasons: [
      "Room rent limit or proportionate deduction was applied under your policy terms.",
      "A voluntary or mandatory co-payment percentage was deducted from the bill.",
      "A policy deductible threshold was applied on the hospital claim.",
      "A procedure-specific sub-limit (e.g., cataract, hernia, joint replacement) was reached."
    ],
    basicSteps: [
      {
        title: "1. Download the Claim Settlement Voucher (CSV)",
        desc: "The settlement summary provides an itemized breakdown of approved heads and deducted amounts with reason codes."
      },
      {
        title: "2. Match deductions against your policy terms",
        desc: "Check your policy schedule and clauses to verify if deductions align with room caps, copay, or sub-limits."
      },
      {
        title: "3. Request written clarification for unexplained deductions",
        desc: "If a deduction does not match policy clauses, you can request an itemized clarification from the insurer."
      }
    ],
    unresolvedTip: "If you notice a calculation error, you can submit a formal review request along with the final hospital bill and settlement summary."
  },
  {
    id: "query",
    title: "Claim Query Received",
    badge: "Clarification Letter",
    icon: FiHelpCircle,
    color: "sky",
    shortDesc: "The insurer has requested additional documents or a doctor clarification letter.",
    reasons: [
      "Initial doctor consultation note or past medical history records were missing.",
      "Detailed diagnostic lab test reports or scan films were not attached with the bill.",
      "Doctor prescription advice for specific pharmacy purchases was missing.",
      "A medical necessity justification letter is required from the treating doctor."
    ],
    basicSteps: [
      {
        title: "1. Carefully read the deficiency letter",
        desc: "Identify the exact document name or certificate requested by the claims assessor."
      },
      {
        title: "2. Obtain certified copies from your doctor or hospital",
        desc: "Visit the hospital Medical Records Department (MRD) or doctor to obtain the certified summary or certificate."
      },
      {
        title: "3. Submit within the specified timeline",
        desc: "Most insurers provide 15 to 30 days to answer queries. Upload via the portal and retain acknowledgment receipts."
      }
    ],
    unresolvedTip: "A query is not a rejection; submitting complete and accurate documents on time helps processing move forward."
  },
  {
    id: "rejected",
    title: "Claim Rejected",
    badge: "Repudiation Notice",
    icon: FiXCircle,
    color: "rose",
    shortDesc: "The insurer has repudiated or rejected the claim under specific policy clauses.",
    reasons: [
      "Treatment falls under standard policy exclusions or an active waiting period (e.g., 2-year specific disease waiting).",
      "Non-disclosure of pre-existing medical conditions was cited on the proposal form.",
      "Hospitalisation was deemed not medically necessary under standard clinical guidelines.",
      "The policy was not active on the date of admission."
    ],
    basicSteps: [
      {
        title: "1. Review the formal repudiation letter",
        desc: "Note the exact policy clause number and contractual reason cited in the rejection letter."
      },
      {
        title: "2. Obtain a clinical justification from your doctor",
        desc: "If the rejection is based on a medical misunderstanding, request a detailed justification certificate from your specialist."
      },
      {
        title: "3. Submit a formal representation to the Grievance Cell",
        desc: "Submit an appeal to the Insurer's Grievance Redressal Officer (GRO) with supporting medical facts and policy references."
      }
    ],
    unresolvedTip: "If the issue remains unresolved after 30 days at the GRO level, policyholders can approach the Insurance Ombudsman for an impartial review."
  },
  {
    id: "deduction",
    title: "Deductions on Hospital Bill",
    badge: "Bill vs Approval",
    icon: FiPercent,
    color: "emerald",
    shortDesc: "Consumables, administrative charges, or procedure fees were deducted from the hospital bill.",
    reasons: [
      "Non-medical items (gloves, PPE kits, syringes, registration fees, sanitizers) are non-payable under standard guidelines.",
      "Attendant charges, special diet, or luxury amenities are not covered under health insurance.",
      "Hospital charges exceeded pre-agreed network package tariffs."
    ],
    basicSteps: [
      {
        title: "1. Verify non-payable items list",
        desc: "Check whether deducted items fall under standard non-medical exclusion lists."
      },
      {
        title: "2. Check your Consumables Rider status",
        desc: "If your policy has a Consumables add-on rider, request recalculation under that specific benefit."
      },
      {
        title: "3. Review itemized bill with hospital billing",
        desc: "Check with hospital billing to verify that no duplicate charges were entered on the final invoice."
      }
    ],
    unresolvedTip: "In most standard health plans, consumable items are paid out-of-pocket unless you hold a dedicated consumables rider."
  },
  {
    id: "submission-confusion",
    title: "Confusion in Claim Submission",
    badge: "Submission Prep",
    icon: FiFilePlus,
    color: "teal",
    shortDesc: "Unsure about required documents, submission methods, or how to complete the claim form correctly.",
    reasons: [
      "Ambiguity in completing Part A (Policyholder) and Part B (Hospital) sections.",
      "Confusion between online portal upload vs submitting physical original documents.",
      "Incomplete discharge summary, bill breakup, or stamped receipts."
    ],
    basicSteps: [
      {
        title: "1. Review the required document checklist",
        desc: "Assemble your discharge summary, itemized final bill, stamped payment receipts, and doctor prescriptions."
      },
      {
        title: "2. Complete Part A & Part B of the Claim Form",
        desc: "Part A is signed by the policyholder and Part B is stamped by the hospital billing desk or treating doctor."
      },
      {
        title: "3. Retain digital backups before submitting",
        desc: "Keep clear digital scans of all pages before courier dispatch or portal upload."
      }
    ],
    unresolvedTip: "Complete your checklist and submit documents within the standard post-discharge window (usually 15–30 days)."
  }
];

export default function ClaimProblemCard() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const getBorderColor = (color) => {
    switch (color) {
      case 'amber': return 'hover:border-amber-300';
      case 'sky': return 'hover:border-sky-300';
      case 'indigo': return 'hover:border-indigo-300';
      case 'rose': return 'hover:border-rose-300';
      case 'emerald': return 'hover:border-emerald-300';
      case 'teal': return 'hover:border-teal-300';
      default: return 'hover:border-slate-300';
    }
  };

  const getIconBg = (color) => {
    switch (color) {
      case 'amber': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'sky': return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'indigo': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'rose': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'teal': return 'bg-teal-50 text-teal-600 border-teal-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <section id="claim-help-center" className="py-16 md:py-24 bg-[#F8FAFC] relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Claim Help Center Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Interactive Help Center
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Claim Help Center
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            What issue are you facing with your claim? Select your situation below to understand the solution.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLAIM_HELP_PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.id}
                className={`bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 ${getBorderColor(problem.color)} group`}
              >
                <div className="space-y-4">
                  
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center text-lg shrink-0 ${getIconBg(problem.color)}`}>
                      <Icon />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                      {problem.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-display group-hover:text-slate-900">
                      {problem.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {problem.shortDesc}
                    </p>
                  </div>

                </div>

                {/* Interactive Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProblem(problem)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/80 text-xs font-bold transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span>Understand Solution</span>
                    <FiArrowRight className="text-slate-400 group-hover/btn:text-slate-700 group-hover/btn:translate-x-1 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowContactModal(true);
                    }}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <FiCheckCircle className="text-xs text-emerald-400" />
                    <span>Hire Your Personal Claim Solver</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Basic Solution Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProblem(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-left z-10"
              style={{ scrollbarWidth: 'thin' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0 ${getIconBg(selectedProblem.color)}`}>
                    <selectedProblem.icon />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                      Problem Breakdown
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                      {selectedProblem.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProblem(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm transition-colors shrink-0 cursor-pointer"
                >
                  <FiX />
                </button>
              </div>

              {/* FLOW STEP 1: Problem Overview */}
              <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Problem Situation
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5">
                  {selectedProblem.shortDesc}
                </p>
              </div>

              {/* FLOW STEP 2: Why this can happen */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-display flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Why this can happen (Common causes)</span>
                </h4>
                <div className="space-y-2">
                  {selectedProblem.reasons.map((reason, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-3 border border-slate-100/90 flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOW STEP 3: Try these basic steps */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-display flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Try these basic steps first</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedProblem.basicSteps.map((step, idx) => (
                    <div key={idx} className="bg-emerald-50/30 rounded-2xl p-3.5 border border-emerald-100/80 space-y-1">
                      <div className="text-xs font-bold text-slate-900 font-display flex items-center gap-2">
                        <FiCheckCircle className="text-emerald-600 text-xs shrink-0" />
                        <span>{step.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed pl-5">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOW STEP 4: Unresolved advice */}
              <div className="mt-6 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <FiAlertCircle className="text-sm shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-wider font-display">
                    Still Unresolved?
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {selectedProblem.unresolvedTip}
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(true)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <FiCheckCircle className="text-xs text-slate-950" />
                    <span>Hire Your Personal Claim Solver</span>
                  </button>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactModal(true)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FiCheckCircle className="text-xs text-emerald-400" />
                  <span>Hire Your Personal Claim Solver</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProblem(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reusable Claim Solver Modal */}
      <ClaimSolverModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

    </section>
  );
}
