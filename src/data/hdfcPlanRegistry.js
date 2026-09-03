// =============================================================================
// HDFC ERGO PLAN REGISTRY — Single source of truth for plan IDs & routing
// Every plan has a unique canonical ID. Legacy URL aliases map to canonical IDs.
// ONE PLAN COMMAND = ONE PLAN CHANGE.
// =============================================================================

/** Canonical plan IDs — use these everywhere for plan-specific data & UI */
export const HDFC_CANONICAL_PLAN_IDS = [
  'hdfc-optima-secure-plus'
];

/** Human-readable plan names keyed by canonical ID */
export const HDFC_PLAN_NAMES = {
  'hdfc-optima-secure-plus': 'Optima Secure+'
};

/**
 * Legacy / alternate URL slugs → canonical plan ID.
 * Strict lookup only.
 */
export const HDFC_PLAN_ID_ALIASES = {
  'optima-secure-plus': 'hdfc-optima-secure-plus',
  'hdfc-optima-secure-plus': 'hdfc-optima-secure-plus',
  'optima-secure': 'hdfc-optima-secure-plus',
  'hdfc-optima-secure': 'hdfc-optima-secure-plus',
  'optima-restore': 'hdfc-optima-secure-plus',
  'hdfc-optima-restore': 'hdfc-optima-secure-plus',
  'energy': 'hdfc-optima-secure-plus',
  'hdfc-energy': 'hdfc-optima-secure-plus',
  'myhealth-medisure': 'hdfc-optima-secure-plus',
  'myhealth-medisure-super-topup': 'hdfc-optima-secure-plus',
  'hdfc-myhealth-medisure-super-topup': 'hdfc-optima-secure-plus'
};

/**
 * Resolve any plan ID (URL slug or legacy alias) to its canonical ID.
 * Defaults to Optima Secure+ for any HDFC route.
 */
export function resolveHdfcPlanId(planId) {
  if (!planId) return 'hdfc-optima-secure-plus';
  const normalized = String(planId).toLowerCase().trim();

  if (HDFC_CANONICAL_PLAN_IDS.includes(normalized)) {
    return normalized;
  }

  return HDFC_PLAN_ID_ALIASES[normalized] ?? 'hdfc-optima-secure-plus';
}

/**
 * Find the plan object from a company's plans array using any valid plan ID.
 */
export function findHdfcPlan(company, planId) {
  if (!company?.plans || company.plans.length === 0) return null;
  const canonicalId = resolveHdfcPlanId(planId);
  return company.plans.find((p) => p.id === canonicalId) || company.plans[0];
}

/** Check whether a plan ID belongs to a specific canonical plan */
export function isHdfcPlan(planId, canonicalId) {
  return resolveHdfcPlanId(planId) === canonicalId;
}
