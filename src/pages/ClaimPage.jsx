import React, { useEffect } from 'react';
import ClaimHero from '../components/claim/ClaimHero';
import ClaimProblemCard from '../components/claim/ClaimProblemCard';
import ClaimJourney from '../components/claim/ClaimJourney';
import ClaimFAQ from '../components/claim/ClaimFAQ';
import DocumentChecklist from '../components/claim/DocumentChecklist';
import DoDontSection from '../components/claim/DoDontSection';

export default function ClaimPage() {
  useEffect(() => {
    document.title = "Health Insurance Claim Guidance | WHYINSURED";
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-16">
      {/* 1. HERO SECTION */}
      <ClaimHero onScrollToSection={handleScrollToSection} />

      {/* 2. CLAIM HELP CENTER (6 Problem Cards) */}
      <ClaimProblemCard />

      {/* 3. STEP-BY-STEP CLAIM JOURNEY (1-6 Stages) */}
      <ClaimJourney />

      {/* 4. DEDUCTIONS DEMYSTIFIED (FAQ) */}
      <ClaimFAQ />

      {/* 5. CLAIM PREPARATION GUIDE (Interactive Checklist) */}
      <DocumentChecklist />

      {/* 6. CLAIM DOS & DON'TS */}
      <DoDontSection />
    </div>
  );
}
