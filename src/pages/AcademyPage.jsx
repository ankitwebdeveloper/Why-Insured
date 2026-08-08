import React from 'react';
import { FiBookOpen, FiFileText, FiAward, FiCheck } from 'react-icons/fi';

export default function AcademyPage() {
  const articles = [
    {
      title: "Understanding Deductibles & Co-pay",
      desc: "Learn how out-of-pocket limits affect your yearly premiums.",
      category: "Basics"
    },
    {
      title: "Cashless vs. Reimbursement Claims",
      desc: "An in-depth comparison of claim types and how to file them successfully.",
      category: "Claims Guide"
    },
    {
      title: "Critical Illness vs. Indemnity Cover",
      desc: "Which one do you need? Discover why having both is recommended.",
      category: "Strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100/60 px-3 py-1 rounded-full">
            Insurance Academy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display">
            Expand Your Insurance Knowledge
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-lg mx-auto">
            Clear, bite-sized guides on how to buy, use, and maximize your health policies.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 relative group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="text-[10px] font-extrabold text-[#059669] uppercase tracking-wider">{article.category}</div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider leading-relaxed font-display">
                {article.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                {article.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-slate-800 font-display">Ready to make smart decisions?</h3>
            <p className="text-xs text-slate-400 font-semibold max-w-md">
              Learn from real case studies, compare plan details side-by-side, and find policies with the best claim ratio.
            </p>
          </div>
          <button
            className="px-5 py-3 bg-[#059669] text-white rounded-xl text-xs font-bold hover:bg-[#047857] transition-all cursor-pointer"
          >
            Start Learning
          </button>
        </div>

      </div>
    </div>
  );
}
