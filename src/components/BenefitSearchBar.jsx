import React, { useRef, useEffect } from 'react';
import { FiSearch, FiX, FiChevronRight } from 'react-icons/fi';

/**
 * BenefitSearchBar
 *
 * Props:
 *  searchQuery       – current text in the input
 *  onSearchChange    – called with new string on every keystroke
 *  totalMatches      – number badge (existing behaviour)
 *  hasActiveSearch   – whether search is active (existing behaviour)
 *  primaryColor      – accent colour (existing behaviour)
 *  className         – extra classes for wrapper (existing behaviour)
 *  searchResults     – flat array of { id, title, subtitle, sectionTitle }
 *  onResultClick     – called with (itemId) when a result row is clicked
 */
export default function BenefitSearchBar({
  searchQuery,
  onSearchChange,
  totalMatches = 0,
  hasActiveSearch = false,
  primaryColor = '#0038A8',
  className = '',
  searchResults = [],
  onResultClick
}) {
  const wrapperRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  // Open dropdown whenever there is an active search
  useEffect(() => {
    setDropdownOpen(hasActiveSearch && searchQuery.trim().length > 0);
  }, [hasActiveSearch, searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleResultClick = (id) => {
    setDropdownOpen(false);
    onSearchChange('');
    if (onResultClick) onResultClick(id);
  };

  const handleClear = () => {
    onSearchChange('');
    setDropdownOpen(false);
  };

  return (
    <div ref={wrapperRef} className={`relative w-full sm:w-72 md:w-80 select-none ${className}`}>
      {/* ── Input row (identical styling to original) ── */}
      <div
        style={{ '--accent-color': primaryColor }}
        className="relative flex items-center w-full h-9 sm:h-10 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 focus-within:border-[var(--accent-color)] focus-within:ring-2 focus-within:ring-[var(--accent-color)]/15 transition-all duration-200 px-3 group"
      >
        <FiSearch className="text-sm text-slate-400 group-focus-within:text-[var(--accent-color)] transition-colors mr-2 shrink-0" />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => {
            if (hasActiveSearch && searchQuery.trim().length > 0) setDropdownOpen(true);
          }}
          placeholder="Search benefits..."
          className="w-full h-full bg-transparent text-[#0F172A] text-xs sm:text-sm font-semibold placeholder-slate-400 focus:outline-none font-sans"
        />

        {hasActiveSearch && (
          <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
            <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
              totalMatches > 0
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                : 'bg-rose-50 text-rose-600 border border-rose-200/80'
            }`}>
              {totalMatches}
            </span>
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Clear search"
            >
              <FiX className="text-xs" />
            </button>
          </div>
        )}
      </div>

      {/* ── Dropdown results ── */}
      {dropdownOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-[9999] rounded-xl bg-white border border-slate-200 shadow-lg overflow-hidden">
          {/* Header label */}
          <div className="px-3 pt-2.5 pb-1.5 border-b border-slate-100">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Search Results
            </span>
          </div>

          {searchResults.length === 0 ? (
            /* No match */
            <div className="px-3 py-3 text-center">
              <span className="text-xs font-bold text-slate-500">No benefits found</span>
            </div>
          ) : (
            <ul className="max-h-64 overflow-y-auto divide-y divide-slate-50">
              {searchResults.map((result) => (
                <li key={result.id}>
                  <button
                    type="button"
                    onClick={() => handleResultClick(result.id)}
                    className="w-full text-left px-3 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors group cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate leading-tight">
                        {result.title}
                      </p>
                      {result.sectionTitle && (
                        <p className="text-[10px] font-medium text-slate-400 mt-0.5 truncate">
                          {result.sectionTitle}
                        </p>
                      )}
                    </div>
                    <FiChevronRight
                      className="text-slate-300 group-hover:text-slate-500 transition-colors shrink-0 text-xs"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
