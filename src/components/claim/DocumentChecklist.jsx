import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiRotateCcw, 
  FiCheckCircle, 
  FiChevronRight, 
  FiChevronLeft,
  FiList, 
  FiArrowRight, 
  FiX,
  FiAlertCircle
} from 'react-icons/fi';
import ClaimSolverModal from './ClaimSolverModal';

const STORAGE_KEY = "whyinsured_claim_preparation";

export const PREP_STEPS = [
  {
    id: 1,
    key: "claim-form",
    title: "Is your claim form ready?",
    shortNote: "Make sure the required sections are completed and the form is signed where applicable.",
    guidance: "Complete the required sections, add the necessary signatures, and keep your bank details ready if required."
  },
  {
    id: 2,
    key: "hospital-bills",
    title: "Do you have your hospital bills?",
    shortNote: "Ensure you have the consolidated final bill with itemized service charges.",
    guidance: "Keep the final hospital bill and detailed/itemized bill breakup. If any bill is missing, contact the hospital billing department and request a copy."
  },
  {
    id: 3,
    key: "discharge-summary",
    title: "Do you have your discharge summary?",
    shortNote: "Check that the admission and discharge dates and doctor advice are clearly noted.",
    guidance: "Ask the hospital for the discharge summary or discharge card. Check that the admission and discharge details are clearly mentioned."
  },
  {
    id: 4,
    key: "prescriptions",
    title: "Do you have the required prescriptions?",
    shortNote: "Keep all doctor consultation sheets, treatment notes, and pharmacy prescriptions.",
    guidance: "Collect prescriptions related to consultations, admission, medicines, or treatment. If a prescription is missing, contact the treating hospital or doctor."
  },
  {
    id: 5,
    key: "diagnostic-reports",
    title: "Do you have your diagnostic reports?",
    shortNote: "Assemble lab test results and radiology scans supporting the hospitalisation.",
    guidance: "Keep relevant reports such as blood tests, X-rays, ECG, MRI, CT scans, or other investigation reports related to the claim."
  },
  {
    id: 6,
    key: "payment-receipts",
    title: "Do you have your payment receipts?",
    shortNote: "Ensure payment proofs and deposit slips match the billed amounts.",
    guidance: "Keep receipts showing the payment details, date, and amount. If a receipt is missing, ask the hospital or diagnostic centre for a duplicate copy."
  },
  {
    id: 7,
    key: "policy-details",
    title: "Do you have your policy details ready?",
    shortNote: "Have your policy schedule, health e-card, and patient photo ID accessible.",
    guidance: "Keep your policy number, health card, and required identification details easily accessible."
  },
  {
    id: 8,
    key: "additional-docs",
    title: "Have you checked for any additional documents?",
    shortNote: "Review if your insurer or procedure requires specific supporting paperwork.",
    guidance: "Depending on the treatment and claim type, you may need documents such as a cancelled cheque, implant invoice/sticker, indoor case papers, or other supporting documents."
  }
];

export default function DocumentChecklist() {
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGuidance, setShowGuidance] = useState(false);
  const [showAllItemsModal, setShowAllItemsModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showContactSoonModal, setShowContactSoonModal] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
    } catch (e) {}
  }, [checkedItems]);

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = PREP_STEPS.length;
  const isAllCompleted = completedCount === totalCount;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const currentStep = PREP_STEPS[currentIndex] || PREP_STEPS[0];
  const isCurrentChecked = !!checkedItems[currentStep.key];

  const handleYesReady = () => {
    setCheckedItems(prev => ({
      ...prev,
      [currentStep.key]: true
    }));
    setShowGuidance(false);

    // Automatically advance to the next step
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleNotYet = () => {
    setShowGuidance(true);
  };

  const handleGotItNext = () => {
    setShowGuidance(false);
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleClaimSolverClick = (e) => {
    if (e) e.stopPropagation();
    setShowContactSoonModal(true);
  };

  const handleSelectStep = (idx) => {
    setCurrentIndex(idx);
    setShowGuidance(false);
    setShowAllItemsModal(false);
  };

  const handleConfirmReset = () => {
    setCheckedItems({});
    setCurrentIndex(0);
    setShowGuidance(false);
    setShowResetConfirm(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const remainingItems = PREP_STEPS.filter(step => !checkedItems[step.key]);

  return (
    <section id="claim-prep-guide" className="py-16 md:py-20 bg-white relative font-sans">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-3.5 py-1 rounded-full inline-block">
            Step-by-Step Assistant
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            Claim Preparation
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 max-w-lg mx-auto leading-relaxed">
            Let’s quickly check your claim preparation, one step at a time.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium max-w-md mx-auto">
            You don’t need to remember everything at once. We’ll guide you through it.
          </p>
        </div>

        {/* Assistant Main Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden relative">
          
          {/* Top Progress Indicator */}
          <div className="bg-white p-5 sm:p-6 border-b border-slate-200/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-900 font-display">
                {completedCount} of {totalCount} checked
              </span>
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FiRotateCcw className="text-[10px]" />
                <span>Reset Checklist</span>
              </button>
            </div>

            {/* Clean Progress Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Main Card Content Area */}
          <div className="p-6 sm:p-8 min-h-[290px] flex flex-col justify-between relative">

            {/* 1. All 8 Completed Success Screen */}
            {isAllCompleted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6 space-y-4 my-auto"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-600 flex items-center justify-center text-2xl mx-auto shadow-xs">
                  <FiCheckCircle />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                    🎉 Claim Preparation Complete
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-800">
                    You’ve checked all 8 claim preparation points.
                  </p>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
                  Your documents and key claim details have been checked. Before submitting, verify the exact document requirements and applicable timelines with your insurer and policy.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAllItemsModal(true)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Review Checklist
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(0)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              /* 2. Interactive Single Item Stepper */
              <div className="space-y-6">
                
                {/* Step Pill & Navigation Arrows */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white border border-slate-200/80 px-2.5 py-1 rounded-full">
                    Step {currentIndex + 1} of {totalCount}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      disabled={currentIndex === 0}
                      onClick={() => {
                        setCurrentIndex(prev => Math.max(0, prev - 1));
                        setShowGuidance(false);
                      }}
                      className="w-7 h-7 rounded-lg border border-slate-200 text-slate-500 flex items-center justify-center text-xs hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Previous step"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      type="button"
                      disabled={currentIndex === totalCount - 1}
                      onClick={() => {
                        setCurrentIndex(prev => Math.min(totalCount - 1, prev + 1));
                        setShowGuidance(false);
                      }}
                      className="w-7 h-7 rounded-lg border border-slate-200 text-slate-500 flex items-center justify-center text-xs hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Next step"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>

                {/* Question & Short Note */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                        {currentStep.title}
                      </h3>
                      {isCurrentChecked && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                          <FiCheck className="text-emerald-700" />
                          <span>Ready</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {currentStep.shortNote}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Two Simple Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleYesReady}
                    className={`py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      isCurrentChecked
                        ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                    }`}
                  >
                    <FiCheck className="text-base" />
                    <span>✓ Yes, it’s ready</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNotYet}
                    className="py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Not yet</span>
                  </button>
                </div>

                {/* "Not yet" Friendly Context-Specific Guidance */}
                <AnimatePresence>
                  {showGuidance && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-amber-50/80 rounded-2xl border border-amber-200/80 p-4 sm:p-5 text-left space-y-3.5">
                        <div className="space-y-1">
                          <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 font-display">
                            No problem.
                          </h4>
                          <p className="text-xs text-amber-950 font-medium leading-relaxed">
                            {currentStep.guidance}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                          <button
                            type="button"
                            onClick={handleGotItNext}
                            className="w-full sm:w-auto px-4 py-2 bg-amber-200/90 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <span>Got it</span>
                            <FiArrowRight className="text-xs" />
                          </button>

                          <button
                            type="button"
                            onClick={handleClaimSolverClick}
                            className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                          >
                            <FiCheckCircle className="text-xs text-emerald-400" />
                            <span>Hire Your Personal Claim Solver</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )}

            {/* Bottom Controls: View all 8 items */}
            <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setShowAllItemsModal(true)}
                className="font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FiList className="text-xs" />
                <span>View all 8 items</span>
              </button>

              <span className="text-[11px] text-slate-400 font-medium">
                {totalCount - completedCount > 0 ? `${totalCount - completedCount} remaining` : 'All completed'}
              </span>
            </div>

          </div>

        </div>

        {/* Clean Important Notice */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400 font-medium">
            Important Notice: Document requirements can vary depending on the insurer, policy, claim type, and treatment.
          </p>
        </div>

      </div>

      {/* View All 8 Items Compact Modal */}
      <AnimatePresence>
        {showAllItemsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllItemsModal(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 text-left z-10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-base font-black text-slate-900 font-display">
                    Preparation Items ({completedCount}/{totalCount})
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Click any item to open in assistant
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllItemsModal(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-xs cursor-pointer"
                >
                  <FiX />
                </button>
              </div>

              {/* Compact List */}
              <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
                {PREP_STEPS.map((step, idx) => {
                  const isChecked = !!checkedItems[step.key];
                  return (
                    <div
                      key={step.id}
                      onClick={() => handleSelectStep(idx)}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-50/40 border-emerald-200/80 hover:bg-emerald-50'
                          : 'bg-slate-50/80 border-slate-100 hover:bg-slate-100/80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-[10px] font-bold text-slate-400 w-4">
                          {idx + 1}.
                        </span>
                        <span className={`text-xs font-bold truncate ${
                          isChecked ? 'text-emerald-950 font-medium' : 'text-slate-800'
                        }`}>
                          {step.title.replace('?', '')}
                        </span>
                      </div>

                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                        isChecked
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-white text-slate-400 border border-slate-200'
                      }`}>
                        {isChecked ? '✓ Ready' : '○ Check'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAllItemsModal(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetConfirm(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-sm w-full p-6 text-center z-10 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-xl mx-auto">
                <FiRotateCcw />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 font-display">
                  Start the checklist again?
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Your current preparation progress will be reset.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* We’ll Contact You Soon Popup Modal */}
      <ClaimSolverModal
        isOpen={showContactSoonModal}
        onClose={() => setShowContactSoonModal(false)}
      />

    </section>
  );
}
