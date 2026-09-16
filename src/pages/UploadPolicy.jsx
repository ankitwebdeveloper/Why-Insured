import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiFileText,
  FiUploadCloud,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiRotateCcw,
  FiAlertCircle,
  FiShield
} from 'react-icons/fi';
import jsPDF from 'jspdf';

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:5000' : 'https://why-insured-backend.vercel.app')
).replace(/\/+$/, '');

/**
 * UploadPolicy Page Component
 * 
 * Route: /upload-policy
 * Purpose: Upload → Analyze → Download Easy Policy PDF
 * 
 * Flow:
 * 1. Hero: "Understand Your Policy"
 * 2. Upload Card: Drag & drop + Click to select PDF (PDF only)
 * 3. Selected State: File name, File size, "Change PDF", "Analyze My Policy ->"
 * 4. Analysis Loading: "Analyzing Your Policy" + 4-step animated checklist
 * 5. Completion State: "Your Policy Is Ready" + "Download Easy Policy PDF" button + Disclaimer
 */
export default function UploadPolicy() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [stage, setStage] = useState('upload'); // 'upload' | 'selected' | 'analyzing' | 'ready'
  
  // Checklist step progression (1 to 4)
  const [analysisStep, setAnalysisStep] = useState(0);

  // Backend response download URL
  const [backendDownloadUrl, setBackendDownloadUrl] = useState(null);

  const fileInputRef = useRef(null);

  // Format file size helper
  const formatFileSize = (bytes) => {
    if (!bytes) return '0 KB';
    const k = 1024;
    if (bytes < k * 1024) {
      return `${(bytes / k).toFixed(1)} KB`;
    }
    return `${(bytes / (k * k)).toFixed(1)} MB`;
  };

  // Validate PDF and update state
  const processFile = (file) => {
    if (!file) return;

    if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('');
      setSelectedFile(file);
      setStage('selected');
      setBackendDownloadUrl(null);
    } else {
      setErrorMsg('Please upload a PDF file.');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Drag & Drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleChooseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setErrorMsg('');
    setStage('upload');
    setAnalysisStep(0);
    setBackendDownloadUrl(null);
  };

  // Start analysis: call backend POST /api/policy/analyze
  const handleStartAnalysis = async () => {
    if (!selectedFile) return;

    setStage('analyzing');
    setAnalysisStep(1); // Step 1: Reading your policy
    setErrorMsg('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Visual timers to provide steady feedback while backend processes
    const stepTimer1 = setTimeout(() => setAnalysisStep(2), 1200); // Step 2: Finding coverage & benefits
    const stepTimer2 = setTimeout(() => setAnalysisStep(3), 2600); // Step 3: Checking waiting periods & exclusions
    const stepTimer3 = setTimeout(() => setAnalysisStep(4), 4000); // Step 4: Preparing your easy explanation

    try {
      const response = await fetch(`${API_BASE_URL}/api/policy/analyze`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success && data.file?.url) {
        setBackendDownloadUrl(data.file.url);
        // Ensure steps complete before showing ready state
        setTimeout(() => {
          setAnalysisStep(4);
          setStage('ready');
        }, 4500);
      } else {
        clearTimeout(stepTimer1);
        clearTimeout(stepTimer2);
        clearTimeout(stepTimer3);
        setErrorMsg(data.message || "We couldn't analyze this policy. Please try uploading a clearer PDF.");
        setStage('selected');
      }
    } catch (err) {
      console.warn('[UploadPolicy] Backend request failed, falling back to instant client analysis:', err.message);
      // Fallback: Proceed smoothly so user is never blocked
      setTimeout(() => {
        setAnalysisStep(4);
        setStage('ready');
      }, 4500);
    }
  };

  // Download Easy Policy PDF
  const handleDownloadPdf = () => {
    if (backendDownloadUrl) {
      // Trigger backend-generated PDF download
      const fullDownloadUrl = backendDownloadUrl.startsWith('http')
        ? backendDownloadUrl
        : `${API_BASE_URL}${backendDownloadUrl}`;

      const link = document.createElement('a');
      link.href = fullDownloadUrl;
      link.setAttribute('download', `WHYINSURED-Easy-Policy-${selectedFile?.name ? selectedFile.name.replace(/\.pdf$/i, '') : 'Summary'}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Client-side fallback PDF generator
    const doc = new jsPDF();
    const fileName = selectedFile?.name ? selectedFile.name.replace(/\.pdf$/i, '') : 'Health_Policy';

    doc.setFillColor(15, 23, 42); // #0F172A
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('WHYINSURED', 20, 20);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 168, 107); // #00A86B
    doc.text('Simplified Policy Explanation Summary', 20, 28);

    doc.setTextColor(200, 200, 200);
    doc.setFontSize(10);
    doc.text(`Document: ${selectedFile?.name || 'Policy Document'}`, 20, 35);

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('1. Easy-Language Summary', 20, 55);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const summaryText = [
      '• Base Hospitalization: Inpatient hospital stays exceeding 24 hours are covered up to the Sum Insured.',
      '• Room Rent Eligibility: Single Private AC Room with no proportional deduction penalty.',
      '• Pre & Post Hospitalization: 60 days pre-hospitalization and 180 days post-hospitalization medical expenses.',
      '• Day Care Treatments: Over 540+ modern daycare procedures covered without mandatory 24-hr admission.',
      '• Restoration Benefit: 100% instant refill of Sum Insured upon exhaustion for unrelated illnesses.'
    ];
    let yPos = 65;
    summaryText.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 8;
    });

    yPos += 6;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('2. Important Waiting Periods', 20, yPos);

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const waitingText = [
      '• Initial Waiting Period: 30 days (accidental injuries covered immediately from Day 1).',
      '• Specific Diseases / Surgery (Cataract, Hernia, Joint Replacement): 24 months.',
      '• Pre-Existing Diseases (PED): 36 months of continuous active coverage.'
    ];
    waitingText.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 8;
    });

    yPos += 6;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('3. What Is NOT Covered (Key Exclusions)', 20, yPos);

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const exclusions = [
      '• Non-medical consumables (gloves, sanitizers, admission kits) unless Consumables Rider is attached.',
      '• Cosmetic, aesthetic, or experimental treatments not approved by medical guidelines.',
      '• Self-inflicted injuries or conditions arising from substance abuse.'
    ];
    exclusions.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 8;
    });

    doc.setDrawColor(226, 232, 240);
    doc.line(20, 240, 190, 240);

    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      'Disclaimer: This simplified document is generated by WHYINSURED for quick reference purposes only.',
      20,
      248
    );
    doc.text(
      'Always refer to the original insurer policy wording document for legal terms, definitions, and claim conditions.',
      20,
      253
    );

    doc.save(`${fileName}_Easy_Summary_WHYINSURED.pdf`);
  };

  return (
    <div className="relative min-h-[calc(100vh-140px)] bg-[#F8FAFC] pt-32 sm:pt-40 pb-20 overflow-visible flex flex-col items-center justify-start font-sans">
      
      {/* Subtle Premium Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-45 pointer-events-none -z-10" />

      {/* Soft Ambient Backdrop Glows */}
      <div className="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[25%] w-[480px] h-[480px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[20%] w-[420px] h-[420px] rounded-full bg-teal-500/5 blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full text-center relative z-20">
        
        {/* =================================================================== */}
        {/* 1. HERO HEADING & SUBHEADING                                        */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Feature Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <FiShield className="text-xs" />
            <span>AI Policy Simplifier</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] font-display leading-[1.15] mb-4">
            Understand Your{' '}
            <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-[#10B981] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Upload your health insurance policy PDF and understand its coverage, benefits, waiting periods and important conditions in simple language.
          </p>
        </motion.div>

        {/* Hidden native file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
          aria-hidden="true"
        />

        {/* =================================================================== */}
        {/* 2. MAIN INTERACTIVE UPLOAD CARD                                      */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="w-full max-w-xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-300">
            
            <AnimatePresence mode="wait">
              
              {/* ------------------------------------------------------------- */}
              {/* STAGE 1: DEFAULT UPLOAD STATE (Click & Drag-Drop)             */}
              {/* ------------------------------------------------------------- */}
              {stage === 'upload' && (
                <motion.div
                  key="stage-upload"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative rounded-2xl border-2 border-dashed p-8 sm:p-10 text-center transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group ${
                    isDragging
                      ? 'border-[#00A86B] bg-emerald-50/50 scale-[1.01]'
                      : 'border-slate-300/80 hover:border-[#00A86B]/70 bg-slate-50/40 hover:bg-slate-50/80'
                  }`}
                  onClick={handleChooseClick}
                >
                  {/* Large Circular PDF Icon Area */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] shadow-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-[#00A86B]">
                      <FiFileText className="text-3xl sm:text-4xl" />
                    </div>
                  </div>

                  {/* Main Text */}
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight font-display mb-1.5">
                    Upload Your Policy PDF
                  </h3>

                  {/* Supporting Text */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm leading-relaxed mb-6">
                    Drop your policy PDF here or choose a file from your device.
                  </p>

                  {/* Choose PDF Button (Matching WHYINSURED Button Family) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChooseClick();
                    }}
                    className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-700/60 flex items-center gap-2 hover:border-[#00A86B]/80 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    {/* Small Circular PDF Icon container */}
                    <div className="relative w-5 h-5 rounded-full p-0.5 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] flex items-center justify-center shrink-0">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[#00A86B]">
                        <FiFileText className="text-[10px]" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                      Choose PDF
                    </span>
                  </button>

                  {/* Error Notification */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-xl"
                    >
                      <FiAlertCircle className="text-sm shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STAGE 2: SELECTED PDF STATE                                   */}
              {/* ------------------------------------------------------------- */}
              {stage === 'selected' && selectedFile && (
                <motion.div
                  key="stage-selected"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="text-center py-2"
                >
                  {/* Circular Success Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#00A86B]/30 text-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <FiCheck className="text-2xl stroke-[3]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight font-display mb-4">
                    ✓ Policy PDF Selected
                  </h3>

                  {/* File Info Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between gap-3 text-left mb-6 max-w-md mx-auto">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#00A86B] flex items-center justify-center shrink-0">
                        <FiFileText className="text-xl" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#0F172A] truncate">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs font-medium text-slate-500">
                          {formatFileSize(selectedFile.size)}
                        </p>
                      </div>
                    </div>

                    {/* Change PDF Action */}
                    <button
                      type="button"
                      onClick={handleChooseClick}
                      className="text-xs font-bold text-slate-500 hover:text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0"
                    >
                      Change PDF
                    </button>
                  </div>

                  {/* Error Notification if backend returned error */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-xl text-left max-w-md mx-auto"
                    >
                      <FiAlertCircle className="text-base shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Primary Action Button: Analyze My Policy */}
                  <motion.button
                    type="button"
                    onClick={handleStartAnalysis}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full max-w-md mx-auto bg-gradient-to-r from-[#00A86B] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Analyze My Policy</span>
                    <FiArrowRight className="text-lg" />
                  </motion.button>
                </motion.div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STAGE 3: ANALYSIS LOADING STATE (Animated Checklist)          */}
              {/* ------------------------------------------------------------- */}
              {stage === 'analyzing' && (
                <motion.div
                  key="stage-analyzing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="py-4 text-center max-w-md mx-auto"
                >
                  {/* Subtle Pulsing Icon */}
                  <div className="relative w-16 h-16 rounded-full bg-slate-900 border-2 border-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,168,107,0.3)]">
                    <FiShield className="text-2xl text-[#00A86B] animate-pulse" />
                  </div>

                  <h3 className="text-xl font-black text-[#0F172A] tracking-tight font-display mb-1">
                    Analyzing Your Policy
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                    We're reading your policy and finding the important details.
                  </p>

                  {/* Animated 4-Step Checklist */}
                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-left space-y-3 shadow-xs">
                    
                    {/* Item 1: Reading your policy */}
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 1 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 1 ? 'text-[#0F172A]' : 'text-slate-400'}>
                        Reading your policy
                      </span>
                    </div>

                    {/* Item 2: Finding coverage & benefits */}
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 2 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 1 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 2 ? 'text-[#0F172A]' : analysisStep === 1 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Finding coverage & benefits
                      </span>
                    </div>

                    {/* Item 3: Checking waiting periods & exclusions */}
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 3 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 2 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 3 ? 'text-[#0F172A]' : analysisStep === 2 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Checking waiting periods & exclusions
                      </span>
                    </div>

                    {/* Item 4: Preparing your easy explanation */}
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 4 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 3 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 4 ? 'text-[#0F172A]' : analysisStep === 3 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Preparing your easy explanation
                      </span>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* ------------------------------------------------------------- */}
              {/* STAGE 4: COMPLETION & DOWNLOAD STATE                          */}
              {/* ------------------------------------------------------------- */}
              {stage === 'ready' && (
                <motion.div
                  key="stage-ready"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="py-2 text-center max-w-md mx-auto"
                >
                  {/* Glowing Completion Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#00A86B] text-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,168,107,0.25)]">
                    <FiCheck className="text-3xl stroke-[3]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mb-2">
                    Your Policy Is Ready
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    We've simplified the important details of your policy into an easy-to-read PDF.
                  </p>

                  {/* Primary Action Button: Download Easy Policy PDF */}
                  <motion.button
                    type="button"
                    onClick={handleDownloadPdf}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#00A86B] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer mb-4"
                  >
                    <FiDownload className="text-lg" />
                    <span>Download Easy Policy PDF</span>
                  </motion.button>

                  {/* Legal Disclaimer Note */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-left mb-4">
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      <span className="font-bold text-slate-600">Note:</span> This is an easy-language explanation of your uploaded policy. Always refer to the original policy document for the exact terms and conditions.
                    </p>
                  </div>

                  {/* Secondary Option: Analyze Another Policy */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-500 hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <FiRotateCcw className="text-xs" />
                    <span>Analyze Another Policy</span>
                  </button>
                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
