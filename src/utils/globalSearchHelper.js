import { companiesData } from '../data/companies.js';

// Helper to check if a feature has a genuine video asset (and not a placeholder demo url)
export function hasValidVideo(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim();
  if (!clean || clean === '' || clean.includes('dQw4w9WgXcQ')) return false;
  return true;
}

// Company recognition dictionary for intelligent query matching
export const COMPANY_DICTIONARY = [
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO',
    aliases: ['hdfc', 'hdfc ergo', 'hdfcergo', 'hdfc life', 'ergo']
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
    id: 'icici-lombard',
    name: 'ICICI Lombard',
    aliases: ['icici', 'icici lombard', 'icicilombard', 'lombard']
  },
  {
    id: 'care-health',
    name: 'Care Health',
    aliases: ['care', 'care health', 'carehealth', 'religare']
  },
  {
    id: 'reliance-general',
    name: 'Reliance General Insurance',
    aliases: ['reliance', 'reliance general', 'reliance general insurance', 'reliance health', 'reliance insurance']
  },
  {
    id: 'magma-hdi',
    name: 'Magma General Insurance',
    aliases: ['magma', 'magma general', 'magma hdi', 'magma hdi general insurance', 'magma health', 'magma insurance']
  },
  {
    id: 'indusind-general',
    name: 'IndusInd General Insurance',
    aliases: ['indusind', 'indusind general', 'indusind general insurance', 'indusind health', 'indusind insurance', 'indusind bank']
  },
  {
    id: 'manipal-cigna',
    name: 'ManipalCigna',
    aliases: ['manipal', 'cigna', 'manipal cigna', 'manipalcigna', 'manipal health', 'cigna ttk', 'manipalcigna sarvah', 'manipal cigna sarvah', 'sarvah']
  }
];

/**
 * Normalizes text for comparison by removing special characters, excessive whitespace, and lowercasing.
 */
function normalizeString(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if search query matches a company based on strict priority:
 * 1. Exact name match
 * 2. Exact alias match
 * 3. Partial name / alias match
 */
function matchCompanyScore(comp, queryNorm, queryRaw) {
  const compNameNorm = normalizeString(comp.name);
  const fullNameNorm = normalizeString(comp.fullName);
  const compId = (comp.id || '').toLowerCase();
  const compSlug = (comp.slug || '').toLowerCase();

  // Find alias definition
  const dictEntry = COMPANY_DICTIONARY.find(d => d.id === comp.id);
  const aliases = dictEntry ? dictEntry.aliases.map(normalizeString) : [];

  // 1. Exact Name Match
  if (compNameNorm === queryNorm || fullNameNorm === queryNorm || compId === queryNorm || compSlug === queryNorm) {
    return 1000;
  }

  // Exact alias match
  for (const alias of aliases) {
    if (alias === queryNorm) {
      return 900;
    }
  }

  // 2. Partial match: starts with
  if (compNameNorm.startsWith(queryNorm) || fullNameNorm.startsWith(queryNorm)) {
    return 800;
  }

  for (const alias of aliases) {
    if (queryNorm.startsWith(alias) || alias.startsWith(queryNorm)) {
      return 750;
    }
    // Word boundary match
    const aliasRegex = new RegExp(`(^|\\s)${alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\s|$)`, 'i');
    if (aliasRegex.test(queryRaw)) {
      return 700;
    }
  }

  if (compNameNorm.includes(queryNorm) || fullNameNorm.includes(queryNorm) || queryNorm.includes(compNameNorm)) {
    return 600;
  }

  for (const alias of aliases) {
    if (alias.length >= 3 && (queryNorm.includes(alias) || alias.includes(queryNorm))) {
      return 500;
    }
  }

  return 0;
}

/**
 * Checks if search query matches a plan name based on strict priority:
 * 1. Exact Plan Name
 * 2. Plan Name partial match
 */
function matchPlanScore(plan, comp, queryNorm, queryRaw) {
  const planNameNorm = normalizeString(plan.name);
  const planIdNorm = normalizeString(plan.id);
  const compNameNorm = normalizeString(plan.companyName || comp.name);
  const combinedNameNorm = normalizeString(`${comp.name} ${plan.name}`);
  const combinedCustomCompNorm = normalizeString(`${compNameNorm} ${plan.name}`);

  // 1. Exact Plan Name Match
  if (
    planNameNorm === queryNorm ||
    planIdNorm === queryNorm ||
    combinedNameNorm === queryNorm ||
    combinedCustomCompNorm === queryNorm
  ) {
    return 850;
  }

  // 2. Partial match: starts with
  if (planNameNorm.startsWith(queryNorm)) {
    return 750;
  }

  if (
    planNameNorm.includes(queryNorm) ||
    combinedNameNorm.includes(queryNorm) ||
    combinedCustomCompNorm.includes(queryNorm)
  ) {
    return 650;
  }

  // Check token containment (all words in query exist in plan name or company name)
  const queryTokens = queryNorm.split(' ').filter(Boolean);
  if (queryTokens.length > 1) {
    const allTokensInPlan = queryTokens.every(
      t => planNameNorm.includes(t) || normalizeString(comp.name).includes(t) || compNameNorm.includes(t)
    );
    if (allTokensInPlan) {
      return 600;
    }
  }

  return 0;
}

/**
 * Strict Global Insurance Search
 * Searches ONLY:
 * 1. Company Name
 * 2. Plan Name
 * 
 * When a company matches: returns the company and ALL plans belonging to it.
 * When a plan matches: returns the matching plan.
 */
export function searchGlobalInsurance(rawQuery) {
  if (!rawQuery || typeof rawQuery !== 'string' || !rawQuery.trim()) {
    return {
      companies: [],
      plans: [],
      companyGroups: [],
      directPlans: [],
      totalCount: 0
    };
  }

  const queryRaw = rawQuery.trim();
  const queryNorm = normalizeString(queryRaw);

  if (!queryNorm) {
    return {
      companies: [],
      plans: [],
      companyGroups: [],
      directPlans: [],
      totalCount: 0
    };
  }

  // 1. MATCH COMPANIES
  const scoredCompanies = [];
  for (const comp of companiesData) {
    const score = matchCompanyScore(comp, queryNorm, queryRaw);
    if (score > 0) {
      scoredCompanies.push({ comp, score });
    }
  }

  scoredCompanies.sort((a, b) => b.score - a.score);

  // 2. MATCH PLANS
  const scoredPlans = [];
  for (const comp of companiesData) {
    for (const plan of (comp.plans || [])) {
      const score = matchPlanScore(plan, comp, queryNorm, queryRaw);
      if (score > 0) {
        scoredPlans.push({
          plan: {
            ...plan,
            companyId: comp.id,
            companyName: plan.companyName || comp.name,
            companyFullName: comp.fullName,
            companyLogo: comp.logo,
            companyTheme: comp.theme,
            planUrl: `/insurance/${comp.id}/${plan.id}`
          },
          company: comp,
          score
        });
      }
    }
  }

  scoredPlans.sort((a, b) => b.score - a.score);

  // Group company results with ALL their plans
  const matchedCompanyIds = new Set(scoredCompanies.map(sc => sc.comp.id));
  
  const companyGroups = scoredCompanies.map(({ comp }) => ({
    company: comp,
    companyId: comp.id,
    companyName: comp.name,
    companyFullName: comp.fullName,
    companyLogo: comp.logo,
    companyTheme: comp.theme,
    companyUrl: `/insurance/${comp.id}`,
    plans: (comp.plans || []).map(p => ({
      ...p,
      companyId: comp.id,
      companyName: comp.name,
      companyFullName: comp.fullName,
      companyLogo: comp.logo,
      companyTheme: comp.theme,
      planUrl: `/insurance/${comp.id}/${p.id}`
    }))
  }));

  // Direct plans: plans that matched whose company is NOT already shown in matchedCompanyIds
  const directPlans = scoredPlans
    .filter(sp => !matchedCompanyIds.has(sp.company.id))
    .map(sp => sp.plan);

  // All matched companies
  const companies = scoredCompanies.map(sc => sc.comp);

  // All plans if directly searched
  const allMatchingPlans = scoredPlans.map(sp => sp.plan);

  // Total count calculation
  let totalCount = 0;
  companyGroups.forEach(cg => {
    totalCount += cg.plans.length > 0 ? cg.plans.length : 1;
  });
  totalCount += directPlans.length;

  return {
    companies,
    plans: directPlans.length > 0 ? directPlans : allMatchingPlans,
    companyGroups,
    directPlans,
    totalCount
  };
}
