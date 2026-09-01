import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiLock, FiUser, FiEye, FiEyeOff, FiArrowRight, FiShield, FiAlertTriangle } from 'react-icons/fi';
import { adminLogin, isAuthenticated } from '../services/optimaSecurePlusService';
import logoImg from '../assets/logo.png';

export default function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/admin/optima-secure-plus', { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!adminId.trim() || !password.trim()) {
      setError('Please enter both Admin ID and Password');
      return;
    }

    setLoading(true);
    try {
      await adminLogin(adminId.trim(), password.trim());
      const destination = location.state?.from?.pathname || '/admin/optima-secure-plus';
      navigate(destination, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid Admin ID or Password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center px-4 py-12 text-[#0F172A] relative overflow-hidden font-sans selection:bg-emerald-500 selection:text-white">
      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-9 shadow-lg relative z-10">
        {/* Header Branding */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white mb-1">
            <img
              src={logoImg}
              alt="WHYINSURED"
              className="h-9 sm:h-10 w-auto object-contain select-none"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-[#059669] border border-emerald-200 mb-2">
              <FiShield className="text-xs" />
              <span>Admin Panel</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[#0F172A] font-display">
              Admin Login
            </h1>
            <p className="text-xs text-[#475569] font-medium mt-1">
              HDFC ERGO Optima Secure+ Content Management
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2.5">
            <FiAlertTriangle className="text-rose-600 shrink-0 text-base" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Admin ID */}
          <div>
            <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-1.5">
              Admin ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FiUser className="text-sm" />
              </div>
              <input
                type="text"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="e.g. admin"
                autoComplete="username"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#059669] focus:bg-white rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/15 transition-all font-medium"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-[#475569] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <FiLock className="text-sm" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
                className="w-full pl-10 pr-11 py-3 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#059669] focus:bg-white rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#059669]/15 transition-all font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff className="text-sm" /> : <FiEye className="text-sm" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#059669] hover:bg-emerald-700 text-white font-black uppercase text-xs tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99]"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>AUTHENTICATING...</span>
              </>
            ) : (
              <>
                <span>LOGIN</span>
                <FiArrowRight className="text-sm" />
              </>
            )}
          </button>
        </form>

        {/* Back link */}
        <div className="mt-8 pt-5 border-t border-slate-100 text-center">
          <Link
            to="/"
            className="text-xs text-[#475569] hover:text-[#059669] transition-colors font-medium inline-flex items-center gap-1"
          >
            ← Back to WHYINSURED Website
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-[11px] text-slate-400 font-medium">
        WHYINSURED Internal Portal • Protected by Session Token Authentication
      </div>
    </div>
  );
}
