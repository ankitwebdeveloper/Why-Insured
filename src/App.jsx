import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Reusable Public Components
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
import AdminOptimaSecurePlus from './pages/AdminOptimaSecurePlus';
import AdminLogin from './pages/AdminLogin';
import AdminProtectedRoute from './components/AdminProtectedRoute';

// Helper to detect if the page was refreshed (F5/Ctrl+R/Browser Reload)
const isPageRefresh = () => {
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      return navEntries[0].type === 'reload';
    }
    return performance.navigation.type === 1;
  } catch (e) {
    return false;
  }
};

function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    // Only show preloader if on homepage, not already seen in session, and not a refresh
    const seen = sessionStorage.getItem('whyinsured_preloader_seen');
    const isHome = window.location.pathname === '/';
    const isReload = isPageRefresh();
    return isHome && !seen && !isReload;
  });

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('whyinsured_preloader_seen', 'true');
    setShowPreloader(false);
  };

  // Page Transition Variants for Public Website
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // =========================================================================
  // ADMIN ROUTES (NO PUBLIC NAVBAR, NO PUBLIC FOOTER)
  // =========================================================================
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] antialiased font-sans">
        <Routes location={location}>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/optima-secure-plus"
            element={
              <AdminProtectedRoute>
                <AdminOptimaSecurePlus />
              </AdminProtectedRoute>
            }
          />
          <Route path="/admin/*" element={<Navigate to="/admin/optima-secure-plus" replace />} />
        </Routes>
      </div>
    );
  }

  // =========================================================================
  // PUBLIC WEBSITE ROUTES (WITH PUBLIC NAVBAR & FOOTER)
  // =========================================================================
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
          {/* Public Header */}
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

          {/* Public Footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
