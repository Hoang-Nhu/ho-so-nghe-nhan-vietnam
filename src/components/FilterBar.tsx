/**
 * Advanced Multi-Factor Filter Bar for Regions, Honorary Titles, and Categories
 * Student: Nguyễn Văn Hoàng - PH64335 - Nhóm 2 - Lớp B03
 */

import React from 'react';
import { Language, Region, ArtisanTitle, HeritageCategory, FilterState } from '../types';
import { I18N } from '../data/i18n';
import { MapPin, Award, Layers, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  language: Language;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  language,
  filters,
  onFilterChange,
  resultCount
}) => {
  const t = I18N[language];

  const hasActiveFilters = 
    filters.region !== 'all' || 
    filters.title !== 'all' || 
    filters.category !== 'all' || 
    filters.searchTerm.trim() !== '';

  const handleReset = () => {
    onFilterChange({
      searchTerm: '',
      region: 'all',
      title: 'all',
      category: 'all'
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-[#e5d8c5] shadow-xs">
      
      {/* Row 1: Region & Title Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Region Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350f] shrink-0 mr-1">
            <MapPin className="w-3.5 h-3.5 text-[#b45309]" />
            <span>{t.filters.regionLabel}</span>
          </div>
          
          <div className="inline-flex flex-wrap p-1 rounded-xl bg-[#f7f2ea] border border-[#e5d8c5]">
            <button
              onClick={() => onFilterChange({ ...filters, region: 'all' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.region === 'all'
                  ? 'bg-[#881337] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              {t.filters.all}
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, region: 'north' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.region === 'north'
                  ? 'bg-[#881337] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              {t.filters.north}
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, region: 'central' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.region === 'central'
                  ? 'bg-[#881337] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              {t.filters.central}
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, region: 'south' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.region === 'south'
                  ? 'bg-[#881337] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              {t.filters.south}
            </button>
          </div>
        </div>

        {/* Title Filter: NNND / NNƯT */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78350f] shrink-0 mr-1">
            <Award className="w-3.5 h-3.5 text-[#b45309]" />
            <span>{t.filters.titleLabel}</span>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-[#f7f2ea] border border-[#e5d8c5]">
            <button
              onClick={() => onFilterChange({ ...filters, title: 'all' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.title === 'all'
                  ? 'bg-[#881337] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              {t.filters.all}
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, title: 'NNND' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.title === 'NNND'
                  ? 'bg-[#b45309] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              NNND
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, title: 'NNƯT' })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filters.title === 'NNƯT'
                  ? 'bg-[#b45309] text-white shadow-2xs'
                  : 'text-[#574438] hover:text-[#2c1810] hover:bg-white/60'
              }`}
            >
              NNƯT
            </button>
          </div>
        </div>

      </div>

      {/* Row 2: Category Chips & Reset */}
      <div className="pt-2 border-t border-[#f0e6d8] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-[#78350f] font-semibold mr-1">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.filters.categoryLabel}</span>
          </div>

          <button
            onClick={() => onFilterChange({ ...filters, category: 'all' })}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
              filters.category === 'all'
                ? 'bg-[#881337] text-white border-[#881337]'
                : 'bg-white text-[#574438] border-[#e5d8c5] hover:border-[#881337]'
            }`}
          >
            {t.filters.allCategories}
          </button>

          <button
            onClick={() => onFilterChange({ ...filters, category: 'performing_arts' })}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
              filters.category === 'performing_arts'
                ? 'bg-[#881337] text-white border-[#881337]'
                : 'bg-white text-[#574438] border-[#e5d8c5] hover:border-[#881337]'
            }`}
          >
            {t.filters.performing}
          </button>

          <button
            onClick={() => onFilterChange({ ...filters, category: 'craftsmanship' })}
            className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
              filters.category === 'craftsmanship'
                ? 'bg-[#881337] text-white border-[#881337]'
                : 'bg-white text-[#574438] border-[#e5d8c5] hover:border-[#881337]'
            }`}
          >
            {t.filters.craft}
          </button>
        </div>

        {/* Counter and Reset button */}
        <div className="flex items-center gap-3">
          <span className="text-[#786b62]">
            {t.filters.activeFilterCount.replace('{count}', resultCount.toString())}
          </span>

          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#fee2e2] text-[#991b1b] hover:bg-[#fecaca] font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.filters.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
