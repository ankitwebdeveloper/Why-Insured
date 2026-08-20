import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import logoAsset from '../assets/logo.png';
import { getComparisonSections, getDerivedValue, getCompanyRatioValue } from './compareDataHelper';

// Helper to convert logo to Base64
const getImageBase64 = (url) => {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (err) {
        console.warn('Failed to convert logo to base64:', err);
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
 * Generates an EXACT ONE-PAGE compact, high-density WHYINSURED comparison PDF.
 * Removes 100% of Premium and Coverage references.
 */
export const exportComparisonToPDF = async (plan1, company1, plan2, company2) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 10;

  const logoBase64 = await getImageBase64(logoAsset);

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Extract Brand Primary Colors
  const c1Color = company1.theme?.primary || '#14532D';
  const c2Color = company2.theme?.primary || '#002B82';

  // ============================================================
  // COMPACT HEADER (Y: 6 -> 28 mm)
  // ============================================================
  let currentY = 6;

  // 1. WHYINSURED LOGO
  if (logoBase64) {
    try {
      doc.addImage(logoBase64, 'PNG', margin, currentY, 30, 10);
    } catch (e) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.text('WHYINSURED', margin, currentY + 7);
    }
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text('WHYINSURED', margin, currentY + 7);
  }

  // Right-aligned Date Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Comparison Report • ${todayStr}`, pageWidth - margin, currentY + 6, { align: 'right' });

  currentY += 13;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('Health Insurance Plan Comparison', margin, currentY);

  currentY += 4.5;

  // Subtitle
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`${company1.name} ${plan1.name}   vs   ${company2.name} ${plan2.name}`, margin, currentY);

  currentY += 3.5;

  // Emerald Divider Bar
  doc.setFillColor(16, 185, 129); // #10B981
  doc.rect(margin, currentY, pageWidth - (margin * 2), 0.8, 'F');

  currentY += 4.5;

  // ============================================================
  // COMPACT DUAL PLAN SUMMARY CARDS (Y: 28 -> 48 mm)
  // NO Premium | NO Coverage
  // ============================================================
  const cardWidth = (pageWidth - (margin * 2) - 5) / 2; // 92.5 mm each
  const cardHeight = 18.5;

  // --- Left Card: Company 1 (HDFC ERGO) ---
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, cardWidth, cardHeight, 2, 2, 'FD');
  doc.setFillColor(c1Color);
  doc.rect(margin, currentY, cardWidth, 2.5, 'F');

  let c1Y = currentY + 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(company1.name.toUpperCase(), margin + 4, c1Y);

  c1Y += 4;
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(plan1.name, margin + 4, c1Y);

  c1Y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(51, 65, 85);
  doc.text(`Cashless: ${getDerivedValue(plan1, company1, 'cashlessHospitals')}  |  Settlement Ratio: ${getCompanyRatioValue(company1.id, 'settlement')}`, margin + 4, c1Y);

  // --- Right Card: Company 2 (TATA AIG) ---
  const card2X = margin + cardWidth + 5;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(card2X, currentY, cardWidth, cardHeight, 2, 2, 'FD');
  doc.setFillColor(c2Color);
  doc.rect(card2X, currentY, cardWidth, 2.5, 'F');

  let c2Y = currentY + 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(company2.name.toUpperCase(), card2X + 4, c2Y);

  c2Y += 4;
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(plan2.name, card2X + 4, c2Y);

  c2Y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(51, 65, 85);
  doc.text(`Cashless: ${getDerivedValue(plan2, company2, 'cashlessHospitals')}  |  Settlement Ratio: ${getCompanyRatioValue(company2.id, 'settlement')}`, card2X + 4, c2Y);

  currentY += cardHeight + 4;

  // ============================================================
  // COMPACT DETAILED COMPARISON TABLE (Y: 51 -> 270 mm)
  // NO Premium | NO Coverage
  // ============================================================
  const comparisonSections = getComparisonSections(plan1, company1, plan2, company2);
  const tableRows = [];

  comparisonSections.forEach((sec) => {
    // Skip if section title itself is forbidden
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
              fontSize: 7,
              cellPadding: 1.2,
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
            fontSize: 7,
            cellPadding: 1.2,
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
        { content: `${company1.name}\n${plan1.name}`, styles: { halign: 'center', fillColor: c1Color } },
        { content: `${company2.name}\n${plan2.name}`, styles: { halign: 'center', fillColor: c2Color } }
      ]
    ],
    body: tableRows,
    margin: { left: margin, right: margin, bottom: 12 },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 6.8,
      cellPadding: 1.5,
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
    didDrawPage: (data) => {
      // Single Page Guarantee Footer
      const totalPages = doc.internal.getNumberOfPages();
      const currentPage = data.pageNumber;

      doc.setDrawColor(226, 232, 240);
      doc.line(margin, pageHeight - 10, pageWidth - margin, pageHeight - 10);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);

      doc.text(
        'WHYINSURED • Compare • Choose • Protect',
        margin,
        pageHeight - 5.5
      );

      doc.text(
        `Page ${currentPage} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 5.5,
        { align: 'right' }
      );
    }
  });

  // ============================================================
  // EXACT FILENAME & DIRECT SHARE HANDLER
  // ============================================================
  const sanitizedPlan1 = plan1.name.replace(/[^a-zA-Z0-9]/g, '-');
  const sanitizedPlan2 = plan2.name.replace(/[^a-zA-Z0-9]/g, '-');

  const fileName = (plan1.id === 'optima-secure' && plan2.id === 'medicare-select')
    ? 'WHYINSURED_HDFC-ERGO-Optima-Secure-Plus_vs_TATA-AIG-Medicare-Select.pdf'
    : `WHYINSURED_${company1.name.replace(/\s+/g, '-')}-${sanitizedPlan1}_vs_${company2.name.replace(/\s+/g, '-')}-${sanitizedPlan2}.pdf`;

  const pdfArrayBuffer = doc.output('arraybuffer');
  const pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' });
  const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });

  if (navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
    try {
      await navigator.share({
        title: `WHYINSURED Comparison: ${plan1.name} vs ${plan2.name}`,
        text: `Check out this side-by-side health insurance comparison between ${company1.name} ${plan1.name} and ${company2.name} ${plan2.name}.`,
        files: [pdfFile]
      });
      return { shared: true, downloaded: false };
    } catch (shareErr) {
      if (shareErr.name !== 'AbortError') {
        console.warn('Native share failed, executing download fallback:', shareErr);
      }
      doc.save(fileName);
      return { shared: false, downloaded: true };
    }
  } else {
    doc.save(fileName);
    return { shared: false, downloaded: true };
  }
};
