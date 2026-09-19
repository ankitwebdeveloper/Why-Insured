/**
 * Normalizes Policy Benefits section titles across the entire website
 * to match the exact 4 required headings in ALL CAPITAL LETTERS:
 * 1. MOST IMPORTANT FEATURE
 * 2. VALUEADDED FEATURE
 * 3. ADDITIONAL FEATURE
 * 4. OPTIONAL FEATURE
 */
export function formatPolicyBenefitHeading(rawTitle) {
  if (!rawTitle || typeof rawTitle !== 'string') return rawTitle;

  const normalized = rawTitle.trim().toLowerCase();

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
