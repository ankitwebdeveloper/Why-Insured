import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import logoAsset from '../assets/logo.png';
import { getComparisonSections, getDerivedValue, getCompanyRatioValue } from './compareDataHelper';

// Image Base64 Cache to ensure fast retrieval
const imageBase64Cache = new Map();

// Helper to convert an image URL or import into Base64 Data URL for jsPDF
const getImageBase64 = (url) => {
  if (!url) return Promise.resolve(null);
  if (imageBase64Cache.has(url)) {
    return Promise.resolve(imageBase64Cache.get(url));
  }
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        imageBase64Cache.set(url, dataUrl);
        resolve(dataUrl);
      } catch (err) {
        console.warn('[PDF Export] Failed to convert image to base64:', err);
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
};

const formatValueText = (val) => {
  if (Array.isArray(val)) {
    return val.map(item => `• ${item}`).join(', ');
  }
  return String(val || '').trim();
};

/**
 * Checks if a feature row title or key is related to Premium or Coverage
 * to ensure 100% removal of Premium & Coverage from the PDF.
 */
const isForbiddenKey = (text) => {
  if (!text) return false;
  const lower = String(text).toLowerCase();
  return (
    lower.includes('premium') ||
    lower.includes('coverage') ||
    lower.includes('sum insured') ||
    lower.includes('base sum') ||
    lower.includes('annual premium')
  );
};

/**
 * Generates an EXACT ONE-PAGE compact WHYINSURED comparison PDF report.
 * Features symmetrical plan cards with aligned [LOGO] COMPANY NAME on top row,
 * PLAN NAME below, centered VS separator, and zero Premium/Coverage references.
 */
export const exportComparisonToPDF = async (plan1, company1, plan2, company2, onDownloaded) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 9;

  // Load WHYINSURED Logo & Company Logos as Base64
  const logoBase64 = await getImageBase64(logoAsset);
  const c1LogoBase64 = await getImageBase64(company1.logo);
  const c2LogoBase64 = await getImageBase64(company2.logo);

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Extract Brand Primary Colors
  const c1Color = company1.theme?.primary || '#14532D';
  const c2Color = company2.theme?.primary || '#002B82';

  // ============================================================
  // COMPACT HEADER (Y: 5 -> 22 mm)
  // ============================================================
  let currentY = 5;

  // 1. WHYINSURED LOGO
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', margin, currentY, 28, 9);
    } catch (e) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('WHYINSURED', margin, currentY + 6);
    }
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text('WHYINSURED', margin, currentY + 6);
  }

  // Right-aligned Date Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Comparison Report • ${todayStr}`, pageWidth - margin, currentY + 5, { align: 'right' });

  currentY += 11;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Health Insurance Plan Comparison', margin, currentY);

  currentY += 4;

  // Subtitle
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`${company1.name} ${plan1.name}   vs   ${company2.name} ${plan2.name}`, margin, currentY);

  currentY += 3;

  // Emerald Divider Bar
  doc.setFillColor(16, 185, 129); // #10B981
  doc.rect(margin, currentY, pageWidth - (margin * 2), 0.8, 'F');

  currentY += 4;

  // ============================================================
  // SYMMETRICAL DUAL PLAN SUMMARY CARDS WITH LOGO + NAME + PLAN
  // ============================================================
  const gapBetweenCards = 8; // 8 mm gap for centered VS badge
  const cardWidth = (pageWidth - (margin * 2) - gapBetweenCards) / 2; // 92 mm each
  const cardHeight = 21; // 21 mm height

  // --- Left Card: HDFC ERGO ---
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, cardWidth, cardHeight, 2.5, 2.5, 'FD');
  doc.setFillColor(c1Color);
  doc.rect(margin, currentY, cardWidth, 2.5, 'F'); // Accent top bar

  let logoY = currentY + 4.5;

  // Top Row: Logo + Company Name on EXACT SAME HORIZONTAL LINE
  if (c1LogoBase64) {
    try {
      doc.addImage(c1LogoBase64, 'PNG', margin + 4, logoY, 6.5, 6.5);
    } catch (e) {}
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(company1.name.toUpperCase(), margin + 12.5, logoY + 4.8);

  // Row Below: Plan Name
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(plan1.name, margin + 4, logoY + 11.5);

  // Bottom Detail Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Cashless: ${getDerivedValue(plan1, company1, 'cashlessHospitals')}  |  Settlement: ${getCompanyRatioValue(company1.id, 'settlement')}`, margin + 4, logoY + 15.5);

  // --- VS BADGE (CENTERED BETWEEN CARDS) ---
  const vsX = margin + cardWidth + (gapBetweenCards / 2);
  const vsY = currentY + (cardHeight / 2);

  doc.setFillColor(241, 245, 249); // #F1F5F9 Slate
  doc.setDrawColor(226, 232, 240);
  doc.circle(vsX, vsY, 3.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('VS', vsX, vsY + 0.8, { align: 'center' });

  // --- Right Card: TATA AIG ---
  const card2X = margin + cardWidth + gapBetweenCards;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(card2X, currentY, cardWidth, cardHeight, 2.5, 2.5, 'FD');
  doc.setFillColor(c2Color);
  doc.rect(card2X, currentY, cardWidth, 2.5, 'F'); // Accent top bar

  // Top Row: Logo + Company Name on EXACT SAME HORIZONTAL LINE
  if (c2LogoBase64) {
    try {
      doc.addImage(c2LogoBase64, 'PNG', card2X + 4, logoY, 6.5, 6.5);
    } catch (e) {}
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(company2.name.toUpperCase(), card2X + 12.5, logoY + 4.8);

  // Row Below: Plan Name
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(plan2.name, card2X + 4, logoY + 11.5);

  // Bottom Detail Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Cashless: ${getDerivedValue(plan2, company2, 'cashlessHospitals')}  |  Settlement: ${getCompanyRatioValue(company2.id, 'settlement')}`, card2X + 4, logoY + 15.5);

  currentY += cardHeight + 4;

  // ============================================================
  // COMPACT DETAILED COMPARISON TABLE WITH HEADER LOGOS (Y: 52 -> 270 mm)
  // NO Premium | NO Coverage
  // ============================================================
  const comparisonSections = getComparisonSections(plan1, company1, plan2, company2);
  const tableRows = [];

  comparisonSections.forEach((sec) => {
    if (isForbiddenKey(sec.title)) return;

    if (sec.isGrouped) {
      sec.groups.forEach((group) => {
        if (isForbiddenKey(group.title)) return;

        const validFeatures = group.features.filter(f => !isForbiddenKey(f.title));
        if (validFeatures.length === 0) return;

        tableRows.push([
          {
            content: `${sec.title.toUpperCase()} — ${group.title.toUpperCase()}`,
            colSpan: 3,
            styles: {
              fillColor: [241, 245, 249],
              textColor: [15, 23, 42],
              fontStyle: 'bold',
              fontSize: 6.8,
              cellPadding: 1.1,
              halign: 'left'
            }
          }
        ]);

        validFeatures.forEach((feat) => {
          tableRows.push([
            feat.title,
            formatValueText(feat.val1),
            formatValueText(feat.val2)
          ]);
        });
      });
    } else {
      const validFeatures = sec.features.filter(f => !isForbiddenKey(f.title));
      if (validFeatures.length === 0) return;

      tableRows.push([
        {
          content: sec.title.toUpperCase(),
          colSpan: 3,
          styles: {
            fillColor: [241, 245, 249],
            textColor: [15, 23, 42],
            fontStyle: 'bold',
            fontSize: 6.8,
            cellPadding: 1.1,
            halign: 'left'
          }
        }
      ]);

      validFeatures.forEach((feat) => {
        tableRows.push([
          feat.title,
          formatValueText(feat.val1),
          formatValueText(feat.val2)
        ]);
      });
    }
  });

  // Render Compact 1-Page Table
  autoTable(doc, {
    startY: currentY,
    head: [
      [
        { content: 'FEATURE / SPECIFICATION', styles: { halign: 'left' } },
        { content: `       ${company1.name}\n${plan1.name}`, styles: { halign: 'center', fillColor: c1Color } },
        { content: `       ${company2.name}\n${plan2.name}`, styles: { halign: 'center', fillColor: c2Color } }
      ]
    ],
    body: tableRows,
    margin: { left: margin, right: margin, bottom: 11 },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 6.6,
      cellPadding: 1.3,
      valign: 'middle',
      overflow: 'linebreak',
      textColor: [51, 65, 85]
    },
    headStyles: {
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 7.5,
      cellPadding: 2
    },
    columnStyles: {
      0: { cellWidth: 50, fontStyle: 'bold', textColor: [15, 23, 42] },
      1: { cellWidth: 'auto', halign: 'center' },
      2: { cellWidth: 'auto', halign: 'center' }
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252] // #F8FAFC
    },
    didDrawCell: (data) => {
      // Draw Company Logos inside Table Header cells
      if (data.section === 'head') {
        if (data.column.index === 1 && c1LogoBase64) {
          try {
            doc.addImage(c1LogoBase64, 'PNG', data.cell.x + 3, data.cell.y + 1.5, 5, 5);
          } catch (e) {}
        } else if (data.column.index === 2 && c2LogoBase64) {
          try {
            doc.addImage(c2LogoBase64, 'PNG', data.cell.x + 3, data.cell.y + 1.5, 5, 5);
          } catch (e) {}
        }
      }
    },
    didDrawPage: (data) => {
      // Footer
      const totalPages = doc.internal.getNumberOfPages();
      const currentPage = data.pageNumber;

      doc.setDrawColor(226, 232, 240);
      doc.line(margin, pageHeight - 9, pageWidth - margin, pageHeight - 9);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(148, 163, 184);

      doc.text(
        'WHYINSURED • Compare • Choose • Protect',
        margin,
        pageHeight - 5
      );

      doc.text(
        `Page ${currentPage} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 5,
        { align: 'right' }
      );
    }
  });

  // ============================================================
  // EXACT FILENAME & DOWNLOAD FIRST -> SHARE SECOND FLOW
  // ============================================================
  const sanitizedPlan1 = plan1.name.replace(/[^a-zA-Z0-9]/g, '-');
  const sanitizedPlan2 = plan2.name.replace(/[^a-zA-Z0-9]/g, '-');

  const fileName = (plan1.id === 'hdfc-optima-secure-plus' && plan2.id === 'medicare-select')
    ? 'WHYINSURED_HDFC-ERGO-Optima-Secure-Plus_vs_TATA-AIG-Medicare-Select.pdf'
    : `WHYINSURED_${company1.name.replace(/\s+/g, '-')}-${sanitizedPlan1}_vs_${company2.name.replace(/\s+/g, '-')}-${sanitizedPlan2}.pdf`;

  console.log('[PDF Export] Step 1: Generating PDF Blob and single File object for:', fileName);

  // 1. GENERATE PDF BLOB & FILE OBJECT (SINGLE PDF INSTANCE)
  let pdfBlob;
  try {
    pdfBlob = doc.output('blob');
  } catch (e) {
    console.warn('[PDF Export] doc.output("blob") failed, using arraybuffer fallback:', e);
    const pdfArrayBuffer = doc.output('arraybuffer');
    pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
  }

  const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });

  // 2. TRIGGER AUTOMATIC DOWNLOAD (WITHOUT AWAITING DELAYS OR RE-GENERATING)
  console.log('[PDF Export] Step 2: Triggering browser download using single File object...');
  try {
    const downloadUrl = URL.createObjectURL(pdfFile);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 10000);
  } catch (downloadErr) {
    console.error('[PDF Export] Object URL download failed, falling back to doc.save():', downloadErr);
    doc.save(fileName);
  }

  if (typeof onDownloaded === 'function') {
    try {
      onDownloaded();
    } catch (e) {}
  }

  // 3. IMMEDIATELY ATTEMPT NATIVE SHARE USING THE EXACT SAME FILE OBJECT
  console.log('[PDF Export] Step 3: Checking navigator.share support...');

  let shareSuccess = false;
  let shareCancelled = false;
  let shareUnsupported = false;

  const isNavShareSupported = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  if (isNavShareSupported) {
    let canShareFiles = false;
    try {
      if (typeof navigator.canShare === 'function') {
        canShareFiles = navigator.canShare({ files: [pdfFile] });
        console.log('[PDF Export] navigator.canShare({ files: [pdfFile] }) returned:', canShareFiles);
      } else {
        canShareFiles = true;
      }
    } catch (canShareErr) {
      console.error('[PDF Export] Error during navigator.canShare check:', canShareErr);
      canShareFiles = false;
    }

    if (canShareFiles) {
      try {
        console.log('[PDF Export] Invoking navigator.share with pdfFile...');
        await navigator.share({
          title: 'WHYINSURED Insurance Comparison',
          text: `${company1.name} ${plan1.name} vs ${company2.name} ${plan2.name}`,
          files: [pdfFile]
        });
        console.log('[PDF Export] navigator.share completed successfully!');
        shareSuccess = true;
      } catch (shareErr) {
        console.error('[PDF Export] navigator.share failed or was cancelled:', shareErr);
        const errName = shareErr.name || '';
        const errMsg = String(shareErr.message || '').toLowerCase();
        if (errName === 'AbortError' || errMsg.includes('cancel') || errMsg.includes('aborted')) {
          console.log('[PDF Export] User cancelled native share sheet.');
          shareCancelled = true;
        } else {
          shareUnsupported = true;
        }
      }
    } else {
      console.warn('[PDF Export] File sharing is not supported by navigator.canShare on this browser.');
      shareUnsupported = true;
    }
  } else {
    console.warn('[PDF Export] navigator.share is not supported on this browser/environment.');
    shareUnsupported = true;
  }

  return {
    success: true,
    downloaded: true,
    shared: shareSuccess,
    cancelled: shareCancelled,
    unsupported: shareUnsupported
  };
};

/**
 * Generates an official, comprehensive single-plan PDF document for WHYINSURED.
 * Includes Company & WHYINSURED logos, Performance Marksheet, Fundamentals,
 * 4 Feature Categories, Conditions, and Exclusions.
 */
export const exportPlanDetailToPDF = async (plan, company, options = {}) => {
  const { onDownloaded, share = false, featureData = null } = options;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 10;

  // Load WHYINSURED Logo & Company Logo as Base64
  const logoBase64 = await getImageBase64(logoAsset);
  const companyLogoBase64 = await getImageBase64(company.logo);

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const primaryColor = company.theme?.primary || '#0EA5E9';

  // ============================================================
  // COMPACT HEADER (Y: 6 -> 24 mm)
  // ============================================================
  let currentY = 6;

  // 1. WHYINSURED LOGO
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', margin, currentY, 28, 9);
    } catch (e) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('WHYINSURED', margin, currentY + 6);
    }
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text('WHYINSURED', margin, currentY + 6);
  }

  // Right-aligned Date Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Official Plan Specification • ${todayStr}`, pageWidth - margin, currentY + 5, { align: 'right' });

  currentY += 11;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Comprehensive Policy Document', margin, currentY);

  currentY += 4;

  // Subtitle
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`${company.name} — ${plan.name}`, margin, currentY);

  currentY += 3;

  // Colored Divider Bar
  doc.setFillColor(14, 165, 233); // #0EA5E9 Primary
  doc.rect(margin, currentY, pageWidth - (margin * 2), 0.8, 'F');

  currentY += 4;

  // ============================================================
  // PLAN OVERVIEW CARD (Y: 28 -> 48 mm)
  // ============================================================
  const cardWidth = pageWidth - (margin * 2);
  const cardHeight = 18;

  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, cardWidth, cardHeight, 2, 2, 'FD');
  doc.setFillColor(primaryColor);
  doc.rect(margin, currentY, cardWidth, 2, 'F');

  let logoY = currentY + 3.5;
  if (companyLogoBase64) {
    try {
      doc.addImage(companyLogoBase64, 'PNG', margin + 4, logoY, 18, 10);
    } catch (e) {}
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(company.fullName ? company.fullName.toUpperCase() : company.name.toUpperCase(), margin + 25, logoY + 4);

  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(plan.name, margin + 25, logoY + 9);

  // Network size badge on right
  const networkSize = getDerivedValue(plan, company, 'cashlessHospitals');
  const settlementVal = getCompanyRatioValue(company.id, 'settlement');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Cashless Network: ${networkSize}   |   Claim Settlement: ${settlementVal}`, pageWidth - margin - 4, logoY + 6.5, { align: 'right' });

  currentY += cardHeight + 4;

  // ============================================================
  // TABLE DATA GENERATION
  // ============================================================
  const tableRows = [];

  // SECTION 1: RATIO (MARKSHEET)
  tableRows.push([
    {
      content: '1. PERFORMANCE & RATIO (MARKSHEET)',
      colSpan: 2,
      styles: {
        fillColor: [20, 83, 45], // Dark green gradient reference
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 7.2,
        cellPadding: 1.5,
        halign: 'left'
      }
    }
  ]);
  tableRows.push(['Claim Settlement Ratio', getCompanyRatioValue(company.id, 'settlement')]);
  tableRows.push(['Incurred Claim Ratio (ICR)', getCompanyRatioValue(company.id, 'incurred')]);
  tableRows.push(['Solvency Ratio (IRDAI min: 1.50)', getCompanyRatioValue(company.id, 'solvency')]);
  tableRows.push(['Complaints Ratio (per 10k claims)', getCompanyRatioValue(company.id, 'complaint')]);

  // SECTION 2: FUNDAMENTAL / FAMILY BACKGROUND
  tableRows.push([
    {
      content: '2. FUNDAMENTAL / POLICY ARCHITECTURE',
      colSpan: 2,
      styles: {
        fillColor: [20, 83, 45],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 7.2,
        cellPadding: 1.5,
        halign: 'left'
      }
    }
  ]);
  tableRows.push(['Eligibility Criteria', plan.details?.eligibility || '18 to 65 Years']);
  tableRows.push(['Cashless Hospitals Network', getDerivedValue(plan, company, 'cashlessHospitals')]);
  tableRows.push(['Claim Support System', getDerivedValue(plan, company, 'claimSupport')]);
  tableRows.push(['Ambulance Cover', getDerivedValue(plan, company, 'ambulance')]);

  // SECTION 3: FEATURES DETAIL (USE CUSTOM FEATURE DATA IF PROVIDED, ELSE COMPOSE)
  if (featureData) {
    // 3.1 Most Important Features
    if (featureData.mostImportant && featureData.mostImportant.length > 0) {
      tableRows.push([
        {
          content: '3. MOST IMPORTANT FEATURES',
          colSpan: 2,
          styles: {
            fillColor: [20, 83, 45],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 7.2,
            cellPadding: 1.5,
            halign: 'left'
          }
        }
      ]);
      featureData.mostImportant.forEach(feat => {
        tableRows.push([feat.title, `${feat.subtitle ? `[${feat.subtitle}] ` : ''}${feat.summary}`]);
      });
    }

    // 3.2 Value Added Features
    if (featureData.valueAdded && featureData.valueAdded.length > 0) {
      tableRows.push([
        {
          content: '4. VALUE ADDED FEATURES',
          colSpan: 2,
          styles: {
            fillColor: [20, 83, 45],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 7.2,
            cellPadding: 1.5,
            halign: 'left'
          }
        }
      ]);
      featureData.valueAdded.forEach(feat => {
        tableRows.push([feat.title, `${feat.subtitle ? `[${feat.subtitle}] ` : ''}${feat.summary}`]);
      });
    }

    // 3.3 Additional Features
    if (featureData.additional && featureData.additional.length > 0) {
      tableRows.push([
        {
          content: '5. ADDITIONAL FEATURES',
          colSpan: 2,
          styles: {
            fillColor: [20, 83, 45],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 7.2,
            cellPadding: 1.5,
            halign: 'left'
          }
        }
      ]);
      featureData.additional.forEach(feat => {
        tableRows.push([feat.title, `${feat.subtitle ? `[${feat.subtitle}] ` : ''}${feat.summary}`]);
      });
    }

    // 3.4 Optional Riders
    if (featureData.riders && featureData.riders.length > 0) {
      tableRows.push([
        {
          content: '6. OPTIONAL RIDERS (ADD-ONS)',
          colSpan: 2,
          styles: {
            fillColor: [20, 83, 45],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 7.2,
            cellPadding: 1.5,
            halign: 'left'
          }
        }
      ]);
      featureData.riders.forEach(feat => {
        tableRows.push([feat.title, `${feat.subtitle ? `[${feat.subtitle}] ` : ''}${feat.summary}`]);
      });
    }
  } else {
    // Fallback: Use standard features
    tableRows.push([
      {
        content: '3. KEY PLAN FEATURES & BENEFITS',
        colSpan: 2,
        styles: {
          fillColor: [20, 83, 45],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 7.2,
          cellPadding: 1.5,
          halign: 'left'
        }
      }
    ]);
    if (plan.benefits && plan.benefits.length > 0) {
      plan.benefits.forEach((benefit, bIdx) => {
        tableRows.push([`Benefit #${bIdx + 1}`, benefit]);
      });
    }
  }

  // SECTION 4: CONDITION & EXCLUSIONS
  tableRows.push([
    {
      content: '7. POLICY CONDITIONS, WAITING PERIODS & EXCLUSIONS',
      colSpan: 2,
      styles: {
        fillColor: [20, 83, 45],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 7.2,
        cellPadding: 1.5,
        halign: 'left'
      }
    }
  ]);
  tableRows.push(['Initial Waiting Period', getDerivedValue(plan, company, 'initialWaitingPeriod')]);
  tableRows.push(['Pre-Existing Diseases Waiting', plan.details?.waitingPeriod || '36 Months']);
  tableRows.push(['Room Rent & ICU Limit', plan.details?.roomRent || 'No Limit']);
  tableRows.push(['Important Exclusions', plan.details?.exclusions || 'Cosmetic surgery, intentional self-harm']);

  // Render Table
  autoTable(doc, {
    startY: currentY,
    head: [
      [
        { content: 'SPECIFICATION / CRITERIA', styles: { halign: 'left', cellWidth: 55 } },
        { content: `${company.name.toUpperCase()} — ${plan.name.toUpperCase()} DETAILS`, styles: { halign: 'left' } }
      ]
    ],
    body: tableRows,
    margin: { left: margin, right: margin, bottom: 10 },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 6.8,
      cellPadding: 1.4,
      valign: 'middle',
      overflow: 'linebreak',
      textColor: [51, 65, 85]
    },
    headStyles: {
      fillColor: [14, 165, 233], // Primary Cyan
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 7.5,
      cellPadding: 2
    },
    columnStyles: {
      0: { cellWidth: 55, fontStyle: 'bold', textColor: [15, 23, 42] },
      1: { cellWidth: 'auto' }
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    didDrawPage: (data) => {
      const totalPages = doc.internal.getNumberOfPages();
      const currentPage = data.pageNumber;

      doc.setDrawColor(226, 232, 240);
      doc.line(margin, pageHeight - 8, pageWidth - margin, pageHeight - 8);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(148, 163, 184);

      doc.text(
        'WHYINSURED • Official Policy Document • T&C Apply',
        margin,
        pageHeight - 4.5
      );

      doc.text(
        `Page ${currentPage} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 4.5,
        { align: 'right' }
      );
    }
  });

  // Filename
  const sanitizedPlan = plan.name.replace(/[^a-zA-Z0-9]/g, '-');
  const fileName = `WHYINSURED_${company.name.replace(/\s+/g, '-')}_${sanitizedPlan}.pdf`;

  console.log('[PDF Export] Generating single plan PDF:', fileName);

  let pdfBlob;
  try {
    pdfBlob = doc.output('blob');
  } catch (e) {
    const pdfArrayBuffer = doc.output('arraybuffer');
    pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
  }

  const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });

  // Browser download
  try {
    const downloadUrl = URL.createObjectURL(pdfFile);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 10000);
  } catch (downloadErr) {
    console.error('[PDF Export] Fallback to doc.save():', downloadErr);
    doc.save(fileName);
  }

  if (typeof onDownloaded === 'function') {
    try {
      onDownloaded();
    } catch (e) {}
  }

  let shareSuccess = false;
  let shareCancelled = false;
  let shareUnsupported = false;

  if (share && typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    let canShareFiles = false;
    try {
      if (typeof navigator.canShare === 'function') {
        canShareFiles = navigator.canShare({ files: [pdfFile] });
      } else {
        canShareFiles = true;
      }
    } catch (canShareErr) {
      canShareFiles = false;
    }

    if (canShareFiles) {
      try {
        await navigator.share({
          title: `WHYINSURED - ${company.name} ${plan.name}`,
          text: `Check out ${company.name} ${plan.name} policy specifications and benefits.`,
          files: [pdfFile]
        });
        shareSuccess = true;
      } catch (shareErr) {
        const errName = shareErr.name || '';
        const errMsg = String(shareErr.message || '').toLowerCase();
        if (errName === 'AbortError' || errMsg.includes('cancel') || errMsg.includes('aborted')) {
          shareCancelled = true;
        } else {
          shareUnsupported = true;
        }
      }
    } else {
      shareUnsupported = true;
    }
  }

  return {
    success: true,
    downloaded: true,
    shared: shareSuccess,
    cancelled: shareCancelled,
    unsupported: shareUnsupported
  };
};
