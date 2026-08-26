import React, { useState } from 'react';
import { FiDownload, FiCheck, FiLoader } from 'react-icons/fi';
import { downloadAndSharePolicyBenefitsPDF } from '../utils/policyBenefitsPdfGenerator';

export default function PolicyBenefitsPdfActions({ company, plan, featuresSections = [] }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const primaryColor = company?.theme?.primary || '#0038A8';

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 4000);
  };

  const handleDownloadAndShare = async () => {
    if (isProcessing) return;
    try {
      setIsProcessing(true);
      const res = await downloadAndSharePolicyBenefitsPDF(company, plan, featuresSections);
      
      if (res?.method === 'native-file-share') {
        showToast('PDF shared successfully!');
      } else if (res?.method === 'fallback-download') {
        showToast('PDF downloaded successfully. Sharing not supported on this device.');
      } else if (res?.method === 'user-cancelled') {
        showToast('Share cancelled. PDF is ready to download.');
      } else {
        showToast(`PDF generated: ${res?.filename || 'Policy Benefits'}`);
      }
    } catch (err) {
      console.error('Failed to download/share PDF:', err);
      showToast('Failed to generate PDF. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-3 sm:my-4 select-none relative z-20">
      {/* Single Combined Action Button: DOWNLOAD & SHARE PDF */}
      <div className="flex flex-row items-center justify-center w-full max-w-md px-1">
        <button
          type="button"
          onClick={handleDownloadAndShare}
          disabled={isProcessing}
          style={{ '--btn-primary': primaryColor }}
          className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-slate-800 border border-slate-300/80 hover:border-[var(--btn-primary)] hover:text-[var(--btn-primary)] hover:bg-slate-50/80 active:scale-[0.98] shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer text-[12px] sm:text-xs font-black uppercase tracking-wider font-display disabled:opacity-50 disabled:cursor-not-allowed group"
          title="Download and share the Policy Benefits PDF"
        >
          {isProcessing ? (
            <>
              <FiLoader className="text-xs sm:text-sm animate-spin text-[var(--btn-primary)] shrink-0" />
              <span className="truncate">GENERATING PDF...</span>
            </>
          ) : (
            <>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 group-hover:bg-[#F0F4FF] flex items-center justify-center text-slate-500 group-hover:text-[var(--btn-primary)] transition-colors shrink-0">
                <FiDownload className="text-[10px] sm:text-xs stroke-[2.5]" />
              </div>
              <span className="truncate">↓ DOWNLOAD & SHARE PDF</span>
            </>
          )}
        </button>
      </div>

      {/* Floating Status Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-xl border border-slate-700/80 flex items-center gap-2 backdrop-blur-xs animate-bounce">
          <FiCheck className="text-emerald-400 text-sm shrink-0" />
          <span className="truncate max-w-xs">{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
