import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiAlertCircle } from 'react-icons/fi';
import { companiesData } from '../data/companies';

export default function CompareForm({ onClose, onSubmenuStateChange }) {
  const navigate = useNavigate();

  // Selection states
  const [company1, setCompany1] = useState(null);
  const [company2, setCompany2] = useState(null);
  const [plan1, setPlan1] = useState(null);
  const [plan2, setPlan2] = useState(null);

  // Dropdown open states
  const [c1Open, setC1Open] = useState(false);
  const [c2Open, setC2Open] = useState(false);
  const [p1Open, setP1Open] = useState(false);
  const [p2Open, setP2Open] = useState(false);
  const [covOpen, setCovOpen] = useState(false);

  // Coverage selection state (default to ₹20 Lakh)
  const [coverage, setCoverage] = useState(20);
  const coverageOptions = [10, 15, 20, 25, 30, 35, 40, 45, 50];

  // Validation flag: Plan selectors are enabled only after both companies are selected
  const plansEnabled = company1 !== null && company2 !== null;

  // Validation flag: "Compare Now" enabled only if all selections are complete
  const canCompare = company1 && company2 && plan1 && plan2;

  const anyOpen = c1Open || c2Open || p1Open || p2Open || covOpen;
  useEffect(() => {
    if (onSubmenuStateChange) {
      onSubmenuStateChange(anyOpen);
    }
  }, [anyOpen, onSubmenuStateChange]);

  // Handle Company 1 selection
  const handleSelectCompany1 = (company) => {
    setCompany1(company);
    setPlan1(null); // Reset plan 1 since company changed
    setC1Open(false);

    // If company 2 is already the same, clear it to prevent self-comparison
    if (company2 && company2.id === company.id) {
      setCompany2(null);
      setPlan2(null);
    }
  };

  // Handle Company 2 selection
  const handleSelectCompany2 = (company) => {
    if (company1 && company1.id === company.id) {
      return; // Prevent selection of the same company
    }
    setCompany2(company);
    setPlan2(null); // Reset plan 2 since company changed
    setC2Open(false);
  };

  const handleCompareNow = () => {
    if (!canCompare) return;

    // Navigate to ComparisonPage with selected parameters and coverage
    navigate(`/compare?c1=${company1.id}&c2=${company2.id}&p1=${plan1.id}&p2=${plan2.id}&cov=${coverage}`);

    // Close the dropdown parent if provided (e.g. Navbar menu)
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        
        {/* ==================== 1. COMPANY 1 ==================== */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-0.5">
            Company 1
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setC1Open(!c1Open);
                setC2Open(false);
                setP1Open(false);
                setP2Open(false);
              }}
              className="w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100/50 hover:border-slate-300 transition-all duration-200 text-left text-sm font-semibold text-slate-700 cursor-pointer"
            >
              {company1 ? (
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-lg p-1 shrink-0 border border-slate-100">
                    <img src={company1.logo} alt={company1.name} className="w-full h-full object-contain" />
                  </div>
                  <span>{company1.name}</span>
                </div>
              ) : (
                <span className="text-slate-400">Select Company</span>
              )}
              <FiChevronDown className={`text-slate-400 transition-transform duration-200 ${c1Open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {c1Open && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setC1Open(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-40 max-h-60 overflow-y-auto py-2"
                  >
                    {companiesData.map((company) => (
                      <button
                        key={company.id}
                        type="button"
                        onClick={() => handleSelectCompany1(company)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-left text-xs font-bold text-slate-600 transition-colors"
                      >
                        <div className="w-7 h-7 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-lg p-1 shrink-0">
                          <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                        </div>
                        <span>{company.name}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ==================== 2. COMPANY 2 ==================== */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-0.5">
            Company 2
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setC2Open(!c2Open);
                setC1Open(false);
                setP1Open(false);
                setP2Open(false);
              }}
              className="w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100/50 hover:border-slate-300 transition-all duration-200 text-left text-sm font-semibold text-slate-700 cursor-pointer"
            >
              {company2 ? (
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-lg p-1 shrink-0 border border-slate-100">
                    <img src={company2.logo} alt={company2.name} className="w-full h-full object-contain" />
                  </div>
                  <span>{company2.name}</span>
                </div>
              ) : (
                <span className="text-slate-400">Select Company</span>
              )}
              <FiChevronDown className={`text-slate-400 transition-transform duration-200 ${c2Open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {c2Open && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setC2Open(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-40 max-h-60 overflow-y-auto py-2"
                  >
                    {companiesData.map((company) => {
                      const isSame = company1 && company.id === company1.id;
                      return (
                        <button
                          key={company.id}
                          type="button"
                          disabled={isSame}
                          onClick={() => handleSelectCompany2(company)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                            isSame 
                              ? 'bg-slate-50/50 text-slate-300 cursor-not-allowed' 
                              : 'hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-lg p-1 shrink-0 opacity-80">
                              <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                            </div>
                            <span>{company.name}</span>
                          </div>
                          {isSame && (
                            <span className="text-[9px] font-extrabold text-amber-500 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 flex items-center gap-1">
                              <FiAlertCircle /> Same
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          {/* Subtle validation message below Company 2 if Company 1 is selected */}
          {company1 && !company2 && (
            <span className="text-[10px] text-amber-500 font-semibold mt-1.5 block pl-0.5 animate-pulse">
              Please select a different company for comparison.
            </span>
          )}
        </div>

        {/* ==================== 3. PLAN 1 ==================== */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-0.5">
            Plan 1
          </label>
          <div className="relative">
            <button
              type="button"
              disabled={!plansEnabled}
              onClick={() => {
                setP1Open(!p1Open);
                setC1Open(false);
                setC2Open(false);
                setP2Open(false);
              }}
              className={`w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 border rounded-2xl transition-all duration-200 text-left text-sm font-semibold cursor-pointer ${
                plansEnabled 
                  ? 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/50 hover:border-slate-300 text-slate-700' 
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-400 cursor-not-allowed'
              }`}
            >
              {plan1 ? (
                <div className="flex flex-col">
                  <span className="text-slate-700">{plan1.name}</span>
                </div>
              ) : (
                <span className="text-slate-400">Select Plan</span>
              )}
              <FiChevronDown className={`text-slate-400 transition-transform duration-200 ${p1Open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {p1Open && plansEnabled && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setP1Open(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-40 max-h-60 overflow-y-auto py-2"
                  >
                    {company1.plans.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => {
                          setPlan1(plan);
                          setP1Open(false);
                        }}
                        className="w-full px-4 py-2.5 hover:bg-slate-50 text-left transition-colors flex flex-col gap-0.5"
                      >
                        <span className="text-xs font-bold text-slate-700">{plan.name}</span>
                        <span className="text-[10px] text-slate-400 font-semibold line-clamp-1">{plan.description}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ==================== 4. PLAN 2 ==================== */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-0.5">
            Plan 2
          </label>
          <div className="relative">
            <button
              type="button"
              disabled={!plansEnabled}
              onClick={() => {
                setP2Open(!p2Open);
                setC1Open(false);
                setC2Open(false);
                setP1Open(false);
              }}
              className={`w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 border rounded-2xl transition-all duration-200 text-left text-sm font-semibold cursor-pointer ${
                plansEnabled 
                  ? 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/50 hover:border-slate-300 text-slate-700' 
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-400 cursor-not-allowed'
              }`}
            >
              {plan2 ? (
                <div className="flex flex-col">
                  <span className="text-slate-700">{plan2.name}</span>
                </div>
              ) : (
                <span className="text-slate-400">Select Plan</span>
              )}
              <FiChevronDown className={`text-slate-400 transition-transform duration-200 ${p2Open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {p2Open && plansEnabled && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setP2Open(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-40 max-h-60 overflow-y-auto py-2"
                  >
                    {company2.plans.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => {
                          setPlan2(plan);
                          setP2Open(false);
                        }}
                        className="w-full px-4 py-2.5 hover:bg-slate-50 text-left transition-colors flex flex-col gap-0.5"
                      >
                        <span className="text-xs font-bold text-slate-700">{plan.name}</span>
                        <span className="text-[10px] text-slate-400 font-semibold line-clamp-1">{plan.description}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ==================== 5. COVERAGE ==================== */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-0.5">
            Coverage
          </label>
          <div className="relative">
            <button
              type="button"
              disabled={!plan1 || !plan2}
              onClick={() => {
                setCovOpen(!covOpen);
                setC1Open(false);
                setC2Open(false);
                setP1Open(false);
                setP2Open(false);
              }}
              className={`w-full min-h-[46px] flex items-center justify-between px-4 py-2.5 border rounded-2xl transition-all duration-200 text-left text-sm font-semibold cursor-pointer ${
                (plan1 && plan2) 
                  ? 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/50 hover:border-slate-300 text-slate-700' 
                  : 'bg-slate-100/60 border-slate-200/50 text-slate-400 cursor-not-allowed'
              }`}
            >
              {(plan1 && plan2) ? (
                <span className="text-slate-700">₹{coverage} Lakh</span>
              ) : (
                <span className="text-slate-400">Select Coverage</span>
              )}
              <FiChevronDown className={`text-slate-400 transition-transform duration-200 ${covOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {covOpen && plan1 && plan2 && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setCovOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-40 max-h-52 overflow-y-auto py-2"
                  >
                    {coverageOptions.map((cov) => (
                      <button
                        key={cov}
                        type="button"
                        onClick={() => {
                          setCoverage(cov);
                          setCovOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 hover:bg-slate-50 text-left transition-colors text-xs font-bold ${
                          coverage === cov ? 'text-emerald-600 bg-emerald-50/40' : 'text-slate-600'
                        }`}
                      >
                        ₹{cov} Lakh
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Compare Button */}
      <div className="flex justify-center pt-2 border-t border-slate-100 mt-5">
        <motion.button
          type="button"
          disabled={!canCompare}
          whileHover={canCompare ? { scale: 1.025, y: -1 } : {}}
          whileTap={canCompare ? { scale: 0.98 } : {}}
          onClick={handleCompareNow}
          className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm shrink-0 flex items-center justify-center gap-2 cursor-pointer ${
            canCompare 
              ? 'bg-[#059669] hover:bg-[#047857] text-white hover:shadow-md' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none border border-slate-200/45'
          }`}
        >
          Compare Now
        </motion.button>
      </div>
    </div>
  );
}
