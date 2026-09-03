import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiArrowRight,
  FiHelpCircle,
  FiShield,
  FiInfo,
  FiX,
  FiCheck,
  FiCornerDownRight,
  FiLayers
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

export default function AiSearchAnswerPanel({ solution, onClose, onQuerySelect }) {
  if (!solution) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.99 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-left font-sans mt-3 relative z-30"
    >
      {/* Top AI Header Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50/50 to-white px-5 sm:px-6 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <HiSparkles className="text-sm" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-emerald-800">
                AI Insurance Problem Solver
              </span>
              {solution.badge && (
                <span className="hidden sm:inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-emerald-200 text-emerald-700">
                  {solution.badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Clear / Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 font-semibold shrink-0"
          title="Close answer"
        >
          <FiX className="text-base" />
        </button>
      </div>

      {/* Main Answer Body */}
      <div className="p-5 sm:p-7 space-y-6">

        {/* 1. SIMPLE ANSWER (Prominent 1-2 line summary) */}
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-800 mb-1.5">
            <FiCheckCircle className="text-emerald-600 text-sm" />
            <span>Simple Answer</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {solution.simpleAnswer}
          </p>
        </div>

        {/* 2. WHAT DOES IT MEAN? */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
            <FiInfo className="text-slate-400 text-sm" />
            <span>What does it mean?</span>
          </div>
          <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed">
            {solution.whatDoesItMean}
          </p>

          {/* Visual Examples / Chips (e.g. Gloves, Syringes, Cotton, Masks) */}
          {solution.examples && solution.examples.length > 0 && (
            <div className="pt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                Examples:
              </span>
              <div className="flex items-center flex-wrap gap-2">
                {solution.examples.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100/80 text-slate-700 border border-slate-200/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. COVERAGE DEPENDS ON */}
        <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-600">
            <FiShield className="text-emerald-600 text-sm" />
            <span>Are they covered? / Coverage depends on:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {solution.coverageDependsOn}
          </p>
        </div>

        {/* 4. WHAT SHOULD YOU DO? */}
        <div className="space-y-2 p-4 rounded-xl bg-amber-50/60 border border-amber-100/90">
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-900">
            <FiCornerDownRight className="text-amber-600 text-sm" />
            <span>What should you do?</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed">
            {solution.whatShouldYouDo}
          </p>
          {solution.featureToLookFor && (
            <div className="mt-2 pt-2 border-t border-amber-100 flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-amber-800">What to look for in your policy:</span>
              <span className="font-extrabold text-emerald-800 bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                {solution.featureToLookFor}
              </span>
            </div>
          )}
        </div>

        {/* 5. TOP VERIFIED PLANS OFFERING THIS */}
        {solution.topPlansOffering && solution.topPlansOffering.length > 0 && (
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Top Plans Providing This Feature
              </span>
              <Link
                to="/compare"
                className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <span>Compare All</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solution.topPlansOffering.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <span className="font-bold text-xs text-slate-900 block truncate">
                      {p.plan}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium block truncate">
                      {p.company} • {p.feature}
                    </span>
                  </div>
                  <FiCheck className="text-emerald-500 text-sm shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Action Footer with Primary CTA */}
      <div className="px-5 sm:px-7 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
        <div className="text-xs text-slate-500 font-medium">
          Ready to verify your health coverage?
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={solution.ctaTarget || '/compare'}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <span>{solution.ctaLabel || 'Check My Coverage →'}</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
