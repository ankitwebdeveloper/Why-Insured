import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, verifyAdminSession } from '../services/optimaSecurePlusService';

export default function AdminProtectedRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      if (!isAuthenticated()) {
        if (isMounted) {
          setIsAuth(false);
          setChecking(false);
        }
        return;
      }

      const res = await verifyAdminSession();
      if (isMounted) {
        setIsAuth(res.valid);
        setChecking(false);
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">
          Verifying Admin Access...
        </p>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
