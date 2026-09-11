import React from 'react';
import { FiCheckCircle, FiXCircle, FiShield, FiAlertOctagon } from 'react-icons/fi';

export const DOS = [
  {
    title: "Keep copies of submitted documents",
    desc: "Maintain both scanned PDF copies on your phone/cloud and physical photocopies before dispatching original files."
  },
  {
    title: "Read claim-related communication carefully",
    desc: "Review every SMS, email, or deficiency letter from your insurer or TPA to understand exact instructions."
  },
  {
    title: "Respond to queries within the requested timeline",
    desc: "Submit requested clarifications promptly within the 15–30 day window to prevent claim file closure."
  },
  {
    title: "Keep hospital bills and payment receipts",
    desc: "Preserve all payment receipts, credit card transaction slips, and itemized bills with hospital stamps."
  },
  {
    title: "Check the approved amount against the final bill",
    desc: "Compare your Claim Settlement Voucher with the hospital bill to verify proper application of policy terms."
  }
];

export const DONTS = [
  {
    title: "Ignore insurer queries",
    desc: "Ignoring a deficiency letter can lead to claim closure or rejection due to lack of required documentation."
  },
  {
    title: "Submit incorrect or incomplete information",
    desc: "Discrepancies in dates, medical history, or doctor certificates can cause audits and avoidable delays."
  },
  {
    title: "Throw away original documents prematurely",
    desc: "Never dispose of original medical records, bills, or prescription slips until the claim is fully settled."
  },
  {
    title: "Assume every hospital expense is automatically payable",
    desc: "Policies contain non-payable consumable lists, room caps, and sub-limits that may lead to out-of-pocket costs."
  },
  {
    title: "Delay communication unnecessarily",
    desc: "Delaying claim intimation or query submission past policy timelines can complicate approval formalities."
  }
];

export default function DoDontSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-700 border border-slate-200/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Best Practices
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Claim Dos & Don'ts
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Simple habits and practical precautions to keep your health insurance claim process smooth and transparent.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* DO COLUMN */}
          <div className="bg-emerald-50/40 rounded-3xl border border-emerald-200/60 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-lg shadow-sm shrink-0">
                  <FiCheckCircle />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">
                    Recommended Practices
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-display">
                    Things You Should DO
                  </h3>
                </div>
              </div>

              {/* Do List */}
              <div className="space-y-4">
                {DOS.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-emerald-100/80 shadow-2xs space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* DON'T COLUMN */}
          <div className="bg-rose-50/40 rounded-3xl border border-rose-200/60 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center text-lg shadow-sm shrink-0">
                  <FiAlertOctagon />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 block">
                    Mistakes to Avoid
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-display">
                    Things You Should NOT Do
                  </h3>
                </div>
              </div>

              {/* Don't List */}
              <div className="space-y-4">
                {DONTS.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-rose-100/80 shadow-2xs space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                      <FiXCircle className="text-rose-600 text-sm shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
