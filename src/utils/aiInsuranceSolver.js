// Comprehensive AI Insurance Problem Solver Engine
// Understands natural queries, broken sentences, Hinglish, spelling variations,
// and hospital billing doubts, delivering simple, scannable 4-part structured answers.

import { companiesData } from '../data/companies.js';

export const AI_TOPIC_KNOWLEDGE_BASE = [
  {
    id: 'consumables',
    category: 'HOSPITAL BILLING & DEDUCTIONS',
    badge: 'Common Hospital Surprise',
    title: 'Consumables & Non-Medical Items',
    keywords: [
      'consumable', 'consumables', 'glove', 'gloves', 'syringe', 'syringes', 'cotton',
      'mask', 'masks', 'ppe', 'sanitizer', 'disposable', 'cannula', 'gauze', 'bandage',
      'bandages', 'urine bag', 'thermometer', 'non medical', 'non-medical', 'hospital charged me for gloves',
      'gloves ka paisa', 'gloves cover', 'gloves are covered', 'doctor said non medical',
      'syringe cover', 'cotton cover', 'itemized bill', 'administrative charges',
      'protect benefit', 'care shield', 'safeguard', 'claim protector'
    ],
    simpleAnswer: 'Consumables are small, single-use medical items used by doctors and nurses during your hospital treatment.',
    whatDoesItMean: 'Items like surgical gloves, syringes, cotton, and masks are used once and thrown away. In standard insurance policies, these are treated as "non-medical expenses" and charged directly from your own pocket.',
    examples: ['Gloves', 'Syringes', 'Cotton & Bandages', 'Masks & PPE Kits', 'IV Cannulas & Tubes', 'Sanitizers & Disinfectants'],
    coverageDependsOn: 'Whether your policy includes "Consumables Cover" or a "Non-Medical Items Add-on". Standard base policies usually exclude them, but modern policies pay 100% of these expenses with an add-on.',
    whatShouldYouDo: 'Check if your health policy has "Consumables Cover" (such as Protect Benefit or Care Shield). If not, add this rider during renewal so you don\'t face unexpected out-of-pocket bills during hospital discharge.',
    featureToLookFor: 'Consumables Cover / Non-Medical Expenses Add-on',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Protect Benefit (In-built)' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Care Shield Add-on' },
      { company: 'Star Health', plan: 'Smart Health Pro', feature: 'Consumables Cover' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'consumables'
  },
  {
    id: 'room_rent',
    category: 'HOSPITAL ROOM & STAY',
    badge: 'Critical Policy Limit',
    title: 'Room Rent Capping & Deductions',
    keywords: [
      'room rent', 'room limit', 'room charges', 'room category', 'single private room',
      'deluxe room', 'suite', 'room ka limit', 'kamre ka rent', 'proportionate deduction',
      'sub-limit', 'sub limit', 'capping', 'icu rent', 'icu charges', 'twin sharing',
      'bed charges', 'room deduction', 'why doctor fees cut for room'
    ],
    simpleAnswer: 'Room rent is the daily limit your insurance pays for your hospital room category (e.g. Single Private Room vs 1% of Sum Insured).',
    whatDoesItMean: 'If your policy has a 1% room rent limit (e.g. ₹5,000/day on ₹5 Lakh cover) and you choose a room costing ₹8,000/day, the insurer will cut not just room rent, but proportionately reduce doctor fees, surgery charges, and nursing fees across the entire hospital bill.',
    examples: ['Single Private Room', 'Twin Sharing Bed', 'Deluxe Room', 'ICU Charges', 'Nursing & Sanitation Fees'],
    coverageDependsOn: 'Your policy\'s room category clause. Premium policies provide "No Room Rent Capping / Single Private Room eligibility", while basic plans have a 1% or 2% sub-limit.',
    whatShouldYouDo: 'Always choose a health plan with "No Room Rent Capping" or "Single Private Room Eligibility". If already insured, avoid upgrading to a luxury suite unless your policy explicitly allows all room categories.',
    featureToLookFor: 'No Room Rent Capping / Single Private Room Upgrade',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Any Room Category (No Capping)' },
      { company: 'ICICI Lombard', plan: 'Elevate', feature: 'Single Private Room' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Any Room Category' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'room_rent'
  },
  {
    id: 'restoration',
    category: 'POLICY BENEFIT',
    badge: 'Backup Sum Insured',
    title: 'Restoration / Recharge / Refill Benefit',
    keywords: [
      'restoration', 'restore', 'recharge', 'reset', 'refill', 'auto restore', 'auto-restore',
      'unlimited restoration', 'reassure forever', 'forever restore', 'what is restoration',
      'sum insured khatam', 'balance refill', 'same illness restore', 'different illness restore',
      'dobara claim', 'recharge benefit', 'reset benefit'
    ],
    simpleAnswer: 'Restoration automatically refills 100% of your policy sum insured when your balance is used up by earlier hospital claims during the year.',
    whatDoesItMean: 'If you have a ₹10 Lakh policy and use ₹10 Lakhs for a surgery, your policy balance becomes ₹0. Restoration automatically refills another ₹10 Lakhs so family members or future hospitalizations in the same year remain fully covered.',
    examples: ['Same Illness Claims', 'Different Illness Claims', 'Multiple Family Members Hospitalized', 'Unlimited Auto-Refills'],
    coverageDependsOn: 'Whether the plan offers "Unlimited Restoration", whether it triggers on partial or complete exhaustion, and whether it covers the same illness or only different illnesses.',
    whatShouldYouDo: 'Look for plans offering "Unlimited Restoration for Both Same & Related Illnesses from Day 1" so you never run out of health coverage in a single year.',
    featureToLookFor: 'Unlimited Restoration / Forever Restore / Reset Benefit',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Automatic Restore Benefit' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Cumulative & Auto Recharge' },
      { company: 'Star Health', plan: 'Star Comprehensive', feature: '100% Automatic Restoration' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'restoration'
  },
  {
    id: 'claim_rejection',
    category: 'CLAIMS & RESOLUTION',
    badge: 'Urgent Issue Resolution',
    title: 'Why Claims Get Rejected & What To Do',
    keywords: [
      'claim rejected', 'rejected', 'rejection', 'my claim was rejected', 'mera claim kyu reject hua',
      'claim pass nahi hua', 'claim deny', 'claim denied', 'why claim rejected', 'insurance reject',
      'claim issue', 'rejection letter', 'hospital bill rejected', 'ombudsman', 'grievance'
    ],
    simpleAnswer: 'Claims are usually rejected due to active waiting periods, undisclosed pre-existing conditions, non-covered exclusions, or missing hospital documents.',
    whatDoesItMean: 'An insurer cannot reject a valid claim without a specific policy clause. Most common reasons are claiming for an illness during its 30-day or 2-year waiting period, or treating an OPD expense as an inpatient hospitalization.',
    examples: ['Initial 30-Day Waiting Period', 'Pre-existing Disease Not Disclosed', 'Treatment in Blacklisted Hospital', 'Missing Discharge Summary or Bills', 'Non-Allopathic / Cosmetic Procedure'],
    coverageDependsOn: 'Whether the treatment fell after your waiting periods, whether full medical history was declared at purchase, and whether hospital is recognized by the insurer.',
    whatShouldYouDo: 'Ask your insurer/TPA for the official "Rejection Letter" with the exact clause number. Collect your doctor\'s prescription, discharge summary, and test reports. If rejected unfairly, file a grievance or approach the Insurance Ombudsman.',
    featureToLookFor: 'High Claim Settlement Ratio (98%+) & Fast In-House Claim Team',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'In-House Claim Settlement (99.1% CSR)' },
      { company: 'ICICI Lombard', plan: 'Elevate', feature: 'In-House TPA & Fast Cashless' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Dedicated Claims Desk' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/claim',
    compareFeature: 'claim'
  },
  {
    id: 'cashless',
    category: 'HOSPITAL ADMISSION',
    badge: 'Zero Cash at Hospital',
    title: 'Cashless Hospitalization vs Reimbursement',
    keywords: [
      'cashless', 'cashless hospital', 'cashless kaha milega', 'cashless kaise le',
      'network hospital', 'cashless everywhere', 'reimbursement', 'hospital list',
      'pre auth', 'pre authorization', 'cashless approval', 'without paying money'
    ],
    simpleAnswer: 'Cashless means the insurance company pays your hospital bill directly to the hospital, so you don\'t have to arrange huge cash upfront.',
    whatDoesItMean: 'When you get admitted to a network hospital, the insurance TPA desk verifies your policy and settles bills directly with the hospital. You only pay for non-covered items (or ₹0 if you have consumables cover).',
    examples: ['Planned Admission (Inform 48 hrs before)', 'Emergency Admission (Inform within 24 hrs)', 'Network Hospital TPA Desk', 'Cashless Anywhere Facility'],
    coverageDependsOn: 'The hospital being part of the insurer\'s cashless network (or eligible under the new IRDAI "Cashless Everywhere" initiative).',
    whatShouldYouDo: 'Show your Health Card / Policy Copy at the hospital\'s TPA desk upon admission. Ensure your hospital doctor fills the pre-authorization form immediately.',
    featureToLookFor: '10,000+ Cashless Network Hospitals & 1-Hour Cashless Approval',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: '13,000+ Cashless Network Hospitals' },
      { company: 'Star Health', plan: 'Smart Health Pro', feature: '14,000+ Cashless Hospitals' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Cashless Anywhere Supported' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/hospital',
    compareFeature: 'cashless'
  },
  {
    id: 'copay',
    category: 'OUT-OF-POCKET EXPENSES',
    badge: 'Mandatory Cost Sharing',
    title: 'Co-Payment (Co-Pay)',
    keywords: [
      'co-pay', 'copay', 'what is co-pay', 'what is copay', 'co payment', 'copayment',
      '20% copay', '10% copay', 'senior citizen copay', 'zone copay', 'why 20% cut',
      'copay kya hota hai', 'compulsory copay', 'voluntary copay', 'cost sharing'
    ],
    simpleAnswer: 'Co-pay is a fixed percentage of the hospital bill that you must pay from your own pocket every time you make a claim.',
    whatDoesItMean: 'If your policy has a 20% co-pay and your approved hospital bill is ₹2,00,000, the insurance company will pay ₹1,60,000 (80%) and you MUST pay ₹40,000 (20%) from your own bank account.',
    examples: ['Age-based Co-pay (Common above 60 years)', 'Zone-based Co-pay (e.g. treating in Tier 1 with Tier 2 policy)', 'Voluntary Co-pay (chosen for lower premium)'],
    coverageDependsOn: 'Your policy terms. Good individual and family floater policies have 0% Co-pay across all age groups and all cities.',
    whatShouldYouDo: 'Always choose a health policy with "0% Co-pay" (No Co-payment clause) so that the insurer pays the complete eligible claim amount without deduction.',
    featureToLookFor: '0% Co-pay (Zero Cost Sharing)',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: '0% Co-pay across all ages & zones' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Zero Co-payment' },
      { company: 'ICICI Lombard', plan: 'Elevate', feature: 'Zero Co-pay' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'copay'
  },
  {
    id: 'waiting_period',
    category: 'COVERAGE TIMELINE',
    badge: 'Important Policy Clause',
    title: 'Waiting Periods & Pre-Existing Diseases (PED)',
    keywords: [
      'waiting period', 'waiting', 'ped', 'pre-existing', 'pre existing', 'pre existing disease',
      'sugar', 'diabetes', 'bp', 'blood pressure', 'hypertension', 'thyroid', 'asthma',
      '30 days waiting', '2 years waiting', '3 years waiting', '4 years waiting',
      'bimar pehle se hai', 'waiting period kya h', 'specified disease', 'slow growing diseases'
    ],
    simpleAnswer: 'A waiting period is the time you must wait after buying a policy before specific illnesses or pre-existing diseases are covered.',
    whatDoesItMean: 'No policy covers old diseases from Day 1. There are 3 main types: 30 days initial waiting (for all illnesses except accidental emergency), 24 months for specified diseases (like cataract, kidney stone, hernia), and 24 to 36 months for pre-existing illnesses like Diabetes or BP.',
    examples: ['Initial 30 Days (All normal illnesses)', '24 Months (Cataract, Hernia, Joint Replacement, Stones)', '24-36 Months (Diabetes, Hypertension, Thyroid, Heart conditions)'],
    coverageDependsOn: 'The exact waiting period tenure specified in your policy and whether you purchased a waiting period reduction rider.',
    whatShouldYouDo: 'Declare all existing medical conditions honestly during application. Look for policies with modern "1-year or 2-year PED waiting reduction riders" to get covered sooner.',
    featureToLookFor: 'Reduced Waiting Period Add-on (1-Year PED Cover)',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Reduction to 1 / 2 Years Available' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Instant PED / Reduced Waiting' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'waiting_period'
  },
  {
    id: 'booster_2x',
    category: 'BONUS & MULTIPLIER',
    badge: 'Policy Multiplier',
    title: '2X / Booster / Doubling Cover Benefit',
    keywords: [
      '2x', '2x benefits', '2 x', 'two times', 'double', 'doubling', '200%', '4x', '400%',
      'secure benefit', 'booster', 'booster benefit', 'booster+', '2x cover', '2x coverage',
      'sum insured double', 'hdfc 2x', 'care 2x', 'multiplier'
    ],
    simpleAnswer: '2X / Booster multiplies your coverage from Day 1 or increases it rapidly without charging higher premium.',
    whatDoesItMean: 'Features like HDFC ERGO Secure Benefit give you 2X cover instantly (e.g. buy ₹10 Lakhs, get ₹20 Lakhs coverage immediately from Day 1). Others like Booster Benefit double your cover after 2 claim-free years.',
    examples: ['Day 1 2X Instant Coverage (Secure Benefit)', '50% Yearly Booster up to 100% or 500%', 'No Penalty on Claims for Bonus'],
    coverageDependsOn: 'The insurer\'s specific benefit structure (instant multiplier vs accrued cumulative bonus).',
    whatShouldYouDo: 'Compare plans that give instant 2X from Day 1 or unlimited cumulative bonus so your health cover grows faster than medical inflation.',
    featureToLookFor: 'Secure Benefit / 2X Multiplier / Cumulative Booster',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: '2X Cover from Day 1 + 4X in 2 Years' },
      { company: 'Care Health', plan: 'Care Supreme', feature: '500% Cumulative Bonus (6X Cover)' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: '2x'
  },
  {
    id: 'maternity',
    category: 'FAMILY & SPECIALTY COVER',
    badge: 'Maternity Protection',
    title: 'Maternity & Newborn Baby Cover',
    keywords: [
      'maternity', 'pregnancy', 'delivery', 'normal delivery', 'c-section', 'cesarean',
      'newborn', 'baby', 'neonatal', 'delivery charges', 'bacche ka cover', 'delivery cover',
      'maternity waiting period', 'maternity limit'
    ],
    simpleAnswer: 'Maternity cover pays for hospitalization expenses incurred during child delivery (normal or C-section) and newborn baby care.',
    whatDoesItMean: 'Standard health insurance plans usually exclude pregnancy or have high waiting periods (2 to 4 years). Plans with maternity cover pay for delivery costs, pre/post-natal doctor visits, and newborn baby vaccinations.',
    examples: ['Normal & C-Section Hospital Delivery', 'Newborn Baby Cover from Day 1', 'First Year Vaccination Expenses', 'Pre & Post-Natal Consultations'],
    coverageDependsOn: 'Having completed the mandatory 2 to 4 year maternity waiting period and specific sub-limits (e.g. ₹50,000 to ₹2,00,000).',
    whatShouldYouDo: 'If planning a family in 2–3 years, buy a policy with a low maternity waiting period today, as no insurance will cover an already pregnant individual.',
    featureToLookFor: 'Maternity Cover Rider with Newborn Day 1 Protection',
    topPlansOffering: [
      { company: 'Star Health', plan: 'Star Comprehensive', feature: 'In-built Maternity & Newborn Cover' },
      { company: 'Care Health', plan: 'Care Joy', feature: 'Low 9-Month to 24-Month Waiting' },
      { company: 'Niva Bupa', plan: 'Aspire', feature: 'Maternity & IVF Care Options' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'maternity'
  },
  {
    id: 'opd',
    category: 'OUTPATIENT & CLINIC',
    badge: 'Clinic & Doctor Visits',
    title: 'OPD (Outpatient) & Doctor Consultation Cover',
    keywords: [
      'opd', 'outpatient', 'out-patient', 'doctor consultation', 'doctor fee', 'doctor fees',
      'prescription', 'pharmacy', 'medicines', 'clinic', 'bina admit hue', 'diagnostic tests',
      'befit', 'opd cover kya hota hai', 'opd limit'
    ],
    simpleAnswer: 'OPD cover pays for doctor visits, routine clinic consultations, diagnostic tests, and pharmacy bills without requiring 24-hour hospital admission.',
    whatDoesItMean: 'Most standard insurance plans only pay if you are admitted to a hospital bed for at least 24 hours. OPD cover pays for day-to-day clinic checkups, specialist doctor consultations, and prescribed pharmacy medicines.',
    examples: ['Specialist Doctor Fees (Physician, Dermatologist, Orthopedic)', 'Diagnostic Blood Tests, X-Rays, MRI', 'Prescription Pharmacy Medicines', 'Dental & Optical Clinic Care (select plans)'],
    coverageDependsOn: 'Having an explicit "OPD Cover / Wellness Rider" attached to your policy.',
    whatShouldYouDo: 'If you frequently visit doctors for lifestyle or chronic conditions, select a policy with an unlimited OPD or annual doctor consultation benefit (e.g. ICICI BeFit or Care OPD).',
    featureToLookFor: 'OPD Care Add-on / Teleconsultation & Pharmacy Rider',
    topPlansOffering: [
      { company: 'ICICI Lombard', plan: 'Elevate', feature: 'BeFit Unlimited Cashless OPD' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'OPD Care Add-on' },
      { company: 'Star Health', plan: 'Smart Health Pro', feature: 'Outpatient Consultation Rider' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'opd'
  },
  {
    id: 'day_care',
    category: 'MODERN PROCEDURES',
    badge: 'Under 24-Hour Care',
    title: 'Day Care Procedures (<24 Hour Hospitalization)',
    keywords: [
      'day care', 'daycare', 'under 24 hours', 'less than 24 hours', '24 ghante', 'cataract',
      'dialysis', 'chemotherapy', 'radiotherapy', 'kidney stone laser', 'lithotripsy',
      'tonsillectomy', 'minor surgery', 'eye operation', 'same day discharge'
    ],
    simpleAnswer: 'Day Care covers medical treatments and surgeries that take less than 24 hours of hospital stay due to advanced medical technology.',
    whatDoesItMean: 'Traditionally, insurance required a minimum 24-hour hospital stay. Modern day care covers procedures like Cataract surgery, Dialysis, Chemotherapy, and Laser kidney stone removal where you get discharged on the same day.',
    examples: ['Cataract Eye Surgery', 'Chemotherapy & Radiation', 'Kidney Dialysis', 'Tonsil Removal & Tympanoplasty', 'Laser Stone Removal & Minor Endoscopies'],
    coverageDependsOn: 'Whether the policy covers "All Day Care Procedures" or only a limited named list.',
    whatShouldYouDo: 'Ensure your health policy covers "All Day Care Treatments" up to the full Sum Insured without restricting to an outdated list of procedures.',
    featureToLookFor: 'All Day Care Treatments Covered up to Sum Insured',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'All Day Care Procedures Covered' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Full Sum Insured for Day Care' },
      { company: 'Star Health', plan: 'Star Comprehensive', feature: 'All Day Care Treatments' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'daycare'
  },
  {
    id: 'pre_post',
    category: 'PRE & POST HOSPITAL EXPENSES',
    badge: 'Complete Cycle Coverage',
    title: 'Pre & Post Hospitalization Expenses',
    keywords: [
      'pre and post', 'pre post', 'pre hospitalization', 'post hospitalization', 'pre & post',
      'discharge ke baad', 'admit hone se pehle', 'medicine bill after discharge',
      '60 days 180 days', '30 days 60 days', 'follow up doctor visits', 'post hospital tests'
    ],
    simpleAnswer: 'Pre & Post hospitalization covers doctor visits, lab tests, and medicines incurred 60 days before hospital admission and up to 180 days after discharge.',
    whatDoesItMean: 'When you fall sick, you spend money on doctor visits and blood tests before getting hospitalized, and on follow-up checkups and medicines for months after discharge. Your policy reimburses all these related expenses.',
    examples: ['Diagnostic Tests 60 Days Before Admission (CT scans, Blood tests)', 'Follow-up Doctor Consultations 180 Days After Discharge', 'Prescribed Post-Discharge Medicines & Physiotherapy'],
    coverageDependsOn: 'The expenses being directly related to the condition for which you were hospitalized and submitted within 30-90 days with doctor prescriptions.',
    whatShouldYouDo: 'Keep all doctor prescription slips, pharmacy bills, and diagnostic test reports safely from the day symptoms began until 6 months after discharge, and claim them under reimbursement.',
    featureToLookFor: '60 Days Pre & 180 Days Post Hospitalization Coverage',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: '60 Days Pre / 180 Days Post' },
      { company: 'Care Health', plan: 'Care Supreme', feature: '60 Days Pre / 180 Days Post' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'pre_post'
  },
  {
    id: 'ncb',
    category: 'BONUS REWARDS',
    badge: 'Claim-Free Rewards',
    title: 'No Claim Bonus (NCB) & Cumulative Bonus',
    keywords: [
      'no claim bonus', 'ncb', 'cumulative bonus', 'claim nahi liya', 'bonus sum insured',
      'ncb super', 'bonus protection', 'claim free year', 'discount on renewal'
    ],
    simpleAnswer: 'No Claim Bonus (NCB) increases your total health insurance cover for every year you don\'t make any claim, at zero extra cost.',
    whatDoesItMean: 'If you have a ₹10 Lakh policy with 50% cumulative bonus, after 1 claim-free year your cover becomes ₹15 Lakhs, and after 2 years it becomes ₹20 Lakhs, while your premium stays based on ₹10 Lakhs.',
    examples: ['50% Annual Cumulative Bonus', 'Bonus Protection on Small Claims', 'Up to 500% Guaranteed Cumulative Increase'],
    coverageDependsOn: 'Your policy terms and whether claims in a year reduce the accrued bonus (modern plans guarantee no bonus deduction).',
    whatShouldYouDo: 'Choose policies with "Guaranteed Cumulative Bonus / No Bonus Deduction on Claim" so you don\'t lose accumulated bonus cover when making a small claim.',
    featureToLookFor: 'Guaranteed Cumulative Bonus without Reduction',
    topPlansOffering: [
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Up to 500% Cumulative Bonus' },
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Plus Benefit (100% in 2 Years)' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'ncb'
  },
  {
    id: 'ayush',
    category: 'ALTERNATIVE MEDICINE',
    badge: 'Ayurveda & Alternative Care',
    title: 'AYUSH Treatments (Ayurveda, Homeopathy, Yoga)',
    keywords: [
      'ayush', 'ayurveda', 'ayurvedic', 'homeopathy', 'homeopathic', 'unani', 'siddha',
      'naturopathy', 'natural treatment', 'ayurvedic hospital', 'panchakarma', 'desi ilaj'
    ],
    simpleAnswer: 'AYUSH covers inpatient hospitalization expenses for non-allopathic treatments like Ayurveda, Homeopathy, Unani, Siddha, and Yoga.',
    whatDoesItMean: 'If you choose to receive medical treatment at a recognized Ayurvedic, Homeopathic, or Government-registered AYUSH hospital, your health insurance covers the room rent, nursing, and medicine expenses.',
    examples: ['Ayurvedic Inpatient Hospitalization', 'Homeopathic Hospital Treatments', 'Panchakarma (when medically necessary in registered hospital)', 'Unani & Siddha Care'],
    coverageDependsOn: 'The treatment being taken at a government-recognized AYUSH hospital or NABH-accredited center (not a casual wellness spa/massage center).',
    whatShouldYouDo: 'Ensure the AYUSH hospital has a minimum of 5–15 beds and is registered with local health authorities or NABH before getting admitted.',
    featureToLookFor: 'AYUSH Treatment up to 100% Sum Insured',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: '100% Sum Insured for AYUSH' },
      { company: 'Star Health', plan: 'Star Comprehensive', feature: 'Full SI Coverage for AYUSH' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Inpatient AYUSH Treatment' }
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'ayush'
  },
  {
    id: 'portability',
    category: 'SWITCHING INSURERS',
    badge: 'Protect Your Credits',
    title: 'Health Insurance Portability',
    keywords: [
      'portability', 'port', 'port policy', 'change insurance', 'switch company',
      'dusri company', 'transfer policy', 'port kaise kare', 'policy transfer',
      'carry forward waiting period'
    ],
    simpleAnswer: 'Portability allows you to switch from your current insurance company to a better one without losing your accumulated waiting period credits and bonus.',
    whatDoesItMean: 'If you completed 3 years in Company A and switch to Company B, your pre-existing disease waiting period is already considered served. You do not have to restart the 3-year waiting period again.',
    examples: ['Switch from PSU to Private Insurer', 'Carry forward PED Waiting Period Credits', 'Port from Corporate Group Policy to Retail Individual Policy'],
    coverageDependsOn: 'Applying for portability at least 45 days before your policy renewal date and maintaining a continuous claim-free track record.',
    whatShouldYouDo: 'Initiate portability 45 to 60 days before your policy expires. Keep your previous policy certificates, renewal notices, and medical discharge summaries ready.',
    featureToLookFor: 'Portability Support with Full Waiting Period Carryover',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Fast Portability Processing' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'Full Bonus & Waiting Period Transfer' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare',
    compareFeature: 'portability'
  }
];

// Hinglish to Standard Insurance Terminology Normalizer
const HINGLISH_NORMALIZER = [
  { match: /(gloves?|syringe|cotton|mask|bandage).*(paisa|kharcha|cover|dega|milega)/i, topicId: 'consumables' },
  { match: /(hospital|doctor).*(extra bill|non medical|alad se charge|itemized)/i, topicId: 'consumables' },
  { match: /(room|kamra|bed).*(limit|capping|charge|rent|kya h|kitna)/i, topicId: 'room_rent' },
  { match: /(single private|deluxe room|icu).*(milega|allowed)/i, topicId: 'room_rent' },
  { match: /(claim|paise).*(reject|pass nahi|ruk gaya|kyo reject|kyu reject)/i, topicId: 'claim_rejection' },
  { match: /(cashless|bina paise).*(kaise|kaha|milega|admission)/i, topicId: 'cashless' },
  { match: /(co.?pay|apne jeb se|khud se dena|percentage)/i, topicId: 'copay' },
  { match: /(waiting period|kitne din|kab cover hoga|purani bimari|sugar|bp|diabetes)/i, topicId: 'waiting_period' },
  { match: /(sum insured.*khatam|refill|dobara cover|restoration|recharge)/i, topicId: 'restoration' },
  { match: /(2x|double cover|4x|booster|bonus)/i, topicId: 'booster_2x' },
  { match: /(pregnancy|delivery|baccha|newborn|maternity)/i, topicId: 'maternity' },
  { match: /(bina admit|doctor fees|clinic|test|opd)/i, topicId: 'opd' },
  { match: /(24 ghante|cataract|dialysis|day care|daycare)/i, topicId: 'day_care' },
  { match: /(discharge ke baad|admit se pehle|pre post|pre and post)/i, topicId: 'pre_post' },
  { match: /(ayurvedic|homeopathy|ayush|desi ilaj)/i, topicId: 'ayush' },
  { match: /(policy change|dusri company|switch|port)/i, topicId: 'portability' }
];

/**
 * Intelligent AI Insurance Problem Solver
 * Resolves user query into the crisp 4-part structured customer answer.
 */
export function solveInsuranceProblem(rawQuery) {
  const query = String(rawQuery || '').trim();
  if (!query) return null;

  const lower = query.toLowerCase();

  // 1. Direct Hinglish pattern match
  for (const item of HINGLISH_NORMALIZER) {
    if (item.match.test(lower)) {
      const found = AI_TOPIC_KNOWLEDGE_BASE.find((t) => t.id === item.topicId);
      if (found) {
        return formatAiResponse(found, query);
      }
    }
  }

  // 2. Keyword & Semantic Scoring across Knowledge Base
  let bestTopic = null;
  let highestScore = 0;

  AI_TOPIC_KNOWLEDGE_BASE.forEach((topic) => {
    let score = 0;

    // Exact title match
    if (lower.includes(topic.title.toLowerCase()) || topic.title.toLowerCase().includes(lower)) {
      score += 500;
    }

    // Keyword matches
    topic.keywords.forEach((kw) => {
      const kwLower = kw.toLowerCase();
      if (lower === kwLower) {
        score += 400;
      } else if (lower.includes(kwLower)) {
        score += 200;
      } else {
        // Individual word tokens
        const words = kwLower.split(' ');
        words.forEach((w) => {
          if (w.length > 3 && lower.includes(w)) {
            score += 45;
          }
        });
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  });

  if (bestTopic && highestScore >= 45) {
    return formatAiResponse(bestTopic, query);
  }

  // 3. Check for specific Company / Plan mention fallback
  for (const comp of companiesData) {
    if (lower.includes(comp.name.toLowerCase()) || lower.includes(comp.id)) {
      return {
        id: `company-${comp.id}`,
        category: 'INSURER COVERAGE & PLANS',
        badge: 'Insurer Profile',
        title: `${comp.name} Health Coverage`,
        userQuery: query,
        simpleAnswer: `${comp.name} offers comprehensive health insurance plans with high claim settlement ratios and cashless hospital networks across India.`,
        whatDoesItMean: `You are asking about health plans from ${comp.name}. Their popular policies include ${comp.plans.map((p) => p.name).join(', ')}.`,
        examples: comp.plans.map((p) => p.name),
        coverageDependsOn: 'The specific plan tier, sum insured, and optional riders you select during application.',
        whatShouldYouDo: `Compare ${comp.name} with other top insurers to evaluate room rent limits, restoration benefits, and claim settlement speed.`,
        featureToLookFor: 'In-house claim processing, zero room rent capping, and consumables cover',
        topPlansOffering: comp.plans.map((p) => ({
          company: comp.name,
          plan: p.name,
          feature: p.description || 'Comprehensive Benefits'
        })),
        ctaLabel: 'Check My Coverage →',
        ctaTarget: `/insurance/${comp.id}`,
        isCompanyDirect: true
      };
    }
  }

  // 4. Smart Generic Fallback Problem Solver for any long-tail query
  return generateIntelligentFallback(query);
}

/**
 * Formats a topic into the exact response schema
 */
function formatAiResponse(topic, userQuery) {
  return {
    ...topic,
    userQuery
  };
}

/**
 * Intelligent Fallback Generator for any unspecified health query
 */
function generateIntelligentFallback(query) {
  const cleanQ = query.replace(/[?.,!]/g, '').trim();

  return {
    id: 'general_guidance',
    category: 'GENERAL HEALTH INSURANCE GUIDANCE',
    badge: 'AI Policy Assistant',
    title: `Understanding: "${cleanQ}"`,
    userQuery: query,
    simpleAnswer: `In health insurance, coverage for "${cleanQ}" depends on your policy's waiting periods, network terms, and whether it is an inpatient or outpatient treatment.`,
    whatDoesItMean: 'Most standard health insurance policies cover all medically necessary inpatient treatments (requiring 24+ hours hospitalization or approved daycare procedures) after initial waiting periods.',
    examples: ['Inpatient Hospitalization (>24 Hours)', 'Approved Day Care Surgeries', 'Network Cashless Treatment', 'Pre & Post-Hospitalization Expenses'],
    coverageDependsOn: 'Whether the condition is pre-existing, whether waiting periods (30 days / 24 months) are completed, and whether non-medical consumable items are covered.',
    whatShouldYouDo: 'Review your policy schedule document for exclusions, room rent limits, and waiting period clauses before hospitalization.',
    featureToLookFor: 'Zero Co-pay, No Room Rent Limit, and Consumables Cover',
    topPlansOffering: [
      { company: 'HDFC ERGO', plan: 'Optima Secure+', feature: 'Comprehensive 4X Coverage' },
      { company: 'Care Health', plan: 'Care Supreme', feature: 'High Cumulative Bonus' },
    ],
    ctaLabel: 'Check My Coverage →',
    ctaTarget: '/compare'
  };
}
