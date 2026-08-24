// =============================================================================
// HDFC ERGO PLAN REGISTRY — Single source of truth for plan IDs & routing
// Every plan has a unique canonical ID. Legacy URL aliases map to canonical IDs.
// ONE PLAN COMMAND = ONE PLAN CHANGE.
// =============================================================================

/** Canonical plan IDs — use these everywhere for plan-specific data & UI */
export const HDFC_CANONICAL_PLAN_IDS = [
  'hdfc-optima-secure-plus',
  'hdfc-optima-secure',
  'hdfc-optima-restore',
  'hdfc-energy',
  'hdfc-myhealth-medisure-super-topup',
];

/** Human-readable plan names keyed by canonical ID */
export const HDFC_PLAN_NAMES = {
  'hdfc-optima-secure-plus': 'Optima Secure+',
  'hdfc-optima-secure': 'Optima Secure',
  'hdfc-optima-restore': 'Optima Restore',
  'hdfc-energy': 'Energy',
  'hdfc-myhealth-medisure-super-topup': 'my:health Medisure (Super Top-Up)',
};

/**
 * Legacy / alternate URL slugs → canonical plan ID.
 * Strict lookup only — no fuzzy .includes() matching.
 */
export const HDFC_PLAN_ID_ALIASES = {
  // Optima Secure+
  'optima-secure-plus': 'hdfc-optima-secure-plus',
  'hdfc-optima-secure-plus': 'hdfc-optima-secure-plus',
  // Optima Secure
  'optima-secure': 'hdfc-optima-secure',
  'hdfc-optima-secure': 'hdfc-optima-secure',
  // Optima Restore
  'optima-restore': 'hdfc-optima-restore',
  'hdfc-optima-restore': 'hdfc-optima-restore',
  // Energy
  'energy': 'hdfc-energy',
  'energy-plan': 'hdfc-energy',
  'hdfc-energy': 'hdfc-energy',
  // my:health Medisure (Super Top-Up)
  'myhealth-medisure': 'hdfc-myhealth-medisure-super-topup',
  'my-health-suraksha': 'hdfc-myhealth-medisure-super-topup',
  'myhealth-medisure-super-topup': 'hdfc-myhealth-medisure-super-topup',
  'hdfc-myhealth-medisure-super-topup': 'hdfc-myhealth-medisure-super-topup',
  'my-health-medisure-super-topup': 'hdfc-myhealth-medisure-super-topup',
};

/**
 * Resolve any plan ID (URL slug or legacy alias) to its canonical ID.
 * Returns null if the ID is not a recognized HDFC ERGO plan.
 */
export function resolveHdfcPlanId(planId) {
  if (!planId) return null;
  const normalized = String(planId).toLowerCase().trim();

  if (HDFC_CANONICAL_PLAN_IDS.includes(normalized)) {
    return normalized;
  }

  return HDFC_PLAN_ID_ALIASES[normalized] ?? null;
}

/**
 * Find the plan object from a company's plans array using any valid plan ID.
 */
export function findHdfcPlan(company, planId) {
  if (!company?.plans) return null;
  const canonicalId = resolveHdfcPlanId(planId);
  if (!canonicalId) return null;
  return company.plans.find((p) => p.id === canonicalId) ?? null;
}

/** Check whether a plan ID belongs to a specific canonical plan */
export function isHdfcPlan(planId, canonicalId) {
  return resolveHdfcPlanId(planId) === canonicalId;
}
