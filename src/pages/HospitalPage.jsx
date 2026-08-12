import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiActivity, FiPhone, FiCheck } from 'react-icons/fi';
import { companiesData } from '../data/companies';

export default function HospitalPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  
  const mockHospitals = [
    {
      name: "Apollo Hospitals",
      address: "Jubilee Hills, Hyderabad, Telangana - 500033",
      contact: "+91 40 2360 7777",
      specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
      partners: ["hdfc-life", "tata-aig", "star-health", "niva-bupa", "icici-lombard", "care-health"]
    },
    {
      name: "Fortis Memorial Research Institute",
      address: "Sector 44, Gurugram, Haryana - 122002",
      contact: "+91 124 4921 021",
      specialties: ["Pediatrics", "Pulmonology", "Gastroenterology", "Cardiology"],
      partners: ["hdfc-life", "tata-aig", "star-health", "icici-lombard", "care-health"]
    },
    {
      name: "Max Super Speciality Hospital",
      address: "Saket, New Delhi, Delhi - 110017",
      contact: "+91 11 2651 5050",
      specialties: ["Nephrology", "Urology", "Oncology", "Organ Transplant"],
      partners: ["hdfc-life", "tata-aig", "star-health", "niva-bupa", "icici-lombard"]
    },
    {
      name: "Manipal Hospital",
      address: "HAL Airport Road, Bengaluru, Karnataka - 560017",
      contact: "+91 80 2502 4444",
      specialties: ["Emergency Care", "Neuro Surgery", "Spine Surgery", "Orthopedics"],
      partners: ["hdfc-life", "tata-aig", "niva-bupa", "icici-lombard", "care-health"]
    },
    {
      name: "Kokilaben Dhirubhai Ambani Hospital",
      address: "Andheri West, Mumbai, Maharashtra - 400053",
      contact: "+91 22 3099 9999",
      specialties: ["Robotic Surgery", "Rehabilitation", "Oncology", "Cardiology"],
      partners: ["hdfc-life", "star-health", "niva-bupa", "icici-lombard", "care-health"]
    },
    {
      name: "Medanta - The Medicity",
      address: "CH Baktawar Singh Road, Sector 38, Gurugram - 122001",
      contact: "+91 124 4141 414",
      specialties: ["Liver Transplant", "Heart Institute", "Bone & Joint", "Neurology"],
      partners: ["hdfc-life", "tata-aig", "star-health", "niva-bupa", "care-health"]
    }
  ];

  const filteredHospitals = mockHospitals.filter(hosp => {
    const matchesSearch = hosp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hosp.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany = selectedCompany === '' || hosp.partners.includes(selectedCompany);
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#059669]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100/60 px-3 py-1 rounded-full">
            Cashless Network Hospitals
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight font-display">
            Panel Hospital Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-lg mx-auto">
            Find panel hospitals across India offering instant, hassle-free cashless claims for your insurance plan.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FiSearch className="text-slate-400 text-sm" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hospital name or city..."
                className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl py-3 pl-10 pr-4 text-xs sm:text-sm font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Provider Filter */}
            <div className="relative">
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl py-3 px-4 text-xs sm:text-sm font-semibold text-slate-600 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">All Insurance Providers</option>
                {companiesData.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-5 group relative"
              >
                <div className="space-y-4">
                  {/* Title & Specialties */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                      {hospital.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {hospital.specialties.map((spec, specIdx) => (
                        <span
                          key={specIdx}
                          className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-xs font-semibold text-slate-500">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="text-emerald-500 text-sm mt-0.5 shrink-0" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-emerald-500 text-sm shrink-0" />
                      <a href={`tel:${hospital.contact.replace(/\s+/g, '')}`} className="hover:underline hover:text-emerald-600">
                        {hospital.contact}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Partner Network logos / names */}
                <div className="pt-4 border-t border-slate-50 space-y-2">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Cashless Coverage Partners
                  </span>
                  <div className="flex flex-wrap gap-2 items-center">
                    {hospital.partners.map((partnerId) => {
                      const comp = companiesData.find(c => c.id === partnerId);
                      if (!comp) return null;
                      return (
                        <div
                          key={partnerId}
                          title={comp.name}
                          className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center cursor-help shrink-0 hover:border-slate-300 hover:scale-105 transition-all duration-200"
                        >
                          <img src={comp.logo} alt={comp.name} className="w-full h-full object-contain" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 bg-white rounded-3xl border border-slate-100 p-12 text-center text-slate-400 font-semibold text-sm shadow-xs">
              No matching panel hospitals found.
            </div>
          )}
        </div>

        {/* Note / Callout */}
        <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex gap-3">
            <div className="bg-emerald-500 text-white rounded-xl p-2.5 shrink-0 mt-0.5 sm:mt-0">
              <FiActivity className="text-lg" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-800">Cashless Pre-Authorization Guide</h4>
              <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xl">
                Show your health card at the hospital's TPA desk 48 hours prior to planned admission, or within 24 hours of emergency admission to initiate a cashless claim.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
