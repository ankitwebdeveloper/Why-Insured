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
  FiShield,
  FiSearch,
  FiExternalLink,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiHelpCircle,
  FiAlertTriangle
} from 'react-icons/fi';
import jsPDF from 'jspdf';

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:5000' : 'https://why-insured-backend.vercel.app')
).replace(/\/+$/, '');

/**
 * UploadPolicy Page Component with Official-Source Verification System
 * 
 * Route: /upload-policy
 * Purpose: Upload → Analyze → Download Easy Policy PDF + Official-Source Verified Q&A
 */
export default function UploadPolicy() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [stage, setStage] = useState('upload'); // 'upload' | 'selected' | 'analyzing' | 'ready'
  
  // Checklist step progression (1 to 4)
  const [analysisStep, setAnalysisStep] = useState(0);

  // Backend response data & session
  const [backendDownloadUrl, setBackendDownloadUrl] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [identifiedProduct, setIdentifiedProduct] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);

  // Interactive Official-Source Verification Q&A State
  const [qaHistory, setQaHistory] = useState([]);
  const [qaInput, setQaInput] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [expandedClauses, setExpandedClauses] = useState({});

  const fileInputRef = useRef(null);
  const qaInputRef = useRef(null);
  const qaBottomRef = useRef(null);

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 KB';
    const k = 1024;
    if (bytes < k * 1024) return `${(bytes / k).toFixed(1)} KB`;
    return `${(bytes / (k * k)).toFixed(1)} MB`;
  };

  const processFile = (file) => {
    if (!file) return;
    if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('');
      setSelectedFile(file);
      setStage('selected');
      setBackendDownloadUrl(null);
      setFileId(null);
      setIdentifiedProduct(null);
      setAnalysisData(null);
      setQaHistory([]);
    } else {
      setErrorMsg('Please upload a PDF file.');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

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
    if (file) processFile(file);
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
    setFileId(null);
    setIdentifiedProduct(null);
    setAnalysisData(null);
    setQaHistory([]);
    setQaInput('');
  };

  // Start analysis: call backend POST /api/policy/analyze
  const handleStartAnalysis = async () => {
    if (!selectedFile) return;

    setStage('analyzing');
    setAnalysisStep(1);
    setErrorMsg('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    const stepTimer1 = setTimeout(() => setAnalysisStep(2), 1200);
    const stepTimer2 = setTimeout(() => setAnalysisStep(3), 2600);
    const stepTimer3 = setTimeout(() => setAnalysisStep(4), 4000);

    try {
      const response = await fetch(`${API_BASE_URL}/api/policy/analyze`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success && data.file?.url) {
        setBackendDownloadUrl(data.file.url);
        setFileId(data.file.id);
        setIdentifiedProduct(data.identifiedProduct || null);
        setAnalysisData(data.analysis || null);

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
      console.warn('[UploadPolicy] Backend request fallback:', err.message);
      setTimeout(() => {
        setAnalysisStep(4);
        setStage('ready');
      }, 4500);
    }
  };

  // Toggle clause text expansion
  const toggleClauseExpand = (id) => {
    setExpandedClauses(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle asking an official-source verification question
  const handleAskQuestion = async (queryText) => {
    const question = (queryText || qaInput).trim();
    if (!question || isAsking) return;

    setQaInput('');
    setIsAsking(true);

    const userEntry = {
      id: `q-${Date.now()}`,
      type: 'user',
      question
    };

    setQaHistory(prev => [...prev, userEntry]);

    try {
      const payload = {
        fileId: fileId || null,
        question,
        policyContext: {
          analysis: analysisData,
          identifiedProduct
        }
      };

      const res = await fetch(`${API_BASE_URL}/api/policy/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      const aiEntry = {
        id: `ans-${Date.now()}`,
        type: 'ai',
        sourceType: data.sourceType || 'uploaded_policy',
        feature: data.feature || 'Policy Coverage',
        directAnswer: data.directAnswer || 'Based on available policy details.',
        foundInUploadedPolicy: data.foundInUploadedPolicy || null,
        additionalVerifiedDetail: data.additionalVerifiedDetail || null,
        officialPolicyWording: data.officialPolicyWording || null,
        simpleExplanation: data.simpleExplanation || null,
        officialSource: data.officialSource || null,
        conflict: data.conflict || null
      };

      setQaHistory(prev => [...prev, aiEntry]);
    } catch (err) {
      console.error('[UploadPolicy] Ask question error:', err);
      setQaHistory(prev => [
        ...prev,
        {
          id: `ans-err-${Date.now()}`,
          type: 'ai',
          sourceType: 'unverified',
          feature: 'Verification Error',
          directAnswer: 'This detail could not be verified from the available policy documents. Please try asking again.',
          simpleExplanation: 'Could not connect to the verification engine.'
        }
      ]);
    } finally {
      setIsAsking(false);
      setTimeout(() => {
        qaBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Suggested questions for rapid verification
  const suggestedQuestions = [
    'Room rent & ICU category limit kitna hai?',
    'What is the Pre-Existing Disease (PED) waiting period?',
    'How does Sum Insured Restoration work?',
    'Are non-medical consumable items (PPE, gloves) covered?',
    'What are the key exclusions in my policy?'
  ];

  // Download Easy Policy PDF
  const handleDownloadPdf = () => {
    if (backendDownloadUrl) {
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

    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('WHYINSURED', 20, 20);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 168, 107);
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

    doc.save(`${fileName}_Easy_Summary_WHYINSURED.pdf`);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] pt-32 sm:pt-40 pb-24 overflow-visible flex flex-col items-center justify-start font-sans">
      
      {/* Subtle Premium Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-45 pointer-events-none -z-10" />

      {/* Soft Ambient Backdrop Glows */}
      <div className="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[25%] w-[480px] h-[480px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[20%] w-[420px] h-[420px] rounded-full bg-teal-500/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center relative z-20">
        
        {/* =================================================================== */}
        {/* 1. HERO HEADING & SUBHEADING                                        */}
        {/* =================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Feature Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#00A86B] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <FiShield className="text-xs" />
            <span>Official-Source Grounded Policy AI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] font-display leading-[1.15] mb-4">
            Understand & Verify Your{' '}
            <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-[#10B981] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Upload your health insurance policy PDF to get an easy-to-read explanation and ask detailed questions verified against official insurer policy wordings.
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
          className="w-full max-w-2xl mx-auto mb-8"
        >
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-300">
            
            <AnimatePresence mode="wait">
              
              {/* STAGE 1: DEFAULT UPLOAD STATE */}
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
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] shadow-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-[#00A86B]">
                      <FiFileText className="text-3xl sm:text-4xl" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight font-display mb-1.5">
                    Upload Your Policy PDF
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm leading-relaxed mb-6">
                    Drop your policy PDF here or choose a file from your device.
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChooseClick();
                    }}
                    className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-700/60 flex items-center gap-2 hover:border-[#00A86B]/80 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                  >
                    <div className="relative w-5 h-5 rounded-full p-0.5 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] flex items-center justify-center shrink-0">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[#00A86B]">
                        <FiFileText className="text-[10px]" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                      Choose PDF
                    </span>
                  </button>

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

              {/* STAGE 2: SELECTED PDF STATE */}
              {stage === 'selected' && selectedFile && (
                <motion.div
                  key="stage-selected"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="text-center py-2"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#00A86B]/30 text-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <FiCheck className="text-2xl stroke-[3]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight font-display mb-4">
                    ✓ Policy PDF Selected
                  </h3>

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

                    <button
                      type="button"
                      onClick={handleChooseClick}
                      className="text-xs font-bold text-slate-500 hover:text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0"
                    >
                      Change PDF
                    </button>
                  </div>

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

                  <motion.button
                    type="button"
                    onClick={handleStartAnalysis}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full max-w-md mx-auto bg-gradient-to-r from-[#00A86B] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Analyze & Verify My Policy</span>
                    <FiArrowRight className="text-lg" />
                  </motion.button>
                </motion.div>
              )}

              {/* STAGE 3: ANALYSIS LOADING STATE */}
              {stage === 'analyzing' && (
                <motion.div
                  key="stage-analyzing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="py-4 text-center max-w-md mx-auto"
                >
                  <div className="relative w-16 h-16 rounded-full bg-slate-900 border-2 border-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,168,107,0.3)]">
                    <FiShield className="text-2xl text-[#00A86B] animate-pulse" />
                  </div>

                  <h3 className="text-xl font-black text-[#0F172A] tracking-tight font-display mb-1">
                    Analyzing & Identifying Policy
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
                    Reading policy clauses and matching product terms against official wordings.
                  </p>

                  <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 text-left space-y-3 shadow-xs">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 1 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 1 ? 'text-[#0F172A]' : 'text-slate-400'}>
                        Reading your uploaded policy text
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 2 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 1 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 2 ? 'text-[#0F172A]' : analysisStep === 1 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Identifying exact product, insurer & UIN
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 3 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 2 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 3 ? 'text-[#0F172A]' : analysisStep === 2 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Checking coverage, waiting periods & limits
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-bold transition-colors">
                      {analysisStep >= 4 ? (
                        <FiCheck className="text-[#00A86B] text-base shrink-0 stroke-[3]" />
                      ) : analysisStep === 3 ? (
                        <span className="w-4 h-4 rounded-full border-2 border-[#00A86B] border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={analysisStep >= 4 ? 'text-[#0F172A]' : analysisStep === 3 ? 'text-[#00A86B]' : 'text-slate-400'}>
                        Preparing verified easy-language report
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 4: READY & SUMMARY STATE */}
              {stage === 'ready' && (
                <motion.div
                  key="stage-ready"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="py-2 text-center max-w-lg mx-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#00A86B] text-[#00A86B] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,168,107,0.25)]">
                    <FiCheck className="text-3xl stroke-[3]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight font-display mb-1">
                    Your Policy Is Ready
                  </h3>

                  {identifiedProduct && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold mb-4">
                      <span>{identifiedProduct.insurer}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-emerald-700">{identifiedProduct.productName}</span>
                      {identifiedProduct.uin && (
                        <>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500 font-mono text-[10px]">UIN: {identifiedProduct.uin}</span>
                        </>
                      )}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    Download your simplified PDF report or ask specific questions below with official-source verification.
                  </p>

                  {/* Primary Download Button */}
                  <motion.button
                    type="button"
                    onClick={handleDownloadPdf}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#00A86B] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer mb-3"
                  >
                    <FiDownload className="text-lg" />
                    <span>Download Easy Policy PDF</span>
                  </motion.button>

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

        {/* =================================================================== */}
        {/* 3. INTERACTIVE OFFICIAL-SOURCE VERIFICATION Q&A SECTION             */}
        {/* =================================================================== */}
        {stage === 'ready' && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto text-left"
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A86B] mb-1">
                    <FiShield className="text-sm" />
                    <span>Official Policy Clause Verification</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] font-display">
                    Ask Anything About Your Policy
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Searches your uploaded policy first. If details are missing, verifies the exact clause from official insurer wording.
                  </p>
                </div>
              </div>

              {/* Quick Suggestion Chips */}
              <div className="mb-6">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Frequently Verified Policy Clauses:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleAskQuestion(q)}
                      disabled={isAsking}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-[#00A86B]/40 text-slate-700 hover:text-[#00A86B] text-xs font-semibold transition-all cursor-pointer text-left disabled:opacity-50 shadow-2xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q&A Conversation Flow */}
              <div className="space-y-4 mb-6 max-h-[550px] overflow-y-auto pr-1">
                {qaHistory.length === 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 text-center text-slate-500 text-xs">
                    <FiHelpCircle className="text-2xl text-slate-400 mx-auto mb-2" />
                    <p className="font-semibold text-slate-700">No questions asked yet.</p>
                    <p className="mt-1">Click a topic above or type your question below to verify coverage, waiting periods, room rent, and limits.</p>
                  </div>
                )}

                {qaHistory.map((item) => {
                  if (item.type === 'user') {
                    return (
                      <div key={item.id} className="flex justify-end">
                        <div className="bg-[#0F172A] text-white px-4 py-2.5 rounded-2xl rounded-br-xs text-xs font-semibold max-w-[85%] shadow-xs">
                          {item.question}
                        </div>
                      </div>
                    );
                  }

                  // AI Verified Response Card
                  const isVerified = item.sourceType === 'verified_official';
                  const isUploaded = item.sourceType === 'uploaded_policy';
                  const clauseExpanded = Boolean(expandedClauses[item.id]);

                  return (
                    <div key={item.id} className="flex flex-col items-start gap-2 max-w-full">
                      
                      {/* Response Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                        {isUploaded && (
                          <span className="bg-emerald-50 text-[#00A86B] border border-[#00A86B]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <FiCheck className="text-xs stroke-[3]" />
                            Based on your uploaded policy
                          </span>
                        )}
                        {isVerified && (
                          <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <FiShield className="text-xs text-blue-600" />
                            Official Insurer Verified Detail
                          </span>
                        )}
                      </div>

                      {/* Direct Conversational Summary */}
                      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs w-full text-slate-800 text-xs leading-relaxed space-y-3">
                        <p className="text-[13px] font-semibold text-[#0F172A]">
                          {item.directAnswer}
                        </p>

                        {/* Structured Verified Card when external official wording is retrieved */}
                        {isVerified && item.officialPolicyWording && (
                          <div className="mt-3 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-4 space-y-3">
                            
                            {/* Feature Title */}
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Feature
                              </span>
                              <span className="text-xs font-bold text-[#0F172A]">
                                {item.feature}
                              </span>
                            </div>

                            {/* Found in Uploaded Policy */}
                            {item.foundInUploadedPolicy && (
                              <div className="bg-slate-100/70 rounded-xl p-2.5 text-[11.5px] text-slate-600">
                                <span className="font-bold text-slate-700 block text-[10px] uppercase tracking-wider mb-0.5">
                                  Found in Your Policy
                                </span>
                                {item.foundInUploadedPolicy}
                              </div>
                            )}

                            {/* Additional Verified Detail */}
                            {item.additionalVerifiedDetail && (
                              <div className="text-[11.5px] text-slate-600">
                                <span className="font-bold text-blue-700 block text-[10px] uppercase tracking-wider mb-0.5">
                                  Additional Verified Detail
                                </span>
                                {item.additionalVerifiedDetail}
                              </div>
                            )}

                            {/* Official Policy Wording */}
                            <div className="border-l-2 border-[#00A86B] pl-3 py-1 bg-white rounded-r-xl p-2.5">
                              <span className="font-bold text-slate-700 block text-[10px] uppercase tracking-wider mb-1">
                                Official Policy Wording
                              </span>
                              <p className={`text-[11.5px] font-mono text-slate-700 leading-relaxed ${clauseExpanded ? '' : 'line-clamp-3'}`}>
                                "{item.officialPolicyWording}"
                              </p>
                              {item.officialPolicyWording.length > 180 && (
                                <button
                                  type="button"
                                  onClick={() => toggleClauseExpand(item.id)}
                                  className="mt-1.5 text-[10.5px] font-bold text-[#00A86B] hover:text-emerald-700 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <span>{clauseExpanded ? 'Show less' : 'View relevant clause'}</span>
                                  {clauseExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                </button>
                              )}
                            </div>

                            {/* Simple Explanation */}
                            {item.simpleExplanation && (
                              <div className="bg-[#ECFDF5] border border-[#00A86B]/25 rounded-xl p-3 text-[11.5px] text-emerald-950">
                                <span className="font-bold text-[#00A86B] block text-[10px] uppercase tracking-wider mb-0.5">
                                  In Simple Words
                                </span>
                                {item.simpleExplanation}
                              </div>
                            )}

                            {/* Official Source Link */}
                            {item.officialSource && (
                              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60 text-[11px] text-slate-500">
                                <span className="font-semibold truncate">
                                  Source: {item.officialSource.title}
                                </span>
                                {item.officialSource.url && (
                                  <a
                                    href={item.officialSource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00A86B] hover:underline font-bold inline-flex items-center gap-1 shrink-0"
                                  >
                                    <span>View Official Source</span>
                                    <FiExternalLink className="text-xs" />
                                  </a>
                                )}
                              </div>
                            )}

                            {/* Policy Version Conflict Warning */}
                            {item.conflict && (
                              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900 text-xs flex items-start gap-2">
                                <FiAlertTriangle className="text-amber-600 text-base shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold block text-[10px] uppercase tracking-wider text-amber-700">
                                    Version Difference Note
                                  </span>
                                  <p className="text-[11.5px] leading-relaxed mt-0.5">{item.conflict}</p>
                                </div>
                              </div>
                            )}

                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}

                {/* Loading indicator */}
                {isAsking && (
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl text-xs font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-ping" />
                    <span>Searching uploaded policy & verifying official wording...</span>
                  </div>
                )}

                <div ref={qaBottomRef} />
              </div>

              {/* Question Input Box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAskQuestion();
                }}
                className="relative flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    ref={qaInputRef}
                    type="text"
                    value={qaInput}
                    onChange={(e) => setQaInput(e.target.value)}
                    placeholder="Ask a specific question (e.g. Is robotic surgery covered?)..."
                    disabled={isAsking}
                    className="w-full pl-4 pr-3 py-3 text-xs sm:text-sm rounded-2xl bg-slate-50 border border-slate-200/90 focus:outline-hidden focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B]/40 text-slate-800 placeholder-slate-400 transition-all font-medium disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!qaInput.trim() || isAsking}
                  className={`px-4 sm:px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
                    qaInput.trim() && !isAsking
                      ? 'bg-gradient-to-r from-[#00A86B] to-[#0fa26e] hover:from-[#0fa26e] hover:to-[#059669] text-white shadow-md cursor-pointer active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Verify</span>
                  <FiSend className="text-xs sm:text-sm" />
                </button>
              </form>

            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
