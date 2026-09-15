import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSend,
  FiX,
  FiRotateCcw,
  FiArrowRight,
  FiCheck,
  FiShield
} from 'react-icons/fi';
import aiAvatarImg from '../assets/ai_advisor_avatar.jpg';
import { sendUserRequirementToAi } from '../services/aiChatService';

export default function AiChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-initial',
      sender: 'ai',
      text: "Hi! 👋 I’m your WHYINSURED Advisor. Think of me as your insurance friend — you can ask me anything about health insurance, and I’ll help you understand what’s right for you.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      recommendations: []
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input when opened
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen, messages, isTyping]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (!hasOpenedBefore) {
      setHasOpenedBefore(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'ai',
        text: "Hi! 👋 I’m your WHYINSURED Advisor. Think of me as your insurance friend — you can ask me anything about health insurance, and I’ll help you understand what’s right for you.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendations: []
      }
    ]);
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    setInputValue('');

    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Fetch AI response
      const response = await sendUserRequirementToAi(query, messages);

      const aiResponse = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        recommendations: response.recommendations || [],
        suggestions: response.suggestions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('AI chat error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: 'Sorry, I encountered a temporary issue while fetching recommendations. Please try asking again!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING AI BUTTON & SPEECH BUBBLE (#00A86B GREEN THEME)               */}
      {/* ========================================================================= */}
      <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[90] flex flex-col items-end pointer-events-none select-none">
        
        {/* Speech Bubble "Chat with AI" — visible when chat is closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.3 }}
              className="pointer-events-auto mb-2 mr-1 cursor-pointer group"
              onClick={handleToggle}
            >
              <div className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white px-3.5 py-1.5 rounded-2xl shadow-xl border border-slate-700/60 flex items-center gap-2 hover:border-[#00A86B]/80 transition-all hover:scale-[1.03]">
                {/* Subtle pulsing AI Sparkle with #00A86B Accent */}
                <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse shrink-0 shadow-[0_0_8px_#00A86B]" />
                <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
                  <span>Chat with AI</span>
                </span>
                
                {/* Speech Bubble Downward Arrow Pointer */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1E293B] rotate-45 border-r border-b border-slate-700/60" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular AI Avatar Button with #00A86B Theme */}
        <motion.button
          type="button"
          onClick={handleToggle}
          aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl p-0.5 bg-gradient-to-tr from-[#00A86B] via-[#0fa26e] to-[#0F172A] focus:outline-hidden transition-all duration-300 cursor-pointer group"
        >
          {/* Subtle Ambient Pulsing Glow Ring in #00A86B */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A86B]/60 to-[#0fa26e]/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

          {/* Button Content Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white flex items-center justify-center">
            {isOpen ? (
              <div className="w-full h-full bg-[#00A86B] text-white flex items-center justify-center">
                <FiX className="text-2xl transition-transform duration-200 group-hover:rotate-90" />
              </div>
            ) : (
              <img
                src={aiAvatarImg}
                alt="WHYINSURED AI Health Advisor"
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          {/* Online Status Dot Indicator */}
          {!isOpen && (
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#00A86B] border-2 border-white rounded-full shadow-sm">
              <span className="absolute inset-0 rounded-full bg-[#00A86B] animate-ping opacity-75" />
            </span>
          )}
        </motion.button>
      </div>

      {/* ========================================================================= */}
      {/* 2. FLOATING AI CHAT PANEL (#00A86B GREEN ACCENTS + CLEAN LIGHT UI)       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[95] right-3 sm:right-6 bottom-20 sm:bottom-24 w-[calc(100vw-24px)] sm:w-[410px] h-[580px] max-h-[82vh] bg-[#F8FAFC] rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col font-sans"
          >
            {/* Top Soft Green Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none bg-[#00A86B]" />

            {/* =================================================================== */}
            {/* CHAT HEADER (#00A86B Accents + WHYINSURED Clean Style)             */}
            {/* =================================================================== */}
            <div className="relative bg-white/95 backdrop-blur-md px-4 py-3.5 border-b border-slate-200/80 z-10 shrink-0 shadow-xs">
              <div className="flex items-center justify-between gap-3">
                {/* AI Avatar & Title */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#00A86B]/40 shrink-0 shadow-xs">
                    <img
                      src={aiAvatarImg}
                      alt="AI Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00A86B] rounded-full border border-white" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-sm font-black text-[#0F172A] tracking-tight font-display leading-tight">
                        AI Assistant
                      </h3>
                      <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#00A86B] border border-[#00A86B]/25">
                        WHYINSURED
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 truncate leading-tight mt-0.5">
                      Find the right health insurance for your needs
                    </p>
                  </div>
                </div>

                {/* Header Actions: Reset & Close */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleResetChat}
                    className="w-8 h-8 rounded-full text-slate-400 hover:text-[#00A86B] hover:bg-[#ECFDF5] flex items-center justify-center text-sm transition-colors cursor-pointer"
                    title="Restart conversation"
                    aria-label="Restart conversation"
                  >
                    <FiRotateCcw className="text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00A86B] text-slate-500 hover:text-white flex items-center justify-center text-base transition-colors cursor-pointer"
                    title="Close Chat"
                    aria-label="Close Chat"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              {/* Green Signature Underline Pill */}
              <div className="w-10 h-0.5 bg-[#00A86B] rounded-full mt-2.5" />
            </div>

            {/* =================================================================== */}
            {/* CHAT MESSAGES CONTAINER                                            */}
            {/* =================================================================== */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs relative z-10 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {/* Message Bubble */}
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 sm:p-3.5 shadow-2xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0F172A] text-white rounded-br-xs border border-slate-800'
                        : 'bg-white text-slate-800 rounded-bl-xs border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    {/* Message Text with bold/formatting support */}
                    <div className="font-normal text-[12px] sm:text-[12.5px] space-y-1">
                      {msg.text.split('\n').map((paragraph, pIdx) => {
                        // Render strong highlights
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={pIdx}>
                            {parts.map((part, partIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={partIdx} className={msg.sender === 'user' ? 'text-white font-extrabold' : 'text-[#0F172A] font-extrabold'}>
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </p>
                        );
                      })}
                    </div>

                    <div
                      className={`text-[9px] mt-1.5 text-right font-medium ${
                        msg.sender === 'user' ? 'text-slate-400' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Policy Recommendation Cards (Rendered inside AI responses) */}
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="w-full mt-2.5 space-y-2.5">
                      <div className="flex items-center gap-1.5 px-1 text-[11px] font-black uppercase tracking-wider text-slate-600 font-display">
                        <FiShield className="text-[#00A86B]" />
                        <span>Recommended Policy Matches</span>
                      </div>

                      {msg.recommendations.map((policy) => (
                        <div
                          key={policy.planId}
                          className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#00A86B]/50 p-3 sm:p-3.5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                        >
                          {/* Top Accent Indicator in #00A86B */}
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A86B] via-[#0fa26e] to-transparent" />

                          {/* Card Top: Logo & Title */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <img
                                src={policy.logo}
                                alt={policy.companyName}
                                className="w-10 h-7 object-contain rounded bg-slate-50 p-0.5 border border-slate-100"
                              />
                              <div>
                                <h4 className="text-xs sm:text-sm font-black text-[#0F172A] font-display leading-tight group-hover:text-[#00A86B] transition-colors">
                                  {policy.name}
                                </h4>
                                <span className="text-[10px] font-semibold text-slate-500">
                                  {policy.companyName}
                                </span>
                              </div>
                            </div>

                            {/* Badge */}
                            <span className="text-[8px] sm:text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#00A86B] border border-[#00A86B]/25 tracking-wide shrink-0">
                              {policy.badge}
                            </span>
                          </div>

                          {/* Coverage range & Match Score */}
                          <div className="mb-2 px-2 py-1 bg-slate-50 rounded-lg flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-700">
                            <span>Sum Insured: <strong className="text-[#0F172A]">{policy.coverage}</strong></span>
                            {policy.matchScore && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#00A86B] border border-[#00A86B]/30">
                                {policy.matchScore}% Match
                              </span>
                            )}
                          </div>

                          {/* Match Reason */}
                          {policy.reason && (
                            <p className="text-[10px] text-slate-500 font-medium leading-tight mb-2 italic">
                              "{policy.reason}"
                            </p>
                          )}

                          {/* Key Highlights Checklist */}
                          <ul className="space-y-1 mb-3 text-[10.5px] text-slate-600">
                            {policy.highlights.slice(0, 3).map((hl, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-1.5">
                                <FiCheck className="text-[#00A86B] font-bold shrink-0 mt-0.5 text-xs" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Button: View Details in #00A86B */}
                          <Link
                            to={policy.link}
                            onClick={handleClose}
                            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#0fa26e] hover:from-[#0fa26e] hover:to-[#059669] text-white font-extrabold text-[11px] uppercase tracking-wider shadow-2xs hover:shadow-sm hover:scale-[1.01] transition-all cursor-pointer select-none active:scale-[0.98]"
                          >
                            <span>View Plan Details</span>
                            <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      ))}

                      {/* Safety / Grounded Policy Disclaimer */}
                      {msg.disclaimer && (
                        <p className="text-[9.5px] text-slate-400 text-center px-1 pt-1 leading-tight">
                          *{msg.disclaimer}
                        </p>
                      )}
                    </div>
                  )}

                </div>
              ))}

              {/* Typing Indicator with #00A86B Accent */}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-white rounded-2xl rounded-bl-xs px-4 py-3 border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#00A86B] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#00A86B] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#00A86B] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[10px] font-bold text-slate-400 ml-1">Analyzing policies...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* =================================================================== */}
            {/* CHAT INPUT FORM (#00A86B Focus & Send Button)                     */}
            {/* =================================================================== */}
            <div className="p-3 bg-white border-t border-slate-200/80 shrink-0 relative z-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tell me what you need (e.g. 15L cover for parents)..."
                    disabled={isTyping}
                    className="w-full pl-3.5 pr-3 py-2.5 text-xs sm:text-[12.5px] rounded-xl bg-slate-50 border border-slate-200/90 focus:outline-hidden focus:border-[#00A86B] focus:ring-1 focus:ring-[#00A86B]/40 text-slate-800 placeholder-slate-400 transition-all font-medium disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    inputValue.trim() && !isTyping
                      ? 'bg-gradient-to-r from-[#00A86B] to-[#0fa26e] hover:from-[#0fa26e] hover:to-[#059669] text-white shadow-md hover:scale-105 active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Send requirement"
                >
                  <FiSend className="text-xs sm:text-sm" />
                </button>
              </form>

              <div className="flex items-center justify-between px-1 mt-1.5 text-[9px] text-slate-400">
                <span>⚡ Instant Policy Recommendations</span>
                <span>Powered by WHYINSURED</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
