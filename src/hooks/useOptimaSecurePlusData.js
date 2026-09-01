import { useState, useEffect, useCallback } from 'react';
import { optimaSecurePlusData } from '../data/optimaSecurePlusData';
import { fetchOptimaSecurePlusPlan } from '../services/optimaSecurePlusService';

export function useOptimaSecurePlusData(includeInactive = false) {
  const [data, setData] = useState(() => optimaSecurePlusData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFallback, setIsFallback] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchOptimaSecurePlusPlan(includeInactive);

      if (res.data) {
        setData((prev) => ({
          ...prev,
          planName: res.data.planName || prev.planName,
          policySubtitle: res.data.policySubtitle || prev.policySubtitle,
          tagline: res.data.tagline || prev.tagline,
          coverage: res.data.coverage || prev.coverage,
          // Dynamic Features
          featuresSections: res.data.featuresSections || prev.featuresSections,
          // Dynamic Report Card
          reportCard: res.data.reportCard || prev.reportCard,
          // Dynamic Company Strength
          companyStrength: res.data.companyStrength || prev.companyStrength,
          // Dynamic Limitations & Waiting Periods
          limitationsWaitingPeriods: res.data.limitationsWaitingPeriods || prev.limitationsWaitingPeriods,
          // Dynamic Must Know
          mustKnow: res.data.mustKnow || prev.mustKnow
        }));
        setIsFallback(Boolean(res.isFallback));
      }
    } catch (err) {
      console.error('Failed to load Optima Secure+ dynamic data:', err);
      setError(err.message || 'Error loading data');
      setIsFallback(true);
    } finally {
      setLoading(false);
    }
  }, [includeInactive]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    loading,
    error,
    isFallback,
    refresh: loadData
  };
}
