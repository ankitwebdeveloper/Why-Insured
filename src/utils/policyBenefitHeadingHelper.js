/**
 * Normalizes Policy Benefits section titles across the entire website.
 * Strictly preserves the 6 exact headings for Tata AIG MediCare Select:
 * 1. MOST IMPORTANT FEATURES
 * 2. VALUE ADDED FEATURES
 * 3. ADDITIONAL FEATURES
 * 4. OPTIONAL ADD-ONS (EXTRA BENEFITS WITH EXTRA PREMIUM)
 * 5. PREMIUM SAVER (OPTIONAL ADD-ONS)
 * 6. LIMITATIONS & WAITING PERIODS
 */
export function formatPolicyBenefitHeading(rawTitle) {
  if (!rawTitle || typeof rawTitle !== 'string') return rawTitle;

  const trimmed = rawTitle.trim();
  const normalized = trimmed.toLowerCase();

  // 1. Strict exact matches for Tata AIG MediCare Select 6 Headings
  if (
    normalized === 'most important features' ||
    trimmed === 'MOST IMPORTANT FEATURES'
  ) {
    return 'MOST IMPORTANT FEATURES';
  }

  if (
    normalized === 'value added features' ||
    normalized === 'valueadded features' ||
    trimmed === 'VALUE ADDED FEATURES'
  ) {
    return 'VALUE ADDED FEATURES';
  }

  if (
    normalized === 'additional features' ||
    trimmed === 'ADDITIONAL FEATURES'
  ) {
    return 'ADDITIONAL FEATURES';
  }

  if (
    normalized === 'optional add-ons (extra benefits with extra premium)' ||
    normalized === 'optional add-ons' ||
    normalized.includes('extra benefits with extra premium') ||
    trimmed === 'OPTIONAL ADD-ONS (EXTRA BENEFITS WITH EXTRA PREMIUM)'
  ) {
    return 'OPTIONAL ADD-ONS (EXTRA BENEFITS WITH EXTRA PREMIUM)';
  }

  if (
    normalized === 'premium saver (optional add-ons)' ||
    normalized === 'premium saver' ||
    trimmed === 'PREMIUM SAVER (OPTIONAL ADD-ONS)'
  ) {
    return 'PREMIUM SAVER (OPTIONAL ADD-ONS)';
  }

  if (
    normalized === 'limitations & waiting periods' ||
    normalized === 'limitations and waiting periods' ||
    trimmed === 'LIMITATIONS & WAITING PERIODS'
  ) {
    return 'LIMITATIONS & WAITING PERIODS';
  }

  // 2. Fallbacks for standard 4-heading system on other plans
  if (
    normalized.includes('most important') ||
    normalized === 'most_important'
  ) {
    return 'MOST IMPORTANT FEATURE';
  }

  if (
    normalized.includes('value') ||
    normalized.includes('valueadded') ||
    normalized === 'value_added'
  ) {
    return 'VALUEADDED FEATURE';
  }

  if (normalized.includes('additional')) {
    return 'ADDITIONAL FEATURE';
  }

  if (
    normalized.includes('optional') ||
    normalized.includes('rider') ||
    normalized.includes('add-on') ||
    normalized.includes('addon')
  ) {
    return 'OPTIONAL FEATURE';
  }

  return rawTitle;
}

