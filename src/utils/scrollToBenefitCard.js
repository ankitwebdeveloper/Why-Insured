/**
 * scrollToBenefitCard
 *
 * Scrolls smoothly to the benefit card with the given itemId (via data-benefit-id attribute),
 * then temporarily highlights it.
 *
 * @param {string} itemId   - The benefit item's id (matches data-benefit-id attribute)
 * @param {string} highlightColor - Optional CSS color for the highlight ring (default blue)
 */
export function scrollToBenefitCard(itemId, highlightColor = '#3B82F6') {
  if (!itemId) return;

  const el = document.querySelector(`[data-benefit-id="${itemId}"]`);
  if (!el) return;

  // Scroll into view with offset
  const yOffset = -120;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });

  // Apply temporary highlight after a short delay (so scroll has started)
  setTimeout(() => {
    el.classList.add('benefit-highlight-active');
    setTimeout(() => {
      el.classList.remove('benefit-highlight-active');
    }, 2000);
  }, 350);
}
