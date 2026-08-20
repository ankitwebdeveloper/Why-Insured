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
    return val.map(item => `• ${item}`).join('\n');
  }
  return String(val || '').trim();
};

/**
 * Generates an ultra-premium multi-page WHYINSURED comparison PDF document.
 */
export const exportComparisonToPDF = async (plan1, company1, plan2, company2, coverage = '20') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 14;

  const logoBase64 = await getImageBase64(logoAsset);

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Extract Brand Primary Colors
  const c1Color = company1.theme?.primary || '#14532D';
  const c2Color = company2.theme?.primary || '#002B82';

  // ==========================================
  // PAGE 1: HEADER + SUMMARY CARDS + QUICK COMP
  // ==========================================

  let currentY = 12;

  // 1. WHYINSURED LOGO & HEADER
  if (logoBase64) {
    try {
      // 36mm x 12mm maintaining sharp 3:1 ratio
      doc.addImage(logoBase64, 'PNG', margin, currentY, 36, 12);
    } catch (e) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      doc.text('WHYINSURED', margin, currentY + 8);
    }
  } else {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('WHYINSURED', margin, currentY + 8);
  }

  // Right-side Date Tag
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Comparison Report • ${todayStr}`, pageWidth - margin, currentY + 5, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.text(`Base Coverage Option: Rs. ${coverage} Lakh`, pageWidth - margin, currentY + 10, { align: 'right' });

  currentY += 17;

  // Document Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('Health Insurance Plan Comparison', margin, currentY);

  currentY += 5.5;

  // Subtitle
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(`${company1.name} ${plan1.name}   vs   ${company2.name} ${plan2.name}`, margin, currentY);

  currentY += 5;

  // Emerald Divider Bar
  doc.setFillColor(16, 185, 129); // #10B981
  doc.rect(margin, currentY, pageWidth - (margin * 2), 1, 'F');

  currentY += 7;

  // 2. DUAL PLAN SUMMARY CARDS
  const cardWidth = (pageWidth - (margin * 2) - 6) / 2; // 88 mm each
  const cardHeight = 44;

  // --- Left Card: Company 1 (HDFC ERGO) ---
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, currentY, cardWidth, cardHeight, 3, 3, 'FD');

  // Top accent bar
  doc.setFillColor(c1Color);
  doc.rect(margin, currentY, cardWidth, 3, 'F');

  let card1Y = currentY + 7;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(company1.name.toUpperCase(), margin + 5, card1Y);

  card1Y += 5;
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(plan1.name, margin + 5, card1Y);

  card1Y += 6;
  doc.setFontSize(10);
  doc.setTextColor(5, 150, 105); // Emerald premium
  doc.text(plan1.premium || 'Rs. 14,500/year', margin + 5, card1Y);

  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Rs. ${coverage} Lakh Base Coverage`, margin + cardWidth - 5, card1Y, { align: 'right' });

  card1Y += 5;
  doc.setDrawColor(241, 245, 249);
  doc.line(margin + 4, card1Y, margin + cardWidth - 4, card1Y);

  card1Y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`• Cashless Hospitals: ${getDerivedValue(plan1, company1, 'cashlessHospitals')}`, margin + 5, card1Y);
  card1Y += 4;
  doc.text(`• Settlement Ratio: ${getCompanyRatioValue(company1.id, 'settlement')}`, margin + 5, card1Y);
  card1Y += 4;
  doc.text(`• Room Rent: ${plan1.details?.roomRent || 'No Capping'}`, margin + 5, card1Y);

  // --- Right Card: Company 2 (TATA AIG) ---
  const card2X = margin + cardWidth + 6;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(card2X, currentY, cardWidth, cardHeight, 3, 3, 'FD');

  // Top accent bar
  doc.setFillColor(c2Color);
  doc.rect(card2X, currentY, cardWidth, 3, 'F');

  let card2Y = currentY + 7;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(company2.name.toUpperCase(), card2X + 5, card2Y);

  card2Y += 5;
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(plan2.name, card2X + 5, card2Y);

  card2Y += 6;
  doc.setFontSize(10);
  doc.setTextColor(5, 150, 105);
  doc.text(plan2.premium || 'Rs. 10,500/year', card2X + 5, card2Y);

  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text(`Rs. ${coverage} Lakh Base Coverage`, card2X + cardWidth - 5, card2Y, { align: 'right' });

  card2Y += 5;
  doc.setDrawColor(241, 245, 249);
  doc.line(card2X + 4, card2Y, card2X + cardWidth - 4, card2Y);

  card2Y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`• Cashless Hospitals: ${getDerivedValue(plan2, company2, 'cashlessHospitals')}`, card2X + 5, card2Y);
  card2Y += 4;
  doc.text(`• Settlement Ratio: ${getCompanyRatioValue(company2.id, 'settlement')}`, card2X + 5, card2Y);
  card2Y += 4;
  doc.text(`• Room Rent: ${plan2.details?.roomRent || 'Single Private Room'}`, card2X + 5, card2Y);

  currentY += cardHeight + 8;

  // 3. QUICK COMPARISON TABLE (Page 1)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('EXECUTIVE QUICK COMPARISON', margin, currentY);

  currentY += 3;

  const quickRows = [
    ['Annual Premium', plan1.premium || 'N/A', plan2.premium || 'N/A'],
    ['Sum Insured Coverage', `Rs. ${coverage} Lakh`, `Rs. ${coverage} Lakh`],
    ['Claim Settlement Ratio', getCompanyRatioValue(company1.id, 'settlement'), getCompanyRatioValue(company2.id, 'settlement')],
    ['Cashless Hospitals Network', getDerivedValue(plan1, company1, 'cashlessHospitals'), getDerivedValue(plan2, company2, 'cashlessHospitals')],
    ['Room Rent Capping', plan1.details?.roomRent || 'No Capping', plan2.details?.roomRent || 'Single Private Room'],
    ['Restoration Benefit', getDerivedValue(plan1, company1, 'restoration'), getDerivedValue(plan2, company2, 'restoration')],
    ['No Claim Bonus (NCB)', getDerivedValue(plan1, company1, 'noClaimBonus'), getDerivedValue(plan2, company2, 'noClaimBonus')],
    ['Pre & Post Hospitalisation', plan1.details?.prePostHospital || '60 & 180 Days', plan2.details?.prePostHospital || '30 & 60 Days'],
    ['Initial Waiting Period', getDerivedValue(plan1, company1, 'initialWaitingPeriod'), getDerivedValue(plan2, company2, 'initialWaitingPeriod')],
    ['Pre-Existing Disease Wait', getDerivedValue(plan1, company1, 'preExistingDisease'), getDerivedValue(plan2, company2, 'preExistingDisease')]
  ];

  autoTable(doc, {
    startY: currentY,
    head: [
      [
        { content: 'KEY COMPARISON METRIC', styles: { halign: 'left' } },
        { content: `${company1.name}\n${plan1.name}`, styles: { halign: 'center', fillColor: c1Color } },
        { content: `${company2.name}\n${plan2.name}`, styles: { halign: 'center', fillColor: c2Color } }
      ]
    ],
    body: quickRows,
    margin: { left: margin, right: margin },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 8,
      cellPadding: 2.5,
      valign: 'middle'
    },
    headStyles: {
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8.5
    },
    columnStyles: {
      0: { cellWidth: 54, fontStyle: 'bold', textColor: [15, 23, 42] },
      1: { cellWidth: 'auto', halign: 'center' },
      2: { cellWidth: 'auto', halign: 'center' }
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252] // #F8FAFC
    }
  });

  // ==========================================
  // PAGE 2+: KEY BENEFITS & DETAILED SECTIONS
  // ==========================================
  doc.addPage();
  currentY = 14;

  // Section Header: KEY BENEFITS
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('KEY PLAN BENEFITS & STANDOUT FEATURES', margin, currentY);

  currentY += 5;

  // Key Benefits Dual Summary Cards
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, currentY, cardWidth, 26, 2, 2, 'FD');
  doc.roundedRect(card2X, currentY, cardWidth, 26, 2, 2, 'FD');

  // Left Key Benefits
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text(`${plan1.name} Key Highlights:`, margin + 4, currentY + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const p1Benefits = plan1.benefits || ['2x Base Coverage with Secure Benefit', 'No room rent capping or limit', 'Automatic 100% restoration'];
  p1Benefits.slice(0, 3).forEach((b, i) => {
    doc.text(`• ${b}`, margin + 4, currentY + 10 + (i * 4.5));
  });

  // Right Key Benefits
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text(`${plan2.name} Key Highlights:`, card2X + 4, currentY + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const p2Benefits = plan2.benefits || ['100% Inpatient hospitalisation cover', 'Single Private Room without daily rent limit', '540+ Day Care procedures covered'];
  p2Benefits.slice(0, 3).forEach((b, i) => {
    doc.text(`• ${b}`, card2X + 4, currentY + 10 + (i * 4.5));
  });

  currentY += 30;

  // Detailed Section Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('COMPLETE FEATURE-BY-FEATURE DETAILED BREAKDOWN', margin, currentY);

  currentY += 3;

  // Build All Detailed Sections Data
  const comparisonSections = getComparisonSections(plan1, company1, plan2, company2);
  const detailedRows = [];

  comparisonSections.forEach((sec) => {
    if (sec.isGrouped) {
      sec.groups.forEach((group) => {
        detailedRows.push([
          {
            content: `${sec.title.toUpperCase()} — ${group.title.toUpperCase()}`,
            colSpan: 3,
            styles: {
              fillColor: [241, 245, 249],
              textColor: [15, 23, 42],
              fontStyle: 'bold',
              fontSize: 8,
              halign: 'left'
            }
          }
        ]);
        group.features.forEach((feat) => {
          detailedRows.push([
            feat.title,
            formatValueText(feat.val1),
            formatValueText(feat.val2)
          ]);
        });
      });
    } else {
      detailedRows.push([
        {
          content: sec.title.toUpperCase(),
          colSpan: 3,
          styles: {
            fillColor: [241, 245, 249],
            textColor: [15, 23, 42],
            fontStyle: 'bold',
            fontSize: 8,
            halign: 'left'
          }
        }
      ]);
      sec.features.forEach((feat) => {
        detailedRows.push([
          feat.title,
          formatValueText(feat.val1),
          formatValueText(feat.val2)
        ]);
      });
    }
  });

  autoTable(doc, {
    startY: currentY,
    showHead: 'everyPage',
    head: [
      [
        { content: 'FEATURE / CLAUSE', styles: { halign: 'left' } },
        { content: `${company1.name}\n${plan1.name}`, styles: { halign: 'center', fillColor: c1Color } },
        { content: `${company2.name}\n${plan2.name}`, styles: { halign: 'center', fillColor: c2Color } }
      ]
    ],
    body: detailedRows,
    margin: { left: margin, right: margin, bottom: 20 },
    theme: 'grid',
    styles: {
      font: 'helvetica',
      fontSize: 7.5,
      cellPadding: 2.5,
      valign: 'middle',
      overflow: 'linebreak',
      textColor: [51, 65, 85]
    },
    headStyles: {
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8
    },
    columnStyles: {
      0: { cellWidth: 54, fontStyle: 'bold', textColor: [15, 23, 42] },
      1: { cellWidth: 'auto', halign: 'center' },
      2: { cellWidth: 'auto', halign: 'center' }
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    didDrawPage: (data) => {
      const totalPages = doc.internal.getNumberOfPages();
      const currentPage = data.pageNumber;

      // Footer line
      doc.setDrawColor(226, 232, 240);
      doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);

      doc.text(
        'WHYINSURED • Compare • Choose • Protect',
        margin,
        pageHeight - 7
      );

      doc.text(
        `Page ${currentPage} of ${totalPages}`,
        pageWidth - margin,
        pageHeight - 7,
        { align: 'right' }
      );

      // On final page, render official disclaimer
      if (currentPage === totalPages) {
        doc.setFontSize(6.5);
        doc.setTextColor(148, 163, 184);
        doc.text(
          'Disclaimer: This report is generated dynamically for informational purposes based on public IRDAI policy terms. Final premium and coverage are subject to insurer underwriting.',
          margin,
          pageHeight - 4
        );
      }
    }
  });

  // ==========================================
  // FILENAME & SHARE / DOWNLOAD HANDLER
  // ==========================================
  const sanitizedPlan1 = plan1.name.replace(/[^a-zA-Z0-9]/g, '-');
  const sanitizedPlan2 = plan2.name.replace(/[^a-zA-Z0-9]/g, '-');

  // Exact filename format requested: WHYINSURED_HDFC-ERGO-Optima-Secure-Plus_vs_TATA-AIG-Medicare-Select.pdf
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
        text: `Here is the official WHYINSURED comparison report between ${company1.name} ${plan1.name} and ${company2.name} ${plan2.name}.`,
        files: [pdfFile]
      });
      return { shared: true, downloaded: false };
    } catch (shareErr) {
      if (shareErr.name !== 'AbortError') {
        console.warn('Native share failed, saving file:', shareErr);
      }
      doc.save(fileName);
      return { shared: false, downloaded: true };
    }
  } else {
    doc.save(fileName);
    return { shared: false, downloaded: true };
  }
};
