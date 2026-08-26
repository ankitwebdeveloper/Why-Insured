import jsPDF from 'jspdf';
import logoAsset from '../assets/logo.png';

// ─────────────────────────────────────────────────────────────────────────────
// Image Base64 Cache
// ─────────────────────────────────────────────────────────────────────────────
const imageBase64Cache = new Map();

const getImageBase64 = (url) => {
  if (!url) return Promise.resolve(null);
  if (imageBase64Cache.has(url)) return Promise.resolve(imageBase64Cache.get(url));
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        imageBase64Cache.set(url, dataUrl);
        resolve(dataUrl);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const hexToRgb = (hex) => {
  if (!hex) return [0, 56, 168];
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const sanitizeForFilename = (str) => {
  if (!str) return 'PLAN';
  return str.toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
};

// Lighten a color by mixing with white (0 = original, 1 = full white)
const lightenRgb = (r, g, b, factor) => [
  Math.round(r + (255 - r) * factor),
  Math.round(g + (255 - g) * factor),
  Math.round(b + (255 - b) * factor),
];

// ─────────────────────────────────────────────────────────────────────────────
// WATERMARK  — drawn first on each page (behind all content)
// ─────────────────────────────────────────────────────────────────────────────
const drawWatermark = (doc, pageWidth, pageHeight) => {
  // Soft light-blue-gray, clearly visible but not distracting
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(64);
  doc.setTextColor(200, 210, 228);   // visible translucent blue-gray

  // Primary diagonal watermark — dead center
  doc.text('WHYINSURED', pageWidth / 2, pageHeight / 2, {
    align: 'center',
    angle: 325,
  });

  // Secondary smaller watermark above-right to fill white space
  doc.setFontSize(26);
  doc.setTextColor(218, 224, 236);
  doc.text('WHYINSURED', pageWidth * 0.72, pageHeight * 0.22, {
    align: 'center',
    angle: 325,
  });

  // Tertiary smaller watermark bottom-left
  doc.text('WHYINSURED', pageWidth * 0.28, pageHeight * 0.78, {
    align: 'center',
    angle: 325,
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const MARGIN     = 14;        // mm side margin
const FOOTER_H   = 14;        // mm reserved at bottom for footer
const TOP_MARGIN = 12;        // mm top margin for page 2+

// ─────────────────────────────────────────────────────────────────────────────
// TEXT MEASUREMENT HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const setFont = (doc, style, size) => {
  doc.setFont('helvetica', style);
  doc.setFontSize(size);
};

const splitText = (doc, text, maxWidth) =>
  text ? doc.splitTextToSize(String(text), maxWidth) : [];

// Estimate the height of a feature block BEFORE rendering (for page-break math)
const estimateFeatureHeight = (doc, item, contentWidth, isRider = false) => {
  const textWidth = contentWidth - 8; // icon column offset

  setFont(doc, 'bold', isRider ? 8.5 : 9.5);
  const titleLines = splitText(doc, item.title, textWidth);

  setFont(doc, 'bold', 7.5);
  const subtitleLines = item.subtitle ? splitText(doc, item.subtitle, textWidth) : [];

  setFont(doc, 'normal', 7.5);
  const summaryLines = item.summary ? splitText(doc, item.summary, textWidth) : [];

  const TITLE_LH    = isRider ? 4.2 : 4.8;
  const SUBTITLE_LH = 3.8;
  const SUMMARY_LH  = 3.8;
  const STEP_LH     = 3.5;

  let h = titleLines.length * TITLE_LH;
  if (subtitleLines.length) h += 1.5 + subtitleLines.length * SUBTITLE_LH;
  if (summaryLines.length)  h += 1.5 + summaryLines.length * SUMMARY_LH;
  if (item.steps && item.steps.length) h += 2 + STEP_LH;
  h += 5; // bottom gap
  return h;
};

// ─────────────────────────────────────────────────────────────────────────────
// DRAW ONE FEATURE BLOCK  (returns new Y after drawing)
// ─────────────────────────────────────────────────────────────────────────────
const drawFeatureBlock = (
  doc,
  item,
  startY,
  contentWidth,
  primaryR, primaryG, primaryB,
  isRider = false,
  isLast  = false,
) => {
  const iconX   = MARGIN;
  const textX   = MARGIN + 7;
  const textW   = contentWidth - 7;

  const TITLE_LH    = isRider ? 4.2 : 4.8;
  const SUBTITLE_LH = 3.8;
  const SUMMARY_LH  = 3.8;
  const STEP_LH     = 3.5;

  let y = startY;

  // ── Checkmark icon ──
  const [lr, lg, lb] = lightenRgb(primaryR, primaryG, primaryB, 0.35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(isRider ? 8 : 9);
  doc.setTextColor(lr, lg, lb);
  doc.text('✓', iconX, y + (isRider ? 0.5 : 1));

  // ── Title ──
  setFont(doc, 'bold', isRider ? 8.5 : 9.5);
  doc.setTextColor(15, 23, 42);
  const titleLines = splitText(doc, item.title, textW);
  doc.text(titleLines, textX, y);
  y += titleLines.length * TITLE_LH;

  // ── Subtitle (accent color) ──
  if (item.subtitle) {
    y += 1.5;
    setFont(doc, 'bold', 7.5);
    doc.setTextColor(primaryR, primaryG, primaryB);
    const subLines = splitText(doc, item.subtitle, textW);
    doc.text(subLines, textX, y);
    y += subLines.length * SUBTITLE_LH;
  }

  // ── Summary ──
  if (item.summary) {
    y += 1.5;
    setFont(doc, 'normal', 7.5);
    doc.setTextColor(80, 96, 118);
    const sumLines = splitText(doc, item.summary, textW);
    doc.text(sumLines, textX, y);
    y += sumLines.length * SUMMARY_LH;
  }

  // ── Steps (progression) ──
  if (item.steps && item.steps.length) {
    y += 2;
    setFont(doc, 'normal', 6.5);
    doc.setTextColor(primaryR, primaryG, primaryB);
    const stepsText = item.steps.join('  →  ');
    const stepLines = splitText(doc, stepsText, textW);
    doc.text(stepLines, textX, y);
    y += STEP_LH;
  }

  // ── Divider between features (not after last one) ──
  if (!isLast) {
    y += 3;
    doc.setDrawColor(230, 235, 242);
    doc.setLineWidth(0.25);
    doc.line(textX, y, MARGIN + contentWidth, y);
    y += 3;
  } else {
    y += 5;
  }

  return y;
};

// ─────────────────────────────────────────────────────────────────────────────
// DRAW SECTION HEADING  (returns new Y after drawing)
// ─────────────────────────────────────────────────────────────────────────────
const drawSectionHeading = (
  doc, title, y, pageWidth, contentWidth,
  primaryR, primaryG, primaryB, isRider = false,
) => {
  const [lr, lg, lb] = lightenRgb(primaryR, primaryG, primaryB, 0.88);

  // Subtle left accent stripe
  doc.setFillColor(primaryR, primaryG, primaryB);
  doc.rect(MARGIN, y, 3, isRider ? 4.5 : 5.5, 'F');

  // Heading text
  setFont(doc, 'bold', isRider ? 8 : 9);
  doc.setTextColor(15, 23, 42);
  doc.text(title.toUpperCase(), MARGIN + 5.5, y + (isRider ? 3.3 : 3.9));

  // Thin horizontal rule to the right
  const textWidth = doc.getTextWidth(title.toUpperCase());
  const ruleStartX = MARGIN + 5.5 + textWidth + 3;
  doc.setDrawColor(primaryR, primaryG, primaryB);
  doc.setLineWidth(0.3);
  doc.line(ruleStartX, y + (isRider ? 1.5 : 2), MARGIN + contentWidth, y + (isRider ? 1.5 : 2));

  return y + (isRider ? 4.5 : 5.5) + 5; // space after heading
};

// ─────────────────────────────────────────────────────────────────────────────
// DRAW FOOTER  (called on every page in two-pass)
// ─────────────────────────────────────────────────────────────────────────────
const drawFooter = (doc, pageNum, totalPages, pageWidth, pageHeight, companyName, planName) => {
  const y = pageHeight - FOOTER_H + 3;

  // Thin top border
  doc.setDrawColor(220, 226, 235);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y - 0.5, pageWidth - MARGIN, y - 0.5);

  // Left: WHYINSURED brand
  setFont(doc, 'bold', 6.5);
  doc.setTextColor(15, 23, 42);
  doc.text('WHYINSURED', MARGIN, y + 3);

  // Center: company | plan
  setFont(doc, 'normal', 6);
  doc.setTextColor(130, 148, 170);
  doc.text(`${companyName}  |  ${planName}`, pageWidth / 2, y + 3, { align: 'center' });

  // Right: page count
  setFont(doc, 'bold', 6.5);
  doc.setTextColor(130, 148, 170);
  doc.text(`Page ${pageNum} of ${Math.min(totalPages, 2)}`, pageWidth - MARGIN, y + 3, { align: 'right' });

  // Second row: legal micro-text
  setFont(doc, 'normal', 5.5);
  doc.setTextColor(180, 192, 208);
  doc.text(
    '*T&C Apply. Benefits subject to standard IRDAI guidelines and individual policy wording issued by the insurer.',
    pageWidth / 2, y + 7.5, { align: 'center' },
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DRAW HEADER  (Page 1 only)
// ─────────────────────────────────────────────────────────────────────────────
const drawHeader = async (
  doc, pageWidth, pageHeight,
  primaryR, primaryG, primaryB,
  logoBase64, companyLogoBase64,
  companyName, planName, planTagline,
) => {
  const contentWidth = pageWidth - MARGIN * 2;
  let y = MARGIN;

  // ── Top strip: WI logo left, date right ──────────────────────────────────
  if (logoBase64) {
    try { doc.addImage(logoBase64, 'PNG', MARGIN, y, 28, 7.5); } catch {
      setFont(doc, 'bold', 8);
      doc.setTextColor(15, 23, 42);
      doc.text('WHYINSURED', MARGIN, y + 5);
    }
  } else {
    setFont(doc, 'bold', 8);
    doc.setTextColor(15, 23, 42);
    doc.text('WHYINSURED', MARGIN, y + 5);
  }

  const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  setFont(doc, 'normal', 6.5);
  doc.setTextColor(140, 158, 180);
  doc.text(`Policy Benefits  •  ${todayStr}`, pageWidth - MARGIN, y + 5, { align: 'right' });

  y += 13;

  // ── Left column: document identity ──────────────────────────────────────
  const leftColW = contentWidth * 0.62;
  const rightColX = MARGIN + leftColW + 6;
  const rightColW = contentWidth - leftColW - 6;

  // "POLICY BENEFITS" label
  setFont(doc, 'bold', 7);
  doc.setTextColor(primaryR, primaryG, primaryB);
  doc.text('POLICY  BENEFITS', MARGIN, y);
  y += 5.5;

  // Company name
  setFont(doc, 'bold', 14);
  doc.setTextColor(15, 23, 42);
  doc.text(companyName, MARGIN, y);
  y += 7;

  // Plan name
  setFont(doc, 'bold', 11);
  doc.setTextColor(primaryR, primaryG, primaryB);
  const planLines = splitText(doc, planName, leftColW);
  doc.text(planLines, MARGIN, y);
  y += planLines.length * 5.5;

  // Tagline
  if (planTagline) {
    y += 1;
    setFont(doc, 'normal', 7);
    doc.setTextColor(110, 128, 152);
    const tagLines = splitText(doc, planTagline, leftColW - 4);
    doc.text(tagLines, MARGIN, y);
    y += tagLines.length * 3.8 + 1;
  }

  // ── Right column: company logo ───────────────────────────────────────────
  if (companyLogoBase64) {
    try {
      const logoH  = 14;
      const logoW  = Math.min(rightColW, 48);
      const logoY  = MARGIN + 13;
      doc.addImage(companyLogoBase64, 'PNG', rightColX, logoY, logoW, logoH);
    } catch { /* skip logo on error */ }
  }

  // ── Elegant horizontal divider ───────────────────────────────────────────
  y += 3;
  // Double-line effect: thick accent + thin neutral
  doc.setDrawColor(primaryR, primaryG, primaryB);
  doc.setLineWidth(0.8);
  doc.line(MARGIN, y, MARGIN + contentWidth * 0.35, y);
  doc.setDrawColor(220, 228, 238);
  doc.setLineWidth(0.3);
  doc.line(MARGIN + contentWidth * 0.35 + 2, y, MARGIN + contentWidth, y);
  y += 7;

  return y;
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT: generatePolicyBenefitsPDF
// ─────────────────────────────────────────────────────────────────────────────
export const generatePolicyBenefitsPDF = async (company, plan, featuresSections = []) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const pageWidth  = doc.internal.pageSize.getWidth();   // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight();  // 297 mm
  const contentWidth = pageWidth - MARGIN * 2;

  // Bottom boundary = footer zone top
  const maxY = pageHeight - FOOTER_H - 2;

  // ── Company & Plan identity ────────────────────────────────────────────
  const companyName = company?.name || company?.fullName || 'Insurance Provider';
  const planName    = plan?.planName || plan?.name || 'Health Plan';
  const planTagline = plan?.tagline  || plan?.description || '';

  // Company theme colour
  const primaryHex  = company?.theme?.primary || '#0038A8';
  const [pR, pG, pB] = hexToRgb(primaryHex);

  // Assets
  const logoBase64        = await getImageBase64(logoAsset);
  const companyLogoBase64 = await getImageBase64(company?.logo);

  // ── PAGE 1: draw watermark, then header ─────────────────────────────────
  drawWatermark(doc, pageWidth, pageHeight);

  let currentY = await drawHeader(
    doc, pageWidth, pageHeight,
    pR, pG, pB,
    logoBase64, companyLogoBase64,
    companyName, planName, planTagline,
  );

  // ── Section data ─────────────────────────────────────────────────────────
  const sectionsToRender =
    Array.isArray(featuresSections) && featuresSections.length > 0
      ? featuresSections
      : [{ id: 'sec-1', title: 'MOST IMPORTANT FEATURES', items: [] }];

  let pageCount = 1;

  // Helper: add a new page with watermark, return new Y
  const addPage = () => {
    doc.addPage();
    pageCount++;
    drawWatermark(doc, pageWidth, pageHeight);
    return TOP_MARGIN;
  };

  // Helper: ensure we have room; if not, page-break (max 2 pages)
  const ensureRoom = (needed) => {
    if (currentY + needed > maxY) {
      if (pageCount >= 2) return false; // no more pages allowed
      currentY = addPage();
    }
    return true;
  };

  // ── Render sections ───────────────────────────────────────────────────────
  let contentTruncated = false;

  for (let sIdx = 0; sIdx < sectionsToRender.length; sIdx++) {
    if (contentTruncated) break;

    const sec   = sectionsToRender[sIdx];
    const items = sec.items || [];
    if (items.length === 0) continue;

    const isRiderSection = sec.title?.toLowerCase().includes('rider') ||
                           sec.title?.toLowerCase().includes('add-on') ||
                           items.some(i => i.isRider);

    // Estimate section heading height
    const headingH = isRiderSection ? 15 : 16;

    // ── Section heading ────────────────────────────────────────────────────
    if (!ensureRoom(headingH)) break;

    currentY = drawSectionHeading(
      doc, sec.title || `SECTION ${sIdx + 1}`, currentY,
      pageWidth, contentWidth, pR, pG, pB, isRiderSection,
    );

    // ── Features ──────────────────────────────────────────────────────────
    for (let iIdx = 0; iIdx < items.length; iIdx++) {
      const item   = items[iIdx];
      const isLast = iIdx === items.length - 1;

      const needed = estimateFeatureHeight(doc, item, contentWidth, isRiderSection);

      if (!ensureRoom(needed)) {
        contentTruncated = true;
        break;
      }

      currentY = drawFeatureBlock(
        doc, item, currentY, contentWidth,
        pR, pG, pB,
        isRiderSection, isLast,
      );
    }

    // Space between sections
    if (!contentTruncated && sIdx < sectionsToRender.length - 1) {
      if (currentY + 4 <= maxY) currentY += 4;
    }
  }

  // ── Enforce maximum 2 pages ───────────────────────────────────────────────
  const totalPagesRaw = doc.getNumberOfPages();
  for (let i = totalPagesRaw; i > 2; i--) doc.deletePage(i);

  // ── Two-pass footer on every page ─────────────────────────────────────────
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    drawFooter(doc, i, totalPages, pageWidth, pageHeight, companyName, planName);
  }

  // ── Filename ──────────────────────────────────────────────────────────────
  const filename = `WHYINSURED_${sanitizeForFilename(companyName)}_${sanitizeForFilename(planName)}_POLICY_BENEFITS.pdf`;

  return {
    doc,
    filename,
    download : () => doc.save(filename),
    getBlob  : () => doc.output('blob'),
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// Convenience exports (unchanged API surface)
// ─────────────────────────────────────────────────────────────────────────────
export const downloadPolicyBenefitsPDF = async (company, plan, featuresSections) => {
  const result = await generatePolicyBenefitsPDF(company, plan, featuresSections);
  result.download();
  return { success: true, filename: result.filename };
};

export const sharePolicyBenefitsPDF = async (company, plan, featuresSections) => {
  const result     = await generatePolicyBenefitsPDF(company, plan, featuresSections);
  const blob       = result.getBlob();
  const filename   = result.filename;
  const cName      = company?.name || 'Insurance';
  const pName      = plan?.name || plan?.planName || 'Health Plan';
  const shareTitle = `WHYINSURED — ${cName} ${pName} Policy Benefits`;
  const shareText  = `Explore the official Policy Benefits for ${cName} ${pName} generated by WHYINSURED.`;

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      const file = new File([blob], filename, { type: 'application/pdf' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: shareTitle, text: shareText, files: [file] });
        return { success: true, method: 'native-file-share', filename };
      } else {
        await navigator.share({ title: shareTitle, text: shareText, url: window.location.href });
        result.download();
        return { success: true, method: 'native-text-share-with-download', filename };
      }
    } catch (shareErr) {
      if (shareErr.name === 'AbortError') return { success: false, method: 'user-cancelled', filename };
    }
  }
  result.download();
  return { success: true, method: 'fallback-download', filename };
};

export const downloadAndSharePolicyBenefitsPDF = async (company, plan, featuresSections) => {
  const result   = await generatePolicyBenefitsPDF(company, plan, featuresSections);
  const blob     = result.getBlob();
  const filename = result.filename;
  const cName    = company?.name || 'Insurance';
  const pName    = plan?.name || plan?.planName || 'Health Plan';

  // Step 1: Always download first
  result.download();
  await new Promise(r => setTimeout(r, 500));

  const shareTitle = `WHYINSURED — ${cName} ${pName} Policy Benefits`;
  const shareText  = `Explore the official Policy Benefits for ${cName} ${pName} generated by WHYINSURED.`;

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      const file = new File([blob], filename, { type: 'application/pdf' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: shareTitle, text: shareText, files: [file] });
        return { success: true, method: 'native-file-share', filename };
      }
      return { success: true, method: 'fallback-download', filename };
    } catch (shareErr) {
      if (shareErr.name === 'AbortError') return { success: true, method: 'user-cancelled', filename };
      return { success: true, method: 'fallback-download', filename };
    }
  }
  return { success: true, method: 'fallback-download', filename };
};
