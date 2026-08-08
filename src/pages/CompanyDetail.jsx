import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiChevronRight } from 'react-icons/fi';
import { companiesData } from '../data/companies';

export default function CompanyDetail() {
  const { companyId } = useParams();
  
  const company = companiesData.find(
    c => c.slug === companyId || c.id === companyId
  );

  if (!company) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20 px-4 bg-slate-50 font-sans">
        <h1 className="text-2xl font-bold text-slate-800 font-display">Company Not Found</h1>
        <p className="text-sm text-slate-500 mt-2 mb-6">The requested insurance provider could not be resolved.</p>
        <Link to="/" className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  const { theme, name, fullName, logo, description, plans } = company;

  // Apply custom CSS variables for the theme
  const themeStyles = {
    '--primary': theme.primary,
    '--secondary': theme.secondary,
    '--accent': theme.accent,
    '--bg': theme.background,
    '--text': theme.text,
  };

  // Helper to determine CTA button styles
  const getButtonStyle = () => {
    if (company.id === 'care-health') {
      return {
        backgroundColor: theme.secondary,
        color: '#0F172A',
        borderColor: theme.secondary,
        boxShadow: '0 2px 6px -1px rgba(250, 204, 21, 0.3)'
      };
    }
    if (theme.gradient) {
      return {
        background: theme.gradient,
        color: '#FFFFFF',
        borderColor: 'transparent',
        boxShadow: '0 4px 10px -2px rgba(239, 68, 68, 0.25)'
      };
    }
    return {
      backgroundColor: `${theme.primary}10`,
      color: theme.primary,
      borderColor: `${theme.primary}20`
    };
  };

  const handleButtonEnter = (e) => {
    if (company.id === 'care-health') {
      e.currentTarget.style.backgroundColor = theme.primary;
      e.currentTarget.style.color = '#FFFFFF';
      e.currentTarget.style.borderColor = theme.primary;
    } else if (theme.gradient) {
      e.currentTarget.style.filter = 'brightness(1.08)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else {
      e.currentTarget.style.backgroundColor = theme.primary;
      e.currentTarget.style.color = '#FFFFFF';
    }
  };

  const handleButtonLeave = (e) => {
    if (company.id === 'care-health') {
      e.currentTarget.style.backgroundColor = theme.secondary;
      e.currentTarget.style.color = '#0F172A';
      e.currentTarget.style.borderColor = theme.secondary;
    } else if (theme.gradient) {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'none';
    } else {
      e.currentTarget.style.backgroundColor = `${theme.primary}10`;
      e.currentTarget.style.color = theme.primary;
    }
  };

  return (
    <div style={themeStyles} className="min-h-screen pt-24 pb-20 relative transition-colors duration-300" style={{ ...themeStyles, backgroundColor: 'var(--bg)' }}>
      {/* Background Decorative Blur using Company Primary Color */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none transition-all duration-500"
        style={{ backgroundColor: 'var(--primary)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="text-sm" /> Back to Search
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 mb-12 relative overflow-hidden">
          {/* Subtle colored accent strip at the top */}
          <div 
            className="absolute top-0 left-0 right-0 h-2" 
            style={{ background: theme.gradient ? theme.gradient : 'var(--primary)' }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span 
                className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border inline-flex items-center gap-1.5"
                style={{ 
                  backgroundColor: 'var(--bg)', 
                  color: 'var(--primary)', 
                  borderColor: `${theme.primary}20` 
                }}
              >
                {theme.accent && (
                  <span 
                    className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" 
                    style={{ backgroundColor: 'var(--accent)' }} 
                  />
                )}
                Verified Provider
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight font-display">
                {fullName}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                {description}
              </p>
            </div>
            
            {/* Logo block - Clean layout without borders, cards, or frame */}
            <img
              src={logo}
              alt={name}
              className="w-36 sm:w-48 lg:w-56 h-auto max-h-20 sm:max-h-24 lg:max-h-28 object-contain select-none self-start lg:self-center shrink-0"
            />
          </div>
        </div>

        {/* Plans Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5 font-display">
            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            Available Health Plans
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            Compare and choose from {plans.length} custom-tailored policies.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className="bg-white rounded-2xl border border-slate-100/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              {/* Dynamic hover overlay border */}
              <div 
                className="absolute inset-x-0 top-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: theme.gradient ? theme.gradient : 'var(--primary)' }}
              />

              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 
                      className="text-lg font-black tracking-tight transition-colors duration-200 font-display"
                      style={{ color: 'var(--primary)' }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-semibold mt-0.5">{name}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                    {theme.accent && (
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                    )}
                    Health
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                  {plan.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-6">
                  {plan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-600">
                      <FiCheck 
                        className="text-sm shrink-0 mt-0.5" 
                        style={{ color: 'var(--primary)' }} 
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Premium & CTA */}
              <div className="border-t border-slate-50 pt-4 mt-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">
                    Annual Premium
                  </span>
                  <div className="text-base font-black text-slate-900">{plan.coverage} Cover</div>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">{plan.premium}</div>
                </div>

                <Link
                  to={`/insurance/${company.id}/${plan.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold py-2.5 px-4 rounded-xl border transition-all duration-200 cursor-pointer"
                  style={getButtonStyle()}
                  onMouseEnter={handleButtonEnter}
                  onMouseLeave={handleButtonLeave}
                >
                  View Details <FiChevronRight />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
