import React from 'react';
import AiChatAssistant from './AiChatAssistant';
import UploadPolicyButton from './UploadPolicyButton';

/**
 * FloatingActions Component
 * 
 * Single fixed parent container on the bottom-right of the viewport.
 * Vertically stacks the two independent action buttons:
 * 1. Chat with WHYINSURED (top)
 * 2. Upload Your Policy (bottom)
 * 
 * Responsive layout:
 * - Mobile (<640px): bottom-2.5 right-3 gap-2 (moved downward for clean separation from hero buttons)
 * - Desktop (>=640px): bottom-6 right-6 gap-3 (exact desktop layout preserved)
 */
export default function FloatingActions() {
  return (
    <div
      id="whyinsured-floating-actions"
      className="fixed right-3 bottom-2.5 sm:right-6 sm:bottom-6 z-[90] flex flex-col items-end gap-2 sm:gap-3 pointer-events-none select-none"
    >
      {/* 1. Chat with WHYINSURED Button (Top) */}
      <AiChatAssistant />

      {/* 2. Upload Your Policy Button (Bottom) */}
      <UploadPolicyButton />
    </div>
  );
}
