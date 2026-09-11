import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiFileText, FiTag } from 'react-icons/fi';

export const DEDUCTION_FAQS = [
  {
    id: "consumables",
    category: "Non-Medical Items",
    question: "Why were consumables deducted?",
    answer: "Depending on the policy terms, standard health insurance covers medical treatment and procedures but excludes consumable items (such as surgical gloves, PPE kits, masks, syringes, and sanitizers) classified under Non-Medical List items. Some policies or optional riders (e.g. Consumables Cover / Shield riders) may cover these items—check your policy wording to see if this add-on is included in your plan."
  },
  {
    id: "room-rent",
    category: "Room Eligibility",
    question: "Why was a room-related amount deducted?",
    answer: "Some policies have a room-rent cap (e.g., 1% of Sum Insured or Single Private Room eligibility). If you opt for a higher room category than your entitled limit, insurers often apply a proportionate deduction across associated medical charges, including doctor consultation fees, nursing fees, and OT charges. Check your policy schedule for specific room eligibility clauses."
  },
  {
    id: "copay",
    category: "Cost Sharing",
    question: "Why was a co-payment applied?",
    answer: "A co-payment is a predefined percentage of the admissible claim amount that the policyholder agrees to pay out-of-pocket. Depending on the policy terms, co-payments may be mandatory (common in senior-citizen policies or zone-based pricing tiers) or voluntary (chosen to reduce policy premiums). Review your policy summary to see if a copay percentage applies."
  },
  {
    id: "deductible",
    category: "Threshold Limit",
    question: "Why was a deductible applied?",
    answer: "In Super Top-up or high-deductible health plans, the insurer only covers claim expenses that exceed the pre-agreed threshold (the deductible). If your total eligible hospital bill is below or up to the deductible amount, the top-up insurer will not pay. Check your policy wording to confirm your base deductible limit."
  },
  {
    id: "sub-limit",
    category: "Procedure Capping",
    question: "Why was a sub-limit applied?",
    answer: "Certain policies place a maximum financial ceiling on specific treatments such as cataract surgery, joint replacement, hernia, gall bladder removal, or modern robotic treatments. When expenses exceed this specific cap, the insurer reimburses only up to the sub-limit defined in your policy schedule."
  },
  {
    id: "non-payable",
    category: "Hospital Exclusions",
    question: "Why were some hospital expenses not payable?",
    answer: "Certain hospital charges—such as administrative admission fees, medical records charges, attendant diet charges, laundry, luxury amenities, and routine toiletries—are typically categorized as non-payable non-medical expenses unless specified otherwise. Check your policy terms for the exhaustive list of exclusions."
  },
  {
    id: "bill-difference",
    category: "Audit & Settlement",
    question: "Why was the approved amount different from the hospital bill?",
    answer: "The total hospital bill often includes unapproved advance deposits, non-medical items, or room charges higher than policy entitlement. The approved amount reflects the insurer's audit of admissible medical expenses after applying applicable exclusions, sub-limits, and deductibles as per your policy contract."
  }
];

export default function ClaimFAQ() {
  const [openFaqId, setOpenFaqId] = useState("consumables");

  const toggleFaq = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="claim-deductions" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Deductions Demystified
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Why did my claim amount get deducted?
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Understand the contractual and clinical reasons behind hospital bill deductions across health insurance policies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {DEDUCTION_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/90 border-slate-300 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1 pr-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-50 text-emerald-600 border-emerald-200' : ''}`}>
                    <FiChevronDown className="text-base" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Educational Note */}
        <div className="mt-8 bg-slate-50 rounded-2xl p-4 border border-slate-200/70 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
            <span className="font-bold text-slate-700">Educational Guidance: </span>
            Deduction terms vary by insurer and policy. Always verify your specific policy wording and the itemized Claim Settlement Summary issued by your insurer.
          </p>
        </div>

      </div>
    </section>
  );
}
