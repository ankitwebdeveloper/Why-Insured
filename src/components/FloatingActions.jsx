import React from 'react';
import AiChatAssistant from './AiChatAssistant';
import UploadPolicyButton from './UploadPolicyButton';

/**
 * FloatingActions Component
 * 
 * Single fixed parent container on the bottom-right of the viewport.
 * Vertically stacks the two independent action buttons with a strict 12px gap:
 * 1. Chat with WHYINSURED (top)
 * 2. Upload Your Policy (bottom)
 * 
 * Controls all position coordinates so buttons NEVER overlap on any screen size.
 */
export default function FloatingActions() {
  return (
    <div
      id="whyinsured-floating-actions"
      className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-[90] flex flex-col items-end gap-3 pointer-events-none select-none"
    >
      {/* 1. Chat with WHYINSURED Button (Top) */}
      <AiChatAssistant />

      {/* 2. Upload Your Policy Button (Bottom) */}
      <UploadPolicyButton />
    </div>
  );
}
