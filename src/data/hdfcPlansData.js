// =============================================================================
// HDFC ERGO PLANS INDEPENDENT DATA CONFIGURATION (OPTIMA SECURE+)
// 1. Optima Secure+          → hdfc-optima-secure-plus
//
// Centralized in optimaSecurePlusData.js
// =============================================================================

import { resolveHdfcPlanId, HDFC_CANONICAL_PLAN_IDS } from './hdfcPlanRegistry.js';
import { optimaSecurePlusData } from './optimaSecurePlusData.js';

export const HDFC_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: OPTIMA SECURE+ (CENTRALIZED IN optimaSecurePlusData.js)
  // ===========================================================================
  'hdfc-optima-secure-plus': optimaSecurePlusData
};

/**
 * Retrieve plan-specific data for HDFC ERGO Optima Secure+.
 */
export const getHdfcPlanData = (planId) => {
  const canonicalId = resolveHdfcPlanId(planId);
  return HDFC_PLANS_DATA[canonicalId] || optimaSecurePlusData;
};

/** All registered canonical plan IDs (for validation & listing) */
export { HDFC_CANONICAL_PLAN_IDS };
