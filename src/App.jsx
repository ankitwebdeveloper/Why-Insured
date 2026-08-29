import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Reusable Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';
import PlanDetail from './pages/PlanDetail';
import ComparisonPage from './pages/ComparisonPage';
import ClaimPage from './pages/ClaimPage';
import AcademyPage from './pages/AcademyPage';
import HospitalPage from './pages/HospitalPage';

// Helper to detect if the page was refreshed (F5/Ctrl+R/Browser Reload)
const isPageRefresh = () => {
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      return navEntries[0].type === 'reload';
    }
    // Fallback for older browsers
    return performance.navigation.type === 1;
  } catch (e) {
    return false;
  }
};

function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    // 1. If preloader was already completed in this session, bypass
    if (sessionStorage.getItem('whyinsured_preloader_seen') === 'true') {
      return false;
    }
    // 2. If the user refreshed the page, bypass
    if (isPageRefresh()) {
      return false;
    }
    // Otherwise, show the preloader
    return true;
  });

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('whyinsured_preloader_seen', 'true');
    setShowPreloader(false);
  };

  // Page Transition Variants
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <AnimatePresence mode="wait">
      {showPreloader ? (
        <Preloader key="preloader" onComplete={handlePreloaderComplete} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-[#F8FAFC] flex flex-col justify-start text-slate-800 antialiased font-sans"
        >
          {/* Header */}
          <Navbar />

          {/* Main Routing Panel */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/insurance/:companyId" element={<CompanyDetail />} />
                  <Route path="/insurance/:companyId/:planId" element={<PlanDetail />} />
                  <Route path="/insurance/:companyId/:planId/features" element={<PlanDetail />} />
                  <Route path="/insurance/:companyId/:planId/limitations" element={<PlanDetail />} />
                  <Route path="/compare" element={<ComparisonPage />} />
                  <Route path="/claim" element={<ClaimPage />} />
                  <Route path="/hospital" element={<HospitalPage />} />
                  <Route path="/academy" element={<AcademyPage />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
