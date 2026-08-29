import React, { useState } from 'react';
import { FiDownload, FiShare2, FiCheck, FiLoader, FiAlertCircle } from 'react-icons/fi';
import { downloadAndSharePolicyBenefitsPDF } from '../utils/policyBenefitsPdfGenerator';

export default function PolicyBenefitsPdfActions({ company, plan, featuresSections = [] }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [stepStatus, setStepStatus] = useState('idle'); // 'idle' | 'generating' | 'downloading' | 'downloaded' | 'sharing' | 'done'
  const [toastMsg, setToastMsg] = useState(null);
  const [toastType, setToastType] = useState('success');

  const primaryColor = company?.theme?.primary || '#0038A8';

  const showToast = (msg, type = 'success') => {
    setToastMsg(msg);
    setToastType(type);
    setTimeout(() => {
      setToastMsg(null);
    }, 4000);
  };

  const handleDownloadAndShare = async (e) => {
    e.preventDefault();
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      setStepStatus('generating');

      const res = await downloadAndSharePolicyBenefitsPDF(
        company,
        plan,
        featuresSections,
        (progressStep) => {
          setStepStatus(progressStep);
        }
      );

      setStepStatus('done');

      if (res?.shared) {
        showToast('PDF downloaded & shared successfully!', 'success');
      } else {
        showToast('PDF downloaded successfully', 'success');
      }

      setTimeout(() => {
        setStepStatus('idle');
      }, 3500);
    } catch (err) {
      console.error('Failed to download & share PDF:', err);
      showToast('Failed to generate PDF. Please try again.', 'error');
      setStepStatus('idle');
    } finally {
      setIsProcessing(false);
    }
  };

  const getButtonContent = () => {
    switch (stepStatus) {
      case 'generating':
        return (
          <>
            <FiLoader className="text-xs sm:text-sm animate-spin text-[var(--btn-primary)] shrink-0" />
            <span className="truncate">Generating PDF...</span>
          </>
        );
      case 'downloading':
        return (
          <>
            <FiLoader className="text-xs sm:text-sm animate-spin text-[var(--btn-primary)] shrink-0" />
            <span className="truncate">Downloading PDF...</span>
          </>
        );
      case 'downloaded':
        return (
          <>
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <FiCheck className="text-xs stroke-[2.5]" />
            </div>
            <span className="truncate text-emerald-600 font-bold">Download Completed</span>
          </>
        );
      case 'sharing':
        return (
          <>
            <FiShare2 className="text-xs sm:text-sm animate-pulse text-[var(--btn-primary)] shrink-0" />
            <span className="truncate">Opening Share...</span>
          </>
        );
      case 'done':
        return (
          <>
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <FiCheck className="text-xs stroke-[2.5]" />
            </div>
            <span className="truncate text-emerald-600 font-bold">PDF Downloaded Successfully</span>
          </>
        );
      default:
        return (
          <>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 group-hover:bg-[#F0F4FF] flex items-center justify-center text-slate-500 group-hover:text-[var(--btn-primary)] transition-colors shrink-0">
              <FiDownload className="text-[11px] sm:text-xs stroke-[2.5]" />
            </div>
            <span className="truncate">Download & Share PDF</span>
          </>
        );
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-3 sm:my-4 select-none relative z-20">
      {/* SINGLE UNIFIED ACTION BUTTON: DOWNLOAD & SHARE PDF */}
      <div className="flex items-center justify-center w-full max-w-sm px-2">
        <button
          type="button"
          onClick={handleDownloadAndShare}
          disabled={isProcessing}
          style={{ '--btn-primary': primaryColor }}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-white text-slate-800 border border-slate-300/80 hover:border-[var(--btn-primary)] hover:text-[var(--btn-primary)] hover:bg-slate-50/80 active:scale-[0.98] shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer text-[11px] sm:text-xs font-black uppercase tracking-wider font-display disabled:opacity-75 disabled:cursor-not-allowed group"
          title="Download the official Policy Benefits PDF and open share sheet"
        >
          {getButtonContent()}
        </button>
      </div>

      {/* Floating Status Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-slate-900/95 text-white text-xs font-bold shadow-2xl border border-slate-700/80 flex items-center gap-2 backdrop-blur-md transition-all animate-bounce">
          {toastType === 'error' ? (
            <FiAlertCircle className="text-rose-400 text-sm shrink-0" />
          ) : (
            <FiCheck className="text-emerald-400 text-sm shrink-0" />
          )}
          <span className="truncate max-w-xs">{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
