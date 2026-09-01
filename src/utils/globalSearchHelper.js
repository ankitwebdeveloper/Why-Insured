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
  '2x': ['2x', '2 x', 'two times', 'double', 'doubling', '200%', '2 times', '2x cover', '2x coverage', '2x benefit', 'secure benefit', 'booster', 'booster benefit', 'booster+', 'reset benefit', 'recharge', 'restoration'],
  '4x': ['4x', '4 x', 'four times', '400%', '4 times', '4x cover', '4x coverage'],
  'restoration': ['restore', 'restoration', 'recharge', 'reset', 'refill', 'auto restore', 'auto-restore', 'unlimited restoration', 'forever restore', 'reassure forever'],
  'consumables': ['consumables', 'non-medical', 'non medical', 'protect benefit', 'care shield', 'gloves', 'masks', 'syringes', 'administrative items'],
  'room rent': ['room rent', 'room category', 'single private room', 'suite', 'icu', 'capping', 'proportionate deduction', 'sub-limit', 'sub limit', 'zero capping'],
  'maternity': ['maternity', 'pregnancy', 'delivery', 'newborn', 'baby', 'neonatal', 'child'],
  'opd': ['opd', 'outpatient', 'out-patient', 'consultation', 'doctor consultation', 'befit', 'diagnostic', 'pharmacy'],
  'wellness': ['wellness', 'rewards', 'stay active', 'live healthy', 'befit', 'fitness', 'steps', 'discount'],
  'waiting period': ['waiting period', 'waiting', 'ped', 'pre-existing', 'pre existing', 'chronic', 'abcd', 'disease list', 'initial waiting'],
  'checkup': ['checkup', 'check-up', 'health check', 'health checkup', 'preventive', 'screening', 'annual checkup'],
  'claim': ['claim', 'csr', 'icr', 'settlement', 'cashless', 'reimbursement', 'complaint'],
  'bonus': ['bonus', 'cumulative bonus', 'no claim bonus', 'ncb', 'plus benefit', 'infinite benefit', 'booster'],
  'ayush': ['ayush', 'ayurveda', 'homeopathy', 'unani', 'siddha', 'alternative treatment']
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
  if (clean.includes('protect') || clean.includes('consumables') || clean.includes('non-medical') || clean.includes('care shield')) return 'consumables';
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

      // Features Sections
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
 * Global search function: Evaluates both plans/companies and in-depth content
 * Eliminates duplicates strictly by company + plan + canonical concept.
 */
export function searchGlobalInsurance(query) {
  const trimmed = String(query || '').trim();
  if (!trimmed) {
    return {
      companies: [],
      plans: [],
      contentItems: [],
      detectedCompany: null
    };
  }

  const { detectedCompany, cleanedKeywords, rawQuery } = parseSearchQuery(trimmed);
  const searchIndex = getGlobalContentIndex();

  const lowerRaw = rawQuery.toLowerCase();
  const lowerKeywords = cleanedKeywords.toLowerCase();

  // 1. MATCH COMPANIES (Existing Plan/Company search capability preserved)
  const matchedCompanies = companiesData.filter((comp) => {
    const nameMatch = comp.name.toLowerCase().includes(lowerRaw) || comp.fullName.toLowerCase().includes(lowerRaw);
    if (nameMatch) return true;
    if (detectedCompany && (comp.id === detectedCompany.id || comp.slug === detectedCompany.id)) return true;
    return false;
  });

  // 2. MATCH PLANS
  const matchedPlans = [];
  const seenPlanIds = new Set();

  companiesData.forEach((comp) => {
    // If company is specifically detected, prioritize plans from this company
    if (detectedCompany && comp.id !== detectedCompany.id && comp.slug !== detectedCompany.id) {
      return;
    }
    comp.plans.forEach((plan) => {
      const planNameMatch = plan.name.toLowerCase().includes(lowerKeywords) || plan.name.toLowerCase().includes(lowerRaw);
      const planDescMatch = (plan.description || '').toLowerCase().includes(lowerKeywords);
      if (planNameMatch || planDescMatch) {
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

  // 3. MATCH DEEP CONTENT ITEMS
  // Expand synonyms for keywords
  const queryTerms = lowerKeywords.split(/\s+/).filter(Boolean);
  const expandedTerms = new Set(queryTerms);

  // Check synonym map
  Object.entries(SYNONYM_MAP).forEach(([key, syns]) => {
    const hasKey = queryTerms.some((t) => t.includes(key) || syns.includes(t));
    if (hasKey) {
      syns.forEach((s) => expandedTerms.add(s));
    }
  });

  // Score and group content items
  const bestScoredMap = new Map();

  searchIndex.forEach((item) => {
    // If company is specifically detected in query, filter/prioritize matching company
    const isTargetCompany = detectedCompany
      ? (item.companyId === detectedCompany.id || item.companyName.toLowerCase().includes(detectedCompany.aliases[0]))
      : true;

    if (detectedCompany && !isTargetCompany) {
      return;
    }

    let score = 0;
    const lowerTitle = (item.title || '').toLowerCase();
    const lowerSubtitle = (item.subtitle || '').toLowerCase();
    const lowerBadge = (item.badge || '').toLowerCase();
    const text = item.searchableText;

    // A. Direct & Exact Title Matches
    if (lowerTitle === lowerKeywords || lowerTitle === lowerRaw) {
      score += 1200;
    } else if (lowerTitle.includes(lowerKeywords) && lowerKeywords.length > 2) {
      score += 600;
    }

    // B. Direct Badge Match (e.g. "2X FROM DAY 1", "100% CASHLESS")
    if (lowerBadge.includes(lowerKeywords) && lowerKeywords.length > 1) {
      score += 450;
    }

    // C. Term-by-term matching with boost
    let matchedTermsCount = 0;
    queryTerms.forEach((term) => {
      if (term.length < 2) return;
      if (lowerTitle.includes(term)) {
        score += 250;
        matchedTermsCount++;
      } else if (lowerSubtitle.includes(term)) {
        score += 150;
        matchedTermsCount++;
      } else if (lowerBadge.includes(term)) {
        score += 120;
        matchedTermsCount++;
      } else if (text.includes(term)) {
        score += 80;
        matchedTermsCount++;
      }
    });

    // D. Expanded Synonyms matching (e.g., "2x" matching "doubling" or "restore" matching "recharge")
    expandedTerms.forEach((syn) => {
      if (syn.length < 2) return;
      if (lowerTitle.includes(syn)) {
        score += 180;
      } else if (lowerBadge.includes(syn)) {
        score += 140;
      } else if (text.includes(syn)) {
        score += 50;
      }
    });

    // E. Company boost if company was in query
    if (detectedCompany && isTargetCompany) {
      score += 300;
    }

    // F. Video availability slight boost for rich interactive content
    if (item.hasVideo) {
      score += 25;
    }

    // G. Rich feature type slight boost over must_know summary
    if (item.type === 'feature') {
      score += 10;
    }

    // If item qualifies
    if (score >= 80 || (queryTerms.length === 1 && matchedTermsCount > 0)) {
      // Canonical concept key for 100% clean deduplication
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

  // Extract deduplicated items and sort descending by score
  const uniqueContentItems = Array.from(bestScoredMap.values());
  uniqueContentItems.sort((a, b) => b.score - a.score);

  return {
    companies: matchedCompanies,
    plans: matchedPlans,
    contentItems: uniqueContentItems.slice(0, 15), // Top relevant unique items
    detectedCompany
  };
}
