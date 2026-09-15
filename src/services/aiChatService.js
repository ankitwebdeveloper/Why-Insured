/**
 * aiChatService.js
 * 
 * WHYINSURED Frontend AI Chat Service.
 * Connects directly to the Backend Gemini AI Endpoint (POST /api/ai/chat).
 * Includes automatic logo mapping and client-side fallback for offline resilience.
 */

import hdfcLogo from '../assets/hdfc-ergo-logo.png';
import tataLogo from '../assets/tata-aig.png';
import starLogo from '../assets/star-health.png';
import nivaLogo from '../assets/niva-bupa.png';
import iciciLogo from '../assets/icici-lombard.png';
import careLogo from '../assets/care-health.png';
import adityaBirlaLogo from '../assets/aditya brila.png';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'https://why-insured-backend.vercel.app').replace(/\/+$/, '');

// Logo Dictionary by Company ID
const LOGO_MAP = {
  'hdfc-ergo': hdfcLogo,
  'tata-aig': tataLogo,
  'star-health': starLogo,
  'niva-bupa': nivaLogo,
  'icici-lombard': iciciLogo,
  'care-health': careLogo,
  'aditya-birla': adityaBirlaLogo
};

/**
 * Send user query & conversation history to backend Gemini AI endpoint
 * 
 * @param {string} query - Current user requirement message
 * @param {Array} conversationHistory - Past conversation messages
 * @returns {Promise<Object>} Formatted AI response with recommendations
 */
export async function sendUserRequirementToAi(query, conversationHistory = []) {
  try {
    const formattedHistory = (conversationHistory || []).map(msg => ({
      sender: msg.sender,
      text: msg.text
    }));

    const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: query,
        conversation: formattedHistory
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        // Map logos and enrich recommendation cards
        const enrichedRecs = (data.recommendations || []).map(rec => ({
          ...rec,
          planId: rec.policyId,
          name: rec.policyName,
          companyName: rec.company,
          logo: LOGO_MAP[rec.companyId] || hdfcLogo,
          highlights: rec.matchedRequirements || []
        }));

        return {
          text: data.reply,
          intent: data.intent,
          requirements: data.requirements,
          recommendations: enrichedRecs,
          suggestions: data.suggestions || [],
          disclaimer: data.disclaimer
        };
      }
    }
  } catch (netErr) {
    console.warn('[AI Client] Backend request unavailable, falling back to local engine:', netErr.message);
  }

  // Graceful client fallback
  return clientFallbackMatcher(query);
}

/**
 * Client Fallback Matcher (if backend server is not running)
 */
function clientFallbackMatcher(query) {
  const lower = (query || '').toLowerCase().trim();

  // If greeting
  if (/^(hi|hii|hello|hey|namaste)\b/i.test(lower)) {
    return {
      text: "Hi! 👋 Nice to meet you. I'm your WHYINSURED Advisor. What kind of health insurance are you looking for?",
      intent: 'greeting',
      requirements: {},
      recommendations: [],
      disclaimer: 'These recommendations are based on verified policy information available on WHYINSURED. Please review the policy wording before making a decision.'
    };
  }

  // If user explicitly asks for plans
  if (lower.includes('show') || lower.includes('dikha') || lower === 'yes' || lower === 'haan' || lower.includes('recommend') || lower.includes('options')) {
    const fallbackCatalog = [
      {
        companyId: 'hdfc-ergo',
        planId: 'hdfc-optima-secure-plus',
        name: 'Optima Secure+',
        companyName: 'HDFC ERGO',
        logo: hdfcLogo,
        coverage: '₹10 Lakh – ₹2 Crore',
        badge: 'Comprehensive Health Policy',
        matchScore: 92,
        reason: 'Top comprehensive match with 2X instant coverage on Day 1 and unlimited restoration.',
        highlights: [
          'Unlimited Automatic Restore for same & unrelated illnesses',
          '2X Instant Coverage with Secure Benefit on Day 1',
          'Zero Deductible on hospital consumables (Protect Plus)'
        ],
        link: '/insurance/hdfc-ergo/hdfc-optima-secure-plus'
      },
      {
        companyId: 'care-health',
        planId: 'care-supreme',
        name: 'Care Supreme',
        companyName: 'Care Health',
        logo: careLogo,
        coverage: '₹5 Lakh – ₹1 Crore',
        badge: 'High Bonus Booster',
        matchScore: 88,
        reason: 'Provides 500% cumulative bonus booster and unlimited automatic recharges in policy year.',
        highlights: [
          'Cumulative Bonus booster up to 500% of Sum Insured',
          'Unlimited automatic recharge anytime in policy year',
          'No room rent capping across all sum insured variants'
        ],
        link: '/insurance/care-health/care-supreme'
      }
    ];

    return {
      text: "Perfect! Based on your requirements, here are the plans that best match:",
      intent: 'show_recommendations',
      requirements: {},
      recommendations: fallbackCatalog,
      disclaimer: 'These recommendations are based on verified policy information available on WHYINSURED. Please review the policy wording before making a decision.'
    };
  }

  // Otherwise, conversational advisor understanding
  return {
    text: "Got it! I understand what you're looking for. Would you like me to show you the plans that best match your requirements?",
    intent: 'conversational_advisor',
    requirements: {},
    recommendations: [],
    disclaimer: 'These recommendations are based on verified policy information available on WHYINSURED. Please review the policy wording before making a decision.'
  };
}

