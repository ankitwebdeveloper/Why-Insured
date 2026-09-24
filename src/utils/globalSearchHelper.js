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
    name: 'IndusInd General Insurance',
    aliases: ['indusind', 'indusind general', 'indusind general insurance', 'indusind health', 'indusind insurance', 'reliance', 'reliance general', 'reliance general insurance', 'reliance health', 'reliance insurance']
  },
  {
    id: 'magma-hdi',
    name: 'Magma General Insurance',
    aliases: ['magma', 'magma general', 'magma hdi', 'magma hdi general insurance', 'magma health', 'magma insurance']
  },
  {
    id: 'manipal-cigna',
    name: 'ManipalCigna',
    aliases: ['manipal', 'cigna', 'manipal cigna', 'manipalcigna', 'manipal health', 'cigna ttk']
  },
  {
    id: 'aditya-birla',
    name: 'Aditya Birla',
    aliases: ['aditya birla', 'aditya', 'birla']
  },
  {
    id: 'bajaj-general',
    name: 'Bajaj General Insurance',
    aliases: ['bajaj', 'bajaj general', 'bajaj allianz', 'bajaj general insurance', 'bajaj insurance', 'bajaj health']
  },
  {
    id: 'sbi-general',
    name: 'SBI General Insurance',
    aliases: ['sbi', 'sbi general', 'sbi general insurance', 'sbi health', 'sbi insurance', 'state bank of india']
  },
  {
    id: 'acko',
    name: 'ACKO',
    aliases: ['acko', 'acko general', 'acko general insurance', 'acko health', 'acko insurance']
  }
];

/**
 * Normalizes text for comparison by removing special characters, excessive whitespace, and lowercasing.
 */
export function normalizeString(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if target text contains the exact phrase at word boundaries.
 * Prevents arbitrary substring matches like "care" matching inside "medicare".
 */
function hasExactPhrase(textNorm, phraseNorm) {
  if (!textNorm || !phraseNorm) return false;
  if (textNorm === phraseNorm) return true;
  const paddedText = ` ${textNorm} `;
  const paddedPhrase = ` ${phraseNorm} `;
  return paddedText.includes(paddedPhrase);
}

/**
 * Checks if any word in textNorm starts with prefixNorm.
 */
function hasWordPrefix(textNorm, prefixNorm) {
  if (!textNorm || !prefixNorm || prefixNorm.length < 2) return false;
  const words = textNorm.split(' ').filter(Boolean);
  return words.some(w => w.startsWith(prefixNorm));
}

/**
 * Computes Levenshtein distance for fuzzy typo matching.
 */
function levenshteinDistance(s1, s2) {
  if (s1 === s2) return 0;
  if (!s1.length) return s2.length;
  if (!s2.length) return s1.length;
  if (Math.abs(s1.length - s2.length) > 2) return 99;

  const d = [];
  for (let i = 0; i <= s1.length; i++) d[i] = [i];
  for (let j = 0; j <= s2.length; j++) d[0][j] = j;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  return d[s1.length][s2.length];
}

/**
 * Collects all searchable plan metadata (description, coverage, benefits, details, variants).
 */
function getPlanSearchableMetadata(plan) {
  const parts = [];
  if (plan.description) parts.push(plan.description);
  if (plan.coverage) parts.push(plan.coverage);
  if (plan.category) parts.push(plan.category);
  if (Array.isArray(plan.variants)) parts.push(plan.variants.join(' '));
  if (Array.isArray(plan.benefits)) parts.push(plan.benefits.join(' '));
  if (plan.details && typeof plan.details === 'object') {
    parts.push(Object.values(plan.details).join(' '));
  }
  return normalizeString(parts.join(' '));
}

/**
 * Checks if search query matches a company based on strict priority:
 * Priority 3: Exact company name or exact alias match
 * Word-boundary matching only (no arbitrary substring match).
 */
function matchCompanyScore(comp, queryNorm, queryTokens) {
  const compNameNorm = normalizeString(comp.name);
  const fullNameNorm = normalizeString(comp.fullName || '');
  const compIdNorm = normalizeString(comp.id || '');
  const compSlugNorm = normalizeString(comp.slug || '');

  const dictEntry = COMPANY_DICTIONARY.find(d => d.id === comp.id);
  const rawAliases = dictEntry ? dictEntry.aliases : [];
  const aliases = rawAliases.map(normalizeString).filter(Boolean);

  // 1. Exact Match on full company name, ID, slug or alias
  if (compNameNorm === queryNorm || fullNameNorm === queryNorm || compIdNorm === queryNorm || compSlugNorm === queryNorm) {
    return 6500;
  }

  for (const alias of aliases) {
    if (alias === queryNorm) {
      return 6500;
    }
  }

  // 2. Company name or alias starts with query phrase at word boundary
  if (hasExactPhrase(compNameNorm, queryNorm) || compNameNorm.startsWith(queryNorm)) {
    return 6200;
  }

  for (const alias of aliases) {
    if (alias.startsWith(queryNorm) && queryNorm.length >= 3) {
      return 6000;
    }
  }

  // 3. Query contains company name or alias at whole-word boundary (e.g. "tata aig health insurance")
  if (hasExactPhrase(queryNorm, compNameNorm)) {
    return 5800;
  }

  for (const alias of aliases) {
    if (hasExactPhrase(queryNorm, alias)) {
      return 5500;
    }
  }

  // 4. All query tokens exist as whole words in company name / full name
  const compTokens = compNameNorm.split(' ').concat(fullNameNorm.split(' ')).filter(Boolean);
  if (queryTokens.length > 1) {
    const allInComp = queryTokens.every(qt => compTokens.includes(qt));
    if (allInComp) {
      return 5300;
    }
  }

  // 5. Word prefix match for typing partials (query.length >= 3)
  if (queryNorm.length >= 3) {
    if (hasWordPrefix(compNameNorm, queryNorm) || hasWordPrefix(fullNameNorm, queryNorm)) {
      return 2000;
    }
    for (const alias of aliases) {
      if (hasWordPrefix(alias, queryNorm)) {
        return 2000;
      }
    }
  }

  return 0;
}

/**
 * Checks if search query matches a plan based on strict priority:
 * Priority 1: Exact full plan-name match (>= 9500)
 * Priority 2: Exact word/phrase match in plan name (7000 - 8999)
 * Priority 3: Word/phrase match in company name while plan belongs to that company (5500)
 * Priority 4: Exact word/phrase in searchable plan metadata (3000 - 4999)
 * Priority 5: Strong related / prefix / fuzzy matches (1000 - 2999)
 */
function matchPlanScore(plan, comp, queryNorm, queryTokens, queryRaw) {
  const planNameNorm = normalizeString(plan.name);
  const planIdNorm = normalizeString(plan.id);
  const compNameNorm = normalizeString(plan.companyName || comp.name);
  const combinedNameNorm = normalizeString(`${comp.name} ${plan.name}`);
  const combinedCustomCompNorm = normalizeString(`${compNameNorm} ${plan.name}`);

  // PRIORITY 1: Exact full plan-name match
  // 1a. Raw exact plan name match tiebreaker (e.g. "Optima Secure" exact matches "Optima Secure", not "Optima Secure+")
  if (plan.name && typeof plan.name === 'string' && plan.name.trim().toLowerCase() === queryRaw.trim().toLowerCase()) {
    return 10050;
  }

  if (planNameNorm === queryNorm || planIdNorm === queryNorm) {
    return 10000;
  }
  if (combinedNameNorm === queryNorm || combinedCustomCompNorm === queryNorm) {
    return 9800;
  }

  // Full plan name is contained in the query as an exact phrase (e.g. "hdfc optima secure" contains "optima secure")
  if (hasExactPhrase(queryNorm, planNameNorm)) {
    return 9500;
  }

  // PRIORITY 2: Exact word/phrase match in plan name
  // Starts with exact phrase at word boundary
  if (planNameNorm.startsWith(queryNorm) && (planNameNorm.length === queryNorm.length || planNameNorm[queryNorm.length] === ' ')) {
    return 8800;
  }

  // Exact phrase match at word boundary in plan name
  if (hasExactPhrase(planNameNorm, queryNorm)) {
    return 8400;
  }

  // Exact phrase match at word boundary in combined name (e.g. "tata aig medicare select")
  if (hasExactPhrase(combinedNameNorm, queryNorm) || hasExactPhrase(combinedCustomCompNorm, queryNorm)) {
    return 8200;
  }

  // Token containment in plan name
  const planTokens = planNameNorm.split(' ').filter(Boolean);
  const combinedTokens = combinedNameNorm.split(' ').filter(Boolean);

  let planMatchedTokens = 0;
  for (const qt of queryTokens) {
    if (planTokens.includes(qt)) {
      planMatchedTokens++;
    }
  }

  // All query tokens are words in plan name
  if (queryTokens.length > 0 && planMatchedTokens === queryTokens.length) {
    return 7800 + Math.min(queryTokens.length * 100, 400);
  }

  // All query tokens in combined (company + plan) name
  let combinedMatchedTokens = 0;
  for (const qt of queryTokens) {
    if (combinedTokens.includes(qt)) {
      combinedMatchedTokens++;
    }
  }
  if (queryTokens.length > 1 && combinedMatchedTokens === queryTokens.length) {
    return 7500 + Math.min(queryTokens.length * 100, 300);
  }

  // Partial token match in plan name (e.g. only 1 out of multiple words matched)
  if (planMatchedTokens > 0) {
    // When user types multiple words, matching only 1 generic word is a partial match
    return 4800 + Math.floor((planMatchedTokens / queryTokens.length) * 1000);
  }

  // PRIORITY 3: Word in company name while plan belongs to that company
  const compTokens = compNameNorm.split(' ').filter(Boolean);
  const compMatchedTokens = queryTokens.filter(qt => compTokens.includes(qt)).length;
  if (compMatchedTokens === queryTokens.length) {
    // Query was purely company name (e.g. "hdfc")
    return 5500;
  }

  // PRIORITY 4: Exact word/phrase in searchable plan metadata (description, benefits, etc.)
  const metaNorm = getPlanSearchableMetadata(plan);
  if (metaNorm) {
    if (hasExactPhrase(metaNorm, queryNorm)) {
      return 4200;
    }
    const metaTokens = metaNorm.split(' ').filter(Boolean);
    const metaMatched = queryTokens.filter(qt => metaTokens.includes(qt)).length;
    if (metaMatched === queryTokens.length) {
      return 3800;
    }
    if (metaMatched > 0) {
      return 3000 + Math.floor((metaMatched / queryTokens.length) * 400);
    }
  }

  // PRIORITY 5: Strong related / prefix / fuzzy matches
  if (queryNorm.length >= 3) {
    // Prefix match in plan name
    if (hasWordPrefix(planNameNorm, queryNorm)) {
      return 2500;
    }

    // Prefix match in metadata
    if (metaNorm && hasWordPrefix(metaNorm, queryNorm)) {
      return 1800;
    }

    // Fuzzy typo match on plan name words
    for (const pw of planTokens) {
      if (pw.length >= 4 && queryNorm.length >= 4) {
        const maxDist = pw.length >= 7 && queryNorm.length >= 7 ? 2 : 1;
        if (levenshteinDistance(pw, queryNorm) <= maxDist) {
          return 1200;
        }
      }
    }
  }

  return 0;
}

/**
 * Strict Global Insurance Search with Prioritized Ranking & Word-Boundary Safety
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
  const queryTokens = queryNorm.split(' ').filter(Boolean);

  if (!queryNorm || !queryTokens.length) {
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
    const score = matchCompanyScore(comp, queryNorm, queryTokens);
    if (score > 0) {
      scoredCompanies.push({ comp, score });
    }
  }

  scoredCompanies.sort((a, b) => b.score - a.score);

  // 2. MATCH PLANS
  const scoredPlans = [];
  for (const comp of companiesData) {
    for (const plan of (comp.plans || [])) {
      const score = matchPlanScore(plan, comp, queryNorm, queryTokens, queryRaw);
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

  // Determine highest match levels for smart filtering (Requirement 4 & Requirement 8)
  const topPlanScore = scoredPlans.length > 0 ? scoredPlans[0].score : 0;
  const topCompanyScore = scoredCompanies.length > 0 ? scoredCompanies[0].score : 0;

  // Filter out weak / noise matches when exact/strong matches exist
  let filteredPlans = scoredPlans;
  if (topPlanScore >= 9500) {
    // Exact full plan match exists -> only keep strong plan matches (score >= 7000)
    filteredPlans = scoredPlans.filter(sp => sp.score >= 7000);
  } else if (topPlanScore >= 7000) {
    // Strong plan word/phrase match exists -> keep results >= 5000 (exclude weak metadata/fuzzy)
    filteredPlans = scoredPlans.filter(sp => sp.score >= 5000);
  }

  // When a specific plan match is dominant (score >= 7500) and top company was only a partial/weak match,
  // do not let unrelated company groups push the plan down
  let relevantCompanies = scoredCompanies;
  if (topPlanScore >= 7500 && topCompanyScore < 6500) {
    relevantCompanies = scoredCompanies.filter(sc => sc.score >= 6000);
  }

  const matchedCompanyIds = new Set(relevantCompanies.map(sc => sc.comp.id));

  // Build company groups with sorted matching plans first
  const companyGroups = relevantCompanies.map(({ comp }) => {
    const compMatchingPlans = filteredPlans.filter(sp => sp.company.id === comp.id);
    const compMatchingPlanIds = new Set(compMatchingPlans.map(sp => sp.plan.id));

    let displayPlans = [];
    if (topPlanScore >= 7000 && compMatchingPlans.length > 0) {
      // Specific query with matching plans -> only show matching plans in company group
      displayPlans = compMatchingPlans.map(sp => sp.plan);
    } else {
      // General company query -> show matching plans first, then other plans of the company
      const nonMatchingPlans = (comp.plans || [])
        .filter(p => !compMatchingPlanIds.has(p.id))
        .map(p => ({
          ...p,
          companyId: comp.id,
          companyName: comp.name,
          companyFullName: comp.fullName,
          companyLogo: comp.logo,
          companyTheme: comp.theme,
          planUrl: `/insurance/${comp.id}/${p.id}`
        }));
      displayPlans = [...compMatchingPlans.map(sp => sp.plan), ...nonMatchingPlans];
    }

    return {
      company: comp,
      companyId: comp.id,
      companyName: comp.name,
      companyFullName: comp.fullName,
      companyLogo: comp.logo,
      companyTheme: comp.theme,
      companyUrl: `/insurance/${comp.id}`,
      plans: displayPlans
    };
  });

  // Direct plans: matching plans whose company is NOT already shown as a company group
  const directPlans = filteredPlans
    .filter(sp => !matchedCompanyIds.has(sp.company.id))
    .map(sp => sp.plan);

  // All matched companies
  const companies = relevantCompanies.map(sc => sc.comp);

  // All plans if directly searched
  const allMatchingPlans = filteredPlans.map(sp => sp.plan);

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
