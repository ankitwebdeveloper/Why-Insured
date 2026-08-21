import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight,
  FiSearch,
  FiX,
  FiCheck,
  FiShield,
  FiBookOpen,
  FiActivity,
  FiFileText,
  FiCompass,
  FiCheckCircle,
  FiClock,
  FiAward,
  FiLayers
} from 'react-icons/fi';

// ==========================================
// 1. DATASETS (0 PRICING / 0 ₹ / 100% PURE EDUCATION)
// ==========================================

const LEARN_CARDS = [
  {
    id: 'basics',
    number: '01',
    title: 'Insurance Basics',
    desc: 'Understand how health insurance works and learn the fundamentals.',
    icon: FiCompass,
    badge: 'Fundamentals',
    readTime: '3 min read',
    content: [
      {
        heading: 'What Is Health Insurance?',
        text: 'Health insurance is a contract between you and an insurance provider where the insurer pays for approved medical and hospitalization bills so your personal savings remain protected.'
      },
      {
        heading: 'Individual vs Family Floater',
        text: 'An Individual Plan provides a dedicated coverage limit reserved exclusively for one person. A Family Floater Plan shares a combined coverage pool among all enrolled family members.'
      },
      {
        heading: 'What Is Sum Insured?',
        text: 'Sum Insured is the maximum financial limit your health insurer will pay in a single policy year toward covered medical treatments.'
      }
    ],
    takeaways: [
      'Protects personal savings from unexpected hospital bills',
      'Covers room rent, ICU, surgeries, diagnostics, and doctor consultations',
      'Provides access to cashless network hospitals across the country'
    ]
  },
  {
    id: 'terms',
    number: '02',
    title: 'Policy Terms',
    desc: 'Understand important terms without confusing insurance language.',
    icon: FiBookOpen,
    badge: 'Terminology',
    readTime: '4 min read',
    content: [
      {
        heading: 'Waiting Period',
        text: 'The duration from policy start during which specific illnesses or pre-existing conditions are not covered (typically 30 days initial, 24 months for named conditions, 24–36 months for pre-existing diseases).'
      },
      {
        heading: 'Room Rent Capping',
        text: 'A daily financial ceiling on hospital room charges. Selecting a room above your limit triggers proportionate deductions across doctor fees, surgery, and nursing bills. Always prefer Single Private Room with no capping.'
      },
      {
        heading: 'Co-payment & Deductible',
        text: 'Co-payment is a fixed percentage of each claim bill you pay out of pocket. A deductible is a fixed upfront amount you settle before insurance kicks in. Choosing zero co-pay avoids unexpected expenses.'
      }
    ],
    takeaways: [
      'Disclose medical history honestly to avoid claim rejection',
      'Look for Single Private Room or No Room Rent Capping',
      'Check whether the restore benefit refills cover for related or unrelated illnesses'
    ]
  },
  {
    id: 'claims',
    number: '03',
    title: 'Claims',
    desc: 'Learn how cashless and reimbursement claims generally work.',
    icon: FiFileText,
    badge: 'Claims Process',
    readTime: '4 min read',
    content: [
      {
        heading: 'Cashless Hospitalization',
        text: 'Available at network hospitals. Present your health e-card at the hospital TPA desk. The hospital requests pre-authorization, and approved bills are settled directly by the insurer.'
      },
      {
        heading: 'Reimbursement Claims',
        text: 'Used at non-network hospitals. You settle hospital bills upon discharge and submit original invoices, test reports, and discharge summary to the insurer for refund.'
      },
      {
        heading: 'Intimation Timelines',
        text: 'Notify your insurer 48 hours prior to planned hospital admission, or within 24 hours of emergency admission.'
      }
    ],
    takeaways: [
      'Cashless: Direct settlement between network hospital and insurer',
      'Reimbursement: Pay first, submit original receipts for refund review',
      'Always retain copies of discharge summaries and diagnostic reports'
    ]
  },
  {
    id: 'hospital',
    number: '04',
    title: 'Hospital Guide',
    desc: 'Understand network hospitals and the basics of hospitalization.',
    icon: FiActivity,
    badge: 'Hospitalization',
    readTime: '3 min read',
    content: [
      {
        heading: 'What Is A Network Hospital?',
        text: 'A hospital that has an active partnership agreement with your insurance company or TPA to provide direct cashless medical treatment.'
      },
      {
        heading: 'Before Planned Admission',
        text: 'Carry your doctor’s admission advice, policy document, health card, and government ID to the hospital insurance desk 48 hours before surgery.'
      },
      {
        heading: 'At Discharge',
        text: 'The hospital sends final itemized bills for TPA clearance. Non-medical consumable items are settled directly by the patient unless covered by a consumables rider.'
      }
    ],
    takeaways: [
      'Verify active cashless tie-ups before planned treatment',
      'Day-care surgeries (<24 hours) are fully covered under modern policies',
      'Preserve pre-admission test bills and post-discharge pharmacy receipts'
    ]
  }
];

const FEATURED_GUIDE = {
  id: 'before-you-choose',
  title: 'Before You Choose',
  desc: 'Know the important things you should understand before choosing health insurance.',
  readTime: '5 min read',
  badge: 'FEATURED GUIDE',
  points: [
    'Understand the coverage',
    'Check important conditions',
    'Know waiting periods',
    'Understand the claim process'
  ],
  content: [
    {
      heading: '1. Understand the coverage',
      text: 'Examine in-patient hospitalisation, ICU limits, day-care procedures, and modern surgical treatments to ensure the plan matches your family needs.'
    },
    {
      heading: '2. Check important conditions',
      text: 'Ensure room rent has no sub-limits (prefer Single Private Room) and check if any mandatory co-payment applies.'
    },
    {
      heading: '3. Know waiting periods',
      text: 'Understand the 30-day initial waiting period, 24-month specific disease waiting, and pre-existing condition timelines.'
    },
    {
      heading: '4. Understand the claim process',
      text: 'Verify cashless hospital networks near you and learn the required intimation guidelines for planned and emergency admissions.'
    }
  ],
  takeaways: [
    'Always read the policy wording before purchasing',
    'Prioritize plans with no room rent capping and zero co-pay',
    'Declare all prior medical conditions honestly'
  ]
};

const GLOSSARY_DATA = {
  'Waiting Period': 'A specified duration from policy inception during which certain medical conditions or treatments are not covered.',
  'Co-payment': 'A fixed percentage of the approved claim amount that the policyholder must pay out of pocket before the insurer covers the remainder.',
  'Deductible': 'An upfront claim threshold that must be paid by the policyholder before the insurance policy begins paying.',
  'Exclusions': 'Medical treatments, conditions, or healthcare items that are explicitly and permanently not covered by the health policy.',
  'Room Rent': 'A daily limit on hospital room charges. Exceeding your room rent limit can trigger proportionate deductions on your overall claim.',
  'Sum Insured': 'The maximum financial limit your health insurer will pay in a policy year toward covered medical and hospitalization treatments.',
  'No Claim Bonus': 'An increase in your Sum Insured awarded for each claim-free policy year without requiring extra premium payment.',
  'Restore Benefit': 'An automatic feature that replenishes your exhausted Sum Insured during the policy year for subsequent medical claims.',
  'Network Hospital': 'A healthcare facility that has a formal agreement with your insurer or TPA to provide direct cashless medical treatment.',
  'Day Care Treatment': 'Medical procedures or surgeries requiring less than 24 hours of hospital stay due to technological advances.'
};

const POPULAR_TERMS = ['Waiting Period', 'Co-payment', 'Deductible', 'Exclusions', 'Room Rent'];

const KNOWLEDGE_STRIP = [
  { title: 'Learn', desc: 'Understand insurance concepts.' },
  { title: 'Compare', desc: 'Know what to look for.' },
  { title: 'Decide', desc: 'Make informed choices.' }
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

export default function AcademyPage() {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [activeTerm, setActiveTerm] = useState('Waiting Period');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter glossary based on search
  const filteredTerms = Object.keys(GLOSSARY_DATA).filter(term =>
    term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    GLOSSARY_DATA[term].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
      
      {/* Background Subtle Radial Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none -z-10" />

      {/* ==========================================
          1. HERO SECTION (Split Layout & Visually Rich)
      ========================================== */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WHYINSURED ACADEMY</span>
            </div>

            {/* Main Heading with Highlighted "Simply" */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight font-display">
              Understand Insurance, <br className="hidden sm:inline" />
              <span className="text-emerald-600">Simply.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Clear, practical and easy-to-understand guides that help you make sense of health insurance.
            </p>

            {/* Three Small Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700">
                <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />
                <span>Simple Language</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700">
                <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />
                <span>Practical Guides</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700">
                <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />
                <span>Insurance Awareness</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Knowledge Center Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Subtle Emerald Backdrop Glow */}
            <div className="absolute inset-0 -inset-x-4 bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none -z-10" />

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl relative overflow-hidden text-left">
              {/* Subtle Top Accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                    <FiShield />
                  </div>
                  <div>
                    <h2 className="text-xs font-black text-slate-900">Knowledge Center</h2>
                    <p className="text-[10px] text-slate-400 font-semibold">Educational Hub</p>
                  </div>
                </div>
                <span className="text-[9px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-widest">
                  Verified
                </span>
              </div>

              {/* Policy Graphic with Floating Element Badges */}
              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-2.5 mb-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Policy Health Guide</span>
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <div className="h-1.5 w-3/4 bg-slate-200/80 rounded-full" />
                <div className="h-1.5 w-1/2 bg-slate-200/60 rounded-full" />
              </div>

              {/* Floating Pill Elements */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-[11px] font-extrabold text-slate-700 flex items-center gap-1.5">
                  <FiBookOpen className="text-emerald-600 text-xs" /> Policy Terms
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-[11px] font-extrabold text-slate-700 flex items-center gap-1.5">
                  <FiFileText className="text-emerald-600 text-xs" /> Claims
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-[11px] font-extrabold text-slate-700 flex items-center gap-1.5">
                  <FiActivity className="text-emerald-600 text-xs" /> Hospital Guide
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          2. LEARNING CARDS (Light Subtle Section Background)
      ========================================== */}
      <section className="py-14 sm:py-18 bg-[#F0FDF4]/30 border-y border-emerald-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left space-y-1.5 mb-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight">
              Everything You Need to Understand
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Start with the basics and explore the concepts that matter most.
            </p>
          </div>

          {/* 4 Large Premium Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {LEARN_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedGuide(card)}
                >
                  <div>
                    {/* Top Row: Icon & Subtle Number */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-lg group-hover:scale-105 transition-transform duration-200">
                        <Icon />
                      </div>
                      <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-600/30 transition-colors font-mono select-none">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display group-hover:text-emerald-700 transition-colors mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1.5 transition-colors">
                      <span>Read Guide</span>
                      <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {card.readTime}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          3. FEATURED GUIDE (Large Horizontal Dark Card)
      ========================================== */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#0F172A] rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden text-left"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block">
                {FEATURED_GUIDE.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight">
                {FEATURED_GUIDE.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
                {FEATURED_GUIDE.desc}
              </p>

              {/* 4 Minimal Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {FEATURED_GUIDE.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <button
                  onClick={() => setSelectedGuide(FEATURED_GUIDE)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
                >
                  <span>Read Guide</span>
                  <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Abstract Visual Graphic */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center">
                {/* Subtle Emerald Circular Element */}
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-slate-800/90 border border-slate-700/80 p-5 flex flex-col justify-between shadow-xl">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                    <FiShield />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400">
                      Checklist
                    </span>
                    <p className="text-xs font-bold text-white leading-snug">
                      Coverage & waiting periods verified.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ==========================================
          4. INSURANCE GLOSSARY
      ========================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-md">
          
          <div className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight">
              Insurance Glossary
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Confusing insurance term? Find a simple explanation.
            </p>
          </div>

          {/* Large Premium Search Field */}
          <div className="relative max-w-lg mb-5">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search an insurance term..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Pill-Style Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {POPULAR_TERMS.map((term) => {
              const isSelected = activeTerm === term && !searchTerm;
              return (
                <button
                  key={term}
                  onClick={() => {
                    setActiveTerm(term);
                    setSearchTerm('');
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                  }`}
                >
                  {term}
                </button>
              );
            })}
          </div>

          {/* Animated Explanation Panel */}
          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 max-w-3xl">
            {searchTerm ? (
              filteredTerms.length > 0 ? (
                <div className="space-y-4">
                  {filteredTerms.slice(0, 3).map((term) => (
                    <div key={term} className="pb-3 border-b border-slate-200/60 last:border-0 last:pb-0">
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 font-display">
                        {term}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {GLOSSARY_DATA[term]}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-medium">
                  No matching insurance term found.
                </p>
              )
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h4 className="text-sm sm:text-base font-black text-slate-900 font-display">
                    {activeTerm}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {GLOSSARY_DATA[activeTerm]}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ==========================================
          5. SMALL KNOWLEDGE STRIP
      ========================================== */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-left">
          {KNOWLEDGE_STRIP.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <h4 className="text-sm font-black text-slate-900 font-display">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-slate-500 font-medium pl-3.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          6. FINAL MESSAGE (No Button)
      ========================================== */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 font-display tracking-tight">
            Insurance becomes easier when you understand it.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
            WHYINSURED Academy makes important insurance concepts simple, clear and easy to understand.
          </p>
          <div className="w-16 h-0.5 bg-emerald-500/80 mx-auto rounded-full mt-4" />
        </div>
      </section>

      {/* ==========================================
          CLEAN GUIDE MODAL READER
      ========================================== */}
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGuide(null)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-2xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.18 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative z-10 max-h-[85vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedGuide(null)}
                className="absolute top-5 right-5 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX className="text-sm" />
              </button>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 block mb-1">
                    {selectedGuide.badge || 'Guide'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display">
                    {selectedGuide.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {selectedGuide.desc}
                  </p>
                </div>

                {/* Detailed Sections */}
                {selectedGuide.content && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    {selectedGuide.content.map((sec, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-xs font-black text-slate-800">
                          {sec.heading}
                        </h4>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          {sec.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Takeaways */}
                {selectedGuide.takeaways && (
                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                      Takeaways
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedGuide.takeaways.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="text-emerald-600 font-bold shrink-0">✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Close Action */}
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedGuide(null)}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
