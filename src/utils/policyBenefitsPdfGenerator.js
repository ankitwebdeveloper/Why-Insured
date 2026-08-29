import * as jsPDFModule from 'jspdf';
const jsPDF = jsPDFModule.jsPDF || jsPDFModule.default || jsPDFModule;

// ─────────────────────────────────────────────────────────────────────────────
// 1. IMAGE BASE64 & ASPECT RATIO CACHE
// ─────────────────────────────────────────────────────────────────────────────
const imageCache = new Map();

const getImageData = (url) => {
  if (!url) return Promise.resolve(null);
  if (imageCache.has(url)) return Promise.resolve(imageCache.get(url));

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        const aspect = (canvas.width && canvas.height) ? (canvas.width / canvas.height) : 1;
        const result = { dataUrl, width: canvas.width, height: canvas.height, aspect };
        imageCache.set(url, result);
        resolve(result);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. ROBUST TEXT SANITIZATION & STRING UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
const hexToRgb = (hex) => {
  if (!hex) return [0, 56, 168]; // Default Navy #0038A8
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const sanitizeForFilename = (str) => {
  if (!str) return 'PLAN';
  return str
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

const cleanText = (str) => {
  if (!str) return '';
  let s = String(str);
  // Remove HTML tags
  s = s.replace(/<[^>]*>?/gm, '');
  // Fix corrupted UTF-8 / Mojibake artifacts and weird encoding glitches
  s = s.replace(/â‚¹/g, '₹')
       .replace(/â€™/g, "'")
       .replace(/â€œ/g, '"')
       .replace(/â€\x9D/g, '"')
       .replace(/â€¦/g, '…')
       .replace(/â†’/g, '→')
       .replace(/âˆž/g, '∞')
       .replace(/!â€™/g, "'")
       .replace(/[¹]/g, '')
       .replace(/![\'’]/g, "'");
  return s.trim();
};

const formatFlowSteps = (steps) => {
  if (!Array.isArray(steps) || steps.length === 0) return '';

  const cleanedSteps = steps.map(cleanText).map(s => {
    // Normalize infinite/unlimited strings to standard symbol
    if (/infinite|infinity|∞/i.test(s)) {
      return '∞';
    }
    // Clean trailing repeated dots
    return s.replace(/\.{2,}/g, '').trim();
  });

  const hasInfinite = cleanedSteps.some(s => s === '∞');
  const filtered = cleanedSteps.filter(s => s && s !== '∞' && s !== '…');

  if (hasInfinite) {
    return [...filtered, '…', '∞'].join('   →   ');
  }

  return filtered.join('   →   ');
};

const lightenRgb = (r, g, b, factor) => [
  Math.round(r + (255 - r) * factor),
  Math.round(g + (255 - g) * factor),
  Math.round(b + (255 - b) * factor),
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. CURATED SUBTLE PASTEL ROW COLOR PALETTES
// ─────────────────────────────────────────────────────────────────────────────
const ROW_PALETTES = [
  // 1. Soft Sage / Light Green
  {
    bg: [240, 253, 244],      // #F0FDF4
    border: [187, 247, 208],  // #BBF7D0
    accent: [22, 101, 52],    // #166534
    pillBg: [220, 252, 231],  // #DCFCE7
  },
  // 2. Soft Sky / Light Blue
  {
    bg: [240, 249, 255],      // #F0F9FF
    border: [186, 230, 253],  // #BAE6FD
    accent: [3, 105, 161],    // #0369A1
    pillBg: [224, 242, 254],  // #E0F2FE
  },
  // 3. Soft Lavender / Light Purple
  {
    bg: [250, 245, 255],      // #FAF5FF
    border: [233, 213, 255],  // #E9D5FF
    accent: [109, 40, 217],   // #6D28D9
    pillBg: [243, 232, 255],  // #F3E8FF
  },
  // 4. Soft Warm Amber / Light Orange
  {
    bg: [255, 251, 235],      // #FFFBEB
    border: [254, 230, 138],  // #FDE68A
    accent: [180, 83, 9],     // #B45309
    pillBg: [254, 243, 199],  // #FEF3C7
  },
  // 5. Soft Mint / Light Teal
  {
    bg: [240, 253, 250],      // #F0FDFA
    border: [153, 246, 228],  // #99F6E4
    accent: [15, 118, 110],   // #0F766E
    pillBg: [204, 251, 241],  // #CCFBF1
  },
  // 6. Soft Blush / Light Rose
  {
    bg: [255, 241, 242],      // #FFF1F2
    border: [254, 205, 211],  // #FECDD3
    accent: [190, 24, 93],    // #BE185D
    pillBg: [255, 228, 230],  // #FFE4E6
  },
  // 7. Soft Indigo / Slate
  {
    bg: [238, 242, 255],      // #EEF2FF
    border: [199, 210, 254],  // #C7D2FE
    accent: [67, 56, 202],    // #4338CA
    pillBg: [224, 231, 255],  // #E0E7FF
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. EDITORIAL A4 LAYOUT METRICS (in mm)
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 12;                       // 12 mm uniform margin
const CONTENT_W = PAGE_W - MARGIN * 2;   // 186 mm uniform content width
const FOOTER_H = 16;                     // 16 mm reserved for footer
const MAX_PAGE_Y = PAGE_H - FOOTER_H - 2;// 279 mm max content boundary
const ROW_GAP = 3.5;                     // 3.5 mm spacing between feature rows
const TOP_MARGIN_RUNNING = 18;           // mm for running header top offset

const PT_TO_MM = 0.352778;

const setFont = (doc, style, size) => {
  doc.setFont('helvetica', style);
  doc.setFontSize(size);
};

const splitText = (doc, text, maxWidth) => {
  if (!text) return [];
  const cleaned = cleanText(text);
  if (!cleaned) return [];
  return doc.splitTextToSize(cleaned, Math.max(maxWidth, 10));
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. SUBTLE EXECUTIVE WATERMARK
// ─────────────────────────────────────────────────────────────────────────────
const drawWatermark = (doc) => {
  if (doc.saveGraphicsState) doc.saveGraphicsState();
  setFont(doc, 'bold', 48);
  doc.setTextColor(248, 250, 252); // Ultra soft slate-50

  doc.text('WHYINSURED', PAGE_W / 2, PAGE_H / 2, {
    align: 'center',
    angle: 320,
  });

  setFont(doc, 'bold', 16);
  doc.setTextColor(250, 252, 254);
  doc.text('OFFICIAL POLICY BENEFITS BROCHURE', PAGE_W / 2, PAGE_H * 0.30, {
    align: 'center',
    angle: 320,
  });

  doc.text('VERIFIED SPECIFICATIONS', PAGE_W / 2, PAGE_H * 0.70, {
    align: 'center',
    angle: 320,
  });
  if (doc.restoreGraphicsState) doc.restoreGraphicsState();
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. EDITORIAL TYPOGRAPHY TOKENS (SPACIOUS & PROMINENT)
// ─────────────────────────────────────────────────────────────────────────────
const TOKENS = {
  padX: 5.0,
  padTop: 4.2,
  padBottom: 4.6,
  numWidth: 7.2,
  gapAfterNum: 2.8,
  titleSize: 9.5,
  subSize: 8.2,
  descSize: 7.6,
  badgeSize: 5.8,
  stepSize: 6.6,
  lineHFactor: 1.34,
  sectionH: 9.5,          // Larger, prominent section heading banner
  sectionTitleSize: 12.0, // Prominent 12.0pt bold section heading
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. FULL-WIDTH FEATURE ROW MEASUREMENT (ONE FEATURE PER ROW)
// ─────────────────────────────────────────────────────────────────────────────
const measureFeatureRow = (doc, item, isRider = false) => {
  const {
    padX,
    padTop,
    padBottom,
    numWidth,
    gapAfterNum,
    titleSize,
    subSize,
    descSize,
    badgeSize,
    stepSize,
    lineHFactor,
  } = TOKENS;

  const innerW = CONTENT_W - (padX * 2);
  const textLeftOffset = numWidth + gapAfterNum;
  const bodyTextW = innerW - textLeftOffset - 1.5; // full readable width for descriptions

  // 1. Badge measurement (Top-right pill)
  const badgeText = item.badge || (isRider || item.isRider ? 'OPTIONAL RIDER' : null);
  let badgeW = 0;
  let badgeH = 0;
  if (badgeText) {
    setFont(doc, 'bold', badgeSize);
    const rawBadgeW = doc.getTextWidth(cleanText(badgeText).toUpperCase());
    badgeW = Math.min(rawBadgeW + 4.5, 48);
    badgeH = 4.2;
  }

  // 2. Title Block (Width constrained so it never touches or overlaps the badge)
  const titleAvailableW = badgeW > 0
    ? bodyTextW - badgeW - 3.5
    : bodyTextW;

  setFont(doc, 'bold', titleSize);
  const titleLines = splitText(doc, item.title, titleAvailableW);
  const titleLineH = titleSize * PT_TO_MM * lineHFactor;
  const titleH = Math.max(titleLines.length * titleLineH, 4.2);
  const headerRowH = Math.max(titleH, badgeH);

  // 3. Subtitle / Highlight Block (Full horizontal row width)
  let subLines = [];
  let subLineH = 0;
  let subH = 0;
  if (item.subtitle) {
    setFont(doc, 'bold', subSize);
    subLines = splitText(doc, `• ${item.subtitle}`, bodyTextW);
    subLineH = subSize * PT_TO_MM * lineHFactor;
    subH = 1.8 + (subLines.length * subLineH);
  }

  // 4. Description / Summary Body Block (Full horizontal row width)
  let descLines = [];
  let descLineH = 0;
  let descH = 0;
  if (item.summary) {
    setFont(doc, 'normal', descSize);
    descLines = splitText(doc, item.summary, bodyTextW);
    descLineH = descSize * PT_TO_MM * 1.36;
    descH = 1.8 + (descLines.length * descLineH);
  }

  // 5. Flow Steps Box (Formatted with clean Rupee symbols & arrows)
  let stepLines = [];
  let stepBoxH = 0;
  let stepTotalH = 0;
  let flowString = '';
  const steps = Array.isArray(item.steps) ? item.steps : [];
  if (steps.length > 0) {
    setFont(doc, 'bold', stepSize);
    const stepBoxW = bodyTextW;
    const stepTextAvailableW = stepBoxW - 18;
    flowString = formatFlowSteps(steps);
    stepLines = splitText(doc, flowString, stepTextAvailableW);
    const stepLineH = stepSize * PT_TO_MM * 1.32;
    stepBoxH = 3.8 + (Math.max(stepLines.length, 1) * stepLineH);
    stepTotalH = 2.4 + stepBoxH;
  }

  // Total exact auto-height of the row
  const exactHeight = padTop + headerRowH + subH + descH + stepTotalH + padBottom;

  return {
    exactHeight: Math.max(exactHeight, 18),
    padX,
    padTop,
    padBottom,
    textLeftOffset,
    badgeText,
    badgeW,
    badgeH,
    titleLines,
    titleLineH,
    headerRowH,
    subLines,
    subLineH,
    subH,
    descLines,
    descLineH,
    descH,
    hasSteps: steps.length > 0,
    steps,
    flowString,
    stepLines,
    stepBoxH,
    stepTotalH,
    bodyTextW,
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. DRAW FULL-WIDTH FEATURE ROW WITH SUBTLE PASTEL TINT
// ─────────────────────────────────────────────────────────────────────────────
const drawFeatureRow = (
  doc,
  item,
  y,
  pR, pG, pB,
  indexNumber = 1,
  paletteIndex = 0,
  isRider = false,
) => {
  const m = measureFeatureRow(doc, item, isRider);
  const rowHeight = m.exactHeight;
  const palette = ROW_PALETTES[paletteIndex % ROW_PALETTES.length];
  const { titleSize, subSize, descSize, badgeSize, stepSize } = TOKENS;

  // ── 1. Full-Width Row Background Box with Distinct Subtle Pastel Tint ──
  doc.setFillColor(palette.bg[0], palette.bg[1], palette.bg[2]);
  doc.setDrawColor(palette.border[0], palette.border[1], palette.border[2]);
  doc.setLineWidth(0.35);
  doc.roundedRect(MARGIN, y, CONTENT_W, rowHeight, 1.8, 1.8, 'FD');

  // ── 2. Solid Left Accent Indicator Strip ──
  doc.setFillColor(palette.accent[0], palette.accent[1], palette.accent[2]);
  doc.roundedRect(MARGIN, y, 2.0, rowHeight, 0.6, 0.6, 'F');

  // ── 3. Header Row (Number Pill, Feature Title, Badge) ──
  const headerTopY = y + m.padTop;
  const numX = MARGIN + m.padX;
  const textX = MARGIN + m.padX + m.textLeftOffset;

  // Number Badge Pill (e.g. "01")
  doc.setFillColor(palette.pillBg[0], palette.pillBg[1], palette.pillBg[2]);
  doc.setDrawColor(palette.border[0], palette.border[1], palette.border[2]);
  doc.setLineWidth(0.2);
  doc.roundedRect(numX, headerTopY - 0.2, m.padX + 2.5, 4.4, 0.8, 0.8, 'FD');

  setFont(doc, 'bold', titleSize * 0.78);
  doc.setTextColor(palette.accent[0], palette.accent[1], palette.accent[2]);
  doc.text(String(indexNumber).padStart(2, '0'), numX + (m.padX + 2.5) / 2, headerTopY + 3.0, { align: 'center' });

  // Right Badge (Top-right pill, never overlapping title)
  if (m.badgeText && m.badgeW > 0) {
    const badgeX = MARGIN + CONTENT_W - m.padX - m.badgeW;
    const badgeY = headerTopY - 0.3;

    if (isRider || item.isRider) {
      doc.setFillColor(254, 243, 199);
      doc.setDrawColor(245, 158, 11);
      doc.setTextColor(180, 83, 9);
    } else {
      doc.setFillColor(palette.pillBg[0], palette.pillBg[1], palette.pillBg[2]);
      doc.setDrawColor(palette.border[0], palette.border[1], palette.border[2]);
      doc.setTextColor(palette.accent[0], palette.accent[1], palette.accent[2]);
    }

    doc.setLineWidth(0.2);
    doc.roundedRect(badgeX, badgeY, m.badgeW, m.badgeH, 1.0, 1.0, 'FD');
    setFont(doc, 'bold', badgeSize);
    doc.text(cleanText(m.badgeText).toUpperCase(), badgeX + m.badgeW / 2, badgeY + 2.9, { align: 'center' });
  }

  // Feature Heading (Large Bold Navy Title, clearly visually distinct)
  setFont(doc, 'bold', titleSize);
  doc.setTextColor(15, 23, 42); // Deep Navy #0F172A

  const titleBaseline = titleSize * PT_TO_MM * 0.88;
  for (let i = 0; i < m.titleLines.length; i++) {
    doc.text(m.titleLines[i], textX, headerTopY + titleBaseline + (i * m.titleLineH));
  }

  // Advance vertical cursor past the header row
  let cursorY = headerTopY + m.headerRowH;

  // ── 4. Subtitle / Bullet Block (Bold Accent) ──
  if (m.subLines.length > 0) {
    cursorY += 1.8;
    setFont(doc, 'bold', subSize);
    doc.setTextColor(palette.accent[0], palette.accent[1], palette.accent[2]);

    const subBaseline = subSize * PT_TO_MM * 0.88;
    for (let i = 0; i < m.subLines.length; i++) {
      doc.text(m.subLines[i], textX, cursorY + subBaseline + (i * m.subLineH));
    }
    cursorY += m.subLines.length * m.subLineH;
  }

  // ── 5. Description / Summary Body Block (Comfortable Slate Body Text) ──
  if (m.descLines.length > 0) {
    cursorY += 1.8;
    setFont(doc, 'normal', descSize);
    doc.setTextColor(51, 65, 85); // Slate-700 #334155

    const descBaseline = descSize * PT_TO_MM * 0.88;
    for (let i = 0; i < m.descLines.length; i++) {
      doc.text(m.descLines[i], textX, cursorY + descBaseline + (i * (descSize * PT_TO_MM * 1.36)));
    }
    cursorY += m.descLines.length * (descSize * PT_TO_MM * 1.36);
  }

  // ── 6. Flow Steps Container (Visually Attractive & Clean Progression) ──
  if (m.hasSteps && m.steps.length > 0) {
    cursorY += 2.4;
    const stepBoxX = textX;
    const stepBoxW = m.bodyTextW;
    const stepBoxH = m.stepBoxH;

    // Outer subtle container
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(palette.border[0], palette.border[1], palette.border[2]);
    doc.setLineWidth(0.25);
    doc.roundedRect(stepBoxX, cursorY, stepBoxW, stepBoxH, 1.0, 1.0, 'FD');

    // FLOW: Tag badge
    doc.setFillColor(palette.pillBg[0], palette.pillBg[1], palette.pillBg[2]);
    doc.roundedRect(stepBoxX + 1.6, cursorY + 1.4, 12.0, stepBoxH - 2.8, 0.6, 0.6, 'F');

    setFont(doc, 'bold', stepSize * 0.82);
    doc.setTextColor(palette.accent[0], palette.accent[1], palette.accent[2]);
    doc.text('FLOW', stepBoxX + 7.6, cursorY + (stepBoxH * 0.62), { align: 'center' });

    // Step text with clean ₹ amounts, arrows and ∞
    setFont(doc, 'bold', stepSize);
    doc.setTextColor(15, 23, 42); // Bold Deep Slate
    const stepLineH = stepSize * PT_TO_MM * 1.32;
    for (let i = 0; i < m.stepLines.length; i++) {
      doc.text(m.stepLines[i], stepBoxX + 16.0, cursorY + 2.8 + (i * stepLineH));
    }
  }

  return y + rowHeight + ROW_GAP;
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. PROMINENT SECTION HEADING (LARGER & VISUALLY DISTINCT)
// ─────────────────────────────────────────────────────────────────────────────
const drawSectionHeader = (
  doc,
  title,
  y,
  pR, pG, pB,
  sectionIndex = 1
) => {
  const sectionY = y;
  const sectionH = TOKENS.sectionH; // 9.5 mm

  const [bgR, bgG, bgB] = lightenRgb(pR, pG, pB, 0.94);
  const [bdR, bdG, bdB] = lightenRgb(pR, pG, pB, 0.68);

  // Colored Header Banner
  doc.setFillColor(bgR, bgG, bgB);
  doc.setDrawColor(bdR, bdG, bdB);
  doc.setLineWidth(0.4);
  doc.roundedRect(MARGIN, sectionY, CONTENT_W, sectionH, 2.0, 2.0, 'FD');

  // Solid Left Accent Strip
  doc.setFillColor(pR, pG, pB);
  doc.roundedRect(MARGIN, sectionY, 3.2, sectionH, 0.8, 0.8, 'F');

  // Number Badge Pill (e.g. "01")
  const numBadgeX = MARGIN + 4.5;
  const numBadgeY = sectionY + 1.5;
  const numBadgeW = 8.2;
  const numBadgeH = sectionH - 3.0; // 6.5 mm

  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(bdR, bdG, bdB);
  doc.setLineWidth(0.25);
  doc.roundedRect(numBadgeX, numBadgeY, numBadgeW, numBadgeH, 1.0, 1.0, 'FD');

  setFont(doc, 'bold', 8.5);
  doc.setTextColor(pR, pG, pB);
  doc.text(String(sectionIndex).padStart(2, '0'), numBadgeX + numBadgeW / 2, numBadgeY + (numBadgeH * 0.72), { align: 'center' });

  // Prominent Section Heading Title (Large 12.0pt Bold Typography)
  const titleX = numBadgeX + numBadgeW + 3.8;
  setFont(doc, 'bold', TOKENS.sectionTitleSize);
  doc.setTextColor(15, 23, 42); // Deep Navy #0F172A
  doc.text(cleanText(title).toUpperCase(), titleX, sectionY + (sectionH * 0.68));

  return sectionY + sectionH + 3.8;
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. ELEGANT MODERN SECTION DIVIDER (━━━━━━━━━━  ◆  ━━━━━━━━━━)
// ─────────────────────────────────────────────────────────────────────────────
const drawSectionDivider = (doc, y, pR, pG, pB) => {
  const centerX = PAGE_W / 2;
  const centerY = y + 2.8;
  const lineGap = 7.5; // Gap from center to line ends

  const [bdR, bdG, bdB] = lightenRgb(pR, pG, pB, 0.65);

  // Left Line
  doc.setDrawColor(203, 213, 225); // Slate-300
  doc.setLineWidth(0.35);
  doc.line(MARGIN + 12, centerY, centerX - lineGap, centerY);

  // Center Diamond Accent ◆
  doc.setFillColor(pR, pG, pB);
  doc.setDrawColor(bdR, bdG, bdB);
  doc.setLineWidth(0.2);

  const dR = 1.6;
  if (doc.lines) {
    doc.lines(
      [
        [dR, dR],
        [-dR, dR],
        [-dR, -dR],
        [dR, -dR],
      ],
      centerX,
      centerY - dR,
      [1.0, 1.0],
      'FD',
      true
    );
  } else {
    doc.circle(centerX, centerY, 1.3, 'FD');
  }

  // Right Line
  doc.setDrawColor(203, 213, 225); // Slate-300
  doc.setLineWidth(0.35);
  doc.line(centerX + lineGap, centerY, MARGIN + CONTENT_W - 12, centerY);

  return y + 6.0;
};

// ─────────────────────────────────────────────────────────────────────────────
// 11. PAGE 1: HERO HEADER (CLEAN, NO REDUNDANT BADGES)
// ─────────────────────────────────────────────────────────────────────────────
const drawHeroHeader = (
  doc,
  pR, pG, pB,
  companyLogoData,
  companyName,
  planName,
  planTagline
) => {
  const topLabelY = 7.5;
  // Eyebrow
  setFont(doc, 'bold', 7.0);
  doc.setTextColor(100, 116, 139);
  doc.text('WHYINSURED', MARGIN, topLabelY + 2.2);

  setFont(doc, 'bold', 6.0);
  doc.setTextColor(148, 163, 184);
  doc.text('OFFICIAL POLICY BENEFITS BROCHURE', PAGE_W - MARGIN, topLabelY + 2.2, { align: 'right' });

  const heroCardY = 12.0;
  const heroCardW = CONTENT_W;
  const leftColW = heroCardW * 0.70;

  const defaultSubtitle = 'Comprehensive Health Insurance Benefits & Coverage Overview';
  const subtitleText = planTagline || defaultSubtitle;

  setFont(doc, 'bold', 12.5);
  const planLines = splitText(doc, planName, leftColW - 6);

  setFont(doc, 'normal', 7.8);
  const subLines = splitText(doc, subtitleText, leftColW - 6);

  let heroCardH = 20 + (planLines.length * 4.8) + (subLines.length * 3.6);
  heroCardH = Math.max(heroCardH, 36);

  const [heroBgR, heroBgG, heroBgB] = lightenRgb(pR, pG, pB, 0.96);
  const [heroBdR, heroBdG, heroBdB] = lightenRgb(pR, pG, pB, 0.70);

  doc.setFillColor(heroBgR, heroBgG, heroBgB);
  doc.setDrawColor(heroBdR, heroBdG, heroBdB);
  doc.setLineWidth(0.35);
  doc.roundedRect(MARGIN, heroCardY, heroCardW, heroCardH, 2.2, 2.2, 'FD');

  // Top Accent Bar
  doc.setFillColor(pR, pG, pB);
  doc.roundedRect(MARGIN, heroCardY, heroCardW, 1.8, 0.8, 0.8, 'F');

  let textY = heroCardY + 6.0;
  const textX = MARGIN + 5.0;

  // Company Name
  setFont(doc, 'bold', 8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(cleanText(companyName).toUpperCase(), textX, textY);
  textY += 4.6;

  // Plan Name
  setFont(doc, 'bold', 12.5);
  doc.setTextColor(15, 23, 42);
  doc.text(planLines, textX, textY);
  textY += (planLines.length * 4.8) + 0.8;

  // Document Title: POLICY BENEFITS
  setFont(doc, 'bold', 14.5);
  doc.setTextColor(pR, pG, pB);
  doc.text('POLICY BENEFITS', textX, textY);
  textY += 5.5;

  // Subtitle / Tagline
  setFont(doc, 'normal', 7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(subLines.slice(0, 2), textX, textY);
  textY += (Math.min(subLines.length, 2) * 3.4);

  // Company Logo on Right
  const rightColX = MARGIN + leftColW + 2;
  const rightColW = heroCardW - leftColW - 6;

  if (companyLogoData?.dataUrl) {
    try {
      const maxLogoW = Math.min(rightColW, 40);
      const maxLogoH = 18;
      let finalLogoW = maxLogoW;
      let finalLogoH = maxLogoH;

      if (companyLogoData.aspect) {
        if (companyLogoData.aspect > (maxLogoW / maxLogoH)) {
          finalLogoW = maxLogoW;
          finalLogoH = maxLogoW / companyLogoData.aspect;
        } else {
          finalLogoH = maxLogoH;
          finalLogoW = maxLogoH * companyLogoData.aspect;
        }
      }

      const logoBoxX = rightColX + (rightColW - finalLogoW) / 2;
      const logoBoxY = heroCardY + (heroCardH - finalLogoH) / 2;

      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(heroBdR, heroBdG, heroBdB);
      doc.setLineWidth(0.25);
      doc.roundedRect(logoBoxX - 2.2, logoBoxY - 2.2, finalLogoW + 4.4, finalLogoH + 4.4, 1.6, 1.6, 'FD');

      doc.addImage(companyLogoData.dataUrl, 'PNG', logoBoxX, logoBoxY, finalLogoW, finalLogoH);
    } catch {
      // gracefully skip if logo fails
    }
  }

  // Thin Accent Divider
  const lineY = heroCardY + heroCardH + 3.0;
  doc.setDrawColor(pR, pG, pB);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, lineY, MARGIN + CONTENT_W, lineY);

  return lineY + 3.5;
};

// ─────────────────────────────────────────────────────────────────────────────
// 12. RUNNING HEADER (PAGES 2+)
// ─────────────────────────────────────────────────────────────────────────────
const drawRunningHeader = (doc, companyName, planName, pR, pG, pB) => {
  const y = 7;
  const headerW = CONTENT_W;

  // Left: WHYINSURED | COMPANY — PLAN
  setFont(doc, 'bold', 7.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`WHYINSURED   |   ${cleanText(companyName).toUpperCase()} — ${cleanText(planName).toUpperCase()}`, MARGIN, y + 4.0);

  // Right: Document Spec Pill
  const [tintR, tintG, tintB] = lightenRgb(pR, pG, pB, 0.92);
  doc.setFillColor(tintR, tintG, tintB);
  doc.setDrawColor(pR, pG, pB);
  doc.setLineWidth(0.2);
  doc.roundedRect(PAGE_W - MARGIN - 42, y, 42, 4.4, 1.0, 1.0, 'FD');

  setFont(doc, 'bold', 5.6);
  doc.setTextColor(pR, pG, pB);
  doc.text('POLICY BENEFITS', PAGE_W - MARGIN - 21, y + 3.0, { align: 'center' });

  // Thin accent line underneath
  doc.setDrawColor(pR, pG, pB);
  doc.setLineWidth(0.35);
  doc.line(MARGIN, y + 6.6, MARGIN + headerW, y + 6.6);

  return y + 9.5;
};

// ─────────────────────────────────────────────────────────────────────────────
// 13. TERMS & CONDITIONS BLOCK (FINAL SECTION)
// ─────────────────────────────────────────────────────────────────────────────
const drawTermsBlock = (doc, startY, pR, pG, pB) => {
  const cardX = MARGIN;
  const cardW = CONTENT_W;

  setFont(doc, 'normal', 6.6);
  const termsText = [
    '• Initial & Specific Waiting Periods: Standard 30-day initial waiting applies (except accidental hospitalisation). Specific diseases have 24-48 months waiting.',
    '• Pre-existing Diseases (PED): Covered after declared waiting period. Cashless network admission requires valid ID & pre-authorization verification.',
  ];

  const termsLines = termsText.map(t => splitText(doc, t, cardW - 12));
  const totalLines = termsLines.reduce((acc, l) => acc + l.length, 0);
  const cardH = 9.0 + (totalLines * 3.6);

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.35);
  doc.roundedRect(cardX, startY, cardW, cardH, 1.8, 1.8, 'FD');

  // Left accent bar
  doc.setFillColor(pR, pG, pB);
  doc.roundedRect(cardX, startY, 1.6, cardH, 0.6, 0.6, 'F');

  let textY = startY + 4.0;
  const textX = cardX + 5.0;

  setFont(doc, 'bold', 8.0);
  doc.setTextColor(15, 23, 42);
  doc.text('IMPORTANT CONDITIONS & UNDERWRITING GUIDELINES', textX, textY);
  textY += 4.0;

  setFont(doc, 'normal', 6.6);
  doc.setTextColor(71, 85, 105);

  termsLines.forEach(linesGroup => {
    linesGroup.forEach(line => {
      doc.text(line, textX, textY);
      textY += 3.6;
    });
  });

  return startY + cardH + 2.5;
};

// ─────────────────────────────────────────────────────────────────────────────
// 14. TWO-PASS PAGE FOOTER (ALL PAGES)
// ─────────────────────────────────────────────────────────────────────────────
const drawFooter = (doc, pageNum, totalPages, companyName, planName, pR, pG, pB) => {
  const y = PAGE_H - FOOTER_H + 1.0;

  // Divider Line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);

  // ROW 1: Brand & Page Counter
  setFont(doc, 'bold', 7.2);
  doc.setTextColor(15, 23, 42);
  doc.text('WHYINSURED — Policy Benefits', MARGIN, y + 3.6);

  setFont(doc, 'bold', 7.2);
  doc.setTextColor(15, 23, 42);
  doc.text(`Page ${pageNum} of ${totalPages}`, PAGE_W - MARGIN, y + 3.6, { align: 'right' });

  // ROW 2: Disclaimer & Tagline
  setFont(doc, 'normal', 5.2);
  doc.setTextColor(100, 116, 139);
  doc.text('Insurance information made simple. Policy terms, exclusions and benefits are subject to actual policy wording.', MARGIN, y + 7.2);

  setFont(doc, 'normal', 5.0);
  doc.setTextColor(148, 163, 184);
  doc.text('Privacy Policy · Terms & Conditions · Disclaimer', PAGE_W - MARGIN, y + 7.2, { align: 'right' });

  // ROW 3: Copyright
  setFont(doc, 'normal', 4.6);
  doc.setTextColor(148, 163, 184);
  doc.text('© 2026 WHYINSURED · All Rights Reserved. *T&C Apply across all policies.', PAGE_W / 2, y + 10.8, { align: 'center' });
};

// ─────────────────────────────────────────────────────────────────────────────
// 15. CORE PDF GENERATOR: generatePolicyBenefitsPDF (POLISHED FLOW & FORMAT)
// ─────────────────────────────────────────────────────────────────────────────
export const generatePolicyBenefitsPDF = async (company, plan, featuresSections = []) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // Identity & Theme
  const companyName = company?.name || company?.fullName || 'Insurance Provider';
  const planName    = plan?.planName || plan?.name || 'Health Plan';
  const planTagline = plan?.tagline  || plan?.description || '';
  const primaryHex  = company?.theme?.primary || '#0038A8';
  const [pR, pG, pB] = hexToRgb(primaryHex);

  // Logo Asset
  const companyLogoData = await getImageData(company?.logo);

  // Normalize sections
  const sections = Array.isArray(featuresSections) && featuresSections.length > 0
    ? featuresSections
    : [{ id: 'sec-1', title: 'MOST IMPORTANT FEATURES', items: [] }];

  // =========================================================================
  // PAGE 1 RENDERING
  // =========================================================================
  drawWatermark(doc);

  let currentY = drawHeroHeader(
    doc,
    pR, pG, pB,
    companyLogoData,
    companyName,
    planName,
    planTagline
  );

  let currentPage = 1;
  let sectionGlobalIdx = 1;
  let rowGlobalIdx = 0;

  // Loop through sections and render ONE FEATURE PER COMPLETE HORIZONTAL ROW
  for (let sIdx = 0; sIdx < sections.length; sIdx++) {
    const sec = sections[sIdx];
    const items = sec.items || [];
    if (items.length === 0) continue;

    const isRiderSec =
      sec.title?.toLowerCase().includes('rider') ||
      sec.title?.toLowerCase().includes('add-on') ||
      items.some(i => i.isRider);

    // Calculate height of first row in section
    const mFirst = measureFeatureRow(doc, items[0], isRiderSec);
    const secHeadAndFirstRowH = TOKENS.sectionH + 3.8 + mFirst.exactHeight;

    // Draw elegant section divider between sections (if not top of new page)
    if (sIdx > 0 && currentY > TOP_MARGIN_RUNNING + 5) {
      const dividerH = 6.0;
      if (currentY + dividerH + secHeadAndFirstRowH > MAX_PAGE_Y) {
        doc.addPage();
        currentPage++;
        drawWatermark(doc);
        currentY = drawRunningHeader(doc, companyName, planName, pR, pG, pB);
      } else {
        currentY = drawSectionDivider(doc, currentY, pR, pG, pB);
      }
    } else if (currentY + secHeadAndFirstRowH > MAX_PAGE_Y) {
      doc.addPage();
      currentPage++;
      drawWatermark(doc);
      currentY = drawRunningHeader(doc, companyName, planName, pR, pG, pB);
    }

    // Draw Prominent Section Header Banner (Only once at start of section)
    currentY = drawSectionHeader(
      doc,
      sec.title || `SECTION ${sectionGlobalIdx}`,
      currentY,
      pR, pG, pB,
      sectionGlobalIdx
    );
    sectionGlobalIdx++;

    // Render features — ONE FEATURE PER ROW with continuous natural flow across pages
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const mRow = measureFeatureRow(doc, item, isRiderSec);
      const rowHeight = mRow.exactHeight;

      // Check if this row fits on current page; if not, switch cleanly to next page (NO CONTINUED BANNER)
      if (currentY + rowHeight > MAX_PAGE_Y) {
        doc.addPage();
        currentPage++;
        drawWatermark(doc);
        currentY = drawRunningHeader(doc, companyName, planName, pR, pG, pB);
      }

      // Draw Full-Width Feature Row
      currentY = drawFeatureRow(
        doc,
        item,
        currentY,
        pR, pG, pB,
        i + 1,
        rowGlobalIdx,
        isRiderSec
      );

      rowGlobalIdx++;
    }

    currentY += 2.0; // Clean breather after section
  }

  // Draw Terms & Conditions Block on final page
  const termsH = 24;
  if (currentY + termsH > MAX_PAGE_Y) {
    doc.addPage();
    currentPage++;
    drawWatermark(doc);
    currentY = drawRunningHeader(doc, companyName, planName, pR, pG, pB);
  }

  currentY = drawTermsBlock(doc, currentY + 1.0, pR, pG, pB);

  // Two-Pass Footers across all generated pages (Page 1 of N, Page 2 of N, etc.)
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    drawFooter(doc, p, totalPages, companyName, planName, pR, pG, pB);
  }

  // Filename formatting
  const sanitizedCompany = sanitizeForFilename(companyName);
  const sanitizedPlan    = sanitizeForFilename(planName);
  const filename = `WHYINSURED_${sanitizedCompany}_${sanitizedPlan}_Policy_Benefits.pdf`;

  return {
    doc,
    filename,
    download: () => doc.save(filename),
    getBlob:  () => doc.output('blob'),
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// 16. STEP-BY-STEP DOWNLOAD & SHARE FUNCTIONALITY
// ─────────────────────────────────────────────────────────────────────────────
export const downloadAndSharePolicyBenefitsPDF = async (company, plan, featuresSections, onProgress) => {
  // Step 1: Generate PDF
  if (onProgress) onProgress('generating');
  const result = await generatePolicyBenefitsPDF(company, plan, featuresSections);
  const blob = result.getBlob();
  const filename = result.filename;
  const cName = company?.name || company?.fullName || 'Insurance Provider';
  const pName = plan?.planName || plan?.name || 'Health Plan';
  const shareTitle = `${cName} ${pName} Policy Benefits`;
  const shareText = `Official Policy Benefits for ${pName} by ${cName}. Verified brochure from WHYINSURED.`;

  // Step 2: Trigger Download immediately onto user's device
  if (onProgress) onProgress('downloading');
  result.download();

  // Micro delay to allow browser download initiation
  await new Promise((resolve) => setTimeout(resolve, 600));
  if (onProgress) onProgress('downloaded');

  // Step 3: Trigger Share (Native file share on mobile devices)
  let shared = false;
  if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare) {
    try {
      const file = new File([blob], filename, { type: 'application/pdf' });
      if (navigator.canShare({ files: [file] })) {
        if (onProgress) onProgress('sharing');
        await navigator.share({
          files: [file],
          title: shareTitle,
          text: shareText,
        });
        shared = true;
      }
    } catch (shareErr) {
      if (shareErr.name === 'AbortError') {
        // User cancelled share dialog cleanly
        return { success: true, downloaded: true, shared: false, cancelled: true, filename };
      }
    }
  }

  return { success: true, downloaded: true, shared, filename };
};

// Backward-compatibility aliases
export const downloadOrSharePolicyBenefitsPDF = async (company, plan, featuresSections, onProgress) => {
  return downloadAndSharePolicyBenefitsPDF(company, plan, featuresSections, onProgress);
};

export const downloadPolicyBenefitsPDF = async (company, plan, featuresSections) => {
  const result = await generatePolicyBenefitsPDF(company, plan, featuresSections);
  result.download();
  return { success: true, filename: result.filename };
};

export const sharePolicyBenefitsPDF = async (company, plan, featuresSections) => {
  return downloadAndSharePolicyBenefitsPDF(company, plan, featuresSections);
};
