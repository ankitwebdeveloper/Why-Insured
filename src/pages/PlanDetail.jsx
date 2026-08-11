import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';
import { companiesData } from '../data/companies';

export default function PlanDetail() {
  const { companyId, planId } = useParams();

  const company = companiesData.find(
    c => c.slug === companyId || c.id === companyId
  );

  const plan = company?.plans.find(p => p.id === planId);

  if (!company || !plan) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20 px-4 bg-slate-50 font-sans">
        <h1 className="text-2xl font-bold text-slate-800">Plan Not Found</h1>
        <p className="text-sm text-slate-500 mt-2 mb-6">The requested plan details could not be found.</p>
        <Link to="/" className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  const { theme, name, logo } = company;

  // Apply custom CSS variables for the theme
  const themeStyles = {
    '--primary': theme.primary,
    '--secondary': theme.secondary,
    '--accent': theme.accent,
    '--bg': theme.background,
    '--text': theme.text,
  };

  return (
    <div style={{ ...themeStyles, backgroundColor: 'var(--bg)' }} className="min-h-screen font-sans pt-24 pb-20 relative transition-colors duration-300">
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={`/insurance/${company.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <FiArrowLeft className="text-sm" /> Back to {name} Plans
          </Link>
        </div>

        {/* Plan Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 right-0 h-1.5" 
            style={{ background: theme.gradient ? theme.gradient : 'var(--primary)' }}
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span 
                  className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded border"
                  style={{ 
                    backgroundColor: 'var(--bg)', 
                    color: 'var(--primary)', 
                    borderColor: `${theme.primary}20` 
                  }}
                >
                  Health Policy
                </span>
                <span className="text-[10px] font-bold text-slate-400">{name}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
                {plan.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl font-medium">
                {plan.description}
              </p>
            </div>

            {/* Logo - Clean view without outer card or frame */}
            <img
              src={logo}
              alt={name}
              className="w-28 sm:w-36 h-auto max-h-12 sm:max-h-16 object-contain select-none self-start sm:self-center shrink-0"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div 
              className="p-3.5 rounded-xl shrink-0 animate-pulse"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <FiShield className="text-xl" style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">
                Coverage Amount
              </span>
              <div className="text-lg font-black text-slate-900 mt-0.5">{plan.coverage} Cover</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div 
              className="p-3.5 rounded-xl shrink-0 flex items-center justify-center w-12 h-12"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <span className="text-lg font-black" style={{ color: 'var(--primary)' }}>₹</span>
            </div>
            <div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">
                Estimated Price
              </span>
              <div className="text-lg font-black text-slate-900 mt-0.5">{plan.premium}</div>
            </div>
          </div>
        </div>

        {/* Policy Details Grid */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-slate-50 flex items-center gap-2">
            <FiCheckCircle className="text-lg shrink-0" style={{ color: 'var(--primary)' }} />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-display">
              Policy Benefits & Details
            </h2>
          </div>
          
          <div className="divide-y divide-slate-50">
            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Eligibility Criteria</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.eligibility}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Waiting Periods</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.waitingPeriod}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Room Rent Terms</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.roomRent}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hospitalization Limits</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.hospitalization}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pre & Post Hospitalization</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.prePostHospital}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day-Care Coverage</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.dayCare}
              </span>
            </div>

            <div className="p-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">No Claim Bonus (NCB)</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 sm:col-span-2 mt-1 sm:mt-0 block">
                {plan.details.noClaimBonus}
              </span>
            </div>
          </div>
        </div>

        {/* Policy Exclusions Card */}
        <div className="bg-amber-50/50 rounded-2xl border border-amber-100/60 p-6 flex gap-4">
          <FiAlertTriangle className="text-xl text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
              Important Exclusions
            </h3>
            <p className="text-xs sm:text-sm text-amber-700 leading-relaxed font-semibold">
              {plan.details.exclusions}. Refer to the official policy document for full terms.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
