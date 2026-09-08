// =============================================================================
// HDFC ERGO PLANS INDEPENDENT DATA CONFIGURATION (OPTIMA SECURE+)
// 1. Optima Secure+          → hdfc-optima-secure-plus
//
// Centralized in optimaSecurePlusData.js
// =============================================================================

import { resolveHdfcPlanId, HDFC_CANONICAL_PLAN_IDS } from './hdfcPlanRegistry.js';
import { optimaSecurePlusData } from './optimaSecurePlusData.js';
import { hdfcEnergyPlanData } from './hdfcEnergyPlanData.js';
import { hdfcMedisureSuperTopUpData } from './hdfcMedisureSuperTopUpData.js';

export const HDFC_PLANS_DATA = {
  // ===========================================================================
  // PLAN 1: OPTIMA SECURE+ (CENTRALIZED IN optimaSecurePlusData.js)
  // ===========================================================================
  'hdfc-optima-secure-plus': optimaSecurePlusData,

  // ===========================================================================
  // PLAN 2: HDFC ERGO ENERGY PLAN (CENTRALIZED IN hdfcEnergyPlanData.js)
  // ===========================================================================
  'hdfc-energy': hdfcEnergyPlanData,

  // ===========================================================================
  // PLAN 3: MEDISURE SUPER TOP-UP (CENTRALIZED IN hdfcMedisureSuperTopUpData.js)
  // ===========================================================================
  'hdfc-medisure-super-topup': hdfcMedisureSuperTopUpData
};

/**
 * Retrieve plan-specific data for HDFC ERGO plans.
 */
export const getHdfcPlanData = (planId) => {
  const canonicalId = resolveHdfcPlanId(planId);
  return HDFC_PLANS_DATA[canonicalId] || optimaSecurePlusData;
};

/** All registered canonical plan IDs (for validation & listing) */
export { HDFC_CANONICAL_PLAN_IDS };
