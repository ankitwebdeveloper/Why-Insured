import * as vite from 'vite';
import fs from 'fs';

const ALL_COMPANIES = [
  {
    file: 'HdfcPlanDetailSection.jsx',
    color: '#E30613',
    lightBg: '#FFF5F5',
    darkText: '#0F172A'
  },
  {
    file: 'IciciCompleteHealthSection.jsx',
    color: '#F58220',
    lightBg: '#FFF7ED',
    darkText: '#0F172A'
  },
  {
    file: 'NivaBupaPlanDetailSection.jsx',
    color: '#00A8B5',
    lightBg: '#E6F7F8',
    darkText: '#0F172A'
  },
  {
    file: 'StarHealthPlanDetailSection.jsx',
    color: '#003087',
    lightBg: '#F0F7FF',
    darkText: '#0F172A'
  },
  {
    file: 'CareHealthPlanDetailSection.jsx',
    color: '#003366',
    lightBg: '#F0F8FF',
    darkText: '#0F172A'
  },
  {
    file: 'MagmaPlanDetailSection.jsx',
    color: '#ED1B24',
    lightBg: '#FFF5F5',
    darkText: '#000000'
  },
  {
    file: 'ReliancePlanDetailSection.jsx',
    color: '#205398',
    lightBg: '#F0F4FF',
    darkText: '#0F172A'
  },
  {
    file: 'ManipalCignaPlanDetailSection.jsx',
    color: '#F8971F',
    lightBg: '#FFF8F0',
    darkText: '#0F172A'
  },
  {
    file: 'AdityaBirlaPlanDetailSection.jsx',
    color: '#D51D25',
    lightBg: '#FFF5F5',
    darkText: '#0F172A'
  },
  {
    file: 'BajajPlanDetailSection.jsx',
    color: '#004DA8',
    lightBg: '#F0F4FF',
    darkText: '#0F172A'
  },
  {
    file: 'SbiPlanDetailSection.jsx',
    color: '#00B5EF',
    lightBg: '#F0F9FF',
    darkText: '#0F172A'
  },
  {
    file: 'AckoPlanDetailSection.jsx',
    color: '#511C53',
    lightBg: '#FAF5FF',
    darkText: '#0F172A'
  }
];

function generateCard6(cfg) {
  return `          {/* Card 6: PERFECT FOR */}
          <button
            type="button"
            onClick={() => setActiveModal('bestSuitedFor')}
            className={\`bg-white rounded-xl sm:rounded-2xl border p-2.5 sm:p-4 md:p-5 flex items-center justify-between text-left shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group relative overflow-hidden active:scale-[0.98] select-none \${
              activeModal === 'bestSuitedFor'
                ? 'border-[${cfg.color}] ring-2 ring-[${cfg.color}]/20'
                : 'border-slate-200/80 hover:border-[${cfg.color}]/40'
            }\`}
          >
            <div className={\`absolute bottom-0 left-0 right-0 h-[2.5px] transition-colors duration-200 \${
              activeModal === 'bestSuitedFor' ? 'bg-[${cfg.color}]' : 'bg-[${cfg.color}]/30 group-hover:bg-[${cfg.color}]'
            }\`} />
            <h3 className="text-xs sm:text-base font-extrabold text-[${cfg.darkText}] group-hover:text-[${cfg.color}] transition-colors duration-200 font-display leading-tight pr-1 tracking-tight uppercase">
              PERFECT FOR
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[${cfg.color}] group-hover:bg-[${cfg.lightBg}] group-hover:border-[${cfg.color}]/20 transition-all duration-200 shrink-0">
              <FiArrowRight className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>`;
}

function generateModalSection(cfg) {
  return `              {/* MODAL 5: PERFECT FOR */}
              {(activeModal === 'bestSuitedFor' || activeModal === 'perfectFor') && (
                <div className="space-y-4 sm:space-y-5">
                  <div className="pr-8">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                      PERFECT FOR
                    </h2>
                    <p className="text-xs text-[${cfg.color}] font-medium mt-0.5">
                      {planData.bestSuitedFor?.subheading || planData.perfectFor?.subheading || 'Who is this plan perfect for?'}
                    </p>
                    {(planData.bestSuitedFor?.description || planData.perfectFor?.description) && (
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        {planData.bestSuitedFor?.description || planData.perfectFor?.description}
                      </p>
                    )}
                  </div>

                  {((planData.bestSuitedFor?.profiles || planData.perfectFor?.items || []).length > 0) ? (
                    <div className="space-y-3">
                      {(planData.bestSuitedFor?.profiles || planData.perfectFor?.items || []).map((profile, idx) => (
                        <div
                          key={profile.id || idx}
                          className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[${cfg.color}]/30 shadow-2xs space-y-2 text-left hover:border-[${cfg.color}]/60 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg sm:text-xl shrink-0 select-none">{profile.icon || '👤'}</span>
                              <h4 className="text-xs sm:text-sm font-extrabold text-[${cfg.darkText}] font-display">
                                {profile.title}
                              </h4>
                            </div>
                            {profile.badge && (
                              <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[${cfg.lightBg}] text-[${cfg.color}] border border-[${cfg.color}]/20 shrink-0 font-display">
                                {profile.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">
                            {profile.summary || profile.description}
                          </p>
                          {profile.highlights && (
                            <ul className="space-y-1 pt-1.5 border-t border-slate-100">
                              {profile.highlights.map((hl, hlIdx) => (
                                <li key={hlIdx} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                                  <FiCheck className="text-[${cfg.color}] mt-0.5 shrink-0 text-xs" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-500 text-xs sm:text-sm font-medium">
                      Information not available for this plan.
                    </div>
                  )}
                </div>
              )}`;
}

async function run() {
  for (const cfg of ALL_COMPANIES) {
    const filePath = `src/components/${cfg.file}`;
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Star health specific Card 6 replacement
    if (cfg.file === 'StarHealthPlanDetailSection.jsx') {
      const starCard6Regex = /\{\/\* Card 6: PERFECT FOR \(or Compare if Super Star Variant\) \*\/\}[\s\S]*?\{\(planData\.bestSuitedFor \|\| planData\.perfectFor\) \? \([\s\S]*?\)\s*:\s*isSuperStarVariant \? \([\s\S]*?\)\s*:\s*null\}/;
      if (starCard6Regex.test(content)) {
        content = content.replace(starCard6Regex, generateCard6(cfg));
      }
    }

    // 2. Generic Card 6 conditional replacement
    const genericConditionalRegex = /\{\/\* Card 6: PERFECT FOR[\s\S]*?\{\(planData\.bestSuitedFor \|\| planData\.perfectFor\)\s*&&\s*\([\s\S]*?<\/button>\s*\)\}/;
    if (genericConditionalRegex.test(content)) {
      content = content.replace(genericConditionalRegex, generateCard6(cfg));
    }

    // 3. Unconditional modal top tab switcher
    content = content.replace(
      /\.\.\.\(planData\.bestSuitedFor \|\| planData\.perfectFor \? \[\{ id: 'bestSuitedFor', label: 'Perfect For' \}\] : \[\]\)/g,
      "{ id: 'bestSuitedFor', label: 'Perfect For' }"
    );

    // 4. Modal section replacement with complete fallback
    const modalRegex = /\{\/\* MODAL \d+: PERFECT FOR \*\/\}[\s\S]*?\{\(?activeModal === 'bestSuitedFor' \|\| activeModal === 'perfectFor'\)? && \([\s\S]*?\)\s*\}\s*(?=(?:<\/motion\.div>|\{\/\*))/;
    const modalSingleRegex = /\{\/\* MODAL \d+: PERFECT FOR \*\/\}[\s\S]*?\{activeModal === 'bestSuitedFor' && \([\s\S]*?\)\s*\}\s*(?=(?:<\/motion\.div>|\{\/\*))/;

    if (modalRegex.test(content)) {
      content = content.replace(modalRegex, generateModalSection(cfg) + '\n\n');
    } else if (modalSingleRegex.test(content)) {
      content = content.replace(modalSingleRegex, generateModalSection(cfg) + '\n\n');
    } else if (!content.includes("activeModal === 'bestSuitedFor'") && !content.includes("activeModal === 'perfectFor'")) {
      const insertTarget = '</motion.div>\n          </div>\n        )}\n      </AnimatePresence>';
      const altTarget = '</motion.div>\n            </div>\n          )}\n        </AnimatePresence>';
      if (content.includes(insertTarget)) {
        content = content.replace(insertTarget, generateModalSection(cfg) + '\n\n            ' + insertTarget);
      } else if (content.includes(altTarget)) {
        content = content.replace(altTarget, generateModalSection(cfg) + '\n\n            ' + altTarget);
      }
    }

    // Validate JSX with Oxc
    try {
      await vite.transformWithOxc(content, cfg.file, { jsx: { runtime: 'automatic' } });
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`${cfg.file}: OK`);
    } catch (e) {
      console.error(`${cfg.file}: OXC ERROR: ${e.message}`);
    }
  }
}

run();
