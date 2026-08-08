import React from 'react';
import { FiCheckCircle, FiFileText, FiClock, FiShield } from 'react-icons/fi';

export default function ClaimPage() {
  const steps = [
    {
      icon: <FiFileText className="text-xl text-[#059669]" />,
      title: "Submit Documents",
      desc: "Upload medical bills, discharge summaries, and diagnostic reports online."
    },
    {
      icon: <FiClock className="text-xl text-[#059669]" />,
      title: "Verification Process",
      desc: "Our automated verification panel audits documents within 30 minutes."
    },
    {
      icon: <FiCheckCircle className="text-xl text-[#059669]" />,
      title: "Instant Cashless Claim",
      desc: "Upon verification, cashless approvals are sent directly to network hospitals."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100/60 px-3 py-1 rounded-full">
            Seamless Claim Settlement
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display">
            Claim Management Panel
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-lg mx-auto">
            Easy claim filing, automated auditing, and 30-minute cashless processing.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 relative group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="p-3 bg-emerald-50 rounded-xl w-fit">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-display">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-slate-800 font-display">Need Immediate Cashless Help?</h3>
            <p className="text-xs text-slate-400 font-semibold max-w-md">
              Contact our claim support line or write directly to our desk at <a href="mailto:whyinsured3@gmail.com" className="text-[#059669] hover:underline">whyinsured3@gmail.com</a>.
            </p>
          </div>
          <a
            href="mailto:whyinsured3@gmail.com"
            className="px-5 py-3 bg-[#059669] text-white rounded-xl text-xs font-bold hover:bg-[#047857] transition-all text-center"
          >
            Filing Claim Support
          </a>
        </div>

      </div>
    </div>
  );
}
