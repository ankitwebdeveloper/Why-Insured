import { companiesData } from '../data/companies.js';
import { optimaSecurePlusData } from '../data/optimaSecurePlusData.js';
import { HDFC_PLANS_DATA } from '../data/hdfcPlansData.js';
import { TATA_AIG_PLANS_DATA } from '../data/tataAigPlansData.js';
import { STAR_HEALTH_PLANS_DATA } from '../data/starHealthPlansData.js';
import { NIVA_BUPA_PLANS_DATA } from '../data/nivaBupaPlansData.js';
import { ICICI_LOMBARD_PLANS_DATA } from '../data/iciciLombardPlansData.js';
import { CARE_HEALTH_PLANS_DATA } from '../data/careHealthPlansData.js';

// Helper to check if a feature has a genuine video asset (and not a placeholder demo url)
export function hasValidVideo(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim();
  if (!clean || clean === '' || clean.includes('dQw4w9WgXcQ')) return false;
  return true;
}

// Company recognition dictionary for intelligent query parsing
const COMPANY_DICTIONARY = [
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO',
    aliases: ['hdfc', 'hdfc ergo', 'hdfcergo', 'hdfc life', 'ergo']
  },
  {
    id: 'icici-lombard',
    name: 'ICICI Lombard',
    aliases: ['icici', 'icici lombard', 'icicilombard', 'lombard']
  },
  {
    id: 'tata-aig',
    name: 'Tata AIG',
    aliases: ['tata', 'tata aig', 'tataaig', 'aig']
  },
  {
    id: 'niva-bupa',
    name: 'Niva Bupa',
    aliases: ['niva', 'niva bupa', 'nivabupa', 'bupa', 'max bupa']
  },
  {
    id: 'star-health',
    name: 'Star Health',
    aliases: ['star', 'star health', 'starhealth']
  },
  {
    id: 'care-health',
    name: 'Care Health',
    aliases: ['care', 'care health', 'carehealth', 'religare']
  }
];

// Common insurance synonyms / expanded concept mapping
const SYNONYM_MAP = {
  '2x': [
    '2x', '2 x', '2x benefits', '2x benefit', '2x cover', '2x coverage', 'double',
    'doubling', 'double coverage', 'coverage becomes double', 'double benefit',
    '200%', '2 times', 'two times', 'secure benefit', 'booster', 'booster benefit',
    'booster+', 'multiplier', 'sum insured double'
  ],
  '4x': ['4x', '4 x', 'four times', '400%', '4 times', '4x cover', '4x coverage'],
  'restoration': [
    'restore', 'restoration', 'recharge', 'reset', 'refill', 'auto restore',
    'auto-restore', 'unlimited restoration', 'forever restore', 'reassure forever',
    'reset benefit', 'balance refill', 'sum insured refill'
  ],
  'consumables': [
    'consumables', 'consumable', 'non-medical', 'non medical', 'non medical expenses',
    'protect benefit', 'care shield', 'safeguard', 'gloves', 'masks', 'syringes',
    'syringe', 'cotton', 'bandages', 'administrative items', 'itemized bill',
    'gloves ka paisa', 'claim protector'
  ],
  'room rent': [
    'room rent', 'room limit', 'room category', 'single private room', 'suite',
    'icu', 'capping', 'proportionate deduction', 'sub-limit', 'sub limit',
    'zero capping', 'deluxe room', 'twin sharing', 'bed charges'
  ],
  'maternity': [
    'maternity', 'pregnancy', 'delivery', 'normal delivery', 'c-section',
    'newborn', 'baby', 'neonatal', 'child', 'delivery charges'
  ],
  'opd': [
    'opd', 'outpatient', 'out-patient', 'consultation', 'doctor consultation',
    'doctor fees', 'doctor fee', 'befit', 'diagnostic', 'pharmacy', 'clinic',
    'bina admit'
  ],
  'wellness': [
    'wellness', 'rewards', 'stay active', 'live healthy', 'befit', 'fitness',
    'steps', 'discount'
  ],
  'waiting period': [
    'waiting period', 'waiting', 'ped', 'pre-existing', 'pre existing',
    'pre existing disease', 'chronic', 'abcd', 'disease list', 'initial waiting',
    '30 days', '2 years waiting', 'sugar', 'diabetes', 'bp', 'hypertension', 'thyroid'
  ],
  'copay': [
    'co-pay', 'copay', 'co payment', 'copayment', 'cost sharing', '20% copay',
    '10% copay', 'senior citizen copay', 'voluntary copay', 'deductible'
  ],
  'checkup': [
    'checkup', 'check-up', 'health check', 'health checkup', 'preventive',
    'screening', 'annual checkup', 'free checkup'
  ],
  'claim': [
    'claim', 'csr', 'icr', 'settlement', 'cashless', 'reimbursement', 'complaint',
    'claim rejection', 'rejection', 'claim settlement'
  ],
  'cashless': [
    'cashless', 'cashless hospital', 'cashless everywhere', 'network hospital',
    'pre auth', 'pre authorization', 'cashless approval'
  ],
  'bonus': [
    'bonus', 'cumulative bonus', 'no claim bonus', 'ncb', 'ncb super',
    'plus benefit', 'infinite benefit', 'booster'
  ],
  'daycare': [
    'day care', 'daycare', 'less than 24 hours', 'under 24 hours', 'cataract',
    'dialysis', 'chemotherapy', 'lithotripsy', 'minor surgery'
  ],
  'ayush': [
    'ayush', 'ayurveda', 'ayurvedic', 'homeopathy', 'unani', 'siddha',
    'alternative treatment', 'natural treatment'
  ],
  'pre_post': [
    'pre & post', 'pre and post', 'pre hospitalization', 'post hospitalization',
    '60 days 180 days', 'discharge medicines'
  ],
  'portability': [
    'portability', 'port', 'port policy', 'switch company', 'transfer policy',
    'change insurance'
  ]
};

/**
 * Extracts canonical concept key for perfect deduplication across sections
 */
function getCanonicalConcept(title) {
  const clean = String(title || '').toLowerCase();
  if (clean.includes('2x') || clean.includes('secure benefit') || clean.includes('doubling')) return '2x_secure';
  if (clean.includes('4x')) return '4x_cover';
  if (clean.includes('reset') || clean.includes('auto-restore') || clean.includes('restoration') || clean.includes('recharge') || clean.includes('reassure forever') || clean.includes('refill')) return 'restoration';
  if (clean.includes('booster')) return 'booster';
  if (clean.includes('protect') || clean.includes('consumables') || clean.includes('non-medical') || clean.includes('care shield') || clean.includes('safeguard')) return 'consumables';
  if (clean.includes('room') || clean.includes('capping')) return 'room_rent';
  if (clean.includes('icu')) return 'icu_limit';
  if (clean.includes('pre & post') || clean.includes('pre and post')) return 'pre_post';
  if (clean.includes('day care')) return 'day_care';
  if (clean.includes('robotic') || clean.includes('modern treatment')) return 'modern_treatment';
  if (clean.includes('check-up') || clean.includes('check up') || clean.includes('preventive') || clean.includes('health check')) return 'health_checkup';
  if (clean.includes('maternity') || clean.includes('newborn')) return 'maternity';
  if (clean.includes('wellness') || clean.includes('befit') || clean.includes('stay active') || clean.includes('live healthy') || clean.includes('rewards')) return 'wellness';
  if (clean.includes('organ donor') || clean.includes('donor')) return 'donor_expenses';
  if (clean.includes('infinite')) return 'infinite_benefit';
  if (clean.includes('plus benefit') || clean.includes('cumulative bonus') || clean.includes('no claim bonus') || clean.includes('ncb')) return 'cumulative_bonus';
  if (clean.includes('lock the clock')) return 'lock_the_clock';
  if (clean.includes('cataract')) return 'cataract';
  if (clean.includes('ambulance') || clean.includes('air ambulance')) return 'ambulance';
  if (clean.includes('ayush')) return 'ayush';
  if (clean.includes('waiting') || clean.includes('pre-existing') || clean.includes('ped') || clean.includes('specified diseases')) return 'waiting_period';
  if (clean.includes('csr') || clean.includes('settlement ratio')) return 'csr';
  if (clean.includes('icr') || clean.includes('incurred claim')) return 'icr';
  if (clean.includes('complaint')) return 'complaint_volume';
  if (clean.includes('solvency') || clean.includes('capital strength')) return 'capital_strength';
  if (clean.includes('ownership')) return 'ownership';
  if (clean.includes('credit rating')) return 'credit_rating';
  if (clean.includes('financial base') || clean.includes('investment assets')) return 'financial_base';
  
  return clean.replace(/[^a-z0-9]/g, '');
}

function getNormalizedConceptKey(companyId, planId, title) {
  const cleanComp = String(companyId || '').toLowerCase().trim();
  const cleanPlan = String(planId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const concept = getCanonicalConcept(title);
  return `${cleanComp}__${cleanPlan}__${concept}`;
}

export function getConceptTitleForQuery(query) {
  const lower = String(query || '').toLowerCase().trim();
  if (lower.includes('2x') || lower.includes('double') || lower.includes('doubling') || lower.includes('secure benefit') || lower.includes('booster')) {
    return '2X Benefits';
  }
  if (lower.includes('consumable') || lower.includes('glove') || lower.includes('syringe') || lower.includes('cotton') || lower.includes('non medical') || lower.includes('protect benefit') || lower.includes('care shield')) {
    return 'Consumables Cover';
  }
  if (lower.includes('room') || lower.includes('capping') || lower.includes('single private') || lower.includes('icu')) {
    return 'Room Rent & Capping';
  }
  if (lower.includes('restor') || lower.includes('recharge') || lower.includes('reset') || lower.includes('refill')) {
    return 'Restoration Benefit';
  }
  if (lower.includes('cashless') || lower.includes('network hospital')) {
    return 'Cashless Hospitalization';
  }
  if (lower.includes('claim') || lower.includes('reject') || lower.includes('rejection')) {
    return 'Claim Settlement & Rules';
  }
  if (lower.includes('maternity') || lower.includes('pregnancy') || lower.includes('delivery') || lower.includes('newborn')) {
    return 'Maternity Coverage';
  }
  if (lower.includes('waiting') || lower.includes('ped') || lower.includes('pre-existing') || lower.includes('sugar') || lower.includes('diabetes') || lower.includes('bp')) {
    return 'Waiting Periods';
  }
  if (lower.includes('copay') || lower.includes('co-pay')) {
    return 'Co-Payment Rules';
  }
  if (lower.includes('opd') || lower.includes('consultation') || lower.includes('doctor') || lower.includes('clinic')) {
    return 'OPD & Doctor Consultation';
  }
  if (lower.includes('bonus') || lower.includes('ncb') || lower.includes('cumulative')) {
    return 'No Claim Bonus';
  }
  if (lower.includes('day care') || lower.includes('daycare') || lower.includes('cataract') || lower.includes('dialysis')) {
    return 'Day Care Procedures';
  }
  if (lower.includes('ayush') || lower.includes('ayurveda') || lower.includes('homeopathy')) {
    return 'AYUSH Alternative Treatment';
  }
  if (lower.includes('pre') && lower.includes('post')) {
    return 'Pre & Post Hospitalization';
  }
  return query;
}

/**
 * Builds the centralized searchable content index across all companies, plans, and features
 */
function buildGlobalContentIndex() {
  const index = [];
  const indexedPlanIds = new Set();

  // 1. Map of company metadata
  const companyMap = {};
  companiesData.forEach((comp) => {
    companyMap[comp.id] = comp;
    if (comp.id === 'hdfc-ergo') {
      companyMap['hdfc-life'] = comp;
    }
  });

  // Helper to push an indexed item with clean metadata
  const addItem = (item) => {
    const searchTerms = [
      item.title || '',
      item.subtitle || '',
      item.badge || '',
      item.category || '',
      item.companyName || '',
      item.planName || '',
      item.summary || '',
      item.description || '',
      Array.isArray(item.points) ? item.points.join(' ') : '',
      Array.isArray(item.steps) ? item.steps.join(' ') : '',
      Array.isArray(item.paragraphs) ? item.paragraphs.join(' ') : '',
      Array.isArray(item.diseaseList) ? item.diseaseList.join(' ') : '',
      Array.isArray(item.keywords) ? item.keywords.join(' ') : ''
    ].join(' ').toLowerCase();

    index.push({
      ...item,
      searchableText: searchTerms,
      hasVideo: hasValidVideo(item.videoUrl)
    });
  };

  // 2. Index Optima Secure+ (HDFC ERGO)
  if (optimaSecurePlusData) {
    const comp = companyMap['hdfc-ergo'];
    const pName = optimaSecurePlusData.planName || 'Optima Secure+';
    const pId = optimaSecurePlusData.planId || 'hdfc-optima-secure-plus';
    indexedPlanIds.add(pId);
    indexedPlanIds.add('optima-secure-plus');

    // Features Sections
    if (optimaSecurePlusData.featuresSections) {
      optimaSecurePlusData.featuresSections.forEach((sec) => {
        if (sec.items) {
          sec.items.forEach((feat) => {
            addItem({
              id: `osp-feat-${feat.id}`,
              type: 'feature',
              companyId: comp?.id || 'hdfc-ergo',
              companyName: comp?.name || 'HDFC ERGO',
              companyLogo: comp?.logo,
              companyTheme: comp?.theme,
              planId: pId,
              planName: pName,
              category: sec.title || 'POLICY BENEFITS',
              title: feat.title,
              subtitle: feat.subtitle,
              badge: feat.badge,
              summary: feat.summary || feat.description,
              description: feat.summary || feat.description,
              points: feat.points,
              steps: feat.steps,
              hasHealthCheckupTable: feat.hasHealthCheckupTable,
              healthCheckupLimits: feat.healthCheckupLimits,
              videoTitle: feat.videoTitle,
              videoUrl: feat.videoUrl,
              audioUrl: feat.audioUrl,
              pdfUrl: feat.pdfUrl,
              planUrl: `/insurance/${comp?.id || 'hdfc-ergo'}/${pId}`
            });
          });
        }
      });
    }

    // Must Know
    if (optimaSecurePlusData.mustKnow?.items) {
      optimaSecurePlusData.mustKnow.items.forEach((mk) => {
        addItem({
          id: `osp-mk-${mk.id}`,
          type: 'must_know',
          companyId: comp?.id || 'hdfc-ergo',
          companyName: comp?.name || 'HDFC ERGO',
          companyLogo: comp?.logo,
          companyTheme: comp?.theme,
          planId: pId,
          planName: pName,
          category: 'MUST KNOW DETAILS',
          title: mk.title,
          subtitle: 'Important Policy Terms',
          icon: mk.icon,
          paragraphs: mk.paragraphs,
          summary: mk.paragraphs ? mk.paragraphs.join(' ') : '',
          planUrl: `/insurance/${comp?.id || 'hdfc-ergo'}/${pId}`
        });
      });
    }

    // Limitations & Waiting Periods
    if (optimaSecurePlusData.limitationsWaitingPeriods?.items) {
      optimaSecurePlusData.limitationsWaitingPeriods.items.forEach((lim) => {
        addItem({
          id: `osp-lim-${lim.id}`,
          type: 'limitation',
          companyId: comp?.id || 'hdfc-ergo',
          companyName: comp?.name || 'HDFC ERGO',
          companyLogo: comp?.logo,
          companyTheme: comp?.theme,
          planId: pId,
          planName: pName,
          category: 'LIMITATIONS & WAITING PERIODS',
          title: lim.title,
          subtitle: 'Policy Waiting Period & Limitations',
          summary: lim.summary || lim.explanation,
          highlight: lim.highlight,
          diseaseList: lim.diseaseList,
          exclusionList: lim.exclusionList,
          videoTitle: lim.videoTitle,
          videoUrl: lim.videoUrl,
          planUrl: `/insurance/${comp?.id || 'hdfc-ergo'}/${pId}`
        });
      });
    }

    // Report Card
    if (optimaSecurePlusData.reportCard) {
      const rc = optimaSecurePlusData.reportCard;
      ['csr', 'icr', 'complaintVolume'].forEach((key) => {
        const item = rc[key];
        if (item) {
          addItem({
            id: `osp-rc-${key}`,
            type: 'report_card',
            companyId: comp?.id || 'hdfc-ergo',
            companyName: comp?.name || 'HDFC ERGO',
            companyLogo: comp?.logo,
            companyTheme: comp?.theme,
            planId: pId,
            planName: pName,
            category: 'REPORT CARD',
            title: `${item.title || key.toUpperCase()} Metric`,
            subtitle: item.subtitle || 'Official Claims Performance',
            summary: item.explanation || `Claims metric: ${item.summaryValue || item.value}`,
            value: item.summaryValue || item.value,
            singleYear: item.singleYear,
            threeYearAvg: item.threeYearAvg,
            range: item.range,
            videoTitle: item.videoTitle,
            videoUrl: item.videoUrl,
            planUrl: `/insurance/${comp?.id || 'hdfc-ergo'}/${pId}`
          });
        }
      });
    }

    // Company Strength
    if (optimaSecurePlusData.companyStrength) {
      const cs = optimaSecurePlusData.companyStrength;
      ['ownership', 'creditRating', 'capitalStrength', 'financialBase'].forEach((key) => {
        const item = cs[key];
        if (item) {
          addItem({
            id: `osp-cs-${key}`,
            type: 'company_strength',
            companyId: comp?.id || 'hdfc-ergo',
            companyName: comp?.name || 'HDFC ERGO',
            companyLogo: comp?.logo,
            companyTheme: comp?.theme,
            planId: pId,
            planName: pName,
            category: 'COMPANY STRENGTH',
            title: `${item.title || key} (HDFC ERGO)`,
            subtitle: 'Insurer Reliability & Financial Standing',
            summary: item.explanation || `Financial metric: ${item.summaryValue || item.value}`,
            value: item.summaryValue || item.value,
            videoTitle: item.videoTitle,
            videoUrl: item.videoUrl,
            planUrl: `/insurance/${comp?.id || 'hdfc-ergo'}/${pId}`
          });
        }
      });
    }
  }

  // 3. Helper to index independent company plans data map
  const indexCompanyPlansData = (plansDataMap, compId, fallbackCompName) => {
    const comp = companyMap[compId];
    if (!plansDataMap) return;

    Object.keys(plansDataMap).forEach((pKey) => {
      const planData = plansDataMap[pKey];
      if (!planData) return;

      const pId = planData.planId || pKey;
      const pName = planData.planName || pKey;
      indexedPlanIds.add(pId);
      indexedPlanIds.add(pKey);

      // Features Sections (Flat sections array or categorized arrays)
      if (planData.featuresSections) {
        planData.featuresSections.forEach((sec) => {
          if (sec.items) {
            sec.items.forEach((feat) => {
              addItem({
                id: `${compId}-${pId}-feat-${feat.id}`,
                type: 'feature',
                companyId: comp?.id || compId,
                companyName: comp?.name || fallbackCompName,
                companyLogo: comp?.logo,
                companyTheme: comp?.theme,
                planId: pId,
                planName: pName,
                category: sec.title || 'POLICY BENEFITS',
                title: feat.title,
                subtitle: feat.subtitle,
                badge: feat.badge,
                summary: feat.summary || feat.description,
                description: feat.summary || feat.description,
                points: feat.points,
                steps: feat.steps,
                hasHealthCheckupTable: feat.hasHealthCheckupTable,
                healthCheckupLimits: feat.healthCheckupLimits,
                videoTitle: feat.videoTitle,
                videoUrl: feat.videoUrl,
                audioUrl: feat.audioUrl,
                pdfUrl: feat.pdfUrl,
                planUrl: `/insurance/${comp?.id || compId}/${pId}`
              });
            });
          }
        });
      }

      // Categorized Feature Arrays (Tata AIG MediCare Premier)
      ['mostImportantFeatures', 'valueAddedFeatures', 'additionalFeatures'].forEach((catKey) => {
        if (Array.isArray(planData[catKey])) {
          const catTitle = catKey === 'mostImportantFeatures'
            ? '1. MOST IMPORTANT FEATURES'
            : catKey === 'valueAddedFeatures'
            ? '2. VALUE ADDED FEATURES'
            : '3. ADDITIONAL FEATURES';

          planData[catKey].forEach((feat) => {
            addItem({
              id: `${compId}-${pId}-${catKey}-${feat.id}`,
              type: 'feature',
              companyId: comp?.id || compId,
              companyName: comp?.name || fallbackCompName,
              companyLogo: comp?.logo,
              companyTheme: comp?.theme,
              planId: pId,
              planName: pName,
              category: catTitle,
              title: feat.title,
              subtitle: feat.subtitle,
              badge: feat.badge,
              summary: feat.summary || feat.description,
              description: feat.summary || feat.description,
              points: feat.points,
              steps: feat.steps,
              videoTitle: feat.videoTitle,
              videoUrl: feat.videoUrl,
              planUrl: `/insurance/${comp?.id || compId}/${pId}`
            });
          });
        }
      });

      // Must Know (Items format or Highlights format)
      if (planData.mustKnow?.items) {
        planData.mustKnow.items.forEach((mk) => {
          addItem({
            id: `${compId}-${pId}-mk-${mk.id}`,
            type: 'must_know',
            companyId: comp?.id || compId,
            companyName: comp?.name || fallbackCompName,
            companyLogo: comp?.logo,
            companyTheme: comp?.theme,
            planId: pId,
            planName: pName,
            category: 'MUST KNOW DETAILS',
            title: mk.title,
            subtitle: 'Important Policy Terms',
            icon: mk.icon,
            paragraphs: mk.paragraphs,
            summary: mk.paragraphs ? mk.paragraphs.join(' ') : '',
            planUrl: `/insurance/${comp?.id || compId}/${pId}`
          });
        });
      } else if (planData.mustKnow?.highlights) {
        planData.mustKnow.highlights.forEach((hl, hIdx) => {
          addItem({
            id: `${compId}-${pId}-mk-hl-${hIdx}`,
            type: 'must_know',
            companyId: comp?.id || compId,
            companyName: comp?.name || fallbackCompName,
            companyLogo: comp?.logo,
            companyTheme: comp?.theme,
            planId: pId,
            planName: pName,
            category: 'MUST KNOW DETAILS',
            title: hl.title,
            subtitle: hl.tag || 'Must Know Highlight',
            badge: hl.badge,
            summary: hl.description,
            description: hl.description,
            planUrl: `/insurance/${comp?.id || compId}/${pId}`
          });
        });
      }

      // Limitations & Waiting Periods
      if (planData.limitationsWaitingPeriods?.items) {
        planData.limitationsWaitingPeriods.items.forEach((lim) => {
          addItem({
            id: `${compId}-${pId}-lim-${lim.id}`,
            type: 'limitation',
            companyId: comp?.id || compId,
            companyName: comp?.name || fallbackCompName,
            companyLogo: comp?.logo,
            companyTheme: comp?.theme,
            planId: pId,
            planName: pName,
            category: 'LIMITATIONS & WAITING PERIODS',
            title: lim.title,
            subtitle: 'Policy Waiting Period & Limitations',
            summary: lim.summary || lim.explanation,
            highlight: lim.highlight,
            diseaseList: lim.diseaseList,
            exclusionList: lim.exclusionList,
            videoTitle: lim.videoTitle,
            videoUrl: lim.videoUrl,
            planUrl: `/insurance/${comp?.id || compId}/${pId}`
          });
        });
      }

      // Report Card
      if (planData.reportCard) {
        const rc = planData.reportCard;
        ['csr', 'icr', 'complaintVolume'].forEach((key) => {
          const item = rc[key];
          if (item) {
            addItem({
              id: `${compId}-${pId}-rc-${key}`,
              type: 'report_card',
              companyId: comp?.id || compId,
              companyName: comp?.name || fallbackCompName,
              companyLogo: comp?.logo,
              companyTheme: comp?.theme,
              planId: pId,
              planName: pName,
              category: 'REPORT CARD',
              title: `${item.title || key.toUpperCase()} Metric`,
              subtitle: item.subtitle || `${comp?.name || fallbackCompName} Claims Performance`,
              summary: item.explanation || `Claims metric: ${item.summaryValue || item.value}`,
              value: item.summaryValue || item.value,
              singleYear: item.singleYear,
              threeYearAvg: item.threeYearAvg,
              range: item.range,
              videoTitle: item.videoTitle,
              videoUrl: item.videoUrl,
              planUrl: `/insurance/${comp?.id || compId}/${pId}`
            });
          }
        });
      }

      // Company Strength
      if (planData.companyStrength) {
        const cs = planData.companyStrength;
        ['ownership', 'creditRating', 'capitalStrength', 'financialBase', 'reinsuranceStrength'].forEach((key) => {
          const item = cs[key];
          if (item) {
            addItem({
              id: `${compId}-${pId}-cs-${key}`,
              type: 'company_strength',
              companyId: comp?.id || compId,
              companyName: comp?.name || fallbackCompName,
              companyLogo: comp?.logo,
              companyTheme: comp?.theme,
              planId: pId,
              planName: pName,
              category: 'COMPANY STRENGTH',
              title: `${item.title || key} (${comp?.name || fallbackCompName})`,
              subtitle: 'Insurer Reliability & Financial Standing',
              summary: item.explanation || `Financial metric: ${item.summaryValue || item.value}`,
              value: item.summaryValue || item.value,
              videoTitle: item.videoTitle,
              videoUrl: item.videoUrl,
              planUrl: `/insurance/${comp?.id || compId}/${pId}`
            });
          }
        });
      }
    });
  };

  // Index all providers rich data
  indexCompanyPlansData(HDFC_PLANS_DATA, 'hdfc-ergo', 'HDFC ERGO');
  indexCompanyPlansData(TATA_AIG_PLANS_DATA, 'tata-aig', 'Tata AIG');
  indexCompanyPlansData(STAR_HEALTH_PLANS_DATA, 'star-health', 'Star Health');
  indexCompanyPlansData(NIVA_BUPA_PLANS_DATA, 'niva-bupa', 'Niva Bupa');
  indexCompanyPlansData(ICICI_LOMBARD_PLANS_DATA, 'icici-lombard', 'ICICI Lombard');
  indexCompanyPlansData(CARE_HEALTH_PLANS_DATA, 'care-health', 'Care Health');

  // 4. Index Basic Company Plans ONLY for plans that do NOT already have rich features indexed!
  companiesData.forEach((comp) => {
    comp.plans.forEach((plan) => {
      // If plan was already indexed via rich data above, skip indexing basic duplicate strings
      if (indexedPlanIds.has(plan.id)) {
        return;
      }

      // Basic plan benefits for non-indexed secondary plans
      if (plan.benefits && Array.isArray(plan.benefits)) {
        plan.benefits.forEach((ben, idx) => {
          addItem({
            id: `basic-${comp.id}-${plan.id}-ben-${idx}`,
            type: 'benefit',
            companyId: comp.id,
            companyName: comp.name,
            companyLogo: comp.logo,
            companyTheme: comp.theme,
            planId: plan.id,
            planName: plan.name,
            category: 'PLAN HIGHLIGHTS',
            title: ben,
            subtitle: `${plan.name} Benefit`,
            summary: `${ben}. Covered under ${plan.name} by ${comp.name}.`,
            planUrl: `/insurance/${comp.id}/${plan.id}`
          });
        });
      }
    });
  });

  return index;
}

// Global cached index instance
let cachedIndex = null;
export function getGlobalContentIndex() {
  if (!cachedIndex) {
    cachedIndex = buildGlobalContentIndex();
  }
  return cachedIndex;
}

/**
 * Detects if a search query contains a specific company mention and extracts remaining search terms
 */
export function parseSearchQuery(query) {
  const rawQuery = String(query || '').trim();
  const lowerQuery = rawQuery.toLowerCase();

  let detectedCompany = null;
  let cleanedKeywords = lowerQuery;

  for (const comp of COMPANY_DICTIONARY) {
    // Check aliases sorted by length descending
    const sortedAliases = [...comp.aliases].sort((a, b) => b.length - a.length);
    for (const alias of sortedAliases) {
      // Word boundary match
      const regex = new RegExp(`(^|\\s)${alias}(\\s|$)`, 'i');
      if (regex.test(cleanedKeywords)) {
        detectedCompany = comp;
        cleanedKeywords = cleanedKeywords.replace(regex, ' ').trim();
        break;
      }
    }
    if (detectedCompany) break;
  }

  // Clean double spaces
  cleanedKeywords = cleanedKeywords.replace(/\s+/g, ' ').trim();

  return {
    rawQuery,
    detectedCompany,
    cleanedKeywords: cleanedKeywords || lowerQuery
  };
}

/**
 * Strict Concept Definitions with Exact Trigger Words & Precision Predicates
 */
const CANONICAL_FEATURE_CONCEPTS = [
  {
    id: '2x_benefits',
    title: '2X Benefits',
    queryTriggers: [
      '2x', '2 x', '2x benefit', '2x benefits', '2x cover', '2x coverage',
      'double cover', 'double coverage', 'doubling', 'instant 2x', 'secure benefit',
      '200% cover', 'coverage double', 'sum insured double', 'doubling of base cover'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const lowerSub = (item.subtitle || '').toLowerCase();
      
      // Strict token boundary check for "2x" or explicit doubling
      const has2xTitle = /\b2x\b/i.test(lowerT) || lowerT.includes('secure benefit') || lowerT.includes('doubling of base cover');
      const has2xBadge = /\b2x\b/i.test(lowerB) || lowerB.includes('2x from day 1');
      const has2xSub = lowerSub.includes('2x cover from day 1') || lowerSub.includes('doubles your sum insured from day 1');
      
      // Explicitly reject unrelated cumulative bonus, 2 years waiting period, or other numbers
      if (lowerT.includes('booster+') || lowerT.includes('waiting period') || lowerT.includes('critical illness')) {
        return false;
      }

      return has2xTitle || has2xBadge || has2xSub;
    }
  },
  {
    id: 'consumables',
    title: 'Consumables Cover',
    queryTriggers: [
      'consumable', 'consumables', 'glove', 'gloves', 'syringe', 'syringes',
      'cotton', 'ppe kit', 'ppe kits', 'masks', 'mask', 'non-medical', 'non medical',
      'non medical expenses', 'safeguard', 'care shield', 'protect benefit', 'claim protector'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const lowerSub = (item.subtitle || '').toLowerCase();
      return (
        lowerT.includes('consumable') ||
        lowerT.includes('non-medical') ||
        lowerT.includes('protect benefit') ||
        lowerT.includes('care shield') ||
        lowerT.includes('safeguard') ||
        lowerB.includes('consumable') ||
        lowerSub.includes('non-payable consumable') ||
        lowerSub.includes('gloves, ppe kits') ||
        lowerSub.includes('gloves, cotton')
      );
    }
  },
  {
    id: 'room_rent',
    title: 'Room Rent & Capping',
    queryTriggers: [
      'room', 'room rent', 'room limit', 'room capping', 'single private',
      'single private room', 'capping', 'proportionate deduction', 'deluxe room',
      'suite', 'bed charges', 'room charges', 'kamre ka rent'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const lowerSub = (item.subtitle || '').toLowerCase();
      return (
        lowerT.includes('room rent') ||
        lowerT.includes('room category') ||
        lowerT.includes('single private room') ||
        lowerT.includes('room type') ||
        lowerB.includes('room rent') ||
        lowerB.includes('no room rent capping') ||
        lowerB.includes('single private') ||
        lowerSub.includes('single private room') ||
        lowerSub.includes('room rent capping')
      );
    }
  },
  {
    id: 'restoration',
    title: 'Restoration Benefit',
    queryTriggers: [
      'restore', 'restoration', 'recharge', 'reset', 'refill', 'auto restore',
      'auto-restore', 'unlimited restoration', 'forever restore', 'reassure forever',
      'reset benefit', 'balance refill'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const lowerSub = (item.subtitle || '').toLowerCase();
      return (
        lowerT.includes('restore') ||
        lowerT.includes('restoration') ||
        lowerT.includes('recharge') ||
        lowerT.includes('refill') ||
        lowerT.includes('reset benefit') ||
        lowerT.includes('reassure forever') ||
        lowerB.includes('restore') ||
        lowerB.includes('refill') ||
        lowerB.includes('recharge') ||
        lowerSub.includes('restores your base') ||
        lowerSub.includes('refills sum insured')
      );
    }
  },
  {
    id: 'cashless',
    title: 'Cashless Hospitalization',
    queryTriggers: [
      'cashless', 'cashless hospital', 'cashless everywhere', 'network hospital',
      'pre auth', 'pre authorization', 'cashless admission'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const text = (item.searchableText || '').toLowerCase();
      return (
        lowerT.includes('cashless') ||
        lowerT.includes('network hospital') ||
        lowerB.includes('cashless') ||
        lowerB.includes('network') ||
        (text.includes('cashless everywhere') && (lowerT.includes('hospital') || lowerT.includes('network') || lowerT.includes('admission')))
      );
    }
  },
  {
    id: 'claim_rules',
    title: 'Claim Settlement & Rules',
    queryTriggers: [
      'claim', 'claims', 'claim rejected', 'claim rejection', 'rejection',
      'rejected', 'csr', 'icr', 'settlement', 'reimbursement', 'claim settlement'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('claim') ||
        lowerT.includes('csr') ||
        lowerT.includes('icr') ||
        lowerT.includes('settlement') ||
        lowerB.includes('claim') ||
        lowerB.includes('csr')
      );
    }
  },
  {
    id: 'waiting_period',
    title: 'Waiting Periods',
    queryTriggers: [
      'waiting', 'waiting period', 'waiting periods', 'ped', 'pre-existing',
      'pre existing', 'pre existing disease', 'initial waiting', '30 days waiting',
      'sugar', 'diabetes', 'bp', 'hypertension'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      const lowerSub = (item.subtitle || '').toLowerCase();
      return (
        lowerT.includes('waiting') ||
        lowerT.includes('pre-existing') ||
        lowerT.includes('ped') ||
        lowerB.includes('waiting') ||
        lowerSub.includes('waiting period')
      );
    }
  },
  {
    id: 'copay',
    title: 'Co-Payment Rules',
    queryTriggers: [
      'copay', 'co-pay', 'co payment', 'copayment', 'cost sharing', 'deductible', 'voluntary copay'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('co-pay') ||
        lowerT.includes('copay') ||
        lowerT.includes('deductible') ||
        lowerB.includes('copay') ||
        lowerB.includes('co-pay')
      );
    }
  },
  {
    id: 'maternity',
    title: 'Maternity Coverage',
    queryTriggers: [
      'maternity', 'pregnancy', 'delivery', 'c-section', 'normal delivery', 'newborn', 'baby', 'neonatal'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('maternity') ||
        lowerT.includes('newborn') ||
        lowerT.includes('pregnancy') ||
        lowerB.includes('maternity') ||
        lowerB.includes('newborn')
      );
    }
  },
  {
    id: 'opd',
    title: 'OPD & Doctor Consultation',
    queryTriggers: [
      'opd', 'outpatient', 'out-patient', 'consultation', 'doctor consultation',
      'doctor fees', 'doctor fee', 'clinic', 'pharmacy', 'diagnostic'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('opd') ||
        lowerT.includes('consultation') ||
        lowerT.includes('outpatient') ||
        lowerB.includes('opd')
      );
    }
  },
  {
    id: 'bonus',
    title: 'No Claim Bonus',
    queryTriggers: [
      'bonus', 'cumulative bonus', 'no claim bonus', 'ncb', 'ncb super', 'plus benefit'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('cumulative bonus') ||
        lowerT.includes('no claim bonus') ||
        lowerT.includes('ncb') ||
        lowerT.includes('plus benefit') ||
        lowerB.includes('cumulative bonus') ||
        lowerB.includes('ncb')
      );
    }
  },
  {
    id: 'daycare',
    title: 'Day Care Procedures',
    queryTriggers: [
      'day care', 'daycare', 'less than 24 hours', 'under 24 hours',
      'cataract', 'dialysis', 'chemotherapy', 'lithotripsy', 'minor surgery'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return (
        lowerT.includes('day care') ||
        lowerT.includes('daycare') ||
        lowerT.includes('cataract') ||
        lowerB.includes('day care') ||
        lowerB.includes('daycare')
      );
    }
  },
  {
    id: 'ayush',
    title: 'AYUSH Alternative Treatment',
    queryTriggers: [
      'ayush', 'ayurveda', 'ayurvedic', 'homeopathy', 'unani', 'siddha', 'alternative treatment'
    ],
    isMatch: (item) => {
      const lowerT = (item.title || '').toLowerCase();
      const lowerB = (item.badge || '').toLowerCase();
      return lowerT.includes('ayush') || lowerT.includes('ayurveda') || lowerB.includes('ayush');
    }
  }
];

export function searchGlobalInsurance(rawQuery) {
  if (!rawQuery || typeof rawQuery !== 'string' || !rawQuery.trim()) {
    return {
      companies: [],
      plans: [],
      contentItems: [],
      detectedCompany: null,
      queryConceptTitle: ''
    };
  }

  const { cleanedKeywords, detectedCompany } = parseSearchQuery(rawQuery);
  const lowerRaw = rawQuery.toLowerCase().trim();
  const lowerKeywords = (cleanedKeywords || rawQuery).toLowerCase().trim();

  // Find if user query matches any canonical concept
  const matchedConcept = CANONICAL_FEATURE_CONCEPTS.find((concept) => {
    return concept.queryTriggers.some((trigger) => {
      if (lowerKeywords === trigger || lowerRaw === trigger) return true;
      // Word boundary match for short triggers (e.g. \b2x\b)
      const regex = new RegExp(`\\b${trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      return regex.test(lowerKeywords) || regex.test(lowerRaw);
    });
  });

  // 1. MATCH COMPANIES (If user specifically searched company name)
  const matchedCompanies = companiesData.filter((comp) => {
    const nameMatch = comp.name.toLowerCase().includes(lowerRaw) || comp.fullName.toLowerCase().includes(lowerRaw);
    if (nameMatch) return true;
    if (detectedCompany && (comp.id === detectedCompany.id || comp.slug === detectedCompany.id)) return true;
    return false;
  });

  // 2. MATCH PLANS (If user specifically searched plan name)
  const matchedPlans = [];
  const seenPlanIds = new Set();

  if (lowerKeywords.length > 2 && !matchedConcept) {
    companiesData.forEach((comp) => {
      if (detectedCompany && comp.id !== detectedCompany.id && comp.slug !== detectedCompany.id) {
        return;
      }
      comp.plans.forEach((plan) => {
        const planNameMatch = plan.name.toLowerCase().includes(lowerKeywords);
        if (planNameMatch) {
          const planKey = `${comp.id}__${plan.id}`;
          if (!seenPlanIds.has(planKey)) {
            seenPlanIds.add(planKey);
            matchedPlans.push({
              ...plan,
              companyId: comp.id,
              companyName: comp.name,
              companyLogo: comp.logo,
              companyTheme: comp.theme,
              planUrl: `/insurance/${comp.id}/${plan.id}`
            });
          }
        }
      });
    });
  }

  // 3. STRICT CONTENT ITEM MATCHING
  const bestScoredMap = new Map();
  const searchIndex = getGlobalContentIndex();

  searchIndex.forEach((item) => {
    // If company is specifically detected in query, filter to that company
    const isTargetCompany = detectedCompany
      ? (item.companyId === detectedCompany.id || item.companyName.toLowerCase().includes(detectedCompany.aliases[0]))
      : true;

    if (detectedCompany && !isTargetCompany) {
      return;
    }

    let isRelevant = false;
    let score = 0;

    const lowerTitle = (item.title || '').toLowerCase();
    const lowerBadge = (item.badge || '').toLowerCase();
    const lowerSub = (item.subtitle || '').toLowerCase();

    // Mode A: Canonical Concept Match (e.g. "2x", "gloves", "room rent", "cashless")
    if (matchedConcept) {
      if (matchedConcept.isMatch(item)) {
        isRelevant = true;
        score += 500;

        // Exact Title Bonus
        if (lowerTitle.includes(lowerKeywords) || lowerKeywords.includes(lowerTitle)) {
          score += 300;
        }
        if (lowerBadge.includes(lowerKeywords)) {
          score += 200;
        }
      }
    } else {
      // Mode B: Non-concept query -> strict token-boundary title / badge match
      if (lowerKeywords.length >= 2) {
        const escaped = lowerKeywords.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const tokenRegex = new RegExp(`\\b${escaped}\\b`, 'i');

        if (tokenRegex.test(lowerTitle)) {
          isRelevant = true;
          score += 600;
        } else if (lowerTitle.includes(lowerKeywords)) {
          isRelevant = true;
          score += 400;
        } else if (tokenRegex.test(lowerBadge)) {
          isRelevant = true;
          score += 350;
        } else if (tokenRegex.test(lowerSub) && lowerKeywords.length > 3) {
          isRelevant = true;
          score += 200;
        }
      }
    }

    if (isRelevant) {
      const conceptKey = getNormalizedConceptKey(item.companyId, item.planId, item.title);
      const existing = bestScoredMap.get(conceptKey);
      if (!existing || score > existing.score) {
        bestScoredMap.set(conceptKey, {
          ...item,
          score
        });
      }
    }
  });

  const uniqueContentItems = Array.from(bestScoredMap.values());
  uniqueContentItems.sort((a, b) => b.score - a.score);

  const displayConceptTitle = matchedConcept ? matchedConcept.title : getConceptTitleForQuery(rawQuery);

  return {
    companies: matchedCompanies,
    plans: matchedPlans,
    contentItems: uniqueContentItems.slice(0, 15),
    detectedCompany,
    queryConceptTitle: displayConceptTitle
  };
}

